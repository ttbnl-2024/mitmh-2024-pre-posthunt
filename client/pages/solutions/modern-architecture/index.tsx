import { FC } from 'react';

import Appendix from 'components/appendix';
import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/modern-architecture/0.png';
import image1 from 'assets/solutions/modern-architecture/1.png';
import image2 from 'assets/solutions/modern-architecture/2.png';
import image3 from 'assets/solutions/modern-architecture/3.png';
import image4 from 'assets/solutions/modern-architecture/4.png';
import image5 from 'assets/solutions/modern-architecture/5.png';
import image6 from 'assets/solutions/modern-architecture/6.png';
import image7 from 'assets/solutions/modern-architecture/7.png';
import image8 from 'assets/solutions/modern-architecture/8.png';
import image9 from 'assets/solutions/modern-architecture/9.png';

const SLUG = 'modern-architecture';
const ANSWER = `FLAMEN DIALIS`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      This is a puzzle comprising four mini-puzzles, the answers to which are
      given below:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Puzzle</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Louvre Pyramid</td>
          <td>
            <Clue>YELLOW CERAMIC</Clue>
          </td>
        </tr>
        <tr>
          <td>John F. Kennedy Presidential Library</td>
          <td>
            <Clue>DARMSTADT</Clue>
          </td>
        </tr>
        <tr>
          <td>National Gallery of Art</td>
          <td>
            <Clue>LITTLE SAIL</Clue>
          </td>
        </tr>
        <tr>
          <td>Mesa Laboratory</td>
          <td>
            <Clue>UPPERMOST</Clue>
          </td>
        </tr>
      </tbody>
    </Table>

    <p>
      Using these answers requires noting that all four buildings used as titles
      for the minipuzzles were designed by architect and MIT alumnus I. M. Pei.
      There's also an indication of this puzzle requiring something present on
      campus.
    </p>
    <p>
      MIT's campus has exactly four buildings designed by I. M. Pei, and each
      answer denotes a specific location in one of them; at each location is a
      clue that can then be applied to the respective puzzle to extract a second
      answer.
    </p>
    <p>
      These second answers, in minipuzzle order, read{' '}
      <Clue>JULIUS CAESAR'S FIRST CANDIDACY</Clue>. Before his many other
      offices, Julius Caesar was nominated for the position of{' '}
      <Answerize>{ANSWER}</Answerize> at age 17 (though whether he actually took
      up the office is the subject of much scholarly debate
      <sup>
        <a id="ref1" href="#ftnt1">
          [1]
        </a>
      </sup>
      ).
    </p>
    <hr className="my-4" />
    <h3>Louvre Pyramid</h3>
    <p>
      This is a triangular crossword, done on the panels forming the front of
      the Louvre:
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" className="mx-auto" />
    </p>
    <p>
      The blue sections can be arranged to spell <Clue>YELLOW CERAMIC</Clue>.
    </p>
    <p>
      In the southwest corner of the Landau Building is <i>Dispersed Events</i>,
      a series of seven ceramic panels; the uppermost, on the fifth floor, is
      primarily yellow. Next to it is the following clue:
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" className="mx-auto" />
    </p>
    <p>
      Landau is famously in the shape of a 30-60-90 triangle. On the original
      crossword, there are six examples of 30-60-90 triangles with vertices at
      the same letter (ranging from A to F), oriented in this particular manner
      with the 30 vertex at the top. From each, extract the letter that
      completes an equilateral triangle; sort by the vertex letter for the
      answer <Clue>JULIUS</Clue>.
    </p>
    <p>
      <SheetableImage alt="" src={image2} title="" className="mx-auto" />
    </p>
    <hr className="my-4" />
    <h3>John F. Kennedy Presidential Library</h3>
    <p>
      This section is a retrograde analysis on the board game{' '}
      <i>Twilight Struggle</i>, as clued by the flavortext (the line from
      Kennedy's inaugural speech directly preceding that phrase), a picture of
      the initial board state, and several references to fictional Cold War-era
      events and people. The titles, text, and images of the articles detail
      specific changes to the board state; we must deduce the sequence of twelve
      cards that would result in these changes.
      <sup>
        <a href="#ftnt2" id="ref2">
          [2]
        </a>
      </sup>{' '}
      The cards are (almost) uniquely deducible from the current state of the
      board and the effects they have on the board, though some headlines and
      subtitles also subtly clue the card's historical equivalent.
    </p>
    <p>
      While there are four card events that can activate the event of another
      card, there's almost no space for a Missile Envy play given which events
      happen when (as Missile Envy forces the enemy to take 2 Operations on
      their next action round), and Grain Sales and Star Wars are shown atop the
      discard and removed piles. Only Five Year Plan is available to activate
      the play of another card—which it does, on Panama Canal.
    </p>
    <p>The correct sequence is as follows:</p>
    <Table className="text-[90%] struggle-table">
      <thead>
        <tr>
          <th>Round</th>
          <th>Card</th>
          <th>Notes:</th>
          <th>Element</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Headline, USSR
            <br />
            <br />
            "POSTCOLONIAL TURMOIL SPILLS <b>I</b>NTO MOZAMBIQUE"
          </td>
          <td>Red Scare/Purge [4N] (31)</td>
          <td>
            This is mentioned only indirectly; instead, this can be deduced from
            various discrepancies in US actions, the most notable of which is
            the failed US coup in Indonesia on AR3. (Its number is indexed into
            the other headline event's headline.)
            <br />
            <br />
            Ordinarily, a 3-Op coup on a 1-stability country would be guaranteed
            to remove at least two influence. For it to have failed entirely, it
            must have rolled a 1 with at least a -2 modifier, which must be from
            Red Scare/Purge and SALT.{' '}
            <ul>
              <li>
                The number of Ops a card provides can be decreased only by the
                effects of Red Scare/Purge. While this can be played multiple
                times through the vagaries of SALT Negotiations, no such
                opportunity presents itself; therefore it's played at most once.
              </li>
              <li>
                Maluses to coups are only given by two cards: Latin American
                Death Squads (which only applies to Latin America) and SALT
                Negotiations.
              </li>
            </ul>
            Since SALT increases DEFCON (which contradicts the text of the
            headline stating that DEFCON is 2 at this point), Red Scare/Purge
            slots into the USSR headline.
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="bg-[#ffe599]">
            Headline, US
            <br />
            <br />
            "POSTCOLONIAL <b>T</b>URMOIL SPILLS INTO MOZAMBIQUE"
          </td>
          <td className="bg-[#ffe599]">Olympic Games [2N] (20)</td>
          <td className="bg-[#ffe599]">
            DEFCON drops to 2 in the headline, but the US also coups
            non-battleground Southeast African States (Mozambique), which would
            not cause a DEFCON drop. The card thus provides at least 7 + 2 × 1 -
            6 = 3 OPs, but due to the Red Scare this is forced to be 4 OPs.
            There are several scenarios that can give the US 4 OPs in the
            headline:
            <ul>
              <li>ABM Treaty raises DEFCON.</li>
              <li>
                KAL-007 lowers DEFCON, but the event's OPs cannot be used on
                coups, despite US control of South Korea.
              </li>
              <li>
                The US could have taken and played We Will Bury You using Grain
                Sales (dropping DEFCON and getting its 4 OPs). This causes a
                contradiction later on in the game when the US declares victory,
                as the USSR would gain three points from this (not to mention
                that Grain Sales is shown on top of the discard pile at the
                start of the turn).
              </li>
            </ul>
            The only explanation remaining is an Olympic Games boycott. The US
            gains 3 Military Operations.
          </td>
          <td className="bg-[#ffe599]">Ca</td>
        </tr>
        <tr>
          <td>
            AR1, USSR
            <br />
            <br />
            "BA'ATHISTS <b>S</b>UPPLANT IRAQI GOVERNMENT"
          </td>
          <td>Iran-Iraq War [2N] (102)</td>
          <td>
            Iraq converts its 3 US influence to USSR influence. This cannot be a
            standard Operation, since the change in influence exceeds the
            maximum amount a coup is able to change it by (4 + 6 – 2 × 3 = 4
            &lt; 6). Since the USSR also added influence, this cannot be the
            result of Muslim Revolution (not to mention that Muslim Revolution
            would boot the US from two countries) or Marine Barracks Bombing
            (not to mention it can only remove two influence outside of
            Lebanon).
            <br />
            <br />
            The USSR gains 2 VPs from winning the war and 2 Military Operations.
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            AR1, US
            <br />
            <br />
            "AFRICAN <b>D</b>EMOCRATIC MOVEMENTS ON THE RISE?"
          </td>
          <td>Colonial Rear Guards [2A] (63)</td>
          <td>
            The US adds one influence each to the three African battlegrounds it
            doesn't own… and one in Indonesia. This would otherwise require 8
            OPs' worth of Influence placement, and this is the only event that
            allows such a placement.
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="bg-[#ffe599]">
            AR2, USSR
            <br />
            <br />
            "US ARMAMENT <b>A</b>LIENATES EUROPEAN ALLIES"
          </td>
          <td className="bg-[#ffe599]">Pershing II Deployed [3R] (99)</td>
          <td className="bg-[#ffe599]">
            One US influence is removed from each of the three Western European
            battlegrounds (with no other changes to the board). Since DEFCON is
            2 and West Germany had zero Soviet Influence to begin with, this is
            not the result of a standard coup or realignment (see the{' '}
            <a href="https://s3-us-west-2.amazonaws.com/gmtwebsiteassets/nnts/FAQv5.pdf">
              FAQ
            </a>
            ); it must be an event (with associated OPs to repair some of the
            damage). There are a few cards that could, directly or indirectly,
            remove US influence from Western Europe in this manner:
            <ul>
              <li>
                The Iron Lady is in effect, which stops Socialist Governments
                from being played. (This is shown as a marker on the board next
                to the UK.)
              </li>
              <li>
                The US could have accidentally realigned the influence out with
                Tear Down This Wall (the sole exception to the DEFCON 2
                restriction on Europe); however, it still doesn't place the USSR
                influence required to perform the realignments (not to mention
                it gives the US influence in East Germany that must be realigned
                out first).
              </li>
            </ul>
            The only other option is Pershing II Deployed. Pershing also grants
            the USSR 1 much-needed VP of reprieve.
          </td>
          <td className="bg-[#ffe599]">Es</td>
        </tr>
        <tr>
          <td>
            AR2, US
            <br />
            <br />"<b>R</b>EDS DOMINATE CHILEAN ELECTIONS"
          </td>
          <td>Allende [1R] (54)</td>
          <td>
            The USSR gains two influence in a Chile it already controls, while
            the US uses one Op to repair France.
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            AR3, USSR
            <br />
            <br />
            "COSTA RICA <b>M</b>OVES TOWARDS SOCIALISM"
          </td>
          <td>
            Five Year Plan [3A] (5), playing Panama Canal Returned [1A] (70)
          </td>
          <td>
            The USSR gains two influence in Costa Rica, while the US gains 1
            each in Panama and Venezuela. There are three US events that could
            potentially add spare influence to Central and South America; both
            Panama and Venezuela already have US Influence, which means it can't
            be Puppet Governments. However, both Panama Canal Returned and OAS
            Founded have 1 OP, and the USSR could not have played Brezhnev
            Doctrine to bump these up to 2. Therefore, the USSR must have played
            Five Year Plan, which plays any US event it draws out of the USSR's
            hand but grants the USSR 3 Ops to respond instead of the event's
            normal value.
            <br />
            <br />
            However, the USSR could also not have directly placed influence in
            Costa Rica, having no extant influence in any of its neighbors. As
            such, this is a coup (for 6 + 3 – 3 × 2=3 influence), meaning Costa
            Rica also had an influence added to it by the event. This is enough
            to reduce the card pull to Panama Canal Returned (although the
            actual card play for extraction purposes is Five Year Plan).
            <br />
            <br />
            The USSR gains 3 Military Operations.
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="bg-[#ffe599]">
            AR3, US
            <br />
            <br />"<b>S</b>KYLAB LAUNCH SUCCESSFUL, DEFYING ALL ODDS"
          </td>
          <td className="bg-[#ffe599]">Captured Nazi Scientist [1N] (18)</td>
          <td className="bg-[#ffe599]">
            The US advances in the Space Race. While this normally could be done
            by spacing any card that satisfies the OP count, Space Station has a
            4 OP requirement; the Red Scare makes this impossible to satisfy, so
            this has to be an event. Only two events directly affect the Space
            Race track, and One Small Step requires the USSR to be ahead (they
            are tied at 7-7).
            <br />
            <br />
            The US gets 2 VP from achieving Space Station.
          </td>
          <td className="bg-[#ffe599]">Ar</td>
        </tr>
        <tr>
          <td>
            AR4, USSR
            <br />
            <br />
            "DISARMAMENT AGREEMENT <b>T</b>HAWS TENSIONS"
          </td>
          <td>SALT Negotiations [3N] (45)</td>
          <td>
            DEFCON suddenly rises to 4, which allows the attempted coup on
            Indonesia on the next action round. There are several cards that can
            increase DEFCON by more than one, but we can reduce it down to SALT
            due to the malus it provides on that coup (see USSR headline). The
            card that the USSR draws is not relevant.
            <sup>
              <a href="#ftnt3" id="ref3">
                [3]
              </a>
            </sup>
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="bg-[#ffe599]">
            AR4, US
            <br />
            <br />
            "EASTERN EUROPEAN <b>A</b>UTONOMY CURTAILED"
          </td>
          <td className="bg-[#ffe599]">Warsaw Pact Formed [3R] (16)</td>
          <td className="bg-[#ffe599]">
            The USSR instantly wipes Eastern Europe of US influence (a situation
            only possible under this card). In exchange, the US launches a 3-OP
            coup, but it's treated as a 1-OP coup due to Red Scare and the SALT
            malus and thus fails to affect 1-stability Indonesia after rolling a
            1. The US still gets 2 Military Operations, though, since SALT's
            modifier only affects the die roll.
          </td>
          <td className="bg-[#ffe599]">S</td>
        </tr>
        <tr>
          <td>
            AR5, USSR
            <br />
            <br />
            "MEXICO <b>D</b>EFAULTS; TANKING GOVERNMENT APPROVAL"
          </td>
          <td>Latin American Debt Crisis [2R] (95)</td>
          <td>
            Chile gets 5 USSR Influence and Venezuela gets 1. On the current
            board, this would require 7 OPs' worth of influence placements, so
            this is an event; this is the only card that allows this set of
            influence placements.
            <br />
            <br />
            Unfortunately, since the USSR played Panama Canal earlier, this is
            not enough to break control of Venezuela, which means…
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            AR5, US
            <br />
            <br />
            "NEW FLAG <b>T</b>OPS KREMLIN"
          </td>
          <td>Alliance for Progress [3A] (78)</td>
          <td>
            The game ends on the automatic 20 Victory Point condition, since the
            cold war obviously did not turn hot (and if it did it would be a
            USSR victory on this action round), no one controls Europe, and
            Wargames only activates on DEFCON 2. If you've been counting victory
            points from the start of the game, you'd know the US is currently at
            +17 (18 – 2 (Iran-Iraq) – 1 (Pershing II) + 2 (CNS)). The current
            state of the world, though, doesn't scrounge up enough points on any
            of the scoring cards to make a 3-point differential. There are
            several sources of VP, and of the ones that <i>might</i>
            provide at least three US VP:
            <ul>
              <li>
                Duck and Cover is out, since at DEFCON 4 it would only provide 5
                – 3 = 2 VPs.
              </li>
              <li>
                Both players are at 5 on the Military Operations track, so it's
                not Arms Race.
              </li>
              <li>Libya is 0/4, so Reagan Bombs Libya is only 2 VPs.</li>
            </ul>
            The only one that works is Alliance for Progress, which on the
            current board scores 3 VPs, enough to win the game for the US. (This
            could have been triggered by Missile Envy, but in this case I
            personally would consider the taken card as the played card, since
            the other player is forced to play Missile Envy for the Ops. Note
            that it could also have been triggered by Five Year Plan with enough
            US luck, but Five Year Plan was used earlier in the turn.)
          </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Each card has an Operation Point value <i>n</i>. As indicated by the large
      letters starting the "text" of each article, taking the first letter of
      the <i>n</i>th word in the headline title for that day of the newspaper
      yields the clue <Clue>ITS DARMSTADT</Clue>.
    </p>
    <p>
      At the southern end of the Dreyfus Building is <i>Abstract Periodicity</i>
      , a glass periodic table. Near the square representing darmstadtium is the
      following hint:
    </p>
    <p>
      <SheetableImage alt="" src={image3} title="" className="mx-auto" />
    </p>
    <p>
      <i>Twilight Struggle</i> has 110 cards in total, each one labelled with an
      ID number. Since 110 is the atomic number for darmstadtium, the given hint
      clues translating the ID numbers of the four cards played on the specified
      rounds (highlighted in yellow in the table above) into element symbols;
      this reveals the answer <Clue>CAESARS</Clue>.{' '}
    </p>
    <hr className="my-4" />
    <h3>National Gallery of Art</h3>
    <p>
      The puzzle is presented as sixteen square images; these can be assembled
      into one larger image by matching lines and rectangles to each other.
    </p>
    <p>
      Hidden within the design are maritime signal flags; these spell{' '}
      <Clue>LITTLE SAIL</Clue>.
    </p>
    <p>
      <SheetableImage alt="" src={image4} title="" className="mx-auto" />
    </p>
    <p>
      The first floor of the Wiesner Building is home to a miniature copy of{' '}
      <i>La Grande Voile</i> ("The Big Sail"). Going there reveals the following
      hint taped onto the nearby glass:
    </p>
    <p>
      <SheetableImage alt="" src={image5} title="" className="mx-auto" />
    </p>
    <p>
      The arrow points at a part of <i>Here–There</i> in the bottom right, where
      one can find a square matching the corresponding edges.{' '}
    </p>
    <p>
      Every small square in the puzzle corresponds to a four-square section of{' '}
      <i>Here–There</i>, found by matching the colors on the edges and middle
      (in the orientation of the final assembly). The squares found are
      highlighted in the below image:{' '}
    </p>
    <p>
      <SheetableImage alt="" src={image6} title="" />
    </p>
    <p>
      As indicated by the six-dot grid in the center of the arrow, this is
      Braille for <Clue>FIRST</Clue>, the answer to this subpuzzle.
    </p>
    <h2>Mesa Laboratory</h2>
    <p>
      This is a description of several gases, each name accompanied by a
      specific mass. The flavortext gives a temperature and volume. Using the{' '}
      <a href="https://en.wikipedia.org/wiki/Ideal_gas_law">ideal gas law</a> to
      solve for pressure reveals that each one is at (a value very close to) an
      integer number of atmospheres of pressure (as befitting the home of the
      National Center for Atmospheric Research). Indexing into the alphabet
      extracts <Clue>UPPERMOST</Clue>.
    </p>
    <p>
      The Green Building (the tallest building on campus, and also home to a
      department dealing in the atmospheric sciences) has 18 floors. Searching
      the highest floor reveals the following two images next to the center
      elevator door:
    </p>
    <p>
      <SheetableImage alt="" src={image7} title="" className="mx-auto" />
      <SheetableImage alt="" src={image8} title="" className="mx-auto" />
    </p>
    <p>
      The first image is the Green Building elevator in the Projection Device
      from the 2021 MIT Mystery Hunt (along with a representation of I. M. Pei).
      The elevator was operated by a colored keypad, in an arrangement
      reminiscent of a phone's keypad:
    </p>
    <p>
      <SheetableImage
        alt=""
        src={image9}
        title=""
        className="mx-auto w-[300px]"
      />
    </p>
    <p>
      Taking another look at the gases used in the puzzle, one can note that
      most of them bear a prominent color. As indicated by the second image,
      this can be translated into a T9 input (226343229), which translates to
      the answer <Clue>CANDIDACY</Clue>. (The image disambiguates some more
      troublesome points—the orange-brown color of some gases is treated as
      orange, and colorless is treated as white.)
    </p>
    <Table>
      <thead>
        <tr>
          <th>Gas</th>
          <th>P = nRT/V</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nitrogen dioxide (NO2)</td>
          <td>21 atm</td>
          <td>orange(-brown)</td>
        </tr>
        <tr>
          <td>Bromine (Br2)</td>
          <td>16 atm</td>
          <td>orange(-brown)</td>
        </tr>
        <tr>
          <td>Iodine (I2)</td>
          <td>16 atm</td>
          <td>purple/violet</td>
        </tr>
        <tr>
          <td>Xenon hexafluoride (XeF6)</td>
          <td>5 atm</td>
          <td>yellow</td>
        </tr>
        <tr>
          <td>Chlorine (Cl2)</td>
          <td>18 atm</td>
          <td>green</td>
        </tr>
        <tr>
          <td>Diimide (N2H2)</td>
          <td>13 atm</td>
          <td>yellow</td>
        </tr>
        <tr>
          <td>Nitrogen dioxide (NO2)</td>
          <td>15 atm</td>
          <td>orange(-brown)</td>
        </tr>
        <tr>
          <td>Bromine (Br2)</td>
          <td>19 atm</td>
          <td>orange(-brown)</td>
        </tr>
        <tr>
          <td>Hydrogen (H2)</td>
          <td>20 atm</td>
          <td>colorless</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <AuthorsNotes>
      <p>
        <i>This</i> is how you write a puzzle about Twilight Struggle.
      </p>
    </AuthorsNotes>
    <Attributions>
      <p>
        Images of the Twilight Struggle{' '}
        <a href="https://s3-us-west-2.amazonaws.com/gmtwebsiteassets/nnts/TSMap11.jpg">
          board
        </a>{' '}
        and cards used in the JFK minipuzzle © Mark Simonitch. Images produced
        via the game's <a href="https://vassalengine.org/">VASSAL</a> Module.
        Fair use.
      </p>
      <p>
        Satellite image of the Landau Building © Airbus, CNES / Airbus,
        MassGIS, Commonwealth of Massachusetts EOEA, Maxar Technologies,
        Sanborn, USDA/FPAC/GEO. Obtained from{' '}
        <a href="https://www.google.com/maps/@42.3609778,-71.0890689,290m/data=!3m1!1e3?entry=ttu">
          Google Maps
        </a>
        . Fair use.
      </p>
      <p>
        Images used in the in-person component of the Green Building are from
        the{' '}
        <a href="https://puzzles.mit.edu/puzzle/www/2021/projection_device.html">
          Projection Device
        </a>
        , © <a href="https://puzzles.mit.edu/2021/">Mystery Hunt 2021</a>. Fair
        use.
      </p>
    </Attributions>
    <Appendix>
      <div>
        <p>
          <a href="#ref1" id="ftnt1">
            [1]
          </a>{' '}
          Tacitus, <i>Annals</i>{' '}
          <a href="https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Annals/3D*.html#58">
            III.58
          </a>{' '}
          mentions the seat was empty between the Sulla conflicts and Tiberius.
          Suetonius, <i>Iul</i>. 1.1 mentions his nomination to Flamen;
          Plutarch, <i>Caes.</i> 1.3 mentions him as a candidate for the
          priesthood.
        </p>
      </div>
      <div>
        <p>
          <a href="#ref2" id="ftnt2">
            [2]
          </a>{' '}
          This is NOT an optimal game of <i>Twilight Struggle</i>, for what I
          hope are obvious reasons.{' '}
        </p>
      </div>
      <div>
        <p>
          <a href="#ref3" id="ftnt3">
            [3]
          </a>{' '}
          In my personal headcanon they grabbed Arms Race intending to
          immediately use it, which is what triggers the US to immediately
          launch a coup.
        </p>
      </div>
    </Appendix>
    <style jsx global>{`
      .struggle-table td {
        vertical-align: top;
      }
      .struggle-table td:nth-child(4) {
        font-weight: bold;
        text-align: center;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
