import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';
import VideoEmbed from 'components/video_embed';

import image0 from 'assets/puzzles/moving-day/0.png';
import image1 from 'assets/puzzles/moving-day/1.png';
import image2 from 'assets/puzzles/moving-day/2.png';
import image3 from 'assets/puzzles/moving-day/3.png';
import image4 from 'assets/puzzles/moving-day/4.png';

const SLUG = 'moving-day';
const ANSWER = `ANDOR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>We are presented with 3 sets of information, each with 5 instances.</p>
    <ul>
      <li>5 geographical locations with arrows and colors</li>
      <li>5 Google Maps Street View embeds</li>
      <li>5 pictures of buildings</li>
    </ul>
    <p>
      Each Google Maps embed puts us on a street where one of the 5 buildings is
      located. The first step is to "walk" down each street view until the
      corresponding building image. Note the address of this building.
    </p>
    <p>
      For example, 1513 Polk Street in Lynchburg, Virginia is the address for
      the 2-story white-ish house whose image is provided.
    </p>
    <p>
      The next step is to realize that each of the five geographical places are
      places where a professional US sports team has moved from, to a stadium or
      arena that shares the street as one of the 5 houses pictured. This is
      clued by the flavor text about moving from one city to another and the
      puzzle title itself.
    </p>
    <p>
      It is also clued by the colors and arrows on the first section. The
      colored background and font are the colors of the original team, and the
      arrow signifies the direction that they moved, while the colored
      background and font of the ??? after the arrow are the colors of the team
      after they moved.
    </p>
    <p>
      For example, the San Diego Rockets moved in 1971 to become the Houston
      Rockets, who now play at the Toyota Center, located at 1510 Polk St in
      Houston. The San Diego Rockets were green and yellow, and the team colors
      of the Houston Rockets are (among others) black and red.
    </p>
    <p>
      We then take the difference between the actual stadium / arena address and
      the address (1513 - 1510 = 3), and index that number into the city that
      appears in the Google embed. In this example, taking the 3rd letter of{' '}
      <Monospace>LYNCHBURG</Monospace> gives an N.
    </p>
    <p>
      Ordering by the date that the franchises moved gives us the answer,{' '}
      <Answerize>ANDOR</Answerize>. The word "gates" in the flavor text does
      double duty, both referencing the AND and OR logic gates as well as gates
      to a stadium / arena.
    </p>
    <AuthorsNotes>
      <p>
        The inspiration for this puzzle came from a Lowe's commercial that I saw
        while watching NFL football in the fall of 2020.
      </p>

      <div>
        <VideoEmbed src="https://www.youtube-nocookie.com/embed/Fcw_k-k1Cgg" />
      </div>
      <p>
        It showed a variety of NFL arenas, each of which were empty (due to
        COVID restrictions) but then it showed other regular houses that shared
        the same address. I thought that random houses across the country that
        just happened to share an address with a sports stadium or arena might
        make for interesting puzzle fodder.
      </p>
      <p>
        In the interest of making this a bit more puzzly, I decided to narrow it
        down to sports franchises that have moved from one city to another. It
        was surprisingly challenging to find addresses in other cities that were
        the same as stadiums / arenas, even ones with what I thought were fairly
        common street names (no "1 Patriot Place" for example).
      </p>
    </AuthorsNotes>
    <Appendix>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>Original City</th>
            <th>Move Year</th>
            <th>Current Franchise</th>
            <th>Current Stadium / Arena Address</th>
            <th>Number</th>
            <th>Google Maps City</th>
            <th>Google Maps Number</th>
            <th>Diff.</th>
            <th>Extract</th>
            <th>House</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grand Rapids, Michigan</td>
            <td>1900</td>
            <td>Cleveland Guardians</td>
            <td>2401 Ontario Street, Cleveland OH</td>
            <td>2401</td>
            <td>
              <a href="https://www.google.com/maps/@38.5149807,-82.7178552,3a,75y,103.71h,85.93t/data=!3m6!1e1!3m4!1sWbBNOZ81sxAhlO341XZznA!2e0!7i16384!8i8192?entry=ttu">
                Flatwoods
              </a>
            </td>
            <td>2404</td>
            <td>3</td>
            <td>A</td>
            <td>
              <SheetableImage alt="" src={image2} title="" />
              (light blue ranch)
            </td>
          </tr>
          <tr>
            <td>San Diego, California</td>
            <td>1971</td>
            <td>Houston Rockets</td>
            <td>1510 Polk St, Houston, TX 77003</td>
            <td>1510</td>
            <td>
              <a href="https://www.google.com/maps/@37.4055766,-79.1449795,3a,75y,203.27h,86.03t/data=!3m6!1e1!3m4!1syjxY_Mg3ktUkckxD1TEd1Q!2e0!7i13312!8i6656?entry=ttu">
                Lynchburg
              </a>
            </td>
            <td>1513</td>
            <td>3</td>
            <td>N</td>
            <td>
              <SheetableImage alt="" src={image0} title="" />
              (2 story white-ish house)
            </td>
          </tr>
          <tr>
            <td>New Orleans, Louisiana</td>
            <td>1979</td>
            <td>Utah Jazz</td>
            <td>301 S Temple, Salt Lake City, UT 84101</td>
            <td>301</td>
            <td>
              <a href="https://www.google.com/maps/@30.5239491,-96.6979134,3a,75y,26.09h,74.18t,0.01r/data=!3m6!1e1!3m4!1sbHMZ1zHCDrFwwr19UIArEg!2e0!7i16384!8i8192?entry=ttu">
                Caldwell
              </a>
            </td>
            <td>305</td>
            <td>4</td>
            <td>D</td>
            <td>
              <SheetableImage alt="" src={image4} title="" />
              (pale blue ranch with attached garage)
            </td>
          </tr>
          <tr>
            <td>Minnesota</td>
            <td>1993</td>
            <td>Dallas Stars</td>
            <td>2500 Victory Avenue, Dallas TX</td>
            <td>2500</td>
            <td>
              <a href="https://www.google.com/maps/@30.7327051,-88.1072085,3a,75y,347.31h,89.98t/data=!3m6!1e1!3m4!1sb0XE9Kx-Y9ohj1swM2QjCg!2e0!7i16384!8i8192?entry=ttu">
                Mobile
              </a>
            </td>
            <td>2502</td>
            <td>2</td>
            <td>O</td>
            <td>
              <SheetableImage alt="" src={image1} title="" />
              (sky blue ranch with door on left)
            </td>
          </tr>
          <tr>
            <td>New Jersey</td>
            <td>2012</td>
            <td>Brooklyn Nets</td>
            <td>620 Atlantic Ave, Brooklyn, NY 11217</td>
            <td>620</td>
            <td>
              <a href="https://www.google.com/maps/@40.3487653,-79.8806283,3a,75y,133.72h,85.44t/data=!3m6!1e1!3m4!1sQBO7v7BwmoqdJ9CrZ5Cmkg!2e0!7i16384!8i8192?entry=ttu">
                McKeesport
              </a>
            </td>
            <td>611</td>
            <td>9</td>
            <td>R</td>
            <td>
              <SheetableImage alt="" src={image3} title="" />
              (2 story yellow house with brown trim)
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx>{`
      th:nth-child(2),
      td:nth-child(2),
      th:nth-child(5),
      td:nth-child(5),
      th:nth-child(7),
      td:nth-child(7),
      td:nth-child(8),
      td:nth-child(9) {
        text-align: center;
      }
      td:nth-child(4),
      td:nth-child(10) {
        font-size: 85%;
      }
      td:nth-child(6) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-transform: uppercase;
      }
      th,
      td {
        padding: 4px 6px !important;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
