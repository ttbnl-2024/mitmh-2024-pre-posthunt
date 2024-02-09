import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import Wordsearch from 'components/wordsearch';

const SLUG = 'a-process-of-elimination';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          The more you are Able to clear your mind of distractions, the deeper…
          (deeper… deeper…) into the matrix you'll go...
        </FlavorText>

        <div className="overflow-x-auto">
          <Wordsearch
            tableClass="mx-auto"
            cellClass="border border-black p-1"
            cellWidth={50}
            data={[
              [
                'AKM',
                'IIL',
                'AOR',
                'ABB',
                'DGU',
                'CCE',
                'EEH',
                'AAU',
                'LSZ',
                'DIR',
                'AEH',
                'ESS',
              ],
              [
                'ERU',
                'DEM',
                'CNP',
                'IRY',
                'RST',
                'HMS',
                'AEL',
                'KKN',
                'AKT',
                'ART',
                'AEN',
                'HNS',
              ],
              [
                'LPS',
                'AOS',
                'IRT',
                'ABS',
                'AGT',
                'AAO',
                'AIR',
                'CES',
                'NPR',
                'EOR',
                'GHR',
                'TUV',
              ],
              [
                'BPT',
                'HIO',
                'KOP',
                'DOY',
                'FIO',
                'KOR',
                'EPT',
                'SUY',
                'BST',
                'AOO',
                'ACL',
                'ERR',
              ],
              [
                'EIS',
                'OOO',
                'NPV',
                'EHR',
                'NRT',
                'ILT',
                'AAE',
                'EGS',
                'AFP',
                'GLM',
                'AOS',
                'GLU',
              ],
              [
                'ERT',
                'OOW',
                'BYY',
                'DOS',
                'EER',
                'ISX',
                'CHM',
                'ARU',
                'RTV',
                'EEI',
                'BEV',
                'EOP',
              ],
              [
                'AEE',
                'AIO',
                'MOS',
                'CSU',
                'EMO',
                'EFO',
                'AOS',
                'RSX',
                'EVY',
                'BGR',
                'EEO',
                'INP',
              ],
              [
                'GNR',
                'EOU',
                'IKW',
                'AAG',
                'ANR',
                'BES',
                'AFR',
                'DEF',
                'EJV',
                'ACE',
                'EHT',
                'EST',
              ],
              [
                'ORS',
                'ART',
                'ENT',
                'ABD',
                'ORS',
                'EMS',
                'ACI',
                'GKO',
                'BIT',
                'ANR',
                'NRR',
                'ATU',
              ],
              [
                'ADT',
                'IIW',
                'EOV',
                'EHR',
                'KOT',
                'OPR',
                'BET',
                'EIO',
                'EET',
                'AII',
                'NNW',
                'EGO',
              ],
              [
                'CGJ',
                'AIO',
                'FHR',
                'ANO',
                'AEO',
                'MNT',
                'AHO',
                'INN',
                'EFI',
                'COU',
                'ANR',
                'DOR',
              ],
              [
                'AAM',
                'LTY',
                'EKV',
                'AIV',
                'CNR',
                'EGN',
                'HLO',
                'AKT',
                'RST',
                'EGM',
                'LOS',
                'MNW',
              ],
            ]}
          />
        </div>

        <ul className="mt-4 space-y-3 sm:space-y-0">
          <li>Conflicts in South Africa</li>
          <li>Fremantle Conspiracy actor</li>
          <li>Inquires of sch. official in Athens</li>
          <li>Help with a status update</li>
          <li>Things with 8 protons and 8 electrons</li>
          <li>How you would describe paintings from a Soviet realist artist</li>
          <li>Singe Joe from Connecticut</li>
          <li>Piece of logic</li>
          <li>Earn or merit</li>
          <li>Prescribe</li>
          <li>Jet factory worker's commute, maybe?</li>
          <li>Biosphere</li>
          <li>Top-notch long distance race</li>
          <li>Return address, ZIP code, postage, etc.</li>
          <li>Something you might find in a cemetery</li>
          <li>Distortion, overdrive or reverb</li>
          <li>College football stadium nickname, with The</li>
          <li>The Snake River, for one</li>
          <li>Australian airline</li>
          <li>Namesake of a Los Angeles theater</li>
          <li>Pakistan city</li>
          <li>Minnesota senator fabricates</li>
          <li>Some Kermit/Miss Piggy fanfics (not that *ahem* we'd know)</li>
          <li>View</li>
          <li>Taxes, e.g.</li>
          <li>Movie snack</li>
          <li>Unplanned Japanese flower arrangement</li>
          <li>What Buddhists may do</li>
          <li>Denies</li>
          <li>Band practice</li>
          <li>An old-school flower</li>
          <li>Cyborg CEO</li>
          <li>Someone who rates Kris Kringles</li>
          <li>Meeting</li>
          <li>
            It's white, blue and red, with a mostly blue coat of arms at the top
          </li>
          <li>Japanese musical instrument</li>
          <li>Stroll through a Scottish city</li>
          <li>Online reference work</li>
        </ul>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
