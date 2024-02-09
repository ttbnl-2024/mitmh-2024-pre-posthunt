import React, { useContext } from 'react';

import HuntInfoContext from 'components/context';
import HuntEmail from 'components/hunt_email';
import Link from 'components/link';
import Section from 'components/section';
import Table from 'components/table';
import Title from 'components/title';

const About = () => {
  const { huntInfo } = useContext(HuntInfoContext);

  return (
    <Section narrow className="bg-white md:mt-10 mx-auto">
      <Title title="About" />
      <h3>Hours and access</h3>
      <h4>Hours</h4>
      <p>
        Hunt HQ will be open until Sunday 6pm ET or until the coin is found,
        whichever is later. At that point, Hunt HQ will close. Teams must clean
        their classrooms and vacate their classrooms by Monday noon unless
        otherwise specified when their rooms were assigned. The Hunt website
        will continue to be active for answer submissions. See the{' '}
        <Link href="/about#hq-link">Hunt HQ section</Link> for more details.
      </p>
      <h4>Campus access</h4>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th className="text-center">6am – 7pm</th>
            <th className="text-center">7pm – 1am</th>
            <th className="text-center">1am – 6am</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <b>Fri</b>
            </td>
            <td>
              Public access, no MIT ID or Tim Ticket required (
              <a href="https://ist.mit.edu/sites/default/files/documents/public-map.pdf">
                map
              </a>
              )
            </td>
            <td rowSpan={2}>
              Access campus using MIT ID or via our staffed entrance (the south
              side of the walkway that passes under
              <a href="http://whereis.mit.edu/?go=26"> </a>
              <a href="http://whereis.mit.edu/?go=26">building 26</a>).
            </td>
            <td rowSpan={2}>
              Campus is <b>closed</b>. Other than students in their dorms,
              participants should not be on campus during these hours, whether
              in their classrooms or elsewhere on campus.
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <b>Sat</b>, <b>Sun</b>, <b>Mon</b>
            </td>
            <td>
              Access campus using MIT ID or Tim Ticket (
              <a href="https://ist.mit.edu/sites/default/files/documents/visitor-map.pdf">
                map for TIM tickets
              </a>
              )
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        You may register for a Tim Ticket at{' '}
        <a href="https://tim-tickets.atlas-apps.mit.edu/qRrSkDozd9VyAR6r6">
          https://tim-tickets.atlas-apps.mit.edu/qRrSkDozd9VyAR6r6
        </a>
        .
      </p>
      <p>Wear your hunt badge at all times while in public spaces on campus.</p>
      <h3>Puzzles</h3>
      <h4>Guessing limit</h4>
      <p>
        Upon submitting an incorrect guess, the answer checker will let you know
        how long your team has until the next available guess for that puzzle.
        If you guess too many incorrect answers for a puzzle in a given time
        frame, you will encounter a timeout before you can guess again.
      </p>
      <p>
        Specifically, for a given puzzle, you can make n+1 guesses in any n
        <sup>2</sup>
        -minute time window. For example, if you guess incorrectly at 2:00,
        2:06, 2:07, and 2:08, you will be locked out until 2:10 (4 minutes after
        the 2:06 guess).
      </p>
      <h4>Hints</h4>
      <p>
        Hints will be available starting 9pm on Friday for each puzzle after a
        certain number of teams have solved it. To request a hint, or look for
        the "Request a hint" at the top of the page. The more you tell us about
        your progress, the more context we will have to better answer your hint.{' '}
        <i>
          Your team may only have one unanswered hint across all puzzles at a
          time.
        </i>
      </p>
      <p>
        You may also want to check out the resources on
        <a href="https://puzzles.mit.edu/resources.html"> </a>
        <a href="https://puzzles.mit.edu/resources.html">this page</a>.
      </p>
      <h3 id="hq-link">Hunt HQ</h3>
      <h4>How do I contact HQ?</h4>
      <p>
        For hints, use the hint request page for that puzzle. For physical
        puzzles or visiting HQ, use the interaction request form on the puzzle
        page. For anything else, email <HuntEmail />.
      </p>
      <p>
        If you have an emergency, call 911 or MIT Police (617-253-1212). If your
        request is urgent, call 617-324-7732. Also refer to the{' '}
        <Link href="/health_and_safety">Health and Safety Guidelines</Link>.
      </p>
      <h4>When should I contact HQ?</h4>
      <ol>
        <li>When a puzzle asks you to, via the hunt website</li>
        <li>If you think something is wrong with a puzzle</li>
        <li>
          If you are having technical problems with accessing the Hunt website
        </li>
        <li>
          If you are not having fun. Let us know, and we'll see what we can do!
        </li>
      </ol>
      <h4>What happens when HQ closes?</h4>
      <p>
        All physical puzzle pickups, interactive rooms and hints will no longer
        be available. If there are leftover physical puzzles, we will notify
        teams to optionally send one person to pick up any puzzles before 7pm.
        Any part of Hunt that requires being on-campus will no longer be
        accessible.
      </p>
      <p>
        The hunt website will stay up, and the answer checker will be available
        until at least wrap-up on Monday. Submissions after Monday 10am ET will
        not be considered for standings or stats.
      </p>
      <h3>Misc</h3>
      <h4>What browsers are supported?</h4>
      <p>The latest versions of Chrome and Firefox are recommended.</p>
      <h4>Can we try to hack the site?</h4>
      <p>
        Please don't. You may look at the puzzle source code or interact with
        the site programmatically, but this will not be required to solve any
        puzzles. Limit your automated requests to 1 per second.
      </p>
      <h4>Something is wrong</h4>
      <p>
        Let us know at <HuntEmail /> and we will try to correct it! We can't fix
        things that we don't know about.
      </p>
      <h4>Physical puzzles / runarounds / interactions / events</h4>
      <p>
        Some portions of Hunt are only experienceable in person. Most physical
        puzzles also have virtual versions which will show on the puzzle page
        after the delay noted on the puzzle. Remote teams will still have plenty
        of puzzles to work on.
      </p>
      <p>
        Some puzzles will have a request for pickup. Place a request to be told
        where to go. When Hunt is not running on campus (1am–6am), there will be
        alternate pickup options that we will direct you to.
      </p>

      <style jsx>{`
        th,
        td {
          padding: 0.3em;
          hyphens: auto;
        }
      `}</style>
    </Section>
  );
};

export default About;
