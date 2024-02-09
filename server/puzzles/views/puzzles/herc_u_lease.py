from functools import cache

from puzzles.context import AuthedContextHttpRequestWithPuzzle
from puzzles.models import Puzzle, Team
from puzzles.rounds.utils import rounds_by_act
from puzzles.utils import get_encryption_keys

SLUG = "herc-u-lease"


@cache
def get_puzzle():
    return Puzzle.objects.get(slug=SLUG)


def get_initial_data(request: AuthedContextHttpRequestWithPuzzle, team: Team):
    rounds = [r for a in rounds_by_act(team.unlocked_rounds()) for r in a]
    has_overworld = any(r.act == 2 for r in rounds)
    data = {}

    if has_overworld:
        data["submissionLink"] = (
            "https://docs.google.com/forms/d/e/1FAIpQLSd7Wn1vW65jnYQwlO8OWzoa4JiEI0oogd5gpj9PZLhm5d2JUQ/viewform"
        )
    else:
        data["submissionLink"] = ""

    data["tasks"] = [
        {
            "info": (
                "REQUEST: My reinterpretation of Medea as a Story set in the West Side"
                ' of NYC needs a song about the heroine! - Euripides "Baz" of Salamis'
            ),
            "pay": "2 drachma",
        },
        {
            "info": (
                "Can you roll a boulder up a hill, just so I know if it's actually"
                " possible? - Sisyphus"
            ),
            "pay": "4 obol, + 3 obol per 10 degrees of incline",
        },
        {
            "info": (
                "Hell Kennel Club is accepting entries for best-in-show, 3 headed"
                " class. Send us photos of your Cerberus!"
            ),
            "pay": (
                "3 obol per Cerberus with 2 obol bonus for costume, max (team size/3)"
                " photos,"
            ),
            "extrainfo": "3 heads mandatory, costumes appreciated.",
        },
        {
            "info": (
                "Last year's hunt had some good tips for making grass grow, and my lawn"
                " is looking peaky. Show us something you submitted to Bootes' touch"
                " grass challenge. - Demeter"
            ),
            "pay": "points value = # of obols received for this task",
        },
        {
            "info": (
                "Have you been transformed into an animal by angry gods or witches?"
                " Join the Society of Involuntary Polymorphs!"
            ),
            "pay": "2 drachma",
            "extrainfo": (
                "Please include before and after photos of yourself or footage of the"
                " transformation and an explanation for why you ended up this way."
            ),
        },
        {
            "info": (
                "HIRING: Personal chef to make me dinner. This meal better rock! -"
                " Cronus"
            ),
            "pay": "1 drachma",
            "extrainfo": "Rocks required",
        },
        {
            "info": (
                "Film a video for the Time Traveler's Survival Guide series showing how"
                " to avoid a war by disguising yourself in drag."
            ),
            "pay": "2 drachma",
        },
        {
            "info": "Untie this really tight knot for me, please? - Gordius",
            "pay": "3 obol",
        },
        {
            "info": (
                "Did you know that Boston used to have models of the solar system"
                " throughout the city? Find those locations and photograph yourself"
                " with a representation of the planet. - Boston Museum Appreciation"
                " Society"
            ),
            "pay": "2 obols per photograph, + 1 drachma for complete set",
            "extrainfo": (
                "Some have been destroyed or are no longer accessible- get as close to"
                " where it used to be"
            ),
        },
        {
            "info": (
                "Show us photos from your vacation to the Underworld (the deepest place"
                " on earth you've been to) - Underworld Traveler Magazine"
            ),
            "pay": (
                "3 obol + 3 obol per 50m below the earth's surface (capped at 36 obol),"
                " + 2 obol for writing a Yelp review"
            ),
        },
        {
            "info": (
                "Danaid Water Transport Service is hiring people to carry water from"
                " one bucket to another using a sieve/colander. Why a colander? Why"
                " not!"
            ),
            "pay": "1 drachma",
            "extrainfo": (
                "Carry water from one bucket to another using a sieve/colander"
            ),
        },
        {
            "info": (
                "Due to unfortunate circumstances, I need you to build Rome. You have"
                " one day. - Nero"
            ),
            "pay": "3 drachma",
        },
    ]

    if has_overworld:
        data["tasks"].extend(
            [
                {
                    "info": (
                        "I'm in the mood for a new mocktail. Send us a recipe, extra"
                        " love it's purple. - Dionysus"
                    ),
                    "pay": "1 drachma for recipe, + 3 obol for purple",
                    "extraInfo": (
                        "Hey, this organizing stuff is hard work! Help Dionysus unwind"
                        " by making him a mocktail. At least one of your ingredients"
                        " must be caffeinated."
                    ),
                },
                {
                    "info": (
                        "Submissions are now open for annual Greek cuisine-Italian"
                        " cuisine debate. - MIT, after the University of Chicago's"
                        " tradition"
                    ),
                    "pay": "2 drachma",
                },
                {
                    "info": (
                        "I need some help blending into the crowd. Can your team look"
                        " as identical as possible? - Spartacus"
                    ),
                    "pay": "2 obol per Spartacus, max. (team size/3)",
                    "extraInfo": (
                        "As many members of your team should dress as similar as"
                        " possible.."
                    ),
                },
                {
                    "info": (
                        "Cool crowns for champions! Make a victory wreath out of any"
                        " material and show your victor being crowned. Your competition"
                        " might become part of the next Olympics! - Sports Frescoed"
                        " Magazine"
                    ),
                    "pay": "2 obol per type of material used, to maximum of 6",
                },
                {
                    "info": (
                        "Need landscape help to make a mountain out of a molehill. Some"
                        " guy here is getting used to his torture mountain and we can't"
                        " have that. - Furies"
                    ),
                    "pay": (
                        "2 drachma for completion, + up to 1 drachma for how closely"
                        " you get to geometric perfection"
                    ),
                    "extraInfo": (
                        "Your mountain should be very conical and contain at least"
                        " (team size/2) cm^3 of a dirt-like material."
                    ),
                },
                {
                    "info": (
                        "Wing design competition: Make a pair of wings, with bonus"
                        " points for flair and flightworthiness. - Daedalus and Son"
                        " Design Firm"
                    ),
                    "pay": (
                        "1 drachma + 2 for flightworthiness + up to 1 drachma for style"
                    ),
                },
                {
                    "info": (
                        "Be a collaborator on the Pandora network! Film an unboxing"
                        " video where you review stuff."
                    ),
                    "pay": "3 obol per object review, +2 obol for unifying theme",
                    "extraInfo": (
                        "Send us a video where you unbox and review ceil(team size/10)"
                        " objects. Bonus available if all objects have a unifying"
                        " theme."
                    ),
                },
                {
                    "info": (
                        "I need you to make a golden apple, don't ask what it's for. -"
                        " Eris"
                    ),
                    "pay": "3 obols",
                },
                {
                    "info": (
                        "Minerva's Innovation Trial: Submit a battle plan/strategy for"
                        " capturing an Athena cluster."
                    ),
                    "pay": "1 drachma",
                },
                {
                    "info": (
                        "Gods Weekly magazine seeking paparazzi photos. Take a picture"
                        " of yourself in front of an establishment named for a Greek or"
                        " Roman god."
                    ),
                    "pay": (
                        "3 obol per unique deity + 1 drachma for dressing up as the god"
                        " in question"
                    ),
                    "extraInfo": (
                        "Show yourself next to a Greek or Roman god. Maximum (team"
                        " size/10) photos"
                    ),
                },
                {
                    "info": (
                        'CASTING: "One Eye for the Greek Guy", a special benefit for'
                        " the Ocularly Uncomfortable Cyclopean Hospital. Submit your"
                        " audition video."
                    ),
                    "pay": "2 drachma",
                },
                {
                    "info": (
                        "Help needed: undo 1 full day's worth of weaving. - Penelope"
                    ),
                    "pay": "3 obols",
                },
                {
                    "info": (
                        "Ring toss hard mode - nobody can win this new carnival game!"
                    ),
                    "pay": "3 drachma",
                    "extraInfo": (
                        "Throw something through 12 rings, each one held by a separate"
                        " person"
                    ),
                },
                {
                    "info": (
                        "Hide a bunch of Greek things inside a horse. - Troy Custom"
                        " Pinatas Inc"
                    ),
                    "pay": "2 drachma",
                },
                {
                    "info": "Let's break a boat launch record! - Helen",
                    "pay": "2 drachma",
                    "extraInfo": (
                        "Launch N boats with your face, where N is your team size/10"
                    ),
                },
                {
                    "info": (
                        "Midas Touch interior designers seeking items to fill our"
                        " showrooms. Note our color scheme."
                    ),
                    "pay": "2 obol per object, max. (team size/5) objects",
                    "extraInfo": (
                        "Show us photos golden versions of things that are not usually"
                        " golden."
                    ),
                },
                {
                    "info": (
                        "Help needed to smuggle some hot property. Inconspicuousness"
                        " mandatory. -Prometheus"
                    ),
                    "pay": "2 drachma",
                    "extraInfo": (
                        "Must bring fire at least (team size/10) miles. Fire must be"
                        " well disguised and still lit at destination."
                    ),
                },
                {
                    "info": (
                        "Narcissus Gallery is seeking self-portraits for our grand"
                        " opening."
                    ),
                    "pay": "1 drachma",
                    "extraInfo": "All medium accepted",
                },
                {
                    "info": (
                        "HIRING: Representatives of modern literary/musical forms!"
                        " Submit an application (video or written) with a sample of"
                        " your work. - Muses"
                    ),
                    "pay": "1 drachma + 1 bonus drachma for video",
                },
                {
                    "info": (
                        "Hercules had to go to the ends of the earth to bring back a"
                        " cow. Show us something (in person or in video) that you've"
                        " brought back from the furthest away you can."
                    ),
                    "pay": (
                        "1 obol per 500 miles of distance between your location and"
                        " site of origin, capped at 24 obols. Space bonus TBD based on"
                        " our panel's assessment of how amazing it is."
                    ),
                    "extraInfo": (
                        "Bonus points for something you brought back from space."
                    ),
                },
                {
                    "info": (
                        "REQUESTING: zoo habitat designs for any mythical creature. -"
                        " The Society for the Preservation of Mythical Creatures"
                    ),
                    "pay": "1 drachma for design plan, + 1 drachma for diorama",
                    "extraInfo": (
                        "Don't forget enrichment, diet plan, containment and safety"
                        " measures"
                    ),
                },
                {
                    "info": (
                        "I'm in the swanhouse again. Go make a gift that'll make Hera"
                        " not mad at me anymore. - Zeus"
                    ),
                    "pay": "2 drachma",
                },
                {
                    "info": (
                        "Send me a puzzle written by your Chief Puzzle Writer. -"
                        " Incitatus"
                    ),
                    "pay": "2 drachma",
                    "extraInfo": (
                        "If you are unable to find a horse to fulfill the position of"
                        " Chief Puzzle Writer, any other non-human animal is eligible"
                        " for the position"
                    ),
                },
                {
                    "info": (
                        "Submit your Atlantis content for a chance to be featured in"
                        " the History Channel's next documentary."
                    ),
                    "pay": "1 drachma for task 1, 2 drachma for task 2",
                    "extraInfo": (
                        "1 drachma: Our audience is tired of hearing about Malta,"
                        " Santorini, and the Atlantic Ocean. Send us a new theory about"
                        " Atlantis' location. String and paper pinned to a bulletin"
                        " board means you're a true professional. 2 drachma: Actual"
                        " footage of Atlantis sinking"
                    ),
                },
            ]
        )

    solved = any(
        ps.puzzle.slug == SLUG for ps in request.context.correct_puzzle_submissions
    )

    if solved and any(r.slug == "everglades" for r in rounds):
        data["maybeAvailable"] = True
        data["cryptKeys"] = get_encryption_keys(["herc-u-lease"])

    return data
