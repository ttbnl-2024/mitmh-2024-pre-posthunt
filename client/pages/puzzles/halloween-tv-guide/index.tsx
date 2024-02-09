import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'halloween-tv-guide';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Each year we can count on being scared when three ghostly spirits try
          channeling a message to us through our TV's. But whoever put together
          this programming for Halloween has really gotten it mixed up. What do
          they think it's all about?
        </FlavorText>
        <Table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Channel</th>
              <th> Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>04:07
              </td>
              <td>2</td>
              <td>
                A pilot is brought back from certain death with expensive,
                experimental surgery following a nightmarish accident.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>05:03
              </td>
              <td>1</td>
              <td>
                In this chilling autobiographical story, an extraterrestrial
                named Pleskit recounts his experiences as an elementary school
                tween whose father is an ambassador to Earth.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>07:01
              </td>
              <td>12</td>
              <td>
                You might think it's all rainbows and unicorns in this saga
                involving fanciful farm animals, but things take a tenebrous
                turn.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>10:05
              </td>
              <td>5</td>
              <td>
                A suburban adman learns that his wife and her family are not
                what they appear to be. After these terrifying events, he'll
                never be the same.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>11:07
              </td>
              <td>2</td>
              <td>
                The brave young Latina heroine of this heart-stopping adventure
                is stalked by a masked robber.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>12:06
              </td>
              <td>3</td>
              <td>Fast food items come to life in this creepy narrative.</td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>13:04
              </td>
              <td>11</td>
              <td>
                An intelligent, conservative teen feels out of step with his
                more liberal siblings and parents in this nerve-wracking story.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>15:04
              </td>
              <td>3</td>
              <td>
                A DJ hopes to make a fresh start in the midwest, but his
                workplace turns out to be unexpectedly spooky.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>15:05
              </td>
              <td>11</td>
              <td>
                CIA operations result in strange events: an alien stranded on
                Earth and an East German trapped in a lower life form both exert
                a ghastly influence on a Virginia family.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>16:02
              </td>
              <td>27</td>
              <td>
                They think their small home in the grasslands is safe and sound.
                So this spine-chilling encounter is especially unexpected.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>20:04
              </td>
              <td>15</td>
              <td>
                Co-eds at a HBCU experience a series of unexpected events and
                make some ghoulish discoveries.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>21:07
              </td>
              <td>4</td>
              <td>
                A chronicle of the eerie experiences of a well-meaning but
                dysfunctional father on the job at a nuclear power plant. In an
                ironic twist, he is observed watching Halloween programming
                about a blind, senile old man.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>22:01
              </td>
              <td>13</td>
              <td>
                A horrifying experience causes two men to question their
                relationship. They're not even sure they can be friends, let
                alone share an apartment.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>23:04
              </td>
              <td>6</td>
              <td>
                Frightening things keep happening in the eponymous show starring
                a Black comedian who shares a first name with a church reformer
                and a civil rights icon. He has a surprising number of friends
                and relatives that look just like him!
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>25:05
              </td>
              <td>20</td>
              <td>
                A ship's crew takes on dangerous missions into uncharted
                territory. But strangely, their captain is unaffected by the
                hair-raising events they experience.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>26:01
              </td>
              <td>4</td>
              <td>
                A phone booth has sinister connections to an unknown
                professional with multiple-personalities.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>27:02
              </td>
              <td>20</td>
              <td>
                A young doctor owes payback and is forced to work in an
                unexpectedly frigid environment. A series of exceedingly macabre
                events ensues.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>33:02
              </td>
              <td>13</td>
              <td>
                Simultaneously overly saccharine and scary, an annoying fruit
                (which shares its name with a color of the rainbow) and his
                friends take on ill-advised adventures.
              </td>
            </tr>
            <tr>
              <td>
                <span className={cx(HIDDEN_CLASS)}>'</span>35:06
              </td>
              <td>3</td>
              <td>
                A sociopathic toddler and an alcoholic talking dog play big
                roles in this blood-curdling tale.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
