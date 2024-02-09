import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Table from 'components/table';

const CrkMainEvent: FC<{}> = () => {
  return (
    <>
      <InfoIcon>
        <p>The following will not be used in solving:</p>
        <ul>
          <li>Any characters seen walking around the kingdom.</li>
          <li>
            The area past the pink candy fencing located at the southeast corner
            of the kingdom.
          </li>
        </ul>
      </InfoIcon>
      <p>
        Solve <b>three</b> out of four puzzles to unlock White Lily's
        metapuzzle.
      </p>
      <h3>Pure Vanilla's Puzzle: Pyrrhic Victory</h3>
      <p>
        As he tends to the lines of flowers in the exhibit area, Pure Vanilla
        recalls a strange incident: it was April Fools 2022, and he had
        inadvertently discovered a possible new method of winning the MIT
        Mystery Hunt. <b>How would he best describe himself?</b>
      </p>
      <h3>Hollyberry's Puzzle: Housing Brawls</h3>
      <p>
        Now that dough preparations are complete, Hollyberry decides it's time
        to sort out housing arrangements for the 16 new denizens of the kingdom.
        She has decided on having a set of duels subject to the following rules:
      </p>
      <ul>
        <li>
          Cookies will be paired based on their class, and assigned to house
          style as follows:
          <div className={cx(NO_COPY_CLASS)}>
            <b>Matcha</b> - Long-distance
            <br />
            <b>Bear Jelly</b> - Bolster
            <br />
            <b>Vanilla</b> - ___ attorney
            <br />
            <b>Holiday</b> - Mending
            <br />
            <b>Dark Cacao</b> - Surprise attack
            <br />
            <b>Cupola Choco</b> - B-17, e.g.
            <br />
            <b>Starlight</b> - The M of ILM
            <br />
            <b>Dragon</b> - Ask for payment
          </div>
        </li>
        <li className={cx(HIDDEN_CLASS)}>Matcha - Long-distance</li>
        <li className={cx(HIDDEN_CLASS)}>Bear Jelly - Bolster</li>
        <li className={cx(HIDDEN_CLASS)}>Vanilla - ___ attorney</li>
        <li className={cx(HIDDEN_CLASS)}>Holiday - Mending</li>
        <li className={cx(HIDDEN_CLASS)}>Dark Cacao - Surprise attack</li>
        <li className={cx(HIDDEN_CLASS)}>Cupola Choco - B-17, e.g.</li>
        <li className={cx(HIDDEN_CLASS)}>Starlight - The M of ILM</li>
        <li className={cx(HIDDEN_CLASS)}>Dragon - Ask for payment</li>
        <li>
          Pairs of cookies will duel with their best skills. The skill with more
          letters in its name wins.
        </li>
        <li>
          In the event of a tie, the skill with the longer first word wins.
        </li>
        <li>
          To ensure a fair fight, no magic candies or crystal jams are allowed.
        </li>
        <li>
          Winners will get the mansions, while losers will get the houses.
        </li>
      </ul>
      <br />
      <Table>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">4</td>
            <td className="text-center">4</td>
            <td className="text-center">4</td>
          </tr>
          <tr>
            <td className="text-center">5</td>
            <td className="text-center">8</td>
            <td className="text-center">
              <span className={cx(HIDDEN_CLASS)}>'</span>2, 3
            </td>
            <td className="text-center">7</td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td className="text-center">13</td>
            <td className="text-center">4</td>
            <td className="text-center">7</td>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">8</td>
            <td className="text-center">
              <span className={cx(HIDDEN_CLASS)}>'</span>1, 6
            </td>
            <td className="text-center">2</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>What two feats did Hollyberry achieve during her last duel?</b>
      </p>
      <h3>Dark Cacao's Puzzle: Doing Chores</h3>
      <p>
        Dark Cacao maintains a strong work ethic in his district, ensuring all
        goods are produced at a consistent level of quality, and discouraging
        production of goods in bulk.{' '}
        <b>To wind down after a busy workweek, what should he do?</b>
      </p>
      <h3>Golden Cheese's Puzzle: Gnome Codes</h3>
      <p>
        Alas, Golden Cheese could not make it to the kingdom, so she instead had
        the gnomes write a puzzle in her absence. Supposedly she has news
        regarding a certain dude and his shoes; <b>What is it?</b>
      </p>
      <Table>
        <tbody>
          <tr>
            <td className="text-center ">
              |<br />
              <span className={cx(HIDDEN_CLASS)}> (</span>
              01 06 12 10
              <span className={cx(HIDDEN_CLASS)}> )</span>
            </td>
            <td className="text-center">
              | ╷<br />
              <span className={cx(HIDDEN_CLASS)}> (</span>
              02 13 17 09
              <span className={cx(HIDDEN_CLASS)}> )</span>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              | |<br />
              <span className={cx(HIDDEN_CLASS)}> (</span>
              07 11 05 16 03
              <span className={cx(HIDDEN_CLASS)}> )</span>
            </td>
            <td className="text-center">
              | _<br />
              <span className={cx(HIDDEN_CLASS)}> (</span>
              14 18 04 15 08
              <span className={cx(HIDDEN_CLASS)}> )</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CrkMainEvent;
