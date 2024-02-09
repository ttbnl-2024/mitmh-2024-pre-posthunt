import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'show-of-hands';
const ANSWER = `NOMINATES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This is a sequence puzzle, with three "words" leading to a desired fourth
      word. We will have to recognize sequences in each line of text. The three
      givens are examples on how to find the fourth word.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Clue</th>
          <th>Explanation</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MEGLODG, BETHCABI, AMYHOTE</td>
          <td>
            <i>Little Women</i> characters (<Monospace>MEG</Monospace>,{' '}
            <Monospace>BETH</Monospace>, <Monospace>AMY</Monospace>) lead to{' '}
            <Monospace>JO</Monospace>. Places to stay with the last letter
            removed (<Monospace>LODGe</Monospace>, <Monospace>CABIn</Monospace>,{' '}
            <Monospace>HOTEl</Monospace>) lead to <Monospace>INn</Monospace>.
          </td>
          <td>
            <Monospace>JOIN</Monospace>
          </td>
        </tr>
        <tr>
          <td>FUNCTIONA, MANAGEB, WORKC</td>
          <td>
            <Monospace>FUNCTION</Monospace>, <Monospace>MANAGE</Monospace>,{' '}
            <Monospace>WORK</Monospace> are synonyms for{' '}
            <Monospace>OPERATE</Monospace>. The end letters go{' '}
            <Monospace>A</Monospace>, <Monospace>B</Monospace>,{' '}
            <Monospace>C</Monospace>, continued with <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>OPERATED</Monospace>
          </td>
        </tr>
        <tr>
          <td>ELMI, OAKX, ASHC</td>
          <td>
            Three letter trees (<Monospace>ELM</Monospace>,{' '}
            <Monospace>OAK</Monospace>, <Monospace>ASH</Monospace>), continued
            with <Monospace>FIR</Monospace>. Roman numerals (
            <Monospace>I</Monospace> (1), <Monospace>X</Monospace> (10),{' '}
            <Monospace>C</Monospace> (100)) continued with{' '}
            <Monospace>M</Monospace> (1000).
          </td>
          <td>
            <Monospace>FIRM</Monospace>
          </td>
        </tr>
        <tr>
          <td>ENFORTY, ACKTHIRTY, UEENFIFTEEN (2 wds)</td>
          <td>
            Playing cards without first letter (<Monospace>tEN</Monospace>,{' '}
            <Monospace>jACK</Monospace>, <Monospace>qUEEN</Monospace>),
            continued with <Monospace>kING</Monospace>. Tennis scores (
            <Monospace>FORTY</Monospace>, <Monospace>THIRTY</Monospace>,{' '}
            <Monospace>FIFTEEN</Monospace>), continued with{' '}
            <Monospace>LOVE</Monospace>.
          </td>
          <td>
            <Monospace>IN GLOVE</Monospace>
          </td>
        </tr>
        <tr>
          <td>RROTWOK, RNIPPOT, RSNIPSKILLET</td>
          <td>
            Root vegetables without first two letters (
            <Monospace>caRROT</Monospace>, <Monospace>tuRNIP</Monospace>,{' '}
            <Monospace>paRSNIP</Monospace>), continued with{' '}
            <Monospace>raDISH</Monospace>. Types of cookware (
            <Monospace>WOK</Monospace>, <Monospace>POT</Monospace>,{' '}
            <Monospace>SKILLET</Monospace>), continued with{' '}
            <Monospace>PAN</Monospace>.
          </td>
          <td>
            <Monospace>DISHPAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>SCRAIN, CAENNYWEIGHT, KUNCE</td>
          <td>
            Elements, descending (<Monospace>SC</Monospace>,{' '}
            <Monospace>CA</Monospace>, <Monospace>K</Monospace>), continued with{' '}
            <Monospace>AR</Monospace>. Troy weights without first letters (
            <Monospace>gRAIN</Monospace>, <Monospace>pENNYWEIGHT</Monospace>,{' '}
            <Monospace>oUNCE</Monospace>), continued with{' '}
            <Monospace>pOUND</Monospace>.
          </td>
          <td>
            <Monospace>AROUND</Monospace>
          </td>
        </tr>
        <tr>
          <td>PULLOH, HITCHEN, HAULEM</td>
          <td>
            <Monospace>PULL</Monospace>, <Monospace>HITCH</Monospace>,{' '}
            <Monospace>HAUL</Monospace> are synonyms for{' '}
            <Monospace>TOW</Monospace>. Letter sounds (<Monospace>OH</Monospace>
            , <Monospace>EN</Monospace>, <Monospace>EM</Monospace>), continued
            with <Monospace>EL</Monospace>.
          </td>
          <td>
            <Monospace>TOWEL</Monospace>
          </td>
        </tr>
        <tr>
          <td>TAYANKE, UPSILOYANKE, PHDIAMONDBAC</td>
          <td>
            Greek alphabet letters without last letter (
            <Monospace>TAu</Monospace>, <Monospace>UPSILOn</Monospace>,{' '}
            <Monospace>PHi</Monospace>), continued with{' '}
            <Monospace>CHi</Monospace>. World series champions 1999-2002,
            without last two letters (<Monospace>YANKEes</Monospace>,{' '}
            <Monospace>YANKEes</Monospace>, <Monospace>DIAMONDBACks</Monospace>
            ), continued with <Monospace>ANGEls</Monospace>.
          </td>
          <td>
            <Monospace>CHANGE</Monospace>
          </td>
        </tr>
        <tr>
          <td>KYLES, ERICMIN, KENNYHR</td>
          <td>
            South park main characters (<Monospace>KYLE</Monospace>,{' '}
            <Monospace>ERIC</Monospace>, <Monospace>KENNY</Monospace>),
            continued with <Monospace>STAN</Monospace>. Abbreviations for time (
            <Monospace>S</Monospace> (second), <Monospace>MIN</Monospace>{' '}
            (minute), <Monospace>HR</Monospace> (hour)), continued with{' '}
            <Monospace>D</Monospace> (day).
          </td>
          <td>
            <Monospace>STAND</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      When looking at resulting words, we can chain these words to HAND or
      HANDS:
    </p>
    <Table className="font-mono">
      <tbody>
        <tr>
          <td>JOIN</td>
          <td>HANDS</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>HAND</td>
          <td>OPERATED</td>
        </tr>
        <tr>
          <td>FIRM</td>
          <td>HAND</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>HAND</td>
          <td>IN GLOVE</td>
        </tr>
        <tr>
          <td>DISHPAN</td>
          <td>HANDS</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>HAND</td>
          <td>AROUND</td>
        </tr>
        <tr>
          <td></td>
          <td>HAND</td>
          <td>TOWEL</td>
        </tr>
        <tr>
          <td>CHANGE</td>
          <td>HANDS</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>HAND</td>
          <td>STAND</td>
        </tr>
      </tbody>
    </Table>

    <p>
      The letters nearest to the word HAND(S) spell{' '}
      <b>
        <Monospace>NOMINATES</Monospace>
      </b>
      , which is the answer.
    </p>
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
