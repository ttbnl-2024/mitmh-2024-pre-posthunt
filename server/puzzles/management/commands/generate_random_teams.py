# Note: for simplicity, we don't try to check uniqueness constraints when
# randomly generating stuff. If we get unlucky and generate something
# non-unique, just try again.
import random
from datetime import datetime

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.utils import timezone

from puzzles.models import Puzzle, PuzzleSubmission, Survey, Team

User = get_user_model()

# for flavor, and to test unicode // http://racepics.weihwa.com/
emoji = "💥💫🐒🦍🐕🐺🦊🐈🦁🐅🐆🐎🦄🦌🐂🐃🐄🐖🐗🐏🐑🐐🐪🐘🦏🐁🐀🐹🐇🐿🦇🐻🐨🐼🐾🦃🐔🐓🐤🐦🐧🕊🦅🦆🦉🐸🐊🐢🦎🐍🐉🐳🐋🐬🐟🐠🐡🦈🐙🐚🐌🦋🐛🐜🐝🐞🕷🕸🦂💐🌸💮🌹🌺🌻🌼🌷🌱🌲🌳🌴🌵🌾🌿☘🍀🍁🍃🍄🌰🦀🦐🦑🌐🌙⭐🌈⚡🔥🌊✨🎮🎲🧩♟🎭🎨🧵🎤🎧🎷🎸🎹🎺🎻🥁🎬🏹🌋🏖🏜🏝🏠🏤🏥🏦🏫🌃🏙🌅🌇🚆🚌🚕🚗🚲⚓✈🚁🚀🛸🎆"
adjectives = (
    "Alien Alpha Aquatic Avian Bio-Hazard Blaster Comet Contact Deep-Space Deficit"
    " Deserted Destroyed Distant Empath Epsilon Expanding Expedition Galactic Gambling"
    " Gem Genetics Interstellar Lost Malevolent Military Mining Mining New Old Outlaw"
    " Pan-Galactic Pilgrimage Pirate Plague Pre-Sentient Prosperous Public Radioactive"
    " Rebel Replicant Reptilian Research Scout Terraformed Terraforming Uplift".split()
)
nouns = (
    "Alliance Bankers Base Battle Bazaar Cache Center Code Colony Consortium Developers"
    " Earth Economy Engineers Exchange Factory Federation Fleet Fortress Guild Imperium"
    " Institute Lab Lair League Lifeforms Mercenaries Monolith Order Outpost Pact Port"
    " Program Project Prospectors Renaissance Repository Resort Robots Shop Sparta"
    " Stronghold Studios Survey Symbionts Sympathizers Technology Trendsetters Troops"
    " Warlord Warship World".split()
)
wrong_answers = [
    x + y
    for x in ["RED", "WRONG", "INCORRECT"]
    for y in ["", "ANSWER", "SOLUTION", "HERRING"]
]


def random_team_name():
    return "{}{}{} {} {} {}{}{}".format(
        random.choice(emoji),
        random.choice(emoji),
        random.choice(emoji),
        random.choice(adjectives),
        random.choice(nouns),
        random.choice(emoji),
        random.choice(emoji),
        random.choice(emoji),
    )


class Command(BaseCommand):
    help = "Randomly generate n teams for testing, complete with solves and surveys"

    def add_arguments(self, parser):
        parser.add_argument("num_teams", nargs=1, type=int)

    def handle(self, *args, **options):
        # Annotate every puzzle and every team with a rating to get a more
        # interesting and realistic scoreboard, where there are trends across
        # teams and puzzles.
        puzzles = [(p, random.random()) for p in Puzzle.objects.all()]
        n = options["num_teams"][0]
        teams = []
        for _ in range(n):
            username = f"team{random.randint(0, 10**10)}"
            team = Team(
                username=username,
                name=random_team_name(),
                creation_time=timezone.now(),
            )
            team.save()
            # Teams have a wider range of skill than puzzles.
            teams.append((team, random.random() * 2 + 0.05))

        for puzzle, puzzle_rating in puzzles:
            # Shuffle every time so puzzles don't all get solved by teams in a
            # consistent order and the bigboard looks nontrivial.
            random.shuffle(teams)
            for team, team_rating in teams:
                success_prob = team_rating - puzzle_rating

                if success_prob < 0:
                    continue

                for i in range(random.randint(0, 10)):
                    if random.random() < success_prob:
                        break
                    PuzzleSubmission(
                        team=team.spoilr_team,
                        puzzle=puzzle.spoilr_puzzle,
                        answer=wrong_answers[i],
                        status="incorrect",
                        used_free_answer=False,
                    ).save()

                if random.random() < success_prob:
                    PuzzleSubmission(
                        team=team.spoilr_team,
                        puzzle=puzzle.spoilr_puzzle,
                        answer=puzzle.normalized_answer,
                        status="correct",
                        used_free_answer=False,
                    ).save()

                    if random.random() < 0.75:
                        Survey(
                            team=team,
                            puzzle=puzzle,
                            fun=random.randint(1, 6),
                            difficulty=random.randint(1, 6),
                        ).save()

        self.stdout.write(self.style.SUCCESS(f"Randomly generated {n} teams"))
