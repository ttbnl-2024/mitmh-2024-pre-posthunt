import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'second-helpings';
const ANSWER = `SURGERY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see a strange menu with 7 items. In each, two lines are shown and the
      last line is redacted. The flavor text hints at detectives (and
      specifically Sherlock Holmes) by using the words "detect" and
      "investigate". When we look closely at each item&mdash;specifically the
      consonants, we discover that the items are all consonancies of famous
      authors and fictional detectives they created.
    </p>
    <p>
      The title and the mention of a doctor in the flavor clue Dr. Watson,
      Holmes's sidekick; and more generally that the redacted items are these
      detectives' sidekicks. Indexing the dish price into the name of the
      sidekick yields the answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Food</th>
          <th>Author, Detective</th>
          <th>Sidekick</th>
          <th>Index</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Sorry Thracian Noodle <i>with</i>
            <br />
            Shirley Cake, Ohio Limes <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            Sir Arthur Conan Doyle
            <br />
            Sherlock Holmes
          </td>
          <td>
            <Clue>JOHN WATSON</Clue>
          </td>
          <td>8</td>
          <td>
            <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>
            Geeky Cheese Tartine <i>with</i>
            <br />
            Feather Boa (our own) <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            G. K. Chesterton
            <br />
            Father Brown
          </td>
          <td>
            <Clue>HERCULE FLAMBEAU</Clue>
          </td>
          <td>5</td>
          <td>
            <Clue>U</Clue>
          </td>
        </tr>
        <tr>
          <td>
            Goth Chorus Tea <i>with</i>
            <br />
            Hare, Cola, Port <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            Agatha Christie
            <br />
            Hercule Poirot
          </td>
          <td>
            <Clue>ARTHUR HASTINGS</Clue>
          </td>
          <td>6</td>
          <td>
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>
            Our Ox Stoat <i>with</i>
            <br />
            No Raw Leaf <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            Rex Stout
            <br />
            Nero Wolfe
          </td>
          <td>
            <Clue>ARCHIE GOODWIN</Clue>
          </td>
          <td>7</td>
          <td>
            <Clue>G</Clue>
          </td>
        </tr>
        <tr>
          <td>
            Soy Seven Udon <i>with</i>
            <br />
            Pho Love (Nice) <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            S. S. Van Dine
            <br />
            Philo Vance
          </td>
          <td>
            <Clue>S. S. VAN DINE</Clue>
          </td>
          <td>9</td>
          <td>
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>
            'Door to House' Rosé <i>with</i>
            <br />
            Layered Pet Raw Mouse <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            Dorothy Sayers
            <br />
            Lord Peter Wimsey
          </td>
          <td>
            <Clue>MERVYN BUNTER</Clue>
          </td>
          <td>12</td>
          <td>
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>
            “Aidan Lodj” Sable <i>with</i>
            <br />A nice, cool IPA, DeBrea Wine <i>and</i>
            <br />
            <span className="text-black bg-black">
              {new Array(40).fill('\u00A0').join('')}
            </span>
          </td>
          <td>
            Donald J. Sobol
            <br />
            Encyclopedia Brown
          </td>
          <td>
            <Clue>SALLY KIMBALL</Clue>
          </td>
          <td>5</td>
          <td>
            <Clue>Y</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      .table-1 th,
      .table-1 td {
        padding: 4px 6px !important;
      }
      .table-1 td:nth-child(-n + 3) {
        white-space: nowrap;
      }
      .table-1 td:nth-child(4),
      .table-1 td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
