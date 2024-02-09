import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/a-divine-comeowdy/0.png';

const SLUG = 'a-divine-comeowdy';
const ANSWER = `CUTLERY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The first thing to notice is that two different properties are being
      referenced through the text: Dante's <i>Purgatorio</i> (cryptically referred to
      in the flavortext: <i>(purr) Spanish cat River = </i>purr-gato-rio; the
      "pet gate" refers to St. Peter's Gate), and T.S. Eliot/Andrew Lloyd
      Webber's <i>Cats</i>. Each cat has been matched with a punishment/circumstance
      befitting their character. The narrator, M., referred to in the flavortext
      is the narrator of <i>Cats</i>, Munkustrap.
    </p>
    <p>
      Each of the beds in the image represents one of the sinful terraces in
      Purgatorio, with catnip representing "Earthly Paradise" at top.
    </p>
    <p>
      <SheetableImage
        alt=""
        src={image0}
        title=""
        className="mx-auto h-[700px]"
      />
    </p>
    <p>
      Our cat encounters the sins in a "purrverse" manner, which turns out to be
      alphabetical by sin (rather than any way a smart cat might ascend a tree):
    </p>
    <ol>
      <li>
        <b>Envy / Grizabella</b>: Grizabella is envious ("jelly") of the life
        she had as a Jellicle cat.
      </li>
      <li>
        <b>Gluttony / Bustopher Jones</b>: Bustopher Jones is a fat cat
        described as eating endless quantities of leftover food from fancy
        members' clubs.
      </li>
      <li>
        <b>Greed / Mungojerrie</b>: Mungojerrie is a thief, known for stealing
        valuables from his family, also the inspiration for the band Mungo Jerry
        known for the song "In the Summertime".
      </li>
      <li>
        <b>Lust / Bombalurina</b>: Bombalurina is a cat known for flirting
        forwardly with many of the other cats. She's also strikingly red (and
        was played in the movie by Taylor Swift, known for the album Red).
      </li>
      <li>
        <b>Pride / Mr. Mistoffelees</b>: Mr. Mistoffelees's signature song
        repeats over and over how there is no more incredible a cat than he.
      </li>
      <li>
        <b>Sloth / Jennyanydots</b>: Jennyanydots is a lazy "Gumbie Cat"
        described as sitting endlessly although she runs the house at night.
      </li>
      <li>
        <b>Wrath / Macavity</b>: Macavity is a villainous cat known for his
        violent actions against the rest of the Jellicle cats.
      </li>
    </ol>
    <p>
      The beds in the puzzle diagram get smaller as we go up, as do the tiers in
      Purgatorio. If we assign the associated cat from Cats to its bed/terrace
      level by sin, then extract one letter from each cat name according to the
      number of the ball toys beneath each bed, then sort in order of how many
      emojis are in its respective paragraph, we get the answer:{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Tier Order</th>
          <th>Terrace</th>
          <th>Ball Toys</th>
          <th>Cat</th>
          <th>Emojis</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td>Wrath</td>
          <td>3</td>
          <td>MACAVITY</td>
          <td>1</td>
          <td>C</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Greed</td>
          <td>2</td>
          <td>MUNGOJERRIE</td>
          <td>2</td>
          <td>U</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Gluttony</td>
          <td>4</td>
          <td>BUSTOPHERJONES</td>
          <td>3</td>
          <td>T</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Envy</td>
          <td>8</td>
          <td>GRIZABELLA</td>
          <td>4</td>
          <td>L</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Pride</td>
          <td>10</td>
          <td>MRMISTOFFELEES</td>
          <td>5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Lust</td>
          <td>8</td>
          <td>BOMBALURINA</td>
          <td>6</td>
          <td>R</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sloth</td>
          <td>5</td>
          <td>JENNYANYDOTS</td>
          <td>7</td>
          <td>Y</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <AuthorsNotes>
      <p>
        JJ: As not the biggest fan of the musical/movie, I might have argued
        that there's a special place in hell for <i>Cats</i>, but these seven terraces
        will have to do.
      </p>
    </AuthorsNotes>
    <Attributions>
      Images are used by fair use.
      <br />
      Cat tree is a{' '}
      <a href="https://www.maupets.com/products/ivy">
        product photo from the Mau Lifestyle store
      </a>.
      <br />
      Catnip is a{' '}
      <a href="https://www.frontiercoop.com/products/frontier-co-op-catnip-herb-cut-sifted-organic-1-lb">
        product photo from the Frontier Co-Op store
      </a>.
    </Attributions>
    <style jsx global>{`
      .solution-table th:nth-child(2n + 1),
      .solution-table td:nth-child(2n + 1),
      .solution-table td:nth-child(6) {
        text-align: center;
      }
      .solution-table td:nth-child(4),
      .solution-table td:nth-child(6) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
