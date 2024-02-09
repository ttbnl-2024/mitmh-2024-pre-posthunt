"""
All python code that we don't want to be public should go here.

All code that imports these should check for `not tph.constants.IS_PYODIDE` first
and have a fallback.
"""

# Should be Discord webhook URLs that look like
# https://discordapp.com/api/webhooks/(numbers)/(letters)
# From a channel you can create them under Integrations > Webhooks.
# They can be the same webhook if you don't care about keeping them in separate
# channels.
DISCORD_WEBHOOKS = {
    "BOT_SPAM": "",
    "SUBMISSION_ALERT": "",
    "CONGRAT_ALERT": "",
    "EVENT_ALERT": "",
    # Separate discord
    "FEEDBACK_ALERT": "",
    "ALERT_ALERT": "",
    "STAGING": "",
    # "EMAIL_RESPONSE_ALERT": "FIXME",
    # "HINT_ALERT": "FIXME",
    # "HINT_RESPONSE_ALERT": "FIXME",
    # "INTERACTION_ALERT": "FIXME",
    # "MORE_GUESS_ALERT": "FIXME",
}

# These are used by the Discord bot to auto-post hints and emails.
DISCORD_BOT_ENV = {
    # The bot will only parse messages in this channel.
    "BOT_SPAM_CHANNEL": "",
    # "BOT_SPAM_CHANNEL": "",  # staging bot-spam
    "HINT_CHANNEL": "",
    "EMAIL_CHANNEL": "",
    "INTERACTION_CHANNEL": "",
    "TOKEN": "",
}
