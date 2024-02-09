import cx from 'classnames';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { Router, useRouter } from 'utils/router';
import { useLocalStorage } from 'utils/storage';

import HuntInfoContext from 'components/context';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const clues = [
  [
    'YELLOW',
    'DARNED',
    'LEAR',
    'JULIET',
    'CRUDITÉS',
    'TERRACE',
    'CHESS',
    'TORRES',
    'HAMLET',
    'MARSHMALLOW',
    'CHECKERS',
    'JOGGLE',
    'ROSENCRANTZ',
    'JELL-O',
    'CELLO',
    'GOSHAWK',
  ],
  [
    'SPY',
    'HYPNOTIST',
    'MODERATE',
    'TALL',
    'MIDDLE',
    'SMALL',
    'CLAIRVOYANT',
    'PSYCHIC',
    'STANDARD',
    'PETIT',
    'JANITOR',
    'SURVIVOR',
    'DOCTOR',
    'ORDINARY',
    'VENTI',
    'FORTUNE TELLER',
  ],
  [
    'TENNIS',
    'DIVORCE',
    'MORBIUS',
    'MYSTERIO',
    'QUOKKA',
    'WALLABY',
    'FOOD',
    'DUTCH',
    'TASMANIAN DEVIL',
    'WOMBAT',
    'KINGPIN',
    'VENOM',
    'SICILIAN',
    'JUVENILE',
    'GRÜNFELD',
    'BOGO-INDIAN',
  ],
  [
    'SNAP',
    'SLAPDASH',
    'KIT KAT',
    'WHAM',
    'LA',
    'BANG',
    'POW',
    'TWIX',
    'PLANET',
    'SNICKERS',
    'BETROTHAL',
    'OW',
    'TRACE',
    'MISPRINT',
    'MILKY WAY',
    'ANYTIME',
  ],
  [
    'HEART',
    'FIRE',
    'FAUNTLEROY',
    'CIRCLE',
    'TRIANGLE',
    'THIN',
    'COMET',
    'DEBAR',
    'DARK',
    'METEOR',
    'GALAXY',
    'CHIC',
    'HEXAGON',
    'PLANET',
    'FLAN',
    'FARQUAAD',
  ],
  [
    'COMMENCE­MENT',
    'START',
    'EMERGENCE',
    'AGENDA',
    'STIGMA',
    'IONIQ',
    'SHERPA',
    'ORIGIN',
    'HASBRO',
    'EXODUS',
    'RUTH',
    'JOSHUA',
    'PROVERBS',
    'SANTA FE',
    'SONATA',
    'TUCSON',
  ],
  [
    'BASKIN-ROBBINS',
    'IN-N-OUT',
    'IVORY',
    'DECK',
    'CLOBBER',
    'MILK',
    'VANILLA',
    'BEIGE',
    "SWEET'N LOW",
    'EGGSHELL',
    'BEAT',
    'SPLENDA',
    'SUGAR',
    'STRIKE',
    "PEET'S",
    'TACO BELL',
  ],
  [
    'FOUR',
    'RACE',
    'KING',
    'PRINCE',
    'SHOW',
    'COUNTESS',
    'VISCOUNT',
    'SQUEAL',
    'BARONESS',
    'TEN',
    'JACK',
    'ACE',
    'BEAUTY',
    'ANXIOUS',
    'GOOEY',
    'BIKE',
  ],
  [
    'CAGE',
    'DEAD',
    'BABE',
    'ALIBI',
    'RICE',
    'PACE',
    'TARO',
    'DROP',
    'MARGAY',
    'TAKE',
    'RATE',
    'RACK',
    'TURN',
    'DACE',
    'JAPAN',
    'KICK',
  ],
  [
    'BUNSEN BURNER',
    'BUGLE',
    'PIANO',
    'ALLEGHENY',
    'HISS',
    'WHEEK',
    'SNAKE',
    'VIOLIN',
    'ASSIMILATE',
    'MEOW',
    'FRENCH HORN',
    'LIPSTICK',
    'FOREARM',
    'SILVER DOLLAR',
    'BELLYBUTTON',
    'FLUTE',
  ],
  [
    'CANDLE',
    'EXTREMITY',
    'SWISS',
    'FINN',
    'MISSIONARY',
    'PIPE',
    'LOTUS',
    'MALTESE',
    'LIMIT',
    'DANE',
    'FETAL',
    'SIDE',
    'ROD',
    'CAN',
    'EDGE',
    'LITHOTOMY',
  ],
  [
    'SHAKE',
    'BOARD',
    'THE MOUNTAINS WIN AGAIN',
    'CONFLICT',
    'SNAP',
    'EXPOSITION',
    'RUN-AROUND',
    'RESOLUTION',
    'SLASH',
    'CHECK',
    'BUT ANYWAY',
    'CLIMAX',
    'READY',
    'CAROLINA BLUES',
    'ICE',
    'STOP',
  ],
  [
    'AIM',
    'DIRECT',
    'TAPIR',
    'TRUCK',
    'CAR',
    'PRINT',
    'VERTIGO',
    'INFERNO',
    'MOTORCYCLE',
    'IRATE',
    'APTER',
    'POINT',
    'MIRAGE',
    'NUKE',
    'CAST',
    'BUS',
  ],
  [
    'RALPH',
    'BOLT',
    'MCLOVIN',
    'BAMBI',
    'SNOW WHITE',
    'JOHN DOE',
    'DOOM',
    'AVICII',
    'BLACK TIGER',
    'REWARD',
    'STREET FIGHTER II',
    'STRIDER',
    'KNITS',
    "GHOSTS N' GOBLINS",
    'GEORGE ELIOT',
    'SPACER',
  ],
  [
    'TIME',
    'TEARS',
    'DAWN',
    'OCARINA',
    'BREATH',
    'RENFIELD',
    'SKYWARD',
    'FRIEND',
    'TORRID',
    'THIRST',
    'DRACULA',
    'BIT',
    'DUSK',
    'MIDNIGHT',
    'ADVENTURE',
    'NOON',
  ],
  [
    'CURRENT',
    'SHED',
    'FINGER',
    'HEN',
    'COFFIN',
    'LEAD',
    'DRAFT',
    'GUST',
    'DESERT',
    'INTERN',
    'CASINO',
    'GALE',
    'GRAIN',
    'WORK',
    'PILE',
    'BASS',
  ],
];

const SLUG = 'connecting-connections';

function GridOfGrids({
  loggedIn,
  router,
}: Readonly<{
  loggedIn: boolean;
  router: Router;
}>): JSX.Element {
  const gridOfGrids: JSX.Element[] = [];
  for (let column = 0; column < 4; column++) {
    for (let row = 0; row < 4; row++) {
      const index = row * 4 + column;
      gridOfGrids.push(
        <div className="grid-item flex justify-center">
          {/* Add a wrapper div */}
          <Grid
            values={clues[index]}
            gridIndex={index}
            loggedIn={loggedIn}
            router={router}
          />
        </div>
      );
    }
  }

  return (
    <div
      className="grid-container gap-y-4"
      style={{ display: 'grid', gridTemplateColumns: '1fr' }}
    >
      {gridOfGrids}
    </div>
  );
}

function Grid({
  values,
  gridIndex,
  loggedIn,
  router,
}: Readonly<{
  values: string[];
  gridIndex: number;
  loggedIn: boolean;
  router: Router;
}>): JSX.Element {
  const numRows = values.length / 4; // Calculate the number of rows based on the length of values
  const [selectedSquares, setSelectedSquares] = useState<number[]>([]); // Keep track of which squares are selected
  const [activeSquares, setActiveSquares] = useState<number[]>(
    Array.from(Array(16).keys())
  ); // Keep track of which squares are active
  const [solvedCategories, setSolvedCategories] = useState<string[][]>([]); // Keep track of which categories are solved
  const [loading, setLoading] = useState<boolean>(false);

  interface GridState {
    activeSquares: number[];
    solvedCategories: string[][];
  }
  const gridStorage = useLocalStorage<GridState>(`${SLUG}/${gridIndex}`, {
    activeSquares: activeSquares,
    solvedCategories: solvedCategories,
  });

  useEffect(() => {
    const loaded = gridStorage.get();
    setActiveSquares(loaded.activeSquares);
    setSolvedCategories(loaded.solvedCategories);
  }, []);

  // this is what should be calling the backend
  const guess = async (selectedSqs: number[]): Promise<string[]> => {
    if (!loggedIn) {
      return ['', ''];
    }

    const formData = new FormData();
    formData.append('index', gridIndex.toString());
    formData.append('square1', selectedSqs[0].toString());
    formData.append('square2', selectedSqs[1].toString());
    formData.append('square3', selectedSqs[2].toString());
    formData.append('square4', selectedSqs[3].toString());

    const response = await clientFetch<
      DjangoFormResponse<{}, { category: string[] }>
    >(router, `/puzzle/${SLUG}/guess`, {
      method: 'POST',
      body: formData,
    });

    let matchingCategory = '';
    let color = '';

    if (response.data?.category) {
      matchingCategory = response.data.category[0];
      color = response.data.category[1];
    }

    return [matchingCategory, color];
  };

  const handleClick = async (squareIndex: number) => {
    let connectionFound = false;
    if (
      selectedSquares.length === 3 &&
      !selectedSquares.includes(squareIndex)
    ) {
      setLoading(true);

      const sortedSelectedSquares = [...selectedSquares, squareIndex].sort(
        (a: number, b: number) => a - b
      );

      const [matchingCategory, color] = await guess(sortedSelectedSquares);

      if (matchingCategory && matchingCategory.length > 0) {
        connectionFound = true;
        const newActiveSquares = activeSquares.filter(
          (squareIndex: number) => !sortedSelectedSquares.includes(squareIndex)
        );
        setActiveSquares(newActiveSquares);

        setSelectedSquares([]); // Clear the selected squares

        // add answer to the solved category list
        const newSolvedCats = [
          ...solvedCategories,
          [
            matchingCategory,
            sortedSelectedSquares
              .map((squareIndex: number) => values[squareIndex])
              .sort((a: string, b: any) => a.localeCompare(b))
              .join(', '),
            color,
          ],
        ];
        setSolvedCategories(newSolvedCats);

        gridStorage.set({
          activeSquares: newActiveSquares,
          solvedCategories: newSolvedCats,
        });
      }

      setLoading(false);
    }

    if (!connectionFound) {
      // Toggle the selected state of the square
      setSelectedSquares((prevSelectedSquares: number[]): number[] => {
        if (prevSelectedSquares.includes(squareIndex)) {
          return prevSelectedSquares.filter(
            (index: number) => index !== squareIndex
          );
        } else if (prevSelectedSquares.length === 4) {
          return prevSelectedSquares;
        } else {
          return [...prevSelectedSquares, squareIndex];
        }
      });
    }
  };

  const grid: JSX.Element[] = [];

  grid.push(<Header />);

  for (let row = 0; row < solvedCategories.length; row++) {
    const rowSquares: JSX.Element[] = [];
    rowSquares.push(
      <Answer
        value={solvedCategories[row][0]}
        clues={solvedCategories[row][1]}
        backgroundColor={solvedCategories[row][2]}
      />
    );

    grid.push(<div className="grid-column">{rowSquares}</div>);
  }

  let currentIndex = 0;
  for (let row = 0; row < numRows - solvedCategories.length; row++) {
    const rowSquares: JSX.Element[] = [];
    for (let col = 0; col < 4; col++) {
      const squareIndex = activeSquares[currentIndex];
      rowSquares.push(
        <Entry
          value={values[squareIndex]}
          index={squareIndex} // Pass the square index as a prop
          selected={selectedSquares.includes(squareIndex)} // Pass the selected state as a prop
          onClick={() => handleClick(squareIndex)} // Pass the onClick function as a prop
          loading={loading} // Pass the loading state as a prop
        />
      );
      currentIndex++;
    }
    grid.push(<div className="grid-column space-x-[3px]">{rowSquares}</div>);
  }

  return <div className="grid">{grid}</div>;
}

function Entry({
  value,
  index,
  selected,
  onClick,
  loading,
}: Readonly<{
  value: string;
  index: number;
  selected: boolean;
  onClick: () => void;
  loading: boolean;
}>): JSX.Element {
  const handleClick = (): void => {
    onClick(); // Call the onClick callback function
  };

  return (
    <button
      className={cx('rectangular-button max-md:w-[80px] w-[97.75px]', {
        selected: selected,
      })}
      style={{
        // width: '80px',
        height: '50px',
        backgroundColor: selected ? 'gray' : '#f2f2f2',
        color: selected ? 'white' : 'black',
        textAlign: 'center',
        verticalAlign: 'middle',
        borderWidth: '0px',
        marginBottom: '3px',
      }}
      onClick={handleClick}
      disabled={loading} // Disable the button when loading is true
    >
      <span
        className={cx('inline-block', 'p-0.5', {
          'text-xs': value.length <= 9,
          'text-[10px]': value.length > 9,
        })}
      >
        {value}
      </span>
    </button>
  );
}

function Answer({
  value,
  backgroundColor,
  clues,
}: Readonly<{
  value: string;
  backgroundColor: string;
  clues: string;
}>): JSX.Element {
  let bgColor = 'green';
  if (backgroundColor === '1') {
    bgColor = 'yellow';
  } else if (backgroundColor === '2') {
    bgColor = 'red';
  } else if (backgroundColor === '3') {
    bgColor = '#ADD8E6'; // Light blue color
  }

  return (
    <button
      className={'rectangular-button max-md:w-[330px] w-[400px]'}
      style={{
        height: '50px',
        backgroundColor: bgColor,
        color: 'black',
        textAlign: 'center',
        verticalAlign: 'middle',
        borderWidth: '1px',
        marginBottom: '3px',
      }}
    >
      <strong style={{ fontSize: '1.0em' }}>{value}</strong>
      <br />
      <span style={{ fontSize: '0.8em' }}>{clues}</span>
    </button>
  );
}

function Header(): JSX.Element {
  return (
    <div
      className="rectangular-box md max-md:w-[330px] w-[400px]"
      style={{
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '0px',
      }}
    ></div>
  );
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router: Router = useRouter();
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn: boolean =
    !!process.env.useWorker || !!userInfo?.teamInfo ? true : false;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <InfoIcon>The colors used are not meaningful.</InfoIcon>
      <div style={{ overflowX: 'auto' }}>
        <div ref={ref}>
          <GridOfGrids loggedIn={loggedIn} router={router} />
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
