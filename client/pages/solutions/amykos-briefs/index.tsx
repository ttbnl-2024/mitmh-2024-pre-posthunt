import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/amykos-briefs/0.png';
import image1 from 'assets/solutions/amykos-briefs/1.png';
import image2 from 'assets/solutions/amykos-briefs/2.png';
import image3 from 'assets/solutions/amykos-briefs/3.png';
import image4 from 'assets/solutions/amykos-briefs/4.png';
import image5 from 'assets/solutions/amykos-briefs/5.png';
import image6 from 'assets/solutions/amykos-briefs/6.png';

const SLUG = 'amykos-briefs';
const ANSWER = `OUTREACH`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This puzzle is presented as an amicus curiae brief to the Supreme Court.
    </p>
    <p>
      The second footnote in the brief draws attention to the fact that the
      citations in the Table of Authorities reference real puzzle titles, but
      "despite a promising start" do not reflect the actual contents of the
      brief.
    </p>
    <p>
      Examining the Table of Authorities notes that the start of every puzzle
      title listed spells out a message:{' '}
      <Monospace>
        TAKE THE FIRST LETTERS FROM THE SIDE OF INTRODUCTION TO SPELL OUT NEXT
        STEP
      </Monospace>
      .
    </p>
    <p>
      Following this instruction and taking the first letters from the
      introduction spells out the next instruction:{' '}
      <Monospace>
        FAIRLY USING AMICUS BRIEF LINE AND WORD MATCHES IN ARGUMENT
      </Monospace>
      .
    </p>
    <p>
      This implies we should compare the Amicus Curiae puzzle against some other
      document - by looking up docket 22-293, we discover that there were five
      amicus curiae briefs filed in the case of the Supreme Court case for{' '}
      <i>Novak v. City of Parma</i>: however, only{' '}
      <a href="https://www.supremecourt.gov/DocketPDF/22/22-293/242292/20221003125252896_35295545_1-22.10.03%20-%20Novak-Parma%20-%20Onion%20Amicus%20Brief.pdf">
        The Onion's
      </a>{' '}
      matches the brief exactly.
    </p>
    <p>
      Reinforcing that decision, the final footnote of the brief reinforces that
      match by saying "this brief is like an onion... and even if you recognize{' '}
      <i>the onion</i> (emphasis mine) for what it is, you're probably going to
      cry".
    </p>
    <p>
      Comparing <i>The Onion</i>'s amicus brief with the puzzle and highlighting
      where the words match spells out letters in the highlighted text.
    </p>
    <p>
      <b>Section I:</b>
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letter "O".'
        src={image0}
        title=""
      />
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letter "U".'
        src={image1}
        title=""
      />
    </p>
    <p>
      <b>Section II:</b>
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letter "T".'
        src={image2}
        title=""
      />
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letter "R".'
        src={image3}
        title=""
      />
    </p>
    <p>
      <b>Section III:</b>
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letter "E".'
        src={image4}
        title=""
      />
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letter "A".'
        src={image5}
        title=""
      />
    </p>
    <p>
      <b>Section IV:</b>
    </p>
    <p>
      <SheetableImage
        alt='Two blocks of side-by-side text, with mirrored letters highlighted in yellow. The highlighted area spells out the letters "C" and "H".'
        src={image6}
        title=""
      />
    </p>
    <p>
      Taken in order, these duplicate selections spell out the puzzle's
      solution: <Answerize>OUTREACH</Answerize>.
    </p>
    <Attributions>
      <p>
        Somewhat unsurprisingly, this puzzle uses redacted versions of the Cover
        Page and Conclusions page of{' '}
        <a href="https://www.supremecourt.gov/DocketPDF/22/22-293/242292/20221003125252896_35295545_1-22.10.03%20-%20Novak-Parma%20-%20Onion%20Amicus%20Brief.pdf">
          <i>The Onion</i>'s amicus brief in the case of{' '}
          <i>Novak v City of Parma</i>
        </a>
        , as well as key passages of the text (as outlined above).
      </p>
    </Attributions>
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
