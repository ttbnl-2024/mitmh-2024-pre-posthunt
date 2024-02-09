import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'speaker-check';
const ANSWER = `NAMES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We find a common first name for each speaker that creates a pun that can
      be matched to one of the talk subjects. We then index the room number of
      the talk into the first name, and order by talks. This yields{' '}
      <Monospace>CALL IN THE ANSWER NAMES</Monospace>, for the answer{' '}
      <Answerize>NAMES</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Num.</th>
          <th>Topic</th>
          <th>Room</th>
          <th>Name</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>The history of tobacco exports in new world colonies.</td>
          <td>3</td>
          <td>
            <Monospace>NICK O'TEEN</Monospace>
            <br />
            ("nicotine")
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>The economics of resort tourism in Massachusetts.</td>
          <td>2</td>
          <td>
            <Monospace>NAN TUCKIT</Monospace>
            <br />
            ("Nantucket")
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            The relationship between author Ernest Hemingway and his household
            pets.
          </td>
          <td>4</td>
          <td>
            <Monospace>POLLY DACTIL</Monospace>
            <br />
            ("polydactyl")
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>New advances in African conservation programs.</td>
          <td>2</td>
          <td>
            <Monospace>ELLIE FANT</Monospace>
            <br />
            ("elephant")
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>The physics of the balance beam.</td>
          <td>2</td>
          <td>
            <Monospace>JIM NAST</Monospace>
            <br />
            ("gymnast")
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>An introduction to the Himalayas for the first-time climber.</td>
          <td>3</td>
          <td>
            <Monospace>ANN APURNA</Monospace>
            <br />
            ("Annapurna")
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Architectural styles of Victorian swimming baths.</td>
          <td>3</td>
          <td>
            <Monospace>NAT ATORIUM</Monospace>
            <br />
            ("natatorium")
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>The origin of the Penny Black.</td>
          <td>2</td>
          <td>
            <Monospace>PHIL ATELIST</Monospace>
            <br />
            ("philatelist")
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>The role of mementos in forming personal Memories.</td>
          <td>3</td>
          <td>
            <Monospace>SUE VENEER</Monospace>
            <br />
            ("souvenier")
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            Techniques for observing the different phases of the moon throughout
            the year.
          </td>
          <td>1</td>
          <td>
            <Monospace>AL BEDO</Monospace>
            <br />
            ("albedo")
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>The increase in food allergies in the general population.</td>
          <td>2</td>
          <td>
            <Monospace>ANNA FALAXIS</Monospace>
            <br />
            ("anaphylaxis")
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            The importance of weekend recreation in modern German culture.
          </td>
          <td>1</td>
          <td>
            <Monospace>SAM STAG</Monospace>
            <br />
            ("Samstag")
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>How to overcome temptations to achieve personal goals.</td>
          <td>1</td>
          <td>
            <Monospace>WILL POWER</Monospace>
            <br />
            ("Willpower")
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>A look at the popularity of competitive eating competitions.</td>
          <td>2</td>
          <td>
            <Monospace>DEE VOUR</Monospace>
            <br />
            ("devour")
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td>Trade routes of scented resins and oils in the first century.</td>
          <td>2</td>
          <td>
            <Monospace>FRANK INSINCE</Monospace>
            <br />
            ("frankincense")
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>
            The reawakening of artistic movements in Europe in the late Middle
            Ages.
          </td>
          <td>3</td>
          <td>
            <Monospace>RENEE SANCE</Monospace>
            <br />
            ("Renaissance")
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>17</td>
          <td>Recent advances in paranormal investigation.</td>
          <td>2</td>
          <td>
            <Monospace>PAUL TERGIST</Monospace>
            <br />
            ("poltergeist")
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td>The fashions and culture of the punk rock genre.</td>
          <td>1</td>
          <td>
            <Monospace>MOE HAWK</Monospace>
            <br />
            ("mohawk")
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>19</td>
          <td>Prevention of bacterial infections in lab settings.</td>
          <td>4</td>
          <td>
            <Monospace>MIKE ROBIAL</Monospace>
            <br />
            ("microbial")
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>20</td>
          <td>Using amphibian populations as a pollution scale.</td>
          <td>1</td>
          <td>
            <Monospace>SAL AMANDER</Monospace>
            <br />
            ("salamander")
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      td:nth-child(1),
      td:nth-child(3),
      td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
