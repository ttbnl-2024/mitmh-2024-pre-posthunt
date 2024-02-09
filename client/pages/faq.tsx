import Link from 'next/link';
import React, { useContext } from 'react';

import { formattedDateTime } from 'utils/timer';

import HuntInfoContext from 'components/context';
import HuntEmail from 'components/hunt_email';
import Section from 'components/section';
import StoryNotifications from 'components/story_notifications';
import Title from 'components/title';

const Faq = () => {
  const { huntInfo } = useContext(HuntInfoContext);

  // FIXME
  return (
    <>
      <Title title="FAQ" subline="Learn More About Our Meeting" />
      <StoryNotifications onlyFinished />

      <Section
        narrow
        heading="What is a puzzlehunt? How do I solve these puzzles?"
      >
        <p>
          If you’ve never heard of puzzlehunts before, here’s a very brief
          summary: in a typical puzzle, you receive some information and have to
          extract an answer out of it, which is almost always an English word or
          phrase. Puzzles can come in many different forms; the only real
          commonality is that you usually receive no direct instructions, so
          it’s up to you to figure out how to make sense of the information
          you’re given.
        </p>
      </Section>
    </>
  );
};

export default Faq;
