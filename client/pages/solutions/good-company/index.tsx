import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'good-company';
const ANSWER = `DEMOCRACY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We're initially presented with a series of ads for weird businesses. Each
      ad contains a phone number of the format ###-555-####. We notice that when
      the area codes of the phone numbers are written out as a single string,
      they form a message using A1Z26 encoding. The message reads{' '}
      <Monospace>READ ORDERED SHOP NAMES DIAGONAL</Monospace>. This tells us we
      need shop names and that they need to be in order.
    </p>
    <p>
      We notice the words "burger joint" and "animated" in the flavor text and
      discover that the stores presented are "store next door" locations
      depicted in the intros of various Bob's Burgers episodes. They are
      initially presented in the order that the episodes aired. Each ad contains
      a reference to a previous iteration of the store closing and the ads can
      be reordered based on those clues.
    </p>
    <p>
      Once the stores are in the correct order, we can read letters along the
      main diagonal from the store names to read the message{' '}
      <Monospace>CALL PEST CONTROL GUYS</Monospace>. If we revisit the phone
      numbers in the ads, we know we can ignore the first three digits since
      we've already used them and the next three digits since they're all the
      same. Focusing on the last four digits and the phrase "he needs to dial
      back his rhetoric" from the flavor text, we realize the last four digits
      are an index into the text of the ad itself. If we take the two pairs of
      digits and index into the ad text (e.g., 1234 indexes 12 and 34), we get
      two-word clue phrases that can be used in the next step.
    </p>
    <p>
      (Almost) every Bob's Burgers episode intro has two punny gags: the store
      next door and the pest control van. If we look at the list of pest control
      trucks, we can match up the two word clue phrases to pest control trucks,
      in episode order. If we take the number of specific punny products
      mentioned in each ad and index into the pest control truck name, we get
      the instruction <Monospace>SERVE US A PUNNY BURGER</Monospace>. Completing
      this task yields the final answer <Answerize>{`${ANSWER}`}</Answerize>.
    </p>
    <Appendix>
      <h3>Ordered Stores</h3>
      <Table id="appendix-1" className="my-2">
        <thead>
          <tr>
            <th>Ad #</th>
            <th>Episode</th>
            <th>Shop Name</th>
            <th>Store Name Diagonal Letter</th>
            <th>Store Reason For Closing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13</td>
            <td>S9 E16</td>
            <td>Clothes Before Hose Gardening Attire</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>Seed funding got pulled</td>
          </tr>
          <tr>
            <td>15</td>
            <td>S10 E14</td>
            <td>Hannah and Her Transistors Electronic Parts</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>Couldn't conduct enough business</td>
          </tr>
          <tr>
            <td>14</td>
            <td>S9 E20</td>
            <td>Doll Things Considered Accessories For Dolls</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>Not supported by listeners like you</td>
          </tr>
          <tr>
            <td>4</td>
            <td>S5 E8</td>
            <td>Catlike Refluxes Feline Gastroenterologist</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>Financial losses were hard to swallow</td>
          </tr>
          <tr>
            <td>10</td>
            <td>S8 E12</td>
            <td>Sleep Tight Small Mattresses</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>Bed decisions that didn't pay off</td>
          </tr>
          <tr>
            <td>19</td>
            <td>S12 E18</td>
            <td>Take Me Out To The Ball Gown Sporty Formal Wear</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>Wasn't scoring any style points</td>
          </tr>
          <tr>
            <td>1</td>
            <td>S3 E19</td>
            <td>The Massagonyst Massages For Men</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>Lawsuit from He Said She Sued League of Women Lawyers</td>
          </tr>
          <tr>
            <td>3</td>
            <td>S4 E20</td>
            <td>The Nightlight Zone</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>Unexpected twist ending</td>
          </tr>
          <tr>
            <td>12</td>
            <td>S9 E4</td>
            <td>Those Who Can, Dle Candles</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>Out-of-control burn rate</td>
          </tr>
          <tr>
            <td>17</td>
            <td>S10 E18</td>
            <td>Not Safes For Work Personal Safes</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>A combination of reasons</td>
          </tr>
          <tr>
            <td>7</td>
            <td>S6 E5</td>
            <td>You're Missing the Poinsettia</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>Deliveries were perennially late</td>
          </tr>
          <tr>
            <td>16</td>
            <td>S10 E15</td>
            <td>A Small Price Toupee Discount Hairpieces</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>Had the rug pulled out from under us</td>
          </tr>
          <tr>
            <td>11</td>
            <td>S8 E14</td>
            <td>Shawl Me By Your Name: Embroidered Shawls</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>Staff peached out</td>
          </tr>
          <tr>
            <td>18</td>
            <td>S12 E5</td>
            <td>It Had To Be Ewe Wool Clothing</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>Mutton we could do to keep it open</td>
          </tr>
          <tr>
            <td>8</td>
            <td>S6 E9</td>
            <td>Little Shop of Hulas</td>
            <td>
              <Monospace>L</Monospace>
            </td>
            <td>Customers felt out of the loop</td>
          </tr>
          <tr>
            <td>5</td>
            <td>S5 E13</td>
            <td>A Ton In The Oven Big And Tall Baby Clothes</td>
            <td>
              <Monospace>G</Monospace>
            </td>
            <td>Customers were a bunch of big babies</td>
          </tr>
          <tr>
            <td>2</td>
            <td>S4 E13</td>
            <td>Quilty As Charged Quilt Shop</td>
            <td>
              <Monospace>U</Monospace>
            </td>
            <td>Business was patchy</td>
          </tr>
          <tr>
            <td>9</td>
            <td>S7 E8</td>
            <td>Cindy Lopper Hairstyling</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
            <td>Just couldn't cut it anymore</td>
          </tr>
          <tr>
            <td>6</td>
            <td>S5 E14</td>
            <td>Baby Got Back Problems Physical Therapy</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>Don't have the spine for business</td>
          </tr>
        </tbody>
      </Table>
      <h3>Cluephrases, Trucks, Extraction</h3>
      <Table id="appendix-2" className="my-2">
        <thead>
          <tr>
            <th>Ad #</th>
            <th>Phone number clue phrase</th>
            <th>Pest Control Truck</th>
            <th>Count of Products in Ad</th>
            <th>Extraction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13</td>
            <td>Goodbye Catchphrase</td>
            <td>Rat's All Folks</td>
            <td>4</td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>Flying Monkeys</td>
            <td>Wicked Witch of the Pest</td>
            <td>5</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>Home Sentence</td>
            <td>Mouse Arrest</td>
            <td>7</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Brewery Friends</td>
            <td>Lavermin Shirley</td>
            <td>3</td>
            <td>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>West Egg</td>
            <td>The Great Ratsby</td>
            <td>3</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>Jewish Mother</td>
            <td>You Never Call You Never Rat</td>
            <td>3</td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Doc Rabbit</td>
            <td>Bugs Done-y</td>
            <td>4</td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Magic Spell</td>
            <td>Abraca-dead-bug</td>
            <td>4</td>
            <td>
              <Monospace>A</Monospace>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Nuclear Bombs</td>
            <td>Weapons of Mouse Destruction</td>
            <td>4</td>
            <td>
              <Monospace>P</Monospace>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>Horror Call</td>
            <td>The Bugs Are Coming From Inside The House</td>
            <td>5</td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Journey Hit</td>
            <td>Don't Stop Bugs Leaving</td>
            <td>3</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>Temptations Tune</td>
            <td>Ant Too Proud To Beg</td>
            <td>2</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Istanbul Band</td>
            <td>They Termite Be Giants</td>
            <td>4</td>
            <td>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>Polite Disagreement</td>
            <td>Bug To Differ</td>
            <td>1</td>
            <td>
              <Monospace>B</Monospace>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Spears Track</td>
            <td>Squish Me Baby One More Time</td>
            <td>3</td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Title Prayer</td>
            <td>Are You There Bugs It's Me Margaret</td>
            <td>2</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Insincere Regret</td>
            <td>Sorry Gnat Sorry</td>
            <td>6</td>
            <td>
              <Monospace>G</Monospace>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Glass Onion</td>
            <td>Hives Out Bee Removal</td>
            <td>4</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Island Novel</td>
            <td>Bored of the Flies</td>
            <td>3</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      #appendix-1 th:nth-child(1),
      #appendix-1 td:nth-child(1),
      #appendix-1 td:nth-child(2),
      #appendix-1 th:nth-child(4),
      #appendix-1 td:nth-child(4),
      #appendix-2 th:nth-child(1),
      #appendix-2 td:nth-child(1),
      #appendix-2 th:nth-child(4),
      #appendix-2 td:nth-child(4),
      #appendix-2 td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
