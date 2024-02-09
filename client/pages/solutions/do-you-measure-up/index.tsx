import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'do-you-measure-up';
const ANSWER = `SCALE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are thrown into a game of Taskmaster, with points awarded for doing
      well in each task. As we go through each round we should tally up the
      points for each contestant to get a final score at the end. Disqualified
      contestants score 0 for the round.
    </p>
    <h3>Round 1: Fastest Time</h3>
    <i>
      <p>
        Contestant 1 was running for sixty one minutes shorter than the running
        time for <i>Cool Runnings</i>, plus the time it takes you to sing "Happy
        Birthday". (98 - 61 = 37 minutes + about 10&ndash;20 seconds.)
      </p>
      <p>
        Contestant 2 walked to the corner store in the same amount of time as a
        fellow who was "Walking in Memphis", minus the time it takes you to text
        your mom that you love her. (4 minutes, 18 seconds - about 10 seconds.)
      </p>
      <p>
        Contestant 3 kicked a can for the same amount of time Misty Hyman won a
        gold using fish kicks, minus the time it takes you to roll your head and
        neck three times. (2 minutes, 5.88 seconds, - about 7 seconds.)
      </p>
      <p>
        Contestant 4 stood for as long as Del Toro's standing ovation, minus the
        time it takes you to draw five circles in the shape of the Olympic logo.
        (22 minutes - about 4 seconds.)
      </p>
      <p>
        Contestant 5 chased his friend for as long as the car chase scene in
        <i>Bullitt</i>, plus the time it takes you to blink rapidly 30 times. (10
        minutes, 53 seconds + about 10&ndash;20 seconds.)
      </p>
    </i>
    <Table>
      <thead>
        <tr>
          <th>Contestant</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>3</td>
          <td>5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>5</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Round 2: Heaviest Weight</h3>
    <i>
      <p>
        Contestant 1: Their sculpture weighs about the same as two adult Syrian
        hamsters sitting on a stick of butter. (about 6 oz × 2 + 4 oz = about
        16 oz)
      </p>
      <p>
        Contestant 2: Their sculpture weighs about the same as a king sized firm
        down pillow. (30&ndash;36 oz)
      </p>
      <p>
        Contestant 3: Their sculpture weighs about the same as two full gallon
        jugs of whole milk. (8.6 pounds × 2 = 17.2 pounds)
      </p>
      <p>
        Contestant 4: Their sculpture weighs about the same as an average
        newborn baby (7 pounds)
      </p>
      <p>
        Contestant 5: Their sculpture weighs about the same as two bowling
        balls, those two being the lowest and highest weights manufactured. (6 +
        16 = 22 pounds)
      </p>
    </i>
    <Table>
      <thead>
        <tr>
          <th>Contestant</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>3</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>5</td>
          <td>5</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Round 3: Farthest Distance</h3>
    <i>
      <p>
        Contestant 1 threw the duck an amazing six queen sized bed-lengths away.
        (80 inches × 6 = 40 feet)
      </p>
      <p>
        Contestant 2 threw the duck about the depth of an endzone on an American
        football field. Touch "down" indeed! (10 yards = 30 feet)
      </p>
      <p>
        Contestant 3 threw the duck about as far as a traditional UK
        double-decker coach if it were cut in half. (39 feet 4 inches / 2 = 19
        feet 8 inches)
      </p>
      <p>
        Contestant 4 used a slingshot to propel the duck the length of about six
        female alligators. (8.5&ndash;9.8 feet × 6 = 51&ndash;58.8 feet)
      </p>
      <p>
        Contestant 5 threw the duck about the length of a kayak. (8&ndash;12 feet)
      </p>
    </i>
    <Table>
      <thead>
        <tr>
          <th>Contestant</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DQ</td>
        </tr>
        <tr>
          <td>3</td>
          <td>DQ</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
        </tr>
        <tr>
          <td>5</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Round 4: Height</h3>
    <i>
      <p>
        Contestant 1 has used a men's Olympic barbell with weights on it
        longways, and added a koala on top of the end of the bar. (7.2 feet +
        2&ndash;3 feet = about 9&ndash;10 feet)
      </p>
      <p>
        Contestant 2 used three standard cinder blocks standing on end. (16 in ×
        3 = 4 feet)
      </p>
      <p>
        Contestant 3 used five apples stacked on top of each other. That's about
        the size of Hello Kitty! (1 foot 8 inches)
      </p>
      <p>
        Contestant 4 used three loo rolls on the head of a newborn baby giraffe.
        (4 in × 3 + 6 feet = 7 feet)
      </p>
      <p>
        Contestant 5 used a tuba (bell side down), then added a stuffed,
        life-sized replica of the world's smallest woman. (3.5 feet + 2 feet ¾
        in = about 5.5 feet)
      </p>
    </i>
    <Table>
      <thead>
        <tr>
          <th>Contestant</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>DQ</td>
        </tr>
      </tbody>
    </Table>

    <br />
    <h3>New Scoring</h3>
    <p>
      A: Before we go, I forgot to mention, rounds one and two are actually
      antonym rounds, so I will now adjust the scores accordingly!
    </p>
    <p>
      With this announcement, we need to re-score the first two rounds to be
      LONGEST TIME and LIGHTEST WEIGHT.
    </p>
    <p>New scores for round 1:</p>
    <Table>
      <thead>
        <tr>
          <th>Contestant</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
    <p>New scores for round 2:</p>
    <Table>
      <thead>
        <tr>
          <th>Contestant</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>3</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>-1</td>
        </tr>
        <tr>
          <td>5</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Total scores</h3>
    <br />
    <Table className="final-table">
      <thead>
        <tr>
          <th>Contestant</th>
          <th>
            Round 1<br /> (new)
          </th>
          <th>
            Round 2<br /> (new)
          </th>
          <th>Round 3</th>
          <th>Round 4</th>
          <th>Total</th>
          <th>A1Z26</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>5</td>
          <td>5</td>
          <td>4</td>
          <td>5</td>
          <td>19</td>
          <td>S</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2</td>
          <td>-1</td>
          <td>0</td>
          <td>2</td>
          <td>3</td>
          <td>C</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
          <td>-1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>A</td>
        </tr>
        <tr>
          <td>4</td>
          <td>4</td>
          <td>-1</td>
          <td>5</td>
          <td>4</td>
          <td>12</td>
          <td>L</td>
        </tr>
        <tr>
          <td>5</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>5</td>
          <td>E</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The total each contestant has in points will spell our answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      table th,
      table td {
        text-align: center;
      }
      .final-table td:nth-child(7) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
