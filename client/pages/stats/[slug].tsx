import cx from 'classnames';
import Head from 'next/head';
import React from 'react';

import { serverFetch } from 'utils/fetch';
import { displayTimeLeft, formattedDateTime, sortTime } from 'utils/timer';

import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import { LinkIfStatic } from 'components/link';
import Section from 'components/section';
import Table from 'components/table';
import Title from 'components/title';

import Page404 from 'pages/404';

interface SolverData {
  team: string;
  slug: string;
  is_current: boolean;
  unlock_time: string;
  solve_time: string;
  wrong_duration?: number;
  open_duration?: number;
  total_guesses: number;
  used_free_answer: boolean;
}

interface StatsData {
  solvers?: SolverData[];
  solves: number;
  free_solves: number;
  guesses: number;
  answers_tried: {
    wrong_answer: string;
    count: number;
  }[];
  wrong: string;
  puzzle_name: string;
  puzzle_answer: string;
  puzzle_url: string;
}

const Stats = ({ statsData, slug }) => {
  // invalid slugs make it to this function instead of getting redirected to
  // 404 page, eventually causing a server error. I am so done with debugging
  // Caddy redirects so screw it just copy-paste the 404 code.
  if (!statsData.solvers) {
    return <Page404 />;
  }

  return (
    <Section 
      className={cx(
        'my-16 bg-white rounded-md',
        'after:bg-white after:drop-shadow-md after:rounded-md',
        'max-w-[95vw] print:max-w-full'
      )}
    >
      <Title title={`Stats: ${statsData.puzzle_name}`} />
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="text-center link">
        <LinkIfStatic href={statsData.puzzle_url}>Back to Puzzle</LinkIfStatic>
      </div>
      <h3>
        Total solves:{' '}
        <strong>{statsData.solves - statsData.free_solves}</strong> (
        {statsData.free_solves} free)
      </h3>
      <h3 className="my-2">
        Total guesses: <strong>{statsData.guesses}</strong>
      </h3>
      <InfoIcon>Click on a header to sort.</InfoIcon>
      <div className="bg-blur dark">
        <Table className="stats-table min-w-full" isSortable>
          <thead>
            <tr className="min-w-full">
              <th className="cursor-pointer">Team</th>
              <th className="cursor-pointer text-center">Wrong guesses</th>
              <th className="cursor-pointer">Unlock time</th>
              <th className="cursor-pointer">Time to solve</th>
              <th className="cursor-pointer">Solve time</th>
              <th className="cursor-pointer text-center">Used free</th>
              <th className="cursor-pointer">
                Time to solve after{' '}
                <span className="answer font-mono">{statsData.wrong}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {statsData.solvers.map(
              (
                {
                  team,
                  slug,
                  total_guesses,
                  unlock_time,
                  open_duration,
                  solve_time,
                  wrong_duration,
                  used_free_answer,
                },
                i
              ) => (
                <tr key={`solver-row-${i}`}>
                  <td>{team}</td>
                  <td>{total_guesses}</td>
                  <td sorttable_customkey={sortTime(unlock_time)}>
                    {formattedDateTime(unlock_time, {
                      year: undefined,
                      weekday: undefined,
                    })}
                  </td>
                  <td sorttable_customkey={open_duration}>
                    {open_duration &&
                      displayTimeLeft(open_duration, 1, {
                        showHours: true,
                        showDays: false,
                        verbose: true,
                        warningAt: 0,
                      })}
                  </td>
                  <td sorttable_customkey={sortTime(solve_time)}>
                    {formattedDateTime(solve_time, {
                      year: undefined,
                      weekday: undefined,
                    })}
                  </td>
                  <td>{used_free_answer ? '✔' : '❌'}</td>
                  <td sorttable_customkey={wrong_duration}>
                    {wrong_duration &&
                      displayTimeLeft(wrong_duration, 1, {
                        showHours: true,
                        showDays: false,
                        verbose: true,
                        warningAt: 0,
                      })}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
      <br />
      <br />
      <div className="bg-blur dark">
        <Table className="submissions-table min-w-full" isSortable>
          <thead>
            <tr>
              <th className="cursor-pointer" style={{ width: '80%' }}>
                Answer
              </th>
              <th className="cursor-pointer" style={{ width: '20%' }}>
                Submission count
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="answer">
              <td className="font-mono">
                <strong>{statsData.puzzle_answer}</strong>
              </td>
              <td>{statsData.solves}</td>
            </tr>
            {statsData.answers_tried.map((answer, i) => (
              <tr key={`answer-${i}`} className="answer">
                <td className="font-mono">{answer.wrong_answer}</td>
                <td>{answer.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <style jsx>{`
        .link {
          margin: 20px 0 40px;
        }
        th {
          font-size: 18px;
          cursor: pointer;
        }
        .stats-table th:nth-child(7) {
          word-wrap: anywhere;
          max-width: 9rem;
          min-width: 6rem;
        }
        .submissions-table th:nth-child(2) {
          word-wrap: anywhere;
        }
        .stats-table td:nth-child(2),
        .stats-table td:nth-child(6),
        .submissions-table td:nth-child(2) {
          text-align:center;
        }
        .stats-table td {
          font-size: small;
        }
        td {
          padding-top: 4px;
          padding-bottom: 4px;
          padding-right: 4px;
          word-wrap: anywhere;
        }
        tr {
          border-bottom: 1px dashed var(--black);
        }
        td,
        th {
          border-color: var(--black) !important;
        }
        .answer {
          font-size: 18px;
        }

        :global(.darkmode) td,
        :global(.darkmode) th {
          border-color: #fff !important;
          }
        }
      `}</style>
    </Section>
  );
};

export default Stats;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params || {};
  let props: any;
  if (process.env.isStatic) {
    props = require(`assets/json_responses/stats/${slug}.json`);
  } else {
    props = {
      statsData: await serverFetch<StatsData>(context, `/stats/${slug}`),
      slug,
    };
  }

  return {
    props,
  };
};

/*
export const getStaticPaths = async () => {
  return require('assets/json_responses/puzzle_paths.json');
};
*/
