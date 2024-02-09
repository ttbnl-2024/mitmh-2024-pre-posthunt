import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'dating-stars';
const ANSWER = `TANSY MUSTARD`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each picture is a "Virgin versus Chad" meme. Each of the "Chad" sides of
      the memes describes one of the symbols of the Eastern (Chinese) zodiac.
      Each of the "virgin" sides of the memes refers to one of the Western
      zodiac horoscopes in Weird Al's "Your Horoscope for Today" song (as hinted
      by "weird, al..." in the flavortext). In order picture by picture, these
      are:
    </p>
    <ol>
      <li>Aries | Pig</li>
      <li>Capricorn | Horse</li>
      <li>Aquarius | Goat</li>
      <li>Cancer | Dragon</li>
      <li>Leo | Tiger</li>
      <li>Taurus | Dog</li>
      <li>Gemini | Rat</li>
      <li>Libra | Rooster</li>
      <li>Scorpio | Ox</li>
      <li>Sagittarius | Rabbit</li>
      <li>Virgo | Monkey</li>
      <li>Pisces | Snake</li>
    </ol>
    <p>
      Each of the descriptions at the bottom of the puzzle could refer to
      several people&mdash;there are usually between 3 and 5 possibilities. In each
      case, only one of those people has a birth date that simultaneously
      matches the combination of a Western zodiac sign and Eastern zodiac sign
      from one of the pictures. For example, Emma Thompson (one of the leading
      actresses of <i>Love Actually</i>) has a birth date that makes her an
      Aries, and is during the year of the pig in the Eastern zodiac.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Person</th>
          <th>Birthdate</th>
          <th>Zodiac Signs</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>One of the leading actresses of <i>Love Actually</i></td>
          <td>Emma Thompson</td>
          <td>4/15/1959 </td>
          <td>Aries | Pig</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>One of the stars of the 1990 movie <i>The Witches</i></td>
          <td>Rowan Atkinson</td>
          <td>1/6/1955</td>
          <td>Capricorn | Horse</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>A star on ABC's <i>Queens</i></td>
          <td>Brandy Norwood</td>
          <td>2/11/1979</td>
          <td>Aquarius | Goat</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>One of the Beatles</td>
          <td>Ringo Starr</td>
          <td>7/7/1940</td>
          <td>Cancer | Dragon</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            One of the Wangs from{' '}
            <i>Everything Everywhere All at Once</i>
          </td>
          <td>Michelle Yeoh</td>
          <td>8/6/1962</td>
          <td>Leo | Tiger </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>One of the men in the glee club in <i>Glee</i></td>
          <td>Cory Monteith</td>
          <td>5/11/1982</td>
          <td>Taurus | Dog</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>One of the boys in <i>The Boys</i></td>
          <td>Karl Urban</td>
          <td>6/7/1972</td>
          <td>Gemini | Rat </td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>A coach on season 7 of <i>The Voice</i></td>
          <td>Gwen Stefani</td>
          <td>10/3/1969</td>
          <td>Libra | Rooster</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>A head of NASA during the '80s</td>
          <td>Richard Truly</td>
          <td>11/12/1937</td>
          <td>Scorpio | Ox</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>A star in <i>Sky High</i></td>
          <td>Michael Angarano</td>
          <td>12/3/1987</td>
          <td>Sagittarius | Rabbit</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>A producer of <i>Meet the Fockers</i></td>
          <td>Jane Rosenthal</td>
          <td>9/21/1956</td>
          <td>Virgo | Monkey</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>One of the leads on <i>Sex and the City</i></td>
          <td>Kristin Davis</td>
          <td>2/23/1965</td>
          <td>Pisces | Snake</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taking the first letter of their last names ordered by meme spells{' '}
      <Answerize>TANSY MUSTARD</Answerize>.
    </p>
    <style jsx global>{`
      td:nth-child(2),
      td:nth-child(3),
      td:nth-child(4),
      td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
