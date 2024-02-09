import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import InfoIcon from 'components/info_icon';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/asphodel/0.png';
import image1 from 'assets/solutions/asphodel/1.png';
import image2 from 'assets/solutions/asphodel/2.png';
import image3 from 'assets/solutions/asphodel/3.png';
import image4 from 'assets/solutions/asphodel/4.png';
import image5 from 'assets/solutions/asphodel/5.png';
import image6 from 'assets/solutions/asphodel/6.png';
import image7 from 'assets/solutions/asphodel/7.png';
import image8 from 'assets/solutions/asphodel/8.png';
import image9 from 'assets/solutions/asphodel/9.png';

const SLUG = 'asphodel';
const ANSWER = `LET IT SNOW`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The flavortext's description of the "ferrymaster to the deceased" doesn't
      match the typical description of Charon. Looking up the phrase reveals
      results for the video game <i>Spiritfarer</i>, whose protagonist, Stella,
      does match the description. The art above the puzzle (showing the
      Everdoor) also serves as a confirmer.
    </p>
    <p>
      Each flower in the puzzle is{' '}
      <a href="https://spiritfarer.fandom.com/wiki/Spirit_Flower">
        associated directly
      </a>{' '}
      with one of the spirits in the game (and indeed the game can also be found
      by identifying and quote-searching a sufficient number of these flowers
      together):
    </p>
    <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>
            Flower
            <sup>
              <a id="ftnt_ref1" href="#ftnt1">
                [1]
              </a>
            </sup>
          </th>
          <th>Spirit</th>
          <th>Building</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image0}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            (Poppy) <Clue>ANEMONE</Clue>
          </td>
          <td>Beverly</td>
          <td>
            <Clue>FARMHOUSE</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image1}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            (White) <Clue>ASPHODEL</Clue>
          </td>
          <td>Gwen</td>
          <td>
            <Clue>LODGE</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image2}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            <Clue>FENNEL</Clue>
          </td>
          <td>
            Mickey
            <sup>
              <a id="ftnt_ref2" href="#ftnt2">
                [2]
              </a>
            </sup>
          </td>
          <td>
            <Clue>CRIB</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image3}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            <Clue>FLY AGARIC</Clue> (mushroom)
          </td>
          <td>Stanley</td>
          <td>
            <Clue>PLAYROOM</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image4}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            (Common) <Clue>MALLOW</Clue>
          </td>
          <td>Astrid</td>
          <td>
            <Clue>BUNGALOW</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image5}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            <Clue>OXEYE DAISY</Clue>
          </td>
          <td>Summer</td>
          <td>
            <Clue>SANCTUARY</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image6}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            <Clue>PEACE LILY</Clue>
          </td>
          <td>Alice</td>
          <td>
            <Clue>COTTAGE</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image7}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            (Common) <Clue>POPPY</Clue>
          </td>
          <td>Gustav</td>
          <td>
            <Clue>GALLERY</Clue>
          </td>
        </tr>
        <tr>
          <td>
            <SheetableImage
              alt=""
              src={image8}
              title=""
              className="w-[100px]"
            />
          </td>
          <td>
            <Clue>WHITE LILY</Clue>
          </td>
          <td>Atul</td>
          <td>
            <Clue>WORKSHOP</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The flowers can be identified with a name that fits in the blanks
      corresponding to the flower; extracting these letters spells{' '}
      <Clue>HOME NAMES</Clue>.
    </p>
    <p>
      <i>Spiritfarer</i> has the player taking care of spirits on their way to
      the afterlife&mdash;and a key fixture of this is building each spirit their own
      house on Stella's boat, each with a fixed size and shape. (The wiki page
      for each house carries this information in a "layout" tab providing the
      exact shape; using the exterior image is misleading, as buildings can be
      embellished with roofs or scaffolding if it has enough empty space.) The
      nine houses corresponding to spirits in this puzzle fit exactly into the
      shape provided without rotation.
    </p>
    <p>
      The phrase extracted from the flower names cues a look at the name of each
      of these houses. Each type of flower has as many copies of itself in the
      grid as the number of letters in the corresponding house (ignoring the
      spirit's name). Exactly one such copy is in the corresponding house
      (circled below). Write the name of this house on the flowers in reading
      order, then extract the letter that lands in the correct house. Read the
      letters left to right for the final answer,{' '}
      <Answerize>{ANSWER}</Answerize>, befitting the flavortext's description of
      "a white expanse".
    </p>
    <InfoIcon>Click on the image below to open it in a new window.</InfoIcon>
    <p>
      <a href={image9} target="_blank">
        <SheetableImage alt="" src={image9} title="" />
      </a>
    </p>
    <AuthorsNotes>
      <p>
        <a id="ftnt1" href="#ftnt_ref1">
          [1]
        </a>{' '}
        As named in-game. The fly agaric mushroom is not a flower in real life,
        but is considered to be such by the game.
      </p>
      <p>
        <a id="ftnt2" href="#ftnt_ref2">
          [2]
        </a>{' '}
        Bruce and Mickey come and go as a pair, but the fennel is explicitly
        listed as Mickey's flower. (Bruce's is not shown in the game, but the
        artbook says he wears a heliotrope.) This distinction is unimportant to
        the puzzle.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
