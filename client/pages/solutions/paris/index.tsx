import { FC } from 'react';

import Attributions from 'components/attributions';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/paris/0.png';
import image1 from 'assets/solutions/paris/1.png';
import image2 from 'assets/solutions/paris/2.png';
import image3 from 'assets/solutions/paris/3.png';
import image4 from 'assets/solutions/paris/4.png';
import image5 from 'assets/solutions/paris/5.png';
import image6 from 'assets/solutions/paris/6.png';
import image7 from 'assets/solutions/paris/7.png';
import image8 from 'assets/solutions/paris/8.png';
import image9 from 'assets/solutions/paris/9.png';
import image10 from 'assets/solutions/paris/10.png';
import image11 from 'assets/solutions/paris/11.png';
import image12 from 'assets/solutions/paris/12.png';
import image13 from 'assets/solutions/paris/13.png';
import image14 from 'assets/solutions/paris/14.png';
import image15 from 'assets/solutions/paris/15.png';
import image16 from 'assets/solutions/paris/16.png';
import image17 from 'assets/solutions/paris/17.png';
import image18 from 'assets/solutions/paris/18.png';
import image19 from 'assets/solutions/paris/19.png';
import image20 from 'assets/solutions/paris/20.png';
import image21 from 'assets/solutions/paris/21.png';
import image22 from 'assets/solutions/paris/22.png';
import image23 from 'assets/solutions/paris/23.png';
import image24 from 'assets/solutions/paris/24.png';
import image25 from 'assets/solutions/paris/25.png';
import image26 from 'assets/solutions/paris/26.png';
import image27 from 'assets/solutions/paris/27.png';
import image28 from 'assets/solutions/paris/28.png';
import image29 from 'assets/solutions/paris/29.png';
import image30 from 'assets/solutions/paris/30.png';
import image31 from 'assets/solutions/paris/31.png';
import image32 from 'assets/solutions/paris/32.png';
import image33 from 'assets/solutions/paris/33.png';
import image34 from 'assets/solutions/paris/34.png';
import image35 from 'assets/solutions/paris/35.png';
import image36 from 'assets/solutions/paris/36.png';
import image37 from 'assets/solutions/paris/37.png';
import image38 from 'assets/solutions/paris/38.png';
import image39 from 'assets/solutions/paris/39.png';
import image40 from 'assets/solutions/paris/40.png';
import image41 from 'assets/solutions/paris/41.png';
import image42 from 'assets/solutions/paris/42.png';
import image43 from 'assets/solutions/paris/43.png';
import image44 from 'assets/solutions/paris/44.png';
import image45 from 'assets/solutions/paris/45.png';
import image46 from 'assets/solutions/paris/46.png';
import image47 from 'assets/solutions/paris/47.png';
import image48 from 'assets/solutions/paris/48.png';
import image49 from 'assets/solutions/paris/49.png';
import image50 from 'assets/solutions/paris/50.png';
import image51 from 'assets/solutions/paris/51.png';
import image52 from 'assets/solutions/paris/52.png';
import image53 from 'assets/solutions/paris/53.png';
import image54 from 'assets/solutions/paris/54.png';
import image55 from 'assets/solutions/paris/55.png';
import image56 from 'assets/solutions/paris/56.png';
import image57 from 'assets/solutions/paris/57.png';
import image58 from 'assets/solutions/paris/58.png';
import image59 from 'assets/solutions/paris/59.png';
import image60 from 'assets/solutions/paris/60.png';
import image61 from 'assets/solutions/paris/61.png';

const SLUG = 'paris';
const ANSWER = `MOTOWN`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a .wav file that plays a midi song and some strange
      noises going on in the background. Using clues in the flavor text such as
      "heard this on the wireless" and some general music knowledge, solvers
      should recognize this song as{' '}
      <a href="https://www.youtube.com/watch?v=W8r-tXRLazs">
        "Video Killed the Radio Star" by The Buggles
      </a>.{' '}
      This song is famously about the concern some music artists had about their
      careers being ruined due to not being able to translate well to the visual
      medium of television.
    </p>
    <p>
      Opening the file in Audacity (or other sound editing tool) and viewing the
      spectrogram will reveal hidden images.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      Zooming into each image, we notice that the left and right stereo tracks
      are different! We also see several different images of people holding
      microphones and doing various things and eventually realize these are all
      music video stills.
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <p>
      Many of the images are similar, though there are two smaller images that
      stand out for not being pictures of people:
    </p>
    <p>This 2 second image at the start of the right track:</p>
    <p>
      <SheetableImage className="mx-auto" alt="" src={image2} title="" />
    </p>
    <p>And this 2 second image at the end of the left track:</p>
    <p>
      <SheetableImage className="mx-auto" alt="" src={image3} title="" />
    </p>
    <p>
      Due to the fact that these images are half the length of the other images
      and the fact that they seem to go together, we align the two stereo tracks
      into one track by removing the static that starts and ends the audio and
      by placing the left track before the right.
    </p>
    <p>
      <SheetableImage className="mx-auto" alt="" src={image4} title="" />
    </p>
    <p>
      This reveals an image of a stylized letter M. We can recognize the 3D
      styled M as part of the logo for MTV, a television channel that launched
      in the '80s originally dedicated to playing music videos on air.
    </p>
    <p>
      <SheetableImage
        className="max-w-xs mx-auto"
        alt=""
        src={image5}
        title=""
      />
    </p>
    <p>
      By now, we have enough information and clues to realize that the music
      video stills are all from the first hour of MTV, these include:
    </p>
    <ul>
      <li>
        "Video Killed the Radio Star" being the first music video ever aired on
        MTV (referenced in the flavor text "the first of many strange
        broadcasts")
      </li>
      <li>
        Flavor text mentioning "there were other songs too but we only listened
        for about an hour or so",{' '}
      </li>
      <li>
        A still frame of "Video Killed the Radio Star" being used in the audio (if
        the solvers haven't figured out the song already)
      </li>
      <li>
        Looking at the metadata for the file, the year is listed as 1981, which
        was the same year MTV first launched on air{' '}
      </li>
    </ul>
    <p>
      Several of the pictures are very similar, and we note that certain stills
      are from the same music videos (the video stills are in chronological
      order to aid in identification). With "Video Killed the Radio Star" being
      included as well as being mentioned as the "first of many", we realize the
      images are a substitution cipher, with "Video Killed the Radio Star" being
      the letter A, and going in chronological order of{' '}
      <a href="https://en.wikipedia.org/wiki/List_of_first_music_videos_aired_on_MTV">
        when they first aired
      </a>
      .
    </p>
    <p>Samples of stills in the audio:</p>
    <ol className="audio-stills">
      <li>
        <a href="https://www.youtube.com/watch?v=W8r-tXRLazs">
          "Video Killed the Radio Star" (The Buggles)
        </a>{' '}
        = A
        <div>
          <SheetableImage alt="" src={image6} title="" />
          <SheetableImage alt="" src={image7} title="" />
        </div>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=IvSbQB6-UdY">
          "You Better Run" (Pat Benatar)
        </a>{' '}
        = B
        <div>
          <SheetableImage alt="" src={image8} title="" />
          <SheetableImage alt="" src={image9} title="" />
          <SheetableImage alt="" src={image10} title="" />
          <SheetableImage alt="" src={image11} title="" />
          <SheetableImage alt="" src={image12} title="" />
          <SheetableImage alt="" src={image13} title="" />
        </div>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=EHKHjtup3Qk">
          "She Won't Dance with Me" (Rod Stewart)
        </a>{' '}
        = C
        <div>
          <SheetableImage alt="" src={image14} title="" />
          <SheetableImage alt="" src={image15} title="" />
        </div>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=wqPlb5PLBvg">
          "You Better You Bet" (The Who)
        </a>{' '}
        = D
        <div>
          <SheetableImage alt="" src={image16} title="" />
          <SheetableImage alt="" src={image17} title="" />
          <SheetableImage alt="" src={image18} title="" />
          <SheetableImage alt="" src={image19} title="" />
          <SheetableImage alt="" src={image20} title="" />
          <SheetableImage alt="" src={image21} title="" />
        </div>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=JKgzYLBV_cc">
          "Little Suzi's on the Up" (Ph.D.)
        </a>{' '}
        = E
        <div>
          <SheetableImage alt="" src={image22} title="" />
          <SheetableImage alt="" src={image23} title="" />
          <SheetableImage alt="" src={image24} title="" />
          <SheetableImage alt="" src={image25} title="" />
          <SheetableImage alt="" src={image26} title="" />
          <SheetableImage alt="" src={image27} title="" />
          <SheetableImage alt="" src={image28} title="" />
          <SheetableImage alt="" src={image29} title="" />
        </div>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=GzjX18psf9A">
          "We Don't Talk Anymore" (Cliff Richard)
        </a>{' '}
        = F
        <div>
          <SheetableImage alt="" src={image30} title="" />
          <SheetableImage alt="" src={image31} title="" />
        </div>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=0H6re3PCP3E">
          "Brass in Pocket" (The Pretenders)
        </a>{' '}
        = G
        <div>
          <SheetableImage alt="" src={image32} title="" />
          <SheetableImage alt="" src={image33} title="" />
        </div>
      </li>
      <li value="12">
        <a href="https://www.youtube.com/watch?v=xXrWTFvnqKI">
          "History Never Repeats" (Split Enz)
        </a>{' '}
        = L
        <div>
          <SheetableImage alt="" src={image34} title="" />
          <SheetableImage alt="" src={image35} title="" />
          <SheetableImage alt="" src={image36} title="" />
          <SheetableImage alt="" src={image37} title="" />
        </div>
      </li>
      <li value="15">
        <a href="https://www.youtube.com/watch?v=FOt3oQ_k008">
          "Sailing" (Rod Stewart)
        </a>{' '}
        = O
        <div>
          <SheetableImage alt="" src={image38} title="" />
          <SheetableImage alt="" src={image39} title="" />
          <SheetableImage alt="" src={image40} title="" />
          <SheetableImage alt="" src={image41} title="" />
          <SheetableImage alt="" src={image42} title="" />
          <SheetableImage alt="" src={image43} title="" />
        </div>
      </li>
      <li value="18">
        <a href="https://www.youtube.com/watch?v=n3ZThfylM6I">
          "Bluer Than Blue" (Michael Johnson)
        </a>{' '}
        = R
        <div>
          <SheetableImage alt="" src={image44} title="" />
          <SheetableImage alt="" src={image45} title="" />
          <SheetableImage alt="" src={image46} title="" />
          <SheetableImage alt="" src={image47} title="" />
          <SheetableImage alt="" src={image48} title="" />
          <SheetableImage alt="" src={image49} title="" />
          <SheetableImage alt="" src={image50} title="" />
          <SheetableImage alt="" src={image51} title="" />
          <SheetableImage alt="" src={image52} title="" />
          <SheetableImage alt="" src={image53} title="" />
          <SheetableImage alt="" src={image54} title="" />
          <SheetableImage alt="" src={image55} title="" />
        </div>
      </li>
      <li value="25">
        <a href="https://www.youtube.com/watch?v=H5i7j0VhEHw">
          "Stop Draggin' My Heart Around" (Stevie Nicks with Tom Petty and the Heartbreakers)
        </a>{' '}
        = Y
        <div>
          <SheetableImage alt="" src={image56} title="" />
          <SheetableImage alt="" src={image57} title="" />
          <SheetableImage alt="" src={image58} title="" />
          <SheetableImage alt="" src={image59} title="" />
          <SheetableImage alt="" src={image60} title="" />
          <SheetableImage alt="" src={image61} title="" />
        </div>
      </li>
    </ol>
    <p>
      If we sub each music video still for its corresponding letter (counting
      the MTV logo as an M), we get the following cluephrase:{' '}
      <Monospace>RECORD LABEL FORMED BY BERRY GORDY</Monospace>. A quick online
      search will reveal that the record label that was formed by{' '}
      <a href="https://en.wikipedia.org/wiki/Berry_Gordy">Berry Gordy</a> was in
      fact <Answerize>MOTOWN</Answerize>, the answer to this puzzle.
    </p>
    <style jsx global>{`
      .audio-stills > li {
        margin-bottom: 1.5rem;
      }
      .audio-stills img {
        max-width: 45%;
        display: inline-block;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
      }
    `}</style>

    <Attributions>Audio and music video stills by fair use.</Attributions>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
