import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import Attributions from 'components/attributions';
import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'some-assembly-required';
const ANSWER = `DISH TOWEL`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <MathJaxContext>
      <MathJax>
        <p>
          We find that the initial 8 pictures refer to Lego sets that were
          released in 2023 (sets given in alphabetical order):
        </p>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Lego set</th>
              <th>Set number</th>
              <th>Pieces</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CtCMath math="\alpha" />
              </td>
              <td>2 Fast 2 Furious Nissan Skyline GT-R (R34)</td>
              <td>76917</td>
              <td>319</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\beta" />
              </td>
              <td>Australia Postcard</td>
              <td>40651</td>
              <td>191</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\gamma" />
              </td>
              <td>BTS Dynamite</td>
              <td>21339</td>
              <td>749</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\delta" />
              </td>
              <td>Gandalf the Grey &amp; Balrog</td>
              <td>40631</td>
              <td>348</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\epsilon" />
              </td>
              <td>Hokusai - The Great Wave</td>
              <td>31208</td>
              <td>1810</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\zeta" />
              </td>
              <td>Mobile Bubble Tea Shop</td>
              <td>41733</td>
              <td>109</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\eta" />
              </td>
              <td>Temple of the Golden Idol</td>
              <td>77015</td>
              <td>1545</td>
            </tr>
            <tr>
              <td>
                <CtCMath math="\theta" />
              </td>
              <td>Walt Disney Tribute Camera</td>
              <td>43230</td>
              <td>811</td>
            </tr>
          </tbody>
        </Table>
        <p>
          From the given equations and properties of the Lego sets, we can
          deduce the following Lego-set math:
        </p>
        <Table>
          <tbody>
            <tr>
              <td>
                <CtCMath math="A+B" />
              </td>
              <td>
                <CtCMath math="\mathcal{S}\times\mathcal{S}\rightarrow\mathbb{N}" />
              </td>
              <td>
                The sum of any number of sets is the total of their set numbers
                when added together.
              </td>
            </tr>
            <tr>
              <td>
                <CtCMath math="A \cap B" />
              </td>
              <td>
                <CtCMath math="\mathcal{S}\times\mathcal{S}\rightarrow\mathbb{N}" />
              </td>
              <td>
                The intersection of these sets is the number obtained by taking
                all of the digits in the same place that are the same in both of
                the set numbers: e.g., the intersection of a set whose set
                number is 5318 with a set whose set number is 40398 = 38.
              </td>
            </tr>
            <tr>
              <td>
                <CtCMath math="A \cup B" />
              </td>
              <td>
                <CtCMath math="\mathcal{S}\times\mathcal{S}\rightarrow\mathbb{N}" />
              </td>
              <td>
                The union of sets is the concatenation of their set numbers.
              </td>
            </tr>
            <tr>
              <td>
                <CtCMath math="|A|" />
              </td>
              <td>
                <CtCMath math="\mathcal{S}\rightarrow\mathbb{N}" />
              </td>
              <td>
                The cardinality of a set is the number of pieces in that set.
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          Note also that the constants in the solutions, when converted to their
          letter equivalents, make the phrase{' '}
          <Clue>FOR YOUR SET LISTS USE BRICKSET</Clue>, to make sure the right
          numbers are used.
        </p>
        <p>
          <b>Solved equations:</b>
        </p>
        <ul className="list-none p-0 overflow-x-auto overflow-y-clip space-y-3">
          <li>
            <CtCMath math="A = 6 - ((\gamma \cap \theta) \times (\theta \cap \epsilon)) = 6 - (3 \times 2) = 0" />
          </li>
          <li>
            <CtCMath
              math="B = 15 + (\eta \cap \alpha) - (\zeta \cap \delta) - (\theta \cap \zeta) = 15 + 71 - 43 - 43 = 0"
            />
          </li>
          <li>
            <CtCMath math="C = 18 - (|\alpha| \bmod (\delta \cap \zeta)) = 18 - (319 \bmod 43) = 0" />
          </li>
          <li>
            <CtCMath math="D = 25 + 2 \times Y - 3 \times E = 25 + 2 \times 0 - 3 \times 8 = 1" />
          </li>
          <li>
            <CtCMath math="E = 15 + |\gamma| / ((\epsilon \cap \theta) - |\zeta|) = 15 + 749 / (2 - 109) = 8" />
          </li>
          <li>
            <CtCMath math="F = 21 - (\gamma \cap \zeta) - (\beta \cap \zeta) - (\beta \cap \theta) = 21 - 13 - 4 - 4 = 0" />
          </li>
          <li>
            <CtCMath math="G = 18 - ((\zeta \cup \eta) \bmod (\zeta \cap \delta)) = 18 - (4173377015 \bmod 43) = 0" />
          </li>
          <li>
            <CtCMath math="H = 19 - (\zeta \cap \gamma) - (\epsilon \cap \theta) = 19 - 13 - 2 = 4" />
          </li>
          <li>
            <CtCMath math="I = 5 - (\gamma \cap \theta) = 5 - 3 = 2" />
          </li>
          <li>
            <CtCMath math="J = 20 + (\alpha + \delta) - (\alpha + \beta) = 20 + 117548 - 117568 = 0" />
          </li>
          <li>
            <CtCMath math="K = 12 + (\gamma \cap \epsilon) - (\zeta \cap \gamma) = 12 + 1 - 13 = 0" />
          </li>
          <li>
            <CtCMath math="L = 9 + (\eta \cap \zeta) = 9 + 0 = 9" />
          </li>
          <li>
            <CtCMath math="M = 19 - (|\beta| \bmod (\delta \cap \zeta)) = 19 - (191 \bmod 43) = 0" />
          </li>
          <li>
            <CtCMath math="N = 20 - ((\eta \cup \beta) \bmod (\eta \cup \delta)) = (7701540651 \bmod 7701540631) = 0" />
          </li>
          <li>
            <CtCMath math="O = 19 + (\alpha \cap \beta) - (\gamma \cap \zeta) = 19 + 0 - 13 = 6" />
          </li>
          <li>
            <CtCMath math="P = 21 - (\zeta \cap \gamma) - (\zeta \cap \beta) - (\theta \cap \beta) = 21 - 13 - 4 - 4 = 0" />
          </li>
          <li>
            <CtCMath math="Q = 19 - ((\delta \cup \alpha) \bmod (\theta \cap \zeta)) = 19 - (4063176917 \bmod 43) = 0" />
          </li>
          <li>
            <CtCMath math="R = 5 - (\gamma \cap \theta) - (\theta \cap \epsilon) = 5 - 3 - 2 = 0" />
          </li>
          <li>
            <CtCMath math="S = 2 + (\zeta \cap \epsilon) = 2 + 1 = 3" />
          </li>
          <li>
            <CtCMath math="T = 18 + (\theta \cap \eta) - (\zeta \cap \gamma) = 18 + 0 - 13 = 5" />
          </li>
          <li>
            <CtCMath math="U = 9 + (\theta \cap \beta) - (\gamma \cap \zeta) = 9 + 4 - 13 = 0" />
          </li>
          <li>
            <CtCMath math="V = 3 - (\theta \cap \gamma) = 3 - 3 = 0" />
          </li>
          <li>
            <CtCMath math="W = 11 - (\zeta \cap \beta) = 11 - 4 = 7" />
          </li>
          <li>
            <CtCMath math="X = 19 - ((\eta \cup \zeta) \bmod |\zeta|) = 19 - (7701541733 \bmod 109) = 0" />
          </li>
          <li>
            <CtCMath math="Y = 5 - ((\epsilon + \gamma) \bmod |\zeta|) + (|\epsilon| \bmod (\delta \cap \zeta)) = 5 - 9 + 4 = 0" />
          </li>
          <li>
            <CtCMath math="Z = 20 + (\epsilon \cap \theta) \times ((\zeta \cap \gamma) - (\zeta \cap \theta)) / (\gamma \cap \theta) = 20 + 2 \times (13 - 43) / 3 = 0" />
          </li>
        </ul>
        <p>
          All but nine of <CtCMath math="A" />&ndash;<CtCMath math="Z" /> equal 0;
          each of the digits 1&ndash;9 occurs as exactly one of the remaining nine
          values. Arranged in ascending order, these variables spell the answer,{' '}
          <Answerize>{ANSWER}</Answerize>.
        </p>
        <Attributions>
          <ul>
            <li>
              Nissan Skyline GT-R: screen grab from 2 Fast 2 Furious; fair use
            </li>
            <li>Australia: globalimage.com.au (defunct), fair use</li>
            <li>
              BTS Dynamite:{' '}
              <a href="https://www.walmart.com/ip/BTS-BE-Dynamite-Disco-Wall-Poster-14-725-x-22-375-Framed/911794282">
                official poster
              </a>
              , fair use
            </li>
            <li>
              Gandalf the Grey &amp; Balrog:{' '}
              <a href="https://m.imdb.com/title/tt0120737/mediaviewer/rm3663999744">
                screen grab from <i>The Lord of the Rings: The Fellowship of the Ring</i>
              </a>
              ; fair use
            </li>
            <li>
              Hokusai&mdash;<i>The Great Wave off Kanagawa</i>:{' '}
              <a href="https://en.wikipedia.org/wiki/File:Great_Wave_off_Kanagawa2.jpg">
                public domain
              </a>
            </li>
            <li>
              Mobile Bubble Tea Shop:{' '}
              <a href="https://www.facebook.com/photo.php?fbid=181307234867755&set=pb.100089654390748.-2207520000&type=3">
                Angkor Boba Tea House
              </a>
              , fair use
            </li>
            <li>
              Temple of the Golden Idol:{' '}
              <a href="https://m.imdb.com/title/tt0082971/mediaviewer/rm4076771329/">
                screen grab from <i>Raiders of the Lost Ark</i>
              </a>
              , fair use
            </li>
            <li>
              Walt Disney Tribute Camera: used under the terms of the Alamy
              License Agreement
            </li>
          </ul>
        </Attributions>
      </MathJax>
    </MathJaxContext>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
