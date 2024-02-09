import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'text-adventure';
const ANSWER = `WANDS, BARGING, STOWED, WHINER, TWAIN, WONDER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      In this text adventure, we must solve six twists on well-known puzzles.
    </p>
    <ol>
      <li>
        The Towers of Hanoi with 5 discs, but with a 20-move limit. (The typical
        solution uses 31 moves.)
      </li>
      <li>
        The wolf/goat/cabbage rowboat puzzle, but with an additional lettuce
        that the goat craves.
      </li>
      <li>
        The puzzle where 4 people of different speeds want to cross a bridge
        using one flashlight in a limited amount of time… but the flashlight has
        16 minutes of battery instead of 17.
      </li>
      <li>
        A "zebra puzzle" aka "Einstein puzzle" involving placing foods in boxes,
        that has no solution.
      </li>
      <li>
        The MU Puzzle (from the book <i>Gödel, Escher, Bach</i>), which is
        already unsolvable as stated.
      </li>
      <li>
        A puzzle about using two 1-minute fuses to measure, not 45 seconds as
        usual, but 85 seconds.
      </li>
    </ol>
    <p>
      To solve each scenario, the player must "cheat," usually by using objects
      from other puzzles. Though it's possible to solve all 6 puzzles in a
      single run (and we get a special message for doing so), this is not
      required to get the Mystery Hunt puzzle answers.
    </p>
    <p>
      In this round, every pair of puzzles produces an answer. Two other puzzles
      in this round give cluephrases, <Monospace>STEAL SCEPTER</Monospace> (from
      Chemistry) and <Monospace>ALICE AND BOB MEET</Monospace> (from
      Matchmaker), to help solve scenarios 2 and 6 respectively. Another puzzle
      in this round (Crossword) gives a cluephrase,{' '}
      <Monospace>THINK BIG</Monospace>, required to get the answer after solving
      scenario 3. Akari's solution is used to get the answer after solving
      scenario 1. Scenarios 4 and 5, when solved, yield cluephrases to help
      solve the two other puzzles in this round (Blanks and Word Search).
    </p>
    <h3>Scenario 1 - Towers of Hanoi (Akari)</h3>
    <p>
      If the player tries to cheat the puzzle by putting discs down in random
      places, he shouts "YOU CAN ONLY PUT A DISC ON A POLE, AND THAT IS NOT A
      POLE." If we try putting a disc on people, we get variants on this
      message: "YOU CAN ONLY PUT A DISC ON A POLE, AND (THEY ARE/YOU ARE/I AM)
      NOT A POLE."
    </p>
    <p>
      Genghis Khan speaking in all caps hides a pun. In fact, two people in this
      puzzle, Copernicus and Chopin, are Poles. Using either or both of these
      people as temporary disc storage, it's easy to solve the puzzle within the
      move limit.
    </p>
    <p>
      Genghis is mad at us for this, but the room accepts it and reveals 12
      switches, one per face of each obelisk. Thinking about other puzzles in
      this round, we might remember the Akari that has three black squares
      numbered 1, 2, and 3 respectively. To satisfy the room, we turn on, e.g.,
      the obelisk 2 north switch, if and only if in the solution to the Akari,
      there's a lightbulb immediately north of the 2. The lights to turn on are
      1 west; 2 north and west; and 3 north, west, and east. Doing so gives the
      phrase <Monospace>CALL IN WONDER</Monospace>, for the answer{' '}
      <b>
        <Monospace>WONDER</Monospace>
      </b>
      .
    </p>
    <h3>Scenario 2 - The Rowboat (Chemistry)</h3>
    <p>
      The Chemistry puzzle gives us the cluephrase{' '}
      <Monospace>STEAL SCEPTER</Monospace>, which we can use to cast the
      spelling spells from the MU Puzzle on any object. Three of these spells
      don't apply to any object in the game, but the spell{' '}
      <Monospace>IEDITEDIT</Monospace> can be cast on anything. Most targets
      produce nonsense (e.g., goat → goatoat), but one succeeds. Casting{' '}
      <Monospace>IEDITEDIT</Monospace> on the box labeled Alfa produces a big
      bunch of Alfalfa.
    </p>
    <p>
      It's only now that we likely make the connection to the rowboat puzzle. By
      feeding the alfalfa to the goat (either by leaving them together on the
      West Bank or by directly typing{' '}
      <Monospace>GIVE ALFALFA TO GOAT</Monospace>), we fill the goat up. Once
      the goat isn't hungry anymore, solving the puzzle is trivial. Solving it
      instructs us to input the answer{' '}
      <b>
        <Monospace>TWAIN</Monospace>
      </b>
      .
    </p>
    <h3>Scenario 3 - The Flashlights and the Bridge (Crossword)</h3>
    <p>
      The four bridge crossers can't cross the bridge without a light source.
      But the game does have extra light sources: the red and green fuses from
      scenario 6. By giving a fuse to Ada (or giving two fuses to Brahmagupta),
      we can easily solve the puzzle.
    </p>
    <p>
      Once solved, Ada finds some text that's too small to read. Inputting the
      cluephrase from the Crossword, <Monospace>THINK BIG</Monospace>, gives her
      the advice she needs to read the inscription, which instructs us to input
      the answer{' '}
      <b>
        <Monospace>BARGING</Monospace>
      </b>
      .
    </p>
    <p>
      By the way, we might notice that NPCs interact well with fuses. They will
      successfully light a fuse/flashlight if not doing so would result in their
      death. Also, we can directly give them commands like{' '}
      <Monospace>ADA, LIGHT GREEN FUSE</Monospace>.
    </p>
    <h3>Scenario 4 - The Zebra Puzzle (Word Search)</h3>
    <p>
      Let's prove that this puzzle has no solution. As it happens, there's a
      short proof. The puzzle asserts that food F is in box D or E; that food I
      is in box C, D, or E; and that F and I are not in adjacent boxes.
      Therefore, F is in E and I is in C. But every other food is not allowed to
      go in box D, so there is no solution.
    </p>
    <p>
      But wait. We can turn box A into a vegetable, removing it from the
      equation. Unfortunately, this doesn't change the contradiction above.
    </p>
    <p>
      So how do we proceed? Well, the boxes are all on a picnic table, which if
      we try to <Monospace>TAKE</Monospace> it, we learn is "too bulky to carry
      around with you." However, if we instead <Monospace>ROTATE</Monospace> (or{' '}
      <Monospace>TURN</Monospace> or <Monospace>SPIN</Monospace>) the picnic
      table, we can invert the east/west direction.
    </p>
    <p>
      Now we can use logic to find the unique solution. Here's a chart where X
      denotes that a clue forbids that food from going in that box.
    </p>
    <Table>
      <tbody>
        <tr>
          <td></td>
          <td>E</td>
          <td>D</td>
          <td>C</td>
          <td>B</td>
          <td>A</td>
        </tr>
        <tr>
          <td>F</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>G</td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td>X</td>
        </tr>
        <tr>
          <td>H</td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td></td>
        </tr>
        <tr>
          <td>I</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>J</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Food I must go in box C. Since F isn't adjacent to I, it goes in A. Now H
      goes in E. So J goes in D and G goes in B. At this point, we're told that
      "the answer is one space east of the elixir." In the Word Search, the word
      in the grid to the east of <Monospace>ELIXIR</Monospace> is{' '}
      <b>
        <Monospace>STOWED</Monospace>
      </b>
      .
    </p>
    <p>
      Actually, this solution isn't unique. We can both turn the table and
      eliminate box A.
    </p>
    <Table>
      <tbody>
        <tr>
          <td></td>
          <td>E</td>
          <td>D</td>
          <td>C</td>
          <td>B</td>
        </tr>
        <tr>
          <td>F</td>
          <td>X</td>
          <td>X</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>G</td>
          <td></td>
          <td>X</td>
          <td>X</td>
          <td></td>
        </tr>
        <tr>
          <td>I</td>
          <td></td>
          <td></td>
          <td></td>
          <td>X</td>
        </tr>
        <tr>
          <td>J</td>
          <td></td>
          <td></td>
          <td>X</td>
          <td>X</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Observe that I can't go in C (since then F has nowhere to go), so I and J
      are collectively in boxes D and E. This means G is in B. So F is in C. So
      I is in E, and J is in D. If we input this solution, Sophie Germain
      congratulates us on finding the bonus solution (while still giving us the
      answer clue).
    </p>
    <h3>Scenario 5 - The MU Puzzle (Blanks)</h3>
    <p>
      Let's prove that this puzzle is impossible. Consider how every spell
      affects the number of I's on the scroll. Each spell either doubles that
      number, doesn't change it, or reduces it by a multiple of 3. Therefore, no
      matter what, the number of I's on the scroll can never become a multiple
      of 3. So achieving <Monospace>MU</Monospace> is impossible.
    </p>
    <p>
      However, we might try to accomplish a loftier goal and crash the Mystery
      Hunt servers. To accomplish this, we can repeatedly cast the{' '}
      <Monospace>IEDITEDIT</Monospace> spell to double the string until it takes
      up all the memory on the server. Ordinarily, this would crash the
      interpreter running the text adventure. In this case, the crash is mocked
      to happen earlier. (Though we might notice that our spells legitimately
      lag the game when the string gets above ~1000 characters.)
    </p>
    <p>
      The crash conveniently "deletes the offending variables from memory,"
      which results in a scroll whose text is null. Gödel decides that this
      counts as the literal meaning of the word Mu, and gives us the phrase{' '}
      <Monospace>COAXED DOWN ANYWISE</Monospace>. This can be fed into the
      Blanks puzzle to extract{' '}
      <b>
        <Monospace>WANDS</Monospace>
      </b>
      .
    </p>
    <p>
      By the way, the spell names are all puns. <Monospace>FRIENDS</Monospace>{' '}
      puts <Monospace>U</Monospace> and <Monospace>I</Monospace> together;{' '}
      <Monospace>TRIDENT</Monospace> pokes out three <Monospace>I</Monospace>'s;{' '}
      <Monospace>SEESAW</Monospace> sees-a-double-<Monospace>U</Monospace>; and{' '}
      <Monospace>IEDITEDIT</Monospace> aptly describes itself.
    </p>
    <h3>Section 6 - The Fuses Puzzle (Matchmaker)</h3>
    <p>
      Solving the classic fuses puzzle (which demands measuring 45 seconds)
      involves lighting fuses at both ends. Indeed, we can type variations on "
      <Monospace>LIGHT RED FUSE AT BOTH ENDS</Monospace>," "
      <Monospace>LIGHT OTHER END OF RED FUSE</Monospace>," or simply "
      <Monospace>LIGHT RED FUSE</Monospace>" twice, to do this. However, this
      trick doesn't help measure 85 seconds.
    </p>
    <p>
      Another puzzle feeds us the cluephrase{' '}
      <Monospace>ALICE AND BOB MEET</Monospace>, which seems like it should be
      helpful for the Flashlight Puzzle. What's the effect of this command? If X
      and Y are on opposite sides of the bridge and we say{' '}
      <Monospace>X AND Y MEET</Monospace>, then assuming both of them carry a
      light source (i.e., the flashlight or a fuse), then they will
      simultaneously attempt to cross the bridge to meet in the middle.
    </p>
    <p>
      This takes a variable amount of time depending on X's and Y's speeds. For
      example, if we ask Ada and Chopin to meet, then they'll meet after 50
      seconds, 5/6 of the way towards Chopin's starting location. This is the
      key to the solution. We give Chopin the flashlight and use{' '}
      <Monospace>CHOPIN GO SOUTH</Monospace>. Then we light the red fuse, give
      it to Ada, and use <Monospace>ADA AND CHOPIN MEET</Monospace> to make 50
      seconds pass. Then we light the green fuse and use{' '}
      <Monospace>ADA GO SOUTH</Monospace>. This takes another 10 seconds.
      Finally, we light the other end of the green fuse, and wait the final 25
      seconds for it to burn out. This totals 85 seconds, as desired, and yields
      the answer phrase{' '}
      <b>
        <Monospace>WHINER</Monospace>
      </b>
      .
    </p>
    <p>
      By the way, it's possible to do cursed shenanigans without using the{' '}
      <Monospace>X AND Y MEET</Monospace> command. In general, any bridge
      movement or <Monospace>WAIT</Monospace> command gets interrupted at the
      first "observable" event: either a person reaching the end of a bridge;
      two people meeting in the middle of a bridge; or a fuse or flashlight
      burning out. So if we give Chopin the flashlight, light the red fuse, and
      say <Monospace>CHOPIN GO SOUTH</Monospace>, then we're interrupted after 1
      minute when the red fuse burns out and Chopin is 0.2 of the way across the
      bridge going south. Now if we give the green fuse to Ada and say{' '}
      <Monospace>ADA GO SOUTH</Monospace>, then Ada catches up to Chopin at a
      place and time determined by algebra. I don't believe there's a way to
      measure 85 seconds without using the <Monospace>MEET</Monospace> command,
      but I'm not sure.
    </p>
    <AuthorsNotes>
      <p>
        One of my goals for MITMH 2024 was "Someone writes a text adventure." So
        doing it myself works.
      </p>
      <p>
        I've participated in a few "Telephone Programming" events where people
        erode programs by repeatedly translating them through niche languages. I
        always pick Inform 7. It doesn't even understand PEMDAS, but it excels
        at modeling little worlds. In past events, I've started off my chain
        with the Towers of Hanoi; a water-pouring puzzle; a block stacking
        world; and the wolf/goat/cabbage puzzle.
      </p>
      <p>
        When I was asked to make a text adventure with 6 small independently
        solvable parts, I thought about how to express "nazos" in a text
        adventure space. That led to the "Pole" pun, and then to the "classic
        riddle tactile toybox" concept. I'm a little disappointed that I
        couldn't think of silly puns for the other riddles.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
