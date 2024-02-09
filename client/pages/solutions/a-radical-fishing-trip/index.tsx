import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

const SLUG = 'a-radical-fishing-trip';
const ANSWER = `POWERED SHIP`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a list of poems and instructions to "Find these
      characters". We will quickly note that many of these poems seem to clue
      specific fish, but not all of them. From the flavor text and emojis, we
      can determine that the three varieties of poem are referring to "fish" (
      <InlineTwemoji>🐟</InlineTwemoji>), "bugs" (
      <InlineTwemoji>🐛</InlineTwemoji>), and "water" (
      <InlineTwemoji>🌊</InlineTwemoji>).
    </p>
    <p>
      Most of the poems are straightforward, though some are a bit more cryptic.
      Here is the full list of items that the poems clue:
    </p>
    <Table className="poems-table">
      <thead>
        <tr>
          <th>Poem</th>
          <th>Emoji</th>
          <th>Answer</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Sand meets the water
            <br />
            Where someone stands at the edge
            <br />
            At the boundary
          </td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>The shore</td>
          <td></td>
        </tr>
        <tr>
          <td>
            My sun-colored caudal fin <br />
            Flees from the sushi master
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A yellowtail</td>
          <td>"Caudal" refers to the tail end of a creature</td>
        </tr>
        <tr>
          <td>
            Tiger sharks watch out for me
            <br />
            for I'm their sole predator
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>An orca/killer whale</td>
          <td>
            The only predator of tiger sharks besides humans is the killer whale
          </td>
        </tr>
        <tr>
          <td>
            I nest on a stone
            <br />
            As they shout "double ugly"
            <br />
            I'm no fisher's prize
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A sculpin</td>
          <td>
            Sculpins are sometimes known as "double uglies" and they lay their
            eggs on nests made of stones
          </td>
        </tr>
        <tr>
          <td>
            The public docks their boats
            <br />
            At this spot along the coast
            <br />
            Safe haven for all
          </td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>A harbor</td>
          <td></td>
        </tr>
        <tr>
          <td>
            I craft colors in the sky
            <br />
            Not a bug, but a bright arch
          </td>
          <td>
            <InlineTwemoji>🐛</InlineTwemoji>
          </td>
          <td>A rainbow</td>
          <td></td>
        </tr>
        <tr>
          <td>
            I'm pretty, Señor,
            <br />
            But life is hard when I'm dried
            <br />
            And turned into flakes
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A bonito/skipjack tuna</td>
          <td>
            Reference to the name "Bonito" coming from the Spanish word for
            "pretty", as well as bonito flakes
          </td>
        </tr>
        <tr>
          <td>
            My salt-preserved eggs
            <br />
            Are a luxury dish fit
            <br />
            For an emperor
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A sturgeon</td>
          <td>Caviar is usually made from salt-preserved sturgeon eggs</td>
        </tr>
        <tr>
          <td>
            Wet grassy plain starts to flood
            <br />
            Plants are brown like autumn leaves
          </td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>A marsh</td>
          <td></td>
        </tr>
        <tr>
          <td>
            Normandy; soldiers stormed me
            <br />
            Now I beckon the tourists
          </td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>A beach</td>
          <td>
            The Normandy landings took place on a beach, which is now a popular
            tourist spot
          </td>
        </tr>
        <tr>
          <td>
            Luke's feathered friend? No, I'm scaled
            <br />
            and swim in Earth's circumference
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A porgy</td>
          <td>Reference to the Porgs from Star Wars</td>
        </tr>
        <tr>
          <td>
            From the capital
            <br />
            Comes a most gentle giant
            <br />
            Eating shrimp and krill
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A whale</td>
          <td></td>
        </tr>
        <tr>
          <td>
            Rising, falling, with the moon
            <br />
            Moving on every morning
          </td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>The tide</td>
          <td></td>
        </tr>
        <tr>
          <td>
            This autumn I heard
            <br />
            Someone say my noggin's more
            <br />
            Feline than bovine
          </td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>A bullhead</td>
          <td>Bullheads are a close relative to the catfish</td>
        </tr>
        <tr>
          <td>
            There is much wisdom found in
            <br />
            Spinning webs just like I do
          </td>
          <td>
            <InlineTwemoji>🐛</InlineTwemoji>
          </td>
          <td>A spider</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      We notice that each poem is either a haiku or a couplet. The flavor text
      and the end instructions are also in haiku form. Looking up some of these
      terms together and with hints such as "radical fishing trip", "foreign
      seas", and "find these characters", we discover we need to look at
      Japanese kanji. Each poem clues a specific kanji and the emoji indicator
      at the top of each poem represents a radical in the kanji, specifically on
      the left hand side: <InlineTwemoji>🐟</InlineTwemoji> (fish ={' '}
      <span lang="jp">⿂</span>), <InlineTwemoji>🐛</InlineTwemoji> (bug ={' '}
      <span lang="jp">⾍</span>), <InlineTwemoji>🌊</InlineTwemoji> (water ={' '}
      <span lang="jp">⺡</span>).
    </p>
    <p>
      Removing the left hand radical, we are left with another kanji, which has
      its translation somewhere in the poem. This also allows us to disambiguate
      any earlier answers.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Emoji</th>
          <th>Kanji (with romaji)</th>
          <th>Remaining Kanji</th>
          <th>Translation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shore</td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">渚</span> nagisa
          </td>
          <td>
            <span lang="jp">者</span>
          </td>
          <td>Someone</td>
        </tr>
        <tr>
          <td>Yellowtail</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鰤</span> buri
          </td>
          <td>
            <span lang="jp">師</span>
          </td>
          <td>Master</td>
        </tr>
        <tr>
          <td>Orca/​Killer Whale</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鯱</span> shachi
          </td>
          <td>
            <span lang="jp">虎</span>
          </td>
          <td>Tiger</td>
        </tr>
        <tr>
          <td>Sculpin</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鮖</span> kajika
          </td>
          <td>
            <span lang="jp">石</span>
          </td>
          <td>Stone</td>
        </tr>
        <tr>
          <td>Harbor</td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">港</span> minato
          </td>
          <td>
            <span lang="jp">巷</span>
          </td>
          <td>The public*</td>
        </tr>
        <tr>
          <td>Rainbow</td>
          <td>
            <InlineTwemoji>🐛</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">虹</span> niji
          </td>
          <td>
            <span lang="jp">工</span>
          </td>
          <td>Craft</td>
        </tr>
        <tr>
          <td>Bonito/​Skipjack Tuna</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鰹</span> katsuo
          </td>
          <td>
            <span lang="jp">堅</span>
          </td>
          <td>Hard</td>
        </tr>
        <tr>
          <td>Sturgeon</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鰉</span> higai
          </td>
          <td>
            <span lang="jp">皇</span>
          </td>
          <td>Emperor</td>
        </tr>
        <tr>
          <td>Marsh</td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">湫</span> kute
          </td>
          <td>
            <span lang="jp">秋</span>
          </td>
          <td>Autumn</td>
        </tr>
        <tr>
          <td>Beach</td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">浜</span> hama
          </td>
          <td>
            <span lang="jp">兵</span>
          </td>
          <td>Soldier</td>
        </tr>
        <tr>
          <td>Porgy</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鯛</span> tai
          </td>
          <td>
            <span lang="jp">周</span>
          </td>
          <td>Circumference</td>
        </tr>
        <tr>
          <td>Whale</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鯨</span> kujira
          </td>
          <td>
            <span lang="jp">京</span>
          </td>
          <td>Capital</td>
        </tr>
        <tr>
          <td>Tide</td>
          <td>
            <InlineTwemoji>🌊</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">潮</span> shio
          </td>
          <td>
            <span lang="jp">朝</span>
          </td>
          <td>Morning</td>
        </tr>
        <tr>
          <td>Bullhead</td>
          <td>
            <InlineTwemoji>🐟</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">鰍</span> kajika
          </td>
          <td>
            <span lang="jp">秋</span>
          </td>
          <td>Autumn</td>
        </tr>
        <tr>
          <td>Spider</td>
          <td>
            <InlineTwemoji>🐛</InlineTwemoji>
          </td>
          <td>
            <span lang="jp">蜘</span> kumo
          </td>
          <td>
            <span lang="jp">知</span>
          </td>
          <td>Wisdom</td>
        </tr>
      </tbody>
    </Table>
    <p>
      *The exact translation of this kanji is vague. Its most common meaning is
      used to refer to the public opinion, as in the "word on the street." This
      has been condensed to "the public" in order to fit in a haiku form.
    </p>
    <p>
      Upon further inspection, we discover that each of the answer kanji has a
      standard pronunciation that has the same number of syllables as the number
      of lines in the poem that clues it. We take the corresponding line of each
      poem that has the key word in it and index that number into the syllables
      of the kanji that the poem is describing.
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Poem</th>
          <th>Target</th>
          <th>Line</th>
          <th>Kanji Reading</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Sand meets the water
            <br />
            Where <b>someone</b> stands at the edge
            <br />
            At the boundary
          </td>
          <td>Someone</td>
          <td>2</td>
          <td>
            <span lang="jp">渚</span> na-<b>gi</b>-sa
          </td>
          <td>GI</td>
        </tr>
        <tr>
          <td>
            My sun-colored caudal fin <br />
            Flees from the sushi <b>master</b>
          </td>
          <td>Master</td>
          <td>2</td>
          <td>
            <span lang="jp">鰤</span> bu-<b>ri</b>
          </td>
          <td>RI</td>
        </tr>
        <tr>
          <td>
            <b>Tiger</b> sharks watch out for me
            <br />
            for I'm their sole predator
          </td>
          <td>Tiger</td>
          <td>1</td>
          <td>
            <span lang="jp">鯱</span> <b>sha</b>-chi
          </td>
          <td>SHA</td>
        </tr>
        <tr>
          <td>
            I nest on a <b>stone</b>
            <br />
            As they shout "double ugly"
            <br />
            I'm no fisher's prize
          </td>
          <td>Stone</td>
          <td>1</td>
          <td>
            <span lang="jp">鮖</span> <b>ka</b>-ji-ka
          </td>
          <td>KA</td>
        </tr>
        <tr>
          <td>
            <b>The public</b> docks their boats
            <br />
            At this spot along the coast
            <br />
            Safe haven for all
          </td>
          <td>The public</td>
          <td>1</td>
          <td>
            <span lang="jp">港</span> <b>mi</b>-na-to
          </td>
          <td>MI</td>
        </tr>
        <tr>
          <td>
            I <b>craft</b> colors in the sky
            <br />
            Not a bug, but a bright arch
          </td>
          <td>Craft</td>
          <td>1</td>
          <td>
            <span lang="jp">虹</span> <b>ni</b>-ji
          </td>
          <td>NI</td>
        </tr>
        <tr>
          <td>
            I'm pretty, Señor,
            <br />
            But life is <b>hard</b> when I'm dried
            <br />
            And turned into flakes
          </td>
          <td>Hard</td>
          <td>2</td>
          <td>
            <span lang="jp">鰹</span> ka-<b>tsu</b>-o
          </td>
          <td>TSU</td>
        </tr>
        <tr>
          <td>
            My salt-preserved eggs
            <br />
            Are a luxury dish fit
            <br />
            For an <b>emperor</b>
          </td>
          <td>Emperor</td>
          <td>3</td>
          <td>
            <span lang="jp">鰉</span> hi-ga-<b>i</b>
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            Wet grassy plain starts to flood
            <br />
            Plants are brown like <b>autumn</b> leaves
          </td>
          <td>Autumn</td>
          <td>2</td>
          <td>
            <span lang="jp">湫</span> ku-<b>te</b>
          </td>
          <td>TE</td>
        </tr>
        <tr>
          <td>
            Normandy; <b>soldiers</b> stormed me
            <br />
            Now I beckon the tourists
          </td>
          <td>Beach</td>
          <td>1</td>
          <td>
            <span lang="jp">浜</span> <b>ha</b>-ma
          </td>
          <td>HA</td>
        </tr>
        <tr>
          <td>
            Luke's feathered friend? No, I'm scaled
            <br />
            and swim in Earth's <b>circumference</b>
          </td>
          <td>Circumference</td>
          <td>2</td>
          <td>
            <span lang="jp">鯛</span> ta-<b>i</b>
          </td>
          <td>I</td>
        </tr>
        <tr>
          <td>
            From the <b>capital</b>
            <br />
            Comes a most gentle giant
            <br />
            Eating shrimp and krill
          </td>
          <td>Capital</td>
          <td>1</td>
          <td>
            <span lang="jp">鯨</span> <b>ku</b>-ji-ra
          </td>
          <td>KU</td>
        </tr>
        <tr>
          <td>
            Rising, falling, with the moon
            <br />
            Moving on every <b>morning</b>
          </td>
          <td>Morning</td>
          <td>3</td>
          <td>
            <span lang="jp">潮</span> shi-<b>o</b>
          </td>
          <td>O</td>
        </tr>
        <tr>
          <td>
            This <b>autumn</b> I heard
            <br />
            Someone say my noggin's more
            <br />
            Feline than bovine
          </td>
          <td>Autumn</td>
          <td>1</td>
          <td>
            <span lang="jp">鰍</span> <b>ka</b>-ji-ka
          </td>
          <td>KA</td>
        </tr>
        <tr>
          <td>
            There is much <b>wisdom</b> found in
            <br />
            Spinning webs just like I do
          </td>
          <td>Wisdom</td>
          <td>1</td>
          <td>
            <span lang="jp">蜘</span> <b>ku</b>-mo
          </td>
          <td>KU</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Using the blanks at the bottom of the puzzle, these syllables spell out{' '}
      <Clue>GIRISHA KAMI NI TSUITE HAIKU O KAKU</Clue>**. Submitting this asks
      us to complete the task, "Write a haiku about a Greek god." Once we have
      done so, we receive the answer <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      **Would technically be written with WO in proper Japanese but is
      pronounced the same
    </p>
    <style jsx global>{`
      .poems-table td:nth-child(1),
      .extract-table td:nth-child(1) {
        white-space: nowrap;
        font-size: 90%;
      }
      table th,
      table td {
        text-align: center !important;
      }
      .extract-table td:nth-child(5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
