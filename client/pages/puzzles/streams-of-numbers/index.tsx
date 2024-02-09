import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'streams-of-numbers';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          October, November, April, February, November, January, August,
          February, May
        </p>
        <p>
          John Tyler, James Buchanan, Martin Van Buren, George Washington,
          Joseph R. Biden Jr., James K. Polk, James Monroe, George Washington,
          George H.W. Bush, Donald Trump, William J. Clinton, James Monroe
        </p>
        <p>
          Apple Jacks, Exercise, Emoji Sports, 2014, Alternative Literature,
          Supported Features
        </p>
        <p>
          Aeronautics and Astronautics, Physics, Mechanical Engineering,
          Chemistry, Civil and Environmental Engineering, Brain and Cognitive
          Sciences, Brain and Cognitive Sciences, Materials Science and
          Engineering, Civil and Environmental Engineering, Brain and Cognitive
          Sciences
        </p>
        <p>
          Hydrogen, Rhodium, Sulfur, Calcium, Helium, Flerovium, Uranium,
          Nihonium
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
