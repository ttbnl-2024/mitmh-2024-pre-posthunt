import cx from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'cubo';

// 3D projection code from Timwi

function sin(θ: number) {
  return Math.sin((θ * Math.PI) / 180);
}
function cos(θ: number) {
  return Math.cos((θ * Math.PI) / 180);
}
class Pt {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  plus(op: Pt) {
    return p(this.x + op.x, this.y + op.y, this.z + op.z);
  }
  minus(op: Pt) {
    return p(this.x - op.x, this.y - op.y, this.z - op.z);
  }
  times(op: Pt) {
    return p(
      this.y * op.z - this.z * op.y,
      this.z * op.x - this.x * op.z,
      this.x * op.y - this.y * op.x
    );
  }
  normalize() {
    let d = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    return p(this.x / d, this.y / d, this.z / d);
  }
  timesMatrix(matrix: number[]) {
    return p(
      matrix[0] * this.x + matrix[1] * this.y + matrix[2] * this.z,
      matrix[3] * this.x + matrix[4] * this.y + matrix[5] * this.z,
      matrix[6] * this.x + matrix[7] * this.y + matrix[8] * this.z
    );
  }
  projectTo2D(camPos: Pt, camMatrix: number[]) {
    let calc = this.minus(camPos).timesMatrix(camMatrix);
    return { x: (100 * calc.x) / calc.z, y: (-100 * calc.y) / calc.z };
  }
  rotateX(angle: number) {
    return p(
      this.x,
      this.y * cos(angle) - this.z * sin(angle),
      this.y * sin(angle) + this.z * cos(angle)
    );
  }
  rotateY(angle: number) {
    return p(
      this.x * cos(angle) - this.z * sin(angle),
      this.y,
      this.x * sin(angle) + this.z * cos(angle)
    );
  }
  rotateZ(angle: number) {
    return p(
      this.x * cos(angle) - this.y * sin(angle),
      this.x * sin(angle) + this.y * cos(angle),
      this.z
    );
  }
}
function p(x: number, y: number, z: number) {
  return new Pt(x, y, z);
}

interface Face {
  c: string;
  p: Pt[];
}
let faces: Face[] = /*#*/ [
  { c: 'x', p: [p(0, 3, 3), p(0, 0, 3), p(0, 0, 0), p(0, 3, 0)] },
  { c: 'x', p: [p(3, 3, 3), p(3, 0, 3), p(3, 0, 0), p(3, 3, 0)] },
  { c: 'x', p: [p(1, 3, 2), p(1, 2, 2), p(1, 2, 1), p(1, 3, 1)] },
  { c: 'x', p: [p(1, 1, 3), p(1, 0, 3), p(1, 0, 2), p(1, 1, 2)] },
  { c: 'x', p: [p(2, 3, 2), p(2, 2, 2), p(2, 2, 1), p(2, 3, 1)] },
  { c: 'x', p: [p(2, 1, 3), p(2, 0, 3), p(2, 0, 2), p(2, 1, 2)] },
  { c: 'y', p: [p(0, 3, 3), p(3, 3, 3), p(3, 3, 0), p(0, 3, 0)] },
  { c: 'y', p: [p(0, 0, 3), p(3, 0, 3), p(3, 0, 0), p(0, 0, 0)] },
  { c: 'y', p: [p(0, 2, 1), p(1, 2, 1), p(1, 2, 0), p(0, 2, 0)] },
  { c: 'y', p: [p(1, 2, 2), p(2, 2, 2), p(2, 2, 1), p(1, 2, 1)] },
  { c: 'y', p: [p(0, 1, 1), p(1, 1, 1), p(1, 1, 0), p(0, 1, 0)] },
  { c: 'y', p: [p(1, 1, 2), p(2, 1, 2), p(2, 1, 1), p(1, 1, 1)] },
  {
    c: 'z',
    p: [
      p(0, 3, 2),
      p(1, 3, 2),
      p(1, 2, 2),
      p(3, 2, 2),
      p(3, 1, 2),
      p(1, 1, 2),
      p(1, 0, 2),
      p(0, 0, 2),
    ],
  },
  { c: 'z', p: [p(0, 3, 3), p(3, 3, 3), p(3, 0, 3), p(0, 0, 3)] },
  {
    c: 'z',
    p: [
      p(0, 3, 1),
      p(1, 3, 1),
      p(1, 2, 1),
      p(3, 2, 1),
      p(3, 1, 1),
      p(1, 1, 1),
      p(1, 0, 1),
      p(0, 0, 1),
    ],
  },
  { c: 'z', p: [p(0, 3, 0), p(3, 3, 0), p(3, 0, 0), p(0, 0, 0)] },
]; /*##*/

function getCameraMatrix(cameraPosition: Pt, lookingAt: Pt) {
  let forward = lookingAt.minus(cameraPosition).normalize();
  let right = p(0, 1, 0).times(forward).normalize();
  let x = right;
  let y = forward.times(right).normalize();
  let z = forward;
  let matrix = [x.x, y.x, z.x, x.y, y.y, z.y, x.z, y.z, z.z];

  // Start of matrix inverse algorithm

  let augmented = Array(6 * 3)
    .fill(null)
    .map((_, ix) =>
      ix % 6 < 3
        ? matrix[(ix % 6) + ((ix / 6) | 0) * 3]
        : (ix % 6) - 3 === ((ix / 6) | 0)
        ? 1
        : 0
    );

  // Since we’re going kind of diagonal, ‘rc’ may refer to a row or a column, but we’re really processing one column at a time.
  // Each iteration of this loop turns column ‘rc’ into the corresponding column of an identity matrix.
  for (let rc = 0; rc < 3; rc++) {
    // Turn matrix[rc, rc] into 1 by multiplying the row by its inverse.
    // If this coefficient is currently 0, find a later row that we can swap this one with.
    // If there is no other such row, the matrix is not invertible.
    if (augmented[rc + 6 * rc] == 0) {
      let otherRowIx =
        Array(3 - 1 - rc)
          .fill(null)
          .map((_, c) => c + rc + 1)
          .filter((r) => augmented[rc + 6 * r] !== 0)[0] ?? -1;
      if (otherRowIx == -1) throw new Error('The matrix is not invertible.');
      for (let i = 0; i < 6; i++)
        [augmented[i + 6 * rc], augmented[i + 6 * otherRowIx]] = [
          augmented[i + 6 * otherRowIx],
          augmented[i + 6 * rc],
        ];
    }

    let div = augmented[rc + 6 * rc];
    for (let i = rc; i < 6; i++) augmented[i + 6 * rc] /= div;

    for (let row = 0; row < 3; row++)
      if (row != rc) {
        // Need to turn this index into 0 by subtracting a multiple of row ‘rc’ (where the relevant index is now 1)
        let mult = augmented[rc + 6 * row];
        for (let i = rc; i < 6; i++)
          augmented[i + 6 * row] -= mult * augmented[i + 6 * rc];
      }
  }

  return Array(3 * 3)
    .fill(null)
    .map((c, ix) => augmented[3 + (ix % 3) + 6 * ((ix / 3) | 0)]);
}

let labels: Pt[] = /*!*/ [
  p(0, 3, 3),
  p(1, 3, 3),
  p(2, 3, 3),
  p(0, 2, 3),
  p(1, 1, 3),
  p(2, 1, 3),
  p(0, 3, 2),
  p(2, 3, 2),
  p(0, 2, 2),
  p(0, 1, 2),
  p(0, 3, 1),
  p(1, 3, 1),
  p(2, 3, 1),
  p(0, 2, 1),
  p(0, 1, 1),
]; /*!!*/

interface Arrow {
  i: number;
  p: Pt;
}

let arrows = /*$*/ [
  { i: 7, p: p(1, 1, 3) },
  { i: 7, p: p(1, 2, 1) },
  { i: 5, p: p(0, 3, 2) },
  { i: 6, p: p(1, 2, 2) },
  { i: 8, p: p(2, 3, 2) },
  { i: 7, p: p(2, 1, 3) },
  { i: 5, p: p(0, 1, 1) },
  { i: 4, p: p(2, 3, 1) },
  { i: 5, p: p(0, 1, 2) },
  { i: 4, p: p(2, 1, 2) },
  { i: 2, p: p(2, 3, 3) },
  { i: 2, p: p(2, 2, 3) },
  { i: 6, p: p(1, 3, 3) },
  { i: 3, p: p(1, 1, 2) },
  { i: 3, p: p(0, 2, 1) },
  { i: 5, p: p(1, 1, 1) },
  { i: 3, p: p(0, 2, 3) },
  { i: 3, p: p(1, 3, 1) },
  { i: 9, p: p(1, 3, 2) },
  { i: 1, p: p(0, 3, 3) },
  { i: 9, p: p(0, 3, 1) },
  { i: 2, p: p(0, 1, 3) },
  { i: 3, p: p(0, 2, 2) },
  { i: 2, p: p(2, 1, 1) },
  { i: 14, p: p(2, 2, 1) },
  { i: 14, p: p(2, 2, 2) },
  { i: 2, p: p(1, 2, 3) },
]; /*$$*/

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [cameraPosition, setCameraPosition] = useState<Pt>(p(0, 0, -6));

  const animRequestRef = useRef<number>();
  const pauseRef = useRef<HTMLInputElement>(null);

  let center = p(1.5, 1.5, 1.5);
  let timeFactor = 1 / 100;

  const animate = (time: number) => {
    if (!pauseRef.current?.checked) {
      setCameraPosition(
        p(0, 0, -6)
          .rotateX(5 * sin(time * timeFactor) + 25)
          .rotateY(-25 * cos(time * timeFactor))
          .plus(center)
      );
    }
    animRequestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animRequestRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRequestRef.current !== undefined) {
        cancelAnimationFrame(animRequestRef.current);
      }
    };
  }, []);

  let cameraMatrix = getCameraMatrix(cameraPosition, center);

  let cube = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-45 -40 95 90"
      fontSize={4}
      fill="black"
      stroke="#444"
      strokeWidth=".05"
      strokeLinejoin="round"
      id="cube"
      className={cx(NO_COPY_CLASS)}
    >
      <style jsx>
        {`
          .x {
            fill: black;
            fill-opacity: 0.2;
          }
          .y {
            fill: black;
            fill-opacity: 0.1;
          }
          .z {
            fill: black;
            fill-opacity: 0.05;
          }
          .v {
            opacity: 0.3;
          }
          .v:hover {
            opacity: 1;
          }
          .v:hover path {
            stroke-width: 1;
          }
          .h {
            opacity: 0;
          }
          .v:hover path.h {
            opacity: 1;
            stroke-width: 0.5;
            stroke-dasharray: 1 1;
            stroke: hsl(220, 70%, 50%);
          }
        `}
      </style>
      {faces.map((face, ix) => {
        let pts = face.p
          .map((p) => p.projectTo2D(cameraPosition, cameraMatrix))
          .map((p) => `${p.x} ${p.y}`)
          .join(' ');
        return <path className={face.c} key={`f-${ix}`} d={`M${pts}z`} />;
      })}
      {labels.map((label, ix) => {
        let pt = label
          .plus(p(0.1, -0.25, -0.1))
          .projectTo2D(cameraPosition, cameraMatrix);
        return (
          <text key={`l-${ix}`} x={pt.x} y={pt.y}>
            {ix + 1}
          </text>
        );
      })}
      <g
        textAnchor="middle"
        fontSize="2.3"
        stroke="hsl(215, 80%, 30%)"
        strokeOpacity=".5"
        strokeWidth=".1"
        fill="black"
      >
        {arrows.map((arrow, ix) => {
          let pt1 = arrow.p
            .plus(p(0.5, -0.5, -0.5))
            .projectTo2D(cameraPosition, cameraMatrix);
          let pt2 = arrow.p;
          let lines: string[] = [];
          function c(k) {
            return p(
              k & 1 ? 0.95 : 0.05,
              k & 2 ? -0.95 : -0.05,
              k & 4 ? -0.95 : -0.05
            );
          }
          for (let i = 0; i < 8; i++)
            for (let j = i + 1; j < 8; j++)
              if (
                ((i & 1) === (j & 1) ? 1 : 0) +
                  ((i & 2) === (j & 2) ? 1 : 0) +
                  ((i & 4) === (j & 4) ? 1 : 0) ===
                2
              ) {
                let c1 = c(i)
                    .plus(pt2)
                    .projectTo2D(cameraPosition, cameraMatrix),
                  c2 = c(j).plus(pt2).projectTo2D(cameraPosition, cameraMatrix);
                lines.push(`M${c1.x} ${c1.y} ${c2.x} ${c2.y}`);
              }

          return (
            <g
              className="v"
              key={`g-${ix}`}
              textAnchor="middle"
              fontSize="2.3"
              stroke="hsl(215, 80%, 30%)"
              strokeOpacity=".5"
              strokeWidth=".1"
              fill="black"
            >
              <path d={`M45 ${-34 + 3 * ix} ${pt1.x} ${pt1.y}`} />
              <circle fill="#eee" cx="45" cy={`${-34 + 3 * ix}`} r="1.2" />
              <text x="45" y={`${-33.25 + 3 * ix}`} stroke="none">
                {arrow.i}
              </text>
              <path d={lines.join('')} className="h" />
            </g>
          );
        })}
      </g>
    </svg>
  );

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>Preencha esta grade em inglês.</FlavorText>
        {cube}
        <div className={cx(NO_COPY_CLASS, 'flex flex-row justify-center')}>
          <input id="pause" type="checkbox" ref={pauseRef} />
          <label htmlFor="pause" className="pl-2">
            <b>Pause</b>
          </label>
        </div>
        <br className={cx(NO_COPY_CLASS)} />
        <p className={cx(HIDDEN_CLASS)}>See puzzle page for image.</p>
        <h4>Across</h4>
        <ol>
          <li value="1">Female progenitors; food energy unit (abbr.)</li>
          <li value="4">Best; preceding our calendar (abbr.)</li>
          <li value="9">Golf score; students not about to graduate (abbr.)</li>
          <li value="10">Film studio (abbr.); Tic-___-toe</li>
          <li value="11">
            German soccer body (abbr.); software “glue” (abbr.)
          </li>
          <li value="14">Before (prefix); texting (abbr.)</li>
          <li value="15">Body of water; atlas page</li>
        </ol>
        <br />
        <h4>Down</h4>
        <ol>
          <li value="1">Yoga surface; defenceman Bobby</li>
          <li value="2">Collaboratively-written foundation; dude</li>
          <li value="3">
            Intoxicating substance (abbr.); in particular (abbr.)
          </li>
          <li value="7">
            US Republicans (abbr.); “One man, one engine” manufacturer (abbr.)
          </li>
          <li value="8">Each; pouch</li>
          <li value="12">Sweetheart; science podcaster Harris</li>
          <li value="13">Uninhabited island east of Ellesmere; plant goo</li>
        </ol>
        <br />
        <h4>Toward</h4>
        <ol>
          <li value="2">Display preserver (file ext.); US league</li>
          <li value="3">Mountain peak; prefix meaning "over"</li>
          <li value="5">Fixed storage (abbr.); Scottish topper</li>
          <li value="6">Resort; maximum</li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
