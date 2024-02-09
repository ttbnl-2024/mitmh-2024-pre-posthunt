import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'duet';
const ANSWER = `A NIGHT AT THE OPERA`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>The puzzles used in this meta are:</p>
    <Table className="answers-table">
      <tbody>
        <tr>
          <td>A</td>
          <td>Revolting Developments</td>
          <td>BALIO TOWERS</td>
        </tr>
        <tr>
          <td>B</td>
          <td>We Are the Champions</td>
          <td>BRADLEY WIGGINS</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Where on Earth Is Carmina Suntigre?</td>
          <td>BAHAMIAN</td>
        </tr>
        <tr>
          <td>D</td>
          <td>Machines</td>
          <td>GEN Z</td>
        </tr>
        <tr>
          <td>E</td>
          <td>Modern Architecture</td>
          <td>FLAMEN DIALIS</td>
        </tr>
        <tr>
          <td>F</td>
          <td>Heaven for Everyone</td>
          <td>DEMOCRACY</td>
        </tr>
        <tr>
          <td>G</td>
          <td>Under Pressure</td>
          <td>WILLIAM LAMBERTON</td>
        </tr>
        <tr>
          <td>H</td>
          <td>Mercury (meta)</td>
          <td>CALL HIM FREDDIE</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Split the Difference</td>
          <td>CLAUDE BERRI</td>
        </tr>
        <tr>
          <td>J</td>
          <td>The Show Must Go On</td>
          <td>ELVIS</td>
        </tr>
        <tr>
          <td>K</td>
          <td>Field of Clovers</td>
          <td>WAR CASTLE FOUR-PACK</td>
        </tr>
        <tr>
          <td>L</td>
          <td>Sorry Not Sorry</td>
          <td>HALIMEDE</td>
        </tr>
        <tr>
          <td>M</td>
          <td>Subplutonean IHTFP Blues</td>
          <td>EDOUARD ROCHE</td>
        </tr>
        <tr>
          <td>N</td>
          <td>Body Language</td>
          <td>WHIRLAWAY</td>
        </tr>
        <tr>
          <td>O</td>
          <td>Another One Bites the Dust</td>
          <td>BENEDICT XVI</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We are given a video of Freddie and Hermes singing a song. They give
      various instructions ("transitions") on how to transform the answers that
      feed into this puzzle.
    </p>
    <p>
      <i>
        Note: 🦷 indicates the extracted string. Ignore the text formatting in
        the transitions for now.
      </i>
    </p>

    <Table className="transitions-table" noBorder={true}>
      <tbody>
        <tr>
          <td>1.</td>
          <td>
            🎤 FREDDIE: Remove everything but the meat away from two of your
            answers. Those two meats should rhyme. You should still have 15
            answers.
          </td>
          <td>
            G WILLIAM LAMBERTON
            <br />
            &nbsp;&nbsp; → LAMB
            <br />C BAHAMIAN → HAM
          </td>
        </tr>
        <tr>
          <td>2.</td>
          <td>
            ⚚ HERMES: Take an answer comprising two words of equal length{' '}
            <b>[, REVERSE THE ENTIRE ANSWER,]</b> and replace it with the final
            four letters of the first word, resulting in a Scrabble-legal—that
            is, from NWL2020—word.
          </td>
          <td>E FLAMEN DIALIS → LAID</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>
            ⚚ HERMES: <b>[TAKE AWAY BUT DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the first and last letters of the first word of the answer that,
            when spaces are ignored, contains the last name of a former San
            Francisco mayor.
          </td>
          <td>
            A BALIO TOWERS
            <br />
            &nbsp;&nbsp; → ALI TOWERS
          </td>
        </tr>
        <tr>
          <td>4.</td>
          <td>
            🎤 FREDDIE: Change the answer letter worth 10 points in Scrabble to
            its alphabetic predecessor.
          </td>
          <td>D GEN Z → GEN Y</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>
            🎤 FREDDIE: In some answers, the first and last letters can be
            combined to make symbols for elements on the periodic table. From
            the answer that leads to the lightest such element,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            those first and last letters (note that extraction does not
            inherently change the <i>answer</i> one extracts from).
          </td>
          <td>🦷 &lt;empty string&gt; → HE</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>
            ⚚ HERMES: For any more-than-four-letter answer, replace it with the
            leftmost Scrabble-legal four-letter word found <b>[BACKWARDS]</b>{' '}
            consecutively inside, ignoring spaces—assuming there is at least one
            such word—but when looking inside, make sure to ignore any
            four-letter words...
            <ol>
              <li>that start with a letter found in "typewriter",</li>
              <li>that are terms for lines used in pub games,</li>
              <li>that are citrus fruits,</li>
              <li>
                that are anagrams of the titles of any of the 50 longest-running
                Broadway shows,
              </li>
              <li>
                that contain—as a consecutive three-letter substring— a standard
                abbreviation for a secondary intercardinal direction, or
              </li>
              <li>
                that contain—as a consecutive two-letter substring—at least one
                abbreviation for an NFL position of a US{' '}
                <i>Dancing with the Stars</i> winner.
              </li>
            </ol>
          </td>
          <td>
            F DEMOCRACY → COME
            <br />I CLAUDE BERRI → DUAL
            <br />K WAR CASTLE FOUR-PACK
            <br />
            &nbsp;&nbsp; → CRAW
            <br />M EDOUARD ROCHE → CORD
          </td>
        </tr>
        <tr>
          <td>7.</td>
          <td>
            ⚚ HERMES: Some of the new answers formed in the last step have a
            consonant as their second letter where that consonant can be removed
            and leave a different Scrabble-legal word<b>[—</b>
            <i>
              <b>EXTRACT</b>
            </i>
            <b>
              {' '}
              THOSE LETTERS IN ALPHABETICAL ORDER AND DELETE THEM FROM THEIR
              WORDS]
            </b>
            .
          </td>
          <td>
            K CRAW → CAW
            <br />
            🦷 HE → HER
          </td>
        </tr>
        <tr>
          <td>8.</td>
          <td>
            🎤 FREDDIE: Take your answer with the most Scrabble-legal
            anagrams—breaking any ties by taking the longest such answer—and
            replace it with its Scrabble-legal anagram that comes last
            alphabetically.
          </td>
          <td>J ELVIS → VLEIS</td>
        </tr>
        <tr>
          <td>9.</td>
          <td>
            🎤 FREDDIE: Of the answers that are the names of people mentioned in
            the King James Bible, take the one that appears earliest in the
            Bible and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            its last letter.
          </td>
          <td>🦷 HER → HERM</td>
        </tr>
        <tr>
          <td>10.</td>
          <td>
            🎤 FREDDIE: For every word in which the last letter comes
            alphabetically immediately after its first letter, replace that last
            letter with the letter that comes next in the alphabet, wrapping
            around if necessary.
          </td>
          <td>M CORD → CORE</td>
        </tr>
        <tr>
          <td>11.</td>
          <td>
            ⚚ HERMES: Remove <b>[ALL EXCEPT]</b> the first word alphabetically
            from every multiple-word answer.
          </td>
          <td>
            A ALI TOWERS → ALI
            <br />B BRADLEY WIGGINS
            <br />
            &nbsp;&nbsp; → BRADLEY
            <br />D GEN Y → GEN
            <br />O BENEDICT XVI
            <br />
            &nbsp;&nbsp; → BENEDICT
            <br />H CALL HIM FREDDIE
            <br />
            &nbsp;&nbsp; → CALL
          </td>
        </tr>
        <tr>
          <td>12.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>{' '}
            the first vowel of the answer that appears in the name of a
            21st-century pope.
          </td>
          <td>🦷 HERM → HERME</td>
        </tr>
        <tr>
          <td>13.</td>
          <td>
            🎤 FREDDIE: Replace all but the last three letters of one answer
            with a single letter to produce something that hurts—then{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that new letter.
          </td>
          <td>
            M CORE → SORE
            <br />
            🦷 HERME → HERMES
          </td>
        </tr>
        <tr>
          <td>14.</td>
          <td>
            🎤 FREDDIE: Replace the name of every university to have had a
            first-ballot Baseball Hall of Fame member attend for exactly one
            school year with the city where the university is located.
          </td>
          <td>B BRADLEY → PEORIA</td>
        </tr>
        <tr>
          <td>15.</td>
          <td>
            🎤 FREDDIE: Now,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the last letter of the word that was first alphabetically before the
            previous two steps were performed.
          </td>
          <td>🦷 HERMES → HERMESI</td>
        </tr>
        <tr>
          <td>16.</td>
          <td>
            ⚚ HERMES: The letters in one of your multi-letter answer words
            appear in <b>[REVERSE]</b> order in another answer word, though not
            consecutively. Add a 1-point Scrabble letter to the front of the
            shorter of those two words to turn it into a new Scrabble-legal
            word.
          </td>
          <td>A ALI → TALI</td>
        </tr>
        <tr>
          <td>17.</td>
          <td>
            ⚚ HERMES: Change the last letter of a four-letter answer to L (from
            a different letter) to form a Scrabble-legal word. Then,{' '}
            <b>[DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>
            <b>[—INSTEAD, TAKE AWAY—]</b> the alphabetically last of L and the
            letter that you just replaced{' '}
            <b>
              [FROM ANOTHER ANSWER CONTAINING BOTH LETTERS, IN ORDER TO LEAVE A
              SCRABBLE-LEGAL THREE-LETTER WORD]
            </b>
            .
          </td>
          <td>
            A TALI → TALL
            <br />E LAID → AID
          </td>
        </tr>
        <tr>
          <td>18.</td>
          <td>
            ⚚ HERMES: Remove a letter from one of your words to produce the name
            of a <b>[RESOURCE THAT CAN BE PRODUCED BY]</b> playing <b>[A]</b>{' '}
            card <b>[IN SETTLERS OF CATAN]</b>. Also,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that letter.
          </td>
          <td>
            M SORE → ORE
            <br />
            🦷 HERMESI
            <br />
            &nbsp;&nbsp; → HERMESIS
          </td>
        </tr>
        <tr>
          <td>19.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>{' '}
            the only letter that appears in an answer before double letters.
          </td>
          <td>
            🦷 HERMESIS
            <br />
            &nbsp;&nbsp; → HERMESISA
          </td>
        </tr>
        <tr>
          <td>20.</td>
          <td>
            🎤 FREDDIE: Write the four-letter answers in lowercase and, for the
            answers for which the result is a new, Scrabble-legal word, flip the
            last letter, top to bottom—unless the result is the surname of a
            Nobel laureate.
          </td>
          <td>G LAMB → LAMP</td>
        </tr>
        <tr>
          <td>21.</td>
          <td>
            ⚚ HERMES: Drop the last letter of the four-letter light source—make
            sure <b>[NOT]</b> to{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the letter.
          </td>
          <td>G LAMB → LAM</td>
        </tr>
        <tr>
          <td>22.</td>
          <td>
            🎤 FREDDIE: Replace the middle letter with the last letter of every
            odd-length answer word where the result would be a new
            Scrabble-legal word with at least one vowel.
          </td>
          <td>E AID → ADD</td>
        </tr>
        <tr>
          <td>23.</td>
          <td>
            ⚚ HERMES: Of all the Roman numerals that begin answers, find the
            answer that begins with the letter representing the smallest number
            and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            its final consonant{' '}
            <b>[THAT APPEARS IN A PAIR OF ADJACENT CONSONANTS]</b>.
          </td>
          <td>
            🦷 HERMESISA
            <br />
            &nbsp;&nbsp; → HERMESISAL
          </td>
        </tr>
        <tr>
          <td>24.</td>
          <td>
            ⚚ HERMES: One of your answers that begins with a consonant is
            commonly used as an abbreviation. <b>[TAKE AWAY—DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the last and first letters, in that order.
          </td>
          <td>D GEN → E</td>
        </tr>
        <tr>
          <td>25.</td>
          <td>
            🎤 FREDDIE: Replace the first letter of one of your words with the
            letter two places earlier in the alphabet to form a new
            Scrabble-legal word. If more than one such replacement is possible,
            perform the replacement only on the alphabetically last option.
          </td>
          <td>C LAM → JAM</td>
        </tr>
        <tr>
          <td>26.</td>
          <td>
            🎤 FREDDIE: Replace any answers that begin with the two-letter
            postal abbreviation for a state that is the birthplace of exactly
            one US president with the last name of that president and, in
            chronological order of election, for each{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the letter that comes alphabetically after that name's middle
            letter.
          </td>
          <td>
            H CALL → NIXON
            <br />
            🦷 HERMESISAL
            <br />
            &nbsp;&nbsp; → HERMESISALY
          </td>
        </tr>
        <tr>
          <td>27.</td>
          <td>
            🎤 FREDDIE: Replace an answer that represents a number with the
            smallest natural number greater than it. Note that the result should
            end with double letters.
          </td>
          <td>D E → THREE</td>
        </tr>
        <tr>
          <td>28.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>
            , in alphabetical order, every answer letter that has two vowels
            immediately before it and two vowels immediately after it.
          </td>
          <td>
            🦷 HERMESISAYL
            <br />
            &nbsp;&nbsp; → HERMESISALYR
          </td>
        </tr>
        <tr>
          <td>29.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>
            , in alphabetical order, exactly one instance of every letter that
            appears twice consecutively in Scrabble-legal answers of length at
            least four—make sure to take only one copy of letters that occur
            this way in multiple answers.
          </td>
          <td>
            🦷 HERMESISAYLR
            <br />
            &nbsp;&nbsp; → HERMESISALYREL
          </td>
        </tr>
        <tr>
          <td>30.</td>
          <td>
            🎤 FREDDIE: For every four-letter answer whose initial letter
            appears later in the answer,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that initial letter, taking the resulting letters in alphabetical
            order.
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>31.</td>
          <td>
            ⚚ HERMES: Take the initial letter of the<b> [SECOND-TO-]</b>last
            word alphabetically and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the result of encoding the letter using ROT13.
          </td>
          <td>
            🦷 HERMESISAYLREL
            <br />
            &nbsp;&nbsp; → HERMESISALYRELI
          </td>
        </tr>
        <tr>
          <td>32.</td>
          <td>
            ⚚ HERMES: Replace an L with a new letter to produce a four-letter
            term associated with communication from an answer unrelated to
            communication; <b>[DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that letter.
          </td>
          <td>A TALL → TALK</td>
        </tr>
        <tr>
          <td>33.</td>
          <td>
            🎤 FREDDIE: Replace an interior vowel in an answer with a new letter
            in order to make a homophone of the answer;{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the letter you replaced.
          </td>
          <td>
            I DUAL → DUEL
            <br />
            🦷 HERMESISAYLRELI
            <br />
            &nbsp;&nbsp; → HERMESISALYRELIA
          </td>
        </tr>
        <tr>
          <td>34.</td>
          <td>
            🎤 FREDDIE: Finally, find all the answers that name a horse that
            came in first or second at a race in the Triple Crown of
            Thoroughbred Racing during a year in which one horse won all three
            races and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the fourth letter of the alphabetically last such answer.
          </td>
          <td>
            🦷 HERMESISAYLRELIA
            <br />
            &nbsp;&nbsp; → HERMESISALYRELIAR
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      We get the clue phrase <Clue>HERMES IS A LYRE LIAR</Clue>. This means
      that, whenever Hermes plays the lyre (annotated here as bolded, all caps
      text), his words should be ignored. We perform all the transitions again:
    </p>
    <Table className="transitions-table" noBorder={true}>
      <tbody>
        <tr>
          <td>1.</td>
          <td>
            🎤 FREDDIE: Remove everything but the meat away from two of your
            answers. Those two meats should rhyme. You should still have 15
            answers.
          </td>
          <td>
            G WILLIAM LAMBERTON
            <br />
            &nbsp;&nbsp; → LAMB
            <br />C BAHAMIAN → HAM
          </td>
        </tr>
        <tr>
          <td>2.</td>
          <td>
            ⚚ HERMES: Take an answer comprising two words of equal length{' '}
            <b>[, REVERSE THE ENTIRE ANSWER,]</b> and replace it with the final
            four letters of the first word, resulting in a Scrabble-legal—that
            is, from NWL2020—word.
          </td>
          <td>E FLAMEN DIALIS → AMEN</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>
            ⚚ HERMES: <b>[TAKE AWAY BUT DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the first and last letters of the first word of the answer that,
            when spaces are ignored, contains the last name of a former San
            Francisco mayor.
          </td>
          <td>🦷 &lt;empty string&gt; → BO</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>
            🎤 FREDDIE: Change the answer letter worth 10 points in Scrabble to
            its alphabetic predecessor.
          </td>
          <td>D GEN Z → GEN Y</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>
            🎤 FREDDIE: In some answers, the first and last letters can be
            combined to make symbols for elements on the periodic table. From
            the answer that leads to the lightest such element,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            those first and last letters (note that extraction does not
            inherently change the <i>answer</i> one extracts from).
          </td>
          <td>🦷 BO → BOHE</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>
            ⚚ HERMES: For any more-than-four-letter answer, replace it with the
            leftmost Scrabble-legal four-letter word found <b>[BACKWARDS]</b>{' '}
            consecutively inside, ignoring spaces—assuming there is at least one
            such word—but when looking inside, make sure to ignore any
            four-letter words...
            <ol>
              <li>that start with a letter found in "typewriter",</li>
              <li>that are terms for lines used in pub games,</li>
              <li>that are citrus fruits,</li>
              <li>
                that are anagrams of the titles of any of the 50 longest-running
                Broadway shows,
              </li>
              <li>
                that contain—as a consecutive three-letter substring— a standard
                abbreviation for a secondary intercardinal direction, or
              </li>
              <li>
                that contain—as a consecutive two-letter substring—at least one
                abbreviation for an NFL position of a US{' '}
                <i>Dancing with the Stars</i> winner.
              </li>
            </ol>
          </td>
          <td>
            B BRADLEY WIGGINS → BRAD
            <br />F DEMOCRACY → DEMO
            <br />I CLAUDE BERRI → LAUD
            <br />K WAR CASTLE FOUR-PACK
            <br />
            &nbsp;&nbsp; → FOUR
            <br />N WHIRLAWAY → AWAY
            <br />H CALL HIM FREDDIE → CALL
          </td>
        </tr>
        <tr>
          <td>7.</td>
          <td>
            ⚚ HERMES: Some of the new answers formed in the last step have a
            consonant as their second letter where that consonant can be removed
            and leave a different Scrabble-legal word<b>[—</b>
            <i>
              <b>EXTRACT</b>
            </i>
            <b>
              {' '}
              THOSE LETTERS IN ALPHABETICAL ORDER AND DELETE THEM FROM THEIR
              WORDS]
            </b>
            .
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>8.</td>
          <td>
            🎤 FREDDIE: Take your answer with the most Scrabble-legal
            anagrams—breaking any ties by taking the longest such answer—and
            replace it with its Scrabble-legal anagram that comes last
            alphabetically.
          </td>
          <td>J ELVIS → VLEIS</td>
        </tr>
        <tr>
          <td>9.</td>
          <td>
            🎤 FREDDIE: Of the answers that are the names of people mentioned in
            the King James Bible, take the one that appears earliest in the
            Bible and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            its last letter.
          </td>
          <td>🦷 BOHE → BOHEM</td>
        </tr>
        <tr>
          <td>10.</td>
          <td>
            🎤 FREDDIE: For every word in which the last letter comes
            alphabetically immediately after its first letter, replace that last
            letter with the letter that comes next in the alphabet, wrapping
            around if necessary.
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>11.</td>
          <td>
            ⚚ HERMES: Remove <b>[ALL EXCEPT]</b> the first word alphabetically
            from every multiple-word answer.
          </td>
          <td>
            A BALIO TOWERS → TOWERS
            <br />D GEN Y → Y<br />M EDOUARD ROCHE → ROCHE
            <br />O BENEDICT XVI → XVI
          </td>
        </tr>
        <tr>
          <td>12.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>{' '}
            the first vowel of the answer that appears in the name of a
            21st-century pope.
          </td>
          <td>🦷 BOHEM → BOHEMI</td>
        </tr>
        <tr>
          <td>13.</td>
          <td>
            🎤 FREDDIE: Replace all but the last three letters of one answer
            with a single letter to produce something that hurts—then{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that new letter.
          </td>
          <td>
            M ROCHE → ACHE
            <br />
            🦷 BOHEMI → BOHEMIA
          </td>
        </tr>
        <tr>
          <td>14.</td>
          <td>
            🎤 FREDDIE: Replace the name of every university to have had a
            first-ballot Baseball Hall of Fame member attend for exactly one
            school year with the city where the university is located.
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>15.</td>
          <td>
            🎤 FREDDIE: Now,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the last letter of the word that was first alphabetically before the
            previous two steps were performed.
          </td>
          <td>🦷 BOHEMIA → BOHEMIAN</td>
        </tr>
        <tr>
          <td>16.</td>
          <td>
            ⚚ HERMES: The letters in one of your multi-letter answer words
            appear in <b>[REVERSE]</b> order in another answer word, though not
            consecutively. Add a 1-point Scrabble letter to the front of the
            shorter of those two words to turn it into a new Scrabble-legal
            word.
          </td>
          <td>C HAM → SHAM</td>
        </tr>
        <tr>
          <td>17.</td>
          <td>
            ⚚ HERMES: Change the last letter of a four-letter answer to L (from
            a different letter) to form a Scrabble-legal word. Then,{' '}
            <b>[DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>
            <b>[—INSTEAD, TAKE AWAY—]</b> the alphabetically last of L and the
            letter that you just replaced{' '}
            <b>
              [FROM ANOTHER ANSWER CONTAINING BOTH LETTERS, IN ORDER TO LEAVE A
              SCRABBLE-LEGAL THREE-LETTER WORD]
            </b>
            .
          </td>
          <td>
            K FOUR → FOUL
            <br />
            🦷 BOHEMIAN → BOHEMIANR
          </td>
        </tr>
        <tr>
          <td>18.</td>
          <td>
            ⚚ HERMES: Remove a letter from one of your words to produce the name
            of a <b>[RESOURCE THAT CAN BE PRODUCED BY]</b> playing <b>[A]</b>{' '}
            card <b>[IN SETTLERS OF CATAN]</b>. Also,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that letter.
          </td>
          <td>
            M ACHE → ACE
            <br />
            🦷 BOHEMIANR
            <br />
            &nbsp;&nbsp; → BOHEMIANRH
          </td>
        </tr>
        <tr>
          <td>19.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>{' '}
            the only letter that appears in an answer before double letters.
          </td>
          <td>
            🦷 BOHEMIANRH
            <br />
            &nbsp;&nbsp; → BOHEMIANRHA
          </td>
        </tr>
        <tr>
          <td>20.</td>
          <td>
            🎤 FREDDIE: Write the four-letter answers in lowercase and, for the
            answers for which the result is a new, Scrabble-legal word, flip the
            last letter, top to bottom—unless the result is the surname of a
            Nobel laureate.
          </td>
          <td>G LAMB → LAMP</td>
        </tr>
        <tr>
          <td>21.</td>
          <td>
            ⚚ HERMES: Drop the last letter of the four-letter light source—make
            sure <b>[NOT]</b> to{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the letter.
          </td>
          <td>
            G LAMP → LAM
            <br />
            🦷 BOHEMIANRHA
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAP
          </td>
        </tr>
        <tr>
          <td>22.</td>
          <td>
            🎤 FREDDIE: Replace the middle letter with the last letter of every
            odd-length answer word where the result would be a new
            Scrabble-legal word with at least one vowel.
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>23.</td>
          <td>
            ⚚ HERMES: Of all the Roman numerals that begin answers, find the
            answer that begins with the letter representing the smallest number
            and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            its final consonant{' '}
            <b>[THAT APPEARS IN A PAIR OF ADJACENT CONSONANTS]</b>.
          </td>
          <td>
            🦷 BOHEMIANRHAP
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPS
          </td>
        </tr>
        <tr>
          <td>24.</td>
          <td>
            ⚚ HERMES: One of your answers that begins with a consonant is
            commonly used as an abbreviation. <b>[TAKE AWAY—DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the last and first letters, in that order.
          </td>
          <td>
            🦷 BOHEMIANRHAPS
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSOD
          </td>
        </tr>
        <tr>
          <td>25.</td>
          <td>
            🎤 FREDDIE: Replace the first letter of one of your words with the
            letter two places earlier in the alphabet to form a new
            Scrabble-legal word. If more than one such replacement is possible,
            perform the replacement only on the alphabetically last option.
          </td>
          <td>A TOWERS → ROWERS</td>
        </tr>
        <tr>
          <td>26.</td>
          <td>
            🎤 FREDDIE: Replace any answers that begin with the two-letter
            postal abbreviation for a state that is the birthplace of exactly
            one US president with the last name of that president and, in
            chronological order of election, for each{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the letter that comes alphabetically after that name's middle
            letter.
          </td>
          <td>
            H CALL → NIXON
            <br />
            🦷 BOHEMIANRHAPSOD
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSODY
          </td>
        </tr>
        <tr>
          <td>27.</td>
          <td>
            🎤 FREDDIE: Replace an answer that represents a number with the
            smallest natural number greater than it. Note that the result should
            end with double letters.
          </td>
          <td>O XVI → XVII</td>
        </tr>
        <tr>
          <td>28.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>
            , in alphabetical order, every answer letter that has two vowels
            immediately before it and two vowels immediately after it.
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>29.</td>
          <td>
            🎤 FREDDIE:{' '}
            <i>
              <b>Extract</b>
            </i>
            , in alphabetical order, exactly one instance of every letter that
            appears twice consecutively in Scrabble-legal answers of length at
            least four—make sure to take only one copy of letters that occur
            this way in multiple answers.
          </td>
          <td>(NO OPERATION)</td>
        </tr>
        <tr>
          <td>30.</td>
          <td>
            🎤 FREDDIE: For every four-letter answer whose initial letter
            appears later in the answer,{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that initial letter, taking the resulting letters in alphabetical
            order.
          </td>
          <td>
            🦷 BOHEMIANRHAPSODY
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSODYA
          </td>
        </tr>
        <tr>
          <td>31.</td>
          <td>
            ⚚ HERMES: Take the initial letter of the<b> [SECOND-TO-]</b>last
            word alphabetically and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the result of encoding the letter using ROT13.
          </td>
          <td>
            🦷 BOHEMIANRHAPSODYA
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSODYAL
          </td>
        </tr>
        <tr>
          <td>32.</td>
          <td>
            ⚚ HERMES: Replace an L with a new letter to produce a four-letter
            term associated with communication from an answer unrelated to
            communication; <b>[DON'T]</b>{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            that letter.
          </td>
          <td>
            I LAUD → BAUD
            <br />
            🦷 BOHEMIANRHAPSODYAL
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSODYALB
          </td>
        </tr>
        <tr>
          <td>33.</td>
          <td>
            🎤 FREDDIE: Replace an interior vowel in an answer with a new letter
            in order to make a homophone of the answer;{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the letter you replaced.
          </td>
          <td>
            K FOUL → FOWL
            <br />
            🦷 BOHEMIANRHAPSODYALB
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSODYALBU
          </td>
        </tr>
        <tr>
          <td>34.</td>
          <td>
            🎤 FREDDIE: Finally, find all the answers that name a horse that
            came in first or second at a race in the Triple Crown of
            Thoroughbred Racing during a year in which one horse won all three
            races and{' '}
            <i>
              <b>extract</b>
            </i>{' '}
            the fourth letter of the alphabetically last such answer.
          </td>
          <td>
            🦷 BOHEMIANRHAPSODYALBU
            <br />
            &nbsp;&nbsp; → BOHEMIANRHAPSODYALBUM
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      Thus the final clue is <Clue>BOHEMIAN RHAPSODY ALBUM</Clue>, from which we
      get the puzzle's answer, <Answerize>{ANSWER}</Answerize>.
    </p>

    <style jsx global>{`
      .answers-table td:nth-child(2n + 1),
      .transitions-table td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .transitions-table td:nth-child(3) {
        white-space: nowrap;
        border-left: 1px solid #888;
      }
      .transitions-table td {
        vertical-align: top;
        
      }
      .transitions-table td:nth-child(2), .transitions-table td:nth-child(3) {
        padding: 0em 1em 1em 1em;
        padding
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
