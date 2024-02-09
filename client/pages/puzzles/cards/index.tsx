import React, { FC, useRef } from 'react';

import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/cards/0.png';
import image1 from 'assets/puzzles/cards/1.png';
import image2 from 'assets/puzzles/cards/2.png';
import image3 from 'assets/puzzles/cards/3.png';
import image4 from 'assets/puzzles/cards/4.png';
import image5 from 'assets/puzzles/cards/5.png';
import image6 from 'assets/puzzles/cards/6.png';
import image7 from 'assets/puzzles/cards/7.png';
import image8 from 'assets/puzzles/cards/8.png';

const SLUG = 'cards';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <div className="space-y-3">
          <SheetableImage
            alt="Four spreads of facedown cards at the four corners of the table - each pile has a different number of cards. In front of one pile, there is a pile of three aces and a joker, and a three of hearts in isolation. In front of another pile, there are 3 5's and 2 2's in a pile, and a three of diamonds in isolation. In the middle of the table is a stack of facedown cards and an unmarked face up card."
            src={image0}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="A grid of cards are laid out in a 5x5 array, with the horizontal side longer than the vertical side. Three cards are solid blue, and two are solid red. The remaining cards have a horizontal white stripe.

A smaller 5x5 grid with 8 red squares, 9 blue squares, and 1 black square appears at the bottom of the table."
            src={image1}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="Two spreads of four cards sit at the north and south corners of the table. An additional pile of four cards are in the middle, next to a stack of the rest of the cards. A larger object with a red, white, and blue striped loop that vaguely resembles the loop of a paperclip is also on the table."
            src={image2}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="Three spreads of cards in the south, west, and east corners have hands with nine cards in them, as well as a series of facedown cards arrayed in overlapping patterns.

The final spot in the north corner also has cards face down in overlapping patterns, but has 9 cards face up in a stack of 3, a stack of 1, a stack of 2, and another stack of 3."
            src={image3}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="A scattered set of cards, some face up and some face down, littered across the table with no apparent order."
            src={image4}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="Spreads of cards with different card counts are found in the North, South, East, and West corners of the table. In front of the south table, 4 2's are face up. In front of the east table, 4 4's are face up. The middle of the table has a number of cards haphazardly scattered, face down."
            src={image5}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="Spreads of 7 cards are face down in the North and South corners of the table. Each corner has an additional pile of facedown cards on the table. The card backs are brown."
            src={image6}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="Two facedown cards are placed on the table in the north, south, east, and west corners. Next to a pile of facedown cards are three cards, face up."
            src={image7}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
          <SheetableImage
            alt="On a small table, three cards are next to each other in a row. They are curled up in an almost cylindrical shape."
            src={image8}
            title=""
            className="mx-auto max-w-full sm:max-w-xl"
          />
          <hr />
        </div>
        <div>
          <IndexedBlank label="2 4" idxs={[3]} />
          <IndexedBlank label="5 4 5" idxs={[11]} />
          <IndexedBlank label="9 6" idxs={[11]} />
          <IndexedBlank label="5 4 '2" idxs={[11]} />
          <IndexedBlank label="7" idxs={[4]} />
          <IndexedBlank label="5-3 4 6" idxs={[6]} />
          <IndexedBlank label="8" idxs={[3]} />
          <IndexedBlank label="9" idxs={[2]} />
          <IndexedBlank label="5: 3 9" idxs={[16]} />
        </div>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
