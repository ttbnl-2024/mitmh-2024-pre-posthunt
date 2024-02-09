import { Rampart_One } from 'next/font/google';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/iv-guys/0.png';
import image1 from 'assets/puzzles/iv-guys/1.png';
import image2 from 'assets/puzzles/iv-guys/2.png';
import image3 from 'assets/puzzles/iv-guys/3.png';
import image4 from 'assets/puzzles/iv-guys/4.png';
import image5 from 'assets/puzzles/iv-guys/5.png';
import image6 from 'assets/puzzles/iv-guys/6.png';
import image7 from 'assets/puzzles/iv-guys/7.png';
import image8 from 'assets/puzzles/iv-guys/8.png';
import image9 from 'assets/puzzles/iv-guys/9.png';
import image10 from 'assets/puzzles/iv-guys/10.png';
import image11 from 'assets/puzzles/iv-guys/11.png';
import image12 from 'assets/puzzles/iv-guys/12.png';
import image13 from 'assets/puzzles/iv-guys/13.png';
import image14 from 'assets/puzzles/iv-guys/14.png';
import image15 from 'assets/puzzles/iv-guys/15.png';
import image16 from 'assets/puzzles/iv-guys/16.png';
import image17 from 'assets/puzzles/iv-guys/17.png';
import image18 from 'assets/puzzles/iv-guys/18.png';
import image19 from 'assets/puzzles/iv-guys/19.png';

const SLUG = 'iv-guys';

const rampart_one = Rampart_One({ weight: '400', subsets: ['latin'] });

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <h2 className={rampart_one.className}>DANCE &amp; LET PRY</h2>
        <Table noBorder className="mb-6">
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt="Rat practicing ballet by equipment with parallel bars"
                  src={image0}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="Woody Allen cosplaying as Han Solo at a convention"
                  src={image1}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="Dwight D. Eisenhower"
                  src={image2}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="A sea otter bartender serving martinis and shots to two sea otter guests"
                  src={image3}
                  title=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <h2 className={rampart_one.className}>WELSH MOM FADS</h2>
        <Table noBorder className="mb-6">
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt="Human foot with a human ear attached to the side.  A red arrow points to the ear.  The ear is adorned with four blue and white star-shaped earrings, and wavy red and white dangle earring with 7 red stripes and 6 white stripes"
                  src={image4}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt='Cartoonish round black blob with eyeballs surrounded by four black teardrop shapes is in front of a black triangle on an orange background and green grass.  Beside this is a red arrow pointing to a scroll which says "I leave everything to my children"'
                  src={image5}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="White man with long curly brown hair sings into a microphone while playing the accordion.  In the background, a Martian rover and landscape are visible"
                  src={image6}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="A pair of beer steins with a significant amount of froth.  The left stein has an etching of Girl with a Pearl Earring, and the right stein has an etching of the Mona Lisa.  Red arrows point to the two etchings"
                  src={image7}
                  title=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <h2 className={rampart_one.className}>SWAG CART REFILL</h2>
        <Table noBorder className="mb-6">
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt="Toy figurine of a guitarist sticking out their tongue and wearing an elaborate black and white costume"
                  src={image8}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="Red arrow pointing to a sphere with a red ball in the center showing a plus sign.  The ball is held by an alien with red eyes and tentacles instead of a mouth.  A white tube connects the tentacles to the sphere.  The alien wears a gray coat with a large pocket"
                  src={image9}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A creature whose back half is composed of an ant and whose front half is composed of a bald eagle"
                  src={image10}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="Photograph of an older white man with facial hair surrounded by Swiss cheese, a frosted donut, and a bowl of Froot Loops"
                  src={image11}
                  title=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <h2 className={rampart_one.className}>OPAL ZIP SIS</h2>
        <Table noBorder className="mb-6">
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt="Charcoal drawing of an 18th century crowd holding torches and clubs aloft"
                  src={image12}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="A large yellow sun and white clouds are in front of a blue sky.  In the foreground are six rows of hills, each with eleven hills. A red arrow points to the rightmost hill in the farthest row of hills"
                  src={image13}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="A bed with an orange bedspread.  The bedspread is partially pulled back, and a red arrow points to the cream-colored sheet underneath"
                  src={image14}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="Three red devils holding tridents and surrounded by flames"
                  src={image15}
                  title=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <h2 className={rampart_one.className}>WAX HEELS WEST</h2>
        <Table noBorder>
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt='Red arrow pointing to a newspaper with the headline "NEWS".  The newspaper is held by a panda bear'
                  src={image16}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="Photograph of a large tree in a forest with a plus sign, and a pencil drawing of a specific type of fish"
                  src={image17}
                  title=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt="Burger but with a Trilby instead of a patty"
                  src={image18}
                  title=""
                />
              </td>
              <td>
                <SheetableImage
                  alt="Photograph of Wyatt Oleff, Chosen Jacobs, an unidentified fan, Jeremy Ray Taylor, and Jaeden Martell"
                  src={image19}
                  title=""
                />
              </td>
            </tr>
          </tbody>
        </Table>
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
