import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'deep-conspiracy';
const ANSWER = `DAVE SEVILLE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      This puzzle is a series of puzzles referencing Taylor Swift's
      long-standing relationship with hiding puzzles and easter eggs in her
      works, and the many conspiracy theories that have arisen as fans try and
      solve them. The puzzles leading up to the mini-meta can be tackled in any
      order.
    </p>
    <h3>Insta Countdown</h3>
    <p>
      In the upper-left corner, the Insta Countdown puzzle shows a
      Polaroid-style photo of a fence, featuring the text "How many rails in the
      fence?", alongside a jumble of letters. This is{' '}
      <a href="https://www.billboard.com/music/pop/taylor-swift-drops-lover-album-easter-egg-days-before-its-release-8527685/">
        referencing a "Five Holes in the Fence" theory
      </a>{' '}
      that circulated about a potential countdown on Taylor Swift's Instagram
      feed, only in this case it is nudging us towards the rail fence cipher.
    </p>
    <p>
      There are five rails in the pictured fence (the same number of holes in
      the fence), so using a rail fence cipher to decode the message results in
      the first solution, <Monospace>TAKE US TO CHURCH TAYLOR</Monospace> (a{' '}
      <a href="https://www.elitedaily.com/lifestyle/taylor-swift-fan-chants-eras-tour">
        popular fan-chant
      </a>{' '}
      from the Eras tour).
    </p>
    <h3>Secret Pseudonyms</h3>
    <p>
      In the top middle, the Secret Pseudonyms shows a series of Post-it Notes
      with vague references to books or songs that Taylor Swift was rumored to
      have created.
    </p>
    <Table id="secret-pseudonyms">
      <thead>
        <tr>
          <th>Book/Media Described</th>
          <th>Author</th>
          <th>Taylor Swift Connection</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i>Seven Husbands of Evelyn Hugo</i></td>
          <td>
            <Monospace>TAYLOR JENKINS REID</Monospace>
          </td>
          <td>
            Some theorists argue the book is about Taylor, while others even
            claim{' '}
            <a href="https://www.reddit.com/r/Gaylor_Swift/comments/13395ii/thoughts_on_the_seven_husbands_of_evelyn_hugo_and/">
              Taylor might have secretly written the book
            </a>
            .
          </td>
        </tr>
        <tr>
          <td><i>Beyond the Story: 10-Year Record of BTS</i></td>
          <td>
            <Monospace>MYEONGSEOK KANG</Monospace> (and BTS)
          </td>
          <td>
            When an untitled book was announced,{' '}
            <a href="http://nytimes.com/2023/05/12/us/taylor-swift-memoir-bts-fans.html">
              Taylor Swift fans preordered the book
            </a>{' '}
            in droves convinced it was her memoir.
          </td>
        </tr>
        <tr>
          <td><i>Argylle</i></td>
          <td>
            <Monospace>ELLY CONWAY</Monospace>
          </td>
          <td>
            Speculation about the upcoming spy thriller led to a fan theory
            about{' '}
            <a href="https://www.newsweek.com/taylor-swift-video-sparks-wild-theory-argylle-elly-conway-1836847">
              Elly Conway being Taylor Swift's pseudonym
            </a>
            .
          </td>
        </tr>
        <tr>
          <td><i>The Lavender Haze: Sapphic Poetry on Love</i></td>
          <td>
            <Monospace>JUNE BATES</Monospace>
          </td>
          <td>
            The sapphic poetry book released slightly before Taylor Swift's
            album with "Lavender Haze" was released,{' '}
            <a href="https://slate.com/culture/2022/10/taylor-swift-lavender-haze-june-bates-book-amazon.html">
              leading to speculation Taylor actually wrote the book
            </a>
            .
          </td>
        </tr>
        <tr>
          <td>"Look What You Made Me Do" cover (<i>Killing Eve</i>)</td>
          <td>
            <Monospace>NILS SJÖBERG</Monospace>
          </td>
          <td>
            While her brother's involvement remains up for debate,{' '}
            <a href="https://variety.com/2020/music/news/taylor-swift-brother-austin-look-what-you-made-me-do-killing-eve-1234615703/">
              Taylor Swift recently confirmed
            </a>{' '}
            she has written / produced a number of songs (including a cover of
            her own song) under a pseudonym.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Extracting the numbered spaces spells out the second answer,{' '}
      <Monospace>NO IT'S BECKY</Monospace> (a reference to a meme of someone
      insisting Taylor Swift was actually "Becky"&mdash;an{' '}
      <a href="https://www.usmagazine.com/celebrity-news/news/taylor-swift-wears-hilarious-no-its-becky-shirt-referencing-meme-2014259/">
        online joke Taylor wholly embraced
      </a>
      ).
    </p>
    <h3>From the Vault</h3>
    <p>
      In the upper right, From the Vault shows a Google search for "vault
      puzzles" alongside a series of colored letters in different shapes. These
      messages can be unscrambled by grouping the letters together by color, and
      then treating each distinct shape as a different word, ordered
      sequentially by the number of sides.
    </p>
    <p>
      The flavor text recommends starting with "black and white" answers. The
      black letters spell out <Monospace>NEXT DO GOLD</Monospace>, while the
      yellow notes spell out <Monospace>CAESAR SHIFT UNUSED</Monospace>. Since
      the remaining colors don't cleanly anagram out to words, those letters
      should be shifted accordingly, to provide the following sequence of steps:
    </p>
    <Table id="from-the-vault">
      <thead>
        <tr>
          <th>Color</th>
          <th>Pre-Shift Letters</th>
          <th>Anagrammed Message / Post-Shift Letters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Black</td>
          <td>n/a</td>
          <td>
            <Monospace>NEXT DO GOLD</Monospace>
          </td>
        </tr>
        <tr>
          <td>Yellow</td>
          <td>n/a</td>
          <td>
            <Monospace>CAESAR SHIFT UNUSED</Monospace>
          </td>
        </tr>
        <tr>
          <td>Blue</td>
          <td>
            <Monospace>TENLF ARKG GENPX</Monospace>
          </td>
          <td>
            <Monospace>GRAYS NEXT TRACK</Monospace>
          </td>
        </tr>
        <tr>
          <td>Gray</td>
          <td>
            <Monospace>FJRRG ABGUVAT</Monospace>
          </td>
          <td>
            <Monospace>SWEET NOTHING</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The track following “Sweet Nothing” on the <i>Midnights</i> album is the
      third answer, <Monospace>MASTERMIND</Monospace>{' '}
      (a song about how everything is intentional with Taylor, when read
      a certain way).
    </p>
    <h3>Mansion of Secrets</h3>
    <p>
      In the bottom left, Mansion of Secrets shows a color coded picture of the
      "Lover House" (featured prominently in the music video for <i>Lover</i>),
      paired with the elevator from the “Bejeweled” music video, both of
      which reinforced canonical rooms and colors for Taylor Swift's albums.
    </p>
    <p>
      Each room features part of the lyrics from one of the songs on that album,
      with certain words blurred out. Indexing into the completed quote using
      the album number(s) (diagonalizing) gives the answer for this round.
    </p>
    <Table id="mansion-of-secrets">
      <thead>
        <tr>
          <th>Album #</th>
          <th>Album Name</th>
          <th>Song</th>
          <th>Full Quote</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Taylor Swift</td>
          <td>“Our Song”</td>
          <td>
            <i>AND</i> when I got home
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Fearless</td>
          <td>“Hey Stephen”</td>
          <td>
            <i>THE</i> girls <i>TOSSING</i> rocks at your window
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Speak Now</td>
          <td>“The Story of Us”</td>
          <td>
            <i>LOOKS</i> a lot <i>LIKE</i> a tragedy
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Red</td>
          <td>“Treacherous”</td>
          <td>
            I <i>WILL</i> get <i>YOU</i>, a get you alone
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>1989</td>
          <td>“Style”</td>
          <td>
            The <i>LIGHTS</i> are off
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Reputation</td>
          <td>“Getaway Car”</td>
          <td>
            In <i>SHADES</i> of gray in candlelight
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Lover</td>
          <td>“Cruel Summer”</td>
          <td>
            Like a <i>BABY</i> coming home
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Folklore</td>
          <td>“Betty”</td>
          <td>
            Those <i>DAYS</i> turned into nights
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Evermore</td>
          <td>“Willow”</td>
          <td>
            To take my <i>HAND</i> wreck my plans
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Fearless</td>
          <td>“Hey Stephen”</td>
          <td>
            <i>THE</i> girls <i>TOSSING</i> rocks at your window
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Red</td>
          <td>“Treacherous”</td>
          <td>
            I <i>WILL</i> get <i>YOU</i>, a get you alone
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>Midnights</td>
          <td>“Anti-Hero”</td>
          <td>
            When my <i>DEPRESSION</i> works the graveyard shift
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>Speak Now</td>
          <td>“The Story of Us”</td>
          <td>
            <i>LOOKS</i> a lot <i>LIKE</i> a tragedy
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This answer spells out <Monospace>A HOLIDAY HOUSE</Monospace>, which
      references the name of her house as described in the song{' '}
      “The Last Great American Dynasty”.
    </p>
    <h3>Lyrical Interludes</h3>
    <p>
      In the bottom right, Lyrical Interludes provides a block of phrases that
      look like lyrics, with some letters awkwardly capitalized. Those capital
      letters, when read in order, spell out{' '}
      <Monospace>LINER NOTE HIDDEN PASSAGES</Monospace>.
    </p>
    <p>
      Cross-referencing the quotes against the secret passages Taylor Swift hid
      in her first five albums against the songs they were hidden in spells out
      the solution:
    </p>
    <Table id="lyrical-interludes">
      <thead>
        <tr>
          <th>Quote</th>
          <th>Song Title</th>
          <th>First Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>While you were on a train</td>
          <td>“Sad Beautiful Tragic”</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>We always want what we can't reach</td>
          <td>“Untouchable”</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Life is full of little interruptions</td>
          <td>“Innocent”</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>Won't stop until it's over</td>
          <td>“Treacherous”</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            She lost him, but she found herself, and somehow, that was
            everything
          </td>
          <td>“Clean”</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>They paid the price</td>
          <td>“All You Had to Do Was Stay”</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>I'll never tell</td>
          <td>“SuperStar”</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>“Enchanted”</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>You are loved</td>
          <td>“Tied Together with a Smile”</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Love and theft</td>
          <td>“Hey Stephen”</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>Hyannis port</td>
          <td>“Everything Has Changed”</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>They loved each other recklessly</td>
          <td>“Out of the Woods”</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>SAG</td>
          <td>“Red”</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Love is blind so you couldn't see me</td>
          <td>“You Belong with Me”</td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      <Monospace>SUITCASE THEORY</Monospace> references the strong suspicion
      from fans that Taylor Swift will sometimes avoid the paparazzi by having
      her team{' '}
      <a href="https://www.buzzfeed.com/lyapalater/holy-fork-balls-taylor-swift-really-was-traveling">
        move her around in large suitcases
      </a>
      .
    </p>
    <h3>Extraction</h3>
    <p>
      Each of the answer sheets for the five previous rounds included highlights
      specific letters, paired with a series of colored stars. Treating the
      skinny four-pointed star as a "1", the five-pointed star as a "5", and the
      sun with 10 rays coming out of it as a "10", treating the stars like they
      were roman numerals can provide a unique ordering of letters, from 1 to 13
      spelling out the final task:
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Answer</th>
          <th>1st Starred Letter (and #)</th>
          <th>2nd Starred Letter (and #)</th>
          <th>3rd Starred Letter (and #)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>TAKE US TO CHURCH TAYLOR</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace> (9)
          </td>
          <td>
            <Monospace>R</Monospace> (12)
          </td>
          <td>n/a</td>
        </tr>
        <tr>
          <td>
            <Monospace>NO ITS BECKY</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace> (3)
          </td>
          <td>
            <Monospace>Y</Monospace> (13)
          </td>
          <td>n/a</td>
        </tr>
        <tr>
          <td>
            <Monospace>MASTERMIND</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace> (7)
          </td>
          <td>
            <Monospace>S</Monospace> (6)
          </td>
          <td>
            <Monospace>E</Monospace> (2)
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>A HOLIDAY HOUSE</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace> (4)
          </td>
          <td>
            <Monospace>O</Monospace> (11)
          </td>
          <td>
            <Monospace>U</Monospace> (5)
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>SUITCASE THEORY</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace> (1)
          </td>
          <td>
            <Monospace>T</Monospace> (8)
          </td>
          <td>
            <Monospace>E</Monospace> (10)
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This provides the assignment of a task:{' '}
      <Monospace>SEND US A THEORY</Monospace>.
    </p>
    <p>
      We can complete this by either providing our own Taylor Swift theory, or
      by speculating about what's going to happen in the Mystery Hunt to come.
      Once that is sent, we are rewarded with the final answer:{' '}
      <Answerize>DAVE SEVILLE</Answerize>.
    </p>
    <style jsx global>{`
      #mansion-of-secrets td:nth-child(2) {
        font-style: italic;
      }
      #mansion-of-secrets td:nth-child(1),
      #mansion-of-secrets th:nth-child(1),
      #mansion-of-secrets td:nth-child(5),
      #lyrical-interludes th:nth-child(3),
      #lyrical-interludes td:nth-child(3),
      #extraction th:nth-child(2),
      #extraction td:nth-child(2),
      #extraction th:nth-child(3),
      #extraction td:nth-child(3),
      #extraction th:nth-child(4),
      #extraction td:nth-child(4) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
