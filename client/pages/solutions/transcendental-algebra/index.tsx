import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import CtCMath from 'components/copy_math';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'transcendental-algebra';
const ANSWER = `SHENZHEN IO`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <MathJaxContext>
      <MathJax inline={true}>
        <p>
          This puzzle is written in the titular{' '}
          <a href="https://tck.mn/transalg/">Transcendental Algebra</a>;
          Googling the term should lead to a transcription and translation of
          its constructor Jakob Linzbach's work on the subject. Using the
          concepts presented in the work (or other references revealed later),
          you can start translating the introduction:
        </p>
        <p>
          "
          <i>
            I am a philosophical language. 103 years ago, Jakob Linzbach wrote
            about me. 21 years ago, a woman wrote my language puzzle. I will now
            talk about a language puzzle from every year besides 2016
          </i>
          <sup>
            <a href="#ftnt1" id="ftnt_ref1">
              [1]
            </a>
          </sup>
          <i>. One team language puzzle exists.</i>"
        </p>
        <p>
          This confirms that Transcendental Algebra is the correct language to
          work with here—Jakob Linzbach published his book in 1921, 103 years
          before 2024.{' '}
        </p>
        <p>
          The foreword in the transcription mentions that Transcendental Algebra
          was the subject of a problem written by Ksenia Gilyarova for the
          inaugural{' '}
          <a href="https://ioling.org/index.html">
            International Linguistics Olympiad
          </a>{' '}
          (IOL) in 2003, 21 years before 2024. It is thus reasonable to assume
          that the "other language puzzles" mentioned are other problems in the
          IOL.
        </p>
        <p>
          Each description describes the properties of a problem in the IOL:
        </p>
        <ul>
          <li>
            The first is a general description of the type of data in the
            problem's dataset—examples include a bunch of transitive sentences,
            some arithmetic equations, or a script made of dots.
          </li>
          <li>
            The second describes a relevant property of the language itself.
            Sometimes this is demonstrated using words or sentences in the
            dataset.
          </li>
          <li>
            The third is a word, phrase, or sentence present in its dataset,
            which is used in extraction. Take its position in that dataset, then
            index it into the problem's name, as presented on the IOL website.{' '}
          </li>
        </ul>
        <p>
          The sentences are initially ordered by the problem's name. Each
          problem comes from a different year, one for every year in the IOL's
          history up to this point (besides 2016, as mentioned in the
          introduction); resort in that order to get the instruction{' '}
          <Monospace>HOLD BILINGUAL DIALOG</Monospace>.
        </p>
        <Table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Problem</th>
              <th>Description</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2003</td>
              <td>
                Adyg
                <b>
                  <u>h</u>
                </b>
                e
              </td>
              <td>
                Language 1's puzzle is questions about location. The preposition
                is attached to the left of the verb. What does he drop under the
                stool?
              </td>
              <td>5</td>
            </tr>
            <tr>
              <td>2004</td>
              <td>
                Lakh
                <b>
                  <u>o</u>
                </b>
                ta
              </td>
              <td>
                Language 10's puzzle is about comparative degrees. The sound of
                lower-degree words is in front of the sound of higher-degree
                words. It is curled but can be smoothed again.
              </td>
              <td>5</td>
            </tr>
            <tr>
              <td>2005</td>
              <td>
                Tzotzi
                <b>
                  <u>l</u>
                </b>
              </td>
              <td>
                Language 17's puzzle is a number of transitive sentences and
                questions. The morphemes for past and future tense are the same.
                Juana is nowhere.
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2006</td>
              <td>
                U
                <b>
                  <u>d</u>
                </b>
                ihe
              </td>
              <td>
                Language 18's puzzle is about possession. "Your<sub>sg</sub>{' '}
                [stool leg]" is not similar to "[your<sub>sg</sub> stool]'s
                leg". Your
                <sub>sg</sub> shoulder.
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>2007</td>
              <td>
                <b>
                  <u>B</u>
                </b>
                raille
              </td>
              <td>
                Language 4's puzzle is writing made of dots. The blind can read
                Language 4.
                <sup>
                  <a href="#ftnt2" id="ftnt_ref2">
                    [2]
                  </a>
                </sup>{' '}
                This fox is too quick!
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>2008</td>
              <td>
                <b>
                  <u>I</u>
                </b>
                nuktitut
              </td>
              <td>
                Language 7's puzzle is about transitive and intransitive
                sentences. The object of a transitive sentence with a definite
                article is similar to the subject of a transitive sentence with
                an indefinite article. Your dog saw you.
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>2009</td>
              <td>
                Su
                <b>
                  <u>l</u>
                </b>
                ka
              </td>
              <td>
                Language 16's puzzle is about counting. "16 coconuts" is counted
                "4 × (4 coconuts)". 2 betel nuts.
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>2010</td>
              <td>
                Mongol
                <b>
                  <u>i</u>
                </b>
                an
                <sup>
                  <a href="#ftnt3" id="ftnt_ref3">
                    [3]
                  </a>
                </sup>
              </td>
              <td>
                Language 11's puzzle is a dictionary. The book says "light is
                the opposite of heavy". Sugar is a white nutritious rock of
                fruit. (The full sentence reads "White coloured and tasty/sweet
                nutritious crystal object obtained from various specific
                beets".)
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2011</td>
              <td>
                EA
                <b>
                  <u>N</u>
                </b>
                -13
              </td>
              <td>
                Language 5's puzzle is writing made of bars. 4 bars is one
                number. The book titled <i>The Lost Symbol</i>.
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>
                Umbu-Un
                <b>
                  <u>g</u>
                </b>
                u
              </td>
              <td>
                Language 19's puzzle is about numbers. 76 is written as 24 × 2 +
                28. The number 35.
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>
                M
                <b>
                  <u>u</u>
                </b>
                na
              </td>
              <td>
                Language 13's puzzle is composed of both transitive and
                intransitive sentences. A monkey is not (grammatically) similar
                to the <u>Monkey</u> in a story. My house will be far.
              </td>
              <td>2</td>
            </tr>
            <tr>
              <td>2014</td>
              <td>
                Benaben
                <b>
                  <u>a</u>
                </b>
              </td>
              <td>
                Language 2's puzzle is a bunch of transitive sentences (with
                pronouns in both arguments). The morpheme for present tense is
                to the left of the verb, but the morpheme for future tense is to
                the right of the verb. You both will pierce me.
              </td>
              <td>8</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>
                Nahuat
                <b>
                  <u>l</u>
                </b>{' '}
                and Arammba
              </td>
              <td>
                Language 14's puzzle is a bunch of equations. 2 × 20<sup>2</sup>{' '}
                + 3 × 20 + (15 + 4) = 4 × 6<sup>3</sup> + 2 × 6 + 3. 1 + 1 = 1 ×
                2.
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>
                Kimbun
                <b>
                  <u>d</u>
                </b>
                u
              </td>
              <td>
                Language 9's puzzle is composed of some past-tense transitive
                sentences, yes-no questions about past-tense transitive
                sentences, and present-tense existential sentences. The last
                tone of one word is equal to the first tone of the next. I saw
                the men in the square.
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>
                Mounta
                <b>
                  <u>i</u>
                </b>
                n Arapesh (Bukiyip)
              </td>
              <td>
                Language 12's puzzle is about counting. "26 eggs" is counted "6
                × (implied 4) + 2 egg", but "26 betel nuts" is counted "24 + 2".
                13 sheets of sago bark.
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>
                Book Pahl
                <b>
                  <u>a</u>
                </b>
                vi script
              </td>
              <td>
                Language 3's puzzle is a right-to-left writing system. The word
                for the destructive spirit is upside-down. Hair.
              </td>
              <td>9</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>
                Kilivi
                <b>
                  <u>l</u>
                </b>
                a
              </td>
              <td>
                Language 8's puzzle is a bunch of sentences—statements and
                questions asking "which" and "how many". The word for "how many"
                differs depending on what is being counted. That clever woman
                will see something.
              </td>
              <td>7</td>
            </tr>
            <tr>
              <td>2022</td>
              <td>
                Prot
                <b>
                  <u>o</u>
                </b>
                -Chamic, Phan Rang Cham and Tsat
              </td>
              <td>
                The puzzle for languages 15.1, 15.2, and 15.3 is about the
                evolution of 15.1 into 15.2 and 15.3. The final sound of 15.1
                will be the tone of 15.3. 5.
              </td>
              <td>5</td>
            </tr>
            <tr>
              <td>2023</td>
              <td>
                <b>
                  <u>G</u>
                </b>
                uazacapán Xinka
              </td>
              <td>
                Language 6's puzzle is composed of sentences with either active
                or passive modality. The problem does not contain expressions
                for sentences with a third-person subject in present tense and
                active modality. It saw it.
              </td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>
        <p>
          Submitting a video or audio clip of two people having a conversation
          while speaking different languages will lead to a response containing
          the answer, <Answerize>SHENZHEN IO</Answerize>.
        </p>
        <Appendix>
          <h2>Appendix A - Reading the Transcendental Algebra</h2>
          <p>
            Transcendental algebra consists primarily of "figures" (pictorial
            representations of a physical object) and "symbols" (representations
            of abstract quantities and relations), in addition to numbers,
            letters, and mathematical symbols. The{' '}
            <a href="https://tck.mn/transalg/">book</a> contains several
            examples that can be used to interpret the sentences.
          </p>
          <p>The mathematical symbols operate as follows:</p>
          <ul>
            <li>
              +: serves as a conjunction operator. Besides being the word "and",
              it also acts as "with" and is used in describing nouns with
              adjectives, for instance.
            </li>
            <li>
              –: The opposite of addition, often translated "without". Often
              used as a negation operator (not <i>a</i>). Also used to
              accentuate particular parts of a figure.
            </li>
            <li>×: used to combine concepts. </li>
            <li>
              ÷: essentially "of", used to specify a concept of reduced scope,
              such as by marking possession.
            </li>
            <li>
              a<sup>b</sup>: From its role as iterated multiplication,
              exponentiation takes on the much more significant role of
              representing the flow of time, and as such is used for things like
              verbs. A figure exponent represents an active verb; the inverse of
              one is a passive verb. Exponents of 0,
              <CtCMath math="\frac{1}{n}" />, 1, n, and infinity take on special
              meaning relating to the evolution of the object.{' '}
            </li>
            <li>
              <i>a</i> log <i>b</i>: Expresses evolution, the process by which
              the first operand becomes the second.
              <sup>
                <a href="#ftnt4" id="ftnt_ref4">
                  [4]
                </a>
              </sup>
            </li>
            <li>
              =/&gt;/&lt;/≈/≠: "Logical judgements". = is used both as a copula
              ("be") and to specify direct objects.{' '}
            </li>
          </ul>
          <p>
            This puzzle also uses letters <i>a</i>, <i>b</i>, <i>c</i>… and the
            grammar to isolate representations of specific parts of a sentence
            (e.g., "<i>a</i> : (
            <i>
              a
              <sup>
                <i>b</i>
              </sup>{' '}
              = c
            </i>
            )" is "subject", while "<i>b</i> :{' '}
            <i>
              a<sup>b</sup>
            </i>
            " is "transitive verb"). Likewise, while <i>n</i> is most often used
            for pluralization, here it is isolated on occasion to talk about the
            whole class of numbers.{' '}
          </p>
          <p>
            Clarifications regarding symbols are discussed in footnotes within
            the parse.
          </p>
          <h2>Appendix B - The Parse</h2>
          <p>
            Many of the symbols and combinations of symbols used are found in
            the book. Several aren't; these are explained here.
          </p>
          <h3>Introduction</h3>
          <p>
            [Person]1 = [Language]([Brain] / [Head])<sup>-∞</sup>
          </p>
          <p>"Person 1 is a language of brain-transubstantiation."</p>
          <p>
            → "I
            <sup>
              <a href="#ftnt5" id="ftnt_ref5">
                [5]
              </a>
            </sup>{' '}
            am a philosophical language."
          </p>
          <p>
            [Person]<sub>[22 VI 1874]</sub>
            <sup>[Pen]</sup> – 103[Earth] = [Person]<sub>1</sub>
          </p>
          <p>
            "Person born on 22 June 1874 writes without 103 Earths person 1."
          </p>
          <p>
            → "Jakob Linzbach
            <sup>
              <a href="#ftnt6" id="ftnt_ref6">
                [6]
              </a>
            </sup>{' '}
            wrote me 103 years ago."
          </p>
          <p>
            [Woman]<sup>[Pen]</sup> – 21[Earth] = [Language][Question]
            <sup>∞</sup> / [Person]<sub>1</sub>
          </p>
          <p>
            "Woman writes without 21 Earths language-question-transubstantiation
            of person 1."
          </p>
          <p>
            → "A woman
            <sup>
              <a href="#ftnt7" id="ftnt_ref7">
                [7]
              </a>
            </sup>{' '}
            wrote a language puzzle
            <sup>
              <a href="#ftnt8" id="ftnt_ref8">
                [8]
              </a>
            </sup>{' '}
            about me 21 years ago."
          </p>
          <p>
            [Person]<sub>1</sub>
            <sup>[Language]</sup> + t<sup>0</sup> = 1[Language][Question]
            <sup>∞</sup> / ([Earth] / 0 - [Earth]<sub>2016</sub>)
          </p>
          <p>
            "Person 1 speaks with time-origin 1
            language-question-transubstantiation of Earth of 0 without Earth
            2016."
          </p>
          <p>
            → "I now talk about one language puzzle of every
            <sup>
              <a href="#ftnt9" id="ftnt_ref9">
                [9]
              </a>
            </sup>{' '}
            year besides 2016."
          </p>
          <p>
            (1[Language][Question]<sup>∞</sup> / [Person]<sub>1</sub>[Person]
            <sub>2</sub>[Person]<sub>3</sub>)<sup>1</sup>
          </p>
          <p>
            "One language-question-transubstantiation of company
            <sup>
              <a href="#ftnt10" id="ftnt_ref10">
                [10]
              </a>
            </sup>{' '}
            exists."
          </p>
          <p>→ "There is one team round puzzle."</p>
          <h3>Adyghe</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>1</sub>) = <i>n</i>
            ([Question]1 / <sup>3</sup>√(<i>xyz</i>))
          </p>
          <p>
            "Question-transubstantiation of language 1 is n question-itself of
            location
            <sup>
              <a href="#ftnt11" id="ftnt_ref11">
                [11]
              </a>
            </sup>
            ."
          </p>
          <p>→ "Language 1's puzzle is a bunch of questions about location."</p>
          <p>
            ([Language]<sup>-1</sup> / <sup>3</sup>√(<i>xyz</i>))
            <sup>1/[Chain]</sup> + ([Language]<sup>-1</sup> / [Walk]) - <i>x</i>
          </p>
          <p>
            "Part of language of location is attached with part of language of
            action without-horizontal."
          </p>
          <p>
            → "The preposition morpheme is attached to the left of the verb
            morpheme."
          </p>
          <p>
            <i>
              There aren't many problems like Adyghe that talk entirely about
              location and nothing else. Earlier years are also generally less
              interesting to talk about, so the fact here is an interesting
              detail about the morphology.
            </i>
          </p>
          <p>
            [Man]<sub>3</sub>
            <sup>-y</sup> = (1<sub>?</sub> = [Stool] - <i>y</i>)
          </p>
          <p>
            "Man 3 without-heights thing
            <sup>
              <a href="#ftnt12" id="ftnt_ref12">
                [12]
              </a>
            </sup>{' '}
            what
            <sup>
              <a href="#ftnt13" id="ftnt_ref13">
                [13]
              </a>
            </sup>{' '}
            is stool without-height."
          </p>
          <p>→ "What does he drop under the stool?" (Sentence 5)</p>
          <h3>Benabena</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>2</sub>) = <i>n</i>
            ([Person]<sub>n</sub>
            <sup>b</sup> = [Person]<sub>n</sub>)
          </p>
          <p>
            "Question-transubstantiation of language 2 is n (person n b-s person
            n)."
          </p>
          <p>
            "Language 2's puzzle is a bunch of transitive sentences, with
            pronouns on each side."
          </p>
          <p>
            ([Language]<sup>-1</sup> / 0<i>t</i>) = ([Language]<sup>-1</sup> /
            [Walk]) - <i>x</i>, ([Language]<sup>-1</sup> / +<i>t</i>) =
            ([Language]<sup>-1</sup> / [Walk]) + <i>x</i>
          </p>
          <p>
            "Part of language of zero time
            <sup>
              <a href="#ftnt14" id="ftnt_ref14">
                [14]
              </a>
            </sup>{' '}
            is part of language of action without-horizontal. Part of language
            of positive time is part of language of action with-horizontal."
          </p>
          <p>
            → "The present-tense morpheme is to the left of the verb morpheme,
            while the future-tense morpheme is to the right of the verb
            morpheme."
          </p>
          <p>
            <i>
              Also not much to talk about with this one, if only because it
              doesn't provide any interesting morphology to talk about.
            </i>
          </p>
          <p>
            2[Person]<sub>2</sub>
            <sup>[Circle][Through]</sup> + <i>t</i> = [Person]<sub>1</sub>
          </p>
          <p>
            "Two Person 2s perforate
            <sup>
              <a href="#ftnt15" id="ftnt_ref15">
                [15]
              </a>
            </sup>{' '}
            with time Person 1."
          </p>
          <p>
            → "You both will pierce me." (fifth sentence in an unnumbered
            dataset)
          </p>
          <h3>Book Pahlavi</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>3</sub>) = [Pen]
            <sup>∞</sup> + (x log (-x))
          </p>
          <p>
            "Question-transubstantiation of language 3 is pen-transubstantiation
            with right becoming left."
          </p>
          <p>"Language 3's puzzle is a right-to-left writing system."</p>
          <p>
            ([Language]<sup>-1</sup> / ([God] / <i>i</i>))
            <sup>1/[Pen] + y log (-y)</sup>
          </p>
          <p>
            "Part of language of god of ceasing existence
            <sup>
              <a href="#ftnt16" id="ftnt_ref16">
                [16]
              </a>
            </sup>{' '}
            is written with up becoming down."
          </p>
          <p>→ "The word for the god of destruction is written upside-down."</p>
          <p>
            <i>
              Book Pahlavi has a lot of interesting things, namely that the same
              symbol can be written for up to four different sounds, but the
              most distinctive aspect for this puzzle's purpose is that the word
              for the destructive spirit Ahriman is written upside-down.
            </i>
          </p>
          <p>([Hair] / [Head])</p>
          <p>"Hair of head"</p>
          <p>
            → "hair" (Number 7 in the numbered list of Middle Persian words.)
          </p>
          <h3>Braille</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>4</sub>) = [Pen]
            <sup>∞</sup> / n [Filled Circle]
          </p>
          <p>
            "Question-transubstantiation of language 4 is pen-transubstantiation
            of <i>n</i> filled circles."
          </p>
          <p>→ "Language 4's puzzle is a writing system of dots.</p>
          <p>
            ([Person] - ([Eye] + [Eye]))<sup>[Book]^p</sup> = [Language]
            <sub>4</sub>
          </p>
          <p>
            "Person without eye and eye can
            <sup>
              <a href="#ftnt17" id="ftnt_ref17">
                [17]
              </a>
            </sup>{' '}
            read language 4."
          </p>
          <p>→ "The blind can read language 4."</p>
          <p>
            <i>It's Braille.</i>
          </p>
          <p>
            [Fox]<sub>1</sub>
            <sup>
              &gt;<i>t</i>
            </sup>
          </p>
          <p>
            "Fox 1
            <sup>
              <a href="#ftnt18" id="ftnt_ref18">
                [18]
              </a>
            </sup>{' '}
            is more hasty."
          </p>
          <p>
            → "This fox is too quick!" (The first of only three example
            sentences.)
          </p>
          <h3>EAN-13</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>5</sub>) = [Pen]
            <sup>∞</sup> / n [Straight line]
          </p>
          <p>
            "Question-transubstantiation of language 5 is pen-transubstantiation
            of <i>n</i> straight lines."
          </p>
          <p>→ "Language 4's puzzle is a writing system of vertical bars.</p>
          <p>
            <i>n</i> = 2 [Straight line] + [Light]<sup>∞</sup> + 2 [Straight
            line] – [Light]<sup>∞</sup>
          </p>
          <p>
            "<i>n</i> is two straight lines with light-transubstantiation and
            two straight lines without light-transubstantiation."
          </p>
          <p>
            → "A number is two white
            <sup>
              <a href="#ftnt19" id="ftnt_ref19">
                [19]
              </a>
            </sup>{' '}
            bars and two black bars."
          </p>
          <p>
            <i>
              EAN-13 is a barcode standard. A single number consists of four
              bars (alternating black and white) adding to a constant width.
            </i>
          </p>
          <p>
            [Book]
            <sub>
              (<i>a</i> – [Brain] / <sup>3</sup>√(xyz))
            </sub>
          </p>
          <p>
            "Book <i>a</i> without intelligence of location."
          </p>
          <p>
            → "<i>The Lost Symbol</i>
            <sup>
              <a href="#ftnt20" id="ftnt_ref20">
                [20]
              </a>
            </sup>{' '}
            (ISBN book)." (The third in the numbered list of barcode
            descriptions, and also the third barcode.)
          </p>
          <h3>Guazacapán Xinka</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>6</sub>) = <i>n</i> (a
            <sup>b</sup>) + <i>n</i> (a<sup>1/b</sup>)
          </p>
          <p>
            "Question-transubstantiation of language 6 is <i>n</i> (a b's) and{' '}
            <i>n </i>(a is b'd)."
          </p>
          <p>
            → "Language 6's puzzle is a bunch of sentences with active and
            passive modalities."
          </p>
          <p>
            [Language]<sup>-1</sup> / ([Person]<sub>3</sub>
            <sup>b</sup> + 0<i>t</i>) ≠ [In] + ([Question]<sup>∞</sup> /
            [Language]<sub>6</sub>)
          </p>
          <p>
            "Part of language of (Person 3 b's with zero time) is not in
            question-transubstantiation of language 6."
          </p>
          <p>
            → "Language 6's puzzle does not contain expressions for sentences
            with a third-person subject in present tense and active modality."
          </p>
          <p>
            <i>
              The puzzle for Guazacapán Xinka has first and third person,
              present and past tenses, and active and passive modalities.
              Bizarrely, the puzzle features every possible combination except
              the 3rd person present active.
            </i>
          </p>
          <p>
            1<sup>[Eye]</sup> - t = 1
          </p>
          <p>"Unit sees without time unit."</p>
          <p>→ "It saw it." (Row 1 in the numbered dataset.)</p>
          <h3>Inuktitut</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>7</sub>) = <i>n</i> (a
            <sup>b</sup> = c) + <i>n</i> (a<sup>b</sup>)
          </p>
          <p>
            "Question-transubstantiation of language 7 is <i>n</i> (<i>a b</i>'s
            <i> c</i>) and <i>n </i>(<i>a b</i>'s)."
          </p>
          <p>
            → "Language 7's puzzle is a bunch of transitive and intransitive
            statements."
          </p>
          <p>
            [Language]<sup>-1</sup> / (c / a<sup>b</sup> = c<sub>1</sub>) ≈
            [Language]<sup>-1</sup> / (a / a<sup>b</sup> = c)
          </p>
          <p>
            "Part of language of (c of a<sup>b</sup> = c<sub>1</sub>) is similar
            to part of language of (a of a<sup>b</sup> = c)."
          </p>
          <p>
            → "The object of a sentence with a definite object is similar to the
            subject of a sentence with an indefinite object."
          </p>
          <p>
            <i>
              The Inuktitut problem has three default sentence structures for
              intransitive, transitive-definite, and transitive-indefinite. In
              transitive sentences with definite objects, the object inflects
              like the subject of the other sentence structures, while the
              subject gets a different ending.
            </i>
          </p>
          <p>
            ([Dog] / [Person]<sub>2</sub>)<sup>[Eye]</sup> – <i>t</i> = [Person]
            <sub>2</sub>
          </p>
          <p>"Dog of person 2 sees without time person 2."</p>
          <p>
            → "Your<sub>sg</sub> dog saw you<sub>sg</sub>." (Sentence 1.)
          </p>
          <h3>Kilivila</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>8</sub>) = <i>n</i> (a
            <sup>b</sup> = c) + <i>n</i> (a<sub>?</sub>
            <sup>b</sup> = c) + <i>n</i> (<i>n</i>
            <sub>?</sub>a<sup>b</sup> = c)
          </p>
          <p>
            "Question-transubstantiation of language 8 is <i>n</i> (<i>a b</i>'s
            <i> c</i>), <i>n </i>(which <i>a b</i>'s <i>c</i>), and <i>n</i>{' '}
            (which <i>n</i> of <i>a</i> b's <i>c</i>)."
          </p>
          <p>
            → "Language 8's puzzle is a series of sentences—either declarative,
            or questions asking 'which' or 'how many'."
          </p>
          <p>
            <i>n</i>
            <sub>?</sub> [Man] ≠ <i>n</i>
            <sub>?</sub> [Woman] ≈ <i>n</i>
            <sub>?</sub> [Dog] ≠ <i>n</i>
            <sub>?</sub> [Person]<sup>1/n</sup> ≠ <i>n</i>
            <sub>?</sub> 1
          </p>
          <p>
            "'How many men is dissimilar to how many women is similar to how
            many dogs is dissimilar to how many children is dissimilar to how
            many things."
          </p>
          <p>
            → "The word for 'how many' differs depending on the thing being
            counted."
          </p>
          <p>
            <i>
              Kilivila has a number of noun classes, each with a certain prefix,
              which is affixed to "vila" to get "how many…". There are separate
              classes for men, women and animals, children, canoes (not
              mentioned), and objects.
            </i>
          </p>
          <p>
            ([Woman]<sub>3</sub> + [Brain])<sup>[Eye]</sup> + <i>t</i> = 1
            <sup>1</sup>
          </p>
          <p>"Woman 3 with intelligence sees with time something."</p>
          <p>→ "That clever woman will see something." (Sentence 7.)</p>
          <h3>Kimbundu</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>9</sub>) = <i>n</i> (
            <i>
              a<sup>b</sup>
            </i>
            <i> – t = c</i>) + <i>n</i> (? ={' '}
            <i>
              a<sup>b</sup>
            </i>
            <i> – t = c</i>) + <i>n</i> (<i>a</i>
            <sup>1</sup> + 0<i>t</i>)
          </p>
          <p>
            "Question-transubstantiation of language 9 is <i>n</i> (<i>a b</i>'s
            <i> c</i>), <i>n </i>(which <i>a b</i>'s <i>c</i>), and <i>n</i>{' '}
            (which <i>n</i> of <i>a</i> b's <i>c</i>)."
          </p>
          <p>
            → "Language 9's puzzle is a series of sentences—either declarative
            transitive in the past, interrogative transitive in the past, or
            existential present."
          </p>
          <p>
            ([Sound]<i>y</i>)<sub>-1</sub> / ([Language]<sup>-1</sup>)
            <sub>
              <i>n</i>
            </sub>{' '}
            = (([Sound]
            <i>y</i>)<sup>1</sup> / ([Language]<sup>-1</sup>)
            <sub>
              <i>n</i>+1
            </sub>
            )
          </p>
          <p>
            "Sound height
            <sup>
              <a href="#ftnt21" id="ftnt_ref21">
                [21]
              </a>
            </sup>{' '}
            -1 of part of language <i>n</i> is sound height 1 of part of
            language <i>n</i>+1."
          </p>
          <p>
            → "The last tone of a word is equal to the first tone of the next
            word."
          </p>
          <p>
            <i>
              In Kimbundu, the last tone of any word is entirely dependent on
              the first tone of the next word. If it happens to be the last
              word, it's high tone for questions, low tone for statements.
            </i>
          </p>
          <p>
            [Person]<sub>1</sub>
            <sup>[Eye]</sup> – <i>t</i> = (<i>n</i> [Man] = [In] + [Square])
          </p>
          <p>
            "Person 1 sees without time <i>n</i> men in square."
          </p>
          <p>
            → "I saw the men in the square
            <sup>
              <a href="#ftnt22" id="ftnt_ref22">
                [22]
              </a>
            </sup>
            ." (Sentence 7.)
          </p>
          <h3>Lakhota</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>10</sub>) = <i>n</i> (&lt;{' '}
            <i>a</i> + <i>a</i> + &gt; <i>a</i>)
          </p>
          <p>
            "Question-transubstantiation of language 10 is <i>n</i> (less{' '}
            <i>a</i> and <i>a</i> and more <i>a</i>)."
          </p>
          <p>→ "Language 10's puzzle is several words of varying magnitude."</p>
          <p>
            [Sound]<sup>-1</sup> / (&lt; <i>a</i>) = [Sound]<sup>-1</sup> /
            (&gt; <i>a</i>) – <i>z</i>
          </p>
          <p>
            "Part of sound of less <i>a</i> is part of sound of more <i>a</i>{' '}
            without depth."
          </p>
          <p>
            → "The phoneme of lesser magnitudes are in front of the phoneme of
            greater magnitudes."
          </p>
          <p>
            <i>
              The 2004 Lakhota dataset presents sets of words similar in meaning
              but differing in magnitude. The words differ only in their
              fricatives, which are articulated further back in the mouth the
              greater the magnitude of the word.
            </i>
          </p>
          <p>
            {'{'}1 = ([Straight line] + [Curved line] – [Straight line]); 1
            <sup>(1 / ([Curved line] log [Straight line])) ^ p</sup>
            {'}'}
          </p>
          <p>
            "Unit is (straight and curved without straight); unit can be curve
            becoming straight."
          </p>
          <p>
            → "It is curved and can be straightened." (The fifth entry in the
            table.)
          </p>
          <h3>Mongolian</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>11</sub>) =
            [Language][Book]
          </p>
          <p>"Question-transubstantiation of language 11 is language book."</p>
          <p>→ "Language 11's puzzle is a dictionary."</p>
          <p>
            [Book]<sup>[Language]</sup> = (([Heavy] + [Light] - [Heavy]) = –
            ([Heavy] + [Light] - [Light]))
          </p>
          <p>
            "Book says heavy and light without heavy is not heavy and light
            without light."
          </p>
          <p>→ "The book defines light as "the opposite of heavy".</p>
          <p>
            <i>
              Unfortunately the solution doesn't say much about Mongolian, and I
              can only really define it with one of its entries.{' '}
            </i>
          </p>
          <p>
            [Food]<sup>0</sup> = [Earth]<sup>0</sup> / [Fruit] + [Person][Food]
            + [Light]<sup>∞</sup>
          </p>
          <p>
            "Food-material is earth-material of fruit with person-food with
            light-transubstantiation."
          </p>
          <p>
            → "Sugar is a white nutritious rock
            <sup>
              <a href="#ftnt23" id="ftnt_ref23">
                [23]
              </a>
            </sup>{' '}
            of fruit." (Entry 7 in the dictionary; the full sentence reads
            "White coloured and tasty/sweet nutritious crystal object obtained
            from various specific beets".)
          </p>
          <h3>Mountain Arapesh (Bukiyip)</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>12</sub>) ={' '}
            <i>
              n<sup>n</sup>
            </i>
          </p>
          <p>
            "Question-transubstantiation of language 12 is function of numbers."
          </p>
          <p>→ "Language 12's puzzle is counting."</p>
          <p>
            26 [Egg] = (6 × (4<sup>–1/[Language]</sup>) + 2) [Egg], 26 [Fruit]
            <sup>0</sup> [In] = (24 + 2) [Fruit]<sup>0</sup> [In]
          </p>
          <p>
            "26 eggs is 6 times 4 not spoken with 2 eggs, 26 fruit-material
            insides is 24 with 2 fruit-material insides."
          </p>
          <p>
            → "26 eggs is written 6 × (implied 4) + 2 eggs, but 26 betel nuts
            <sup>
              <a href="#ftnt24" id="ftnt_ref24">
                [24]
              </a>
            </sup>{' '}
            is written 24 + 2 betel nuts.
          </p>
          <p>
            <i>
              Mountain Arapesh has two different counting systems depending on
              what's being counted. Betel nuts and sago bark are counted in the
              language's normal base of 6, but eggs and sugar cane are counted
              in sets of 4 (which are themselves counted in base 6). The word
              for 4 is occasionally omitted.
            </i>
          </p>
          <p>
            13 [Square] / [Tree]<sup>0</sup> [Out]
          </p>
          <p>"13 squares of tree-material outside"</p>
          <p>→ "13 sheets of sago bark" (Entry 7 in the ordered list.)</p>
          <h3>Muna</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>13</sub>) = <i>n</i> (a
            <sup>b</sup> = c) + <i>n</i> (a<sup>b</sup>)
          </p>
          <p>
            "Question-transubstantiation of language 13 is <i>n</i> (<i>a b</i>
            's
            <i> c</i>) and <i>n </i>(<i>a b</i>'s)."
          </p>
          <p>
            → "Language 13's puzzle is a series of transitive and intransitive
            sentences."
          </p>
          <p>
            [Monkey] ≠ [Monkey]<sub>1</sub> / [Book]<sup>∞</sup>
          </p>
          <p>"Monkey is not similar to monkey 1 of book-transubstantiation."</p>
          <p>
            → "Monkey is not grammatically similar to a story's <u>Monkey</u>."
          </p>
          <p>
            <i>
              The problem for Muna makes distinctions between story characters
              (underlined in the problem text) and common nouns.
            </i>
          </p>
          <p>
            ([House]/[Person]<sub>1</sub>)<sup>1</sup> + <i>t</i> = <i>z</i>
            <sup>0</sup> + <i>n</i>
          </p>
          <p>
            "House of person 1 exists with time depth-material with <i>n</i>."
          </p>
          <p>
            → "My house will be far
            <sup>
              <a href="#ftnt25" id="ftnt_ref25">
                [25]
              </a>
            </sup>{' '}
            (from here
            <sup>
              <a href="#ftnt26" id="ftnt_ref26">
                [26]
              </a>
            </sup>
            )." (Sentence 2.)
          </p>
          <h3>Nahuatl and Arammba</h3>
          <p>
            ([Question]<sup>∞</sup> / ([Language]<sub>14.1</sub> + [Language]
            <sub>14.2</sub>)) = <i>n</i> ([Pen][Book] / <i>n</i>)<sub>-1</sub>
          </p>
          <p>
            "Question-transubstantiation of language 14.1 with language 14.2 is{' '}
            <i>n</i> parts of write-reads of <i>n</i>."
          </p>
          <p>
            → "The puzzle about languages 14.1 and 14.2 is a series of
            arithmetic
            <sup>
              <a href="#ftnt27" id="ftnt_ref27">
                [27]
              </a>
            </sup>{' '}
            equations."
          </p>
          <p>
            2 × 20<sup>2</sup> + 3 × 20 + (15 + 4) = 4 × 6<sup>3</sup> + 2 × 6 +
            3.
          </p>
          <p>
            <i>
              Nahuatl is written in base 20 with a partial sub-base of 5.
              Arammba is written in base 6. I just picked an arbitrary number
              here to showcase both.
            </i>
          </p>
          <p>
            1 + 1 = 1 × 2. (Equation 7, which actually happens to be in Arammba,
            but we index into the problem's title.)
          </p>
          <h3>Proto-Chamic, Phan Rang Cham and Tsat</h3>
          <p>
            ([Question]<sup>∞</sup> / ([Language]<sub>15.1</sub> + [Language]
            <sub>15.2</sub> + [Language]<sub>15.3</sub>)) = [Language]
            <sub>15.1</sub> log ([Language]<sub>15.2</sub> + [Language]
            <sub>15.3</sub>)
          </p>
          <p>
            "Question-transubstantiation of language 15.1 with language 15.2
            with language 15.3 is language 15.1 becoming language 15.2 with
            language 15.3."
          </p>
          <p>
            → "The puzzle about languages 15.1, 15.2, and 15.3 is the evolution
            of language 15.1 into languages 15.2 and 15.3."
          </p>
          <p>
            (([Sound]<sup>-1</sup>)<sub>-1</sub> / [Language]<sub>15.1</sub>)
            <sup>[Hand]</sup> + <i>t</i> = (([Sound]<i>y</i>) / ([Language])
            <sub>15.3</sub>)
          </p>
          <p>
            "Part of sound last of language 15.1 creates with time sound height
            of language 15.3."
          </p>
          <p>
            → "The final sound of language 15.1 will create the tone of language
            15.3."
          </p>
          <p>
            <i>
              Proto-Chamic words underwent tonogenesis at some point during
              evolution into Tsat; which tone it became depended on the final
              consonant of the word.
            </i>
          </p>
          <p>5. (By coincidence, the fifth entry in the table.)</p>
          <h3>Sulka</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>16</sub>) ={' '}
            <i>
              n<sup>n</sup>
            </i>
          </p>
          <p>
            "Question-transubstantiation of language 16 is function of numbers."
          </p>
          <p>→ "Language 16's puzzle is counting."</p>
          <p>16 [Palm tree][Fruit] = (4 × (4 [Palm tree][Fruit]))</p>
          <p>"16 palm-tree fruit is 4 times 4 palm-tree fruit."</p>
          <p>→ "16 coconuts is 4 foursomes of coconuts."</p>
          <p>
            <i>Sulka counts coconuts in sets of four, among other groupings.</i>
          </p>
          <p>
            2 [Fruit]<sup>0</sup> [In]
          </p>
          <p>"2 fruit-material inside"</p>
          <p>→ "2 betel nuts" (The third entry in an unenumerated list.)</p>
          <h3>Tzotzil</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>17</sub>) = <i>n</i> (a
            <sup>b</sup> = c) + <i>n</i> ([Question] = a<sup>b</sup> = c) + …
          </p>
          <p>
            "Question-transubstantiation of language 17 is <i>n</i> (<i>a b</i>
            's
            <i> c</i>) and <i>n </i>(does <i>a b</i> <i>c</i>?) and …"
          </p>
          <p>
            → "Language 17's puzzle is a series of sentences, among which are
            transitive statements and questions."
          </p>
          <p>
            [Language]<sup>-1</sup> / – t = [Language]<sup>-1</sup> / + t{' '}
          </p>
          <p>
            "Part of language of without-time is part of language of with-time."
          </p>
          <p>
            → "The past tense morpheme is the same as the future tense
            morpheme."
          </p>
          <p>
            <i>
              Tzotzil uses the same particle to denote past and future tense,
              and requires time words to disambiguate.
            </i>
          </p>
          <p>
            ([Woman]<sub>J</sub>)<sup>1</sup> – <sup>3</sup>√(<i>xyz</i>)
          </p>
          <p>
            "Woman J
            <sup>
              <a href="#ftnt28" id="ftnt_ref28">
                [28]
              </a>
            </sup>{' '}
            exists without location."
          </p>
          <p>→ "Juana is nowhere." (Sentence 7.)</p>
          <h3>Udihe</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>18</sub>) = <i>n</i> (a
            <sup>b</sup> = c) + <i>n</i> ([Question] = a<sup>b</sup> = c) + …
          </p>
          <p>
            "Question-transubstantiation of language 18 is <i>n</i> (something
            of person <i>n</i>)."
          </p>
          <p>→ "Language 18's puzzle is a series of possessive phrases."</p>
          <p>
            [Stool leg] / ([Stool] / [Person]<sub>2</sub>) ≠ ([Stool leg] /
            [Stool]) / [Person]<sub>2</sub>
          </p>
          <p>
            "Stool leg of (stool of person 2) is not similar to (stool leg of
            stool) of person 2."
          </p>
          <p>
            → "'Your<sub>sg</sub> stool's leg' is not grammatically similar to
            'your
            <sub>sg</sub> stool leg'."
          </p>
          <p>
            <i>
              Udihe distinguishes alienability. The problem also can nest
              possession two layers deep.
            </i>
          </p>
          <p>
            ([Shoulder] / [Person]<sub>2</sub>)
          </p>
          <p>"Shoulder of person 2."</p>
          <p>→ "Yoursg shoulder." (The second phrase in an unnumbered list.)</p>
          <h3>Umbu-Ungu</h3>
          <p>
            ([Question]<sup>∞</sup> / [Language]<sub>19</sub>) = <i>n</i> (
            <i>n</i>)
          </p>
          <p>
            "Question-transubstantiation of language 19 is <i>n</i> (<i>n</i>)."
          </p>
          <p>→ "Language 19's puzzle is a bunch of numbers."</p>
          <p>76 = 24 × 2 + 28.</p>
          <p>
            <i>
              Umbu-Ungu counts in base 24 with a sub-base of 4. However, if the
              number is up to 11 larger than a multiple of 24, it counts one
              less multiple of 24 and instead adds 28 or 32 as appropriate for
              the number.
            </i>
          </p>
          <p>
            35. (The seventh table entry total in the puzzle, though it is the
            first entry in its table.)
          </p>
        </Appendix>
        <AuthorsNotes>
          <div>
            <p>
              <a href="#ftnt_ref1" id="ftnt1">
                [1]
              </a>{' '}
              Letter restrictions forced the writer to skip 2016. Sorry. :&lt;
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref2" id="ftnt2">
                [2]
              </a>{' '}
              Yeah I didn't have anything interesting to say here—it's literally
              Braille.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref3" id="ftnt3">
                [3]
              </a>{' '}
              This is the one team problem; restricting it to individuals leaves
              Blissymbolics as the only option, and I cannot in good conscience
              assign an index order to a matching problem without one.{' '}
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref4" id="ftnt4">
                [4]
              </a>{' '}
              The first operand should actually be the base of the logarithm,
              but the way presented here is how it is in the book.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref5" id="ftnt5">
                [5]
              </a>{' '}
              Subscripting [Person], [Man], or [Woman] with 1, 2, or 3
              represents the <i>n</i>th person pronoun.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref6" id="ftnt6">
                [6]
              </a>{' '}
              The book has a specific example about Jakob Linzbach; the date
              corresponds to a day that is one day off his birthday as listed on
              Wikipedia. Grr.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref7" id="ftnt7">
                [7]
              </a>{' '}
              I cannot presume to know Ksenia's birthday, so I can really only
              write "a woman" here.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref8" id="ftnt8">
                [8]
              </a>{' '}
              The only example for the question mark is in yes/no questions, but
              it stands to reason that a puzzle is essentially a transformed
              question.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref9" id="ftnt9">
                [9]
              </a>{' '}
              Yes, this language allows division by zero—it means "in general",
              or "every", for a reason I do not understand.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref10" id="ftnt10">
                [10]
              </a>{' '}
              It's unclear what sense of the word "company" this is, but given
              that its geometric average is defined as "colleague", I'm inclined
              to say it's closer to "team" than "legal construct".
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref11" id="ftnt11">
                [11]
              </a>{' '}
              Radication has an unexplained "averaging" function (exemplified
              under "Irrational concepts"). The geometric average of the three
              spatial variables <i>x</i>, <i>y</i>, and <i>z</i> is thus
              interpreted as an arbitrary displacement.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref12" id="ftnt12">
                [12]
              </a>{' '}
              1 is simply "a unit", often used for "thing" or "it". Raising it
              to a numeric exponent creates the indefinite pronoun series
              (nothing, something, everything).
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref13" id="ftnt13">
                [13]
              </a>{' '}
              Since subscripting acts as a specifier, I chose to extend this
              function to make interrogative pronouns with the question mark.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref14" id="ftnt14">
                [14]
              </a>{' '}
              Tense is marked by modifying the word for time—-1 for past, 0 for
              present, 1 for future. Present is generally implied, hence 0.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref15" id="ftnt15">
                [15]
              </a>{' '}
              Under multiplication, section D.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref16" id="ftnt16">
                [16]
              </a>{' '}
              Since 1 stands for existence and -1 stands for non-existence, the
              powers of <i>i</i> are interpreted as a cycle of creation and
              destruction. (See interpretation of all exponents, section
              imaginary concepts.)
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref17" id="ftnt17">
                [17]
              </a>{' '}
              <i>p</i>, <i>d</i>, <i>j</i>, and <i>v</i> are a bunch of English
              auxiliary verbs (can, must, may, want), notated based on the first
              letter of the equivalent word in{' '}
              <a href="https://en.wikipedia.org/wiki/Interlingua">
                Interlingua
              </a>
              . See the exponents of exponents category.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref18" id="ftnt18">
                [18]
              </a>{' '}
              As another extension on subscripting, I chose to make subscript 1
              act as "this" and 3 as "that", particularly on non-human entities.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref19" id="ftnt19">
                [19]
              </a>{' '}
              Light is how we see color, so I went with light to the infinity to
              represent color. Since light is additive color, white is the most
              colorful, and black the least.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref20" id="ftnt20">
                [20]
              </a>{' '}
              Just like <i>n</i> is used to talk about the whole class of
              numbers, I used the letter <i>a</i> on its own to talk about the
              whole class of symbols in Transcendental Algebra. More accurately,{' '}
              <i>a</i> represents a figure, but the letters traditionally used
              for symbols are intrinsically tied to their usage as a symbol.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref21" id="ftnt21">
                [21]
              </a>{' '}
              This interpretation is based on tones being "high" or "low". May
              be confused with other senses of height in phonetics, e.g.,{' '}
              <a href="https://en.wikipedia.org/wiki/Vowel#Height">
                vowel height
              </a>
              , or general properties of sound, e.g., amplitude/volume.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref22" id="ftnt22">
                [22]
              </a>{' '}
              While the square in the sentence obviously refers to a plaza or
              other public meeting place, I used a geometric square to remove
              ambiguity.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref23" id="ftnt23">
                [23]
              </a>{' '}
              Linzbach prefers "primordial material", but you can definitely
              make a case for rock here.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref24" id="ftnt24">
                [24]
              </a>{' '}
              Multiplying a zero-exponent by a positional symbol can isolate a
              specific part of an object. This expression is translated as
              "seed" in the reference text, of which the betel nut is one.{' '}
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref25" id="ftnt25">
                [25]
              </a>{' '}
              Adding a number to a figure is interpreted as that number of
              arbitrary units from that figure, so I used <i>n</i> to denote
              arbitrarily far. Far is also relative, so I had to specify "far
              from here".
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref26" id="ftnt26">
                [26]
              </a>{' '}
              <i>z</i>
              <sup>0</sup> is defined as "here" in the "exponents of figures"
              section. Why <i>z</i>? I don't know.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref27" id="ftnt27">
                [27]
              </a>{' '}
              Pen + book = study (given). Study of numbers = math, specifically
              arithmetic. Part of math = equation.
            </p>
          </div>
          <div>
            <p>
              <a href="#ftnt_ref28" id="ftnt28">
                [28]
              </a>{' '}
              Unfortunately, I have to identify this person by first name.
            </p>
          </div>
        </AuthorsNotes>
      </MathJax>
    </MathJaxContext>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
