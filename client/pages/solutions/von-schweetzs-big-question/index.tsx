import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/von-schweetzs-big-question/0.png';
import image1 from 'assets/solutions/von-schweetzs-big-question/1.png';

const SLUG = 'von-schweetzs-big-question';
const ANSWER = `FILM SCRIPTS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      The puzzle starts with a grid of various princesses, one in each row. Each
      princess row has a point value, and several of the cells are marked with
      X. Additionally, each row in the table header has either a numeric value
      in it or an open textbox.
    </p>
    <p>
      Our first step is to figure out the value of each column that allows the
      correct total for each princess row.
    </p>
    <p>We can solve this logic puzzle as follows:</p>
    <ol>
      <li>
        We can say that Column C has to be 9 points because of Cinderella and
        Anna
      </li>
      <li>Columns I + J have to be equal 12 (Anna)</li>
      <li>
        That makes Column B equal to 8 (Elsa) and Column F equal to 4 (Belle)
      </li>
      <li>
        Because Column A is 3 points (given), that makes Column J 10 points
        (Rapunzel)
      </li>
      <li>Then Column I must equal 2 points (Belle)</li>
      <li>Now Column E is 12 points (Aurora)</li>
      <li>
        Columns D and H must equal 13 (Snow White). The only numbers that
        satisfy that requirement that have not been used (must be unique values
        per the given note) are 6 and 7.
      </li>
      <li>
        If H is 7 and D is 6, then Column G would be 10 (Ariel). This violates
        the instructions as Column J is already 10. Therefore Column H is 6 and
        Column D is 7, making Column G worth 11.
      </li>
    </ol>
    <p>The final table is below:</p>
    <Table>
      <thead>
        <tr>
          <th />
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Column Point Values</b>
          </td>
          <td>
            <b>3 </b>
          </td>
          <td>
            <b>8</b>
          </td>
          <td>
            <b>9</b>
          </td>
          <td>
            <b>7</b>
          </td>
          <td>
            <b>12</b>
          </td>
          <td>
            <b>4</b>
          </td>
          <td className="text-center">
            <b>11</b>
          </td>
          <td className="text-center">
            <b>6</b>
          </td>
          <td className="text-center">
            <b>2</b>
          </td>
          <td>
            <b>10</b>
          </td>
          <td className="text-center">
            <b>Points</b>
          </td>
        </tr>
        <tr>
          <td>Belle</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">4</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">16</td>
        </tr>
        <tr>
          <td>Elsa</td>
          <td className="text-center"></td>
          <td className="text-center">8</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">20</td>
        </tr>
        <tr>
          <td>Rapunzel</td>
          <td className="text-center">3</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">4</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td>10</td>
          <td className="text-center">17</td>
        </tr>
        <tr>
          <td>Jasmine</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">9</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">21</td>
        </tr>
        <tr>
          <td>Aurora</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">12</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td>10</td>
          <td className="text-center">22</td>
        </tr>
        <tr>
          <td>Snow White</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">7</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">6</td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">25</td>
        </tr>
        <tr>
          <td>Pocahontas</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">9</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">21</td>
        </tr>
        <tr>
          <td>Tiana</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">12</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td>10</td>
          <td className="text-center">22</td>
        </tr>
        <tr>
          <td>Cinderella</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">9</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">21</td>
        </tr>
        <tr>
          <td>Anna</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">12</td>
        </tr>
        <tr>
          <td>Ariel</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center">11</td>
          <td className="text-center">6</td>
          <td className="text-center">2</td>
          <td>10</td>
          <td className="text-center">29</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Submitting the correct point values for each column yields a new section
      on the puzzle page with the flavortext "Vanellope always wanted to be a
      princess, but these princesses always wanted to be racers. As they lined
      up, each racer was counting on a speedy resolution. Where did the
      princesses line up to race?", a text input box and a submit button. There
      is a note next to this button indicating that there is no penalty for
      wrong guesses on this text box / button.
    </p>
    <h3>Using the Sugar Rush Racer Images</h3>
    <p>
      Entering anything but an integer from 1 to 54 into the text input box and
      submitting yields an error message saying "Please enter an integer from 1
      to 54 to find your racer."
    </p>
    <p>
      Entering an integer from 1 to 54 will yield an image of a Sugar Rush racer
      (from the Sugar Rush game in the movie <i>Ralph Breaks the Internet</i>). The
      images are palette-ized&mdash;for example, this is the image for number 15:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      The above image would clue racer Taffyta Muttonfudge (pictured below, side
      by side with the palette-ized image as an example).
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      Each image has a specific number of lines, which is used as an index into
      the racer's name to extract one letter from each number entered. So
      entering a 15 would give the above image of{' '}
      <Monospace>TAFFYTA MUTTONFUDGE</Monospace> with 10 lines, yielding a T.
    </p>
    <p>
      If we try to find letters in order (starting with 1), the first 11 numbers
      (from 1 to 11) yield the phrase <Monospace>USE ROW TOTAL</Monospace>,
      indicating that we will need to use the total for each row in the next
      step.
    </p>
    <p>
      We then enter in the number of each row in the table of princesses and
      extract the letter for each image. Since Belle has a row value of 16, we
      find that image number 16 shows racer{' '}
      <Monospace>SNOWANNA RAINBEAU</Monospace> with 9 lines, yielding an R. The
      complete table is below:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Princess</th>
          <th>Row Total</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Belle</td>
          <td className="text-center">16</td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Elsa</td>
          <td className="text-center">20</td>
          <td className="text-center">
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Rapunzel</td>
          <td className="text-center">17</td>
          <td className="text-center">
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jasmine</td>
          <td className="text-center">21</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Aurora</td>
          <td className="text-center">22</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Snow White</td>
          <td className="text-center">25</td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>Pocahontas</td>
          <td className="text-center">21</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tiana</td>
          <td className="text-center">22</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Cinderella</td>
          <td className="text-center">21</td>
          <td className="text-center">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Anna</td>
          <td className="text-center">12</td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ariel</td>
          <td className="text-center">29</td>
          <td className="text-center">
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Entering <Monospace>ROYAL PALACE</Monospace> lets us know that we have
      unlocked the third part of the puzzle, with a 2nd table of fictional
      characters and additional flavor text saying: "Yes - these princesses all
      live in one royal palace or another. But there were a few questions when
      Vanellope von Schweetz said that SHE was a princess too. In fact, you
      might make an argument that some of these ladies are princesses too!"
    </p>
    <h3>The 2nd table</h3>
    <p>
      This second table includes other characters from movies, books, and
      television.
    </p>
    <Table>
      <style jsx>{`
        th:not(:nth-child(1)) {
          padding: 2px 4px;
          max-width: 60px;
          min-width: 60px;
          overflow-wrap: break-word;
          text-align: center;
        }
      `}</style>
      <thead>
        <tr>
          <th />
          <th className="text-center">()</th>
          <th className="text-center">(XX)</th>
          <th className="text-center">(XXXXXX)</th>
          <th className="text-center">(XX)</th>
          <th className="text-center">(XXXX)</th>
          <th className="text-center">(XXXXXXXX)</th>
          <th className="text-center">()</th>
          <th className="text-center">(XXXX)</th>
          <th className="text-center">(XXXXXXXXX)</th>
          <th className="text-center">(XXXXXXXX)</th>
          <th className="text-center">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center">
            <b>? !</b>
          </td>
          <td className="text-center">
            <b>?</b>
          </td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Buttercup (<i>The Princess Bride</i>) (XXXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Little Red Riding Hood (The Brothers Grimm) (XX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Dorothy (<i>The Wizard of Oz</i>) (XXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Princess Fiona (<i>Shrek</i>) (XXXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Eleven (<i>Stranger Things</i>) (XXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Vanellope von Schweetz (<i>Ralph Breaks the Internet</i>) (XX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Princess Leia (<i>Star Wars</i>) (XXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Mary Poppins (<i>Mary Poppins</i>) (XXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Princess Peach (Super Mario video games) (XXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Bella Swan (<i>Twilight</i>) (XXXXXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td>Ella (<i>Ella Enchanted</i>) (XXXX)</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
      </tbody>
    </Table>
    <p>
      The first thing that we have to do is identify the columns. Both the title
      and the flavor text reference Vanellope Von Schweetz, the heroine of the
      <i>Wreck-It-Ralph</i> movies. In the second movie (<i>Ralph Breaks the Internet</i>),{' '}
      <a href="https://youtu.be/ICUMGYHYBKY">
        Vanellope meets many of the original Disney princesses
      </a>
      .
    </p>
    <p>
      The princesses ask her a series of questions to determine if she is a
      "real" Disney princess.
    </p>
    <ul>
      <li>Do you have magic hair?</li>
      <li>Magic hands?</li>
      <li>Do animals talk to you?</li>
      <li>Were you poisoned?</li>
      <li>Cursed?</li>
      <li>Kidnapped or Enslaved?</li>
      <li>
        Did you make a deal with an underwater sea witch where she took your
        voice in exchange for a pair of human legs?
      </li>
      <li>Have you ever had True Love's kiss?</li>
      <li>Do you have daddy issues? (I don't even have a mom!)</li>
      <li>
        Do people assume all your problems got solved because a big strong man
        showed up?
      </li>
    </ul>
    <p>
      These, in the order they are asked, correspond with the columns in both
      tables. The princesses for each column in the first table are the ones
      that are shown when that question is asked in the Ralph Breaks the
      Internet movie clip. The 9th question has an ! to indicate that we're
      looking at the mother as well; specifically that one or more parents are
      not referenced in the property.
    </p>
    <ul>
      <li>Magic hair (3 points)</li>
      <li>Magic hands (8 points)</li>
      <li>Talks to animals (9 points)</li>
      <li>Poisoned (7 points)</li>
      <li>Cursed (12 points)</li>
      <li>Kidnapped or enslaved (4 points)</li>
      <li>Made a deal with an underwater sea witch (11 points)</li>
      <li>True love's kiss (6 points)</li>
      <li>Issues with parents (2 points)</li>
      <li>Big strong man (10 points)</li>
    </ul>
    <p>
      Now we can fill out the 2nd table. The Xs in parentheses in each column
      and row indicate how many entries are clued for each column and row, as a
      way to help disambiguate.
    </p>
    <Table>
      <style jsx>{`
        th:not(:nth-child(1)) {
          padding: 2px 4px;
          max-width: 60px;
          min-width: 60px;
          overflow-wrap: break-word;
          text-align: center;
        }
        td:not(:first-child) {
          text-align: center;
        }
      `}</style>
      <thead>
        <tr>
          <th />
          <th className="text-center">()</th>
          <th className="text-center">(XX)</th>
          <th className="text-center">(XXXXXX)</th>
          <th className="text-center">(XX)</th>
          <th className="text-center">(XXXX)</th>
          <th className="text-center">(XXXXXXXX)</th>
          <th className="text-center">()</th>
          <th className="text-center">(XXXX)</th>
          <th className="text-center">(XXXXXXXXX)</th>
          <th className="text-center">(XXXXXXXX)</th>
          <th className="text-center">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Buttercup (<i>The Princess Bride</i>) <b>(XXXXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td className="text-center">34</td>
        </tr>
        <tr>
          <td>
            Little Red Riding Hood <b>(XX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td className="text-center">19</td>
        </tr>
        <tr>
          <td>
            Dorothy (<i>The Wizard of Oz</i>) <b>(XXXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td className="text-center">22</td>
        </tr>
        <tr>
          <td>
            Princess Fiona (<i>Shrek</i>) <b>(XXXXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td className="text-center">41</td>
        </tr>
        <tr>
          <td>
            Eleven (<i>Stranger Things</i>) <b>(XXXX)</b>
          </td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td className="text-center">24</td>
        </tr>
        <tr>
          <td>
            Vanellope von Schweetz (<i>Ralph Breaks the Internet</i>) <b>(XX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td className="text-center">12</td>
        </tr>
        <tr>
          <td>
            Princess Leia (<i><i>Star Wars</i></i>) <b>(XXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td className="text-center">16</td>
        </tr>
        <tr>
          <td>
            Mary Poppins <b>(XXX)</b>
          </td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td className="text-center">19</td>
        </tr>
        <tr>
          <td>
            Princess Peach (Super Mario video games) <b>(XXXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td className="text-center">25</td>
        </tr>
        <tr>
          <td>
            Bella Swan (<i>Twilight</i>) <b>(XXXXXXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td className="text-center">50</td>
        </tr>
        <tr>
          <td>
            Ella (<i>Ella Enchanted</i>) <b>(XXXX)</b>
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td className="text-center">24</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Cross referencing the row values back to the Sugar Rush images and
      indexing as before yields
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row</th>
          <th>Total</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Buttercup (<i>The Princess Bride</i>) (XXXXX)</td>
          <td className="text-center">34</td>
          <td className="text-center">
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>Little Red Riding Hood (XX)</td>
          <td className="text-center">19</td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dorothy (<i>The Wizard of Oz</i>) (XXXX)</td>
          <td className="text-center">22</td>
          <td className="text-center">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Princess Fiona (<i>Shrek</i>) (XXXXX)</td>
          <td className="text-center">41</td>
          <td className="text-center">
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>Eleven (<i>Stranger Things</i>) (XXXX)</td>
          <td className="text-center">24</td>
          <td className="text-center">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Vanellope von Schweetz (<i>Ralph Breaks the Internet</i>) (XX)</td>
          <td className="text-center">12</td>
          <td className="text-center">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Princess Leia (<i>Star Wars</i>) (XXX)</td>
          <td className="text-center">16</td>
          <td className="text-center">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Mary Poppins (<i>Mary Poppins</i>) (XXX)</td>
          <td className="text-center">19</td>
          <td className="text-center">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Princess Peach (Super Mario video games) (XXXX)</td>
          <td className="text-center">25</td>
          <td className="text-center">
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bella Swan (<i>Twilight</i>) (XXXXXXX)</td>
          <td className="text-center">50</td>
          <td className="text-center">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ella (<i>Ella Enchanted</i>) (XXXX)</td>
          <td className="text-center">24</td>
          <td className="text-center">
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This yields the puzzle's answer, <Answerize>FILM SCRIPTS</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        One of the main inspirations for this puzzle was a mashup video of the
        above scene from <i>Ralph Breaks the Internet</i> and Kuzco from <i>The Emperor's New Groove</i>,
        attempting to "prove" that{' '}
        <a href="https://www.youtube.com/watch?v=uCMs0cVsC-Y">
          Kuzco was a Disney Princess
        </a>
        .
      </p>
      <p>
        Unfortunately, I couldn't work Kuzco himself into this puzzle because
        several of the things were misleading / not true (like his "magic"
        hair). So instead I decided it would still work with other princess
        candidates in movies, TV or books.
      </p>
      <p>A few notes on some of the "edge" cases.</p>
      <ul>
        <li>
          As much as I wanted to count Chewbacca as an "animal" in terms of
          talking to Princess Leia, I was overruled
        </li>
        <li>
          Buttercup from Princess Bride is cursed by the old woman who shouts at
          her in the dream sequence. Even though it was only a dream, I decided
          to count it
        </li>
        <li>
          You could certainly make the argument that Eleven's powers don't
          actually come from her hands, but when you point your arms/hands at
          someone and magic happens, I'm gonna count that as "magic hands" 🙂
        </li>
        <li>
          Bowser from the Mario video games is considered an "anthropomorphic
          turtle" aka an animal
        </li>
        <li>Also, Google says "werewolves are animals" (Bella Swan)</li>
      </ul>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
