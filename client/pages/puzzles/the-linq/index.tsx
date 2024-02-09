import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'the-linq';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Can you help us find the perfect birds for our aviary? Remember that
          birds in different habitats have different methods of communication.
        </FlavorText>
        <ol>
          <li>No birds belong to an expansion set</li>
          <li>The hawk's wingspan is a multiple of 5</li>
          <li>Only the bird with wild food cost has a colored corner</li>
          <li>Three birds are worth 7 victory points</li>
          <li>
            The aviary cannot receive victory points for the Photographer bonus
          </li>
          <li>The American Bittern is the only bird that eats fish</li>
          <li>Only birds in the fourth column can nest in platforms</li>
          <li>
            The bird with wingspan equal to the square of its egg nest capacity
            is to the left of a bird with an egg laying power
          </li>
          <li>Finches are placed as closely as possible</li>
          <li>
            Two birds in the middle row have alliterative scientific names
          </li>
          <li>All birds in the third and fourth columns have brown powers</li>
          <li>The finches are left of the Cerulean Warbler</li>
          <li>
            The bird immediately below the Carolinian bird has the only pink
            power
          </li>
          <li>One bird has a star nest preference</li>
          <li>
            A two-colored bird is immediately between the only two birds with
            single word names
          </li>
          <li>No birds in the second column nest in bowls</li>
          <li>None of the birds are common</li>
          <li>Two birds have an egg laying power</li>
          <li>
            A bird that is named after a color and a body part has the same
            power as the bird above it
          </li>
          <li>No birds in the middle row can be placed in the bottom row</li>
          <li>The second column has one of every color power</li>
          <li>None of the birds are worth 0 victory points</li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
