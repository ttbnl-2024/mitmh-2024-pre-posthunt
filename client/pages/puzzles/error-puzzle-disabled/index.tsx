import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'error-puzzle-disabled';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          "Oh my God, where do I start! Typos within typos!"
          <br />
          "Typos within typos yes, but small in scope."
          <br />
          "You dare use my own words against me?"
          <br />
        </FlavorText>
        <p>
          <b>Graham's Publishing House To-Do List</b>
        </p>
        <ul>
          <li>Give Diana Gabaldon's submission a read;</li>
          <li>Send a rejection to J.K. Rowling;</li>
          <li>Send edited feedback to Douglas Adams;</li>
          <li>Rick Riordan's first draft just came in;</li>
          <li>Review cover art for Megan O'Russell;</li>
          <li>Reach out for blurbs for Scott O'Dell's upcoming title;</li>
          <li>Update metadata for Barbara Park's backlist;</li>
          <li>
            Check inventory to see if it's time for Thomas E Wood's next
            reprint;
          </li>
          <li>
            Reach out to local bookstore about author event for Mark Manson;
          </li>
          <li>Hunt down comp titles for new Brit Bennett book;</li>
          <li>Set up royalty payments for Gary D. Schmidt;</li>
          <li>Send contract to John Grisham;</li>
        </ul>

        <div className="space-y-5 text-lg mt-5">
          <hr />
          <p>
            <Monospace>⠟⠗⠕⠝⠉⠗⠊⠉⠕⠽⠏⠊</Monospace>
            <br />
            <Monospace>⠊⠉⠃⠞⠑⠛⠍⠽⠊⠓⠊⠽</Monospace>
            <br />
            <Monospace>⠝⠛⠧⠊⠞⠞⠑⠗⠞⠁⠗</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠉⠕⠓⠑⠟⠓⠃⠝⠃⠽⠽⠟⠗⠊⠽⠛⠎⠞</Monospace>
            <br />
            <Monospace>⠚⠁⠎⠟⠗⠑⠃⠇⠥⠕⠛⠑⠇⠋⠓⠎⠽⠊</Monospace>
            <br />
            <Monospace>⠟⠗⠃⠞⠟⠕⠑⠥⠉⠑⠁⠁⠉⠅⠓⠕⠉⠑</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠗⠁⠟⠗⠕⠛⠑⠋</Monospace>
            <br />
            <Monospace>⠍⠍⠙⠕⠧⠑⠓⠃</Monospace>
            <br />
            <Monospace>⠝⠙⠍⠕⠝⠑⠽</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠝⠑⠚⠑⠝⠛⠑⠓⠓⠎⠊⠞⠑⠗</Monospace>
            <br />
            <Monospace>⠎⠁⠝⠊⠧⠕⠃⠟⠗⠑⠓⠁⠓⠙</Monospace>
            <br />
            <Monospace>⠊⠝⠙⠁⠝⠙⠍⠕⠕⠇⠊⠙⠙⠑</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠞⠕⠎⠟⠑⠎⠟⠑⠓⠑⠝⠕</Monospace>
            <br />
            <Monospace>⠋⠕⠎⠎⠑⠝⠊⠽⠛⠎⠊⠃</Monospace>
            <br />
            <Monospace>⠎⠙⠺⠊⠟⠓⠁⠎⠗⠗⠅⠛</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠎⠝⠏⠁⠉⠟⠺⠕⠓⠑⠁⠕</Monospace>
            <br />
            <Monospace>⠓⠝⠛⠎⠇⠎⠽⠙⠺⠃⠝⠟</Monospace>
            <br />
            <Monospace>⠑⠕⠍⠁⠽⠽⠏⠥⠉⠅⠊</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠋⠑⠓⠞⠝⠞⠺⠑</Monospace>
            <br />
            <Monospace>⠊⠃⠎⠛⠙⠑⠕⠋</Monospace>
            <br />
            <Monospace>⠟⠓⠕⠥⠛⠓⠟</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠝⠕⠅⠛⠁⠓⠑⠅⠎⠕⠍⠝</Monospace>
            <br />
            <Monospace>⠕⠚⠝⠎⠋⠑⠧⠇⠊⠃⠙⠁</Monospace>
            <br />
            <Monospace>⠊⠝⠊⠟⠍⠑⠋⠕⠟⠞⠕⠗</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠃⠞⠑⠚⠽⠁⠧⠚⠃⠝⠎⠧⠕⠑</Monospace>
            <br />
            <Monospace>⠅⠑⠙⠙⠊⠏⠋⠕⠓⠕⠽⠞⠑⠽</Monospace>
            <br />
            <Monospace>⠉⠑⠝⠕⠅⠙⠓⠑⠞⠥⠓⠝⠕⠙</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠋⠕⠓⠎⠑⠝⠁⠧⠧⠽⠎⠉</Monospace>
            <br />
            <Monospace>⠟⠓⠽⠊⠝⠙⠟⠑⠁⠇⠕⠎</Monospace>
            <br />
            <Monospace>⠛⠇⠑⠟⠊⠕⠏⠙⠑⠁⠞⠓</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠊⠕⠁⠥⠓⠝⠎⠝⠛⠝</Monospace>
            <br />
            <Monospace>⠑⠥⠗⠚⠁⠝⠊⠝⠟⠕</Monospace>
            <br />
            <Monospace>⠍⠁⠙⠊⠍⠊⠟⠊⠊</Monospace>
          </p>
          <hr />
          <p>
            <Monospace>⠃⠕⠉⠃⠥⠊⠕⠇⠕⠞⠍⠕</Monospace>
            <br />
            <Monospace>⠟⠕⠧⠇⠝⠑⠅⠊⠞⠚⠃⠎</Monospace>
            <br />
            <Monospace>⠃⠓⠁⠏⠋⠽⠕⠝⠙⠊⠽⠛</Monospace>
          </p>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
