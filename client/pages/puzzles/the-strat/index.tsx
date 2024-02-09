import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/the-strat/0.png';
import image1 from 'assets/puzzles/the-strat/1.png';
import image2 from 'assets/puzzles/the-strat/2.png';
import image3 from 'assets/puzzles/the-strat/3.png';
import image4 from 'assets/puzzles/the-strat/4.png';
import image5 from 'assets/puzzles/the-strat/5.png';

const SLUG = 'the-strat';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Our animals seem to be converging on something, but scientifically
          speaking they've all been there before.
        </FlavorText>
        <div className="flex flex-wrap space-x-2 justify-center content-center">
          <div>
            <p className="text-center">
              <SheetableImage
                alt=""
                src={image0}
                title=""
                className="max-w-full w-80"
              />
              <i>(7 7)</i>
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage
                alt=""
                src={image1}
                title=""
                className="max-w-full w-80"
              />
              <i>(12 6)</i>
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage
                alt=""
                src={image2}
                title=""
                className="max-w-full w-80"
              />
              <i>(10 9)</i>
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage
                alt=""
                src={image3}
                title=""
                className="max-w-full w-80"
              />
              <i>(12 13)</i>
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage
                alt=""
                src={image4}
                title=""
                className="max-w-full w-80"
              />
              <i>(8 8)</i>
            </p>
          </div>
          <div>
            <p className="text-center">
              <SheetableImage
                alt=""
                src={image5}
                title=""
                className="max-w-full w-80"
              />
              <i>(11 7)</i>
            </p>
          </div>
        </div>
        <ul className="list-none pl-4 -indent-4">
          <li>Lacking hair</li>
          <li>Important component of many sports</li>
          <li>Painful piece of some fence wire</li>
          <li>Lisa's brother</li>
          <li>Bit of sweat</li>
          <li>Popular alcohol choice</li>
          <li>Liver secretion</li>
          <li>It comes after dinner</li>
          <li>Trash cans, in the UK</li>
          <li>Profiles</li>
          <li>Critical parameter in cellular receiver performance (Abbr.)</li>
          <li>Low in spirits</li>
          <li>Make less distinct</li>
          <li>Sea vessel</li>
          <li>Daring or brave</li>
          <li>007 says it twice</li>
          <li>Windfall</li>
          <li>Commonality in two Springsteen hits</li>
          <li>Pitt or Bird</li>
          <li>Boast</li>
          <li>Super Mario ___</li>
          <li>Area above the eyes</li>
          <li>Makeshift blade, in Glasgow</li>
          <li>Beard locale</li>
          <li>Yiga, for one</li>
          <li>Ali, once</li>
          <li>Rugged rock face</li>
          <li>Berry prefix</li>
          <li>Something of poor quality</li>
          <li>Bed for an infant</li>
          <li>Corn or rice</li>
          <li>Corvid</li>
          <li>Member of Dabney House</li>
          <li>Apply roughly</li>
          <li>Sit for a meal</li>
          <li>Finished</li>
          <li>Far from ornate</li>
          <li>Beat repeatedly</li>
          <li>Pass gas</li>
          <li>Chimney vent</li>
          <li>Avian and swine, e.g.</li>
          <li>"Look out!"</li>
          <li>Permanent army post</li>
          <li>Get a grip</li>
          <li>Metric mass</li>
          <li>Ale feature</li>
          <li>Grasped</li>
          <li>Aid</li>
          <li>Castle structure</li>
          <li>Seaweed</li>
          <li>Nice</li>
          <li>Charles, e.g.</li>
          <li>Make a cardigan, say</li>
          <li>Bowline or half-hitch</li>
          <li>More than surmise</li>
          <li>John Nash had a beautiful one</li>
          <li>Sound from a zombie</li>
          <li>Castle structure</li>
          <li>Burrowing mammal</li>
          <li>QB Kellen</li>
          <li>Natural satellite</li>
          <li>Rock-type Pokemon</li>
          <li>Black gem</li>
          <li>Not intense, as a color</li>
          <li>Type of bog</li>
          <li>Quick kiss</li>
          <li>Glance</li>
          <li>Fowl language?</li>
          <li>Brazilian forward</li>
          <li>Attack with tomatoes</li>
          <li>Craving to eat chalk, etc.</li>
          <li>Choose</li>
          <li>Proposed map for a parcel of land</li>
          <li>Theater production</li>
          <li>Drain stopper</li>
          <li>Advantage of the Swiss flag?</li>
          <li>Discounted, with on</li>
          <li>Close all openings</li>
          <li>Cook the exterior</li>
          <li>Resident north of Ardougne</li>
          <li>Secretariat rival</li>
          <li>Hobbs's partner</li>
          <li>Baby V.O.X replacement member</li>
          <li>Lower leg</li>
          <li>Display</li>
          <li>Perform an aria</li>
          <li>Seven are deadly</li>
          <li>Precipitation</li>
          <li>Only one fish?</li>
          <li>Mariner jersey color</li>
          <li>Dolphins, e.g.</li>
          <li>Sped or ripped</li>
          <li>Natalie Imbruglia hit</li>
          <li>Light rail</li>
          <li>Standard quantity</li>
          <li>Linux predecessor</li>
          <li>Trickery or guile</li>
          <li>Pinot, e.g.</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
