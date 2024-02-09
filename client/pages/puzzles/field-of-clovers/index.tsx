import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/field-of-clovers/0.png';
import image1 from 'assets/puzzles/field-of-clovers/1.png';
import image2 from 'assets/puzzles/field-of-clovers/2.png';
import image3 from 'assets/puzzles/field-of-clovers/3.png';
import image4 from 'assets/puzzles/field-of-clovers/4.png';
import image5 from 'assets/puzzles/field-of-clovers/5.png';
import image6 from 'assets/puzzles/field-of-clovers/6.png';
import image7 from 'assets/puzzles/field-of-clovers/7.png';
import image8 from 'assets/puzzles/field-of-clovers/8.png';
import image9 from 'assets/puzzles/field-of-clovers/9.png';

const SLUG = 'field-of-clovers';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          SO many CLOVERs! And in so many colors! Legend has it that each of
          these beautiful colors has a different meaning. Legend also says that
          spinning these clovers' leaves 180 degrees will produce even more
          clovers, and all these clovers will cross-pollinate and bloom into
          beautiful four-colored flowers, the tips of whose petals will signal
          what would taste great on this fine summer day.
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click on any image to open it in a new window. Information in the
          images is available in copy-to-clipboard.
        </InfoIcon>
        <p>
          Tiles rotate but do not flip; the 4-color frames neither rotate nor
          flip.
        </p>
        <p>
          <a target="_blank" href={image0}>
            <SheetableImage alt="" src={image0} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Barack (orange)</td>
              <td>Cat (purple)</td>
              <td>Drop (green)</td>
              <td>Paneer (blue)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Anchor</td>
              <td>Tank</td>
              <td>Weasels</td>
              <td>Easy</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Assholeishness</td>
              <td>Door</td>
              <td>Chap</td>
              <td>Lawn</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Autocracy</td>
              <td>Centering</td>
              <td>Dig</td>
              <td>Burgundy</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Babying</td>
              <td>Opposed</td>
              <td>Man</td>
              <td>Lemon</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Degree</td>
              <td>Skanks</td>
              <td>Hitch</td>
              <td>Guide</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Even</td>
              <td>Tissue</td>
              <td>Indulge</td>
              <td>Rack</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image1}>
            <SheetableImage alt="" src={image1} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Bread (green)</td>
              <td>Spending (pink)</td>
              <td>Pay (orange)</td>
              <td>Musician (aqua)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Abyss</td>
              <td>Low</td>
              <td>Shakespeare</td>
              <td>Love</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Alternating</td>
              <td>Chert</td>
              <td>Cake</td>
              <td>Bleats</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Break</td>
              <td>Christmas</td>
              <td>Story</td>
              <td>Sing</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Bustard</td>
              <td>Impudent</td>
              <td>White</td>
              <td>Ratify</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Clasp</td>
              <td>Hill</td>
              <td>Single</td>
              <td>Pudding</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Fathering</td>
              <td>Season</td>
              <td>Wasp</td>
              <td>Peaky</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image2}>
            <SheetableImage alt="" src={image2} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Coincide (red)</td>
              <td>Table (green)</td>
              <td>Ace (purple)</td>
              <td>Doubles (pink)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Artist</td>
              <td>Essen</td>
              <td>Kill</td>
              <td>Warp</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Chi</td>
              <td>Slaws</td>
              <td>More</td>
              <td>Salt</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Coffee</td>
              <td>Water</td>
              <td>Down</td>
              <td>Money</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Diminish</td>
              <td>Rough</td>
              <td>Rugby</td>
              <td>Scout</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Grass</td>
              <td>Syndicates</td>
              <td>Hysterias</td>
              <td>Hard</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Parish</td>
              <td>Time</td>
              <td>Sesquipedalian</td>
              <td>Startle</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image3}>
            <SheetableImage alt="" src={image3} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Finlander (pink)</td>
              <td>Labor (orange)</td>
              <td>Montana (yellow)</td>
              <td>Pickle (purple)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Appall</td>
              <td>Solo</td>
              <td>Prairie</td>
              <td>Rafters</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Buyer</td>
              <td>Guy</td>
              <td>Dog</td>
              <td>Face</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Collaboration</td>
              <td>Frill</td>
              <td>Thong</td>
              <td>Pilfered</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Dough</td>
              <td>Mind</td>
              <td>Golfers</td>
              <td>Like</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Dream</td>
              <td>Peace</td>
              <td>Possession</td>
              <td>Scar</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Jump</td>
              <td>Master</td>
              <td>Maim</td>
              <td>Really</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image4}>
            <SheetableImage alt="" src={image4} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Ham (aqua)</td>
              <td>Block (green)</td>
              <td>Vouch (blue)</td>
              <td>Bison (red)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Battery</td>
              <td>Jam</td>
              <td>Pipe</td>
              <td>Fallow</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Chain</td>
              <td>Lass</td>
              <td>Grand</td>
              <td>Wine</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Child</td>
              <td>Letters</td>
              <td>Lap</td>
              <td>Stroke</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Cursed</td>
              <td>New</td>
              <td>Hope</td>
              <td>Sayonara</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Disrobe</td>
              <td>Engine</td>
              <td>Sofa</td>
              <td>Israel</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Eton</td>
              <td>Puppet</td>
              <td>Potter</td>
              <td>Fish</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image5}>
            <SheetableImage alt="" src={image5} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Haste (pink)</td>
              <td>Conifer (aqua)</td>
              <td>Verbal (yellow)</td>
              <td>Detail (red)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Affair</td>
              <td>Dent</td>
              <td>Antidote</td>
              <td>Athens</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Car</td>
              <td>Prevent</td>
              <td>Steady</td>
              <td>Hinge</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Crone</td>
              <td>Going</td>
              <td>Pinot</td>
              <td>Poe</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Fire</td>
              <td>Suspect</td>
              <td>Rule</td>
              <td>Northern</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Jollity</td>
              <td>Usual</td>
              <td>Wag</td>
              <td>Quirk</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Mince</td>
              <td>Pringle</td>
              <td>Rotate</td>
              <td>Pin</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image6}>
            <SheetableImage alt="" src={image6} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Indiana (yellow)</td>
              <td>Souls (aqua)</td>
              <td>Bulls (blue)</td>
              <td>Taboo (orange)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Average</td>
              <td>Near</td>
              <td>Manges</td>
              <td>Dollars</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Bird</td>
              <td>Wig</td>
              <td>Key</td>
              <td>Dial</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Cashier</td>
              <td>Speed</td>
              <td>Mountains</td>
              <td>Handstands</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Code</td>
              <td>Marias</td>
              <td>Strait</td>
              <td>Hazel</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Destiny</td>
              <td>Hosts</td>
              <td>Lease</td>
              <td>Lent</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Face</td>
              <td>Spheres</td>
              <td>Rounds</td>
              <td>Sink</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image7}>
            <SheetableImage alt="" src={image7} title="" className="mx-auto" />
          </a>
        </p>
        <Table className={cx(HIDDEN_CLASS)} noBorder={true}>
          <tbody>
            <tr>
              <td>Frame:</td>
              <td>Mows (purple)</td>
              <td>Powers (yellow)</td>
              <td>Toadies (red)</td>
              <td>Kind (blue)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tile 1</td>
              <td>Bad</td>
              <td>Frogs</td>
              <td>Tut</td>
              <td>Romero</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 2</td>
              <td>Card</td>
              <td>Shag</td>
              <td>Message</td>
              <td>Passport</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 3</td>
              <td>Flick</td>
              <td>Monitor</td>
              <td>String</td>
              <td>Poet</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
            </tr>
            <tr>
              <td>Tile 4</td>
              <td>Green</td>
              <td>Tree</td>
              <td>Pasts</td>
              <td>Stable</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 5</td>
              <td>Half</td>
              <td>Spy</td>
              <td>Small</td>
              <td>Yellow</td>
              <td></td>
              <td>Offsets:</td>
              <td>Right</td>
              <td>Left</td>
              <td>Right</td>
              <td>Right</td>
            </tr>
            <tr>
              <td>Tile 6</td>
              <td>Make</td>
              <td>Tangle</td>
              <td>Yutz</td>
              <td>Seat</td>
              <td></td>
              <td>Offsets:</td>
              <td>Left</td>
              <td>Right</td>
              <td>Left</td>
              <td>Left</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <a target="_blank" href={image8}>
            <SheetableImage alt="" src={image8} title="" className="mx-auto" />
          </a>
        </p>
        <p>
          <a target="_blank" href={image9}>
            <SheetableImage alt="" src={image9} title="" className="mx-auto" />
            <span className={cx(HIDDEN_CLASS)}>Check image for details.</span>
          </a>
          <br />
          <span className={cx(HIDDEN_CLASS)}>
            Answer = 3 (green) 6 (purple) 4 (orange) 4 (blue)
          </span>
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
