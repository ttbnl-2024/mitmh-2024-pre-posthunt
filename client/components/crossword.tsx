import cx from 'classnames';
import CSS from 'csstype';
import React from 'react';

type Cell = number | string | '!' | '';

export const _ = '';
export const X: Cell = '!'; // black
export const Y: Cell = '~'; // cyan
export const Z: Cell = ' '; // lightgray
export enum Colors {
  C1 = 'red',
  C2 = 'orange',
  C3 = 'yellow',
  C4 = 'palegreen',
  C5 = 'cyan',
  C6 = 'plum',
  C7 = 'black',
  C8 = 'CornflowerBlue',
  C9 = 'lightgray',
  C10 = 'indianred',
  C11 = 'Plum',
  TheHermitCrabBlue = '#cfe2f3',
  TheHermitCrabYellow = '#f9cb9c',
}
export enum Borders {
  L = 'border-left',
  T = 'border-top',
  TL = 'border-topleft',
}

interface Props {
  data: Cell[][];
  fill?: (Cell | React.ReactNode)[][];
  shading?: (Colors | '')[][];
  borders?: (Borders | '')[][];
  appendCols?: Cell[]; // Additional columns to prepend to the end without borders.
  emptycells?: boolean;
  cellWidth?: number;
  cellHeight?: number;
  cellClass?: string;
  tableClass?: string;
  // If true and a cell contains a `/`, will split clue going across/down.
  rebus?: boolean;
  gridColor?: string;
  optimizeForPrint?: boolean;
}

const Crossword: React.FunctionComponent<Props> = ({
  data,
  fill = null,
  shading = null,
  borders = null, // Most likely used with barred=true
  appendCols = [],
  emptycells = false,
  cellWidth = 30,
  cellHeight = 30,
  cellClass = '',
  tableClass = '',
  rebus = false,
  gridColor = 'black',
  optimizeForPrint = true,
}) => (
  <>
    <table
      className={cx(tableClass, 'text-center', 'crossword', {
        barred: !!borders,
      })}
      cellSpacing={0}
    >
      <tbody>
        {data.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((cell, j) => {
              const value = fill ? fill[i][j] : '';
              const classes: string[] = [];
              const styles: CSS.Properties = {};
              if (cell === X) {
                if (emptycells) {
                  classes.push('empty');
                } else {
                  classes.push('filled');
                }
              } else {
                const barred = !!borders;
                const solidBorder = `${barred ? 3 : 1}px solid ${gridColor}`;

                if (!barred) {
                  styles.border = solidBorder;
                } else {
                  // Manually specify borders based on edge or value.
                  styles.border = '1px solid lightgrey';

                  const borderValue = borders?.[i][j];
                  if (
                    borderValue === Borders.T ||
                    borderValue === Borders.TL ||
                    i === 0
                  ) {
                    styles.borderTop = solidBorder;
                  }
                  if (
                    borderValue === Borders.L ||
                    borderValue === Borders.TL ||
                    j === 0
                  ) {
                    styles.borderLeft = solidBorder;
                  }
                  if (i === data.length - 1) {
                    styles.borderBottom = solidBorder;
                  }
                  if (j === row.length - 1) {
                    styles.borderRight = solidBorder;
                  }
                }
              }
              if (typeof cell == 'string') {
                if (cell.includes(Z)) {
                  styles.backgroundColor = 'lightgray';
                }
                if (cell.includes(Y)) {
                  styles.backgroundColor = 'cyan';
                }
              }
              if (shading?.[i][j]) {
                styles.backgroundColor = shading[i][j];
              }

              if (typeof cell === 'string') {
                cell = cell.replace(new RegExp('[' + X + Y + Z + ']', 'g'), '');
              }

              // Split by '/' for rebuses
              const isLongCell = typeof value === 'string' && value.length > 1;
              const isRebusCell = rebus && isLongCell;
              const [across, down] = isRebusCell
                ? value.split('/')
                : [value, null];
              const isWide =
                isRebusCell && (across as string).length > (down?.length ?? 0);

              // I don't understand the rebus styling so this is a hack for multis
              const isWideNonRebus = !rebus && isLongCell;

              return (
                <td
                  key={`cell-${i}-${j}`}
                  className={cx(cellClass, classes.join(' '))}
                  style={styles}
                  data-skip-inline-borders
                >
                  {<div className="clue">{cell}</div>}
                  <div
                    className={cx('value', {
                      rebus: isRebusCell,
                      wide: isWide,
                      'multi-letter': isWideNonRebus,
                    })}
                  >
                    {across}
                  </div>
                  {down && <div className="value rebus">{down}</div>}
                </td>
              );
            })}
            {appendCols[i] && (
              <td className="append text-left">{appendCols[i]}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>

    <style jsx>{`
      table.crossword {
        border-collapse: collapse;
        margin-left: auto;
        margin-right: auto;
        outline: 2px solid ${gridColor};
        page-break-inside: avoid;
      }

      td:not(.filled) {
        background-color: #fff;
      }

      td.filled {
        background-color: ${gridColor};
        border: 1px solid ${gridColor};
      }

      td.append {
        padding-left: 40px;
      }

      td > .clue {
        position: absolute;
        width: min-content;
        height: 33%;
        text-align: left;
        color: black;
        top: clamp(-3px, -1px - 0.03vw, -1px);
        left: clamp(0px, 0.3vw, 2px);
        font-size: clamp(4px, 1.5vw, 10px);
      }

      td > .value {
        color: black;
        position: absolute;
        width: 100%;
        height: 67%;
        top: clamp(-27%, -84px + 27.2vw, 18%);
        left: 0;
        font-size: clamp(8px, 2.5vw, 16px);
      }

      td > .multi-letter {
        top: clamp(-27%, -84px + 27.2vw, 30%);
        font-size: clamp(5px, 1.4vw, 10px);
      }

      td > .rebus {
        font-size: 9px;
        line-height: 10px;
        left: 30%;
      }
      td > .rebus:first-child {
        top: 33%;
      }
      td > .rebus.wide {
        top: 50%;
        left: 0;
      }
      td > .rebus:last-child {
        top: 28%;
        transform: translateY(-50%);
        writing-mode: vertical-lr;
        font-size: 8px;
        text-orientation: upright;
        letter-spacing: -8px;
      }
      td > .rebus.wide + .rebus {
        left: 33%;
      }

      @media print {
        td {
          /* Ensure that filled cells are black even when printed */
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    `}</style>
    <style jsx>{`
      td {
        /* firefox is dumb af */
        background-clip: padding-box;
        height: min(${cellHeight}px, ${80 / data[0].length}vw);
        width: min(${cellWidth}px, ${80 / data[0].length}vw);
        position: relative;
      }

      @media print {
        td.filled {
          /* Use diagonal lines of black to save ink */
          background-image: ${optimizeForPrint
            ? `linear-gradient(135deg, ${gridColor} 10%, #fff 10%, #fff 50%, ${gridColor} 50%, ${gridColor} 60%, #fff 60%, #fff 100%)`
            : 'none'};
          background-size: 7.07px 7.07px;
        }
      }
    `}</style>
  </>
);

export default Crossword;
