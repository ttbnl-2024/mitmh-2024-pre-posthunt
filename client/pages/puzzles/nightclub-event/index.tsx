import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'nightclub-event';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          <b>Kresge Auditorium</b>
          <br />
          Friday Jan 12th, starting at 7PM
          <br />
          <br />
          Send 1&ndash;2 team members who consider themselves creative, artistic, or
          performative.
          <br />
          <br />
          Entry is timed based on team name:
        </p>
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
                Team Names starting with letters T&ndash;Z, and team names that
                start with numbers, symbols, or characters that aren't in
                English (e.g., ✈️✈️✈️ Galactic Trendsetters ✈️✈️✈️ )
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
