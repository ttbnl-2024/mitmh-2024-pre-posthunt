import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'where-on-earth-is-carmina-suntigre';
const ANSWER = `BAHAMIAN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We're presented with a series of crime descriptions and Wanted posters,
      representing plenty of information. Our initial entry point is to solve
      the crossword-style clues, which are found as sections of ALL CAPS within
      the crime descriptions.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Demonym</th>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ARGENTINE</td>
          <td>
            A POEM WITH SIX STANZAS OF SIX LINES EACH, PLUS A FINAL ENVOI (7)
          </td>
          <td>SESTINA</td>
        </tr>
        <tr>
          <td>BANGLA­DESHI</td>
          <td>THE FLOW OF IONS EMERGING FROM THE SUN (5,4)</td>
          <td>SOLAR WIND</td>
        </tr>
        <tr>
          <td>CROATIAN</td>
          <td>THE COMMERCIAL TRAVEL INDUSTRY (7)</td>
          <td>TOURISM</td>
        </tr>
        <tr>
          <td>CYPRIOT</td>
          <td>A CERTAIN NYC "ISLAND" (5)</td>
          <td>CONEY</td>
        </tr>
        <tr>
          <td>DOMINICAN</td>
          <td>A CERTAIN WEB-SLINGING SUPERHERO (6-3)</td>
          <td>SPIDER-MAN</td>
        </tr>
        <tr>
          <td>EQUATO­GUINEAN</td>
          <td>
            DEVICE PRODUCING A STREAM OF NEGATIVELY CHARGED PARTICLES (8,3)
          </td>
          <td>ELECTRON GUN</td>
        </tr>
        <tr>
          <td>FRENCH</td>
          <td>ENTHUSIASTIC DEVOTEE (3)</td>
          <td>FAN</td>
        </tr>
        <tr>
          <td>HAITIAN</td>
          <td>RAVING LUNATICS (7)</td>
          <td>MANIACS</td>
        </tr>
        <tr>
          <td>JAMAICAN</td>
          <td>LIVELY IRISH DANCE (3) </td>
          <td>JIG</td>
        </tr>
        <tr>
          <td>LIECHTENSTEINER</td>
          <td>MEASUREMENTS FROM END TO END (7)</td>
          <td>LENGTHS</td>
        </tr>
        <tr>
          <td>MALTESE</td>
          <td>THE MEADOW WHERE THEY GRAZE (7)</td>
          <td>PASTURE</td>
        </tr>
        <tr>
          <td>SAINT LUCIAN</td>
          <td>VEERS WILDLY IN AN UNCONTROLLED MANNER (7)</td>
          <td>CAREENS</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Easy enough, but what do we do with these words? The flavor text instructs
      us to "connect these crooked criminals to the crimes committed," and each
      Witness' Statement contains details about the suspect in question, so we
      need to embark on a logic puzzle to match suspects to locations. See the
      appendix for a solution walkthrough, which results in:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Criminal</th>
          <th>Demonym</th>
          <th>Clued Word</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MESSENGER</td>
          <td>ARGENTINE</td>
          <td>SESTINA</td>
        </tr>
        <tr>
          <td>GLASSBLOWER</td>
          <td>BANGLA­DESHI</td>
          <td>SOLAR WIND</td>
        </tr>
        <tr>
          <td>MUSICIAN</td>
          <td>CROATIAN</td>
          <td>TOURISM</td>
        </tr>
        <tr>
          <td>PAINTER</td>
          <td>CYPRIOT</td>
          <td>CONEY</td>
        </tr>
        <tr>
          <td>INSPECTOR</td>
          <td>DOMINICAN</td>
          <td>SPIDER-MAN</td>
        </tr>
        <tr>
          <td>AQUA­CULTURIST</td>
          <td>EQUATO­GUINEAN</td>
          <td>ELECTRON GUN</td>
        </tr>
        <tr>
          <td>ARCHER</td>
          <td>FRENCH</td>
          <td>FAN</td>
        </tr>
        <tr>
          <td>CHEMIST</td>
          <td>HAITIAN</td>
          <td>MANIACS</td>
        </tr>
        <tr>
          <td>MAGICIAN</td>
          <td>JAMAICAN</td>
          <td>JIG</td>
        </tr>
        <tr>
          <td>GENETIC ENGINEER</td>
          <td>LIECHTEN­STEINER</td>
          <td>LENGTHS</td>
        </tr>
        <tr>
          <td>PLUMBER</td>
          <td>MALTESE</td>
          <td>PASTURE</td>
        </tr>
        <tr>
          <td>ELECTRICIAN</td>
          <td>SAINT LUCIAN</td>
          <td>CAREENS</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This seems to exhaust most of the information we've been given, except the
      times of the crimes, which looks like an ordering mechanic. So, what do we
      do with these words? Well, it's pretty easy to notice that the word
      lengths of the professions/aliases and the demonyms are equal. The flavor
      text instructs us to "have the respective national authorities do a lineup
      with them" to "find aspects that don't match up with their
      carefully-crafted personas."
    </p>
    <p>
      By "lining up" the professions with the demonyms, and looking for "aspects
      [i.e., letters] that don't match up," we get letters that anagram into the
      clued words, with one letter left over. These leftover letters must be the
      "bits of that evidence" that we are to use to "track down Carmina
      herself."
    </p>
    <p>
      For example: <Clue>MAGICIAN</Clue> and <Clue>JAMAICAN</Clue> share the
      letters <Clue>A</Clue> (2x), <Clue>C</Clue>, <Clue>I</Clue> (1x),{' '}
      <Clue>M</Clue>, and <Clue>N</Clue>. After removing those letters, we are
      left with one <Clue>A</Clue>(from <Clue>JAMAICAN</Clue>), one I (from{' '}
      <Clue>MAGICIAN</Clue>), a <Clue>J</Clue>, and a <Clue>G</Clue>. This
      spells the matching clued word <Clue>JIG</Clue> with one letter (
      <Clue>A</Clue>) left over.
    </p>
    <p>This yields the following:</p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Criminal</th>
          <th>Demonym</th>
          <th>Clued Word</th>
          <th>Missing Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MESSENGER</td>
          <td>ARGENTINE</td>
          <td>SESTINA</td>
          <td>M</td>
        </tr>
        <tr>
          <td>GLASSBLOWER</td>
          <td>BANGLA­DESHI</td>
          <td>SOLAR WIND</td>
          <td>H</td>
        </tr>
        <tr>
          <td>MUSICIAN</td>
          <td>CROATIAN</td>
          <td>TOURISM</td>
          <td>A</td>
        </tr>
        <tr>
          <td>PAINTER</td>
          <td>CYPRIOT</td>
          <td>CONEY</td>
          <td>A</td>
        </tr>
        <tr>
          <td>INSPECTOR</td>
          <td>DOMINICAN</td>
          <td>SPIDER-MAN</td>
          <td>T</td>
        </tr>
        <tr>
          <td>AQUACULTURIST</td>
          <td>EQUATO­GUINEAN</td>
          <td>ELECTRON GUN</td>
          <td>S</td>
        </tr>
        <tr>
          <td>ARCHER</td>
          <td>FRENCH</td>
          <td>FAN</td>
          <td>R</td>
        </tr>
        <tr>
          <td>CHEMIST</td>
          <td>HAITIAN</td>
          <td>MANIACS</td>
          <td>E</td>
        </tr>
        <tr>
          <td>MAGICIAN</td>
          <td>JAMAICAN</td>
          <td>JIG</td>
          <td>A</td>
        </tr>
        <tr>
          <td>GENETIC ENGINEER</td>
          <td>LIECHTEN­STEINER</td>
          <td>LENGTHS</td>
          <td>G</td>
        </tr>
        <tr>
          <td>PLUMBER</td>
          <td>MALTESE</td>
          <td>PASTURE</td>
          <td>B</td>
        </tr>
        <tr>
          <td>ELECTRICIAN</td>
          <td>SAINT LUCIAN</td>
          <td>CAREENS</td>
          <td>U</td>
        </tr>
      </tbody>
    </Table>
    <p>
      At this point, we could feed the letters into an anagram solver, but we'll
      get a lot of nonsense (including "RUTABAGA MESH" and "GRAHAM BEAUTS").
      Instead, we'll turn to the only remaining unused data point: the times of
      the crimes. These are noted in "local time," but by looking up the
      countries in question (all of which occupy a single time zone), we see
      that the crimes occurred sequentially at one-hour intervals from 7:00 AM
      UTC to 6:00 PM UTC. Sorting these answers by UTC time (earliest to latest)
      gives us the answer <Clue>A GREAT AMBUSH</Clue>:
    </p>
    <Table className="table-4">
      <thead>
        <tr>
          <th>Criminal</th>
          <th>Demonym</th>
          <th>Clued Word</th>
          <th>Time Zone</th>
          <th>Local Time</th>
          <th>UTC Time</th>
          <th>Missing Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MUSICIAN</td>
          <td>CROATIAN</td>
          <td>TOURISM</td>
          <td>UTC +1</td>
          <td>8:00 AM</td>
          <td>7:00 AM</td>
          <td>A</td>
        </tr>
        <tr>
          <td>GENETIC ENGINEER</td>
          <td>LIECHTEN­STEINER</td>
          <td>LENGTHS</td>
          <td>UTC +1</td>
          <td>9:00 AM</td>
          <td>8:00 AM</td>
          <td>G</td>
        </tr>
        <tr>
          <td>ARCHER</td>
          <td>FRENCH</td>
          <td>FAN</td>
          <td>UTC +1</td>
          <td>10:00 AM</td>
          <td>9:00 AM</td>
          <td>R</td>
        </tr>
        <tr>
          <td>CHEMIST</td>
          <td>HAITIAN</td>
          <td>MANIACS</td>
          <td>UTC -5</td>
          <td>5:00 AM</td>
          <td>10:00 AM</td>
          <td>E</td>
        </tr>
        <tr>
          <td>PAINTER</td>
          <td>CYPRIOT</td>
          <td>CONEY</td>
          <td>UTC +2</td>
          <td>1:00 PM</td>
          <td>11:00 AM</td>
          <td>A</td>
        </tr>
        <tr>
          <td>INSPECTOR</td>
          <td>DOMINICAN</td>
          <td>SPIDER-MAN</td>
          <td>UTC -4</td>
          <td>8:00 AM</td>
          <td>12:00 PM</td>
          <td>T</td>
        </tr>
        <tr>
          <td>MAGICIAN</td>
          <td>JAMAICAN</td>
          <td>JIG</td>
          <td>UTC -5</td>
          <td>8:00 AM</td>
          <td>1:00 PM</td>
          <td>A</td>
        </tr>
        <tr>
          <td>MESSENGER</td>
          <td>ARGENTINE</td>
          <td>SESTINA</td>
          <td>UTC -3</td>
          <td>11:00 AM</td>
          <td>2:00 PM</td>
          <td>M</td>
        </tr>
        <tr>
          <td>PLUMBER</td>
          <td>MALTESE</td>
          <td>PASTURE</td>
          <td>UTC +1</td>
          <td>4:00 PM</td>
          <td>3:00 PM</td>
          <td>B</td>
        </tr>
        <tr>
          <td>ELECTRICIAN</td>
          <td>SAINT LUCIAN</td>
          <td>CAREENS</td>
          <td>UTC -4</td>
          <td>12:00 PM</td>
          <td>4:00 PM</td>
          <td>U</td>
        </tr>
        <tr>
          <td>AQUACULTURIST</td>
          <td>EQUATO­GUINEAN</td>
          <td>ELECTRON GUN</td>
          <td>UTC +1</td>
          <td>6:00 PM</td>
          <td>5:00 PM</td>
          <td>S</td>
        </tr>
        <tr>
          <td>GLASSBLOWER</td>
          <td>BANGLA­DESHI</td>
          <td>SOLAR WIND</td>
          <td>UTC +6</td>
          <td>12:00:00 AM +1D</td>
          <td>6:00 PM</td>
          <td>H</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <i>Note: Entering the answer</i> <Clue>A GREAT AMBUSH</Clue>{' '}
      <i>
        yields the partial response, "Carmina Suntigre is planning a great
        ambush?! You need to tell the __________ authorities right away!"
      </i>
    </p>
    <p>
      Now what? Clearly, we need to find out the demonym of the authorities to
      contact (or perhaps the type of cuisine that is Carmina's favorite), but
      how? Well, for her henchmen, we used the formula of matching the demonym
      with the criminal alias to get the leftover letters in the crime
      description. Here, the crime description is <Clue>A GREAT AMBUSH</Clue>,
      and Carmina's alias is <Clue>SUNTIGRE</Clue>, so we simply solve in
      reverse to find an 8-letter demonym.{' '}
    </p>
    <p>
      The letters from <Clue>SUNTIGRE</Clue> used in <Clue>A GREAT AMBUSH</Clue>{' '}
      are <Clue>S</Clue>, <Clue>U</Clue>, <Clue>T</Clue>, <Clue>G</Clue>,{' '}
      <Clue>R</Clue>, and <Clue>E</Clue>, leaving N and I behind. Therefore, the
      other six letters in <Clue>A GREAT AMBUSH</Clue> (<Clue>A</Clue>,{' '}
      <Clue>A</Clue>, <Clue>A</Clue>, <Clue>M</Clue>, <Clue>B</Clue>,{' '}
      <Clue>H</Clue>), along with an <Clue>N</Clue> and an <Clue>I</Clue> (to
      match the unused <Clue>N</Clue> and <Clue>I</Clue> in{' '}
      <Clue>SUNTIGRE</Clue>) must be the letters in the demonym. The only
      demonym these letters can spell is <Answerize>{ANSWER}</Answerize>, and
      that is our answer. (Carmina must be a fan of conch fritters!)
    </p>
    <Appendix>
      <p>
        Of the witness' statements, the only one that can apply to the Inspector
        is "The suspect was complaining about how much time they spent at work
        looking for the right solution." Therefore, the Inspector (and not the
        Chemist) stole Morne Trois Pitons National Park from Dominica.
      </p>
      <p>
        Similarly, the only statement that can apply to the Electrician is "The
        suspect told a story about a time at work when they got thrown backwards
        by an unexpectedly strong current. They were eating chili." Therefore,
        the Electrician (and not the Aquaculturist) stole the ports from Saint
        Lucia.
      </p>
      <p>
        If the Electrician committed the crime in Saint Lucia, the Aquaculturist
        must have committed the crime in Equatorial Guinea, which means that
        once again, the Chemist did not.{' '}
      </p>
      <p>
        The only statement that can apply to the Magician is "The suspect said
        they were pretty good at delivery, but that their favorite part of the
        job was when they got to surprise someone by pulling out a card and
        presenting to them. They had auburn hair." Therefore, the Magician (and
        not the Messenger) stole the Jamaican music.
      </p>
      <p>
        If the Magician was the one good at delivery, then the only possible
        description for the Messenger must be, "The suspect was on their phone
        saying there was just no way they were going to be able to get all those
        notes out so quickly. They were eating clam chowder." Therefore, the
        Messenger (and not the Musician) stole the works of Jorge Luis Borges
        from Argentina.
      </p>
      <p>
        The statement, "The suspect said nothing gave them more joy than nocking
        an arrow and hitting the bullseye at the center of the target. They were
        eating barbecue." can only apply to the Archer (but is so blatantly
        obvious that teams may try to find an alternate meaning). This means
        that the Archer stole the Mona Lisa from France.
      </p>
      <p>
        If the Archer committed the crime in France, then the statement "The
        suspect was really upset because they said they'd lost their bow and all
        of their spare strings." can only apply to the Musician (who must play a
        violin or other bowed stringed instrument). Therefore, the Musician
        stole the Walls of Dubrovnik from Croatia.
      </p>
      <p>
        The only suspects left, then, are the Genetic Engineer, the Chemist, the
        Painter, the Plumber, and the Glassblower. Each could have committed one
        of two crimes:
      </p>
      <ul>
        <li>Genetic Engineer: Liechtenstein or Malta</li>
        <li>Chemist: Haiti or Liechtenstein</li>
        <li>Painter: Cyprus or Haiti</li>
        <li>Glassblower: Bangladesh or Cyprus</li>
        <li>Plumber: Malta or Bangladesh</li>
      </ul>
      <p>
        The witness in Haiti gives us two clues: "All I remember was the look in
        their vivid green eyes as they asked me where they could buy some
        acetone." Acetone could be used by a Chemist or a Painter, but only the
        Chemist has green eyes, therefore the Chemist stole the Three Bays
        Protected Area from Haiti. (Also, the fact that the suspect "asked"
        where to buy it rules out the Genetic Engineer. Cats can't talk!)
      </p>
      <p>The remaining matches are straightforward.</p>
    </Appendix>

    <style jsx global>{`
      .table-1 td:nth-child(1),
      .table-1 td:nth-child(3),
      .table-2 td,
      .table-3 td,
      .table-4 td:nth-child(1),
      .table-4 td:nth-child(2),
      .table-4 td:nth-child(3),
      .table-4 td:nth-child(7) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .table-3 td:nth-child(4),
      .table-4 td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
