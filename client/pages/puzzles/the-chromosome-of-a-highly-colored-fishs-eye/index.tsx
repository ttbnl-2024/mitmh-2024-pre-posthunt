import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/0.png';
import image1 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/1.png';
import image2 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/2.png';
import image3 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/3.png';
import image4 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/4.png';
import image5 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/5.png';
import image6 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/6.png';
import image7 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/7.png';
import image8 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/8.png';
import image9 from 'assets/puzzles/the-chromosome-of-a-highly-colored-fishs-eye/9.png';

const SLUG = 'the-chromosome-of-a-highly-colored-fishs-eye';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          You overhear two ancient Goddesses reminisce about the good old days:
          <br />
          L: I remember when the noble John the Baptist prepared for battle
          exclaiming, "Plus ça change-"
          <br />
          M: This is neither the time nor the place for that!!! Don't forget...
          <br />
          (L, muttering to herself: You know that's not what I meant...)
          <br />
          M: I'm really worried for you, the amount of changes in your memory is
          concerning me.
          <br />
          L: I can remember things just fine!
          <br />
          <br />
          <b>Now where were we? Oh yes, I remember when…</b>
        </FlavorText>
        <ul>
          <li>
            We broke a world record a few years later, restoring our previous
            glory to what it is today. (6)
          </li>
          <li>
            How could I forget! I recall there was a biblical woman before that.
            Wasn't there? (5-5)
          </li>
          <li>Today we have a cultivated place for our people. (11)</li>
          <li>We became what we are after moving some capital around. (6)</li>
          <li>
            We grew quite fond of our SuperSport cricket stadium after ending
            apartheid, which pushed us to who we are today. (9)
          </li>
          <li>
            And today, ever since the Soviets left, it's the same as it was the
            first (and third) time. (7)
          </li>
          <li>
            It was only a bit different from the very start when we stopped the
            Soviets and gained independence. (6)
          </li>
          <li>How could I forget! Today, we are inside the rivers. (5)</li>
          <li>
            It wasn't that long ago that three areas became one - I'm pretty
            sure Viscount Chandos' family name had something to do with it. (9)
          </li>
          <li>
            We had virgin lands for about 30 years, but at least we had grain to
            eat. (11)
          </li>
          <li>
            Today, we can hear bulraks singing from the river we love. (9)
          </li>
          <li>We had someone's 100th birthday to celebrate. (10)</li>
          <li>
            We were the city to be in, and it's nobody's business but yours why
            you had to be here. (8)
          </li>
          <li>
            It only took three years for us to ditch the Russian to refocus on
            the water feature. (4 9)
          </li>
          <li>
            But who could forget that guy with the nickname Koba - you might say
            he defended the town in the Civil War single-handedly! (10)
          </li>
          <li>
            Today, we can travel across the Millewa to the rural city as much as
            we want! (6 6)
          </li>
          <li>
            How could I forget! There was a cultural revivalist nonprofit formed
            in 1998. Wasn't there? (4 4)
          </li>
          <li>
            How could I forget! The Ngarrindjeri had a crossing place with
            Sturt. (8)
          </li>
          <li>
            Then the geographer who found some horses and gazelles died here,
            and our leader insisted that we honor him. (10)
          </li>
          <li>There were four Persian brooks here. (8)</li>
          <li>We got a council of a soft reed place. (8)</li>
          <li>
            We built a safe place for our prince (and all 6 of his predecessors)
            to get from one side to another. (7 8)
          </li>
          <li>There was a military outpost by the Kyrgyz warm lake. (7)</li>
          <li>Thanks to W&amp;A rail, we've prospered today. (7)</li>
          <li>
            The governor's daughter was a far more masterful choice than the
            others that were available. (12)
          </li>
          <li>
            How could I forget! There was a light sultan before that. Wasn't
            there? (3-6)
          </li>
          <li>
            We were granted town status, but other than that things remained
            very much the same. (9)
          </li>
          <li>
            How could I forget! At one point, revolution came and we embraced
            Ulyanov's passing. (7)
          </li>
          <li>
            How could I forget! We had only ourselves and our golden throne
            until the Whites moved in and everything went downhill from there. I
            also just remembered that to fix my memory disorder, this memory
            should be placed last. Otherwise, we would just go around in
            circles. Wouldn't we? (9)
          </li>
          <li>A long time ago, there was a white grave. (6)</li>
          <li>
            Tired of all the religiosity, we finally focused on Mount Royal. (8)
          </li>
          <li>
            How could I forget! The people hated it here so much, the pendulum
            swung back the other way. Didn't it? (7)
          </li>
          <li>
            How could I forget! There was an assassination on H. F., the prime
            minister and a year later, we changed due to his death. Didn't we?
            (12)
          </li>
          <li>
            When Cartier came here, we were at an Iroquois beaver dam. (9)
          </li>
          <li>Ly Thai Tao came in with his rising dragon. (5 4)</li>
          <li>We received a citadel and a big net. (3 2)</li>
          <li>
            Our great emperor converted to Christianity with a capital C. (14)
          </li>
          <li>
            How could I forget! Something started as a train station. Didn't it?
            (8)
          </li>
          <li>
            The king set out to find the land opposite the city of the blind.
            (9)
          </li>
          <li>
            My memory from back then is foggy, but I think we first had dragons
            intertwined. (4 4)
          </li>
          <li>
            My memory from back then is foggy, but I think it's the Gujarat Milk
            Marketing Federation's acronym. (4)
          </li>
        </ul>
        <hr className="my-4" />
        <p className="text-center">
          <b>Letter Pool</b>
        </p>
        <ul className="list-none text-center pl-0 space-y-2 sm:space-y-0">
          <li>A: 49</li>
          <li>B: 8</li>
          <li>C: 6</li>
          <li>D: 10</li>
          <li>E: 20</li>
          <li>F: 0</li>
          <li>G: 12</li>
          <li>H: 10</li>
          <li>I: 19</li>
          <li>J: 1</li>
          <li>K: 15</li>
          <li>L: 29</li>
          <li>M: 14</li>
          <li>N: 31</li>
          <li>O: 26</li>
          <li>P: 4</li>
          <li>Q: 0</li>
          <li>R: 28</li>
          <li>S: 18</li>
          <li>T: 23</li>
          <li>U: 13</li>
          <li>V: 8</li>
          <li>W: 2</li>
          <li>X: 0</li>
          <li>Y: 8</li>
          <li>Z: 4</li>
        </ul>
        <hr className="my-4" />
        <p>
          <SheetableImage
            src={image0}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image1}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image2}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image3}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image4}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image5}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image6}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image7}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image8}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
          <SheetableImage
            src={image9}
            alt=""
            title=""
            className="m-4 mx-auto"
          />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
