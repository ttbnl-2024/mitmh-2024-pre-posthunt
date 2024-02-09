import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/time-for-a-drink/0.png';
import image1 from 'assets/solutions/time-for-a-drink/1.png';

const SLUG = 'time-for-a-drink';
const ANSWER = `MATURATION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      From the flavor text reference to a concierge wearing a lapel pin with
      golden keys, who is able to get guests anything they want, we realize we
      are dealing with Les Clefs d'Or, the elite society of überconcierges.
      Luckily, we can visit their website and see a list of all the{' '}
      <a href="https://www.lcdusa.org/travelers/find-a-hotel/">
        Les Clefs d'Or hotels
      </a>{' '}
      in New York City, along with the names of some of the members.
    </p>
    <p>
      We can immediately identify Richard Branch&mdash;name-checked in the
      flavor text&mdash;as the concierge of the Casa Cipriani, located at The
      Battery, which is confirmation that we're dealing with real-world hotels
      and Clefs d'Or members.
    </p>
    <p>
      Looking at the rest of the puzzle, we know that our goal is to get to the
      Casa Cipriani and back by 6:00 PM, and we have learned that Janus's hotel
      (our start) is location A on the subway map, and that The Battery Terminal
      (location S) is where the Casa Cipriani is. The timetable notes clearly
      establish that we will be able to jump between two trains at the same
      station at the same time, and that we likely only need to allow five
      minutes at Location S to fetch the wine bottle in question.
    </p>
    <p>
      With that, we turn to the timetables, which essentially represent a simple
      maze, where only one series of train routes will get us where we need to
      go in time. The correct route is as follows:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Depart</th>
          <th>Step Number</th>
          <th>Move</th>
          <th>Route</th>
          <th>Express/Local?</th>
          <th>Direction</th>
          <th>Arrive</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3:05</td>
          <td>1</td>
          <td>A-H</td>
          <td>Gray</td>
          <td>Express</td>
          <td>SB</td>
          <td>3:10</td>
        </tr>
        <tr>
          <td>3:10</td>
          <td>2</td>
          <td>H-C</td>
          <td>Gray</td>
          <td>Local</td>
          <td>NB</td>
          <td>3:20</td>
        </tr>
        <tr>
          <td>3:20</td>
          <td>3</td>
          <td>C-F</td>
          <td>Orange</td>
          <td>Local</td>
          <td>SB</td>
          <td>3:30</td>
        </tr>
        <tr>
          <td>3:30</td>
          <td>4</td>
          <td>F-D</td>
          <td>Green</td>
          <td>Local</td>
          <td>NB</td>
          <td>3:35</td>
        </tr>
        <tr>
          <td>3:35</td>
          <td>5</td>
          <td>D-L</td>
          <td>Blue</td>
          <td>Express</td>
          <td>SB</td>
          <td>3:40</td>
        </tr>
        <tr>
          <td>3:45</td>
          <td>6</td>
          <td>L-J</td>
          <td>Pink</td>
          <td>Express</td>
          <td>SB</td>
          <td>3:50</td>
        </tr>
        <tr>
          <td>3:50</td>
          <td>7</td>
          <td>J-P</td>
          <td>Red</td>
          <td>Local</td>
          <td>SB</td>
          <td>4:05</td>
        </tr>
        <tr>
          <td>4:05</td>
          <td>8</td>
          <td>P-M</td>
          <td>Purple</td>
          <td>Local</td>
          <td>NB</td>
          <td>4:15</td>
        </tr>
        <tr>
          <td>4:20</td>
          <td>9</td>
          <td>M-S</td>
          <td>Purple</td>
          <td>Express</td>
          <td>SB</td>
          <td>4:25</td>
        </tr>
        <tr>
          <td>4:30</td>
          <td>10</td>
          <td>S-Q</td>
          <td>Purple</td>
          <td>Local</td>
          <td>NB</td>
          <td>4:50</td>
        </tr>
        <tr>
          <td>4:50</td>
          <td>11</td>
          <td>Q-N</td>
          <td>Red</td>
          <td>Local</td>
          <td>NB</td>
          <td>5:00</td>
        </tr>
        <tr>
          <td>5:00</td>
          <td>12</td>
          <td>N-O</td>
          <td>Green</td>
          <td>Local</td>
          <td>SB</td>
          <td>5:10</td>
        </tr>
        <tr>
          <td>5:10</td>
          <td>13</td>
          <td>O-I</td>
          <td>Green</td>
          <td>Express</td>
          <td>NB</td>
          <td>5:15</td>
        </tr>
        <tr>
          <td>5:15</td>
          <td>14</td>
          <td>I-K</td>
          <td>Pink</td>
          <td>Local</td>
          <td>SB</td>
          <td>5:20</td>
        </tr>
        <tr>
          <td>5:20</td>
          <td>15</td>
          <td>K-G</td>
          <td>Blue</td>
          <td>Local</td>
          <td>NB</td>
          <td>5:30</td>
        </tr>
        <tr>
          <td>5:30</td>
          <td>16</td>
          <td>G-C</td>
          <td>Orange</td>
          <td>Local</td>
          <td>NB</td>
          <td>5:45</td>
        </tr>
        <tr>
          <td>5:45</td>
          <td>17</td>
          <td>C-H</td>
          <td>Gray</td>
          <td>Local</td>
          <td>SB</td>
          <td>5:50</td>
        </tr>
        <tr>
          <td>5:55</td>
          <td>18</td>
          <td>H-A</td>
          <td>Gray</td>
          <td>Express</td>
          <td>NB</td>
          <td>6:00</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Once we have figured out how to get the wine to Janus, we need to figure
      out an extraction, so we turn to the only remaining feature of the puzzle,
      the Members' Message Board. The boldfaced text clearly indicates that we
      are supposed to take certain letters from the names of Clefs d'Or hotels
      (or their constituent businesses/concierges) when we visit the station
      that serves that hotel. But how can we determine which hotel is served by
      which location?
    </p>
    <p>
      For that, we can look to the subway map itself, which is labeled as being{' '}
      <i>
        "not entirely to scale: distances are approximate. In particular, the
        distance between Stations Q and R has been severely truncated for
        readability."
      </i>{' '}
      So we'll need to map the actual locations of all the Clefs d'Or hotels in
      New York (yes, really). When we do, we see that their locations
      approximate the positions of the stations on the subway map:
    </p>
    <p className="relative">
      <SheetableImage alt="" src={image0} title="" className="w-full" />

      <SheetableImage alt="" src={image1} title="" className="routes-inset" />
    </p>
    <p>
      Together with the note that{' '}
      <i>
        "stations are never located more than one block (uptown or crosstown)
        from the locations served by that station,"
      </i>{' '}
      we can determine from the stations' names (neighborhood or landmark) which
      hotel(s) they serve:
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Key:</th>
          <th>Hotels Served</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A: Terminal to Be Named Later (new)</td>
          <td>Janus' Hotel (unspecified name)</td>
        </tr>
        <tr>
          <td>B: Upper East Side (2 locations)</td>
          <td>Mark, Carlyle</td>
        </tr>
        <tr>
          <td>C: Lenox Hill (2 locations)</td>
          <td>Loews Regency, Lowell</td>
        </tr>
        <tr>
          <td>D: Columbus Circle (2 locations)</td>
          <td>Mandarin Oriental, Trump International</td>
        </tr>
        <tr>
          <td>E: Central Park East (1 location)</td>
          <td>TAJ The Pierre</td>
        </tr>
        <tr>
          <td>F: Midtown North: 6th Ave. (5 locations)</td>
          <td>
            Essex, Ritz-Carlton Central Park, Park Lane, The Plaza, Hotel One
            <sup>
              <a href="#fn1" id="ref1">
                [1]
              </a>
            </sup>
          </td>
        </tr>
        <tr>
          <td>G: Midtown North: 7th Ave. (2 locations)</td>
          <td>Park Hyatt, Thompson Central Park</td>
        </tr>
        <tr>
          <td>H: Midtown North: 5th Ave. (1 location)</td>
          <td>Aman</td>
        </tr>
        <tr>
          <td>I: Midtown: 5th Ave. (2 locations)</td>
          <td>Peninsula, St. Regis</td>
        </tr>
        <tr>
          <td>J: Midtown: 6th Ave. (1 location)</td>
          <td>Baccarat</td>
        </tr>
        <tr>
          <td>K: Midtown: Madison Ave. (1 location)</td>
          <td>Lotte New York Palace</td>
        </tr>
        <tr>
          <td>L: Midtown East (2 locations)</td>
          <td>Kimberly, Benjamin</td>
        </tr>
        <tr>
          <td>M: Times Square (2 locations)</td>
          <td>W New York Times Square, Edition Times Square</td>
        </tr>
        <tr>
          <td>N: Midtown South (1 location)</td>
          <td>Langham</td>
        </tr>
        <tr>
          <td>O: Hudson Yards (1 location)</td>
          <td>Equinox</td>
        </tr>
        <tr>
          <td>P: NoMad (2 locations)</td>
          <td>Ritz-Carlton NoMad, 5th Avenue</td>
        </tr>
        <tr>
          <td>Q: Flatiron&mdash;Gramercy (1 location)</td>
          <td>Edition New York</td>
        </tr>
        <tr>
          <td>R: Financial District (1 location)</td>
          <td>Beekman</td>
        </tr>
        <tr>
          <td>S: The Battery (1 location)</td>
          <td>Casa Cipriani</td>
        </tr>
      </tbody>
    </Table>

    <p>
      Now that we know the hotels and their stations, we can solve the wordplay:
    </p>
    <Table>
      <tbody>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>A certain guest who lives on the </li>
              <li>top floor of my location </li>
              <li>has just sent me at least her </li>
              <li>
                <b>dozenth letter of </b>
              </li>
              <li>pleas and entreaties to come to </li>
              <li>
                <b>the restaurant where we </b>
              </li>
              <li>
                <b>famously serve afternoon tea. </b>
              </li>
              <li>If you stop at Midtown N.: 6th </li>
              <li>Ave. Sta. and have ideas about how </li>
              <li>to mollify her, leave me a note!</li>
            </ul>
          </td>
          <td>
            The guest is{' '}
            <a href="https://en.wikipedia.org/wiki/Eloise_(books)">Eloise</a>,
            from the children's book series of the same name, who famously lives
            in The Plaza Hotel. The restaurant at the Plaza that has served tea
            for 115 years is{' '}
            <a href="https://www.theplazany.com/dining/the-palm-court/">
              <Clue>THE PALM COURT</Clue>
            </a>
            . The 12th letter is <Clue>T</Clue>.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>Any member who finds</li>
              <li>themselves at the Lenox Hill</li>
              <li>Station should request a coffee</li>
              <li>sample&mdash;I can pop down in a</li>
              <li>
                <b>second! Word of the coffee</b>
              </li>
              <li>
                <b>shop at my location</b>
              </li>
              <li>has been spreading throughout</li>
              <li>the city. We'll probably get more</li>
              <li>crowded (and pricier) soon, and</li>
              <li>I wanted to share with you all</li>
              <li>
                <b>first! Your first time</b>
              </li>
              <li>is on the house, of course, </li>
              <li>
                <b>and if you decide to come </b>
              </li>
              <li>
                <b>back, it'll only be five</b>
              </li>
              <li>cents! Hope to see you!</li>
            </ul>
          </td>
          <td>
            The only hotel served by the Lenox Hill Station (Station C) that has
            a coffee shop is the Loews Regency. Its coffee shop is{' '}
            <a href="https://www.loewshotels.com/regency-hotel/dining">
              Sant <Clue>AMBROEUS</Clue>
            </a>
            . Thus, on our first stop at Station C, we take the first letter of
            the second word: <Clue>A</Clue>. On our second stop, we take the
            fifth letter: <Clue>O</Clue>.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>
                <b>For the second time only</b>
              </li>
              <li>in the history of my location,</li>
              <li>
                <b>when you visit the Midtown:</b>
              </li>
              <li>
                <b>Madison Avenue Station</b>
              </li>
              <li>I'm giving away curios: thirty-</li>
              <li>eight from our "intimate salon"</li>
              <li>full of mysterious spirits!</li>
              <li>Come and be amazed!</li>
            </ul>
          </td>
          <td>
            The "intimate salon" at the Lotte New York Palace that's full of
            spirits (and rare wine and champagne) is called{' '}
            <a href="https://www.raritiesnyc.com/">
              <Clue>RARITIES</Clue>
            </a>
            . We'd pull the eighth letter <Clue>S</Clue> on our second visit to
            Station K, but since we only visit once, this instruction goes
            unused.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>For those who come by the Midtown South</li>
              <li>Station, I can bring you an entrée from</li>
              <li>
                <b>my location's fine restaurant. First</b>
              </li>
              <li>come first served… no, just kidding.</li>
              <li>Of course members get to jump the line!</li>
              <li>The food is so good, you'll probably</li>
              <li>
                <b>come back for more: Second</b>
              </li>
              <li>helpings always welcome, of course!</li>
            </ul>
          </td>
          <td>
            The fine dining restaurant at The Langham is{' '}
            <a href="https://www.langhamhotels.com/en/the-langham/new-york/dine/ai-fiori/">
              <Clue>AI FIORI</Clue>
            </a>
            , so we take the first letter <Clue>A</Clue> on our first visit to
            Station N, but we don't visit a second time, so we don't take the
            second letter <Clue>I</Clue>.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>If you're at Midtown N: 5th Ave. Sta.</li>
              <li>
                <b>before check-in begins at 4:00 PM,</b>
              </li>
              <li>I'd love to pop down and chat. Room</li>
              <li>
                <b>2 of my location there</b>
              </li>
              <li>has a strange cold patch I can't</li>
              <li>seem to get rid of. (After </li>
              <li>
                <b>4, if you'd come back again</b>
              </li>
              <li>some other time, I'd be grateful.)</li>
              <li>
                <b>After 4:00 PM…! Whew!</b>
              </li>
            </ul>
          </td>
          <td>
            We do visit Midtown North: 5th Avenue Station (Station H) before
            4:00 PM, so we take the second letter of the hotel <Clue>AMAN</Clue>
            , which is <Clue>M</Clue>. When we visit again after 4:00 PM, we
            take the 4th letter <Clue>N</Clue>.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>If you're suddenly thirsty for a</li>
              <li>drink while at the Midtown East</li>
              <li>Station, I'll bring you one from the</li>
              <li>
                <b>rooftop bar at my location!</b>
              </li>
              <li>Our mixologists can make any </li>
              <li>drink, or they'll concoct a new</li>
              <li>one, following your recipe to </li>
              <li>
                <b>the letter: First one </b>
              </li>
              <li>is on the house every time you</li>
              <li>come!</li>
            </ul>
          </td>
          <td>
            The only hotel at the Midtown East Station (L) with a rooftop bar is
            the Kimberly, with its{' '}
            <a href="https://www.kimberlyhotel.com/dining">
              <Clue>UPSTAIRS</Clue> at the Kimberly
            </a>
            . (
            <a href="https://www.thebenjamin.com/experience/services-and-amenities/">
              The Benjamin doesn't have one
            </a>
            ). We take the first letter <Clue>U</Clue>.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>I'm at the Financial District</li>
              <li>Station location. If you ever stop</li>
              <li>by, just set all the dials on</li>
              <li>the letter combination lock to</li>
              <li>
                <b>the only letter in my monogram</b>
              </li>
              <li>to access the platform's </li>
              <li>Member supply closet.</li>
            </ul>
          </td>
          <td>
            <Clue>George Gaffney</Clue> is the concierge at the Beekman (the
            only hotel served by Financial District Station (Station R), but we
            never stop there, so the letter <Clue>G</Clue> goes unused.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>My location is right next to the </li>
              <li>Midtown: 6th Ave. Sta. If you</li>
              <li>arrive before 5:00, there won't</li>
              <li>be much for you to do, but if you</li>
              <li>come after</li>
              <li>
                <b>5: our award-winning spa</b>
              </li>
              <li>staff can make time to come</li>
              <li>down and attend to you! </li>
              <li>
                <b>Remember, after 5:00 PM only!</b>
              </li>
            </ul>
          </td>
          <td>
            {' '}
            The Midtown: 6th Avenue Station (Station J) serves only the
            Baccarat, and if we visited after 5:00 PM, we'd take the fifth
            letter <Clue>E</Clue> of its{' '}
            <a href="https://www.baccarathotels.com/spa-de-la-mer">
              <Clue>SPA DE LA MER</Clue>
            </a>
            , but we come through earlier, so this instruction goes unused.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>
                <b>The most common letter</b>
              </li>
              <li>I've been getting from my</li>
              <li>guests at The Battery location</li>
              <li>is, "How can I get Broadway</li>
              <li>tickets to MJ reserved</li>
              <li>
                <b>in my name?"</b>
              </li>
              <li>If you swing by the station and</li>
              <li>have ideas, leave me a note!</li>
            </ul>
          </td>
          <td>
            We've already established that Richard Branch is the name of the
            concierge at the Battery location, and <Clue>R</Clue> appears three
            times in his name (<Clue>RichaRd bRanch</Clue>), so we take an{' '}
            <Clue>R</Clue> when we visit Station S.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>
                <b>The most common</b>
              </li>
              <li>misconception about my</li>
              <li>location&mdash;which you should</li>
              <li>contact if stopping nearby&mdash;is</li>
              <li>people believing that the initial</li>
              <li>
                <b>consonant of your last name</b>
              </li>
              <li>(or first name) must be the</li>
              <li>same as the location's</li>
              <li>(excluding "the"). Just because</li>
              <li>that happens to be the case</li>
              <li>
                <b>for my colleague and I</b>
              </li>
              <li>does not mean it's a</li>
              <li>requirement!</li>
            </ul>
          </td>
          <td>
            The only hotel to which this could apply is The Mark (Station B),
            because we know the names of two Clefs d'Or concierges there: Harald
            Mootz and Maria Wittorp. The most common consonant in their last
            names is <Clue>T</Clue>, but we never visit Station B, so this
            letter is unused.
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>Where's the best restaurant in</li>
              <li>the City? Hmmm… I plead</li>
              <li>
                <b>the fifth! Of the restaurant</b>
              </li>
              <li>devotees I know, though, the one</li>
              <li>
                <b>at my location at H. Yards Sta.</b>
              </li>
              <li>gets their top marks.</li>
            </ul>
          </td>
          <td>
            {' '}
            The only hotel served by the Chelsea Station (Station O) is The
            Equinox. Its only restaurant is{' '}
            <a href="https://equinox-hotels.com/nyc/restaurants-bars/electric-lemon/">
              <Clue>ELECTRIC LEMON</Clue>
            </a>
            , so we take the fifth letter <Clue>T</Clue>. (Note, there's also a
            rooftop terrace, but it's referred to on the website as "Electric
            Lemon Terrace," so that would also give us a <Clue>T</Clue>, if it
            were a restaurant, which it is not.)
          </td>
        </tr>
        <tr>
          <td>
            <ul className="list-none pl-0 text-center whitespace-nowrap text-[90%]">
              <li>Yes, my first name and a word in the</li>
              <li>name of my hotel share the</li>
              <li>first three letters, but </li>
              <li>
                <b>the fourth letter in the hotel's word</b>
              </li>
              <li>is different, so if you're ever in the</li>
              <li>area, make sure to spell it (and my</li>
              <li>name) correctly! Common mistake!</li>
            </ul>
          </td>
          <td>
            {' '}
            The only concierge whose name shares the first three letters with a
            word in their hotel's name is <Clue>REGENA FALLING</Clue> at the{' '}
            <Clue>ST. REGIS</Clue>. So we take the fourth letter of Regis: the{' '}
            <Clue>I</Clue>.
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Once we have all of these letters and locations identified, we can apply
      them to our route:
    </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Station Letter</th>
          <th>Visited at</th>
          <th>Hotel Name</th>
          <th>Letter</th>
          <th>Clued By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>H</td>
          <td>3:10 </td>
          <td>Aman</td>
          <td>M</td>
          <td>Before 4 PM, so take second letter of hotel name</td>
        </tr>
        <tr>
          <td>C</td>
          <td>3:20</td>
          <td>Loews Regency</td>
          <td>A</td>
          <td>
            First visit, so first letter from second word of coffee bar (Sant
            Ambroeus; Lowell has no coffee shop)
          </td>
        </tr>
        <tr>
          <td>F</td>
          <td>3:30</td>
          <td>The Plaza</td>
          <td>T</td>
          <td>
            References Eloise at The Plaza hotel, with its restaurant "The Palm
            Court", we take 12th letter
          </td>
        </tr>
        <tr>
          <td>L</td>
          <td>3:45</td>
          <td>Kimberly</td>
          <td>U</td>
          <td>
            First letter of rooftop bar (which Benjamin doesn't have): Upstairs
            at The Kimberly
          </td>
        </tr>
        <tr>
          <td>S</td>
          <td>4:25</td>
          <td>Casa Cipriani</td>
          <td>R</td>
          <td>
            Richard Branch is the Clefs d'Or concierge here: most common letter
            in name is R
          </td>
        </tr>
        <tr>
          <td>N</td>
          <td>5:00</td>
          <td>Langham</td>
          <td>A</td>
          <td>
            First (and only) visit, so take first letter of restaurant Ai Fiori
          </td>
        </tr>
        <tr>
          <td>O</td>
          <td>5:10</td>
          <td>Equinox</td>
          <td>T</td>
          <td>Fifth letter in name of restaurant: Electric Lemon</td>
        </tr>
        <tr>
          <td>I</td>
          <td>5:15</td>
          <td>St. Regis</td>
          <td>I</td>
          <td>
            The Clefs d'Or concierge at the St. Regis is Regena Falling; so we
            take 4th letter of "Regis"
          </td>
        </tr>
        <tr>
          <td>C</td>
          <td>5:45</td>
          <td>Loews Regency</td>
          <td>O</td>
          <td>
            Second visit, so take letter 5 of second word of coffee bar (Sant
            Ambroeus) instead
          </td>
        </tr>
        <tr>
          <td>H</td>
          <td>5:55</td>
          <td>Aman</td>
          <td>N</td>
          <td>Second visit, so take letter 4 instead</td>
        </tr>
        <tr>
          <th colSpan={5}>UNUSED INSTRUCTIONS</th>
        </tr>
        <tr>
          <td>K</td>
          <td>5:20</td>
          <td>Lotte</td>
          <td>-</td>
          <td>
            We only visit once, and the instructions are for the second visit,
            so they are unused.
          </td>
        </tr>
        <tr>
          <td>J</td>
          <td>3:50</td>
          <td>Baccarat</td>
          <td>-</td>
          <td>
            We arrive before 5:00, and only take a letter after 5:00, so this is
            unused.
          </td>
        </tr>
        <tr>
          <td>B</td>
          <td>NEVER</td>
          <td>Mark</td>
          <td>T</td>
          <td>We never stop at Station B</td>
        </tr>
        <tr>
          <td>R</td>
          <td>NEVER</td>
          <td>Beekman</td>
          <td>G</td>
          <td>We never stop at Station R</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This reveals the answer (appropriate for a puzzle about wine that has
      reached peak drinkability): <Answerize>{ANSWER}</Answerize>.
    </p>
    <hr className="my-4" />
    <p>
      <sup>
        <a id="fn1" href="#ref1">
          [1]
        </a>
      </sup>{' '}
      1 Hotel's address is listed incorrectly on the Clefs d'Or USA website,
      which we have reported to them, and may or may not be fixed by Hunt. This
      should not impact the solve, because the listing includes a link to 1
      Hotel's website, where the address is listed correctly. Google Maps and
      other mapping apps also display the correct address.
    </p>
    <style jsx global>{`
      .routes-inset {
        position: absolute;
        right: 0;
        top: 0;
        width: 40%;
        border: 2px solid black;
        padding: 2px;
      }
      .table-1 th:nth-child(-n + 3),
      .table-1 th:nth-child(n + 6),
      .table-1 td:nth-child(-n + 3),
      .table-1 td:nth-child(n + 6),
      .extract-table td:nth-child(1),
      .extract-table td:nth-child(2),
      .extract-table td:nth-child(4) {
        text-align: center;
      }
      .extract-table td:nth-child(3n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
