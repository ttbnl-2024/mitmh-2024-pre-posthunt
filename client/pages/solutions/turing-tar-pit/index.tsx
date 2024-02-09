import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/turing-tar-pit/0.png';

const SLUG = 'turing-tar-pit';
const ANSWER = `FACEOFF`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a presentation of something called "Turing Tar-pit".
      Each slide has text on it that refers to a different{' '}
      <a href="https://esolangs.org/wiki/Esoteric_programming_language">
        esoteric programming language
      </a>
      .
    </p>
    <p>
      The puzzle name references Alan Perlin's{' '}
      <a href="http://www.cs.yale.edu/homes/perlis-alan/quotes.html">
        Epigrams on Programming
      </a>
      , published in 1982. Epigram 54 (confirmed by the 54th anniversary) coined
      the term.
    </p>
    <p>
      Once we deduce what the program contents are (see Appendix), we find that
      every program takes no input and outputs four numbers separated by :
      (colon) and , (comma). These are an epigram number, and 3 indices into the
      text of that epigram.
    </p>
    <Table className="language-table">
      <thead>
        <tr>
          <th>Language</th>
          <th>Output</th>
          <th>Epigram</th>
          <th>Index 1</th>
          <th>Index 2</th>
          <th>Index 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CHEF</td>
          <td>42:23,12,13</td>
          <td>42</td>
          <td>23</td>
          <td>12</td>
          <td>13</td>
        </tr>
        <tr>
          <td>PIET</td>
          <td>13:54,2,5</td>
          <td>13</td>
          <td>54</td>
          <td>2</td>
          <td>5</td>
        </tr>
        <tr>
          <td>SHAKESPEARE</td>
          <td>86:19,26,16</td>
          <td>86</td>
          <td>19</td>
          <td>26</td>
          <td>16</td>
        </tr>
        <tr>
          <td>ROCKSTAR</td>
          <td>57:5,13,37</td>
          <td>57</td>
          <td>5</td>
          <td>13</td>
          <td>37</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Epigram</th>
          <th colSpan={3}>Extracted letters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>42</td>
          <td>
            You can measu<u>RE</u> a programm<u>E</u>r's perspective by noting
            his attitude on the continuing vitality of FORTRAN.
          </td>
          <td>E</td>
          <td>R</td>
          <td>E</td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            I<u>F</u> tw<u>O</u> people write exactly the same program, each
            should be put i<u>N</u>to microcode and then they certainly won't be
            the same.
          </td>
          <td>N</td>
          <td>F</td>
          <td>O</td>
        </tr>
        <tr>
          <td>86</td>
          <td>
            We kid ourselves i<u>F</u> we <u>T</u>hink th<u>A</u>t the ratio of
            procedure to data in an active data-base system can be made
            arbitrarily small or even kept small.
          </td>
          <td>T</td>
          <td>A</td>
          <td>F</td>
        </tr>
        <tr>
          <td>57</td>
          <td>
            It is <u>E</u>asier to <u>C</u>hange the specification to <u>F</u>it
            the program than vice versa.
          </td>
          <td>E</td>
          <td>C</td>
          <td>F</td>
        </tr>
      </tbody>
    </Table>
    <p>
      When indexing into the epigrams using the numbers given, we get:{' '}
      <Clue>ENTER </Clue>
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      Thank you to Dylan Beattie and his talk on the art of code for inspiring
      this puzzle. I fell in love with the concept of code that compiles in a
      computer as one thing and in a different medium as another thing. Also,
      yes, that hot chocolate recipe is the real base for my hot chocolate
      slurry base. Deliciously dark and no cocoa powder solids.
    </AuthorsNotes>
    <Appendix>
      <h3>Chef</h3>
      <p>
        <a href="https://esolangpark.vercel.app/ide/chef">
          https://esolangpark.vercel.app/ide/chef
        </a>
      </p>
      <p>Chocolate &amp; Hot English Fudge.</p>
      <p>
        (Author's note: this is a mostly real hot chocolate recipe, but is
        renamed as such to acrostic clue CHEF)
      </p>
      <p>
        Ingredients.
        <br />
        58 g sugar
        <br />
        44 g brown sugar
        <br />
        49 ml milk
        <br />
        51 ml heavy cream
        <br />
        50 g dark cocoa powder
        <br />
        52 g light cocoa powder
      </p>
      <p>
        Method.
        <br />
        Put heavy cream into the mixing bowl.
        <br />
        Put milk into the mixing bowl.
        <br />
        Put brown sugar into the mixing bowl.
        <br />
        Put dark cocoa powder into the mixing bowl.
        <br />
        Put milk into the mixing bowl.
        <br />
        Put brown sugar into the mixing bowl.
        <br />
        Put heavy cream into the mixing bowl.
        <br />
        Put dark cocoa powder into the mixing bowl.
        <br />
        Put sugar into the mixing bowl.
        <br />
        Put dark cocoa powder into the mixing bowl.
        <br />
        Put light cocoa powder into the mixing bowl.
        <br />
        Liquefy contents of the mixing bowl.
        <br />
        Pour contents of the mixing bowl into the baking dish.
      </p>
      <p>Serves 1.</p>
      <h3>Piet</h3>
      <p>
        <a href="https://gabriellesc.github.io/piet/">
          https://gabriellesc.github.io/piet/
        </a>
      </p>
      <p>
        <SheetableImage alt="" src={image0} title="" />
      </p>
      <h3>Shakespeare</h3>
      <p>
        <a href="https://esolangpark.vercel.app/ide/shakespeare">
          https://esolangpark.vercel.app/ide/shakespeare
        </a>
      </p>
      <p>A puzzling shouting match.</p>
      <p>
        Romeo, a young man with a remarkable patience.
        <br />
        Hamlet, the flatterer of Andersen Insulting A/S.
      </p>
      <p>
        Act I: Hostile Work Environment.
        <br />
        Scene I: Longwinded Insults.
      </p>
      <p>[Enter Hamlet and Romeo]</p>

      <p>
        Hamlet:
        <br />
        You lying stupid fatherless big smelly half-witted coward!
        <br />
        You are as stupid as the difference between a handsome proud rich brave
        hero and thyself!
        <br />
        You are the sum of the sum of a golden king and a rich happy lord and
        thyself.
        <br />
        Open your heart!
      </p>

      <p>
        You are as honest as the difference between the difference between a
        brave noble mighty handsome proud trustworthy hero and a warm sunny
        summer's day and a black cat.
        <br />
        Speak your mind.
      </p>
      <p>
        Romeo:
        <br />
        You are as cowardly as the difference between a big mighty proud golden
        kingdom and a horse.
        <br />
        You are the sum of yourself and a rich gentle plum.
        <br />
        Open your heart.
      </p>

      <p>
        Hamlet:
        <br />
        Thou art the difference between thyself and a big beautiful blossoming
        warm rose.
        <br />
        Thou art the sum of a happy flower and thyself.
        <br />
        Speak your mind!
      </p>

      <p>
        Romeo:
        <br />
        You are the quotient between myself and a fine big plum.
        <br />
        You are the product of yourself and a yellow pony.
        <br />
        You are as bold as the sum of yourself and the sum of a white cat and a
        red door.
        <br />
        Open your heart.
      </p>

      <p>
        Hamlet:
        <br />
        Speak your mind!
      </p>

      <p>
        Romeo:
        <br />
        You are the quotient between myself and a big fine plum.
        <br />
        You are the sum of the sum of yourself and a bold red rose and a king.
        <br />
        Open your heart.
      </p>
      <p>[Exit Romeo]</p>
      <p>[Exeunt]</p>
      <h3>Rockstar</h3>
      <p>
        <a href="https://codewithrockstar.com/online">
          https://codewithrockstar.com/online
        </a>
      </p>
      <p>
        Life is never forever
        <br />
        Shout life
        <br />
        The void is nothing
        <br />
        Your gaze is truly eldritch
        <br />
        Cast your gaze into the void
        <br />
        Shout the void
        <br />
        Death is a nanosecond
        <br />
        Let life be over death
        <br />
        Turn down life
        <br />
        Whisper life
        <br />
        Your heart is real love
        <br />
        Cast your heart into the void
        <br />
        Whisper the void
        <br />
        Time is a lie
        <br />
        Whisper time
        <br />
        Your heart is real love
        <br />
        Cast your heart into the void
        <br />
        Whisper the void
        <br />
        Memory is not eternal
        <br />
        Say memory
      </p>
    </Appendix>
    <style jsx global>{`
      .language-table th:nth-child(n + 3),
      .language-table td:nth-child(n + 3),
      .extract-table th:nth-child(3),
      .extract-table td:nth-child(n + 3) {
        text-align: center !important;
      }
      .extract-table td:nth-child(n + 3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
