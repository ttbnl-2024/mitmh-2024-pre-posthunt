import cx from 'classnames';
import React, {
  FC,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';
import { useLocalStorage } from 'utils/storage';

import HuntInfoContext from 'components/context';
import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import pdf from 'assets/puzzles/triangles/triangles.pdf';

const SLUG = 'triangles';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const router = useRouter();
  const { userInfo } = useContext(HuntInfoContext);
  const loggedIn = !!process.env.useWorker || !!userInfo?.teamInfo;
  const ref = useRef<HTMLDivElement>(null);
  const [ruleHistory, setRuleHistory] = useState<string[]>([]);
  const [lastRule, setLastRule] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();

  const historyStorage = useLocalStorage<string[]>(`${SLUG}/history`, []);

  useEffect(() => {
    setRuleHistory(historyStorage.get());
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!loggedIn) {
      return;
    }
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    const response = await clientFetch<
      DjangoFormResponse<{}, { rule: string }>
    >(router, `/puzzle/${SLUG}/click`, {
      method: 'POST',
      body: formData,
    });

    if (response.form_errors) {
      console.log(response.form_errors);
    } else if (response.data) {
      setLastRule(response.data.rule);

      const newHistory = [...ruleHistory];
      if (ruleHistory.length < 210) {
        newHistory.push(response.data.rule);
        setRuleHistory(newHistory);
        historyStorage.set(newHistory);
      }
    }

    setLoading(false);
  };

  const rules = {};
  for (const r of ruleHistory) {
    rules[r] = (rules[r] || 0) + 1;
  }

  const rulesList: React.JSX.Element[] = [];
  for (let i = ruleHistory.length - 1; i >= 0; i--) {
    rulesList.push(<li key={ruleHistory.length - i}>{ruleHistory[i]}</li>);
  }

  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          <a href={pdf}>Direct PDF link.</a> PDF contents available in
          copy-to-clipboard. There is puzzle content below the PDF on this page.
        </InfoIcon>
        <iframe src={pdf + '#zoom=Fit'} className={cx(NO_COPY_CLASS, 'w-full')}>
          <style jsx>{`
            iframe {
              /* Why can't this be a tailwind class? No clue. */
              aspect-ratio: 8.5/11;
            }
          `}</style>
        </iframe>
        <div className={cx(HIDDEN_CLASS)}>
          <ul>
            <li>9 to 5, for many</li>
            <li>End of daylight savings</li>
            <li>Japanese chip maker</li>
          </ul>
          <ul>
            <li>"After you!"</li>
            <li>Difficult to understand</li>
            <li>MacArthur promised to do this</li>
          </ul>
          <ul>
            <li>Alkaline earth metal with lowest melting point</li>
            <li>Human relations, to an academic</li>
            <li>Recent U.S. President</li>
          </ul>
          <ul>
            <li>Annoying, as insects may be</li>
            <li>Game also called weiqi</li>
            <li>Pharrell Williams hit</li>
          </ul>
          <ul>
            <li>ARM, for example</li>
            <li>They beat Australia in a war</li>
            <li>NSTAR, once</li>
          </ul>
          <ul>
            <li>Cave sound</li>
            <li>Soda can feature or contents</li>
            <li>Type of goat</li>
          </ul>
          <ul>
            <li>Chicken tenders?</li>
            <li>Emcee requirement</li>
            <li>Shopping mall feature</li>
          </ul>
          <ul>
            <li>City across the border from Gronau</li>
            <li>Zion's mates</li>
            <li>Scurvy-preventing substance</li>
          </ul>
          <ul>
            <li>Clay, three times</li>
            <li>Treasure map location</li>
            <li>Web browser feature</li>
          </ul>
          <ul>
            <li>Day 74 on the Roman calendar</li>
            <li>The Beautiful South hit</li>
            <li>Pteroyl-L glutamic acid</li>
          </ul>
          <ul>
            <li>Egrets and bitterns</li>
            <li>Nobel Prize field for Dylan</li>
            <li>Mineral found in bananas</li>
          </ul>
          <ul>
            <li>Even you, to a Roman</li>
            <li>What every actor wants to be</li>
            <li>Type of rock, for short</li>
          </ul>
          <ul>
            <li>Giants' crosstown rival, on the ladder</li>
            <li>Trojan war figure</li>
            <li>Most populous country</li>
          </ul>
          <ul>
            <li>Half of ducks, to some</li>
            <li>Its use is discouraged in chat rooms</li>
            <li>Holst suite</li>
          </ul>
          <ul>
            <li>Heaviest weak boson</li>
            <li>It can be shot</li>
            <li>Mercenaries, in Warhammer</li>
          </ul>
          <ul>
            <li>Immature or juvenile</li>
            <li>Niels Bohr's specialty</li>
            <li>What a child might turn on, idiomatically</li>
          </ul>
          <ul>
            <li>It contains the Tingel Arm</li>
            <li>Pig raised with sheep</li>
            <li>Pilot with five kills</li>
          </ul>
          <ul>
            <li>It has over one million known minor planets</li>
            <li>Youth org., colloquially</li>
            <li>Texas university</li>
          </ul>
          <ul>
            <li>It might require a 1040</li>
            <li>Last word at the opera?</li>
            <li>Southern state capital</li>
          </ul>
          <ul>
            <li>Most painful of affronts</li>
            <li>Vitamin B compound</li>
            <li>Wearer of a Guy Fawkes mask</li>
          </ul>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>4</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>6</li>
            <li>6</li>
            <li>6</li>
            <li>6</li>
            <li>7</li>
            <li>7</li>
            <li>7</li>
            <li>7</li>
            <li>8</li>
            <li>8</li>
            <li>8</li>
            <li>9</li>
            <li>9</li>
            <li>9</li>
            <li>10</li>
            <li>12</li>
            <li>12</li>
            <li>2 2</li>
            <li>2 5</li>
            <li>3 4</li>
            <li>3 4</li>
            <li>3 6</li>
            <li>3 7</li>
            <li>4 4</li>
            <li>4 7</li>
            <li>5 5</li>
            <li>6 3</li>
            <li>7 1</li>
            <li>8 7</li>
            <li>9 3</li>
            <li>3 5 6</li>
            <li>4 2 3</li>
            <li>4 2 5</li>
            <li>5 2 2</li>
          </ul>
        </div>
        <hr className="my-4" />
        <p>
          For your next AD&amp;D 1st edition, D&amp;D BECMI version, AD&amp;D
          2nd edition, D&amp;D 3rd edition, or D&amp;D 5th edition campaign:
        </p>
        <div className={cx(NO_COPY_CLASS)}>
          <form onSubmit={onSubmit}>
            <input
              type="submit"
              value="Generate Random Rule"
              className={cx(
                'mb-2 !bg-neutral-300 !text-black border-none rounded-xl p-2',
                NO_COPY_CLASS
              )}
              disabled={loading}
            />
            <input
              type="hidden"
              value={JSON.stringify(rules)}
              name="jsonData"
            />
          </form>
        </div>

        <p>{lastRule && lastRule.toLocaleUpperCase()}</p>

        {ruleHistory.length >= 20 && (
          <details>
            <summary>Toggle History</summary>
            <p>
              <b>Showing {ruleHistory.length} rules in history.</b>
              {ruleHistory.length == 210 && (
                <> (Additional generated Rules will not be shown in history.)</>
              )}
            </p>
            <ul>{rulesList}</ul>
          </details>
        )}
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
