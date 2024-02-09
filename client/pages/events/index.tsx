import parse from 'html-react-parser';
import React, { useContext } from 'react';

import { serverFetch } from 'utils/fetch';

import HuntInfoContext from 'components/context';
import InfoIcon from 'components/info_icon';
import Link, { LinkIfStatic } from 'components/link';
import Section from 'components/section';
import Table from 'components/table';
import Title from 'components/title';

interface Event {
  slug: string;
  name: string;
  location: string;
  expected_start_time: string;
  min_participants: number;
  max_participants: number;
  description: string;
  status: string;
}

interface Props {
  events: Event[];
  currency: number;
  strongCurrency: number;
  weakInfo: string;
  strongInfo?: string;
}

// Formats as "Friday, 9 pm"
const formattedDateTime = (time) => {
  const date = new Date(time);
  return (
    date
      .toLocaleDateString('en-US', {
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'US/Eastern',
      })
      .replace(/.M/, (match) => match.toLowerCase()) + ' EST'
  );
};

const Events: React.FC<Props> = ({
  currency,
  strongCurrency,
  events,
  weakInfo,
  strongInfo,
}) => {
  const { userInfo, huntInfo } = useContext(HuntInfoContext);
  return (
    <Section title="Events" narrow className="bg-white">
      <div className="pt-20">
        <Title title="Events" />
        {!!userInfo?.teamInfo &&
          huntInfo.secondsToStartTime <= 0 && // you might need to comment out this line to test
          !userInfo?.public && (
            <div className="mt-4 border border-dashed border-black p-2 rounded">
              <InfoIcon>
                You have{' '}
                <b>
                  {currency} regular reward{currency === 1 ? '' : 's'}
                </b>{' '}
                and{' '}
                <b>
                  {strongCurrency} strong reward
                  {strongCurrency === 1 ? '' : 's'}
                </b>
                .
              </InfoIcon>
              <p>{parse(weakInfo)}</p>
              {strongInfo && <p>{parse(strongInfo)}</p>}
              <Link href="/events/free-answer">Use a free answer</Link>
              <br />
              {strongCurrency > 0 && (
                <Link href="/events/stronger-free-answer">
                  Use a strong free answer
                </Link>
              )}
            </div>
          )}

        {events.map((event, idx) => (
          <div className="pt-8" key={idx}>
            <h3>{event.name}</h3>
            <h4>
              {formattedDateTime(event.expected_start_time)} - {event.location}
            </h4>
            {/* <h5>
            {event.min_participants && `${event.min_participants}–`}
            {event.max_participants} participants
          </h5> */}
            {event.status === 'post' && (
              <div className="primary">
                This event is now over. You may{' '}
                <LinkIfStatic
                  href={`/${userInfo?.public ? 'solutions' : 'puzzles'}/${
                    event.slug
                  }`}
                >
                  {userInfo?.public ? 'view event details' : 'submit an answer'}
                </LinkIfStatic>{' '}
                here.
              </div>
            )}
            <p>{event.description}</p>

            {/* description is a flat string, and we want to render a table. So we have
                to special case it using the event name. We can't use event.slug because
                it's not populated before the event is over. */}
            {event.name === 'Nightclub Event' && (
              <>
                <p>Entry is timed based on team name:</p>
                <Table>
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>Groups By Team Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>7:00PM</td>
                      <td>Team Names starting with letters A&ndash;E</td>
                    </tr>
                    <tr>
                      <td>7:15PM</td>
                      <td>Team Names starting with letters F&ndash;M</td>
                    </tr>
                    <tr>
                      <td>7:30PM</td>
                      <td>Team Names starting with letters N&ndash;S</td>
                    </tr>
                    <tr>
                      <td>7:45PM</td>
                      <td>
                        Team Names starting with letters T&ndash;Z, and team
                        names that start with numbers, symbols, or characters
                        that aren't in English (e.g., ✈️✈️✈️ Galactic
                        Trendsetters ✈️✈️✈️ )
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Events;

export const getServerSideProps = async (context) => {
  let props: Props;
  if (process.env.isStatic) {
    props = require('assets/json_responses/events.json');
  } else {
    props = await serverFetch<Props>(context, '/events', {
      method: 'GET',
    });
  }
  return { props };
};
