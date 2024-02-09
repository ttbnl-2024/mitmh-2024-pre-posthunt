#!/usr/bin/env python3

import os
import re
import typing
from collections import defaultdict

import discord

from tph.constants import IS_PYODIDE

if IS_PYODIDE:
    DISCORD_BOT_ENV: dict[str, str] = defaultdict(str)
else:
    from tph.secrets import DISCORD_BOT_ENV


# We want to capture newlines too in all these examples.
NEW_HINT = re.compile(
    r"<t:[^>]*> Hint #(\d+) requested on [^\n]*\n(.*)", flags=re.DOTALL
)
HINT_CLAIMED = re.compile(r"Hint #(\d+) claimed by (.*)")
HINT_UNCLAIMED = re.compile(r"Hint #(\d+) was unclaimed(.*)", flags=re.DOTALL)
HINT_CLOSED = re.compile(
    r"<t:[^>]*> Hint #(\d+) resolved by ([^\n]*)\n.*\*\*Response:\*\* (.*)",
    flags=re.DOTALL,
)

# The regex groupings are at the same indices as the HINT regex groupings to make
# code reuse easier.
NEW_EMAIL = re.compile(r"<t:[^>]*> Email #(\d+) sent by [^\n]*\n(.*)", flags=re.DOTALL)
EMAIL_CLAIMED = re.compile(r"Email #(\d+) \[.*\] claimed by (.*)")
EMAIL_UNCLAIMED = re.compile(r"Email #(\d+) \[.*\] was unclaimed(.*)", flags=re.DOTALL)
EMAIL_CLOSED = re.compile(
    r"<t:[^>]*> Email #(\d+) resolved by ([^\n]*)\n.*\*\*Response:\*\* (.*)",
    flags=re.DOTALL,
)

NEW_INTERACTION = re.compile(
    r"<t:[^>]*> Interaction #(\d+) triggered by [^\n]*\n(.*)", flags=re.DOTALL
)
INTERACTION_CLAIMED = re.compile(r"Interaction #(\d+) claimed by (.*)")
INTERACTION_UNCLAIMED = re.compile(
    r"Interaction #(\d+) was unclaimed(.*)", flags=re.DOTALL
)
INTERACTION_CLOSED = re.compile(
    r"<t:[^>]*> Interaction #(\d+) resolved by (.*)",
    flags=re.DOTALL,
)

# The bot will only parse messages in this channel.
BOT_SPAM_CHANNEL = int(DISCORD_BOT_ENV["BOT_SPAM_CHANNEL"])

HINT_CHANNEL = int(DISCORD_BOT_ENV["HINT_CHANNEL"])
EMAIL_CHANNEL = int(DISCORD_BOT_ENV["EMAIL_CHANNEL"])
INTERACTION_CHANNEL = int(DISCORD_BOT_ENV["INTERACTION_CHANNEL"])

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)


class MessageInfo:
    # Info we want to maintain about claimable + resolvable objects.
    def __init__(self, header, full_text, channel_id):
        self.header = header
        self.text = full_text
        self.claimer = ""
        self.response = ""
        self.channel: discord.TextChannel = client.get_channel(channel_id)  # type: ignore
        self.message = None

    async def send_or_update(self) -> None:
        # TODO - have this back-link to the prior message if it's a follow-up.
        embed = self.make_embed()
        if self.message is None:
            # Send message
            self.message = await self.channel.send(content=self.text, embed=embed)
        else:
            # Edit it in place.
            await self.message.edit(embed=embed)

    def make_embed(self) -> discord.Embed:
        if not self.claimer:
            return discord.Embed(
                title="Unclaimed", description="", color=discord.Colour.red()
            )
        elif not self.response:
            # claimed but unresponded
            return discord.Embed(
                title=f"Claimed by {self.claimer}",
                description="",
                color=discord.Colour.gold(),
            )
        else:
            # Replied
            return discord.Embed(
                title=f"Resolved by {self.claimer}",
                description=self.response,
                color=discord.Colour.green(),
            )

    async def unclaim(self) -> None:
        self.claimer = ""
        await self.send_or_update()

    async def claim(self, claimer) -> None:
        self.claimer = claimer
        await self.send_or_update()

    async def respond(self, response) -> None:
        self.response = response
        await self.send_or_update()


# These are global dicts that maintain state about pairings between Discord messages
# and models in the database. We do this because it's easier to run the Discord message bot
# in a separate job from the Django one + we don't usually need to have detailed access to
# the DB. The downside is that if the bot is restarted, we lose the pairings.
hint_pairings: dict[str, MessageInfo] = {}
email_pairings: dict[str, MessageInfo] = {}
interaction_pairings: dict[str, MessageInfo] = {}


@client.event
async def on_ready() -> None:
    print(f"Logged in as {client.user}")


async def add_react(channel, id_, react) -> None:
    old_message = await channel.fetch_message(id_)
    await old_message.add_reaction(react)


async def handle_reactions(
    message: discord.Message,
    model_name: str,
    global_dict: dict[str, MessageInfo],
    channel_id: int,
    new_regex: typing.Pattern,
    claimed_regex: typing.Pattern,
    unclaimed_regex: typing.Pattern,
    closed_regex: typing.Pattern,
) -> None:
    maybe_match = new_regex.search(message.content)
    if maybe_match:
        # New object.
        object_id = maybe_match.group(1)
        full_text = maybe_match.group(0)
        message_info = MessageInfo(object_id, full_text, channel_id)
        await message_info.send_or_update()
        global_dict[object_id] = message_info

    maybe_match = claimed_regex.search(message.content)
    if maybe_match:
        object_id = maybe_match.group(1)
        claimer = maybe_match.group(2)
        if object_id in global_dict:
            await global_dict[object_id].claim(claimer)
        else:
            print(f"Did not find {model_name} {object_id} in pairings dict")

    maybe_match = unclaimed_regex.search(message.content)
    if maybe_match:
        object_id = maybe_match.group(1)
        if object_id in global_dict:
            await global_dict[object_id].unclaim()

    maybe_match = closed_regex.search(message.content)
    if maybe_match:
        object_id = maybe_match.group(1)
        # the else case handles interactions
        response = maybe_match.group(3) if len(maybe_match.groups()) >= 3 else "n/a"
        if object_id in global_dict:
            await global_dict[object_id].respond(response)


@client.event
async def on_message(message) -> None:
    if message.channel.id != BOT_SPAM_CHANNEL:
        return

    if message.author == client.user:
        return

    await handle_reactions(
        message,
        "Hint",
        hint_pairings,
        HINT_CHANNEL,
        NEW_HINT,
        HINT_CLAIMED,
        HINT_UNCLAIMED,
        HINT_CLOSED,
    )
    await handle_reactions(
        message,
        "Email",
        email_pairings,
        EMAIL_CHANNEL,
        NEW_EMAIL,
        EMAIL_CLAIMED,
        EMAIL_UNCLAIMED,
        EMAIL_CLOSED,
    )
    await handle_reactions(
        message,
        "Interaction",
        interaction_pairings,
        INTERACTION_CHANNEL,
        NEW_INTERACTION,
        INTERACTION_CLAIMED,
        INTERACTION_UNCLAIMED,
        INTERACTION_CLOSED,
    )


if __name__ == "__main__":
    server_environment = os.environ.get("SERVER_ENVIRONMENT", "dev")
    if server_environment == "prod":
        TOKEN = DISCORD_BOT_ENV["TOKEN"]
        client.run(TOKEN)
    else:
        print(
            f"Discord bot disabled on {server_environment}. For local testing, export"
            " SERVER_ENVIRONMENT=prod first."
        )
