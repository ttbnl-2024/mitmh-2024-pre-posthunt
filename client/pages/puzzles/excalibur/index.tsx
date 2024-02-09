import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace } from 'components/copy';
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

import image0 from 'assets/puzzles/excalibur/0.png';
import image1 from 'assets/puzzles/excalibur/1.png';
import image2 from 'assets/puzzles/excalibur/2.png';
import image3 from 'assets/puzzles/excalibur/3.png';
import image4 from 'assets/puzzles/excalibur/4.png';
import image5 from 'assets/puzzles/excalibur/5.png';
import image6 from 'assets/puzzles/excalibur/6.png';

const SLUG = 'excalibur';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          King Arthur scans the sky with his contractible contraption, his eyes
          dancing left and then right. Satisfied, he reads his notebook once
          more. 'Oh yeah, it's all lining up', he remarks excitedly. 'The day
          that I'll know everything In The Sky approaches!
        </FlavorText>
        <InfoIcon>Click any image to open it in a new window.</InfoIcon>
        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              1950
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>Star Surprise</li>
              <li>The Latter Lady From the Other Star</li>
              <li>Second Alpha and Omega Star</li>
              <li>Star Wars: Episode III</li>
              <li>Primary Hi-lo Stars</li>
              <li>Final, Broken, Star</li>
              <li>The First Star Gazer</li>
              <li>First Starry Night Goodnight</li>
              <li>Darling Karla's Second Star</li>
              <li>The First Star Gazer Returns</li>
              <li>Rory O'Star I</li>
              <li>First Starry Night Goodnight Again</li>
              <li>Premier Starship</li>
              <li>First Broken Star</li>
              <li>Second Alpha and Omega Star Reappears</li>
              <li>Immediately Star Crazy</li>
              <li>Jenny's Star</li>
              <li>First Colliding Stars</li>
              <li>Under the First Stars</li>
              <li>Repeating Star Surprise</li>
              <li>Same First Broken Star</li>
            </ul>
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image0}>
              <SheetableImage alt="" src={image0} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'4 IN AN 8'}
              showEnum={false}
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              Early 1960
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>Stars Over Montana</li>
              <li>Last Arizona Double Star</li>
              <li>First Constellation Square</li>
              <li>First Twirling Stars</li>
              <li>David's Primary Guiding Star</li>
              <li>Left Out Star</li>
              <li>Early Stars of Indy</li>
              <li>Stephanie's First Star</li>
              <li>Two On-The-Fly-Stars</li>
              <li>First Stars in the Wildfire</li>
              <li>Beneath the First Stars</li>
              <li>First Binary Stars</li>
              <li>Last Arizona Double Star Returns</li>
              <li>Stars Reappear Over Montana</li>
            </ul>
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image1}>
              <SheetableImage alt="" src={image1} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'A 5 AND A 9 4'}
              showEnum={false}
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              1967
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>Second Super Star</li>
              <li>Two Frog Stars</li>
              <li>First Switchback Stars</li>
              <li>Primary South Bay Stars</li>
              <li>Under the First Stars</li>
              <li>Dormer Window Stars</li>
              <li>Jenny's Star</li>
              <li>Second Star Birth</li>
              <li>First Family Stars</li>
              <li>Crescent Moon</li>
              <li>First Hey to the Stars</li>
              <li>Starburst 2</li>
              <li>Two Stars and Stripes Forever</li>
              <li>Moonshine</li>
              <li>Three Stars In The Triangle</li>
              <li>Last Stars of Baughman Grange</li>
              <li>Late Stellar Star Burst</li>
              <li>First Second Star</li>
              <li>Every Star Gazer</li>
              <li>First Stars in the Wildfire</li>
              <li>Second Star of the County Alameda</li>
              <li>Second Binary Stars</li>
              <li>Witch's First Stars</li>
              <li>Any Swapping Stars</li>
              <li>Darling Karla's First Star</li>
              <li>The Latter Lady From the Other Star</li>
              <li>Second Super Star Reappears</li>
              <li>Two More Frog Stars</li>
            </ul>{' '}
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image2}>
              <SheetableImage alt="" src={image2} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'THE 8 AND THE 6'}
              showEnum={false}
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              1982
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>Weave the Stars</li>
              <li>First Swapping Stars</li>
              <li>Stephanie's First Star</li>
              <li>2 o'clock Starshadow</li>
              <li>Two On-The-Fly-Stars</li>
              <li>2 o'clock Starshadow Reappears</li>
              <li>The Two Stars of Baughman Grange</li>
              <li>First Stars of Alberta</li>
              <li>The Next Two Stars of Baughman Grange</li>
              <li>Stephanie's First Star Comes Again</li>
              <li>Finally, You with the Stars in your Eyes</li>
              <li>Star Light</li>
              <li>Second Binary Stars</li>
              <li>Any Star Maple</li>
              <li>First Hey to the Stars</li>
              <li>Secondary Simplicity Star</li>
              <li>Beneath the First Stars</li>
              <li>First Constellation Square</li>
              <li>Second Second Star</li>
              <li>Weave the Stars Again</li>
              <li>First Twirling Stars</li>
              <li>First Swapping Stars Return</li>
            </ul>
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image3}>
              <SheetableImage alt="" src={image3} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'5 AND 6'}
              showEnum={false}
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              Late 1987
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>Fading Starshadow</li>
              <li>The First Star Gazer</li>
              <li>Finally, You with the Stars in your Eyes</li>
              <li>Moonshine</li>
              <li>Any Star Maple</li>
              <li>Second Balancing Stars</li>
              <li>Second Star Of David</li>
              <li>Last Arizona Double Star</li>
              <li>Any Balancing Stars</li>
              <li>A Final Grand Starry Night</li>
              <li>Star Wars: Episode I</li>
              <li>Second Alpha and Omega Star</li>
              <li>Left Out Star</li>
              <li>Star Crossed End</li>
              <li>Second Star Birth</li>
              <li>Two Taconic Stars</li>
              <li>Primary South Bay Stars</li>
              <li>Starry Haze Appearing</li>
              <li>Moon Beam</li>
              <li>More Moonshine</li>
              <li>Primary South Bay Stars Reappear</li>
              <li>Rory O'Star I</li>
              <li>Lost in the First Stars</li>
              <li>A Second Grand Starry Night</li>
              <li>Continually Fading Starshadow</li>
              <li>Moonshine Once Again</li>
            </ul>
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image4}>
              <SheetableImage alt="" src={image4} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'5 STABBED BY 7'}
              showEnum={false}
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              Late 2001
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>My Second Lucky Stars</li>
              <li>Follow That Early Star</li>
              <li>Pair Of Colliding Stars</li>
              <li>Trail to the Stars</li>
              <li>Finally Star Studded</li>
              <li>Second Super Star</li>
              <li>My Second New Lucky Stars</li>
              <li>2 Stars 2 Stars</li>
              <li>Swinging Among The Middle Of The Stars</li>
              <li>Fading Starshadow</li>
              <li>First Family Stars</li>
              <li>Last Star Birth</li>
              <li>Premier Starship</li>
              <li>Rory O'Star II</li>
              <li>First Star Birth</li>
              <li>Arizona's First Double Star</li>
              <li>Three Stars In The Triangle</li>
              <li>First Star of the County Alameda</li>
              <li>Lost in the First Stars</li>
              <li>Moonshine</li>
              <li>Last Christmas Stars</li>
              <li>The Last English Star</li>
              <li>First Balancing Stars</li>
              <li>Star Wars: Episode III</li>
              <li>First Switchback Stars</li>
              <li>Rory O'Star II Returns</li>
              <li>First Welcome Stars</li>
              <li>Darling Karla's First Star</li>
              <li>Brandy's Star</li>
              <li>Ashley's First Star</li>
              <li>Premier Starship Refit</li>
              <li>A Final Grand Starry Night</li>
              <li>Left Out Star</li>
              <li>First South Bay Stars</li>
              <li>Another Pair Of Colliding Stars</li>
              <li>Star of the Show</li>
              <li>Starburst 2</li>
              <li>Stephanie's First Star</li>
              <li>2 o'clock Starshadow</li>
              <li>Fading Starry Haze</li>
              <li>Reruns of Starburst 2</li>
            </ul>
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image5}>
              <SheetableImage alt="" src={image5} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'5 AROUND THE 8'}
              showEnum={false}
            />
          </div>
        </div>

        <hr className="my-4" />
        <div className="prefer-2-col">
          <div className="w-full md:w-2/5">
            <p>
              2017
              <br />
              <b>Stars In Order Of Appearance</b>
            </p>
            <ul className="list-none px-[1.5em] indent-[-1.5em]">
              <li>Every Star Gazer</li>
              <li>David's Primary Guiding Star</li>
              <li>Weave the Stars</li>
              <li>Follow That Early Star</li>
              <li>Star Light</li>
              <li>David's Primary Guiding Star Reappears</li>
              <li>First Second Star</li>
              <li>Moon Beam</li>
              <li>First Taconic Stars</li>
              <li>Late Stellar Star Burst</li>
              <li>Reoccurring First Second Star</li>
              <li>Primary Hi-lo Stars</li>
              <li>Rory O'Star I</li>
              <li>Stars Over Montana</li>
              <li>Second Star of the County Alameda</li>
              <li>The Last English Star</li>
              <li>Starry Haze Appearing</li>
              <li>First Swapping Stars</li>
              <li>Rory's Primary Chewing Star</li>
              <li>Rory O'Star I Junior</li>
              <li>Stars Reappear Over Montana</li>
              <li>Second Balancing Stars</li>
              <li>First Switchback Stars</li>
              <li>First Starry Night Goodnight</li>
              <li>Weave the Stars Once More</li>
            </ul>
          </div>
          <div className="w-full md:w-3/5">
            <a target="_blank" href={image6}>
              <SheetableImage alt="" src={image6} title="" />
            </a>
            <IndexedBlank
              tableClass={cx(HIDDEN_CLASS)}
              label={'4 ON A 6'}
              showEnum={false}
            />
          </div>
        </div>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
