import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Crossword, { Colors, X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'a-routine-cryptic';

const crosswordData = [
  [1, 2, _, 3, _, 4, _, 5, _, 6, _, 7, X, 8, _, 9, _, 10, _, 11, X],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [12, _, _, _, _, _, _, _, _, _, X, 13, _, _, _, _, X, 14, _, _, _],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [15, _, _, _, _, _, _, _, _, _, X, 16, _, _, _, _, _, _, _, _, _],
  [X, _, X, X, X, _, X, _, X, X, X, _, X, _, X, _, X, _, X, _, X],
  [17, _, _, 18, _, X, 19, _, _, 20, _, _, _, _, X, 21, _, _, _, _, _],
  [X, X, X, _, X, X, X, _, X, _, X, _, X, _, X, X, X, _, X, _, X],
  [22, 23, _, _, _, 24, X, 25, _, _, _, _, _, _, _, 26, _, _, _, _, _],
  [X, _, X, _, X, _, X, X, X, _, X, X, X, _, X, _, X, X, X, _, X],
  [27, _, _, _, X, 28, _, 29, _, _, _, 30, _, _, _, _, X, 31, _, _, _],
  [X, _, X, X, X, _, X, _, X, X, X, _, X, X, X, _, X, _, X, _, X],
  [32, _, _, 33, _, _, _, _, _, 34, _, _, _, 35, X, 36, _, _, _, _, _],
  [X, _, X, _, X, X, X, _, X, _, X, _, X, _, X, X, X, _, X, X, X],
  [37, _, _, _, _, 38, X, 39, _, _, _, _, _, _, _, X, 40, _, _, 41, _],
  [X, _, X, _, X, _, X, _, X, _, X, X, X, _, X, 42, X, X, X, _, X],
  [43, _, _, _, _, _, _, _, _, _, X, 44, _, _, _, _, _, 45, _, _, _],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [46, _, _, _, X, 47, _, _, _, _, X, 48, _, _, _, _, _, _, _, _, _],
  [X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X, _, X],
  [X, 49, _, _, _, _, _, _, X, 50, _, _, _, _, _, _, _, _, _, _, _],
];

const crosswordShade = crosswordData.map((row, r) =>
  row.map((col, c) =>
    r === crosswordData.length - 1 && c === (row.length - 1) / 2
      ? Colors.C8
      : ''
  )
);

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Crossword data={crosswordData} shading={crosswordShade} />
        <br />
        <Table className="clues-table" noBorder={true}>
          <thead>
            <tr>
              <th>Across</th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th className="text-right">Down</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>1. </b>Helpful of us: ending in Saw V burying worker
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>2. </b>Ruthlessly accrued ultimate fortune with adequate
                attention
              </td>
            </tr>
            <tr>
              <td>
                <b>8. </b>Unbroken chain that holds interest, perhaps
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>3. </b>In the middle, pastel pink on running back, sans hat
              </td>
            </tr>
            <tr>
              <td>
                <b>12. </b>Sports official: "More drinking tea? Firstly, it's
                isolated"
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>4. </b>Head out, hole out
              </td>
            </tr>
            <tr>
              <td>
                <b>13. </b>Witticism after school from fool
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>5. </b>Italian leader's era, viewed in retrospect? Filthy one
              </td>
            </tr>
            <tr>
              <td>
                <b>14. </b>Paradise is ecstasy? Say it ain't so…
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>6. </b>Goose on a mound nibbled off green from mulberry
              </td>
            </tr>
            <tr>
              <td>
                <b>15. </b>As with yoga, body positioning initially emphasized,
                in part
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>7. </b>Laurel's against a jerk turning up with monks
              </td>
            </tr>
            <tr>
              <td>
                <b>16. </b>Most of us, failing at island nation's overthrow,
                collecting legal tips
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>8. </b>Musical star Nero, taking helm, retreats on both
                fronts; designer Giorgio heading off
              </td>
            </tr>
            <tr>
              <td>
                <b>17. </b>Right midfielder with slip at United Nations gets
                do-over?
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>9. </b>Right Inside Grouch at equator, traveling for game
                with wickets
              </td>
            </tr>
            <tr>
              <td>
                <b>19. </b>Mining giant holding a short course: "One Way to
                Order"
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>10. </b>A miscellany's got hold of thing without yours
                truly's divine petitions
              </td>
            </tr>
            <tr>
              <td>
                <b>21. </b>Try hard to, at first, stand
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>11. </b>"Gene's structure stealthily taking shape"&mdash;ER
                head, interjecting, with me operating
              </td>
            </tr>
            <tr>
              <td>
                <b>22. </b>Wanting for payment, group of performers accepts hide
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>18. </b>Helpful of us: initially looking up top people
              </td>
            </tr>
            <tr>
              <td>
                <b>25. </b>"Wrong robes/gear?" It's a swindle
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>20. </b>Report on one side of conversation
              </td>
            </tr>
            <tr>
              <td>
                <b>27. </b>Zero dividing zero in error to come out slowly
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>23. </b>Tell about "present day" as lowly dwelling's winter
                activity
              </td>
            </tr>
            <tr>
              <td>
                <b>28. </b>Got mushy, perhaps, began to take turn at Rhode
                Island
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>24. </b>Fellow with small amount of top-grade Japanese food…
              </td>
            </tr>
            <tr>
              <td>
                <b>31. </b>Spanish business magazine's skewed take
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>26. </b>... enjoyed/got into Japanese theater, obviously
              </td>
            </tr>
            <tr>
              <td>
                <b>32. </b>While I mention racketeering law, having an answer
                for certain immigrants
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>29. </b>Choose wealthy California Republican's Tesla, say
              </td>
            </tr>
            <tr>
              <td>
                <b>36. </b>Firm refusing Honda's transportation over railroad
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>30. </b>Originally published rant about left wing&mdash;one
                that's shrimpy?
              </td>
            </tr>
            <tr>
              <td>
                <b>37. </b>Hex from primary villain, with move to castle
                protecting idiot
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>31. </b>Shy singer has sample of grooves
              </td>
            </tr>
            <tr>
              <td>
                <b>39. </b>Paris and London? Reconsidering my options
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>33. </b>Spot clothing for a woman&mdash;formerly the person
                living here
              </td>
            </tr>
            <tr>
              <td>
                <b>40. </b>Has not minced words in affirmation
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>34. </b>Chief Inspector Morse about to suggest concluding
                early to frauds
              </td>
            </tr>
            <tr>
              <td>
                <b>43. </b>"Equipment knots up"&mdash;early tepid response of
                one's rum-loving crew
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>35. </b>On reflection, the same shortened word with the same
                meaning, with host regarding debatable merit
              </td>
            </tr>
            <tr>
              <td>
                <b>44. </b>Figurative way to attack left tackle: warm up,
                accommodating twist&mdash;ah!
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>38. </b>Certain entries with enthusiastic "open arms"
              </td>
            </tr>
            <tr>
              <td>
                <b>46. </b>Fifty tears&mdash;they're on your face
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>41. </b>Really disliked that junction's redirection
              </td>
            </tr>
            <tr>
              <td>
                <b>47. </b>Chinese leader shepherds piece of legislation in
                Chinese region
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>42. </b>Stovepipe maker with friendly greeting and unexpected
                treat
              </td>
            </tr>
            <tr>
              <td>
                <b>48. </b>Deck with "Death"&mdash;it holds "The
                Doctor"&mdash;has "The Thespian" inverted in the middle
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>44. </b>Offering's "half-time" with you when at church
              </td>
            </tr>
            <tr>
              <td>
                <b>49. </b>Almost double down on following garage's head
                mechanic
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>45. </b>Poker loss is result of irritant over time
              </td>
            </tr>
            <tr>
              <td>
                <b>50. </b>Certain transit route, changing red to white, and
                catching orange: It's often heard at Fenway
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b></b>
        </p>
      </div>

      <style jsx global>{`
        .clues-table td:nth-child(2) {
          text-align: right;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
