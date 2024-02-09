import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/evildoers-wanted/0.png';
import image1 from 'assets/puzzles/evildoers-wanted/1.png';
import image2 from 'assets/puzzles/evildoers-wanted/2.png';
import image3 from 'assets/puzzles/evildoers-wanted/3.png';
import image4 from 'assets/puzzles/evildoers-wanted/4.png';
import image5 from 'assets/puzzles/evildoers-wanted/5.png';
import image6 from 'assets/puzzles/evildoers-wanted/6.png';
import image7 from 'assets/puzzles/evildoers-wanted/7.png';
import image8 from 'assets/puzzles/evildoers-wanted/8.png';
import image9 from 'assets/puzzles/evildoers-wanted/9.png';
import image10 from 'assets/puzzles/evildoers-wanted/10.png';
import image11 from 'assets/puzzles/evildoers-wanted/11.png';
import image12 from 'assets/puzzles/evildoers-wanted/12.png';
import image13 from 'assets/puzzles/evildoers-wanted/13.png';
import image14 from 'assets/puzzles/evildoers-wanted/14.png';
import image15 from 'assets/puzzles/evildoers-wanted/15.png';
import image16 from 'assets/puzzles/evildoers-wanted/16.png';
import image17 from 'assets/puzzles/evildoers-wanted/17.png';
import image18 from 'assets/puzzles/evildoers-wanted/18.png';
import image19 from 'assets/puzzles/evildoers-wanted/19.png';
import image20 from 'assets/puzzles/evildoers-wanted/20.png';
import image21 from 'assets/puzzles/evildoers-wanted/21.png';
import image22 from 'assets/puzzles/evildoers-wanted/22.png';
import image23 from 'assets/puzzles/evildoers-wanted/23.png';
import image24 from 'assets/puzzles/evildoers-wanted/24.png';
import image25 from 'assets/puzzles/evildoers-wanted/25.png';

const SLUG = 'evildoers-wanted';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          The FBI has several suspects in custody, but none of them quite match
          their profiles. What caused the thoughtful characters behind these
          cover identities to lose their criminal minds?
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text is available in copy-to-clipboard.
        </InfoIcon>
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image0} title="" />
            <p>Danger: ★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image1} title="" />
            <p>Danger: ★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image2} title="" />
            <p>Danger: ★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image3} title="" />
            <p>Danger: ★★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image4} title="" />
            <p>Danger: ★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image5} title="" />
            <p>Danger: ★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image6} title="" />
            <p>Danger: ★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image7} title="" />
            <p>Danger: ★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image8} title="" />
            <p>Danger: ★★★★★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image9} title="" />
            <p>Danger: ★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image10} title="" />
            <p>Danger: ★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image11} title="" />
            <p>Danger: ★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
          <div className="case-file">
            <p>Case File</p>
            <SheetableImage alt="" src={image12} title="" />
            <p>Danger: ★★★</p>
          </div>
          <p className={cx(HIDDEN_CLASS, 'bg-white')} />
        </div>
        <div
          className={cx(
            NO_COPY_CLASS,
            'flex flex-wrap gap-3 justify-center mt-6 bubble-container'
          )}
        >
          <SheetableImage alt="" src={image13} title="" />
          <SheetableImage alt="" src={image14} title="" />
          <SheetableImage alt="" src={image15} title="" />
          <SheetableImage alt="" src={image16} title="" />
          <SheetableImage alt="" src={image17} title="" />
          <SheetableImage alt="" src={image18} title="" />
          <SheetableImage alt="" src={image19} title="" />
          <SheetableImage alt="" src={image20} title="" />
          <SheetableImage alt="" src={image21} title="" />
          <SheetableImage alt="" src={image22} title="" />
          <SheetableImage alt="" src={image23} title="" />
          <SheetableImage alt="" src={image24} title="" />
          <SheetableImage alt="" src={image25} title="" />
        </div>
        <ul className={cx(HIDDEN_CLASS)}>
          <li>A brave person isn't scared of being destroyed.</li>
          <li>
            A wounded man is scariest because he understands how to survive.
          </li>
          <li>Adversity can help us become more lucid and enlightened.</li>
          <li>
            All of us must confront our personal excess, foolishness and sin.
          </li>
          <li>
            I was exhausted from my last trip! Man, I gotta take another break.
          </li>
          <li>It's explosive once a squelched fact eventually resurfaces.</li>
          <li>
            Lotsa people make this mistake: real joy is only found via devotion
            in some greater cause.
          </li>
          <li>One who learned to be evil will be worse than his teacher. </li>
          <li>Our minds created the spirits when we were startled awake.</li>
          <li>The mind's desires cannot be controlled.</li>
          <li>
            We dress ourselves up so that our inner emptiness remains hidden.
          </li>
          <li>
            We've gone through some tough times together. I'm his family now.
          </li>
          <li>You've gotta act like me to play alongside me.</li>
        </ul>
      </div>

      <style jsx global>{`
        .case-file {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 220px;
          background-color: rgb(253 186 116);
        }

        .case-file > p:first-child {
          font-weight: bold;
          font-size: 1.5rem;
          margin-block: 0.5rem;
        }

        .case-file > p:last-child {
          font-weight: bold;
        }

        .case-file img {
          width: 200px;
          margin: 0 auto;
          display: block;
        }

        .bubble-container img {
          width: 220px;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
