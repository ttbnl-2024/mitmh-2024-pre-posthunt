import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/dating-stars/0.png';
import image1 from 'assets/puzzles/dating-stars/1.png';
import image2 from 'assets/puzzles/dating-stars/2.png';
import image3 from 'assets/puzzles/dating-stars/3.png';
import image4 from 'assets/puzzles/dating-stars/4.png';
import image5 from 'assets/puzzles/dating-stars/5.png';
import image6 from 'assets/puzzles/dating-stars/6.png';
import image7 from 'assets/puzzles/dating-stars/7.png';
import image8 from 'assets/puzzles/dating-stars/8.png';
import image9 from 'assets/puzzles/dating-stars/9.png';
import image10 from 'assets/puzzles/dating-stars/10.png';
import image11 from 'assets/puzzles/dating-stars/11.png';

const SLUG = 'dating-stars';

const IMAGES: [string, [string[], string[]]][] = [
  [
    image0,
    [
      [
        `Suffers from severe intestinal blockage`,
        `His oral hygiene routine is overly complex and gross`,
        `Likes "Mamma Mia!" way too much`,
      ],
      [
        `Never gets sweat stains`,
        `No dietary restrictions, eats whatever he wants`,
        `Regularly bathes to cool off`,
      ],
    ],
  ],
  [
    image1,
    [
      [
        `Never ever ever goes outside`,
        `Is an interesting and magnificent person -- NOT!`,
      ],
      [
        `Wins awards for feats of sportsmanship`,
        `Wears a beautiful fur coat`,
        `Strong legs for racing`,
      ],
    ],
  ],
  [
    image2,
    [
      [
        `Distended tongue from an incident on public transit`,
        `His pathetic life is missing something`,
        `Spends almost three-quarters of the day playing childish arcade games`,
      ],
      [`The best, ever`, `Expensive wool coat`, `Great at rock climbing`],
    ],
  ],
  [
    image3,
    [
      [
        `Absurdly large and sticky nostrils`,
        `Dirt on his face from playing in the mud`,
        `Still doesn't have his driver's license`,
      ],
      [
        `His breath on your neck is very hot`,
        `Regularly gets high`,
        `Incredibly wealthy`,
      ],
    ],
  ],
  [
    image4,
    [
      [
        `Likes showing people pictures of his private parts`,
        `Assaults his boss with office supplies`,
        `His dinner consists of fish-flavored desserts and flavored milk`,
      ],
      [
        `Strong swimmer`,
        `Fierce and powerful`,
        `Can end a fight with one blow to the neck`,
      ],
    ],
  ],
  [
    image5,
    [
      [
        `Productive but unfulfilling life`,
        `Will never be truly happy`,
        `Can't do anything but cry about life`,
      ],
      [
        `Able to track down anything`,
        `Very loyal`,
        `Fantastic hunting companion`,
      ],
    ],
  ],
  [
    image6,
    [
      [
        `His love life only causes him heartache, literally`,
        `Has terrible birthday celebrations`,
        `Farts at the worst times`,
      ],
      [
        `Fantastic chef of vegetarian dishes`,
        `Has a job in the sciences`,
        `Can become a king with some help from his friends`,
      ],
    ],
  ],
  [
    image7,
    [
      [
        `Badly needs an appendectomy`,
        `Got passed up for promotion`,
        `Laughs at the idea of going to a doctor`,
      ],
      [
        `Dominates in the fighting rings`,
        `Top of the pecking order`,
        `Wakes up early every morning`,
      ],
    ],
  ],
  [
    image8,
    [
      [
        `Suffers from low confidence`,
        `Victim of self-defenestration`,
        `Dumb and weird`,
      ],
      [`Wide shoulders`, `Body odor is attractive to mates`, `Very strong`],
    ],
  ],
  [
    image9,
    [
      [
        `Collects nude photos of the cast of "The Wild Bunch"`,
        `Friends secretly laugh at him`,
        `Has intrusive violent thoughts`,
      ],
      [
        `Champion at the long jump`,
        `Always eats his vegetables`,
        `Gets laid a lot`,
      ],
    ],
  ],
  [
    image10,
    [
      [
        `His face serves as a warning to others`,
        `Unusually boorish and dumb`,
        `Can't take a surprise`,
      ],
      [`Very intelligent`, `Grooms regularly`, `Fantastic aerial acrobat`],
    ],
  ],
  [
    image11,
    [
      [
        `Vastly overestimates his dancing skills, to the annoyance of his coworkers`,
        `Paranoid about catching a deadly tropical disease`,
      ],
      [`Muscular sinuous body`, `Long, sensitive tongue`, `Gives great hugs`],
    ],
  ],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          These Chads make fun of their counterparts for being unfortunate and
          *weird*. All humor aside, they do manage to work together to get
          dates.
        </FlavorText>

        <div className={cx('space-y-6')}>
          <InfoIcon className={cx(NO_COPY_CLASS)}>
            Image text is available in copy-to-clipboard.
          </InfoIcon>
          {IMAGES.map(([src, [virgins, chads]], key) => (
            <>
              <p key={key}>
                <SheetableImage alt="" src={src} title="" className="mx-auto" />
                <span className={cx(HIDDEN_CLASS)}>
                  Virgin: {virgins.join('; ')}
                  <br />
                  Chad: {chads.join('; ')}
                </span>
              </p>
              <hr />
            </>
          ))}
        </div>
        <p>
          <b>
            <u>Their dates:</u>
          </b>
        </p>
        <ul className="list-none pl-4 -indent-4">
          <li>A coach on season 7 of <i>The Voice</i></li>
          <li>A head of NASA during the '80s</li>
          <li>A producer of <i>Meet the Fockers</i></li>
          <li>A star in <i>Sky High</i></li>
          <li>A star on ABC's <i>Queens</i></li>
          <li>A star playing one of the boys in <i>The Boys</i></li>
          <li>
            A star who played one of the Wangs in "Everything Everywhere All at
            Once"
          </li>
          <li>One of the Beatles</li>
          <li>One of the leading actresses of <i>Love Actually</i></li>
          <li>One of the male actors in the glee club in <i>Glee</i></li>
          <li>One of the stars of <i>Sex and the City</i></li>
          <li>One of the stars of the 1990 movie <i>The Witches</i></li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
