import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/0.png';
import image1 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/1.png';
import image2 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/2.png';
import image3 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/3.png';
import image4 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/4.png';
import image5 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/5.png';
import image6 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/6.png';
import image7 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/7.png';
import image8 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/8.png';
import image9 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/9.png';
import image10 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/10.png';
import image11 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/11.png';
import image12 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/12.png';
import image13 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/13.png';
import image14 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/14.png';
import image15 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/15.png';
import image16 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/16.png';
import image17 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/17.png';
import image18 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/18.png';
import image19 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/19.png';
import image22 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/22.png';
import image23 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/23.png';
import image24 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/24.png';
import image25 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/25.png';
import image26 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/26.png';
import image27 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/27.png';
import image28 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/28.png';
import image29 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/29.png';
import image30 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/30.png';
import image31 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/31.png';
import image32 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/32.png';
import image33 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/33.png';
import image34 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/34.png';
import image35 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/35.png';
import image36 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/36.png';
import image37 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/37.png';
import image38 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/38.png';
import image39 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/39.png';
import image40 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/40.png';
import image41 from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/41.png';
import lookWhatTheyveDone from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/LookWhatTheyveDone.mp3';
import samplemania from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/Samplemania.mp3';
import stepBackInTime from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/StepBackInTime.mp3';
import substitute from 'assets/puzzles/this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why/Substitute.mp3';

const SLUG = 'this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref} className="rotate-180">
        <FlavorText>
          You hear the familiar strains of a beloved high-pitched crooner as
          your favourite music quiz show comes on - Barry Gibb, eat your heart
          out! A few sounds may have gone off track and topped the weekly
          charts, but these big hits also have something else in common.
        </FlavorText>
        <div className="text-center">
          <h3>Playlist: All Of My Life I Call Yesterday - Awesome Mix Vol.1</h3>
          <br />
          <h4>Track 1: "I'll Jumble For Ya"</h4>
          <p className="leading-loose">
            BILLY DON'T BE LOVIN'
            <br />
            CAN'T HELP LOVIN' THAT GROOVE THING
            <br />
            DON'T SURVIVE
            <br />
            GO MARIA
            <br />
            I WILL CHANGE
            <br />
            MAMMA WEST
            <br />
            MY BABY LOVES A HERO
            <br />
            SHAKE YOUR MAN
            <br />
            TAKE A LETTER MIA
          </p>
          <br />
          <br />
          <h4>Track 2: "Look What They've Done to My Song Ma"</h4>
          <audio controls src={lookWhatTheyveDone} className="mx-auto my-4" />
          <a className={cx(HIDDEN_CLASS)} href={lookWhatTheyveDone}>
            audio
          </a>
          <br />
          <h4>Track 3: "Samplemania"</h4>
          <audio controls src={samplemania} className="mx-auto my-4" />
          <a className={cx(HIDDEN_CLASS)} href={samplemania}>
            audio
          </a>
          <br />
          <h4>Track 4: "Step Back in Time"</h4>
          <audio controls src={stepBackInTime} className="mx-auto my-4" />
          <a className={cx(HIDDEN_CLASS)} href={stepBackInTime}>
            audio
          </a>
          <br />
          <h4>Track 5: "Substitute"</h4>
          <audio controls src={substitute} className="mx-auto my-4" />
          <a className={cx(HIDDEN_CLASS)} href={substitute}>
            audio
          </a>
          <br />
          <h4>Track 6: "All Shook Up"</h4>
          <p className="leading-loose">
            Lousy Cure To Bad Photo -{' '}
            <i>They're a former student of a cosmetic college. </i>
            <br />
            Red Nightingales - <i>It's an oily electrical discharge.</i>
            <br />
            Developed Youth Loses Toy -{' '}
            <i>A desperate romantic rejects loving anyone else. </i>
            <br />
            No Tarnishing Gin Import -{' '}
            <i>
              There's precipitation this evening at the high school graduation
              party.
            </i>
            <br />
            Sandy Mold In Everlasting Hope -{' '}
            <i>Affection has numerous marvels</i>.
            <br />
            Cohering Duet Or Two Shared Lies -{' '}
            <i>More evil deeds dwell within my control.</i>
            <br />
            Ghost Ace Chasing Me -{' '}
            <i>They are specific fluctuating illusions.</i>
            <br />
            Edgy Art - <i>It's a typical Shakespearean play.</i>
            <br />
            Neaten Without A Theory - <i>Thou art a person my heart desires.</i>
          </p>
          <br />
          <br />
          <h4>Track 7: "Tuberstylin'"</h4>
          <p>
            <SheetableImage alt="" src={image0} title="" />
            <SheetableImage alt="" src={image1} title="" />
            <SheetableImage alt="" src={image2} title="" />
          </p>
          <hr className={cx('my-4', NO_COPY_CLASS)} />
          <p className={cx(HIDDEN_CLASS)}>
            ……………………………………………………………………………………………………………
          </p>
          <p>
            <SheetableImage alt="" src={image3} title="" />
            <SheetableImage alt="" src={image4} title="" />
            <SheetableImage alt="" src={image5} title="" />
          </p>
          <hr className={cx('my-4', NO_COPY_CLASS)} />
          <p className={cx(HIDDEN_CLASS)}>
            ……………………………………………………………………………………………………………
          </p>
          <p>
            <SheetableImage alt="" src={image6} title="" />
            <SheetableImage alt="" src={image7} title="" />
            <SheetableImage alt="" src={image8} title="" />
          </p>
          <hr className={cx('my-4', NO_COPY_CLASS)} />
          <p className={cx(HIDDEN_CLASS)}>
            ……………………………………………………………………………………………………………
          </p>
          <p>
            <SheetableImage alt="" src={image9} title="" />
            <SheetableImage alt="" src={image10} title="" />
            <SheetableImage alt="" src={image11} title="" />
          </p>
          <hr className={cx('my-4', NO_COPY_CLASS)} />
          <p className={cx(HIDDEN_CLASS)}>
            ……………………………………………………………………………………………………………
          </p>
          <p>
            <SheetableImage alt="" src={image12} title="" />
            <SheetableImage alt="" src={image13} title="" />
            <SheetableImage alt="" src={image14} title="" />
          </p>
          <hr className={cx('my-4', NO_COPY_CLASS)} />
          <p className={cx(HIDDEN_CLASS)}>
            ……………………………………………………………………………………………………………
          </p>
          <p>
            <SheetableImage alt="" src={image15} title="" />
            <SheetableImage alt="" src={image16} title="" />
            <SheetableImage alt="" src={image17} title="" />
          </p>
          <br />
          <br />
          <h4>Track 8: "Something's Missing"</h4>
          <p>
            <SheetableImage
              alt=""
              src={image18}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image19}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image22}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image22}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image22}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image23}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image24}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image25}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image26}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image27}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image28}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image29}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image30}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image31}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
          </p>
          <h4>Track 9: "Cover Versions"</h4>
          <p>
            <SheetableImage
              alt=""
              src={image32}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image33}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image34}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image35}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image36}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image37}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image38}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image39}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image40}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
            <SheetableImage
              alt=""
              src={image41}
              title=""
              className="mx-auto my-4 w-full md:w-[500px]"
            />
          </p>
          <br />
          <br />
          <h4>Track 10: "Counting the Beat"</h4>
          <p className="leading-loose">
            13
            <br />
            8 8 10 13 10 13 10 8 10 13
            <br />
            8 8 10 13 10 13 10 8 10 13
            <br />
            8 8 10 13 10 13 10 8 10 13
            <br />
            13 10 13
            <br />
            10 8 13
            <br />
            10 8 13
            <br />
            10 8 13
            <br />
            <br />
            9 11 11 9 11 11
            <br />
            9 11 11 9 11
            <br />
            9 11 11 9 11 11
            <br />
            9 11 11 9 11
            <br />
            9 6 11 11 9 6 9 4 2 4 2 4 2 6<br />
            9 6 11 11 9 6 9 4 2 4 2 4 2 6 11
            <br />
            <br />
            10 10
            <br />
            10 10 9 9 7 7 5 5<br />
            3 3 2 2 12 12 2 2<br />
            3 3 2 2 12 12 10
            <br />
            10 12 9 10 10 9 <br />
            10 12 14 10 10 9 7 5<br />
            14 12 9 <br />
            10 9 9 7 7 5 <br />
            2 2 5 7 5<br />
            <br />
            4 7 4 7 4 7 4 7 4 7 4 7 4 7 4 7<br />
            5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8<br />
            4 7 4 7 4 7 4 7 4 7 4 7 4 7 4 7<br />
            5 8 5 8 5 8 5 8 5 8 5 8 5 8 5 8<br />
            12 10 9 10 9 7 9 5 7 4 5 4 5 4 5 4<br />
            12 10 9 10 9 7 9 5 7 4 5 4 5 4 5 4<br />
            <br />
            9 7 9 7 9 7 9 7 5 7 9<br />
            9 9 8 9 11 8 9 <br />
            9 9 8 9 11 8 8 9<br />
            9 9 8 9 11 8 9 <br />
            9 9 8 9 11 8 8 9<br />
            13 13 13 13 11 9 9 8 6<br />9 13 13 11 9 9 8 9
          </p>
          <br />
          <br />
          <h4>Track 11: "Turning Japanese"</h4>
          <p className="leading-loose">
            I will be your car's motor
            <br />
            And I will be your burning star fire
            <br />
            And I will be the water of your waterfall
            <br />
            You'll hit the ceiling, and you'll feel like you're 10 feet tall{' '}
            <br />
            <br />
            Welcome to the show, strangers
            <br />
            I am the one who should lie down
            <br />
            I turned away when I saw the knife come out
            <br />
            When I heard the train coming, I stayed on the tracks
            <br />
            <br />
            Standing at the end of the endless sea
            <br />
            Stranded like a fugitive lost at sea
            <br />
            Port city on a rainy day
            <br />
            Watching the grey clouds cast shadows over the bay
            <br />
            <br />
            Now, let's put it out
            <br />
            Screaming at night
            <br />
            And so it will be
            <br />
            Movement is heard
            <br />
            Just try to count
            <br />
            Screaming in your sleep
            <br />
            You say the word
            <br />
            Movement is heard
            <br />
            <br />
            Now people advertise me as an unparalleled genius
            <br />
            They are fussing to listen to me
            <br />
            It's funny and they take me away
            <br />
            <br />
            My happiness is slowly coming back <br />
            Now you are at home
            <br />
            If it starts to sink
            <br />
            It's time to pack up and head out
            <br />
            <br />
            That's why I prefer rock 'n' roll music
            <br />
            You can choose it at any time
            <br />
            Have a backbeat, you can't lose it
            <br />
            You can use it at any time
            <br />
            Must be rock roll music
            <br />
            If you want to dance with me
          </p>
          <h2>The Final Countdown</h2>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>11.
            </b>
            <br />
            Catherine Martin's four Oscars make her the winningest Australian at
            the Academy Awards—her awards are for Best Production Design and
            Best Costume Design. They directed all of the films for which
            Catherine Martin won the awards.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>10.
            </b>
            <br />
            They are the last cast member credited in Wes Anderson's 2023 film{' '}
            <i>Asteroid City</i>, listed simply as "actress/wife".
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>9.
            </b>
            <br />
            They are the only singer to have five <i>Billboard</i> Hot 100 #1
            hits <i>and</i> a grandfather with a Nobel Prize.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>8.
            </b>
            <br />
            They are the seventh Academy Award nominee (to date) to complete the
            set that also features the following people.
            <br />
            <br />
            Frank Capra (1939)
            <br />
            David Niven (1959)
            <br />
            Michael Caine (1973)
            <br />
            Walter Matthau (1976)
            <br />
            James Franco (2011)
            <br />
            Seth MacFarlane (2013)
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>7.
            </b>
            <br />
            They portrayed the character who once set the record for youngest
            first officer in Starfleet, and held it until the 2250s, when one of
            their sons took the record.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>6.
            </b>
            <br />
            They starred in the video for the fourth single from the fourth
            studio album by the most successful band whose name comes from the
            fourth-published book in a series about the four Pevensie children.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>5.
            </b>
            <br />
            They sued the internet company once known as Jerry and David's Guide
            to the World Wide Web in 2001 because of its (and their) current
            name.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>4.
            </b>
            <br />
            They played Tom Cruise's ex-wife and Harrison Ford's neighbor, but
            are probably most famous for being Karl Urban's sister.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>3.
            </b>
            <br />
            They won an Outstanding Lead Actress in a Comedy Series Emmy for a
            show in which they played Alice, Buck, and the title character—in
            addition to several others.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>2.
            </b>
            <br />
            Their highest-grossing film (by far) is 2001's <i>The Animal</i>,
            which features them as mad scientist Dr. Wilder, who saves Rob
            Schnieder's Marvin Mange by giving him non-human body parts.
          </p>
          <p>
            <b>
              <span className={cx(HIDDEN_CLASS)}>'</span>1.
            </b>
            <br />
            They, for one 2009 movie, received both an MTV Movie Award
            nomination for Best Kiss <i>and</i> a nomination for Best Fight
            (shared with two different castmates).
          </p>
          <p>…</p>
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
