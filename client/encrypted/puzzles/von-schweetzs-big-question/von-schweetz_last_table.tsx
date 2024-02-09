import { FC } from 'react';

import FlavorText from 'components/flavor_text';
import Table from 'components/table';

const LastTable: FC<{}> = () => {
  return (
    <>
      <FlavorText>
        Yes&mdash;these princesses all live in one royal palace or another. But
        there were a few questions when Vanellope von Schweetz said that SHE was
        a princess too. In fact, you might make an argument that some of these
        ladies are princesses too!
      </FlavorText>
      <Table>
        <style jsx>{`
          th:not(:nth-child(1)) {
            padding: 2px 4px;
            max-width: 60px;
            min-width: 60px;
            overflow-wrap: break-word;
          }
        `}</style>
        <thead>
          <tr>
            <th></th>
            <th className="text-center">()</th>
            <th className="text-center">(XX)</th>
            <th className="text-center">(XXXXXX)</th>
            <th className="text-center">(XX)</th>
            <th className="text-center">(XXXX)</th>
            <th className="text-center">(XXXXXXXX)</th>
            <th className="text-center">()</th>
            <th className="text-center">(XXXX)</th>
            <th className="text-center">(XXXXXXXXX)</th>
            <th className="text-center">(XXXXXXXX)</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-bold">
            <td></td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">?</td>
            <td className="text-center">? !</td>
            <td className="text-center">?</td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Buttercup (<i>The Princess Bride</i>) <b>(XXXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Little Red Riding Hood (The Brothers Grimm) <b>(XX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Dorothy (<i>The Wizard of Oz</i>) <b>(XXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Princess Fiona (<i>Shrek</i>) <b>(XXXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Eleven (<i>Stranger Things</i>) <b>(XXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Vanellope von Schweetz (<i>Ralph Breaks the Internet</i>) <b>(XX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Princess Leia (<i>Star Wars</i>) <b>(XXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Mary Poppins (<i>Mary Poppins</i>) <b>(XXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Princess Peach (Super Mario video games) <b>(XXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Bella Swan (<i>Twilight</i> series) <b>(XXXXXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td>
              Ella (<i>Ella Enchanted</i>) <b>(XXXX)</b>
            </td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
            <td className="text-center"></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default LastTable;
