import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'dont-feed-the-trolls';
const ANSWER = `DIVINE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are shown a series of 11{' '}
      <a href="https://knowyourmeme.com/memes/troll-quotes">troll quote</a>{' '}
      images, as hinted at by the reference to "Trolls" in the puzzle's title.
      After examining the images, we notice that each consists of a quotation,
      an attributed speaker, and an image that prominently displays a character
      from a movie. However, consistent with the format of a troll quote, none
      of the quotations, attributed speakers, or characters in the images match
      one another. Some possible routes of exploration might be identifying the
      sources of the quotations (by identifying their actual movie or speaker),
      identifying the prominently displayed characters in the images, or
      identifying the movies associated with the attributed speakers. However,
      noting that "Sheriff Woody" is one of the speakers, who appears in
      multiple <i>Toy Story</i> movies, we can rule out that each speaker is
      associated with a unique movie. Similarly, if we look for the speaker of,
      "If you build it, they will come.", we find that this was said by a
      disembodied whisper rather than a named character, so we can rule out
      identifying a unique speaker for each quotation. If we start on character
      identification from the images, we may notice that the characters all have
      unique starting letters to their names, from A to K, suggesting an ordering.
    </p>
    <p>
      As we start to research the sources of the quotations, we may notice, if
      we hadn't already done so, that all of these quotations are instances of
      the Mandela effect, where a misquotation of the original movie line has
      taken hold within popular culture. To help confirm that we have correctly
      identified the sources of the quotations, the images are presented in
      alphabetical order by the title of the movie that the misquote stems
      from.
    </p>
    <p>
      As hinted at by the reference in the flavor text to "<i>mistakes</i>",
      each of the misquotes has a single word that is incorrect. For example,
      the line, <i>"Fasten your seatbelts, it's going to be a bumpy </i>
      <i>
        <b>ride</b>
      </i>
      <i>.</i>" is a misquotation of,{' '}
      <i>"Fasten your seatbelts, it's going to be a bumpy </i>
      <i>
        <b>night</b>
      </i>
      <i>."</i> When we examine the positions of the incorrect word in each
      quotation, these values range from 1 to 10, and are never more than the
      length of the attributed speaker's name.
    </p>
    <p>
      Using the positions of the incorrect words as indexes into the speaker
      names, then sorting by the names of the characters in the images, we spell
      out: <Monospace>TOFORGIVEIS</Monospace>. Appropriate to the context of
      making mistakes, the solution to the puzzle is the completion of the
      phrase, "To err is human, to forgive, <Answerize>DIVINE</Answerize>
      ".
    </p>
    <Appendix>
      <Table>
        <thead>
          <tr>
            <th>Character in Image</th>
            <th>Source of Original Quote</th>
            <th>Misquote/Quote</th>
            <th>Index</th>
            <th>Attributed Speaker</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>A</b>nn Darrow
            </td>
            <td>
              <i>Planet of the Apes</i>
            </td>
            <td>
              <b>(Get/Take)</b> your stinkin' paws off me, you damn dirty ape!
            </td>
            <td>1</td>
            <td>
              <b>
                <Monospace>T</Monospace>
              </b>
              <Monospace>IANA</Monospace>
            </td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>B</b>ane
            </td>
            <td>
              <i>The Empire Strikes Back</i>
            </td>
            <td>
              <b>(Luke,/No.)</b> I am your father.
            </td>
            <td>1</td>
            <td>
              <b>
                <Monospace>O</Monospace>
              </b>
              <Monospace>TTO OCTAVIUS</Monospace>
            </td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>C</b>harlie Bucket
            </td>
            <td>
              <i>Forrest Gump</i>
            </td>
            <td>
              My mamma always said life <b>(is/was)</b> like a box of
              chocolates.
            </td>
            <td>6</td>
            <td>
              <Monospace>SHERI</Monospace>
              <b>
                <Monospace>F</Monospace>
              </b>
              <Monospace>F WOODY</Monospace>
            </td>
            <td>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>D</b>ominic Toretto
            </td>
            <td>
              <i>All About Eve</i>
            </td>
            <td>
              Fasten your seatbelts, it's going to be a bumpy{' '}
              <b>(ride/night)</b>.
            </td>
            <td>10</td>
            <td>
              <Monospace>HOUSTON GR</Monospace>
              <b>
                <Monospace>O</Monospace>
              </b>
              <Monospace>UND CONTROL</Monospace>
            </td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>E</b>lvis
            </td>
            <td>
              <i>Dirty Harry</i>
            </td>
            <td>
              Do <b>(you/I)</b> feel lucky?
            </td>
            <td>2</td>
            <td>
              <Monospace>P</Monospace>
              <b>
                <Monospace>R</Monospace>
              </b>
              <Monospace>OFESSOR PETROVSKY</Monospace>
            </td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>F</b>rodo Baggins
            </td>
            <td>
              <i>Casablanca</i>
            </td>
            <td>
              Play it <b>(again/[nothing])</b>, Sam.
            </td>
            <td>3</td>
            <td>
              <Monospace>MI</Monospace>
              <b>
                <Monospace>G</Monospace>
              </b>
              <Monospace>UEL RIVERA</Monospace>
            </td>
            <td>
              <Monospace>G</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>G</b>aston
            </td>
            <td>
              <i>Snow White and the Seven Dwarfs</i>
            </td>
            <td>
              <b>(Mirror,/Magic)</b> mirror on the wall, who is the fairest one
              of all?
            </td>
            <td>1</td>
            <td>
              <b>
                <Monospace>I</Monospace>
              </b>
              <Monospace>CHABOD CRANE</Monospace>
            </td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>H</b>ogarth Hughes
            </td>
            <td>
              <i>Frankenstein</i>
            </td>
            <td>
              Look, it's moving. <b>(He's/It's)</b> alive!
            </td>
            <td>4</td>
            <td>
              <Monospace>DR E</Monospace>
              <b>
                <Monospace>V</Monospace>
              </b>
              <Monospace>IL</Monospace>
            </td>
            <td>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>I</b>ndiana Jones
            </td>
            <td>
              <i>The Fellowship of the Ring</i>
            </td>
            <td>
              <b>(Run/Fly)</b>, you fools!
            </td>
            <td>1</td>
            <td>
              <b>
                <Monospace>E</Monospace>
              </b>
              <Monospace>RAGON</Monospace>
            </td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>J</b>ack Dawson
            </td>
            <td>
              <i>Jaws</i>
            </td>
            <td>
              <b>(We're/You're)</b> gonna need a bigger boat!
            </td>
            <td>1</td>
            <td>
              <b>
                <Monospace>I</Monospace>
              </b>
              <Monospace>SHMAEL</Monospace>
            </td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <b>K</b>uzco
            </td>
            <td>
              <i>Field of Dreams</i>
            </td>
            <td>
              If you build it, <b>(they/he)</b> will come.
            </td>
            <td>5</td>
            <td>
              <Monospace>HADE</Monospace>
              <b>
                <Monospace>S</Monospace>
              </b>
            </td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx>{`
      td:nth-child(4),
      td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
