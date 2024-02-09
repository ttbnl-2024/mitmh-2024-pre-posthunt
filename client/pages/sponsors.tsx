import React from 'react';

import Section from 'components/section';
import Title from 'components/title';

import twoS from 'assets/sponsors/2s.png';
import hrt from 'assets/sponsors/hrt.png';
import ickey from 'assets/sponsors/ickey.jpg';
import js from 'assets/sponsors/js.png';
import mit from 'assets/sponsors/mit.png';
import oa from 'assets/sponsors/oa.png';

const Sponsors = () => {
  return (
    <Section className="bg-white md:mt-10">
      <Title title="Sponsors" />
      <p>
        <i>This is not a puzzle.</i>
      </p>
      <h3>Featured Sponsors ($10,000):</h3>
      <div className="flex flex-wrap featured items-center justify-around my-2">
        <a href="https://www.hudsonrivertrading.com/">
          <img src={hrt} />
        </a>
        <a href="https://janestreet.com">
          <img src={js} />
        </a>
        <a href="https://ickeytreasurehunt.com">
          <img src={ickey} />
        </a>
      </div>
      <h3 className="mt-6">Signature Sponsor ($3,000):</h3>
      <div className="flex flex-wrap signature items-center justify-start gap-3 my-2">
        <a href="https://www.twosigma.com/">
          <img src={twoS} />
        </a>
      </div>
      <h3 className="mt-6">Contributing Sponsor ($1,000):</h3>
      <div className="flex flex-wrap contributing items-center justify-start gap-3 my-2">
        <a href="http://bromels.com/">
          <img src={oa} />
        </a>
      </div>
      <h3 className="mt-6">Essential Sponsors (invaluable):</h3>
      <div className="flex flex-wrap essential items-center justify-center gap-3 my-2">
        <img className="max-h-[250px]" src={mit} />
      </div>

      <p>
        The MIT Mystery Hunt would not – <u>could</u> not – exist without the
        strong support of the Massachusetts Institute of Technology, and many of
        its departments, groups, and dedicated individuals, who went above and
        beyond the call of duty to ensure the Hunt was a success. These included
        (but are not limited to):
      </p>
      <ul>
        <li>
          Student Organizations, Leadership and Engagement (SOLE), especially
          Mary Mango, Paul Murphy, and Gabriela Hott Soares.
        </li>
        <li>Registrar's Office</li>
        <li>Campus Activities Complex</li>
        <li>Events and Information Center</li>
        <li>
          Department of Global Languages, Department of Aeronautics and
          Astronautics, and MIT Materials Research Lab, for use of their
          departmental classrooms
        </li>
        <li>Environment, Health and Safety Office</li>
        <li>Campus Police</li>
        <li>Office of General Counsel</li>
        <li>Risk Management and Compliance Services</li>
        <li>MIT IS&amp;T</li>
        <li>MIT A/V</li>
        <li>MIT Video Production</li>
        <li>
          E33, especially COO Audrey Lee and our Production Manager Xinyu Xu for
          providing lighting for Hunt Kickoff
        </li>
        <li>MIT Facilities</li>
        <li>MIT Technique for Photography Services throughout the Hunt</li>
      </ul>
      <h3 className="mt-6">Individual Donors Like You!</h3>
      <p>
        The MIT Mystery Hunt is an annual event celebrating the values of
        originality, ingenuity, curiosity, intellectual and creative excellence,
        and above all, community.{' '}
      </p>
      <p>
        Community participation is key to the success of the MIT Mystery Hunt.
        We don't charge admission to participate, and neither the volunteer host
        team nor the students of Puzzle Club are compensated for their time and
        efforts. It is truly a labor of love, and we love the fact that we're a
        part of a welcoming (and rapidly growing) global community of puzzle
        enthusiasts.{' '}
      </p>
      <p>
        That said, even with an all-volunteer staff, it costs a significant
        amount of money to host the Hunt. Individual donations from community
        members like you are <b>by far the single largest source of income</b>{' '}
        for the MIT Mystery Hunt, and we want to thank each and every one of you
        who has already made a generous financial contribution.{' '}
      </p>
      <p>
        If you'd like to help support the MIT Mystery Hunt and the community it
        serves, click the button below to make a tax-deductible* contribution!
      </p>
      <p>
        <a
          className="!bg-neutral-300 !text-black border-none rounded-xl p-2"
          href="https://giving.mit.edu/form/?fundId=2720842#/"
          target="_blank"
        >
          Count me in!
        </a>
      </p>
      <p>
        <i>
          *MIT is a 501(c)3 nonprofit. Donations to MIT are fully tax-deductible
          to the extent allowed by law. Consult your tax advisor with specific
          questions about your personal tax situation.
        </i>
      </p>

      <style jsx global>{`
        .featured img {
          height: 150px;
        }

        .signature img {
          width: 252px;
          height: auto;
        }

        .contributing img {
          width: 176px;
          height: auto;
        }
      `}</style>
    </Section>
  );
};

export default Sponsors;
