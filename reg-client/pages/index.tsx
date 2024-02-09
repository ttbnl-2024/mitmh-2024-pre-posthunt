import cx from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import { TimeConfig, displayTime, getTimeLeft, pluralize } from 'utils/timer';

import HuntInfoContext from 'components/context';
import { Countdown } from 'components/countdown';
import Footer from 'components/footer';
import Header from 'components/header';
import {
  ItemHeading,
  SubsectionHeading,
  sectionHeadingClassName,
} from 'components/headings';
import { InlineTwemoji } from 'components/twemoji';

import imgHighlight1 from 'assets/public/black_hole.jpg';
import imgHighlight3 from 'assets/public/kresge.jpeg';
import imgHighlight2 from 'assets/public/pillars.jpg';
import imgSplash from 'assets/public/splash.jpg';

const CountdownField = ({ number, unit }) => (
  <div className="flex flex-row items-center justify-start space-x-4 md:flex-col">
    <span className="text-8xl xl:text-9xl font-black w-36 xl:w-44 inline-block text-center">
      {number}
    </span>
    <span className="text-base xl:text-lg">{unit}</span>
  </div>
);

const displayTimeLeftBig = (
  tick: number,
  fps: number,
  options: TimeConfig = {}
) => {
  const [days, hours, minutes, seconds] = getTimeLeft(tick, fps, options);
  const { showHours = false, showDays = false } = options;

  return (
    <div className="flex flex-col md:flex-row md:space-x-16 pt-3">
      {showDays && (
        <div suppressHydrationWarning>
          <CountdownField number={days} unit={pluralize(days, ' day')} />
        </div>
      )}
      {showHours && (
        <div>
          <CountdownField
            number={displayTime(hours, 2)}
            unit={pluralize(hours, ' hour')}
          />
        </div>
      )}

      <div suppressHydrationWarning>
        <CountdownField number={displayTime(minutes, 2)} unit={' min'} />
      </div>

      <div suppressHydrationWarning>
        <CountdownField number={displayTime(seconds, 2)} unit={' sec'} />
      </div>
    </div>
  );
};

const HuntCountdown = () => {
  const { huntInfo } = useContext(HuntInfoContext);
  const secondsToKickoff = huntInfo.secondsToStartTime - 3600;
  // Note that hunt info is calculated once at site load, so this state only
  // changes if someone is viewing the page at expiration time
  const [expired, setExpired] = useState(secondsToKickoff <= 0);
  const router = useRouter();
  let huntLink = '/hunt';
  if (process.env.isArchive) {
    // the redirect set by /hunt doesn't allow for paths outside the basePath
    // so we have to skip the server side redirect
    huntLink = '/2024/mythstoryhunt.world';
  }
  return (
    <>
      <div className="w-full">
        <span className={sectionHeadingClassName}>
          The meeting{' '}
          <span className="whitespace-nowrap">
            {expired ? 'has begun!' : 'begins in'}
          </span>
        </span>
        <Countdown
          seconds={secondsToKickoff}
          textOnCountdownFinish={
            <div className="pt-9">
              <a href={huntLink} className="button-link button-link-white">
                Enter →
              </a>
            </div>
          }
          countdownFinishCallback={() => {
            setExpired(true);
          }}
          showHours
          render={displayTimeLeftBig}
        />
      </div>
    </>
  );
};

const Splash = () => {
  const { huntInfo } = useContext(HuntInfoContext);
  const splashSizeClass = 'justify-center h-screen';
  return (
    <section>
      {/* Background */}
      <div
        className={`absolute flex ${splashSizeClass} z-[1] w-full bg-black`}
      ></div>
      {/* Splash image */}
      {/* At small sizes, text overlays it and image is darker for contrast */}
      {/* At larger sizes, image is on opposing side */}
      <div
        className={`relative ${splashSizeClass} lg:flex lg:flex-row lg:px-[10vw]`}
      >
        {/* Countdown text */}
        <div
          className={`absolute flex ${splashSizeClass} z-[3] w-full px-6 items-center text-white lg:relative lg:px-0 lg:w-3/4`}
        >
          <HuntCountdown />
        </div>
        <div
          className={`absolute flex ${splashSizeClass} z-[2] w-full brightness-[70%] lg:relative lg:w-1/2 lg:-ml-60`}
        >
          <img
            className="object-cover justify-center max-h-screen lg:object-contain"
            src={imgSplash}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const HighlightEntry = ({ imgSrc, children, ...props }) => {
  return (
    <div className="flex flex-col space-y-2 p-6 pt-12 md:py-24 max-w-full min-w-full md:max-w-[33%] md:min-w-[33%]">
      <img src={imgSrc} className="mb-6" {...props} />
      {children}
    </div>
  );
};

const Highlights = () => {
  return (
    <section className="pb-6 pt-12 md:pb-12 md:pt-24">
      <SubsectionHeading>Highlights</SubsectionHeading>
      <div className="flex flex-wrap max-w-[90%] md:max-w-full lg:max-w-[80%] mx-auto md:place-content-between">
        <HighlightEntry imgSrc={imgHighlight1} aria-labelledby="black-hole">
          <ItemHeading id="black-hole">Dense space</ItemHeading>
          <p className="font-bold">Space!</p>
        </HighlightEntry>
        <HighlightEntry imgSrc={imgHighlight2} aria-labelledby="exhibits">
          <ItemHeading id="exhibits">Old space, but new</ItemHeading>
          <p>
            <InlineTwemoji emoji="✨" /> Space! <InlineTwemoji emoji="✨" />
          </p>
        </HighlightEntry>
        <HighlightEntry imgSrc={imgHighlight3} aria-labelledby="celebrate">
          <ItemHeading id="celebrate">Attend the Meeting</ItemHeading>
          <p>
            Our Opening Plenary and Keynote is on January 12th at noon ET in
            Kresge Auditorium.
          </p>
        </HighlightEntry>
      </div>
    </section>
  );
};

const WideBanner = (props) => {
  return (
    <div className="flex bg-[#061f4a]">
      <div className="flex max-w-[80%] mx-auto">
        <div className="flex flex-col py-16 md:py-24 space-y-8">
          {props.children}
        </div>
      </div>
    </div>
  );
};

type Update = {
  date: string;
  text: React.ReactNode;
};

// Add updates here in reverse chronological order (will be shown in this same order)
const updates: Update[] = [
  {
    date: 'Jan 11, 2024',
    text: (
      <>
        We're excited to see you all for our Opening Plenary in{' '}
        <a href="http://whereis.mit.edu/?go=W16">Kresge Auditorium</a> at
        12:00pm (noon) EST on Friday, January 12th, 2023. The Grand Opening will
        be{' '}
        <a href="https://www.youtube.com/watch?v=BwnsHRNyTns">
          livestreamed on YouTube
        </a>
        .
      </>
    ),
  },
  {
    date: 'Jan 11, 2024',
    text: (
      <>
        <p>
          We're super excited to all you planetary theorists soon! Here's some
          updates and clarifications:
        </p>
        <p>
          <b>Tim Tickets</b>: If you do not have an MIT ID, you can register for
          a Tim Ticket at{' '}
          <a href="https://tim-tickets.atlas-apps.mit.edu/qRrSkDozd9VyAR6r6">
            https://tim-tickets.atlas-apps.mit.edu/qRrSkDozd9VyAR6r6
          </a>
          . Once you do, you can use the MIT Tim Tickets mobile app to access
          your Tim ticket, which will open exterior doors after 7pm on Friday
          and over the weekend.
        </p>
        <p>
          <b>Liability Waiver</b>: Only in-person / on-campus solvers need to
          fill out a liability waiver. In addition, there was a question about
          whether this was only for minors, since there is a spot for “Parent /
          Guardian Signature”. If you are signing this for yourself, just sign
          in the spot on the left that says “Releasor Signature”, and leave the
          “Parent / Guardian Signature” blank. If you are signing for a minor,
          then the minor signs on the left under “Releasor” and the parent /
          guardian signs on the right under “Parent / Guardian Signature”.
        </p>
      </>
    ),
  },
  {
    date: 'Jan 9, 2024',
    text: (
      <>
        <p>
          We sent (or will have sent soon) the following update to team
          captains:
        </p>
        <p>
          <b>Health and safety</b>: We'll cover the guidelines at kickoff at
          Kresge on Friday. Everyone on your team should either attend in person
          or watch the livestream/ recording before participating to ensure
          they're aware of this policy and adhere to it throughout the weekend.
        </p>
        <p>
          <b>Liability waiver</b>: As a team captain, we need you to ensure
          everyone in your team including yourself sign this waiver before
          participating in the 2024 MIT Mystery Hunt. (
          <a href="https://na2.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=cfe6fe21-7b8d-41dc-834d-3af00c6beb6e&env=na2&acct=a76475db-2ab3-4a5f-b7bd-1ba6a5dd7f4e&v=2">
            LINK
          </a>
          )
        </p>
        <p>
          <b>MIT 2024 Minor policy highlights from liability waiver</b>: "Minors
          attending the event will be at classrooms with parents/guardians at
          all times, and will not attend event puzzles / field puzzles or
          interact with Mystery Hunt staff members." We interpret this to mean
          minors may walk around campus, be in classrooms, including Kresge
          auditorium, as long as they're with a guardian, but may not attend
          Events, or otherwise interact with Hunt staff.
        </p>
        <p>
          We're really excited about this weekend - please remember that all our
          actions will reflect on the Mystery Hunt as a whole, so let's stay
          safe and responsible both for our own sakes and for the sake of
          everyone who loves the Mystery Hunt and cares about its future.
        </p>
      </>
    ),
  },
  {
    date: 'Jan 9, 2024',
    text: (
      <>
        <p>
          Teammate (last year's hunt runners) will be running a how-to-hunt
          workshop aimed at those with little to no experience with puzzles. The
          workshop will be 5-7pm, Thursday Jan 11 on MIT campus in room 4-149
          and is open to everyone.
        </p>
        <p>
          There is currently not a plan to stream or record this workshop, so if
          you are a remote team or hunter, you may be interested in the Beginner
          Resources section of the MIT Puzzle Hunt main website.
        </p>
      </>
    ),
  },
  {
    date: 'Dec 9, 2023',
    text: (
      <>
        <p>2 updates as we get closer to Hunt!</p>
        <ul className="list-disc mt-2">
          <li>
            Don't forget that two of our three hotel room blocks (Le Méridien,
            Marriott) are closing shortly! If you haven't yet booked your stay,
            now's the time!
          </li>
          <li>
            We have confirmed with MIT tech services that Discord voice calls
            should function on MIT guest wifi this year.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Nov 9, 2023',
    text: (
      <>
        <p>
          We have updated the team size guidance on the{' '}
          <Link href="/faq">FAQ page</Link>. Additionally, the Le Méridien end
          date has been adjusted from 1/14 to 1/15.
        </p>
      </>
    ),
  },
  {
    date: 'Nov 8, 2023',
    text: (
      <>
        <p>
          We have negotiated room blocks at three hotels for this year's Hunt.
          These are the only room blocks that will be available this year. A
          booking link is provided below for each hotel. Please note that
          availability is limited within each room block.
        </p>
        <hr className="my-3" />
        <address className="not-italic">
          Boston Marriott Cambridge
          <br />
          50 Broadway
          <br />
          Cambridge, MA, 02142
          <br />
          Booking link:{' '}
          <Link
            href="https://www.marriott.com/events/start.mi?id=1699286166105&key=GRP"
            className="break-all"
          >
            https://www.marriott.com/events/start.mi?id=1699286166105&key=GRP
          </Link>
          <br />
          Rates: 149 USD/night + tax + fees from 1/11 to 1/15
          <br />
          Booking cutoff: 12/12/2023 (or when all rooms in the block are booked)
        </address>
        <hr className="my-3" />
        <address className="not-italic">
          Hyatt Regency Boston / Cambridge
          <br />
          575 Memorial Dr.
          <br />
          Cambridge, MA, 02139
          <br />
          Booking link:{' '}
          <Link
            href="https://www.hyatt.com/en-US/group-booking/BOSRC/G-M2M6"
            className="break-all"
          >
            https://www.hyatt.com/en-US/group-booking/BOSRC/G-M2M6
          </Link>
          <br />
          Rates: 169 USD/night + tax + fees from 1/8 to 1/18
          <br />
          Booking cutoff: 12/22/2023 (or when all rooms in the block are booked)
        </address>
        <hr className="my-3" />
        <address className="not-italic">
          Le Méridien Boston Cambridge
          <br />
          20 Sidney St.
          <br />
          Cambridge, MA, 02139
          <br />
          Booking link:{' '}
          <Link
            href="https://www.marriott.com/events/start.mi?id=1699031857357&key=GRP"
            className="break-all"
          >
            https://www.marriott.com/events/start.mi?id=1699031857357&key=GRP
          </Link>
          <br />
          Rates: 124 USD/night + tax + fees from 1/11 to 1/15
          <br />
          Booking cutoff: 12/10/2023 (or when all rooms in the block are booked)
        </address>
      </>
    ),
  },
  {
    date: 'Nov 8, 2023',
    text: (
      <p>
        We're excited to announce the Meeting of Interplanetary Theorists! Our
        opening plenary and keynote will be held Friday, January 12, 2024.
      </p>
    ),
  },
];

const Updates = () => {
  const [maxToShow, setMaxToShow] = useState<number>(3);
  const [showMoreButtonNotYetClicked, setShowMoreButtonNotYetClicked] =
    useState<boolean>(true);
  // "Show more" button on page if there are more updates than we want to initially show (maxToShow),
  // and the user has not yet clicked it
  const showMoreButtonVisible =
    updates.length > maxToShow && showMoreButtonNotYetClicked;
  const updateElements = updates.map((update: Update, index: number) => (
    <li key={`${update.date}-${index}`} data-date={update.date}>
      {update.text}
    </li>
  ));

  return (
    <section id="updates" className="pb-6 pt-12 md:pb-12 md:pt-24 bg-off-white break-words">
      <div className="max-w-[70%] md:max-w-[50%] mx-auto pb-12">
        <SubsectionHeading>Updates</SubsectionHeading>
        <ul
          className={cx('timeline', {
            'fade-last': showMoreButtonVisible,
          })}
        >
          {updateElements.slice(0, maxToShow)}
          {!showMoreButtonVisible && <span className="end" />}
        </ul>
        <div className="text-center">
          <a
            className={cx({
              hidden: !showMoreButtonVisible,
            })}
            onClick={() => {
              setMaxToShow(updates.length);
              setShowMoreButtonNotYetClicked(false);
            }}
          >
            Show more
          </a>
        </div>
      </div>
    </section>
  );
};

const LandingPage = (props) => {
  return (
    <>
      <Head>
        <title>Mystery Hunt 2024</title>
      </Head>
      <Header isHomepage />
      <Splash />
      <Highlights />
      <Updates />
      <WideBanner>
        <Link href="/register" className="call-to-action text-3xl lg:text-5xl">
          Register now →
        </Link>
      </WideBanner>
      <Footer />
    </>
  );
};

export default LandingPage;
