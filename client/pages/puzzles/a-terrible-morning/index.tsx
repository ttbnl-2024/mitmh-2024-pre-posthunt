import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Wordsearch from 'components/wordsearch';

const SLUG = 'a-terrible-morning';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>
          I woke up with a jolt in my New York City apartment and heard thunder.
          It was starting to rain. What time was it? Why didn't I hear my alarm
          clock? I turned my head, and instead of my digital alarm clock there
          was a... what? I saw a fluid container with a condition-responsive
          controller sitting on my nightstand. Strange. I went to the bathroom,
          still pondering how my alarm clock got replaced with that strange
          structure, when something else happened. When I reached for the toilet
          paper roll, instead there was a tank mounting structure made up of
          sheets of gaskets. I have never seen anything like this. It was
          terrifying! I am still proud of myself for not running away screaming,
          because I would have certainly bumped my head into this next oddity. I
          reached for my toothbrush, and instead there was a mop with a wringer
          and a vibrating hair brush! I guess now I can clean my floors while I
          do my hair, so thanks for that at least.{' '}
        </p>
        <p>
          I took a shower, got dressed and went to the kitchen to get some
          breakfast. It was raining hard outside, and I was already late for
          work. I knew I was in trouble when I saw that my refrigerator was
          missing! Instead, there stood a ceramic balloon-filling machine. I
          decided to make myself a cup of coffee instead and reached for my
          coffee maker. I think you can imagine what happened next - it wasn't
          there! Instead I found a soil compacting compressor machine. It is
          useful, probably, but I would much prefer to be able to make my
          coffee! In a last-ditch effort to make some breakfast I looked through
          my cupboards and found a loaf of bread. I decided to make toast. But
          then, of course, when I reached for the electric toaster it was
          nowhere to be found. In its place there was an anti-burglar device
          with a fluid valve. This was it, I gave up.
        </p>
        <p>
          The rain picked up again, and I decided to grab breakfast on my way to
          work. I was finally ready to leave and reached for my folding
          umbrella... It was gone, of course. Instead I found a new portable
          desk with an enhanced built-in sewing machine. This is it. I've had
          enough. What's the saying - if you can't beat'em, join'em? I think
          I'll take a day off work and embark on a sewing project with my
          unexpectedly acquired sewing machine. I'll go get my supplies.
        </p>

        <Wordsearch
          tableClass="mx-auto"
          // prettier-ignore
          data={[
            ["Y","O","U","A","R","E","V","O","E","D","U","T","I","T","L","A","B","A","T","T","E","R","Y","N","T"],
            ["W","O","D","N","I","W","H","A","E","R","I","H","G","I","H","R","O","F","G","H","T","T","R","L","R"],
            ["P","A","C","K","N","S","O","I","L","C","O","M","P","A","C","T","I","N","G","A","O","W","D","O","E"],
            ["O","O","C","C","O","M","R","P","L","V","E","C","O","N","D","I","T","I","O","N","T","E","O","R","S"],
            ["R","F","F","S","E","T","H","O","E","W","E","N","R","O","N","G","T","I","T","A","A","S","H","T","P"],
            ["T","R","M","S","T","R","E","M","S","T","E","C","O","M","I","T","A","F","D","I","P","U","T","N","O"],
            ["A","O","L","A","H","R","A","E","S","S","N","L","L","I","A","E","N","I","O","R","P","T","E","O","N"],
            ["B","T","X","T","N","E","U","M","S","E","E","E","B","O","S","C","K","L","O","C","A","A","M","C","S"],
            ["L","A","H","O","W","U","E","C","I","T","G","R","T","A","S","E","H","L","R","O","R","R","D","P","I"],
            ["E","R","F","W","P","O","F","T","T","C","N","N","P","W","W","I","A","I","A","O","A","A","N","R","V"],
            ["A","Y","R","O","O","R","N","A","M","U","N","E","I","M","S","O","N","N","N","L","T","P","A","O","E"],
            ["S","P","G","S","R","B","E","D","C","A","R","A","M","T","O","L","L","G","D","E","U","P","L","D","Y"],
            ["T","W","P","O","W","U","N","V","E","T","T","E","N","E","R","C","A","F","S","D","S","A","A","U","L"],
            ["R","Y","R","A","O","I","S","N","E","V","U","E","F","O","V","O","E","I","D","E","I","G","I","C","I"],
            ["U","G","T","I","R","F","T","E","G","N","I","R","R","O","C","O","P","C","R","O","A","M","R","T","E"],
            ["C","B","N","T","N","A","L","H","A","N","T","C","I","I","R","O","R","S","O","E","G","L","E","I","E"],
            ["T","U","A","I","T","G","T","U","P","S","I","I","E","N","A","T","M","P","N","H","T","E","T","O","R"],
            ["U","R","N","T","W","O","E","U","I","R","G","T","V","H","G","L","I","P","M","A","C","A","A","N","B"],
            ["R","G","D","O","H","E","R","R","S","D","O","A","N","E","A","T","R","U","O","I","R","E","M","C","A"],
            ["E","L","M","T","A","T","S","H","D","E","V","T","S","U","S","V","H","E","C","S","R","T","B","I","L"],
            ["E","A","O","S","I","O","F","N","U","E","N","A","E","K","O","F","I","E","O","R","I","R","U","T","L"],
            ["U","R","P","B","R","U","S","H","I","N","V","A","L","C","E","M","T","N","R","E","I","T","R","I","O"],
            ["G","N","I","R","O","T","S","D","N","A","N","I","V","V","T","T","E","N","G","E","T","C","E","S","O"],
            ["G","N","I","T","A","R","B","I","V","M","E","S","C","S","E","E","S","A","G","E","O","C","A","O","N"],
            ["M","M","O","P","S","Y","S","T","E","M","P","L","E","E","T","E","D","D","O","V","E","F","U","R","S"],
          ]}
        />
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
