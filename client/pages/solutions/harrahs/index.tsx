import { FC } from 'react';
import {
  Footnotes,
  FootnotesProvider,
  FootnoteRef as Ref,
} from 'react-a11y-footnotes';
import 'react-a11y-footnotes/dist/styles.css';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'harrahs';
const ANSWER = `LORILET`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <FootnotesProvider>
      <p>
        We see a series of 26 images, each with a backdrop, an actor and a
        number. Each actor has played a pirate in a movie or TV show, though not
        always as their most famous role. The actors are shown not in their
        pirate role, but in a different role (or in a non-movie image), and the
        images are ordered by the release of the movie or TV show (initial pilot
        date if a TV show), which aids in identification for prolific actors.
      </p>
      <p>
        For example, Cary Elwes played Westley / The Dread Pirate Roberts in The
        <i>Princess Bride</i>, but is shown in his role as Robin Hood in <i>Robin Hood:
        Men in Tights</i>. Once we identify the pirate movie being referenced (
        <Monospace>THEPRINCESSBRIDE</Monospace>), we take the number that is
        also included in the image (3) as an index to get a letter (
        <Monospace>E</Monospace>).
      </p>
      <p>
        The actions that the “pirates” are depicted doing are the actions from
        the Veggie Tales song "The Pirates Who Don't Do Anything," clued by the
        flavortext “stop being so silly” referencing the Veggie Tales bit “Silly
        Songs with Larry.”
      </p>
      <p>
        For example, Cary Elwes is shown digging a hole with a pot of gold in
        front of the Minnesota State Capitol building, cluing the song lyrics
        referencing burying treasure in St. Paul. We can then order the indexed
        letters by the order of the actions in the song. The 4 images that
        reference "Boston in the fall" are disambiguated by the 4 nominal months
        of fall (Sep/Oct/Nov/Dec), even though as any Bostonian knows, there are
        really only about 2 actual weeks of autumn in Boston.
      </p>
      <p>
        In lyric order, the extracted letters spell{' '}
        <Monospace>NAME OF COXENS FIG PARROT SEVEN</Monospace>. The Coxen's fig
        parrot is a type of Australian parrot also known as the{' '}
        <Answerize>LORILET</Answerize>.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Actor</th>
            <th>Movie</th>
            <th>#</th>
            <th>Letter</th>
            <th>Film Year</th>
            <th>Film Order</th>
            <th>Lyric Order</th>
            <th>Lyric</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Douglas Fairbanks</b>
            </td>
            <td>
              <Monospace>THE BLACK PIRATE</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>1926</td>
            <td>1</td>
            <td>17</td>
            <td>thrown my mashed potatoes up against the wall</td>
          </tr>
          <tr>
            <td>
              <b>Errol Flynn</b>
            </td>
            <td>
              <Monospace>CAPTAIN BLOOD</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>1935</td>
            <td>2</td>
            <td>11</td>
            <td>sail at all</td>
          </tr>
          <tr>
            <td>
              <b>Mitchell Lewis</b>
            </td>
            <td>
              <Monospace>DANCING PIRATE</Monospace>
            </td>
            <td>13</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>1936</td>
            <td>3</td>
            <td>23</td>
            <td>painted daisies on a big red rubber ball</td>
          </tr>
          <tr>
            <td>
              <b>Laird Cregar</b>
            </td>
            <td>
              <Monospace>THE BLACK SWAN</Monospace>
            </td>
            <td>12</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>1942</td>
            <td>4</td>
            <td>1</td>
            <td>been to Greenland</td>
          </tr>
          <tr>
            <td>
              <b>Robert Newton</b>
            </td>
            <td>
              <Monospace>TREASURE ISLAND</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>1950</td>
            <td>5</td>
            <td>19</td>
            <td>gotten head lice</td>
          </tr>
          <tr>
            <td>
              <b>Charles Laughton</b>
            </td>
            <td>
              <Monospace>ABBOTT AND COSTELLO MEET CAPTAIN KIDD</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>1952</td>
            <td>6</td>
            <td>8</td>
            <td>hoist the mainstay</td>
          </tr>
          <tr>
            <td>
              <b>Hans Conried</b>
            </td>
            <td>
              <Monospace>PETERPAN</Monospace>
            </td>
            <td>6</td>
            <td>
              <Monospace>P</Monospace>
            </td>
            <td>1953</td>
            <td>7</td>
            <td>16</td>
            <td>too good at ping pong</td>
          </tr>
          <tr>
            <td>
              <b>Peter Ustinov</b>
            </td>
            <td>
              <Monospace>BLACKBEARDS GHOST</Monospace>
            </td>
            <td>12</td>
            <td>
              <Monospace>G</Monospace>
            </td>
            <td>1968</td>
            <td>8</td>
            <td>15</td>
            <td>plucked a rooster</td>
          </tr>
          <tr>
            <td>
              <b>Kirk Douglas</b>
            </td>
            <td>
              <Monospace>PEGLEG MUSKET AND SABRE</Monospace>
            </td>
            <td>13</td>
            <td>
              <Monospace>A</Monospace>
            </td>
            <td>1973</td>
            <td>9</td>
            <td>2</td>
            <td>been to Denver</td>
          </tr>
          <tr>
            <td>
              <b>David Warner</b>
            </td>
            <td>
              <Monospace>THE ISLAND</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>1980</td>
            <td>10</td>
            <td>22</td>
            <td>sniffed a stink bug</td>
          </tr>
          <tr>
            <td>
              <b>Cary Elwes</b>
            </td>
            <td>
              <Monospace>THE PRINCESS BRIDE</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>1987</td>
            <td>11</td>
            <td>4</td>
            <td>buried treasure in St. Paul</td>
          </tr>
          <tr>
            <td>
              <b>Dustin Hoffman</b>
            </td>
            <td>
              <Monospace>HOOK</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>1991</td>
            <td>12</td>
            <td>20</td>
            <td>been to Boston in the fall (3 / Nov)</td>
          </tr>
          <tr>
            <td>
              <b>Andrew Divoff</b>
            </td>
            <td>
              <Monospace>MAGIC ISLAND</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>S</Monospace>
            </td>
            <td>12/19/1995</td>
            <td>13</td>
            <td>12</td>
            <td>walked the gang plank</td>
          </tr>
          <tr>
            <td>
              <b>Geena Davis</b>
            </td>
            <td>
              <Monospace>CUTTHROAT ISLAND</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>O</Monospace>
            </td>
            <td>12/22/1995</td>
            <td>14</td>
            <td>5</td>
            <td>been to Moscow</td>
          </tr>
          <tr>
            <td>
              <b>Tim Curry</b>
            </td>
            <td>
              <Monospace>MUPPET TREASURE ISLAND</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>M</Monospace>
            </td>
            <td>1996</td>
            <td>15</td>
            <td>3</td>
            <td>buried treasure in St. Louis</td>
          </tr>
          <tr>
            <td>
              <b>John Koyama</b>
            </td>
            <td>
              <Monospace>SIX DAYS SEVEN NIGHTS</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>X</Monospace>
            </td>
            <td>1998</td>
            <td>16</td>
            <td>9</td>
            <td>swab the poop deck</td>
          </tr>
          <tr>
            <td>
              <b>Johnny Depp</b>
            </td>
            <td>
              <Monospace>PIRATES OF THE CARIBBEAN</Monospace>
            </td>
            <td>9</td>
            <td>
              <Monospace>F</Monospace>
            </td>
            <td>
              6/28/2003
              <Ref
                description="6/28 at Disneyland, 7/9/2003 in theaters"
                id="pirates-caribbean"
              />{' '}
            </td>
            <td>17</td>
            <td>6</td>
            <td>been to Tampa</td>
          </tr>
          <tr>
            <td>
              <b>Brad Pitt</b>
            </td>
            <td>
              <Monospace>SINBAD LEGEND OF THE SEVEN SEAS</Monospace>
            </td>
            <td>14</td>
            <td>
              <Monospace>F</Monospace>
            </td>
            <td>7/2/2003</td>
            <td>18</td>
            <td>13</td>
            <td>owned a parrot</td>
          </tr>
          <tr>
            <td>
              <b>Jason Isaacs </b>
            </td>
            <td>
              <Monospace>PETER PAN</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>R</Monospace>
            </td>
            <td>12/18/2003</td>
            <td>19</td>
            <td>18</td>
            <td>kissed a chipmunk</td>
          </tr>
          <tr>
            <td>
              <b>(Suzy) Eddie Izzard</b>
            </td>
            <td>
              <Monospace>TREASURE ISLAND</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>1/1/2012</td>
            <td>20</td>
            <td>10</td>
            <td>veer to starboard</td>
          </tr>
          <tr>
            <td>
              <b>Hugh Grant</b>
            </td>
            <td>
              <Monospace>THE PIRATES IN AN ADVENTURE WITH SCIENTISTS</Monospace>
            </td>
            <td>34</td>
            <td>
              <Monospace>I</Monospace>
            </td>
            <td>3/28/2012</td>
            <td>21</td>
            <td>14</td>
            <td>been to Boston in the fall (2 / Oct)</td>
          </tr>
          <tr>
            <td>
              <b>Barkhad Abdi</b>
            </td>
            <td>
              <Monospace>CAPTAIN PHILLIPS</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>C</Monospace>
            </td>
            <td>2013</td>
            <td>22</td>
            <td>7</td>
            <td>been to Boston in the fall (1 / Sep)</td>
          </tr>
          <tr>
            <td>
              <b>Christopher Walken</b>
            </td>
            <td>
              <Monospace>PETER PAN LIVE</Monospace>
            </td>
            <td>11</td>
            <td>
              <Monospace>V</Monospace>
            </td>
            <td>2014</td>
            <td>23</td>
            <td>24</td>
            <td>bathed in yogurt</td>
          </tr>
          <tr>
            <td>
              <b>Donald Sutherland</b>
            </td>
            <td>
              <Monospace>PIRATES PASSAGE</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>T</Monospace>
            </td>
            <td>1/4/2015</td>
            <td>24</td>
            <td>21</td>
            <td>licked a sparkplug</td>
          </tr>
          <tr>
            <td>
              <b>Hugh Jackman</b>
            </td>
            <td>
              <Monospace>PAN</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>N</Monospace>
            </td>
            <td>9/20/2015</td>
            <td>25</td>
            <td>26</td>
            <td>been to Boston in the fall (4 / Dec)</td>
          </tr>
          <tr>
            <td>
              <b>Jude Law</b>
            </td>
            <td>
              <Monospace>PETER PAN AND WENDY</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>E</Monospace>
            </td>
            <td>4/28/2023</td>
            <td>26</td>
            <td>25</td>
            <td>don't look good in leggings</td>
          </tr>
        </tbody>
      </Table>

      <AuthorsNotes>
        <p>
          The genesis for this puzzle idea came one day while I was driving home
          with my family from my in-laws' house.
        </p>
        <p>
          My son put his Veggie Tales playlist on in the van and "The Pirates
          Who Don't Do Anything" came on.
        </p>
        <p>
          That was far from the first time I had heard this song, but the idea
          came to me that it might be fun to do a puzzle based on a mashup of
          different "famous" pirates doing the things that these pirates "don't
          do".
        </p>
        <p>
          After reviewing the lyrics, I found 26 things that they "don't do".
          Originally I wanted to tie it to the pirate ship <i>Whydah</i>, which was a
          pirate ship that sunk in Boston in 1717 and was possibly the
          inspiration for the actual song, but that didn't work out in the
          implementation.
        </p>
      </AuthorsNotes>

      <Attributions>
        <p>
          All images of actors, actresses, movies, sports games, TV shows and
          other media by fair use except where indicated below. Other images
          sourced and attributed as follows:
        </p>
        <ul>
          <li>
            Douglas Fairbanks — public domain via{' '}
            <a href="https://en.wikipedia.org/wiki/Douglas_Fairbanks#/media/File:Douglas_Fairbanks_cropped.jpg">
              Wikipedia
            </a>
          </li>
          <li>
            Mashed potatoes — Pixabay user{' '}
            <a href="https://pixabay.com/photos/burning-love-moss-mashed-potatoes-1579246/">
              mp1746
            </a>
          </li>
          <li>
            Kitchen wall — Pixabay user{' '}
            <a href="https://pixabay.com/photos/apartment-wall-of-bricks-table-4489573/">
              ColorandoDaDanci
            </a>
          </li>
          <li>
            Sailing ship — Pixabay user{' '}
            <a href="https://pixabay.com/no/photos/seilb%C3%A5t-skip-seile-gr%C3%B8nland-b%C3%A5t-459794/">
              Lurens
            </a>
          </li>
          <li>
            Big red rubber ball —{' '}
            <a href="https://creativecommons.org/licenses/by/2.0/">
              CC BY 2.0
            </a>
            {' '}via{' '}
            <a href="https://www.flickr.com/photos/mujitra/5921419291">
              Flickr/MIKI Yoshihito
            </a>
          </li>
          <li>
            Red paint / paintbrush — Pixabay user{' '}
            <a href="https://pixabay.com/photos/maling-b%C3%B8rste-sprut-r%C3%B8d-maling-5699263/">
              FoYu
            </a>
          </li>
          <li>
            Laird Cregar — public domain via{' '}
            <a href="https://en.wikipedia.org/wiki/Laird_Cregar#/media/File:Laird_Cregar.jpg">
              Wikipedia
            </a>
          </li>
          <li>
            Air Greenland plane — from{' '}
            <a href="https://www.airgreenland.com/">AirGreenland.com</a>
          </li>
          <li>
            Head lice —{' '}
            <a href="https://creativecommons.org/licenses/by-sa/2.0/">
              CC BY-SA 2.0
            </a>
            {' '}via{' '}
            <a href="https://www.flickr.com/photos/sanmartin/4900867458">
              Flickr/Gilles San Martin
            </a>
          </li>
          <li>
            Charles Laughton — public domain via{' '}
            <a href="https://en.wikipedia.org/wiki/Charles_Laughton#/media/File:Charles_Laughton-publicity2.JPG">
              Wikipedia
            </a>
          </li>
          <li>
            Sailboat —{' '}
            <a href="https://www.publicdomainpictures.net/en/view-image.php?image=318575&amp;picture=hoisting-the-sail">
              CC/0 public domain
            </a>
          </li>
          <li>
            Hans Conried — public domain via{' '}
            <a href="https://en.wikipedia.org/wiki/Hans_Conried#/media/File:Hans_Conreid_1977.JPG">
              Wikipedia
            </a>
          </li>
          <li>
            Rooster — Pixabay user{' '}
            <a href="https://pixabay.com/no/photos/hane-kylling-mann-cockscomb-husdyr-1867562/">
              pexels
            </a>
          </li>
          <li>
            Denver Blucifer —{' '}
            <a href="https://creativecommons.org/licenses/by-sa/2.0/">
              CC BY-SA 2.0
            </a>
            {' '}via{' '}
            <a href="https://www.flickr.com/photos/mikesinko/15384910808">
              Flickr/Mike Sinko
            </a>
          </li>
          <li>
            Stinkbug —{' '}
            <a href="https://creativecommons.org/licenses/by-sa/2.0/">
              CC BY-SA 2.0
            </a>
            {' '}via{' '}
            <a href="https://flickr.com/photos/47108884@N07/7757617824">
              Flickr/Ton Rulkens
            </a>
          </li>
          <li>
            David Warner —{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
            {' '}via{' '}
            <a href="https://en.wikipedia.org/wiki/David_Warner_(actor)#/media/File:David_Warner_(Actor)_Rory_Lewis_Photographer.jpg">
              Wikipedia/Rory Lewis
            </a>
          </li>
          <li>
            Minnesota State Capitol —{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
            {' '}via{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Minnesota_State_Capitol_2017.jpg">
              Wikipedia/McGhiever
            </a>
          </li>
          <li>
            Shovel — Pixabay user{' '}
            <a href="https://pixabay.com/vectors/sand-shovel-tool-158804/">
              Open Clipart-Vectors
            </a>
          </li>
          <li>
            Pot O' Gold — Pixabay user{' '}
            <a href="https://pixabay.com/vectors/mynter-gull-penger-skatt-159889/">
              Open Clipart-Vectors
            </a>
          </li>
          <li>
            Boston Common —{' '}
            <a href="https://creativecommons.org/licenses/by/2.0/">
              CC BY 2.0
            </a>
            {' '}via{' '}
            <a href="https://flickr.com/photos/19746950@N00/6338537176">
              Flickr/Chase Elliott Clark
            </a>
          </li>
          <li>
            Moscow — Pixabay user{' '}
            <a href="https://pixabay.com/photos/moscow-red-place-historical-1142576/">
              bernswaelz
            </a>
          </li>
          <li>
            Gateway arch —{' '}
            <a href="https://creativecommons.org/licenses/by/2.0/">
              CC BY 2.0
            </a>
            {' '}via{' '}
            <a href="https://www.flickr.com/photos/132084522@N05/17275578342">
              Flickr/Sam valadi
            </a>
          </li>
          <li>
            Poop deck background — Pixabay user{' '}
            <a href="https://pixabay.com/photos/pergola-view-heaven-relax-outdoor-174688/">
              karrice
            </a>
          </li>
          <li>
            Mop for swabbing — Pixabay user{' '}
            <a href="https://pixabay.com/no/photos/barn-gutt-mopping-jeans-tre-gulv-2586010/">
              StockSnap
            </a>
          </li>
          <li>
            Tampa bridge — Pixabay user{' '}
            <a href="https://pixabay.com/no/photos/florida-tampa-bay-bro-arkitektur-287250/">
              Simon_Goede
            </a>
          </li>
          <li>
            Car and woman on the tampa bridge — Pixabay user{' '}
            <a href="https://pixabay.com/photos/woman-model-hippie-fashion-style-1853936/">
              Pexels
            </a>
          </li>
          <li>
            Parrot —{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
            {' '}via Wikipedia/
            <a href="https://commons.wikimedia.org/wiki/File:Parrot.jpg">
              Contributor50
            </a>
          </li>
          <li>
            Chipmunk — Pixabay user{' '}
            <a href="https://pixabay.com/photos/chipmunk-rodent-foraging-eating-3959206/">
              11417994
            </a>
          </li>
          <li>
            Jetski — Public domain via{' '}
            <a href="https://pxhere.com/en/photo/1328223">pxhere.com</a>
          </li>
          <li>
            Bathtub scene — Pixabay user{' '}
            <a href="https://pixabay.com/no/photos/badekar-baderom-gr%C3%B8nn-flis-3622540/">
              5460160
            </a>
          </li>
          <li>Leggings — fair use / item for sale</li>
        </ul>
      </Attributions>
      <Footnotes />
    </FootnotesProvider>
    <style jsx global>{`
      th:nth-child(3),
      td:nth-child(3),
      td:nth-child(4),
      th:nth-child(5),
      td:nth-child(5),
      t6:nth-child(6),
      td:nth-child(6),
      th:nth-child(7),
      td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
