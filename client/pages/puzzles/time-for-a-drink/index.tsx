import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import board from 'assets/puzzles/time-for-a-drink/board.png';
import routeMap from 'assets/puzzles/time-for-a-drink/route-map.png';
import timetable from 'assets/puzzles/time-for-a-drink/timetable.png';

const SLUG = 'time-for-a-drink';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Janus puts down the receiver of the phone at the concierge's desk and
          rubs his eyes.{' '}
        </FlavorText>
        <FlavorText>
          "Apparently, the rarest bottle of wine in the world &mdash;{' '}
          <span className="not-italic">Château de MacGoûphin 1973</span> &mdash;
          reaches peak drinkability this month, and one of the VIPs wants a
          freshly-opened bottle for cocktail hour at 6:00 PM."
        </FlavorText>
        <FlavorText>
          "That wine is so rare that nobody's ever heard of it!" you exclaim.
          "Are you going to be able to find a bottle?"
        </FlavorText>
        <FlavorText>
          Janus looks at you as if you've asked whether there are any tall
          buildings in New York. "My boss already has a bottle waiting with his
          colleague Richard down at the Battery. I just can't get away right now
          to pick it up, with all the other things on my list. I need you to
          fetch it for me."
        </FlavorText>
        <FlavorText>
          You glance at the clock and laugh. It's just a few minutes before 3:00
          PM. The idea that you could battle NYC traffic to get all the way down
          to the Battery and back in three hours is ludicrous.
        </FlavorText>
        <FlavorText>
          Janus seems to agree. He furtively looks around, then reaches towards
          his lapel pin. "My boss told me this was only to be used in case of
          emergency. I think this qualifies," he murmurs. He plucks one of the
          tiny golden keys off of the pin and hands it to you.{' '}
        </FlavorText>
        <FlavorText>
          "This will unlock any door, including that one," he says, gesturing to
          an innocuous door you'd never noticed before. "It leads to a private
          sub-subway system that only my boss and his colleagues can use, in
          service of guests' special requests. Nobody else knows about it,
          because my boss was <u>just</u> inducted. You should probably&mdash;"
          The concierge phone begins to ring, and Janus abruptly ends your
          conversation to fulfill some other guest's "impossible" request…
        </FlavorText>
        <hr className="my-4" />

        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click any image to open it in a new window.
        </InfoIcon>
        <div className="prefer-2-col">
          <div className="w-full md:w-1/2 pr-4">
            <p>
              <b>
                <u>Key</u>:
              </b>
              <br />
              A: Terminal To Be Named Later (new)
              <br />
              B: Upper East Side (2 locations)
              <br />
              C: Lenox Hill (2 locations)
              <br />
              D: Columbus Circle (2 locations)
              <br />
              E: Central Park East (1 location)
              <br />
              F: Midtown North: 6th Ave. (5 locations)
              <br />
              G: Midtown North: 7th Ave. (2 locations)
              <br />
              H: Midtown North: 5th Ave. (1 location)
              <br />
              I: Midtown: 5th Ave. (2 locations)
              <br />
              J: Midtown: 6th Ave. (1 location)
              <br />
              K: Midtown: Madison Ave. (1 location)
              <br />
              L: Midtown East (2 locations)
              <br />
              M: Times Square (2 locations)
              <br />
              N: Midtown South (1 location)
              <br />
              O: Hudson Yards (1 location)
              <br />
              P: NoMad (2 locations)
              <br />
              Q: Flatiron&mdash;Gramercy (1 location)
              <br />
              R: Financial District (1 location)
              <br />
              S: The Battery (1 location)
            </p>

            <p>
              <i>
                Remember, our stations are <b>never</b> located more than one
                block (uptown or crosstown) from the locations served by that
                station, ensuring you easy and swift access at all times!
              </i>
            </p>
            <p>
              <i>
                Note: Map is not entirely to scale: distances are approximate.
                In particular, the distance between Stations Q and R has been
                severely truncated for readability, and the location of Station
                A is approximate at best.
              </i>
            </p>
            <p>
              <b>
                <u>Lines</u>:
              </b>
              <br />
              GRAY: A-B-C-H
              <br />
              RED: B-C-E-F-G-O
              <br />
              GREEN: D-F-G-I-N-M-O
              <br />
              BLUE: D-G-K-L
              <br />
              ORANGE: J-N-P-Q
              <br />
              PINK: L-K-I-J-M-O
              <br />
              PURPLE: M-P-Q-R-S
            </p>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <a target="_blank" href={routeMap}>
              <SheetableImage alt="" src={routeMap} title="" />
            </a>
          </div>
        </div>

        <hr className="my-4" />
        <h3>Timetable for All Lines During Peak Hours (3:00 PM - 6:00 PM)</h3>
        <p>Please note the following:</p>
        <ul>
          <li>
            Effective January 1, 2024, we have extended the Gray Line to include
            the hotel of our newest member. This timetable and the route map
            have been updated to include that new station, but our website has
            not.
          </li>
          <li>
            As always, all of our trains arrive at precisely one second past
            their scheduled arrival time, and depart precisely 59 seconds after
            their scheduled arrival time, giving you ample time to move between
            trains that arrive/depart a station at the same time.
          </li>
          <li>
            Please keep our walkways clear: if you arrive at a station and are
            not changing trains, remain onboard and do not loiter about the
            platform.{' '}
          </li>
        </ul>
        <InfoIcon>
          This timetable is available as a{' '}
          <a href="https://docs.google.com/spreadsheets/d/1_FIH2p5MtWOzJC0ptogNUUWrEHJn1YzHXPZvEOzGCgg/edit#gid=1481548526">
            Google sheet
          </a>
          .
        </InfoIcon>
        <a target="_blank" href={timetable}>
          <SheetableImage alt="" src={timetable} title="" />
        </a>
        <hr className="my-4" />
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Information contained in the message board is available in
          copy-to-sheet.
        </InfoIcon>
        <p>
          <a target="_blank" href={board}>
            <SheetableImage alt="Members' message board" src={board} title="" />
          </a>
        </p>
        <div className={cx(HIDDEN_CLASS)}>
          {/* using ul/li instead of p; p has issues with inline bolds for copy-to-sheet. */}
          <ul>
            <li>A certain guest who lives on the </li>
            <li>top floor of my location </li>
            <li>has just sent me at least her </li>
            <li>
              <b>dozenth letter of </b>
            </li>
            <li>pleas and entreaties to come to </li>
            <li>
              <b>the restaurant where we </b>
            </li>
            <li>
              <b>famously serve afternoon tea. </b>
            </li>
            <li>If you stop at Midtown N.: 6th </li>
            <li>Ave. Sta. and have ideas about how </li>
            <li>to mollify her, leave me a note!</li>
          </ul>
          <ul>
            <li>Any member who finds</li>
            <li>themselves at the Lenox Hill</li>
            <li>Station should request a coffee</li>
            <li>sample - I can pop down in a</li>
            <li>
              <b>second! Word of the coffee</b>
            </li>
            <li>
              <b>shop at my location</b>
            </li>
            <li>has been spreading throughout</li>
            <li>the city. We'll probably get more</li>
            <li>crowded (and pricier) soon, and</li>
            <li>I wanted to share with you all</li>
            <li>
              <b>first! Your first time</b>
            </li>
            <li>is on the house, of course, </li>
            <li>
              <b>and if you decide to come </b>
            </li>
            <li>
              <b>back, it'll only be five</b>
            </li>
            <li>cents! Hope to see you!</li>
          </ul>
          <ul>
            <li>
              <b>For the second time only</b>
            </li>
            <li>in the history of my location,</li>
            <li>
              <b>when you visit the Midtown:</b>
            </li>
            <li>
              <b>Madison Avenue Station</b>
            </li>
            <li>I'm giving away curios: thirty-</li>
            <li>eight from our "intimate salon"</li>
            <li>full of mysterious spirits!</li>
            <li>Come and be amazed!</li>
          </ul>
          <ul>
            <li>For those who come by the Midtown South</li>
            <li>Station, I can bring you an entrée from</li>
            <li>
              <b>my location's fine restaurant. First</b>
            </li>
            <li>come first served… no, just kidding.</li>
            <li>Of course members get to jump the line!</li>
            <li>The food is so good, you'll probably</li>
            <li>
              <b>come back for more: Second</b>
            </li>
            <li>helpings always welcome, of course!</li>
          </ul>
          <ul>
            <li>If you're at Midtown N: 5th Ave. Sta.</li>
            <li>
              <b>before check-in begins at 4:00 PM,</b>
            </li>
            <li>I'd love to pop down and chat. Room</li>
            <li>
              <b>2 of my location there</b>
            </li>
            <li>has a strange cold patch I can't</li>
            <li>seem to get rid of. (After </li>
            <li>
              <b>4, if you'd come back again</b>
            </li>
            <li>some other time, I'd be grateful.)</li>
            <li>
              <b>After 4:00 PM…! Whew!</b>
            </li>
          </ul>
          <ul>
            <li>If you're suddenly thirsty for a</li>
            <li>drink while at the Midtown East</li>
            <li>Station, I'll bring you one from the</li>
            <li>
              <b>rooftop bar at my location!</b>
            </li>
            <li>Our mixologists can make any </li>
            <li>drink, or they'll concoct a new</li>
            <li>one, following your recipe to </li>
            <li>
              <b>the letter: First one </b>
            </li>
            <li>is on the house every time you</li>
            <li>come!</li>
          </ul>
          <ul>
            <li>I'm at the Financial District</li>
            <li>Station location. If you ever stop</li>
            <li>by, just set all the dials on</li>
            <li>the letter combination lock to</li>
            <li>
              <b>the only letter in my monogram</b>
            </li>
            <li>to access the platform's </li>
            <li>Member supply closet.</li>
          </ul>
          <ul>
            <li>My location is right next to the </li>
            <li>Midtown: 6th Ave. Sta. If you</li>
            <li>arrive before 5:00, there won't</li>
            <li>be much for you to do, but if you</li>
            <li>come after</li>
            <li>
              <b>5: our award-winning spa</b>
            </li>
            <li>staff can make time to come</li>
            <li>down and attend to you! </li>
            <li>
              <b>Remember, after 5:00 PM only!</b>
            </li>
          </ul>
          <ul>
            <li>
              <b>The most common letter</b>
            </li>
            <li>I've been getting from my</li>
            <li>guests at The Battery location</li>
            <li>is, "How can I get Broadway</li>
            <li>tickets to MJ reserved</li>
            <li>
              <b>in my name?"</b>
            </li>
            <li>If you swing by the station and</li>
            <li>have ideas, leave me a note!</li>
          </ul>
          <ul>
            <li>
              <b>The most common</b>
            </li>
            <li>misconception about my</li>
            <li>location - which you should</li>
            <li>contact if stopping nearby - is</li>
            <li>people believing that the initial</li>
            <li>
              <b>consonant of your last name</b>
            </li>
            <li>(or first name) must be the</li>
            <li>same as the location's</li>
            <li>(excluding "the"). Just because</li>
            <li>that happens to be the case</li>
            <li>
              <b>for my colleague and I</b>
            </li>
            <li>does not mean it's a</li>
            <li>requirement!</li>
          </ul>
          <ul>
            <li>Where's the best restaurant in</li>
            <li>the City? Hmmm… I plead</li>
            <li>
              <b>the fifth! Of the restaurant</b>
            </li>
            <li>devotees I know, though, the one</li>
            <li>
              <b>at my location at H. Yards Sta.</b>
            </li>
            <li>gets their top marks.</li>
          </ul>
          <ul>
            <li>Yes, my first name and a word in the</li>
            <li>name of my hotel share the</li>
            <li>first three letters, but </li>
            <li>
              <b>the fourth letter in the hotel's word</b>
            </li>
            <li>is different, so if you're ever in the</li>
            <li>area, make sure to spell it (and my</li>
            <li>name) correctly! Common mistake!</li>
          </ul>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
