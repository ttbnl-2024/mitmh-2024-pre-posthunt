import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/queen-marchesa-to-g4/0.png';

const SLUG = 'queen-marchesa-to-g4';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
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
          <SheetableImage
            alt='A Magic: the Gathering card called White Queen. It is a 9/9 Token Creature - Noble with Vigilance and "White Queen has deathtouch and first strike as long as it&apos;s attacking."'
            src={image0}
            title=""
            className="mx-auto"
          />
        </p>
        <p>
          You play White in all puzzles. Players have empty libraries and skip
          their draw steps. As usual in chess problems, assume that castling is
          possible unless provable otherwise, i.e., assume that commanders on
          e1/e8 and Walls on a1/a8/h1/h8 have not yet attacked.
        </p>
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
          </a>
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
                <td>R</td>
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
            <a href="https://scryfall.com/card/ima/22/guard-duty">Guard Duty</a>
            .
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
                <td>O</td>
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
            Mate in 1 (where the turn count "1" ignores extra turns). Where do
            you move during the first combat phase?
          </li>
        </ul>
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
                <td>F</td>
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
                <td></td>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>♜</td>
                <td></td>
                <td></td>
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
            Mate in 1. Like in all puzzles here, the solution is unique except
            for unimportant details (which here means the order you cast your
            creatures, and whether you cast them before or after combat). We
            won't ask about your combat phase, of course, since you're forced to
            play 1. Kb2. Instead we'll ask, where do you have Arwen Undomiel
            enter the battlefield?
          </li>
        </ul>
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
                <td>U</td>
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
            <a href="https://scryfall.com/card/som/176/mindslaver">
              Mindslaver
            </a>
            .
          </li>
          <li>Mate in 3. Where is the final move to?</li>
        </ul>
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
                <td>P</td>
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
            <a href="https://scryfall.com/card/ima/22/guard-duty">Guard Duty</a>
            .
          </li>
          <li>Mate in 5. Where do you move during the second combat phase?</li>
        </ul>
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
                <td>Y</td>
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
          || <b>IMPORTANT:</b> This lichess link replaces nonstandard pieces
          with black pawns.
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
                <td>J</td>
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
            <a href="https://scryfall.com/card/roe/160/rage-nimbus">
              Rage Nimbus
            </a>{' '}
            on c2, as well as four Mountains.
          </li>
          <li>
            Mate in 5. Where must Black move during their fourth combat phase?
          </li>
        </ul>
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
                <td>S</td>
                <td>O</td>
                <td>R</td>
              </tr>
              <tr>
                <td>P</td>
                <td>O</td>
                <td>S</td>
                <td>S</td>
                <td>I</td>
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
                <td className="text-[9px]">Jerren</td>
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
          || <b>IMPORTANT:</b> This lichess link does not include nonstandard
          pieces.
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
            <a href="https://scryfall.com/card/6ed/178/fit-of-rage">
              Fit of Rage
            </a>
            .
          </li>
          <li>You control 4 Plains and a Mountain.</li>
          <li>
            Your hand contains{' '}
            <a href="https://scryfall.com/card/6ed/178/fit-of-rage">
              Fit of Rage
            </a>{' '}
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
                <td>I</td>
                <td>T</td>
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
            <a href="https://scryfall.com/card/m19/61/mirror-image">
              Mirror Image
            </a>{' '}
            and{' '}
            <a href="https://scryfall.com/card/clb/696/irregular-cohort">
              Irregular Cohort
            </a>
            .
          </li>
          <li>Mate in 2. Where do you move during the second combat phase?</li>
        </ul>
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
                <td>L</td>
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
          <b> || IMPORTANT:</b> This lichess link does not include nonstandard
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
            All mentioned cards started in players' hands, and no other cards
            were used.
          </li>
          <li>Black Market has 0 counters and Arctic Nishoba has 9.</li>
          <li>Draw. Where do you move during this combat step?</li>
        </ul>
        <hr className="my-6" />
        <table className="mx-auto chess">
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

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
