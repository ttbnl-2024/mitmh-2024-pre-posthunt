import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image1 from 'assets/solutions/the-farm/1.png';
import image2 from 'assets/solutions/the-farm/2.png';
import image3 from 'assets/solutions/the-farm/3.png';
import image4 from 'assets/solutions/the-farm/4.png';
import image5 from 'assets/solutions/the-farm/5.png';
import image6 from 'assets/solutions/the-farm/6.png';
import image7 from 'assets/solutions/the-farm/7.png';
import image8 from 'assets/solutions/the-farm/8.png';
import image9 from 'assets/solutions/the-farm/9.png';
import image10 from 'assets/solutions/the-farm/10.png';
import image11 from 'assets/solutions/the-farm/11.png';
import image12 from 'assets/solutions/the-farm/12.png';
import image13 from 'assets/solutions/the-farm/13.png';
import image14 from 'assets/solutions/the-farm/14.png';
import image15 from 'assets/solutions/the-farm/15.png';
import image16 from 'assets/solutions/the-farm/16.png';
import image17 from 'assets/solutions/the-farm/17.png';
import image18 from 'assets/solutions/the-farm/18.png';
import image19 from 'assets/solutions/the-farm/19.png';
import image20 from 'assets/solutions/the-farm/20.png';
import image21 from 'assets/solutions/the-farm/21.png';

const SLUG = 'the-farm';
const ANSWER = `ANCHOVY PLANT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <MathJaxContext>
      <MathJax inline={true}>
        <p>
          We are given a very long polynomial equation in <CtCMath math="x" />{' '}
          and <CtCMath math="y" /> (call this polynomial <CtCMath math="f" />
          ), 19 graphs, and an image of the farm with 19 fruits in different 2x2
          plots of the land. The farm is divided into a grid, with an x-axis and
          y-axis, and we may assume that each cell is exactly 1x1. The numbers
          in each farmland is the length of the name of the fruit, so we can
          first identify the fruits.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Center coordinates</th>
              <th>Fruit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">-4, 4</td>
              <td>
                <Monospace>POMEGRANATE</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">5, 4</td>
              <td>
                <Monospace>GUAVA</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-1, 3</td>
              <td>
                <Monospace>PAPAYA</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">1, 3</td>
              <td>
                <Monospace>DRAGON FRUIT</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-3, 2</td>
              <td>
                <Monospace>PINEAPPLE</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">5, 2</td>
              <td>
                <Monospace>LYCHEE</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">1, 1</td>
              <td>
                <Monospace>CUSTARD APPLE</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-4, 0</td>
              <td>
                <Monospace>PASSION FRUIT</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-2, 0</td>
              <td>
                <Monospace>RAMBUTAN</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">4, 0</td>
              <td>
                <Monospace>JACKFRUIT</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-4, -2</td>
              <td>
                <Monospace>MANGOSTEEN</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-2, -2</td>
              <td>
                <Monospace>CASHEW</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">1, -2</td>
              <td>
                <Monospace>KIWI</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">3, -2</td>
              <td>
                <Monospace>COCONUT</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">5, -2</td>
              <td>
                <Monospace>GRAPE</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-4, -4</td>
              <td>
                <Monospace>AVOCADO</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">-2, -4</td>
              <td>
                <Monospace>LONGAN</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">1, -4</td>
              <td>
                <Monospace>DURIAN</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">3, -4</td>
              <td>
                <Monospace>WATERMELON</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          According to the flavor text, each fruit grows at a specific
          temperature. The graphs are the level sets (set of points of the form{' '}
          <CtCMath math="f(x, y) = k" /> for some temperature k) at the
          corresponding 2x2 regions. It is not sufficient to plot all the level
          sets for many different <CtCMath math="k" /> and attempt to match the
          graphs&mdash;at regions away from the origin, the level sets are
          practically identical for different values of <CtCMath math="k" />;
          this allows us to match the graphs to the regions, but not determine
          the exact temperature. Instead, we notice that each graph passes
          through the exact center of the square, so we can determine the exact
          temperature each fruit grows by evaluating f at the center of each
          farmland. Indeed, each evaluation gives a number very close to a small
          positive integer. Plotting the level set{' '}
          <CtCMath math="f(x, y) = k" /> for each fruit at the corresponding
          temperature k, it matches exactly with one of the given graphs. We
          order them by the ordering of the given graphs, then index the
          temperature into the fruit.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Graph</th>
              <th>Fruit</th>
              <th>Temperature</th>
              <th>Extract</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>
                <Monospace>DRAGON FRUIT</Monospace>
              </td>
              <td className="text-center">11</td>
              <td className="text-center">
                <Monospace>T</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>
                <Monospace>KIWI</Monospace>
              </td>
              <td className="text-center">3</td>
              <td className="text-center">
                <Monospace>W</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>
                <Monospace>PASSION FRUIT</Monospace>
              </td>
              <td className="text-center">6</td>
              <td className="text-center">
                <Monospace>O</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td>
                <Monospace>GUAVA</Monospace>
              </td>
              <td className="text-center">5</td>
              <td className="text-center">
                <Monospace>A</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">5</td>
              <td>
                <Monospace>CUSTARD APPLE</Monospace>
              </td>
              <td className="text-center">7</td>
              <td className="text-center">
                <Monospace>D</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">6</td>
              <td>
                <Monospace>JACKFRUIT</Monospace>
              </td>
              <td className="text-center">8</td>
              <td className="text-center">
                <Monospace>I</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">7</td>
              <td>
                <Monospace>COCONUT</Monospace>
              </td>
              <td className="text-center">1</td>
              <td className="text-center">
                <Monospace>C</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">8</td>
              <td>
                <Monospace>MANGOSTEEN</Monospace>
              </td>
              <td className="text-center">7</td>
              <td className="text-center">
                <Monospace>T</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">9</td>
              <td>
                <Monospace>DURIAN</Monospace>
              </td>
              <td className="text-center">3</td>
              <td className="text-center">
                <Monospace>R</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">10</td>
              <td>
                <Monospace>POMEGRANATE</Monospace>
              </td>
              <td className="text-center">2</td>
              <td className="text-center">
                <Monospace>O</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">11</td>
              <td>
                <Monospace>PAPAYA</Monospace>
              </td>
              <td className="text-center">3</td>
              <td className="text-center">
                <Monospace>P</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">12</td>
              <td>
                <Monospace>PINEAPPLE</Monospace>
              </td>
              <td className="text-center">2</td>
              <td className="text-center">
                <Monospace>I</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">13</td>
              <td>
                <Monospace>AVOCADO</Monospace>
              </td>
              <td className="text-center">4</td>
              <td className="text-center">
                <Monospace>C</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">14</td>
              <td>
                <Monospace>LONGAN</Monospace>
              </td>
              <td className="text-center">5</td>
              <td className="text-center">
                <Monospace>A</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">15</td>
              <td>
                <Monospace>LYCHEE</Monospace>
              </td>
              <td className="text-center">1</td>
              <td className="text-center">
                <Monospace>L</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">16</td>
              <td>
                <Monospace>GRAPE</Monospace>
              </td>
              <td className="text-center">1</td>
              <td className="text-center">
                <Monospace>G</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">17</td>
              <td>
                <Monospace>CASHEW</Monospace>
              </td>
              <td className="text-center">5</td>
              <td className="text-center">
                <Monospace>E</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">18</td>
              <td>
                <Monospace>WATERMELON</Monospace>
              </td>
              <td className="text-center">9</td>
              <td className="text-center">
                <Monospace>O</Monospace>
              </td>
            </tr>
            <tr>
              <td className="text-center">19</td>
              <td>
                <Monospace>RAMBUTAN</Monospace>
              </td>
              <td className="text-center">3</td>
              <td className="text-center">
                <Monospace>M</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          The extracted phrase is <Monospace>TWO ADIC TROPICAL GEOM</Monospace>,
          which is not the final answer, but when submitted, gives the response
          "Keep going!".
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Tropical_geometry">
            Tropical geometry
          </a>{' '}
          is a variant of algebraic geometry, an advanced mathematics topic. It
          is the study of polynomials, but with multiplication replaced by
          addition, and addition replaced by minimization (some authors use
          maximization instead, but from the flavor text "To minimize additional
          work", we should be using min instead of max). The main objects of
          study in classical algebraic geometry are <i>varieties</i> – the zero
          sets of polynomial equations. Analogously, the main objects of study
          in tropical geometry are <i>tropical varieties</i>. To construct the
          tropical variety for our polynomial f, we first have to{' '}
          <i>tropicalize </i>f (see{' '}
          <a href="https://en.wikipedia.org/wiki/Tropical_geometry#Tropical_polynomials">
            https://en.wikipedia.org/wiki/Tropical_geometry#Tropical_polynomials
          </a>
          ). This is done by replacing multiplication by addition, addition by
          minimization, and constants by their <i>valuation</i>. More precisely,
          for each monomial term <CtCMath math="c x^p y^q" />, we replace it
          with the linear term <CtCMath math="v(c) + px + qy" />, where{' '}
          <CtCMath math="v" /> is our valuation, then take the minimization of
          all these linear terms. In this case, we are using the{' '}
          <i>2-adic valuation</i>, as clued by the partial answer. The 2-adic
          valuation is defined by <CtCMath math="v(2^k a/b) = k" />, where{' '}
          <CtCMath math="a, b" /> are odd integers. For example,{' '}
          <CtCMath math="v(1) = 0" />, <CtCMath math="v(-48) = v(48) = 4" />,
          {' '}<CtCMath math="v(3/10) = -1" />. The resulting tropical
          polynomial <i>Trop(f)</i> is a concave piecewise-linear function,
          and each linear piece has a convex polygonal domain. The tropical
          variety is then the set of non-differentiable points of Trop(f), i.e.,
          the union of the boundaries of the domains of the linear pieces, i.e.,
          the set of points where the minimum is attained by at least 2
          different linear terms. The tropical variety will be made of straight 
          lines.
        </p>
        <p>The tropicalization of f is the following:</p>
        <p className="overflow-x-auto overflow-y-clip">
          <CtCMath
            math="\begin{align}
            \min\{&10+19x+15y, 2+18x+14y, -3+17x+14y, -6+15x+15y, -4+18x+11y,\\&
            -7+17x+12y, -3+18x+10y, -12+14x+14y, -10+13x+15y,\\&
            -12+16x+11y, -14+14x+13y, -13+13x+14y, -10+12x+15y,\\&
            -20+12x+11y, -19+11x+12y, -2+17x+5y, -6+16x+5y,\\&
            -19+9x+12y, 6+17x+3y, -3+16x+4y, -21+10x+10y, 2+16x+3y,\\&
            -14+12x+5y, -18+10x+7y, -21+7x+10y, -11+5x+12y, -11+12x+4y,\\&
            -19+5x+8y, -13+3x+10y, -18+5x+7y, -16+4x+7y, -12+2x+9y,\\&
            -5+x+10y, -14+5x+5y, -8+x+9y, -11+5x+4y, -4+x+7y, 2+7y,\\&
            1+5x+y, 5+x+4y, 14+3x, 18+2x, 17+x+y, 22+x\}
            \end{align}"
          />
        </p>
        <p>
          There are several ways to draw the tropical variety. One way is
          motivated by{' '}
          <a href="http://homepages.math.uic.edu/~jan/mcs595s14/drawtrop.py">
            this code
          </a>
          . The idea is to first compute the nodes. These are the points where
          the minimum is attained at least 3 times. They can be computed by
          enumerating all triplets of terms, and computing the point where the 3
          linear terms attain the same value. Then for each pair of nodes, we
          draw a line segment connecting them if their minimal terms share 2
          terms in common. Finally, for each node and pair of minimal terms of
          that node, we test whether the ray corresponding to the set of points
          where the 2 terms are equal are in fact minimal, then draw that ray. A
          modification of the code above will give our tropical variety:
        </p>
        <p>
          <SheetableImage alt="" src={image1} title="" className="mx-auto" />
        </p>
        <p>
          Another method (which is easier to implement) is to assign a random
          color to each term. Then, for each point on the plane, we color it
          based on which term is minimal at that point. This leads to the
          following image. The actual tropical variety is the union of the
          boundaries of each color region.
        </p>
        <p>
          <SheetableImage alt="" src={image2} title="" className="mx-auto" />
        </p>
        <p>
          Either way, we restrict this tropical variety to each of the 2x2
          regions (including the boundary), using the same ordering as before.
        </p>
        <div className="flex flex-wrap justify-center">
          <SheetableImage alt="" src={image3} title="" />
          <SheetableImage alt="" src={image4} title="" />
          <SheetableImage alt="" src={image5} title="" />
          <SheetableImage alt="" src={image6} title="" />
          <SheetableImage alt="" src={image7} title="" />
          <SheetableImage alt="" src={image8} title="" />
          <SheetableImage alt="" src={image9} title="" />
          <SheetableImage alt="" src={image10} title="" />
          <SheetableImage alt="" src={image11} title="" />
          <SheetableImage alt="" src={image12} title="" />
          <SheetableImage alt="" src={image13} title="" />
          <SheetableImage alt="" src={image14} title="" />
          <SheetableImage alt="" src={image15} title="" />
          <SheetableImage alt="" src={image16} title="" />
          <SheetableImage alt="" src={image17} title="" />
          <SheetableImage alt="" src={image18} title="" />
          <SheetableImage alt="" src={image19} title="" />
          <SheetableImage alt="" src={image20} title="" />
          <SheetableImage alt="" src={image21} title="" />
        </div>
        <p>
          This spells <Monospace>ENTER IN ANCHOVY PLANT</Monospace>. The final
          answer is <Answerize>ANCHOVY PLANT</Answerize>.
        </p>
        <Attributions>
          <ol>
            <li>
              Dragon fruit:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Pitaya_cross_section_ed2.jpg">
                https://commons.wikimedia.org/wiki/File:Pitaya_cross_section_ed2.jpg
              </a>{' '}
            </li>
            <li>
              Kiwi:{' '}
              <a href="https://www.pexels.com/photo/green-kiwi-fruit-51312/">
                https://www.pexels.com/photo/green-kiwi-fruit-51312/
              </a>{' '}
            </li>
            <li>
              Passion fruit:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Passion_fruit_red2.jpg">
                https://commons.wikimedia.org/wiki/File:Passion_fruit_red2.jpg
              </a>{' '}
            </li>
            <li>
              Guava:{' '}
              <a href="https://www.flickr.com/photos/botalex/31781576943">
                https://www.flickr.com/photos/botalex/31781576943
              </a>
            </li>
            <li>
              Custard apple:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Custard_Apple.JPG">
                https://commons.wikimedia.org/wiki/File:Custard_Apple.JPG
              </a>
            </li>
            <li>
              Jackfruit:{' '}
              <a href="https://www.flickr.com/photos/plants_of_russian_in_brazil/938607932">
                https://www.flickr.com/photos/plants_of_russian_in_brazil/938607932
              </a>
            </li>
            <li>
              Coconut:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Coconut_on_white_background.jpg">
                https://commons.wikimedia.org/wiki/File:Coconut_on_white_background.jpg
              </a>
            </li>
            <li>
              Mangosteen:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Mangosteen1.jpg">
                https://commons.wikimedia.org/wiki/File:Mangosteen1.jpg
              </a>
            </li>
            <li>
              Durian:{' '}
              <a href="https://www.flickr.com/photos/fchungcw/15177949555">
                https://www.flickr.com/photos/fchungcw/15177949555
              </a>
            </li>
            <li>
              Pomegranate:{' '}
              <a href="https://www.deviantart.com/nellygraceng/art/Pomegranate-01-530582824">
                https://www.deviantart.com/nellygraceng/art/Pomegranate-01-530582824
              </a>{' '}
            </li>
            <li>
              Papaya:{' '}
              <a href="https://www.pickpik.com/fruit-papaya-food-and-drink-studio-shot-food-healthy-eating-147145">
                https://www.pickpik.com/fruit-papaya-food-and-drink-studio-shot-food-healthy-eating-147145
              </a>
            </li>
            <li>
              Pineapple:{' '}
              <a href="https://www.flickr.com/photos/7304492@N06/417626435">
                https://www.flickr.com/photos/7304492@N06/417626435
              </a>
            </li>
            <li>
              Avocado:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Avocado_picture.jpg">
                https://commons.wikimedia.org/wiki/File:Avocado_picture.jpg
              </a>
            </li>
            <li>
              Longan:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Owoce_Longan.jpg">
                https://commons.wikimedia.org/wiki/File:Owoce_Longan.jpg
              </a>
            </li>
            <li>
              Lychee:{' '}
              <a href="https://www.rawpixel.com/image/5906480/free-lychee-public-domain-cc0-photo">
                https://www.rawpixel.com/image/5906480/free-lychee-public-domain-cc0-photo
              </a>
            </li>
            <li>
              Grape:{' '}
              <a href="https://www.stockvault.net/photo/194108/grapes">
                https://www.stockvault.net/photo/194108/grapes
              </a>
            </li>
            <li>
              Cashew:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Cashew_Brazil_fruit_3.png">
                https://commons.wikimedia.org/wiki/File:Cashew_Brazil_fruit_3.png
              </a>
            </li>
            <li>
              Watermelon:{' '}
              <a href="https://www.pickpik.com/watermelon-melon-fruit-sweet-delicious-green-130215">
                https://www.pickpik.com/watermelon-melon-fruit-sweet-delicious-green-130215
              </a>
            </li>
            <li>
              Rambutan:{' '}
              <a href="https://www.flickr.com/photos/lilcrabbygal/378004840">
                https://www.flickr.com/photos/lilcrabbygal/378004840
              </a>{' '}
            </li>
          </ol>
        </Attributions>
      </MathJax>
    </MathJaxContext>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
