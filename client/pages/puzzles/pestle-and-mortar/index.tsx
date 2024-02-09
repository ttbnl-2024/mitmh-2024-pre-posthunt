import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import Crossword, { _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/pestle-and-mortar/0.png';

const SLUG = 'pestle-and-mortar';

// prettier-ignore
const blanks = [
  // length - numbered blank - number - clue
  [6, 5, 8, 'Postal contents will move like a river with courage, metaphorically (4 4 5)'],
  [11, 8, 12, 'Westerosi with the best story has the job position of an old-fashioned prostitute (4 5 6)'],
  [10, 2, 6, 'Drunken Master star will compete on foot against an adolescent (6 4 4)'],
  [10, 4, 3, 'Fish parts used for bait will come in cans with scribbled pictures (4 4 7)'],
  [9, 6, 11, 'Horrible wind and bathroom driers (5 4 6)'],
  [11, 2, 2, 'Orthodox Jew will exhale on a toilet, according to a kid (5 4 5)'],
  [10, 2, 9, 'Firefly captain will be pleasant but not fresh (3 4 5)'],
  [10, 4, 1, 'A short form of motor-vehicle-based public transportation will have grave importance (7 7 6)'],
  [10, 6, 4, 'In olden times, you also have heaviness (4 3 6)'],
  [9, 4, 10, 'Antacid judge will be closed (3 5 4)'],
  [10, 4, 5, 'Crush to a paste small earring and chair (4 4 4)'],
  [12, 7, 7, 'Unadulterated seed or pet will be in ill health (4 4 6)']
];

function makeCrosswordData(row) {
  const a = Array(row[0]).fill(_);
  a[row[1] - 1] = row[2];
  return a;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          These fortunes are trying to give advice about the future, but it's
          all messed up.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click to open the image in a new window. The text is available in
          copy-to-sheet.
        </InfoIcon>
        <a target="_blank" href={image0}>
          <SheetableImage alt="fortune cookie slips" src={image0} title="" />
        </a>
        <p className={cx(HIDDEN_CLASS)}>
          Every location that has a porcupine's spine also has a dock (5, 5, 2,
          1, 5, 5, 2, 1, 4)
          <br />
          Lucky numbers: 1, 2, 3<br />
          <br />
          There are numerous methods for drowning a feline (5'1, 4, 4, 3, 3, 2,
          4, 1, 3)
          <br />
          Lucky numbers: 1, 6<br />
          <br />
          Avoid cleaning your soiled communist leader where other people can see
          (3'1, 4, 4, 5, 5, 2, 6)
          <br />
          Lucky numbers: 1, 7<br />
          <br />
          A clever insult merits a second clever insult (3, 4, 4, 8, 7)
          <br />
          Lucky numbers: 2, 5, 10
          <br />
          <br />
          Smart people handcraft garments in similar ways (5, 5, 4, 5)
          <br />
          Lucky numbers: 2, 6, 10
          <br />
          <br />
          Every writing implement retained counts as a writing implemented
          obtained (1, 3, 5, 2, 1, 3, 6)
          <br />
          Lucky numbers: 3, 6, 8<br />
          <br />
          Everything that throws trash on the ground isn't necessarily advanced
          in age (3, 4, 7, 2, 3, 3)
          <br />
          Lucky numbers: 3, 9, 11
          <br />
          <br />
          The demonstration of plagiarism comes from consuming it (3, 5, 2, 3,
          6, 2, 2, 3, 6)
          <br />
          Lucky numbers: 4, 8<br />
          <br />
          Do it now, when the hard-boiled detective movie is sexually appealing
          (6, 5, 3, 4, 2, 3)
          <br />
          Lucky numbers: 4, 10, 11
          <br />
          <br />
          Frighten people quietly and hold a large rifle butt (5, 6, 3, 5, 1, 3,
          5)
          <br />
          Lucky numbers: 4, 11, 12
          <br />
          <br />
          Demons control the fingers of pop stars (4, 5, 3, 3, 5'1, 10)
          <br />
          Lucky numbers: 5, 7, 9<br />
          <br />
          Plenty of honest statements are said while flying on fast aircraft (4,
          1, 4, 4, 2, 6, 2, 4)
          <br />
          Lucky numbers: 5, 12, 12
          <br />
          <br />
          An increase in water level raises every fictional Kazakhstani
          journalist (1, 6, 4, 5, 3, 6)
          <br />
          Lucky numbers: 7, 8, 9<br />
        </p>

        {blanks.map((row, i) => (
          <div key={`blanks-${i}`} className="my-4">
            <span className="inline-block w-[2em]">{i + 1}.</span>
            <br className={cx(HIDDEN_CLASS)} />
            <Crossword data={[makeCrosswordData(row)]} />
            <br className={cx(NO_COPY_CLASS)} />
            <span className="inline-block pl-8 mt-2">{row[3]}</span>
            <br className={cx(HIDDEN_CLASS)} />
            <br className={cx(HIDDEN_CLASS)} />
          </div>
        ))}

        <table className="blanks-table">
          <tbody></tbody>
        </table>
      </div>

      <style jsx global>{`
        .crossword {
          display: inline-block;
          margin-bottom: -0.5em; // adjust baseline to match the number
        }
        .crossword.copy-only {
          display: none;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
