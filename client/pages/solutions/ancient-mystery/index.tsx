import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'ancient-mystery';
const ANSWER = `AMNIOTES`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each speech bubble represents an animal sound in some language. The title
      hints at this by quoting a line from the song "
      <i>What Does the Fox Say?</i>", a song about animal onomatopoeia. The
      flavor text, "
      <i>
        What did all the other speakers have in common that made the second
        speaker feel left out?
      </i>
      " hints that we should find who the speaker is for each speech bubble. The
      English names of the animals do not have the right number of letters to
      fit the blanks, but if we instead try the animal names in their
      corresponding languages, the names now fit. When we index into the names
      using the highlighted spaces and read the letters in the order given, it
      spells{' '}
      <b>
        <Monospace>AMNIOTES</Monospace>
      </b>
      , which is the answer to this puzzle, as well as to the question of what
      all the other speakers except the bee have in common.
    </p>
    <p>
      The sounds used can all be found on Wikipedia's page of{' '}
      <a href="https://en.wikipedia.org/wiki/Cross-linguistic_onomatopoeias">
        cross-linguistic onomatopoeias
      </a>
      .
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Image</th>
          <th>Animal Noise</th>
          <th>Language</th>
          <th>English Animal Name</th>
          <th>Animal Name in Source Language</th>
          <th>Indexed Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 musical note coming from a trumpet</td>
          <td>Toot</td>
          <td>English</td>
          <td>Elephant</td>
          <td>
            <Monospace>ELEPH</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>NT</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>2 guns</td>
          <td>Gun gun</td>
          <td>Bengali</td>
          <td>Bee</td>
          <td>
            <Monospace>MAU</Monospace>
            <b>
              <Monospace>M</Monospace>
            </b>
            <Monospace>ĀCHI</Monospace> (মৌমাছি)
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>2 gentleman bowing</td>
          <td>Bow bow</td>
          <td>Kannada</td>
          <td>Dog</td>
          <td>
            <b>
              <Monospace>N</Monospace>
            </b>
            <Monospace>ĀYI</Monospace> (ನಾಯಿ)
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>2 garden hoes</td>
          <td>Hoe-hoe</td>
          <td>Afrikaans</td>
          <td>Owl</td>
          <td>
            <Monospace>U</Monospace>
            <b>
              <Monospace>I</Monospace>
            </b>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>3 camping cots</td>
          <td>Cot cot cot</td>
          <td>French</td>
          <td>Chicken</td>
          <td>
            <Monospace>P</Monospace>
            <b>
              <Monospace>O</Monospace>
            </b>
            <Monospace>ULET</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>2 golf par signs</td>
          <td>Par-par</td>
          <td>Basque</td>
          <td>Duck</td>
          <td>
            <Monospace>AHA</Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
            <Monospace>EA</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            2 movie poster for <i>Hunk</i>
          </td>
          <td>Hunk-hunk</td>
          <td>Albanian</td>
          <td>Pig</td>
          <td>
            <Monospace>D</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>RR</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            2 overlapping movie posters for <i>Coco</i>
          </td>
          <td>Cocococo</td>
          <td>Latin</td>
          <td>Rooster</td>
          <td>
            <Monospace>GALLU</Monospace>
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
    <Attributions>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>Description</th>
            <th>License</th>
            <th>Source</th>
            <th>Attribution and modifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trumpet</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://www.rawpixel.com/image/7613533/png-paper-people">
                Rawpixel
              </a>
            </td>
            <td>
              <a href="https://www.rawpixel.com/">Rawpixel</a>
              <br />
              Modifications: Modified and added to a collage
            </td>
          </tr>
          <tr>
            <td>Gun</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://opengameart.org/content/gun-construction-kit">
                OpenGameArt
              </a>
            </td>
            <td>
              <a href="https://opengameart.org/users/spriteattack">
                SpriteAttack
              </a>{' '}
              on OpenGameArt
              <br />
              Modifications: Added to a collage
            </td>
          </tr>
          <tr>
            <td>Bowing Gentleman</td>
            <td>Public Domain</td>
            <td>
              <a href="https://freesvg.org/take-a-bow">FreeSVG</a>
            </td>
            <td>
              OpenClipArt on FreeSVG
              <br />
              Modifications: Modified and added to a collage
            </td>
          </tr>
          <tr>
            <td>Garden hoe </td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/274213/gardening-2">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/Firkin">Firkin</a> on
              OpenClipArt
              <br />
              Modifications: Modified and added to a collage
            </td>
          </tr>
          <tr>
            <td>Camping cot</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original art</td>
            <td>Jim Hays</td>
          </tr>
          <tr>
            <td>Golf par sign</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original art</td>
            <td>Jim Hays</td>
          </tr>
          <tr>
            <td>Hunk movie poster</td>
            <td>Fair use</td>
            <td>
              <a href="https://m.media-amazon.com/images/I/518aFj1K8YL._AC_.jpg">
                Amazon
              </a>
            </td>
            <td>Modifications: Cropped and added to a collage</td>
          </tr>
          <tr>
            <td>Coco movie poster</td>
            <td>Fair use</td>
            <td>
              <a href="https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg">
                Disney
              </a>
            </td>
            <td>
              <a href="https://movies.disney.com/coco">Disney</a>
              <br />
              Modifications: Cropped and added to a collage
            </td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      #extraction th:nth-child(6),
      #extraction td:nth-child(6) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
