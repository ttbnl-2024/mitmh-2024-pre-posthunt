import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'a-block-party';
const ANSWER = `PREDICT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see descriptions of one person's experience opening the door for
      trick-or-treaters on Halloween. Over the course of the night, they're
      visited by seven different groups of "costumed figures," with each group
      containing a different number of characters.
    </p>
    <p>
      If we notice the words "brick," "figures," and "series" in the flavor text
      and do a web search for some of the costumes described, we'll discover
      that these are descriptions of minifigures from Lego's collectible
      minifigure series. As of January 2024, there are 25 sets of minifigures in
      the series.
    </p>
    <p>
      If we identify the groups by the minifigure descriptions, reorder by the
      number of characters in each set, and translate the series number to a
      letter using A1Z26 encoding, we can spell out the final answer:{' '}
      <b>
        <Monospace>PREDICT</Monospace>
      </b>
      .
    </p>
    <Table>
      <thead>
        <tr>
          <th># of Characters</th>
          <th>Characters</th>
          <th>Minifigure Series Number</th>
          <th>A1Z26</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Hiker</td>
          <td>16</td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Party Clown, Spider Suit Boy</td>
          <td>18</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Graduate, Gladiator, Royal Guard</td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Musketeer, Viking, Artist, Sailor</td>
          <td>4</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            Hollywood Starlet, Mr. Good and Evil, Cyclops, Waiter, Chicken Suit
            Guy
          </td>
          <td>9</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            Gorilla Suit Guy, Mummy, Samurai Warrior, Sumo Wrestler, Fisherman,
            Baseball Player
          </td>
          <td>3</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            Space Fan, 80s Musician, Peapod Costume Girl, Llama Costume Girl,
            Pajama Girl, Viking, Tournament Knight
          </td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      td:nth-child(1),
      td:nth-child(3),
      td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
