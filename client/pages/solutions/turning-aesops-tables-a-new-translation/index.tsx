import { FC } from 'react';

import { Monospace } from 'components/copy';
import Link from 'components/link';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'turning-aesops-tables-a-new-translation';
const ANSWER = `MORAL`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      In this puzzle we see 11 short stories, each of which starts out similarly
      to one of Aesop's fables, before reaching some notable differences partway
      through. Of the given fables, we may be most familiar with{' '}
      <i>The Hare and the Tortoise</i>, which traditionally ends with the
      message "Slow and steady wins the race." In the altered version of the
      story, the Tortoise's victory is attributed in part to eating a salad with
      mayonnaise and chopped cabbage, a.k.a. "slaw". So in this revised story, a
      more appropriate message would be, "Slaw and steady wins the race," which
      is changed from the original by a single letter. We might also notice that
      the puzzle's title hints at this mechanism, since <i>Æsop's Tables</i> is
      only one letter away from <i>Æsop's Fables</i>. Reading through the other
      stories reveals we can form an appropriate message for each revised story
      in a similar fashion. Since Aesop's Fables were written so long ago, and
      there are many versions and translations of each fable, (including
      differing messages for the same fable) we might wonder if there is a
      single source of truth to use. Revisiting the puzzle's title, we might
      identify the connection to the 1912 printing{' '}
      <Link href="https://www.gutenberg.org/cache/epub/11339/pg11339-images.html">
        Aesop's Fables: A New Translation
      </Link>
      , which is freely available on Project Gutenberg. We might also discover
      this version of the stories by searching the first sentences of some of
      the fables, which are largely unaltered from the 1912 version.
    </p>
    <p>
      When we have all the replacement letters used to make the new messages, we
      can take them in order to spell out the phrase{' '}
      <Monospace>FABLE LESSON</Monospace>, leading to the final answer:{' '}
      <Answerize>MORAL</Answerize>.
    </p>
    <h2>Appendix</h2>
    <Table>
      <thead>
        <tr>
          <th>Fable</th>
          <th>
            Original Message
            <br />
            New Message
          </th>
          <th>
            Extracted Letter
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <i>The Lioness and The Vixen</i>
          </td>
          <td>
            <Monospace>QUALITY, NOT QUANTITY.</Monospace>
            <br />
            <Monospace>QUALI</Monospace>
            <b>
              <Monospace>F</Monospace>
            </b>
            <Monospace>Y, NOT QUANTITY.</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Hare and The Tortoise</i>
          </td>
          <td>
            <Monospace>SLOW AND STEADY WINS THE RACE.</Monospace>
            <br />
            <Monospace>SL</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>W AND STEADY WINS THE RACE.</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Fox and The Goat</i>
          </td>
          <td>
            <Monospace>LOOK BEFORE YOUR LEAP.</Monospace>
            <br />
            <b>
              <Monospace>B</Monospace>
            </b>
            <Monospace>OOK BEFORE YOUR LEAP.</Monospace>
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Ass and His Purchaser</i>
          </td>
          <td>
            <Monospace>A MAN IS KNOWN BY THE COMPANY HE KEEPS.</Monospace>
            <br />
            <Monospace>A MAN IS KNOWN BY THE COMPANY HE KE</Monospace>
            <b>
              <Monospace>L</Monospace>
            </b>
            <Monospace>PS.</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Serpent and The Eagle</i>
          </td>
          <td>
            <Monospace>ONE GOOD TURN DESERVES ANOTHER.</Monospace>
            <br />
            <Monospace>ONE GOOD T</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>RN DESERVES ANOTHER.</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Milkmaid and Her Pail</i>
          </td>
          <td>
            <Monospace>
              DO NOT COUNT YOUR CHICKENS BEFORE THEY ARE HATCHED.
            </Monospace>
            <br />
            <Monospace>DO NOT COUNT YOUR CHICKENS BEFORE THEY ARE </Monospace>
            <b>
              <Monospace>L</Monospace>
            </b>
            <Monospace>ATCHED.</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Mercury and The Woodman</i>
          </td>
          <td>
            <Monospace>HONESTY IS THE BEST POLICY.</Monospace>
            <br />
            <Monospace>HONESTY IS THE BE</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>T POLICY.</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Shepherd's Boy and The Wolf</i>
          </td>
          <td>
            <Monospace>
              YOU CANNOT BELIEVE A LIAR EVEN WHEN HE TELLS THE TRUTH.
            </Monospace>
            <br />
            <Monospace>YOU CANNOT BELIEVE A LIAR EVEN WHEN HE </Monospace>
            <b>
              <Monospace>S</Monospace>
            </b>
            <Monospace>ELLS THE TRUTH.</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Lion and The Wild Ass</i>
          </td>
          <td>
            <Monospace>MIGHT MAKES RIGHT.</Monospace>
            <br />
            <b>
              <Monospace>S</Monospace>
            </b>
            <Monospace>IGHT MAKES RIGHT.</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>Father and Sons</i>
          </td>
          <td>
            <Monospace>UNION IS STRENGTH.</Monospace>
            <br />
            <b>
              <Monospace>O</Monospace>
            </b>
            <Monospace>NION IS STRENGTH.</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <i>The Dog and The Wolf</i>
          </td>
          <td>
            <Monospace>ONCE BITTEN, TWICE SHY.</Monospace>
            <br />
            <Monospace>ONCE BITTEN, TWI</Monospace>
            <b>
              <Monospace>N</Monospace>
            </b>
            <Monospace>E SHY.</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <style jsx global>{`
      td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
