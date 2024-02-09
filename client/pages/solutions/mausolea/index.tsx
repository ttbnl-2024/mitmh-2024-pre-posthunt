import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'mausolea';
const ANSWER = `ADVERB`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>We are presented with two things:</p>
    <ul>
      <li>A list of 50 clues (with 5 clues bolded)</li>
      <li>
        A PDF with 2D representations of cubes. There are 25 of the cubes, and
        each side of the cube has a letter on it.
      </li>
    </ul>
    <p>
      As we answer the 50 clues, we find that the answers are in alphabetical
      order and each answer has five letters. The 50 clues can be divided into 5
      groups of 10, with each group of 10 forming a 5x5 interlocking crossword.
      We then notice that the 25 cubes in the PDF can be arranged so that each
      of the crosswords can be formed with one face of the corresponding cube.
      This can be done either by printing out the PDFs, cutting the cubes out
      and assembling them or through use of a spreadsheet.
    </p>
    <p>For example, the 25 cubes can be arranged to form:</p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can then rotate each individual cube, leaving it in the same position,
      to form:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Since the grids could be transposed, we take the bolded clues as 1-Across
      to fix an orientation.
    </p>
    <p>
      We can continue rotating the cubes, forming 5 different 5x5 grids in
      total. The last face, read in order, spells out{' '}
      <Monospace>SQUAREDLE DOT APP SLASH MITMH</Monospace>. We then go to{' '}
      <a href="https://squaredle.app/mitmh">https://squaredle.app/mitmh</a>,
      which is a special variant of the Squaredle word game. Squaredle is a
      Wordle-ish online game that doesn't really share much with Wordle other
      than the name; it's more akin to the classic game Boggle.
    </p>
    <p>After a brief tutorial, we are presented with a 5x5 grid:</p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can find words, either by typing them in or by drawing them with the
      mouse. An accounting of how many words of each length is available on the
      left side, along with 6 "clues" at the top left of the screen.
    </p>
    <p>
      As we find words in the Squaredle puzzle, 6 of the words that we find are
      listed as "clues". These words all trace a number when found in the
      puzzle.
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>ALLY</Monospace>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            <Monospace>DIVA</Monospace>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            <Monospace>EVADES</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <Monospace>FEMALE</Monospace>
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <Monospace>POROUS</Monospace>
          </td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            <Monospace>SUBMIT</Monospace>
          </td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Indexing the traced number into each clue word (in alphabetical order)
      yields the answer <Answerize>ADVERB</Answerize>.
    </p>
    <p>
      (Note that it is not necessary to find all the words in the Squaredle, but
      it might be fun)
    </p>
    <AuthorsNotes>
      <p>
        Like much of the world, I regularly played Wordle for quite a bit. I
        gave up on Wordle after a while because I stopped finding it interesting
        or challenging. I tried many of the Wordle-inspired games but Squaredle
        was the only one I consistently enjoyed. I thought it would be fun to
        use that as the center of a Hunt puzzle. I thought that making Boggle-y
        word cubes was a fun way to set up the Squaredle link. We looked at
        making and providing physical cubes (dice) but weren't able to make that
        happen due to cost.
      </p>
    </AuthorsNotes>
    <Appendix>
      <h3>Bonus Word of the Day</h3>
      <p>
        Squaredle also has the concept of a "bonus word of the day", which is
        usually a less common word with an unusual definition. Entering in the
        bonus word of the day brings up a popup with information about the word.{' '}
      </p>
      <p>
        The bonus word of the day for this Squaredle is{' '}
        <Monospace>MAUSOLEA</Monospace>, which is also the title of the puzzle.
        Entering the bonus word of the day gives a popup that says:
      </p>
      <blockquote className="pl-3 border-l-2">
        <p>mausolea</p>
        <p>
          plural noun: mausolea. a building, especially a large and stately one,
          housing a tomb or tombs.
        </p>
        <p>
          MAUSOLEA is also the title of a 2024 MIT Mystery Hunt puzzle, which
          hopefully you already knew!{' '}
        </p>
        <p>
          We have provided you with a number of clues to help you solve this
          puzzle.
        </p>
      </blockquote>
      <p>
        The text referencing a "number of clues" is intended to clue the fact
        that each clue word traces a numeral.
      </p>
      <h3>Clue Answers</h3>
      <Table className="my-2">
        <thead>
          <tr>
            <th>Cube / Entry</th>
            <th>Clue</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2/4D</td>
            <td>Played one's part</td>
            <td>
              <Monospace>ACTED</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/3A</td>
            <td>Banded stone</td>
            <td>
              <Monospace>AGATE</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/2D</td>
            <td>Unit for rating chili</td>
            <td>
              <Monospace>ALARM</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/2A</td>
            <td>Defensive line?</td>
            <td>
              <Monospace>ALIBI</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/3A</td>
            <td>Welcoming word</td>
            <td>
              <Monospace>ALOHA</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/3A</td>
            <td>Italian violin maker</td>
            <td>
              <Monospace>AMATI</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/4A</td>
            <td>One might be heard in the underworld</td>
            <td>
              <Monospace>ARGOT</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/5D</td>
            <td>Subtle strain?</td>
            <td>
              <Monospace>DITTY</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/4D</td>
            <td>Massless volume</td>
            <td>
              <Monospace>EBOOK</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/5D</td>
            <td>Gloss over</td>
            <td>
              <Monospace>ELIDE</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/2A</td>
            <td>Born in the purple, say</td>
            <td>
              <Monospace>ELITE</Monospace>
            </td>
          </tr>
          <tr>
            <td>3/1D</td>
            <td>Island with an immigration museum</td>
            <td>
              <Monospace>ELLIS</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>3/1A</b>
            </td>
            <td>
              <b>Blow one's top, say</b>
            </td>
            <td>
              <b>
                <Monospace>ERUPT</Monospace>
              </b>
            </td>
          </tr>
          <tr>
            <td>5/4D</td>
            <td>Half of a big name in furniture</td>
            <td>
              <Monospace>ETHAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/2A</td>
            <td>"As such..."</td>
            <td>
              <Monospace>HENCE</Monospace>
            </td>
          </tr>
          <tr>
            <td>3/4A</td>
            <td>Half of a snow globe?</td>
            <td>
              <Monospace>IGLOO</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/3D</td>
            <td>Impossible to take seriously</td>
            <td>
              <Monospace>INANE</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/5D</td>
            <td>Yorkshire city</td>
            <td>
              <Monospace>LEEDS</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/4A</td>
            <td>Subtle shade</td>
            <td>
              <Monospace>LILAC</Monospace>
            </td>
          </tr>
          <tr>
            <td>3/2A</td>
            <td>One without social welfare?</td>
            <td>
              <Monospace>LONER</Monospace>
            </td>
          </tr>
          <tr>
            <td>3/3A</td>
            <td>Like finding a coin, in most contexts</td>
            <td>
              <Monospace>LUCKY</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/5A</td>
            <td>Stood for</td>
            <td>
              <Monospace>MEANT</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/5A</td>
            <td>One of the first coders?</td>
            <td>
              <Monospace>MORSE</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/2D</td>
            <td>Hop a-board?</td>
            <td>
              <Monospace>OLLIE</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/3D</td>
            <td>TV Studio sign</td>
            <td>
              <Monospace>ONAIR</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/1D</td>
            <td>___ monkey (primate thought to have inspired The Lorax)</td>
            <td>
              <Monospace>PATAS</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>4/1A</b>
            </td>
            <td>
              <b>Not dirt-y?</b>
            </td>
            <td>
              <b>
                <Monospace>PAVED</Monospace>
              </b>
            </td>
          </tr>
          <tr>
            <td>3/4D</td>
            <td>Relative of Earl Grey</td>
            <td>
              <Monospace>PEKOE</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/2A</td>
            <td>One of the colonies</td>
            <td>
              <Monospace>PENAL</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/4D</td>
            <td>
              $2.75 for pecan in Cuba? $3 for apple in Haiti? Those are the pie ___ of the Caribbean
            </td>
            <td>
              <Monospace>RATES</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/5D</td>
            <td>What one might do after getting hammered</td>
            <td>
              <Monospace>REACT</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/1D</td>
            <td>Sphere</td>
            <td>
              <Monospace>REALM</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/2D</td>
            <td>Born in the purple, say</td>
            <td>
              <Monospace>REGAL</Monospace>
            </td>
          </tr>
          <tr>
            <td>3/2D</td>
            <td>"That's awful," lightly</td>
            <td>
              <Monospace>ROUGH</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>5/1A</b>
            </td>
            <td>
              <b>Curiosity, for one</b>
            </td>
            <td>
              <b>
                <Monospace>ROVER</Monospace>
              </b>
            </td>
          </tr>
          <tr>
            <td>3/5A</td>
            <td>Polish</td>
            <td>
              <Monospace>SHEEN</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/5A</td>
            <td>Goes downhill</td>
            <td>
              <Monospace>SLEDS</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/5A</td>
            <td>Like a campfire made with wet wood</td>
            <td>
              <Monospace>SMOKY</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/1D</td>
            <td>Jerk</td>
            <td>
              <Monospace>SPASM</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/4A</td>
            <td>Watched secretly</td>
            <td>
              <Monospace>SPIED</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>1/1A</b>
            </td>
            <td>
              <b>Hoard</b>
            </td>
            <td>
              <b>
                <Monospace>STORE</Monospace>
              </b>
            </td>
          </tr>
          <tr>
            <td>4/3A</td>
            <td>Where to find the sun and moon</td>
            <td>
              <Monospace>TAROT</Monospace>
            </td>
          </tr>
          <tr>
            <td>1/2D</td>
            <td>A conductor might pick it up</td>
            <td>
              <Monospace>TEMPO</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/1D</td>
            <td>Leaves in the sink, perhaps</td>
            <td>
              <Monospace>THAWS</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>2/1A</b>
            </td>
            <td>
              <b>Balloon beginning</b>
            </td>
            <td>
              <b>
                <Monospace>TRIAL</Monospace>
              </b>
            </td>
          </tr>
          <tr>
            <td>3/5D</td>
            <td>Test, in a way</td>
            <td>
              <Monospace>TRYON</Monospace>
            </td>
          </tr>
          <tr>
            <td>3/3D</td>
            <td>Hades, to Athena</td>
            <td>
              <Monospace>UNCLE</Monospace>
            </td>
          </tr>
          <tr>
            <td>5/3D</td>
            <td>Chamber component</td>
            <td>
              <Monospace>VIOLA</Monospace>
            </td>
          </tr>
          <tr>
            <td>4/3D</td>
            <td>Sign of summer</td>
            <td>
              <Monospace>VIRGO</Monospace>
            </td>
          </tr>
          <tr>
            <td>2/4A</td>
            <td>Tapered off</td>
            <td>
              <Monospace>WANED</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Cube Grids</h3>
      <div className="space-y-3">
        <Table>
          <tbody>
            <tr>
              <td>
                <Monospace>S</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>P</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>N</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>M</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>S</Monospace>
              </td>
              <td>
                <Monospace>P</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>D</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>M</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>S</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>
                <Monospace>T</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>H</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>N</Monospace>
              </td>
              <td>
                <Monospace>C</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>G</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>W</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>N</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>D</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>S</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>D</Monospace>
              </td>
              <td>
                <Monospace>S</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>U</Monospace>
              </td>
              <td>
                <Monospace>P</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>N</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>U</Monospace>
              </td>
              <td>
                <Monospace>C</Monospace>
              </td>
              <td>
                <Monospace>K</Monospace>
              </td>
              <td>
                <Monospace>Y</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>I</Monospace>
              </td>
              <td>
                <Monospace>G</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>S</Monospace>
              </td>
              <td>
                <Monospace>H</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>N</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>
                <Monospace>P</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>V</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>D</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
              <td>
                <Monospace>B</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>T</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>G</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>S</Monospace>
              </td>
              <td>
                <Monospace>M</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>K</Monospace>
              </td>
              <td>
                <Monospace>Y</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>
                <Monospace>R</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>V</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>R</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>O</Monospace>
              </td>
              <td>
                <Monospace>H</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>I</Monospace>
              </td>
              <td>
                <Monospace>L</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>C</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>M</Monospace>
              </td>
              <td>
                <Monospace>E</Monospace>
              </td>
              <td>
                <Monospace>A</Monospace>
              </td>
              <td>
                <Monospace>N</Monospace>
              </td>
              <td>
                <Monospace>T</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Appendix>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);