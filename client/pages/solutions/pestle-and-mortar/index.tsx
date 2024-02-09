import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'pestle-and-mortar';
const ANSWER = `HEROD AGRIPPA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Looking at the fortune cookies, we can see that each fortune describes a
      common adage that has been corrupted in some way by applying a specific
      transformation (sometimes by the same transformation applied to multiple
      words in the phrase).
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Modified adage</th>
          <th>Original adage</th>
          <th>Transformation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Every location that has a porcupine's spine also has a dock</td>
          <td>Where there is a quill there is a quay</td>
          <td>Where there is a will there is a way</td>
          <td>First letter of a word &rarr; QU</td>
        </tr>
        <tr>
          <td>There are numerous methods for drowning a feline</td>
          <td>There's more than one way to sink a cat</td>
          <td>There's more than one way to skin a cat</td>
          <td>Permute a 4-letter word ABCD &rarr; ACDB</td>
        </tr>
        <tr>
          <td>
            Avoid cleaning your soiled communist leader where other people can
            see
          </td>
          <td>Don't wash your dirty Lenin in public</td>
          <td>Don't wash your dirty linen in public</td>
          <td>Swap letters 2 and 4 of a 5-letter word</td>
        </tr>
        <tr>
          <td>A clever insult merits a second clever insult</td>
          <td>One good burn deserves another</td>
          <td>One good turn deserves another</td>
          <td>Replace all Ts with Bs in a word</td>
        </tr>
        <tr>
          <td>Smart people handcraft garments in similar ways</td>
          <td>Great minds knit alike</td>
          <td>Great minds think alike</td>
          <td>Reverse a word and drop one letter</td>
        </tr>
        <tr>
          <td>
            Every writing implement retained counts as a writing implemented
            obtained
          </td>
          <td>A pen saved is a pen earned</td>
          <td>A penny saved is a penny earned</td>
          <td>Drop an "E" sound</td>
        </tr>
        <tr>
          <td>
            Everything that throws trash on the ground isn't necessarily
            advanced in age
          </td>
          <td>All that litters is not old</td>
          <td>All that glitters is not gold</td>
          <td>Drop the first letter of a word</td>
        </tr>
        <tr>
          <td>The demonstration of plagiarism comes from consuming it</td>
          <td>The proof of the duping is in the eating</td>
          <td>The proof of the pudding is in the eating</td>
          <td>Change a 7 letter word ABCDEFG into CBAEFG</td>
        </tr>
        <tr>
          <td>
            Do it now, when the hard-boiled detective movie is sexually
            appealing
          </td>
          <td>Strike while the noir is hot</td>
          <td>Strike while the iron is hot</td>
          <td>Permute a 4-letter word ABCD &rarr; DCAB</td>
        </tr>
        <tr>
          <td>Frighten people quietly and hold a large rifle butt</td>
          <td>Spook softly and carry a big stock</td>
          <td>Speak softly and carry a big stick</td>
          <td>Replace all vowels with Os in a word</td>
        </tr>
        <tr>
          <td>Demons control the fingers of pop stars</td>
          <td>Idol hands are the devil's playthings</td>
          <td>Idle hands are the devil's playthings</td>
          <td>Replace a word with a homophone</td>
        </tr>
        <tr>
          <td>
            Plenty of honest statements are said while flying on fast aircraft
          </td>
          <td>Many a true word is spoken in jets</td>
          <td>Many a true word is spoken in jest</td>
          <td>Swap letters 3 and 4 of a 4-letter word</td>
        </tr>
        <tr>
          <td>
            An increase in water level raises every fictional Kazakhstani
            journalist
          </td>
          <td>A rising tide lifts all Borats</td>
          <td>A rising tide lifts all boats</td>
          <td>Insert an R in a word</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The "lucky numbers" of each fortune specify which sentences it applies to.
      Each sentence hints at the definitions of 3 words (with given
      enumerations, in order). By applying the 3 transformations that are
      associated to this sentence to these words, we get 3 new words that are
      all in a common category. Most of the transformations apply to relatively
      few words, making it possible to be confident the discovered words are
      correct and "backsolve" missing transformations.
    </p>
    <Table className="transform-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Sentence</th>
          <th>Defined words</th>
          <th>Transformations</th>
          <th>New words</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            Postal contents will move like a river with courage, metaphorically
          </td>
          <td>
            mail
            <br />
            flow
            <br />
            spine
          </td>
          <td>
            first letter &rarr; QU
            <br />
            ABCD &rarr; ACDB
            <br />
            swap 2-4 of 5
          </td>
          <td>
            quail
            <br />
            fowl
            <br />
            snipe
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Westerosi with the best story has the job position of an
            old-fashioned prostitute
          </td>
          <td>
            bran
            <br />
            title
            <br />
            harlot
          </td>
          <td>
            first letter &rarr; QU
            <br />
            Ts &rarr; B<br />
            reverse and drop
          </td>
          <td>
            quran
            <br />
            bible
            <br />
            torah
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Drunken Master star will compete on foot against an adolescent
          </td>
          <td>
            jackie
            <br />
            race
            <br />
            teen
          </td>
          <td>
            drop E sound
            <br />
            drop first
            <br />
            first letter &rarr; QU
          </td>
          <td>
            jack
            <br />
            ace
            <br />
            queen
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            Fish parts used for bait will come in cans with scribbled pictures
          </td>
          <td>
            chum
            <br />
            tins
            <br />
            doodles
          </td>
          <td>
            ABCD &rarr; DCAB
            <br />
            vowels &rarr; O<br />
            reverse first 3 and remove middle of 7
          </td>
          <td>
            much
            <br />
            tons
            <br />
            oodles
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Horrible wind and bathroom driers</td>
          <td>
            awful
            <br />
            gust
            <br />
            towels
          </td>
          <td>
            homophone
            <br />
            swap 3-4 of 4<br />
            Ts &rarr; B
          </td>
          <td>
            offal
            <br />
            guts
            <br />
            bowels
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Orthodox Jew will exhale on a toilet, according to a kid</td>
          <td>
            hasid
            <br />
            blow
            <br />
            potty
          </td>
          <td>
            reverse and drop
            <br />
            ABCD &rarr; ACDB
            <br />
            drop E sound
          </td>
          <td>
            dish
            <br />
            bowl
            <br />
            pot
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Firefly captain will be pleasant but not fresh</td>
          <td>
            mal
            <br />
            nice
            <br />
            stale
          </td>
          <td>
            insert R<br />
            homophone
            <br />
            swap 2-4 of 5
          </td>
          <td>
            marl
            <br />
            gneiss
            <br />
            slate
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            A short form of motor-vehicle-based public transportation will have
            grave importance
          </td>
          <td>
            minibus
            <br />
            serious
            <br />
            status
          </td>
          <td>
            reverse first 3 and remove middle of 7<br />
            drop E sound
            <br />
            insert R
          </td>
          <td>
            nimbus
            <br />
            cirrus
            <br />
            stratus
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>In olden times, you also have heaviness</td>
          <td>
            thee
            <br />
            too
            <br />
            weight
          </td>
          <td>
            insert R<br />
            homophone
            <br />
            drop first
          </td>
          <td>
            three
            <br />
            two
            <br />
            eight
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Antacid judge will be closed</td>
          <td>
            tum
            <br />
            rater
            <br />
            shut
          </td>
          <td>
            Ts &rarr; B<br />
            reverse and drop
            <br />
            ABCD &rarr; DCAB
          </td>
          <td>
            bum
            <br />
            rear
            <br />
            tush
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Crush to a paste small earring and chair</td>
          <td>
            mash
            <br />
            stud
            <br />
            seat
          </td>
          <td>
            drop first
            <br />
            ABCD &rarr; DCAB
            <br />
            vowels &rarr; O
          </td>
          <td>
            ash
            <br />
            dust
            <br />
            soot
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>Unadulterated seed or pet will be in ill health</td>
          <td>
            pure
            <br />
            chia
            <br />
            ailing
          </td>
          <td>
            swap 3-4 of 4<br />
            swap 3-4 of 4<br />
            vowels &rarr; O
          </td>
          <td>
            puer
            <br />
            chai
            <br />
            oolong
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each of these new sets of words is associated with one form of divination,
      whose name (which are in alphabetical order) goes in the blanks:
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>#</th>
          <th>New words</th>
          <th>Theme</th>
          <th>Divination</th>
          <th>Extracted letters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>quail, fowl, snipe</td>
          <td>Birds</td>
          <td>Augury</td>
          <td>8 = R</td>
        </tr>
        <tr>
          <td>2</td>
          <td>quran, bible, torah</td>
          <td>Books</td>
          <td>Bibliomancy</td>
          <td>12 = A</td>
        </tr>
        <tr>
          <td>3</td>
          <td>jack, ace, queen</td>
          <td>Playing cards</td>
          <td>Cartomancy</td>
          <td>6 = A</td>
        </tr>
        <tr>
          <td>4</td>
          <td>much, tons, oodles</td>
          <td>"Lots"</td>
          <td>Cleromancy</td>
          <td>3 = R</td>
        </tr>
        <tr>
          <td>5</td>
          <td>offal, guts, bowels</td>
          <td>Entrails</td>
          <td>Haruspicy</td>
          <td>11 = P</td>
        </tr>
        <tr>
          <td>6</td>
          <td>dish, bowl, pot</td>
          <td>Basins</td>
          <td>Lecanomancy</td>
          <td>2 = E</td>
        </tr>
        <tr>
          <td>7</td>
          <td>marl, slate, gneiss</td>
          <td>Rocks</td>
          <td>Lithomancy</td>
          <td>9 = I</td>
        </tr>
        <tr>
          <td>8</td>
          <td>cirrus, stratus, nimbus</td>
          <td>Clouds</td>
          <td>Nephomancy</td>
          <td>1 = H</td>
        </tr>
        <tr>
          <td>9</td>
          <td>three, two, eight</td>
          <td>Numbers</td>
          <td>Numerology</td>
          <td>4 = O</td>
        </tr>
        <tr>
          <td>10</td>
          <td>bum, rear, tush</td>
          <td>Rumps</td>
          <td>Rumpology</td>
          <td>10 = P</td>
        </tr>
        <tr>
          <td>11</td>
          <td>dust, soot, ash</td>
          <td>Cinders</td>
          <td>Spodomancy</td>
          <td>5 = D</td>
        </tr>
        <tr>
          <td>12</td>
          <td>puer, chai, oolong</td>
          <td>Tea</td>
          <td>Tasseography</td>
          <td>7 = G</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Sorting the extracted letters by their numbers, we get the answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .transform-table td:nth-child(4) {
        white-space: nowrap;
      }
      .transform-table td:nth-child(1),
      .extract-table td:nth-child(4n + 1) {
        text-align: center;
      }
      .transform-table td:nth-child(2n + 3),
      .extract-table td:nth-child(5) {
        text-transform: uppercase;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
