import cx from 'classnames';
import localFont from 'next/font/local';
import React, { FC, FormEvent, useContext, useRef, useState } from 'react';

import useDynamicEncrypted from 'utils/encrypted';

import HuntInfoContext from 'components/context';
import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import Section from 'components/section';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

interface Task {
  info: string;
  pay: string;
  extraInfo?: string;
}

interface HercPrivate {
  submissionLink: string;
  tasks: Task[];
  maybeAvailable: boolean;
}

const TaskRow = ({ info, extraInfo, pay }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="task-box">
      <div className="points-tab">
        <div className="points-tab-text">{pay}</div>
      </div>
      <div className="task-content">
        <div className="task-info">
          <div className="task-details">
            <div className="task-details-flavor">{info}</div>

            {extraInfo &&
              (showDetails ? (
                <>
                  <div className="task-details-text">Details</div>
                  <div className="task-details-description">{extraInfo}</div>
                  <div className="task-details-button" onClick={toggleDetails}>
                    Less detail &#9650;
                  </div>
                </>
              ) : (
                <div className="task-details-button" onClick={toggleDetails}>
                  More detail &#9660;
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskRow
          key={index}
          info={task.info}
          extraInfo={task.extraInfo}
          pay={task.pay}
        />
      ))}
    </div>
  );
};

const TaskPage = ({ teamName, submitBox, tasks }) => {
  return (
    <>
      <style jsx global>{`
        .phone {
          width: 600px;
          height: 90vh;
          background: #000;
          border-radius: 30px;
          position: relative;
          margin: 50px auto;
          margin-top: 0px;
          overflow: hidden;
          font-family: ${cascadiaCode.style.fontFamily}, sans-serif;
        }

        .screen {
          width: 90%;
          height: 80%;
          background: #fff;
          position: absolute;
          top: 10%;
          left: 5%;
          overflow-y: auto;
          padding: 10px;
        }

        .speaker {
          width: 30px;
          height: 5px;
          background: #444;
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 5px;
        }

        .camera {
          width: 10px;
          height: 10px;
          background: #444;
          position: absolute;
          top: 20px;
          right: 20px;
          border-radius: 50%;
        }

        .task-box {
          background-color: #eafffe;
          border-radius: 10px;
          box-shadow: 3px 4px 1px 1px black;
          margin-bottom: 15px;
          border: 1px solid black;
        }

        .points-tab {
          background-color: #4796c3;
          color: #ffffff;
          padding: 10px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          box-shadow: 3px 4px 1px 1px black;
        }

        .points-tab-text {
          margin: 0;
          text-align: right;
        }

        .task-content {
          display: flex;
          flex-direction: column;
          padding: 15px;
        }

        .task-info {
          display: flex;
          align-items: center;
        }

        .requester-img {
          flex: 0 0 calc(33.33% - 20px);
          max-width: calc(33.33% - 20px);
          height: auto;
          border-radius: 5px;
          margin-right: 20px;
        }

        .task-details-button {
          float: right;
          font-size: 13px;
          margin-top: 5px;
        }

        .task-details {
          color: #094b5b;
        }

        .task-details-text {
          margin-top: 10px;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .task-status {
          border-radius: 10px;
          padding: 3px 10px;
          text-align: center;
          margin: 10px 50px;
          border: 1px solid #000;
        }

        .task-status-text {
          margin: 0;
        }

        .submit-box {
          background-color: #eafffe;
          color: #094b5b;
          border-radius: 10px;
          padding: 8px 15px;
          text-align: center;
          margin: 25px 0px;
          border: 1px solid black;
          box-shadow: 3px 4px 1px 1px black;
        }

        .submit-box-text {
          margin: 0;
        }
        .team-name {
          text-align: center;
          color: #094b5b;
        }

        .centered-content {
          text-align: center;
          margin-bottom: 20px;
        }

        .points-box {
          display: inline-block;
          border-radius: 5px;
          padding: 5px;
        }

        .points-left {
          display: inline-block;
          padding: 10px 15px;
          border-radius: 20px 0 0 20px;
          background-color: #b7d5fd;
          color: #094b5b;
          font-size: 24px;
        }

        .points-right {
          display: inline-block;
          color: #094b5b;
          padding: 10px 15px;
          border-radius: 0 20px 20px 0;
          background-color: #eef0f3;
          font-size: 24px;
        }
      `}</style>
      <Section>
        <div className="phone">
          <div className="screen">
            <div className="centered-content">
              <div className="team-name">{teamName}</div>
            </div>
            {submitBox}

            <TaskList tasks={tasks} />
          </div>
          <div className="speaker"></div>
          <div className="camera"></div>
        </div>
      </Section>
    </>
  );
};

const cascadiaCode = localFont({
  src: '../../../assets/public/fonts/CascadiaCode.woff2',
});

const SLUG = 'herc-u-lease';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const { userInfo } = useContext(HuntInfoContext);
  const data = puzzleData.private as HercPrivate;

  const Reward = useDynamicEncrypted(`herc-u-lease`, {
    enabled: data.maybeAvailable,
  });

  const submitBox = (
    <div className="submit-box">
      <div className="submit-box-text">
        {!!data.submissionLink ? (
          <>
            Please submit online submissions in{' '}
            <a href={data.submissionLink} className="!text-[#4796c3]">
              this form
            </a>
            .
          </>
        ) : (
          <>ERROR: NO SIGNAL TO SUBMIT. ARE YOU UNDERGROUND OR SOMETHING?</>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Puzzle puzzleData={puzzleData}>
        <InfoIcon>This is the scavenger hunt! One drachma is 6 obol.</InfoIcon>
        <FlavorText>
          Welcome, TASK HERO TEAM {userInfo?.teamInfo?.name}! Here are the
          quests available in your area. Our founder, Herc himself is still
          working as a hero for hire! He can be hired for the low low price of 1
          drachma per registered team member (up to a maximum of 60 drachma). Of
          course, Herc is usually out in the field, so you have to catch him at
          just the right time.
        </FlavorText>
        <FlavorText>
          CUSTOMER SATISFACTION GUARANTEED! If your quest giver thinks that the
          task was not completed as requested, you will not receive payment but
          will be allowed to re-attempt it. You may not add onto or resubmit a
          task that's already been paid out. If you are submitting electronic
          proof of task completion, please submit video evidence unless
          otherwise specified. Our customers need reassurance after the Dolos
          statue incident and we can't afford Agora Reports putting out more bad
          press.
        </FlavorText>
        {data.maybeAvailable && <Reward />}
        <TaskPage
          teamName={userInfo?.teamInfo?.name}
          submitBox={submitBox}
          tasks={data.tasks}
        />
      </Puzzle>
    </>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
