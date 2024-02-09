import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'speaker-check';

const NAME_DATA: [number, string][] = [
  [3, 'Amander'],
  [3, 'Apurna'],
  [4, 'Atelist'],
  [3, 'Atorium'],
  [2, 'Bedo'],
  [5, 'Dactil'],
  [4, 'Falaxis'],
  [5, 'Fant'],
  [3, 'Hawk'],
  [5, 'Incense'],
  [3, 'Nast'],
  [4, "O'teen"],
  [4, 'Power'],
  [4, 'Robial'],
  [5, 'Sance'],
  [3, 'Stag'],
  [4, 'Tergeist'],
  [3, 'Tuckit'],
  [3, 'Veneer'],
  [3, 'Vour'],
];

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Hello everyone, and welcome to today's symposium. We've invited a
          diverse group of speakers today to talk on a variety of subjects.
          Below in the program you will find the subject of each talk and the
          room it will be held in, along with a list of the participants.
          Unfortunately, due to a printing error, I'm no longer certain which
          speaker goes with each subject. And half the identity of each speaker
          has gone missing as well! Oh dear, hopefully you can puzzle them out.
        </FlavorText>
        <ol className="pl-7 sm:pl-10 space-y-2">
          <li>
            The history of tobacco exports in new world colonies. (Room 3)
          </li>
          <li>The economics of resort tourism in Massachusetts. (Room 2)</li>
          <li>
            The relationship between author Ernest Hemingway and his household
            pets. (Room 4)
          </li>
          <li>New advances in African conservation programs. (Room 2)</li>
          <li>The physics of the balance beam. (Room 2)</li>
          <li>
            An introduction to the Himalayas for the first-time climber.
            (Room 3)
          </li>
          <li>Architectural styles of Victorian swimming baths. (Room 3)</li>
          <li>The origin of the Penny Black. (Room 2)</li>
          <li>The role of mementos in forming personal Memories. (Room 3)</li>
          <li>
            Techniques for observing the different phases of the moon throughout
            the year. (Room 1)
          </li>
          <li>
            The increase in food allergies in the general population. (Room 2)
          </li>
          <li>
            The importance of weekend recreation in modern German culture.
            (Room 1) 
          </li>
          <li>
            How to overcome temptations to achieve personal goals. (Room 1)
          </li>
          <li>
            A look at the popularity of competitive eating competitions.
            (Room 2)
          </li>
          <li>
            Trade routes of scented resins and oils in the first century.
            (Room 2)
          </li>
          <li>
            The reawakening of artistic movements in Europe in the late Middle
            Ages. (Room 3)
          </li>
          <li>Recent advances in paranormal investigation. (Room 2)</li>
          <li>The fashions and culture of the punk rock genre. (Room 1)</li>
          <li>Prevention of bacterial infections in lab settings. (Room 4)</li>
          <li>Using amphibian populations as a pollution scale. (Room 1)</li>
        </ol>
        <ul className="mt-4 space-y-2">
          {NAME_DATA.map(([blanks, name], key) => (
            <li key={key}>
              <table className="inline-table align-middle">
                <tbody>
                  <tr>
                    <td className="text-2xl font-mono">
                      {Array(blanks).fill('_')}
                    </td>
                    <td className="pl-1">{`${name} (${blanks})`}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
