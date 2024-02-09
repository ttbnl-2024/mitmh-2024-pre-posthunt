import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/crossword-of-the-ouroboros/0.png';

const SLUG = 'crossword-of-the-ouroboros';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>Holy smokes - look at all those snakes!</FlavorText>
        <InfoIcon>
          A copyable pre-spreadsheeted version of the puzzle is located{' '}
          <Link href="https://docs.google.com/spreadsheets/d/1llxWg7ycVI1HYGMwIiuVudDFfbFnRQAmBRBqgEZJBF4/edit">
            here
          </Link>
          . You can duplicate sheets into an existing spreadsheet (triangle next
          to the "Crossword of the Ouroboros" tab → "Copy to").
        </InfoIcon>
        <ul>
          <li>Really, really, really dislikes</li>
          <li>Rules out?</li>
          <li>Honorary designation, as for a Roman emperor</li>
          <li>Seat location for folks who don't care to look at clouds</li>
          <li>Anti-allergy brand whose active ingredient is loratadine</li>
          <li>
            BNL song with the memorable lines "And would you please ignore /
            that you found me on the floor / trying on your camisole"
          </li>
          <li>As well</li>
          <li>"You said it!"</li>
          <li>Switch figurines</li>
          <li>Oscars-sponsoring org.</li>
          <li>"Is there more?"</li>
          <li>Title role in a Boreanaz spinoff</li>
          <li>Dec's comedic counterpart</li>
          <li>Trouble with forming words, possibly caused by a stroke</li>
          <li>Parseghian who coached the Fighting Irish</li>
          <li>Bakery tempter</li>
          <li>"In your dreams"</li>
          <li>Individual with a certain vision affliction</li>
          <li>High chair for grown-ups</li>
          <li>Cry one's eyes out</li>
          <li>Exercise type which may have you on all fours</li>
          <li>Components of two-digit numbers?</li>
          <li>Dark-hued dangerous snake</li>
          <li>Role associated with a certain Jeopardy! host</li>
          <li>Subject of a Weird Al parody of a song by The Knack</li>
          <li>Cartoon character voiced by Maurice LaMarche, with "The"</li>
          <li>Type of assembly/disassembly puzzle</li>
          <li>Military trainee</li>
          <li>Showed up</li>
          <li>"Silly place" mentioned in <i>Monty Python and the Holy Grail</i></li>
          <li>Jeweler's unit of weight</li>
          <li>Hot dog vendor's "storefront"</li>
          <li>East Indian spiny tree with yellow flowers</li>
          <li>
            Cut on Simon &amp; Garfunkel's <i>Bridge over Troubled Water</i> album
          </li>
          <li>Requirement for vending, sometimes</li>
          <li>Discord's purpose, for some</li>
          <li>Patisserie bigwig</li>
          <li>Chip away at</li>
          <li>Bookie's marker, e.g.</li>
          <li>
            Response that's a few levels short of rolling on the floor laughing
          </li>
          <li>Drink all at once</li>
          <li>Whence Gus the mouse</li>
          <li>What an auteur might call movies</li>
          <li>It was planted in <i>Field of Dreams</i> fields</li>
          <li>Cabot ___ (usual setting of <i>Murder, She Wrote</i>)</li>
          <li>Bond to Harris's Moneypenny</li>
          <li>Monitor type largely obsoleted by LCDs</li>
          <li>Fashion designer Oscar</li>
          <li>Testifying under oath</li>
          <li>Occasional <i>CSI</i> set</li>
          <li>Remove, pre-anthem</li>
          <li>Where scrapped things go</li>
          <li>Panache</li>
          <li>Go by</li>
          <li>New York City counterpart, in salsa commercials</li>
          <li>What this meeting could have been</li>
          <li>Epithet for someone who is inscrutable</li>
          <li>Wipe out</li>
          <li>Therefore</li>
          <li>How you might know the answer to this clue before reading it</li>
          <li>Yearly physical, for instance</li>
          <li>Exploitative Dickens villain</li>
          <li>Lose one's pulse and respiration</li>
          <li>Gets out of hand?</li>
          <li>Main plane part</li>
          <li>Event associated with The Met</li>
          <li><i>Doctor Who</i>'s Mandip</li>
          <li><i>Brazil</i> director Terry</li>
          <li>Nephew of Traveling Matt</li>
          <li>Canadien, to a Montreal fan</li>
          <li>Quarterback option in a so-called option play</li>
          <li>Streaming service later rebranded without its first word</li>
          <li>Uncultured folk, to those who disapprove</li>
          <li>Relating to Greece</li>
          <li>Genus of dame's rocket</li>
          <li><i>Cautionary Tales for Children</i> author Belloc</li>
          <li>Japanese conglomerate known for audio and telecom equipment</li>
          <li>Hangs in there</li>
          <li>Wedding dance, for some</li>
          <li>Niall of One Direction</li>
          <li>Many a Themysciran warrior, as per the movies</li>
          <li>
            Fashion company that issued a statement of regret in 2011 regarding
            the actions of its founder in Germany in the WWII era
          </li>
          <li>Treacherous, perhaps, to a winter driver</li>
          <li>Like some controlled substances</li>
          <li>Provence pronoun</li>
          <li>Medical use for magnetic resonance</li>
          <li>Communicated special knowledge</li>
          <li>Feeling out of place</li>
          <li>River near Karachi</li>
          <li>"Force" which prevents organizations from moving forward</li>
          <li>Spy's stock-in-trade</li>
          <li>Wrath</li>
          <li>Conspiracy theorist's insistence</li>
          <li>What that Russian character in that movie is probably named</li>
          <li>Vessel with a whistle</li>
          <li>Young animal that symbolizes gentleness</li>
          <li>Tennis great Rod</li>
          <li>Seducer of Josef in Kafka's <i>The Trial</i></li>
          <li>
            Weekend Edition Sunday host succeeded by Audie, Rachel, Lulu, and
            Ayesha
          </li>
          <li>1999 Murphy/Lawrence comedy</li>
          <li>Find by chance</li>
          <li>It's part of what makes wood wood</li>
          <li>Ransacks</li>
          <li>Angolan president from 2017 onward</li>
          <li>Connecticut town for which a tick-borne illness is named</li>
          <li>Footie club based in Old Trafford</li>
          <li>Basil's waiter in <i>Fawlty Towers</i></li>
          <li>Former film critic Janet</li>
          <li>Unspiritual, presumably</li>
          <li>Oscar winner who beat out Fonda, Spacek, Turner, and Weaver</li>
          <li>Begin in Israeli politics</li>
          <li>Vessel which sweeps areas to find floating ordnance</li>
          <li>Statistical calculation</li>
          <li>Traverses a runway, say</li>
          <li>Source of inspiration</li>
          <li>
            Billionaire who evidently has no idea how to actually run Twitter
          </li>
          <li>Not wise in the ways of the world</li>
          <li>Welcome in a yoga class</li>
          <li>PFC's superior</li>
          <li>What applying patches may provide</li>
          <li>Coach Chuck who led the Steelers to four championships</li>
          <li>Memorandum</li>
          <li>Void's partner</li>
          <li>Recently</li>
          <li>Biblical dry measures</li>
          <li>
            <i>___-Bak: The Thai Warrior</i> (film released in 2005 in North
            America)
          </li>
          <li>Unwrap, poetically</li>
          <li>___ research (info on a political adversary)</li>
          <li>Symphony, for example</li>
          <li>Company whose products move people up, down, or sideways</li>
          <li>A beach-going tot may have one</li>
          <li>They may be used to mix paint</li>
          <li>Gloomy mood</li>
          <li>Cicero's father</li>
          <li>King who was the father of Charlemagne</li>
          <li>Declared one's guilt or innocence, in a way</li>
          <li>Gathering place for scum</li>
          <li>Place for rocking out?</li>
          <li>Nation that warred with France in the 1800's</li>
          <li>Father of Imhotep</li>
          <li>Piece for the sitar, possibly</li>
          <li>Get used to once more</li>
          <li>Possible response to an RSVP</li>
          <li>Record over</li>
          <li>One of Switzerland's official languages</li>
          <li>Weapon possibly used on Mr. Boddy</li>
          <li>Designations of some hwys</li>
          <li>Blades on screen</li>
          <li>Tim of <i>Star Trek: Voyager</i></li>
          <li>Spade who was a gumshoe</li>
          <li>Asian deers whose scientific name is Rusa unicolor</li>
          <li>Centaur-like creature</li>
          <li>A project charter may define it</li>
          <li>Ooze (into)</li>
          <li>Persuade to buy into</li>
          <li>Org. seeking life elsewhere</li>
          <li>Record which might be kept by Ahab or Picard</li>
          <li>Structure built (or buried) in the Midwest</li>
          <li>Tale about Jason?</li>
          <li>Facility often located by hot springs</li>
          <li>Possible result when a strike is averted?</li>
          <li>Spaced out, say</li>
          <li>Wear proudly</li>
          <li>Lets the leaves soak</li>
          <li>Taking the most direct horizontal route</li>
          <li>Bering, for one</li>
          <li>Layers of rock</li>
          <li>Aid or assistance</li>
          <li>Certain Muslims</li>
          <li>Amount that may be "princely"</li>
          <li>It measures RPM</li>
          <li>Destructive cycle</li>
          <li>Latvian chess champ Mikhail</li>
          <li>Bean (or banana) counters</li>
          <li>Buccaneers' base of operations</li>
          <li>Pleasantly acerbic flavor</li>
          <li>Places for dinosaur remains</li>
          <li>Comm. utility</li>
          <li>Tents with a conical shape</li>
          <li>UK supermarket chain</li>
          <li>Julia, opposite George as Danny</li>
          <li>Geronimo Stilton's sister in kiddie lit</li>
          <li>Endearment to Gomez's gothic beloved</li>
          <li>Unit for a bookseller</li>
          <li>Decorated tinware</li>
          <li>Prompt to leave a message</li>
          <li>Windpipe</li>
          <li>"King" now often ridiculed for its short arms</li>
          <li>IMDb section where all of the really interesting stuff is</li>
          <li>Too much, in music</li>
          <li>Clears, as an artery (in either sense)</li>
          <li>Open, as one's belt</li>
          <li>Brings together</li>
          <li>Restores Magic-ally</li>
          <li>Opt for decoffinated?</li>
          <li>Guide one to their box, perhaps</li>
          <li>Unpredictable thing</li>
          <li>Mode of transport associated with Italy</li>
          <li>Symphony's featured guests</li>
        </ul>
        <p>(+1, +1, +3, +4, +5, +5, +7)</p>
        <p>
          <SheetableImage alt="" src={image0} title="" className="mt-6" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
