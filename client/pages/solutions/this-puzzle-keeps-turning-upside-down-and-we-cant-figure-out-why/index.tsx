import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'this-puzzle-keeps-turning-upside-down-and-we-cant-figure-out-why';
const ANSWER = `CARLTON FISK`;

// prettier-ignore
const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      Watch this first:{' '}
      <a href="https://www.youtube.com/watch?v=rBF6u_Qt-A0">
        https://www.youtube.com/watch?v=rBF6u_Qt-A0
      </a>
      . Ok, now…
    </p>
    <p>
      This puzzle is based on the popular Australian (hence why the puzzle is
      upside down) show <i>Spicks and Specks</i>, a music-themed comedic television
      quiz show first airing in 2005, in which the host, Adam Hills, asks two
      teams, of three people each, varying music-themed questions in different
      games. The theme song used for the show is appropriately, the song Spicks
      and Specks by the Bee Gees.
    </p>
    <p>
      Presented like a playlist, with several rounds or "Tracks", each
      mini-puzzle/round/track is based on a round from the show and has the same
      name (although some creative liberty has been taken to make the puzzle
      more like a puzzle, and a few games have been altered to give solutions
      that are song titles instead of artists. Each image, clue, audio file, or
      question takes the form of a style of question that has been previously
      asked on the show, and its solution is either a well-known song or an
      Australian actor/director for the final round. The wikipedia page for the
      show outlines how each game would work, and we can use those descriptions
      to help us solve this puzzle.
    </p>
    <p>
      Once we have figured out how each round is supposed to work and we have
      started to identify some of the songs for each "Track", we need to make
      the realisation that these are all songs that comprise the "soundtracks"
      of popular Australian films (or films with an Australian lead
      actor/actress). Both the songs and film titles have been organised
      alphabetically to make this slightly easier. The licensed songs appearing
      on each soundtrack* are presented in each round, except for one extra song
      from an Australian band or artist that has been included. Extracting the
      highest position that each "bonus" song appeared on the Australian ARIA or
      Kent music charts into the film title, and sorting the films by matching
      them with the actors from the twelfth and final round will give the
      answer.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>
            Australian Actor / Actress / Director Clued in The Final Countdown
          </th>
          <th>Film They Appeared In</th>
          <th>
            Extra Song by an Australian Artist or Group Not Appearing on the
            Soundtrack
          </th>
          <th>Peak ARIA / Kent Chart Position</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Baz Luhrmann</td>
          <td><i>Strictly Ballroom</i></td>
          <td>"Slipstream" (Sherbet)</td>
          <td className="text-center">5</td>
          <td className="text-center">C</td>
        </tr>
        <tr>
          <td>Margot Robbie</td>
          <td><i>Barbie</i></td>
          <td>"Heaven (Must Be There)" (Eurogliders)</td>
          <td className="text-center">2</td>
          <td className="text-center">A</td>
        </tr>
        <tr>
          <td>Olivia Newton-John</td>
          <td><i>Grease</i></td>
          <td>"Tragedy" (The Bee Gees)</td>
          <td className="text-center">2</td>
          <td className="text-center">R</td>
        </tr>
        <tr>
          <td>Paul Hogan</td>
          <td><i>Crocodile Dundee II</i></td>
          <td>"Cool World" (Mondo Rock)</td>
          <td className="text-center">8</td>
          <td className="text-center">L</td>
        </tr>
        <tr>
          <td>Chris Hemsworth</td>
          <td><i>Thor: Love and Thunder</i></td>
          <td>"Electric Blue" (Icehouse)</td>
          <td className="text-center">1</td>
          <td className="text-center">T</td>
        </tr>
        <tr>
          <td>Guy Pearce</td>
          <td><i>The Adventures of Priscilla</i></td>
          <td>"Don't Change" (INXS)</td>
          <td className="text-center">14</td>
          <td className="text-center">O</td>
        </tr>
        <tr>
          <td>Yahoo Serious</td>
          <td><i>Young Einstein</i></td>
          <td>"My Happiness" (Powderfinger)</td>
          <td className="text-center">4</td>
          <td className="text-center">N</td>
        </tr>
        <tr>
          <td>Miranda Otto</td>
          <td><i>Flight of the Phoenix</i></td>
          <td>"The Horses" (Daryl Braithwaite)</td>
          <td className="text-center">1</td>
          <td className="text-center">F</td>
        </tr>
        <tr>
          <td>Toni Collette</td>
          <td><i>Muriel's Wedding</i></td>
          <td>"Better" (The Screaming Jets)</td>
          <td className="text-center">4</td>
          <td className="text-center">I</td>
        </tr>
        <tr>
          <td>Michael Caton</td>
          <td><i>The Castle</i></td>
          <td>"Weir" (Killing Heidi)</td>
          <td className="text-center">6</td>
          <td className="text-center">S</td>
        </tr>
        <tr>
          <td>Sam Worthington</td>
          <td><i>Thunderstruck</i></td>
          <td>"All the Lovers" (Kylie Minogue)</td>
          <td className="text-center">13</td>
          <td className="text-center">K</td>
        </tr>
      </tbody>
    </Table>
    <p>
      What do these "big hits" all have in common? Why, the American baseball
      legend, <Answerize>{ANSWER}</Answerize> of course!
    </p>
    <p>
      * All of the data and information for this puzzle including the names of
      the songs appearing on each film soundtrack (with the exception of the
      film <i>Thunderstruck</i>) was sourced from the Internet Movie Database (IMDb).
    </p>
    <Appendix>
      <p>
        The movies referenced in each round (and their Australian connection) in
        order of appearance are:{' '}
      </p>
      <ol>
        <li>
          [<i>The</i>] <i>Adventures of Priscilla, Queen of the Desert</i> (Hugo Weaving lead
          actor &amp; filmed in Australia)
        </li>
        <li>
          <i>Barbie</i> (Margot Robbie lead actress&mdash;starred and produced)
        </li>
        <li>
          [<i>The</i>] <i>Castle</i> (Michael Caton lead actor &amp; filmed in Australia)
        </li>
        <li>
          <i>Crocodile Dundee II</i> (Paul Hogan lead actor &amp; partially filmed in
          Australia)
        </li>
        <li><i>Flight of the Phoenix</i> (Miranda Otto lead actress)</li>
        <li><i>Grease</i> (Olivia Newton-John lead actress)</li>
        <li>
          <i>Muriel's Wedding</i> (Toni Collette lead actor &amp; filmed in Australia)
        </li>
        <li>
          <i>Strictly Ballroom</i> (directed by Baz Luhrmann &amp; Filmed in Australia)
        </li>
        <li>
          <i>Thor: Love and Thunder</i> (Chris Hemsworth lead actor &amp; filmed in
          Australia)
        </li>
        <li>
          <i>Thunderstruck</i> (Sam Worthington lead actor &amp; filmed in Australia)
        </li>
        <li>
          <i>Young Einstein</i> (Yahoo Serious lead actor &amp; filmed in Australia)
        </li>
      </ol>
      <p>
        <b>
          <i>Track 1: "I'll Jumble for Ya"</i>
        </b>
      </p>
      <p>
        You need to correctly match nine song titles that have been divided in
        half and mixed up. Almost every song in this round appeared on the
        soundtrack for the 1994 film{' '}
        <i>The Adventures of Priscilla: Queen of the Desert</i>, which was
        filmed in Australia and stars Guy Pearce and Hugo Weaving.
      </p>
      <p>Songs:</p>
      <ol>
        <li>"Billy Don't Be a Hero" (Paper Lace)</li>
        <li>"Can't Help Lovin' That Man" (Trudy Richards)</li>
        <li><b>"Don't Change" (INXS)</b></li>
        <li>"Go West" (The Village People)</li>
        <li>"I Will Survive" (Gloria Gaynor)</li>
        <li>"Mamma Mia" (ABBA)</li>
        <li>"My Baby Loves Lovin'" (White Plains)</li>
        <li>"Shake Your Groove Thing" (Peaches &amp; Herb)</li>
        <li>"Take a Letter Maria" (R.B. Greaves)</li>
      </ol>
      <p>
        <b>
          <i>Track 2: "Look What They've Done to My Song Ma"</i>
        </b>
      </p>
      <p>
        You need to identity the songs played in a different style or with
        different instruments&mdash;in this instance, each of the songs has been
        recorded as a piano rendition. Each of the songs (except for one) in
        this round appeared in the 2023 film <b>Barbie</b> starring Margot
        Robbie.
      </p>
      <p>Songs:</p>
      <ol>
        <li>"Barbie World" (Nicki Minaj (Aqua))</li>
        <li>"Dance the Night" (Dua Lipa)</li>
        <li>"Forever and Again" (The Kid Laroi)</li>
        <li>"Girls Just Want to Have Fun" (Cyndi Lauper)</li>
        <li><b>"Heaven (Must Be There)" (Eurogliders)</b></li>
        <li>"Push" (Matchbox 20)</li>
        <li>"What Was I Made For" (Billie Eilish)</li>
      </ol>
      <p>
        <b>
          <i>Track 3: "Samplemania"</i>
        </b>
      </p>
      <p>
        In this round, eight songs have been edited into one 30-second clip.
        Most of the songs in this round appeared on the soundtrack for the 1997
        film <b>The Castle</b>, which was filmed in Australia and stars Michael
        Caton.
      </p>
      <p>Songs:</p>
      <ol>
        <li>"All Right Now" (Free)</li>
        <li>"Baby, Now That I've Found You" (Alison Krauss)</li>
        <li>"Cherish" (David Cassidy)</li>
        <li>"Hold Your Head Up" (Argent)</li>
        <li>"Love Will Keep Us Together" (Captain and Tennille)</li>
        <li>"Make It With You" (David Gates and Bread)</li>
        <li>"Tequila" (The Champs)</li>
        <li><b>"Weir" (Killing Heidi)</b></li>
      </ol>
      <p>
        <b>
          <i>Track 4: "Step Back in Time"</i>
        </b>
      </p>
      <p>
        Each of the songs appearing in this set of clues are played backwards
        and appeared in the soundtrack for the film <b>Crocodile Dundee II</b>,
        starring Paul Hogan.
      </p>
      <ol>
        <li><b>"Cool World" (Mondo Rock)</b></li>
        <li>"Real Wild Child (Wild One)" (Iggy Pop)</li>
        <li>"Walk Don't Run" (The Ventures)</li>
        <li>"[The] Wanderer" (Dion)</li>
      </ol>
      <p>
        <b>
          <i>Track 5: "Substitute"</i>
        </b>
      </p>
      <p>
        This round is an audio recording of a person (me) singing well-known
        songs, but substituting the lyrics with words from the first six
        chapters of <i>Harry Potter and the Half Blood Prince</i>. You have to identify
        the song being sung. Almost all of songs in this round appeared on the
        soundtrack for the 2004 film <b>Flight of the Phoenix</b>, which stars
        Australian actress Miranda Otto.
      </p>
      <p>Songs:</p>
      <ol>
        <li>"Angel" (Massive Attack)</li>
        <li>"Gimme Some Lovin" (Spencer Davis Group)</li>
        <li>"Hey Ya" (Outkast)</li>
        <li><b>"[The] Horses" (Daryl Braithwaite)</b></li>
        <li>"I've Been Everywhere" (Johnny Cash)</li>
        <li>"Night Train" (James Brown)</li>
      </ol>
      <p>
        <b>
          <i>Track 6: "All Shook Up"</i>
        </b>
      </p>
      <p>
        Each of the song titles in this round are disguised as clued anagrams.
        Almost all of these songs appeared in the musical <b>Grease</b> starring
        Australian actress and singer Olivia Newton-John.
      </p>
      <p>Songs:</p>
      <ol>
        <li>"Beauty School Dropout" (Frankie Avalon)</li>
        <li>"Greased Lightnin" (John Travolta &amp; Jeff Conaway)</li>
        <li>"Hopelessly Devoted To You" (Olivia Newton-John)</li>
        <li>"It's Raining on Prom Night" (Cindy Bullens)</li>
        <li>"Love Is a Many Splendored Thing" (The Four Aces)</li>
        <li>"There Are Worse Things I Could Do" (Stockard Channing)</li>
        <li>"Those Magic Changes" (Sha-na-na)</li>
        <li><b>"Tragedy" (The Bee Gees)</b></li>
        <li>"You're the One That I Want" (Olivia Newton-John)</li>
      </ol>
      <p>
        <b>
          <i>Track 7: "Tuberstylin'"</i>
        </b>
      </p>
      <p>
        For this round, you are expected to guess a song based on YouTube
        comments left on its music video. In the original TV series, if a team
        member does not guess it within a single comment, another comment
        providing a clearer hint is given. To simplify the puzzle, three clues
        were given for each song. Each of the songs in this round appeared in
        the 1994 Australian film <b>Muriel's Wedding</b> starring Toni Collette.
      </p>
      <p>Songs:</p>
      <ol>
        <li><b>"Better" (The Screaming Jets)</b></li>
        <li>"Dancing Queen" (ABBA)</li>
        <li>"I Go to Rio" (Peter Allen)</li>
        <li>"[The] Tide Is High" (Blondie)</li>
        <li>"Waterloo" (ABBA)</li>
        <li>"We've Only Just Begun" (The Carpenters (Williams &amp; Nichols))</li>
      </ol>
      <p>
        <b>
          <i>Track 8: "Something's Missing"</i>
        </b>
      </p>
      <p>
        This round consists of famous album covers with words or images that
        have been blanked out. The blacked out words/objects in the images spell
        out the song titles. Almost every song in this round appeared on the
        soundtrack for the 1992 film <b>Strictly Ballroom</b>, which was filmed
        in Australia, directed by Baz Luhrmann and starring Paul Mercurio.
      </p>
      <p>Songs:</p>
      <ol>
        <li>"Love Is in the Air" (John Paul Young)</li>
        <li>"Perhaps, Perhaps, Perhaps" (Doris Day)</li>
        <li><b>"Slipstream" (Sherbet)</b></li>
        <li>"Standing in the Rain" (John Paul Young)</li>
        <li>"Time After Time" (Cyndi Lauper)</li>
        <li>"Yesterdays Hero" (John Paul Young)</li>
      </ol>
      <p>
        <b>
          <i>Track 9: "Cover Versions"</i>
        </b>
      </p>
      <p>
        Solvers are provided a set of "cryptic" drawings that refer to a song
        title, and must identify the song title from the images. Almost every
        song in this round appeared on the soundtrack for the 2022 film{' '}
        <b>Thor: Love and Thunder</b>, which, believe it or not, was filmed in
        Australia and stars Chris Hemsworth.
      </p>
      <p>Songs:</p>
      <ol>
        <li><b>"Electric Blue" (Icehouse)</b></li>
        <li>"Family Affair" (Mary J Blige)</li>
        <li>"Goodies" (Ciara)</li>
        <li>"November Rain" (Guns N' Roses)</li>
        <li>"Only Time" (Enya)</li>
        <li>"Our Last Summer" (ABBA)</li>
        <li>"Paradise City" (Guns N' Roses)</li>
        <li>"Rainbow in the Dark" (Dio)</li>
        <li>"Sweet Child O' Mine" (Guns N' Roses)</li>
        <li>"Welcome to the Jungle" (Guns N' Roses)</li>
      </ol>
      <p>
        <b>
          <i>Track 10: "Counting the Beat"</i>
        </b>
      </p>
      <p>
        Ok, so you have gotten this far and are probably wondering why AC/DC
        hasn't made an appearance yet. Well… here you are provided with a list
        of numbers. Playing those numbered notes on a keyboard (assuming middle
        C as 1 and using the relative distances between all 12 notes) will play
        a recognisable tune, however most likely not with the same rhythm as the
        original song, which makes this an evil task (however it is still
        doable, as evidenced by the many episodes from the show where this was
        successful). Almost every song in this round appeared on the soundtrack
        for the 2004 film <b>Thunderstruck</b> which had an ensemble cast
        including Sam Worthington.
      </p>
      <ol>
        <li><b>"All the Lovers" (Kylie Minogue)</b></li>
        <li>"It's a Long Way to the Top" (AC/DC)</li>
        <li>"Run to Paradise" (The Choirboys)</li>
        <li>"Thunderstruck" (AC/DC)</li>
        <li>"Total Eclipse of the Heart" (Bonnie Tyler)</li>
      </ol>
      <p>
        <b>
          <i>Track 11: "Turning Japanese"</i>
        </b>
      </p>
      <p>
        These are song lyrics that have been translated into Japanese using an
        online web translator and then translated back into English using the
        same translator. Almost every song in this round appeared on the
        soundtrack for the 1988 film <b>Young Einstein</b>, which was filmed in
        Australia and stars Australian comedian Yahoo Serious.{' '}
      </p>
      <p>Songs:</p>
      <ol>
        <li>"At First Sight" (The Stems)</li>
        <li>"Dumb Things" (Paul Kelly)</li>
        <li>"Great Southern Land" (Icehouse)</li>
        <li>"I Hear Motion" (The Models)</li>
        <li>"[The] Music Goes Round My Head" (The Saints)</li>
        <li><b>"My Happiness" (Powderfinger)</b></li>
        <li>"Rock and Roll Music" (Mental as Anything (Chuck Berry))</li>
      </ol>
      <p>
        <b>
          <i>Track 12: "The Final Countdown"</i>
        </b>
      </p>
      <p>
        The final round of every <i>Spicks and Specks</i> episode is called The Final
        Countdown, and is usually just made up of generic music trivia
        questions, however, in this puzzle it takes a slightly different form.
        These are a list of clues to the identity of an Australia actor or
        actress that starred in the aforementioned films, and provide the puzzle
        ordering.
      </p>
      <p>
        Clue 1: Catherine Martin's four Oscars make her the winningest
        Australian at the Academy Awards&mdash;her awards are for Best Production
        Design and Best Costume Design. They directed all of the films for which
        Catherine Martin won the awards.
      </p>
      <p>
        <b>Answer: </b>
        <b>(Mark Anthony) "Baz" Luhrmann</b>
      </p>
      <p>
        NOTE: <i>Moulin Rouge!</i> and <i>The Great Gatsby</i>
      </p>
      <p>
        Clue 2: They are the last cast member credited in Wes Anderson's 2023
        film <i>Asteroid City</i>, listed simply as "actress/wife".
      </p>
      <p>
        <b>Answer: </b>
        <b>Margot (Elise) Robbie</b>
      </p>
      <p>
        Clue 3: They are the only singer to have five <i>Billboard</i> Hot 100
        #1 hits <i>and</i> a grandfather with a Nobel Prize.
      </p>
      <p>
        <b>Answer: </b>
        <b>(Dame) Olivia Newton-John</b>
      </p>
      <p>
        NOTE:  Her mother's father, Max Born, co-won the 1954 Physics prize...
        her biggest hit (10 weeks at #1—more than any other '80s song) was
        coincidentally(?) "Physical"
      </p>
      <p>
        Clue 4: They are the seventh Academy Award nominee (to date) to complete
        the set that also features the following people.
      </p>
      <p>Frank Capra (1939)</p>
      <p>David Niven (1959)</p>
      <p>Michael Caine (1973)</p>
      <p>Walter Matthau (1976)</p>
      <p>James Franco (2011)</p>
      <p>Seth MacFarlane (2013)</p>
      <p>
        <b>Answer: </b>
        <b>Paul Hogan</b>
      </p>
      <p>
        NOTE: People who simultaneously hosted the Oscars <i>and</i> were a
        nominee (Niven is the only one to have <i>won</i>). For those
        interested, here is a clip of Paul Hogan from the night of the 1986
        Academy Awards:{' '}
        <a href="https://youtu.be/NtxZeDYuEZI?si=8wNBMEpCKBGcs_GU">
          https://youtu.be/NtxZeDYuEZI?si=8wNBMEpCKBGcs_GU
        </a>
        .
      </p>
      <p>
        Clue 5: They portrayed the character who once set the record for
        youngest first officer in Starfleet, and held it until the 2250s, when
        one of their sons took the record.
      </p>
      <p>
        <b>Answer: </b>
        <b>Chris(topher) Hemsworth</b>
      </p>
      <p>
        NOTE: George Samuel Kirk (father of James T.) appeared in 2009's{' '}
        <i>Star Trek</i>
      </p>
      <p>
        Clue 6: They starred in the video for the fourth single from the fourth
        studio album by the most successful band whose name comes from the
        fourth-published book in a series about the four Pevensie children.
      </p>
      <p>
        <b>Answer:</b> <b>Guy (Edward) Pearce</b>
      </p>
      <p>
        NOTE: "Across the Night" from <i>Diorama</i> by Silverchair;{' '}
        <i>The Silver Chair</i> is the fourth novel in{' '}
        <i>The Chronicles of Narnia</i> series
      </p>
      <p>
        Clue 7: They sued the internet company once known as Jerry and David's
        Guide to the World Wide Web in 2001 because of its (and their) current
        name.
      </p>
      <p>
        <b>Answer: </b>
        <b>Yahoo Serious</b>
      </p>
      <p>NOTE: took name in 1980</p>
      <p>
        Clue 8: They played Tom Cruise's ex-wife and Harrison Ford's neighbor,
        but are probably most famous for being Karl Urban's sister.
      </p>
      <p>
        <b>Answer: </b>
        <b>Miranda Otto</b>
      </p>
      <p>
        NOTE: <i>War of the Worlds</i>, <i>What Lies Beneath</i>, and{' '}
        <i>The Lord of the Rings: The Two Towers</i>/<i>The Return of the King</i>
        {' '}(respectively)
      </p>
      <p>
        Clue 9: They won an Outstanding Lead Actress in a Comedy Series Emmy for
        a show in which they played Alice, Buck, and the title character—in
        addition to several others.
      </p>
      <p>
        <b>Answer: </b>
        <b>Toni Collette (née Collett)</b>
      </p>
      <p>
        NOTE: <i>The United States of Tara</i>
      </p>
      <p>
        Clue 10: Their highest-grossing film (by far) is 2001's{' '}
        <i>The Animal</i>, which features them as mad scientist Dr. Wilder, who
        saves Rob Schnieder's Marvin Mange by giving him non-human body parts.
      </p>
      <p>
        <b>Answer: </b>
        <b>Michael Caton</b>
      </p>
      <p>
        Clue 11: They, for one 2009 movie, received both an MTV Movie Award
        nomination for Best Kiss <i>and</i> a nomination for Best Fight (shared
        with two different castmates).
      </p>
      <p>
        <b>Answer: </b>
        <b>Sam(uel Henry John) Worthington</b>
      </p>
      <p>
        NOTE: <i>Avatar</i>; Zoë Saldana and Stephen Lang, respectively.
      </p>
      <p>
        You may have missed it, but even the name of the playlist itself
        provides subtle clues to solving this puzzle. I will let you go back and
        try to work out what they are on your own. Fun fact&mdash;each of the round
        names from the show (and this puzzle) are derived from the names of
        songs (
        <a href="https://en.wikipedia.org/wiki/Spicks_and_Specks_(TV_series)">
          <i>Spick and Specks</i>
        </a>
        ).
      </p>
    </Appendix>
    <AuthorsNotes>
      <p>
        This puzzle has been designed as a homage to the show <i>Spicks and Specks</i>,
        which formed part of my childhood, and that my family would (and still
        continues to) watch most weeknights after dinner. So if you like music
        of any kind, and you like comedy, and you like trivia, and you like
        Aussies (in fact they have guests on the show from all over the world)…
        well… at least give it a look!
      </p>
      <p>
        Due to the sheer size of this puzzle, I enlisted the help of Todd
        Becker, who was responsible for the brilliant piano renditions of the
        songs on the Barbie soundtrack, and Jeremy Horwitz who kindly did the
        research and wrote the trivia questions for The Final Countdown. JJ
        mainly existed in a moral-support capacity, but we had a ton of fun
        listening to Aussie music and looking at Aussie films throughout the
        writing process.
      </p>
      <p>
        I really wanted to use the <i>Iron Man 2</i> soundtrack at some point because
        it's AC/DC and it's awesome, but I went with <i>Thunderstruck</i> instead
        because it was more thematic. Maybe I will write a sequel puzzle ;)
      </p>
      <p>
        Finally, I would like to thank our awesome editors for pretty much
        letting us have free reign on this puzzle to do whatever we wanted with
        little constraints, while also providing great suggestions (Bella came
        up with the extraction idea and Paul the playlist title).
      </p>
      <p>
        P.S.:{' '}
        <a href="https://www.youtube.com/watch?v=LaWrkBo0t1o">
          https://www.youtube.com/watch?v=LaWrkBo0t1o
        </a>
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>
        All the album covers appearing in Something's Missing fall under "Fair
        use" and appear courtesy of the respective artists/record lables.
      </p>
      <p>Thor (Chris Hemsworth) taken from Thor: The Dark World - fair use</p>
      <p>
        Family Silhouette - Eric Ward,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/2.0">
          CC BY-SA 2.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>
        Gloucestershire Vintage &amp; Country Extravaganza - fairground by Chris
        Allen,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/2.0">
          CC BY-SA 2.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>
        Sir John Rankine Goody - Egsw,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>Bob Goody - Jack1956 at en.wikipedia, CC0, via Wikimedia Commons</p>
      <p>
        Nick Goody - Erik Drost,{' '}
        <a href="https://creativecommons.org/licenses/by/2.0">
          CC BY 2.0
        </a>,
        via Wikimedia Commons
      </p>
      <p>Citrine - Parent Géry, Public domain, via Wikimedia Commons</p>
      <p>
        Blue Topaz - MAURO CATEB from Brazil,{' '}
        <a href="https://creativecommons.org/licenses/by/2.0">
          CC BY 2.0
        </a>,
        via Wikimedia Commons
      </p>
      <p>
        Deep Space Galaxies - NASA, ESA, S. Beckwith (STScI) and the HUDF Team,
        Public domain, via Wikimedia Commons
      </p>
      <p>
        Wall Clock - Sridhar Rao,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>
        Hourglass - User:S Sepp,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0">
          CC BY-SA 3.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>Glass - CC0, Public Domain, via Wikimedia Commons</p>
      <p>
        Seasons - J.hagelüken,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0">
          CC BY-SA 3.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>
        Flag of Paradise, California - Oren neu dag,{' '}
        <a href="https://creativecommons.org/publicdomain/zero/1.0">
          CC0
        </a>,
        Public domain, via
        Wikimedia Commons
      </p>
      <p>
        Manhattan (New York City) Skyline - Fred Hsu on en.wikipedia,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>,
        via Wikimedia Commons
      </p>
      <p>Sweet (Lollipop) - Evan-Amos, CC0, via Wikimedia Commons</p>
      <p>
        Child - Dmitry Makeev,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>,
        via Wikimedia Commons
      </p>
      <p>
        Gold Mine - Calistemon,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>
        Welcoming Gesture - Kazuto kirigayaa,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>,
        via Wikimedia
        Commons
      </p>
      <p>
        Rainforest/Jungle - Bild von bere von awstburg auf Pixabay
        https://pixabay.com/de/photos/die-dschungel-von-chiapas-1865639/,{' '}
        <a href="https://creativecommons.org/publicdomain/zero/1.0">
          CC0
        </a>,
        via Wikimedia Commons
      </p>
    </Attributions>
    <style jsx global>{`
      .table-1 td:nth-child(4) {
        text-align: center;
      }
      .table-1 td:nth-child(5) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
