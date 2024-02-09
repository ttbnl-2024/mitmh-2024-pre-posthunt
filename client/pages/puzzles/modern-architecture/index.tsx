import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/modern-architecture/0.png';
import image1Large from 'assets/puzzles/modern-architecture/1-large.png';
import image1 from 'assets/puzzles/modern-architecture/1.png';
import image2 from 'assets/puzzles/modern-architecture/2.png';
import image3 from 'assets/puzzles/modern-architecture/3.png';
import image4 from 'assets/puzzles/modern-architecture/4.png';
import image5 from 'assets/puzzles/modern-architecture/5.png';
import image6 from 'assets/puzzles/modern-architecture/6.png';
import image7 from 'assets/puzzles/modern-architecture/7.png';
import image8 from 'assets/puzzles/modern-architecture/8.png';
import image9 from 'assets/puzzles/modern-architecture/9.png';
import image10 from 'assets/puzzles/modern-architecture/10.png';
import image11 from 'assets/puzzles/modern-architecture/11.png';
import image12 from 'assets/puzzles/modern-architecture/12.png';
import image13 from 'assets/puzzles/modern-architecture/13.png';
import image14 from 'assets/puzzles/modern-architecture/14.png';
import image15 from 'assets/puzzles/modern-architecture/15.png';
import image16 from 'assets/puzzles/modern-architecture/16.png';
import image17 from 'assets/puzzles/modern-architecture/17.png';
import image18 from 'assets/puzzles/modern-architecture/18.png';
import image19 from 'assets/puzzles/modern-architecture/19.png';
import image20 from 'assets/puzzles/modern-architecture/20.png';
import image21 from 'assets/puzzles/modern-architecture/21.png';
import image22 from 'assets/puzzles/modern-architecture/22.png';
import image23 from 'assets/puzzles/modern-architecture/23.png';
import image24 from 'assets/puzzles/modern-architecture/24.png';

const SLUG = 'modern-architecture';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Nashville might be home to a replica of the Parthenon, but Hermes
          seeks more modern inspirations for his latest projects.
        </FlavorText>
        <InfoIcon>This puzzle requires on-site presence.</InfoIcon>
        <hr className="my-4" />
        <h3>Louvre Pyramid</h3>
        <p>
          <SheetableImage
            alt="A triangular grid, with highlighted cells and numbers."
            src={image0}
            title=""
          />
        </p>
        <p>
          <b>Across clues (straight across)</b>
        </p>
        <ol>
          <li value={13}>Prominent lifestyle magazine</li>
          <li value={12}>
            Former Eastern European territory under Russian rule(abbr.)
          </li>
          <li value={11}>Like 101-level classes</li>
          <li value={10}>The A in IPA / Get out of bed</li>
          <li value={9}>
            Flo Rida single with the lyric "Champagne buckets still got two
            tears in it" (2 wds.) / Atom with extra electrons
          </li>
          <li value={8}>
            Not using vehicular transport (2 wds.) / Arrived at a conclusion
          </li>
          <li value={7}>
            "Before", before a word / Amazon smart device / Weekday bussing
            destination
          </li>
          <li value={6}>
            Bullied into self-disbelief / In the style of (2 wds.) / Purged
            (of), as the junk in one's garage
          </li>
          <li value={5}>
            Obligations / Building wing which may share its name with its shape
            / Mercutio's queen / Cap for a military officer
          </li>
          <li value={4}>
            Puppeteered TV alien / Near-imperceptible amount / Parties, to a
            Parisian / Provides to theaters or music retailers
          </li>
          <li value={3}>
            Architectural pilaster / Gender-integrated, as a college / Genre
            related to hip hop / Rhyme scheme for a quatrain / She played Nakia
            in Black Panther
          </li>
          <li value={2}>
            Played to a tie / College which shares its name with a collar /
            Eternal (literally, or figuratively) / Second of three like-named
            characters in a 2000's Cartoon Network show / 1994 Jodie Foster film
          </li>
          <li value={1}>
            Dadaist who won the 1964 Carnegie prize (2 wds) / Type of grain, or
            the alcoholic beverage made from that grain / Device similar to
            Amazon's Fire stick / Parcel to build a house on / "Mr. Belvedere"
            actress Graff / Moo like a cow
          </li>
        </ol>
        <p>
          <b>Across clues (Across and up)</b>
        </p>
        <ol>
          <li value={14}>
            Patriarch of TV's Clampett family / Skedaddled, so to speak (2 wds.)
            / It might be emblazoned with "Kiss the cook" / Scheduling software
            which shipped with Mac OSX / Singer with a deep voice
          </li>
          <li value={15}>
            Possible Wheel of Fortune purchase / What one might say after
            completing a three-way crossword grid for a Mystery Hunt puzzle, in
            brief / Grapple or wrestle (with) / "___ effort" (2 wds.) / Response
            to a commanding officer, perhaps (2 wds.)
          </li>
          <li value={16}>
            Exist / Amortized expense amount corresponding to an asset, to an
            accountant / Fruity drinks, in brief / British production co.
            involved with producing The Muppet Show / Like beach weather / Bit
            of mischief
          </li>
          <li value={17}>
            In favor of / Friend of Tom Holland's Peter Parker / Surcharge /
            Schifrin who wrote the "Mission Impossible" theme / Longer-tenured,
            perhaps
          </li>
          <li value={18}>
            Cryptozoologist's hoped-for Asian sighting. / Weasel-like animal
            also called a honey badger / Month for a Shakespearean emperor to be
            wary / Home theater's home, often
          </li>
          <li value={19}>
            Hub for proverbial roads / Fathers, more casually / Frothing at the
            mouth / Tentacle-faced alien race in Doctor Who{' '}
          </li>
          <li value={20}>
            Ukrainian minister of foreign affairs under Zelensky / River that
            flows through Bohemia / "Runaway" singer Shannon
          </li>
          <li value={21}>
            Result of a quarterback sack, usually / Made indistinct{' '}
          </li>
          <li value={22}>
            Got hitched, to a boy scout? / Sportsball game where the underdog
            wins
          </li>
          <li value={23}>Was out in front / Little quibbles, figuratively</li>
          <li value={24}>
            Author Vaswani who won a Grammy for narrating "I Am Malala"{' '}
          </li>
          <li value={25}>
            "That's funny [but not funny enough to land me on the floor]"
          </li>
          <li value={26}>Nickname for POTUS #43</li>
        </ol>
        <p>
          <b>Across clues (Across and Down):</b>
        </p>
        <ol>
          <li value={1}>Smith, to Jones, cinematically</li>
          <li value={2}>Bust-making law enforcement agency, in brief</li>
          <li value={3}>Site for a hockey game</li>
          <li value={4}>European city with a diamond district</li>
          <li value={5}>Related to smell</li>
          <li value={6}>
            The G in "GPL" / "The ___ of Pooh" / New-line-generating key
          </li>
          <li value={7}>
            Didn't flunk / ___ Drive (Presidentially-named NYC parkway) /
            Reassuring words after a wipeout (2 wds)
          </li>
          <li value={8}>
            Pitcher Hershiser / Response from a person who newly understands (2
            wds) / Dance discipline with a percussive sound / Month leading up
            to Rosh Hashanah{' '}
          </li>
          <li value={9}>
            Make someone else go viral? / Every last one / Sympony conductor
            ___-Pekka Salonen / Utterly infatuate
          </li>
          <li value={10}>
            Prefix meaning "high" / Exclamation of surprise (or jollity) / Poet
            Walter de ___ (2 wds) / Descend using a double rope
          </li>
          <li value={11}>
            Wheat: Fr. / "Revolutionary Road" author / Sieve / Allen who hosted
            the game show "Password"{' '}
          </li>
          <li value={12}>
            Sweden-based air carrier / VHF or UHF broadcaster / Neither Rep. nor
            Dem. / Voorhees portrayer in the Friday the 13th series / Clinton's
            first secretary of defense / Moray, say
          </li>
          <li value={13}>
            Court fop in Hamlet / Put creases into, or took them out / Repeated
            three times, a soccer chant / Really, really loathe / Permit to
            proceed
          </li>
        </ol>
        <hr className="my-4" />
        <h3>John F. Kennedy Presidential Library</h3>
        <FlavorText>The trumpet summons you once again.</FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click on any image to open it in a new window. The{' '}
          <a href="https://s3-us-west-2.amazonaws.com/gmtwebsiteassets/nnts/TS_Rules-2015.pdf">
            rules
          </a>{' '}
          , a{' '}
          <a href="https://twilightstrategy.com/card-list/">list of cards</a>,
          and a{' '}
          <a href="http://twistrug.jjt.io/#/board/00000000/C3900077151000400000050041000040001433020002505001301204304020000403010040020324400220030320413051022005200000000000250200005200000002000014000002000042004003002003000000000031">
            board simulator
          </a>{' '}
          have been provided for your convenience. Note that the event reminder
          tokens on the board do not appear in the simulator. The token
          underneath the token for NATO is for Marshall Plan.
        </InfoIcon>
        <p className={cx(HIDDEN_CLASS)}>
          The
          <br />
          <a href="https://s3-us-west-2.amazonaws.com/gmtwebsiteassets/nnts/TS_Rules-2015.pdf">
            rules,
          </a>
          <br />
          a
          <br />
          <a href="https://twilightstrategy.com/card-list/">list of cards,</a>
          <br />
          and a
          <br />
          <a href="http://twistrug.jjt.io/#/board/00000000/C3900077151000400000050041000040001433020002505001301204304020000403010040020324400220030320413051022005200000000000250200005200000002000014000002000042004003002003000000000031">
            board simulator
          </a>
          <br />
          have been provided for your convenience. Note that the event reminder
          tokens on the board do not appear in the simulator. The token
          underneath the token for NATO is for Marshall Plan.
        </p>
        <p>
          <a target="_blank" href={image1Large}>
            <SheetableImage
              alt="A boardstate for the game Twilight Struggle. "
              src={image1}
              title=""
            />
          </a>
        </p>
        <p>
          <a target="_blank" href={image2}>
            <SheetableImage
              alt='Two piles of cards. On top of the pile labelled "Discard"  is Grain Sales to Soviets. On top of the pile labelled "Out of Play"  is Star Wars.'
              src={image2}
              title=""
              className="mx-auto h-[300px]"
            />
          </a>
        </p>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Transcripts of the newspaper pages are available in copy-to-sheet.
        </InfoIcon>
        <p>
          <a target="_blank" href={image3}>
            <SheetableImage
              alt="A newspaper page with three articles.

THE STRUGGLE BUS
Turn 9

POSTCOLONIAL TURMOIL SPILLS INTO MOZAMBIQUE
RENAMO forces cross South African border, seize capital

[Image: the Southeast African States space, now 5/0.]
[Text starting with H. The rest is illegible.]

COMMUNIST SPIES AMONG US?
Politicians blame recent failures on espionage
[Text starting with E. The rest is illegible.]

COLD WAR TURNING HOT?
Doomsday clock ticking to midnight at FAST PACE in wake of Soviet boycott
[Text starting with A. The rest is illegible.]"
              src={image3}
              title=""
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          A newspaper page with three articles.
          <br />
          <br />
          THE STRUGGLE BUS
          <br />
          Turn 9<br />
          <br />
          POSTCOLONIAL TURMOIL SPILLS INTO MOZAMBIQUE
          <br />
          RENAMO forces cross South African border, seize capital
          <br />
          <br />
          [Image: the Southeast African States space, now 5/0.]
          <br />
          [Text starting with H. The rest is illegible.]
          <br />
          <br />
          COMMUNIST SPIES AMONG US?
          <br />
          Politicians blame recent failures on espionage
          <br />
          [Text starting with E. The rest is illegible.]
          <br />
          <br />
          COLD WAR TURNING HOT?
          <br />
          Doomsday clock ticking to midnight at FAST PACE in wake of Soviet
          boycott
          <br />
          [Text starting with A. The rest is illegible.]
        </p>
        <p>
          <a target="_blank" href={image4}>
            <SheetableImage
              alt="A newspaper page with one article, marked with a red 1.

BA'ATHISTS SUPPLANT IRAQI GOVERNMENT
Mismanaged border conflict provides golden opportunity for revolution

[Image: the Iraq space, now 0/3.]
[Text starting with D. The rest is illegible.]

A newspaper page with two articles, marked with a blue 1.

AFRICAN DEMOCRATIC MOVEMENTS ON THE RISE?
Britain intervenes in civil wars across the continent
[Image: Spaces for Nigeria (now 3/5), Zaire (now 1/2), and Angola (now 1/5).]
[Text starting with L. The rest is illegible.]

US BACKS INDONESIAN INSURGENCY
[Image: Indonesia, now 3/4.]
[Text starting with I. The rest is illegible.]"
              src={image4}
              title=""
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          A newspaper page with one article, marked with a red 1.
          <br />
          <br />
          BA'ATHISTS SUPPLANT IRAQI GOVERNMENT
          <br />
          Mismanaged border conflict provides golden opportunity for revolution
          <br />
          <br />
          [Image: the Iraq space, now 0/3.]
          <br />
          [Text starting with D. The rest is illegible.]
          <br />
          <br />
          A newspaper page with two articles, marked with a blue 1.
          <br />
          <br />
          AFRICAN DEMOCRATIC MOVEMENTS ON THE RISE?
          <br />
          Britain intervenes in civil wars across the continent
          <br />
          [Image: Spaces for Nigeria (now 3/5), Zaire (now 1/2), and Angola (now
          1/5).]
          <br />
          [Text starting with L. The rest is illegible.]
          <br />
          <br />
          US BACKS INDONESIAN INSURGENCY
          <br />
          [Image: Indonesia, now 3/4.]
          <br />
          [Text starting with I. The rest is illegible.]
        </p>
        <p>
          <a target="_blank" href={image5}>
            <SheetableImage
              alt="A newspaper page with one article, marked with a red 2.

US ARMAMENT ALIENATES EUROPEAN ALLIES
Bonn, Paris, Rome protest American posturing

[Image: Spaces for West Germany (now 4/0), France (now 3/1), and Italy (now 3/0).]
[Text starting with N. The rest is illegible.]

A newspaper page with two articles, marked with a blue 2.

REDS DOMINATE CHILEAN ELECTIONS
Poll shows Socialist Party more popular than ever
[Image: Chile, now 0/5.]
[Text starting with E. The rest is illegible.]

THE PRESIDENT IN PARIS
Reagan meets with Mitterand to smooth over relations
[Image: France, now 4/1.]
[Text starting with S. The rest is illegible.]"
              src={image5}
              title=""
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          A newspaper page with one article, marked with a red 2.
          <br />
          <br />
          US ARMAMENT ALIENATES EUROPEAN ALLIES
          <br />
          Bonn, Paris, Rome protest American posturing
          <br />
          <br />
          [Image: Spaces for West Germany (now 4/0), France (now 3/1), and Italy
          (now 3/0).]
          <br />
          [Text starting with N. The rest is illegible.]
          <br />
          <br />
          A newspaper page with two articles, marked with a blue 2.
          <br />
          <br />
          REDS DOMINATE CHILEAN ELECTIONS
          <br />
          Poll shows Socialist Party more popular than ever
          <br />
          [Image: Chile, now 0/5.]
          <br />
          [Text starting with E. The rest is illegible.]
          <br />
          <br />
          THE PRESIDENT IN PARIS
          <br />
          Reagan meets with Mitterand to smooth over relations
          <br />
          [Image: France, now 4/1.]
          <br />
          [Text starting with S. The rest is illegible.]
        </p>
        <p>
          <a target="_blank" href={image6}>
            <SheetableImage
              alt="A newspaper page with two articles, marked with a red 3.

COSTA RICA MOVES TOWARDS SOCIALISM
New president decries Torrijos's recent treaty with US
[Image: Spaces for Costa Rica (now 0/2), Panama (now 5/0), and Venezuela (now 4/1).]
[Text starting with O. The rest is illegible.]

THE TROUBLE WITH COMMAND ECONOMIES
The Soviets have consistently failed to reach their economic goals. Here's why.
[Text starting with P. The rest is illegible.]

A newspaper page with one article, marked with a blue 3.

SKYLAB LAUNCH SUCCESSFUL, DEFYING ALL ODDS
U.S. wins race to first space station despite recent budget cuts
[Text starting with N. The rest is illegible.]"
              src={image6}
              title=""
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          A newspaper page with two articles, marked with a red 3.
          <br />
          <br />
          COSTA RICA MOVES TOWARDS SOCIALISM
          <br />
          New president decries Torrijos's recent treaty with US
          <br />
          [Image: Spaces for Costa Rica (now 0/2), Panama (now 5/0), and
          Venezuela (now 4/1).]
          <br />
          [Text starting with O. The rest is illegible.]
          <br />
          <br />
          THE TROUBLE WITH COMMAND ECONOMIES
          <br />
          The Soviets have consistently failed to reach their economic goals.
          Here's why.
          <br />
          [Text starting with P. The rest is illegible.]
          <br />
          <br />
          A newspaper page with one article, marked with a blue 3.
          <br />
          <br />
          SKYLAB LAUNCH SUCCESSFUL, DEFYING ALL ODDS
          <br />
          U.S. wins race to first space station despite recent budget cuts
          <br />
          [Text starting with N. The rest is illegible.]
        </p>
        <p>
          <a target="_blank" href={image7}>
            <SheetableImage
              alt='A newspaper page with one article, marked with a red 4.

DISARMAMENT AGREEMENT THAWS TENSIONS
DOUBLE TAKEs worldwide as superpowers agree on arsenal reductions
[Text starting with U. The rest is illegible.]

A newspaper page with two articles, marked with a blue 4.

EASTERN EUROPEAN AUTONOMY CURTAILED
Soviet authorities crack down on Romanian and Polish reformists
[Image: Spaces for Poland (now 0/4), Austria (now 0/5), and Romania (now 0/3).]
[Text starting with M. The rest is illegible.]

INDONESIAN COUP ATTEMPT FALTERS
Paranoid president persecutes perceived "imperialist influences"
[Text starting with W. The rest is illegible.]'
              src={image7}
              title=""
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          A newspaper page with one article, marked with a red 4.
          <br />
          <br />
          DISARMAMENT AGREEMENT THAWS TENSIONS
          <br />
          DOUBLE TAKEs worldwide as superpowers agree on arsenal reductions
          <br />
          [Text starting with U. The rest is illegible.]
          <br />
          <br />
          A newspaper page with two articles, marked with a blue 4.
          <br />
          <br />
          EASTERN EUROPEAN AUTONOMY CURTAILED
          <br />
          Soviet authorities crack down on Romanian and Polish reformists
          <br />
          [Image: Spaces for Poland (now 0/4), Austria (now 0/5), and Romania
          (now 0/3).]
          <br />
          [Text starting with M. The rest is illegible.]
          <br />
          <br />
          INDONESIAN COUP ATTEMPT FALTERS
          <br />
          Paranoid president persecutes perceived "imperialist influences"
          <br />
          [Text starting with W. The rest is illegible.]
        </p>
        <p>
          <a target="_blank" href={image8}>
            <SheetableImage
              alt="A newspaper page with one article, marked with a red 5.

VENEZUELA DEFAULTS, TANKING GOV'T APPROVAL
Socialist parties enjoying renewed popularity as recession grips continent
[Image: Spaces for Chile (now 0/10) and Venezuela (now 4/2).]
[Text starting with O. The rest is illegible.]

A newspaper page with two articles, marked with a blue 5.

NEW FLAG TOPS KREMLIN
Soviet parliament votes itself out of existence. Has the US won?
[Text starting with R. The rest is illegible.]

US BOOTSTRAPS LATIN AMERICAN DEVELOPMENT
Officials offer economic aid in wake of regional recession
[Text starting with D. The rest is illegible.]"
              src={image8}
              title=""
            />
          </a>
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          A newspaper page with one article, marked with a red 5.
          <br />
          <br />
          VENEZUELA DEFAULTS, TANKING GOV'T APPROVAL
          <br />
          Socialist parties enjoying renewed popularity as recession grips
          continent
          <br />
          [Image: Spaces for Chile (now 0/10) and Venezuela (now 4/2).]
          <br />
          [Text starting with O. The rest is illegible.]
          <br />
          <br />
          A newspaper page with two articles, marked with a blue 5.
          <br />
          <br />
          NEW FLAG TOPS KREMLIN
          <br />
          Soviet parliament votes itself out of existence. Has the US won?
          <br />
          [Text starting with R. The rest is illegible.]
          <br />
          <br />
          US BOOTSTRAPS LATIN AMERICAN DEVELOPMENT
          <br />
          Officials offer economic aid in wake of regional recession
          <br />
          [Text starting with D. The rest is illegible.]
        </p>
        <hr className="my-4" />
        <h3>National Gallery of Art</h3>
        <FlavorText>Putting the "Victor" in Victory Boogie Woogie.</FlavorText>
        <Table noBorder={true}>
          <tbody>
            <tr>
              <td>
                <SheetableImage
                  alt="Sixteen square images of a bunch of colored rectangles."
                  src={image9}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image10}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image11}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image12}
                  title=""
                  className="inline-block m-1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image13}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image14}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image15}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image16}
                  title=""
                  className="inline-block m-1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image17}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image18}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image19}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image20}
                  title=""
                  className="inline-block m-1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <SheetableImage
                  alt=""
                  src={image21}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image22}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image23}
                  title=""
                  className="inline-block m-1"
                />
              </td>
              <td>
                <SheetableImage
                  alt=""
                  src={image24}
                  title=""
                  className="inline-block m-1"
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <hr className="my-4" />
        <h3>Mesa Laboratory</h3>
        <FlavorText>
          Don't ask how we still have these as gases—we don't do well under
          pressure.
        </FlavorText>
        <p>
          Assume a temperature of 1000K and a 1L container.
          <br />
          11.77 g nitrogen dioxide
          <br />
          31.16 g (molecular) bromine
          <br />
          49.48 g (molecular) iodine
          <br />
          14.95 g xenon hexafluoride
          <br />
          15.55 g (molecular) chlorine
          <br />
          4.758 g diimide
          <br />
          8.410 g nitrogen dioxide
          <br />
          37.00 g (molecular) bromine
          <br />
          0.4914 g (molecular) hydrogen
        </p>
        <hr className="my-4" />
        <p>(6 6)</p>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
