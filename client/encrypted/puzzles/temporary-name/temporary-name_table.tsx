import { FC } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Table from 'components/table';

const TempNameTable: FC<{}> = () => {
  return (
    <>
      <FlavorText>
        Congrats! You solved the puzzles in this round! You can now give the
        placeholder meta a try.
      </FlavorText>
      <Table className="break-inside-avoid">
        <style jsx>
          {`
            th:nth-child(n + 3) {
              border-right: 0px;
              border-left: 0px;
            }
            td:first-child {
              font-size: 0.75rem; /* 12px */
              line-height: 1rem; /* 16px */
              white-space: pre;
            }
            td:nth-child(2) {
              white-space: pre;
            }
            @media print {
              td {
                /* Ensure that filled cells are shaded even when printed */
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
                padding: 8px 6px;
              }
            }
          `}
        </style>
        <thead>
          <tr>
            <th>Puzzle name</th>
            <th>Answer</th>
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bizarre-o-Land</td>
            <td>
              <Monospace>BAZAAR</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
          </tr>
          <tr>
            <td>Peferdefedofor!</td>
            <td>
              <Monospace>WHO CAME IN 4TH</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Cousteau</td>
            <td>
              <Monospace>OUST</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Seriously tangled and randomly ticklish</td>
            <td>
              <Monospace>START</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>I, also, can't get none of it</td>
            <td>
              <Monospace>SATISFACTION</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Prem or Tem?</td>
            <td>
              <Monospace>AFTERBIRTH</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>(Lambda) Beta Testing</td>
            <td>
              <Monospace>TABLE SETTING</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Home of the Head Honcho on Earth</td>
            <td>
              <Monospace>HEARTH</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Follow the red... stapler</td>
            <td>
              <Monospace>OFFICE SPACE</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#b6d7a8]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td className="text-center bg-[#cccccc]">
              <Monospace>&nbsp;</Monospace>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TempNameTable;
