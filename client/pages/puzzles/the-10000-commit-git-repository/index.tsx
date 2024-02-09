import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import zip from 'assets/puzzles/the-10000-commit-git-repository/rand-repo.zip';

const SLUG = 'the-10000-commit-git-repository';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <p>
          Oh no! I, Ben Bitdiddle, have dropped my repo and now all the commits
          are out of order! Please help me put it back to how it was. Careful,
          though - leave everything except the order the same! (This includes
          the file contents, author, author date, committer, commit date, and
          commit message. This is my work, not yours.)
        </p>
        <p>
          The very first commit I made had the hash{' '}
          <span className="font-mono break-words">
            6ff5175133e7ed5b329e5c47c7f7bb4236ecd0ac
          </span>
          . The last one... well, it ended with <Monospace>efb954</Monospace>,
          but I don't remember how it started.
        </p>
        <p>
          Repo: <a href={zip}>zip file</a>
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
