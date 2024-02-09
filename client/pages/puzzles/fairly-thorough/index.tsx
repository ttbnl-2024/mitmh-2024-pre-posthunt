import cx from 'classnames';
import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';

import { useRouter } from 'utils/router';

import { NO_COPY_CLASS } from 'components/copy';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'fairly-thorough';

const DATA: {
  border: boolean;
  exits: [number, string][];
  sign: string;
  size: string;
}[] = [
  {
    border: false,
    exits: [
      [18, 'North'],
      [9, 'West'],
      [12, 'East'],
      [17, 'South'],
    ],
    sign: 'white',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [16, 'North'],
      [4, 'West'],
      [41, 'East'],
      [31, 'South'],
    ],
    sign: 'red',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [28, 'North'],
      [21, 'North'],
      [6, 'West'],
      [19, 'East'],
      [37, 'South'],
      [29, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [40, 'North'],
      [15, 'West'],
      [42, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [13, 'North'],
      [1, 'East'],
      [33, 'South'],
    ],
    sign: 'red',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [42, 'North'],
      [21, 'West'],
      [54, 'East'],
      [19, 'South'],
    ],
    sign: '',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [38, 'North'],
      [25, 'West'],
      [2, 'East'],
      [37, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: true,
    exits: [[50, 'South']],
    sign: '',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [22, 'North'],
      [53, 'West'],
      [40, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [10, 'West'],
      [0, 'East'],
      [11, 'South'],
    ],
    sign: 'blue',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [52, 'North'],
      [50, 'West'],
      [9, 'East'],
      [44, 'South'],
    ],
    sign: '',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [9, 'North'],
      [44, 'West'],
      [17, 'East'],
      [16, 'South'],
    ],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [0, 'West'],
      [17, 'West'],
      [53, 'East'],
      [51, 'South'],
      [24, 'South'],
    ],
    sign: '',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [44, 'North'],
      [16, 'East'],
      [4, 'South'],
    ],
    sign: 'red',
    size: 'deserted',
  },
  {
    border: false,
    exits: [
      [41, 'North'],
      [49, 'West'],
      [32, 'East'],
      [25, 'East'],
      [45, 'South'],
      [23, 'South'],
    ],
    sign: 'red',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [53, 'North'],
      [24, 'West'],
      [3, 'East'],
      [28, 'South'],
    ],
    sign: 'blue',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [11, 'North'],
      [13, 'West'],
      [27, 'East'],
      [1, 'South'],
    ],
    sign: 'blue',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [0, 'North'],
      [11, 'West'],
      [12, 'East'],
      [27, 'South'],
    ],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [[0, 'South']],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [5, 'North'],
      [2, 'West'],
      [26, 'South'],
    ],
    sign: 'white',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [[23, 'North']],
    sign: '',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [42, 'North'],
      [28, 'West'],
      [5, 'East'],
      [2, 'South'],
    ],
    sign: 'red',
    size: 'medium-sized',
  },
  {
    border: true,
    exits: [[8, 'South']],
    sign: '',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [14, 'North'],
      [45, 'West'],
      [39, 'East'],
      [20, 'South'],
    ],
    sign: '',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [12, 'North'],
      [51, 'West'],
      [15, 'East'],
      [38, 'South'],
    ],
    sign: 'red',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [34, 'North'],
      [14, 'West'],
      [6, 'East'],
      [39, 'South'],
    ],
    sign: 'white',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [19, 'North'],
      [29, 'West'],
      [35, 'South'],
    ],
    sign: 'red',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [17, 'North'],
      [16, 'West'],
      [51, 'East'],
      [41, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [15, 'North'],
      [38, 'West'],
      [21, 'East'],
      [2, 'South'],
    ],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [2, 'North'],
      [36, 'West'],
      [26, 'East'],
      [35, 'South'],
    ],
    sign: 'blue',
    size: 'small',
  },
  {
    border: false,
    exits: [[45, 'North']],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [1, 'North'],
      [33, 'West'],
      [49, 'East'],
    ],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [41, 'West'],
      [14, 'West'],
      [34, 'East'],
    ],
    sign: 'red',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [43, 'North'],
      [4, 'North'],
      [31, 'East'],
      [46, 'South'],
    ],
    sign: 'red',
    size: 'very large',
  },
  {
    border: false,
    exits: [
      [51, 'North'],
      [32, 'West'],
      [38, 'East'],
      [25, 'South'],
    ],
    sign: '',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [29, 'North'],
      [26, 'North'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [37, 'North'],
      [39, 'West'],
      [29, 'East'],
    ],
    sign: 'white',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [6, 'North'],
      [2, 'North'],
      [36, 'South'],
    ],
    sign: 'red',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [24, 'North'],
      [34, 'West'],
      [28, 'East'],
      [6, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [25, 'North'],
      [23, 'West'],
      [36, 'East'],
    ],
    sign: '',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [
      [8, 'North'],
      [53, 'West'],
      [3, 'South'],
    ],
    sign: '',
    size: 'very large',
  },
  {
    border: false,
    exits: [
      [27, 'North'],
      [1, 'West'],
      [32, 'East'],
      [14, 'South'],
    ],
    sign: 'white',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [3, 'North'],
      [21, 'South'],
      [5, 'South'],
    ],
    sign: '',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [50, 'North'],
      [47, 'West'],
      [44, 'East'],
      [33, 'South'],
    ],
    sign: 'blue',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [10, 'North'],
      [43, 'West'],
      [11, 'East'],
      [13, 'South'],
    ],
    sign: '',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [14, 'North'],
      [49, 'West'],
      [23, 'East'],
      [30, 'South'],
    ],
    sign: '',
    size: 'large',
  },
  {
    border: true,
    exits: [[33, 'North']],
    sign: '',
    size: 'large',
  },
  {
    border: false,
    exits: [[43, 'East']],
    sign: '',
    size: 'large',
  },
  {
    border: true,
    exits: [[53, 'South']],
    sign: '',
    size: 'small',
  },
  {
    border: false,
    exits: [
      [31, 'West'],
      [14, 'East'],
      [45, 'East'],
    ],
    sign: 'red',
    size: 'low',
  },
  {
    border: false,
    exits: [
      [7, 'North'],
      [10, 'East'],
      [43, 'South'],
    ],
    sign: 'blue',
    size: 'large',
  },
  {
    border: false,
    exits: [
      [12, 'North'],
      [27, 'West'],
      [24, 'East'],
      [34, 'South'],
    ],
    sign: 'red',
    size: 'large',
  },
  {
    border: true,
    exits: [[10, 'South']],
    sign: 'red',
    size: 'very small',
  },
  {
    border: false,
    exits: [
      [48, 'North'],
      [12, 'West'],
      [8, 'East'],
      [40, 'East'],
      [15, 'South'],
    ],
    sign: 'blue',
    size: 'medium-sized',
  },
  {
    border: false,
    exits: [[5, 'West']],
    sign: '',
    size: 'medium-sized',
  },
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [where, setWhere] = useState<number>(0);

  // Use shallow routing to avoid hitting the server when unnecessary
  useEffect(() => {
    setWhere(Number.parseInt(router.query.where ?? 0, 10));
  }, [router.query.where]);

  const StartPage: FC<{}> = () => (
    <>
      <p>
        <a
          onClick={() => router.push('?where=9', undefined, { shallow: true })}
        >
          Enter.
        </a>
      </p>
      <p>S E E S N W W W E W N E</p>
      <p>S N E N W N S E S N W</p>
      <p>S E W S E S </p>
      <p className="font-mono">
        <span className="whitespace-nowrap">⌊o(x)/7⌋</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉ + 2</span>,
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉ + 3</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉ + 3</span>,{' '}
        <span className="whitespace-nowrap">⌊(i(x)-o(x))/6⌋</span>,
        <span className="whitespace-nowrap">⌊i(x)/o(x)⌋</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉</span>,{' '}
        <span className="whitespace-nowrap">⌈(i(x)+o(x))/4⌉</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉ + 3</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉ + 2</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉ + 2</span>, x
      </p>
      <p className="font-mono">
        x, <span className="whitespace-nowrap">⌊(i(x)-o(x))/6⌋</span>,{' '}
        <span className="whitespace-nowrap">⌊i(x)/o(x)⌋</span>,{' '}
        <span className="whitespace-nowrap">⌊o(x)/i(x)⌋ - 2</span>,{' '}
        <span className="whitespace-nowrap">⌈(i(x)-o(x))/3⌉</span>,{' '}
        <span className="whitespace-nowrap">⌊(i(x)+o(x))/10⌋</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉ + 2</span>,{' '}
        <span className="whitespace-nowrap">⌊(i(x)+o(x))/6⌋</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉ + 3</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉ + 3</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/o(x)⌉ + 3</span>,{' '}
        <span className="whitespace-nowrap">⌊i(x)/10⌋</span>
      </p>
      <p className="font-mono">
        x, <span className="whitespace-nowrap">⌊o(x)/(5i(x))⌋</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉</span>,{' '}
        <span className="whitespace-nowrap">⌊i(x)/o(x)⌋ - 1</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉</span>,{' '}
        <span className="whitespace-nowrap">⌈o(x)/i(x)⌉ + 2</span>,{' '}
        <span className="whitespace-nowrap">⌈i(x)/10⌉</span>
      </p>
    </>
  );
  const Location: FC<{ where: number }> = ({ where }) => {
    const whereIdx = where - 1;
    const locData = DATA[whereIdx];
    return (
      <>
        <p>
          You are in room {where}, a {locData.size} room.
        </p>
        {locData.sign && <p>You see a {locData.sign} sign here.</p>}
        {locData.border && (
          <p>
            The passageway you used to get here continues onward and is known in
            a different way. However, you choose not to continue on this path
            and turn back.
          </p>
        )}
        <p>You can now go in one of these directions:</p>
        <ul className="list-none pl-0">
          {locData.exits.map(([targetIdx, dir], idx) => (
            <li key={`${whereIdx}-${idx}`}>
              <a
                onClick={() =>
                  router.push(`?where=${targetIdx + 1}`, undefined, {
                    shallow: true,
                  })
                }
              >
                {dir} (to room {targetIdx + 1})
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    router.push(`?where=${formData.get('where')}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        {where === undefined || where <= 0 || where > DATA.length ? (
          <StartPage />
        ) : (
          <>
            <div className={cx('flex flex-row items-center', NO_COPY_CLASS)}>
              <form onSubmit={formSubmitHandler}>
                <input
                  type="number"
                  name="where"
                  min={1}
                  max={DATA.length}
                  className="max-w-[60px] pl-2"
                  required={true}
                />
                <input
                  type="submit"
                  value="Go to room"
                  className="border-none rounded-xl p-2 mx-2"
                />
              </form>
              <button
                onClick={(_) =>
                  router.push(`?where=0`, undefined, {
                    shallow: true,
                  })
                }
                className="!bg-neutral-300 !text-black border-none rounded-xl p-2"
              >
                Back to entrance
              </button>
            </div>
            <Location where={where} />
          </>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
