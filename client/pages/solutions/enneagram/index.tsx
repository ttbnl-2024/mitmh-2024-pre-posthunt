import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'enneagram';
const ANSWER = `TENNESSEE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      In this game, we are presented with a series of "enneagrams", which are
      strings of 9 capitalized letters without spaces or punctuation. As we
      think of guesses for what the enneagrams may be cluing, we enter the
      answers into an input field where we immediately find out if they are
      right or not. As additional puzzles are solved, new puzzles are unlocked
      in batches of nine. There are nine batches total.
    </p>
    <p>See the appendix for solutions to individual enneagrams.</p>
    <p>
      The fact that the puzzles are arranged in sets of nine suggests that we
      may need to convert each set of nine into a new enneagram. Indeed, when we
      look at the first letter of the accepted answers in each row, they form
      sensible enneagrams. Once we have a few meta-enneagrams partially or
      totally completed, we might now notice that each meta-enneagram clues a
      number. This insight can help us fill in missing letters on the remaining
      meta-enneagrams, and determine the remaining numbers. Because two of the
      numbers is larger than the number of nonnagrams in this puzzle (81
      nonnagrams in this puzzle, while the largest answer is 97), we can rule
      out indexing back into the puzzle itself.
    </p>
    <p>
      Given that the puzzle is titled ENNEAGRAM, we may investigate whether
      there is a connection to the{' '}
      <a href="https://www.enneagraminstitute.com/type-descriptions">
        nine Enneagram types
      </a>
      . Indeed, one answer in each row matches the name of one of the nine
      types. The Enneagram types have a canonical 1&ndash;9 ordering, which suggests
      that we should reorder the rows using the enneagram numbers.
    </p>
    <p>
      After finishing level 81, we are given a celebratory message consisting of
      9 nine-letter words or phrases. When we read off the initial letters of
      these phrases, it says <Monospace>NOWSEEOCT</Monospace>. The page also has
      a link to the credits page. If we follow this link to the credits page, we
      notice an external link to the original OCTOGRAM game on which ENNEAGRAM
      is based. The page also mentions that this puzzle is a tribute to Jack
      Lance, who created the original. Furthermore, after completing level 81,
      the credits page newly displays the text, "
      <Monospace>PARTIALLY CREATEDIN ?????????</Monospace>", which suggests the
      final answer should be a nine-letter value that could sensibly fill in
      this set of blanks.
    </p>
    <p>
      If we have already played the original, we may know that it has over 97
      levels. If not, we might either try{' '}
      <a href="https://jacklance.github.io/octogram">playing it</a>, or looking
      up more about it. Because all but two of the indexes are under 30, we
      don't have to play into the original game very far to get information
      about most of the values. Alternately, we might look at the game's html
      file, or find{' '}
      <a href="https://github.com/JackLance/jacklance.github.io/blob/master/octogram.html">
        the game's source code on GitHub
      </a>
      . Any of these methods could allow us to obtain access to the full list of
      octogram puzzles.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Puzzles</th>
          <th>Enneagram Type</th>
          <th>Meta-ENNEAGRAM</th>
          <th>Explanation</th>
          <th>OCTOGRAM</th>
          <th>Initial</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>28-36</td>
          <td>
            1 - Reformer
            <br />
            (Puzzle 32)
          </td>
          <td>
            <Monospace>NEUTRALPH</Monospace>
          </td>
          <td>A neutral Ph is 7.0</td>
          <td>
            <Monospace>07 - </Monospace>
            <b>
              <Monospace>D</Monospace>
            </b>
            <Monospace>ERNEATH</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>55-63</td>
          <td>
            2 - Helper
            <br />
            (Puzzle 58)
          </td>
          <td>
            <Monospace>CASHWRECK</Monospace>
          </td>
          <td>
            <i>The Wreck of the Old 97</i> is a 1957 song by Johnny Cash
          </td>
          <td>
            <Monospace>97 - </Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>ARPIECE</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>37-45</td>
          <td>
            3 - Achiever
            <br />
            (Puzzle 38)
          </td>
          <td>
            <Monospace>HANDBONES</Monospace>
          </td>
          <td>There are 27 bones in the human hand</td>
          <td>
            <Monospace>27 - </Monospace>
            <b>
              <Monospace>K</Monospace>
            </b>
            <Monospace>NOTCELL</Monospace>
          </td>
          <td>
            <Monospace>K</Monospace>
          </td>
        </tr>
        <tr>
          <td>1-9</td>
          <td>
            4 - Individualist
            <br />
            (Puzzle 7)
          </td>
          <td>
            <Monospace>NINEXNINE</Monospace>
          </td>
          <td>Nine times nine is 81</td>
          <td>
            <Monospace>81 - </Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>CGASRNA</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>64-72</td>
          <td>
            5 - Investigator
            <br />
            (Puzzle 65)
          </td>
          <td>
            <Monospace>NIGELSAMP</Monospace>
          </td>
          <td>
            In the film <i>This is Spinal Tap</i>, the character Nigel Tufnel's
            amps "go to eleven"
          </td>
          <td>
            <Monospace>11 - </Monospace>
            <b>
              <Monospace>S</Monospace>
            </b>
            <Monospace>IXCUBED</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>19-27</td>
          <td>
            6 - Loyalist
            <br />
            (Puzzle 23)
          </td>
          <td>
            <Monospace>LONELYNUM</Monospace>
          </td>
          <td>
            "One is the loneliest number" is the opening line to a 1968 song by
            Harry Nillson
          </td>
          <td>
            <Monospace>01 - </Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
            <Monospace>YPEOKAY</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>73-81</td>
          <td>
            7 - Enthusiast
            <br />
            (Puzzle 73)
          </td>
          <td>
            <Monospace>EGYPTCODE</Monospace>
          </td>
          <td>Egypt's international calling code is +20</td>
          <td>
            <Monospace>20 - </Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>OFLGBTQ</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>10-18</td>
          <td>
            8 - Challenger
            <br />
            (Puzzle 15)
          </td>
          <td>
            <Monospace>OLDCICADA</Monospace>
          </td>
          <td>
            Periodical cicada broods emerge every 13 or 17 years, so an old
            cicada would be 17
          </td>
          <td>
            <Monospace>17 - </Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
            <Monospace>HEIOFIQ</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>46-54</td>
          <td>
            9 - Peacemaker
            <br />
            (Puzzle 49)
          </td>
          <td>
            <Monospace>LEAPDAYDD</Monospace>
          </td>
          <td>The 2-digit day portion of Leap Day's date (DD) is 29</td>
          <td>
            <Monospace>29 - </Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>ZPZWHAT</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      If we use the values obtained from the meta-enneagrams as references to
      puzzles in Octogram, we can read across the sorted first letters of each
      to find the clue-phrase <Monospace>DEKASTATE</Monospace>. The prefix
      "deka-" means "ten". So when we treat this cluephrase like an
      enneagram-style puzzle with a nine-letter answer, this suggests the
      puzzle's final answer of <Answerize>TENNESSEE</Answerize>, which also
      describes where the puzzle was partially created.
    </p>
    <Appendix>
      <Table id="appendix" className="mt-2">
        <thead>
          <tr>
            <th>#</th>
            <th>Enneagram</th>
            <th>Parsing</th>
            <th>Answer</th>
            <th>Initial</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Monospace>1</Monospace>
            </td>
            <td>
              <Monospace>ENTERNINE</Monospace>
            </td>
            <td>Enter "nine"</td>
            <td>NINE</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Follow the instructions</td>
          </tr>
          <tr>
            <td>
              <Monospace>2</Monospace>
            </td>
            <td>
              <Monospace>UNOUTLAWS</Monospace>
            </td>
            <td>Un-out-laws</td>
            <td>INLAWS</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>In (the opposite of out), followed by "LAWS"</td>
          </tr>
          <tr>
            <td>
              <Monospace>3</Monospace>
            </td>
            <td>
              <Monospace>FGHIJKMNO</Monospace>
            </td>
            <td>FGHIJK - MNO</td>
            <td>NOEL</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>The sequence is missing the letter L</td>
          </tr>
          <tr>
            <td>
              <Monospace>4</Monospace>
            </td>
            <td>
              <Monospace>EOFPEMDAS</Monospace>
            </td>
            <td>E of PEMDAS</td>
            <td>EXPONENTS</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>
              PEMDAS is Parentheses, Exponents, Multiplication &amp; Division,
              Addition &amp; Subtraction
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>5</Monospace>
            </td>
            <td>
              <Monospace>MORSEIOOI</Monospace>
            </td>
            <td>Morse IOOI</td>
            <td>X</td>
            <td>
              <Monospace>X</Monospace>
            </td>
            <td>
              Interpreting "I"s as dashes and "O"s as dots, "IOOI" is "X" in
              Morse code.
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>6</Monospace>
            </td>
            <td>
              <Monospace>TTTTTTTTT</Monospace>
            </td>
            <td>TTTTTTTTT</td>
            <td>NINETIES</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Nine Ts</td>
          </tr>
          <tr>
            <td>
              <b>7</b>
            </td>
            <td>
              <b>
                <Monospace>MELAZARUS</Monospace>
              </b>
            </td>
            <td>
              <b>M. E. Lazarus</b>
            </td>
            <td>
              <b>INDIVIDUALIST</b>
            </td>
            <td>
              <b>I</b>
            </td>
            <td>
              <b>
                Marx Edgeworth Lazarus was an American individualist anarchist
              </b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>8</Monospace>
            </td>
            <td>
              <Monospace>NEONARGON</Monospace>
            </td>
            <td>Neon Argon</td>
            <td>NEAR</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Ne Ar (chemical element symbols)</td>
          </tr>
          <tr>
            <td>
              <Monospace>9</Monospace>
            </td>
            <td>
              <Monospace>DISENACTS</Monospace>
            </td>
            <td>Dis-en-acts</td>
            <td>EXACTS</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>
              The prefix "ex-" (meaning "out of') is the opposite of the prefix
              "en-" (meaning "in")
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <Monospace>THEOOFMIT</Monospace>
            </td>
            <td>The O of MIT</td>
            <td>OF</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>
              In Massachussets Institute of Technology, the "O" word is "of"
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <Monospace>DEATHLIFE</Monospace>
            </td>
            <td>Death, Life</td>
            <td>LIFE AFTER DEATH</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>The word "life" after the word "death"</td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <Monospace>BOBBOTTOM</Monospace>
            </td>
            <td>"BOB" bottom</td>
            <td>DUD</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>Bottom half of the letters in the word "BOB"</td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <Monospace>ENXXXPTED</Monospace>
            </td>
            <td>EnXXXpted</td>
            <td>CRY</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>The missing letters in the word ENCRYPTED are CRY</td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <Monospace>IFROMMBTI</Monospace>
            </td>
            <td>I from MBTI</td>
            <td>INTROVERSION</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>In Myers Briggs typing, I stands for Introversion</td>
          </tr>
          <tr>
            <td>
              <b>15</b>
            </td>
            <td>
              <b>
                <Monospace>NASAWRECK</Monospace>
              </b>
            </td>
            <td>
              <b>NASA wreck</b>
            </td>
            <td>
              <b>CHALLENGER</b>
            </td>
            <td>
              <b>C</b>
            </td>
            <td>
              <b>
                The Space Shuttle Challenger was a NASA spacecraft that broke
                apart in 1986
              </b>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <Monospace>AGEBEAUTY</Monospace>
            </td>
            <td>Age beauty</td>
            <td>AGE BEFORE BEAUTY</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>Age is listed before beauty</td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <Monospace>ORORZILCH</Monospace>
            </td>
            <td>Or or zilch</td>
            <td>DOUBLE OR NOTHING</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>The word "OR" doubled, followed by slang for nothing</td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <Monospace>ALIFELIFE</Monospace>
            </td>
            <td>A life life</td>
            <td>A DOUBLE LIFE</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>"A", followed by "Life" doubled</td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <Monospace>JOOOOHNAG</Monospace>
            </td>
            <td>Joooohn Ag</td>
            <td>LONG JOHN SILVER</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>
              The name John is written extra long, followed by the chemical
              symbol for Silver.
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <Monospace>TOOOJOOOY</Monospace>
            </td>
            <td>ToOo JoOoY</td>
            <td>ODE TO JOY</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>TO JOY has been "o"d</td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              <Monospace>IXINNAILS</Monospace>
            </td>
            <td>IX in. nails</td>
            <td>NINE INCH NAILS</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>
              Treating "IX" as 9 in Roman numerals, and in as an abbreviation
              for inch.
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>
              <Monospace>FORMERUDE</Monospace>
            </td>
            <td>Former -ude</td>
            <td>EXUDE</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>"ex-" is a prefix meaning former</td>
          </tr>
          <tr>
            <td>
              <b>23</b>
            </td>
            <td>
              <b>
                <Monospace>PATRIOTVS</Monospace>
              </b>
            </td>
            <td>
              <b>Patriot vs. ...</b>
            </td>
            <td>
              <b>LOYALIST</b>
            </td>
            <td>
              <b>L</b>
            </td>
            <td>
              <b>
                In the American Revolutionary war, the opposite of a Patriot was
                a Loyalist
              </b>
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>
              <Monospace>FTFTFTJAB</Monospace>
            </td>
            <td>Ft ft ft jab</td>
            <td>YARDSTICK</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
            <td>Three feet in a yard, followed by a synonym for stick</td>
          </tr>
          <tr>
            <td>25</td>
            <td>
              <Monospace>ASCIIZERO</Monospace>
            </td>
            <td>ASCII zero</td>
            <td>NULL</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>The ASCII symbol corresponding to 0</td>
          </tr>
          <tr>
            <td>26</td>
            <td>
              <Monospace>HEMIBISON</Monospace>
            </td>
            <td>Hemi-bi-son</td>
            <td>UNISON</td>
            <td>
              <Monospace>U</Monospace>
            </td>
            <td>The prefix for one (half the prefix for two) then "SON"</td>
          </tr>
          <tr>
            <td>27</td>
            <td>
              <Monospace>MAIUTAHNE</Monospace>
            </td>
            <td>Mai- Utah -ne</td>
            <td>MUTE</td>
            <td>
              <Monospace>M</Monospace>
            </td>
            <td>M- UT -E. Postal code for Utah in postal code for Maine</td>
          </tr>
          <tr>
            <td>28</td>
            <td>
              <Monospace>KNOWSAYER</Monospace>
            </td>
            <td>Know Sayer</td>
            <td>NOSE HAIR</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Mad Gab</td>
          </tr>
          <tr>
            <td>29</td>
            <td>
              <Monospace>MNNNNNNNN</Monospace>
            </td>
            <td>M NNNNNNNN</td>
            <td>EMANATE</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>"M", N eight (times)</td>
          </tr>
          <tr>
            <td>30</td>
            <td>
              <Monospace>ONICIALLY</Monospace>
            </td>
            <td>On-icially</td>
            <td>UNOFFICIALLY</td>
            <td>
              <Monospace>U</Monospace>
            </td>
            <td>Un-off-icially</td>
          </tr>
          <tr>
            <td>31</td>
            <td>
              <Monospace>BROGUYFEL</Monospace>
            </td>
            <td>Bro Guy Fel-</td>
            <td>TWO AND A HALF MEN</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>
              We see two synonyms for Man, followed by half of the word Fellow,
              another synonym for man
            </td>
          </tr>
          <tr>
            <td>
              <b>32</b>
            </td>
            <td>
              <b>
                <Monospace>BULLINGER</Monospace>
              </b>
            </td>
            <td>
              <b>Bullinger</b>
            </td>
            <td>
              <b>REFORMER</b>
            </td>
            <td>
              <b>R</b>
            </td>
            <td>
              <b>Heinrich Bullinger was a Swiss reformer and theologian</b>
            </td>
          </tr>
          <tr>
            <td>33</td>
            <td>
              <Monospace>WILLAROSE</Monospace>
            </td>
            <td>Will a "Rose"</td>
            <td>A ROSE BY ANY OTHER NAME</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>A "Rose" by another name</td>
          </tr>
          <tr>
            <td>34</td>
            <td>
              <Monospace>ISLAAAAND</Monospace>
            </td>
            <td>Islaaaand</td>
            <td>LONG ISLAND</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>The word "Island", but spelled out long, (with extra "A"s)</td>
          </tr>
          <tr>
            <td>35</td>
            <td>
              <Monospace>APPENDING</Monospace>
            </td>
            <td>"App" ending</td>
            <td>P</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>The ending of the word "app" is the letter "p"</td>
          </tr>
          <tr>
            <td>36</td>
            <td>
              <Monospace>IBMBACKUP</Monospace>
            </td>
            <td>IBM backup</td>
            <td>HAL</td>
            <td>
              <Monospace>H</Monospace>
            </td>
            <td>The letters HAL appear one before IBM in the alphabet</td>
          </tr>
          <tr>
            <td>37</td>
            <td>
              <Monospace>HOTSTWICE</Monospace>
            </td>
            <td>HOTS twice</td>
            <td>HOTSHOTS</td>
            <td>
              <Monospace>H</Monospace>
            </td>
            <td>When writing HOTS twice it makes HOTSHOTS</td>
          </tr>
          <tr>
            <td>
              <b>38</b>
            </td>
            <td>
              <b>
                <Monospace>UMGCSZINE</Monospace>
              </b>
            </td>
            <td>
              <b>UMGC's 'zine</b>
            </td>
            <td>
              <b>ACHIEVER</b>
            </td>
            <td>
              <b>A</b>
            </td>
            <td>
              <b>University of Maryland Global Campus's magazine</b>
            </td>
          </tr>
          <tr>
            <td>39</td>
            <td>
              <Monospace>NIOITIIIF</Monospace>
            </td>
            <td>N i O i T i I i F</td>
            <td>NOTIFIED</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>NOTIF that has been "I"d</td>
          </tr>
          <tr>
            <td>40</td>
            <td>
              <Monospace>DOOSENIOR</Monospace>
            </td>
            <td>Doo-senior</td>
            <td>DOODAD</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>"DOO" senior suggests they are a "DOO" dad</td>
          </tr>
          <tr>
            <td>41</td>
            <td>
              <Monospace>TNINEATPM</Monospace>
            </td>
            <td>T-nine ATPM</td>
            <td>BURN</td>
            <td>
              <Monospace>B</Monospace>
            </td>
            <td>Using T-9 predictive text, "ATPM" spells "burn"</td>
          </tr>
          <tr>
            <td>42</td>
            <td>
              <Monospace>INKYBOUND</Monospace>
            </td>
            <td>IN-KY bound</td>
            <td>OHIO RIVER</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>
              The boundary between Indiana and Kentucky is the Ohio River.
            </td>
          </tr>
          <tr>
            <td>43</td>
            <td>
              <Monospace>AGAINNIRA</Monospace>
            </td>
            <td>"Aga" in "ni - - - ra"</td>
            <td>NIAGARA</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Insert "aga" in "ni - - - ra"</td>
          </tr>
          <tr>
            <td>44</td>
            <td>
              <Monospace>HURRXCANE</Monospace>
            </td>
            <td>HURRxCANE</td>
            <td>EYE OF THE HURRICANE</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>The missing letter in the word hurricane is "i"</td>
          </tr>
          <tr>
            <td>45</td>
            <td>
              <Monospace>TICCCKETS</Monospace>
            </td>
            <td>Tic- CC -kets</td>
            <td>SEASON TICKETS</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>"C"s in the word "tickets"</td>
          </tr>
          <tr>
            <td>46</td>
            <td>
              <Monospace>HUEYDEWEY</Monospace>
            </td>
            <td>Huey, Dewey, ...</td>
            <td>LOUIE</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>Donald Duck's nephews</td>
          </tr>
          <tr>
            <td>47</td>
            <td>
              <Monospace>IONSIGERS</Monospace>
            </td>
            <td>-ions -igers</td>
            <td>EARS</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Lions, tigers, and bears! Oh, my!</td>
          </tr>
          <tr>
            <td>48</td>
            <td>
              <Monospace>ADIEUGUNS</Monospace>
            </td>
            <td>Adieu guns</td>
            <td>A FAREWELL TO ARMS</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>A goodbye to weapons</td>
          </tr>
          <tr>
            <td>
              <b>49</b>
            </td>
            <td>
              <b>
                <Monospace>FWDEKLERK</Monospace>
              </b>
            </td>
            <td>
              <b>F. W. de Klerk</b>
            </td>
            <td>
              <b>PEACEMAKER</b>
            </td>
            <td>
              <b>P</b>
            </td>
            <td>
              <b>
                1993 Nobel Peace Prize recipient for anti-apartheid work in
                South Africa
              </b>
            </td>
          </tr>
          <tr>
            <td>50</td>
            <td>
              <Monospace>DIEANDDIE</Monospace>
            </td>
            <td>Die and die</td>
            <td>DICE</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>Plural of "die" is "dice"</td>
          </tr>
          <tr>
            <td>51</td>
            <td>
              <Monospace>ENOSTHROT</Monospace>
            </td>
            <td>E Nos Throt</td>
            <td>AREA</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>Ear, Nose, and Throat</td>
          </tr>
          <tr>
            <td>52</td>
            <td>
              <Monospace>OZPATHWAY</Monospace>
            </td>
            <td>Oz pathway</td>
            <td>YELLOW BRICK ROAD</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
            <td>The pathway in the land of Oz is the Yellow Brick Road</td>
          </tr>
          <tr>
            <td>53</td>
            <td>
              <Monospace>DRINKXSXS</Monospace>
            </td>
            <td>Drink XS XS</td>
            <td>DRINK TO EXCESS</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>The word "Drink" followed by two "XS"s</td>
          </tr>
          <tr>
            <td>54</td>
            <td>
              <Monospace>OFFTOLOGY</Monospace>
            </td>
            <td>Off-tology</td>
            <td>DEONTOLOGY</td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>de-on-tology</td>
          </tr>
          <tr>
            <td>55</td>
            <td>
              <Monospace>CLUNUNDER</Monospace>
            </td>
            <td>Cl un-under</td>
            <td>CLOVER</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>Cl, followed by over (the opposite of under)</td>
          </tr>
          <tr>
            <td>56</td>
            <td>
              <Monospace>ASHAVINGD</Monospace>
            </td>
            <td>AS having D</td>
            <td>ADS</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>The letters "AS", with the letter "D" inserted</td>
          </tr>
          <tr>
            <td>57</td>
            <td>
              <Monospace>NDFTHSTCK</Monospace>
            </td>
            <td>nd f th stck</td>
            <td>SHORT END OF THE STICK</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>
              The phrase "end of the stick" has been shortend, by removing the
              vowels.
            </td>
          </tr>
          <tr>
            <td>
              <b>58</b>
            </td>
            <td>
              <b>
                <Monospace>TCELLTYPE</Monospace>
              </b>
            </td>
            <td>
              <b>T cell type</b>
            </td>
            <td>
              <b>HELPER</b>
            </td>
            <td>
              <b>H</b>
            </td>
            <td>
              <b>One T cell type is the helper T cell</b>
            </td>
          </tr>
          <tr>
            <td>59</td>
            <td>
              <Monospace>WYOYRYLYD</Monospace>
            </td>
            <td>W y O y R y L y D</td>
            <td>WORLD-WIDE</td>
            <td>
              <Monospace>W</Monospace>
            </td>
            <td>The word "WORLD", which has been "Y"'d</td>
          </tr>
          <tr>
            <td>60</td>
            <td>
              <Monospace>NATORANDJ</Monospace>
            </td>
            <td>Nato R and J</td>
            <td>ROMEO AND JULIET</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>Nato phonetic alphabet</td>
          </tr>
          <tr>
            <td>61</td>
            <td>
              <Monospace>OLDBFSLBS</Monospace>
            </td>
            <td>Old BF's lbs</td>
            <td>EXPOUNDS</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Ex pounds</td>
          </tr>
          <tr>
            <td>62</td>
            <td>
              <Monospace>SALTELBAT</Monospace>
            </td>
            <td>Salt elbaT</td>
            <td>CLAN</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>
              Cl aN (Chemical element symbol for table salt, but with sodium
              reversed and at the end)
            </td>
          </tr>
          <tr>
            <td>63</td>
            <td>
              <Monospace>TNOTINOTE</Monospace>
            </td>
            <td>T not I not E</td>
            <td>KNOTTED TIE</td>
            <td>
              <Monospace>K</Monospace>
            </td>
            <td>The word "TIE", which has been "NOT"d</td>
          </tr>
          <tr>
            <td>64</td>
            <td>
              <Monospace>VIPERGANG</Monospace>
            </td>
            <td>Viper gang</td>
            <td>NEST</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>The collective noun for vipers is a "nest"</td>
          </tr>
          <tr>
            <td>
              <b>65</b>
            </td>
            <td>
              <b>
                <Monospace>NANCYDREW</Monospace>
              </b>
            </td>
            <td>
              <b>Nancy Drew</b>
            </td>
            <td>
              <b>INVESTIGATOR</b>
            </td>
            <td>
              <b>I</b>
            </td>
            <td>
              <b>Nancy Drew is an investigator</b>
            </td>
          </tr>
          <tr>
            <td>66</td>
            <td>
              <Monospace>UTTERINGS</Monospace>
            </td>
            <td>"Utter" in "G - - - - - S"</td>
            <td>GUTTERS</td>
            <td>
              <Monospace>G</Monospace>
            </td>
            <td>Inserting "utter" in "GS", gives "gutters"</td>
          </tr>
          <tr>
            <td>67</td>
            <td>
              <Monospace>GAMESNAME</Monospace>
            </td>
            <td>Game's name</td>
            <td>ENNEAGRAM</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>The name of this game is Enneagram</td>
          </tr>
          <tr>
            <td>68</td>
            <td>
              <Monospace>TRANSLATO</Monospace>
            </td>
            <td>Translat_o_</td>
            <td>LOST IN TRANSLATION</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>
              A version of the word "translation" which has lost the word "in"
            </td>
          </tr>
          <tr>
            <td>69</td>
            <td>
              <Monospace>MLISCROWS</Monospace>
            </td>
            <td>MLIS crows</td>
            <td>SECOND DEGREE MURDER</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>
              Master of Library and Information Science (MLIS) is a second
              degree that one might acquire after a Bachelors. A group of crows
              is a murder
            </td>
          </tr>
          <tr>
            <td>70</td>
            <td>
              <Monospace>FROGSTIAS</Monospace>
            </td>
            <td>Frogs, tías</td>
            <td>ARMY ANTS</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>
              The collective noun for frogs is an "army", and "tías" is Spanish
              for "aunts"
            </td>
          </tr>
          <tr>
            <td>71</td>
            <td>
              <Monospace>ADONILADO</Monospace>
            </td>
            <td>Ado nil ado</td>
            <td>MUCH ADO ABOUT NOTHING</td>
            <td>
              <Monospace>M</Monospace>
            </td>
            <td>There are multiple "Ado"s about nil (nothing)</td>
          </tr>
          <tr>
            <td>72</td>
            <td>
              <Monospace>LIONSBIAS</Monospace>
            </td>
            <td>Lions, bias</td>
            <td>PRIDE AND PREJUDICE</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>
              The collective noun for lions is a "pride", and "bias" is a
              synonym for "prejudice"
            </td>
          </tr>
          <tr>
            <td>
              <b>73</b>
            </td>
            <td>
              <b>
                <Monospace>ALLOUTFAN</Monospace>
              </b>
            </td>
            <td>
              <b>All out fan</b>
            </td>
            <td>
              <b>ENTHUSIAST</b>
            </td>
            <td>
              <b>E</b>
            </td>
            <td>
              <b>A crossword-style clue for "enthusiast"</b>
            </td>
          </tr>
          <tr>
            <td>74</td>
            <td>
              <Monospace>GENUINEAN</Monospace>
            </td>
            <td>Genuine an</td>
            <td>GENUINE ARTICLE</td>
            <td>
              <Monospace>G</Monospace>
            </td>
            <td>Genuine followed by the article "an"</td>
          </tr>
          <tr>
            <td>75</td>
            <td>
              <Monospace>HEXFFFFOO</Monospace>
            </td>
            <td>Hex #FFFFOO</td>
            <td>YELLOW</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
            <td>The hex color #FFFF00 (treating "O' as 0) is yellow</td>
          </tr>
          <tr>
            <td>76</td>
            <td>
              <Monospace>DDXXXCDBR</Monospace>
            </td>
            <td>DDXXXCDBR</td>
            <td>PVC</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>Initials of Santa's reindeer, in song order</td>
          </tr>
          <tr>
            <td>77</td>
            <td>
              <Monospace>NININIPOP</Monospace>
            </td>
            <td>NI NI NI pop</td>
            <td>TRINIDAD</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>
              NI is repeated three times, making it TRI-NI. This is followed by
              POP. A synonym for POP is DAD, making TRI-NI-DAD
            </td>
          </tr>
          <tr>
            <td>78</td>
            <td>
              <Monospace>COMPARIJR</Monospace>
            </td>
            <td>Compari-jr.</td>
            <td>COMPARISON</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>The son ("junior") of "compari-"</td>
          </tr>
          <tr>
            <td>79</td>
            <td>
              <Monospace>SONNETCIX</Monospace>
            </td>
            <td>Sonnet CIX</td>
            <td>
              O! never say that I was false of heart,
              <br />
              Though absence seemed my flame to qualify,
              <br />
              As easy might I from my self depart
              <br />
              As from my soul which in thy breast doth lie:
              <br />
              That is my home of love: if I have ranged,
              <br />
              Like him that travels, I return again;
              <br />
              Just to the time, not with the time exchanged,
              <br />
              So that myself bring water for my stain.
              <br />
              Never believe though in my nature reigned,
              <br />
              All frailties that besiege all kinds of blood,
              <br />
              That it could so preposterously be stained,
              <br />
              To leave for nothing all thy sum of good;
              <br />
              For nothing this wide universe I call,
              <br />
              Save thou, my rose, in it thou art my all.
            </td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>The full text of Shakespeare's 109th sonnet</td>
          </tr>
          <tr>
            <td>80</td>
            <td>
              <Monospace>LEVELNINE</Monospace>
            </td>
            <td>Level nine</td>
            <td>
              <Monospace>DISENACTS</Monospace>
            </td>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>Level nine of this game is "DISENACTS"</td>
          </tr>
          <tr>
            <td>81</td>
            <td>
              <Monospace>ENTERTHIS</Monospace>
            </td>
            <td>Enter this</td>
            <td>ENTERTHIS</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Self-referential</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      #extraction td:nth-child(1),
      #extraction td:nth-child(6),
      #appendix td:nth-child(1),
      #appendix td:nth-child(2),
      #appendix td:nth-child(5) {
        text-align: center;
      }

      #appendix tbody tr:nth-child(18n + 1),
      #appendix tbody tr:nth-child(18n + 2),
      #appendix tbody tr:nth-child(18n + 3),
      #appendix tbody tr:nth-child(18n + 4),
      #appendix tbody tr:nth-child(18n + 5),
      #appendix tbody tr:nth-child(18n + 6),
      #appendix tbody tr:nth-child(18n + 7),
      #appendix tbody tr:nth-child(18n + 8),
      #appendix tbody tr:nth-child(18n + 9) {
        background-color: #f3f3f3;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
