import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'shifting-times';
const ANSWER = `SEED`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each of these headlines was accidentally typed wrong on the keyboard,
      making partial cryptograms. We take each headline, and determine how a
      keyboard was misused to type it. There are four misuses, with three of
      them repeated twice. These are:
    </p>
    <ul>
      <li>Typing with fingers one key to the left</li>
      <li>Typing with fingers one key to the right</li>
      <li>Typing with the keyboard layout set to Colemak</li>
      <li>Typing with the keyboard layout set to Dvorak</li>
    </ul>
    <p>
      We need to find the sentence that was originally typed to give the
      apparent headline. These sentences match up with the images from each
      article. Each of the sentences has a single word that is missing one
      letter. Using the images for confirmation, these letters can be
      determined, and form the answer when ordered.
    </p>
    <p>
      We can find a part of each apparent headline that is depicted graphically
      in one of the images that isn't its own. These can be used to order the
      extracted letters as follows: The big image has no other headline depicted
      in it, and is a natural starting place. Its apparent headline, "Jr, abe
      pay man a jay" is partially depicted in the thought bubble of the person
      sitting on a chair under the headline "bRag As a IT AXed arUBA". This
      second headline is the next in the chain. Continue until there are no more
      images.
    </p>
    <p>
      Using this order, the missing letters spell out{' '}
      <Monospace>ITSSEED</Monospace>, so we need to submit{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <p>Each of these is described in the table below:</p>
      <Table className="extract-table">
        <thead>
          <tr>
            <th>Ltr</th>
            <th>Apparent Sentence</th>
            <th>Shift</th>
            <th>Raw Decoding</th>
            <th>Corrected decoding</th>
            <th>Typo</th>
            <th>Ordering hint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I</td>
            <td>Jr, abe pay man a jay</td>
            <td>Dvorak</td>
            <td>Cow and rat mal a cat</td>
            <td>Cow and rat mail a cat</td>
            <td>
              MA<u>I</u>L
            </td>
            <td>This is the big image, and contains no other clues </td>
          </tr>
          <tr>
            <td>T</td>
            <td>
              bRag As A IT AXed arUBA
              <sup>
                <a href="#fn1" id="ref1">
                  [1]
                </a>
              </sup>
            </td>
            <td>Left</td>
            <td>ntsh sd s oy scrf stins</td>
            <td className="text-center text-center">
              Natasha sad as toy scarf stains
            </td>
            <td>
              <u>T</u>OY
            </td>
            <td>
              Thought bubble in the upper right shows someone giving another
              person a bird to match "pay man a jay"
            </td>
          </tr>
          <tr>
            <td>S</td>
            <td>Map has a tag charm</td>
            <td>Colemak</td>
            <td>Mar had a fat chasm</td>
            <td>Mars had a fat chasm</td>
            <td>
              MAR<u>S</u>
            </td>
            <td>
              On the side of mars, theres an{' '}
              <a href="https://en.wikipedia.org/wiki/It_(character)">It</a>{' '}
              who's throwing an ax at a blob that looks like Aruba, matching the
              phrase "a IT AXed arUBA"
            </td>
          </tr>
          <tr>
            <td>S</td>
            <td>Bake racer fair why bug type</td>
            <td>Colemak</td>
            <td>Bank sacks eals who bit fork</td>
            <td>Bank sacks seals who bit fork</td>
            <td>
              <u>S</u>EALS
            </td>
            <td>
              Behind the bank, there's a map with a tag hanging off the side,
              matching all of "Map has a tag charm"
            </td>
          </tr>
          <tr>
            <td>E</td>
            <td>
              wAR Guru girl nina ib due
              <sup>
                <a href="#fn2" id="ref2">
                  [2]
                </a>
              </sup>
            </td>
            <td>Left</td>
            <td>est hiti hot: moms on fir</td>
            <td>East haiti hot: moms on fire</td>
            <td>
              FIR<u>E</u>
            </td>
            <td>
              In the stroller of the mom, there's a baby caterpie, matching "bug
              type"
              <sup>
                <a href="#fn2">[2]</a>
              </sup>
            </td>
          </tr>
          <tr>
            <td>E</td>
            <td>Pay yale a yr. or Brad jab ham</td>
            <td>Dvorak</td>
            <td>Rat tapd a toe so Noah can jam</td>
            <td>Rat taped a toe so Noah can jam</td>
            <td>
              TAP<u>E</u>D
            </td>
            <td>
              The person playing a guitar in the right of the image is sitting
              in Sukhasana and has a war helmet on, matching "wAR Guru girl
              nina"{' '}
            </td>
          </tr>
          <tr>
            <td>D</td>
            <td>
              zest got, bored doc aids ants grid
              <sup>
                <a href="#fn3" id="ref3">
                  [3]
                </a>
              </sup>
            </td>
            <td>Right</td>
            <td>War firm views six USA bra feus</td>
            <td>War firm views six USA bra feuds</td>
            <td>
              FEU<u>D</u>S
            </td>
            <td>
              One of the six things that the lockheed martin logo is looking at
              is a syringe jabbing a piece of ham, matching "jab ham"
              <sup>
                <a href="#fn3">[3]</a>
              </sup>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        <sup>
          <a href="#ref1" id="fn1">
            [1]
          </a>
        </sup>{' '}
        All of the &lt;a&gt;s in the correct sentence become &lt;capslock&gt;
        when typed incorrectly, so there's some work to reconstruct the sentence
        based on capitalization change.
      </p>
      <p>
        <sup>
          <a href="#ref2" id="fn2">
            [2]
          </a>
        </sup>{' '}
        The silhouette in the background is the outline of Haiti. This has the
        same &lt;a&gt; &rarr; &lt;capslock&gt; change, and so also requires some
        care in decoding.
      </p>
      <p>
        <sup>
          <a href="#ref3" id="fn3">
            [3]
          </a>
        </sup>{' '}
        The logo at the top is the lockheed martin logo, a "war firm". The
        &lt;z&gt; from "zest" was a &lt;shift&gt;, which capitalizes the
        sentence. The &lt;a&gt; at the beginning of "aids" and "ants" was
        &lt;capslock&gt; and capitalizes "USA".
      </p>
    </Appendix>
    <AuthorsNotes>
      <p>
        This puzzle was inspired by someone on our discord saying: "U xiyks hiub
        GxjRGIB FEIYO IE AINWRGUBF. shoot, let me try that again from the home
        keys" and thinking, wouldn't it be cool if they had accidentally typed a
        different english sentence. The construction for this was extremely
        tight, trying to find phrases that were good enough in the ciphertext
        and resolved to clear and correct headlines in the plaintext. This was
        only possible because of the freedom given by the omitted letters, which
        itself was a natural extraction. For Colemak, we considered using the
        fact that capslock is instead a backspace key, which would allow for
        some acronym shenanigans, but dropped it due to confusion when test
        solving. Ideally each sentence would also have its own keyboard misuse
        with an interesting quirk, but time was limited.
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>
        Following images used under{' '}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          CC BY
        </a>
        .
      </p>
      <ul>
        <li>
          <a href="https://www.svgrepo.com/svg/454281/cat-halloween-kitty">
            https://www.svgrepo.com/svg/454281/cat-halloween-kitty
          </a>
        </li>
        <li>
          <a href="https://www.svgrepo.com/svg/528379/mailbox">
            https://www.svgrepo.com/svg/528379/mailbox
          </a>
        </li>
        <li>
          <a href="https://www.svgrepo.com/svg/513321/map">
            https://www.svgrepo.com/svg/513321/map
          </a>
        </li>
        <li>
          <a href="https://www.svgrepo.com/svg/501830/tag">
            https://www.svgrepo.com/svg/501830/tag
          </a>
        </li>
      </ul>
      <p>Other images used under Public Domain/CC0 or drawn by the author. </p>
    </Attributions>
    <style jsx global>{`
      .extract-table td {
        font-size: 85%;
        padding: 2px 6px !important;
      }
      .extract-table td:nth-child(5n + 1) {
        text-align: center;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
