import { FC } from 'react';

import InfoIcon from 'components/info_icon';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/field-of-clovers/0.png';
import image1 from 'assets/solutions/field-of-clovers/1.png';
import image2 from 'assets/solutions/field-of-clovers/2.png';
import image3 from 'assets/solutions/field-of-clovers/3.png';
import image4 from 'assets/solutions/field-of-clovers/4.png';
import image5 from 'assets/solutions/field-of-clovers/5.png';
import image6 from 'assets/solutions/field-of-clovers/6.png';
import image7 from 'assets/solutions/field-of-clovers/7.png';
import image8 from 'assets/solutions/field-of-clovers/8.png';
import image9 from 'assets/solutions/field-of-clovers/9.png';
import image10 from 'assets/solutions/field-of-clovers/10.png';
import image11 from 'assets/solutions/field-of-clovers/11.png';
import image12 from 'assets/solutions/field-of-clovers/12.png';
import image13 from 'assets/solutions/field-of-clovers/13.png';
import image14 from 'assets/solutions/field-of-clovers/14.png';
import image15 from 'assets/solutions/field-of-clovers/15.png';
import image16 from 'assets/solutions/field-of-clovers/16.png';
import image17 from 'assets/solutions/field-of-clovers/17.png';
import image18 from 'assets/solutions/field-of-clovers/18.png';
import image19 from 'assets/solutions/field-of-clovers/19.png';
import image20 from 'assets/solutions/field-of-clovers/20.png';
import image21 from 'assets/solutions/field-of-clovers/21.png';
import image22 from 'assets/solutions/field-of-clovers/22.png';
import image23 from 'assets/solutions/field-of-clovers/23.png';

const SLUG = 'field-of-clovers';
const ANSWER = `WAR CASTLE FOUR-PACK`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <InfoIcon>Click on any image to open it in a new window.</InfoIcon>
    <p>
      This puzzle references the board/card game "So Clover!", in which players
      are given a 2x2 arrangement of tiles with words on the edges and have to
      hint the locations by writing a single clue word along each edge of the
      frame, after which the tiles are shuffled along with an extra tile or two.
    </p>
    <p>
      The given tile orientations and order are arbitrary (alphabetically first
      on top, ordered alphabetically by top word), as is the ordering of the
      sets (alphabetical by top frame word).
    </p>
    <p>
      In this puzzle, each color represents a different way of clueing the two
      tile words with one single frame word. The ordering of the two tile words
      doesn't matter.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Meaning</th>
          <th>Example</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Red</td>
          <td>Pun</td>
          <td>Parish &rarr; Near + Average</td>
          <td>Par is average, so "par-ish" is "near average"</td>
        </tr>
        <tr>
          <td>Green</td>
          <td>Phrases: one word before the frame word, one after</td>
          <td>Table &rarr; Coffee + Salt</td>
          <td>"Coffee table" and "table salt" are common phrases</td>
        </tr>
        <tr>
          <td>Purple</td>
          <td>Spoonerism (swap starting sounds)</td>
          <td>Cat &rarr; Skanks + Man</td>
          <td>Spoonerizes to "Manx" (cat breed) and "scan" (CAT scan)</td>
        </tr>
        <tr>
          <td>Pink</td>
          <td>Literal description</td>
          <td>Athens &rarr; Easy + Weasels</td>
          <td>
            Athens is "A then s" – both tile words contain "AS" consecutively
          </td>
        </tr>
        <tr>
          <td>Yellow</td>
          <td>
            Frame word is a character in a book/movie/show whose title is
            (partly) given by the tile words
          </td>
          <td>Scout &rarr; Kill + Bird</td>
          <td>Scout is a character in "To Kill a Mockingbird"</td>
        </tr>
        <tr>
          <td>Aqua</td>
          <td>Move one letter from one tile word to the other</td>
          <td>Ham &rarr; Cursed + Wine</td>
          <td>
            Move the "S" to get "cured" (which describes ham) and "swine"
            (source of ham)
          </td>
        </tr>
        <tr>
          <td>Blue</td>
          <td>
            Change the same letter of the frame word, different for each tile
            word
          </td>
          <td>Fallow &rarr; Dog + Guy</td>
          <td>
            "Dog" is "follow", "guy" is "fellow", both of which are one letter
            off (the same letter) from "fallow"
          </td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>Cryptic clue</td>
          <td>Labor &rarr; Collaboration + Possession</td>
          <td>"Labor" is possessed (contained) inside "collaboration"</td>
        </tr>
      </tbody>
    </Table>
    <p>
      For Spoonerisms and move-one-letter, the resulting words may each relate
      to the frame word individually, or only when taken as a whole (e.g.,
      Spoonerize "wig" + "bird" &rarr; "big" + "word" = "Sesquipedalian").
    </p>
    <p>
      The correct tile placements for each frame are shown below, omitting the
      two unused tiles per set:
    </p>
    <p>
      <a target="_blank" href={image0}>
        <SheetableImage
          alt=""
          src={image0}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image1}>
        <SheetableImage
          alt=""
          src={image1}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image2}>
        <SheetableImage
          alt=""
          src={image2}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image3}>
        <SheetableImage
          alt=""
          src={image3}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image4}>
        <SheetableImage
          alt=""
          src={image4}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image5}>
        <SheetableImage
          alt=""
          src={image5}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image6}>
        <SheetableImage
          alt=""
          src={image6}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image7}>
        <SheetableImage
          alt=""
          src={image7}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
    </p>
    <p>
      As suggested in the flavortext, each tile must then be rotated 180
      degrees, bringing the unused words on the inner corners to the outside.
      After doing this, the pair of adjacent words at each corner can be clued
      by one of the words on an unused card from a different set. In fact, if we
      color that unused card with its set's frame colors, we can make a valid
      frame for all pairs. These are shown below, with the matched tile expanded
      to look like a frame and color-coded.
    </p>
    <p>
      Frame 1 and frame 6; frames 2 and 8; frames 3 and 7; and frames 4 and 5
      exchange unused tiles.
    </p>
    <div className="space-y-5">
      <a target="_blank" href={image8} className="block">
        <SheetableImage alt="" src={image8} title="" />
      </a>
      <a target="_blank" href={image9} className="block">
        <SheetableImage alt="" src={image9} title="" />
      </a>
      <a target="_blank" href={image10} className="block">
        <SheetableImage alt="" src={image10} title="" />
      </a>
      <a target="_blank" href={image11} className="block">
        <SheetableImage alt="" src={image11} title="" />
      </a>
      <a target="_blank" href={image12} className="block">
        <SheetableImage alt="" src={image12} title="" />
      </a>
      <a target="_blank" href={image13} className="block">
        <SheetableImage alt="" src={image13} title="" />
      </a>
      <a target="_blank" href={image14} className="block">
        <SheetableImage alt="" src={image14} title="" />
      </a>
      <a target="_blank" href={image15} className="block">
        <SheetableImage alt="" src={image15} title="" />
      </a>
    </div>
    <p>
      This suggests rotating each new clover (2x2 square of tiles) and
      overlaying it (crossing it) on top of the corresponding original clover
      such that the operations (colors) match up, making an 8-petaled "flower".
      These "flowers" are shown below.
    </p>
    <p>
      <a target="_blank" href={image16}>
        <SheetableImage
          alt=""
          src={image16}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image17}>
        <SheetableImage
          alt=""
          src={image17}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image18}>
        <SheetableImage
          alt=""
          src={image18}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image19}>
        <SheetableImage
          alt=""
          src={image19}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image20}>
        <SheetableImage
          alt=""
          src={image20}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image21}>
        <SheetableImage
          alt=""
          src={image21}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image22}>
        <SheetableImage
          alt=""
          src={image22}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
      <a target="_blank" href={image23}>
        <SheetableImage
          alt=""
          src={image23}
          title=""
          className="inline-block w-full md:w-[50%]"
        />
      </a>
    </p>
    <p>
      Each flower has 8 words that are visible on the ends of the petals because
      of the left-right offsets of the tile words, while the remainder are
      hidden on the inside. Each set still has a remaining unused tile - each of
      the 4 words on that tile hint 2 of these 8 visible words. The directions
      the associated petals point in represent a letter in semaphore. The
      operations used are the same as the corresponding (other) frame, and
      taking the semaphore letters in clockwise order (using the order of
      operations on the corresponding frame) spells a word:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Original frame</th>
          <th>Rotated frame</th>
          <th>
            Unused tile from original set
            <br />
            (1st word in correct rotation highlighted)
          </th>
          <th>Color order of matched frame</th>
          <th>Words</th>
          <th>Petal directions</th>
          <th>Letters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 ("Barack")</td>
          <td>6</td>
          <td>
            Autocracy,{' '}
            <b>
              <u>centering</u>
            </b>
            , dig, burgundy
          </td>
          <td>Pink, aqua, yellow, red</td>
          <td>Hinge + pringle, mince + rack, anchor + man, car + rule</td>
          <td>S + W, W + NW, SW + SE, S+N</td>
          <td>BOND</td>
        </tr>
        <tr>
          <td>2 ("Bread")</td>
          <td>8</td>
          <td>
            Bustard,{' '}
            <b>
              <u>impudent</u>
            </b>
            , white, ratify
          </td>
          <td>Purple, yellow, red, blue</td>
          <td>Chert + peaky, bad + break, sing + make, yellow + pudding</td>
          <td>SW + SE, W + NW, NW + N, S + NE</td>
          <td>NOTE</td>
        </tr>
        <tr>
          <td>3 ("Coincide")</td>
          <td>7</td>
          <td>
            Diminish, rough, rugby,{' '}
            <b>
              <u>scout</u>
            </b>
          </td>
          <td>Yellow, aqua, blue, orange</td>
          <td>Bird + kill, lease + essen, hard + money, wig + near</td>
          <td>S + NW, W + NW, SW + NE, S + N</td>
          <td>COLD</td>
        </tr>
        <tr>
          <td>4 ("Finlander")</td>
          <td>5</td>
          <td>
            <b>
              <u>Jump</u>
            </b>
            , master, maim, really
          </td>
          <td>Aqua, green, blue, red</td>
          <td>Hope + lap, grand + mind, lass + letters, new + collaboration</td>
          <td>S + E, W + NW, W + E, S + NE</td>
          <td>FORE</td>
        </tr>
        <tr>
          <td>5 ("Ham")</td>
          <td>4</td>
          <td>
            <b>
              <u>Eton</u>
            </b>
            , puppet, potter, fish
          </td>
          <td>Pink, orange, yellow, purple</td>
          <td>Like + engine, dog + stroke, child + cursed, guy + frill</td>
          <td>W + SE, S + SW, SW + NW, S + N</td>
          <td>SAID</td>
        </tr>
        <tr>
          <td>6 ("Haste")</td>
          <td>1</td>
          <td>
            Crone, going, pinot,{' '}
            <b>
              <u>poe</u>
            </b>
          </td>
          <td>Orange, purple, green, blue</td>
          <td>Opposed + even, hitch + wag, steady + easy, guide + rotate</td>
          <td>W + E, S + SW, NW + N, S + NE</td>
          <td>RATE</td>
        </tr>
        <tr>
          <td>7 ("Indiana")</td>
          <td>3</td>
          <td>
            <b>
              <u>Cashier</u>
            </b>
            , speed, mountains, handstands
          </td>
          <td>Red, green, purple, pink</td>
          <td>
            More + dollars, warp + dial, rounds + manges, hysterias + hosts
          </td>
          <td>E + SE, W + NW, SW + SE, S + NE</td>
          <td>ZONE</td>
        </tr>
        <tr>
          <td>8 ("Mows")</td>
          <td>2</td>
          <td>
            Green,{' '}
            <b>
              <u>tree</u>
            </b>
            , pasts, stable
          </td>
          <td>Green, pink, orange, aqua</td>
          <td>Frogs + christmas, tut + yutz, tangle + bleats, hill + card</td>
          <td>SW + E, SW + NW, NW + N, S + NE</td>
          <td>MITE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This forms four pairs of words: COLD + ZONE, MITE + NOTE, SAID + FORE, and
      RATE + BOND. Each of these yields a hint (frame) word, one for each of the
      colors shown in the enumeration at the end. The answers are:
    </p>
    <Table className="final-table">
      <thead>
        <tr>
          <th>Words</th>
          <th>Length</th>
          <th>Color</th>
          <th>Answer</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cold + zone</td>
          <td>3</td>
          <td>Green</td>
          <td>War</td>
          <td>Phrases: "cold war" and "war zone"</td>
        </tr>
        <tr>
          <td>Mite + note</td>
          <td>6</td>
          <td>Purple</td>
          <td>Castle</td>
          <td>Spoonerism: "knight" and "moat"</td>
        </tr>
        <tr>
          <td>Said + fore</td>
          <td>4</td>
          <td>Orange</td>
          <td>Four</td>
          <td>Cryptic: "fore" pronounced is "four"</td>
        </tr>
        <tr>
          <td>Rate + bond</td>
          <td>4</td>
          <td>Blue</td>
          <td>Pack</td>
          <td>
            Off-by-one: "rate" is "pace" and "bond" is "pact"; the only
            remaining (common) word of the form PAC? is "pack"
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Then the final answer is <Answerize>{ANSWER}</Answerize>, which would
      taste good on a summer day after solving a difficult Mystery Hunt puzzle.
    </p>
    <style jsx global>{`
      .final-table td:nth-child(2) {
        text-align: center;
      }
      .final-table td:nth-child(4) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-transform: uppercase;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
