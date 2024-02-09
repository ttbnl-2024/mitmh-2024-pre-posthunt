import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/whats-the-pointillism/0.png';
import image1 from 'assets/solutions/whats-the-pointillism/1.png';

const SLUG = 'whats-the-pointillism';
const ANSWER = `AUTHOR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      This puzzle leverages additive and subtractive color theory to spell out
      messages in 5x6 grids of colors.
    </p>
    <p>
      We notice that the color palette used across both paintings is Red, Green,
      Blue, Cyan, Magenta, and Yellow (in addition to white and black squares).
      These are the{' '}
      <a href="https://en.wikipedia.org/wiki/Primary_color">primary colors</a>{' '}
      under both subtractive color theories (CMYK, where the mixing of pigments
      creates the color black) and additive color theories (RGB, where the
      mixing of light creates the color white).
    </p>
    <p>
      Additional nudges to the subtractive and additive color theory models
      include:
    </p>
    <ul>
      <li>
        The title's reference to pointillism (an art style that takes advantage
        of additive color theory and dots);
      </li>
      <li>
        Venn diagrams with a +/- sign on the artwork and the center space filled
        in;
      </li>
      <li>The colors selected to represent the art critics; and</li>
      <li>Critiques leveled by the art critics</li>
    </ul>
    <p>
      Putting these theories together, we realize the solution involves seeing
      the art from the lens of each critic's color. For example, the Cyan critic
      under a subtractive color theory would only see colors they contributed to
      forming: namely, Cyan, Blue (mixed with magenta), Green (mixed with
      yellow), and Black (mixing all colors).
    </p>
    <p>The resulting perspectives are shown below.</p>
    <p>
      <SheetableImage
        alt='Colored blocks broken down by Cyan, Magenta, and Yellow colors, spelling out "AUT"'
        src={image0}
        title=""
      />
    </p>
    <p>
      <SheetableImage
        alt='Colored blocks broken down by Red, Green, and Blue colors, spelling out "HOR"'
        src={image1}
        title=""
      />
    </p>
    <p>
      Taken together, this spells out the final answer:{' '}
      <Answerize>AUTHOR</Answerize>.
    </p>
    {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
