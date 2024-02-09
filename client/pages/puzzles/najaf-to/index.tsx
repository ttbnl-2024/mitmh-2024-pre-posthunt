import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'najaf-to';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Persephone fired her travel agent after coming back from this world
          trip—the itinerary was so complicated that the airlines lost all her
          luggage.
        </FlavorText>
        <p>
          Here's your itinerary for your huge trip! You'll be taking six
          airlines:
        </p>
        <ul className="pl-7 sm:pl-10 space-y-2">
          <li>
            AllAlfa (AA): Their lounges always have the freshest bananas and
            Parma ham!
          </li>
          <li>
            Beta Airlines (BA): I'm not a fan of their partnership with Del
            Taco, but they've always got Pepsi products on board.
          </li>
          <li>
            JetGold (JG): They are very selective in their destinations, only
            adding them every two years—if that! Their motto is Faster, Higher,
            Safer.
          </li>
          <li>
            LKM (LK): Their preferred car rental agency is Enterprise—they don't
            do business with Avis, Alamo, Dollar, or National. For hotels, they
            partner with IHG, Omni, and Starwood, but not Hilton, Wyndham, or
            Hyatt.
          </li>
          <li>
            AirZwolf (XW): By joining their SkyTiles club you might get a Double
            or even Triple Travel Score! They've scored the rights to movies
            starring the likes of Henry Fonda, Bruce Willis, Chiwetel Ejiofor,
            Ernest Borgnine, George Clooney, and Steve Martin.
          </li>
          <li>
            Buzz Air (ZZ): No frills airline. I tried to get you two of the same
            seats next to each other so you have more room.
          </li>
        </ul>
        <p>
          Your plans already got you to the banks of the Euphrates—this
          itinerary will take you on the rest of your worldwide tour!
        </p>
        <ol className="pl-7 sm:pl-10 space-y-2">
          <li>
            Surely you will find this massive trip of yours a wonderful
            adventure! Your first flight is on AllAlfa from Najaf to its
            country's capital (City 1).
          </li>
          <li>
            Ooh, how neat! Your current city has a famous fountain that shares
            much of the start of its name with another city. You'll fly over
            that city en route to your destination, City 2, that city's nation's
            capital.
          </li>
          <li>
            Ready now to move on? You next need to go to the capital of…oh,
            wait, look what neighbors the country you're currently in! That
            would have been a comical mixup! But AllAlfa doesn't fly to that
            country's capital, so there should be no confusion about City 3.
          </li>
          <li>
            Time to make our first airline change, moving to JetGold to head on
            to our next flight. It so happens that City 4 had its name first
            engraved on the Stanley Cup in 2004. That was followed up it being
            engraved again a few years ago.
          </li>
          <li>
            Due to time constraints, you're only here and in your next
            destination for an abbreviated time. To get there, you are flying
            JetGold to City 5, which is the only place JetGold serves that
            starts similarly to the start of City 4.
          </li>
          <li>
            Ends up JetGold serves lots of places within 500 km of City 5. Once
            you've enjoyed all the activities there, take JetGold to the only
            one of those locations that Beta Airlines also serves.
          </li>
          <li>
            Sightseeing done? Then head to the airport and board Beta Airlines
            and head off toward a city that's twinned with both Bucharest and
            Kyiv. You'll have to change your watch by one hour!
          </li>
          <li>
            This next stop is one I'd be really excited about! You're going to
            see China's famous terracotta soldiers. They're a bit east of City
            8, where Beta Airlines will be taking you next. Don't worry,
            transportation is all taken care of. You shouldn't be on the bus for
            more than an hour.
          </li>
          <li>
            It's another Beta Airlines flight, this time almost directly south
            (merely one and a quarter degrees west). Your destination shares
            something orthographically with City 7. (By the way, remember to
            enter your frequent flyer number—you'll be able to fly every airline
            for free by the end of this!)
          </li>
          <li>
            Next, from here you take a very short flight northwest on Beta
            Airlines, arriving in the most populous city of City 9's country.
          </li>
          <li>
            And for your next leg, you'll be flying LKM. I guess I could've
            scheduled this stop earlier and saved you some time in the air, but
            it's about the adventure, right? Anyway, I'll note that one of the
            writers of The Big Sick was born in City 11.
          </li>
          <li>
            This is just a short layover. From here, you will continue on LKM to
            a destination that's slated to be served by JetGold in but a few
            years.
          </li>
          <li>
            If I ended up in City 12, I would be doing a ton of shopping! I
            would need a suitcase for my shopping alone! Load whatever you
            bought onto LKM: you're next headed to a world capital that happens
            to be an anagram of your current city (if you repeat a letter)!
          </li>
          <li>
            Once your tour here is done, you'll head on LKM to a city that's
            upstream of City 4. (Should I have scheduled this destination
            earlier instead?) Anyway, you can find the five letters from the
            previous city in this destination, too.
          </li>
          <li>
            Now you're headed north, this time on Buzz Air. You'll land in the
            capital of a province that borders City 14's country. As an aside,
            this city has multiple professional sports teams. Let me know if you
            want me to arrange tickets-it might be fun!
          </li>
          <li>
            Strap in—you've got a long flight time to your destination, City 16,
            again on Buzz Air. Its name ends in a SI unit that is abbreviated
            with a single letter.
          </li>
          <li>
            Apparently, City 16's English "name" (transliteration, really)
            recently changed. I wonder if that caused any problems with airline
            computer systems! Beforehand, it was the same length, but instead of
            ending in an SI unit, it ended in an object. Funnily enough, City
            15's name also ends in an object. When you land in CIty 17 and get
            off your Buzz Air flight, notice that its name ends with an object
            used to interact with both of those other objects!
          </li>
          <li>
            Let's continue on! If you take the remainder of City 17's name (that
            is, after removing the object), you get another city on the same
            continent. (What a weird gimmick!) You'll fly JetGold to City 18,
            which is about 210 kilometers from that city, and which was where a
            treaty was signed that ended an 18th-century war between England and
            France.
          </li>
          <li>
            Pretty directly south of City 18 (but still in City 18's country) is
            a city that lent its name to a classic board game. That city is not
            your next destination. But if you then drove northwest out of that
            city, you'd come to a much larger city within an hour or two. This
            too is not your next destination. You can take the last five letters
            of this city and anagram them to make another city. That is City 19.
            Enjoy your penultimate JetGold flight!
          </li>
          <li>
            Having finished up here, you'll take JetGold one last time. On this
            flight, you're crossing a body of water called the…well, your origin
            and destination countries don't agree on its name, actually. I don't
            know what the rule is for that situation. Regardless, enjoy the
            sights of this national capital.
          </li>
          <li>
            Another wonderful city visited! The shopping there's terrific—I bet
            you got bag after bag of souvenirs. You'll be leaving on AirZwolf to
            a city that would be a 5&ndash;6 hour drive along BR-116 from São Paulo,
            Brazil. (You'll be flying AirZwolf to Cities 22, 23, and 24 as
            well!)
          </li>
          <li>
            Both City 21 and City 22 are quite culturally significant. Each one
            was, in fact, an American Capital of Culture!
          </li>
          <li>
            Essentially halfway through! Gather your luggage and head to the
            airport for your next short flight. Cities 21 and 22 share a first
            and last letter. City 23 shares those first and last letters as
            well—as does its country!
          </li>
          <li>
            The theme continues, as your next destination is the only national
            capital that shares the same first and last letter as the last three
            cities you visited.
          </li>
          <li>
            I'm tired of this pattern! You're off to the western United States,
            arriving in a city that lost a major professional sports team within
            the last twenty years. For this flight, your airline is Buzz Air.
          </li>
          <li>
            Coincidentally, your current city has a famous product that fits
            well with Buzz Air (in more ways than one)! And Buzz Air is the
            airline that you'll fly (directly west) to your next destination.
            This time it's the capital of a country.
          </li>
          <li>
            After that flight you must be tired! Once you rest and sightsee,
            your next destination is, at least by most measures, the most
            populous destination that Buzz Air serves. It only started serving
            this city in the mid-1990s.
          </li>
          <li>
            Looks like your next destination stands on the site of an ancient
            settlement. That settlement's Hellenized name is the same as
            another, arguably more famous place. The current city there was
            named an Arab Capital of Culture! Enjoy your AirZwolf flight.
          </li>
          <li>
            LOL, both Cities 18 and 28 are connected, in a way, to your next
            destination. While inbound to it on your AirZwolf flight, you'll
            have time to think about how. I bet you'll figure it out.
          </li>
          <li>
            You'll find plenty to do here, but once you're ready to go, feel
            free to head to the airport for another AirZwolf flight. That
            airport's IATA code can have a letter added to make a country — your
            next destination is the capital of that country.
          </li>
          <li>
            Rolling along, AirZwolf serves one other national capital in this
            part of the world, lying to the south of City 30. That's your next
            destination. It's a good thing that you're flying—if you took a car,
            it would be a multi-day drive!
          </li>
          <li>
            Everyone loves the glamor of flying, right? So who cares that you
            could take one interstate from City 3 to City 32? Or that City 11 is
            under 40 kilometers from that very interstate? Isn't it just fun to
            be in flying for hours and hours on end, like you will be on LKM on
            this leg (and the next two)? Your destination is the latter city
            named in a hyphenated airport enplaning over a million passengers a
            year.
          </li>
          <li>
            Anyway, your flights are locked in; they can't be changed now!
            Recall that the airport serving City 32 has another city in its
            name. That city was home to a famous sportsperson. They garnered
            their fame—or infamy—while playing in your next destination.
          </li>
          <li>
            Delightful city, isn't it? I hope every place you've visited has
            been so wonderful. Anyway, something sharing City 33's name won an
            award about twenty years ago. Your next destination is the only
            other city to share that honor. (City 18 doesn't count!)
          </li>
          <li>
            Next, if you followed the coast and crossed two international
            borders (provided you stayed afloat), you'd reach your next
            destination! (I'm specifically talking about borders depicted on
            Google Maps using a solid line, to be clear.) Luckily, you get to
            fly AllAlfa there—no sailing necessary.
          </li>
          <li>
            This city is the namesake of a famous event. It has moved away, what
            with nearby instability, but for several years in the 1990s, it was
            the other city traditionally associated with this event that wasn't
            used. Instead, City 36 took its place. Again, no driving
            necessary—you get to fly AllAlfa there.
          </li>
          <li>
            Here's your last flight on AllAlfa for this journey. This time
            you'll be going to the capital of a country that shares the same
            first and last letters of City 36.
          </li>
          <li>
            Changing to Buzz Air, you'll now head to one of the Imperial Cities
            of City 34's country. Yeah, you sorta went backwards. Maybe I should
            have tried to be more efficient…too late now, I guess.
          </li>
          <li>
            Lovely city, isn't it? After your tour here is over, it is time to
            take yet another Buzz Air flight. This one is headed roughly
            northeast, to a coastal destination that shares the first three
            letters and length with City 38.
          </li>
          <li>
            Until now, you haven't gone that far north. But this last trip on
            Buzz Air will take you to Nuuk, Greenland! What, did you expect me
            to conceal the destination in some sort of oblique puzzle?
          </li>
          <li>
            Enjoying the brisk air near the Arctic Circle? If not, it's time for
            Beta Airlines to take you south again. This time, your stop will be
            a destination that JetGold began serving during the Lyndon Johnson
            administration.
          </li>
          <li>
            Well, it's time to start heading home. Beta Airlines will take you
            to a city that is downriver of City 4. What's more, it starts with
            the same two letters as City 41.
          </li>
          <li>
            Once you've walked around downtown, you can fly Beta Airlines to
            your next destination. If you'd have gone by boat, you would go
            upstream, take a right at a city of the same name as the capital of
            City 28's country, and stay with that river until it "ends" (i.e.,
            splits in two).
          </li>
          <li>
            Ready to be home? Only two more flights, both on LKM. Your next
            destination, like many American cities, has a 688-class submarine
            named after it. If you're using the hull number, it's close to City
            43—only 30 apart!
          </li>
          <li>
            Down to one more destination: Providence! Welcome back! I hope you
            enjoyed your vacation. By the way, transport from the airport isn't
            part of the package deal. You can take the bus back home, right?
          </li>
        </ol>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
