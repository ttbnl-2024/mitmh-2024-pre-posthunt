import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-chromosome-of-a-highly-colored-fishs-eye';
const ANSWER = `MAILE VINES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      There are a few theories and concepts we can glean by reviewing the puzzle
      as presented, and, if we choose to invest the time, the flavortext
      <sup>
        <a id="ref1" href="#fn1">
          1
        </a>
      </sup>{' '}
      and title
      <sup>
        <a id="ref2" href="#fn2">
          2
        </a>
      </sup>
      .
    </p>
    <p>
      A glance through the 41 bulleted memories show a lot of "today" type words
      at the top and "foggy memory" words at the bottom. This is a clue that the
      list is presented in chronological order. One other thing we observe is
      that there are 10 clues with the phrase "How could I forget" and 10 cities
      at the bottom of the puzzle, each in a different country. By using a map
      tool, we can identify them and see what they may have in common with each
      other and the clues. For example, we could try to follow the first clue
      and see if these cities have any recent world records. As it turns out,
      Astana has the Guiness world record for the most name changes in modern
      times. This tells us the puzzle is about city name changes over the years.
    </p>
    <p>
      This puzzle requires some Research Puzzle techniques in order to solve
      efficiently, in this case regarding both etymology and historical context.
      For example - we see that Istanbul, probably the most famous changed-name
      city out there, is represented at the bottom of the puzzle. Once we
      pinpoint Istanbul, Constantinople, Byzantium and so forth in the
      chronology, it sets timeline points for more searching for and identifying
      other cities. As we can imagine, the earlier we go, the fuzzier the "which
      was before which" is known, especially as it goes earlier than written
      records. Some of the clues are therefore referring to specific events,
      such as Cartier visiting Hochelaga in 1535 which is the year that is used
      for the puzzle. The truly timeless ancient ones are simply stacked at the
      bottom with "foggy memory". There is also the enumerations for each city
      and a letter pool to help with spelling them.
    </p>
    <p>
      As we work through the cities, it will become apparent that the ones with
      "How could I forget!" are "out of time". As the work is completed, we will
      see that a missing name in one city's history has its etymology referenced
      in the timeline at the year/era of one of the other cities on the list. We
      find that the mis-associations will loop, allowing us to chain the cities
      in an order. Tsaritsyn's clue has an added part,{' '}
      <i>
        "I also just remembered that to fix my memory disorder, this memory
        should be placed last."
      </i>{' '}
      which further clues the loop and that Tsaritsyn should be placed last.
    </p>
    <p>
      Finally&mdash;with a heavy nod to the flavortext, it is the number of name
      changes that allow for progress&mdash;we index each of the required names in
      chained order to to spell our final phrase, as seen in the table:
    </p>
    <Table className="class-1">
      <thead>
        <tr>
          <th className="text-center">Country (Unique)</th>
          <th>
            Name changes (underline = city for extract, bold = extracted letter
            (misplaced in the chronology as if the next underlined city in this
            list))
          </th>
          <th className="text-center"># Name Changes</th>
          <th className="text-center"># into Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Australia</td>
          <td>
            <u>
              Po
              <b>m</b>
              beruk
            </u>{' '}
            &rarr; Edwards Crossing &rarr; Mobilong &rarr; Murray Bridge
          </td>
          <td className="text-center">3</td>
          <td className="text-center">M</td>
        </tr>
        <tr>
          <td>Kyrgyzstan</td>
          <td>
            Karakol &rarr; Przhevalsk &rarr;{' '}
            <u>
              Kar
              <b>a</b>
              kol
            </u>{' '}
             &rarr; Przhevalsk &rarr; Karakol
          </td>
          <td className="text-center">4</td>
          <td className="text-center">A</td>
        </tr>
        <tr>
          <td>Canada</td>
          <td>
            Hochelaga &rarr;{' '}
            <u>
              V<b>i</b>
              lle-Marie
            </u>{' '}
            &rarr; Montreal
          </td>
          <td className="text-center">2</td>
          <td className="text-center">I</td>
        </tr>
        <tr>
          <td>Kazakhstan</td>
          <td>
            Akmoly &rarr; Akmolinsk &rarr; Tselinograd &rarr; Akmola &rarr;
            Astana &rarr;{' '}
            <u>
              Nur-Su
              <b>l</b>
              tan
            </u>{' '}
            &rarr; Astana
          </td>
          <td className="text-center">6</td>
          <td className="text-center">L</td>
        </tr>
        <tr>
          <td>United States</td>
          <td>
            <u>
              T<b>e</b>
              rminus
            </u>{' '}
            &rarr; Marthasville &rarr; Atlanta
          </td>
          <td className="text-center">2</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td>Turkey</td>
          <td>
            Byzantium &rarr;{' '}
            <u>
              No
              <b>v</b>a Roma
            </u>{' '}
            &rarr; Constantinople &rarr; Istanbul
          </td>
          <td className="text-center">3</td>
          <td className="text-center">V</td>
        </tr>
        <tr>
          <td>Turkmenistan</td>
          <td>
            Amul &rarr; Chardjuy &rarr;{' '}
            <u>
              Len
              <b>i</b>
              nsk
            </u>{' '}
            &rarr; Novy Chardzhuy &rarr; Turkmenabat
          </td>
          <td className="text-center">4</td>
          <td className="text-center">I</td>
        </tr>
        <tr>
          <td>Vietnam</td>
          <td>
            Long Bien &rarr; Dai La &rarr; Thang Long &rarr;{' '}
            <u>
              Ha
              <b>n</b>
              oi
            </u>
          </td>
          <td className="text-center">3</td>
          <td className="text-center">N</td>
        </tr>
        <tr>
          <td>South Africa</td>
          <td>
            Lyttelton &rarr;{' '}
            <u>
              V<b>e</b>
              rwoerdburg
            </u>{' '}
            &rarr; Centurion
          </td>
          <td className="text-center">2</td>
          <td className="text-center">E</td>
        </tr>
        <tr>
          <td>Russia</td>
          <td>
            <u>
              T<b>s</b>
              aritsyn
            </u>{' '}
            &rarr; Stalingrad &rarr; Volgograd
          </td>
          <td className="text-center">2</td>
          <td className="text-center">S</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer to the puzzle is <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <p>All clues in puzzle order.</p>
      <Table className="class-2">
        <thead>
          <tr>
            <th>Time</th>
            <th>Correct city if applicable</th>
            <th>City in clue</th>
            <th>Clue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022</td>
            <td></td>
            <td>ASTANA</td>
            <td>
              We broke a world record a few years later, restoring our previous
              glory to what it is today. (6)
            </td>
          </tr>
          <tr>
            <td>2019</td>
            <td>NUR-SULTAN</td>
            <td>VILLE-MARIE</td>
            <td className="bg-[#ffffff]">
              How could I forget! I recall there was a biblical woman before
              that. Wasn't there? (5-5)
            </td>
          </tr>
          <tr>
            <td>1999</td>
            <td></td>
            <td>TURKMENABAT</td>
            <td>Today we have a cultivated place for our people. (11)</td>
          </tr>
          <tr>
            <td>1997</td>
            <td></td>
            <td>ASTANA</td>
            <td>We became what we are after moving some capital around. (6)</td>
          </tr>
          <tr>
            <td>1995</td>
            <td></td>
            <td>CENTURION</td>
            <td>
              We grew quite fond of our SuperSport cricket stadium after ending
              apartheid, which pushed us to who we are today. (9)
            </td>
          </tr>
          <tr>
            <td>1991</td>
            <td></td>
            <td>KARAKOL</td>
            <td>
              And today, ever since the Soviets left, it's the same as it was
              the first (and third) time. (7)
            </td>
          </tr>
          <tr>
            <td>1991</td>
            <td></td>
            <td>AKMOLA</td>
            <td>
              It was only a bit different from the very start when we stopped
              the Soviets and gained independence. (6)
            </td>
          </tr>
          <tr>
            <td>1967</td>
            <td>VERWOERDBURG</td>
            <td>HANOI</td>
            <td>How could I forget! Today, we are inside the rivers. (5)</td>
          </tr>
          <tr>
            <td>1962</td>
            <td></td>
            <td>LYTTELTON</td>
            <td>
              It wasn't that long ago that three areas became one - I'm pretty
              sure Viscount Chandos' family name had something to do with it.
              (9)
            </td>
          </tr>
          <tr>
            <td>1961</td>
            <td></td>
            <td>TSELINOGRAD</td>
            <td>
              We had virgin lands for about 30 years, but at least we had grain
              to eat. (11)
            </td>
          </tr>
          <tr>
            <td>1961</td>
            <td></td>
            <td>VOLGOGRAD</td>
            <td>
              Today, we can hear bulraks singing from the river we love. (9)
            </td>
          </tr>
          <tr>
            <td>1939</td>
            <td></td>
            <td>PRZHEVALSK</td>
            <td className="bg-[#ffffff]">
              We had someone's 100th birthday to celebrate. (10)
            </td>
          </tr>
          <tr>
            <td>1930</td>
            <td></td>
            <td>ISTANBUL</td>
            <td>
              We were the city to be in, and it's nobody's business but yours
              why you had to be here. (8)
            </td>
          </tr>
          <tr>
            <td>1927</td>
            <td></td>
            <td>NOVY CHARDZHUY</td>
            <td>
              It only took three years for us to ditch the Russian to refocus on
              the water feature. (4 9)
            </td>
          </tr>
          <tr>
            <td>1925</td>
            <td></td>
            <td>STALINGRAD</td>
            <td>
              But who could forget that guy with the nickname Koba - you might
              say he defended the town in the Civil War single-handedly! (10)
            </td>
          </tr>
          <tr>
            <td>1924</td>
            <td></td>
            <td>MURRAY BRIDGE</td>
            <td>
              Today, we can travel across the Millewa to go to the rural city as
              much as we want! (6 6)
            </td>
          </tr>
          <tr>
            <td>1924</td>
            <td>LENINSK</td>
            <td>NOVA ROMA</td>
            <td>
              How could I forget! There was a cultural revivalist nonprofit
              formed in 1998. Wasn't there? (4 4)
            </td>
          </tr>
          <tr>
            <td>1921</td>
            <td>KARAKOL</td>
            <td>POMBERUK</td>
            <td>
              How could I forget! The Ngarrindjeri had a crossing place with
              Sturt. (8)
            </td>
          </tr>
          <tr>
            <td>1888</td>
            <td></td>
            <td>PRZHEVALSK</td>
            <td>
              Then the geographer who found some horses and gazelles died here,
              and our leader insisted that we honor him. (10)
            </td>
          </tr>
          <tr>
            <td>1886</td>
            <td></td>
            <td>CHARDJUY</td>
            <td>There were four Persian brooks here. (8)</td>
          </tr>
          <tr>
            <td>1884</td>
            <td></td>
            <td>MOBILONG</td>
            <td>We got a council of a soft reed place. (8)</td>
          </tr>
          <tr>
            <td>1879</td>
            <td></td>
            <td>EDWARDS CROSSING</td>
            <td>
              We built a safe place for our prince (and all 6 of his
              predecessors) to get from one side to another. (7 8)
            </td>
          </tr>
          <tr>
            <td>1869</td>
            <td></td>
            <td>KARAKOL</td>
            <td>There was a military outpost by the Kyrgyz warm lake. (7)</td>
          </tr>
          <tr>
            <td>1847</td>
            <td></td>
            <td>ATLANTA</td>
            <td>Thanks to W&amp;A rail, we've prospered today. (7)</td>
          </tr>
          <tr>
            <td>1843</td>
            <td></td>
            <td>MARTHASVILLE</td>
            <td>
              The governor's daughter was a far more masterful choice than the
              others that were available. (12)
            </td>
          </tr>
          <tr>
            <td>1837</td>
            <td>TERMINUS</td>
            <td>NUR-SULTAN</td>
            <td>
              How could I forget! There was a light sultan before that. Wasn't
              there? (3-6)
            </td>
          </tr>
          <tr>
            <td>1832</td>
            <td></td>
            <td>AKMOLINSK</td>
            <td>
              We were granted town status, but other than that things remained
              very much the same. (9)
            </td>
          </tr>
          <tr>
            <td>1831</td>
            <td>HANOI</td>
            <td>LENINSK</td>
            <td>
              How could I forget! At one point, revolution came and we embraced
              Ulyanov's passing. (7)
            </td>
          </tr>
          <tr>
            <td>1830</td>
            <td>POMBERUK</td>
            <td>TSARITSYN</td>
            <td>
              How could I forget! We had only ourselves and our golden throne
              until the Whites moved in and everything went downhill from there.
              I also just remembered that to fix my memory disorder, this memory
              should be placed last. Otherwise, we would just go around in
              circles. Wouldn't we? (9)
            </td>
          </tr>
          <tr>
            <td>1830</td>
            <td></td>
            <td>AKMOLY</td>
            <td>A long time ago, there was a white grave. (6)</td>
          </tr>
          <tr>
            <td>1705</td>
            <td></td>
            <td>MONTREAL</td>
            <td>
              Tired of all the religiosity, we finally focused on Mount Royal.
              (8)
            </td>
          </tr>
          <tr>
            <td>1642</td>
            <td>VILLE-MARIE</td>
            <td>KARAKOL</td>
            <td>
              How could I forget! The people hated it here so much, the pendulum
              swung back the other way. Didn't it? (7)
            </td>
          </tr>
          <tr>
            <td>1589</td>
            <td>TSARITSYN</td>
            <td>VERWOERDBURG</td>
            <td>
              How could I forget! There was an assassination on H. F., the prime
              minister and a year later, we changed due to his death. Didn't we?
              (12)
            </td>
          </tr>
          <tr>
            <td>1535</td>
            <td></td>
            <td>HOCHELAGA</td>
            <td className="bg-[#ffffff]">
              When Cartier came here, we were at an Iroquois beaver dam. (9)
            </td>
          </tr>
          <tr>
            <td>1010</td>
            <td></td>
            <td>THANG LONG</td>
            <td>Ly Thai Tao came in with his rising dragon. (5 4)</td>
          </tr>
          <tr>
            <td>866</td>
            <td></td>
            <td>DAI LA</td>
            <td>We received a citadel and a big net. (3 2)</td>
          </tr>
          <tr>
            <td>330</td>
            <td></td>
            <td className="bg-[#ffffff]">CONSTANTINOPLE</td>
            <td>
              Our great emperor converted to Christianity with a capital C. (14)
            </td>
          </tr>
          <tr>
            <td>324</td>
            <td>NOVA ROMA</td>
            <td>TERMINUS</td>
            <td className="bg-[#ffffff]">
              How could I forget! Something started as a train station. (8)
            </td>
          </tr>
          <tr>
            <td>667 BC</td>
            <td></td>
            <td>BYZANTIUM</td>
            <td>
              The king set out to find the land opposite the city of the blind.
              (9)
            </td>
          </tr>
          <tr>
            <td>UNKNOWN</td>
            <td></td>
            <td>LONG BIEN</td>
            <td>
              My memory from back then is foggy, but I think we first had
              dragons intertwined. (4 4)
            </td>
          </tr>
          <tr>
            <td>UNKNOWN</td>
            <td></td>
            <td>AMUL</td>
            <td>
              My memory from back then is foggy, but I think it's the Gujarat
              Milk Marketing Federation's acronym.(4)
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <br />
    <AuthorsNotes>
      <br />
      <h3>
        <a id="fn1" href="#ref1">
          1.
        </a>{' '}
        About the flavortext
      </h3>
      <p>
        <i>
          "plus ça change[, plus c'est la même chose]" - Jean-Baptiste Alphonse
        </i>
      </p>
      <p>
        The Goddesses Mnemosyne (M) and Lethe (L) reminisce about things.
        Ostensibly, L seems to quote John the Baptist, but delving into this
        quote a bit, we see that it was not the Biblical prophet but a man
        literally named Jean-Baptiste. Looking into his last name, Alphonse, we
        see its etymology "prepare for battle" or "noble", which explains the
        rest of Lethe's description. "Change" is emphasized to help us with the
        extraction step of the puzzle, though it's also reinforced by "amount of
        changes" a few lines down if we haven't yet considered that the quantity
        of changes, not the number of city names, could be used for indexing.
      </p>
      <p>
        Beyond its mini-puzzle, the flavortext is rife with key concepts and
        words/phrases to help us solve this puzzle: change, meaning, and Lethe's
        mis-remembered memories are presented throughout the puzzle in a similar
        style to the flavortext with etymologies ("what I meant") of a place
        recalled at "the wrong time" in the chronology. There's a reason she's
        the goddess of forgetfulness.
      </p>
      <h3>
        <a id="fn2" href="#ref2">
          2.
        </a>{' '}
        About the title
      </h3>
      <p>
        Doesn't this wacky title just draw you in? It too can reward us with
        some insight into the puzzle, if we invest a few minutes. This title is
        a unique portion of a former name of Salvador Dali's 1954 work called
        (in English), <i>The Disintegration of the Persistence of Memory</i>. This is
        meaningful to the puzzle for two main reasons:
      </p>
      <ol>
        <li>
          This puzzle hinges on the apparent disintegration of the persistence
          of Lethe's memories.
        </li>
        <li>
          The 1954 work is hailed as a recreation, reimagining, or simply a
          variation of his original, and much more famous, 1931 work <i>The
          Persistence of Memory</i>. As Wikipedia notes, the 1954 painting portrays
          the earlier work "fragmenting into smaller component elements, and a
          series of rectangular blocks which reveal further imagery through the
          gaps between them, implying something beneath the surface of the
          original." This is a very poignant description of this puzzle.
        </li>
      </ol>
      <br />
      <h3>3. About the puzzle itself</h3>
      <p>
        The puzzle has gone through multiple changes itself. Version 1 had a lot
        of difficult clues, with the extraction clues being more abstract and no
        city pictures to help you out. Version 2 had revised clues and added the
        pictures. Version 3 had more revised clues and the flavortext was
        revised to add the explicit "amount of changes" hint. Version 4 changed
        to a completely different answer and added the enumerations and letter
        bank. Therefore I think it's safe to say that this puzzle's history is
        quite akin to the cities represented.
      </p>
    </AuthorsNotes>
    <Attributions>Map screenshots cropped from Google Maps.</Attributions>
    <style jsx global>{`
      .class-1 u,
      .class-1 td:nth-child(4),
      .class-2 td:nth-child(2),
      .class-2 td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-transform: uppercase;
      }
      .class-1 td:nth-child(n + 3) {
        text-align: center;
      }
      .example {
        color: var(--dark);
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
