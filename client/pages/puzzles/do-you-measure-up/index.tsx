import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'do-you-measure-up';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <table className="class-0">
          <tbody>
            <tr>
              <td>A:</td>
              <td>
                Let's jump in! Our first task was to film a motion picture with
                a motion using legs. Fastest time wins!
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 1 was running for sixty one minutes shorter than the
                running time for <i>Cool Runnings</i>, plus the time it takes you to
                sing “Happy Birthday”.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 2 walked to the corner store in the same amount of
                time as a fellow who was "Walking in Memphis", minus the time it
                takes you to text your mom that you love her.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 3 kicked a can for the same amount of time Misty
                Hyman won a gold using fish kicks, minus the time it takes you
                to roll your head and neck three times.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 4 stood for as long as Del Toro's standing ovation,
                minus the time it takes you to draw five circles in the shape of
                the Olympic logo.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 5 chased his friend for as long as the car chase
                scene in <i>Bullitt</i>, plus the time it takes you to blink rapidly 30
                times.
              </td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">
                I'll be handing out my usual points. 5 for first place, then
                downwards 4, 3, 2, and then 1 point to last place. And just to
                be clear, even if any of you screw ups screw up, I will not be
                bumping anyone up the standing because you still deserve shame!
              </td>
            </tr>
            <tr>
              <td className="pt-4">A:</td>
              <td className="pt-4">
                Okay! For our second task, we asked them to build a small
                sculpture that weighs the heaviest. Heaviest sculpture wins!
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 1: Their sculpture weighs about the same as two adult
                Syrian hamsters sitting on a stick of butter.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 2: Their sculpture weighs about the same as a king
                sized firm down pillow.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 3: Their sculpture weighs about the same as two full
                gallon jugs of whole milk.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 4: Their sculpture weighs about the same as an
                average newborn baby.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 5: Their sculpture weighs about the same as two
                bowling balls, those two being the lowest and highest weights
                manufactured.
              </td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">
                Right, I'm awarding 5 points for first place, and 1 point for
                last, because it is rubbish. But the rest of you lot gets a
                negative 1 point each for making a sculpture of me in my
                birthday suit! NEXT TASK!!
              </td>
            </tr>
            <tr>
              <td className="pt-4">A:</td>
              <td className="pt-4">
                Gulp! For Task 3, we asked them to throw this duck as far down
                the bowling alley as possible. Farthest along the path wins!
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 1 threw the duck an amazing six queen sized
                bed-lengths away.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 2 threw the duck about the depth of an endzone on an
                American football field. Touch "down" indeed!
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 3 threw the duck about as far as a traditional UK
                double-decker coach if it were cut in half.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 4 used a slingshot to propel the duck about the
                length of six female alligators.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Contestant 5 threw the duck about the length of a kayak.</td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">I'll allow the slingshot… next!</td>
            </tr>
            <tr>
              <td className="pt-4">A:</td>
              <td className="pt-4">
                Wait, we have some interesting developments here: One person
                stepped over the start line, so they have scratched! And another
                contestant technically threw their duck into the next lane over…
              </td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">
                Two disqualifications!?! Well done! Okay, I will give out 5
                points, 4 points, 1 point, and no points to the two who DQ'd.
              </td>
            </tr>
            <tr>
              <td className="pt-4">A:</td>
              <td className="pt-4">
                Last task of the show! We've asked the contestants to stack
                things from our collection of things here on the stage. Highest
                tower wins!
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 1 has used a men's olympic barbell with weights on it
                longways, and added a koala bear on top of the end of the bar.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 2 used three standard cinder blocks standing on end.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 3 used five apples stacked on top of each other.
                That's about the size of Hello Kitty!
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 4 used three loo rolls on the head of a newborn baby
                giraffe.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Contestant 5 used a tuba (bell side down), then added a stuffed,
                life-sized replica of the world's smallest woman.
              </td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">Congratulations! Points to everyone! </td>
            </tr>
            <tr>
              <td className="pt-4">A:</td>
              <td className="pt-4">
                Wait, I see something strange… Third place has been caught
                trying to use superglue to hold things together, and is
                disqualified!
              </td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">
                I love the sound of that! Points awarded are 5, 4, 2, 1, and a
                DQ! That's our show! The winner will receive a very lovely item
                to help with all the tasks!!
              </td>
            </tr>
            <tr>
              <td className="pt-4">A:</td>
              <td className="pt-4">
                Before we go, I forgot to mention, rounds one and two are
                actually antonym rounds, so I will adjust the scores
                accordingly!
              </td>
            </tr>
            <tr>
              <td className="pt-4">TM:</td>
              <td className="pt-4">
                You forgot that, but I just remembered that you irritate me.
                Good night!
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx global>{`
        .class-0 td:nth-child(1) {
          vertical-align: top;
          padding-right: 0.25em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
