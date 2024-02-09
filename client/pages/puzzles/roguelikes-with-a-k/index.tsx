import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'roguelikes-with-a-k';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You're <span className="not-italic">excited</span> to be in Hades? You
          must be a true roguelike fan. Here are five roguelikes.
        </FlavorText>
        <InfoIcon>
          The password for each roguelike is{' '}
          <Monospace>passwordtobechosenlater</Monospace>
        </InfoIcon>
        <p>
          <a href="https://mythstory2024.itch.io/ant-dueler">Ant Dueler</a>
        </p>
        <p>
          <a href="https://mythstory2024.itch.io/are-we-necro-or-are-we-dancer">
            Are We Necro or Are We Dancer
          </a>
        </p>
        <p>
          <a href="https://mythstory2024.itch.io/only-humans-will-survive">
            Only Humans Will Survive
          </a>
        </p>
        <p>
          <a href="https://mythstory2024.itch.io/tethack">TetHack</a>
        </p>
        <p>
          <a href="https://mythstory2024.itch.io/vaguely-roguelike-themed-wordle">
            Vaguely Roguelike-Themed Wordle
          </a>
        </p>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
