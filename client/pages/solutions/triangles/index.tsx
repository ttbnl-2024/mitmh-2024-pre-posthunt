import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import InfoIcon from 'components/info_icon';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import pdf from 'assets/solutions/triangles/triangles_soln.pdf';

const SLUG = 'triangles';
const ANSWER = `DISCS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The 20 triangles can each be solved with answers corresponding to the 60
      given lengths. (See the PDF in the appendix.)
    </p>
    <p>These answers fall into 12 groups of 5 answers each:</p>
    <ul>
      <li>Keys: ALT, CAPS LOCK, RETURN, SHIFT, TAB</li>
      <li>Letters: V, W, X, Y, Z</li>
      <li>
        Shakespeare's Julius Caesar: DOGS OF WAR, ET TU, GREEK TO ME, IDES OF
        MARCH, UNKINDEST CUT
      </li>
      <li>Majors: ANTHROPOLOGY, ARCHITECTURE, HISTORY, LITERATURE, PHYSICS</li>
      <li>Birds: EMUS, HENS, HERONS, PELICANS, SWANS</li>
      <li>
        Monopoly: ELECTRIC COMPANY, FREE PARKING, GO, INCOME TAX, WATER WORKS
      </li>
      <li>
        NATO alphabet: BRAVO, ECHO, INDIA, MIKE, NOVEMBER (phonetic alphabet)
      </li>
      <li>
        First names of '90s comedic movie title characters: ACE, AUSTIN, BILLY,
        DEUCE, HAPPY
      </li>
      <li>Nutrients: FOLATE, MAGNESIUM, POTASSIUM, THIAMIN, VITAMIN C</li>
      <li>Dutch Eredivisie: AJAX, ENSCHEDE, GO AHEAD, NEC, ROTTERDAM</li>
      <li>Red Sox players: BABE, PESKY, RICE, SPEAKER, YOUNG</li>
      <li>
        Celestial objectsTHE GALAXY, THE MOON, THE PLANETS, THE STAR, THE SOLAR
        SYSTEM
      </li>
    </ul>
    <p>
      This allows the 20 triangles to be cut and assembled into an icosahedron,
      with each group of 5 touching at a common vertex. The appendix PDF has the
      triangles assembled in a plane such that they could be folded.
    </p>
    <p>
      Once we have done so, we notice that one answer on each face of the
      icosahedron associates with a unique number from 1 to 20:
    </p>
    <ol>
      <li>ACE (playing card)</li>
      <li>DEUCE (playing card)</li>
      <li>HENS (12 days of Christmas)</li>
      <li>ARCHITECTURE (MIT course number)</li>
      <li>V (Roman numeral)</li>
      <li>PESKY (jersey number)</li>
      <li>SWANS (12 days of Christmas)</li>
      <li>PHYSICS (MIT course number)</li>
      <li>TAB (ASCII code)</li>
      <li>X (Roman numeral)</li>
      <li>NOVEMBER (month)</li>
      <li>MAGNESIUM (atomic number)</li>
      <li>RETURN (ASCII code)</li>
      <li>RICE (jersey number)</li>
      <li>IDES OF MARCH (actual day)</li>
      <li>INCOME TAX (16th amendment)</li>
      <li>THE STAR (major arcana)</li>
      <li>THE MOON (major arcana)</li>
      <li>POTASSIUM (atomic number)</li>
      <li>ENSCHEDE (in the Twente region ~ 20)</li>
    </ol>
    <p>
      These allow us to label the icosahedron as a d20. As confirmation,
      opposite sides of the die add up to 21, as is standard.
    </p>
    <p>
      Finally, we can use the D&amp;D campaign rules. Generating a random rule
      produces one of 20 rules, with unequal frequencies. Additional inspection
      will find that they appear with a frequency ratio of 1:2:3:...:19:20
      (exact for the first 210 rules generated, with those odds afterwards),
      providing a mapping. This allows us to map each rule onto a specific face
      of the d20.
    </p>
    <p>
      These rules correspond to five major editions of the Dungeons and Dragons
      rulebooks, with the relevant edition names provided (see{' '}
      <a href="https://en.wikipedia.org/wiki/Editions_of_Dungeons_%26_Dragons">
        Editions of Dungeons &amp; Dragons - Wikipedia
      </a>
      ): AD&amp;D 1, D&amp;D Basic BECMI, AD&amp;D 2, D&amp;D 3, D&amp;D 5e.
      Each rule is only valid in certain systems.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Rule</th>
          <th>AD&amp;D 1</th>
          <th>D&amp;D Basic BECMI</th>
          <th>AD&amp;D 2</th>
          <th>D&amp;D 3</th>
          <th>D&amp;D 5e</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">1</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">2</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">3</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">4</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">5</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">6</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">7</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">8</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">x</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">9</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">10</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">11</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">12</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">13</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">14</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">15</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">16</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">17</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">18</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center">19</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
        </tr>
        <tr>
          <td className="text-center">20</td>
          <td className="text-center">
            <b>
              <Monospace>x</Monospace>
            </b>
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Treating each rulebook separately, painting the indicated faces produces a
      letter on the constructed icosahedron, as above. (The appendix PDF has the
      planar versions of the icosahedron, with the triangles arranged and shaded
      so that it is possible to see what letter is intended.) In order by
      rulebook, these spell out the answer, <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <InfoIcon>
        <a href={pdf}>Direct PDF link.</a>
      </InfoIcon>
      <iframe src={pdf + '#zoom=Fit'} className="w-full">
        <style jsx>{`
          iframe {
            /* Why can't this be a tailwind class? No clue. */
            aspect-ratio: 8.5/11;
          }
        `}</style>
      </iframe>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
