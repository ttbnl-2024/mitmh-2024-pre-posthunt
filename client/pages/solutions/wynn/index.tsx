import { FC } from 'react';

import AudioLink from 'components/audio_link';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/wynn/0.png';
import image1 from 'assets/solutions/wynn/1.png';
import image2 from 'assets/solutions/wynn/2.png';
import image3 from 'assets/solutions/wynn/3.png';
import image4 from 'assets/solutions/wynn/4.png';
import image5 from 'assets/solutions/wynn/5.png';
import image6 from 'assets/solutions/wynn/6.png';
import audio1 from 'assets/solutions/wynn/wynn-1.mp3';
import audio2 from 'assets/solutions/wynn/wynn-2.mp3';
import audio3 from 'assets/solutions/wynn/wynn-3.mp3';
import audio4 from 'assets/solutions/wynn/wynn-4.mp3';
import audio5 from 'assets/solutions/wynn/wynn-5.mp3';
import audio6 from 'assets/solutions/wynn/wynn-6.mp3';

const SLUG = 'wynn';
const ANSWER = `HERRING`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We find audio of a conductor talking to a music class going over a series
      of songs, but in each song there is a note which sounds really off which
      the conductor comments on. Using phrases the conductor says along with
      clues from the flavor text, we can conclude that these songs must be
      national anthems. The countries are alphabeticalized to aid in
      identification.
    </p>
    <p>
      <b>Song 1 (Greece): "Hýmnos is tin Eleftherían"</b>:{' '}
      <a href="https://www.youtube.com/watch?v=bASNiY1VqC0">
        Greece National Anthem - Ὕμνος εἰς τὴν Ἐλευθερίαν (Extended version)
      </a>
    </p>
    <p>
      Section's lyrics: "Se gnorizo a po tin kopsi, Tou spathiou ti tromeri"
    </p>
    <p>
      English Translation: "I know you from the blade of the sword, the
      terrifying [blade]"
    </p>
    <p>
      The conductor mentions a "dreadful sword" and also getting into the theme
      of this year's MIT Mystery Hunt, which is inspired by Greek mythology.
    </p>
    <p>
      <b>Song 2 (Japan): "Kimigayo"</b>:{' '}
      <a href="https://www.youtube.com/watch?v=S2Vanclvh3Q">
        National Anthem: Japan - 君が代 *NEW VERSION*
      </a>
    </p>
    <p>Section's lyrics: "Kimigayo wa, Chiyo ni yachiyo ni, Sazare-ishi no…"</p>
    <p>
      English Translation: "May your reign continue for a thousand, eight
      thousand generations, until the tiny pebbles…"
    </p>
    <p>The conductor mentions "pebbles".</p>
    <p>
      <b>Song 3 (Mexico): "Himno Nacional Mexicano"</b>:{' '}
      <a href="https://www.youtube.com/watch?v=Q8T9g7memUk">
        Mexican National Anthem - "Himno Nacional Mexicano" (ES/EN)
      </a>
    </p>
    <p>
      Section's lyrics: "Mexicanos al grito de guerra, El acero a prestad y el
      bridón"
    </p>
    <p>
      English Translation: "Mexicans, at the cry of war, assemble the steel and
      bridle"
    </p>
    <p>The conductor mentions a "war cry".</p>
    <p>
      <b>Song 4 (Peru): "Himno Nacional del Perú"</b>:{' '}
      <a href="https://www.youtube.com/watch?v=4NIUhpCaUIU">
        Peruvian National Anthem - "Himno Nacional Del Peru" (ES/EN)
      </a>
    </p>
    <p>Section's lyrics :"Somos libres, seámoslo siempre, seámoslo siempre"</p>
    <p>
      English Translation: "We are free! Let us always be so, let us always be
      so"
    </p>
    <p>
      The conductor mentions "being free" and also that there's a part that
      repeats itself. Since the melody doesn't repeat, we can infer that it's
      the lyrics that repeat.
    </p>
    <p>
      <b>Song 5 (Slovakia): "Nad Tatrou sa blýska"</b>:{' '}
      <a href="https://www.youtube.com/watch?v=L2NSTc_riLw">
        "Nad Tatrou sa blýska" - National Anthem of Slovakia
      </a>
    </p>
    <p>
      Section's lyrics: "Nad Tatrou sa blýska hromy divo bijú, zastavme ich
      bratia, ved' sa ony stratia Slováci ožijú"
    </p>
    <p>
      English Translation: "Lightning flashes over the Tatras Mountain, the
      thunder pounds wildly. Let us pause, brothers, they will surely disappear,
      the Slovaks will revive"
    </p>
    <p>The conductor mentions "thunder and lightning".</p>
    <p>
      <b>Song 6 (Sweden): "Du gamla, du fria"</b>:{' '}
      <a href="https://www.youtube.com/watch?v=9LiN57nfjFw">
        Swedish National Anthem - "Du Gamla, Du Fria" (SV/EN)
      </a>
    </p>
    <p>
      Section's lyrics: "Jag hälsar dig, vänaste land uppå jord, din sol, din
      himmel, dina ängder gröna"
    </p>
    <p>
      English Translation: "I greet thee, loveliest land upon Earth, Thy sun,
      thy sky, thy green landscapes"
    </p>
    <p>
      The conductor mentions "the sun and the sky" and also that this section
      comes from the middle of the song instead of the beginning like the other
      sections
    </p>
    <p>
      By now we should have noticed that despite the clear emphasis on singing
      in this puzzle, there's no actual vocals in any of the songs. This should
      tell us that we need to figure out what lyrics are actually supposed to be
      sung for each section. In addition, the off note in each section lines up
      to exactly one syllable per section.
    </p>
    <p>Greece:</p>
    <AudioLink src={audio1} />
    <p>se gnorizo a po tin kopsi, tou spathiou ti troMEri</p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>Japan:</p>
    <AudioLink src={audio2} />
    <p>kimigayo wa, chiyo ni yachiyo ni, SAzare-ishi no…</p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>Mexico:</p>
    <AudioLink src={audio3} />
    <p>mexicanos al grito de GUErra, el acero a prestad y el bridón</p>
    <p>
      <SheetableImage alt="" src={image2} title="" />
    </p>
    <p>Peru:</p>
    <AudioLink src={audio4} />
    <p>somos libres, seámoslo siempre, seámosLO siempre</p>
    <p>
      <SheetableImage alt="" src={image3} title="" />
    </p>
    <p>Slovakia:</p>
    <AudioLink src={audio5} />
    <p>
      nad tatrou sa blýska hromy divo bijú, zastavme ich bratia, ved' sa ony
      stratia sloVÁci ožijú
    </p>
    <p>
      <SheetableImage alt="" src={image4} title="" />
    </p>
    <p>Sweden:</p>
    <AudioLink src={audio6} />
    <p>
      jag hälsar dig, vänaste land uppå jord, din sol, din himmel, DIna ängder
      gröna
    </p>
    <p>
      <SheetableImage alt="" src={image5} title="" />
    </p>
    <p>
      Now we have six syllables, but they are not in the right order. This is
      where the conductor's mention of "last week's notes" come into play, and
      indeed the image shown has a whiteboard with "LAST WEEK'S NOTES" written
      on it. With six pitches identified by quarter notes on a staff, we match
      each written pitch to the syllable that should be sung at that pitch.
    </p>
    <p>
      <SheetableImage alt="" src={image6} title="" />
    </p>
    <Table>
      <thead>
        <tr>
          <th>Pitch</th>
          <th>Anthem Country</th>
          <th>Syllable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">C5</td>
          <td>Mexico</td>
          <td className="text-center">GUE</td>
        </tr>
        <tr>
          <td className="text-center">B♭4</td>
          <td>Slovakia</td>
          <td className="text-center">VÁ</td>
        </tr>
        <tr>
          <td className="text-center">E4</td>
          <td>Japan</td>
          <td className="text-center">SA</td>
        </tr>
        <tr>
          <td className="text-center">C♯5</td>
          <td>Greece</td>
          <td className="text-center">ME</td>
        </tr>
        <tr>
          <td className="text-center">F4</td>
          <td>Peru</td>
          <td className="text-center">LO</td>
        </tr>
        <tr>
          <td className="text-center">D5</td>
          <td>Sweden</td>
          <td className="text-center">DI</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The correct order for these syllables is GUE-VÁ-SA-ME-LO-DI. If we sing
      (or just speak) these out loud, combined with the four blanks at the
      bottom of the puzzle, we hear the phrase{' '}
      <Monospace>GIVE US A MELODY</Monospace>. Entering this into the answer
      checker gives us a prompt to send a video of us singing a song (from the
      Billboard Global 200, in a group of 5, or 2 for small teams) for HQ. Once
      we have done this, we will receive the true answer to this puzzle:{' '}
      <Answerize>HERRING</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        Official translations may vary from source to source. These ones were
        the most consistent.
      </p>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
