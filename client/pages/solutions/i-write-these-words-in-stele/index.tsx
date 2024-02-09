import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'i-write-these-words-in-stele';
const ANSWER = `AUGUR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      The given text is the beginning of "Kwaan's inscription", from the Brandon
      Sanderson novel <i>The Well of Ascension</i>, in the <i>Mistborn</i> series, written in
      the Steel alphabet from that series. Searching these terms online leads to
      the{' '}
      <a href="https://coppermind.net/wiki/Steel_alphabet">
        Coppermind article on the Steel alphabet
      </a>
      , which provides a translation key. The footnotes on the article further
      explain how the placement of dots on the characters can distinguish the
      otherwise ambiguous E/I, O/U, etc. Below is the translated text (with
      punctuation added):
    </p>
    <Clue>
      <p className="mx-10">
        I have begun to wonder if I am the only sane man <u>reainingm</u>. Can
        the others not see? They have been waiting so long for <u>theri</u> hero
        to come— the one <u>pokens</u> of in <u>errisT</u> <u>prophecesi</u>—
        that they quickly jump between <u>coclusionsn</u>, presuming that each
        story and <u>leendg</u> applies to this one man.
      </p>
      <p className="mx-10">
        My brethren ignore the other <u>actsf</u>. They cannot connect the other
        strange things that are happening. They are deaf to my <u>bjectionso</u>{' '}
        and blind to my <u>discoveiesr</u>.{' '}
      </p>
      <p className="mx-10">
        Perhaps they are right. Perhaps I am mad, or jealous, or simply daft. My
        name is Kwaan. Philosopher, scholar, traitor. I am the one who
        discovered Alendi, and I am the one who first <u>proclaiedm</u> him to
        be the Hero of Ages. I am the one who started this all.
      </p>
    </Clue>
    <p>
      Comparing these passages to Kwaan's original inscription, we find several
      words have been altered by moving one letter to the end of the word,
      similar to how the quote in the title has been corrupted from "steel" to
      "stele". Stringing together the moved letters (grouped by passage), we get{' '}
      <Clue>MISTING FOR M</Clue>.
    </p>
    <p>
      Further reading on the Coppermind indicates Mistings in the <i>Mistborn</i>
      series are people with magical abilities associated with a specific metal.
      As noted on the Coppermind, Steel alphabet letters also correspond to
      specific metals. The letter <Clue>M</Clue> corresponds to gold, and the
      type of Misting associated with gold is also called an{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <details>
        <summary>SPOILERS FOR ALL <i>MISTBORN</i> BOOKS</summary>
        <p>
          I imagine this to be a recreation of Kwaan's inscription, hence why it
          is written on rock in modern-style Steel alphabet rather than on steel
          in the original Terris alphabet, thereby making it susceptible to
          shardic manipulation.
        </p>
      </details>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
