import datetime

from django.conf import settings
from django.utils import timezone

# FIXME: update hunt config!

# included in various templates. NOTE, sometimes appears with a "the" before
# it, maybe check those are what you want.
HUNT_TITLE = "MIT Mystery Hunt 2024"

# included in various templates and displayed on the static site
HUNT_ORGANIZERS = "TTBNL"

# included in various templates and set as reply-to for automatic emails
HUNT_CONTACT_EMAIL = f"help@{settings.EMAIL_USER_DOMAIN}"

# the sender from which automatic emails are sent; your mail sending service
# might require you set this to something (check settings/base.py to put your
# actual mail sending service credentials)
MESSAGING_SENDER_EMAIL = f"info@{settings.EMAIL_USER_DOMAIN}"

# Ratelimiting, unlimited guesses.
UNLIMITED_GUESSES = True
MAX_GUESSES_PER_PUZZLE = 999999

# DEEP value used to indicate that you can see everything, e.g., the hunt is over.
DEEP_MAX = float("inf")

# FIXME: Hard-coded puzzle config
# Slug for the metametas.
META_META_SLUGS = ("metameta-slug",)
DONE_SLUG = "road-trip-redux"

STANDARD_OVERWORLD = [
    "minneapolis-st-paul",
    "yellowstone",
    "las-vegas",
    "hell",
    "mississippi-river",
    "newport",
    "nashville",  # superround
    "oahu",
    "nyc",
    "olympic",
    "sedona",
    "texas",
]
GLOBAL_OVERWORLD_DEEP = {
    "minneapolis-st-paul": 10,
    "yellowstone": 10,
    "las-vegas": 10,
    "hell": 10,
    "newport": 10,
    "mississippi-river": 10,
    "oahu": 10,
    "nyc": 10,
    "olympic": 10,
    "sedona": 10,
    "texas": 10,
    # Only the first 2 puzzles in hydra can unlock from global
    "everglades-first-layer": 10,
    # Only the first round of nashville can unlock from global
    "mercury": 10,
    # each overworld puzzle also contributes to fish unlocks
    "the-hole-in-the-ceiling-of-hades": 10,
}

# FIXME: Set up deep unlock structure.
# round slug -> {key: deep}. There can be multiple keys, and keys can be arbitrary strings
# (do not need to be round slugs).
# We expect all rounds to specify deep explicitly here, but code will default to
# adding deep to the round.slug
# read this struct as:
# "each puzzle in {round_slug} round will contribute {value} deep to key {deep_key}"
DEEP_PER_ROUND = {
    # Fish: 5 global
    "the-hole-in-the-ceiling-of-hades": {"hera-meta": 1} | {
        k: 5 for k in GLOBAL_OVERWORLD_DEEP
    },
    # Underworld
    "the-throne-room": {
        "underworld": 100,
        "cerberus-meta": 1,
    },
    "rivers-of-the-dead": {
        "underworld": 100,
        "charon-meta": 1,
    },
    "the-underworld-court": {
        "underworld": 100,
        "judges-meta": 1,
    },
    # Nashville R1, not in STANDARD_OVERWORLD
    "mercury": {
        "mercury-r1-meta": 1,
        "mercury-r2-meta": 1,
        # contibute towards unlocking puzzles in nashville r2
        "mercury-duet": 1,
        **GLOBAL_OVERWORLD_DEEP,
        "mercury": 100,  # must come after GLOBAL
    },
    # Nashville R2, not in STANDARD_OVERWORLD
    "mercury-duet": {
        "mercury-r2-meta": 1,
        # unlock more puzzles in the same round
        "mercury-duet": 1,
        **GLOBAL_OVERWORLD_DEEP,
    },
    # events
    "events": {
        # events contribute 100 deep for road trip redux
        # in total
        "road-trip-redux": 25,
    },
    # Each puzzle in one of the rounds in STANDARD_OVERWORLD will contribute 10 deep
    # to each overworld round that isn't its own; 100 deep to its own overworld round;
    # and 1 to its round meta.
    **{k: GLOBAL_OVERWORLD_DEEP | {k: 100, f"{k}-meta": 1} for k in STANDARD_OVERWORLD},
}

MAIN_HYDRA_DEEP_PER_SLUG = {
    slug: {f"{node}L": 1, f"{node}R": 1, **GLOBAL_OVERWORLD_DEEP}
    for slug, node in [
        # 1
        ("the-other-scottish-play", "hydra-L"),
        ("how-to-quadruple-your-money-in-hollywood", "hydra-R"),
        # 2
        ("mausolea", "hydra-LL"),
        ("amykos-briefs", "hydra-LR"),
        ("isle-of-misfit-puzzles", "hydra-RL"),
        ("schrodingers-maze", "hydra-RR"),
        # 3
        ("do-i-hear-a-waltz", "hydra-LLL"),
        ("monsters", "hydra-LLR"),
        ("realize-it", "hydra-LRL"),
        ("de-fence", "hydra-LRR"),
        ("scan", "hydra-RLL"),
        ("sumantle", "hydra-RLR"),
        ("until-they-come-home", "hydra-RRL"),
        ("the-champion", "hydra-RRR"),
    ]
}

# Level 4
for i in range(1, 17):
    loc = bin(i - 1)[2:].rjust(4, "0").replace("0", "L").replace("1", "R")
    MAIN_HYDRA_DEEP_PER_SLUG[f"hydra-head-{i}"] = {
        f"hydra-{loc}L": 1,
        f"hydra-{loc}R": 1,
        "hydra-meta": 1,
        **GLOBAL_OVERWORLD_DEEP,
    }

# Level 5
for i in range(17, 49):
    loc = bin(i - 17)[2:].rjust(5, "0").replace("0", "L").replace("1", "R")
    MAIN_HYDRA_DEEP_PER_SLUG[f"hydra-head-{i}"] = {
        f"hydra-{loc}L": 1,
        f"hydra-{loc}R": 1,
        "hydra-meta": 1,
        **GLOBAL_OVERWORLD_DEEP,
    }

# Level 6
for i in range(49, 113):
    loc = bin(i - 49)[2:].rjust(6, "0").replace("0", "L").replace("1", "R")
    MAIN_HYDRA_DEEP_PER_SLUG[f"hydra-head-{i}"] = {
        # Technically not necessary
        f"hydra-{loc}L": 1,
        f"hydra-{loc}R": 1,
        "hydra-meta": 1,
        **GLOBAL_OVERWORLD_DEEP,
    }


# puzzle/story slug -> {key: deep}. Takes priority over round.
# underworld-escape is used to unlock the underworld runaround
# as well as an alternative method of unlocking the-hole-in-the-ceiling-of-hades
DEEP_PER_SLUG = {
    # Underworld metas
    "three-really-good-boys": {
        "cerberus-story": 1,
        "underworld-escape": 1,
        "road-trip-redux": 1,
    },
    "charon": {
        "charon-story": 1,
        "underworld-escape": 1,
        "road-trip-redux": 1,
    },
    "judges-of-the-underworld": {
        "judges-story": 1,
        "underworld-escape": 1,
        "road-trip-redux": 1,
    },
    # Hera meta
    "the-myriad-gamut-of-hera": {
        "hera-story": 1,
        "road-trip-redux": 1,
    },
    # runaround
    "escaping-the-underworld": {
        "underworld-escape": 1,
    },
    # Nashville R1 meta unlocks R2
    "mercury": {
        "mercury-duet": 10,
    },
    # Nashville R2 meta unlocks metameta
    "duet": {
        "nashville-metameta": 1,
    },
    # Overworld metas
    # oahu
    "aphrodites-plutonic-affection-connection": {
        "aphrodite-story": 1,
        "road-trip-redux": 1,
    },
    # minneapolis-st-paul
    "gemini": {
        "gemini-story": 1,
        "road-trip-redux": 1,
    },
    # las-vegas
    "shade-of-wealth": {
        "argonauts-story": 1,
        "road-trip-redux": 1,
    },
    # yellowstone
    "medusas-lair": {
        "artemis-story": 1,
        "road-trip-redux": 1,
    },
    # sedona
    "the-shala-of-thermopylae": {
        "hygeia-story": 1,
        "road-trip-redux": 1,
    },
    # mississippi-river
    "scylla-and-charybdis": {
        "poseidon-story": 1,
        "road-trip-redux": 1,
    },
    # texas
    "appease-the-minotaur": {
        "minotaur-story": 1,
        "road-trip-redux": 1,
    },
    # everglades
    "hydra": {
        "hydra-story": 1,
        "road-trip-redux": 1,
    },
    # nyc
    "scheduling-conflicts": {
        "janus-story": 1,
        "road-trip-redux": 1,
    },
    # newport
    "persephone": {
        "persephone-story": 1,
        "road-trip-redux": 1,
    },
    # olympic
    "gaia": {
        "gaia-story": 1,
        "road-trip-redux": 1,
    },
    # nashville
    "a-night-at-the-opera": {
        "mercury-story": 1,
        "road-trip-redux": 1,
    },
    # hell
    "a-rift-in-hades": {
        "hell-story": 1,
        "road-trip-redux": 1,
    },
    **MAIN_HYDRA_DEEP_PER_SLUG,
}

EVENTS_ROUND_SLUG = "events"
UNDERWORLD_RUNAROUND_ROUND_SLUG = "escaping-the-underworld"
SCAVENGER_HUNT_ROUND_SLUG = "herc-u-lease"
