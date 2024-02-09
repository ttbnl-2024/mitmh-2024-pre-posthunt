import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import IndexedBlank from 'components/indexed_blank';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/0.png';
import image1 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/1.png';
import image2 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/2.png';
import image3 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/3.png';
import image4 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/4.png';
import image5 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/5.png';
import image6 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/6.png';
import image7 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/7.png';
import image8 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/8.png';
import image9 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/9.png';
import image10 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/10.png';
import image11 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/11.png';
import image12 from 'assets/puzzles/cupids-guide-to-building-long-distance-relationships/12.png';

const SLUG = 'cupids-guide-to-building-long-distance-relationships';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <div className={cx('max-w-xl mx-auto space-y-6', NO_COPY_CLASS)}>
          <SheetableImage
            alt="A 4×4×4 Rubik's Revenge sitting flat with the second layer from the top rotated 45 degrees.  The shown faces are green and white in a checkerboard pattern. A pair of cupid arrows intersect the object in the center of the top of the cube.  One arrow points up and has the number 85.8354 inside the head and x.xx66 by the tail.  The other arrow points left and has the number 135.4753 inside the head and x.xx14 by the tail."
            src={image0}
            title=""
          />
          <SheetableImage
            alt="A vintage Rolleiflex brand twin lens camera. A pair of cupid arrows intersect the object at the top of the upper lens.  One arrow points down and has the number 12.3177 inside the head and x.xx67 by the tail.  The other arrow points left and has the number 72.3397 inside the head and x.xx14 by the tail."
            src={image1}
            title=""
          />
          <SheetableImage
            alt="A white handbag with a pair of circular metal handles. A pair of cupid arrows intersect the object at the top of the pair of handles.  One arrow points up and has the number 12.5301 inside the head and x.xx90 by the tail.  The other arrow points left and has the number 112.587 inside the head and x.xx30 by the tail."
            src={image2}
            title=""
          />
          <SheetableImage
            alt="A crystalline high heel with a butterfly decoration. A pair of cupid arrows intersect the object at the bottom of the opening for the foot.  One arrow points up and has the number 28.9606 inside the head and x.xx78 by the tail.  The other arrow points left and has the number 115.2579 inside the head and x.xx88 by the tail."
            src={image3}
            title=""
          />
          <SheetableImage
            alt="An ornate golden picture frame in portrait orientation. A pair of cupid arrows intersect the object at the center of the base of the frame.  One arrow points up and has the number 12.3312 inside the head and x.xx55 by the tail.  The other arrow points right and has the number 71.6773 inside the head and x.xx04 by the tail."
            src={image4}
            title=""
          />
          <SheetableImage
            alt="A rolled area rug. A pair of cupid arrows intersect the object in the center of the top of the rug.  One arrow points down and has the number 25.7768 inside the head and x.xx98 by the tail.  The other arrow points right and has the number 71.2199 inside the head and x.xx56 by the tail."
            src={image5}
            title=""
          />
          <SheetableImage
            alt='An empty glass bottle.  The bottle&apos;s glass is embossed with text that reads "MAINE SEAL", "ONE QUART".  Red text is printed on the bottle reading "HOOD&apos;S".  A red seal shows a cow surrounded by the text, "H. P. HOOD &amp; SONS DAIRY EXPERTS". A pair of cupid arrows intersect the object in the center of the base of the glass.  One arrow points down and has the number 28.5263 inside the head and x.xx17 by the tail.  The other arrow points right and has the number 171.6186 inside the head and x.xx02 by the tail.'
            src={image6}
            title=""
          />
          <SheetableImage
            alt="The body of a brown Gibson guitar. A pair of cupid arrows intersect the object in the middle of where the strings are attached to the guitar's body.  One arrow points up and has the number 22.8058 inside the head and x.xx24 by the tail.  The other arrow points right and has the number 82.5043 inside the head and x.xx97 by the tail."
            src={image7}
            title=""
          />
          <SheetableImage
            alt="A Longaberger medium market basket. A pair of cupid arrows intersect the object in the center of the top of the handles.  One arrow points up and has the number 20.1337 inside the head and x.xx38 by the tail.  The other arrow points right and has the number 107.3962 inside the head and x.xx68 by the tail."
            src={image8}
            title=""
          />
          <SheetableImage
            alt={`A bookshelf with two sets of books. Some titles are difficult to make out, but the most prominent titles on the left include "Catch-22", "Fahrenheit 451", and Plato's "Republic", while the left side includes "Black Elk Speaks", "Invisible Man", "To Kill a Mockingbird", "Undaunted Courage", "The Lord of the Rings", "A Tale of Two Cities", and "Truman". A pair of cupid arrows intersect the object in the center of the gap between the two sets of books.  One arrow points up and has the number 11.6443 inside the head and x.xx24 by the tail.  The other arrow points right and has the number 100.6912 inside the head and x.xx48 by the tail.`}
            src={image9}
            title=""
          />
          <SheetableImage
            alt='A red and white Igloo brand "playmate" style cooler. A pair of cupid arrows intersect the object in the center of the top of the cooler, under the handle.  One arrow points down and has the number 63.1914 inside the head and x.xx13 by the tail.  The other arrow points right and has the number 25.3005 inside the head and x.xx23 by the tail.'
            src={image10}
            title=""
          />
          <SheetableImage
            alt='A brown and white nautilus shell laying on its side. A pair of cupid arrows intersect the object at the top of the opening of the shell. One arrow points up and has the number 21.3524 inside the head and x.xx75 by the tail.  The other arrow points right and has the number 240.0202 inside the head and x.xx91 by the tail.'
            src={image11}
            title=""
          />
          <SheetableImage
            alt="A pair of black binoculars. A pair of cupid arrows intersect the object in the center of the top of the hinge.  One arrow points up and has the number 7.8097 inside the head and x.xx54 by the tail.  The other arrow points right and has the number 30.3327 inside the head and x.xx69 by the tail."
            src={image12}
            title=""
          />
        </div>
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td></td>
              <td>85.8354</td>
              <td></td>
            </tr>
            <tr>
              <td>135.4753</td>
              <td>
                <SheetableImage
                  alt="A 4×4×4 Rubik's Revenge sitting flat with the second layer from the top rotated 45 degrees.  The shown faces are green and white in a checkerboard pattern. A pair of cupid arrows intersect the object in the center of the top of the cube.  One arrow points up and has the number 85.8354 inside the head and x.xx66 by the tail.  The other arrow points left and has the number 135.4753 inside the head and x.xx14 by the tail."
                  src={image0}
                  title=""
                />
              </td>
              <td>x.xx14</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx66</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>x.xx67</td>
              <td></td>
            </tr>
            <tr>
              <td>72.3397</td>
              <td>
                <SheetableImage
                  alt="A vintage Rolleiflex brand twin lens camera. A pair of cupid arrows intersect the object at the top of the upper lens.  One arrow points down and has the number 12.3177 inside the head and x.xx67 by the tail.  The other arrow points left and has the number 72.3397 inside the head and x.xx14 by the tail."
                  src={image1}
                  title=""
                />
              </td>
              <td>x.xx14</td>
            </tr>
            <tr>
              <td></td>
              <td>12.3177</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>12.5301</td>
              <td></td>
            </tr>
            <tr>
              <td>112.5870</td>
              <td>
                <SheetableImage
                  alt="A white handbag with a pair of circular metal handles. A pair of cupid arrows intersect the object at the top of the pair of handles.  One arrow points up and has the number 12.5301 inside the head and x.xx90 by the tail.  The other arrow points left and has the number 112.587 inside the head and x.xx30 by the tail."
                  src={image2}
                  title=""
                />
              </td>
              <td>x.xx30</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx90</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>28.9606</td>
              <td></td>
            </tr>
            <tr>
              <td>115.2579</td>
              <td>
                <SheetableImage
                  alt="A crystalline high heel with a butterfly decoration. A pair of cupid arrows intersect the object at the bottom of the opening for the foot.  One arrow points up and has the number 28.9606 inside the head and x.xx78 by the tail.  The other arrow points left and has the number 115.2579 inside the head and x.xx88 by the tail."
                  src={image3}
                  title=""
                />
              </td>
              <td>x.xx88</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx78</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>12.3312</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx04</td>
              <td>
                <SheetableImage
                  alt="An ornate golden picture frame in portrait orientation. A pair of cupid arrows intersect the object at the center of the base of the frame.  One arrow points up and has the number 12.3312 inside the head and x.xx55 by the tail.  The other arrow points right and has the number 71.6773 inside the head and x.xx04 by the tail."
                  src={image4}
                  title=""
                />
              </td>
              <td>71.6773</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx55</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>x.xx98</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx56</td>
              <td>
                <SheetableImage
                  alt="A rolled area rug. A pair of cupid arrows intersect the object in the center of the top of the rug.  One arrow points down and has the number 25.7768 inside the head and x.xx98 by the tail.  The other arrow points right and has the number 71.2199 inside the head and x.xx56 by the tail."
                  src={image5}
                  title=""
                />
              </td>
              <td>71.2199</td>
            </tr>
            <tr>
              <td></td>
              <td>25.7768</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>x.xx17</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx02</td>
              <td>
                <SheetableImage
                  alt='An empty glass bottle.  The bottle&apos;s glass is embossed with text that reads "MAINE SEAL", "ONE QUART".  Red text is printed on the bottle reading "HOOD&apos;S".  A red seal shows a cow surrounded by the text, "H. P. HOOD &amp; SONS DAIRY EXPERTS". A pair of cupid arrows intersect the object in the center of the base of the glass.  One arrow points down and has the number 28.5263 inside the head and x.xx17 by the tail.  The other arrow points right and has the number 171.6186 inside the head and x.xx02 by the tail.'
                  src={image6}
                  title=""
                />
              </td>
              <td>171.6186</td>
            </tr>
            <tr>
              <td></td>
              <td>28.5263</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>22.8058</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx97</td>
              <td>
                <SheetableImage
                  alt="The body of a brown Gibson guitar. A pair of cupid arrows intersect the object in the middle of where the strings are attached to the guitar's body.  One arrow points up and has the number 22.8058 inside the head and x.xx24 by the tail.  The other arrow points right and has the number 82.5043 inside the head and x.xx97 by the tail."
                  src={image7}
                  title=""
                />
              </td>
              <td>82.5043</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx24</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>20.1337</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx68</td>
              <td>
                <SheetableImage
                  alt="A Longaberger medium market basket. A pair of cupid arrows intersect the object in the center of the top of the handles.  One arrow points up and has the number 20.1337 inside the head and x.xx38 by the tail.  The other arrow points right and has the number 107.3962 inside the head and x.xx68 by the tail."
                  src={image8}
                  title=""
                />
              </td>
              <td>107.3962</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx38</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>11.6443</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx48</td>
              <td>
                <SheetableImage
                  alt={`A bookshelf with two sets of books. Some titles are difficult to make out, but the most prominent titles on the left include "Catch-22", "Fahrenheit 451", and Plato's "Republic", while the left side includes "Black Elk Speaks", "Invisible Man", "To Kill a Mockingbird", "Undaunted Courage", "The Lord of the Rings", "A Tale of Two Cities", and "Truman". A pair of cupid arrows intersect the object in the center of the gap between the two sets of books.  One arrow points up and has the number 11.6443 inside the head and x.xx24 by the tail.  The other arrow points right and has the number 100.6912 inside the head and x.xx48 by the tail.`}
                  src={image9}
                  title=""
                />
              </td>
              <td>100.6912</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx24</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>x.xx13</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx23</td>
              <td>
                <SheetableImage
                  alt='A red and white Igloo brand "playmate" style cooler. A pair of cupid arrows intersect the object in the center of the top of the cooler, under the handle.  One arrow points down and has the number 63.1914 inside the head and x.xx13 by the tail.  The other arrow points right and has the number 25.3005 inside the head and x.xx23 by the tail.'
                  src={image10}
                  title=""
                />
              </td>
              <td>25.3005</td>
            </tr>
            <tr>
              <td></td>
              <td>63.1914</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>21.3524</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx91</td>
              <td>
                <SheetableImage
                  alt='A red and white Igloo brand "playmate" style cooler. A pair of cupid arrows intersect the object in the center of the top of the cooler, under the handle.  One arrow points up and has the number 21.3524 inside the head and x.xx75 by the tail.  The other arrow points right and has the number 240.0202 inside the head and x.xx91 by the tail.'
                  src={image11}
                  title=""
                />
              </td>
              <td>240.0202</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx75</td>
              <td></td>
            </tr>
            <tr />
            <tr>
              <td></td>
              <td>7.8097</td>
              <td></td>
            </tr>
            <tr>
              <td>x.xx69</td>
              <td>
                <SheetableImage
                  alt="A pair of black binoculars. A pair of cupid arrows intersect the object in the center of the top of the hinge.  One arrow points up and has the number 7.8097 inside the head and x.xx54 by the tail.  The other arrow points right and has the number 30.3327 inside the head and x.xx69 by the tail."
                  src={image12}
                  title=""
                />
              </td>
              <td>30.3327</td>
            </tr>
            <tr>
              <td></td>
              <td>x.xx54</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <IndexedBlank label="6 3 “2 2 4”" idxs={[14, 15, 16, 17]} showEnum={false} />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
