import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'error-puzzle-disabled';
const ANSWER = `ERROL FLYNN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see a bunch of braille characters. However, they are gibberish. We are
      actually faced with a partial substitution cipher where not all letters
      are replaced. A letter is mapped to a different braille character, which
      is one "pip" off: for example, ⠞ (T) in plaintext is sometimes replaced by
      ⠟ in ciphertext, and is only ever replaced by ⠟. Deciphering the text, we
      find that each set of braille characters is a quote from a book by one of
      the provided authors, where the authors are given in alphabetical order by
      book:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Book</th>
          <th>Quote</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Barbara Park</td>
          <td><i>Junie B. Jones and a Little Monkey Business</i></td>
          <td>Then Mrs. confiscated my shiny glitter jar.</td>
        </tr>
        <tr>
          <td>Scott O'Dell</td>
          <td><i>Island of the Blue Dolphins</i></td>
          <td>
            More than anything, it was the blue dolphins that took me back home.
          </td>
        </tr>
        <tr>
          <td>John Grisham</td>
          <td><i>The Whistler</i></td>
          <td>Hatred of McDover. And money.</td>
        </tr>
        <tr>
          <td>Thomas E Wood</td>
          <td><i>The Politically Incorrect Guide to American History</i></td>
          <td>No wonder historians loathe Harding and Coolidge</td>
        </tr>
        <tr>
          <td>Diana Gabaldon</td>
          <td><i>Drums of Autumn</i></td>
          <td>"Testosterone poisoning," I said, with a shrug. </td>
        </tr>
        <tr>
          <td>Mark Manson</td>
          <td><i>The Subtle Art of Not Giving a Fuck</i></td>
          <td>In fact, we're born giving way too many fucks.</td>
        </tr>
        <tr>
          <td>Douglas Adams</td>
          <td><i>The Hitchhiker's Guide to the Galaxy</i></td>
          <td>"Forty-two," said Deep Thought</td>
        </tr>
        <tr>
          <td>J. K. Rowling</td>
          <td><i>Harry Potter and the Half-Blood Prince</i></td>
          <td>You dare use my own spells against me, Potter?</td>
        </tr>
        <tr>
          <td>Brit Bennett</td>
          <td><i>The Vanishing Half</i></td>
          <td>A town always looked different once you'd returned</td>
        </tr>
        <tr>
          <td>Rick Riordan</td>
          <td><i>The House of Hades</i></td>
          <td>Personally, I'm trying to avoid lots of death</td>
        </tr>
        <tr>
          <td>Megan O'Russell</td>
          <td><i>How I Magically Messed Up My Life in Four Freakin' Days</i></td>
          <td>So burning your way into magic it is</td>
        </tr>
        <tr>
          <td>Gary D. Schmidt</td>
          <td><i>The Wednesday Wars</i></td>
          <td>Because let me tell you, it was a happy ending.</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We then notice that the quotes are provided in 3 rows of (nearly) equal
      length, with the last row being potentially one shorter. The lengths are
      even, which clues us to read this as braille where a typo is a pip. This
      yields the cluephrase{' '}
      <Monospace>
        PLEASE VOLUNTEER EACH INITIAL SILENT LETTER THAT EXISTS AMONG QUOTED
        BOOK TITLES
      </Monospace>
      . Each book title has (at least) one word with a silent letter; taking the
      first such word and silent letter:
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Book</th>
          <th>Word</th>
          <th>Silent Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i>Junie B. Jones and a Little Monkey Business</i></td>
          <td>Business</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>Island of the Blue Dolphins</i></td>
          <td>Island</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The Whistler</i></td>
          <td>Whistler</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The Politically Incorrect Guide to American History</i></td>
          <td>Politically</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>Drums of Autumn</i></td>
          <td>Autumn</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The Subtle Art of Not Giving a Fuck</i></td>
          <td>Subtle</td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The Hitchhiker's Guide to the Galaxy</i></td>
          <td>Guide</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>Harry Potter and the Half-Blood Prince</i></td>
          <td>Half</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The Vanishing Half</i></td>
          <td>Half</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The House of Hades</i></td>
          <td>House</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>How I Magically Messed Up My Life in Four Freakin' Days</i></td>
          <td>Magically (or Freakin')</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td><i>The Wednesday Wars</i></td>
          <td>Wednesday</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This yields the cluephrase <Monospace>ISTANBUL LEAD</Monospace>.
      Submitting this yields the message "AS JAMES BRENNAN." This confirms the
      final answer is the actor who played the lead character James Brennan in
      the movie Istanbul, <Answerize>ERROL FLYNN</Answerize>.
    </p>
    <Appendix>
      <h3>Translation Table</h3>
      <Table id="appendix-1">
        <thead>
          <tr>
            <th>Letter</th>
            <th>Braille</th>
            <th>Typo'd</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠃</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>B</Monospace>
            </td>
            <td>
              <b>⠃</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>D</Monospace>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>F</Monospace>
            </td>
            <td>
              <b>⠋</b>
            </td>
            <td>
              <b>⠏</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>G</Monospace>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>H</Monospace>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>J</Monospace>
            </td>
            <td>
              <b>⠚</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>K</Monospace>
            </td>
            <td>
              <b>⠅</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td>
              <b>⠧</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>M</Monospace>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>
              <b>⠏</b>
            </td>
            <td>
              <b>⠋</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>Q</Monospace>
            </td>
            <td>[not used]</td>
            <td>[not used]</td>
          </tr>
          <tr>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠟</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>U</Monospace>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td>
              <b>⠅</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>V</Monospace>
            </td>
            <td>
              <b>⠧</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>W</Monospace>
            </td>
            <td>
              <b>⠺</b>
            </td>
            <td>
              <b>⠚</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>X</Monospace>
            </td>
            <td>[not used]</td>
            <td>[not used]</td>
          </tr>
          <tr>
            <td>
              <Monospace>Y</Monospace>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>Z</Monospace>
            </td>
            <td>[not used]</td>
            <td>[not used]</td>
          </tr>
        </tbody>
      </Table>
      <h3>Books</h3>
      <p><i>Junie B. Jones and a Little Monkey Business</i>: ⠏⠇⠑⠁⠎⠑</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠉</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠏</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠞</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>Island of the Blue Dolphins</i>: ⠧⠕⠇⠥⠝⠞⠑⠑⠗</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠉</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠃</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠥</b>
            </td>
            <td className="bg-red-500">
              <b>⠉</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠁</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td>
              <b>⠅</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠉</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The Whistler</i>: ⠑⠁⠉⠓</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠋</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠍</b>
            </td>
            <td className="bg-red-500">
              <b>⠍</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠧</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The Politically Incorrect Guide to American History</i>: ⠊⠝⠊⠞⠊⠁⠇</p>
      <Table>
        <tbody>
          <tr>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠙</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td className="bg-red-500">
              <b>⠍</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td className="bg-red-500">
              <b>⠙</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>Drums of Autumn</i>: ⠎⠊⠇⠑⠝⠞</p>
      <Table>
        <tbody>
          <tr>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠺</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠗</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠅</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The Subtle Art of Not Giving a Fuck</i>: ⠇⠑⠞⠞⠑⠗</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠏</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠺</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠁</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠇</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠙</b>
            </td>
            <td>
              <b>⠺</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠏</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td>
              <b>⠅</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The Hitchhiker's Guide to the Galaxy</i>: ⠞⠓⠁⠞</p>
      <Table>
        <tbody>
          <tr>
            <td>
              <b>⠋</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠺</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>Harry Potter and the Half-Blood Prince</i>: ⠑⠭⠊⠎⠞⠎</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠅</b>
            </td>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠅</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠙</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The Vanishing Half</i>: ⠁⠍⠕⠝⠛⠎⠞</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠅</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠏</b>
            </td>
            <td>
              <b>⠋</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠉</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠅</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The House of Hades</i>: ⠟⠥⠕⠞⠑⠙</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td className="bg-red-500">
              <b>⠉</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠙</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠇</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠛</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠏</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠑</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>How I Magically Messed Up My Life in Four Freakin' Days</i>: ⠃⠕⠕⠅⠎</p>
      <Table>
        <tbody>
          <tr>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠁</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td className="bg-red-500">
              <b>⠓</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠎</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td>
              <b>⠗</b>
            </td>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠕</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>⠍</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td className="bg-red-500">
              <b>⠙</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠍</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr className="mt-4" />
      <p><i>The Wednesday Wars</i>: ⠞⠊⠞⠇⠑⠎</p>
      <Table>
        <tbody>
          <tr>
            <td>
              <b>⠃</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠉</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠥</b>
            </td>
            <td className="bg-red-500">
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td>
              <b>⠍</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠟</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td className="bg-red-500">
              <b>⠧</b>
            </td>
            <td>
              <b>⠇</b>
            </td>
            <td className="bg-red-500">
              <b>⠝</b>
            </td>
            <td className="bg-red-500">
              <b>⠑</b>
            </td>
            <td className="bg-red-500">
              <b>⠅</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td>
              <b>⠞</b>
            </td>
            <td className="bg-red-500">
              <b>⠚</b>
            </td>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠎</b>
            </td>
          </tr>
          <tr>
            <td className="bg-red-500">
              <b>⠃</b>
            </td>
            <td>
              <b>⠓</b>
            </td>
            <td>
              <b>⠁</b>
            </td>
            <td>
              <b>⠏</b>
            </td>
            <td className="bg-red-500">
              <b>⠋</b>
            </td>
            <td>
              <b>⠽</b>
            </td>
            <td className="bg-red-500">
              <b>⠕</b>
            </td>
            <td>
              <b>⠝</b>
            </td>
            <td>
              <b>⠙</b>
            </td>
            <td>
              <b>⠊</b>
            </td>
            <td className="bg-red-500">
              <b>⠽</b>
            </td>
            <td>
              <b>⠛</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      #extraction td:nth-child(3),
      #appendix-1 td {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
