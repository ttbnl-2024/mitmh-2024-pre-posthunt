import Link from 'next/link';
import React, { useContext } from 'react';

import { formattedDateTime } from 'utils/timer';

import HuntInfoContext from 'components/context';
import Section from 'components/section';
import StoryNotifications from 'components/story_notifications';
import Title from 'components/title';

const Rules = () => {
  const { huntInfo } = useContext(HuntInfoContext);

  // FIXME
  return (
    <>
      <Title title="Rules" subline="For All Our Guests" />
      <StoryNotifications onlyFinished />

      {/* FIXME: Update based on this year's rules. */}
      <Section narrow heading="Format">
        <ul>
          <li>
            The 2024 Mystery Hunt (i.e., the puzzlehunt) starts on{' '}
            <strong>{formattedDateTime(huntInfo.startTime)}</strong> and ends on{' '}
            <strong>{formattedDateTime(huntInfo.endTime)}</strong>.
          </li>
        </ul>
      </Section>

      <style jsx>{`
        li {
          padding-bottom: 8px;
        }
      `}</style>
    </>
  );
};

export default Rules;
