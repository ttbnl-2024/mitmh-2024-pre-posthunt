import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'najaf-to';
const ANSWER = `TAKE A ROAD TRIP`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The bulk of the puzzle is a 45-step itinerary, but first we're given six
      airlines, with weird descriptions. If we're lucky, we can suss out what's
      up with these airlines right off the bat, but as we go through the
      itinerary, it should become clear: they only serve specific cities.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Rule</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AllAlfa</td>
          <td>A as the only vowel</td>
        </tr>
        <tr>
          <td>Beta Airlines</td>
          <td>Contains a Greek letter</td>
        </tr>
        <tr>
          <td>JetGold</td>
          <td>Olympic host cities</td>
        </tr>
        <tr>
          <td>LKM</td>
          <td>3 alphabetically consecutive letters, anywhere in the name</td>
        </tr>
        <tr>
          <td>AirZwolf</td>
          <td>Scrabble score of exactly 12</td>
        </tr>
        <tr>
          <td>Buzz Air</td>
          <td>Repeated neighboring letter</td>
        </tr>
      </tbody>
    </Table>
    <p>
      See the appendix for a detailed derivation. At each step, we fly to the
      following cities:
    </p>
    <ol>
      <li>Baghdad, Iraq</li>
      <li>Ankara, Turkey</li>
      <li>Atlanta, USA</li>
      <li>St. Louis, USA</li>
      <li>St. Moritz, Switzerland</li>
      <li>Munich, Germany</li>
      <li>Chişinău, Moldova</li>
      <li>Xi'an, China</li>
      <li>Vũng Tàu, Vietnam</li>
      <li>Ho Chi Minh City, Vietnam</li>
      <li>Winston-Salem, USA</li>
      <li>Milan, Italy</li>
      <li>Manila, Philippines</li>
      <li>Minneapolis, USA</li>
      <li>Winnipeg, Canada</li>
      <li>Chattogram, Bangladesh</li>
      <li>Lillehammer, Norway</li>
      <li>Paris, France</li>
      <li>Seoul, South Korea</li>
      <li>Tokyo, Japan</li>
      <li>Curitiba, Brazil</li>
      <li>Córdoba, Argentina</li>
      <li>Cartagena, Colombia</li>
      <li>Canberra, Australia</li>
      <li>Seattle, USA</li>
      <li>Ulaanbaatar, Mongolia</li>
      <li>Chennai, India</li>
      <li>Luxor, Egypt</li>
      <li>Las Vegas, USA</li>
      <li>Vientiane, Laos</li>
      <li>Singapore</li>
      <li>Spartanburg, USA</li>
      <li>Chicago, USA</li>
      <li>Casablanca, Morocco</li>
      <li>Dakar, Senegal</li>
      <li>Granada, Spain</li>
      <li>Accra, Ghana</li>
      <li>Marrakesh, Morocco</li>
      <li>Marseille, France</li>
      <li>Nuuk, Greenland</li>
      <li>Mexico City, Mexico</li>
      <li>Memphis, USA</li>
      <li>Pittsburgh, USA</li>
      <li>Newport News, USA</li>
      <li>Providence, USA</li>
    </ol>
    <p>
      But what is the answer? Well, reading the first letter of each clue, we
      get <Clue>SORT DESTINATIONS ALPHABETICALLY READ NTH CLUE WORD</Clue>. So
      we sort the clues alphabetically by the destination they clue, and read
      words diagonally. (We sort St. Louis and St. Moritz as such, not spelled
      out, as hinted by the "abbreviated time" we spend there.) Doing so, we get
      the following instruction: "Here's how to find your luggage. Every time
      you changed airlines one bag stayed with the inbound airline. The suitcase
      went one more stop but instead of using the gimmick of the airline you
      took, it followed the rule of the airline it was on."
    </p>
    <p>
      We changed airlines thirteen times. At each of those changes, the luggage
      carried on one stop, but the gimmick was the gimmick from the previous
      airline. Going through each stop:
    </p>
    <Table className="luggage-table">
      <thead>
        <tr>
          <th>Step</th>
          <th>Luggage Destination</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4</td>
          <td>
            <Monospace>TAMPA</Monospace>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <Monospace>ATHENS</Monospace>
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            <Monospace>KARACHI</Monospace>
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td>
            <Monospace>EDMONTON</Monospace>
          </td>
        </tr>
        <tr>
          <td>18</td>
          <td>
            <Monospace>AACHEN</Monospace>
          </td>
        </tr>
        <tr>
          <td>21</td>
          <td>
            <Monospace>RIO DE JANEIRO</Monospace>
          </td>
        </tr>
        <tr>
          <td>25</td>
          <td>
            <Monospace>OAKLAND</Monospace>
          </td>
        </tr>
        <tr>
          <td>28</td>
          <td>
            <Monospace>AMMAN</Monospace>
          </td>
        </tr>
        <tr>
          <td>32</td>
          <td>
            <Monospace>DURHAM</Monospace>
          </td>
        </tr>
        <tr>
          <td>35</td>
          <td>
            <Monospace>TUNIS</Monospace>
          </td>
        </tr>
        <tr>
          <td>38</td>
          <td>
            <Monospace>RABAT</Monospace>
          </td>
        </tr>
        <tr>
          <td>41</td>
          <td>
            <Monospace>INNSBRUCK</Monospace>
          </td>
        </tr>
        <tr>
          <td>44</td>
          <td>
            <Monospace>PHILADELPHIA</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading the first letter of the cities our bags ended up in, we get{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <h3>Main Travel</h3>
      <ol>
        <li>
          Surely you will find this massive trip of yours a wonderful adventure!
          Your first flight is on AllAlfa from Najaf to its country's capital
          (City 1).{' '}
          <i>We start in Najaf, Iraq, so that country's capital is Baghdad.</i>
        </li>
        <li>
          Ooh, how neat! Your current city has a famous fountain that shares
          much of the start of its name with another city. You'll fly over that
          city en route to your destination, City 2, that city's nation's
          capital.{' '}
          <i>
            One of Baghdad's most famous fountains is the Kahramana. There is a
            city in Turkey called Kahramanmaraş, which you would fly over from
            Baghdad to Ankara.
          </i>
        </li>
      </ol>
      <p>
        At this point, we've visited Najaf, Baghdad, and Ankara on "AllAlfa."
        Given that they serve bananas and Parma ham, it seems that AllAlfa only
        serves cities with A as the only vowel.
      </p>
      <ol start={3}>
        <li>
          Ready now to move on? You next need to go to the capital of…oh, wait,
          look what neighbors the country you're currently in! That would have
          been a comical mixup! But AllAlfa doesn't fly to that country's
          capital, so there should be no confusion about City 3.
          <i>
            Turkey borders seven countries: Greece, Bulgaria, Iraq, Iran, Syria,
            Armenia, and Georgia. The mix-up refers to Georgia—AllAlfa flies to
            Atlanta, but not Tbilisi.
          </i>
        </li>
      </ol>
      <p>
        At this point we need to consider where JetGold flies. The clues—their
        motto, adding cities at most every two years, and "gold"—might not be
        enough without the example of Atlanta, as seen in the next clue. But
        putting it all together, it seems that JetGold flies to Olympic host
        cities.
      </p>
      <ol start={4}>
        <li>
          Time to make our first airline change, moving to JetGold to head on to
          our next flight. It so happens that City 4 had its name first engraved
          on the Stanley Cup in 2004. That was followed up it being engraved
          again a few years ago.{' '}
          <i>
            We would likely first consider Tampa, as they won the 2004 Stanley
            Cup. But that leads to a dead end, and they didn't host an Olympics,
            anyway. But taking a look at the engraving, we should notice one of
            the players—Hall of Famer Martin St. Louis. And indeed, St. Louis
            hosted the Olympics!
          </i>
        </li>
        <li>
          Due to time constraints, you're only here and in your next destination
          for an abbreviated time. To get there, you are flying JetGold to City
          5, which is the only place JetGold serves that starts similarly to the
          start of City 4.{' '}
          <i>
            There's only one other "St." that's hosted an Olympics—St. Moritz,
            Switzerland. Note the reference to "abbreviated"—depending on what
            language we use, "St." might be expanded to Saint or Sankt!
          </i>
        </li>
      </ol>
      <p>
        To solve the next clue, we'll need to figure out Beta Airlines' rule. If
        we look further on in the itinerary, Beta Airlines serves Nuuk,
        Greenland, and Xi'an, China. But putting that aside, they partner with
        "Del Taco" and "Pepsi". All of these have a Greek letter hidden within.
      </p>
      <ol start={6}>
        <li>
          Ends up JetGold serves lots of places within 500 km of City 5. Once
          you've enjoyed all the activities there, take JetGold to the only one
          of those locations that Beta Airlines also serves.{' '}
          <i>
            The only Olympic Host city that has a Greek letter in it within the
            listed distance is Munich, Germany.
          </i>
        </li>
        <li>
          Sightseeing done? Then head to the airport and board Beta Airlines and
          head off toward a city that's twinned with both Bucharest and Kyiv.
          You'll have to change your watch by one hour!{' '}
          <i>
            There are a few cities twinned with both Bucharest and Kyiv: Ankara,
            Athens, Beijing, Chişinău, Pretoria, Sofia, and Tbilisi. The only
            one that has a Greek letter within is Chişinău, Moldova. Although
            why bother giving the one-hour clue?
          </i>
        </li>
        <li>
          This next stop is one I'd be really excited about! You're going to see
          China's famous terracotta soldiers. They're a bit east of City 8,
          where Beta Airlines will be taking you next. Don't worry,
          transportation is all taken care of. You shouldn't be on the bus for
          more than an hour.{' '}
          <i>
            This one is relatively simple: the terracotta warriors are just east
            of Xi'an, China.
          </i>
        </li>
        <li>
          It's another Beta Airlines flight, this time almost directly south
          (merely one and a quarter degrees west). Your destination shares
          something orthographically with City 7. (By the way, remember to enter
          your frequent flyer number—you'll be able to fly every airline for
          free by the end of this!){' '}
          <i>
            Heading to that longitude and moving south, the first notable city
            has two diacritics—like Chişinău—and ends with "tau"—namely, Vũng
            Tàu, Vietnam.
          </i>
        </li>
        <li>
          Next, from here you take a very short flight northwest on Beta
          Airlines, arriving in the most populous city of City 9's country.{' '}
          <i>
            This confirms Vũng Tàu, as the capital of Vietnam, Ho Chi Minh City,
            has a Greek letter within.
          </i>
        </li>
      </ol>
      <p>
        Next, we'll have to determine what LKM's gimmick is. We know Ho Chi Minh
        City satisfies it, as we're departing from there. We're given that they
        partner with Enterprise, IHG, Omni, and Starwood, but not Avis, Alamo,
        Dollar, National, Hilton, Wyndham, or Hyatt. Taking the name of the
        airline as a clue, we will notice that all of the partners have three
        consecutive letters in them (although not necessarily in order). For
        instance, Enterprise has a R, an S, and a T, and Omni has an M, an N,
        and an O.
      </p>
      <ol start={11}>
        <li>
          And for your next leg, you'll be flying LKM. I guess I could've
          scheduled this stop earlier and saved you some time in the air, but
          it's about the adventure, right? Anyway, I'll note that one of the
          writers of <i>The Big Sick</i> was born in City 11.{' '}
          <i>
            The Big Sick was written by Kumail Nanjiani, born in Karachi, and
            Emily V. Gordon, born in Winston-Salem, USA. Of the two, only
            Winston-Salem has three consecutive letters (it has four, in fact:
            L, M, N, and O).
          </i>
        </li>
        <li>
          This is just a short layover. From here, you will continue on LKM to a
          destination that's slated to be served by JetGold in but a few years.{' '}
          <i>
            The future Olympic host cities are Paris, Milan, Cortina d'Ampezzo,
            Los Angeles, or Brisbane. It's either Milan or Cortina d'Ampezzo—to
            figure out which, we have to look at the next clue.
          </i>
        </li>
        <li>
          If I ended up in City 12, I would be doing a ton of shopping! I would
          need a suitcase for my shopping alone! Load whatever you bought onto
          LKM: you're next headed to a world capital that happens to be an
          anagram of your current city (if you repeat a letter)!{' '}
          <i>
            Cortina d'Ampezzo pretty clearly doesn't anagram to a world capital
            if we repeat a letter. Milan, however, does, so the last city was
            Milan, Italy, and this one is Manila, Philippines.
          </i>
        </li>
        <li>
          Once your tour here is done, you'll head on LKM to a city that's
          upstream of City 4. (Should I have scheduled this destination earlier
          instead?) Anyway, you can find the five letters from the previous city
          in this destination, too.{' '}
          <i>
            City 4 was St. Louis. Going up the Mississippi, the only city of any
            size with the letters "AILMN" in it is Minneapolis.
          </i>
        </li>
      </ol>
      <p>
        Next, we will need to figure out Buzz Air. The references to "two of the
        same seats"—and Buzz's airline code of "ZZ"—hints that they have a
        repeated neighboring letter. That fits with Minneapolis, which we're
        departing from.
      </p>
      <ol start={15}>
        <li>
          Now you're headed north, this time on Buzz Air. You'll land in the
          capital of a province that borders City 14's country. As an aside,
          this city has multiple professional sports teams. Let me know if you
          want me to arrange tickets–it might be fun!{' '}
          <i>
            There are ten Canadian provinces, but three don't border the U.S. Of
            the remaining seven, only Winnipeg, Canada, fits.
          </i>
        </li>
        <li>
          Strap in—you've got a long flight time to your destination, City 16,
          again on Buzz Air. Its name ends in a SI unit that is abbreviated with
          a single letter.{' '}
          <i>
            This is a bit vague, but there aren't a lot of options. Combining
            this with the fact from the next clue that the transliteration of
            the city's name recently changed, we hopefully get to Chattogram,
            Bangladesh.
          </i>
        </li>
        <li>
          Apparently, City 16's English "name" (transliteration, really)
          recently changed. I wonder if that caused any problems with airline
          computer systems! Beforehand, it was the same length, but instead of
          ending in an SI unit, it ended in an object. Funnily enough, City 15's
          name also ends in an object. When you land in CIty 17 and get off your
          Buzz Air flight, notice that its name ends with an object used to
          interact with both of those other objects!{' '}
          <i>
            Chattogram used to be transliterated as Chittagong. The items,
            therefore, would be a gong and a peg. Taking the next clue, we know
            that we depart from City 17 on a JetGold flight—therefore, it must
            be an Olympic city. That leaves us with Lillehammer, Norway.
          </i>
        </li>
        <li>
          Let's continue on! If you take the remainder of City 17's name (that
          is, after removing the object), you get another city on the same
          continent. (What a weird gimmick!) You'll fly JetGold to City 18,
          which is about 210 kilometers from that city, and which was where a
          treaty was signed that ended an 18th-century war between England and
          France.{' '}
          <i>
            Lillehammer gives us Lille, France. About 210 km from Lille is
            Paris, where the Treaty of Paris was signed, ending the Seven Years'
            War.
          </i>
        </li>
        <li>
          Pretty directly south of City 18 (but still in City 18's country) is a
          city that lent its name to a classic board game. That city is not your
          next destination. But if you then drove northwest out of that city,
          you'd come to a much larger city within an hour or two. This too is
          not your next destination. You can take the last five letters of this
          city and anagram them to make another city. That is City 19. Enjoy
          your penultimate JetGold flight!{' '}
          <i>
            South of Paris we find the city of Carcassonne, namesake to a Spiel
            des Jahres-winning board game. An hour's drive northwest is
            Toulouse. The last five letters can be anagrammed to get the Olympic
            city of Seoul, South Korea.
          </i>
        </li>
        <li>
          Having finished up here, you'll take JetGold one last time. On this
          flight, you're crossing a body of water called the…well, your origin
          and destination countries don't agree on its name, actually. I don't
          know what the rule is for that situation. Regardless, enjoy the sights
          of this national capital.{' '}
          <i>
            The body of water referred to here is the East Sea aka the Sea of
            Japan. Crossing that gets us to the national capital of Tokyo,
            Japan.
          </i>
        </li>
      </ol>
      <p>
        Finally, we have to tackle AirZwolf. First, the airline's description of
        "SkyTiles" and "Triple Travel Score" strongly points to Scrabble. The
        actors listed all have something in common—they all starred in movies
        with either "12" or "dozen" in the title. (Also, zwolf is 12 in German.)
        Combining "twelve" with Scrabble, we should conclude that the cities
        should have a Scrabble score of twelve, borne out by our current city,
        Tokyo.{' '}
      </p>
      <ol start={21}>
        <li>
          Another wonderful city visited! The shopping there's terrific—I bet
          you got bag after bag of souvenirs. You'll be leaving on AirZwolf to a
          city that would be a 5–6 hour drive along BR-116 from São Paulo,
          Brazil. (You'll be flying AirZwolf to Cities 22, 23, and 24 as well!){' '}
          <i>
            There are two cities that fit the bill, but only one with a Scrabble
            score of 12: Curitiba, Brazil.
          </i>
        </li>
        <li>
          Both City 21 and City 22 are quite culturally significant. Each one
          was, in fact, an American Capital of Culture!{' '}
          <i>
            There's only one other American Capital of Culture with a Scrabble
            Score of 12: Córdoba, Argentina.
          </i>
        </li>
        <li>
          Essentially halfway through! Gather your luggage and head to the
          airport for your next short flight. Cities 21 and 22 share a first and
          last letter. City 23 shares those first and last letters as well—as
          does its country!{' '}
          <i>
            Only seven countries fit the bill—Cambodia, Canada, China, Colombia,
            Costa Rica, Croatia, and Cuba. Of those, only Costa Rica, Cuba, and
            Colombia could be plausibly a "short flight" away. And Cartagena,
            Colombia, fits the bill, with a Scrabble score of 12.
          </i>
        </li>
        <li>
          The theme continues, as your next destination is the only national
          capital that shares the same first and last letter as the last three
          cities you visited. <i>That would be Canberra, Australia.</i>
        </li>
        <li>
          I'm tired of this pattern! You're off to the western United States,
          arriving in a city that lost a major professional sports team within
          the last twenty years. For this flight, your airline is Buzz Air.{' '}
          <i>
            Several teams based in the western US have moved in the last twenty
            years—the Raiders, the Chargers, the Earthquakes, and, depending on
            what we call "western," the Rams. But the only one that has a double
            letter in its city is the Sonics, so we're headed to Seattle, USA.{' '}
          </i>
        </li>
        <li>
          Coincidentally, your current city has a famous product that fits well
          with Buzz Air (in more ways than one)! And Buzz Air is the airline
          that you'll fly (directly west) to your next destination. This time
          it's the capital of a country.{' '}
          <i>
            Seattle has coffee! That has double letters and gives us a buzz! The
            only capital that's directly west of Seattle is Ulaanbaatar,
            Mongolia.
          </i>
        </li>
        <li>
          After that flight you must be tired! Once you rest and sightsee, your
          next destination is, at least by most measures, the most populous
          destination that Buzz Air serves. It only started serving this city in
          the mid-1990s.{' '}
          <i>
            Wikipedia's measures indicate that the largest city with a double
            letter is Chennai, India—which Buzz Air only started serving when it
            dropped the name Madras on the international stage.
          </i>
        </li>
        <li>
          Looks like your next destination stands on the site of an ancient
          settlement. That settlement's Hellenized name is the same as another,
          arguably more famous place. The current city there was named an Arab
          Capital of Culture! Enjoy your AirZwolf flight.{' '}
          <i>
            Out of the Arab Capitals of Culture, only Luxor and Port Sudan have
            a Scrabble score of 12. Port Sudan is a newer city, whereas Luxor,
            Egypt, was built at Thebes.
          </i>
        </li>
        <li>
          LOL, both Cities 18 and 28 are connected, in a way, to your next
          destination. While inbound to it on your AirZwolf flight, you'll have
          time to think about how. I bet you'll figure it out.{' '}
          <i>
            Paris and Luxor are both Las Vegas hotels—so to Las Vegas, USA, we
            go.
          </i>
        </li>
        <li>
          You'll find plenty to do here, but once you're ready to go, feel free
          to head to the airport for another AirZwolf flight. That airport's
          IATA code can have a letter added to make a country — your next
          destination is the capital of that country.{' '}
          <i>
            Las Vegas's IATA code is LAS. Adding a letter makes Laos, so the
            next city is Vientiane.
          </i>
        </li>
        <li>
          Rolling along, AirZwolf serves one other national capital in this part
          of the world, lying to the south of City 30. That's your next
          destination. It's a good thing that you're flying—if you took a car,
          it would be a multi-day drive!{' '}
          <i>
            The only other national capital in East Asia reachable by car with a
            Scrabble score of 12 is Singapore.
          </i>
        </li>
        <li>
          Everyone loves the glamor of flying, right? So who cares that you
          could take one interstate from City 3 to City 32? Or that City 11 is
          under 40 kilometers from that very interstate? Isn't it just fun to be
          in flying for hours and hours on end, like you will be on LKM on this
          leg (and the next two)? Your destination is the latter city named in a
          hyphenated airport enplaning over a million passengers a year.{' '}
          <i>
            Cities 3 and 11 are Atlanta and Winston-Salem, respectively. The
            only interstate served by the former and that goes that close to the
            latter is I-85. Of the airports on I-85, the only hyphenated one
            that's large enough and where the second city has three consecutive
            letters is Greenville-Spartanburg, so our destination is
            Spartanburg, USA.
          </i>
        </li>
        <li>
          Anyway, your flights are locked in; they can't be changed now! Recall
          that the airport serving City 32 has another city in its name. That
          city was home to a famous sportsperson. They garnered their fame—or
          infamy—while playing in your next destination.{' '}
          <i>
            Greenville, Spartanburg's sibling, was home to Shoeless Joe Jackson,
            whose scandal hit while he was playing in Chicago, USA.
          </i>
        </li>
        <li>
          Delightful city, isn't it? I hope every place you've visited has been
          so wonderful. Anyway, something sharing City 33's name won an award
          about twenty years ago. Your next destination is the only other city
          to share that honor. (City 18 doesn't count!){' '}
          <i>
            Chicago won Best Picture in 2003. The only other movie whose name
            was a city to win Best Picture is Casablanca. (An American In Paris
            has a city name in it, but it isn't just the city.)
          </i>
        </li>
        <li>
          Next, if you followed the coast and crossed two international borders
          (provided you stayed afloat), you'd reach your next destination! (I'm
          specifically talking about borders depicted on Google Maps using a
          solid line, to be clear.) Luckily, you get to fly AllAlfa there—no
          sailing necessary.{' '}
          <i>
            From Casablanca, following the coast either leads us to Tunis or
            Dakar, Senegal. The latter is the only one AllAlfa serves.
          </i>
        </li>
        <li>
          This city is the namesake of a famous event. It has moved away, what
          with nearby instability, but for several years in the 1990s, it was
          the other city traditionally associated with this event that wasn't
          used. Instead, City 36 took its place. Again, no driving necessary—you
          get to fly AllAlfa there.{' '}
          <i>
            This refers to the Dakar Rally. Granada, Spain, was the endpoint
            instead of Paris for a few years.
          </i>
        </li>
        <li>
          Here's your last flight on AllAlfa for this journey. This time you'll
          be going to the capital of a country that shares the same first and
          last letters of City 36.{' '}
          <i>
            The country options are Guyana, Ghana, Guatemala, Georgia, Guinea,
            and (perhaps) The Gambia. Regardless of how we characterize The
            Gambia, the only capital with just A's as vowels is Accra, Ghana.
          </i>
        </li>
        <li>
          Changing to Buzz Air, you'll now head to one of the Imperial Cities of
          City 34's country. Yeah, you sorta went backwards. Maybe I should have
          tried to be more efficient…too late now, I guess.{' '}
          <i>
            There are four Imperial Cities of Morocco: Fez, Marrakesh, Rabat,
            and Meknes. The only one with a double letter is Marrakesh.
          </i>
        </li>
        <li>
          Lovely city, isn't it? After your tour here is over, it is time to
          take yet another Buzz Air flight. This one is headed roughly
          northeast, to a coastal destination that shares the first three
          letters and length with City 38.{' '}
          <i>
            Crossing the Mediterranean, we get to Marseille, France; Marbella,
            Spain, is a letter short.
          </i>
        </li>
        <li>
          Until now, you haven't gone that far north. But this last trip on Buzz
          Air will take you to Nuuk, Greenland! What, did you expect me to
          conceal the destination in some sort of oblique puzzle?{' '}
          <i>Nuuk, Greenland—a simple answer.</i>
        </li>
        <li>
          Enjoying the brisk air near the Arctic Circle? If not, it's time for
          Beta Airlines to take you south again. This time, your stop will be a
          destination that JetGold began serving during the Lyndon Johnson
          administration.{' '}
          <i>
            There were four cities that hosted the Olympics during the Johnson
            administration: Innsbruck, Tokyo, Grenoble, and Mexico City. The
            only one containing a Greek letter is Mexico City.
          </i>
        </li>
        <li>
          Well, it's time to start heading home. Beta Airlines will take you to
          a city that is downriver of City 4. What's more, it starts with the
          same two letters as City 41.{' '}
          <i>
            Downriver of St. Louis, and starting with M-E, is Memphis, USA,
            which contains "phi."
          </i>
        </li>
        <li>
          Once you've walked around downtown, you can fly Beta Airlines to your
          next destination. If you'd have gone by boat, you would go upstream,
          take a right at a city of the same name as the capital of City 28's
          country, and stay with that river until it "ends" (i.e., splits in
          two).{' '}
          <i>
            City 28 was Luxor, Egypt, so we'd take the Ohio River at Cairo,
            Illinois, up to its end—Pittsburgh, USA, where it splits into the
            Allegheny and Monongahela.
          </i>
        </li>
        <li>
          Ready to be home? Only two more flights, both on LKM. Your next
          destination, like many American cities, has a 688-class submarine
          named after it. If you're using the hull number, it's close to City
          43—only 30 apart!{' '}
          <i>
            The USS Pittsburgh is SSN-720. We're either talking about
            Philadelphia—which doesn't have three consecutive letters—or Newport
            News, USA, which does.
          </i>
        </li>
        <li>
          Down to one more destination: Providence! Welcome back! I hope you
          enjoyed your vacation. By the way, transport from the airport isn't
          part of the package deal. You can take the bus back home, right?{' '}
          <i>Providence! Home!</i>
        </li>
      </ol>
      <h3>Luggage</h3>
      <ul>
        <li>
          Time to make our first airline change, moving to JetGold to head on to
          our next flight. It so happens that City 4 had its name first engraved
          on the Stanley Cup in 2004. That was followed up it being engraved
          again a few years ago.{' '}
          <i>
            We came into St. Louis on AllAlfa. Thus, our luggage went to Tampa,
            which has all A's.
          </i>
        </li>
        <li>
          Sightseeing done? Then head to the airport and board Beta Airlines and
          head off toward a city that's twinned with both Bucharest and Kyiv.
          You'll have to change your watch by one hour!{' '}
          <i>
            The twinned cities here were Ankara, Athens, Beijing, Chişinău,
            Pretoria, Sofia, and Tbilisi. But now we need one that held an
            Olympics. That narrows it down to Athens and Beijing, and Athens is
            the one that is an hour different from Munich.
          </i>
        </li>
        <li>
          And for your next leg, you'll be flying LKM. I guess I could've
          scheduled this stop earlier and saved you some time in the air, but
          it's about the adventure, right? Anyway, I'll note that one of the
          writers of The Big Sick was born in City 11.{' '}
          <i>
            The options here were Karachi and Winston-Salem, and Karachi is now
            correct, as it has a Greek letter.
          </i>
        </li>
        <li>
          Now you're headed north, this time on Buzz Air. You'll land in the
          capital of a province that borders City 14's country. As an aside,
          this city has multiple professional sports teams. Let me know if you
          want me to arrange tickets–it might be fun!{' '}
          <i>
            Instead of double letters, now we need three consecutive letters.
            Only Edmonton works. (Of course, if we spell out Saint John, that
            also works, but it doesn't have two professional sports teams.)
          </i>
        </li>
        <li>
          Let's continue on! If you take the remainder of City 17's name (that
          is, after removing the object), you get another city on the same
          continent. (What a weird gimmick!) You'll fly JetGold to City 18,
          which is about 210 kilometers from that city, and which was where a
          treaty was signed that ended an 18th-century war between England and
          France.{' '}
          <i>
            We're still going to Lille, France, but we can't go to Paris, as it
            doesn't have a double letter. But Aachen, Germany, to the east,
            does, and was the place where the Treaty of Aix-la-Chapelle was
            signed, ending the War of Austrian Succession.
          </i>
        </li>
        <li>
          Another wonderful city visited! The shopping there's terrific—I bet
          you got bag after bag of souvenirs. You'll be leaving on AirZwolf to a
          city that would be a 5–6 hour drive along BR-116 from São Paulo,
          Brazil. (You'll be flying AirZwolf to Cities 22, 23, and 24 as well!){' '}
          <i>
            This time we're going east, to the Olympic city of Rio de Janeiro.
          </i>
        </li>
        <li>
          I'm tired of this pattern! You're off to the western United States,
          arriving in a city that lost a major professional sports team within
          the last twenty years. For this flight, your airline is Buzz Air.{' '}
          <i>
            Of the possibilities, only one city has a Scrabble score of
            12—Oakland.
          </i>
        </li>
        <li>
          Looks like your next destination stands on the site of an ancient
          settlement. That settlement's Hellenized name is the same as another,
          arguably more famous place. The current city there was named an Arab
          Capital of Culture! Enjoy your AirZwolf flight.{' '}
          <i>
            Only Amman and arguably Sana'a have double letters. Amman, however,
            was built on the site of Philadelphia, so Amman must be it.
          </i>
        </li>
        <li>
          Everyone loves the glamor of flying, right? So who cares that you
          could take one interstate from City 3 to City 32? Or that City 11 is
          under 40 kilometers from that interstate? LKM, your airline for this
          flight and the next two, will take you to your destination, the latter
          city named in a hyphenated airport enplaning over a million passengers
          a year.{' '}
          <i>
            There's another double-barrelled airport on I-85: Raleigh-Durham.
            And Durham has the requisite Scrabble score.
          </i>
        </li>
        <li>
          Next, if you followed the coast and crossed two international borders
          (provided you stayed afloat), you'd reach your next destination! (I'm
          specifically talking about borders depicted on Google Maps using a
          solid line, to be clear.) Luckily, you get to fly AllAlfa there—no
          sailing necessary.{' '}
          <i>
            For whatever reason, the Spanish enclaves in Morocco aren't depicted
            with solid lines. So our bag ends up in Tunis.
          </i>
        </li>
        <li>
          Changing to Buzz Air, you'll now head to one of the Imperial Cities of
          City 34's country. Yeah, you sorta went backwards. Maybe I should have
          tried to be more efficient…too late now, I guess.{' '}
          <i>
            Rabat is the only Imperial City of Morocco to have only A's as a
            vowel.
          </i>
        </li>
        <li>
          Enjoying the brisk air near the Arctic Circle? If not, it's time for
          Beta Airlines to take you south again. This time, your stop will be a
          destination that JetGold began serving during the Lyndon Johnson
          administration.{' '}
          <i>
            The only of the four options that has a double letter is Innsbruck.
          </i>
        </li>
        <li>
          Ready to be home? Only two more flights, both on LKM. Your next
          destination, like many American cities, has a 688-class submarine
          named after it. If you're using the hull number, it's close to City
          43—only 30 apart!{' '}
          <i>
            The other option, Philadelphia, does have a Greek letter in its
            name.
          </i>
        </li>
      </ul>
    </Appendix>
    <style jsx global>{`
      .luggage-table td:first-child {
        text-align: center;
      }
      .luggage-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
