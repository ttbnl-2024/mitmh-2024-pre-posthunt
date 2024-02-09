import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'a-night-at-the-opera';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You find Mercury in his box at the opera, where he appears deep in
          concentration along with foreign nobility. Can you figure out how
          Mercury's men can help him feel more connected to the musical gods
          again?
        </FlavorText>
        <ol>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Another One Bites the Dust) + (Horizontal Distance from The Show Must Go On to We Are the Champions)</li>
          {/* prettier-ignore */}
          <li>(Horizontal Distance from me to Field of Clovers)(Horizontal Distance from Revolting Developments to Another One Bites the Dust) + (Vertical Distance from Where on Earth Is Carmina Suntigre? to Under Pressure)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to The Show Must Go On - Horizontal Distance from me to Split the Difference)(Horizontal Distance from Machines to Where on Earth Is Carmina Suntigre? - Vertical Distance from Subplutonean IHTFP Blues to Body Language)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to The Show Must Go On - Horizontal Distance from me to Subplutonean IHTFP Blues) + (Horizontal Distance from Sorry Not Sorry to Machines)(Vertical Distance from Modern Architecture to We Are the Champions)</li>
          {/* prettier-ignore */}
          <li>(Horizontal Distance from me to Revolting Developments) - (Vertical Distance from Good Company to Where on Earth Is Carmina Suntigre?)(Horizontal Distance from Split the Difference to Where on Earth Is Carmina Suntigre?)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Machines)(Horizontal Distance from Body Language to Sorry Not Sorry) - (Vertical Distance from The Show Must Go On to Split the Difference)(Horizontal Distance from Modern Architecture to Body Language)</li>
          {/* prettier-ignore */}
          <li>(Horizontal Distance from me to Under Pressure)(Horizontal Distance from The Show Must Go On to Modern Architecture) + (Vertical Distance from Field of Clovers to Split the Difference)(Horizontal Distance from Revolting Developments to Body Language)</li>
          {/* prettier-ignore */}
          <li>(Horizontal Distance from me to Split the Difference)(Vertical Distance from Machines to The Show Must Go On) + (Horizontal Distance from Subplutonean IHTFP Blues to Under Pressure)(Vertical Distance from me to Field of Clovers)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Split the Difference)(Horizontal Distance from Under Pressure to The Show Must Go On) - (Horizontal Distance from me to Body Language)(Vertical Distance from Field of Clovers to Revolting Developments)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Sorry Not Sorry) / (Horizontal Distance from Where on Earth Is Carmina Suntigre? to Under Pressure) + (Vertical Distance from The Show Must Go On to Subplutonean IHTFP Blues)(Vertical Distance from Modern Architecture to Revolting Developments)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to The Show Must Go On)(Horizontal Distance from me to Another One Bites the Dust) - (Vertical Distance from Machines to Subplutonean IHTFP Blues)(Horizontal Distance from Subplutonean IHTFP Blues to Machines)</li>
          {/* prettier-ignore */}
          <li>(Horizontal Distance from me to Revolting Developments) - (Horizontal Distance from Under Pressure to Where on Earth Is Carmina Suntigre?)(Horizontal Distance from Split the Difference to Where on Earth Is Carmina Suntigre?)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Field of Clovers)(Vertical Distance from Split the Difference to Subplutonean IHTFP Blues) - (Horizontal Distance from The Show Must Go On to Modern Architecture)(Horizontal Distance from Sorry Not Sorry to Modern Architecture)</li>
          {/* prettier-ignore */}
          <li>(Horizontal Distance from me to Subplutonean IHTFP Blues)(Horizontal Distance from Split the Difference to Another One Bites the Dust) - (Vertical Distance from me to Where on Earth Is Carmina Suntigre?)(Horizontal Distance from Sorry Not Sorry to Subplutonean IHTFP Blues)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Machines)(Horizontal Distance from me to Machines)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to Field of Clovers)(Vertical Distance from Subplutonean IHTFP Blues to Modern Architecture) - (Horizontal Distance from Where on Earth Is Carmina Suntigre? to Machines)(Horizontal Distance from Sorry Not Sorry to Another One Bites the Dust)</li>
          {/* prettier-ignore */}
          <li>(Vertical Distance from me to The Show Must Go On)(Horizontal Distance from Where on Earth Is Carmina Suntigre? to Subplutonean IHTFP Blues) - (Horizontal Distance from Another One Bites the Dust to Split the Difference)(Horizontal Distance from Sorry Not Sorry to Machines)</li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
