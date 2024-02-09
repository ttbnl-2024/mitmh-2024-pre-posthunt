import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'greek-verse';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Never look a gift horse in the mouth……You might not like what you find
          hidden inside!
        </FlavorText>
        <Table noBorder={true} className="puzzle-table">
          <thead>
            <tr>
              <th>
                YOUR TEAM AWAITS
                <br />
                THEIR ASSIGNMENTS
              </th>
              <th>
                (Additional
                <br />
                Followers)
              </th>
              <th></th>
              <th>LABORS TO BE PERFORMED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eros as named later,</td>
              <td>3</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>To be chosen by the maharani:</td>
            </tr>
            <tr>
              <td>Maze navigator,</td>
              <td>7</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Be the best beatboxer, beyond a doubt,</td>
            </tr>
            <tr>
              <td>Repeatable vocals,</td>
              <td>2</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Hit a walk-off home run facing Shohei Ohtani</td>
            </tr>
            <tr>
              <td>Born wisdom-rich.</td>
              <td>0</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Style the hair of Medusa, then ask her out.</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>God-King of Hellas,</td>
              <td>2</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Find a lost royal ewer of ancient brass,</td>
            </tr>
            <tr>
              <td>His Wife, ever-jealous,</td>
              <td>6</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Eat at a restaurant with Ogden Nash,</td>
            </tr>
            <tr>
              <td>Ilium, to locals,</td>
              <td>4</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Fly to India naked, and go first class,</td>
            </tr>
            <tr>
              <td>Cup-bearer,</td>
              <td>4</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Construct a maze using</td>
            </tr>
            <tr>
              <td className="text-right">Witch.</td>
              <td>1</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td className="text-right">ether and trash.</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Eat Italian ice from a Grecian cup,</td>
            </tr>
            <tr>
              <td>Romanesque huntress</td>
              <td>3</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Identify a remnant of waxy wings,</td>
            </tr>
            <tr>
              <td>Such beauty wondrous,</td>
              <td>4</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Meet a bro named Earl and his wife and pup,</td>
            </tr>
            <tr>
              <td>Odyssey reciter,</td>
              <td>5</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Give the length and the width</td>
            </tr>
            <tr>
              <td>Goat god with flutes.</td>
              <td>4</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td className="text-right">of these useless things.</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Shoes made him fleeter,</td>
              <td>9</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Get race results from a Spartan bookie,</td>
            </tr>
            <tr>
              <td>Rome's pleased Demeter,</td>
              <td>2</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Send another message to say shalom;</td>
            </tr>
            <tr>
              <td>Hot-headed fighter,</td>
              <td>9</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Then it's up and out– adios, rookie,</td>
            </tr>
            <tr>
              <td>Thick book of routes.</td>
              <td>8</td>
              <td>
                <span className={cx(NO_COPY_CLASS)}>
                  ___
                </span>
                <span className={cx(HIDDEN_CLASS)}>_</span>
              </td>
              <td>Work's done at last. Time to come home.</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <style jsx global>{`
        .puzzle-table th,
        .puzzle-table td {
          padding: 0 1em;
          font-size: 90%;
        }
        .puzzle-table td:nth-child(2),
        .puzzle-table th:nth-child(2) {
          text-align: center !important;
          padding-right: 0 !important;
        }
        .puzzle-table td:nth-child(3),
        .puzzle-table th:nth-child(3) {
          padding-left: 0 !important;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
