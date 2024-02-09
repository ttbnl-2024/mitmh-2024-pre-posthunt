import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

const SLUG = '99-percent-of-mystery-hunt-teams-cannot-solve-this';
const ANSWER = `MULTIPHASIC`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      Each image describes a problem from the{' '}
      <a href="https://www.imo-official.org/">
        International Mathematical Olympiad
      </a>{' '}
      (clued by "IMO" in the flavor text). The problems can be downloaded on the{' '}
      <a href="https://www.imo-official.org/problems.aspx">official site</a>,
      and are also available on{' '}
      <a href="https://artofproblemsolving.com/community/c3222_imo">AoPS</a>.
      Detailed statistics of each problem can be found on the official site,
      e.g., on{' '}
      <a href="https://www.imo-official.org/year_statistics.aspx?year=2023">
        this page
      </a>
      . The images are sorted by year and problem number, suggesting we want to
      re-sort them somehow. Computing the actual percentage of contestants who
      solved each problem (getting 7 out of 7 points), we notice that it is
      larger than the one given in the image by a whole number from 1 to 11.
      This gives the final sorting.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle %</th>
          <th>IMO Problem</th>
          <th># Non-solves</th>
          <th># Contestants</th>
          <th>Actual %</th>
          <th>Difference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>20.69</td>
          <td>2012 P1</td>
          <td>146</td>
          <td>547</td>
          <td>26.69</td>
          <td>6</td>
        </tr>
        <tr>
          <td>75.61</td>
          <td>2013 P2</td>
          <td>409</td>
          <td>527</td>
          <td>77.61</td>
          <td>2</td>
        </tr>
        <tr>
          <td>25.93</td>
          <td>2014 P1</td>
          <td>190</td>
          <td>560</td>
          <td>33.93</td>
          <td>8</td>
        </tr>
        <tr>
          <td>71.21</td>
          <td>2014 P2</td>
          <td>438</td>
          <td>560</td>
          <td>78.21</td>
          <td>7</td>
        </tr>
        <tr>
          <td>51.07</td>
          <td>2015 P1</td>
          <td>312</td>
          <td>577</td>
          <td>54.07</td>
          <td>3</td>
        </tr>
        <tr>
          <td>30.17</td>
          <td>2015 P4</td>
          <td>226</td>
          <td>577</td>
          <td>39.17</td>
          <td>9</td>
        </tr>
        <tr>
          <td>49.38</td>
          <td>2018 P4</td>
          <td>323</td>
          <td>594</td>
          <td>54.38</td>
          <td>5</td>
        </tr>
        <tr>
          <td>94.49</td>
          <td>2019 P3</td>
          <td>593</td>
          <td>621</td>
          <td>95.49</td>
          <td>1</td>
        </tr>
        <tr>
          <td>22.49</td>
          <td>2022 P4</td>
          <td>156</td>
          <td>589</td>
          <td>26.49</td>
          <td>4</td>
        </tr>
        <tr>
          <td>60.97</td>
          <td>2022 P5</td>
          <td>418</td>
          <td>589</td>
          <td>70.97</td>
          <td>10</td>
        </tr>
        <tr>
          <td>85.26</td>
          <td>2022 P6</td>
          <td>567</td>
          <td>589</td>
          <td>96.26</td>
          <td>11</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Filling the blanks appropriately from the actual problems, we get a letter
      for each fruit for each problem. The emojis <InlineTwemoji emoji="🍎" />{' '}
      (apple), <InlineTwemoji emoji="🍌" /> (banana),{' '}
      <InlineTwemoji emoji="🥕" /> (carrot) suggest the ordering ABC. The fruits{' '}
      <InlineTwemoji emoji="🍎" />
      <InlineTwemoji emoji="🍌" />
      <InlineTwemoji emoji="🥕" /> from each problem spell a 3-letter country
      code (that is consistent with the one used on the official site).
    </p>
    <Table>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Explanation</th>
          <th className="w-[90px]">
            <InlineTwemoji emoji="🍎" />
            <InlineTwemoji emoji="🍌" />
            <InlineTwemoji emoji="🥕" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2012 P1</td>
          <td>
            Triangle ABC gives <InlineTwemoji emoji="🍌" /> = A; LM and BJ
            intersect at <InlineTwemoji emoji="🥕" /> = F; AF and BC intersect
            at <InlineTwemoji emoji="🍎" /> = S.
          </td>
          <td>SAF</td>
        </tr>
        <tr>
          <td>2013 P2</td>
          <td>
            <Monospace>COLUMBIAN CONFIGURATION // GOOD ARRANGEMENT</Monospace>
          </td>
          <td>IRN</td>
        </tr>
        <tr>
          <td>2014 P1</td>
          <td>
            <InlineTwemoji emoji="🥕" /> = A; blank ={' '}
            <Monospace>INTEGER</Monospace> s.t. <InlineTwemoji emoji="🍎" /> =
            N, <InlineTwemoji emoji="🍌" /> = G
          </td>
          <td>NGA</td>
        </tr>
        <tr>
          <td>2014 P2</td>
          <td>
            <Monospace>GREATEST // PEACEFUL CONFIGURATION</Monospace>
          </td>
          <td>ISR</td>
        </tr>
        <tr>
          <td>2015 P1</td>
          <td>
            <InlineTwemoji emoji="🍌" /> = G;{' '}
            <Monospace>BALANCED / CENTRE-FREE</Monospace>
          </td>
          <td>EST</td>
        </tr>
        <tr>
          <td>2015 P4</td>
          <td>
            Triangle ABC gives <InlineTwemoji emoji="🍎" /> = C; circumcenter{' '}
            <InlineTwemoji emoji="🍌" /> = O; line GL gives{' '}
            <InlineTwemoji emoji="🥕" /> = L
          </td>
          <td>COL</td>
        </tr>
        <tr>
          <td>2018 P4</td>
          <td>
            <Monospace>AMY // BEN // GREATEST // K // AMY // BEN</Monospace>
          </td>
          <td>TKM</td>
        </tr>
        <tr>
          <td>2019 P3</td>
          <td>
            <Monospace>USERS // SOCIAL NETWORK</Monospace>
          </td>
          <td>KOR</td>
        </tr>
        <tr>
          <td>2022 P4</td>
          <td>
            Pentagon ABCDE gives <InlineTwemoji emoji="🍎" /> = E; AE intersects
            DT at <InlineTwemoji emoji="🍌" /> = S; AB intersects CD at{' '}
            <InlineTwemoji emoji="🥕" /> = P
          </td>
          <td>ESP</td>
        </tr>
        <tr>
          <td>2022 P5</td>
          <td>
            <InlineTwemoji emoji="🍎" /> = P;{' '}
            <Monospace>POSITIVE INTEGERS // PRIME</Monospace>
          </td>
          <td>ESP</td>
        </tr>
        <tr>
          <td>2022 P6</td>
          <td>
            <Monospace>UPHILL PATHS // NORDIC SQUARE</Monospace>
          </td>
          <td>CAN</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each country has 6 contestants. Sort them alphabetically (by last name,
      then first name. This is the sorting behavior on the site, e.g., when we
      click the "Contestant" table header in{' '}
      <a href="https://www.imo-official.org/team_r.aspx?code=KOR&amp;year=2019">
        https://www.imo-official.org/team_r.aspx?code=KOR&amp;year=2019
      </a>
      ) and look at their scores (7 is dot; all else = blank) for that problem
      arranged as a 3x2 rectangle, as shown in the puzzle. Use braille to
      extract a letter. Sorting by the difference in percentage, we get the
      final answer <Answerize>MULTIPHASIC</Answerize>.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Order</th>
          <th>IMO Problem</th>
          <th>
            <InlineTwemoji emoji="🍎" />
            <InlineTwemoji emoji="🍌" />
            <InlineTwemoji emoji="🥕" /> (Country)
          </th>
          <th>Contestants</th>
          <th>Solved?</th>
          <th>Braille</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={6}>1</td>
          <td rowSpan={6}>2019 P3</td>
          <td rowSpan={6}>KOR</td>
          <td>Youngjun Cho</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ji Won Kang</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Hongnyung Kim</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Jimin Kim</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Sangyoun Ko</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Seungho Song</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>2</td>
          <td rowSpan={6}>2013 P2</td>
          <td rowSpan={6}>IRN</td>
          <td>Alek Bedroya</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Aref Sadeghi</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Seyyedmohammadhossein Seyyedsalehi</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Mohammad Javad Shabani Zahraei</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Mahan Tajrobehkar</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Tina Torkaman</td>
          <td>1</td>
        </tr>
        <tr>
          <td rowSpan={6}>3</td>
          <td rowSpan={6}>2015 P1</td>
          <td rowSpan={6}>EST</td>
          <td>Joonas Kalda</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>Richard Luhtaru</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Oliver Nisumaa</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Simmo Saan</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Andres Unt</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Triinu Veeorg</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>4</td>
          <td rowSpan={6}>2022 P4</td>
          <td rowSpan={6}>ESP</td>
          <td>Javier Badesa Pérez</td>
          <td>0</td>
          <td rowSpan={6}>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jordi Ferré García</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Álvaro Gamboa Rodríguez</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Roger Lidón Ardanuy</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Darío Martínez Ramírez</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Martín Padrón Rodríguez</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>5</td>
          <td rowSpan={6}>2018 P4</td>
          <td rowSpan={6}>TKM</td>
          <td>Kadyrberdi Annabayev</td>
          <td>0</td>
          <td rowSpan={6}>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Jepbar Asgarov</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Ashyrgeldi Atayev</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Agamyrat Begenjov</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Baygeldi Cholukov</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Akmyrat Tirkeshov</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>6</td>
          <td rowSpan={6}>2012 P1</td>
          <td rowSpan={6}>SAF</td>
          <td>Mickey Chew</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>Dylan Nelson</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Junho Son</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Robert Andrew Spencer</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Dalian Sunder</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Robin Visser</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>7</td>
          <td rowSpan={6}>2014 P2</td>
          <td rowSpan={6}>ISR</td>
          <td>Dor Mezer</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tomer Novikov</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Amotz Oppenheim</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Dor Shmoish</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Omri Nisan Solan</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Nitzan Tur</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>8</td>
          <td rowSpan={6}>2014 P1</td>
          <td rowSpan={6}>NGA</td>
          <td>Chigozie Henry Aniobi</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>Oluwasanya Oluwafemi Awe</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Mmesomachi Nwachukwu</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Chilolum Christopher Uzoma Nwigwe</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Princewill Chukwuemeka Okoroafor</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Akanimoh Boniface Udombeh</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>9</td>
          <td rowSpan={6}>2015 P4</td>
          <td rowSpan={6}>COL</td>
          <td>Jesús Caballero</td>
          <td>0</td>
          <td rowSpan={6}>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Daniel Cáceres</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Nicolás De La Hoz</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Juan Sebastian Díaz</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Oscar Gómez</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Pablo González</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>10</td>
          <td rowSpan={6}>2022 P5</td>
          <td rowSpan={6}>POR</td>
          <td>Leonardo Caiano Tavares</td>
          <td>0</td>
          <td rowSpan={6}>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Tiago Duarte Mourão</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Eduardo Henrique Gomes de Sousa Neto Guerreiro</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Tiago Oliveira Marques</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Rafael Martim Tavares Inácio</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Mariana Vilela Marta Rio Costa</td>
          <td>0</td>
        </tr>
        <tr>
          <td rowSpan={6}>11</td>
          <td rowSpan={6}>2022 P6</td>
          <td rowSpan={6}>CAN</td>
          <td>Warren Bei</td>
          <td>1</td>
          <td rowSpan={6}>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>Evan Lu</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Kevin Min</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Kaixin Wang</td>
          <td>1</td>
        </tr>
        <tr>
          <td>James Yang</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Zixiang Zhou</td>
          <td>0</td>
        </tr>
      </tbody>
    </Table>
    {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
