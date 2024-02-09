import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/crossword-of-the-ouroboros/0.png';
import image1 from 'assets/solutions/crossword-of-the-ouroboros/1.png';

const SLUG = 'crossword-of-the-ouroboros';
const ANSWER = `POPESSE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      The clues are given in alphabetical order by answer, and are answered as
      follows:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Really, really, really dislikes</td>
          <td>
            <Monospace>ABHORS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rules out?</td>
          <td>
            <Monospace>ABOLISHES</Monospace>
          </td>
        </tr>
        <tr>
          <td>Honorary designation, as for a Roman emperor</td>
          <td>
            <Monospace>AGNOMEN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Seat location for folks who don't care to look at clouds</td>
          <td>
            <Monospace>AISLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Anti-allergy brand whose active ingredient is loratadine</td>
          <td>
            <Monospace>ALAVERT</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            BNL song with the memorable lines "And would you please ignore /
            that you found me on the floor / trying on your camisole"
          </td>
          <td>
            <Monospace>ALCOHOL</Monospace>
          </td>
        </tr>
        <tr>
          <td>As well</td>
          <td>
            <Monospace>ALSO</Monospace>
          </td>
        </tr>
        <tr>
          <td>You said it!</td>
          <td>
            <Monospace>AMEN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Switch figurines</td>
          <td>
            <Monospace>AMIIBOS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Oscars-sponsoring org.</td>
          <td>
            <Monospace>AMPAS</Monospace>
          </td>
        </tr>
        <tr>
          <td>...Is there more?</td>
          <td>
            <Monospace>AND</Monospace>
          </td>
        </tr>
        <tr>
          <td>Title role in a Boreanaz spinoff</td>
          <td>
            <Monospace>ANGEL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dec's comedic counterpart</td>
          <td>
            <Monospace>ANT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Trouble with forming words, possibly caused by a stroke</td>
          <td>
            <Monospace>APHASIA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Parseghian who coached the Fighting Irish</td>
          <td>
            <Monospace>ARA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bakery tempter</td>
          <td>
            <Monospace>AROMA</Monospace>
          </td>
        </tr>
        <tr>
          <td>"In your dreams"</td>
          <td>
            <Monospace>AS IF</Monospace>
          </td>
        </tr>
        <tr>
          <td>Individual with a certain vision affliction</td>
          <td>
            <Monospace>ASTIGMAT</Monospace>
          </td>
        </tr>
        <tr>
          <td>High chair for grown-ups</td>
          <td>
            <Monospace>BARSTOOL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cry one's eyes out</td>
          <td>
            <Monospace>BAWL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Exercise type which may have you on all fours</td>
          <td>
            <Monospace>BEAR CRAWL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Components of two-digit numbers?</td>
          <td>
            <Monospace>BITS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dark-hued dangerous snake</td>
          <td>
            <Monospace>BLACK COBRA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Role associated with a certain Jeopardy! host</td>
          <td>
            <Monospace>BLOSSOM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Subject of a Weird Al parody of a song by The Knack</td>
          <td>
            <Monospace>BOLOGNA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cartoon character voiced by Maurice LaMarche, with "The"</td>
          <td>
            <Monospace>BRAIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Type of assembly/disassembly puzzle</td>
          <td>
            <Monospace>BURR</Monospace>
          </td>
        </tr>
        <tr>
          <td>Military trainee</td>
          <td>
            <Monospace>CADET</Monospace>
          </td>
        </tr>
        <tr>
          <td>Showed up</td>
          <td>
            <Monospace>CAME</Monospace>
          </td>
        </tr>
        <tr>
          <td>Silly place mentioned in <i>Monty Python and the Holy Grail</i></td>
          <td>
            <Monospace>CAMELOT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jeweler's unit of weight</td>
          <td>
            <Monospace>CARAT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Hot dog vendor's "storefront"</td>
          <td>
            <Monospace>CART</Monospace>
          </td>
        </tr>
        <tr>
          <td>East Indian spiny tree with yellow flowers</td>
          <td>
            <Monospace>CATECHU</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Cut on Simon &amp; Garfunkel's <i>Bridge over Troubled Water</i> album
          </td>
          <td>
            <Monospace>CECILIA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Requirement for vending, sometimes</td>
          <td>
            <Monospace>CHANGE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Discord's purpose, for some</td>
          <td>
            <Monospace>CHAT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Patisserie bigwig</td>
          <td>
            <Monospace>CHEF</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chip away at</td>
          <td>
            <Monospace>CHISEL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bookie's marker, e.g.</td>
          <td>
            <Monospace>CHIT</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Response that's a few levels short of rolling on the floor laughing
          </td>
          <td>
            <Monospace>CHUCKLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Drink all at once</td>
          <td>
            <Monospace>CHUG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Whence Gus the mouse</td>
          <td>
            <Monospace>CINDERELLA</Monospace>
          </td>
        </tr>
        <tr>
          <td>What an auteur might call movies</td>
          <td>
            <Monospace>CINEMA</Monospace>
          </td>
        </tr>
        <tr>
          <td>It was planted in <i>Field of Dreams</i> fields</td>
          <td>
            <Monospace>CORN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cabot ___ (usual setting of <i>Murder, She Wrote</i>)</td>
          <td>
            <Monospace>COVE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bond to Harris's Moneypenny</td>
          <td>
            <Monospace>CRAIG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Monitor type largely obsoleted by LCDs</td>
          <td>
            <Monospace>CRT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Fashion designer Oscar</td>
          <td>
            <Monospace>DE LA RENTA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Testifying under oath</td>
          <td>
            <Monospace>DEPONING</Monospace>
          </td>
        </tr>
        <tr>
          <td>Occasional <i>CSI</i> set</td>
          <td>
            <Monospace>DNA LAB</Monospace>
          </td>
        </tr>
        <tr>
          <td>Remove, pre-anthem</td>
          <td>
            <Monospace>DOFF</Monospace>
          </td>
        </tr>
        <tr>
          <td>Where scrapped things go</td>
          <td>
            <Monospace>DUST HEAP</Monospace>
          </td>
        </tr>
        <tr>
          <td>Panache</td>
          <td>
            <Monospace>ELAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Go by</td>
          <td>
            <Monospace>ELAPSE</Monospace>
          </td>
        </tr>
        <tr>
          <td>New York City counterpart, in salsa commercials</td>
          <td>
            <Monospace>EL PASO</Monospace>
          </td>
        </tr>
        <tr>
          <td>What this meeting could have been</td>
          <td>
            <Monospace>E-MAIL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Epithet for someone who is inscrutable</td>
          <td>
            <Monospace>ENIGMA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Wipe out</td>
          <td>
            <Monospace>ERADICATE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Therefore</td>
          <td>
            <Monospace>ERGO</Monospace>
          </td>
        </tr>
        <tr>
          <td>How you might know the answer to this clue before reading it</td>
          <td>
            <Monospace>ESP</Monospace>
          </td>
        </tr>
        <tr>
          <td>Yearly physical, for instance</td>
          <td>
            <Monospace>EXAM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Exploitative Dickens villain</td>
          <td>
            <Monospace>FAGIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Lose one's pulse and respiration</td>
          <td>
            <Monospace>FLATLINE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Gets out of hand?</td>
          <td>
            <Monospace>FOLD</Monospace>
          </td>
        </tr>
        <tr>
          <td>Main plane part</td>
          <td>
            <Monospace>FUSELAGE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Event associated with The Met</td>
          <td>
            <Monospace>GALA</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>Doctor Who</i>'s Mandip</td>
          <td>
            <Monospace>GILL</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>Brazil</i> director Terry</td>
          <td>
            <Monospace>GILLIAM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Nephew of Traveling Matt</td>
          <td>
            <Monospace>GOBO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Canadien, to a Montreal fan</td>
          <td>
            <Monospace>HAB</Monospace>
          </td>
        </tr>
        <tr>
          <td>Quarterback option in a so-called option play</td>
          <td>
            <Monospace>HANDOFF</Monospace>
          </td>
        </tr>
        <tr>
          <td>Streaming service later rebranded without its first word</td>
          <td>
            <Monospace>HBO MAX</Monospace>
          </td>
        </tr>
        <tr>
          <td>Uncultured folk, to those who disapprove</td>
          <td>
            <Monospace>HEATHENS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Relating to Greece</td>
          <td>
            <Monospace>HELLENIC</Monospace>
          </td>
        </tr>
        <tr>
          <td>Genus of dame's rocket</td>
          <td>
            <Monospace>HESPERIS</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>Cautionary Tales for Children</i> author Belloc</td>
          <td>
            <Monospace>HILAIRE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Japanese conglomerate known for audio and telecom equipment</td>
          <td>
            <Monospace>HITACHI</Monospace>
          </td>
        </tr>
        <tr>
          <td>Hangs in there</td>
          <td>
            <Monospace>HOLDS OUT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Wedding dance, for some</td>
          <td>
            <Monospace>HORA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Niall of One Direction</td>
          <td>
            <Monospace>HORAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Many a Themysciran warrior, as per the movies</td>
          <td>
            <Monospace>HORSEWOMAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Fashion company that issued a statement of regret in 2011 regarding
            the actions of its founder in Germany in the WWII era
          </td>
          <td>
            <Monospace>HUGO BOSS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Treacherous, perhaps, to a winter driver</td>
          <td>
            <Monospace>ICE-COVERED</Monospace>
          </td>
        </tr>
        <tr>
          <td>Like some controlled substances</td>
          <td>
            <Monospace>ILLEGAL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Provence pronoun</td>
          <td>
            <Monospace>ILS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Medical use for magnetic resonance</td>
          <td>
            <Monospace>IMAGING</Monospace>
          </td>
        </tr>
        <tr>
          <td>Communicated special knowledge</td>
          <td>
            <Monospace>IMPARTED</Monospace>
          </td>
        </tr>
        <tr>
          <td>Feeling out of place</td>
          <td>
            <Monospace>INCONGRUOUS</Monospace>
          </td>
        </tr>
        <tr>
          <td>River near Karachi</td>
          <td>
            <Monospace>INDUS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Force which prevents organizations from moving forward</td>
          <td>
            <Monospace>INERTIA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Spy's stock-in-trade</td>
          <td>
            <Monospace>INTEL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Wrath</td>
          <td>
            <Monospace>IRE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Conspiracy theorist's insistence</td>
          <td>
            <Monospace>IT'S REAL</Monospace>
          </td>
        </tr>
        <tr>
          <td>What that Russian character in that movie is probably named</td>
          <td>
            <Monospace>IVAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Vessel with a whistle</td>
          <td>
            <Monospace>KETTLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Young animal that symbolizes gentleness</td>
          <td>
            <Monospace>LAMB</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tennis great Rod</td>
          <td>
            <Monospace>LAVER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Seducer of Josef in Kafka's <i>The Trial</i></td>
          <td>
            <Monospace>LENI</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Weekend Edition Sunday host succeeded by Audie, Rachel, Lulu, and
            Ayesha
          </td>
          <td>
            <Monospace>LIANE</Monospace>
          </td>
        </tr>
        <tr>
          <td>1999 Murphy/Lawrence comedy</td>
          <td>
            <Monospace>LIFE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Find by chance</td>
          <td>
            <Monospace>LIGHT UPON</Monospace>
          </td>
        </tr>
        <tr>
          <td>It's part of what makes wood wood</td>
          <td>
            <Monospace>LIGNIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ransacks</td>
          <td>
            <Monospace>LOOTS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Angolan president from 2017 onward</td>
          <td>
            <Monospace>LOURENCO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Connecticut town for which a tick-borne illness is named</td>
          <td>
            <Monospace>LYME</Monospace>
          </td>
        </tr>
        <tr>
          <td>Footie club based in Old Trafford</td>
          <td>
            <Monospace>MAN U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Basil's waiter in <i>Fawlty Towers</i></td>
          <td>
            <Monospace>MANUEL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Former film critic Janet</td>
          <td>
            <Monospace>MASLIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Unspiritual, presumably</td>
          <td>
            <Monospace>MATERIALISTIC</Monospace>
          </td>
        </tr>
        <tr>
          <td>Oscar winner who beat out Fonda, Spacek, Turner, and Weaver</td>
          <td>
            <Monospace>MATLIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Begin in Israeli politics</td>
          <td>
            <Monospace>MENACHEM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Vessel which sweeps areas to find floating ordnance</td>
          <td>
            <Monospace>MINEHUNTER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Statistical calculation</td>
          <td>
            <Monospace>MODE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Traverses a runway, say</td>
          <td>
            <Monospace>MODELS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Source of inspiration</td>
          <td>
            <Monospace>MUSE</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            Billionaire who evidently has no idea how to actually run Twitter
          </td>
          <td>
            <Monospace>MUSK</Monospace>
          </td>
        </tr>
        <tr>
          <td>Not wise in the ways of the world</td>
          <td>
            <Monospace>NAIVE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Welcome in a yoga class</td>
          <td>
            <Monospace>NAMASTE</Monospace>
          </td>
        </tr>
        <tr>
          <td>PFC's superior</td>
          <td>
            <Monospace>NCO</Monospace>
          </td>
        </tr>
        <tr>
          <td>What applying patches may provide</td>
          <td>
            <Monospace>NICOTINE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Coach Chuck who led the Steelers to four championships</td>
          <td>
            <Monospace>NOLL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Memorandum</td>
          <td>
            <Monospace>NOTE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Void's partner</td>
          <td>
            <Monospace>NULL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Recently</td>
          <td>
            <Monospace>OF LATE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Biblical dry measures</td>
          <td>
            <Monospace>OMERS</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>___-Bak: The Thai Warrior</i> (film released in 2005 in
            North America)
          </td>
          <td>
            <Monospace>ONG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Unwrap, poetically</td>
          <td>
            <Monospace>OPE</Monospace>
          </td>
        </tr>
        <tr>
          <td>___ research (info on a political adversary)</td>
          <td>
            <Monospace>OPPO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Symphony, for example</td>
          <td>
            <Monospace>ORCHESTRA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Company whose products move people up, down, or sideways</td>
          <td>
            <Monospace>OTIS</Monospace>
          </td>
        </tr>
        <tr>
          <td>A beach-going tot may have one</td>
          <td>
            <Monospace>PAIL</Monospace>
          </td>
        </tr>
        <tr>
          <td>They may be used to mix paint</td>
          <td>
            <Monospace>PALETTE KNIVES</Monospace>
          </td>
        </tr>
        <tr>
          <td>Gloomy mood</td>
          <td>
            <Monospace>PALL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cicero's father</td>
          <td>
            <Monospace>PATER</Monospace>
          </td>
        </tr>
        <tr>
          <td>King who was the father of Charlemagne</td>
          <td>
            <Monospace>PEPIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Declared one's guilt or innocence, in a way</td>
          <td>
            <Monospace>PLED</Monospace>
          </td>
        </tr>
        <tr>
          <td>Gathering place for scum</td>
          <td>
            <Monospace>POND</Monospace>
          </td>
        </tr>
        <tr>
          <td>Place for rocking out?</td>
          <td>
            <Monospace>PORCH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Nation that warred with France in the 1800's</td>
          <td>
            <Monospace>PRUSSIA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Father of Imhotep</td>
          <td>
            <Monospace>PTAH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Piece for the sitar, possibly</td>
          <td>
            <Monospace>RAGA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Get used to once more</td>
          <td>
            <Monospace>REACCUSTOM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Possible response to an RSVP</td>
          <td>
            <Monospace>REGRETS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Record over</td>
          <td>
            <Monospace>RETAPE</Monospace>
          </td>
        </tr>
        <tr>
          <td>One of Switzerland's official languages</td>
          <td>
            <Monospace>ROMANSH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Weapon possibly used on Mr. Boddy</td>
          <td>
            <Monospace>ROPE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Designations of some hwys</td>
          <td>
            <Monospace>RTES</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blades on screen</td>
          <td>
            <Monospace>RUBEN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tim of <i>Star Trek: Voyager</i></td>
          <td>
            <Monospace>RUSS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Spade who was a gumshoe</td>
          <td>
            <Monospace>SAM</Monospace>
          </td>
        </tr>
        <tr>
          <td>Asian deers whose scientific name is Rusa unicolor</td>
          <td>
            <Monospace>SAMBARS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Centaur-like creature</td>
          <td>
            <Monospace>SATYR</Monospace>
          </td>
        </tr>
        <tr>
          <td>A project charter may define it</td>
          <td>
            <Monospace>SCOPE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ooze (into)</td>
          <td>
            <Monospace>SEEP</Monospace>
          </td>
        </tr>
        <tr>
          <td>Persuade to buy into</td>
          <td>
            <Monospace>SELL ON</Monospace>
          </td>
        </tr>
        <tr>
          <td>Org. seeking life elsewhere</td>
          <td>
            <Monospace>SETI</Monospace>
          </td>
        </tr>
        <tr>
          <td>Record which might be kept by Ahab or Picard</td>
          <td>
            <Monospace>SHIPSLOG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Structure built (or buried) in the Midwest</td>
          <td>
            <Monospace>SILO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tale about Jason?</td>
          <td>
            <Monospace>SLASHER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Facility often located by hot springs</td>
          <td>
            <Monospace>SPA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Possible result when a strike is averted?</td>
          <td>
            <Monospace>SPARE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Spaced out, say</td>
          <td>
            <Monospace>SPORADIC</Monospace>
          </td>
        </tr>
        <tr>
          <td>Wear proudly</td>
          <td>
            <Monospace>SPORT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Lets the leaves soak</td>
          <td>
            <Monospace>STEEPS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Taking the most direct horizontal route</td>
          <td>
            <Monospace>STRAIGHT ACROSS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bering, for one</td>
          <td>
            <Monospace>STRAIT</Monospace>
          </td>
        </tr>
        <tr>
          <td>Layers of rock</td>
          <td>
            <Monospace>STRATA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Aid or assistance</td>
          <td>
            <Monospace>SUCCOR</Monospace>
          </td>
        </tr>
        <tr>
          <td>Certain Muslims</td>
          <td>
            <Monospace>SUFIS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Amount that may be "princely"</td>
          <td>
            <Monospace>SUM</Monospace>
          </td>
        </tr>
        <tr>
          <td>It measures RPM</td>
          <td>
            <Monospace>TACH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Destructive cycle</td>
          <td>
            <Monospace>TAILSPIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Latvian chess champ Mikhail</td>
          <td>
            <Monospace>TAL</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bean (or banana) counters</td>
          <td>
            <Monospace>TALLYMEN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Buccaneers' base of operations</td>
          <td>
            <Monospace>TAMPA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Pleasantly acerbic flavor</td>
          <td>
            <Monospace>TANG</Monospace>
          </td>
        </tr>
        <tr>
          <td>Places for dinosaur remains</td>
          <td>
            <Monospace>TAR PITS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Comm. utility</td>
          <td>
            <Monospace>TELCO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tents with a conical shape</td>
          <td>
            <Monospace>TEPEES</Monospace>
          </td>
        </tr>
        <tr>
          <td>UK supermarket chain</td>
          <td>
            <Monospace>TESCO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Julia, opposite George as Danny</td>
          <td>
            <Monospace>TESS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Geronimo Stilton's sister in kiddie lit</td>
          <td>
            <Monospace>THEA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Endearment to Gomez's gothic beloved</td>
          <td>
            <Monospace>TISH</Monospace>
          </td>
        </tr>
        <tr>
          <td>Unit for a bookseller</td>
          <td>
            <Monospace>TITLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Decorated tinware</td>
          <td>
            <Monospace>TOLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Prompt to leave a message</td>
          <td>
            <Monospace>TONE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Windpipe</td>
          <td>
            <Monospace>TRACHEA</Monospace>
          </td>
        </tr>
        <tr>
          <td>King now often ridiculed for its short arms</td>
          <td>
            <Monospace>T-REX</Monospace>
          </td>
        </tr>
        <tr>
          <td>IMDb section where all of the really interesting stuff is</td>
          <td>
            <Monospace>TRIVIA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Too much, in music</td>
          <td>
            <Monospace>TROPPO</Monospace>
          </td>
        </tr>
        <tr>
          <td>Clears, as an artery (in either sense)</td>
          <td>
            <Monospace>UNBLOCKS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Open, as one's belt</td>
          <td>
            <Monospace>UNBUCKLE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Brings together</td>
          <td>
            <Monospace>UNITES</Monospace>
          </td>
        </tr>
        <tr>
          <td>Restores Magic-ally</td>
          <td>
            <Monospace>UNTAPS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Opt for decoffinated?</td>
          <td>
            <Monospace>UNTOMB</Monospace>
          </td>
        </tr>
        <tr>
          <td>Guide one to their box, perhaps</td>
          <td>
            <Monospace>USHER</Monospace>
          </td>
        </tr>
        <tr>
          <td>Unpredictable thing</td>
          <td>
            <Monospace>VAGARY</Monospace>
          </td>
        </tr>
        <tr>
          <td>Mode of transport associated with Italy</td>
          <td>
            <Monospace>VESPA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Symphony's featured guests</td>
          <td>
            <Monospace>VIRTUOSOS</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Some of these answers read across and down, while others follow the snaky
      paths. The completed grid looks like this:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      When we examine the grid closely we will eventually notice that, in seven
      cases, an eight-letter snake word forms a loop with the "head letter" next
      to the "tail letter", like an ouroboros, as referenced in this puzzle's
      title.
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>
      If we examine the "ouroboros" snakes and their circularly-shaped paths
      closely, we will eventually notice that if we start the going around the
      circularly-shaped path from a different letter than the snake's current
      "head", we will form a different word or phrase reading around the circle:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Answer</th>
          <th>Rotated</th>
          <th>Rotation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>TAILSPIN</Monospace>
          </td>
          <td>
            <Monospace>PINTAILS</Monospace>
          </td>
          <td>+5</td>
        </tr>
        <tr>
          <td>
            <Monospace>HOLDS OUT</Monospace>
          </td>
          <td>
            <Monospace>OLD SOUTH</Monospace>
          </td>
          <td>+1</td>
        </tr>
        <tr>
          <td>
            <Monospace>HESPERIS</Monospace>
          </td>
          <td>
            <Monospace>PERISHES</Monospace>
          </td>
          <td>+3</td>
        </tr>
        <tr>
          <td>
            <Monospace>HEATHENS</Monospace>
          </td>
          <td>
            <Monospace>ENSHEATH</Monospace>
          </td>
          <td>+5</td>
        </tr>
        <tr>
          <td>
            <Monospace>UNBLOCKS</Monospace>
          </td>
          <td>
            <Monospace>SUNBLOCK</Monospace>
          </td>
          <td>+7</td>
        </tr>
        <tr>
          <td>
            <Monospace>ASTIGMAT</Monospace>
          </td>
          <td>
            <Monospace>STIGMATA</Monospace>
          </td>
          <td>+1</td>
        </tr>
        <tr>
          <td>
            <Monospace>LOURENCO</Monospace>
          </td>
          <td>
            <Monospace>ENCOLOUR</Monospace>
          </td>
          <td>+4</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Note that the seven plus-sign/digits provided between the clues and the
      grid within the puzzle provide the number of squares to rotate each snake
      (though we will need to match them to the correct snake). Even though{' '}
      <Monospace>OLD SOUTH</Monospace> is more common than the google-findable{' '}
      <Monospace>SOUTHOLD</Monospace> and <Monospace>PINTAILS</Monospace> is
      more common than the likewise findable <Monospace>SPINTAIL</Monospace>,
      these numbers have been provided to identify the correct rotations to be
      applied so that the answer is fully specified.{' '}
    </p>
    <p>
      Taking the first letters of the newly-made words/phrases in the seven
      circular snakes, reading from left to right in the grid gives us the
      answer, <Answerize>POPESSE</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        As a hedge in case solvers identified what was happening without working
        on the grid, a couple of additional eight-letter answers which can be
        read around in a circle from a different
        location&mdash;<Monospace>BARSTOOL</Monospace> (to <Monospace>TOOLBARS</Monospace>),
        and <Monospace>TALLYMEN</Monospace> (to <Monospace>MENTALLY</Monospace>)
        were also seeded in the grid, which would make wordlist searching
        moderately more complex.
      </p>
    </AuthorsNotes>
    <style jsx>{`
      td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
