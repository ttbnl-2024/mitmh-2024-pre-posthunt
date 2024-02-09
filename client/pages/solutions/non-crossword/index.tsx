import { FC } from 'react';

import Appendix from 'components/appendix';
import Crossword, { Colors } from 'components/crossword';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'non-crossword';
const ANSWER = `ARTILLERY`;

// override the type on _ to make cwShading happy
const _: '' = '';

// prettier-ignore
const cwData = [
  [_, _, _, _, _, _, _, _, 1, 2, _, _, _, _, _, _, _, _, _, 3],
  [_, _, '(viii)', _, 4, _, _, _, _, _, _, _, _, 5, 6, _, _, _, _, _],
  [_, 7, _, _, _, _, _, '(i)', _, _, _, _, _, _, _, '(iv)', _, _, _, _],
  [8, _, 9, _, _, _, _, _, _, _, 10, _, _, _, _, _, _, _, _, _],
  [_, 11, _, _, _, _, _, _, _, _, _, _, 12, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, 13, _, _, _, _, 14, _, 15, _, _, 16],
  [_, 17, _, _, _, '(v)', _, _, _, _, _, _, _, _, _, _, _, 18, _, _],
  [_, _, 19, _, _, _, _, _, _, _, _, _, _, _, 20, _, _, _, _, _],
  [21, _, _, _, _, _, _, _, _, _, 22, _, _, _, _, _, _, _, _, _],
  [23, _, _, _, _, 24, 25, _, _, _, _, _, _, '(vi)', _, _, 26, _, _, _],
  [_, _, _, _, _, _, 27, _, _, 28, 29, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 30, 31, _, _, 32, _],
  [33, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, 34, _, _, _, _, _, _, _, _, 35, _, _, _, '(vii)', _, _, _, _],
  [_, _, _, '(ii)', _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, 36, _, _, _, _, _, 37, _, _],
  [38, _, _, _, 39, _, 40, 41, _, 42, _, _, _, _, _, 43, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, '(ix)', _, _],
  [_, _, 44, _, _, '(iii)', _, _, _, _, _, _, _, _, _, _, _, _, _, _],
  [_, _, 45, _, _, _, _, _, _, _, _, _, _, _, 46, 47, _, _, _, 48],
];

// prettier-ignore
const cwFill = [
  ['D', 'ORL', 'EW', 'W', 'E', 'VE', 'R', _, 'D', 'D', 'E', 'BE', 'E', _, 'ED', 'D', 'E', 'R', _, 'D'],
  [_, 'D', 'N', 'HE', 'WN', 'AD', 'S', 'EL', 'WL', 'R', 'ON', 'D', 'E', 'WD', 'NUD', 'L', 'N', 'AR', 'LS', 'OL'],
  ['E', 'LNSE', 'AR', _, 'R', 'ND', _, 'R', 'EA', 'R', 'E', 'NE', 'D', 'D', _, 'SR', 'EIN', 'W', _, _],
  ['DS', 'AN', 'R', 'E', 'TU', 'R', 'E', 'S', 'D', 'IL', 'WE', 'S', _, 'E', 'D', 'U', 'E', 'TE', 'E', 'N'],
  ['NS', 'R', 'E', 'VE', 'R', 'S', 'K', 'S', 'E', 'R', 'N', 'S', 'S', 'IS', 'BL', 'S', 'IN', 'ME', 'RS', 'AL'],
  ['E', 'R', 'VE', 'R', _, 'E', 'DN', 'E', 'S', 'S', 'D', _, 'AD', 'S', 'R', 'US', 'N', 'U', _, 'D'],
  ['AS', 'SE', 'E', 'ZE', 'D', 'D', 'U', 'S', _, 'TR', 'UES', 'L', 'D', _, _, 'EL', 'L', 'N', 'D', 'AW'],
  ['NS', 'QU', 'ED', 'L', _, 'E', 'FE', 'NE', 'LE', 'S', _, 'E', 'LS', 'OR', 'LE', 'AL', 'D', 'E', 'LR', 'S'],
  ['UE', 'S', 'E', 'R', 'BE', 'R', 'R', 'IE', 'S', 'S', 'S', 'S', 'OR', 'E', _, 'S', 'NE', 'R', 'S', _],
  ['D', 'S', 'E', 'LS', 'AW', 'L', 'R', 'ID', _, _, 'E', 'NE', 'I', 'R', 'E', 'NS', 'U', 'E', 'LE', 'PS'],
  ['IS', 'E', 'D', 'S', 'D', 'EL', 'WL', 'D', 'E', 'WS', 'E', 'D', 'E', 'R', _, 'E', 'LAE', 'R', _, _],
  ['OR', 'D', _, _, 'E', 'S', 'E', 'LR', _, 'S', 'AR', 'WD', 'N', 'E', 'DS', 'E', 'S', 'E', 'LE', 'D'],
  ['S', 'E', 'R', _, 'D', 'E', 'R', 'VE', 'D', 'E', 'X', 'JE', 'N', 'N', 'RLS', 'OL', 'PR', 'E', 'S', 'S'],
  ['AD', 'E', 'WE', 'KE', 'NS', 'E', 'R', _, _, 'E', 'S', 'S', 'E', _, _, 'S', 'E', 'S', 'S', _],
  ['D', 'E', 'D', 'S', _, 'N', 'PE', 'ES', 'L', 'N', 'S', 'EE', 'LN', 'S', 'L', 'EL', 'N', 'S', 'OS', 'Y'],
  ['E', 'N', _, 'PE', 'E', 'DN', 'N', _, 'KE', 'N', _, 'D', 'OR', 'WD', 'D', 'E', 'LN', 'SL', _, 'N'],
  ['D', 'EE', 'LL', 'AR', 'LD', 'RU', 'U', 'D', 'N', 'S', 'DD', 'E', 'S', 'S', 'N', 'E', 'D', 'U', 'D', 'N'],
  ['IE', 'D', 'KU', 'S', 'E', 'R', 'S', 'R', 'U', 'E', 'NSUE', 'S', 'S', _, 'OU', 'W', 'S', 'EE', 'LNS', 'FU'],
  [_, 'D', 'U', 'ND', 'E', 'WS', _, 'E', 'R', _, 'N', _, 'E', 'R', 'T', 'N', 'ES', 'L', 'S', 'N'],
  ['N', 'OW', 'R', 'UR', 'Y', 'TE', 'R', 'N', _, 'EL', 'WL', 'EL', 'WL', 'EL', 'WL', 'U', _, 'Y', 'L', 'U'],
];

const { C2, C4, C8, C10 } = Colors;
// prettier-ignore
const cwShading = [
  [_, _, _, _, C4, C4, C4, C4, C8, C2, C2, C2, C2, C2, C4, C4, _, _, _, C2],
  [_, C10, _, C4, C4, C2, C8, C8, C8, C2, C2, _, C8, C8, C4, C4, _, C2, C2, C2],
  [C10, C10, C10, C10, C2, C2, C8, _, _, _, _, _, _, C8, C4, _, _, _, C2, C4],
  [C4, C10, C2, C2, C2, C2, C2, C2, C4, C4, C4, C4, _, C8, C8, _, C4, C4, C4, C4],
  [C4, C8, C8, C8, C8, C8, C8, C2, C4, C4, C4, C4, C2, C8, C8, C2, C4, C8, C8, C8],
  [C4, C4, C4, C4, C4, C8, C8, C2, C2, C10, C10, C4, C2, C8, C2, C2, C4, C8, C8, C2],
  [C10, C2, C2, C2, C2, _, C8, _, C2, C10, C10, C10, C2, C8, C2, C2, C2, C8, C2, C2],
  [C10, C2, C8, C8, C2, _, _, _, _, _, C10, C2, C2, C4, C4, C4, C8, C2, C2, C2],
  [C10, C10, C8, C8, C8, C8, C8, C8, C8, _, C8, C8, C2, C2, C2, _, C8, C8, C8, C2],
  [C8, C10, C4, C4, C4, C4, C2, C2, C8, _, C8, C8, C8, _, _, _, C8, C8, C8, C8],
  [C8, C10, C10, C4, C8, C8, C8, C2, C4, C4, C2, C2, C2, C2, C2, _, _, _, _, C8],
  [C8, C8, C10, C4, C8, C8, C2, C2, C2, C4, C2, C2, C2, C10, C10, C4, C4, C10, C10, C10],
  [C2, C8, C8, C8, C4, C8, C8, C8, C8, C4, C4, C2, C2, C10, C10, C10, C4, C4, C4, C10],
  [C2, C4, C4, C4, C4, _, _, _, C8, C2, C2, C8, C8, C8, C10, _, C2, C2, C4, C10],
  [C2, C2, C2, _, C4, _, C4, C4, C4, C2, C2, C8, C8, _, _, _, C2, C2, C4, C2],
  [C2, C2, C2, _, _, _, C4, C4, C2, C2, C2, C4, _, _, C8, C2, C2, C2, C4, C2],
  [C8, C4, C4, C8, C8, _, C4, C2, C2, C8, C8, C4, C4, _, C8, C4, C4, C2, _, C2],
  [C8, C8, C4, C2, C8, C8, C8, C2, C2, C8, C8, C8, C4, _, C8, C8, C4, _, _, C2],
  [C8, C8, C4, C2, _, _, C8, _, _, _, C8, C8, C4, C4, C4, C8, C4, C4, _, C2],
  [C8, C8, C2, C2, C2, _, _, _, C2, C2, C2, C2, C2, C2, C2, C8, C4, _, _, C2],
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each clue gives an answer that must be placed in the grid starting from
      the correspondingly numbered square. Instead of entering the answer's
      letters into the grid, most of the letters in the answer define what
      direction to go at each step, forming a shape, which fits into the grid.
      Every non-direction letter is prefilled in the grid (and does not result
      in a movement when entering an answer) to help with placement. The
      directions are (N)orth, (E)ast, (S)outh, (W)est, (U)p, (R)ight, (D)own,
      and (L)eft.
    </p>
    <p>
      For example, the word <Clue>RENT</Clue> would be entered as: start in the
      numbered square, go Right, go East (also to the right), go North, and
      enter a T there (without moving).
    </p>
    <Crossword data={cwData} fill={cwFill} shading={cwShading} />
    <p>
      Each clue has 0&ndash;2 non-direction letters, and specifies both the answer
      enumeration and number of cells it fills in the grid. Asterisks indicate
      capitalized words. After filling all the shapes in the grid, there are 9
      unfilled regions, each containing one of the roman numerals. For each
      remaining shape, we can find a word or phrase that fits in the shape if
      we add an additional ignored letter:
    </p>
    <ol style={{ listStyleType: 'lower-roman' }}>
      <li>(4-5) RE(A)R-ENDED</li>
      <li>(11) SPEED(R)UNNER</li>
      <li>(9) WES(T)ERNER</li>
      <li>(4 6) SURE W(I)NNER</li>
      <li>(11) DEFENSE(L)ESS</li>
      <li>(*10) RENSSE(L)AER</li>
      <li>(10) S(E)LLSWORDS</li>
      <li>(3 5) NEW WO(R)LD</li>
      <li>(9) ENDLESSL(Y)</li>
    </ol>
    <p>
      The added letters ordered by Roman numerals give the answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <Table className="appendix-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Clue</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Resides, lives (6; 5)</td>
            <td>DWELLS</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Male hive worker (5 3; 7)</td>
            <td>DRONE BEE</td>
          </tr>
          <tr>
            <td>3</td>
            <td>US currency (7; 5)</td>
            <td>DOLLARS</td>
          </tr>
          <tr>
            <td>4</td>
            <td>At any time (8; 6)</td>
            <td>WHENEVER</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Happiness from matrimony (6 5; 9)</td>
            <td>WEDDED BLISS</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Founder of a 19th century anti-tech movement (*3 *4; 5)</td>
            <td>NED LUDD</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Hears out (5 2 3; 6)</td>
            <td>LENDS AN EAR</td>
          </tr>
          <tr>
            <td>8</td>
            <td>1.1.1.1 or 8.8.8.8 (*3 6; 7)</td>
            <td>DNS SERVER</td>
          </tr>
          <tr>
            <td>9</td>
            <td>They're written in the top-left corner (6 9; 13)</td>
            <td>RETURN ADDRESSES</td>
          </tr>
          <tr>
            <td>10</td>
            <td>PvP area in classic Runescape (10; 9)</td>
            <td>WILDERNESS</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Behind-the-back score in basketball (7 4; 9)</td>
            <td>REVERSE DUNK</td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              Ailment caused by spending too much time on a horse or bike (6 4;
              8)
            </td>
            <td>SADDLE SORE</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Flaky pastries (8; 6)</td>
            <td>STRUDELS</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Eponym of a mathematical paradox (*7; 6)</td>
            <td>RUSSELL</td>
          </tr>
          <tr>
            <td>15</td>
            <td>End of COVID? (8; 7)</td>
            <td>NINETEEN</td>
          </tr>
          <tr>
            <td>16</td>
            <td>People who aren't in a hurry (8; 7)</td>
            <td>DAWDLERS</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Compressed (8; 6)</td>
            <td>SQUEEZED</td>
          </tr>
          <tr>
            <td>18</td>
            <td>They may be Roman or Arabic (8; 6)</td>
            <td>NUMERALS</td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              Fruits in a famous insult that also equates the target's mother
              with a rodent (12; 10)
            </td>
            <td>ELDERBERRIES</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Maybelline parent (*6; 3)</td>
            <td>LOREAL</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Not evaluated (10; 8)</td>
            <td>UNASSESSED</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Dojo figure (6; 5)</td>
            <td>SENSEI</td>
          </tr>
          <tr>
            <td>23</td>
            <td>What entropy measures (8; 7)</td>
            <td>DISORDER</td>
          </tr>
          <tr>
            <td>24</td>
            <td>Anarchic (7; 6)</td>
            <td>LAWLESS</td>
          </tr>
          <tr>
            <td>25</td>
            <td>Batman villain, with "the" (*7; 6)</td>
            <td>RIDDLER</td>
          </tr>
          <tr>
            <td>26</td>
            <td>
              Stays up too late working on puzzles but still has to be up early,
              say (11; 9)
            </td>
            <td>UNDERSLEEPS</td>
          </tr>
          <tr>
            <td>27</td>
            <td>Completely merited (4-8; 10)</td>
            <td>WELL-DESERVED</td>
          </tr>
          <tr>
            <td>28</td>
            <td>House of Alfred the Great (*6; 5)</td>
            <td>WESSEX</td>
          </tr>
          <tr>
            <td>29</td>
            <td>The father of vaccines (*6 *6; 10)</td>
            <td>EDWARD JENNER</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Quality of a dry wit (9; 6)</td>
            <td>DROLLNESS</td>
          </tr>
          <tr>
            <td>31</td>
            <td>Starbucks orders (9; 8)</td>
            <td>ESPRESSOS</td>
          </tr>
          <tr>
            <td>32</td>
            <td>
              English city described as "an odious place" by Charles Dickens
              (*5; 5)
            </td>
            <td>LEEDS</td>
          </tr>
          <tr>
            <td>33</td>
            <td>Made blue, emotionally (8; 8)</td>
            <td>SADDENED</td>
          </tr>
          <tr>
            <td>34</td>
            <td>Most schoolchildren look forwards to them (8; 6)</td>
            <td>WEEKENDS</td>
          </tr>
          <tr>
            <td>35</td>
            <td>Sibling of Helios (*6; 5)</td>
            <td>SELENE</td>
          </tr>
          <tr>
            <td>36</td>
            <td>After-meal treat (7; 7)</td>
            <td>DESSERT</td>
          </tr>
          <tr>
            <td>37</td>
            <td>Gloomy disposition (10; 8)</td>
            <td>SULLENNESS</td>
          </tr>
          <tr>
            <td>38</td>
            <td>Abated (4 4; 7)</td>
            <td>DIED DOWN</td>
          </tr>
          <tr>
            <td>39</td>
            <td>Pantries, originally for raw meat covered in fat (7; 6)</td>
            <td>LARDERS</td>
          </tr>
          <tr>
            <td>40</td>
            <td>
              Word for "removes the skin of" which doesn't change meaning if the
              first two letters are removed (7; 6)
            </td>
            <td>UNPEELS</td>
          </tr>
          <tr>
            <td>41</td>
            <td>Inebriation (11; 11)</td>
            <td>DRUNKENNESS</td>
          </tr>
          <tr>
            <td>42</td>
            <td>Sexts, maybe (5 5; 7)</td>
            <td>SENDS NUDES</td>
          </tr>
          <tr>
            <td>43</td>
            <td>Historic Ford "E" cars (*6; 6)</td>
            <td>EDSELS</td>
          </tr>
          <tr>
            <td>44</td>
            <td>Instrument popularized by King Kalakaua (7; 4)</td>
            <td>UKULELE</td>
          </tr>
          <tr>
            <td>45</td>
            <td>Becomes depleted, as a well (4 3; 5)</td>
            <td>RUNS DRY</td>
          </tr>
          <tr>
            <td>46</td>
            <td>
              Repetitive phrase often heard before "What have we here?" (4 4 4;
              7)
            </td>
            <td>WELL WELL WELL</td>
          </tr>
          <tr>
            <td>47</td>
            <td>Came loose, as a spool of thread (7; 6)</td>
            <td>UNWOUND</td>
          </tr>
          <tr>
            <td>48</td>
            <td>Not humorous (7; 6)</td>
            <td>UNFUNNY</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx>{`
      .appendix-table td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
