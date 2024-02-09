import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'second-helpings';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          "I detect something very wrong with this menu, my old friend. Let us
          investigate!"
          <br />
          "Very well, but if I eat this, I might need a doctor!"
        </FlavorText>

        <ol className={cx(NO_COPY_CLASS, 'space-y-5 pl-5 sm:pl-10')}>
          <li>
            <div className="flex content-center">
              <div className="w-80">
                Sorry Thracian Noodle <i>with</i>
                <br />
                Shirley Cake, Ohio Limes <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$8</p>
            </div>
          </li>
          <li>
            <div className="flex content-center">
              <div className="w-80">
                Geeky Cheese Tartine <i>with</i>
                <br />
                Feather Boa (our own) <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$5</p>
            </div>
          </li>
          <li>
            <div className="flex content-center">
              <div className="w-80">
                Goth Chorus Tea <i>with</i>
                <br />
                Hare, Cola, Port <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$6</p>
            </div>
          </li>
          <li>
            <div className="flex content-center">
              <div className="w-80">
                Our Ox Stoat <i>with</i>
                <br />
                No Raw Leaf <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$7</p>
            </div>
          </li>
          <li>
            {' '}
            <div className="flex content-center">
              <div className="w-80">
                Soy Seven Udon <i>with</i>
                <br />
                Pho Love (Nice) <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$9</p>
            </div>
          </li>
          <li>
            {' '}
            <div className="flex content-center">
              <div className="w-80">
                'Door to House' Rosé <i>with</i>
                <br />
                Layered Pet Raw Mouse <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$12</p>
            </div>
          </li>
          <li>
            <div className="flex content-center">
              <div className="w-80">
                “Aidan Lodj” Sable <i>with</i>
                <br />A nice, cool IPA, DeBrea Wine <i>and</i>
                <br />
                <span className="text-black bg-black">
                  {new Array(40).fill('\u00A0').join('')}
                </span>
              </div>
              <p>$5</p>
            </div>
          </li>
        </ol>
        <div className={cx(HIDDEN_CLASS)}>
          <Table noBorder>
            <tbody>
              <tr>
                <td>'1.</td>
                <td>Sorry Thracian Noodle with</td>
                <td rowSpan={3}>$8</td>
              </tr>
              <tr>
                <td></td>
                <td>Shirley Cake, Ohio Limes and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>'2.</td>
                <td>Geeky Cheese Tartine with</td>
                <td rowSpan={3}>$5</td>
              </tr>
              <tr>
                <td></td>
                <td>Feather Boa (our own) and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>'3.</td>
                <td>Goth Chorus Tea with</td>
                <td rowSpan={3}>$6</td>
              </tr>
              <tr>
                <td></td>
                <td>Hare, Cola, Port and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>'4.</td>
                <td>Our Ox Stoat with</td>
                <td rowSpan={3}>$7</td>
              </tr>
              <tr>
                <td></td>
                <td>No Raw Leaf and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>'5.</td>
                <td>Soy Seven Udon with</td>
                <td rowSpan={3}>$9</td>
              </tr>
              <tr>
                <td></td>
                <td>Pho Love (Nice) and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>'6.</td>
                <td>''Door to House' Rosé with</td>
                <td rowSpan={3}>$12</td>
              </tr>
              <tr>
                <td></td>
                <td>Layered Pet Raw Mouse and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>'7.</td>
                <td>“Aidan Lodj” Sable with</td>
                <td rowSpan={3}>$5</td>
              </tr>
              <tr>
                <td></td>
                <td>A nice, cool IPA, DeBrea Wine and</td>
              </tr>
              <tr>
                <td></td>
                <td className="bg-black">&nbsp;</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <style jsx global>{`
        @media print {
          span.bg-black {
            /* Ensure that filled spans are shaded even when printed */
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            background-color: lightgray;
          }
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
