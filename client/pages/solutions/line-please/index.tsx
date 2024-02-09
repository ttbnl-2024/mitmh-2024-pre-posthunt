import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'line-please';
const ANSWER = `INDIVISIBLE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a "new Prologue for <i>Romeo &amp; Juliet</i>", with
      "interruptions from the gallery", presented in iambic pentameter, along
      with a list of 3 letter abbreviations. Reading more closely, we realize
      that a rewording of the original Prologue is interleaved with famous
      quotes from Shakespeare characters (whose names start with the given
      abbreviations).
    </p>
    <p>
      The Prologue and interruptions are shown below in boldface and italics
      respectively. As confirmation, our new Prologue is a Shakespearean sonnet,
      just like the original. Therefore, it must have A-B-A-B C-D-C-D E-F-E-F
      G-G, and (mostly) adhere to iambic pentameter.
    </p>
    <div className="ml-8">
      <b>So, there's two fams, OGs</b>
      <i>-Himself is here</i> <br />
      <i>To judge and punish both-</i> <b>with dead-ass props.</b> <br />
      <b>(Verona was their house,</b> <i>before I died</i> <br />
      <i>I was despised by every living man,</i> <br />
      <i>My brother and his happy little band</i> <br />
      <i>"The Few," he called them then,</i> <b>back in the day.)</b> <br />
      <b>New bloods fought</b> <i>(but TBH flow'rs can't fight</i> <br />
      <i>An early frost. They just, like, die.) The rest</i> <br />
      <i>Is silence</i> <b>over who dissed Pops's Pops.</b> <br />
      <b>And bros in pow'r—</b> <i>their hungry faces lean—</i> <br />
      <i>From cloak and dagger bagmen swole and grey,</i> <br />
      <i>For Vanity</i> <b>they looked the other way.</b> <br />
      <b>Out of these rival gangs,</b> <i>many could end</i> <br />
      <i>Their hook-up with a gallows,</i> <b>who ruled the city,</b> <br />
      <b>Two teens made plans that led them both</b> <i>to grief.</i> <br />
      <i>Which be so proud, made their 'rents low-key stoop,</i> <br />
      <i>Instructed by their sorrow: "Yo, do quickly</i> <br />
      <i>What y'all has gotta do so well:</i> <b>to die."</b> <br />
      <b>The parents went all extra</b>, <i>sitting round</i> <br />
      <i>And mourning Kings now decades underground,</i> <br />
      <i>Until they took a patient, gentle step</i> <br />
      <i>Towards love, rest, weariness, like,</i> <b>on the pity,</b> <br />
      <b>And walked it back:</b> <i>"This weird friend zone we share</i> <br />
      <i>In bed is misery, so, be aware,</i> <br />
      <i>That by mid-March</i> <b>our old feud's done. No lie."</b> <br />
      <b>The story of this double suicide,</b> <br />
      <b>And parents' rage,</b> <i>should make you kneel and pray:</i> <br />
      <i>Thank God you backed off this town you despise.</i> <br />
      <i>The world elsewhere's</i> <b>continuing to grow.</b> <br />
      <b>Which only</b> <i>beastly men (or manly beasts,</i> <br />
      <i>Y'know, right?)</i> <b>stopped when their own shorties died.</b> <br />
      <b>The next two hours we'll drop you all we know</b> <br />
      <b>At which time,</b> <i>with none left to protest, hearts</i> <br />
      <i>Of stone, and even stonier in parts,</i> <br />
      <i>I swear it.</i> <b>Turn your cell phones off and hear</b> <br />
      <b>That lovers' tale you slept through Freshman year.</b>
    </div>

    <p>Turning to the interruptions, we notice:</p>
    <ol>
      <li>Each (3-letter) character provides one interruption;</li>
      <li>They are all from different plays; and</li>
      <li>They take place in unique Acts and Scenes.</li>
    </ol>

    <Table id="quotes" className="mt-2">
      <thead>
        <tr>
          <th>Int. New R&J Line</th>
          <th>Interruption</th>
          <th>Original</th>
          <th>Character</th>
          <th>Play</th>
          <th>Act, Scene</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Himself is here / To judge and punish both</td>
          <td>Play judge and executioner all himself, (2488)</td>
          <td>Guiderius</td>
          <td>CYMBELINE</td>
          <td>IV, 2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>before I died / I was despised by every living man</td>
          <td>
            Here lie I, Timon; who, alive, all living men did hate: (2644)
          </td>
          <td>Alcibiades</td>
          <td>TIMON OF ATHENS</td>
          <td>V, 4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            My brother and his happy little band / "The Few," he called them
            then,
          </td>
          <td>We few, we happy few, we band of brothers; (2295)</td>
          <td>King Henry</td>
          <td>HENRY V</td>
          <td>IV, 3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            (but TBH flow'rs can't fight / An early frost. They just, like,
            die.)
          </td>
          <td>
            Death lies on her like an untimely frost / Upon the sweetest flower
            of all the field. (2685)
          </td>
          <td>Capulet</td>
          <td>ROMEO AND JULIET</td>
          <td>IV, 5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>The rest / Is silence</td>
          <td>... the rest is silence. Dies. (4020)</td>
          <td>Hamlet</td>
          <td>HAMLET</td>
          <td>V, 2</td>
        </tr>
        <tr>
          <td>4</td>
          <td>their hungry faces lean—</td>
          <td>... a hungry lean-faced villain, (1675)</td>
          <td>Antipholus of Ephesus</td>
          <td>THE COMEDY OF ERRORS</td>
          <td>V, 1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>From cloak and dagger bagmen swole and grey, / For Vanity </td>
          <td>[[Hal talking about Falstaff]] (1428)</td>
          <td>Hal</td>
          <td>HENRY IV PART I</td>
          <td>II, 4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>many could end / Their hook-up with a gallows,</td>
          <td>Many a good hanging prevents a bad marriage; (310)</td>
          <td>Feste</td>
          <td>TWELFTH NIGHT</td>
          <td>I, 5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            to grief. / Which be so proud, made their 'rents low-key stoop, /
            Instructed by their sorrow:
          </td>
          <td>
            I will instruct my sorrows to be proud; / for grief is proud, and
            makes his owner stoop. (984)
          </td>
          <td>Constance</td>
          <td>KING JOHN</td>
          <td>III, 1</td>
        </tr>
        <tr>
          <td>6</td>
          <td>"Yo, do quickly / What y'all has gotta do so well: </td>
          <td>
            If it were done when 'tis done, then 'twere well / It were done
            quickly: (474)
          </td>
          <td>Macbeth</td>
          <td>MACBETH</td>
          <td>I, 7</td>
        </tr>
        <tr>
          <td>7</td>
          <td>sitting round / And mourning Kings now decades underground,</td>
          <td>
            let us sit upon the ground / And tell sad stories of the death of
            kings; (1565)
          </td>
          <td>King Richard</td>
          <td>RICHARD II</td>
          <td>III, 2</td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            Until they took a patient, gentle step / Towards love, rest,
            weariness, like,
          </td>
          <td>
            I'll be as patient as a gentle stream / And make a pastime of each
            weary step, / Till the last step have brought me to my love; (1009)
          </td>
          <td>Julia</td>
          <td>THE TWO GENTLEMEN OF VERONA</td>
          <td>II, 7</td>
        </tr>
        <tr>
          <td>8</td>
          <td>"This weird friend zone we share / In bed is misery,</td>
          <td>Misery acquaints a man with / strange bedfellows. (1127)</td>
          <td>Trinculo</td>
          <td>THE TEMPEST</td>
          <td>II, 2</td>
        </tr>
        <tr>
          <td>8</td>
          <td>so, be aware, / That by mid-March</td>
          <td>Beware the ides of March. (103 or 109)</td>
          <td>Soothsayer</td>
          <td>JULIUS CAESAR</td>
          <td>I, 2</td>
        </tr>
        <tr>
          <td>10</td>
          <td>should make you kneel and pray: / Thank God</td>
          <td>Down on your knees, / And thank heaven, (1711)</td>
          <td>Rosalind</td>
          <td>AS YOU LIKE IT</td>
          <td>III, 5</td>
        </tr>
        <tr>
          <td>10</td>
          <td>you backed off this town you despise. / The world elsewhere's</td>
          <td>
            Despising, / For you, the city, thus I turn my back: / There is a
            world elsewhere. (2506)
          </td>
          <td>Coriolanus</td>
          <td>CORIOLANUS</td>
          <td>III, 3</td>
        </tr>
        <tr>
          <td>11</td>
          <td>beastly men (or manly beasts, / Y'know, right?)</td>
          <td>makes a beast a man, in some other, a man / a beast. (2564)</td>
          <td>Falstaff</td>
          <td>THE MERRY WIVES OF WINDSOR</td>
          <td>V, 5</td>
        </tr>
        <tr>
          <td>13</td>
          <td>with none left to protest, hearts</td>
          <td>
            I love you with so much of my heart that none is / left to protest.
            (1937)
          </td>
          <td>Beatrice</td>
          <td>MUCH ADO ABOUT NOTHING</td>
          <td>IV, 1</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Of stone, and even stonier in parts, / I swear it.</td>
          <td>
            does not the stone rebuke me / For being more stone than it? (3331)
          </td>
          <td>Leontes</td>
          <td>THE WINTER'S TALE</td>
          <td>V, 3</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Since we have unique Act and Scene pairs, we use that as an ordering, then
      index the number of the line interrupted into the source play's title.
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Act</th>
          <th>Scene</th>
          <th>Play</th>
          <th>Line</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>I</td>
          <td>ii</td>
          <td>
            <Monospace>JULIUS CAESAR</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>I</td>
          <td>v</td>
          <td>
            <Monospace>TWELFTH NIGHT</Monospace>
          </td>
          <td>5</td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>I</td>
          <td>vii</td>
          <td>
            <Monospace>MACBETH</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>II</td>
          <td>ii</td>
          <td>
            <Monospace>THE TEMPEST</Monospace>
          </td>
          <td>8</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>II</td>
          <td>iv</td>
          <td>
            <Monospace>HENRY IV PART I</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>II</td>
          <td>vii</td>
          <td>
            <Monospace>THE TWO GENTLEMEN OF VERONA</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>III</td>
          <td>i</td>
          <td>
            <Monospace>KING JOHN</Monospace>
          </td>
          <td>6</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>III</td>
          <td>ii</td>
          <td>
            <Monospace>RICHARD II</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>III</td>
          <td>iii</td>
          <td>
            <Monospace>CORIOLANUS</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>III</td>
          <td>v</td>
          <td>
            <Monospace>AS YOU LIKE IT</Monospace>
          </td>
          <td>10</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>IV</td>
          <td>i</td>
          <td>
            <Monospace>MUCH ADO ABOUT NOTHING</Monospace>
          </td>
          <td>13</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>IV</td>
          <td>ii</td>
          <td>
            <Monospace>CYMBELINE</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>IV</td>
          <td>iii</td>
          <td>
            <Monospace>HENRY V</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>IV</td>
          <td>v</td>
          <td>
            <Monospace>ROMEO AND JULIET</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>V</td>
          <td>i</td>
          <td>
            <Monospace>THE COMEDY OF ERRORS</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>V</td>
          <td>ii</td>
          <td>
            <Monospace>HAMLET</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>V</td>
          <td>iii</td>
          <td>
            <Monospace>THE WINTER'S TALE</Monospace>
          </td>
          <td>13</td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>V</td>
          <td>iv</td>
          <td>
            <Monospace>TIMON OF ATHENS</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>V</td>
          <td>v</td>
          <td>
            <Monospace>THE MERRY WIVES OF WINDSOR</Monospace>
          </td>
          <td>11</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      The extracted letters yield the cluephrase{' '}
      <Clue>AFTER GOD SINCE MCMLIV</Clue>. In the year MCMLIV (1954) the U.S.
      Congress was so anti-communist that they legislated a change in the Pledge
      of Allegiance, adding "under God" to the loyalty oath. "One nation,
      indivisible..." was replaced by "One nation, under God, <b>indivisible</b>
      . Thus, having come "after God" since 1954,{' '}
      <Answerize>{ANSWER}</Answerize> is our answer!
    </p>
    <style jsx global>{`
      #quotes th:nth-child(1),
      #quotes td:nth-child(1),
      #quotes th:nth-child(6),
      #quotes td:nth-child(6),
      #extraction td:nth-child(1),
      #extraction td:nth-child(2),
      #extraction td:nth-child(4),
      #extraction td:nth-child(5) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
