import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';
import Twemoji, { InlineTwemoji } from 'components/twemoji';

const SLUG = 'mandalay-bay';
const ANSWER = `SUN`;

const EMOJIS = [
  '🥈',
  '🫐',
  '💍',
  '♦️',
  '7️⃣',
  '🪅',
  '🪙',
  '♥️',
  '🃏',
  '🥥',
  '🍒',
  '🔔',
  '💎',
  '🍋',
  '💰',
  '🍎',
  '💵',
  '🍌',
  '♠️',
  '☄️',
  '👑',
  '🍇',
  '♣️',
  '🍀',
  '🍓',
  '🥇',
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      After a few spins, we see that the slot machine has 26 emojis, and can
      deduce that each emoji represents 1 letter. Collecting enough data allows
      us to deduce that the slot machine "wins" if the letters make a
      Scrabble-legal 3-letter word, and pays out the Scrabble score of the word.
      There are 1,068 such words, so we would normally win about 6% of the time.
    </p>
    <p>
      However, we will also note that over sufficiently many pulls, certain
      emojis are more likely to appear than others. Specifically, the symbols{' '}
      <InlineTwemoji emoji="♠️" /> (<Monospace>S</Monospace>),{' '}
      <InlineTwemoji emoji="👑" /> (<Monospace>U</Monospace>), and{' '}
      <InlineTwemoji emoji="🍋" /> (<Monospace>N</Monospace>) are 3 times more
      likely to appear in the reels from left to right respectively. Taken
      together, these yield the answer <Answerize>SUN</Answerize>.
    </p>
    <p>
      (If we happened to roll <Monospace>SUN</Monospace>, we would get the
      message "The slot machine lights up in a blinding light and you avert your
      eyes. It's so bright that you can't even see the symbols.")
    </p>
    <h3>Emoji Translation</h3>
    <Table className="mt-2">
      <tbody>
        {EMOJIS.map((e, i) => (
          <tr key={i}>
            <td className="text-3xl">
              <InlineTwemoji emoji={e} />
            </td>
            <td>
              <Monospace>{String.fromCharCode(i + 65)}</Monospace>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
