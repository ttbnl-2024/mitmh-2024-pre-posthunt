import cx from 'classnames';
import { Oswald, Satisfy } from 'next/font/google';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'luxor';

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
});
const oswald = Oswald({ subsets: ['latin'] });

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          These restaurants' head cooks have prepared menus for their seasonal
          battle, but the judges have noticed that something seems off. What
          could solve this problem?
        </FlavorText>
        <div className={cx('flex', 'mx-auto', 'justify-center', NO_COPY_CLASS)}>
          <div className={`w-1/2 text-center px-2 ${satisfy.className}`}>
            <h3>
              <u>Restaurant 1</u>
            </h3>
            <p>
              Amuse-bouche:
              <br />
              Beet-Cured Hamachi with Avocado Mousse, Osetra Caviar &amp; Celery
              Liquorice Emulsion
            </p>
            <p>
              Appetizer:
              <br />
              Chickpea Cake with Seared Octopus, Masala Tomato Sauce &amp;
              Arugula Salad
            </p>
            <p>
              First Course:
              <br />
              Asparagus and Ostrich Egg
            </p>
            <p>
              Second Course:
              <br />
              Pan-Roasted Kingfish, Fennel Marmalade &amp; Tomato-Fennel
              Emulsion
            </p>
            <p>
              Third Course:
              <br />
              Emmenthal Gnudi, Braised Oxtail Ragout, Arugula &amp; Lemon Zest{' '}
            </p>
            <p>
              Fourth Course:
              <br />
              Lebkuchen My Way - Rice Flour Cake with Mascarpone &amp; Plantain
              Cream
            </p>
          </div>
          <div className={`w-1/2 text-center px-2 ${oswald.className}`}>
            <h3>
              <u>Restaurant 2</u>
            </h3>
            <p>
              Drink:
              <br />
              Strawberry Limonada
            </p>
            <p>
              Amuse-bouche:
              <br />
              Vegetable Roll with Mushrooms, Edamame, Cabbage &amp; Sweet Chili
              Sauce
            </p>
            <p>
              Appetizer:
              <br />
              Marinated Beets with Pickled Watermelon, Baby Greens &amp; Shaved
              Garrotxa
            </p>
            <p>
              First Course:
              <br />
              Barbecue Coffee Hot Wing
            </p>
            <p>
              Second Course:
              <br />
              European Halibut with Spanish Chorizo, Fennel &amp; Sherry Salad
            </p>
            <p>
              Adobo:
              <br />
              Rabbit Belly with Mung Bean Purée &amp; Pea Shoots Salad
            </p>
            <p>
              Third Course:
              <br />
              Buttermilk English Cobbler, Apples, Mixed Berries &amp; Cardamom
              Cream
            </p>
          </div>
        </div>

        <Table className={cx(HIDDEN_CLASS)} noBorder>
          <tbody>
            <tr>
              <td>Restaurant 1</td>
              <td></td>
              <td>Restaurant 2</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Amuse-bouche:</td>
              <td></td>
              <td>Drink:</td>
            </tr>
            <tr>
              <td>
                Beet-Cured Hamachi with Avocado Mousse, Osetra Caviar &amp;
                Celery Liquorice Emulsion
              </td>
              <td></td>
              <td>Strawberry Limonada</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Appetizer:</td>
              <td></td>
              <td>Amuse-bouche:</td>
            </tr>
            <tr>
              <td>
                Chickpea Cake with Seared Octopus, Masala Tomato Sauce &amp;
                Arugula Salad
              </td>
              <td></td>
              <td>
                Vegetable Roll with Mushrooms, Edamame, Cabbage &amp; Sweet
                Chili Sauce
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>First Course:</td>
              <td></td>
              <td>Appetizer:</td>
            </tr>
            <tr>
              <td>Asparagus and Ostrich Egg</td>
              <td></td>
              <td>
                Marinated Beets with Pickled Watermelon, Baby Greens &amp;
                Shaved Garrotxa
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Second Course:</td>
              <td></td>
              <td>First Course:</td>
            </tr>
            <tr>
              <td>
                Pan-Roasted Kingfish, Fennel Marmalade &amp; Tomato-Fennel
                Emulsion
              </td>
              <td></td>
              <td>Barbecue Coffee Hot Wing</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Third Course:</td>
              <td></td>
              <td>Second Course:</td>
            </tr>
            <tr>
              <td>
                Emmenthal Gnudi, Braised Oxtail Ragout, Arugula &amp; Lemon Zest
              </td>
              <td></td>
              <td>
                European Halibut with Spanish Chorizo, Fennel &amp; Sherry Salad
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Fourth Course:</td>
              <td></td>
              <td>Adobo:</td>
            </tr>
            <tr>
              <td>
                Lebkuchen My Way - Rice Flour Cake with Mascarpone &amp;
                Plantain Cream
              </td>
              <td></td>
              <td>Rabbit Belly with Mung Bean Purée &amp; Pea Shoots Salad</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Third Course:</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                Buttermilk English Cobbler, Apples, Mixed Berries &amp; Cardamom
                Cream
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
