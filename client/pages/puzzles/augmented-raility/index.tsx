import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/augmented-raility/0.png';
import image1 from 'assets/puzzles/augmented-raility/1.png';
import image2 from 'assets/puzzles/augmented-raility/2.png';
import image3 from 'assets/puzzles/augmented-raility/3.png';
import image4 from 'assets/puzzles/augmented-raility/4.png';
import image5 from 'assets/puzzles/augmented-raility/5.png';
import image6 from 'assets/puzzles/augmented-raility/6.png';
import image7 from 'assets/puzzles/augmented-raility/7.png';
import image8 from 'assets/puzzles/augmented-raility/8.png';
import image9 from 'assets/puzzles/augmented-raility/9.png';
import image10 from 'assets/puzzles/augmented-raility/10.png';
import image11 from 'assets/puzzles/augmented-raility/11.png';
import image12 from 'assets/puzzles/augmented-raility/12.png';
import image13 from 'assets/puzzles/augmented-raility/13.png';
import image14 from 'assets/puzzles/augmented-raility/14.png';
import image15 from 'assets/puzzles/augmented-raility/15.png';
import image16 from 'assets/puzzles/augmented-raility/16.png';
import image17 from 'assets/puzzles/augmented-raility/17.png';
import image18 from 'assets/puzzles/augmented-raility/18.png';
import image19 from 'assets/puzzles/augmented-raility/19.png';

const SLUG = 'augmented-raility';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Kore Games, Inc. is looking to launch its new augmented reality app,
          introducing gamers to mass transit systems. However, Persephone isn't
          happy with the game's development. What's the problem?
        </FlavorText>
        <Table>
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image0}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image1}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image2}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image3}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image4}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image5}
                  title=""
                  className="mx-auto w-full max-w-xs"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image6}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image7}
                  title=""
                  className="mx-auto w-full max-w-xs"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image8}
                  title=""
                  className="mx-auto w-full max-w-md"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A complex, colorful metro diagram"
                  src={image9}
                  title=""
                  className="mx-auto w-full max-w-sm"
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <hr className="my-4" />
        <Table>
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt='A videogame screenshot of a first-person shooter.  The HUD shows the text "AMMO", "HEALTH", "ARMS", "ARMOR", and "BULL", "SHEL", "RCKT", "CELL". A building is visible out the window.  15 red blob piles are visible'
                  src={image10}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A videogame screenshot of a top-down 2D game.  A clocktower is prominent in the foreground.  A player with a red hat stands by a shop which has a blue- and white-striped awning.  They are between a sign, a staircase, and three green bushes"
                  src={image11}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A videogame screenshot of a colorful racing game.  The main racer has five banana peels behind them, and eight more banana peels are visible throughout the track.  They are near 4 colorful floating cubes with questionmarks inside them.  One of the racers is a statue of dog sitting on its hind legs.  The HUD shows overlapping black squares with yellow question marks on a blue line around the exterior of the screen"
                  src={image12}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt='A videogame screenshot of a top-down 2D game.  The HUD shows a vertical green bar and a bomb, then a green gem, bomb, and key, each with a blurred number, then "LIFE" with some blurred red hearts. The main character is near two large metallic-looking balls. A top-down view of a city plaza is visible'
                  src={image13}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt='A videogame screenshot of a city in a warm climate.  Two green signs are visible which say "PHARMACIE DU MAROC" and "HOTEL AURORE".  Five guns are strewn on the ground.  A large golden statue is visible of a winged person holding a laurel crown '
                  src={image14}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt='A videogame screenshot of a 2D game on a black background.  Text is visible that says "ROCK IS STOP", "SKULL IS DEFEAT", "FLAG IS WIN", "BABA IS YOU", and "WALL IS STOP".  A small outdoor scene of an "A"-shaped tower in front of a blue, cloudy sky is visible.  There are 11 tan rocks, 12 groups of purple flowers, and 19 red skulls'
                  src={image15}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt='A videogame screenshot of a 2D game.  The HUD says "TOTAL TASKS COMPLETED", "Tasks", "REPORT", "USE", and "Cafeteria".  A red player is labeled "Player", and the remains of a single red player are on the floor. Out the window a a large building with Chinese medieval palace architecture is visible'
                  src={image16}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A videogame screenshot of 3D shooter.  The HUD at the top of the screen consists of a green bar on the left, a red timer in the center, and a red bar on the right. In the foreground, four futuristic looking weapons are lying on the ground.  A red- and white-striped tower is visible"
                  src={image17}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt='A videogame screenshot of a 3D shooter. The character is at a T-junction of some city streets, surrounded by 3-story buildings. In the foreground, 12 rifles lie on the ground.  In the distance 3 striped road barriers are visible.  A large, golden donut-shaped building is present.   An overlay of white text says "PICKED UP SOME GRENADE ROUNDS."'
                  src={image18}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A videogame screenshot of a 2D platformer.  The main character has a skull-shaped head with two curved horns.  The color palette is deep blues and purples.  There are 10 egg-shaped bubbles.  In the background is a city-scape"
                  src={image19}
                  title=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <IndexedBlank label="7" />
        <IndexedBlank label="8" />
        <IndexedBlank label="10" />
        <IndexedBlank label="8 3" />
        <IndexedBlank label="6 6" />
        <IndexedBlank label="6-7" />
        <IndexedBlank label="8 6" />
        <IndexedBlank label="9 6" />
        <IndexedBlank label="6 3 1 5" />
        <IndexedBlank label="7 2 6 6" />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
