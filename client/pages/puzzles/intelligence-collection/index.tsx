import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/intelligence-collection/0.png';
import image1 from 'assets/puzzles/intelligence-collection/1.png';
import image2 from 'assets/puzzles/intelligence-collection/2.png';
import image3 from 'assets/puzzles/intelligence-collection/3.png';
import image4 from 'assets/puzzles/intelligence-collection/4.png';
import image5 from 'assets/puzzles/intelligence-collection/5.png';
import image6 from 'assets/puzzles/intelligence-collection/6.png';
import image7 from 'assets/puzzles/intelligence-collection/7.png';

const SLUG = 'intelligence-collection';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Can you keep up with the competing pairs of enemy intelligence agents
          facing off in life and death games in each of the fields below?
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image0} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>BAND</td>
              <td>CARDINAL</td>
              <td>CASCADES</td>
              <td>BLOW</td>
              <td>ROOKIE</td>
            </tr>
            <tr>
              <td>SYNDICATE</td>
              <td>UMBRELLA</td>
              <td>EAGLE</td>
              <td>CHEF</td>
              <td>FLYER</td>
            </tr>
            <tr>
              <td>METEOR</td>
              <td>DIRT</td>
              <td>FRENCH</td>
              <td>ROOT</td>
              <td>WASHER</td>
            </tr>
            <tr>
              <td>PASSENGER</td>
              <td>RADIO</td>
              <td>ISLAND</td>
              <td>SEAL</td>
              <td>SIMPLE</td>
            </tr>
            <tr>
              <td>STEAL</td>
              <td>TABLE</td>
              <td>HOOK</td>
              <td>TRAIN</td>
              <td>WOLVERINE</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ (4)</b>
          <br />
          <b>_ _ _ _ _ _ (6)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image1} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>ANIMATED</td>
              <td>KEEP</td>
              <td>LENGTH</td>
              <td>UNIVERSE</td>
              <td>MEMORY</td>
            </tr>
            <tr>
              <td>BRAKE</td>
              <td>CARE</td>
              <td>REGAL</td>
              <td>BRIDGE</td>
              <td>EXIT</td>
            </tr>
            <tr>
              <td>LANDING</td>
              <td>NUMBER</td>
              <td>PLAN</td>
              <td>POWER</td>
              <td>SQUISHY</td>
            </tr>
            <tr>
              <td>ORIGINS</td>
              <td>HORSE</td>
              <td>INSECT</td>
              <td>ROOM</td>
              <td>STATE</td>
            </tr>
            <tr>
              <td>SYDNEY</td>
              <td>TANG</td>
              <td>GRASS</td>
              <td>WHALE</td>
              <td>ROCK</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ _ _ _ _ _ (9)</b>
          <br />
          <b>_ _ _ _ (4)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image2} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>AWARDS</td>
              <td>HANDLE</td>
              <td>DOZEN</td>
              <td>CHAIR</td>
              <td>FENCE</td>
            </tr>
            <tr>
              <td>GENERAL</td>
              <td>ODYSSEY</td>
              <td>GUITAR</td>
              <td>HISTORY</td>
              <td>KIDS</td>
            </tr>
            <tr>
              <td>LAMP</td>
              <td>SHADOW</td>
              <td>MOTOR</td>
              <td>SPELL</td>
              <td>PLATFORM</td>
            </tr>
            <tr>
              <td>PREMIUM</td>
              <td>SHEEP</td>
              <td>REWIND</td>
              <td>INFINITY</td>
              <td>NEWSPAPER</td>
            </tr>
            <tr>
              <td>HOTEL</td>
              <td>SHOCK</td>
              <td>STREAMING</td>
              <td>EVERGREEN</td>
              <td>STUDIO</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ _ _ _ (7)</b>
          <br />
          <b>_ _ _ _ _ _ _ _ (8)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image3} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>DOG</td>
              <td>MATHEMATICS</td>
              <td>DOZE</td>
              <td>NEEDLE</td>
              <td>NIGHT</td>
            </tr>
            <tr>
              <td>FROG</td>
              <td>EXPLOSION</td>
              <td>HORN</td>
              <td>MARKET</td>
              <td>BORED</td>
            </tr>
            <tr>
              <td>CROSS</td>
              <td>CUTE</td>
              <td>NOSE</td>
              <td>PEN</td>
              <td>REVELATIONS</td>
            </tr>
            <tr>
              <td>PIT</td>
              <td>RIDE</td>
              <td>DIZZY</td>
              <td>GUT</td>
              <td>NUCLEUS</td>
            </tr>
            <tr>
              <td>LUCKY</td>
              <td>SHY</td>
              <td>WORDS</td>
              <td>IRIS</td>
              <td>DOLL</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ (4)</b>
          <br />
          <b>_ _ _ _ _ _ _ (7)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image4} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>IGLOO</td>
              <td>DROP</td>
              <td>DAIRY</td>
              <td>DRAG</td>
              <td>FLOOR</td>
            </tr>
            <tr>
              <td>DRAMA</td>
              <td>FAIRY</td>
              <td>FRONT</td>
              <td>POND</td>
              <td>IGUANA</td>
            </tr>
            <tr>
              <td>ENGINE</td>
              <td>BROTHERHOOD</td>
              <td>RAG</td>
              <td>SALT</td>
              <td>SPRAY</td>
            </tr>
            <tr>
              <td>MATTRESS</td>
              <td>MERCURY</td>
              <td>SALOON</td>
              <td>SOIL</td>
              <td>VIEW</td>
            </tr>
            <tr>
              <td>VOYAGE</td>
              <td>PROM</td>
              <td>YARD</td>
              <td>PROMOTE</td>
              <td>ZONE</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ _ (5)</b>
          <br />
          <b>_ _ _ _ _ (5)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image5} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>CHARLES</td>
              <td>ELF</td>
              <td>UNITY</td>
              <td>XYLOPHONE</td>
              <td>DEATH</td>
            </tr>
            <tr>
              <td>BIG</td>
              <td>GUN</td>
              <td>HOPE</td>
              <td>EVIDENCE</td>
              <td>VACUUM</td>
            </tr>
            <tr>
              <td>BOTTOM</td>
              <td>CRAB</td>
              <td>EMPIRE</td>
              <td>AUDIENCE</td>
              <td>LIGHT</td>
            </tr>
            <tr>
              <td>GALA</td>
              <td>BODY</td>
              <td>JACK</td>
              <td>STING</td>
              <td>JOBS</td>
            </tr>
            <tr>
              <td>IVORY</td>
              <td>STRAIGHT</td>
              <td>TRACE</td>
              <td>PINE</td>
              <td>SAUCE</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ _ (5) </b>
          <br />
          <b>_ _ _ (3)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image6} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>DECREE</td>
              <td>COMPOUND</td>
              <td>OLYMPICS</td>
              <td>FAMILY</td>
              <td>GUARD</td>
            </tr>
            <tr>
              <td>ALARM</td>
              <td>CROW</td>
              <td>FRIGHTEN</td>
              <td>MARBLE</td>
              <td>ICING</td>
            </tr>
            <tr>
              <td>MAIL</td>
              <td>HALLOWEEN</td>
              <td>JUMP</td>
              <td>QUOTES</td>
              <td>STIFF</td>
            </tr>
            <tr>
              <td>TACTIC</td>
              <td>TILE</td>
              <td>NAVY</td>
              <td>PRINCE</td>
              <td>RUMBLE</td>
            </tr>
            <tr>
              <td>EAST</td>
              <td>IRON</td>
              <td>ROLL</td>
              <td>SOCIETY</td>
              <td>MIRAGE</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ _ (5) </b>
          <br />
          <b>_ _ _ _ _ (5)</b>
        </p>
        <hr className="my-6" />
        <p className={cx(NO_COPY_CLASS)}>
          <SheetableImage alt="" src={image7} title="" />
        </p>
        <Table noBorder className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td>CAKE</td>
              <td>ANKLE</td>
              <td>FEAST</td>
              <td>GREEK</td>
              <td>NICKEL</td>
            </tr>
            <tr>
              <td>MARCH</td>
              <td>NORTH</td>
              <td>DISH</td>
              <td>TEMPO</td>
              <td>OPPONENT</td>
            </tr>
            <tr>
              <td>END</td>
              <td>YOGA</td>
              <td>ATHLETE</td>
              <td>FREEZE</td>
              <td>PRESENT</td>
            </tr>
            <tr>
              <td>FRY</td>
              <td>RING</td>
              <td>PROFOUND</td>
              <td>SHOTGUN</td>
              <td>ROGUE</td>
            </tr>
            <tr>
              <td>SIX</td>
              <td>SINGER</td>
              <td>TAG</td>
              <td>SKIN</td>
              <td>SPACE</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <b>_ _ _ _ (4)</b>
          <br />
          <b>_ _ _ _ _ _ _ (7)</b>
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
