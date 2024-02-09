import { MathJax, MathJaxContext } from 'better-react-mathjax';
import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import CtCMath from 'components/copy_math';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'under-pressure';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <MathJaxContext>
        <MathJax inline={true}>
          <div ref={ref}>
            <InfoIcon className={cx(NO_COPY_CLASS)}>
              Equations are typeset using MathJax, and are available in LaTeX in
              copy-to-clipboard (which may take a bit). On narrow screens,
              equations may scroll horizontally.
            </InfoIcon>
            <h3>Part 1: Evaluate each of the following equations.</h3>
            <p className="mt-10">
              <CtCMath math={'EXAMPLE = x_1 + x_2 - x_3'} display /> where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> "___, play Despacito"
                (meme referring to an Amazon product);
                <CtCMath math={'|x_1| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Random subset, or free Costco treat;{' '}
                <CtCMath math={'|x_2| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Interjection denoting grief or
                sorrow; <CtCMath math={'|x_3| = 4'} />
              </li>
            </ul>
            <p className="mt-10">
              <CtCMath
                math={'DEMONSTRATION = x_1 + x_2 \\cdot x_3 - 501'}
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} />{' '}
                <i>Angels &amp; ___</i>{' '}
                (Dan Brown novel); <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Characteristic;{' '}
                <CtCMath math={'|x_2| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> "My Heart Will Go On" singer;{' '}
                <CtCMath math={'|x_3| = 4'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]&nbsp;
              <CtCMath
                math={
                  'y_1=\\frac{\\sqrt{i\\cdot(x_1^2 - \\lim x_2) + x_3 + \\frac{x_4}{2}}}{x_5}'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> ___ Alto (birthplace of Hewlett-Packard);{' '}
                <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Company formerly known as X.com;{' '}
                <CtCMath math={'|x_2| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> You, currently, vis-a-vis this
                puzzle; <CtCMath math={'|x_3| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> "My ___ is too big" (internet meme along
                with "I am a banana");{' '}
                <CtCMath math={'|x_4| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> LoL champion who attacks with an
                anchor; <CtCMath math={'|x_5| = 8'} />
              </li>
            </ul>
            <p className="mt-10">
              [6 points]{' '}
              <CtCMath
                math={
                  'y_2 = \\int \\left(\\sqrt{(x_1 - 51 + 2000)^2} - x_2 \\right)\\cdot dS'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Indonesian island known for
                honeymooning; <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Famous pirate captain from{' '}
                <i>Treasure Island</i>; <CtCMath math={'|x_2| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [7 points]{' '}
              <CtCMath
                math={
                  'y_3 = \\nabla \\cdot \\left(\\lim \\left(x_1 + \\frac{x_2}{x_3}\\right)\\right) + \\frac{x_4}{2} - x_5'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Bad-tempered, cantankerous;{' '}
                <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Type of sea creature that eats Mr
                Krabs' millionth dollar; <CtCMath math={'|x_2| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Door, or snippet in a log;{' '}
                <CtCMath math={'|x_3| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Movie aka "The Bus That Couldn't Slow
                Down"; <CtCMath math={'|x_4| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> Highschool dance;{' '}
                <CtCMath math={'|x_5| = 4'} />
              </li>
            </ul>
            <p className="mt-10">
              [9 points]{' '}
              <CtCMath
                math={
                  'y_4 = (\\nabla \\cdot (x_1 + x_2 - 50)) - x_3 + \\frac{d}{dT}(x_4)'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Implement for untangling hair;{' '}
                <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Had a strong carnal desire for;{' '}
                <CtCMath math={'|x_2| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Swore at, with "out";{' '}
                <CtCMath math={'|x_3| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Manner in which something is
                arranged, such as an HTML page; <CtCMath math={'|x_4| = 6'} />
              </li>
            </ul>
            <p className="mt-10">
              [7 points]{' '}
              <CtCMath
                math={
                  'y_5 = \\int i \\cdot ((x_1 - x_2) + (x_3 - i \\cdot x_4)) \\cdot dP'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Dead bird in a <i>Monty Python</i>{' '}
                sketch; <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> It can be modern or abstract;{' '}
                <CtCMath math={'|x_2| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Give up, as a game;{' '}
                <CtCMath math={'|x_3| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_4 = |x_4|'} />, as an English word
              </li>
            </ul>
            <p className="mt-10">
              [7 points]{' '}
              <CtCMath
                math={
                  'y_6 = x_1 \\cdot x_2 + \\left(-\\frac{d}{dQ}(x_3)\\right) - (x_4 - 500)'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> State or assert formally;{' '}
                <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Insult, as in some rap tracks;{' '}
                <CtCMath math={'|x_2| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Word following "Bugs" or "Playboy";{' '}
                <CtCMath math={'|x_3| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Harmful or obstructive, like weather
                conditions; <CtCMath math={'|x_4| = 7'} />
              </li>
            </ul>
            <p className="mt-10">
              [9 points]{' '}
              <CtCMath
                math={
                  'y_7 = \\nabla \\times \\sqrt{x_1 - (x_2 - x_3)} + x_4 - x_5'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Padme's surname;{' '}
                <CtCMath math={'|x_1| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Having tender feelings, emotional;{' '}
                <CtCMath math={'|x_2| = 11'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Conscious;{' '}
                <CtCMath math={'|x_3| = 8'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Supergiant Games RPC featuring "The
                Kid"; <CtCMath math={'|x_4| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> Word with which Laszlo transforms;{' '}
                <CtCMath math={'|x_5| = 3'} />
              </li>
            </ul>
            <p className="mt-10">
              [10 points]{' '}
              <CtCMath
                math={
                  'y_8 = (-e^{x_1}) + \\frac{x_2}{2} + \\frac{i\\cdot x_3}{3}'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Sagacious, showing good judgment;{' '}
                <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Mystery ___ Theater 3000;{' '}
                <CtCMath math={'|x_2| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Redact or bleep;{' '}
                <CtCMath math={'|x_3| = 6'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={
                  'y_9 = \\int \\frac{x_1}{\\nabla \\cdot(x_2 - x_3)} \\cdot dT + x_4 - x_5'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> "Ol' Blue Eyes";{' '}
                <CtCMath math={'|x_1| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Marshes, swamps, etc.;{' '}
                <CtCMath math={'|x_2| = 8'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Light brown;{' '}
                <CtCMath math={'|x_3| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Outdoor elevated platform attached to
                a building; <CtCMath math={'|x_4| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> "Push button, receive ___"
                (misinterpreted instructions on an automatic hand dryer);{' '}
                <CtCMath math={'|x_5| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [10 points]{' '}
              <CtCMath
                math={
                  'y_{10} = \\left(\\int x_1 \\cdot dB\\right) + i \\cdot \\frac{d}{dT}(e^{x_2 - 1})'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Most courageous;{' '}
                <CtCMath math={'|x_1| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Long reclining chair, or "chair" in
                French; <CtCMath math={'|x_2| = 6'} />
              </li>
            </ul>
            <p className="mt-10">
              [10 points]{' '}
              <CtCMath
                math={
                  'y_{11} = \\nabla \\times (\\sqrt{x_1 - x_2} - x_3) + \\int x_4 \\cdot dL'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Parents, grandparents, etc.;{' '}
                <CtCMath math={'|x_1| = 9'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Star or extra;{' '}
                <CtCMath math={'|x_2| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Tied, or maximum;{' '}
                <CtCMath math={'|x_3| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Dismal, like an outlook;{' '}
                <CtCMath math={'|x_4| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [6 points]{' '}
              <CtCMath math={'y_{12} = \\frac{x_1}{x_2 \\cdot x_3}'} display />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Shuriken wielder;{' '}
                <CtCMath math={'|x_1| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Abu Dhabi country (abbr.);{' '}
                <CtCMath math={'|x_2| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Gave, as a wish or a monetary
                endorsement; <CtCMath math={'|x_3| = 7'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={
                  'y_{13} = \\oint\\left(x_1 + \\left(x_2^2 - (-e^{x_3})\\right)\\right) \\cdot dL'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> William of legend;{' '}
                <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Blue hue or bird;{' '}
                <CtCMath math={'|x_2| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Fiesta or political group;{' '}
                <CtCMath math={'|x_3| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={
                  'y_{14} = \\left(\\left(\\oint (x_1 \\cdot dA) - \\lim x_2\\right)^2 - 1 - x_3 \\right) \\cdot (i \\cdot x_4)'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Debilitating headaches that often
                come with auras; <CtCMath math={'|x_1| = 9'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Octagonal outdoor pavilions;{' '}
                <CtCMath math={'|x_2| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Opposite of max;{' '}
                <CtCMath math={'|x_3| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Put words down on paper;{' '}
                <CtCMath math={'|x_4| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [9 points]{' '}
              <CtCMath
                math={
                  'y_{15} = \\oint \\lim(x_1 + (i \\cdot (x_2 + x_3 + (x_4 - x_5))) \\cdot dZ'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> City containing the Black Stone;{' '}
                <CtCMath math={'|x_1| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Netflix thriller about serial killer
                Joe; <CtCMath math={'|x_2| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> ___ mints (arguably the best kind of
                Girl Scout cookie);{' '}
                <CtCMath math={'|x_3| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Main presentations at conferences;{' '}
                <CtCMath math={'|x_4| = 8'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> Square, clove, or slip;{' '}
                <CtCMath math={'|x_5| = 4'} />
              </li>
            </ul>
            <p className="mt-10">
              [7 points]{' '}
              <CtCMath
                math={
                  'y_{16} = x_1 \\cdot \\left( e^{\\nabla \\times \\left(x_2 + \\frac{x_3}{3}\\right)} - 1000\\right)'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Heap; <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Say haha, chortle;{' '}
                <CtCMath math={'|x_2| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Sequence of data points sorted in
                chronological order; <CtCMath math={'|x_3| = (4, 6)'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={'y_{17} = (-x_1) + e^{\\oint x_2 \\cdot dE} - 1000'}
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> One who did the crime, in cop talk;{' '}
                <CtCMath math={'|x_1| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Flavor or preference;{' '}
                <CtCMath math={'|x_2| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={
                  'y_{18} = \\int \\sqrt{i \\cdot x_1} \\cdot \\left(\\nabla \\times \\left(\\frac{d}{dO}(i \\cdot x_2)\\right)\\right) \\cdot dO'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Person grabbing or confiscating
                something; <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> 24-hour periods;{' '}
                <CtCMath math={'|x_2| = 4'} />
              </li>
            </ul>
            <p className="mt-10">
              [10 points]{' '}
              <CtCMath
                math={
                  'y_{19} = \\nabla \\cdot x_1 + \\left(x_2 - \\frac{\\lim(x_3 + x_4)}{2}\\right)'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> VP under Bush;{' '}
                <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Ought not to;{' '}
                <CtCMath math={'|x_2| = 8'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> "Great ___!"
                (Doc Brown catchphrase);{' '}
                <CtCMath math={'|x_3| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Moved on one's hands and knees;{' '}
                <CtCMath math={'|x_4| = 7'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={
                  'y_{20} = \\frac{i \\cdot (-x_1 + e^{x_2})}{x_3 \\cdot x_4}'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Computer memory or sheep;{' '}
                <CtCMath math={'|x_1| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> It costs 2 grain and 3 ore;{' '}
                <CtCMath math={'|x_2| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Underlying essence, or bit of code
                shared on GitHub; <CtCMath math={'|x_3| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Torvalds of Linux fame;{' '}
                <CtCMath math={'|x_4| = 5'} />
              </li>
            </ul>
            <p className="mt-10">
              [6 points]{' '}
              <CtCMath
                math={
                  'y_{21} = \\left(x_1 - i \\cdot e^{\\frac{x_2}{x_3}}\\right) \\cdot x_4'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> ___ horse (painful cramp) ;{' '}
                <CtCMath math={'|x_1| = 7'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> National dish of South Korea;{' '}
                <CtCMath math={'|x_2| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Young newt ;{' '}
                <CtCMath math={'|x_3| = 3'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Class of minivan-like car that
                doesn't really have much to do with athletics (acronym);{' '}
                <CtCMath math={'|x_4| = 3'} />
              </li>
            </ul>
            <p className="mt-10">
              [8 points]{' '}
              <CtCMath
                math={
                  'y_{22} = 50 \\cdot \\left(x_1 + (\\nabla \\times x_2 - 501) - \\left(x_3 \\cdot \\frac{d}{dK}(\\nabla \\times x_4) - \\int x_5 \\cdot dH\\right)\\right)'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Actress Sissy of <i>Homecoming</i>;{' '}
                <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> Actress Bergman;{' '}
                <CtCMath math={'|x_2| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Flower from the Greek for "star";{' '}
                <CtCMath math={'|x_3| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> One of 435 in the House of
                Representatives; <CtCMath math={'|x_4| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> Whipped, as with a belt;{' '}
                <CtCMath math={'|x_5| = 6'} />
              </li>
            </ul>
            <p className="mt-10">
              [9 points]{' '}
              <CtCMath
                math={
                  'y_{23} = (x_1 - \\sqrt{\\nabla \\cdot (x_2 + x_3)}) \\cdot \\frac{x_4}{x_5}'
                }
                display
              />{' '}
              where:
            </p>
            <ul>
              <li>
                <CtCMath math={'x_1 ='} /> Ron Swanson's just says "I can do
                what I want"; <CtCMath math={'|x_1| = 6'} />
              </li>
              <li>
                <CtCMath math={'x_2 ='} /> State flower of Indiana;{' '}
                <CtCMath math={'|x_2| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_3 ='} /> Copper current conductor;{' '}
                <CtCMath math={'|x_3| = 4'} />
              </li>
              <li>
                <CtCMath math={'x_4 ='} /> Dance or taco condiment;{' '}
                <CtCMath math={'|x_4| = 5'} />
              </li>
              <li>
                <CtCMath math={'x_5 ='} /> 0, ±1, ±2, … ;{' '}
                <CtCMath math={'|x_5| = 8'} />
              </li>
            </ul>
            <p>
              <b>Check your answers:</b>
            </p>
            <ul>
              <li>2nd-level wizard spell</li>
              <li>Amusement</li>
              <li>Anguish</li>
              <li>Apes etc.</li>
              <li>Being lazy</li>
              <li>Bendy</li>
              <li>Bewilderment</li>
              <li>Car or cat</li>
              <li>Fabled sailor</li>
              <li>Fatigue</li>
              <li>Fresh-tasting flavor</li>
              <li>Gets rid of, as rumors</li>
              <li>Holy</li>
              <li>Lack of C on the high seas</li>
              <li>Like a rough voice</li>
              <li>Lower level</li>
              <li>Made reparations</li>
              <li>Ready</li>
              <li>Sight in many churchyards</li>
              <li>Soak in seasoning</li>
              <li>This event, for one</li>
              <li>Traitor</li>
              <li>Type of needlework</li>
            </ul>
            <h3 className="mt-4">Part 2: Proofs</h3>
            <p>
              <b>Problem 1:</b> Prove Theorem <CtCMath math={'T_1'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{12,2} y_{13,1} y_{11,10} y_{9,3} y_{23,1} y_{6,5} y_{22,2} y_{18,6} y_{19,4} y_{2,5} y_{17,2}\\,(hyph)'
                }
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{4,4} y_{20,3} y_{15,4} y_{19,3}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{16,1} y_{3,2} y_{8,3} y_{23,2}'} display />
            </p>

            <p>
              <b>Problem 2:</b> Prove Theorem <CtCMath math={'T_2'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={'y_{14,6} y_{7,9} y_{1,3} y_{20,5} y_{10,5}'}
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={'y_{21,2} y_{11,9} y_{8,6} y_{5,2} y_{10,9}'}
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{4,1} y_{15,5} y_{7,5} y_{1,5} y_{22,3} y_{9,1} y_{14,8}'
                }
                display
              />
            </p>
            <p>
              <b>Problem 3:</b> Prove Theorem <CtCMath math={'T_3'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{3,1} y_{18,7} y_{16,6} y_{13,6} y_{21,6} y_{17,7} y_{6,1}'
                }
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{19,5} y_{5,6} y_{2,6}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={'y_{8,4} y_{12,5} y_{10,2} y_{11,4} y_{7,4} y_{17,8}'}
                display
              />
            </p>
            <p>
              by applying the "Rhythm" lemma, "Overdue" lemma, "Tie" lemma, and
              "Shield or division" lemma.
            </p>
            <p>
              <b>Problem 4:</b> Prove Theorem <CtCMath math={'T_4'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={'y_{22,4} y_{23,7} y_{13,3} y_{15,2} y_{14,7} y_{4,6}'}
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={'y_{20,4} y_{18,3} y_{1,2} y_{9,5} y_{8,7} y_{3,4}'}
                display
              />
            </p>
            <p>
              by equating both sides to "Most serious" and using the
              "Dispossess" lemma.
            </p>
            <p>
              N.B.: This result has several versions of differing length, please
              use the uncapitalized version.
            </p>
            <p>
              <b>Problem 5:</b> Prove Theorem <CtCMath math={'T_5'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{5,4} y_{10,8} y_{19,7} y_{7,8}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{16,3} y_{15,6} y_{11,5} y_{23,3} y_{12,3} y_{21,4} y_{2,1} y_{4,9} y_{8,1} y_{6,3}'
                }
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{9,7} y_{14,2} y_{18,4} y_{20,6} y_{22,7} y_{17,5} y_{13,5} y_{19,6}'
                }
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{20,1} y_{15,7} y_{23,8} y_{10,1}'} display />
            </p>
            <p>
              by equating both sides to "Ritz" and using the "Radio butt."
              lemma, "Sparkle" lemma, "Tennis sweep" lemma, and "Leer" lemma.
            </p>
            <p>
              <b>Problem 6: </b> Prove Theorem <CtCMath math={'T_6'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{11,1} y_{1,6} y_{15,3} y_{9,8}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{5,7} y_{4,5} y_{16,5} y_{3,5}'} display />
            </p>
            <p>
              by equating both sides to "Ticket remainder" and using the "No
              ifs, ands, or what" lemma.
            </p>
            <p>
              <b>Problem 7:</b> Prove Theorem <CtCMath math={'T_7'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{14,1} y_{18,5} y_{19,1} y_{7,6}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{21,1} y_{11,3} y_{1,8} y_{8,8}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{10,4} y_{13,4} y_{7,1}'} display />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath math={'y_{9,4} y_{2,3} y_{6,2} y_{3,7}'} display />
            </p>
            <p>
              using the "Palindromic scifi character" lemma, "Meat" lemma,
              "Journey" lemma, and "Bright" lemma.
            </p>
            <p>
              Hint: As a first step, multiply by a constant and compare to a
              positive integer power.
            </p>
            <p>
              <b>Problem 8:</b> Prove Theorem <CtCMath math={'T_8'} /> given
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{4,2} y_{7,3} y_{17,3} y_{19,9} y_{12,6} y_{23,4} y_{5,1} y_{22,5}\\,(2\\,words)'
                }
                display
              />
              <span className="py-0.5 block" />
              <br className={cx(HIDDEN_CLASS)} />
              <CtCMath
                math={
                  'y_{18,1} y_{16,4} y_{8,10} y_{10,6} y_{1,4} y_{21,5} y_{11,8} y_{17,6}'
                }
                display
              />
            </p>
            <p>
              by equating both sides to "Bring too much" and applying the
              "Bridge" lemma.
            </p>
            <p>
              <b>Check your answers:</b>{' '}
              <CtCMath
                math={'|T| = \\{(4, 6, 7, 7, 8, 9, 10, 11)\\}'}
                display
              />
              , omitting possessive S's.
            </p>
            <p>
              <CtCMath
                math={
                  'ANS = T_{2,3} T_{3,7} T_{1,9} T_{7,6} T_{8,2} T_{4,4} T_{6,5} T_{7,1} T_{3,3} T_{5,7} T_{1,3} T_{2,2} T_{5,3} T_{4,8} T_{3,1} T_{8,3} T_{7,5} T_{1,2} T_{3,2} T_{7,2} T_{4,5} T_{5,6} T_{8,5} T_{7,3} T_{6,1} T_{8,1} T_{5,2} T_{6,2} T_{1,11} T_{4,1} T_{6,6} T_{3,6}'
                }
                display
              />
            </p>
          </div>
        </MathJax>
      </MathJaxContext>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
