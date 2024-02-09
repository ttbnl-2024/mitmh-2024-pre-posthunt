import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'annual-international-fictionary-night';
const ANSWER = `PJ MASKS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      First, we solve the clues, which are somewhat askew readings of words
      crowned the Word of the Year by 3 English dictionaries: Collins English
      Dictionary (British), Macquarie English Dictionary (Australian), and
      Merriam-Webster Dictionary (American). These are the C, M, and M-W
      referred to in the invitation letter. The Word of the Year is chosen based
      on the dictionary's evaluation of usage, cultural relevance, and general
      effectiveness at capturing that year's zeitgeist, hence the abundance of
      neologisms. PERMACRISIS and GASLIGHTING are probably the easiest break-in
      points as they are the most recent additions at the time of writing.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Dictionary</th>
          <th>Year</th>
          <th>Index</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Picard matching your bet</td>
          <td>
            <Clue>CAPTAIN'S CALL</Clue>
          </td>
          <td>Macquarie</td>
          <td>2015</td>
          <td>3</td>
          <td>
            <Clue>P</Clue>
          </td>
        </tr>
        <tr>
          <td>A meteorologist's special attack</td>
          <td>
            <Clue>CLIMATE STRIKE</Clue>
          </td>
          <td>Collins</td>
          <td>2019</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Scribes writing down instructions for starting the apocalypse</td>

          <td>
            <Clue>DOOMSCROLLING</Clue>
          </td>
          <td>Macquarie</td>
          <td>2020</td>
          <td>2, 7</td>
          <td>
            <Clue>O</Clue>, <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>A diet involving lowering your iron intake</td>
          <td>
            <Clue>FEMINISM</Clue>
          </td>
          <td>Merriam-Webster</td>
          <td>2017</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Snubbing the Peach State</td>
          <td>
            <Clue>GASLIGHTING</Clue>
          </td>
          <td>Merriam-Webster</td>
          <td>2022</td>
          <td>8, 4, 5, 3, 8</td>
          <td>
            <Clue>T</Clue>, <Clue>L</Clue>, <Clue>I</Clue>, <Clue>S</Clue>,{' '}
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>An animal that feeds on encyclopedias</td>
          <td>
            <Clue>INFOVORE</Clue>
          </td>
          <td>Macquarie</td>
          <td>2013</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>60% of a brick or Toblerone</td>
          <td>
            <Clue>-ISM</Clue>
          </td>
          <td>Merriam-Webster</td>
          <td>2015</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>A state that makes breaking into your house possible</td>
          <td>
            <Clue>LOCKDOWN</Clue>
          </td>
          <td>Collins</td>
          <td>2020</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>The steppe to which the Amazons banished their sons</td>
          <td>
            <Clue>MANSPLAIN</Clue>
          </td>
          <td>Macquarie</td>
          <td>2014</td>
          <td>2, 6</td>
          <td>
            <Clue>A</Clue>, <Clue>L</Clue>
          </td>
        </tr>
        <tr>
          <td>Warning call at a Dairy Queen food fight</td>
          <td>
            <Clue>MILKSHAKE DUCK</Clue>
          </td>
          <td>Macquarie</td>
          <td>2017</td>
          <td>6, 7, 5</td>
          <td>
            <Clue>H</Clue>, <Clue>A</Clue>, <Clue>S</Clue>
          </td>
        </tr>
        <tr>
          <td>What's happening to an Arctic soil layer</td>
          <td>
            <Clue>PERMACRISIS</Clue>
          </td>
          <td>Collins</td>
          <td>2022</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>A dangerous Polaroid</td>
          <td>
            <Clue>PHOTOBOMB</Clue>
          </td>
          <td>Collins</td>
          <td>2014</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            Doing something over and over to see if you get the same results
          </td>
          <td>
            <Clue>SCIENCE</Clue>
          </td>
          <td>Merriam-Webster</td>
          <td>2013</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>A mysterious group who says a lot of things</td>
          <td>
            <Clue>THEY</Clue>
          </td>
          <td>Merriam-Webster</td>
          <td>2019</td>
          <td>2</td>
          <td>
            <Clue>H</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Next, we sort the indexed letters by year to get{' '}
      <Clue>ALPHA SHORTLIST</Clue>. This is an intermediate instruction.
    </p>
    <p>
      The cards are listed in alphabetical order. There are exactly 2 WotY clued
      for each of 7 years. The blank cards, therefore, represent the unclued
      WotY of the remaining dictionary. For instance, <Clue>GASLIGHT</Clue> and{' '}
      <Clue>PERMACRISIS</Clue> are the 2022 WotY of the Merriam-Webster and
      Collins dictionaries, respectively. When we look up Macquarie's 2022 WotY,
      we find that they chose <Clue>TEAL</Clue>, which fits in the blank card
      between <Clue>SCIENCE</Clue> and <Clue>THEY</Clue>.
    </p>
    <p>
      The WotY is selected from a shortlist, which is available on each
      dictionary's website with some basic searching. We need to find the
      shortlist from which the word on the blank card was chosen. Each blank
      card is associated with two numbers. The second number indicates how many
      words are in that year's shortlist. We can alphabetize the short list and
      take the word at the position indicated by the first number.
    </p>
    <ul>
      <li>
        <Clue>GEEK</Clue> (Collins, 2013) &rarr; <Clue>PHABLET</Clue> (9/12)
      </li>
      <li>
        <Clue>CULTURE</Clue> (Merriam-Webster, 2014) &rarr;{' '}
        <Clue>JE NE SAIS QUOI</Clue> (6/10)
      </li>
      <li>
        <Clue>BINGE-WATCH</Clue> (Collins, 2015) &rarr;{' '}
        <Clue>MANSPREADING</Clue> (7/10)
      </li>
      <li>
        <Clue>FAKE NEWS</Clue> (Collins, 2017) &rarr; <Clue>ANTIFA</Clue> (1/10)
      </li>
      <li>
        <Clue>CANCEL CULTURE</Clue> (Macquarie, 2019) &rarr;{' '}
        <Clue>SILKPUNK</Clue> (14/16)
      </li>
      <li>
        <Clue>PANDEMIC</Clue> (Merriam-Webster, 2020) &rarr; <Clue>KRAKEN</Clue>{' '}
        (7/12)
      </li>
      <li>
        <Clue>TEAL</Clue> (Macquarie, 2022) &rarr; <Clue>SPICY COUGH</Clue>{' '}
        (16/19)
      </li>
    </ul>
    <p>
      We sort by year and read the first letters to get the answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      th:nth-child(3),
      td:nth-child(3),
      th:nth-child(4),
      td:nth-child(4),
      th:nth-child(5),
      td:nth-child(5),
      th:nth-child(6),
      td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
