import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'meet-me-in-st-louis';
const ANSWER = `SICILY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      First, we identify the songs, which are in alphabetical order. Next, we
      notice that the blanks under the audio clips can hold movies where the
      city in the song title is also in the movie title.  (This is also hinted
      at by the word "scene" in the flavor text.)
    </p>
    <Table>
      <thead>
        <tr>
          <th>Song</th>
          <th>Movie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Havana</td>
          <td>Our Man in Havana</td>
        </tr>
        <tr>
          <td>I Left My Heart in San Francisco</td>
          <td>The Last Black Man in San Francisco</td>
        </tr>
        <tr>
          <td>I Love Paris</td>
          <td>Midnight in Paris</td>
        </tr>
        <tr>
          <td>London Bridge is Falling Down</td>
          <td>London has Fallen</td>
        </tr>
        <tr>
          <td>Manhattan</td>
          <td>The Muppets Take Manhattan</td>
        </tr>
        <tr>
          <td>One Night in Bangkok</td>
          <td>Bangkok Dangerous</td>
        </tr>
        <tr>
          <td>Philadelphia Freedom</td>
          <td>The Philadelphia Story</td>
        </tr>
        <tr>
          <td>Rio</td>
          <td>Blame it on Rio</td>
        </tr>
        <tr>
          <td>Santa Monica</td>
          <td>Meanwhile in Santa Monica</td>
        </tr>
        <tr>
          <td>Viva Las Vegas</td>
          <td>Fear and Loathing in Las Vegas</td>
        </tr>
        <tr>
          <td>Walking in Memphis</td>
          <td>Memphis Belle</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Once all the blanks are filled in, we can extract letters and reorder from
      the numbered spaces. This gives{' '}
      <Monospace>GODFATHER EUROPEAN ISLAND</Monospace>, which clues the answer{' '}
      <b>
        <Monospace>SICILY</Monospace>
      </b>
      .
    </p>
    <AuthorsNotes>
      <p>
        This puzzle is dedicated to Tony Bennett whose obituary inspired it.
      </p>
    </AuthorsNotes>
    <Appendix>
      <div className="space-y-4">
        <Table noBorder>
          <tbody>
            <tr>
              <td>O</td>
              <td>U</td>
              <td>R</td>
              <td></td>
              <td>M</td>
              <td>A</td>
              <td>N</td>
              <td></td>
              <td>I</td>
              <td>N</td>
              <td></td>
              <td>HAVANA</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>12</td>
              <td></td>
              <td></td>
              <td>21</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>T</td>
              <td>H</td>
              <td>E</td>
              <td></td>
              <td>L</td>
              <td>A</td>
              <td>S</td>
              <td>T</td>
              <td></td>
              <td>B</td>
              <td>L</td>
              <td>A</td>
              <td>C</td>
              <td>K</td>
              <td></td>
              <td>M</td>
              <td>A</td>
              <td>N</td>
              <td></td>
              <td>I</td>
              <td>N</td>
              <td></td>
              <td>SAN FRANCISCO</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>20</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>16</td>
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
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>M</td>
              <td>I</td>
              <td>D</td>
              <td>N</td>
              <td>I</td>
              <td>G</td>
              <td>H</td>
              <td>T</td>
              <td></td>
              <td>I</td>
              <td>N</td>
              <td></td>
              <td>PARIS</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>LONDON</td>
              <td></td>
              <td>H</td>
              <td>A</td>
              <td>S</td>
              <td></td>
              <td>F</td>
              <td>A</td>
              <td>L</td>
              <td>L</td>
              <td>E</td>
              <td>N</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td>10</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>T</td>
              <td>H</td>
              <td>E</td>
              <td></td>
              <td>M</td>
              <td>U</td>
              <td>P</td>
              <td>P</td>
              <td>E</td>
              <td>T</td>
              <td>S</td>
              <td></td>
              <td>T</td>
              <td>A</td>
              <td>K</td>
              <td>E</td>
              <td></td>
              <td>MANHATTAN</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>14</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>6</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>BANGKOK</td>
              <td></td>
              <td>D</td>
              <td>A</td>
              <td>N</td>
              <td>G</td>
              <td>E</td>
              <td>R</td>
              <td>O</td>
              <td>U</td>
              <td>S</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>23</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>2</td>
              <td>11</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>T</td>
              <td>H</td>
              <td>E</td>
              <td></td>
              <td>PHILADELPHIA</td>
              <td></td>
              <td>S</td>
              <td>T</td>
              <td>O</td>
              <td>R</td>
              <td>Y</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>19</td>
              <td></td>
              <td></td>
              <td>9</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>B</td>
              <td>L</td>
              <td>A</td>
              <td>M</td>
              <td>E</td>
              <td></td>
              <td>I</td>
              <td>T</td>
              <td></td>
              <td>O</td>
              <td>N</td>
              <td></td>
              <td>RIO</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>18</td>
              <td></td>
              <td></td>
              <td></td>
              <td>17</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>M</td>
              <td>E</td>
              <td>A</td>
              <td>N</td>
              <td>W</td>
              <td>H</td>
              <td>I</td>
              <td>L</td>
              <td>E</td>
              <td></td>
              <td>I</td>
              <td>N</td>
              <td></td>
              <td>SANTA MONICA</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>5</td>
              <td>22</td>
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
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>F</td>
              <td>E</td>
              <td>A</td>
              <td>R</td>
              <td></td>
              <td>A</td>
              <td>N</td>
              <td>D</td>
              <td></td>
              <td>L</td>
              <td>O</td>
              <td>A</td>
              <td>T</td>
              <td>H</td>
              <td>I</td>
              <td>N</td>
              <td>G</td>
              <td></td>
              <td>I</td>
              <td>N</td>
              <td></td>
              <td>LAS VEGAS</td>
            </tr>
            <tr>
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
              <td>13</td>
              <td></td>
              <td></td>
              <td>7</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Table noBorder>
          <tbody>
            <tr>
              <td>MEMPHIS</td>
              <td></td>
              <td>B</td>
              <td>E</td>
              <td>L</td>
              <td>L</td>
              <td>E</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>8</td>
              <td></td>
              <td></td>
              <td>15</td>
            </tr>
          </tbody>
        </Table>
        <style jsx>
          {`
            tr:nth-child(1) > td {
              font-family: monospace;
              text-decoration: underline;
            }

            td {
              padding-left: 0.25rem;
              padding-right: 0.25rem;
              text-align: center;
            }
          `}
        </style>
      </div>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
