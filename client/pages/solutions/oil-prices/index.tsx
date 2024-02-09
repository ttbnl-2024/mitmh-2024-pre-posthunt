import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'oil-prices';
const ANSWER = `ETHER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This puzzle deals with reduction-oxidation equations, specifically the
      oxidation numbers.
    </p>
    <p>
      There is a common mnemonic when dealing with redox equations: OILRIG
      (oxidation is loss, reduction is gain, referring to the transfer of
      electrons), which is hinted at in the flavor.
    </p>
    <p>
      We first identify the redox reactions that correspond to the production
      methods, followed by determining which element is oxidized and which is
      reduced. We can determine this using{' '}
      <a href="https://en.wikipedia.org/wiki/Oxidation_state">
        oxidation numbers
      </a>
      . If an oxidation number increases from the reactant to the product side,
      that element is considered to be oxidized (oxidation is loss of
      electrons), while if it decreases that element is reduced (reduction is
      gain of electrons).
    </p>
    <Table className="redox-table">
      <thead>
        <tr>
          <th>Production Method</th>
          <th>Redox Reaction</th>
          <th>Reduced Element</th>
          <th>Atomic Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Copper Wire in Silver Nitrate</td>
          <td>
            Cu + 2 AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2 Ag
          </td>
          <td>Silver</td>
          <td>47</td>
        </tr>
        <tr>
          <td>Lithium Ion Battery Discharging</td>
          <td>
            LiC<sub>6</sub> + CoO<sub>2</sub> → C<sub>6</sub> + LiCoO
            <sub>2</sub>
          </td>
          <td>Cobalt</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Hydrogen Gas Preparation</td>
          <td>
            Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>
          </td>
          <td>Hydrogen</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Copper Sulfate Zinc</td>
          <td>
            Zn + CuSO<sub>4</sub> → ZnSO<sub>4</sub> + CO<sub>2</sub>
          </td>
          <td>Copper</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Thermite Combustion</td>
          <td>
            Fe<sub>2</sub>O<sub>3</sub> + 2 Al → Al<sub>2</sub>O<sub>3</sub> + 2
            Fe
          </td>
          <td>Iron</td>
          <td>26</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Once the reduced elements have been determined, we can find their atomic
      numbers. Then, we can subtract that from the given price (clued through
      "so they are reduced") and index into the reduced element.
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Production Method</th>
          <th>Price</th>
          <th>What's on Sale?</th>
          <th>Number?</th>
          <th>Final Price?</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Copper Wire in Silver Nitrate</td>
          <td>$52</td>
          <td>SILVER</td>
          <td>47</td>
          <td>$5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Lithium Ion Battery Discharging</td>
          <td>$33</td>
          <td>COBALT</td>
          <td>27</td>
          <td>$6</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Hydrogen Gas Preparation</td>
          <td>$2</td>
          <td>HYDROGEN</td>
          <td>1</td>
          <td>$1</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Copper Sulfate Zinc</td>
          <td>$34</td>
          <td>COPPER</td>
          <td>29</td>
          <td>$5</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Thermite Combustion</td>
          <td>$28</td>
          <td>IRON</td>
          <td>26</td>
          <td>$2</td>
          <td>R</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We get the answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <style jsx global>{`
      .redox-table td:nth-child(2) {
        white-space: nowrap;
      }
      .redox-table td:nth-child(4) {
        text-align: center;
      }
      .extract-table td:nth-child(2),
      .extract-table td:nth-child(n + 4) {
        text-align: center;
      }
      .extract-table td:nth-child(3n) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
