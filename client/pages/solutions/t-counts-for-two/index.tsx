import { Montserrat } from 'next/font/google';
import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 't-counts-for-two';
const ANSWER = `THE GAZA STRIP`;

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
});

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of 12 black and white images depicting
      various strange scenes and 12 number strings. We also note that each image
      has a string of numbers (many low numbers such as 1s) in the lower-right
      corner.
    </p>
    <p>
      The square tiles with the numbers in the lower right, as well as the
      title, hint at Scrabble, a game where letters are assigned number values,
      and words made of those letters have associated numerical scores. But
      everyone knows that T counts for 1 in Scrabble! Or, at least, in English…
    </p>
    <p>
      We turn back to the images. Some look like cartoon scenes, some are oddly
      specific, and others downright bizarre. Many feature animals, such as a
      fox jumping over a relaxing dog. This reminds us of the pangram THE QUICK
      BROWN FOX JUMPS OVER THE LAZY DOG. But what about the others? Some
      internet searches lead us to the discovery that the images represent
      pangrams in different languages (a list can be found at{' '}
      <a href="https://clagnut.com/blog/2380">https://clagnut.com/blog/2380</a>
      ). Moreover, the numbers in the lower right are the Scrabble values for
      those languages, using the languages' Scrabble point value systems.
    </p>
    <p>
      The images are given in alphabetical order by the pangram language, which
      are as follows:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Language</th>
          <th>In own language</th>
          <th>Scrabble tile values for language</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bulgarian</td>
          <td className={montserrat.className}>Български</td>
          <td>2 3 2 3 1 1 1 2 1</td>
        </tr>
        <tr>
          <td>Croatian</td>
          <td className={montserrat.className}>Hrvatski</td>
          <td>4 1 2 1 1 1 2 1</td>
        </tr>
        <tr>
          <td>Dutch</td>
          <td className={montserrat.className}>Nederlands</td>
          <td>1 1 2 1 2 3 1 1 2 2</td>
        </tr>
        <tr>
          <td>English</td>
          <td className={montserrat.className}>English</td>
          <td>1 1 2 1 1 1 4</td>
        </tr>
        <tr>
          <td>French</td>
          <td className={montserrat.className}>Français</td>
          <td>4 1 1 1 3 1 1 1</td>
        </tr>
        <tr>
          <td>German</td>
          <td className={montserrat.className}>Deutsch</td>
          <td>1 1 1 1 1 4 2</td>
        </tr>
        <tr>
          <td>Italian</td>
          <td className={montserrat.className}>Italiana</td>
          <td>1 2 1 3 1 1 3 1</td>
        </tr>
        <tr>
          <td>Lithuanian</td>
          <td className={montserrat.className}>Lietuvių</td>
          <td>2 1 1 1 1 4 1 6</td>
        </tr>
        <tr>
          <td>Polish</td>
          <td className={montserrat.className}>Polski</td>
          <td>2 1 2 1 2 1</td>
        </tr>
        <tr>
          <td>Russian</td>
          <td className={montserrat.className}>Русский</td>
          <td>1 2 1 1 2 1 4</td>
        </tr>
        <tr>
          <td>Slovene</td>
          <td className={montserrat.className}>Slovenščina</td>
          <td>1 1 1 2 1 1 6 5 1 1 1</td>
        </tr>
        <tr>
          <td>Spanish</td>
          <td className={montserrat.className}>Español</td>
          <td>1 1 3 1 8 1 1</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We then turn to the number strings. Indeed, they represent Scrabble values
      for the words given in the pangrams. Except, we notice one oddity: all the
      images have something extra present. For example, there is a bull in the
      quick brown fox image. There is likewise an extra number in the number
      string. It does not quite correspond to the extra item, so we need to take
      the difference between the extra number and the Scrabble value of the
      extra object. We also notice that the extra object's Scrabble values are
      not only unique, but consecutive from 4 to 15. Ordering by the extra
      word's Scrabble value and converting the differences to letters using
      A1Z26, we get the answer{' '}
      <b>
        <Monospace>THE GAZA STRIP</Monospace>
      </b>
      .
    </p>
    <Table>
      <style jsx>
        {`
          td:nth-child(2),
          td:nth-child(3) {
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
          }
          td:nth-child(5),
          td:nth-child(6),
          td:nth-child(7) {
            text-align: center;
          }
        `}
      </style>
      <thead>
        <tr>
          <th>Language</th>
          <th>Pangram</th>
          <th>English</th>
          <th>Scrabble scores (extra indicated)</th>
          <th>Extra, Translation, Score</th>
          <th colSpan={2}>Difference, A1Z26</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>French</td>
          <td className={montserrat.className}>
            Portez ce vieux whisky au juge blond qui fume.
          </td>
          <td>Bring this old whiskey to the blond smoking judge.</td>
          <td>
            17 4 17{' '}
            <i>
              <b>24</b>
            </i>{' '}
            36 2 12 8 10 8
          </td>
          <td>
            rose
            <br />
            <span className={montserrat.className}>ROSE</span>
            <br />4
          </td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Croatian</td>
          <td className={montserrat.className}>
            Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje
          </td>
          <td>
            The overweight little schoolboy with a bike is holding hops and fine
            cotton in the pocket of his attire
          </td>
          <td>
            11{' '}
            <i>
              <b>13</b>
            </i>{' '}
            20 1 17 9 11 1 11 5 1 14 11
          </td>
          <td>
            cake
            <br />
            <span className={montserrat.className}>TORTA</span>
            <br />5
          </td>
          <td>8</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>English</td>
          <td className={montserrat.className}>
            The quick brown fox jumps over the lazy dog
          </td>
          <td>The quick brown fox jumps over the lazy dog</td>
          <td>
            6{' '}
            <i>
              <b>11</b>
            </i>{' '}
            20 10 13 16 7 6 16 5
          </td>
          <td>
            bull
            <br />
            <span className={montserrat.className}>BULL</span>
            <br />6
          </td>
          <td>5</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Russian</td>
          <td className={montserrat.className}>
            Съешь ещё этих мягких французских булок да выпей же чаю
          </td>
          <td>Eat some more of these soft French buns and drink some tea</td>
          <td>
            23 14 15 16{' '}
            <i>
              <b>14</b>
            </i>{' '}
            34 10 3 12 6 14
          </td>
          <td>
            crown
            <br />
            <span className={montserrat.className}>КОРОНА</span>
            <br />7
          </td>
          <td>7</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>Spanish</td>
          <td className={montserrat.className}>
            El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña
            tocaba el saxofón detrás del palenque de paja.
          </td>
          <td>
            The quick Hindu bat was happily eating thistle and kiwi. The stork
            played the saxophone behind the straw palisade.
          </td>
          <td>
            <i>
              <b>9</b>
            </i>{' '}
            2 17 14 9 8 17 16 4 18 2 16 9 2 17 7 4 17 3 11
          </td>
          <td>
            tomato
            <br />
            <span className={montserrat.className}>TOMATE</span>
            <br />8
          </td>
          <td>1</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Bulgarian</td>
          <td className={montserrat.className}>
            Под южно дърво, цъфтящо в синьо, бягаше малко пухкаво зайче.
          </td>
          <td>
            A little fluffy young rabbit ran under a southern tree blooming in
            blue
          </td>
          <td>
            4 14 9 38 2 14 20 8 17 16{' '}
            <i>
              <b>35</b>
            </i>
          </td>
          <td>
            spider
            <br />
            <span className={montserrat.className}>ПАЯК</span>
            <br />9
          </td>
          <td>26</td>
          <td>
            <Monospace>Z</Monospace>
          </td>
        </tr>
        <tr>
          <td>German</td>
          <td className={montserrat.className}>
            Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.
          </td>
          <td>Franz drives all across Bavaria in a totally run-down taxi.</td>
          <td>
            10 10 4 18 23 11{' '}
            <i>
              <b>11</b>
            </i>{' '}
            13 9 17
          </td>
          <td>
            cat
            <br />
            <span className={montserrat.className}>KATZE</span>
            <br />
            10
          </td>
          <td>1</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Italian</td>
          <td className={montserrat.className}>
            In quel campo si trovan funghi in abbondanza
          </td>
          <td>In that field, mushrooms are to be found in abundance</td>
          <td>
            4 17 12 3 14 28{' '}
            <i>
              <b>30</b>
            </i>{' '}
            4 33
          </td>
          <td>
            broom
            <br />
            <span className={montserrat.className}>SCOPA</span>
            <br />
            11
          </td>
          <td>19</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Slovene</td>
          <td className={montserrat.className}>
            V kožuščku hudobnega fanta stopiclja mizar
          </td>
          <td>A cabinetmaker steps lightly through a malicious boy fur coat</td>
          <td>
            2 34 22 14 18 10{' '}
            <i>
              <b>32</b>
            </i>
          </td>
          <td>
            apple
            <br />
            <span className={montserrat.className}>JABOLKO</span>
            <br />
            12
          </td>
          <td>20</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Polish</td>
          <td className={montserrat.className}>
            Pchnąć w tę łódź jeża lub ośm skrzyń fig
          </td>
          <td>Push into this boat a hedgehog or eight boxes of figs</td>
          <td>
            19 1 7 19 10 8 8 14{' '}
            <i>
              <b>31</b>
            </i>{' '}
            9
          </td>
          <td>
            drum
            <br />
            <span className={montserrat.className}>BĘBEN</span>
            <br />
            13
          </td>
          <td>18</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Lithuanian</td>
          <td className={montserrat.className}>
            Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą
          </td>
          <td>
            Incurving fencer sword sparkled and perforated a round watermelon
          </td>
          <td>
            19 41{' '}
            <i>
              <b>23</b>
            </i>{' '}
            14 29 30 17 30
          </td>
          <td>
            bird
            <br />
            <span className={montserrat.className}>PAUKŠTIS</span>
            <br />
            14
          </td>
          <td>9</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dutch</td>
          <td className={montserrat.className}>
            Pa's wijze lynx bezag vroom het fikse aquaduct
          </td>
          <td>Dad's wise lynx piously regarded the substantial aqueduct</td>
          <td>
            6 15 20 12{' '}
            <i>
              <b>31</b>
            </i>{' '}
            11 7 11 29
          </td>
          <td>
            scissors
            <br />
            <span className={montserrat.className}>SCHAAR</span>
            <br />
            15
          </td>
          <td>16</td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
