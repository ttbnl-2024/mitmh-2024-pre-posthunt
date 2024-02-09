import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/encore/0.png';
import image1 from 'assets/solutions/encore/1.png';

const SLUG = 'encore';
const ANSWER = `TOWROPE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We first recognize that this is a tatting pattern. There are two kinds of
      tatting: needle tatting and shuttle tatting. Either one works for this
      puzzle.
    </p>
    <p>
      To make the pattern easier to follow without explicitly giving away the
      letters being created (not saying "now join to the picot that forms the
      arm of the 'A'"), the picots in the center ring are numbered.
    </p>
    <p>Following the pattern yields this piece:</p>
    <p>
      <SheetableImage
        alt=""
        src={image0}
        title=""
        className="mx-auto w-[500px]"
      />
    </p>
    <p>Here's a mapping of how the pattern works:</p>
    <p>
      <SheetableImage
        alt=""
        src={image1}
        title=""
        className="mx-auto w-[500px]"
      />
    </p>
    <p>Annotated guide to the pattern:</p>
    <p>Ds: double stitch (the basic tatting stitch, just two knots)</p>
    <p>R: ring, formed out of a specified number of doubles in a loop</p>
    <p>Ch: chain, a straight line of doubles</p>
    <p>Cl r: close ring</p>
    <p>P: picot (an extended space between doubles that forms a small loop)</p>
    <p>
      <b>To make the center ring: </b>R, 5 ds, p[1], 5 ds, p[2], 3 ds, p[3], 6
      ds, p[4], 3 ds, p[5], 4 ds, p[6], 3 ds, p[7], 3 ds, p[8], 2 ds, p[9], 2
      ds, cl r.
    </p>
    <p>
      <b>To make the T: </b>Ch, 3 ds, join to p[1], 4 ds, p[A], 4 ds. R, 1 ds,
      p[B], 1 ds, p[C], 1 ds, cl r. Ch, 3 ds, p, 3 ds. R, 6 ds, cl r. Ch, 3 ds,
      join to p, 3 ds, join to p[B], 3 ds, p, 3 ds. R, 6 ds, cl r. Ch, 3 ds,
      join to p, 3 ds, join to p[C], 4 ds, join to p[A], 4 ds, join to p[1],{' '}
    </p>
    <p>
      <b>To move to the next picot: </b>2 ds, join to p[2],{' '}
    </p>
    <p>
      <b>To create the first O: </b>25 ds, join to p[2],{' '}
    </p>
    <p>
      <b>To move to the next picot: </b>2 ds, join to p[3],{' '}
    </p>
    <p>
      <b>To create the W: </b>4 ds, p, 4 ds. R, 6 ds, cl r. Ch, 4 ds, join to p,
      4 ds, join to p[3], 8 ds. R, 6 ds, cl r. Ch, 8 ds, join to p[4], 4 ds, p,
      4 ds. R, 6 ds, cl r. Ch, 4 ds, join to p, 4 ds, join to p[4],{' '}
    </p>
    <p>
      <b>To move to the next picot: </b>2 ds, join to p[5],{' '}
    </p>
    <p>
      <b>To create the R: </b>5 ds, p, 3 ds. R, 6 ds, cl r. Ch, 10 ds, join to
      p, 6 ds, join to p[6],{' '}
    </p>
    <p>
      <b>To move to the next picot: </b>1 ds, join to p[7],{' '}
    </p>
    <p>
      <b>To create the second O: </b>25 ds, join to p[7],{' '}
    </p>
    <p>
      <b>To move to the next picot: </b>2 ds, join to p[8],{' '}
    </p>
    <p>
      <b>To create the P: </b>3 ds, p[D], 3 ds, p, 5 ds. R, 6 ds, cl r. Ch, 14
      ds, join to p, 3 ds, join to p[D], 3 ds, join to p[8],{' '}
    </p>
    <p>
      <b>To move to the next picot: </b>2 ds, join to p[9],{' '}
    </p>
    <p>
      <b>To make the e: </b>7 ds, tighten stitches on ch so it curves slightly,
      p, 17 ds, join to p, tie and cut.
    </p>
    <p>
      Starting from where the pattern begins and reading clockwise, we see these
      letters: <Answerize>{ANSWER}</Answerize>, which fits the enumeration and
      is the answer.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
