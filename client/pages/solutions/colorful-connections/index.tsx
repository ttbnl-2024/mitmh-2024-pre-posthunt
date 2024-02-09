import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'colorful-connections';
const ANSWER = `EASER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      The first step is solving each of the clues. As hinted by the title
      "Colorful Connections", each clue has an answer which is one letter change
      away from a term that can be preceded by either RED (alternate clues
      starting from the first) or BLACK (alternative clues starting from the
      second):
    </p>
    <Table>
      <tbody>
        <tr>
          <td className="bg-red-500 text-white">Clue Answer</td>
          <td className="bg-red-500 text-white">Red...</td>
          <td className="bg-red-500 text-white">Changed Letter</td>
          <td></td>
          <td className="bg-black text-white">Clue answer</td>
          <td className="bg-black text-white">Black...</td>
          <td className="bg-black text-white">Changed Letter</td>
        </tr>
        <tr>
          <td>
            <Monospace>DINGS</Monospace>
          </td>
          <td>
            <Monospace>WINGS</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>ADDED</Monospace>
          </td>
          <td>
            <Monospace>ADDER</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>DECKS</Monospace>
          </td>
          <td>
            <Monospace>NECKS</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>DARIA</Monospace>
          </td>
          <td>
            <Monospace>MARIA</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SED</Monospace>
          </td>
          <td>
            <Monospace>SEA</Monospace>
          </td>
          <td>
            <Monospace>D*</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>LIFT</Monospace>
          </td>
          <td>
            <Monospace>LIST</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FETTER</Monospace>
          </td>
          <td>
            <Monospace>LETTER</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>FEAR</Monospace>
          </td>
          <td>
            <Monospace>BEAR</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FLOODED</Monospace>
          </td>
          <td>
            <Monospace>BLOODED</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>LUNA</Monospace>
          </td>
          <td>
            <Monospace>LUNG</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CRICK</Monospace>
          </td>
          <td>
            <Monospace>BRICK</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>CELT</Monospace>
          </td>
          <td>
            <Monospace>BELT</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SCARF</Monospace>
          </td>
          <td>
            <Monospace>SCARE</Monospace>
          </td>
          <td>
            <Monospace> F*</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>SWAG</Monospace>
          </td>
          <td>
            <Monospace>SWAN</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BOAT</Monospace>
          </td>
          <td>
            <Monospace>COAT</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>BALE</Monospace>
          </td>
          <td>
            <Monospace>BALL</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BULB</Monospace>
          </td>
          <td>
            <Monospace>BULL</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>CHEEP</Monospace>
          </td>
          <td>
            <Monospace>SHEEP</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LEON</Monospace>
          </td>
          <td>
            <Monospace>LION</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>BACK</Monospace>
          </td>
          <td>
            <Monospace>JACK</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BEER</Monospace>
          </td>
          <td>
            <Monospace>DEER</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>COOK</Monospace>
          </td>
          <td>
            <Monospace>BOOK</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LINC</Monospace>
          </td>
          <td>
            <Monospace>LINE</Monospace>
          </td>
          <td>
            <Monospace> C*</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>BRIAR</Monospace>
          </td>
          <td>
            <Monospace>FRIAR</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>GROSS</Monospace>
          </td>
          <td>
            <Monospace>CROSS</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>HOLA</Monospace>
          </td>
          <td>
            <Monospace>HOLE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>GAPE</Monospace>
          </td>
          <td>
            <Monospace>TAPE</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>GAWK</Monospace>
          </td>
          <td>
            <Monospace>HAWK</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>STAG</Monospace>
          </td>
          <td>
            <Monospace>STAR</Monospace>
          </td>
          <td>
            <Monospace> G*</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>ACE</Monospace>
          </td>
          <td>
            <Monospace>ICE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>WANE</Monospace>
          </td>
          <td>
            <Monospace>WINE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>BOGIES</Monospace>
          </td>
          <td>
            <Monospace>BODIES</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CARE</Monospace>
          </td>
          <td>
            <Monospace>CARD</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>ALIVE</Monospace>
          </td>
          <td>
            <Monospace>OLIVE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ZANE</Monospace>
          </td>
          <td>
            <Monospace>ZONE</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>BAMBA</Monospace>
          </td>
          <td>
            <Monospace>MAMBA</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BACON</Monospace>
          </td>
          <td>
            <Monospace>BARON</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>DREAD</Monospace>
          </td>
          <td>
            <Monospace>BREAD</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>FEAT</Monospace>
          </td>
          <td>
            <Monospace>MEAT</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td></td>
          <td>
            <Monospace>ARES</Monospace>
          </td>
          <td>
            <Monospace>ARTS</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ANTE</Monospace>
          </td>
          <td>
            <Monospace>ANTS</Monospace>
          </td>
          <td>
            <Monospace> E*</Monospace>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      The replaced letters run A through G. Additionally hinted by the title and
      the colors used, if we fill these into the seven columns of the provided
      7x6 grid, we get a game of Connect Four (for confirmation, red has
      mistake-free play):
    </p>

    <Table>
      <tbody>
        <tr>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            35
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            36
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            37
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            38
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center"></td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            39
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            32
          </td>
        </tr>
        <tr>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            34
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            24
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            23
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            5
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            41
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            13
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            29
          </td>
        </tr>
        <tr>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            31
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            21
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            22
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            4
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            40
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            9
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            28
          </td>
        </tr>
        <tr>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            30
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            20
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            18
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            3
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            33
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            8
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            27
          </td>
        </tr>
        <tr>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            26
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            17
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            12
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            2
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            19
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            7
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            25
          </td>
        </tr>
        <tr>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            10
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            15
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            11
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-red-500">
            1
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            16
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            6
          </td>
          <td className="w-[30px] h-[30px] !p-0 text-white text-center bg-black">
            14
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      Red makes five in a row to win on the last play of the game. The five
      answer words involved are:
    </p>
    <ul>
      <li>
        <Monospace>LIN(C-&gt;E)</Monospace>
      </li>
      <li>
        <Monospace>SE(D-&gt;A)</Monospace>
      </li>
      <li>
        <Monospace>ANT(E-&gt;S)</Monospace>
      </li>
      <li>
        <Monospace>SCAR(F-&gt;E)</Monospace>
      </li>
      <li>
        <Monospace>STA(G-&gt;R)</Monospace>
      </li>
    </ul>
    <p>
      Reading the new letters gives the answer <Answerize>EASER</Answerize>.
    </p>
    <style jsx global>{`
      td:nth-child(3),
      td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
