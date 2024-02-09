import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';

const SLUG = 'a-more-6-28-496';
const ANSWER = `VOTE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <MathJaxContext>
    <MathJax>
      <Solution puzzleData={puzzleData} answer={ANSWER}>
        <p>
          This puzzle presents us with a lot to begin with. First, note there
          are two sections. The second section has a boxed expression whose
          variables are all Greek letters. The Greek letters only appear in the
          second section, so it seems like we are going to need to use the first
          section to figure out how to determine what the Greek variables should
          be, then plug them into the expression.
        </p>
        <p>
          The beginning defines some ground rules, using "x" as a placeholder.{' '}
          <CtCMath math="\mathbb{N}" /> and <CtCMath math="\mathbb{R}" /> are
          familiar, generally referring to the natural and real numbers,
          respectively, but <CtCMath math="\mathbb{E}" /> and{' '}
          <CtCMath math="\mathbb{P}" /> don't seem to make much sense here.
          Nevertheless:
        </p>
        <ul>
          <li>
            <CtCMath math="t_{\mathbf{C}}" /> and{' '}
            <CtCMath math="x \neq t_{\mathbf{C}} \in \mathbb{N}" /> indicate
            that all normally set variables are natural numbers, except for{' '}
            <CtCMath math="t_c" />, which is a real number.
          </li>
          <li>
            Bold lowercase variables (<CtCMath math="\mathbf{x}" />) are in{' '}
            <CtCMath math="\mathbb{P}" />.
          </li>
          <li>
            Bold uppercase variables (<CtCMath math="\mathbf{X}" />) are subsets
            of <CtCMath math="\mathbb{P}" />.
          </li>
          <li>
            Calligraphic variables (<CtCMath math="\mathcal{X}" />) are subsets
            of <CtCMath math="\mathbb{E}" />.
          </li>
        </ul>
        <p>
          Also, <CtCMath math="\mathbb{P}" /> is somehow embedded in{' '}
          <CtCMath math="\mathbb{E}" />.
        </p>
        <p>We then see definitions:</p>
        <ul>
          <li>
            <CtCMath math="k \in [1, N_*]" />
          </li>
          <li>
            <CtCMath math="\mathcal{U} \equiv \mathcal{F} \cup \mathcal{T} \cup \bigcup\limits_{k}{\mathcal{S}_{k}}" />
            .
          </li>
        </ul>
        <p>
          Skipping the definition of <CtCMath math="\mathcal{W}" />, we get
          something interesting:
        </p>
        <ul>
          <li>
            <CtCMath math="\mathbf{C} = \mathbf{C}_{H} \cup \mathbf{C}_{S}" />
          </li>
          <li>
            <CtCMath math="\mathbf{C}_{S} = \bigcup\limits_{k}{\mathbf{S}_{k}}" />
          </li>
          <li>
            (Skipping forward),{' '}
            <CtCMath math="\mathbf{C}_{H} = \bigcup\limits_{k}{\mathbf{R}_{k}}" />
          </li>
        </ul>
        <p>
          <CtCMath math="\mathbf{C}" />, a subset of{' '}
          <CtCMath math="\mathbb{P}" />, is the union of{' '}
          <CtCMath math="\mathbf{C}_H" /> and <CtCMath math="\mathbf{C}_S" />.
          Elements of <CtCMath math="\mathbf{C}_S" /> are denoted by{' '}
          <CtCMath math="\mathbf{S}" />, but elements of{' '}
          <CtCMath math="\mathbf{C}_H" /> are denoted by{' '}
          <CtCMath math="\mathbf{R}" />. Why might that be? What "
          <CtCMath math="H" />
          ", with a corresponding "<CtCMath math="S" />
          ", has elements "<CtCMath math="R" />
          "?
        </p>
        <p>
          Hopefully the <CtCMath math="\mathcal{U}" /> and{' '}
          <CtCMath math="\mathcal{S}" /> have clued us in:{' '}
          <CtCMath math="\mathbf{C}" /> is <i>Congress</i>, with{' '}
          <CtCMath math="\mathbf{C}_H" /> and <CtCMath math="\mathbf{C}_S" />{' '}
          denoting the House and Senate, respectively. If{' '}
          <CtCMath math="\mathbf{C}" /> is Congress, it's a collection of
          people—therefore <CtCMath math="\mathbb{P}" /> must be people. Now
          each chamber is apparently the union of all the members of{' '}
          <CtCMath math="\mathbf{R}_k" />
          and <CtCMath math="\mathbf{S}_k" />. What could <CtCMath math="k" />{' '}
          represent? Well given that it is an integer from <CtCMath math="1" />{' '}
          to <CtCMath math="N_*" />, it makes sense that <CtCMath math="k" />{' '}
          enumerates over the states. It's unclear how we assign numbers to
          states at this point.
        </p>
        <p>Continuing:</p>
        <ul>
          <li>
            <CtCMath math="c_{1} \in \{1, 2, 3\}" />
          </li>
          <li>
            <CtCMath math="c_{2} \in \{1, 2, 3\}" />
          </li>
          <li>
            <CtCMath math="c_{1} \neq c_{2}" />
          </li>
          <li>
            <CtCMath math="\mathbf{S}_{k} = \{ \mathbf{s}_{k}(c_{1},t_{\mathbf{C}}), \mathbf{s}_{k}(c_{2},t_{\mathbf{C}}) \}" />
          </li>
        </ul>
        <p>
          We see that a given state's senators <CtCMath math="\mathbf{S}_k" />{' '}
          is a set of two people. The variable <CtCMath math="t" /> often
          represents time, so that would be one argument of{' '}
          <CtCMath math="\mathbf{s}" />. The other is a bit confusing, but a bit
          of research reveals that senators are in one of three "classes" such
          that the senators of a state don't share a class. Therefore, a person
          can be uniquely identified as a senator holding a given seat at a
          given time. Looking a bit down, we can see something similar for
          representatives: <CtCMath math="\mathbf{r}(d, t_{\mathbf{C}})" /> is a
          function of <CtCMath math="d" />, presumably the district number, and
          time.
        </p>
        <p>
          Moving on, it seems like we are going to have to figure out what{' '}
          <CtCMath math="t_{\mathbf{C}}" /> is. It's apparently a time, but the
          subscript indicates it's related to Congress. We also have bounds on{' '}
          <CtCMath math="t_{\mathbf{C}}" /> from the introduction—it seems to go
          from 1 (not 0, interestingly) to about 118.5. Well, the current
          Congress is the 118th, and (at the time of Mystery Hunt) we are about
          halfway through it. Perhaps <CtCMath math="t_{\mathbf{C}}" /> refers
          to the Congress number.
        </p>
        <p>
          If <CtCMath math="t_{\mathbf{C}}" /> is the Congress, then{' '}
          <CtCMath math="t_{P} \equiv \left\lfloor\frac{t_\mathbf{C} + 2}{5}\right\rfloor" />{' '}
          tells us that <CtCMath math="t_P" /> ticks over every ten years or so.
          It also appears to be connected to <CtCMath math="|\mathcal{S}_k|" />.
          Taking the absolute value of a state doesn't make much sense, but{' '}
          <CtCMath math="|\mathcal{S}_k|" /> also could denote cardinality—the
          number of elements in a set. Given that people (
          <CtCMath math="\mathbb{P}" />) are embedded in{' '}
          <CtCMath math="\mathbb{E}" />, of which <CtCMath math="\mathcal{S}" />{' '}
          is a subset, that might represent the population. And given that the
          census happens decennially, <CtCMath math="t_P" /> probably refers to
          the census number.
        </p>
        <p>We are able to test this now&mdash;consider these statements:</p>
        <ul>
          <li>
            <CtCMath math="p_{k}(t_{P}) = \left|\mathcal{S}_{k}\right| \text{ at } t_{P}" />
          </li>
          <li>
            <CtCMath math="p_{12} (24) &lt; p_4 (24) &lt; p_{17} (24)" />
          </li>
          <li>
            <CtCMath math="p_{44} (19) - p_{44} (18) = 2350" />
          </li>
        </ul>
        <p>
          If this is correct, then for the 24th census (which happens to be the
          most recent one), the population of state 12 is less than the
          population of state 4, which is itself less than the population of
          state 17. Additionally, the population of state 44 grew by 2,350 from
          the 18th census to the 19th census. There's only one state that grew
          by that amount: Wyoming. And it just so happens that Wyoming was the
          44th state admitted to the United States. And if we apply that logic
          to the inequalities, we can confirm that in 2020, North Carolina was
          less populous than Georgia, which was less populous than Ohio. (In
          fact, they were consecutive in the list.)
        </p>
        <p>We skipped over something earlier, though:</p>
        <ul>
          <li>
            <CtCMath math="t_{\mathbf{C}} \gtrsim 6.99 \Rightarrow \mathcal{W} \subseteq \mathcal{F}" />
          </li>
          <li>
            <CtCMath math="t_{\mathbf{C}} \gtrsim 6.9 \Rightarrow \mathcal{C}(\mathcal{U}) = \mathcal{W}" />
          </li>
        </ul>
        <p>
          <CtCMath math="\mathcal{W}" /> is defined as a subset of{' '}
          <CtCMath math="\mathcal{F}" />, which itself together with{' '}
          <CtCMath math="\mathcal{T}" /> and all{' '}
          <CtCMath math="\mathcal{S}_k" /> comprise the United States. Also,{' '}
          <CtCMath math="\mathcal{W}" /> came into being right at the end of the
          6th Congress. The big piece of legislation from around then is the
          creation of the District of Columbia; thus{' '}
          <CtCMath math="\mathcal{W}" /> probably refers to that.{' '}
          <CtCMath math="\mathcal{F}" /> then means places under Federal
          control, while <CtCMath math="\mathcal{T}" /> would be territories.
          And presumably <CtCMath math="\mathcal{C}" /> takes a geographic unit
          and returns it capital&mdash;so the capital of the US is Washington D.C.,
          as it has been since the 6th Congress first met there in November 1800
          (pursuant to the Residence Act of 1790, which specified the capital
          would transfer there later in the year, and the District of Columbia
          Organic Act of 1801, which put the area under Congressional control).
        </p>
        <p>Continuing:</p>
        <ul>
          <li>
            <CtCMath math="N_{r}(k)\rvert_{t_{P}} \underset{\sim}{\propto} p_{k}(t_{P})" />
          </li>
          <li>
            <CtCMath math="N_{R} = \sum\limits_{k}{N_{r}(k)}" />
          </li>
        </ul>
        <p>
          It appears then we have <CtCMath math="N_r" />: a function taking a
          state, being roughly proportional to the population of the state, with
          the total over all states being <CtCMath math="N_R" />. Given we know{' '}
          <CtCMath math="\mathbf{R}" /> refers to representatives,{' '}
          <CtCMath math="N_R" /> likely is the total number of representatives.
          We can confirm this further down: <CtCMath math="E_{\mathcal{U}}" />{' '}
          is a function of the number of states and the number of
          representatives, with a weird change adding the smallest number of
          representatives any state has. That "weird change" is the 23rd
          amendment; <CtCMath math="E_{\mathcal{U}}" /> is the number of
          electoral votes there are in a given election.
        </p>
        <p>
          The representatives section is messy. But that is because the
          apportionment of representatives has been messy. There seem to be
          three subsets of representatives here: <CtCMath math="\mathbf{R}_D" />
          , <CtCMath math="\mathbf{R}_{al}" />, and{' '}
          <CtCMath math="\mathbf{R}_{pl}" />
          . But aren't states just chopped into districts, with one
          representative per district? That would certainly seem to be what{' '}
          <CtCMath math="D" /> is defining&mdash;breaking up each state{' '}
          <CtCMath math="\mathcal{S}" /> into single-member districts{' '}
          <CtCMath math="\mathcal{D}" />.
        </p>
        <p>
          But after perusing the House of Representatives Wikipedia article, we
          will likely find that <CtCMath math="al" /> probably refers to
          "at-large" representatives. This explains the statements "contrary to
          popular terminology": while a single-representative state is normally
          said to have a single at-large representative, the puzzle is instead
          defining them as a single-member district (specifically district 1).
        </p>
        <p>
          But while the at-large representative is now confined to only states
          with a single representative, this wasn't always so. As recently as
          1969 some states used the "general ticket", assigning some or all of
          their slate of representatives from a statewide election. In fact, in
          the 1st Congress four states used the general ticket, electing all
          their representatives from a statewide ballot. Complicating matters,
          sometimes states used a combination of the general ticket and
          districts: for instance, in 1965, Ohio had 23 districts and one
          at-large representative representing the entire state.
        </p>
        <p>
          That explains "<CtCMath math="al" />
          ," but what about "<CtCMath math="pl" />
          "? Well, until they were banned in 1842, some states used plural
          districts: districts with multiple representatives. An illustration:
          in the 3rd Congress, Massachusetts had 14 representatives. They were
          distributed as follows: four representatives for district 1, four
          representatives for district 2, two representatives for district 3,
          three representatives for district 4, and one at-large representative.
          In the 9th Congress, Pennsylvania's 18 representatives were spread
          among 11 districts, with three in districts 1, 2, and 3, two in
          district 4, and one in each of the rest.
        </p>
        <p>Thus, these next lines:</p>
        <ul className="list-none p-0 overflow-x-auto overflow-y-clip space-y-3">
          <li>
            <CtCMath math="t_{\mathbf{C}} \geq 92 \Rightarrow \mathcal{S}_{k} \cong \bigcup\limits_{d=1}^{N_{D}(k)}\mathcal{D}_{k,d} " />
          </li>
          <li>
            <CtCMath math=" t_{\mathbf{C}} \geq 92 \Rightarrow N_{r}(k) = N_{D}(k)  " />
          </li>
          <li>
            <CtCMath math="N_{r}(k) = N_{D}(k) \Rightarrow \mathbf{R}_{k} = \mathbf{R}_{D}(k)" />
          </li>
          <li>
            <CtCMath math="\mathbf{R}_{k} = \left \{\begin{array}{lr}\mathbf{R}_{D}(k) \cup \mathbf{R}_{al}(k) \cup \mathbf{R}_{pl}(k) &amp; 1 \leq t_{\mathbf{C}} &lt; 92\\ \mathbf{R}_{D}(k) &amp; 92 \leq t_{\mathbf{C}} \\\end{array} \right \}" />
          </li>
        </ul>
        <p>
          note that from the 92nd Congress on, each state was divided into one
          or more single-member districts that together comprised the entire
          state (i.e., no more plural districts, multi-member at-large districts,
          or at–large representatives alongside single-member districts).
        </p>
        <p>
          These and the following lines also state that before the 92nd
          Congress, the representatives from a given state could come from
          single-member districts, representatives at-large, or plural
          districts. The "non-exhaustive list of combinations" consolidates some
          of the general rules: plural districts were only used between the 3rd
          and 27th Congresses, inclusive; for the 49th and 50th Congresses,
          at-large districts were only used in Pennsylvania; and for a listed
          series of Congresses, states did not combine single-member districts
          and at-large districts.
        </p>
        <p>
          Phew. Moving on, we've already figured out{' '}
          <CtCMath math="E_{\mathcal{U}}" />.
        </p>
        <p>Next it seems we have a congruency:</p>
        <p>
          <CtCMath math="\mathcal{S}_{10}\rvert_{t_{\mathbf{C}}=33} \cong \left(\mathcal{S}_{10} \cup \mathcal{S}_{35}\right)\rvert_{t_{\mathbf{C}}=118}" />
        </p>
        <p>
          Looking up the state numbers, we have Virginia and West Virginia. This
          seems to be stating that West Virginia and Virginia, when combined,
          are the same landmass as Virginia in 1853, which checks out.
        </p>
        <p>Next we have a surface integral:</p>
        <p>
          <CtCMath
            math="\mathcal{S}_{49} \in \mathcal{U} \Rightarrow \iint{\mathcal{S}_{49}} &gt; \iint{\mathcal{S}_{k}} ~\forall k \neq 49"
            display
          />
        </p>
        <p>
          These are generally measures of area. This seems to be stating that
          the 49th state (Alaska) had a larger area than all other states once
          it became a state. Again, this checks out.
        </p>
        <p>Next:</p>
        <ul>
          <li>
            <CtCMath math="\mathbf{p}_{n} = \mathbf{o}(\mathcal{U},t_{\mathbf{C}})" />
          </li>
          <li>
            <CtCMath math="\mathbf{P} = \bigcup\limits_{n}\mathbf{p}_{n}" />
          </li>
          <li>
            <CtCMath math="\mathbf{p}_{44} = \mathbf{s}_{21}(3, 109)" />
          </li>
          <li>
            <CtCMath math="\mathbf{v}_{n} = \mathbf{o}^{\prime}(\mathcal{U},t_{\mathbf{C}})" />
          </li>
          <li>
            <CtCMath math="\mathbf{p}_{37} = \mathbf{v}_{36}" />
          </li>
        </ul>
        <p>
          We see <CtCMath math="\mathbf{o}" />, <CtCMath math="\mathbf{O}" />,
          and later on <CtCMath math="\mathbf{p}" /> and{' '}
          <CtCMath math="\mathbf{v}" />. Apparently,{' '}
          <CtCMath math="\mathbf{o}" /> takes a geographical area and time and
          generates a person. When the geographical area is a Congressional
          district, it returns the Congressperson for that district. Looking
          down, we see that when <CtCMath math="\mathbf{o}" /> takes{' '}
          <CtCMath math="\mathcal{U}" />, we call it{' '}
          <CtCMath math="\mathbf{p}" />. We can evaluate{' '}
          <CtCMath math="\mathbf{p}_{44} = \mathbf{s}_{21}(3, 109)" />: it is
          Barack Obama. He was the 44th president, so it would make sense to
          think that <CtCMath math="\mathbf{p}" /> are presidents. If{' '}
          <CtCMath math="\mathbf{o}" /> on <CtCMath math="\mathcal{U}" /> yields
          the president, and <CtCMath math="\mathbf{o}" /> on{' '}
          <CtCMath math="\mathcal{D}" /> yields a representative, it seems that{' '}
          <CtCMath math="\mathbf{o}" /> generates the senior government officer
          elected for a given governmental unit. (Scrolling down, we see that{' '}
          <CtCMath math="\mathbf{o}" /> on a state yields{' '}
          <CtCMath math="\mathbf{g}" />&mdash;given that "governor" begins with a
          "g", that's a good sign.)
        </p>
        <p>
          It appears that <CtCMath math="\mathbf{p}" /> (and its kin) are
          defined sequentially, so that <CtCMath math="\mathbf{p}_{44}" /> is
          the 44th president. We then have <CtCMath math="\mathbf{v}" /> defined
          as the derivative of <CtCMath math="\mathbf{p}" />? We can evaluate{' '}
          <CtCMath math="\mathbf{p}_{37} = \mathbf{v}_{36}" />: it was Richard
          Nixon, the 37th president. A brief look shows that he was the 36th
          vice president, so that's presumably <CtCMath math="\mathbf{v}" />.
        </p>
        <p>Now:</p>
        <ul className="overflow-x-auto overflow-y-clip">
          <li>
            <CtCMath math="E : (\mathbf{x}, t_{\mathbf{C}}) \rightarrow \mathbb{N}_{0} \leq E_{\mathcal{U}}(t_{\mathbf{C}})" />
          </li>
          <li>
            <CtCMath math=" E(\mathbf{p}_{8}, 25) = 170" />
          </li>
          <li>
            <CtCMath math=" E_{\mathcal{U}}(107) - (E(\mathbf{p}_{43},107) + E(\mathbf{v}_{45},107)) = 1" />
          </li>
        </ul>
        <p>
          Now we have <CtCMath math="E" />, but with no subscript. It takes a
          person and a time; it would make sense for that to be the number of
          electoral votes a person got at a given time. Indeed, Martin Van Buren
          got 170 electoral votes as a result of the 1836 election, and George
          W. Bush and Al Gore got all but one of the electoral votes available
          in 2000 (one was not cast due to a faithless elector).
        </p>
        <p>
          Moving on, we see a new function, <CtCMath math="a" />:
        </p>
        <ul>
          <li>
            <CtCMath math="a(\mathbf{p}_{2}) = a(\mathbf{p}_{6}) = 38" />
          </li>
          <li>
            <CtCMath math="a(\mathbf{p}_{33}) + 1 = a(\mathbf{p}_{45})" />
          </li>
          <li>
            <CtCMath math="a(\mathcal{S}_{13})\rvert_{t_{\mathbf{C}}=118} = 109" />
          </li>
        </ul>
        <p>
          We aren't given much context. But we know that John Adams and John
          Quincy Adams both evaluate to 38, Harry S. Truman is one less than
          Donald Trump, and currently Rhode Island evaluates to 109. Eventually,
          we can work out that a returns the alphanumeric sum of the name (or
          surname) of something: A+D+A+M+S = 1+4+1+13+19 = 38, for instance.
        </p>
        <ul>
          <li>
            <CtCMath math=" \mathbf{g}_{n}^{k} = \mathbf{o}(\mathcal{S}_{k},t_{\mathbf{C}})" />
          </li>
          <li>
            <CtCMath math=" \mathbf{p}_{11} = \mathbf{g}_{9}^{16}" />
          </li>
          <li>
            <CtCMath math=" E(\mathbf{g}_{65}^{6}, 101) = 111" />
          </li>
          <li>
            <CtCMath math=" \mathbf{j}_{7} = \mathbf{g}_{1}^{7}" />
          </li>
        </ul>
        <p>
          We next get to <CtCMath math="\mathbf{g}" />, and it appears that it
          is the governor of a given state. James K. Polk confirms that. We also
          get the added information that <CtCMath math="E" /> only counts{' '}
          <i>presidential</i> electoral votes, not vice-presidential, as one of
          Michael Dukakis's 112 would-be presidential electoral votes in 1988
          went to Lloyd Bentsen, his running mate, with Dukakis getting the
          corresponding vice-presidential vote. We also get something else,{' '}
          <CtCMath math="\mathbf{j}" />. We can evaluate{' '}
          <CtCMath math="\mathbf{j}_7" /> to be Thomas Johnson. Assuming{' '}
          <CtCMath math="\mathbf{j}" /> is another set of government officials,
          we can see that he was a Supreme Court justice. The seventh, in fact,
          so <CtCMath math="\mathbf{j}" /> seems to be Supreme Court justices.
        </p>
        <ul>
          <li>
            <CtCMath math=" \mathcal{G} \subset \mathcal{S}_{11}" />
          </li>
          <li>
            <CtCMath math=" 1 \leq t_{\mathbf{C}} \lesssim 1.9 \Rightarrow \mathcal{C}(\mathcal{U}) = \mathcal{G}" />
          </li>
          <li>
            <CtCMath math=" \bigcup\limits_{d=5}^{15}\mathcal{D}_{11,d} \subset \mathcal{G} : t_{P} = 24" />
          </li>
          <li>
            <CtCMath math=" \mathbf{m}_{n}^{\mathcal{G}} = \mathbf{o}(\mathcal{G},t_{\mathcal{G}})" />
          </li>
          <li>
            <CtCMath math=" \mathbf{m}_{2}^{\mathcal{G}} = \mathbf{m}_{5}^{\mathcal{G}} = \mathbf{m}_{11}^{\mathcal{G}}" />
          </li>
          <li>
            <CtCMath math=" a(\mathbf{m}_{88}^{\mathcal{G}}) = 60 " />
          </li>
        </ul>
        <p>
          There's a <CtCMath math="\mathcal{G}" /> now, one that's a
          geographical area. It appears to be part of the state of New York, and
          was the first capital of the United States. So it's New York City (aka
          Gotham). It also seems to contain several congressional districts, all
          around the city of New York. And the chief officer of{' '}
          <CtCMath math="\mathcal{G}" /> is an "
          <CtCMath math="\mathbf{m}" />
          ". Mayor? And indeed, the 2nd, 5th, and 11th mayors of New York were
          all one person, Thomas Delavall. (Note that{' '}
          <CtCMath math="\mathbf{o}" /> here takes{' '}
          <CtCMath math="t_{\mathcal{G}}" />, not{' '}
          <CtCMath math="t_\mathbf{C}" />, as New York existed before Congress.)
        </p>
        <p>Now we know enough to evaluate the Greek variables:</p>
        <ul>
          <li>
            <CtCMath math="\alpha" />: The only person to serve non-consecutive
            terms to date is Grover Cleveland, who was the 22nd and 24th
            presidents. Thus the answer is <b>46</b>.
          </li>
          <li>
            <CtCMath math="\beta" />: Before a 2020 state constitutional
            amendment, Rhode Island was officially Rhode Island and Providence
            Plantations. Thus, its alphanumeric value was <b>380</b>.
          </li>
          <li>
            <CtCMath math="\gamma" />: Despite having been president, Millard
            Fillmore only got <b>8</b> presidential electoral votes over his
            life, all in his unsuccessful 1856 campaign.
          </li>
          <li>
            <CtCMath math="\delta" />: Al Gore was a class <b>2 </b>senator from
            Tennessee.
          </li>
          <li>
            <CtCMath math="\epsilon" />: The only person who fits the bill as a
            mayor of New York and a congressman from a plural district in the
            27th Congress is Fernando Wood, so the answer here is <b>74</b>.
          </li>
          <li>
            <CtCMath math="\zeta" />: Connecticut's sole at-large representative
            in 1961 was Frank Kowalski, whose alphanumeric value is <b>101</b>.
          </li>
          <li>
            <CtCMath math="\eta" />: While New York City fully contains New
            York's 5th through 15th Congressional districts, two more such
            districts are <i>partially </i>in New York City: the 16th and the{' '}
            <b>3</b>rd.
          </li>
          <li>
            <CtCMath math="\theta" />: Wilson's theorem indicates that b must be
            prime. We're thus looking for the largest state's population at a
            decennial census that was prime, which turns out to be New York's,
            the 11th state, in 2020, the 24th census (20,201,249). So the answer
            here is <b>35</b>.
          </li>
          <li>
            <CtCMath math="\iota" /> and <CtCMath math="\kappa" />: The only
            person to have been governor of two different states was Sam
            Houston. He was Tennessee's (state #<b>16</b>) 6th governor and
            Texas's (state #<b>28</b>) 7th.
          </li>
          <li>
            <CtCMath math="\lambda" />: Only <b>50</b> people separated Michigan
            and Georgia in the 1870 census.
          </li>
          <li>
            <CtCMath math="\mu" />: The only time Delaware had more than one
            representative was a result of the <b>3</b>rd census.
          </li>
          <li>
            <CtCMath math="\nu" />: The only person to serve in the House from
            both Texas and New Mexico was Ed Foreman, whose alphanumeric value
            is <b>72</b>.
          </li>
          <li>
            <CtCMath math="\xi" />: Only one Supreme Court justice has also been
            president: William H. Taft, who was the <b>27</b>th president.
          </li>
          <li>
            <CtCMath math="\pi" />: The only place where four states intersect
            is at Four Corners; the sum of their state numbers is <b>178</b>.
          </li>
          <li>
            <CtCMath math="\rho" />: Present-day Washington, D.C. was part of
            Maryland, the <b>7</b>th state, in 1789.
          </li>
          <li>
            <CtCMath math="\sigma" />: Back in 1839, however, Washington, D.C.
            also crossed the Potomac, including what in 1789 (and again today)
            was part of Virginia, the <b>10</b>th state.
          </li>
          <li>
            <CtCMath math="\tau" />: The state that sits between Vermont and
            Hawaii when ranked by area is Massachusetts, our <b>6th </b>state.
          </li>
          <li>
            <CtCMath math="\upsilon" />: The capital of the United States
            between New York and Washington D.C. was Philadelphia, with an
            alphanumeric value of <b>101</b>.
          </li>
          <li>
            <CtCMath math="\phi" />: The geographic center of the 50 United
            States (including Alaska and Hawaii) is in South Dakota, the{' '}
            <b>40</b>th state.
          </li>
          <li>
            <CtCMath math="\chi" />: The most representatives any one state has
            had was California with <b>53</b> (from 2003 to 2023).
          </li>
          <li>
            <CtCMath math="\psi" />: The smallest alphanumeric value shared by a
            state and a president is <b>47</b>, common among Taft, Nevada, and
            Ohio.
          </li>
          <li>
            <CtCMath math="\omega" />: Only one state borders exactly one other:
            Maine, our <b>23</b>rd.
          </li>
        </ul>
        <p>
          The checksums at the bottom help us verify that groups of our values
          are correct.
        </p>
        <p>
          Plugging all these numbers in, we get 22152005. Reading that as
          22-15-20-05, we get the final answer <Answerize>{ANSWER}</Answerize>.
        </p>
      </Solution>
    </MathJax>
  </MathJaxContext>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
