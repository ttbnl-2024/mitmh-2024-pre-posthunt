import cx from 'classnames';
import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import { NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import audio from 'assets/puzzles/football-team-on-the-marching-field/audio.m4a';
import image from 'assets/puzzles/football-team-on-the-marching-field/image.png';

const SLUG = 'football-team-on-the-marching-field';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <div>
          <SheetableImage
            alt="A grid representing a football field where letters have been placed on top"
            src={image}
            title="Marching field"
            className="mx-auto"
          />

          <div>
            <AudioLink src={audio} className="mx-auto" />
          </div>

          <div className={`${cx(NO_COPY_CLASS)} mt-4`}>
            <details>
              <summary>
                Click to expand for a transcript of the audio file
              </summary>
              <div>
                <p>
                  Recording now for my band director who’s home sick today. We
                  are practicing our drill for the homecoming halftime show,
                  which is ambitious for our small band of 12 players. We are
                  working on movement through the sets today, so players will
                  have instruments in ready position, without playing through
                  the music. Looks like we are set and ready to go any moment
                  now. The band’s in place, just waiting for our starting cue
                  and metronome.
                </p>
                <p>Wait, What’s this?</p>
                <p>
                  The football team is... What are they doing? They are setting
                  up a play now?
                </p>
                <p>
                  High snap over the Quarterback’s head. It’s rolling down the
                  field right into the...
                </p>
                <p>
                  Oh! The oboe player has tripped on the ball! That ball is
                  rolling down the field.
                </p>
                <p>
                  The Quarterback has chased it down. He scoops it into his
                  arms.
                </p>
                <p>
                  He’s looking for a backwards pass... Sees a man open...
                  Throws...
                </p>
                <p>
                  Ah that’s not his man! The trumpet player took it right to the
                  face!
                </p>
                <p>The running back grabs it, he starts running forward...</p>
                <p> OOO smack into the saxophone!</p>
                <p>
                  FUMBLE! The ball is loose... It’s rolling through the hands of
                  everyone!
                </p>
                <p>
                  The huge Defensive Tackle has picked it up. What a big guy,
                  lumbering towards the sideline.
                </p>
                <p>He’s watching the offense catch up to him... He’s not... </p>
                <p>
                  Oh! He didn’t even see the clarinet player... or the trombone
                  player!
                </p>
                <p>
                  That ball is rolling to the feet of the flute player. Afraid
                  for her life and seeing all the players heading her way, she
                  picks it up and she chucks it away. What an arm!
                </p>
                <p>It’s a high throw! Is that play even legal? LOOK OUT! </p>
                <p>
                  Aw, it’s hit the trumpet player again right on top of the
                  head! He is not having a good day!
                </p>
                <p>
                  The offense grabs the ball again and moves forward for some
                  good progress... oh right into a defensive wall near the
                  saxophone!
                </p>
                <p>Ooo! He rolls left, laterals it behind him. </p>
                <p>The ball bounces off the bass drum high up into the air! </p>
                <p>
                  Oo! The color guard’s swinging her flag like a baseball bat.
                  What a hit!
                </p>
                <p>
                  The ball is rolling down the field! The Quarterback scoops it
                  up.
                </p>
                <p>
                  He’s running straight ahead, then throws behind him. He finds
                  his actual player this time.
                </p>
                <p>
                  He is heading downfield, stepped around a tackle, gets
                  nervous, throws it back to the Quarterback who zigzags right
                  into the trumpet player! What do they have against trumpets?
                </p>
                <p>
                  A quick shuffle pass back to the receiver. It’s deflected! The
                  defender got a hand on it.
                </p>
                <p>
                  It’s up in the air, and it’s headed to... WHAT? It’s landed
                  inside the bell of the tuba!
                </p>
                <p>
                  The Wide Receiver has somehow grabbed the tuba away from the
                  tuba player! He tucks the tuba under his arm, and he runs into
                  the endzone with it! TOUCHDOWN!!! WHAT AN AMAZING PLAY!!! IT’S
                  UNBELIEVABLE!!! SO GOOD!!! OH WOW!!
                </p>
                <p>(will you call down a stretcher for that trumpet player?)</p>
              </div>
            </details>
            <InfoIcon className={cx(NO_COPY_CLASS)}>
              A copy/pasteable grid can be found{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1iuEVqnY3oF-YYG4Cd6hZ8aA-fAcnq_Whi0oxKpRMezk/edit#gid=0"
                target="_blank"
              >
                here
              </a>
              . The following are links to identical copies in case of load
              issues:{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1-bmED3F_tj3OZMagNhtKZBW5M9wKlBRh63Qv9xJ2mQc/edit?usp=sharing"
                target="_blank"
              >
                Copy 2
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1DPxi9L0fUL-eSunu3-6XLuHzFyXhan78oW30v5GdOeM/edit?usp=sharing"
                target="_blank"
              >
                Copy 3
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1lvTxCVx0mSCJ46KjnPDfXw9SuNVymkONNZfP8mUgG9Q/edit?usp=sharing"
                target="_blank"
              >
                Copy 4
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1n_EK2HOlqmrAh9WwQqHiNJFlhs7DALm2YTHOXUvb00U/edit?usp=sharing"
                target="_blank"
              >
                Copy 5
              </a>
              .
            </InfoIcon>
          </div>
        </div>

        <hr className="my-4" />

        <p>Performer:  1 Clarinet</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side One: 3.0 steps outside 35 yd ln</td>
              <td>14.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 40 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side One: 3.0 steps inside 30 yd ln</td>
              <td>15.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side One: on 45 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>6.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side One: 2.0 steps outside 45 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 40 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side One: on 30 yd ln</td>
              <td>4.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 25 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side One: 4.0 steps outside 35 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: on 35 yd ln</td>
              <td>6.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 25 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 1.0 steps inside 10 yd ln</td>
              <td>on Front hash</td>
            </tr>
          </tbody>
        </Table>
        <hr className="my-4" />

        <p>Performer:  2 Piccolo</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side One: 2.0 steps inside 45 yd ln</td>
              <td>8.0 steps in frnt of Back sideline</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side One: on 40 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side Two: 1.0 steps inside 40 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>4.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side Two: 2.0 steps outside 40 yd ln</td>
              <td>6.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side One: on 45 yd ln</td>
              <td>14.0 steps in frnt of Back sideline</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>on 50 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side Two: on 40 yd ln</td>
              <td>3.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side Two: 4.0 steps outside 30 yd ln</td>
              <td>8.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>on 50 yd ln</td>
              <td>2.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>on Back hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  3 Euphonium</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: 1.0 step outside 40 yd ln</td>
              <td>11.0 steps in frnt of Back sideline</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side One: 2.0 steps inside 45 yd ln</td>
              <td>7.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side Two: 1.0 steps outside 35 yd ln</td>
              <td>8.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side Two: on 40 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side Two: 2.0 steps inside 45 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>on 50 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side Two: 2.0 steps inside 45 yd ln</td>
              <td>2.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>on 50 yd ln</td>
              <td>9.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side Two: 1.0 steps outside 40 yd ln</td>
              <td>9.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: 2.0 steps inside 30 yd ln</td>
              <td>5.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 3.0 steps outside 30 yd ln</td>
              <td>11.0 steps behind Front sideline</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  4 Flute</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: 2.0 steps outside 30 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 35 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side Two: 2.0 steps outside 40 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side Two: 3.0 steps outside 45 yd ln</td>
              <td>9.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>14.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side Two: 2.0 steps outside 45 yd ln</td>
              <td>8.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>2.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side Two: on 30 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side Two: on 45 yd ln</td>
              <td>6.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side Two: 3.0 steps outside 35 yd ln</td>
              <td>12.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>on 50 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side Two: 4.0 outside 40 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 2.0 steps inside 45 yd ln</td>
              <td>12.0 steps behind Back hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  5 Saxophone</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side One: 2.0 steps outside 30 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 35 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side One: on 25 yd ln</td>
              <td>12.0 steps behind Front sideline</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side One: 1.0 step inside 40 yd ln</td>
              <td>5.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side One: on 40 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side One: 4.0 steps outside 40 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side One: on 30 yd ln</td>
              <td>2.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side One: 2.0 steps outside 35 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 15 yd ln</td>
              <td>10.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side One: 3.0 steps outside 25 yd ln</td>
              <td>8.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: on 35 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 30 yd ln</td>
              <td>8.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 2.0 steps inside 20 yd ln</td>
              <td>15.0 steps behind Front sideline</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  6 Trombone</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side One: 1.0 steps outside 40 yd ln</td>
              <td>11.0 steps in frnt of Back sideline</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side One: 3.0 steps inside 35 yd ln</td>
              <td>5.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side Two: 3.0 steps outside 50 yd ln</td>
              <td>9.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side One: on 45 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side One: 4.0 steps outside 40 yd ln</td>
              <td>4.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 35 yd ln</td>
              <td>2.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side One: 1.0 steps outside 45 yd ln</td>
              <td>7.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>14.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>16.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 1.0 steps outside 50 yd ln</td>
              <td>13.0 steps in frnt of Front hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  7 Oboe</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: 2.0 steps inside 45 yd ln</td>
              <td>8.0 steps in frnt of Back sideline</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>16.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side One: 2.0 steps inside 40 yd ln</td>
              <td>2.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side Two: on 35 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>4.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side Two: 2.0 steps inside 40 yd ln</td>
              <td>4.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>6.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side Two: on 30 yd ln</td>
              <td>3.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side Two: on 25 yd ln</td>
              <td>10.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>on 50 yd ln</td>
              <td>14.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>12.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 2.0 steps outside 30 yd ln</td>
              <td>4.0 steps behind Back hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  8 Color Guard</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: 3.0 steps outside 35 yd ln</td>
              <td>14.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side Two: 2.0 steps inside 45 yd ln</td>
              <td>11.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side Two: 3.0 steps inside 35 yd ln</td>
              <td>3.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side Two: on 40 yd ln</td>
              <td>8.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>12.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side Two: on 30 yd ln</td>
              <td>6.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side Two: 2.0 steps outside 35 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side Two: on 35 yd ln</td>
              <td>on Back hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side Two: 1.0 steps outside 25 yd ln</td>
              <td>on Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>on 50 yd ln</td>
              <td>6.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>8.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 4.0 steps outside 35 yd ln</td>
              <td>16.0 steps behind Back hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  9 Bass Drum</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>on 50 yd ln</td>
              <td>8.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>12.0 steps behind Front sideline</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side Two: 1.0 steps outside 45 yd ln</td>
              <td>9.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side One: on 30 yd ln</td>
              <td>7.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side One: on 40 yd ln</td>
              <td>2.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side One: 2.0 steps inside 45 yd ln</td>
              <td>2.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>on 50 yd ln</td>
              <td>2.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side One: 2.0 steps inside 45 yd ln</td>
              <td>6.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 40 yd ln</td>
              <td>5.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>on 50 yd ln</td>
              <td>2.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>6.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: 2.0 steps outside 40 yd ln</td>
              <td>9.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 3.0 steps outside 45 yd ln</td>
              <td>12.0 steps behind Front sideline</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  10 Tuba</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: on 45 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>12.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side One: 2.0 steps inside 35 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side One: 4.0 steps outside 40 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side One: 2.0 steps inside 40 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side One: 4.0 steps outside 50 yd ln</td>
              <td>14.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>16.0 steps behind Front sideline</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 20 yd ln</td>
              <td>7.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side One: 4.0 steps outside 30 yd ln</td>
              <td>1.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: on 35 yd ln</td>
              <td>2.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: on 25 yd ln</td>
              <td>4.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: on 15 yd ln</td>
              <td>10.0 steps in frnt of Front hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  11 Trumpet</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: on 40 yd ln</td>
              <td>On Front hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 35 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side Two: 1.0 steps outside 35 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>1.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side One: 2.0 steps outside 40 yd ln</td>
              <td>14.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side Two: on 45 yd ln</td>
              <td>6.0 steps behind Front sideline</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>on 50 yd ln</td>
              <td>16.0 steps behind Front sideline</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 30 yd ln</td>
              <td>1.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side One: 3.0 steps outside 40 yd ln</td>
              <td>7.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: on 35 yd ln</td>
              <td>14.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: on 20 yd ln</td>
              <td>12.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 2.0 steps outside 10 yd ln</td>
              <td>8.0 steps in frnt of Back hash</td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />

        <p>Performer:  12 French Horn</p>
        <Table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Move</th>
              <th>Side 1-Side 2</th>
              <th>Back-Front</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Set #1</td>
              <td>0</td>
              <td>Side Two: 4.0 steps outside 45 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #2</td>
              <td>24</td>
              <td>Side Two: on 35 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #3</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 30 yd ln</td>
              <td>4.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #4</td>
              <td>24</td>
              <td>Side Two: 1.0 steps outside 35 yd ln</td>
              <td>2.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Follow the Leader from Set #4 to Set #5</td>
            </tr>
            <tr>
              <td>Set #5</td>
              <td>24</td>
              <td>Side One: 1.0 steps outside 50 yd ln</td>
              <td>7.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #6</td>
              <td>12</td>
              <td>Side Two: on 45 yd ln</td>
              <td>8.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #7</td>
              <td>4</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>on Front hash</td>
            </tr>
            <tr>
              <td colSpan={4}>Hold 12</td>
            </tr>
            <tr>
              <td>Set #8</td>
              <td>16</td>
              <td>Side Two: 4.0 steps outside 50 yd ln</td>
              <td>6.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #9</td>
              <td>8</td>
              <td>Side Two: 4.0 steps outside 40 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #10</td>
              <td>16</td>
              <td>Side One: on 45 yd ln</td>
              <td>8.0 steps behind Front hash</td>
            </tr>
            <tr>
              <td>Set #11</td>
              <td>8</td>
              <td>Side Two: on 45 yd ln</td>
              <td>4.0 steps in frnt of Front hash</td>
            </tr>
            <tr>
              <td>Set #12</td>
              <td>32</td>
              <td>Side One: 4.0 steps outside 45 yd ln</td>
              <td>2.0 steps in frnt of Back hash</td>
            </tr>
            <tr>
              <td>Set #13</td>
              <td>16</td>
              <td>Side One: on 35 yd ln</td>
              <td>2.0 steps behind Back hash</td>
            </tr>
            <tr>
              <td>Set #14</td>
              <td>24</td>
              <td>Side One: 1.0 steps inside 35 yd ln</td>
              <td>9.0 steps behind Front sideline</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
