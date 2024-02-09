import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';
import VideoEmbed from 'components/video_embed';

const SLUG = '15-questions';
const ANSWER = `GLASS FLUTE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      When we open the puzzle, we are presented with 15 multiple-choice
      questions, with options labeled A through D and presented in a square
      format rather than a list.
    </p>
    <p>
      Observing the flavortext, which talks about winning money, up to $32,000
      (and presumably beyond), combined with the other details, allows us to
      identify this puzzle to be a slate of questions in the style of the game
      show Who Wants to be a Millionaire?
    </p>
    <p>
      The flavortext also talks about dreaming about spending the money, which,
      combined with close examination of the wrong answers, allows us to
      identify that this puzzle is also about the song "If I Had $1000000" by
      The Barenaked Ladies, as each question has, as one of its wrong answers, a
      word or phrase from the song. Several of the questions include other song
      titles by Barenaked Ladies: "One Week", "Brian Wilson", "Call and Answer",
      and "Pinch Me".
    </p>
    <p>
      The questions follow below with the correct answers highlighted in{' '}
      <b>bold</b> and the song lyric word or phrase <u>underlined</u>. The wrong
      answers are diagonally opposite the right answers, to aid in finding them.
    </p>
    <div className="mb-4">
      Scented candles were #14, but which of these was a top-10 favorite smell
      in a 2015 UK Harris poll?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Cinnamon</td>
            <td>
              B. <u>Sausages</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>A Sunday roast</b>
            </td>
            <td>D. A bonfire</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      An army led by Hannibal crossed the Alps in 16 days, not just one week.
      The army included 37 of what animal?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. A sheep</td>
            <td>
              B. <b>An elephant</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>A llama</u>
            </td>
            <td>D. A goat</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Drama! Which of these shows has won the Emmy for Outstanding Drama Series?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u><i>House</i></u>
            </td>
            <td>B. <i>Grey's Anatomy</i></td>
          </tr>
          <tr>
            <td>C. <i>The Walking Dead</i></td>
            <td>
              D. <b><i>Breaking Bad</i></b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Getting almost a perfect score, which of these empires spanned six
      continents?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Spanish</td>
            <td>
              B. <b>Dutch</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>Ottoman</u>
            </td>
            <td>D. Russian</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Some Buddy once had a famous allergic reaction to aluminum dust. Who was
      it?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Holly</td>
            <td>
              B. <b>Ebsen</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>Rich</u>
            </td>
            <td>D. Hackett</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Corporate leader Lester Maldonado was played by whom in "The Sounds of
      Silence", starring alongside Dana Plato and Todd Bridges?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u>Garfunkel</u>
            </td>
            <td>B. Coleman</td>
          </tr>
          <tr>
            <td>C. Simon</td>
            <td>
              D. <b>Estrada</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      In the 19th Century, what French painter purchased and lived in the Grande
      Maison?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <b>Meissonier</b>
            </td>
            <td>B. Cézanne</td>
          </tr>
          <tr>
            <td>C. Printemps</td>
            <td>
              D. <u>Picasso</u>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Nearly 90% of wedding proposals in 2022, according to The Knot, occurred
      where?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. A hot tub</td>
            <td>
              B. <u>A limousine</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>On bended knee</b>
            </td>
            <td>D. Home</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Edgar Allan Poe's "Murders in the Rue Morgue" were committed by what
      species?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Human</td>
            <td>
              B. <u>Monkey</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>Orangutan</b>
            </td>
            <td>D. Lion</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Species considered threatened by the U.S. include what animal?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <b>Polar bear</b>
            </td>
            <td>B. Bald eagle</td>
          </tr>
          <tr>
            <td>C. Gray wolf</td>
            <td>
              D. <u>Emu</u>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      "I don't know and I don't care" is in what song by That Handsome Devil,
      not by Brian Wilson?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u>Elephant Bones</u>
            </td>
            <td>B. Rob the Prez-o-Dent</td>
          </tr>
          <tr>
            <td>C. My Pen Is a Shiv</td>
            <td>
              D. <b>Stockholm Syndrome</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      In 2007, which stadium had over 80,000 attend its first-ever NFL game,
      having previously hosted a famous call and answer?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <b>Wembley</b>
            </td>
            <td>B. Gillette</td>
          </tr>
          <tr>
            <td>C. Levi's</td>
            <td>
              D. <u>Reliant</u>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      In 2003, what cigarette brand ended its long association with NASCAR
      racing?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Parliament</td>
            <td>
              B. <u>Chesterfield</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>Winston</b>
            </td>
            <td>D. Lucky Strike</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Drawing from his long career, George Hackenschmidt wrote{' '}
      <i>The Complete Science of</i>… what?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Laziness</td>
            <td>
              B. <b>Wrestling</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>Art</u>
            </td>
            <td>D. Dogs</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      These are all examples of morphological clipping. Wait, no, pinch me.
      Which one isn't?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u>Fridge</u>
            </td>
            <td>B. Pub</td>
          </tr>
          <tr>
            <td>C. Varsity</td>
            <td>
              D. <b>Yurt</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>

    <p>
      We observe that the words from "If I Had $1000000", in the order given in
      the questions, are not in the order given in the song. Ordering the
      questions by the order of the words in the song, we get:
    </p>
    <div className="mb-4">
      Drama! Which of these shows has won the Emmy for Outstanding Drama Series?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u><i>House</i></u>
            </td>
            <td>B. <i>Grey's Anatomy</i></td>
          </tr>
          <tr>
            <td>C. <i>The Walking Dead</i></td>
            <td>
              D. <b><i>Breaking Bad</i></b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      In 2003, what cigarette brand ended its long association with NASCAR
      racing?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Parliament</td>
            <td>
              B. <u>Chesterfield</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>Winston</b>
            </td>
            <td>D. Lucky Strike</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Getting almost a perfect score, which of these empires spanned six
      continents?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Spanish</td>
            <td>
              B. <b>Dutch</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>Ottoman</u>
            </td>
            <td>D. Russian</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      In 2007, which stadium had over 80,000 attend its first-ever NFL game,
      having previously hosted a famous call and answer?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <b>Wembley</b>
            </td>
            <td>B. Gillette</td>
          </tr>
          <tr>
            <td>C. Levi's</td>
            <td>
              D. <u>Reliant</u>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      These are all examples of morphological clipping. Wait, no, pinch me.
      Which one isn't?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u>Fridge</u>
            </td>
            <td>B. Pub</td>
          </tr>
          <tr>
            <td>C. Varsity</td>
            <td>
              D. <b>Yurt</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Scented candles were #14, but which of these was a top-10 favorite smell
      in a 2015 UK Harris poll?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Cinnamon</td>
            <td>
              B. <u>Sausages</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>A Sunday roast</b>
            </td>
            <td>D. A bonfire</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      An army led by Hannibal crossed the Alps in 16 days, not just one week.
      The army included 37 of what animal?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. A sheep</td>
            <td>
              B. <b>An elephant</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>A llama</u>
            </td>
            <td>D. A goat</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Species considered threatened by the U.S. include what animal?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <b>Polar bear</b>
            </td>
            <td>B. Bald eagle</td>
          </tr>
          <tr>
            <td>C. Gray wolf</td>
            <td>
              D. <u>Emu</u>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      "I don't know and I don't care" is in what song by That Handsome Devil,
      not by Brian Wilson?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u>Elephant Bones</u>
            </td>
            <td>B. Rob the Prez-o-Dent</td>
          </tr>
          <tr>
            <td>C. My Pen Is a Shiv</td>
            <td>
              D. <b>Stockholm Syndrome</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Nearly 90% of wedding proposals in 2022, according to The Knot, occurred
      where?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. A hot tub</td>
            <td>
              B. <u>A limousine</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>On bended knee</b>
            </td>
            <td>D. Home</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Drawing from his long career, George Hackenschmidt wrote{' '}
      <i>The Complete Science of</i>… what?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Laziness</td>
            <td>
              B. <b>Wrestling</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>Art</u>
            </td>
            <td>D. Dogs</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      In the 19th Century, what French painter purchased and lived in the Grande
      Maison?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <b>Meissonier</b>
            </td>
            <td>B. Cézanne</td>
          </tr>
          <tr>
            <td>C. Printemps</td>
            <td>
              D. <u>Picasso</u>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Corporate leader Lester Maldonado was played by whom in "The Sounds of
      Silence", starring alongside Dana Plato and Todd Bridges?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>
              A. <u>Garfunkel</u>
            </td>
            <td>B. Coleman</td>
          </tr>
          <tr>
            <td>C. Simon</td>
            <td>
              D. <b>Estrada</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Edgar Allan Poe's "Murders in the Rue Morgue" were committed by what
      species?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Human</td>
            <td>
              B. <u>Monkey</u>
            </td>
          </tr>
          <tr>
            <td>
              C. <b>Orangutan</b>
            </td>
            <td>D. Lion</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <div className="mb-4">
      Some Buddy once had a famous allergic reaction to aluminum dust. Who was
      it?
      <br />
      <Table noBorder={true} className="w-full">
        <tbody>
          <tr>
            <td>A. Holly</td>
            <td>
              B. <b>Ebsen</b>
            </td>
          </tr>
          <tr>
            <td>
              C. <u>Rich</u>
            </td>
            <td>D. Hackett</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <p>
      The initial letters of the questions now spell{' '}
      <Clue>DIGITS AS INDICES</Clue>, suggesting that this is the correct next
      step.
    </p>
    <p>
      We've now used the song lyrics, but we haven't yet used the connection to
      Who Wants to be a Millionaire. If we look up the prize values for a
      contestant's successful answers in order, where the awarded prizes include
      the $32,000 prize, the values are $100, $200, $300, $500, $1,000, $2,000,
      $4,000, $8,000, $16,000, $32,000, $64,000, $125,000, $250,000, $500,000,
      and $1,000,000.
    </p>
    <p>
      Using the nonzero parts of the dollar amounts and indexing into correct
      answers yields an answer string which starts <Clue>BITLY</Clue> (like the
      bit.ly URL shortener) <Clue>SLA</Clue> , which looks promising. We cannot
      index into the 16th position of the next answer; however, if we index by
      digits separately, we get the promising combination of <Clue>SH</Clue> for{' '}
      <Clue>BITLY SLASH</Clue>. Indexing using the nonzero digits in all of the
      dollar amounts results in the phrase <Clue>BITLY SLASH BNLS MESSAGE</Clue>
      . Visiting <a href="https://bit.ly/bnlsmessage">bit.ly/bnlsmessage</a> (or
      a couple variants, including{' '}
      <a href="https://bit.ly/bnlsMessagE">https://bit.ly/bnlsMessagE</a>)
      provides us with the message which provides us with a message from Ed
      Robertson from Barenaked Ladies and the answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>

    <Table>
      <thead>
        <tr>
          <th>Song word</th>
          <th>Correct Answer</th>
          <th>Prize</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>House</td>
          <td>
            <Monospace>BREAKING BAD</Monospace>
          </td>
          <td>$100</td>
          <td className="text-center">
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>Chesterfield</td>
          <td>
            <Monospace>WINSTON</Monospace>
          </td>
          <td>$200</td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ottoman</td>
          <td>
            <Monospace>DUTCH</Monospace>
          </td>
          <td>$300</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Reliant</td>
          <td>
            <Monospace>WEMBLEY</Monospace>
          </td>
          <td>$500</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Fridge</td>
          <td>
            <Monospace>YURT</Monospace>
          </td>
          <td>$1,000</td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>Sausages</td>
          <td>
            <Monospace>A SUNDAY ROAST</Monospace>
          </td>
          <td>$2,000</td>
          <td className="text-center">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>A llama</td>
          <td>
            <Monospace>AN ELEPHANT</Monospace>
          </td>
          <td>$4,000</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Emu</td>
          <td>
            <Monospace>POLAR BEAR</Monospace>
          </td>
          <td>$8,000</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Elephant Bones</td>
          <td>
            <Monospace>STOCKHOLM SYNDROME</Monospace>
          </td>
          <td>$16,000</td>
          <td className="text-center">
            <Monospace>SH</Monospace>
          </td>
        </tr>
        <tr>
          <td>A limousine</td>
          <td>
            <Monospace>ON BENDED KNEE</Monospace>
          </td>
          <td>$32,000</td>
          <td className="text-center">
            <Monospace>BN</Monospace>
          </td>
        </tr>
        <tr>
          <td>Art</td>
          <td>
            <Monospace>WRESTLING</Monospace>
          </td>
          <td>$64,000</td>
          <td className="text-center">
            <Monospace>LS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Picasso</td>
          <td>
            <Monospace>MEISSONIER</Monospace>
          </td>
          <td>$125,000</td>
          <td className="text-center">
            <Monospace>MES</Monospace>
          </td>
        </tr>
        <tr>
          <td>Garfunkel</td>
          <td>
            <Monospace>ESTRADA</Monospace>
          </td>
          <td>$250,000</td>
          <td className="text-center">
            <Monospace>SA</Monospace>
          </td>
        </tr>
        <tr>
          <td>Monkey</td>
          <td>
            <Monospace>ORANGUTAN</Monospace>
          </td>
          <td>$500,000</td>
          <td className="text-center">
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rich</td>
          <td>
            <Monospace>EBSEN</Monospace>
          </td>
          <td>$1,000,000</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <h2>Acknowledgements</h2>
    <p>Special thanks to Ed Robertson for his assistance with this puzzle.</p>
    <VideoEmbed src="https://www.youtube-nocookie.com/embed/jCCCNOSpdJU" />
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
