import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'dont-know-much';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          "Mark my words...!" begins a long-dead soul as you travel past, but
          all signs indicate that the significance of its supposedly-noteworthy
          anecdote is: Hardly Meriting Diminutive Brainspace.
        </FlavorText>
        <p>
          You've probably heard it said that you shouldn't run with scissors,
          but it's even worse to run with a 36-inch diamond-tipped drill bore,
          as local man Weston Newcastle found out the hard way. While out
          jogging with his bore over his shoulder, he failed to notice a pile of
          trash awaiting curbside pickup outside his neighbor's house. Tripping
          over an old bucket, Newcastle and his bore were launched straight at
          the sidewalk. Unfortunately, Newcastle's jogging suit got tangled up
          in both the bore and an old Maytag washing machine that was at the
          curb, which inexplicably started up, driving the bore further into the
          ground.
        </p>
        <p>
          A full fourteen minutes elapsed before Newcastle could extricate
          himself from his jogging suit, at which point a fountain of "black
          gold" came shooting out of the hole: Newcastle had struck a geyser
          completely by happenstance! Unfortunately, it was on his neighbor's
          property and not his own, plus he had not acquired the necessary
          prospecting permits, so he was still dealing with the legal fallout
          when he died in 2005 at the age of 90.
        </p>
        <hr className="my-4" />
        <p>
          Near this site, Wadsworth Richmond, a local boy of only six tender
          years, was picking dandelions when he received a sudden shock -
          literally! Amidst the dandelions and thistles, he beheld a strange
          plant that threw off bluish sparks of electricity. He ran home and
          told his father, a hobbyist, who fortunately believed the boy. With
          help from thick rubber gloves - and after more than a few
          uncomfortable shocks - the pair was able to not only collect the
          specimen in a pot, but cultivate it. Today, the pods of this
          mysterious plant, <i>zappicum teslae</i>, can be substituted for AAs
          in most devices.
        </p>
        <hr className="my-4" />
        <p>
          A few blocks from here, the larcenous criminals of a midsize Arkansas
          metropolitan area met for the first time in secret... and in fear.
          They had heard of the formation of the "Mounties" in Canada, who were
          rumored to "always get their man." The crooks became convinced that
          similar brigades of mounted law enforcement officials would soon
          patrol American streets, rounding up even the most accomplished
          cat burglars and pickpockets, and they became plagued with
          equinophobia. That night, they put pen to paper and formed the charter
          of this vigilante group virulently opposed to roans, piebalds, and
          even Shetland ponies. A true "kleptocracy" in the literal sense of the
          word, nine trustees nominated a captain, who was responsible for
          providing members with the locations of all stables and hitching posts
          within the city limits, ensuring the footpads could give them a wide
          berth while purloining their ill-gotten gains.
        </p>
        <hr className="my-4" />
        <p>
          One Tuesday in February (or maybe it was early March), the Levi
          brothers - Jester, Lester, and Sylvester - first arrived at the train
          station in this city on the Gulf. They claimed to be looking for work
          as ranch hands, despite there being no ranches anywhere near this port
          community. That was only the beginning of the devastation of
          outrageous humor that these hapless spur-clanking, chaps-wearing
          clowns would wreak on the community.
        </p>
        <p>
          Who can forget Jester's attempt at lassoing, which accidentally roped
          the mayor during a speech? Or the time Lester accidentally branded
          Sheriff Malice on the keister? What about that time when an
          intoxicated Sylvester challenged a streetlamp to a shootout... and
          lost? You'd think they were masters of the art of caricature, if they
          weren't so genuinely funny!
        </p>
        <hr className="my-4" />
        <p>
          One rainy day, near this site, Bruce Bruceville was strolling in the
          forest, looking for an opportune site to erect a smithy, when he
          happened upon a massive prehistoric edifice: a wall comprised of
          neatly-stacked bags. Poking a bag with his finger, he opened a tear
          through which a powdery substance began to pour out into the puddle of
          rainwater at his feet. After several minutes of standing in breathless
          awe, Bruceville thought to go and fetch additional townsfolk, but
          found himself completely unable to move. The powder had mixed with the
          water to form a congealed mass from which he could not extricate
          himself. A few days later, his cries alerted a search party, which
          laughingly chiseled him free even as they celebrated his fascinating
          archaeological find.
        </p>
        <hr className="my-4" />
        <p>
          At this ballpark in 1982, during the World Series, with the home team
          winning, a batch of improperly-cooked hot dogs sent many fans racing
          to the restrooms with acute intestinal distress. Their relief was
          short-lived, however, as a coincidental simultaneous flushing of all
          thirty-three toilets in the same restroom caused an event too
          disgusting to discuss in further detail, save to say that the
          "overflow seating" section was, on that occasion, aptly named.
        </p>
        <hr className="my-4" />
        <p>
          On this site, Grant Upland's wife - distracted, perhaps, by the new
          system of street lights outside her home - added several bulbs of
          garlic to the stew she would serve that night for dinner. However,
          even the tiniest amount of garlic was enough to cause severe bloating
          in Grant's sensitive digestive system. Multiple bulbs at once?
        </p>
        <p>
          The resulting explosion could be heard thirty-one miles away in
          Muncie, and reports of tremors rolled in from as far afield as
          Chicago. The Upland residence was leveled along with several city
          blocks around it. Surprisingly, there were no casualties, although
          many residents joined in a class action lawsuit against their
          insurance companies who refused to compensate them despite listing
          "wind damage" as a covered expense in their policies.
        </p>
        <hr className="my-4" />
        <p>
          One fateful evening, in that year, near this site, Claude Armstrong
          decided to make South Asian cuisine, cooking it over an open fire in a
          skillet. Yet when he reached over to bring the skillet to the table,
          he forgot to put on an oven mitt, and his bare hand closed around the
          hot heated metal. Giving a yelp that could be heard clear across West
          Texas, he flung the entire skillet - and its contents - across the
          room. Bright orange tikka masala sauce got all over the white
          curtains, the ivory carpet, and the pale green upholstery. The entire
          family was enormously petrified with fear that, due to a mere innocent
          attempt to grasp that particular part of the skillet, they would have
          to live with the orange stains forever. Later, it was discovered that
          a bit of baking soda and lemon juice did the trick, and their massive
          panic had been overblown.
        </p>
        <hr className="my-4" />
        <p>
          It all started out as an innocent trip to bag some trophy deer, but
          things quickly went south as Bradley, James, and John Paulding set off
          into the wilderness a few miles downriver from this location.
        </p>
        <p>
          Bradley had set up a perch in a large cottonwood tree, but was
          bothered by a crow who distracted him by hopping from branch to
          branch. Irritated, Bradley shot at the crow, but missed. However, his
          shot hit a hornet's nest in a nearby tree, which tumbled to the ground
          right in front of James, who had the good sense to wrap himself in a
          thick brown blanket to ward off the stingers.
        </p>
        <p>
          Unfortunately, lumbering about under the blanket made James look
          enough like a bear that John, emerging from a thicket, took a shot at
          him. Luckily, he missed James, but unluckily, he hit the branch on
          which Bradley was perched, causing him to fall to the ground,
          whereupon his rifle discharged, shooting James in the behind, causing
          him to yelp and run towards John, who - thinking he was being chased
          by a real bear - jumped into the river with James hot on his heels. In
          total, all the group got from their excursion was a broken leg, a mess
          of hornet stings, a case of pneumonia, thirty-five stitches... and no
          deer.
        </p>
        <hr className="my-4" />
        <p>
          In the most brazen act of subversive protest this early colony had
          ever seen, a group of twelve women who had nicknamed themselves the
          Colonial Dames determined that the angles of the roof at either end of
          this early edifice were simply too "hip" to be socially acceptable.
          However, lacking access to muskets with which to create a stir, they
          turned instead to their domestic tools. Using heated implements pulled
          from their fires, they crept here under cover of darkness to
          heat-adhere fabric shapes to the exterior walls, which spelled out
          "Cain Hated Gable." Vestiges of these words are still visible today.
        </p>
        <hr className="my-4" />
        <p>
          On a Thursday evening, less than six blocks from this spot, Ray Krumm
          first noticed that a bottle of Jack Daniels had gone missing from his
          pantry. That got him riled, and he accused everybody from the owners
          of the local saloon to his buddy Harry of stealing it. Ray was
          normally a decent fella, so all his neighbors turned the town
          topsy-turvy looking for that missing bottle. They - and their
          children, and their children's children - have searched for almost 150
          years, but they never did find it. Rumors that Ray's wife drank it but
          didn't want to own up have never been substantiated.
        </p>
        <hr className="my-4" />
        <p>
          Wilhelmina Barker, commonly known by her slightly-misspelled surname,
          was the most colorful character in town, from her chartreuse house
          with pink shutters to her preferred mode of transportation (the
          unicycle) to her obsession with proving that the Earth was shaped like
          a nautilus shell.
        </p>
        <p>
          Barker believed that if she could just fly high enough to snap a good
          Polaroid, she could prove her cockamamie theory to her neighbors. And
          so she painstakingly retrofitted an old fiberglass macaque (a leftover
          from a local putt-putt course that had gone out of business) into a
          rocket that she believed was capable of taking her to a 300-mile
          altitude.
        </p>
        <p>
          On this site on May 28, she put her plan into action, achieving
          liftoff and actually flying at least fourteen yards into the air
          before the macaque's fiberglass shell ruptured, sending Wilhelmina
          plummeting into a neighbor's wisteria bushes, whence she was recovered
          unharmed. Her blueprints for a giant flying marmoset were subsequently
          confiscated by local authorities.
        </p>
        <hr className="my-4" />
        <p>
          In perhaps the darkest chapter of this state's history, shipping
          magnate Bailey Grear - who had been embroiled in a five-month-long
          labor dispute with his engineers and firemen - declared in a fiery
          speech delivered near this spot that "trained chimps could do a better
          job... and would give me less trouble!" Unlike many titans of
          industry, however, Grear set out to prove his theory by sacking all of
          his human employees and actually hiring chimpanzees - as well as a few
          orangutans, capuchins, rhesuses, and members of other primate species.
        </p>
        <p>
          Forced to operate Grear's locomotives for long hours in exchange for
          nothing but bananas, the animals would often sit and gaze balefully
          out the train windows as they passed through cities and towns, leading
          to the moniker that came to encapsulate the owner's greed.
        </p>
        <p>
          The entire tragic story came to an abrupt end when Grear, as well as
          his animal trainer Burtz Neblett, were sat upon by a hippopotamus that
          they were attempting to train as a replacement bulldozer to build new
          track routes. The entire menagerie was liberated and allowed to roam
          free in a nearby canyon under a contract with the state Parks and
          Wildlife Department.
        </p>
        <hr className="my-4" />
        <p>
          On this spot on August 17th, local baker Hilgard Billings suddenly
          awoke at eight minutes past 3:00 AM, wondering if she had left her
          oven on. She raced away downstairs, but the oven was off. She climbed
          the stairs again, falling exhausted back into bed.
        </p>
        <hr className="my-4" />
        <p>
          Just as the Minutemen responded to the call to defend their homes in
          1776, so too will these heroes be forever immortalized for their
          valiant attempt to root a bushy-tailed rodent out of Old Mrs. Tod's
          cluttered attic.
        </p>
        <p>
          The scurrying to and fro was keeping the poor old widow up at night,
          until a group of seventeen men arrived in response to her
          advertisement in the local <i>Cincinnati Herald</i>. Although they
          turned the attic topsy-turvy, all they found were a cache of acorns
          and some stray patches of fur. Confident they'd scared off the
          rogue <i>sciuridae</i>, they departed, only to have the widow report
          that it sounded like an entire legion of the critters had moved in.
          Larger and larger groups of searchers arrived on a daily basis, and
          before long, 1,300 eager would-be exterminators had torn up
          floorboards, roof shingles, and plaster in a vain attempt to locate
          the animals.
        </p>
        <p>
          That night, as all 1,300 lay in ambush behind an old steamer trunk,
          they realized to their chagrin that the attic window had been open the
          whole time, as the gleeful varmint hopped in through it and began to
          frolic. The resulting barrage of shots somehow all missed, but the
          furry miscreant did flee in terror all the way to Brown County, it's
          said. Or perhaps it was just the shutting of the window that finally
          allowed the old lady to get a good night's rest.
        </p>
        <hr className="my-4" />
        <p>
          Although it is rare for a landlocked location to have a maritime
          mascot, for many years on this site, the massive pinniped named
          Fogarty welcomed Capitol visitors with his cheerful barks and appetite
          for white bass. Fogarty was so popular that he was even designated as
          "official" by the legislature.
        </p>
        <p>
          But all that changed on the night of June 11, when Fogarty disappeared
          from the fountain he called home. A 250-pound marine mammal doesn't
          just wander off across the plains, of course, but authorities had no
          idea who could have taken him... nor how... nor why anyone would even
          want to. No ransom note was ever delivered, and although police
          interviewed fifty-one suspects, they were never able to ascertain the
          fate of Fogarty, which remains a mystery to this day.
        </p>
        <hr className="my-4" />
        <p>
          On this site, the parents of young Frederick Carroll finally coaxed
          him onto the potty after a week of refusals. When their son emerged
          from the bathroom, he only said, "Uh-oh." Unfortunately, not only his
          parents, but all of Mountain City soon found out what he meant, as the
          noxious odor quickly filled the house, then the neighborhood, and soon
          - thanks to prevailing northwesterly winds - the entire town. It took
          six teams of firefighters, dressed in full hazmat gear, and armed with
          gallons of peppermint extract and double-potent Axe Body Spray, to
          infiltrate the bathroom and remove "That Noxious Substance" (as it had
          been euphemistically nicknamed) and encase it in a concrete bunker
          several hundred feet below ground.
        </p>
        <hr className="my-4" />
        <p>
          On this site occurred perhaps the greatest calamity ever to befall
          Piney Point, as Mrs. William Inigoes planted an entire flowerbed in
          the front yard of her converted lighthouse home with{' '}
          <i>Flaming Parrot</i> bulbs, and nary a single bulb sprouted, causing
          her to place second in the Piney Point Annual Home &amp; Garden
          Competition, breaking her prior perfect record of twenty-six
          consecutive blue ribbons. We shall never forget!
        </p>
        <hr className="my-4" />
        <p>
          Near this place, in 1636, several gentlemen of not-inconsequential
          musical talent decided to hold a multi-day "Feftival of Melodies Mofte
          Merrie" at Eliot Rock, a radical notion given the Puritan culture
          prevalent in the area at the time. Little did they know that news of
          their effort would spread throughout the region, resulting in their
          small "Rock festival" being attended by hundreds of thousands of young
          people, eager to show their displeasure with the constraints of
          Puritanism. Reports of unmarried festivalgoers of opposite sexes
          standing within a yard of each other, of men appearing in public with
          bare ankles, and of women burning their bonnets became more synonymous
          with the festival than the music itself. However, the festival was
          also a musical success, turning many of its thirty-eight performers -
          including hurdy-gurdyist John Aspinwall and sackbuttist Peter Morris -
          from unknowns into overnight sensations. While already-famous Ebenezer
          Frizzel did perform here, the iconic scene of him lighting his cittern
          on fire and smashing it upon the stage did not actually occur at this
          event.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
