import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/scan/0.png';
import image1 from 'assets/solutions/scan/1.png';
import image2 from 'assets/solutions/scan/2.png';
import image3 from 'assets/solutions/scan/3.png';
import image4 from 'assets/solutions/scan/4.png';
import image5 from 'assets/solutions/scan/5.png';
import image6 from 'assets/solutions/scan/6.png';
import image7 from 'assets/solutions/scan/7.png';

const SLUG = 'scan';
const ANSWER = `THE LAST ONE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The first section of the puzzle exists merely to demonstrate the mechanic.
      We see two large (441-bit) binary numbers presented as 21×21 grids along
      with a large decimal number. Interpreting the binary numbers as QR codes
      and scanning them yields "EXAMPLE" and "DEMONSTRATION". From
      experimentation, we realize that the large number is the product of the
      binary strings -- except that we treat the binary numbers as decimal!
      Therefore, our goal is to factor the next 3 large numbers into two
      441-digit decimal numbers with only digits 1 and 0, which are also QR
      codes.
    </p>
    <h3>Factoring the large integers (programming challenge)</h3>
    <p>
      The puzzle is a programming challenge to find an algorithm capable of
      factoring these very large integers given the constraint that the factors
      are decimal numbers consisting only of 0s and 1s. One such algorithm is as
      follows:
    </p>
    <ol>
      <li>
        Take each possible combination of 0s and 1s for the least significant
        digit (ones place) of each factor. (That is: 0/0, 0/1, 1/0, and 1/1.)
      </li>
      <li>
        Multiply each pair and compare the least significant digit of the result
        with the least significant digit of the desired product. Keep only those
        where they match.
      </li>
      <li>
        Now take each possible combination of 0s/1s for the next higher digit
        (tens place) and prepend it to every possible combination of factors
        considered so far. For every pair of factors created this way, multiply
        them and compare the <i>two</i> least significant digits against those
        of the desired product. Keep only those where they match.
      </li>
      <li>
        Continue doing this, adding digits to the front of the possible factors
        and comparing the <i>n</i> least significant digits of their product to
        the <i>n</i> least significant digits of the desired product we're
        trying to factorize.
      </li>
      <li>
        If, at any point, the list of possibilities comes out empty, then no
        factorization with these digits is possible.
      </li>
      <li>
        If, at any point, any pair of factors actually multiply to the desired
        product exactly, immediately output that as our result. This ignores the
        possibility of returning multiple results (e.g., <i>a</i>×<i>b</i> and{' '}
        <i>b</i>×<i>a</i> would always both be valid answers) but for the
        purpose of this puzzle we only need one pair of factors that works.
      </li>
    </ol>
    <p>
      An implementation of this algorithm in C# is shown below. This example
      even works with any number of factors, but for this puzzle only
      factorization into 2 factors is required.
    </p>
    <details>
      <summary>Code</summary>
      <p className="whitespace-pre font-mono overflow-x-scroll">
        {`
    public static BigInteger[] Factorize01(BigInteger product, int numFactors)
    {
        var possibilities = new List<BigInteger[]>();
        possibilities.Add(Enumerable.Repeat(BigInteger.Zero, numFactors).ToArray());
        var p10 = BigInteger.One;   // powers of 10; start at 10⁰ = 1

        // For as long as ‘possibilities’ is non-empty, we may be able to extend these
        // possibilities by a digit to find factors
        while (possibilities.Count > 0)
        {
            var nextP10 = p10 * 10;

            // We want to add digits to the front of our numbers and then determine if their
            // least significant n digits match those of the product
            var compareWith = product % nextP10;
            var newPossibilities = new List<BigInteger[]>();

            // Go through all combinations of 0s/1s that we could add to the front of the factors
            for (var npCode = 0; npCode < 1 << numFactors; npCode++)
            {
                // Add these combinations of 0s/1s to the front of all of the currently
                // available possibilities
                foreach (var poss in possibilities)
                {
                    // Add the relevant digits to the front of each factor
                    var newPoss = poss.Select((p, ix) => ((npCode >> ix) & 1) * p10 + p).ToArray();
                    // Calculate the product of the new factors
                    var newProduct = newPoss.Aggregate(BigInteger.One, (p, n) => p * n);
                    // If this is in fact the product we're looking for, we've found our factors
                    if (newProduct == product)
                        return newPoss;

                    // If the least significant n digits match those of the product, this
                    // possibility is still viable
                    if (newProduct % nextP10 == compareWith)
                        newPossibilities.Add(newPoss);
                }
            }
            possibilities = newPossibilities;
            p10 = nextP10;
        }

        // No such factorization possible
        return null;
    }
    `
          .trim()
          .replace(/^ {4}\n?/gm, '')}
      </p>
    </details>
    <br />
    <h3>QR codes</h3>
    <p>
      Since there are three large numbers, and each factorizes into two QR
      codes, we obtain six QR codes:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <SheetableImage alt="" src={image0} title="" />
          </td>
          <td>
            <SheetableImage alt="" src={image1} title="" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <SheetableImage alt="" src={image2} title="" />
          </td>
          <td>
            <SheetableImage alt="" src={image3} title="" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <SheetableImage alt="" src={image4} title="" />
          </td>
          <td>
            <SheetableImage alt="" src={image5} title="" />
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The QR codes shown here in yellow (on the right) scan to "other co" and
      "de first" and the third will not scan at all. The blue ones, however,
      scan to "X", "O", "R" — a reference to <i>exclusive or</i> (XOR), a
      bitwise operation that can be performed on bitmaps such as these.
    </p>
    <p>
      The three yellow QR codes can be XORed together to form a new QR code:
    </p>
    <p>
      <SheetableImage className="mx-auto" alt="" src={image6} title="" />
    </p>
    <p>
      When scanned, this results in the phrase "Braille at bottom". Looking back
      at the blue QR codes, we find a Braille message within the bottom rows:
    </p>
    <p>
      <SheetableImage alt="" src={image7} title="" />
    </p>
    <p>
      This reads, <Monospace>SOLUTI / ONTHEL / ASTONE</Monospace>, giving the
      solution, <Answerize>THE LAST ONE</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
