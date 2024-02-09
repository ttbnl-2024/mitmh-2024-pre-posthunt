import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/back-to-square-one/image0.png';
import image1 from 'assets/puzzles/back-to-square-one/image1.png';
import image2 from 'assets/puzzles/back-to-square-one/image2.png';
import image3 from 'assets/puzzles/back-to-square-one/image3.png';
import image4 from 'assets/puzzles/back-to-square-one/image4.png';
import image5 from 'assets/puzzles/back-to-square-one/image5.png';

const SLUG = 'back-to-square-one';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          These puzzles are in black and white, and have been read all over. But
          where are they taking you?
        </FlavorText>

        <div className={cx(NO_COPY_CLASS, 'space-y-5')}>
          <InfoIcon>
            Image text is available in copy-to-clipboard. Click on an image to
            view full size.
          </InfoIcon>
          <p>
            <a href={image0}>
              <SheetableImage
                title=""
                src={image0}
                alt=""
                className="mx-auto"
              />
            </a>
          </p>
          <p>
            <a href={image1}>
              <SheetableImage
                title=""
                src={image1}
                alt=""
                className="mx-auto"
              />
            </a>
          </p>
          <p>
            <a href={image2}>
              <SheetableImage
                title=""
                src={image2}
                alt=""
                className="mx-auto"
              />
            </a>
          </p>
          <p>
            <a href={image3}>
              <SheetableImage
                title=""
                src={image3}
                alt=""
                className="mx-auto"
              />
            </a>
          </p>
          <p>
            <a href={image4}>
              <SheetableImage
                title=""
                src={image4}
                alt=""
                className="mx-auto"
              />
            </a>
          </p>
          <p>
            <a href={image5}>
              <SheetableImage
                title=""
                src={image5}
                alt=""
                className="mx-auto"
              />
            </a>
          </p>
        </div>

        <div className={cx('text-center', 'font-mono', HIDDEN_CLASS)}>
          <br />
          <Table noBorder>
            <tbody>
              <tr>
                <td>"DOWN FOR THE COUNT"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>"PERSONS OF NOTE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>85</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>"NO APPOINTMENT NECESSARY"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>76</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>"BYE-LINES" +3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"IN PLAY"</td>
                <td></td>
                <td></td>
                <td></td>
                <td>43</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"TERMINAL CONNECTIONS"</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"CHEERS FOR UNCLE SAM" -3</td>
                <td></td>
                <td>33</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"INFRACTIONS"</td>
                <td>26</td>
              </tr>
              <tr>
                <td>77</td>
                <td></td>
                <td></td>
                <td>4</td>
                <td></td>
                <td>62</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table noBorder>
            <tbody>
              <tr>
                <td>"COLLISION COURSES"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>47</td>
              </tr>
              <tr>
                <td></td>
                <td>"FOR MOTHER"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>36</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>"PLUSES AND MINUSES"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>"UNEMPLOYMENT LINES"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"THE FOOTBALL FAN" +3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"WINTER FIGURE" -1</td>
                <td></td>
                <td></td>
                <td>53</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"FORWARD THINKING" +4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"HOW'S TRICKS?" -4</td>
                <td>58</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>35</td>
                <td>13</td>
                <td>12</td>
                <td></td>
                <td>46</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table noBorder>
            <tbody>
              <tr>
                <td>"GETTING IN SHAPE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>80</td>
              </tr>
              <tr>
                <td></td>
                <td>"SOFT OPTIONS"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>19</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>"TRAPPED MOISTURE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>"BUZZ CUT" -3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>59</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"IF THE CLUE FITS ..."</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"GO UP IN SMOKE"</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"BARISTA TRAINING DAY" +1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>10</td>
                <td></td>
                <td>23</td>
                <td>93</td>
                <td>5</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table noBorder>
            <tbody>
              <tr>
                <td>"FOUR-LETTER WORDS" +1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>"SET YOUR MIND AT EASE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>96</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>"YOU'RE TELLING ME!"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>23</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>"THIS N' THAT"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"PARLOR TRICK"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"GO FIGURE" +3</td>
                <td></td>
                <td></td>
                <td>27</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"WHAT GOES UP MUST COME DOWN" -1</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>44</td>
                <td></td>
                <td></td>
                <td>47</td>
                <td>84</td>
                <td></td>
                <td>13</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table noBorder>
            <tbody>
              <tr>
                <td>"SIX-PACK" -1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>"GRAMMAR LESSON"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>"TWO OUT OF THREE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>"TWO-BY-TWO" +1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"CORE O' NATIONS"</td>
                <td></td>
                <td></td>
                <td></td>
                <td>44</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"WORDS OF INTRODUCTION"</td>
                <td></td>
                <td></td>
                <td>84</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"CATCH PHRASE" +3</td>
                <td></td>
                <td>51</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"PARONOMASIA"</td>
                <td>45</td>
              </tr>
              <tr>
                <td>27</td>
                <td>5</td>
                <td>82</td>
                <td>48</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table noBorder>
            <tbody>
              <tr>
                <td>"LETTER RECYCLING"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>"COMMON CORE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>"'TWAS PUZZLING"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>75</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>"A WHIFF OF COLOGNE"</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>37</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"PUT A LID IN IT"</td>
                <td></td>
                <td></td>
                <td></td>
                <td>92</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"GOSSIP SESSION" -4</td>
                <td></td>
                <td></td>
                <td>27</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>"SOME THEME'S MISSING" +2</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>83</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>48</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <style jsx global>{`
        tr:first-child td {
          border-top: 1px solid black;
        }
        tr:last-child td {
          border-bottom: 1px solid black;
        }
        tr td:first-child {
          border-left: 1px solid black;
        }
        tr td:last-child {
          border-right: 1px solid black;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
