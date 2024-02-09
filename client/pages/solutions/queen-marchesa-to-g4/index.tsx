import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';

const SLUG = 'queen-marchesa-to-g4';
const ANSWER = `JOYFUL SPIRITS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <style jsx global>{`
      table.chess td {
        border: 1px solid black;
        width: 35px;
        max-width: 35px;
        height: 35px;
        text-align: center;
      }
    `}</style>
    <p>
      In this puzzle, we solve a series of chess problems augmented with Magic
      the Gathering cards. From the fake White Queen card, and the stipulations
      below, we infer some basic rules:
    </p>
    <ul>
      <li>
        All normal chessboard pieces are token creatures. Queens have the
        subtype Noble.
      </li>
      <li>
        Each player's turn is a normal MtG turn, except the "combat phase" is a
        chess move.
      </li>
      <li>
        This doesn't turn out to be so important, but since the White Queen is a
        9/9, probably knights are 3/3, rooks are 5/5, pawns are 1/1, etc. (Kings
        unclear.)
      </li>
    </ul>
    <p>
      Why does the White Queen have those abilities? It's not necessary to
      understand this to solve the puzzle, but it helps. The abilities ensure
      that the game plays exactly like normal chess. Without Vigilance, pieces
      would tap when attacking, and in MtG, tapped creatures can't block. More
      importantly, without the deathtouch + first strike combo, an attacking
      piece would not always be able to both "capture" a defending piece and
      survive the capture.
    </p>
    <h2>Problems</h2>
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>W</td>
            <td>E</td>
            <td>L</td>
            <td>C</td>
            <td>O</td>
            <td>M</td>
            <td>E</td>
            <td>T</td>
          </tr>
          <tr>
            <td>O</td>
            <td>T</td>
            <td>H</td>
            <td>E</td>
            <td>C</td>
            <td>H</td>
            <td>E</td>
            <td>S</td>
          </tr>
          <tr>
            <td>S</td>
            <td>Z</td>
            <td>O</td>
            <td>N</td>
            <td>E</td>
            <td>I</td>
            <td>H</td>
            <td>O</td>
          </tr>
          <tr>
            <td>P</td>
            <td>E</td>
            <td>Y</td>
            <td>O</td>
            <td>U</td>
            <td>R</td>
            <td>E</td>
            <td>R</td>
          </tr>
          <tr>
            <td>E</td>
            <td>A</td>
            <td>D</td>
            <td>Y</td>
            <td>T</td>
            <td>O</td>
            <td>S</td>
            <td>O</td>
          </tr>
          <tr>
            <td>L</td>
            <td>V</td>
            <td>E</td>
            <td>M</td>
            <td>Y</td>
            <td>E</td>
            <td>L</td>
            <td>E</td>
          </tr>
          <tr>
            <td>V</td>
            <td>E</td>
            <td>N</td>
            <td>C</td>
            <td>H</td>
            <td>E</td>
            <td>S</td>
            <td>S</td>
          </tr>
          <tr>
            <td>P</td>
            <td>R</td>
            <td>O</td>
            <td>B</td>
            <td>L</td>
            <td>E</td>
            <td>M</td>
            <td className="bg-yellow-300">S</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♔</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♘</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♝</td>
            <td>♚</td>
            <td>♞</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♖</td>
            <td></td>
            <td></td>
            <td></td>
            <td>♗</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/8/8/8/8/4K3/6N1/4bkn1/3R3B">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>You control two Mountains.</li>
      <li>
        Your hand contains{' '}
        <a href="https://scryfall.com/card/rna/270/ragefire">Ragefire</a>.
      </li>
      <li>
        Your opponent's king on f2 is equipped by{' '}
        <a href="https://scryfall.com/card/clb/339/swiftfoot-boots">
          Swiftfoot Boots
        </a>
        .
      </li>
      <li>Mate in 1. Where do you move during the combat phase?</li>
    </ul>
    <p>
      <b>Solution:</b> Ragefire our own h1 bishop and play 1. Nh1#.
    </p>
    <p>(Computer-checked that this is the only solution.)</p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>W</td>
            <td>E</td>
            <td>L</td>
            <td>C</td>
            <td>O</td>
            <td>M</td>
            <td>E</td>
            <td>T</td>
          </tr>
          <tr>
            <td>O</td>
            <td>T</td>
            <td>H</td>
            <td>E</td>
            <td>M</td>
            <td>A</td>
            <td>G</td>
            <td>I</td>
          </tr>
          <tr>
            <td>C</td>
            <td>T</td>
            <td>H</td>
            <td>E</td>
            <td>G</td>
            <td>A</td>
            <td>T</td>
            <td>H</td>
          </tr>
          <tr>
            <td>E</td>
            <td>R</td>
            <td>I</td>
            <td>N</td>
            <td>G</td>
            <td>Z</td>
            <td>O</td>
            <td>N</td>
          </tr>
          <tr>
            <td>E</td>
            <td>A</td>
            <td>S</td>
            <td>W</td>
            <td>E</td>
            <td>L</td>
            <td>L</td>
            <td>I</td>
          </tr>
          <tr>
            <td>H</td>
            <td>O</td>
            <td>P</td>
            <td>E</td>
            <td>Y</td>
            <td>O</td>
            <td>U</td>
            <td>K</td>
          </tr>
          <tr>
            <td>N</td>
            <td>O</td>
            <td>W</td>
            <td>A</td>
            <td>L</td>
            <td>L</td>
            <td>O</td>
            <td>F</td>
          </tr>
          <tr>
            <td>T</td>
            <td>H</td>
            <td>E</td>
            <td className="bg-yellow-300">R</td>
            <td>U</td>
            <td>L</td>
            <td>E</td>
            <td>S</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♚</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>♝</td>
            <td></td>
            <td></td>
            <td>♗</td>
            <td></td>
            <td>♟</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♙</td>
            <td></td>
            <td>♙</td>
            <td></td>
            <td>♙</td>
          </tr>
          <tr>
            <td>♜</td>
            <td></td>
            <td>♕</td>
            <td></td>
            <td></td>
            <td>♔</td>
            <td>♙</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♛</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/8/8/8/4k3/1b2B1p1/3P1P1P/r1Q2KP1/7q">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>You control a Plains.</li>
      <li>
        Your hand contains{' '}
        <a href="https://scryfall.com/card/ima/22/guard-duty">Guard Duty</a>.
      </li>
      <li>Your opponent controls 2 Forests and 6 Wastes.</li>
      <li>
        Their hand contains{' '}
        <a href="https://scryfall.com/card/ltc/42/motivated-pony">
          Motivated Pony
        </a>{' '}
        and{' '}
        <a href="https://scryfall.com/card/m13/190/serpents-gift">
          Serpent's Gift
        </a>
        .
      </li>
      <li>
        Play the only legal move. Where do you move during the combat phase?
      </li>
    </ul>
    <p>
      <b>Solution:</b> This puzzle tutorializes "check." Just like in real
      chess, we are in "check" if our king is in danger, i.e., if our opponent
      threatens to somehow capture it. (Unlike in real MtG, all information is
      public, so check is public too.)
    </p>
    <p>
      The Motivated Pony is a seriously dangerous Horse, since it has Haste.
      It's natural to guess that the subtype Horse means it moves like a knight.
      If any square a knight's move from our king stays open, then our opponent
      can summon the horse, give it deathtouch, and kill our king.
    </p>
    <p>
      1. Ke1 is safe from the horse, but illegal since our one Guard Duty can't
      stop both the b4 bishop and h1 queen. So the only way is 1. Qd1 and
      enchant the a2 rook with Guard Duty.
    </p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>M</td>
            <td>Y</td>
            <td>E</td>
            <td>X</td>
            <td>T</td>
            <td>R</td>
            <td>A</td>
            <td>C</td>
          </tr>
          <tr>
            <td>T</td>
            <td>I</td>
            <td className="bg-yellow-300">O</td>
            <td>N</td>
            <td>I</td>
            <td>S</td>
            <td>P</td>
            <td>R</td>
          </tr>
          <tr>
            <td>E</td>
            <td>T</td>
            <td>T</td>
            <td>Y</td>
            <td>N</td>
            <td>O</td>
            <td>N</td>
            <td>C</td>
          </tr>
          <tr>
            <td>O</td>
            <td>N</td>
            <td>S</td>
            <td>T</td>
            <td>R</td>
            <td>A</td>
            <td>I</td>
            <td>N</td>
          </tr>
          <tr>
            <td>E</td>
            <td>D</td>
            <td>S</td>
            <td>O</td>
            <td>W</td>
            <td>E</td>
            <td>L</td>
            <td>C</td>
          </tr>
          <tr>
            <td>O</td>
            <td>M</td>
            <td>E</td>
            <td>P</td>
            <td>U</td>
            <td>Z</td>
            <td>Z</td>
            <td>L</td>
          </tr>
          <tr>
            <td>E</td>
            <td>H</td>
            <td>U</td>
            <td>N</td>
            <td>T</td>
            <td>E</td>
            <td>R</td>
            <td>S</td>
          </tr>
          <tr>
            <td>T</td>
            <td>O</td>
            <td>M</td>
            <td>Y</td>
            <td>B</td>
            <td>L</td>
            <td>O</td>
            <td>G</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td>♘</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♔</td>
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
          </tr>
          <tr>
            <td>♘</td>
            <td></td>
            <td></td>
            <td>♚</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/1N5K/8/N2k4/8/8/8/8/8">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>You control two Islands.</li>
      <li>
        Your hand contains{' '}
        <a href="https://scryfall.com/card/vma/2/time-walk">Time Walk</a>.
      </li>
      <li>
        Mate in 1 (where the turn count "1" ignores extra turns). Where do you
        move during the first combat phase?
      </li>
    </ul>
    <p>
      <b>Solution:</b> This puzzle reinforces the idea of check. 1. Nc7# is
      checkmate because no matter where the king moves, we can capture it
      before Black's next turn.
    </p>
    <p>(Computer-checked that this is the only solution.)</p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>D</td>
            <td>O</td>
            <td>N</td>
            <td>T</td>
            <td>P</td>
            <td>A</td>
            <td>N</td>
            <td>I</td>
          </tr>
          <tr>
            <td>C</td>
            <td>J</td>
            <td>U</td>
            <td>S</td>
            <td>T</td>
            <td>Y</td>
            <td>E</td>
            <td>T</td>
          </tr>
          <tr>
            <td>B</td>
            <td>O</td>
            <td>W</td>
            <td>O</td>
            <td className="bg-yellow-300">F</td>
            <td>N</td>
            <td>Y</td>
            <td>L</td>
          </tr>
          <tr>
            <td>E</td>
            <td>A</td>
            <td>I</td>
            <td>S</td>
            <td>J</td>
            <td>U</td>
            <td>S</td>
            <td>T</td>
          </tr>
          <tr>
            <td>S</td>
            <td>O</td>
            <td>A</td>
            <td>T</td>
            <td>T</td>
            <td>A</td>
            <td>C</td>
            <td>K</td>
          </tr>
          <tr>
            <td>I</td>
            <td>N</td>
            <td>G</td>
            <td>C</td>
            <td>R</td>
            <td>E</td>
            <td>A</td>
            <td>T</td>
          </tr>
          <tr>
            <td>U</td>
            <td>R</td>
            <td>E</td>
            <td>S</td>
            <td>A</td>
            <td>C</td>
            <td>T</td>
            <td>U</td>
          </tr>
          <tr>
            <td>A</td>
            <td>L</td>
            <td>L</td>
            <td>Y</td>
            <td>K</td>
            <td>I</td>
            <td>L</td>
            <td>L</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="break-words text-[10px] leading-[12px]">Undomiel</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♝</td>
            <td></td>
            <td>♚</td>
            <td>♛</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="break-words text-[9px] leading-[12px]">
              Angel's Herald
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>♟</td>
            <td></td>
            <td></td>
            <td>♜</td>
            <td></td>
            <td className="break-words text-[9px] leading-[12px]">
              Yotian Soldier
            </td>
            <td>♞</td>
          </tr>
          <tr>
            <td>♟</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>♔</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/8/8/8/3b1kq1/8/4r2n/p7/K7">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>
        You control a Forest, an Island, a Plains, three Wastes, and{' '}
        <a href="https://scryfall.com/card/ths/153/bow-of-nylea">
          Bow of Nylea
        </a>
        .
      </li>
      <li>
        Your hand contains{' '}
        <a href="https://scryfall.com/card/ltr/194/arwen-und%C3%B3miel">
          Arwen Undomiel
        </a>
        ,{' '}
        <a href="https://scryfall.com/card/ala/2/angels-herald">
          Angel's Herald
        </a>
        , and{' '}
        <a href="https://scryfall.com/card/bbd/249/yotian-soldier">
          Yotian Soldier
        </a>
        .
      </li>
      <li>
        Mate in 1. Like in all puzzles here, the solution is unique except for
        unimportant details (which here means the order you cast your creatures,
        and whether you cast them before or after combat). We won't ask about
        your combat phase, of course, since you're forced to play 1. Kb2.
        Instead we'll ask, where do you have Arwen Undomiel enter the
        battlefield?
      </li>
    </ul>
    <p>
      <b>Solution:</b> This puzzle tutorializes subtypes. We know that queens
      are Nobles and Horses move like knights. From the given subtypes, we can
      guess that Clerics are bishops and Soldiers are pawns.
    </p>
    <p>
      After the forced 1. Kb2, we summon our three creatures to the squares
      pictured above. This may be difficult to find, since it's a double check
      that's impossible in normal chess.
    </p>
    <p>
      What's with Bow of Nylea? Its activated ability is useless, but its{' '}
      passive ability lets even our meek Yotian Soldier capture the opponent's
      king (regardless of king stats). It would be awkward if we tried to
      capture the king but our piece failed to deal enough damage to kill it.
      We'll be seeing Nylea's Bow a lot this puzzle.
    </p>
    <p>(Computer-checked that this is the only solution.)</p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>W</td>
            <td>H</td>
            <td>E</td>
            <td>R</td>
            <td>E</td>
            <td>W</td>
            <td>E</td>
            <td>R</td>
          </tr>
          <tr>
            <td>E</td>
            <td>G</td>
            <td>O</td>
            <td>I</td>
            <td>N</td>
            <td>G</td>
            <td>W</td>
            <td>E</td>
          </tr>
          <tr>
            <td>D</td>
            <td>O</td>
            <td>N</td>
            <td>T</td>
            <td>N</td>
            <td>E</td>
            <td>E</td>
            <td>D</td>
          </tr>
          <tr>
            <td>"</td>
            <td>S</td>
            <td>T</td>
            <td>I</td>
            <td>P</td>
            <td className="bg-yellow-300">U</td>
            <td>L</td>
            <td>A</td>
          </tr>
          <tr>
            <td>T</td>
            <td>I</td>
            <td>O</td>
            <td>N</td>
            <td>S</td>
            <td>"</td>
            <td>B</td>
            <td>U</td>
          </tr>
          <tr>
            <td>T</td>
            <td>T</td>
            <td>H</td>
            <td>I</td>
            <td>S</td>
            <td>I</td>
            <td>S</td>
            <td>E</td>
          </tr>
          <tr>
            <td>X</td>
            <td>P</td>
            <td>L</td>
            <td>O</td>
            <td>R</td>
            <td>E</td>
            <td>D</td>
            <td>T</td>
          </tr>
          <tr>
            <td>E</td>
            <td>R</td>
            <td>R</td>
            <td>I</td>
            <td>T</td>
            <td>O</td>
            <td>R</td>
            <td>Y</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♖</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td>♔</td>
            <td></td>
            <td></td>
            <td></td>
            <td>♗</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♝</td>
            <td>♜</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♚</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/3R4/8/8/1K3B2/3br3/3k4/8/8">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>You control 10 Wastes.</li>
      <li>
        Your hand contains two copies of{' '}
        <a href="https://scryfall.com/card/som/176/mindslaver">Mindslaver</a>.
      </li>
      <li>Mate in 3. Where is the final move to?</li>
    </ul>
    <p>
      <b>Solution:</b> The Mindslavers make this equivalent to a helpmate. The
      solution is 1. Bd7 Re2 2. Kb4 Be3 3. Bf5#.
    </p>
    <p>(Computer-checked that this is the only solution.)</p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>F</td>
            <td>Y</td>
            <td>I</td>
            <td>,</td>
            <td>I</td>
            <td>N</td>
            <td>T</td>
            <td>H</td>
          </tr>
          <tr>
            <td>E</td>
            <td>C</td>
            <td>O</td>
            <td>M</td>
            <td>B</td>
            <td>A</td>
            <td>T</td>
            <td>P</td>
          </tr>
          <tr>
            <td>H</td>
            <td>A</td>
            <td>S</td>
            <td>E</td>
            <td>Y</td>
            <td>O</td>
            <td>U</td>
            <td>A</td>
          </tr>
          <tr>
            <td>T</td>
            <td>T</td>
            <td>A</td>
            <td>C</td>
            <td>K</td>
            <td>W</td>
            <td>I</td>
            <td>T</td>
          </tr>
          <tr>
            <td>H</td>
            <td>A</td>
            <td>C</td>
            <td>R</td>
            <td>E</td>
            <td>A</td>
            <td>T</td>
            <td>U</td>
          </tr>
          <tr>
            <td>R</td>
            <td>E</td>
            <td className="bg-yellow-300">P</td>
            <td>I</td>
            <td>E</td>
            <td>C</td>
            <td>E</td>
            <td>.</td>
          </tr>
          <tr>
            <td>T</td>
            <td>O</td>
            <td>A</td>
            <td>T</td>
            <td>T</td>
            <td>A</td>
            <td>C</td>
            <td>K</td>
          </tr>
          <tr>
            <td>I</td>
            <td>S</td>
            <td>T</td>
            <td>O</td>
            <td>M</td>
            <td>O</td>
            <td>V</td>
            <td>E</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td>♚</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td>♙</td>
            <td></td>
            <td>♟</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>♛</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>♔</td>
            <td></td>
            <td>♗</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/k7/8/1P1p4/8/8/8/2q5/2K1B3">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>
        Your bishop on e1 is enchanted by{' '}
        <a href="https://scryfall.com/card/shm/84/bloodshed-fever">
          Bloodshed Fever
        </a>
        .
      </li>
      <li>
        The opponent's king is enchanted by{' '}
        <a href="https://scryfall.com/card/ima/22/guard-duty">Guard Duty</a>.
      </li>
      <li>Mate in 5. Where do you move during the second combat phase?</li>
    </ul>
    <p>
      <b>Solution:</b> This puzzle introduces the meaning of "attack." The
      extraction text spells it out: to "attack" is to move. So the Guard Duty
      aura means that the black king can't move at all, and our bishop must move
      each combat "if able."
    </p>
    <p>
      We are forced to play 1. Kxc2, which confirms that, like in normal MtG,
      "attacks each combat if able" is different from "attacks each combat even
      if unable." This leads to the solution. We have no chance of checkmating
      with this bishop, since it's on the wrong color squares. So the only way
      to win is to move another piece by making the bishop unable to move.
    </p>
    <p>
      The solution is 1. Kxc2 d5 2. Bc3 d4 3. Ba1 d3+ 4. Kb2 d2 5. b7#. (This is
      checkmate because the opponent's king cannot move, due to the Guard Duty
      enchanting it.) The reason we can play 4. Kb2 is because our bishop can't
      move as our king is in check. The reason we can play 5. b7# is because our
      bishop can't move as our king on b2 blocks it in on a1.
    </p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>I</td>
            <td>F</td>
            <td>M</td>
            <td>Y</td>
            <td>1</td>
            <td>/</td>
            <td>2</td>
            <td>G</td>
          </tr>
          <tr>
            <td>E</td>
            <td>T</td>
            <td>S</td>
            <td>B</td>
            <td>L</td>
            <td>O</td>
            <td>C</td>
            <td>K</td>
          </tr>
          <tr>
            <td>E</td>
            <td>D</td>
            <td>B</td>
            <td className="bg-yellow-300">Y</td>
            <td>A</td>
            <td>N</td>
            <td>O</td>
            <td>T</td>
          </tr>
          <tr>
            <td>H</td>
            <td>E</td>
            <td>R</td>
            <td>1</td>
            <td>/</td>
            <td>2</td>
            <td>W</td>
            <td>H</td>
          </tr>
          <tr>
            <td>A</td>
            <td>T</td>
            <td>H</td>
            <td>A</td>
            <td>P</td>
            <td>P</td>
            <td>E</td>
            <td>N</td>
          </tr>
          <tr>
            <td>S</td>
            <td>?</td>
            <td>A</td>
            <td>L</td>
            <td>A</td>
            <td>S</td>
            <td>I</td>
            <td>T</td>
          </tr>
          <tr>
            <td>I</td>
            <td>S</td>
            <td>B</td>
            <td>E</td>
            <td>Y</td>
            <td>O</td>
            <td>N</td>
            <td>D</td>
          </tr>
          <tr>
            <td>O</td>
            <td>U</td>
            <td>R</td>
            <td>S</td>
            <td>C</td>
            <td>O</td>
            <td>P</td>
            <td>E</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-sm">
        <tbody>
          <tr>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td className="text-2xl">♚</td>
            <td></td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td>Wall</td>
            <td className="text-2xl">♘</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
          </tr>
          <tr>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td>Wall</td>
            <td className="text-2xl">♔</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/pppppppp/k1pppppp/pppppppp/pppppppp/pppppppp/pppppppp/pNpppppp/pppppppK">
        Analysis board
      </a>{' '}
      || <b>IMPORTANT:</b> This lichess link replaces nonstandard pieces with
      black pawns.
    </p>
    <ul>
      <li>
        Your opponent controls a copy of{' '}
        <a href="https://scryfall.com/card/10e/309/wall-of-wood">
          Wall of Wood
        </a>{' '}
        on every square except h1, b2, a7, and b7.
      </li>
      <li>Mate in 7. Where do you move during the final combat phase?</li>
    </ul>
    <p>
      <b>Solution:</b> The Walls block the enemy king, but our knight and king
      can gobble them up. In order to checkmate such a king, we need to make it
      move from a square to a same-color square, and then use our knight to
      attack both those squares. The solution, in which all of Black's moves are
      forced, is
    </p>
    <p>
      1. Nxc4 Kb7 2. Nxd6+ Ka7 3. Nxc8+ Kb7 4. Nd6+ Ka7 5. Nxb5+ Kb7 6. K(any)
      Kc8 7. Nd6#.
    </p>
    <p>(Computed-checked that this is the only solution.)</p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>H</td>
            <td>O</td>
            <td>W</td>
            <td>E</td>
            <td>V</td>
            <td>E</td>
            <td>R</td>
            <td className="bg-yellow-300">J</td>
          </tr>
          <tr>
            <td>U</td>
            <td>S</td>
            <td>T</td>
            <td>F</td>
            <td>O</td>
            <td>R</td>
            <td>Y</td>
            <td>O</td>
          </tr>
          <tr>
            <td>U</td>
            <td>,</td>
            <td>H</td>
            <td>E</td>
            <td>A</td>
            <td>D</td>
            <td>C</td>
            <td>A</td>
          </tr>
          <tr>
            <td>N</td>
            <td>O</td>
            <td>N</td>
            <td>:</td>
            <td>T</td>
            <td>H</td>
            <td>E</td>
            <td>1</td>
          </tr>
          <tr>
            <td>/</td>
            <td>2</td>
            <td>R</td>
            <td>E</td>
            <td>T</td>
            <td>U</td>
            <td>R</td>
            <td>N</td>
          </tr>
          <tr>
            <td>S</td>
            <td>B</td>
            <td>A</td>
            <td>C</td>
            <td>K</td>
            <td>T</td>
            <td>O</td>
            <td>I</td>
          </tr>
          <tr>
            <td>T</td>
            <td>S</td>
            <td>S</td>
            <td>T</td>
            <td>A</td>
            <td>R</td>
            <td>T</td>
            <td>I</td>
          </tr>
          <tr>
            <td>N</td>
            <td>G</td>
            <td>S</td>
            <td>Q</td>
            <td>U</td>
            <td>A</td>
            <td>R</td>
            <td>E</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>♛</td>
            <td>♚</td>
            <td>♝</td>
            <td></td>
            <td>♜</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♟</td>
            <td>♟</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♟</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♔</td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className="text-[9px] leading-[12px]">Rage Nimbus</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>♘</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/3qkb1r/4pp2/7p/7K/8/8/8/N7">
        Analysis board
      </a>{' '}
      || <b>IMPORTANT:</b> This lichess link does not include nonstandard
      pieces.
    </p>
    <ul>
      <li>
        You control{' '}
        <a href="https://scryfall.com/card/roe/160/rage-nimbus">Rage Nimbus</a>{' '}
        on c2, as well as four Mountains.
      </li>
      <li>
        Mate in 5. Where must Black move during their fourth combat phase?
      </li>
    </ul>
    <p>
      <b>Solution:</b> We use Rage Nimbus to force every one of Black's moves.
      Though Rage Nimbus only forces which piece moves, it's always the case
      that the chosen piece(s) ha(s/ve) only one legal move. Start 1. Nb3 Bg7 2.
      Nd4. Now activate Rage Nimbus twice, targeting the king and rook, to force
      2… O-O. Continue 3. Nf5 f6 4. Kg6 Bh8 and Black is sealed in for 5. Nxh6#.
    </p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>Y</td>
            <td>E</td>
            <td>S</td>
            <td>W</td>
            <td>A</td>
            <td>R</td>
            <td>H</td>
            <td>O</td>
          </tr>
          <tr>
            <td>R</td>
            <td>S</td>
            <td>E</td>
            <td>S</td>
            <td>P</td>
            <td>L</td>
            <td>U</td>
            <td>R</td>
          </tr>
          <tr>
            <td>A</td>
            <td>L</td>
            <td>Y</td>
            <td>O</td>
            <td>U</td>
            <td>W</td>
            <td>I</td>
            <td>L</td>
          </tr>
          <tr>
            <td>L</td>
            <td>G</td>
            <td>E</td>
            <td>T</td>
            <td>T</td>
            <td>W</td>
            <td>O</td>
            <td>L</td>
          </tr>
          <tr>
            <td>E</td>
            <td>T</td>
            <td>T</td>
            <td>E</td>
            <td>R</td>
            <td className="bg-yellow-300">S</td>
            <td>O</td>
            <td>R</td>
          </tr>
          <tr>
            <td>P</td>
            <td>O</td>
            <td>S</td>
            <td>S</td>
            <td className="bg-yellow-300">I</td>
            <td>B</td>
            <td>L</td>
            <td>Y</td>
          </tr>
          <tr>
            <td>O</td>
            <td>N</td>
            <td>E</td>
            <td>O</td>
            <td>R</td>
            <td>Y</td>
            <td>O</td>
            <td>U</td>
          </tr>
          <tr>
            <td>K</td>
            <td>N</td>
            <td>O</td>
            <td>W</td>
            <td>Z</td>
            <td>E</td>
            <td>R</td>
            <td>O</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td className="break-words text-[9px] leading-[12px]">Jerren</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>♔</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="break-words text-[10px] leading-[12px]">Warhorse</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="break-words text-[10px] leading-[12px]">Warhorse</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♛</td>
            <td>♛</td>
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
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/8/8/2K5/8/8/8/6qq/8">
        Analysis board
      </a>{' '}
      || <b>IMPORTANT:</b> The lichess link does not include nonstandard pieces.
    </p>
    <ul>
      <li>
        Your opponent's commander is{' '}
        <a href="https://scryfall.com/card/mid/109/jerren-corrupted-bishop-ormendahl-the-corrupter">
          Jerren, Corrupted Bishop
        </a>{' '}
        on c8.
      </li>
      <li>
        Your opponent controls 2 Mountains and their hand contains{' '}
        <a href="https://scryfall.com/card/6ed/178/fit-of-rage">Fit of Rage</a>.
      </li>
      <li>You control 4 Plains and a Mountain.</li>
      <li>
        Your hand contains{' '}
        <a href="https://scryfall.com/card/6ed/178/fit-of-rage">Fit of Rage</a>{' '}
        as well as 2 copies of{' '}
        <a href="https://scryfall.com/card/m12/7/armored-warhorse">
          Armored Warhorse
        </a>
        .
      </li>
      <li>
        Draw. Where do Armored Warhorses enter the battlefield on your first
        turn?
      </li>
    </ul>
    <p>
      <b>Solution:</b> If we didn't learn this earlier, then we confirm here
      that a Cleric is a bishop.
    </p>
    <p>
      And evidently, the goal of the game is to kill our opponent's commander.
      (Tangent: does this mean that the "default commander" is a king? Is that
      king a token or a card? Unfortunately, it doesn't matter to solve this
      puzzle. My headcanon is that the normal chess setup is a special case
      where our commander is allowed to be a king token.)
    </p>
    <p>
      The Fit of Rages help us not worry about power/toughness by ensuring that
      horses/Jerren can capture each other just like in normal chess.
    </p>
    <p>
      The black queens prevent us from quickly checkmating Jerren, and there's
      no hope of stalemate, so the way to draw is perpetual check. Play 1. Kc7!
      and summon knights as shown above. There follows 1... Ja6 Kb6 2. Jc8 Kc7
      3. Ja6 Kb6, repeating forever.
    </p>
    <p>(Computer-checked that White has no mate in 2.)</p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>C</td>
            <td>A</td>
            <td>N</td>
            <td>Y</td>
            <td>O</td>
            <td>U</td>
            <td>I</td>
            <td>M</td>
          </tr>
          <tr>
            <td>A</td>
            <td>G</td>
            <td>I</td>
            <td>N</td>
            <td>E</td>
            <td>I</td>
            <td>F</td>
            <td>T</td>
          </tr>
          <tr>
            <td>H</td>
            <td>I</td>
            <td>S</td>
            <td>E</td>
            <td>X</td>
            <td>T</td>
            <td>R</td>
            <td>A</td>
          </tr>
          <tr>
            <td>C</td>
            <td>T</td>
            <td>E</td>
            <td>D</td>
            <td>T</td>
            <td>O</td>
            <td>"</td>
            <td>N</td>
          </tr>
          <tr>
            <td>O</td>
            <td>W</td>
            <td>W</td>
            <td>R</td>
            <td>I</td>
            <td>T</td>
            <td>E</td>
            <td>O</td>
          </tr>
          <tr>
            <td>N</td>
            <td>E</td>
            <td>F</td>
            <td>O</td>
            <td>R</td>
            <td>U</td>
            <td>S</td>
            <td>"</td>
          </tr>
          <tr>
            <td>I</td>
            <td>T</td>
            <td>I</td>
            <td>S</td>
            <td>A</td>
            <td>P</td>
            <td>O</td>
            <td>S</td>
          </tr>
          <tr>
            <td>S</td>
            <td>I</td>
            <td>B</td>
            <td>I</td>
            <td>L</td>
            <td className="bg-yellow-300">I</td>
            <td className="bg-yellow-300">T</td>
            <td>Y</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>♚</td>
            <td>♟</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♔</td>
            <td></td>
            <td>♖</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/8/8/8/8/8/2kp4/8/4K1R1">
        Analysis board
      </a>{' '}
    </p>
    <ul>
      <li>
        You control{' '}
        <a href="https://scryfall.com/card/rix/165/path-of-mettle-metzali-tower-of-triumph">
          Path of Mettle
        </a>
        ,{' '}
        <a href="https://scryfall.com/card/9ed/44/serras-blessing">
          Serra's Blessing
        </a>
        ,{' '}
        <a href="https://scryfall.com/card/ths/153/bow-of-nylea">
          Bow of Nylea
        </a>
        , as well as an Island, a Plains, and a Wastes.
      </li>
      <li>
        Your hand contains{' '}
        <a href="https://scryfall.com/card/m19/61/mirror-image">Mirror Image</a>{' '}
        and{' '}
        <a href="https://scryfall.com/card/clb/696/irregular-cohort">
          Irregular Cohort
        </a>
        .
      </li>
      <li>Mate in 2. Where do you move during the second combat phase?</li>
    </ul>
    <p>
      <b>Solution:</b> The cards Path of Mettle and Irregular Cohort can't be
      used unless we find a way to attack with two or more creatures. In chess,
      there's only one way to move two pieces at once.
    </p>
    <p>
      First play 1. Rg3 and summon a copy of our rook on h1. No matter what
      Black plays, we reply 2. O-O, transforming Path of Mettle. Now we have
      enough mana to summon Irregular Cohort.
    </p>
    <p>
      Recall that subtype determines how a piece moves. As a Changeling,
      Irregular Cohort and its token can move like every chess piece. It's
      trivial to arrange a checkmate this way.
    </p>
    <p>
      (Computer-checked that there's no mate without flipping Path of Mettle.)
    </p>
    <hr className="my-6" />
    <div className="prefer-2-col">
      <table className="my-2 chess">
        <tbody>
          <tr>
            <td>C</td>
            <td>R</td>
            <td>E</td>
            <td>A</td>
            <td>T</td>
            <td>U</td>
            <td>R</td>
            <td>E</td>
          </tr>
          <tr>
            <td>T</td>
            <td>Y</td>
            <td>P</td>
            <td>E</td>
            <td>S</td>
            <td>O</td>
            <td>T</td>
            <td>H</td>
          </tr>
          <tr>
            <td>E</td>
            <td>R</td>
            <td>T</td>
            <td>H</td>
            <td>A</td>
            <td>N</td>
            <td>N</td>
            <td>O</td>
          </tr>
          <tr>
            <td>B</td>
            <td>L</td>
            <td>E</td>
            <td>H</td>
            <td>O</td>
            <td>R</td>
            <td>S</td>
            <td>E</td>
          </tr>
          <tr>
            <td>S</td>
            <td>O</td>
            <td className="bg-yellow-300">L</td>
            <td>D</td>
            <td>I</td>
            <td>E</td>
            <td>R</td>
            <td>E</td>
          </tr>
          <tr>
            <td>T</td>
            <td>C</td>
            <td>D</td>
            <td>O</td>
            <td>N</td>
            <td>T</td>
            <td>G</td>
            <td>R</td>
          </tr>
          <tr>
            <td>A</td>
            <td>N</td>
            <td>T</td>
            <td>A</td>
            <td>N</td>
            <td>Y</td>
            <td>C</td>
            <td>H</td>
          </tr>
          <tr>
            <td>E</td>
            <td>S</td>
            <td>S</td>
            <td>M</td>
            <td>O</td>
            <td>V</td>
            <td>E</td>
            <td>S</td>
          </tr>
        </tbody>
      </table>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♚</td>
            <td></td>
            <td className="text-[8px]">Omnath</td>
            <td className="text-[8px] leading-[12px]">Arctic Nishoba</td>
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
          </tr>
          <tr>
            <td></td>
            <td>♜</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>♛</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>♘</td>
            <td>♞</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
          </tr>
          <tr>
            <td></td>
            <td>♔</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <a href="https://lichess.org/editor/4k3/8/8/1r6/1q6/Nn6/PPPPPPPP/1K6">
        Analysis board
      </a>
      <b> || IMPORTANT:</b> The lichess link does not include nonstandard
      pieces.
    </p>
    <ul>
      <li>
        Black Lotus and{' '}
        <a href="https://scryfall.com/card/cn2/121/show-and-tell">
          Show and Tell
        </a>{' '}
        are in your graveyard.
      </li>
      <li>
        You control{' '}
        <a href="https://scryfall.com/card/clb/739/black-market">
          Black Market
        </a>
        .
      </li>
      <li>
        Black controls{' '}
        <a href="https://scryfall.com/card/cc1/2/omnath-locus-of-mana">
          Omnath, Locus of Mana
        </a>{' '}
        on g8;{' '}
        <a href="https://scryfall.com/card/csp/102/arctic-nishoba">
          Arctic Nishoba
        </a>{' '}
        on h8; and a Forest.
      </li>
      <li>
        All mentioned cards started in players' hands, and no other cards were
        used.
      </li>
      <li>Black Market has 0 counters and Arctic Nishoba has 9.</li>
      <li>Draw. Where do you move during this combat step?</li>
    </ul>
    <p>
      <b>Solution:</b> This is a silly retroanalysis puzzle.
    </p>
    <p>
      Since the only land is Forest, the only way these permanents can be in
      play is Black Lotus -&gt; Show and Tell. When Show and Tell resolved, we
      dropped Black Market and Black dropped Omnath. Let's say this happened on
      White's turn number T.
    </p>
    <p>
      For Black to have summoned Arctic Nishoba and paid 9 upkeep costs, they
      must have produced 6+1+2+3+...+9=51 mana, one at a time, from their
      Forest. At the fastest, Black made this mana on turns T (White), T
      (Black), T+1 (Black), ..., T+49 (Black). During these turns, no creatures
      died, since Black Market has no counters.
    </p>
    <p>
      No pawns were pushed during these turns either, since all living pawns are
      in the starting positions, and the wall of white pawns blocks any
      promotions. So we play 1. Nc4! and claim a draw due to the 50-move rule.
    </p>
    <h2>Extraction</h2>
    <table className="my-2 chess">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">J</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">O</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">Y</td>
          <td className="bg-yellow-300">F</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">U</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">L</td>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">S</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">P</td>
          <td></td>
          <td className="bg-yellow-300">I</td>
          <td></td>
          <td></td>
          <td></td>
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
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-yellow-300">R</td>
          <td></td>
          <td className="bg-yellow-300">I</td>
          <td className="bg-yellow-300">T</td>
          <td className="bg-yellow-300">S</td>
        </tr>
      </tbody>
    </table>
    <p>
      Finally, we copy the correct answer square(s) from each puzzle down into
      this chessboard. In reading order, the letters spell the answer to the
      puzzle: <Answerize>JOYFUL SPIRITS</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        I tried to write subpuzzles involving evasion keywords like Menace and
        Flying, and combat-matters cards like those that give +X/+X. However, my
        construction attempts all led to super cursed rules questions, and the
        puzzle was already too hard. It was too hard to force, but I also wanted
        a puzzle where you avoid getting en passanted by casting Time Walk and
        playing 1. e3 2. e4.
      </p>
      <p>
        Here are two puzzles that didn't make it. The first one is neat but
        tricky; the second one is way too difficult.
      </p>
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td>♚</td>
            <td></td>
            <td>♔</td>
            <td></td>
            <td></td>
            <td></td>
            <td>♝</td>
            <td></td>
          </tr>
          <tr>
            <td>♟</td>
            <td></td>
            <td></td>
            <td></td>
            <td>♙</td>
            <td>♕</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>♙</td>
            <td></td>
            <td></td>
            <td></td>
            <td>♙</td>
            <td>♙</td>
            <td></td>
            <td>♛</td>
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
          </tr>
          <tr>
            <td>♞</td>
            <td></td>
            <td>♞</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♜</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href="https://lichess.org/editor/k1K3b1/p3PQ2/P3PP1q/8/8/8/n1n5/5r2">
          Analysis board
        </a>{' '}
      </p>
      <p>
        Your queen on f7 is enchanted by{' '}
        <a href="https://scryfall.com/card/shm/84/bloodshed-fever">
          Bloodshed Fever
        </a>
        .
      </p>
      <ul>
        <li>
          You control a Mountain, and your hand contains another Bloodshed
          Fever.
        </li>
        <li>Mate in 2. Where do you move during the first combat phase?</li>
      </ul>
      <hr className="my-6" />
      <table className="my-2 chess text-2xl">
        <tbody>
          <tr>
            <td>♜</td>
            <td></td>
            <td>♝</td>
            <td>♛</td>
            <td>♚</td>
            <td>♝</td>
            <td>♞</td>
            <td>♜</td>
          </tr>
          <tr>
            <td>♟</td>
            <td></td>
            <td>♟</td>
            <td>♟</td>
            <td>♟</td>
            <td>♟</td>
            <td>♟</td>
            <td>♟</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>♟</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-[8px] leading-[12px]">Bazaar Trader</td>
            <td className="break-words text-[8px] leading-[12px]">
              Teyo's L-shield
            </td>
            <td></td>
            <td></td>
            <td></td>
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
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>♙</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
            <td></td>
            <td>♙</td>
            <td>♙</td>
            <td>♙</td>
          </tr>
          <tr>
            <td>♖</td>
            <td>♘</td>
            <td>♗</td>
            <td>♕</td>
            <td>♔</td>
            <td></td>
            <td>♘</td>
            <td>♖</td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href="https://lichess.org/editor/r1bqkbnr/p1pppppp/2p5/8/8/4P3/PPPP1PPP/RNBQK1NR_w_KQkq_-_0_1?color=white">
          Analysis Board
        </a>{' '}
        || Like usual, the lichess link doesn't reflect nonstandard pieces.
      </p>
      <ul>
        <li>This is the position after Black's 3rd turn ends.</li>
        <li>
          <a href="https://scryfall.com/card/wwk/72/bazaar-trader">
            Bazaar Trader
          </a>{' '}
          is on d5, tapped, and{' '}
          <a href="https://scryfall.com/card/war/33/teyos-lightshield">
            Teyo's Lightshield
          </a>{' '}
          is on e5.
        </li>
        <li>
          <a href="https://scryfall.com/card/akh/113/trial-of-ambition">
            Trial of Ambition
          </a>{' '}
          is also on the battlefield.
        </li>
        <li>
          <a href="https://scryfall.com/card/grn/51/quasiduplicate">
            Quasiduplicate
          </a>{' '}
          is in Black's graveyard.
        </li>
        <li>
          The battlefield has six tapped lands:{' '}
          <a href="https://scryfall.com/card/cmr/478/boros-guildgate">
            Boros Guildgate
          </a>
          , Swamp, 2 Islands, and 2 Wastes.
        </li>
        <li>
          All mentioned cards started in players' hands, and no other cards were
          used.
        </li>
        <li>There are no counters on any permanents.</li>
        <li>The initial chess setup was the usual one.</li>
      </ul>
      <p>
        Where was White's 3rd move to? Also, where does Quasiduplicate's token
        stand?
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>
        <a href="https://en.m.wikipedia.org/wiki/File:Chess_piece_-_White_queen.jpg">
          "White Queen" photo
        </a>{' '}
        from Michael Maggs under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/2.5/">
          CC BY-SA 2.5
        </a>
        .
      </p>
    </Attributions>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
