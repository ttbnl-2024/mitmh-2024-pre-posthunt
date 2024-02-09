import cx from 'classnames';
import Link from 'next/link';

import Accordion from 'components/accordion';
import RegistrationPageBase from 'components/content_page_base';
import {
  SubsectionHeading,
  sectionHeadingClassName,
} from 'components/headings';
import HuntEmail from 'components/hunt_email';

import imgFaqSplash from 'assets/public/campus.jpeg';

const KnowBeforeYouGoItem = ({
  icon,
  content,
}: {
  icon: React.ReactNode;
  content: React.ReactNode;
}) => (
  <div className="flex flex-row space-x-4 items-center">
    <div className="min-w-[80px] text-right">{icon}</div>
    <div>{content}</div>
  </div>
);

// "ticket" icon from heroicons
const SvgTicket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={0.6}
    stroke="currentColor"
    className="w-16 h-16"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
    />
  </svg>
);

// "shield-check" icon from heroicons
const SvgShield = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={0.6}
    stroke="currentColor"
    className="w-16 h-16"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

// "users" icon from heroicons
const SvgPeople = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={0.6}
    stroke="currentColor"
    className="w-16 h-16"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
);

// "building-library" icon from heroicons
const SvgBuilding = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={0.6}
    stroke="currentColor"
    className="w-16 h-16"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
    />
  </svg>
);

const Faq = () => {
  return (
    <RegistrationPageBase title="Mystery Hunt 2024 - FAQ">
      <section>
        {/* Image max height is 70% of the viewport height on larger screens, clipping the top and bottom */}
        {/* Image min height is 100% of the viewport height on smaller screens, clipping the sides */}
        <div className="absolute flex justify-center w-full h-screen lg:h-[70vh]">
          <img
            className="object-cover justify-center w-full brightness-50"
            src={imgFaqSplash}
          />
        </div>
        <div className="relative flex h-screen lg:h-[70vh] items-center text-white mx-auto w-full lg:w-[50vw] px-4 sm:px-8">
          <div className="flex flex-col space-y-6">
            <span className={cx('text-5xl', sectionHeadingClassName)}>
              Plan your attendance
            </span>
            <span>
              <p>77 Massachusetts Avenue</p>
              <p>Cambridge, MA 02139</p>
            </span>
            <h3 className="text-white">Meeting hours</h3>
            <span>
              <p>Opening Plenary: 12:00 pm ET, Friday January 12, 2024</p>
              <p>Meeting Ends: 6:00 pm ET, Sunday January 14, 2024</p>
              <p>Wrap-Up: 12:00 pm ET, Monday January 15, 2024</p>
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-off-white w-full">
        <div className="mx-auto max-w-[90%] lg:w-[50vw] space-y-16">
          <SubsectionHeading>Know before you go</SubsectionHeading>
          <div className="space-y-8">
            <KnowBeforeYouGoItem
              icon={<SvgTicket />}
              content={
                <>
                  <Link href="/register">Register</Link> before December 31 to
                  guarantee your spot.
                </>
              }
            />
            <KnowBeforeYouGoItem
              icon={<SvgShield />}
              content={
                <>
                  Masks are currently recommended but not required. See the FAQ
                  below for more information on COVID policies.
                </>
              }
            />
            <KnowBeforeYouGoItem
              icon={<SvgPeople />}
              content={
                <>
                  The Meeting of Interplanetary Theorists is best experienced
                  with a group of colleagues. Looking for a group to go with?{' '}
                  <Link href="/register-individual">Let us know,</Link> and
                  we'll find you a group to join.
                </>
              }
            />
            <KnowBeforeYouGoItem
              icon={<SvgBuilding />}
              content={
                <>
                  As an attendee, you will have access to the meeting buildings
                  from 6am - 1am ET, so you can make the most out of your
                  weekend.
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90%] lg:w-[50vw] px-1 py-24 space-y-16">
        <SubsectionHeading>Frequently asked questions</SubsectionHeading>

        <div className="space-y-2">
          <Accordion heading="What is all this?">
            <p className="text-lg">
              This is where your team can register for the 2024 MIT Mystery
              Hunt! See the{' '}
              <a href="https://puzzles.mit.edu/">Mystery Hunt website</a> for
              more background and history about the Hunt.
            </p>
          </Accordion>

          <Accordion heading="Will Mystery Hunt take place at MIT?">
            <p className="text-lg">
              Yes! We are actively working with MIT admin and Puzzle Club to
              host this large-scale event, with MIT's campus policies.
            </p>
          </Accordion>

          <Accordion heading="What are Mystery Hunt's COVID policies?">
            <p className="text-lg">
              Per MIT policy, masks are currently recommended but not required.
              Prior to arriving on campus, as part of the Tim Ticket process,
              attendees may be asked to attest to being fully vaccinated and
              boosted or to having a religious belief or medical condition that
              prevents them from receiving the vaccine.
            </p>
          </Accordion>

          <Accordion heading="How will campus access work at this year's Hunt?">
            <p className="text-lg">
              Prior to Hunt, we will distribute an online form for each
              non-MIT-affiliated on-campus participant to acquire a QR code
              known as a Tim Ticket. A valid MIT ID or Tim Ticket will be
              required to access the MIT campus. Hunt participants will also be
              required to wear badges (distributed to team captains at kickoff)
              for the duration of the event. Due to MIT policy, campus will be
              closed from 1am to 6am each night.
            </p>
          </Accordion>

          <Accordion heading="Will there be hotel blocks for Mystery Hunt this year?">
            <div className="text-lg">
              <p>
                We have negotiated room blocks at three hotels for this year's
                Hunt. These are the only room blocks that will be available this
                year. A booking link is provided below for each hotel. Please
                note that availability is limited within each room block.
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
                Booking cutoff: 12/12/2023 (or when all rooms in the block are
                booked)
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
                Booking cutoff: 12/22/2023 (or when all rooms in the block are
                booked)
              </address>
              <hr className="my-3" />
              <address className="not-italic">
                Le Méridien Boston Cambridge
                <br />
                20 Sidney St.
                <br />
                Cambridge, MA, 02139 <br />
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
                Booking cutoff: 12/10/2023 (or when all rooms in the block are
                booked)
              </address>
            </div>
          </Accordion>

          <Accordion heading="Are minors allowed on campus?">
            <p className="text-lg">
              Non-MIT minors must be accompanied by a parent or guardian at all
              times while on campus.
            </p>
            <p className="text-lg">
              The week of 1/8, we received additional guidance from MIT in the
              liability waiver: "Minors attending the event will be at
              classrooms with parents/guardians at all times, and will not
              attend event puzzles / field puzzles or interact with Mystery Hunt
              staff members." We interpret this to mean minors may walk around
              campus, be in classrooms, including Kresge auditorium, as long as
              they're with a guardian, but may not attend Events, or otherwise
              interact with Hunt staff.
            </p>
          </Accordion>

          <Accordion heading="What's the recommended team size?">
            <p className="text-lg">
              This question is surprisingly hard to answer! Let's go through a
              few of the specific things that people use this question to
              answer, and try to address them individually.
            </p>
            <br />
            <p className="text-lg">
              <strong>
                I'm planning on participating for the first time. How large of a
                group should I participate with?
              </strong>
              <br />
              Welcome! The most important thing is that you should participate
              with people that you have fun doing puzzles with. If this is your
              first Mystery Hunt, you should not worry about being too large, so
              feel free to gather as many friends as you want! If you don't have
              anyone in mind, feel free to{' '}
              <Link href="/register-individual">register as an individual</Link>
              , and we will work to connect you with a team that is taking on
              unattached hunters. For more info on how much you might expect to
              see of Mystery Hunt, read on.
            </p>
            <br />
            <p className="text-lg">
              <strong>
                How large does my team need to be to have a shot at finishing
                the hunt during the weekend?
              </strong>
              <br />
              This year's hunt will be similar in size and scope to previous
              years. Here are some links to statistics from previous years,
              which give an overview of Mystery Hunt size, the sizes of teams
              that participate, and how far these teams get:{' '}
              <a href="https://puzzles.mit.edu/2021/statistics.html">
                2021
              </a>, <a href="https://puzzles.mit.edu/2022/stats/">2022</a>,{' '}
              <a href="https://puzzles.mit.edu/2023/spoilr/progress/solves">
                2023
              </a>
              . In particular, finishing teams typically have at least 50
              experienced (multi-MH) puzzle hunters that devote the entire
              weekend to puzzling (this number is a loose estimate and erases a
              lot of context).
              <br />
              <br />
              That said, please don't let this dissuade you from hunting! We
              believe that you will have fun (and will work towards that goal),
              even if you don't manage to finish or see most of the hunt.
            </p>
            <br />
            <p className="text-lg">
              <strong>
                How large can my team grow before people will have nothing to do
                for long periods of time?
              </strong>
              <br />
              This question is even harder to answer, because it's
              team-dependent. Assuming that the people on your team are
              well-situated to work together, and that you don't reach a point
              where you are not working on most of your open puzzles, we expect
              that teams of 30-40 (and likely larger) will not run into this
              problem. From discussion with teams about past Mystery Hunts, we
              have observed that teams at about 70-80 start to be at risk of
              this happening. However, this is purely historical observation,
              and not "this is the recommended max team size for optimal
              enjoyment" guidance from us -- you all know your own teams best.
            </p>
            <br />
            <p className="text-lg">
              <strong>How hard is this hunt going to be?</strong>
              <br />
              We are very aware that it is important to teams that Mystery Hunt
              neither run too long, nor finish too soon. With apologies to (the)
              Goldilocks (zone) (heh), we're aiming for not too hard, not too
              soft (i.e., easy), but "just right". We are constructing with the
              aim that both small and large teams have fun, but cannot guarantee
              that an exceptionally large team will always have something to
              work on.
            </p>
            <br />
            <p className="text-lg">
              <strong>
                I have additional questions about recommended team size.
              </strong>
              <br />
              Shoot us an email at <HuntEmail />!
            </p>
          </Accordion>

          <Accordion heading="Can teams participate without an on-campus presence?">
            <p className="text-lg">
              You are welcome to solve as a fully remote team! We are making our
              best effort to provide a great experience for remote teams. That
              said, there will be some puzzles where being in-person will be
              helpful, and in select cases, potentially required. Remote teams
              will still be able to finish Hunt.
            </p>
          </Accordion>

          <Accordion heading="How much does Mystery Hunt cost?">
            <p className="text-lg">
              It's free to participate and the event is open to everyone! That
              said, Mystery Hunt costs approximately $10 per person to run, and
              we welcome donations to offset the costs for everything that goes
              into running Hunt. If you would like to donate to the Mystery Hunt
              fund, you can go to{' '}
              <a
                href="https://giving.mit.edu/form/?fundId=2720842"
                target="_blank"
              >
                MIT Giving
              </a>
              .
            </p>
          </Accordion>

          <Accordion heading="Other questions?">
            <p className="text-lg">
              Please feel free to email us at <HuntEmail /> with any additional
              questions.
            </p>
          </Accordion>
        </div>
      </section>
    </RegistrationPageBase>
  );
};

export default Faq;
