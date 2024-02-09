import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-strat';
const ANSWER = `MERMAN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>We are provided with 6 pictures of animals and a list of word clues. </p>
    <p>
      The first step is to identify that all of the animals and clued answers
      are 4 letters and presented in alphabetical order. Paired with flavor text
      about the animals converging, we construct word ladders off of each
      animal. The end point of each ladder is the unclued final word{' '}
      <Monospace>CRAB</Monospace> based on the process of carcinization. The
      lengths of the ladders (including <Monospace>CRAB</Monospace>) match the
      enumerations given.
    </p>
    <Table id="word-ladders">
      <tbody>
        <tr>
          <td>MULE</td>
          <td>ORYX</td>
          <td>BOAR</td>
          <td>DOVE</td>
          <td>PIKA</td>
          <td>SLUG</td>
        </tr>
        <tr>
          <td>
            <b>MOLE</b>
          </td>
          <td>ONYX</td>
          <td>BOAT</td>
          <td>DONE</td>
          <td>PICA</td>
          <td>PLUG</td>
        </tr>
        <tr>
          <td>SOLE</td>
          <td>ONIX</td>
          <td>MOAT</td>
          <td>DINE</td>
          <td>PICK</td>
          <td>PLUS</td>
        </tr>
        <tr>
          <td>SALE</td>
          <td>UNIX</td>
          <td>MOAN</td>
          <td>WINE</td>
          <td>PECK</td>
          <td>FLUS</td>
        </tr>
        <tr>
          <td>PALE</td>
          <td>UNIT</td>
          <td>
            <b>MOON</b>
          </td>
          <td>WILE</td>
          <td>PEEK</td>
          <td>FLUE</td>
        </tr>
        <tr>
          <td>PELE</td>
          <td>KNIT</td>
          <td>BOON</td>
          <td>BILE</td>
          <td>PEEP</td>
          <td>
            <b>BLUE</b>
          </td>
        </tr>
        <tr>
          <td>PELT</td>
          <td>KNOT</td>
          <td>BORN</td>
          <td>BILL</td>
          <td>KEEP</td>
          <td>BLUR</td>
        </tr>
        <tr>
          <td>PEAT</td>
          <td>KNOW</td>
          <td>TORN</td>
          <td>BALL</td>
          <td>
            <b>KELP</b>
          </td>
          <td>BLER</td>
        </tr>
        <tr>
          <td>PLAT</td>
          <td>
            <b>SNOW</b>
          </td>
          <td>TORE</td>
          <td>BALD</td>
          <td>HELP</td>
          <td>BEER</td>
        </tr>
        <tr>
          <td>PLAY</td>
          <td>SHOW</td>
          <td>FORE</td>
          <td>BOLD</td>
          <td>HELD</td>
          <td>SEER</td>
        </tr>
        <tr>
          <td>CLAY</td>
          <td>SHAW</td>
          <td>FORT</td>
          <td>BOND</td>
          <td>HEAD</td>
          <td>SEAR</td>
        </tr>
        <tr>
          <td>CLAN</td>
          <td>SHAM</td>
          <td>FART</td>
          <td>MOND</td>
          <td>BEAD</td>
          <td>SEAL</td>
        </tr>
        <tr>
          <td>CRAN</td>
          <td>SHIM</td>
          <td>BART</td>
          <td>MIND</td>
          <td>BRAD</td>
          <td>TEAL</td>
        </tr>
        <tr>
          <td>CRAB</td>
          <td>SHIN</td>
          <td>BARB</td>
          <td>KIND</td>
          <td>BRAG</td>
          <td>TEAM</td>
        </tr>
        <tr>
          <td></td>
          <td>CHIN</td>
          <td>DARB</td>
          <td>
            <b>KING</b>
          </td>
          <td>CRAG</td>
          <td>TRAM</td>
        </tr>
        <tr>
          <td></td>
          <td>CHIB</td>
          <td>DAUB</td>
          <td>SING</td>
          <td>CRAB</td>
          <td>GRAM</td>
        </tr>
        <tr>
          <td></td>
          <td>CRIB</td>
          <td>DRUB</td>
          <td>SINS</td>
          <td></td>
          <td>GRAB</td>
        </tr>
        <tr>
          <td></td>
          <td>CRAB</td>
          <td>DRAB</td>
          <td>BINS</td>
          <td></td>
          <td>CRAB</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>CRAB</td>
          <td>BIOS</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>BROS</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>BROW</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>CROW</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>CROP</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>CRAP</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>CRAB</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Hidden in each ladder is the name of one or more species of crab:{' '}
      <Monospace>MOLE</Monospace>, <Monospace>SNOW</Monospace>,{' '}
      <Monospace>MOON</Monospace>, <Monospace>KING</Monospace>,{' '}
      <Monospace>KELP</Monospace>, and <Monospace>BLUE</Monospace>. For each,
      there is also a specific species with a scientific name with the same
      length of its ladder (<Monospace>MOON</Monospace> and KELP have 2, but
      yield the same letter). Indexing the position of each crab's name in their
      ladder into their scientific name yields <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Common Name</th>
          <th>Scientific Name</th>
          <th>Position</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>MOLE</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
            <b>
              <Monospace>M</Monospace>
            </b>
            <Monospace>IRITA ANALOGA</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SNOW</Monospace>
          </td>
          <td>
            <Monospace>CHIONOEC</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>TES OPILIO</Monospace>
          </td>
          <td>9</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>MOON</Monospace>
          </td>
          <td>
            <Monospace>GECA</Monospace>
            <b>
              <Monospace>R</Monospace>
            </b>
            <Monospace>CINUS LATERALIS / QUADRATUS</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>KING</Monospace>
          </td>
          <td>
            <Monospace>PARALITHODES CA</Monospace>
            <b>
              <Monospace>M</Monospace>
            </b>
            <Monospace>TSCHATICUS</Monospace>
          </td>
          <td>15</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>KELP</Monospace>
          </td>
          <td>
            <Monospace>PUGETTI</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace> PRODUCTA / GRACILIS</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BLUE</Monospace>
          </td>
          <td>
            <Monospace>CALLI</Monospace>
            <b>
              <Monospace>N</Monospace>
            </b>
            <Monospace>ECTES SAPIDUS</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Appendix>
      <Table>
        <tbody>
          <tr>
            <td>Lacking hair</td>
            <td>
              <Monospace>BALD</Monospace>
            </td>
          </tr>
          <tr>
            <td>Important component of many sports</td>
            <td>
              <Monospace>BALL</Monospace>
            </td>
          </tr>
          <tr>
            <td>Painful piece of some fence wire</td>
            <td>
              <Monospace>BARB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Lisa's brother</td>
            <td>
              <Monospace>BART</Monospace>
            </td>
          </tr>
          <tr>
            <td>Bit of sweat</td>
            <td>
              <Monospace>BEAD</Monospace>
            </td>
          </tr>
          <tr>
            <td>Popular alcohol choice</td>
            <td>
              <Monospace>BEER</Monospace>
            </td>
          </tr>
          <tr>
            <td>Liver secretion</td>
            <td>
              <Monospace>BILE</Monospace>
            </td>
          </tr>
          <tr>
            <td>It comes after dinner</td>
            <td>
              <Monospace>BILL</Monospace>
            </td>
          </tr>
          <tr>
            <td>Trash cans, in the UK</td>
            <td>
              <Monospace>BINS</Monospace>
            </td>
          </tr>
          <tr>
            <td>Profiles</td>
            <td>
              <Monospace>BIOS</Monospace>
            </td>
          </tr>
          <tr>
            <td>Critical parameter in cellular receiver performance (Abbr)</td>
            <td>
              <Monospace>BLER</Monospace>
            </td>
          </tr>
          <tr>
            <td>Low in spirits</td>
            <td>
              <Monospace>BLUE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Make less distinct</td>
            <td>
              <Monospace>BLUR</Monospace>
            </td>
          </tr>
          <tr>
            <td>Sea vessel</td>
            <td>
              <Monospace>BOAT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Daring or brave</td>
            <td>
              <Monospace>BOLD</Monospace>
            </td>
          </tr>
          <tr>
            <td>007 says it twice</td>
            <td>
              <Monospace>BOND</Monospace>
            </td>
          </tr>
          <tr>
            <td>Windfall</td>
            <td>
              <Monospace>BOON</Monospace>
            </td>
          </tr>
          <tr>
            <td>Commonality in two Springsteen hits</td>
            <td>
              <Monospace>BORN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Pitt or Bird</td>
            <td>
              <Monospace>BRAD</Monospace>
            </td>
          </tr>
          <tr>
            <td>Boast</td>
            <td>
              <Monospace>BRAG</Monospace>
            </td>
          </tr>
          <tr>
            <td>Super Mario ___</td>
            <td>
              <Monospace>BROS</Monospace>
            </td>
          </tr>
          <tr>
            <td>Area above the eyes</td>
            <td>
              <Monospace>BROW</Monospace>
            </td>
          </tr>
          <tr>
            <td>Makeshift blade, in Glasgow</td>
            <td>
              <Monospace>CHIB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Beard locale</td>
            <td>
              <Monospace>CHIN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Yiga, for one</td>
            <td>
              <Monospace>CLAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Ali, once</td>
            <td>
              <Monospace>CLAY</Monospace>
            </td>
          </tr>
          <tr>
            <td>Rugged rock face</td>
            <td>
              <Monospace>CRAG</Monospace>
            </td>
          </tr>
          <tr>
            <td>Berry prefix</td>
            <td>
              <Monospace>CRAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Something of poor quality</td>
            <td>
              <Monospace>CRAP</Monospace>
            </td>
          </tr>
          <tr>
            <td>Bed for an infant</td>
            <td>
              <Monospace>CRIB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Corn or rice</td>
            <td>
              <Monospace>CROP</Monospace>
            </td>
          </tr>
          <tr>
            <td>Corvid</td>
            <td>
              <Monospace>CROW</Monospace>
            </td>
          </tr>
          <tr>
            <td>Member of Dabney House</td>
            <td>
              <Monospace>DARB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Apply roughly</td>
            <td>
              <Monospace>DAUB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Sit for a meal</td>
            <td>
              <Monospace>DINE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Finished</td>
            <td>
              <Monospace>DONE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Far from ornate</td>
            <td>
              <Monospace>DRAB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Beat repeatedly</td>
            <td>
              <Monospace>DRUB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Pass gas</td>
            <td>
              <Monospace>FART</Monospace>
            </td>
          </tr>
          <tr>
            <td>Chimney vent</td>
            <td>
              <Monospace>FLUE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Avian and swine, e.g.</td>
            <td>
              <Monospace>FLUS</Monospace>
            </td>
          </tr>
          <tr>
            <td>"Look out!"</td>
            <td>
              <Monospace>FORE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Permanent army post</td>
            <td>
              <Monospace>FORT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Get a grip</td>
            <td>
              <Monospace>GRAB</Monospace>
            </td>
          </tr>
          <tr>
            <td>Metric mass</td>
            <td>
              <Monospace>GRAM</Monospace>
            </td>
          </tr>
          <tr>
            <td>Ale feature</td>
            <td>
              <Monospace>HEAD</Monospace>
            </td>
          </tr>
          <tr>
            <td>Grasped</td>
            <td>
              <Monospace>HELD</Monospace>
            </td>
          </tr>
          <tr>
            <td>Aid</td>
            <td>
              <Monospace>HELP</Monospace>
            </td>
          </tr>
          <tr>
            <td>Castle structure</td>
            <td>
              <Monospace>KEEP</Monospace>
            </td>
          </tr>
          <tr>
            <td>Seaweed</td>
            <td>
              <Monospace>KELP</Monospace>
            </td>
          </tr>
          <tr>
            <td>Nice</td>
            <td>
              <Monospace>KIND</Monospace>
            </td>
          </tr>
          <tr>
            <td>Charles, e.g.</td>
            <td>
              <Monospace>KING</Monospace>
            </td>
          </tr>
          <tr>
            <td>Make a cardigan, say</td>
            <td>
              <Monospace>KNIT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Bowline or half-hitch</td>
            <td>
              <Monospace>KNOT</Monospace>
            </td>
          </tr>
          <tr>
            <td>More than surmise</td>
            <td>
              <Monospace>KNOW</Monospace>
            </td>
          </tr>
          <tr>
            <td>John Nash had a beautiful one</td>
            <td>
              <Monospace>MIND</Monospace>
            </td>
          </tr>
          <tr>
            <td>Sound from a zombie</td>
            <td>
              <Monospace>MOAN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Castle structure</td>
            <td>
              <Monospace>MOAT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Burrowing mammal</td>
            <td>
              <Monospace>MOLE</Monospace>
            </td>
          </tr>
          <tr>
            <td>QB Kellen</td>
            <td>
              <Monospace>MOND</Monospace>
            </td>
          </tr>
          <tr>
            <td>Natural satellite</td>
            <td>
              <Monospace>MOON</Monospace>
            </td>
          </tr>
          <tr>
            <td>Rock-type Pokemon</td>
            <td>
              <Monospace>ONIX</Monospace>
            </td>
          </tr>
          <tr>
            <td>Black gem</td>
            <td>
              <Monospace>ONYX</Monospace>
            </td>
          </tr>
          <tr>
            <td>Not intense, as a color</td>
            <td>
              <Monospace>PALE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Type of bog</td>
            <td>
              <Monospace>PEAT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Quick kiss</td>
            <td>
              <Monospace>PECK</Monospace>
            </td>
          </tr>
          <tr>
            <td>Glance</td>
            <td>
              <Monospace>PEEK</Monospace>
            </td>
          </tr>
          <tr>
            <td>Fowl language?</td>
            <td>
              <Monospace>PEEP</Monospace>
            </td>
          </tr>
          <tr>
            <td>Brazilian forward</td>
            <td>
              <Monospace>PELE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Attack with tomatoes</td>
            <td>
              <Monospace>PELT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Craving to eat chalk, etc.</td>
            <td>
              <Monospace>PICA</Monospace>
            </td>
          </tr>
          <tr>
            <td>Choose</td>
            <td>
              <Monospace>PICK</Monospace>
            </td>
          </tr>
          <tr>
            <td>Proposed map for a parcel of land</td>
            <td>
              <Monospace>PLAT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Theater production</td>
            <td>
              <Monospace>PLAY</Monospace>
            </td>
          </tr>
          <tr>
            <td>Drain stopper</td>
            <td>
              <Monospace>PLUG</Monospace>
            </td>
          </tr>
          <tr>
            <td>Advantage of the Swiss flag?</td>
            <td>
              <Monospace>PLUS</Monospace>
            </td>
          </tr>
          <tr>
            <td>Discounted, with on</td>
            <td>
              <Monospace>SALE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Close all openings</td>
            <td>
              <Monospace>SEAL</Monospace>
            </td>
          </tr>
          <tr>
            <td>Cook the exterior</td>
            <td>
              <Monospace>SEAR</Monospace>
            </td>
          </tr>
          <tr>
            <td>Resident north of Ardougne</td>
            <td>
              <Monospace>SEER</Monospace>
            </td>
          </tr>
          <tr>
            <td>Secretariat rival</td>
            <td>
              <Monospace>SHAM</Monospace>
            </td>
          </tr>
          <tr>
            <td>Hobbs's partner</td>
            <td>
              <Monospace>SHAW</Monospace>
            </td>
          </tr>
          <tr>
            <td>Baby V.O.X replacement member</td>
            <td>
              <Monospace>SHIM</Monospace>
            </td>
          </tr>
          <tr>
            <td>Lower leg</td>
            <td>
              <Monospace>SHIN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Display</td>
            <td>
              <Monospace>SHOW</Monospace>
            </td>
          </tr>
          <tr>
            <td>Perform an aria</td>
            <td>
              <Monospace>SING</Monospace>
            </td>
          </tr>
          <tr>
            <td>Seven are deadly</td>
            <td>
              <Monospace>SINS</Monospace>
            </td>
          </tr>
          <tr>
            <td>Precipitation</td>
            <td>
              <Monospace>SNOW</Monospace>
            </td>
          </tr>
          <tr>
            <td>Only one fish?</td>
            <td>
              <Monospace>SOLE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Mariner jersey color</td>
            <td>
              <Monospace>TEAL</Monospace>
            </td>
          </tr>
          <tr>
            <td>Dolphins, e.g.</td>
            <td>
              <Monospace>TEAM</Monospace>
            </td>
          </tr>
          <tr>
            <td>Sped or ripped</td>
            <td>
              <Monospace>TORE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Natalie Imbruglia hit</td>
            <td>
              <Monospace>TORN</Monospace>
            </td>
          </tr>
          <tr>
            <td>Light rail</td>
            <td>
              <Monospace>TRAM</Monospace>
            </td>
          </tr>
          <tr>
            <td>Standard quantity</td>
            <td>
              <Monospace>UNIT</Monospace>
            </td>
          </tr>
          <tr>
            <td>Linux predecessor</td>
            <td>
              <Monospace>UNIX</Monospace>
            </td>
          </tr>
          <tr>
            <td>Trickery or guile</td>
            <td>
              <Monospace>WILE</Monospace>
            </td>
          </tr>
          <tr>
            <td>Pinot, e.g.</td>
            <td>
              <Monospace>WINE</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <br />
    <Attributions>
      <p>All images in the public domain:</p>
      <ul>
        <li>
          Mule (
          <a href="https://www.rawpixel.com/image/3076045/free-illustration-image-donkey-animal-antique-vintage-high-resolution">
            https://www.rawpixel.com/image/3076045/free-illustration-image-donkey-animal-antique-vintage-high-resolution
          </a>
          )
        </li>
        <li>
          Oryx (
          <a href="https://www.rawpixel.com/image/3061646/free-photo-image-forest-oryx-amazing">
            https://www.rawpixel.com/image/3061646/free-photo-image-forest-oryx-amazing
          </a>
          )
        </li>
        <li>
          Boar (
          <a href="https://www.rawpixel.com/image/6016394/wild-boar-free-public-domain-cc0-photo">
            https://www.rawpixel.com/image/6016394/wild-boar-free-public-domain-cc0-photo
          </a>
          )
        </li>
        <li>
          Dove (
          <a href="https://www.rawpixel.com/image/5907699/image-public-domain-nature-bird">
            https://www.rawpixel.com/image/5907699/image-public-domain-nature-bird
          </a>
          )
        </li>
        <li>
          Pika (
          <a href="https://www.rawpixel.com/image/4038009/photo-image-bird-animal">
            https://www.rawpixel.com/image/4038009/photo-image-bird-animal
          </a>
        </li>
        <li>
          Slug (
          <a href="https://www.goodfreephotos.com/animals/other-animals/slug-going-across-the-ground.jpg.php#">
            https://www.goodfreephotos.com/animals/other-animals/slug-going-across-the-ground.jpg.php#
          </a>
          )
        </li>
      </ul>
    </Attributions>
    <style jsx global>{`
      #word-ladders td,
      #extraction th:nth-child(1),
      #extraction td:nth-child(1),
      #extraction td:nth-child(n + 3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
