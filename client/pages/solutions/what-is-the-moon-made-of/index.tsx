import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution from 'components/solution';
import Table from 'components/table';

const SLUG = 'what-is-the-moon-made-of';
const ANSWER = `HELIUM`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The flavortext mentions two things found in the Monty Python Cheese Shop
      skit&mdash;bouzouki music, and no cheese. The Cheese Shop joke is that the shop
      doesn't actually have any cheese, yet the customer asks for MANY varieties
      of cheeses to see if they are in stock. The first 26 cheeses in that skit
      are listed here, and represent the substitution cipher of alphabet letters
      used in the puzzle:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>Red Leicester</td>
        </tr>
        <tr>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>Tilsit</td>
        </tr>
        <tr>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>Caerphilly</td>
        </tr>
        <tr>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>Bel Paese</td>
        </tr>
        <tr>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>Red Windsor</td>
        </tr>
        <tr>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td>Stilton</td>
        </tr>
        <tr>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>Gruyere</td>
        </tr>
        <tr>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>Emmental</td>
        </tr>
        <tr>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>Norwegian Jarlsberg</td>
        </tr>
        <tr>
          <td>
            <Monospace>J</Monospace>
          </td>
          <td>Liptauer</td>
        </tr>
        <tr>
          <td>
            <Monospace>K</Monospace>
          </td>
          <td>Lancashire</td>
        </tr>
        <tr>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>White Stilton</td>
        </tr>
        <tr>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>Danish Blue</td>
        </tr>
        <tr>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>Double Gloucester</td>
        </tr>
        <tr>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>Cheshire</td>
        </tr>
        <tr>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>Dorset Blue Vinney</td>
        </tr>
        <tr>
          <td>
            <Monospace>Q</Monospace>
          </td>
          <td>Brie</td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>Roquefort</td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Pont l'Eveque</td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>Port Salut</td>
        </tr>
        <tr>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>Savoyard</td>
        </tr>
        <tr>
          <td>
            <Monospace>V</Monospace>
          </td>
          <td>Saint-Paulin</td>
        </tr>
        <tr>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>Carre de l'Est</td>
        </tr>
        <tr>
          <td>
            <Monospace>X</Monospace>
          </td>
          <td>Boursin</td>
        </tr>
        <tr>
          <td>
            <Monospace>Y</Monospace>
          </td>
          <td>Bresse-Bleu</td>
        </tr>
        <tr>
          <td>
            <Monospace>Z</Monospace>
          </td>
          <td>Perle de Champagne</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The puzzle presents pictures of cheeses from this list. We can solve it
      either as a cryptogram, or using the list above as an A1&ndash;Z26 substitution.{' '}
      The cheeses will spell out a moon of Jupiter, one per shelf of cheese
      pictures. These six moons of Jupiter also have a roman numeral, which in
      A1&ndash;Z26 notation we get the answer{' '}
      <b>
        <Monospace>HELIUM</Monospace>
      </b>
      .
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Moon</th>
          <th>Cheeses</th>
          <th>Roman Numeral Designation</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>PASIPHAE</Monospace>
          </td>
          <td>
            Dorset Blue Vinney, Red Leicester, Pont l'Eveque, Norwegian
            Jarlsberg, Dorset Blue Vinney, Emmental, Red Leicester, Red Windsor
          </td>
          <td>
            <Monospace>VIII</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>AMALTHEA</Monospace>
          </td>
          <td>
            Red Leicester, Danish Blue, Red Leicester, White Stilton, Port
            Salut, Emmental, Red Windsor, Red Leicester
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>ANANKE</Monospace>
          </td>
          <td>
            Red Leicester, Double Gloucester, Red Leicester, Double Gloucester,
            Lancashire, Red Windsor
          </td>
          <td>
            <Monospace>XII</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SINOPE</Monospace>
          </td>
          <td>
            Pont l'Eveque, Norwegian Jarlsberg, Double Gloucester, Cheshire,
            Dorset Blue Vinney, Red Windsor
          </td>
          <td>
            <Monospace>IX</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CHALDENE</Monospace>
          </td>
          <td>
            Caerphilly, Emmental, Red Leicester, White Stilton, Bel Paese, Red
            Windsor, Double Gloucester, Red Windsor
          </td>
          <td>
            <Monospace>XXI</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>LEDA</Monospace>
          </td>
          <td>White Stilton, Red Windsor, Bel Paese, Red Leicester</td>
          <td>
            <Monospace>XIII</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <Attributions>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>Cheese</th>
            <th>Attribution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Red Leicester</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Caerphilly</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Bel Paese</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Red Windsor</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Emmental</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Emmentaler_Premier_Cru.jpg">
                Manuel2
              </a>{' '}
              /{' '}
              <a href="https://commons.wikimedia.org/wiki/Main_Page">
                Wikimedia Commons
              </a>{' '}
              /{' '}
              <a href="https://creativecommons.org/licenses/by-sa/2.0/de/deed.en">
                CC BY-SA 2.0 de
              </a>
            </td>
          </tr>
          <tr>
            <td>Norwegian Jarlsberg</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Jarlsberg_cheese.jpg">
                Howcheng
              </a>{' '}
              /{' '}
              <a href="https://commons.wikimedia.org/wiki/Main_Page">
                Wikimedia Commons
              </a>{' '}
              /{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Lancashire</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>White Stilton</td>
            <td>
              <a href="https://cheesehub.com/white-stilton/">
                Fair use from Cheese Hub
              </a>
            </td>
          </tr>
          <tr>
            <td>Danish Blue</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Danish_Blue_cheese.jpg">
                RN Marshman
              </a>{' '}
              /{' '}
              <a href="https://commons.wikimedia.org/wiki/Main_Page">
                Wikimedia Commons
              </a>{' '}
              /{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Double Gloucester</td>
            <td>
              <a href="https://thecheeseworks.co.uk/product/double-gloucester/">
                Fair use from The Cheeseworks
              </a>
            </td>
          </tr>
          <tr>
            <td>Cheshire</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Dorset Blue Vinney</td>
            <td>Public domain</td>
          </tr>
          <tr>
            <td>Pont l'Eveque</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Pont-l%27%C3%89v%C3%AAque_02.jpg">
                Coyau
              </a>{' '}
              /{' '}
              <a href="https://commons.wikimedia.org/wiki/Main_Page">
                Wikimedia Commons
              </a>{' '}
              /{' '}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0
              </a>
            </td>
          </tr>
          <tr>
            <td>Port Salut</td>
            <td>Public domain</td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      #extraction td:nth-child(3),
      #extraction th:nth-child(3),
      #extraction td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
