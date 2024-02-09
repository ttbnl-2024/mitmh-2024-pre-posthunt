import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';

import image0 from 'assets/solutions/matchmaker/0.png';

const SLUG = 'matchmaker';
const ANSWER = `CHLOE, WHINER, BRACKET, DANDER, CARBONYL, CRUNCHY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We see a list of titles of various sorts, and a list of phrases with only
      the first letter of each word and a year given. Some of the phrases are
      easy to guess due to their enumeration and year, such as{' '}
      <Monospace>WORLD WIDE WEB (TIM BERNERS-LEE, 1991)</Monospace> and we
      discover they are a list of inventions and historical events.
    </p>
    <p>
      Researching the more specific titles, such as "Bart to the Future" (2000),
      reveals each of the creative works predicts one of the inventions or
      historical events anywhere from one year to more than a century before the
      event. In some cases the authors were trying to predict the future. In
      other cases they were making jokes that nevertheless came true. Some of
      them were just trying to establish a suitably futuristic setting or
      weren't trying to make a prediction at all.
    </p>
    <ul>
      <li>
        "In the Year 2525" (1969): "In the year 6565 / You won't need no
        husband, won't need no wife / You'll pick your son, pick your daughter
        too / From the bottom of a long glass tube." The lyrics got it slightly
        wrong; it only took until 1978 for the first test-tube baby.
      </li>
      <li>
        "Some MAD Auto Safety Devices" (1967): This comic by Al Jaffee in{' '}
        <i>MAD Magazine</i> includes a "Radar Slowdowner" which slows down a car
        automatically when it detects another car in front of it. In the 1990s
        this technology was developed for real in stages, and Mitsubishi's
        adaptive cruise control which debuted in 1995 was the first that can be
        said to fully recreate the comic invention.
      </li>
      <li>
        <i>Futility, or the Wreck of the Titan</i> (1898): This novel by Morgan
        Robertson features a British ocean liner named <i>Titan</i> that strikes
        an iceberg in the North Atlantic and sinks, with not enough lifeboats on
        board for all the passengers. All of these attributes (and others) match
        the sinking of <i>RMS Titanic</i> in 1912, and even the name of the ship
        was almost correct. Though more than a century has passed, this remains
        one of the best known examples of uncannily prophetic texts due to the
        numerous similarities between the fictional and real events.
      </li>
      <li>
        <i>RoboCop 2</i> (1990): The film is set in a dystopian future in which
        Detroit is close to bankruptcy. Detroit actually did enter bankruptcy in
        2013.
      </li>
      <li>
        <i>Dick Tracy</i> strips of 1946: One of the most memorable items Dick
        Tracy carried was his "Two-Way Wrist Radio" which debuted on January 13,
        1946, and was upgraded to a "Two-Way Wrist TV" in 1964. By 2013 you could
        buy a smartwatch which allowed you to make video calls just like Dick
        used to do in the comics.
      </li>
      <li>
        <i>Gulliver's Travels</i> (1726): In the book, Laputan astronomers have
        discovered two moons orbiting Mars, claiming one orbits Mars at an
        altitude of 13,600 km and in a time of 10 hours, and the other at 27,200
        km and 21.5 hours. These moons weren't discovered for real until Asaph
        Hall did it in 1877, and the actual orbits are 6000 km in 7.7 hours and
        20,100 km in 30.3 hours. Remarkably close!
      </li>
      <li>
        <i>Midnight Madness</i> (1980): In this film, a graduate student
        challenges five college students to make teams to participate in what he
        called The Great All-NIghter, which sends the teams all over the area
        trying to solve puzzle clues. It's not certain that Brad Schaefer was
        inspired by the film when he made the first MIT Mystery Hunt released in
        1981, but the timing makes it look likely.
      </li>
      <li>
        <i>The Hitchhiker's Guide to the Galaxy</i> (1978): The guide in the
        title of what was originally a BBC radio comedy series, is an electronic
        encyclopedia of literally everything, and alien researcher Ford Prefect
        comes to Earth to expand its articles about our planet. This was utterly
        inconceivable at the time, but <i>Wikipedia</i>, started in 2001, has
        become very nearly the guide Douglas Adams hypothesized.
      </li>
      <li>
        "Two Girls out to Have Fun" (1984): In this issue of{' '}
        <i>The Uncanny X-Men</i> (#189), one of the girls from the title is
        Rachel Summers, who comes from an apocalyptic future. It's specifically
        mentioned in the issue that in the future she comes from, the World
        Trade Center was destroyed in 2001.
      </li>
      <li>
        "Bart to the Future" (2000): In this episode of <i>The Simpsons</i>,
        Bart sneaks into a Native American casino, where he's not allowed
        because he's only 10 years old. As punishment when he's caught, the
        Native American manager shows him a vision of his future if he doesn't
        change his ways. In the hypothetical future, Lisa Simpson becomes
        president and is saddled with cleaning up the mess that her predecessor,
        Donald Trump, made of the country. The prediction was much talked about
        at the time of Trump's election, with Bart writing "Being right sucks"
        as his chalkboard gag at the start of the next episode to air.
      </li>
      <li>
        "MAD Devices for Safer Smoking" (1964): Another Al Jaffee <i>MAD</i>{' '}
        cartoon with wacky inventions features "The Smoke Simulator": a
        water-filled Pyrex tube is inserted into a cigarette, and the water
        becomes steam, which feels just like smoke when inhaled. While not using
        an actual cigarette, the concept is essentially what E-Cigarettes are.
      </li>
      <li>
        <i>Mimu Iro Iro Yume no Tabi</i> (1983): The main character of this
        anime, Mimu, is a "meme" that characters find on the Information Network
        System, which is basically the Internet. The INS features video
        chatting, online gaming, online shopping, video streaming, train
        schedules and maps, and a news service. The Internet existed in 1983 ...
        barely. It took the invention of the World Wide Web by Tim Berners-Lee
        and many more inventions to make all the things from the anime possible.
      </li>
      <li>
        <i>Destination Moon</i> (1950-1952): This serial comic from{' '}
        <i>Tintin</i> (published as a collected volume in 1953) is one of
        numerous predictions of what would eventually be accomplished by Apollo
        11 in 1969. Belgian cartoonist Hergé carried out research and made the
        depictions of space travel as realistic as possible, and was quite
        successful at doing so, despite the fact that we'd barely sent rockets
        into space at all at the time.
      </li>
      <li>
        <i>Rowan and Martin's Laugh-In</i> (1969): In a segment called News of
        the Future, Rowan joked that East Germany tore down the Berlin Wall in
        1989, only to quickly replace it with a moat filled with alligators. But
        the wall did come down in 1989!
      </li>
      <li>
        <i>Stranger in a Strange Land</i> (1961): In this book Robert Heinlein
        has an injured person placed on what he calls a "hydraulic bed" with
        other text indicating it is a skin filled with water constrained by a
        frame. It was only 1968 when inventor Charles Hall had his first attempt
        at a patent on the waterbed rejected citing the novel as prior art. (He
        modified the design and later patented it successfully.)
      </li>
      <li>
        "When You Dish Upon a Star" (1998): In this <i>Simpsons</i> episode, a
        gag near the end of the episode shows a 20th Century Fox sign with "A
        Division of Walt Disney Co." printed under it. This was likely a
        reference to the title of this Fox episode referencing "When You Wish
        Upon a Star," a song from Disney's Pinocchio. But in 2017, Disney did
        announce their intentions to buy Fox, a deal completed in 2019.
      </li>
      <li>
        <i>Deep Impact</i> (1998): The film features Morgan Freeman as Tom Beck,
        a black president of the United States. We had to wait in 2009 for
        Barack Obama to take office to make this a reality (and fortunately, no
        comet impact during his tenure).
      </li>
    </ul>

    <h2>Completed Diagram</h2>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <h2>Extraction</h2>
    <p>
      Matchmaker puzzles can extract in several different ways, but usually use
      what's crossed by each line, in the order of items in one side of the
      puzzle, or what's not crossed by the lines, in some direction such as
      top-to-bottom. In this matchmaker, we have to extract in every possible
      way. Every letter and number in the grid is used once.
    </p>
    <ul>
      <li>
        Index each Arabic numeral crossed by a line into the phrase on the left,
        and order the letters by the phrases on the right to spell{' '}
        <Monospace>ENHALO NICE PLUMBER</Monospace>. This seemingly nonsense
        phrase plugs into the blanks in the Blanks puzzle to extract{' '}
        <Answerize>CHLOE</Answerize>.
      </li>
      <li>
        Index each Roman numeral crossed by a line into the phrase on the right,
        and order the letters by the phrases on the left to spell{' '}
        <Monospace>BACKWARD AT TOP LEFT</Monospace>. This instruction applies to
        the Word Search, where we can find the word{' '}
        <Answerize>DANDER</Answerize> in this position.
      </li>
      <li>
        The uncrossed Roman numerals, left to right, translate by position in
        the alphabet to spell <Monospace>ONE ACROSS ANSWER</Monospace>. In the
        Crossword, that answer is <Answerize>BRACKET</Answerize>.
      </li>
      <li>
        The crossed letters, right to left, spell{' '}
        <Monospace>ALICE AND BOB MEET UP</Monospace>. We can use this in the
        Text Adventure to solve the fuse timing puzzle (down) at the bridge
        (south) and encounter a <Answerize>WHINER</Answerize>.
      </li>
      <li>
        The uncrossed letters, top to bottom, spell{' '}
        <Monospace>WHAT PRODUCTS IN SIX AND NINE HAVE IN COMMON</Monospace>.
        This refers to the Chemistry puzzle, where it leads to the answer{' '}
        <Answerize>CARBONYL</Answerize>.
      </li>
      <li>
        The uncrossed Arabic numerals, bottom to top, start out spelling{' '}
        <Monospace>SHIFT BY</Monospace>, and the remaining 30 numbers do not
        spell anything, but they provide Caesar shifts: 18 1 6 18 7 12 8 5 7 13
        12 3 5 16 10 15 26 25 13 2 4 18 11 26 20 3 17 7 8 11. The Akari is the
        puzzle not yet used, and the obvious 30 within it are the letters on
        spaces with lights:{' '}
        <Monospace>THE MISSING PRODUCT IN REACTION TEN</Monospace>. Shift them
        forward, wrapping around when necessary, to spell{' '}
        <Monospace>LIKE PEANUT BUTTER THAT ISN'T CREAMY</Monospace>, leading to
        the answer <Answerize>CRUNCHY</Answerize>.
      </li>
    </ul>
    <AuthorsNotes>
      <p>
        This sort of thing is pretty common, and there were other works of
        fiction, in some cases earlier ones, which could have been used as
        predictors of the same events. I hope you enjoyed the ones I chose.
        Except for <i>Midnight Madness</i>, all of them can be found within
        these TV Tropes pages:
      </p>
      <ul>
        <li>
          <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/LifeImitatesArt">
            https://tvtropes.org/pmwiki/pmwiki.php/Main/LifeImitatesArt
          </a>
        </li>
        <li>
          <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/AccidentallyCorrectWriting">
            https://tvtropes.org/pmwiki/pmwiki.php/Main/AccidentallyCorrectWriting
          </a>
        </li>
        <li>
          <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/NotSoCrazyAnymore">
            https://tvtropes.org/pmwiki/pmwiki.php/Main/NotSoCrazyAnymore
          </a>
        </li>
      </ul>
      <p>
        Other sources were used to confirm details and in some cases whether TV
        Tropes even describes the prediction correctly.
      </p>
      <p>Here are some of the candidates not used within the puzzle:</p>
      <ul>
        <li>
          <i>Tik-Tok of Oz</i> (1914): This sequel to Wizard of Oz predicts
          cellular phones, actually introduced by Motorola in 1973. Too close to
          Dick Tracy.
        </li>
        <li>
          "A Logic Named Joe" (1946): Predicts the Internet, World Wide Web,
          artificial intelligence, etc. Too hard to pin down which prediction to
          use and too much overlap with other entries used in the puzzle.
        </li>
        <li>
          <i>Marooned</i> (1964): Predicts a space disaster much like Apollo 13
          (1970). David Bowie's song "Space Oddity" (1969) does so as well.
        </li>
        <li>
          "The Sunken Yacht" (1949): This Donald Duck comic was part of the
          inspiration for this puzzle; Donald raises a sunken yacht by filling
          it with ping pong balls. In 1964, Danish inventor Karl Krøyer salvaged
          a shipwreck in much the same way. He was denied a patent on the
          invention due to the comic book being cited as prior art. It was too
          difficult to describe this invention with a short, solvable phrase
          given its initials and enumeration.
        </li>
        <li>
          <i>Mobile Suit Gundam</i> (1979) has Sydney being hit by space debris.
          Later that year, when Skylab was deorbited with intentions of crashing
          it into the ocean, part of it hit Australia (but not Sydney).
        </li>
        <li>
          <i>Demolition Man</i> (1993): Arnold Schwarzenegger is elected United
          States president after a constitutional amendment is passed to allow
          naturalized citizens to become president. After Arnie was elected
          governor of California in 2003, such an amendment was proposed but it
          did not have the support to pass.
        </li>
      </ul>
    </AuthorsNotes>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
