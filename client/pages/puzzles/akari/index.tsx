import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'akari';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle
      puzzleData={puzzleData}
      copyData={{ ref: ref, config: { preserveStyles: true } }}
    >
      <div ref={ref}>
        <FlavorText>
          Some men have gotten lost in this place. To help find them, place
          lights in the grid to anchor lost hombres.
        </FlavorText>

        <p>
          Each light shines horizontally and vertically, but is blocked by the
          black walls. The numbered walls tell how many of the four cells
          horizontally or vertically adjacent to that cell contain lights. Every
          cell must be illuminated by one or more lights, but no two lights may
          illuminate one another.
        </p>

        <table className="border-collapse mx-auto">
          <tbody>
            <tr>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">U</div>
              </td>
              <td>
                <div className="clue">L</div>
              </td>
              <td>
                <div className="clue">D</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">D</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">D</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">T</div>
              </td>
              <td className="bg-black"></td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">H</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">R</div>
              </td>
              <td className="bg-black text-white">0</td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">P</div>
              </td>
              <td className="bg-black"></td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">M</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">P</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">Y</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">U</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">H</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td className="bg-black text-white">2</td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td className="bg-black text-white">0</td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">N</div>
              </td>
              <td className="bg-black"></td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">G</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">M</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">U</div>
              </td>
              <td>
                <div className="clue">P</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">M</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">K</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">B</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">G</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">F</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">M</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">Y</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">O</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">U</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">W</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">D</div>
              </td>
              <td>
                <div className="clue">L</div>
              </td>
              <td>
                <div className="clue">Y</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td className="bg-black text-white">0</td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">W</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
              <td>
                <div className="clue">L</div>
              </td>
              <td>
                <div className="clue">U</div>
              </td>
              <td className="bg-black text-white">2</td>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">M</div>
              </td>
              <td>
                <div className="clue">U</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">G</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">G</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">S</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">M</div>
              </td>
              <td>
                <div className="clue">Y</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">P</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td className="bg-black text-white">3</td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">U</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">G</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td className="bg-black text-white">3</td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td className="bg-black text-white">2</td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">K</div>
              </td>
              <td className="bg-black text-white">0</td>
              <td className="bg-black text-white">0</td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td className="bg-black"></td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">P</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">I</div>
              </td>
              <td>
                <div className="clue">C</div>
              </td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">P</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">B</div>
              </td>
              <td>
                <div className="clue">L</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">M</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">H</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">G</div>
              </td>
              <td className="bg-black text-white">0</td>
              <td className="bg-black text-white">1</td>
              <td>
                <div className="clue">T</div>
              </td>
              <td className="bg-black text-white">1</td>
              <td className="bg-black text-white">2</td>
              <td>
                <div className="clue">E</div>
              </td>
              <td className="bg-black"></td>
              <td className="bg-black"></td>
              <td>
                <div className="clue">N</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="clue">A</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">T</div>
              </td>
              <td>
                <div className="clue">H</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">R</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">O</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
              <td>
                <div className="clue">N</div>
              </td>
              <td>
                <div className="clue">S</div>
              </td>
              <td>
                <div className="clue">E</div>
              </td>
            </tr>
          </tbody>
          <style jsx>{`
            td {
              /* firefox is dumb af */
              background-clip: padding-box;
              height: min(30px, ${80 / 15}vw);
              width: min(30px, ${80 / 15}vw);
              position: relative;
              text-align: center;
              border: 1px solid black;
            }
            td > .clue {
              position: absolute;
              width: min-content;
              height: 60%;
              text-align: left;
              color: black;
              top: 0;
              left: 2px;
              transform: scale(0.67);
              transform-origin: top left;
            }
          `}</style>
        </table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
