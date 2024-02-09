import cx from 'classnames';
import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';
import { DjangoFormResponse } from 'types';

import useDynamicEncrypted from 'utils/encrypted';
import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'von-schweetzs-big-question';

interface VonSchweetzTableResponse {
  correct: boolean;
  tableMessage: string;
}

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;

  const [tableMessage, setTableMessage] = useState<string>(
    puzzleData.private?.tableMessage || ''
  );
  const [image, setImage] = useState<number>(0);
  const [step2, setStep2] = useState<boolean>(
    puzzleData.private?.hasStep2 || false
  );
  const [step3, setStep3] = useState<boolean>(
    puzzleData.private?.hasStep3 || false
  );

  let initTableData: number[];
  if (puzzleData.private?.inputs) {
    initTableData = puzzleData.private?.inputs.split(',').map(Number);
  } else {
    initTableData = [];
  }

  const tableGuessHandler = async (e: FormEvent<HTMLFormElement>) => {
    if (!loggedIn) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    const response = await clientFetch<
      DjangoFormResponse<{}, VonSchweetzTableResponse>
    >(router, `/puzzle/${SLUG}/table_guess`, {
      method: 'POST',
      body: formData,
    });

    if (!response.data) {
      setTableMessage('Error! Contact HQ.');
      return;
    }
    setTableMessage(response.data.tableMessage);
    if (response.data.correct) {
      setStep2(true);
    }

    return;
  };

  interface RacerProps {
    image: number;
    setImage: Dispatch<SetStateAction<number>>;
    setStep3: Dispatch<SetStateAction<boolean>>;
  }
  let Racers = useDynamicEncrypted<RacerProps>(
    `puzzles/${SLUG}/von-schweetz_racers`,
    {
      enabled: step2,
    }
  );

  let LastTable = useDynamicEncrypted<{}>(
    `puzzles/${SLUG}/von-schweetz_last_table`,
    {
      enabled: step3,
    }
  );

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>
          Vanellope always wanted to be a princess, but not everyone was
          convinced.
        </FlavorText>
        <p>
          Each column point value is a positive integer and there are no
          repeated values.
        </p>
        <form onSubmit={tableGuessHandler}>
          <span className={cx(HIDDEN_CLASS)}>
            This table has a row of number inputs on the website with a submit
            button.
          </span>
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className={cx(
                'mb-2 !bg-neutral-300 !text-black border-none rounded-xl p-2',
                NO_COPY_CLASS
              )}
              disabled={step2}
            />
            {tableMessage && (
              <>
                <br />
                <p>{tableMessage}</p>
              </>
            )}
          </div>
          <Table>
            <style jsx>{`
              th:not(:nth-child(1)):not(:nth-child(2)) {
                padding: 2px 4px;
              }
              th > input {
                max-width: 45px;
                padding-left: 2px;
              }
              th:nth-child(2) {
                width: 54px;
                min-width: 54px;
              }
            `}</style>
            <thead>
              <tr>
                <th>Column Point Values</th>
                <th className="text-center">3</th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n1"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[0]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n2"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[1]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n3"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[2]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n4"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[3]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n5"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[4]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n6"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[5]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n7"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[6]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n8"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[7]}
                  />
                </th>
                <th className="text-center">
                  <input
                    type="number"
                    name="n9"
                    min={1}
                    required
                    data-copy-input-value
                    className="text-center"
                    disabled={step2}
                    value={initTableData && initTableData[8]}
                  />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-bold">
                <td></td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">?</td>
                <td className="text-center">? !</td>
                <td className="text-center">?</td>
                <td className="text-center"></td>
              </tr>
              <tr>
                <td>Belle</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">16</td>
              </tr>
              <tr>
                <td>Elsa</td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">20</td>
              </tr>
              <tr>
                <td>Rapunzel</td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">17</td>
              </tr>
              <tr>
                <td>Jasmine</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">21</td>
              </tr>
              <tr>
                <td>Aurora</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">22</td>
              </tr>
              <tr>
                <td>Snow White</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">25</td>
              </tr>
              <tr>
                <td>Pocahontas</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">21</td>
              </tr>
              <tr>
                <td>Tiana</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">22</td>
              </tr>
              <tr>
                <td>Cinderella</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">21</td>
              </tr>
              <tr>
                <td>Anna</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">12</td>
              </tr>
              <tr>
                <td>Ariel</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">X</td>
                <td className="text-center">29</td>
              </tr>
            </tbody>
          </Table>
        </form>

        {step2 && (
          <>
            <hr className="my-4" />
            <Racers image={image} setImage={setImage} setStep3={setStep3} />
          </>
        )}
        {step3 && (
          <>
            <hr className="my-4" />
            <LastTable />
          </>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
