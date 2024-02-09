import cx from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';

import useDynamicEncrypted from 'utils/encrypted';
import { useLocalStorage } from 'utils/storage';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import Crossword, { X } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import Grid, { _ } from 'components/grid';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

import a0 from 'assets/puzzles/a-trip-down-memory-lane/a0.png';
import a1 from 'assets/puzzles/a-trip-down-memory-lane/a1.png';
import a2 from 'assets/puzzles/a-trip-down-memory-lane/a2.png';
import a3 from 'assets/puzzles/a-trip-down-memory-lane/a3.png';
import a4 from 'assets/puzzles/a-trip-down-memory-lane/a4.png';
import a5 from 'assets/puzzles/a-trip-down-memory-lane/a5.png';
import a6 from 'assets/puzzles/a-trip-down-memory-lane/a6.png';
import p1image from 'assets/puzzles/a-trip-down-memory-lane/p1_0.png';
import p2pdf from 'assets/puzzles/a-trip-down-memory-lane/p2.pdf';
import p5mp3 from 'assets/puzzles/a-trip-down-memory-lane/p5.mp3';
import p7_0 from 'assets/puzzles/a-trip-down-memory-lane/p7_0.png';
import p7_1 from 'assets/puzzles/a-trip-down-memory-lane/p7_1.png';

const SLUG = 'a-trip-down-memory-lane';

// prettier-ignore
const p3grid = (() => {
  const a = <InlineTwemoji>💪</InlineTwemoji>;
  const b = <InlineTwemoji>🏀</InlineTwemoji>;
  const c = <InlineTwemoji>🧗</InlineTwemoji>;
  const d = <InlineTwemoji>⛸️</InlineTwemoji>;
  const e = <InlineTwemoji>🥊</InlineTwemoji>;
  const f = <InlineTwemoji>🏄</InlineTwemoji>;
  const g = <InlineTwemoji>🎱</InlineTwemoji>;
  const h = <InlineTwemoji>🏈</InlineTwemoji>;
  const i = <InlineTwemoji>⚾</InlineTwemoji>;
  const j = <InlineTwemoji>🏇</InlineTwemoji>;
  const k = <InlineTwemoji>🏍️</InlineTwemoji>;
  const l = <InlineTwemoji>🏎️</InlineTwemoji>;
  const m = <InlineTwemoji>🏃</InlineTwemoji>;
  const x = ' ';

  const smaller = (year:number) => <span className="text-[60%]">{year}</span>;

  // prettier-ignore
  return [
    [a,a,_,_,_,_,_,_,_,_,_,         x,smaller(1977)],
    [b,_,b,_,_,_,_,_,_,_,           x,smaller(2020)],
    [_,_,_,_,_,_,_,c,_,c,_,         x,smaller(1993)],
    [_,_,_,_,d,_,_,_,_,_,d,_,       x,smaller(1993)],
    [_,_,_,_,e,e,_,_,               x,smaller(1982)],
    [_,_,_,f,f,_,_,_,_,_,           x,smaller(1991)],
    [_,_,_,_,g,_,_,g,_,_,_,_,_,_,_, x,smaller(1986)],
    [_,_,h,_,_,_,_,h,_,_,_,_,       x,smaller(2009)],
    [i,i,_,_,_,_,_,_,_,_,           x,smaller(1988)],
    [_,_,_,_,j,_,_,_,_,_,_,_,j,     x,smaller(2019)],
    [_,_,k,_,_,_,_,_,k,_,_,         x,smaller(1971)],
    [_,_,_,_,l,_,l,_,_,_,_,_,       x,smaller(2019)],
    [_,_,_,m,_,_,m,_,_,_,_,_,_,_,   x,smaller(1981)],
  ];
})();
const p3gridNoBorder = p3grid.map((row) =>
  row.map((_, i) => i >= row.length - 2)
);

// prettier-ignore
const p6grid = [
  [1,  _,  2,  _,  3,  _,  4,  _,  5,  X,  6,  _,  7,  _,  8 ],
  [_,  X,  _,  X,  _,  X,  _,  X,  9,  _,  _,  X,  _,  X,  _ ],
  [10, _,  _,  _,  _,  _,  _,  11, _,  X,  12, _,  _,  _,  _ ],
  [_,  X,  _,  X,  _,  X,  X,  13, _,  _,  _,  X,  _,  X,  _ ],
  [14, _,  _,  X,  15, _,  16, _,  _,  X,  17, _,  _,  _,  _ ],
  [X,  X,  _,  X,  _,  X,  18, _,  _,  X,  X,  X,  _,  X,  _ ],
  [19, 20, _,  21, _,  22, _,  X,  23, 24, 25, 26, _,  27, X ],
  [X,  _,  X,  28, _,  _,  X,  X,  X,  29, _,  _,  X,  _,  X ],
  [X,  30, 31, _,  _,  _,  32, X,  33, _,  _,  _,  34, _,  _ ],
  [35, X,  _,  X,  X,  X,  36, 37, _,  X,  _,  X,  _,  X,  X ],
  [38, _,  _,  _,  39, X,  40, _,  _,  _,  _,  X,  41, _,  42],
  [_,  X,  _,  X,  43, _,  _,  _,  X,  X,  _,  X,  _,  X,  _ ],
  [44, _,  _,  _,  _,  X,  45, _,  46, _,  _,  _,  _,  _,  _ ],
  [_,  X,  _,  X,  47, _,  _,  X,  _,  X,  _,  X,  _,  X,  _ ],
  [48, _,  _,  _,  _,  X,  49, _,  _,  _,  _,  _,  _,  _,  _ ],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);

  const interactionAccomplished = function (puzzle?: number) {
    return (
      (puzzle == 1 && puzzleData.private.p1done) ||
      (puzzleData.interactions ?? []).some(
        (interaction) =>
          (puzzle == null ||
            interaction.interactionSlug ===
              `a-trip-down-memory-lane-${puzzle}`) &&
          interaction.accomplished
      )
    );
  };

  // Redefine the types since they exist in encrypted files
  interface AnswerParams {
    setAlmostAnswerResponse: { set: (v: string) => void };
  }
  interface AnswerCheckerParams {
    puzzleNumber: number;
    almostAnswersResponseStorage: {
      get: () => string;
      set: (value: string) => void;
    }[];
    actualAnswersStorage: { get: () => string; set: (value: string) => void }[];
    updateActualAnswersRender: () => void;
  }

  const AnswerChecker = useDynamicEncrypted<AnswerCheckerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_answer-checker`,
    { enabled: interactionAccomplished() || puzzleData.private.p1done }
  );
  const P1Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p1-answer`,
    { enabled: puzzleData.private.p1done }
  );
  const P2Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p2-answer`,
    { enabled: interactionAccomplished(2) }
  );
  const P3Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p3-answer`,
    { enabled: interactionAccomplished(3) }
  );
  const P4Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p4-answer`,
    { enabled: interactionAccomplished(4) }
  );
  const P5Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p5-answer`,
    { enabled: interactionAccomplished(5) }
  );
  const P6Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p6-answer`,
    { enabled: interactionAccomplished(6) }
  );
  const P7Answer = useDynamicEncrypted<AnswerParams>(
    `puzzles/${SLUG}/a-trip-down-memory-lane_p7-answer`,
    { enabled: interactionAccomplished(7) }
  );

  const almostAnswersResponses = [
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p1-almost-answer-response`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p2-almost-answer-response`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p3-almost-answer-response`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p4-almost-answer-response`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p5-almost-answer-response`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p6-almost-answer-response`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p7-almost-answer-response`,
      ''
    ),
  ];

  const actualAnswers = [
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p1-actual-answer`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p2-actual-answer`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p3-actual-answer`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p4-actual-answer`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p5-actual-answer`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p6-actual-answer`,
      ''
    ),
    useLocalStorage<string>(
      `${SLUG}/a-trip-down-memory-lane_p7-actual-answer`,
      ''
    ),
  ];

  // Use this for synchronization between storage and ui -- otherwise
  // react complains that server and client renders are different
  const actualAnswersRender = [
    useState<string>(''),
    useState<string>(''),
    useState<string>(''),
    useState<string>(''),
    useState<string>(''),
    useState<string>(''),
    useState<string>(''),
  ];

  const updateActualAnswersRender = () => {
    for (let i = 0; i < 7; i++) {
      actualAnswersRender[i][1](actualAnswers[i].get());
    }
  };

  useEffect(updateActualAnswersRender, []);

  const getAnswerChecker = (
    puzzleNumber: number,
    alternateConditions = false
  ) => {
    if (alternateConditions || interactionAccomplished(puzzleNumber)) {
      return (
        <div className="absolute top-[0px] right-[0px]">
          Answer:{' '}
          <Monospace>
            {puzzleNumber === 1 && puzzleData.private.p1done && (
              <P1Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
            {puzzleNumber === 2 && interactionAccomplished(2) && (
              <P2Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
            {puzzleNumber === 3 && interactionAccomplished(3) && (
              <P3Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
            {puzzleNumber === 4 && interactionAccomplished(4) && (
              <P4Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
            {puzzleNumber === 5 && interactionAccomplished(5) && (
              <P5Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
            {puzzleNumber === 6 && interactionAccomplished(6) && (
              <P6Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
            {puzzleNumber === 7 && interactionAccomplished(7) && (
              <P7Answer
                setAlmostAnswerResponse={
                  almostAnswersResponses[puzzleNumber - 1]
                }
              />
            )}
          </Monospace>
          {interactionAccomplished(puzzleNumber) && (
            <AnswerChecker
              puzzleNumber={puzzleNumber}
              almostAnswersResponseStorage={almostAnswersResponses}
              actualAnswersStorage={actualAnswers}
              updateActualAnswersRender={updateActualAnswersRender}
            />
          )}
        </div>
      );
    }
  };
  return (
    <Puzzle
      puzzleData={puzzleData}
      copyData={{ ref, config: { preserveStyles: true } }}
    >
      <div ref={ref}>
        <FlavorText>
          There is something really fishy about this place. An important
          mystery-hunting tool is missing. Perhaps while searching down Memory
          Lane, you could help Mnemosyne and her forgetful friends pair up and
          look for their forgotten things together!
        </FlavorText>
        <InfoIcon>
          This puzzle is best viewed on a desktop or laptop computer. Certain
          elements may not render correctly in a mobile browser.
        </InfoIcon>
        <hr className="my-4" />
        <div className="bg-gradient-to-b from-white to-[#000000b0] ">
          <Table noBorder={true} className="intro-table table-fixed w-full">
            <tbody>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "These entertaining underdog redemption tales underwent a
                    strict screening process."
                  </div>
                </td>
                <td className="w-[160px]">
                  <a target="_blank" href={a0}>
                    <SheetableImage
                      alt="a person"
                      src={a0}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[2][0]}</td>
              </tr>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "Transcription might help even the playing field, but beyond
                    that, everything else is fair game."
                  </div>
                </td>
                <td>
                  <a target="_blank" href={a1}>
                    <SheetableImage
                      alt="a person"
                      src={a1}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[4][0]}</td>
              </tr>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "Reflecting on the Queen of Crime’s latest novel, I think
                    the new twist is a logical killer, although those shifty
                    characters deserved a better ending."
                  </div>
                </td>
                <td>
                  <a target="_blank" href={a2}>
                    <SheetableImage
                      alt="a person"
                      src={a2}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[6][0]}</td>
              </tr>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "Uh oh! I appear to be lost. Might you be able to point me
                    in the right direction?"
                  </div>
                </td>
                <td>
                  <a target="_blank" href={a3}>
                    <SheetableImage
                      alt="a person"
                      src={a3}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[0][0]}</td>
              </tr>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "Hmmm... looks more British than American. I wonder though,
                    if perhaps we could get some better lighting in here?"
                  </div>
                </td>
                <td>
                  <a target="_blank" href={a4}>
                    <SheetableImage
                      alt="a person"
                      src={a4}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[5][0]}</td>
              </tr>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "This textbook might make for a dry read, although I suspect
                    it has little to do with chemistry. Did you know KJ 1611 (+)
                    standard material was originally manufactured from 80
                    distinct elements?"
                  </div>
                </td>
                <td>
                  <a target="_blank" href={a5}>
                    <SheetableImage
                      alt="a person"
                      src={a5}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[3][0]}</td>
              </tr>
              <tr>
                <td>
                  <div className="speech-bubble">
                    "Finally, a puzzle where I don't have to remember or
                    research a bunch of useless facts!"
                  </div>
                </td>
                <td>
                  <a target="_blank" href={a6}>
                    <SheetableImage
                      alt="a person"
                      src={a6}
                      className="rounded-full w-[96px]"
                    />
                  </a>
                </td>
                <td>{actualAnswersRender[1][0]}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* puzzle 1 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>No🐟th 🐟ast</h3>
          {getAnswerChecker(1, puzzleData.private.p1done)}
        </div>
        <p>
          Can You Remember Big Brown Rabbits Often Reverse Great Big Vocal
          Groans When Gingerly Slapped?
        </p>
        <p>
          <a target="_blank" href={p1image}>
            <SheetableImage
              alt="map of forgotten things"
              src={p1image}
              className="mx-auto w-[400px]"
            />
          </a>
        </p>
        {/* puzzle 2 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>Min🐟 Games</h3>
          {getAnswerChecker(2)}
        </div>
        <p>
          Can You Remember Mary's Virgin Explanation Pairs Joseph Suspecting
          Upstairs Neighbours?
        </p>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click <a href={p2pdf}>here</a> to download the PDF file. PDF content
          is available in copy-to-sheet.
        </InfoIcon>
        <iframe
          src={p2pdf + '#zoom=Fit'}
          className={cx(NO_COPY_CLASS, 'w-full p2-pdf')}
        ></iframe>
        <div className={cx(HIDDEN_CLASS)}>
          <Table>
            <tbody>
              <tr>
                <td>*</td>
                <td>E</td>
                <td>T</td>
                <td>T</td>
                <td>E</td>
              </tr>
              <tr>
                <td>L</td>
                <td>G</td>
                <td>N</td>
                <td>I</td>
                <td>S</td>
              </tr>
              <tr>
                <td>S</td>
                <td>I</td>
                <td>M</td>
                <td>*</td>
                <td>H</td>
              </tr>
              <tr>
                <td>T</td>
                <td>D</td>
                <td>N</td>
                <td>I</td>
                <td>F</td>
              </tr>
            </tbody>
          </Table>
          <p>
            1<br />
            11
            <br />
            21
            <br />
            1211
            <br />
            111221
            <br />
            ******
            <br />
            (Take the first digit of the final row)
          </p>
          <p>1, 3, 6, 10, *, 21</p>
          <p>B C D G J O P Q *</p>
          <Table>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>12</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>1</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td>10</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>9</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>3</td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>*</td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td>7</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </Table>
          <p>J F M * M J J</p>
          <p>
            If the year 1998 becomes 27, and the year 2005 becomes 7, what does
            the year 1904 become?
          </p>
          <p>Z * T T F F S S</p>
          <p>Y Y H L Y E Y T *</p>
          <p>
            <i>Refer to the PDF for this puzzle.</i>
          </p>
          <p>L S I H * A H D T E</p>
          <p>
            <i>Refer to the PDF for this puzzle.</i>
          </p>
          <p>6, 8, 10, 12, *, 16</p>
          <p>* E F H I K L M N</p>
          <p>2, 2, 4, *, 48, 240</p>
          <p>* M T W T F S</p>
          <p>A H I M * T U V W</p>
          <p>
            I appear once in a month, twice in a millennium and three times in
            nearly any given day.
          </p>
          <p>
            If TD always gets BE and SD always gets SR, that means FT will
            always get *D!
          </p>
        </div>
        <br />
        {/* puzzle 3 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>Flying 🐟igh</h3>
          {getAnswerChecker(3)}
        </div>

        <p>
          Can You Remember Some Lovers Starting Positions That They Couldn't
          Handle?
        </p>
        <Grid data={p3grid} noBorder={p3gridNoBorder} className="p3-grid" />
        <br />
        {/* puzzle 4 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>R🐟d Lette🐟</h3>
          {getAnswerChecker(4)}
        </div>

        <p>
          Can You Remember How I Need A Drink, Alcoholic Of Course, After The
          Consonant Lectures Involving Quantum Mechanics?
        </p>
        <Table className={cx(NO_COPY_CLASS, "p4-table table-fixed w-full")}>
          <tbody>
            <tr>
              <td>
                <span className="text-[125%] font-bold">
                  Ps<sup>+</sup>
                </span>
                <br />
                23.4.7
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Mk<sup>+</sup>
                </span>
                <br />
                3.8.6
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Ro<sup>+</sup>
                </span>
                <br />
                6.19.22
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Jg<sup>+</sup>
                </span>
                <br />
                21.3.7
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Ge<sup>+</sup>
                </span>
                <br />
                32.15.10
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  I<sup>+</sup>
                </span>
                <br />
                7.8.3
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Ac<sup>+</sup>
                </span>
                <br />
                28.7.4
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  K<sup>1+</sup>
                </span>
                <br />
                18.25.16
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Ac<sup>+</sup>
                </span>
                <br />
                22.27.15
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Re<sup>+</sup>
                </span>
                <br />
                21.6.18
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Mt<sup>+</sup>
                </span>
                <br />
                13.56.3
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-[120%] font-bold">
                  K<sup>1+</sup>
                </span>
                <br />
                1.51.5
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Le<sup>+</sup>
                </span>
                <br />
                18.3.8
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Lu<sup>+</sup>
                </span>
                <br />
                11.14.7
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Ps<sup>+</sup>
                </span>
                <br />
                105.15.5
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Pr<sup>+</sup>
                </span>
                <br />
                23.32.8
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Sa<sup>2+</sup>
                </span>
                <br />
                15.27.8
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Jb<sup>+</sup>
                </span>
                <br />
                4.10.2
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Jb<sup>+</sup>
                </span>
                <br />
                16.17.4
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Js<sup>+</sup>
                </span>
                <br />
                4.19.23
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Pr<sup>+</sup>
                </span>
                <br />
                21.3.13
              </td>
              <td>
                <span className="text-[120%] font-bold">
                  Tt<sup>+</sup>
                </span>
                <br />
                1.14.15
              </td>
            </tr>
          </tbody>
        </Table>
        <Table className={cx(HIDDEN_CLASS, "p4-table table-fixed w-full")}>
          <tbody>
            <tr>
              <td className="text-[120%] font-bold">Ps⁺</td>
              <td className="text-[120%] font-bold">Mk⁺</td>
              <td className="text-[120%] font-bold">Ro⁺</td>
              <td className="text-[120%] font-bold">Jg⁺</td>
              <td className="text-[120%] font-bold">Ge⁺</td>
              <td className="text-[120%] font-bold">I⁺</td>
              <td className="text-[120%] font-bold">Ac⁺</td>
              <td className="text-[120%] font-bold">K¹⁺</td>
              <td className="text-[120%] font-bold">Ac⁺</td>
              <td className="text-[120%] font-bold">Re⁺</td>
              <td className="text-[120%] font-bold">Mt⁺</td>
            </tr>
            <tr>
              <td>23.4.7</td>
              <td>3.8.6</td>
              <td>6.19.22</td>
              <td>21.3.7</td>
              <td>32.15.10</td>
              <td>7.8.3</td>
              <td>28.7.4</td>
              <td>18.25.16</td>
              <td>22.27.15</td>
              <td>21.6.18</td>
              <td>13.56.3</td>
            </tr>
            <tr>
              <td className="text-[120%] font-bold">K¹⁺</td>
              <td className="text-[120%] font-bold">Le⁺</td>
              <td className="text-[120%] font-bold">Lu⁺</td>
              <td className="text-[120%] font-bold">Ps⁺</td>
              <td className="text-[120%] font-bold">Pr⁺</td>
              <td className="text-[120%] font-bold">Sa²⁺</td>
              <td className="text-[120%] font-bold">Jb⁺</td>
              <td className="text-[120%] font-bold">Jb⁺</td>
              <td className="text-[120%] font-bold">Js⁺</td>
              <td className="text-[120%] font-bold">Pr⁺</td>
              <td className="text-[120%] font-bold">Tt⁺</td>
            </tr>
            <tr>
              <td>1.51.5</td>
              <td>18.3.8</td>
              <td>11.14.7</td>
              <td>105.15.5</td>
              <td>23.32.8</td>
              <td>15.27.8</td>
              <td>4.10.2</td>
              <td>16.17.4</td>
              <td>4.19.23</td>
              <td>21.3.13</td>
              <td>1.14.15</td>
            </tr>
          </tbody>
        </Table>
        <br />
        {/* puzzle 5 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>🐟ad🐟o Silence</h3>
          {getAnswerChecker(5)}
        </div>
        <p>Can You Remember King Henry Died From Drinking Chocolate Milk?</p>
        <audio src={p5mp3} controls className="my-4 mx-auto" />

        {/* puzzle 6 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>Tu🐟nel Vision</h3>
          {getAnswerChecker(6)}
        </div>
        <p>Can You Remember Every Vowel Does Good Before Evil?</p>
        <Crossword data={p6grid} />
        <br />
        <div className="prefer-2-col">
          <div className="w-full md:w-1/2 text-[90%]">
            <b>ACROSS</b>
            <ol>
              <li value={1}>Forgotten clue #4.</li>
              <li value={6}>
                These formal clothes seem too large on some aces.
              </li>
              <li value={9}>Something one would see on Dante's Peak.</li>
              <li value={10}>
                It was one for man, but not for mankind (two words).
              </li>
              <li value={12}>One has many world views.</li>
              <li value={13}>
                Where people who think in black and white may go for answers.
              </li>
              <li value={14}>A machine element that is somewhat incognito.</li>
              <li value={15}>
                Shipped goods one might find in trousers with many pockets.
              </li>
              <li value={17}>Two under par.</li>
              <li value={18}>In search of an industry standard (abbr.).</li>
              <li value={19}>
                This will develop if scams appear prior to authoritarian rule.
              </li>
              <li value={23}>Spanish city.</li>
              <li value={28}>Drink one might find in an English tavern.</li>
              <li value={29}>
                It's logically true even when both inputs are false.
              </li>
              <li value={30}>Place where one would find an Abbey Road.</li>
              <li value={33}>Forgotten clue #3.</li>
              <li value={36}>
                One whose hip-hop could be described as “vanilla”.
              </li>
              <li value={38}>Item in the black.</li>
              <li value={40}>Means of travel through Panama.</li>
              <li value={41}>
                This Gibson's latest films aren't all that electric.
              </li>
              <li value={43}>What this round is, after six more balls.</li>
              <li value={44}>Forgotten clue #1.</li>
              <li value={45}>Forgotten clue #5.</li>
              <li value={47}>Bond producer, for a really long time.</li>
              <li value={48}>Like a sky absent of clouds.</li>
              <li value={49}>
                What your youngest nephew might also be if they are a 3D (two
                words).
              </li>
            </ol>
          </div>
          <div className="w-full md:w-1/2 text-[90%]">
            <b>DOWN</b>
            <ol>
              <li value={1}>
                What Harry Styles wrote for a traditional Japanese takeout
                joint.
              </li>
              <li value={2}>One might use calculus to analyse these.</li>
              <li value={3}>
                Harry Potter and Draco Malfoy, but not Ronald Weasley (two
                words).
              </li>
              <li value={4}>Where one who leaves home is generally going.</li>
              <li value={5}>Down to earth plant support service.</li>
              <li value={6}>Forgotten clue #2.</li>
              <li value={7}>
                One way to describe the solution to the last sub-puzzle.
              </li>
              <li value={8}>Forgotten clue #6.</li>
              <li value={11}>Ingredient found in many baking recipes.</li>
              <li value={16}>Edge of a glass.</li>
              <li value={20}>Oddly awful sport from down under (abbr.).</li>
              <li value={21}>
                This common household item started a popular Vat-19 YouTube
                series.
              </li>
              <li value={22}>
                In short, it's probably baked into your Google search results
                (abbr.).
              </li>
              <li value={24}>Penultimate call, in popular card game.</li>
              <li value={25}>File transfers.</li>
              <li value={26}>
                Time period set to begin at the next Taylor Swift concert.
              </li>
              <li value={27}>
                It's logically true only when both inputs are true.
              </li>
              <li value={31}>Watch or pay attention to.</li>
              <li value={32}>
                You might hear this from your team after completing this puzzle
                (two words).
              </li>
              <li value={33}>
                The number of fallen pins after a strike (unless you're playing
                at MIT).
              </li>
              <li value={34}>The name for Kang used in Loki, He Who ___.</li>
              <li value={35}>
                Second Monopoly property is prime European coastal real estate.
              </li>
              <li value={37}>
                Complain about a fishy clue being a second red herring.
              </li>
              <li value={39}>
                Structure found in school building attended by those from the
                clue for 3D.
              </li>
              <li value={42}>
                A location at which many MIT visitors may have been recently.
              </li>
              <li value={46}>Almost, but not quite, the...</li>
            </ol>
          </div>
        </div>

        {/* puzzle 7 */}
        <hr className="my-4" />
        <div className="relative">
          <h3>🐟rid Locked</h3>
          {getAnswerChecker(7)}
        </div>
        <p>
          Can You Remember Some Old Hippie Left Another Hippie Tripping On Acid?
        </p>
        <InfoIcon>
          Click{' '}
          <a href="https://swaroopg92.github.io/penpa-edit/#m=solve&p=tVVBU/M2EL3nV3yjsw6yJduxb5TSXigtH3SYjifDOMFABiemTlIYZ+C381bS2nHi79JpJ4ms93YtvVV2V5u/d0VTSoNPpKSSAT4hZvRLA/oSS5/b5bYqs2/ybLd9rhtMpPz9Sj4W1aac5N5pNslFIKQI8QvE7LO9+cyFkMFssm+/Z/v2PstnH7L9s59O++lNtsd4Zccg2wsdTkWWC03vS6F1SMh4ZBShxKPYEIoZ2fcij1L73tQho6ynfQ/b/GU3+8WOoR1voUW22o4/21HZMbLjpfW5sOOdHc+dUKk1BAUK+xEIUwYpLIEHWkkds5sOANgSkwU6HSCLZhAeAA2gEUAPOosGiBlEADgDBwxAxCAGSBgkACxUUwgMDOQYlmMBCzXQZnhTAwVJ5wYFCVsSsrDQhCysIIGcDsQAMau2oLMghJiFxlCddm5QnbIlJQtHmpKFQ0gRTwdigIQPnkDcWfD/JBxcoqRR7JYEAN4CFsBHChbARwq2B0g1bMphW9BZcAYpB5ei2sLOLQLwFrAAPlKwAD44EybScIrBBRZ/BnAB8PFgAjdWjXzrgcLSipe2gDdV2EfxagpLcyKBBWAL8s1w8jnAZ4Dk699B8hlOPvgD8D7IN8MpBhcGKCJjSynO8jyYyjCeyTxIZajwDNGNUnriv43oSX8enrQwSaAplgWKZqjPhDrJZELLUCMLZDT+RJ9CSxKburrf7JrHYlGKzHYyabn1bjUvmwFV1fVrtVwP/ZZP67opR01Elg9PY/7zunk4Wv2tqKoB4drygFosm0U1pLbNcoCLpqnfBsyq2D4PiHmxRRvfPC9fhyuV6+1QwLYYSixeiqPdVn3MHxPxLuwv1zhfTf0+zdpr2f6KbntwI8j2Gg3/t0ws6tV8KajpuwuCeqv1DDG96Kd31k6zc0cGSAtcEnwvoIXnwh3N/aVj/sjy9lYK2uwn+zZNxar+B2qdGMJOAIiDE3GWze6hftl5X3tNnFnN7c2IXGQgy6Wpk0uzY7k+nv9Zbjr7cP+F+hc37n91IR5WdFeU777e6ma05ECPVB3Y0ery/EmBgT8pJdrwtJrAjhQU2OOaAnVaViBPKgvcD4qLVj2uL1J1XGK01UmV0VaHhYbGZWdf">
            here
          </a>{' '}
          for a Penpa+ interface.
        </InfoIcon>
        <p>
          <SheetableImage
            alt=""
            src={p7_0}
            title=""
            className="my-4 mx-auto max-w-[400px]"
          />
          <SheetableImage
            alt=""
            src={p7_1}
            title=""
            className="my-4 mx-auto max-w-[400px]"
          />
        </p>
      </div>

      <style jsx global>{`
        .intro-table td {
          padding: 0em 1em 1em 1em;
          vertical-align: center;
        }
        .intro-table td:nth-child(3) {
          font-size: 125%;
          font-weight: bold;
        }
        .speech-bubble {
          background: white;
          color: #333;
          display: inline-block;
          padding: 1.5em;
          position: relative;
          text-align: center;
          vertical-align: top;
          min-width: 7em;
          border-radius: 0.4em;
          font-style: italic;
        }
        .speech-bubble:after {
          left: 100%;
          top: 50%;
          border: solid transparent;
          content: ' ';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-left-color: white;
          border-width: 0.8em;
          margin-top: -0.7em;
        }
        .p2-pdf {
          /* Why can't this be a tailwind class? No clue. */
          aspect-ratio: 8.5/5.5;
        }
        .p3-grid td {
          font-size: 150%;
          width: 42px !important;
          height: 42px !important;
        }
        .p4-table td {
          text-align: center;
          font-size: 90%;
          padding: 12px 0px !important;
          width: 9.09% !important;
          background-color: rgb(0, 100, 0);
          border: 2px white solid !important;
          color: white;
          line-height: 250%;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
