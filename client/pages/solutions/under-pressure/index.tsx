import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'under-pressure';
const ANSWER = `WILLIAM LAMBERTON`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <MathJaxContext>
      <MathJax inline={true}>
        <h3>Part 1</h3>
        <p>
          In Part 1, we're given 23 computations involving words. Each
          mathematical symbol defines an operation on word(s), which we must
          deduce from context. Most operations output a valid English
          word/phrase/common abbreviation, and many require their input to be a
          valid word (or concatenated valid words). The operations are:
        </p>
        <Table className="part-1-1">
          <thead>
            <tr>
              <th>Operation</th>
              <th>What it does</th>
              <th>Input must be word(s)?</th>
              <th>Must output word?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CtCMath math={'a+b'} />
              </td>
              <td>
                Concatenate <CtCMath math={'a'} /> and <CtCMath math={'b'} />
              </td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'a-b'} />
              </td>
              <td>
                Remove the letters of <CtCMath math={'b'} /> interspersed
                within <CtCMath math={'a'} />, in order but not necessarily
                consecutive
              </td>
              <td>No</td>
              <td>Yes (after all additions/​subtractions are done)</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'a \\cdot b'} />
              </td>
              <td>
                Intersperse the letters of <CtCMath math={'a'} /> and{' '}
                <CtCMath math={'b'} />. The letters of each must be in order,
                but may be interspersed arbitrarily (not necessarily
                alternating) and start with either. Effectively the inverse of
                subtraction.
              </td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\dfrac{a}{b}'} />
              </td>
              <td>
                Word formed by the ending letters of <CtCMath math={'a'} />{' '}
                concatenated with the beginning letters of <CtCMath math={'b'} />
              </td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'a^k'} />
              </td>
              <td>Repeat <CtCMath math={'a'} />, <CtCMath math={'k'} /> times</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>That number in Roman numerals</td>
              <td>No</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Parentheses</td>
              <td>
                The usual. Extraneous (not necessary to define order of
                operations) parentheses indicate additional groupings that form
                intermediate words.
              </td>
              <td>No</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'-a'} />
              </td>
              <td>Reverse <CtCMath math={'a'} /></td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\dfrac{a}{k}'} />
              </td>
              <td>
                Take every <CtCMath math={'k'} /> letters
                of <CtCMath math={'a'} />, beginning with the first
              </td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\sqrt{a}'} />
              </td>
              <td>
                Where <CtCMath math={'a'} /> is from, the source ("root")
                of <CtCMath math={'a'} />. e.g.,{' '}
                <CtCMath math={'\\sqrt{AIDA} = VERDI'} /> and{' '}
                <CtCMath math={'\\sqrt{PENNYWISE} = IT'} />
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\nabla \\times a'} /> (curl)
              </td>
              <td>
                Rotate <CtCMath math={'a'} /> by any number of spaces. e.g.,
                INGRID → RIDING
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\nabla \\cdot a'} /> (divergence)
              </td>
              <td>
                Every letter in <CtCMath math={'a'} /> is either kept the
                same, or shifts forward or backward in the alphabet by one
                (wrapping around)
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\dfrac{d}{dX}(a)'} />
              </td>
              <td>
                Caesar shift forward by the A1Z26 value of the letter{' '}
                <CtCMath math={'X'} /> in the denominator
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\int a \\cdot dX'} />
              </td>
              <td>
                Replace every <CtCMath math={'X'} /> in{' '}
                <CtCMath math={'a'} /> by another letter. It can be a
                different letter for each <CtCMath math={'X'} />.
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\oint a \\cdot dX'} />
              </td>
              <td>
                Replace every <CtCMath math={'X'} /> in <CtCMath math={'a'} />{' '}
                by another letter or letters, and replace any other letters by{' '}
                <CtCMath math={'X'} />. e.g.,{' '}
                <CtCMath math={'\\oint MECHANIZE \\cdot dZ'} /> is MEZZANINE,
                replacing Z → N and both the C and H → Z.
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'\\lim a'} />
              </td>
              <td>
                Remove contiguous middle letters in <CtCMath math={'a'} />,
                leaving just the "limits" of <CtCMath math={'a'} />.
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'e^a'} />
              </td>
              <td>
                Word <CtCMath math={'b'} /> such that "<CtCMath math={'b'} /> to
                the <CtCMath math={'a'} />" is a phrase. e.g.,{' '}
                <CtCMath math={'e^{TEETH} = ARMED'} /> because "armed to the
                teeth" is a phrase.
              </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <CtCMath math={'i \\cdot a'} />
              </td>
              <td>Homophone of <CtCMath math={'a'} /></td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </Table>
        <p>
          Each equation gives a word matching one of the answers, whose length
          equals the number of points. The answer words are in alphabetical
          order, and match to the given clues. Full solutions can be found in
          the appendix.
        </p>

        <Table className="part-1-2">
          <thead>
            <tr>
              <th>Exercise #</th>
              <th>Points</th>
              <th>Answer</th>
              <th>Clue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>8</td>
              <td>
                <Monospace>ARGONAUT</Monospace>
              </td>
              <td>Fabled sailor</td>
            </tr>
            <tr>
              <td>2</td>
              <td>6</td>
              <td>
                <Monospace>ATONED</Monospace>
              </td>
              <td>Made reparations</td>
            </tr>
            <tr>
              <td>3</td>
              <td>7</td>
              <td>
                <Monospace>BLESSED</Monospace>
              </td>
              <td>Holy</td>
            </tr>
            <tr>
              <td>4</td>
              <td>9</td>
              <td>
                <Monospace>CONFUSION</Monospace>
              </td>
              <td>Bewilderment</td>
            </tr>
            <tr>
              <td>5</td>
              <td>7</td>
              <td>
                <Monospace>CROCHET</Monospace>
              </td>
              <td>Type of needlework</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>
                <Monospace>DISPELS</Monospace>
              </td>
              <td>Gets rid of, as rumors</td>
            </tr>
            <tr>
              <td>7</td>
              <td>9</td>
              <td>
                <Monospace>DIVERSION</Monospace>
              </td>
              <td>Amusement</td>
            </tr>
            <tr>
              <td>8</td>
              <td>10</td>
              <td>
                <Monospace>DROWSINESS</Monospace>
              </td>
              <td>Fatigue</td>
            </tr>
            <tr>
              <td>9</td>
              <td>8</td>
              <td>
                <Monospace>GRAVELLY</Monospace>
              </td>
              <td>Like a rough voice</td>
            </tr>
            <tr>
              <td>10</td>
              <td>10</td>
              <td>
                <Monospace>GRAVESTONE</Monospace>
              </td>
              <td>Sight in many churchyards</td>
            </tr>
            <tr>
              <td>11</td>
              <td>10</td>
              <td>
                <Monospace>HEARTBREAK</Monospace>
              </td>
              <td>Break-up feeling, often</td>
            </tr>
            <tr>
              <td>12</td>
              <td>6</td>
              <td>
                <Monospace>JAGUAR</Monospace>
              </td>
              <td>Cat or car</td>
            </tr>
            <tr>
              <td>13</td>
              <td>8</td>
              <td>
                <Monospace>LEVITATE</Monospace>
              </td>
              <td>2nd level wizard spell</td>
            </tr>
            <tr>
              <td>14</td>
              <td>8</td>
              <td>
                <Monospace>MARINATE</Monospace>
              </td>
              <td>Soak in seasoning</td>
            </tr>
            <tr>
              <td>15</td>
              <td>9</td>
              <td>
                <Monospace>MEZZANINE</Monospace>
              </td>
              <td>Lower level</td>
            </tr>
            <tr>
              <td>16</td>
              <td>7</td>
              <td>
                <Monospace>PLIABLE</Monospace>
              </td>
              <td>Bendy</td>
            </tr>
            <tr>
              <td>17</td>
              <td>8</td>
              <td>
                <Monospace>PREPARED</Monospace>
              </td>
              <td>Ready</td>
            </tr>
            <tr>
              <td>18</td>
              <td>8</td>
              <td>
                <Monospace>PRIMATES</Monospace>
              </td>
              <td>Apes etc.</td>
            </tr>
            <tr>
              <td>19</td>
              <td>10</td>
              <td>
                <Monospace>PUZZLEHUNT</Monospace>
              </td>
              <td>This event</td>
            </tr>
            <tr>
              <td>20</td>
              <td>8</td>
              <td>
                <Monospace>QUISLING</Monospace>
              </td>
              <td>Traitor</td>
            </tr>
            <tr>
              <td>21</td>
              <td>6</td>
              <td>
                <Monospace>SCURVY</Monospace>
              </td>
              <td>Lack of C on the high seas</td>
            </tr>
            <tr>
              <td>22</td>
              <td>8</td>
              <td>
                <Monospace>SLACKING</Monospace>
              </td>
              <td>Being lazy</td>
            </tr>
            <tr>
              <td>23</td>
              <td>9</td>
              <td>
                <Monospace>SPEARMINT</Monospace>
              </td>
              <td>Fresh-tasting flavor</td>
            </tr>
          </tbody>
        </Table>

        <h3 className="mt-2">Part 2</h3>
        <p>
          In Part 2, each problem (ordered alphabetically by first input word)
          gives several input words/phrases (in alphabetic order) by indexing
          into the answers from Part 1. The goal is to find an equation that
          relates these words, using the same operations as in Part 1. Every
          intermediate word in the sequence of operations, if there are any, is
          defined by one of the lemma names, which are in alphabetical order by
          answer. If both sides of the equation are nontrivial, they're both
          equal to some intermediate word, which is also clued.
        </p>
        <p>
          Each of these equations is a well-known mathematical
          equation/theorem/formula/etc. with variables replaced by the input
          words (different words for different occurrences of the same
          variable). Full solutions can be found in the appendix.
        </p>

        <Table className="part-2">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Math Thing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Monospace>PYTHAGOREAN</Monospace>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Monospace>PICK</Monospace>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Monospace>FOURIER</Monospace>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Monospace>DIVERGENCE</Monospace>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Monospace>L'HOPITAL</Monospace>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <Monospace>MAXWELL</Monospace>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <Monospace>QUADRATIC</Monospace>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <Monospace>STOKES</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>

        <p>
          The first word of the name of each equation (i.e., skipping "theorem",
          "formula", etc.) is indexed into in the final extraction (index i,j
          being the j-th letter in the name of the i-th theorem), and has its
          length checked in the "Check your answers" section (skipping ending
          apostrophe + S's, as these aren't fully consistent). The indices spell
          out <Monospace>CREATE EQUATION FOR YOUR TEAMS HANDLE</Monospace>.
          Sending HQ an equation that equals our team's name (some leeway is
          allowed) gives the answer, <Answerize>WILLIAM LAMBERTON</Answerize>.
        </p>
        <Appendix>
          <h3>Part 1 Solutions</h3>
          <p className="mt-10">
            <CtCMath math={'EXAMPLE = x_1 + x_2 - x_3'} display />
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> ALEXA, <CtCMath math={'x_2 ='} />{' '}
              SAMPLE, <CtCMath math={'x_3 ='} /> ALAS
            </li>
            <li>
              Removing the letters of ALAS interspersed in{' '}
              <CtCMath math={'x_1'} /> and <CtCMath math={'x_2'} /> in order
              gives ALEXA + SAMPLE - ALAS = EXAMPLE
            </li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={'DEMONSTRATION = x_1 + x_2 \\cdot x_3 - 501'}
              display
            />
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> DEMONS, <CtCMath math={'x_2 ='} />{' '}
              TRAIT, <CtCMath math={'x_3 ='} /> DION
            </li>
            <li>
              Interspersing letters gives <CtCMath math={'x_2 \\cdot x_3 ='} />{' '}
              TRADITION
            </li>
            <li>
              501 is DI in Roman numerals, so DEMONS + TRADITION - DI =
              DEMONSTRATION
            </li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_1=\\frac{\\sqrt{i\\cdot(x_1^2 - \\lim x_2) + x_3 + \\frac{x_4}{2}}}{x_5}'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_1 ='} /> ARGONAUT
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> PALO, <CtCMath math={'x_2 ='} />{' '}
              PAYPAL, <CtCMath math={'x_3 ='} /> SOLVER,{' '}
              <CtCMath math={'x_4 ='} /> SPOON, <CtCMath math={'x_5 ='} />{' '}
              NAUTILUS
            </li>
            <li>
              <CtCMath math={'\\lim x_2'} /> is PAPAL, so{' '}
              <CtCMath math={'PALO^2 - \\lim PAPAL'} /> is LOO, and multiplying
              by i gives LOU
            </li>
            <li>
              Then <CtCMath math={'\\sqrt{LOU + SOLVER + SON}'} /> is FARGO
            </li>
            <li>FARGO / NAUTILUS = ARGONAUT, which is "Fabled sailor"</li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_2 = \\int \\left(\\sqrt{(x_1 - 51 + 2000)^2} - x_2 \\right)\\cdot dS'
              }
              display
            />
          </p>
          <p className="mt-10">
            Solution: <CtCMath math={'y_{2} ='} /> ATONED
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} />
              BALI, <CtCMath math={'x_2 ='} />
              FLINT
            </li>
            <li>
              <CtCMath math={'x_1 - 51 + 2000'} /> is BALI - LI + MM = BAMM
            </li>
            <li>
              <CtCMath math={'\\sqrt{BAMMBAMM}'} /> is FLINTSTONES
            </li>
            <li>Subtracting FLINT leaves STONES</li>
            <li>
              <CtCMath math={'\\int \\cdot dS'} /> gives ATONED, which is "Made
              reparations"
            </li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_3 = \\nabla \\cdot \\left(\\lim \\left(x_1 + \\frac{x_2}{x_3}\\right)\\right) + \\frac{x_4}{2} - x_5'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{3} ='} /> BLESSED
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> ORNERY, <CtCMath math={'x_2 ='} />{' '}
              CLAM, <CtCMath math={'x_3 ='} /> ENTRY, <CtCMath math={'x_4 ='} />{' '}
              SPEED, <CtCMath math={'x_5 ='} /> PROM
            </li>
            <li>
              <CtCMath math={'\\frac{x_2}{x_3}'} /> is LAMENT, so the lim is
              ORNAMENT
            </li>
            <li>
              <CtCMath math={'\\nabla \\cdot'} /> is PROBLEMS
            </li>
            <li>PROBLEMS + SED - PROM = BLESSED, which is "Holy"</li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_4 = (\\nabla \\cdot (x_1 + x_2 - 50)) - x_3 + \\frac{d}{dT}(x_4)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{4} ='} /> CONFUSION
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> COMB, <CtCMath math={'x_2 ='} />{' '}
              LUSTED, <CtCMath math={'x_3 ='} /> CUSSED,{' '}
              <CtCMath math={'x_4 ='} /> LAYOUT
            </li>
            <li>
              <CtCMath math={'x_1 + x_2 - 50 ='} /> COMBUSTED
            </li>
            <li>
              <CtCMath math={'\\nabla \\cdot ='} /> CONCUSSED, so CONCUSSED -
              CUSSED= CON
            </li>
            <li>
              <CtCMath math={'\\frac{d}{dT} ='} /> FUSION
            </li>
            <li>CON + FUSION = CONFUSION, which is "Bewilderment"</li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_5 = \\int i \\cdot ((x_1 - x_2) + (x_3 - i \\cdot x_4)) \\cdot dP'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{5} ='} /> CROCHET
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> PARROT, <CtCMath math={'x_2 ='} /> ART,{' '}
              <CtCMath math={'x_3 ='} /> FORFEIT, <CtCMath math={'x_4 ='} />{' '}
              FOUR
            </li>
            <li>
              <CtCMath math={'x_1 - x_2'} /> = PRO
            </li>
            <li>
              <CtCMath math={'i \\cdot x_4'} /> = FORE, so{' '}
              <CtCMath math={'x_3 - i \\cdot x_4'} /> is FIT
            </li>
            <li>
              The sum is PROFIT, which becomes PROPHET when multiplied by i
            </li>
            <li>
              <CtCMath math={'\\int \\cdot dP'} /> is CROCHET, which is "Type of
              needlework".
            </li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_6 = x_1 \\cdot x_2 + \\left(-\\frac{d}{dQ}(x_3)\\right) - (x_4 - 500)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{6} ='} /> DISPELS
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> AVER, <CtCMath math={'x_2 ='} /> DISS,{' '}
              <CtCMath math={'x_3 ='} /> BUNNY, <CtCMath math={'x_4 ='} />{' '}
              ADVERSE
            </li>
            <li>
              <CtCMath math={'x_1 \\cdot x_2'} /> is ADVISERS,{' '}
              <CtCMath math={'\\frac{d}{dQ}(x_3)'} /> is SLEEP which reverses to
              PEELS, and <CtCMath math={'x_4 - 500'} /> is AVERSE
            </li>
            <li>
              ADVISERS + PEELS - AVERSE = DISPELS, which is "Gets rid of, as
              rumors"
            </li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_7 = \\nabla \\times \\sqrt{x_1 - (x_2 - x_3)} + x_4 - x_5'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{7} ='} /> DIVERSION
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> AMIDALA, <CtCMath math={'x_2 ='} />{' '}
              SENTIMENTAL, <CtCMath math={'x_3 ='} /> SENTIENT,{' '}
              <CtCMath math={'x_4 ='} /> BASTION, <CtCMath math={'x_5 ='} /> BAT
            </li>
            <li>
              <CtCMath math={'x_2 - x_3'} /> = MAL, so{' '}
              <CtCMath math={'x_1 - (x_2 - x_3)'} /> is AIDA, thus{' '}
              <CtCMath math={'\\sqrt{\\quad}'} /> is VERDI
            </li>
            <li>
              <CtCMath math={'\\nabla \\times'} /> is DIVER
            </li>
            <li>DIVER + BASTION - BAT = DIVERSION, which is "Amusement"</li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_8 = (-e^{x_1}) + \\frac{x_2}{2} + \\frac{i\\cdot x_3}{3}'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{8} ='} /> DROWSINESS
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> WISE, <CtCMath math={'x_2 ='} />{' '}
              SCIENCE, <CtCMath math={'x_3 ='} /> CENSOR
            </li>
            <li>
              <CtCMath math={'e^{x_1}'} /> is WORD, which reverses to DROW
            </li>
            <li>
              <CtCMath math={'i \\cdot x_3'} /> is SENSOR
            </li>
            <li>DROW + SINE + SS = DROWSINESS, which is "Fatigue"</li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_9 = \\int \\frac{x_1}{\\nabla \\cdot(x_2 - x_3)} \\cdot dT + x_4 - x_5'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{9} ='} /> GRAVELLY
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> SINATRA, <CtCMath math={'x_2 ='} />{' '}
              WETLANDS, <CtCMath math={'x_3 ='} /> TAN,{' '}
              <CtCMath math={'x_4 ='} /> BALCONY, <CtCMath math={'x_5 ='} />{' '}
              BACON
            </li>
            <li>
              <CtCMath math={'x_2 - x_3'} /> is WELDS, then{' '}
              <CtCMath math={'\\nabla \\cdot'} /> is VELDT
            </li>
            <li>
              Then SINATRA / VELDT is TRAVEL and{' '}
              <CtCMath math={'\\int \\cdot dT'} /> is GRAVEL
            </li>
            <li>
              GRAVEL + BALCONY- BACON = GRAVELLY which is "Like a rough voice"
            </li>
          </ul>
          <p className="mt-10">
            <CtCMath
              math={
                'y_{10} = \\left(\\int x_1 \\cdot dB\\right) + i \\cdot \\frac{d}{dT}(e^{x_2 - 1})'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{10} ='} /> GRAVESTONE
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> BRAVEST, <CtCMath math={'x_2 ='} />{' '}
              CHAISE
            </li>
            <li>
              <CtCMath math={'\\int x_1 \\cdot dB'} /> is GRAVEST
            </li>
            <li>
              <CtCMath math={'x_2 - 1'} /> is CHASE, so{' '}
              <CtCMath math={'e^{\\cdot}'} /> is CUT.
            </li>
            <li>
              Then <CtCMath math={'\\frac{d}{dT}'} /> is WON, so{' '}
              <CtCMath math={'i \\cdot'} /> is ONE
            </li>
            <li>
              GRAVEST + ONE = GRAVESTONE, which is "Sight in many churchyards"
            </li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{11} = \\nabla \\times (\\sqrt{x_1 - x_2} - x_3 + \\int x_4 \\cdot dL'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{11} ='} /> HEARTBREAK
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> ANCESTORS, <CtCMath math={'x_2 ='} />{' '}
              ACTOR, <CtCMath math={'x_3 ='} /> BOUND,{' '}
              <CtCMath math={'x_4 ='} /> BLEAK
            </li>
            <li>
              <CtCMath math={'x_1 - x_2'} /> is NESS, so{' '}
              <CtCMath math={'\\sqrt{\\quad}'} /> is EARTHBOUND
            </li>
            <li>
              Subtracting <CtCMath math={'x_3'} /> gives EARTH, and{' '}
              <CtCMath math={'\\nabla \\times'} /> is HEART
            </li>
            <li>
              <CtCMath math={'\\int x_4'} /> is BREAK
            </li>
            <li>
              Then HEART + BREAK = HEARTBREAK, which is "Break-up feeling,
              often"
            </li>
          </ul>
          <p>
            <CtCMath math={'y_{12} = \\frac{x_1}{x_2 \\cdot x_3}'} display />
          </p>
          <p>
            Solution: <CtCMath math={'y_{12} ='} /> JAGUAR
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> NINJA, <CtCMath math={'x_2 ='} /> UAE,{' '}
              <CtCMath math={'x_3 ='} /> GRANTED
            </li>
            <li>
              <CtCMath math={'x_2 \\cdot x_3'} /> is GUARANTEED
            </li>
            <li>NINJA / GUARANTEED = JAGUAR, which is "Cat or car"</li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{13} = \\oint\\left(x_1 + \\left(x_2^2 - (-e^{x_3})\\right)\\right) \\cdot dL'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{13} ='} /> LEVITATE
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> TELL, <CtCMath math={'x_2 ='} /> TEAL,{' '}
              <CtCMath math={'x_3 ='} /> PARTY
            </li>
            <li>
              <CtCMath math={'e^{x_3}'} /> is LATE, so{' '}
              <CtCMath math={'-e^{x_3}'} /> is ETAL
            </li>
            <li>
              <CtCMath math={'x^2'} /> - is TEALTEAL - ETAL = TALE, so the
              integrand is TELLTALE
            </li>
            <li>
              <CtCMath math={'\\oint \\cdot dL'} /> is then LEVITATE, which is
              "2nd level wizard spell"
            </li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{14} = \\left(\\left(\\oint (x_1 \\cdot dA) - \\lim x_2\\right)^2 - 1 - x_3 \\right) \\cdot (i \\cdot x_4)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{14} ='} /> MARINATE
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> MIGRAINES, <CtCMath math={'x_2 ='} />{' '}
              GAZEBOS, <CtCMath math={'x_3 ='} /> MIN,{' '}
              <CtCMath math={'x_4 ='} /> WRITE
            </li>
            <li>
              <CtCMath math={'\\oint'} /> is MAGAZINES,{' '}
              <CtCMath math={'\\lim'} /> is GAZES, and the difference is MAIN
            </li>
            <li>Then MAINMAIN - I - MIN = MANA</li>
            <li>
              <CtCMath math={'i \\cdot x_4'} /> is RITE, so MANA * RITE =
              MARINATE, which is "Soak in seasoning"
            </li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{15} = \\oint \\lim(x_1 + (i \\cdot (x_2 + x_3 + (x_4 - x_5))) \\cdot dZ'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{15} ='} /> MEZZANINE
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> MECCA, <CtCMath math={'x_2 ='} /> YOU,{' '}
              <CtCMath math={'x_3 ='} /> THIN, <CtCMath math={'x_4 ='} />{' '}
              KEYNOTES, <CtCMath math={'x_5 ='} /> KNOT
            </li>
            <li>
              <CtCMath math={'x_4 - x_5'} /> is EYES, so the entire inner sum is
              "YOU THIN EYES"
            </li>
            <li>Multiplying by i gives EUTHANIZE</li>
            <li>
              The input to the lim is MECCAEUTHANIZE, which yields MECHANIZE
            </li>
            <li>
              Then <CtCMath math={'\\oint'} /> is MEZZANINE, which is "Lower
              level"
            </li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{16} = x_1 \\cdot \\left( e^{\\nabla \\times \\left(x_2 + \\frac{x_3}{3}\\right)} - 1000\\right)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{16} ='} /> PLIABLE
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> PILE, <CtCMath math={'x_2 ='} /> LAUGH,{' '}
              <CtCMath math={'x_3 ='} /> TIMESERIES
            </li>
            <li>
              <CtCMath math={'x_2 + \\frac{x_3}{3}'} /> is LAUGHTERS, so{' '}
              <CtCMath math={'\\nabla \\times'} />
              is SLAUGHTER
            </li>
            <li>
              Then <CtCMath math={'e^{\\cdot}'} /> is LAMB, which becomes LAB
            </li>
            <li>PILE * LAB is PLIABLE, which is "Bendy"</li>
          </ul>
          <p>
            <CtCMath
              math={'y_{17} = (-x_1) + e^{\\oint x_2 \\cdot dE} - 1000'}
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{17} ='} /> PREPARED
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> PERP, <CtCMath math={'x_2 ='} /> TASTE
            </li>
            <li>
              <CtCMath math={'\\oint \\cdot dE'} /> is TEETH, so{' '}
              <CtCMath math={'e^{\\cdot}'} /> is ARMED
            </li>
            <li>Then PREP + ARMED - M = PREPARED, which is "Ready"</li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{18} = \\int \\sqrt{i \\cdot x_1} \\cdot \\left(\\nabla \\times \\left(\\frac{d}{dO}(i \\cdot x_2)\\right)\\right)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{18} ='} /> PRIMATES
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> SEIZER, <CtCMath math={'x_2 ='} /> DAYS
            </li>
            <li>
              <CtCMath math={'i \\cdot x_1'} /> is CAESAR, who is from ROME
            </li>
            <li>
              <CtCMath math={'i \\cdot x_2'} /> is DAZE, then d/dO = SPOT, so{' '}
              <CtCMath math={'\\nabla \\times'} />
              is POTS
            </li>
            <li>
              ROME * POTS = PROMOTES, so <CtCMath math={'\\int \\cdot dP'} /> is
              PRIMATES, which is "Apes etc."
            </li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{19} = \\nabla \\cdot x_1 + \\left(x_2 - \\frac{\\lim(x_3 + x_4)}{2}\\right)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{19} ='} /> PUZZLEHUNT
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> QUAYLE, <CtCMath math={'x_2 ='} />{' '}
              SHOULDNT, <CtCMath math={'x_3 ='} /> SCOTT,{' '}
              <CtCMath math={'x_4 ='} /> CRAWLED
            </li>
            <li>
              <CtCMath math={'\\nabla \\cdot x_1'} /> is PUZZLE.
            </li>
            <li>
              <CtCMath math={'\\lim'} />
              (SCOTT + CRAWLED) = SCOWLED, and{' '}
              <CtCMath math={'\\frac{SCOWLED}{2}'} /> is SOLD, so the
              subtraction gives HUNT.
            </li>
            <li>PUZZLE + HUNT gives PUZZLEHUNT, which is "This event"</li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{20} = \\frac{i \\cdot (-x_1 + e^{x_2})}{x_3 \\cdot x_4}'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{20} ='} /> QUISLING
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> RAM, <CtCMath math={'x_2 ='} /> CITY,{' '}
              <CtCMath math={'x_3 ='} /> GIST, <CtCMath math={'x_4 ='} /> LINUS
            </li>
            <li>
              <CtCMath math={'e^{x_2}'} /> is KEY, so -
              <CtCMath math={'x_1 + e^{x_2}'} /> is MARKEY, and the numerator is
              MARQUIS
            </li>
            <li>The denominator is GIST * LINUS = LINGUISTS</li>
            <li>MARQUIS / LINGUISTS is QUISLING, which is "Traitor"</li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{21} = \\left(x_1 - i \\cdot e^{\\frac{x_2}{x_3}}\\right) \\cdot x_4'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{21} ='} />{' '}
            SCURVY
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> CHARLEY, <CtCMath math={'x_2 ='} />{' '}
              KIMCHI, <CtCMath math={'x_3 ='} /> EFT, <CtCMath math={'x_4 ='} />{' '}
              SUV
            </li>
            <li>
              <CtCMath math={'\\frac{x_2}{x_3}'} /> is CHIEF, so{' '}
              <CtCMath math={'e^{\\cdot}'} /> is HAIL and multiplying by i gives
              HALE.
            </li>
            <li>
              Then the difference is CRY, and CRY * SUV = SCURVY, which is "Lack
              of C on the high seas"
            </li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{22} = 50 \\cdot \\left(x_1 + (\\nabla \\times x_2 - 501) - \\left(x_3 \\cdot \\frac{d}{dK}(\\nabla \\times x_4) - \\int x_5 \\cdot dH\\right)\\right)'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{22} ='} /> SLACKING
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> SPACEK, <CtCMath math={'x_2 ='} />{' '}
              INGRID, <CtCMath math={'x_3 ='} /> ASTER,{' '}
              <CtCMath math={'x_4 ='} /> SEAT, <CtCMath math={'x_5 ='} /> LASHED
            </li>
            <li>
              <CtCMath math={'\\nabla \\times x_2'} /> is RIDING, so subtracting
              DI gives RING
            </li>
            <li>
              <CtCMath math={'\\nabla \\times x_4'} /> is EATS, so{' '}
              <CtCMath math={'\\frac{d}{dK}(x_4)'} /> is PLED, and multiplying
              by <CtCMath math={'x_3'} /> gives PLASTERED
            </li>
            <li>
              <CtCMath math={'\\int x_5 \\cdot dH'} /> is LASTED, so PLASTERED -
              LASTED is PER
            </li>
            <li>SPACEK + RING - PER = SACKING</li>
            <li>Multiplying by L gives SLACKING, which is "Being lazy"</li>
          </ul>
          <p>
            <CtCMath
              math={
                'y_{23} = (x_1 - \\sqrt{\\nabla \\cdot (x_2 + x_3)}) \\cdot \\frac{x_4}{x_5}'
              }
              display
            />
          </p>
          <p>
            Solution: <CtCMath math={'y_{23} ='} /> SPEARMINT
          </p>
          <ul>
            <li>
              <CtCMath math={'x_1 ='} /> PERMIT, <CtCMath math={'x_2 ='} />{' '}
              PEONY, <CtCMath math={'x_3 ='} /> WIRE, <CtCMath math={'x_4 ='} />{' '}
              SALSA, <CtCMath math={'x_5 ='} /> INTEGERS
            </li>
            <li>
              <CtCMath math={'\\nabla \\cdot'} /> is PENNYWISE, so{' '}
              <CtCMath math={'\\sqrt{\\quad}'} /> is IT, and the subtraction
              yields PERM.
            </li>
            <li>
              <CtCMath math={'\\frac{x_4}{x_5}'} /> is SAINT.
            </li>
            <li>
              Then PERM * SAINT = SPEARMINT, which is "Fresh-tasting flavor"
            </li>
          </ul>
          <h3>Part 2 Solutions</h3>
          <p>
            <b>Problem 1:</b>
          </p>
          <ul>
            <li>The input words are ALKASELTZER, FIZZ, PLOP</li>
            <li>
              The equation is{' '}
              <CtCMath math={'\\sqrt{PLOP^2 + FIZZ^2} = ALKASELTZER'} display />{' '}
              since "plop plop fizz fizz" is a well-known advertising jingle
              from Alka-Seltzer
            </li>
            <li>This is the PYTHAGOREAN theorem</li>
          </ul>
          <p>
            <b>Problem 2:</b>
          </p>
          <ul>
            <li>The input words are ANGLE, CAIRN, CARNAGE</li>
            <li>
              CAIRN gives the first letters of CARNAGE after removing an I,
              while ANGLE/2 yields the last few letters of CARNAGE
            </li>
            <li>
              The equation is{' '}
              <CtCMath
                math={'CARNAGE = CAIRN + \\frac{ANGLE}{2} - 1'}
                display
              />
            </li>
            <li>This is PICK'S theorem</li>
          </ul>
          <p>
            <b>Problem 3:</b>
          </p>
          <ul>
            <li>The input words are BELAYED, LED, WARRED</li>
            <li>
              WARRED has a homophone of WARD, which is "Shield or division".
              This reverses to DRAW, which is "Tie". "BEAT to the draw" is a
              phrase, giving "Rhythm".
            </li>
            <li>
              BEAT * LED = BELATED, which is "Overdue". Finally{' '}
              <CtCMath math={'\\int \\cdot dT'} />
              gives BELAYED.
            </li>
            <li>
              The equation is{' '}
              <CtCMath
                math={
                  'BELAYED = \\int LED \\cdot e^{-i \\cdot WARRED} \\cdot dT'
                }
                display
              />
            </li>
            <li>This is the FOURIER transformation</li>
          </ul>
          <p>
            <b>Problem 4:</b>
          </p>
          <ul>
            <li>The input words are CIVETS, SIRENS</li>
            <li>
              Changing letters in CIVETS by ±1 gives DIVEST, which is
              "Dispossess". <CtCMath math={'\\int \\cdot dV'} /> yields DIREST,
              which is "Most serious"
            </li>
            <li>
              Contour-integrating <CtCMath math={'\\oint SIRENS \\cdot dS'} />{' '}
              also gives DIREST
            </li>
            <li>
              The equation is{' '}
              <CtCMath
                math={
                  '\\int \\nabla \\cdot CIVETS \\cdot dV = \\oint SIRENS \\cdot dS'
                }
                display
              />
            </li>
            <li>
              This is the DIVERGENCE theorem (also known as Gauss's theorem or
              Ostrogradsky's theorem, but the puzzle asks for the uncapitalized
              name).
            </li>
          </ul>
          <p>
            <b>Problem 5:</b>
          </p>
          <ul>
            <li>The input words are COHO, INTEGRANDS, LAMINATE, QING</li>
            <li>
              INTEGRANDS/LAMINATE = GRANDSLAM, which is "Tennis sweep". This has
              a lim of GLAM, which is "Ritz"
            </li>
            <li>
              <CtCMath math={'\\frac{d}{dX}(QING)'} /> = OGLE, which is "Leer",
              and <CtCMath math={'\\frac{d}{dx}(COHO)'} /> = AMFM, which is
              "Radio butt."
            </li>
            <li>
              OGLE/AMFM = GLEAM, which is "Sparkle", and its lim is GLAM again
            </li>
            <li>
              The equation is{' '}
              <CtCMath
                math={
                  '\\lim \\frac{INTEGRANDS}{LAMINATE} = \\lim \\frac{\\frac{d}{dx}(QING)}{\\frac{d}{dx}(COHO)}'
                }
                display
              />
            </li>
            <li>This is L'HOPITAL'S rule</li>
          </ul>
          <p>
            <b>Problem 6:</b>
          </p>
          <ul>
            <li>The input words are HAZY, TUBS</li>
            <li>Rotating TUBS yields STUB, which is "Ticket remainder"</li>
            <li>
              <CtCMath math={'\\frac{d}{dT}(HAZY)'} /> = BUTS, which is "No ifs,
              ands, or what", and negating this gives STUB.
            </li>
            <li>
              The equation is{' '}
              <CtCMath
                math={'\\nabla \\times TUBS = -\\frac{d}{dT}(HAZY)'}
                display
              />
            </li>
            <li>This is MAXWELL'S equation</li>
          </ul>
          <p>
            <b>Problem 7:</b>
          </p>
          <ul>
            <li>The input words are MAPS, SATE, VID, VOID</li>
            <li>
              <CtCMath math={'4 \\cdot VID'} /> = VIVID, which is "Bright".
              Subtracting VIVID from <CtCMath math={'VOID^2'} /> gives ODO,
              which is "Palindromic scifi character", who is from TREK, which is
              "Journey"
            </li>
            <li>Reversing MAPS gives SPAM, which is "Meat"</li>
            <li>
              The equation is{' '}
              <CtCMath
                math={'\\frac{-MAPS + \\sqrt{VOID^2 + 4 \\cdot VID}}{2} = SATE'}
                display
              />
            </li>
            <li>
              This is the QUADRATIC equation (for monic polynomials, positive
              square root)
            </li>
          </ul>
          <p>
            <b>Problem 8:</b>
          </p>
          <ul>
            <li>The input words are OVEN RACK, PASSOVER</li>
            <li>
              Rotating PASSOVER gives OVERPASS, which is "Bridge".{' '}
              <CtCMath math={'\\int \\cdot dS'} /> gives OVERPACK, which is
              "Bring too much stuff"
            </li>
            <li>
              Similarly <CtCMath math={'\\oint OVENRACK \\cdot dR'} /> gives
              OVERPACK
            </li>
            <li>
              The equation is{' '}
              <CtCMath
                math={
                  '\\int (\\nabla \\times PASSOVER) \\cdot dS = \\oint OVENRACK \\cdot dR'
                }
                display
              />
            </li>
            <li>This is STOKES' theorem</li>
          </ul>
        </Appendix>
      </MathJax>
    </MathJaxContext>
    <style jsx global>{`
      .part-1-1 th:nth-child(1),
      .part-1-1 td:nth-child(2n + 1),
      .part-1-2 th:nth-child(-n + 2),
      .part-1-2 td:nth-child(-n + 2),
      .part-2 td:nth-child(1) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
