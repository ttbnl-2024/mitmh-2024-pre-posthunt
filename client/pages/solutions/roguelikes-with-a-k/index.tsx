import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/roguelikes-with-a-k/0.png';

const SLUG = 'roguelikes-with-a-k';
const ANSWER = `STRONTIUM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>In this puzzle, we get to play 5 roguelikes!</p>
    <h4>Ant Dueler</h4>
    <p>Walkthrough:</p>
    <p>
      There are three paths through the game. The easiest path maintains purple
      taste all the way to the right before going down. Pro gamer video
      walkthrough:{' '}
      <a href="https://www.youtube.com/watch?v=Q7g03QRPv9c">
        https://www.youtube.com/watch?v=Q7g03QRPv9c
      </a>
    </p>
    <h4>Are We Necro or Are We Dancer</h4>
    <p>Tips:</p>
    <ul>
      <li>
        The game doesn't penalize us for missing beats. So if we dislike the
        irregular rhythm in level 2, we can choose to only play with every 2nd
        or every 4th beat.
      </li>
      <li>
        If we dislike entering passcodes, we can skip the level 1 door using the
        pickaxe.
      </li>
      <li>
        We can beat level 2 very quickly by beelining to the door and entering
        the code, "K."
      </li>
    </ul>
    <br />
    <h4>Only Humans Will Survive</h4>
    <p>Walkthrough:</p>
    <ul>
      <li>
        1. Click the checkbox. The last time, we need to click in the right zone
        outside the (supposed) game window.
      </li>
      <li>
        2 &amp; 3. Straightforward. For the captchas, it helps to know that the
        answer is always a real word.
      </li>
      <li>
        4. Type the word. But the word contains an R and pressing R restarts the
        game. So use CTRL+V to paste the R into the textbox. (For security
        reasons(???), Godot cannot access the clipboard from inside the browser,
        so I made CTRL+V just insert an R.)
      </li>
      <li>
        5. Clicking the correct two weaknesses in any order slays the vampire.
        We could try to use logic, but I recommend just clicking around until we
        win.
      </li>
      <li>
        6. Literally, type the word "below." (We can also literally type "the
        word" below, or type "the word below." Remember not to press R.)
      </li>
    </ul>
    <br />
    <h4>TetHack</h4>
    <p>Walkthrough:</p>
    <p>
      This looks like a normal Tetris game, but if we look carefully, there are
      some cracked walls on the right-hand side of the playfield. If we clear a
      line with cracked walls, the walls will break.
    </p>
    <p>
      Open up the dungeon and play through it, clearing lines of cracked walls.
      Tip: we can reset the Tetris stack with R at any time, and our cracked
      wall progress stays.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      This obstacle is tricky enough that I made it optional. It uses the Tetris
      fact that clearing a line pulls all the blocks above that line down by 1
      square. So to clear this obstacle, we first use an I block in the upper
      passage to pick up the ▣. Then we move another I block (or a ▣) through
      the bottom passage, as pictured, to clear a line under it. This pulls the
      upper-right teal tile 1 space down, clearing the cracked walls with a
      chain reaction.
    </p>
    <p>In the final tunnel, zoom down (SHIFT+down) to win.</p>
    <h4>Vaguely Roguelike-Themed Wordle</h4>
    <p>
      Walkthrough: it's Wordle. We can press Escape to reset at any time, so I
      recommend reset scumming for a good board dimension.
    </p>
    <h3>After We Beat the Games</h3>
    <p>
      Every game ends in a victory message. Each victory message emphasizes one
      word. It also mentions "N bits" for some N = 1, 2, 4, 8, or 16, suggesting
      a binary extraction.
    </p>
    <p>
      In binary order (16, 8, 4, 2, 1), the emphasized words are{' '}
      <Clue>NINE</Clue>, <Clue>ROGUELIKE</Clue>, <Clue>INTERPRETATION</Clue>,{' '}
      <Clue>HIGH-VALUE</Clue>, <Clue>FACTORS</Clue>. Searching any permutation
      or subset of these yields the{' '}
      <a href="https://www.roguebasin.com/index.php/Berlin_Interpretation">
        Berlin Interpretation
      </a>
      , a list of characteristics valued by the roguelike community.
    </p>
    <p>
      The roguelikes in this puzzle all have some of the characteristics but not
      others.
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th></th>
          <th>16 bit</th>
          <th>8 bit</th>
          <th>4 bit</th>
          <th>2 bit</th>
          <th>1 bit</th>
          <th>Binary Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>Only Humans Will Survive</td>
          <td>TetHack</td>
          <td>Ant Dueler</td>
          <td>Vaguely Roguelike-Themed Wordle</td>
          <td>Are We Necro or Are We Dancer</td>
          <td></td>
        </tr>
        <tr>
          <td>Random environment generation</td>
          <td>Yes</td>
          <td>
            No
            <sup>
              <a id="fn-1" href="#ref-1">
                1
              </a>
            </sup>
          </td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Permadeath</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Turn-based</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Grid-based</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>O</td>
        </tr>
        <tr>
          <td>Non-modal</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>
            No
            <sup>
              <a id="fn-2" href="#ref-2">
                2
              </a>
            </sup>
          </td>
          <td>N</td>
        </tr>
        <tr>
          <td>
            Complexity
            <sup>
              <a id="fn-3" href="#ref-3">
                3
              </a>
            </sup>
          </td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Resource management</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Hack'n'slash</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>U</td>
        </tr>
        <tr>
          <td>Exploration and discovery</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
          <td>Yes</td>
          <td>M</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <sup>
        <a id="ref-1" href="#fn-1">
          1
        </a>
      </sup>{' '}
      The piece sequence is also deterministic; it just cycles through the 7
      shapes.
    </p>
    <p>
      <sup>
        <a id="ref-2" href="#fn-2">
          2
        </a>
      </sup>{' '}
      Entering passcodes into doors is the other mode.
    </p>
    <p>
      <sup>
        <a id="ref-3" href="#fn-3">
          3
        </a>
      </sup>{' '}
      Unfortunately, "complexity" is both subjective and difficult to convey in
      small games. I tried to hammer the point by giving Only Humans Will
      Survive and Ant Dueler humorously complicated "How to play" sections. I
      apologize to anyone who holds more refined opinions on game design who had
      to squint this letter.
    </p>
    <p>
      Using binary extraction on the games' characteristics yields the answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        Inspired by discussions surrounding the fantastic Galactic Puzzle Hunt
        2023, we present: the Boston Interpretation.
      </p>
      <p>
        This is not a checklist for deciding whether an event is a puzzlehunt.
        Its purpose is to clarify why puzzlehunts appeal to us. And, by studying
        the norm, to inspire deviation from it.
      </p>
      <h4>High-value factors</h4>
      <p>
        <b>Ahas:</b> The sugar of the puzzlehunt is the aha moment. Even if
        solvers spend the bulk of their time "crunching," their effort is in
        service of the aha. Explicit instructions reduce ahas.
      </p>
      <p>
        <b>Diversity:</b> The puzzles in a puzzlehunt use a diverse set of
        skills. This separates a "puzzlehunt" from most "puzzle games."
      </p>
      <p>
        <b>Meta structure:</b> There is connective tissue between the puzzles,
        making the puzzlehunt a cohesive whole. Usually, this takes the form of
        some puzzles feeding data into others.
      </p>
      <p>
        <b>Answers:</b> Solving a puzzle is synonymous with discovering what its
        answer is. You could skip a puzzle entirely if you were told its answer.
      </p>
      <p>
        <b>Black boxes:</b> Puzzles are cleanly separated. Aside from puzzles
        feeding their answers to other puzzles, each puzzle is a black box. This
        helps busy solvers join in midway through an event. It also helps
        multiple writers contribute to a single hunt.
      </p>
      <p>
        <b>Extractions:</b> The important information you get from a puzzle is
        built into that puzzle. Changing a puzzle's answer would require
        rewriting it. "Token" metas that only use puzzle solves as a form of
        currency detract from a cohesive structure.
      </p>
      <p>
        <b>Teams:</b> The puzzlehunt is for a team of friends. Each team plays
        the puzzlehunt separately.
      </p>
      <h4>Low-value factors</h4>
      <p>
        <b>Answers are words:</b> The data you need to learn from a puzzle is
        always a short string; specifically, a recognizable word or phrase.
        Limiting the breadth of answers helps make puzzles black boxes.
      </p>
      <p>
        <b>Checking:</b> Players can immediately confirm when they've solved a
        puzzle.
      </p>
      <p>
        <b>Event:</b> The puzzlehunt is an event on the calendar. Even if the
        puzzles remain solvable forever, the event takes place over a set time
        period.
      </p>
      <p>
        <b>Leaderboard:</b> Though it has no mechanical impact, competitive
        teams can vie for the best solve stats.
      </p>
      <p>
        <b>Story:</b> The puzzles exist diegetically in some narrative. Solving
        puzzles advances the narrative.
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>Sprites:</p>
      <ul>
        <li>
          Bat animated sprite from{' '}
          <a href="https://opengameart.org/content/bat-sprite">
            https://opengameart.org/content/bat-sprite
          </a>{' '}
          by bagzie
        </li>
        <li>
          Stairs sprite from{' '}
          <a href="https://opengameart.org/content/stairs-2">
            https://opengameart.org/content/stairs-2
          </a>{' '}
          by Oiboo
        </li>
        <li>
          Pickaxe sprite from{' '}
          <a href="https://opengameart.org/content/rpg-weapons-and-tools">
            https://opengameart.org/content/rpg-weapons-and-tools
          </a>{' '}
          by PracticalNPC
        </li>
        <li>
          Paper sprite from{' '}
          <a href="https://opengameart.org/content/roguelikerpg-items">
            https://opengameart.org/content/roguelikerpg-items
          </a>{' '}
          by Joe Williamson (Twitter:{' '}
          <a href="https://twitter.com/joecreates">@JoeCreates</a>)
        </li>
        <li>
          Ant sprite from{' '}
          <a href="https://opengameart.org/content/16x16-ant-enemies">
            https://opengameart.org/content/16x16-ant-enemies
          </a>{' '}
          by ARoachIFoundOnMyPillow
        </li>
        <li>"Zagreus" sprite loosely based on Earthbound's Ness sprite</li>
      </ul>
      <p>SFX:</p>
      <ul>
        <li>Touhou "Pichuun" death sound effect</li>
        <li>
          All other sound effects (Zap, Bite, Tick, Pickaxe, Kill Bat, and
          Stairs) from pixabay
        </li>
      </ul>

      <p>Music:</p>
      <ul>
        <li>
          Images (No Vocal Version)
          <br />
          Exzel Music Publishing (freemusicpublicdomain.com)
          <br />
          Licensed under Creative Commons: By Attribution 3.0
          <br />
          <a href="http://creativecommons.org/licenses/by/3.0/">
            http://creativecommons.org/licenses/by/3.0/
          </a>
        </li>
        <li>
          The Man In The House of Cards (No Vocal Version)
          <br />
          Exzel Music Publishing (freemusicpublicdomain.com)
          <br />
          Licensed under Creative Commons: By Attribution 3.0
          <br />
          <a href="http://creativecommons.org/licenses/by/3.0/">
            http://creativecommons.org/licenses/by/3.0/
          </a>
        </li>
      </ul>
      <p>
        Thank copyright law for saving you from the "Strong One: Masked Man"
        level. This is not a joke.
      </p>
    </Attributions>
    <style jsx global>{`
      .solution-table td:nth-last-child(1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
