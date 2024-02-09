import { FC } from 'react';

import Attributions from 'components/attributions';
import InfoIcon from 'components/info_icon';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/game-to-be-themed-later/0.png';
import image1 from 'assets/solutions/game-to-be-themed-later/1.png';
import image2 from 'assets/solutions/game-to-be-themed-later/2.png';
import image3 from 'assets/solutions/game-to-be-themed-later/3.png';
import image4 from 'assets/solutions/game-to-be-themed-later/4.png';
import image5 from 'assets/solutions/game-to-be-themed-later/5.png';
import image6 from 'assets/solutions/game-to-be-themed-later/6.png';
import image7 from 'assets/solutions/game-to-be-themed-later/7.png';
import image8 from 'assets/solutions/game-to-be-themed-later/8.png';
import image9 from 'assets/solutions/game-to-be-themed-later/9.png';

const SLUG = 'game-to-be-themed-later';
const ANSWER = `PAINTED EGG`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <InfoIcon>Click any image to open it in a new window.</InfoIcon>
    <h3>Part 1</h3>
    <p>
      We are provided with 6 printouts of paper, 5 of which are pinball
      playfields. Each of the printouts has holes cut out of them, such that
      when stacked we can see to another layer.
    </p>
    <p>
      We should ID the five pinball playfields, each of which has a number word
      hidden inside it. Stacking the images in order, 1 through 5, with the
      black cover sheet on top, gives the intermediate phrase{' '}
      <Clue>PLAY A MEAN PINBALL</Clue> when read left to right starting from the
      top downward.
    </p>
    <Table className="games-table">
      <thead>
        <tr>
          <th>Game</th>
          <th>Associated Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            TWILIGHT Z<u>ONE</u>
          </td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            <u>DUO</u>
            TRON
          </td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            CLOSE ENCOUNTERS OF THE <u>THIRD</u> KIND
          </td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            <u>QUARTER</u>
            BACK
          </td>
          <td>4</td>
        </tr>
        <tr>
          <td>
            INDIANAPOLIS <u>500</u>
          </td>
          <td>5</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Table className="table-fixed w-full pictures-table">
      <tbody>
        <tr>
          <td colSpan={2}>
            <b>Provided images</b>
          </td>
        </tr>
        <tr>
          <td className="w-1/2">
            <a href={image0} target="_blank">
              <SheetableImage
                alt="Black overlay image provided with holes cut out."
                src={image0}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            Black overlay image provided with holes cut out.
          </td>
          <td className="w-1/2">
            <a href={image1} target="_blank">
              <SheetableImage
                alt="Playfield art of the pinball machine QUARTERBACK with holes cut out."
                src={image1}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            Playfield art of the pinball machine QUARTERBACK with holes cut out.
          </td>
        </tr>
        <tr>
          <td>
            <a href={image2} target="_blank">
              <SheetableImage
                alt="Playfield art of the pinball machine CLOSE ENCOUNTERS OF THE THIRD KIND with holes cut out."
                src={image2}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            Playfield art of the pinball machine CLOSE ENCOUNTERS OF THE THIRD
            KIND with holes cut out.
          </td>
          <td>
            <a href={image3} target="_blank">
              <SheetableImage
                alt="Playfield art of the pinball machine DUOTRON with holes cut out."
                src={image3}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            Playfield art of the pinball machine DUOTRON with holes cut out.
          </td>
        </tr>
        <tr>
          <td>
            <a href={image4} target="_blank">
              <SheetableImage
                alt="Playfield art of the pinball machine INDIANAPOLIS 500 with holes cut out."
                src={image4}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            Playfield art of the pinball machine INDIANAPOLIS 500 with holes cut
            out.
          </td>
          <td>
            <a href={image5} target="_blank">
              <SheetableImage
                alt="Playfield art of the pinball machine TWILIGHT ZONE with holes cut out."
                src={image5}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            Playfield art of the pinball machine TWILIGHT ZONE with holes cut
            out.
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <b>Image overlay:</b>
          </td>
        </tr>
        <tr>
          <td>
            <a href={image6} target="_blank">
              <SheetableImage
                alt="The stack of 6 images overlaid allows us to read PLAY A MEAN PINBALL through the holes in the black top sheet."
                src={image6}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            The stack of 6 images overlaid allows us to read{' '}
            <Clue>PLAY A MEAN PINBALL</Clue> through the holes in the black top
            sheet.
          </td>
          <td>
            <a href={image7} target="_blank">
              <SheetableImage
                alt='The playfields overlaid with the letters comprising "PLAY A MEAN PINBALL" circled with the number of the game they are from. '
                src={image7}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            The playfields overlaid with the letters comprising "
            <Clue>PLAY A MEAN PINBALL</Clue>" circled with the number of the
            game they are from.
          </td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Part 2</h3>
    <p>
      We are prompted to refresh the puzzle page, which gives a box to schedule
      an appointment to visit HQ. We are then taken to a room which has a
      custom-made pinball machine inside. The playfield art is a combination of
      the art from the first half of the puzzle:
    </p>
    <Table className="table-fixed w-full pictures-table">
      <tbody>
        <tr>
          <td>
            <a href={image8} target="_blank">
              <SheetableImage
                alt="The custom-made pinball machine's playfield art."
                src={image8}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            The custom-made pinball machine's playfield art.
          </td>
          <td>
            <a href={image9} target="_blank">
              <SheetableImage
                alt="The custom-made pinball machine's playfield art, with shots labelled."
                src={image9}
                title=""
                className="h-[500px] mx-auto mb-4"
              />
            </a>
            The custom-made pinball machine's playfield art, with shots
            labelled.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>By completing shots, two possible scores appear per shot:</p>
    <ul>
      <li>
        If the shot is hit in the sequence 12345 (based on the numbering of the
        initial playfields), the shot prompts a flashing animation "COMBO!"
        followed by "+###" on the score display for a few seconds before
        returning to the current score, as well as lighting up the arrow under
        that shot to indicate it has been done for the combo.
      </li>
      <li>
        If the shot is hit outside the sequence (e.g., hitting 1 after hitting
        2), the shot prompts the text "+###" (without the flashing and the
        "COMBO!" text) for a few seconds before returning to the current score.
        When the entire combo 12345 is completed, the scoreboard displays the
        text "COMBO COMPLETED!!!", allowing the us to go for the combo again
        starting at 1.
      </li>
    </ul>
    <p>
      Using the number of points won in either a combo or singular shot gives a
      pair of letters, which when ordered gives the answer phrase{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Order in combo</th>
          <th>Shot (Image)</th>
          <th>Pinball game</th>
          <th>Combo points</th>
          <th>Score / 1000 A1Z26</th>
          <th>Non- combo points</th>
          <th>Score / 1000 A1Z26</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Right Kicker (Rod Sterling)</td>
          <td>TWILIGHT ZONE</td>
          <td>16000</td>
          <td>P</td>
          <td>1000</td>
          <td>A</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Right Orbit (Bonus and 500 points)</td>
          <td>DUOTRON</td>
          <td>9000</td>
          <td>I</td>
          <td>14000</td>
          <td>N</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Left orbit (alien face)</td>
          <td>CLOSE ENCOUNTERS OF THE THIRD KIND</td>
          <td>20000</td>
          <td>T</td>
          <td>5000</td>
          <td>E</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Middle Ramp (Green background)</td>
          <td>QUARTERBACK</td>
          <td>4000</td>
          <td>D</td>
          <td>5000</td>
          <td>E</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Left Ramp (jackpot + increase boost)</td>
          <td>INDIANAPOLIS 500</td>
          <td>7000</td>
          <td>G</td>
          <td>7000</td>
          <td>G</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Attributions>
      <p>
        Playfield art for Twilight Zone:{' '}
        <a href="https://www.ipdb.org/showpic.pl?id=2684&amp;picno=9847">
          https://www.ipdb.org/showpic.pl?id=2684&amp;picno=9847
        </a>
         IPDB, Christopher Wolfe
      </p>
      <p>
        Playfield art for Duotron:
        <a href="https://www.ipdb.org/showpic.pl?id=744&amp;picno=81856">
          https://www.ipdb.org/showpic.pl?id=744&amp;picno=81856
        </a>
         IPDB.org, stitched together from Juan Antonio Sanchez
      </p>
      <p>
        Playfield art for Close Encounters of the Third Kind:{' '}
        <a href="https://www.vpforums.org/index.php?app=downloads&amp;showfile=15212">
          https://www.vpforums.org/index.php?app=downloads&amp;showfile=15212
        </a>
         SCAPINO and wiesshund on vpforums.org
      </p>
      <p>
        Playfield art for Quarterback:{' '}
        <a href="https://www.vpforums.org/index.php?app=downloads&amp;showfile=4758">
          https://www.vpforums.org/index.php?app=downloads&amp;showfile=4758
        </a>
         Sabbat on vpforums.org
      </p>
      <p>
        Playfield art for Indianapolis 500:
        <a href="https://www.vpforums.org/index.php?app=downloads&amp;showfile=2208">
          https://www.vpforums.org/index.php?app=downloads&amp;showfile=2208
        </a>
         wtiger on vpforums.org
      </p>
    </Attributions>
    <style jsx global>{`
      .pictures-table td {
        vertical-align: top;
      }
      .extract-table td:nth-child(2n + 5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .games-table td:nth-child(2),
      .extract-table td:nth-child(1),
      .extract-table td:nth-child(n + 4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
