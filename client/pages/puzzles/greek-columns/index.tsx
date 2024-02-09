import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/greek-columns/0.png';

const SLUG = 'greek-columns';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          The Museum invites you to visit the numerous tie-ins to this exhibit,
          listed here.
          <br />
          <br />
          "The Greeks" is a popular exhibit, so please form an orderly line.
        </FlavorText>
        <InfoIcon>
          A copyable pre-spreadsheeted version of the grid is located in the
          following (identical, copies due to load) sheets:{' '}
          <a href="https://docs.google.com/spreadsheets/d/1YdcXJmyTtsWNDxZQyB94eNQxDNOHcAXpmHDEJ-G5l4w/edit#gid=0">
            Sheet 1
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/1KEVK3-DrQunN10xbeAoThFlvV0lKZLOlSW1b84Htbo0/edit#gid=0">
            Sheet 2
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/1BgYdtpsgzsbaHewWhJnPfY4I3AyBXhJ9Oqh2UFn7drQ/edit#gid=0">
            Sheet 3
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/169p5MQ9O6x-luzGy1K3q5HEE5f4m7MTl-e7mJldvyRk/edit#gid=0">
            Sheet 4
          </a>
          ,{' '}
          <a href="https://docs.google.com/spreadsheets/d/1ynSoowHnLXQwsMP63OLnXPsQRzZne6-vLl6f5yk7Ycs/edit#gid=0">
            Sheet 5
          </a>
          . You can duplicate sheets into an existing spreadsheet (triangle next
          to the "Greek Columns" tab → "Copy to").
        </InfoIcon>

        <div className="prefer-2-col">
          <div className="md:w-1/2">
            <SheetableImage
              className="mx-auto pr-3"
              alt=""
              src={image0}
              title=""
            />
          </div>
          <div className="md:w-1/2 pl-1 space-y-2">
            <div>
              <h3>CAFETERIA</h3>
              <ul>
                <li>BREAKFAST</li>
                <li>LUNCH</li>
              </ul>
            </div>
            <div>
              <h3>FAQ</h3>
              <ul>
                <li>
                  IS THIS EXHIBITION PART OF THE LONG RUN? <b>YES</b>.
                </li>
                <li>
                  WILL THE VALENTINES DAY "PAL JOEY" SING-ALONG INCLUDE THE
                  TRADITIONAL QUESTION? <b>YES</b>.
                </li>
              </ul>
            </div>
            <div>
              <h3>LIBRARY</h3>
              <ul>
                <li>ARTHUR CONAN DOYLE STORY</li>
                <li>CYMBELINE (IV, 2)</li>
                <li>DELISA MULKEY POEM</li>
                <li>EMMA LAZARUS POEM (FIRST LINE)</li>
              </ul>
            </div>
            <div>
              <h3>RELIGIOUS LIFE</h3>
              <ul>
                <li>FORM OF CHRISTIANITY</li>
              </ul>
            </div>
            <div>
              <h3>SOUVENIR SHOP</h3>
              <ul>
                <li>WARNING! NO HORSEPLAY!</li>
              </ul>
            </div>
            <div>
              <h3>THEATRE</h3>
              <ul>
                <li>COMEDY FILM</li>
              </ul>
            </div>
            <div>
              <h3>TOP FLOOR</h3>
              <ul>
                <li>PRESTIGIOUS SPOKEN LANGUAGE</li>
                <li>WRITTEN SYMBOLS</li>
                <li>(YOU KNOW, FRANKLY, I DON'T UNDERSTAND A WORD OF IT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
