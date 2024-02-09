import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/greek-girl-squad/0.png';
import image1 from 'assets/solutions/greek-girl-squad/1.png';
import image2 from 'assets/solutions/greek-girl-squad/2.png';

const SLUG = 'greek-girl-squad';
const ANSWER = `FATE STAY NIGHT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We will notice four "death scenes" in a zigzag word balloon providing a
      crossword clue.
    </p>
    <p>
      Answering the clue, using the situation as a help to find that word, we
      will get the following four answers.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="https://youtu.be/26GXkiE0pRc?t=56">0:56</a>
          </td>
          <td>Removed your name from the competition before it began!!!</td>
          <td>
            <Monospace>SCRATCHED</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://youtu.be/26GXkiE0pRc?t=79">1:19</a>
          </td>
          <td>Chased someone relentlessly or refused to leave them alone!!!</td>
          <td>
            <Monospace>HOUNDED</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://youtu.be/26GXkiE0pRc?t=136">2:16</a>
          </td>
          <td>Had a medical test done to look inside your body!!!</td>
          <td>
            <Monospace>CATSCANNED</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://youtu.be/26GXkiE0pRc?t=162">2:42</a>
          </td>
          <td>Slang term for being high on drugs!!!</td>
          <td>
            <Monospace>STONED</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      An example of a death word in the video is when the lion gets{' '}
      <Monospace>STATUED</Monospace>, in case we are less familiar with this
      cartoon.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      We will also notice four strings of greek letters in the video, which
      match up to the answer words by length.
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      Listing the Greek alphabet in order, and attaching the associated letters
      spells the task: <Monospace>SEND US A CARTOON DEATH SCENE</Monospace>.
      Completing this task yields the final answer of{' '}
      <Answerize>FATE STAY NIGHT</Answerize>.
    </p>
    <p>
      <SheetableImage alt="" src={image2} title="" />
    </p>
    <AuthorsNotes>
      <p>
        I have always loved and laughed at the Teen Girl Squad comics found at
        homestarrunner.com. I wanted to pay tribute to them, and also see if a
        puzzling element could be added to it. The challenge here was to find an
        answer phrase to fit the Greek alphabet, and then extract (anagram) four
        unique death scene words from that phrase that needed to be in the past
        tense and also potentially use words that may have two meanings to fit
        the comic book style. I got as close as I could to the idea of{' '}
        <Monospace>HOUNDED</Monospace> to death,{' '}
        <Monospace>SCRATCHED</Monospace> to death, <Monospace>STONED</Monospace>{' '}
        to death, but then was left with two <Monospace>C</Monospace>'s, two{' '}
        <Monospace>A</Monospace>'s, two <Monospace>N</Monospace>'s and needing{' '}
        <Monospace>ED</Monospace> to finish. A brief thought of being{' '}
        <Monospace>CANCANNED</Monospace> to death with dancers from the
        underworld chasing Orpheus was considered, but I still needed that{' '}
        <Monospace>S</Monospace> that ended up in{' '}
        <Monospace>CATSCANNED</Monospace>. Overall, it was fun to conceive and
        create! I look forward to seeing some of your Cartoon Death Scenes at
        the Hunt!
      </p>
    </AuthorsNotes>
    <style jsx>{`
      td:nth-child(1) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
