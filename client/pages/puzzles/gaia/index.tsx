import cx from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';

import { useEventWebSocket } from 'utils/fetch';
import { useLocalStorage } from 'utils/storage';
import { useBrowserUuid } from 'utils/uuid';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import { merriweather } from 'pages/_app';

import enneagramArrow from 'assets/puzzles/gaia/gaia_arrows-enneagram.png';
import icarusArrow from 'assets/puzzles/gaia/gaia_arrows-icarus.png';
import jigsawArrow from 'assets/puzzles/gaia/gaia_arrows-jigsaw.png';
import morningArrow from 'assets/puzzles/gaia/gaia_arrows-morning.png';
import oilArrow from 'assets/puzzles/gaia/gaia_arrows-oil.png';
import mathArrow from 'assets/puzzles/gaia/gaia_arrows-transylv.png';
import star from 'assets/puzzles/gaia/star.png';

const SLUG = 'gaia';

const STAR_RADIUS = 15;
const WIDTH = 1000;
const HEIGHT = 666;
const LINE_HEIGHT = 24;

const RA_LEFT = 1142500000;
const RA_RIGHT = RA_LEFT - 120000000;
const DEC_TOP = 120000000;
const DEC_BOT = DEC_TOP - 80000000;

interface Star {
  display: string;
  x: number;
  y: number;
  meta: boolean;
}

interface Location {
  ra: number;
  dec: number;
}

interface DragOffset {
  x: number;
  y: number;
}

type StarMap = { [star: string]: Star };

const INITIAL_STARS: StarMap = {
  gaia: {
    display: 'Gaia',
    x: raToX(1051834949),
    y: decToY(88793661),
    meta: true,
  },
  'a-terrible-morning': {
    display: 'A Terrible\nMorning',
    x: raToX(1080990729),
    y: decToY(99912863),
    meta: false,
  },
  enneagram: {
    display: 'ENNEAGRAM',
    x: raToX(1040595588),
    y: decToY(77005544),
    meta: false,
  },
  'icarus-away': {
    display: 'Icarus Away!',
    x: raToX(1093892148),
    y: decToY(100131116),
    meta: false,
  },
  'jigsaw-sudoku': {
    display: 'Jigsaw Sudoku',
    x: raToX(1093738431),
    y: decToY(88793661),
    meta: false,
  },
  'oil-paintings': {
    display: 'Oil Paintings',
    x: raToX(1074115436),
    y: decToY(86686608),
    meta: false,
  },
  'transylvanian-math': {
    display: 'Transyl-\nvanian\nMath',
    x: raToX(1126915253),
    y: decToY(97549000),
    meta: false,
  },
};

const INITIAL_STAR_PATH = [
  ['icarus-away', 'a-terrible-morning', 'oil-paintings', 'gaia', 'enneagram'],
];

interface GaiaRequest {
  stars?: { name: string; x: number; y: number }[];
}

interface GaiaResponse {
  result: string;
  paths: string[][];
  positions: Record<string, Location>;
}

interface GaiaPrivateData {
  info: Record<string, number>;
  bg: string;
  solution?: GaiaResponse;
}

// utility functions
function decToY(dec: number) {
  return (HEIGHT * (DEC_TOP - dec)) / (DEC_TOP - DEC_BOT);
}

function yToDec(y: number) {
  return DEC_TOP - (y * (DEC_TOP - DEC_BOT)) / HEIGHT;
}

function raToX(ra: number) {
  return (WIDTH * (RA_LEFT - ra)) / (RA_LEFT - RA_RIGHT);
}

function xToRa(x: number) {
  return RA_LEFT - (x * (RA_LEFT - RA_RIGHT)) / WIDTH;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const data: GaiaPrivateData = puzzleData.private;
  const solnData = data.solution;

  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starImgRef = useRef<HTMLImageElement>(null);
  const uuid = useBrowserUuid();

  // initial state of stars
  const starStorage = useLocalStorage<StarMap>(`${SLUG}/stars`, INITIAL_STARS);
  const starPathStorage = useLocalStorage<string[][]>(
    `${SLUG}/starpath`,
    INITIAL_STAR_PATH
  );
  const [result, setResult] = useState<string>(
    !!solnData ? solnData.result : ''
  );
  const [location, setLocation] = useState<Location>({ ra: 0, dec: 0 });
  const [dragging, setDragging] = useState<string>('');
  const [dragOffset, setDragOffset] = useState<DragOffset>({ x: 0, y: 0 });
  const [solution, setSolution] = useState<Record<string, Location>>(
    !!solnData ? solnData.positions : {}
  );
  const [solutionPath, setSolutionPath] = useState<string[][]>(
    !!solnData ? solnData.paths : []
  );
  const [showEndState, setShowEndState] = useState<boolean>(false);

  // websocket
  const { sendJsonMessage, readyState } = useEventWebSocket({
    onJson: ({ data }) => {
      // server only responds on success
      const resp = data as GaiaResponse;

      starPathStorage.set(resp.paths);
      setResult(resp.result);
      setSolution(resp.positions);
      setSolutionPath(resp.paths);
      setShowEndState(true);

      // Snap to exact correct positions
      const solnPos: StarMap = JSON.parse(JSON.stringify(INITIAL_STARS));
      for (const k of Object.keys(solution)) {
        solnPos[k].x = raToX(solution[k].ra);
        solnPos[k].y = decToY(solution[k].dec);
      }
      starStorage.set(solnPos);

      draw();
    },
    key: SLUG,
    options: {
      uuid,
      slug: SLUG,
    },
  });

  // Initial render
  useEffect(() => {
    draw();
  });

  const reset = () => {
    starStorage.set(INITIAL_STARS);
    starPathStorage.set(INITIAL_STAR_PATH);
    setShowEndState(false);
    setDragging('');
    draw();
  };

  const resetToSoln = () => {
    if (Object.keys(solution).length == 0) return;
    const solnPos: StarMap = JSON.parse(JSON.stringify(INITIAL_STARS));
    for (const k of Object.keys(solution)) {
      solnPos[k].x = raToX(solution[k].ra);
      solnPos[k].y = decToY(solution[k].dec);
    }
    setShowEndState(true);
    setDragging('');
    starStorage.set(solnPos);
    starPathStorage.set(solutionPath);
    draw();
  };

  const drawPaths = (ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    for (const path of starPathStorage.get()) {
      const start = starStorage.get()[path[0]];
      ctx.beginPath();
      ctx.filter = 'blur(2px)';
      ctx.strokeStyle = '#3f3';
      ctx.moveTo(start.x, start.y);
      for (let i = 1; i < path.length; i++) {
        const star = starStorage.get()[path[i]];
        ctx.lineTo(star.x, star.y);
      }
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    ctx.restore();
  };

  const draw = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx == null) {
      return;
    }
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // draw star
    for (const obj of Object.values(starStorage.get())) {
      ctx.beginPath();
      const starImg = starImgRef.current as HTMLImageElement;
      let starSize = 4 * STAR_RADIUS;
      if (obj.meta) {
        starSize = 8 * STAR_RADIUS;
        ctx.filter = showEndState ? 'hue-rotate(60deg)' : 'hue-rotate(-60deg)';
        ctx.drawImage(
          starImg,
          obj.x - starSize / 2,
          obj.y - starSize / 2,
          starSize,
          starSize
        );
        ctx.filter = 'hue-rotate(0deg)';
      } else {
        ctx.drawImage(
          starImg,
          obj.x - starSize / 2,
          obj.y - starSize / 2,
          starSize,
          starSize
        );
      }

      // draw puzzle title
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.font = `18px ${merriweather.style.fontFamily}`;
      const lines = obj.display.split('\n');
      for (let i = 0; i < lines.length; i++) {
        ctx.fillText(
          lines[i],
          obj.x,
          obj.y -
            (lines.length - (obj.meta ? 0 : 1)) * LINE_HEIGHT -
            1.5 * LINE_HEIGHT +
            i * LINE_HEIGHT
        );
      }
    }
    drawPaths(ctx);
  };

  const isTouchEvent = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ): e is React.TouchEvent<HTMLCanvasElement> => {
    return e.type.startsWith('touch');
  };

  const getCoords = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    let clientX: number;
    let clientY: number;
    let rect: DOMRect;
    if (isTouchEvent(e)) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      rect = (e.touches[0].target as Element).getBoundingClientRect();
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
      rect = (e.target as Element).getBoundingClientRect();
    }
    return { clientX, clientY, rect };
  };

  const onCanvasMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    const { clientX, clientY, rect } = getCoords(e);
    const x = ((clientX - rect.left) / (rect.right - rect.left)) * WIDTH;
    const y = ((clientY - rect.top) / (rect.bottom - rect.top)) * HEIGHT;
    setLocation({ ra: Math.round(xToRa(x)), dec: Math.round(yToDec(y)) });

    // If we're in dragging mode, update the star's position
    if (dragging !== '') {
      // clear paths
      starPathStorage.set([]);

      // we need to parse-stringify, otherwise this won't actually get stored
      // because starStorage just does a shallow comparison
      const stars = JSON.parse(JSON.stringify(starStorage.get())) as StarMap;
      stars[dragging].x = x - dragOffset.x;
      stars[dragging].y = y - dragOffset.y;
      starStorage.set(stars);
      draw();
    }
  };

  const onCanvasMouseUp = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    setDragging('');

    // check results
    const data: GaiaRequest = {
      stars: Object.entries(starStorage.get())
        .filter(([key, value]) => !value.meta)
        .map(([key, value]) => ({
          name: key,
          x: value.x,
          y: value.y,
        })),
    };
    sendJsonMessage(data);
  };

  const onCanvasMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    // If we're in drag mode, don't do anything
    if (dragging !== '' || showEndState) {
      return;
    }
    const { clientX, clientY, rect } = getCoords(e);
    const x = ((clientX - rect.left) / (rect.right - rect.left)) * WIDTH;
    const y = ((clientY - rect.top) / (rect.bottom - rect.top)) * HEIGHT;

    // Otherwise, check for the clicked star and activate dragging
    for (const [starName, star] of Object.entries(starStorage.get())) {
      if (star.meta) {
        continue;
      }
      if (
        Math.pow(x - star.x, 2) + Math.pow(y - star.y, 2) <=
        Math.pow(STAR_RADIUS * 1.2, 2)
      ) {
        setDragging(starName);
        setDragOffset({ x: x - star.x, y: y - star.y });
        break;
      }
    }
  };

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You meet Gaia, who is gazing at the stars as if trying to catalogue
          them. "While I stay the same, everything around me keeps changing,"
          she says, motioning as if to show what she cannot quite properly put
          into words. "I don't like the way they're changing, though -- what if
          they changed like this instead? At that rate, imagine what this little
          one would look like in 10 million years!" as she gestures to a little
          fox sitting beside her.
        </FlavorText>
        <FlavorText>
          As sympathetic as you are to what Gaia is saying, you really need her
          support to find the shade you are looking for. What does she need?
        </FlavorText>
        <p className={cx(HIDDEN_CLASS)}>
          Note: See puzzle page for interactive component.
        </p>

        <div className={cx('canvas-container', NO_COPY_CLASS)}>
          <img src={data.bg} />
          {Object.keys(solution).length > 0 && (
            <button
              type="button"
              className="border text-white p-3 rounded absolute top-[2em] right-[7em]"
              onClick={resetToSoln}
            >
              To End State
            </button>
          )}
          <button
            type="button"
            className="border text-white p-3 rounded absolute top-[2em] right-[2em]"
            onClick={reset}
          >
            Reset
          </button>
          <span className="absolute top-[6em] right-[2em] text-white">
            {location.ra > 0 && location.dec > 0
              ? `(${location.ra}, ${location.dec})`
              : ''}
          </span>
          <canvas
            ref={canvasRef}
            width={WIDTH}
            height={HEIGHT}
            className="canvas"
            onMouseMove={onCanvasMouseMove}
            onMouseDown={onCanvasMouseDown}
            onMouseUp={onCanvasMouseUp}
            onTouchMove={onCanvasMouseMove}
            onTouchStart={onCanvasMouseDown}
            onTouchEnd={onCanvasMouseUp}
            onTouchCancel={onCanvasMouseUp}
          />
        </div>
        {result && showEndState && <p>{result}</p>}
        <img
          ref={starImgRef}
          className={cx(NO_COPY_CLASS, HIDDEN_CLASS)}
          src={star}
        />

        <Table className="my-4">
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  src={morningArrow}
                  alt=""
                  title=""
                  className="w-[400px]"
                />
              </td>
              <td className={cx(HIDDEN_CLASS)}>A Terrible Morning</td>
              <td className={cx(HIDDEN_CLASS)}>LBOOCRLOECBEIROCBNT</td>
              <td>
                {data.info['a-terrible-morning'] && (
                  <>
                    <span className={cx(HIDDEN_CLASS)}>'</span>={' '}
                    {data.info['a-terrible-morning']}
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  src={enneagramArrow}
                  alt=""
                  title=""
                  className="w-[400px]"
                />
              </td>
              <td className={cx(HIDDEN_CLASS)}>ENNEAGRAM</td>
              <td className={cx(HIDDEN_CLASS)}>LNSITNETIOSNSROSOLI</td>
              <td>
                {data.info['enneagram'] && (
                  <>
                    <span className={cx(HIDDEN_CLASS)}>'</span>={' '}
                    {data.info['enneagram']}
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  src={icarusArrow}
                  alt=""
                  title=""
                  className="w-[400px]"
                />
              </td>
              <td className={cx(HIDDEN_CLASS)}>Icarus Away!</td>
              <td className={cx(HIDDEN_CLASS)}>SIIEOTLBLLSLISTNBNI</td>
              <td>
                {data.info['icarus-away'] && (
                  <>
                    <span className={cx(HIDDEN_CLASS)}>'</span>={' '}
                    {data.info['icarus-away']}
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  src={jigsawArrow}
                  alt=""
                  title=""
                  className="w-[400px]"
                />
              </td>
              <td className={cx(HIDDEN_CLASS)}>Jigsaw Sudoku</td>
              <td className={cx(HIDDEN_CLASS)}>SRROBOTNEECLEEOORLL</td>
              <td>
                {data.info['jigsaw-sudoku'] && (
                  <>
                    <span className={cx(HIDDEN_CLASS)}>'</span>={' '}
                    {data.info['jigsaw-sudoku']}
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  src={oilArrow}
                  alt=""
                  title=""
                  className="w-[400px]"
                />
              </td>
              <td className={cx(HIDDEN_CLASS)}>Oil Paintings</td>
              <td className={cx(HIDDEN_CLASS)}>BLBIOTCOOLTRTROINLT</td>
              <td>
                {data.info['oil-paintings'] && (
                  <>
                    <span className={cx(HIDDEN_CLASS)}>'</span>={' '}
                    {data.info['oil-paintings']}
                  </>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  src={mathArrow}
                  alt=""
                  title=""
                  className="w-[400px]"
                />
              </td>
              <td className={cx(HIDDEN_CLASS)}>Transylvanian Math</td>
              <td className={cx(HIDDEN_CLASS)}>OOBBLBBRLRLEBILBRNI</td>
              <td>
                {data.info['transylvanian-math'] && (
                  <>
                    <span className={cx(HIDDEN_CLASS)}>'</span>={' '}
                    {data.info['transylvanian-math']}
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <style jsx global>{`
        .canvas-container {
          position: relative;
        }
        .canvas {
          position: absolute;
          top: 24.5%;
          left: -3.5%;
          width: 93%;
        }
        .resetButton {
          position: absolute;
          top: 4em;
          right: 4em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
