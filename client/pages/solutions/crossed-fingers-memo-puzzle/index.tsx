import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

import flagDE from 'assets/puzzles/crossed-fingers-memo-puzzle/flag-us-de.png';
import flagNM from 'assets/puzzles/crossed-fingers-memo-puzzle/flag-us-nm.png';
import flagTN from 'assets/puzzles/crossed-fingers-memo-puzzle/flag-us-tn.png';
import fill from 'assets/solutions/crossed-fingers-memo-puzzle/696-fill.png';

const SLUG = 'crossed-fingers-memo-puzzle';
const ANSWER = `ETHICAL`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a title comprised of emoji that say "CROSS" "WORD"
      "PUZZLE," and indeed we see a crossword grid and a grid filled with emoji.
      The second page has two grids of what appear to be crossword clues
      comprised solely of emoji, labeled "
      <InlineTwemoji copyImage={true} emoji="➡️" />{' '}
      <InlineTwemoji copyImage={true} emoji="🔎" />" ("Across Clues") and "
      <InlineTwemoji copyImage={true} emoji="⬇️" />{' '}
      <InlineTwemoji copyImage={true} emoji="🔎" />" ("Down Clues"). We can
      infer that this is a crossword puzzle with both clues and answers
      comprised of emoji.
    </p>
    <p>
      Exploring further, we see that the grid of emoji is titled "
      <InlineTwemoji copyImage={true} emoji="😀" />
      <InlineTwemoji copyImage={true} emoji="🏦" />" ("Emoji Bank") and contains
      42 emoji, however, we have 49 squares in the crossword puzzle grid. We can
      start to work on the assumption that the reason will become clear. We will
      need to combine these emoji to form answers to the clues given. (We may
      look at the order of emoji to try to discern a translation, but we find
      that they are simply arranged in numerical order by unicode number. This
      may clue us that the emoji are not always used for the same word in both
      across and down answers.)
    </p>
    <p>
      The rest of the puzzle is pretty straightforward: we translate the clues
      and use the given emoji to answer them. Translations of the clues are:
    </p>
    <div className="table-container">
      <table className="answer-table">
        <tbody>
          <tr>
            <th></th>
            <th>Emoji Clue</th>
            <th>Translated Clue</th>
            <th>Answer</th>
          </tr>
          <tr>
            <td className="clue">
              1 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="👩🏽‍⚕️" />
              <InlineTwemoji copyImage={true} emoji="👀" />
              <InlineTwemoji copyImage={true} emoji="🤒" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="🛌" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="🍩" />
              <InlineTwemoji copyImage={true} emoji="🖥️" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="🩻" />
            </td>{' '}
            <td>
              Doctor examines sick patient by putting bed through torus-shaped
              computer, yielding an X-ray
            </td>
            <td>
              <Monospace>CAT SCAN</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              4 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🎥" />
              <InlineTwemoji copyImage={true} emoji="🏦" />
              <InlineTwemoji copyImage={true} emoji="👨🏻" />
              <InlineTwemoji copyImage={true} emoji="🔫" />
              <InlineTwemoji copyImage={true} emoji="💰" />
              <InlineTwemoji copyImage={true} emoji="🗑️" />
              <InlineTwemoji copyImage={true} emoji="🔥" />
              <InlineTwemoji copyImage={true} emoji="🚨" />
              <InlineTwemoji copyImage={true} emoji="🚓" />
              <InlineTwemoji copyImage={true} emoji="🚧" />
              <InlineTwemoji copyImage={true} emoji="⌛" />
            </td>
            <td>
              Film in which a bank is held up by a gunman who takes the money,
              but a wastebasket fire alerts police, who barricade it for a
              lengthy standoff
            </td>
            <td>
              <Monospace>DOG DAY AFTERNOON</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              7 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🎥" />
              <InlineTwemoji copyImage={true} emoji="🛸" />
              <InlineTwemoji copyImage={true} emoji="🌎" />
              <InlineTwemoji copyImage={true} emoji="👦" />
              <InlineTwemoji copyImage={true} emoji="🚲" />
              <InlineTwemoji copyImage={true} emoji="👽" />
              <InlineTwemoji copyImage={true} emoji="💬" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
            <td>
              Film in which a UFO lands on earth; a kid on a bicycle meets an
              alien who says ___</td>
            <td>
              <Monospace>E.T. PHONE HOME</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              9 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="👨" />
              <InlineTwemoji copyImage={true} emoji="👀" />
              <InlineTwemoji copyImage={true} emoji="👩" />
              <InlineTwemoji copyImage={true} emoji="⏩" />
              <InlineTwemoji copyImage={true} emoji="🤏" />
              <InlineTwemoji copyImage={true} emoji="⏳" />
              <InlineTwemoji copyImage={true} emoji="⏩" />
              <InlineTwemoji copyImage={true} emoji="👰" />
              <InlineTwemoji copyImage={true} emoji="💍" />
              <InlineTwemoji copyImage={true} emoji="🤵" />
            </td>
            <td>
              Boy meets girl and quickly – in a small amount of time – they get
              married.
            </td>
            <td>
              <Monospace>WHIRLWIND ROMANCE</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              10 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="👨‍❤️‍👨" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="🤦‍♂️" />
              <InlineTwemoji copyImage={true} emoji="🔇" />
              <InlineTwemoji copyImage={true} emoji="🤦‍♂️" />
            </td>
            <td>Loving couple becomes two people not speaking to each other</td>
            <td>
              <Monospace>BROKEN UP/ BREAK UP</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              11 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🎒" />
            </td>
            <td>A backpack</td>
            <td>
              <Monospace>BOOKBAG</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              12 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="💻" />
              <InlineTwemoji copyImage={true} emoji="🏷️" />
            </td>
            <td>Laptop brand/label</td>
            <td>
              <Monospace>HP (Hewlett Packard)</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              14 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🐟" />
              <InlineTwemoji copyImage={true} emoji="🦀" />
              <InlineTwemoji copyImage={true} emoji="🔗" />
            </td>
            <td>Seafood chain</td>
            <td>
              <Monospace>RED LOBSTER</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              16 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🎓" />
              <span>
                <img
                  draggable={false}
                  className="emoji inline-block"
                  src={flagDE}
                />
              </span>
              <InlineTwemoji copyImage={true} emoji="🏈" />
              <InlineTwemoji copyImage={true} emoji="⛹️" />
            </td>
            <td>University of Delaware football player</td>
            <td>
              <Monospace>FIGHTIN' BLUE HEN</Monospace>
            </td>
          </tr>
          <tr>
            <td rowSpan={3} className="clue">
              18 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🛥️" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="⛽" />
            </td>
            <td rowSpan={3} className="border-l-[1px] border-black">
              Yacht:gasoline :: Sailboat:wind :: ___:feet
            </td>
            <td rowSpan={3}>
              <Monospace>PADDLEBOAT</Monospace>
            </td>
          </tr>
          <tr className="merged">
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="⛵" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="🍃" />
            </td>
          </tr>
          <tr className="merged">
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="❓" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="🦶" />
            </td>
          </tr>
          <tr>
            <td className="clue">
              19 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🙍" />
              <InlineTwemoji copyImage={true} emoji="👀" />
              <InlineTwemoji copyImage={true} emoji="‼️" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="👨🏽‍⚖️" />
              <InlineTwemoji copyImage={true} emoji="🙍" />
              <InlineTwemoji copyImage={true} emoji="💬" />
              <InlineTwemoji copyImage={true} emoji="‼️" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
            <td>
              Someone sees something important and goes to court. That person's
              description of the incident is ___</td>
            <td>
              <Monospace>EYEWITNESS TESTIMONY</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              21 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🧑🏿‍🎤" />
              <InlineTwemoji copyImage={true} emoji="💬" />
              <InlineTwemoji copyImage={true} emoji="🤬" />
              <InlineTwemoji copyImage={true} emoji="🫵" />
            </td>
            <td>Singer who sang "F*** You"</td>
            <td>
              <Monospace>CEELO GREEN</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              23 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="📿" />
              <InlineTwemoji copyImage={true} emoji="🧰" />
              <InlineTwemoji copyImage={true} emoji="📂" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="🩰" />
              <InlineTwemoji copyImage={true} emoji="💃" />
              <InlineTwemoji copyImage={true} emoji="🎼" />
            </td>
            <td>
              Jewelry box that opens to reveal ballet dancer who spins around to
              music
            </td>
            <td>
              <Monospace>MUSIC BOX</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              24 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="👨‍👩‍👧‍👧" />
              <InlineTwemoji copyImage={true} emoji="👨‍👩‍👧‍👧" />
              <InlineTwemoji copyImage={true} emoji="🙏" />
              <InlineTwemoji copyImage={true} emoji="🎁" />
              <InlineTwemoji copyImage={true} emoji="🏅" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="🦸" />
            </td>
            <td>People's thank-you gift/award to a hero</td>
            <td>
              <Monospace>KEY TO THE CITY</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              25 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🛠️" />
              <InlineTwemoji copyImage={true} emoji="🧍🏼" />
              <InlineTwemoji copyImage={true} emoji="📸" />
              <InlineTwemoji copyImage={true} emoji="🪞" />
            </td>
            <td>Tool for a person to take a picture of themselves</td>
            <td>
              <Monospace>SELFIE STICK</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              27 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🚽" />
              <InlineTwemoji copyImage={true} emoji="🛟" />
            </td>
            <td>Toilet flotation device</td>
            <td>
              <Monospace>BALLCOCK</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              29 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🤏" />
              <InlineTwemoji copyImage={true} emoji="✍️" />
              <span>
                <img
                  draggable={false}
                  className="emoji inline-block"
                  src={flagTN}
                />
              </span>
              <InlineTwemoji copyImage={true} emoji="📉" />
              <InlineTwemoji copyImage={true} emoji="📈" />
              <InlineTwemoji copyImage={true} emoji="🛂" />
            </td>
            <td>A short way to write Tennessee Valley Authority</td>
            <td>
              <Monospace>TVA</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              30 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🎩" />
              <InlineTwemoji copyImage={true} emoji="🧐" />
              <InlineTwemoji copyImage={true} emoji="🤵🏿" />
              <InlineTwemoji copyImage={true} emoji="👸" />
              <InlineTwemoji copyImage={true} emoji="👠" />
              <InlineTwemoji copyImage={true} emoji="💄" />
              <InlineTwemoji copyImage={true} emoji="🪭" />
            </td>
            <td>Fancy; well-dressed; upscale</td>
            <td>
              <Monospace>ELEGANT</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              31 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="🐕" />
              <InlineTwemoji copyImage={true} emoji="🤔" />
              <InlineTwemoji copyImage={true} emoji="💭" />
              <InlineTwemoji copyImage={true} emoji="⚠️" />
              <InlineTwemoji copyImage={true} emoji="😡" />
            </td>
            <td>Dog that people think is dangerous</td>
            <td>
              <Monospace>PIT BULL TERRIER</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              32 <InlineTwemoji copyImage={true} emoji="➡️" />
            </td>
            <td className="text-center">
              <InlineTwemoji copyImage={true} emoji="💂" />
              <InlineTwemoji copyImage={true} emoji="🔫" />
              <InlineTwemoji copyImage={true} emoji="💯" />
              <InlineTwemoji copyImage={true} emoji="🎯" />
            </td>
            <td>Soldier who is a perfect marksman</td>
            <td>
              <Monospace>SHARPSHOOTER</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              1 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="😡" />
              <InlineTwemoji copyImage={true} emoji="😆" />
              <InlineTwemoji copyImage={true} emoji="😠" />
              <InlineTwemoji copyImage={true} emoji="📣" />
              <InlineTwemoji copyImage={true} emoji="🗯️" />
              <InlineTwemoji copyImage={true} emoji="👎" />
              <InlineTwemoji copyImage={true} emoji="👎" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="💃" />
              <InlineTwemoji copyImage={true} emoji="🕺🏾" />
              <InlineTwemoji copyImage={true} emoji="🤹" />
            </td>
            <td>Angry and mocking people yell their dislike at performers</td>
            <td>
              <Monospace>CATCALL</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              2 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🤠" />
              <InlineTwemoji copyImage={true} emoji="💸" />
              <InlineTwemoji copyImage={true} emoji="👯‍♀️" />
              <InlineTwemoji copyImage={true} emoji="🛏" />
              <InlineTwemoji copyImage={true} emoji="📍" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
            <td>
              Where a cowboy might have spent money to go to bed with women.
            </td>
            <td>
              <Monospace>CATHOUSE</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              3 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🚢" />
              <InlineTwemoji copyImage={true} emoji="🧑‍🦲" />
              <InlineTwemoji copyImage={true} emoji="⚓" />
              <InlineTwemoji copyImage={true} emoji="👅" />
              <InlineTwemoji copyImage={true} emoji="🍴" />
              <InlineTwemoji copyImage={true} emoji="❓" />
              <InlineTwemoji copyImage={true} emoji="➡️" />
              <InlineTwemoji copyImage={true} emoji="💪" />
              <InlineTwemoji copyImage={true} emoji="💪" />
            </td>
            <td>
              A sailor eats ___ to become strong
            </td>
            <td>
              <Monospace>CAN OF SPINACH</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              4 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="👦" />
              <InlineTwemoji copyImage={true} emoji="👧" />
              <InlineTwemoji copyImage={true} emoji="❤️‍🔥" />
            </td>
            <td>Children's crushes</td>
            <td>
              <Monospace>PUPPY LOVE</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              5 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🌄" />
            </td>
            <td>Dawn/sunrise</td>
            <td>
              <Monospace>DAYBREAK</Monospace>
            </td>
          </tr>
          <tr>
            <td rowSpan={2} className="clue">
              6 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🎮" />
              <InlineTwemoji copyImage={true} emoji="🧑‍🔧" />
              <InlineTwemoji copyImage={true} emoji="🪠" />
              <InlineTwemoji copyImage={true} emoji="🦘" />
              <InlineTwemoji copyImage={true} emoji="🐢" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="🐚" />
              <InlineTwemoji copyImage={true} emoji="💨" />
            </td>
            <td rowSpan={2} className="border-l-[1px] border-black">
              When a plumber jumps onto a turtle, he gets a zooming shell. When
              the plumber jumps on a green mushroom, he gets ___
            </td>
            <td rowSpan={2}>
              <Monospace>ONE UP</Monospace>
            </td>
          </tr>
          <tr className="merged">
            <td>
              <InlineTwemoji copyImage={true} emoji="🎮" />
              <InlineTwemoji copyImage={true} emoji="🧑‍🔧" />
              <InlineTwemoji copyImage={true} emoji="🪠" />
              <InlineTwemoji copyImage={true} emoji="🦘" />
              <InlineTwemoji copyImage={true} emoji="🟩" />
              <InlineTwemoji copyImage={true} emoji="🍄" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
          </tr>
          <tr>
            <td className="clue">
              7 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🧑🏿‍🏫" />
              <InlineTwemoji copyImage={true} emoji="🔌" />
              <InlineTwemoji copyImage={true} emoji="📱" />
            </td>
            <td>What you read on an electronic device</td>
            <td>
              <Monospace>EBOOK</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              8 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🚰" />
              <InlineTwemoji copyImage={true} emoji="➕" />
              <InlineTwemoji copyImage={true} emoji="❓" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="🍵" />
            </td>
            <td>Adding water to ___ yields hot tea</td>
            <td>
              <Monospace>TEABAG</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              13 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="♀️" />
              <InlineTwemoji copyImage={true} emoji="🦚" />
            </td>
            <td>Female peacock</td>
            <td>
              <Monospace>PEAHEN</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              14 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <span>
                <img
                  draggable={false}
                  className="emoji inline-block"
                  src={flagNM}
                />
              </span>
              <InlineTwemoji copyImage={true} emoji="❓" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
            <td>New Mexico's official state question is what?</td>
            <td>
              <Monospace>RED OR GREEN</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              15 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🚢" />
              <InlineTwemoji copyImage={true} emoji="🪤" />
              <InlineTwemoji copyImage={true} emoji="⬇️" />
              <InlineTwemoji copyImage={true} emoji="🌊" />
              <InlineTwemoji copyImage={true} emoji="⌛" />
              <InlineTwemoji copyImage={true} emoji="⛓️" />
              <InlineTwemoji copyImage={true} emoji="☝️" />
              <InlineTwemoji copyImage={true} emoji="🍣" />
            </td>
            <td>
              A ship that puts traps at the bottom of the ocean, then comes back
              later to pull them up to get seafood
            </td>
            <td>
              <Monospace>LOBSTER BOAT</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              16 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="😠" />
              <InlineTwemoji copyImage={true} emoji="🗯️" />
            </td>
            <td>Angry talk</td>
            <td>
              <Monospace>FIGHTING WORDS</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              17 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🎥" />
              <InlineTwemoji copyImage={true} emoji="⬇️" />
              <InlineTwemoji copyImage={true} emoji="🌊" />
              <InlineTwemoji copyImage={true} emoji="🥼" />
              <InlineTwemoji copyImage={true} emoji="🧪" />
              <InlineTwemoji copyImage={true} emoji="🦈" />
              <InlineTwemoji copyImage={true} emoji="😱" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="⬇️" />
              <InlineTwemoji copyImage={true} emoji="❓" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
            <td>
              Film in which a deep-sea laboratory works with
              genetically-modified sharks, who then terrify the people:
              "Deep ___ ___"
            </td>
            <td>
              <Monospace>BLUE SEA</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              19 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="💸" />
              <InlineTwemoji copyImage={true} emoji="🎵" />
              <InlineTwemoji copyImage={true} emoji="🍎" />
              <InlineTwemoji copyImage={true} emoji="📱" />
            </td>{' '}
            <td>Where you buy music on an Apple device</td>
            <td>
              <Monospace>ITUNES</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              20 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🏛️" />
              <InlineTwemoji copyImage={true} emoji="🙋" />
              <InlineTwemoji copyImage={true} emoji="🪑" />
              <InlineTwemoji copyImage={true} emoji="⏭️" />
              <InlineTwemoji copyImage={true} emoji="👩‍⚖️" />
            </td>
            <td>In court, where someone testifying sits, next to the judge</td>
            <td>
              <Monospace>WITNESS BOX</Monospace>
            </td>
          </tr>
          <tr>
            <td rowSpan={3} className="clue">
              22 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🚫" />
              <InlineTwemoji copyImage={true} emoji="🏘️" />
            </td>
            <td rowSpan={3} className="border-l-[1px] border-black">
              Not a residential neighborhood. Not even a
              mixed-residential-and-commercial neighborhood. A place with only
              tall buildings.
            </td>
            <td rowSpan={3}>
              <Monospace>DOWNTOWN</Monospace>
            </td>
          </tr>
          <tr className="merged">
            <td>
              <InlineTwemoji copyImage={true} emoji="🚫" />
              <InlineTwemoji copyImage={true} emoji="🏡" />
              <InlineTwemoji copyImage={true} emoji="🏪" />
              <InlineTwemoji copyImage={true} emoji="🏫" />
            </td>
          </tr>
          <tr className="merged">
            <td>
              <InlineTwemoji copyImage={true} emoji="✅" />
              <InlineTwemoji copyImage={true} emoji="🏢" />
              <InlineTwemoji copyImage={true} emoji="🏬" />
              <InlineTwemoji copyImage={true} emoji="🏢" />
            </td>
          </tr>
          <tr>
            <td className="clue">
              24 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🎼" />
              <InlineTwemoji copyImage={true} emoji="🅱️" />
              <InlineTwemoji copyImage={true} emoji="♭" />
              <InlineTwemoji copyImage={true} emoji="👂" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
            <td>The key of B flat is harmonically equivalent to ___</td>
            <td>
              <Monospace>KEY OF A SHARP</Monospace>
            </td>
          </tr>
          <tr>
            <td rowSpan={3} className="clue">
              25 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="👄" />
              <InlineTwemoji copyImage={true} emoji="♫" />
            </td>
            <td rowSpan={3} className="border-l-[1px] border-black">
              Something cheap is "a song." Something more expensive is "the
              shirt off your back." Something very expensive is ___
            </td>
            <td rowSpan={3}>
              <Monospace>AN ARM AND A LEG</Monospace>
            </td>
          </tr>
          <tr className="merged">
            <td>
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="👕" />
              <InlineTwemoji copyImage={true} emoji="📴" />
              <InlineTwemoji copyImage={true} emoji="🫵" />
              <InlineTwemoji copyImage={true} emoji="🔙" />
            </td>
          </tr>
          <tr className="merged">
            <td>
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="💲" />
              <InlineTwemoji copyImage={true} emoji="🟰" />
              <InlineTwemoji copyImage={true} emoji="❓" />
            </td>
          </tr>
          <tr>
            <td className="clue">
              26 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🥐" />
            </td>
            <td>A croissant</td>
            <td>
              <Monospace>CROISSANT</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              27 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🎪" />
              <InlineTwemoji copyImage={true} emoji="🧒" />
              <InlineTwemoji copyImage={true} emoji="🏊🏾" />
              <InlineTwemoji copyImage={true} emoji="🟣" />
              <InlineTwemoji copyImage={true} emoji="🦠" />
              <InlineTwemoji copyImage={true} emoji="🔴" />
              <InlineTwemoji copyImage={true} emoji="🔵" />
              <InlineTwemoji copyImage={true} emoji="🦠" />
              <InlineTwemoji copyImage={true} emoji="🟠" />
            </td>
            <td>Fun place where kids can swim in colored balls and germs</td>
            <td>
              <Monospace>BALL PIT</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              28 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="🤥" />
              <InlineTwemoji copyImage={true} emoji="💬" />
            </td>
            <td>What a liar tells you</td>
            <td>
              <Monospace>COCK AND BULL</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              29 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="📰" />
              <InlineTwemoji copyImage={true} emoji="📅" />
              <InlineTwemoji copyImage={true} emoji="🕔" />
              <InlineTwemoji copyImage={true} emoji="👀" />
              <InlineTwemoji copyImage={true} emoji="🎬" />
            </td>
            <td>
              A publication that provided dates and times when you could watch
              shows
            </td>
            <td>
              <Monospace>TV GUIDE</Monospace>
            </td>
          </tr>
          <tr>
            <td className="clue">
              30 <InlineTwemoji copyImage={true} emoji="⬇️" />
            </td>
            <td>
              <InlineTwemoji copyImage={true} emoji="💪" />
              <InlineTwemoji copyImage={true} emoji="⤵️" />
            </td>
            <td>Arm's bend</td>
            <td>
              <Monospace>ELBOW</Monospace>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <p>
      As we fill the grid, we notice that there don't appear to be emoji that
      can fill some spaces, but in such cases, single letters will do the trick.
      Our final fill is:
    </p>
    <SheetableImage src={fill} className="mx-auto" />
    <p>
      Note that the pair of cats in the top left can be interchanged without
      affecting the solve. Reading the non-emoji letters in reading order yields
      the answer <Answerize>ETHICAL</Answerize>.
    </p>

    <style jsx>{`
      .table-container {
        overflow-x: auto;
        max-width: 100%;
      }
      .answer-table th {
        padding: 5px;
        border: 1px solid black;
      }
      .answer-table td:first-child.clue {
        text-align: right;
        padding: 5px 10px 5px 5px;
        border-right: 1px solid black;
        width: 60px;
      }
      .answer-table td:nth-child(2) {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
        padding: 4px 5px 7px 5px;
        border-right: 1px solid black;
      }
      .answer-table td:nth-child(3) {
        padding: 5px;
        border-right: 1px solid black;
      }
      .answer-table td:nth-child(4) {
        padding: 5px;
      }
      .answer-table {
        border: 1px solid black;
        border-collapse: collapse;
        margin: 0 auto;
        min-width: 485px;
      }
      .answer-table tr:not(.merged) {
        border-top: 1px solid black;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
