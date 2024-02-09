import cx from 'classnames';
import React, { FC, useRef, useState } from 'react';

import useDynamicEncrypted from 'utils/encrypted';
import { useEventWebSocket } from 'utils/fetch';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';
import WebsocketNotice from 'components/websocket_notice';

import image0 from 'assets/puzzles/cheerful-rulers-kingdom/0.png';
import image1 from 'assets/puzzles/cheerful-rulers-kingdom/1.png';

const SLUG = 'cheerful-rulers-kingdom';

interface CrkPrivateData {
  locationSolved?: boolean;
  metaUnlocked?: boolean;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  let privateData: CrkPrivateData = puzzleData.private || {};
  const ref = useRef<HTMLDivElement>(null);
  const [locationSolved, setLocationSolved] = useState<boolean>(
    !!privateData.locationSolved
  );
  const [metaUnlocked, setMetaUnlocked] = useState<boolean>(
    !!privateData.metaUnlocked
  );

  const { sendJsonMessage, readyState } = useEventWebSocket({
    onJson: ({ data }) => {
      const resp = data as CrkPrivateData;
      if (resp.locationSolved) {
        setLocationSolved(resp.locationSolved);
      }
      if (resp.metaUnlocked) {
        setMetaUnlocked(resp.metaUnlocked);
      }
    },
    key: SLUG,
    options: {
      slug: SLUG,
    },
  });

  let MainEvent = useDynamicEncrypted<{}>(
    `puzzles/${SLUG}/cheerful-rulers-kingdom_main-event`,
    { enabled: locationSolved }
  );
  let Meta = useDynamicEncrypted<{}>(
    `puzzles/${SLUG}/cheerful-rulers-kingdom_meta`,
    { enabled: metaUnlocked }
  );

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <h3>Location Puzzle: Preparing the Dough</h3>
        <FlavorText>
          On behalf of the Ancients, Hollyberry Cookie invites everyone to a
          puzzling event at one of her realm's kingdoms! To identify this
          kingdom, use the 16 banks of ingredients below to prepare 16 cookies,
          leaving one ingredient unused per bank.
        </FlavorText>
        <WebsocketNotice readyState={readyState} />
        <ul>
          <li>
            <Monospace>AÄCDEHKLRSWZ</Monospace>
          </li>
          <li>
            <Monospace>BEHIR</Monospace>
          </li>
          <li>
            <Monospace>ACDNOV</Monospace>
          </li>
          <li>
            <Monospace>ACGINPRTV</Monospace>
          </li>
          <li>
            <Monospace>AGIKMNOTU</Monospace>
          </li>
          <li>
            <Monospace>AELOT</Monospace>
          </li>
          <li>
            <Monospace>ABDGNOPRS</Monospace>
          </li>
          <li>
            <Monospace>EGILMTUWYZ</Monospace>
          </li>
          <li>
            <Monospace>ABEHKNORST</Monospace>
          </li>
          <li>
            <Monospace>AINO</Monospace>
          </li>
          <li>
            <Monospace>AEGLMN</Monospace>
          </li>
          <li>
            <Monospace>AEIKLMWY</Monospace>
          </li>
          <li>
            <Monospace>ABCDIKLNRS</Monospace>
          </li>
          <li>
            <Monospace>ALPRSTY</Monospace>
          </li>
          <li>
            <Monospace>AEFIRSTY</Monospace>
          </li>
          <li>
            <Monospace>GHILMNORT</Monospace>
          </li>
        </ul>
        <p>
          <Monospace>Kingdom: ________________ (16)</Monospace>
        </p>
        <hr className="my-4" />
        <h3>Instructions on how to visit the kingdom</h3>
        {!locationSolved && (
          <div className="border border-black bg-yellow p-4 my-2">
            <b>
              Before proceeding, make sure that you have solved and submitted
              the location puzzle answer.
            </b>
          </div>
        )}
        <InfoIcon>
          If you are unwilling or unable to install the app, or have an existing
          account on a different server, use this website:{' '}
          <a href="https://now.gg/play/devsisters-corporation/3475/cookie-run">
            https://now.gg/play/devsisters-corporation/3475/cookie-run
          </a>
          .
        </InfoIcon>
        <p>
          <b>
            IMPORTANT: After installing and opening Cookie Run Kingdom for the
            first time, a server selection prompt will appear.
          </b>
        </p>
        <p>
          <SheetableImage
            alt=""
            src={image0}
            title=""
            className="mx-auto my-2"
          />
          <SheetableImage alt="" src={image1} title="" className="mx-auto" />
        </p>
        <p>
          You must select the <b>Hollyberry server</b> as shown above and hit
          Play.
        </p>
        <p>Play through the game, completing the following tasks:</p>
        <ul>
          <li>Intro battle</li>
          <li>The first battle</li>
          <li>Build a Cookie House</li>
          <li>Reclaim Scary Forest</li>
          <li>Use Special Cookie Cutter</li>
          <li>Clear 1-1 Roll Cake Forest</li>
        </ul>
        <p>At this point, the social functions are now available:</p>
        <ul>
          <li>Tap community icon on upper right</li>
          <li>Tap "Friends" on the left-hand side menu</li>
          <li>Tap "Add"</li>
          <li>
            In the search bar, enter the location puzzle answer (this is case
            insensitive)
          </li>
          <li>Tap the player icon</li>
          <li>On the window that opens to the right, tap "Visit Kingdom"</li>
        </ul>

        {locationSolved && (
          <>
            <hr className="my-4" />
            <MainEvent />
          </>
        )}

        {metaUnlocked && (
          <>
            <hr className="my-4" />
            <Meta />
          </>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
