import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

import mp3_1 from 'assets/puzzles/meet-me-in-st-louis/MP3-1.mp3';
import mp3_2 from 'assets/puzzles/meet-me-in-st-louis/MP3-2.mp3';
import mp3_3 from 'assets/puzzles/meet-me-in-st-louis/MP3-3.mp3';
import mp3_4 from 'assets/puzzles/meet-me-in-st-louis/MP3-4.mp3';
import mp3_5 from 'assets/puzzles/meet-me-in-st-louis/MP3-5.mp3';
import mp3_6 from 'assets/puzzles/meet-me-in-st-louis/MP3-6.mp3';
import mp3_7 from 'assets/puzzles/meet-me-in-st-louis/MP3-7.mp3';
import mp3_8 from 'assets/puzzles/meet-me-in-st-louis/MP3-8.mp3';
import mp3_9 from 'assets/puzzles/meet-me-in-st-louis/MP3-9.mp3';
import mp3_10 from 'assets/puzzles/meet-me-in-st-louis/MP3-10.mp3';
import mp3_11 from 'assets/puzzles/meet-me-in-st-louis/MP3-11.mp3';

const SLUG = 'meet-me-in-st-louis';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <style jsx>
          {`
            tr:nth-child(1) > td {
              font-family: monospace;
              font-weight: bold;
            }

            td {
              padding-left: 0.25rem;
              padding-right: 0.25rem;
              text-align: center;
            }

            audio {
              margin-bottom: 1rem;
            }
          `}
        </style>
        <div className="space-y-5">
          <FlavorText>I think I've scene these before...</FlavorText>
          <AudioLink src={mp3_1} className="mb-4" />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>12</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>21</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_2} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>20</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>16</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_3} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>3</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>1</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_4} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>4</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>10</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_5} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>14</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>6</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_6} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>23</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>2</td>
                <td>11</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_7} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>19</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>9</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_8} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>18</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>17</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_9} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>5</td>
                <td>22</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_10} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>13</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>7</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <AudioLink src={mp3_11} />
          <Table noBorder className="ml-0">
            <tbody>
              <tr>
                <td>
                  <Monospace>
                    <u>?</u>
                  </Monospace>
                </td>
                <td>&nbsp;</td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
                <td>
                  <Monospace>_</Monospace>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>8</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
