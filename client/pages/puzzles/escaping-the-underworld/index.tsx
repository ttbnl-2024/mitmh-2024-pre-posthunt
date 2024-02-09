import cx from 'classnames';
import React, { FC, useRef } from 'react';

import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import audio1 from 'assets/puzzles/escaping-the-underworld/Orpheus.mp3';

const SLUG = 'escaping-the-underworld';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} refreshOnSolve={true}>
      <div ref={ref}>
        <InfoIcon>
          This runaround requires physical presence on campus. It is best with
          at least three people. There is no strict upper limit, but we
          recommend no more than six. One person will need an internet-enabled
          media player (like a phone) with headphones. A different person will
          take on the role of Cerberus—you can decide who should take these
          roles now or when you get to the starting location. Feel free to read
          the note below before you head out.
        </InfoIcon>
        <p>
          <i>The note reads:</i>
        </p>
        <p>
          Hello. My name is Orpheus. Congratulations to you who managed to
          acquire this guide out of the Underworld. To escape, exactly one of
          you (the Guide) must listen to my recording and guide the rest (the
          Followers) to freedom. The Guide{' '}
          <b>
            must not lay eyes on or communicate with their Followers at any
            point
          </b>
          . I know the painful consequences of failing to abide by this rule. To
          be clear, this means:
        </p>
        <ul>
          <li>
            The Guide must not turn around, except under the Omicron Protocol.
          </li>
          <li>The Followers must not pass the Guide.</li>
          <li>The Guide must take pains to avoid looking into mirrors.</li>
          <li>
            The Guide may not speak, text, Sign, write notes to, or touch the
            Followers.
          </li>
          <li>
            The Guide may gesture and mime, but only while looking forward. I
            suggest only gesturing when instructed, to avoid confusing the
            Followers.
          </li>
        </ul>
        <p>
          There is one exception—if you have won the favor of Cerberus, he can
          interact with the Guide in one limited way. At various points, the
          Guide will be told to stop and wait for Cerberus to signal him to
          continue. Guide: when you are told to do this, put your arms akimbo
          (that is, hands on your hips with elbows pointed out). That way the
          Followers know you are waiting for Cerberus. When the Followers are
          ready to continue, Cerberus should place a paw on the Guide's{' '}
          <b>right</b> shoulder. If the Followers need the Guide to stop,
          Cerberus should place on the Guide's <b>left</b> shoulder.
        </p>
        <p>
          If the Guide realizes they have gone too far and need to back up, they
          should activate the Omicron protocol. This will be explained later.
          Please also note that the Followers are free to communicate amongst
          themselves, as long as the Guide cannot hear it. I implore you to
          follow these rules—who knows what may befall you if you do not.
        </p>
        <p>
          On your journey, please don't block the passages. Remember, you are
          guests in this place of wayward and condemned spirits. Be considerate
          of your surroundings. I also suggest that you connect to the
          Underworld's guest wifi, as signal can be poor on the journey.
        </p>
        <p>
          Now, make your way to the subbasement of Building 9 (via the stairwell
          on the north side of the glassy Building 9 lobby, labeled "Stair 1").
          Do not enter any caged areas on your journey, whether or not the gate
          is open. When you are standing outside 9-0052, look for two circles
          etched into the ground, with a smaller red circle between them. The
          Guide should stand between them, facing the dark hallway with four
          pipes along the ceiling. Once you've said your goodbyes, the Guide
          should start the tape.
        </p>
        <p>
          <audio src={audio1} controls className="mx-auto my-4" />
        </p>
        <p>
          <i>The letter reads, in a different handwriting:</i>
        </p>
        <p>
          For the "Followers" eyes only!{' '}
          <a href="https://docs.google.com/document/d/1c1cZHQpoXynrzKBIfWefKzER_hpyL1Jel0DnXwNTk3Q/edit">
            Open
          </a>{' '}
          when the Guide mashes play.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = async (context) => {
  const puzzleProps = await getPuzzleProps(SLUG)(context);
  if (puzzleProps.props?.puzzleData?.isSolved) {
    return {
      redirect: {
        destination: '/overworld',
        permanent: false,
      },
    };
  }
  return puzzleProps;
};
