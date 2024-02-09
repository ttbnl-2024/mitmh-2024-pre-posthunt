import cx from 'classnames';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { ReactNode, useContext } from 'react';

import { clientFetch } from 'utils/fetch';
import { serverFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import { Countdown } from 'components/countdown';
import Link from 'components/link';
import PublicAccessLink from 'components/public_access';
import { RoundData } from 'components/puzzles_map';
import RoundMap from 'components/round_map';
import Section from 'components/section';
import UnderworldMap from 'components/underworld_map';

import Custom404 from 'pages/404';

interface RoundProps {
  bg?: string;
  rounds?: RoundData[];
  ratio?: number; // Aspect ratio for bg image
  herculeaseImage: string;
  oracleImage: string;
}

// FIXME: Update landing page with your own design

interface TicketProps {
  className?: string;
  children?: ReactNode;
}
const Ticket: React.FC<TicketProps> = ({ className, children }) => (
  <div className={cx('wrapper w-full max-w-full', className)}>
    <div className="bg-white p-8">{children}</div>
  </div>
);

const HuntCountdown = () => {
  const { huntInfo, userInfo } = useContext(HuntInfoContext);
  const router = useRouter();

  return (
    <>
      <Section className="w-[80vw] h-[80vh] flex items-center">
        <div className="mx-auto mt-[10vh]">
          <Ticket className="rounded-lg">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <h3 className="primary">Your escape begins in...</h3>
              <Countdown
                seconds={huntInfo.secondsToStartTime}
                countdownFinishCallback={() => {
                  userInfo?.teamInfo && router.reload();
                }}
                showHours
                heading={true}
              />
            </div>
          </Ticket>
        </div>
      </Section>

      <style global jsx>{`
        .countdown {
          display: flex;
          gap: 20px;
        }
        .countdown-unit {
          display: flex;
          flex-direction: column;
          font-size: 3rem;
          line-height: 3rem;
          justify-content: center;
          align-items: center;
        }

        .countdown-unit span:first-child {
          color: var(--primary);
        }
        .countdown-unit span:last-child {
          font-size: 2rem;
          line-height: 2rem;
        }
      `}</style>
    </>
  );
};

const HuntOver = () => {
  return (
    <>
      <Section className="w-[80vw] h-[80vh] flex items-center">
        <div className="relative">
          <Ticket className="rounded-lg">
            <div className="flex flex-col items-center justify-center gap-y-4 text-black">
              <h3 className="primary">The 2024 MIT Mystery Hunt is over.</h3>
              <p>
                Browse the world as <PublicAccessLink />
                {!process.env.isStatic && (
                  <>
                    , or <Link href="/login?next=/">login here</Link>
                  </>
                )}
                .
              </p>
            </div>
          </Ticket>
        </div>
        <style jsx>{``}</style>
      </Section>
    </>
  );
};

const LandingPage: React.FC<RoundProps> = ({ rounds, ...props }) => {
  const { huntInfo, userInfo } = useContext(HuntInfoContext);
  const huntEnded = false;

  if (!rounds) {
    return <Custom404 />;
  }

  return (
    <>
      {
        // Hunt ended
        huntEnded && !userInfo?.teamInfo ? (
          <>
            <Head>
              <title>Mystery Hunt 2024</title>
            </Head>
            <HuntOver />
          </>
        ) : // If the hunt has not yet started
        huntInfo.secondsToStartTime > 0 && !userInfo?.staff ? (
          <>
            <Head>
              <title>Mystery Hunt 2024</title>
            </Head>
            <HuntCountdown />
          </>
        ) : (
          <>
            <Head>
              <title>The Underworld</title>
            </Head>
            <UnderworldMap rounds={rounds} {...props} />
          </>
        )
      }
    </>
  );
};

export default LandingPage;

export const getServerSideProps = async (context) => {
  const props = await serverFetch<RoundProps>(context, '/underworld_rounds');
  return { props };
};
