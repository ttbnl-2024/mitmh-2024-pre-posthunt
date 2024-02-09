import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'model-scientists';
const ANSWER = `PLASTIC LOVE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      With some googling we learn that the descriptions refer to notable female
      scientists from around the world, given in alphabetical order by last
      name. Reordering by order of their birth, as hinted in the flavortext,
      reading the first letters of the clues gives the acrostic message{' '}
      <Monospace>I'M A BARBIE GIRL IN A</Monospace>. This phrase is meant to
      point us to the next words in the song lyric, "
      <Monospace>BARBIE WORLD</Monospace>." (Entering this into the answer
      checker gives a "keep going!" message.)
    </p>
    <p>
      In researching the female scientists we note that they all were born in
      countries outside the U.S, leading us to the "
      <a href="https://barbie.fandom.com/wiki/Dolls_of_the_World">
        Barbie Dolls of the World
      </a>
      " collection. Using the countries and provided years, one can uniquely
      identify a specific Barbie product which has a product code with 4 or 5
      digits.
    </p>
    <p>
      Applying the mathematical symbols to the numbers in the product codes
      (ignoring any letters), while adhering to the order of operations, results
      in a number from 1 to 26, which can be converted to a letter, resulting in
      the instruction: <Monospace>ENTER </Monospace>
      <Answerize>PLASTIC LOVE</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth</th>
          <th>Country</th>
          <th>Year</th>
          <th>Product Code</th>
          <th>Operations</th>
          <th>Result</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Marie Curie</td>
          <td>11/7/1867</td>
          <td>Poland</td>
          <td>1998</td>
          <td>18560</td>
          <td>
            <Monospace>% * % +</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Lise Meitner</td>
          <td>11/7/1878</td>
          <td>Austria</td>
          <td>1999</td>
          <td>21553</td>
          <td>
            <Monospace>- + + +</Monospace>
          </td>
          <td>14</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Inge Lehmann</td>
          <td>5/13/1888</td>
          <td>Denmark</td>
          <td>2002</td>
          <td>56216</td>
          <td>
            <Monospace>+ + + +</Monospace>
          </td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ida Noddack</td>
          <td>2/25/1896</td>
          <td>Germany</td>
          <td>1987</td>
          <td>3188</td>
          <td>
            <Monospace>+ + /</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Gerty Cori</td>
          <td>8/15/1896</td>
          <td>Czechoslovakia</td>
          <td>1991</td>
          <td>7330</td>
          <td>
            <Monospace>* - +</Monospace>
          </td>
          <td>18</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Zinaida Yermolyeva</td>
          <td>10/24/1898</td>
          <td>Russia</td>
          <td>1989</td>
          <td>1916</td>
          <td>
            <Monospace>* + +</Monospace>
          </td>
          <td>16</td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>Maria Goeppert-Mayer</td>
          <td>6/28/1906</td>
          <td>Germany</td>
          <td>1995</td>
          <td>12698</td>
          <td>
            <Monospace>+ * - +</Monospace>
          </td>
          <td>12</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rita Levi-Montalcini</td>
          <td>4/22/1909</td>
          <td>Italy</td>
          <td>1980</td>
          <td>1682</td>
          <td>
            <Monospace>+ - +</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ruby Payne-Scott</td>
          <td>5/28/1912</td>
          <td>Australia</td>
          <td>2011</td>
          <td>W3321</td>
          <td>
            <Monospace>* * +</Monospace>
          </td>
          <td>19</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chien-Shiung Wu</td>
          <td>5/31/1912</td>
          <td>China</td>
          <td>2001</td>
          <td>53368</td>
          <td>
            <Monospace>* + - +</Monospace>
          </td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rosalind Franklin</td>
          <td>7/25/1920</td>
          <td>England</td>
          <td>1992</td>
          <td>4973</td>
          <td>
            <Monospace>+ - +</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Taneko Suzuki</td>
          <td>11/12/1926</td>
          <td>Japan</td>
          <td>1996</td>
          <td>14163</td>
          <td>
            <Monospace>+ + - +</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Elizabeth Blackburn</td>
          <td>11/26/1948</td>
          <td>Australia</td>
          <td>1993</td>
          <td>3626</td>
          <td>
            <Monospace>+ / +</Monospace>
          </td>
          <td>12</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Donna Strickland</td>
          <td>5/27/1959</td>
          <td>Canada</td>
          <td>1988</td>
          <td>4928</td>
          <td>
            <Monospace>+ + %</Monospace>
          </td>
          <td>15</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>May-Britt Moser</td>
          <td>1/4/1963</td>
          <td>Norway</td>
          <td>1996</td>
          <td>14450</td>
          <td>
            <Monospace>+ * + +</Monospace>
          </td>
          <td>22</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>Emmanuelle Charpentier</td>
          <td>12/11/1968</td>
          <td>France</td>
          <td>2000</td>
          <td>28372</td>
          <td>
            <Monospace>* + - *</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <AuthorsNotes>
      <p>
        This puzzle was inspired by the summer 2023 "Barbenheimer" phenomenon, a
        mash-up of the simultaneously released movies about Barbie and the
        scientist Robert Oppenheimer.{' '}
      </p>
      <p>Some writing notes:</p>
      <ol>
        <li>
          Ideally we'd avoid using the % (modulo) operator, but we did not find
          good candidates for all required letters.
        </li>
        <li>
          We wanted to try and use only dolls with product codes consisting of
          only digits but we ended up with one that has a starting letter as
          well. We assume that use and the number of math operators present
          for that clue is enough to indicate that only the digits should be
          considered.
        </li>
      </ol>
    </AuthorsNotes>
    <style jsx global>{`
      th:nth-child(2),
      td:nth-child(2),
      td:nth-child(4),
      th:nth-child(5),
      td:nth-child(5),
      td:nth-child(6),
      td:nth-child(7),
      td:nth-child(8) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
