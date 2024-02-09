import { FC } from 'react';

import Attributions from 'components/attributions';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/composing-compositions/0.png';
import image1 from 'assets/solutions/composing-compositions/1.png';
import image2 from 'assets/solutions/composing-compositions/2.png';
import image3 from 'assets/solutions/composing-compositions/3.png';
import image4 from 'assets/solutions/composing-compositions/4.png';
import image5 from 'assets/solutions/composing-compositions/5.png';
import image6 from 'assets/solutions/composing-compositions/6.png';
import image7 from 'assets/solutions/composing-compositions/7.png';
import image8 from 'assets/solutions/composing-compositions/8.png';
import image9 from 'assets/solutions/composing-compositions/9.png';
import image10 from 'assets/solutions/composing-compositions/10.png';
import image11 from 'assets/solutions/composing-compositions/11.png';

const SLUG = 'composing-compositions';
const ANSWER = `THIGH STRETCH`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      The puzzle is based on the most recent music-themed set of the strategy
      game Teamfight Tactics, known as "Remix Rumble". In the game, players try
      to create teams of "champions", known as "compositions" or "comps", which
      share various synergies to fight other teams. Each champion has a
      different set of synergies. As suggested by the flavor text, the bands in
      this puzzle represent comps that have "
      <a href="https://tactics.tools/perfect-synergies">perfect</a>" synergies,
      meaning that they have no synergies among the group that are left
      unmatched. The set also uses a mechanic known as "Headliner" which allows
      one unit to count for more than one instance of a particular synergy,
      which was utilized frequently in the puzzle.
    </p>
    <p>
      The constraint that the comps are perfect is a strict one. Out of the many
      billions of possible team comps, only a very small proportion of them have
      the property that there are no unmatched traits. Using this constraint
      enables the construction of the puzzle with relatively few other
      constraints for indicating the compositions. After the compositions are
      determined, we can work out the order of the bands in the festival
      logically, and then extract by looking at the most common character in the
      set of champions of each composition.
    </p>
    <p>
      The clues are presented in alphabetical order by band name below, with
      some notes on how to arrive at that particular set of characters.
    </p>
    <p>
      <b>8-bit Goo</b>
    </p>
    <p>
      <SheetableImage alt="" src={image2} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Lucian</td>
          <td>Corki</td>
          <td>Caitlyn</td>
          <td>Zac (Double Headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This quartet had a lot of equipment. The multi-talented headliner brought
      the beatdown and the beat drop. The backup was seen sporting an extra
      saxophone and a spare VIP tag. The last act that was smaller than this one
      was five acts ago.
    </p>
    <p>
      This was a special case in the puzzle owing to the limited number of
      champions with the letter C in their names. The clue references the
      headliner being "Multi-Talented", meaning they get the headliner bonus for
      both synergies. The "beat-down and beat drop" is a reference to who the
      headliner is, Zac, an EDM Bruiser. The extra saxophone and spare VIP tag
      are references to extra emblems, or spatula items, that confer additional
      synergies to units in the comp. In this case, those traits are the Jazz
      and Big Shot synergies, respectively. The band name is also an additional
      unneeded clue that references that the band contains Zac and the 8-bit
      trait. The rest of the composition can be derived from here as the only
      option.
    </p>
    <p>
      <b>EDMosh</b>
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Tahm Kench</td>
          <td>Urgot</td>
          <td>Jax</td>
          <td>Zac</td>
          <td colSpan={2}>Thresh (Guardian Headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>
      This 5-member band was headlined by the Warden himself! The band also had
      a member that played in an earlier act and two later acts, and who
      headlined in one of those later acts. Played after the first band with a
      bunch of fans but before the second one.
    </p>
    <p>
      The clue specifies that "
      <a href="https://www.leagueoflegends.com/en-pl/champions/thresh/">
        The Warden
      </a>
      ", Thresh, is the headliner of this band. A search will show that there is
      no 5-member band that is possible if Thresh is a Country headliner, which
      means that he must be a guardian headliner. This reduces the possible set
      of configurations to six, only two of which contain members that are
      headliners in other acts that appeared four times (Tahm Kench). Only one
      of these choices is a band that possesses both the EDM and Mosher traits,
      clued by the band name.
    </p>
    <p>
      <b>Glitterbomb</b>
    </p>
    <p>
      <SheetableImage alt="" src={image1} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Ziggs (Dazzler Headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Our most explosive solo act! Played in another band two acts from now.
    </p>
    <p>
      The band name and clue references the bomb-slinging champion Ziggs, who
      can be a perfect group by himself if he is a Dazzler headliner.
    </p>
    <p>
      <b>Groovy Anarchy</b>
    </p>
    <p>
      <SheetableImage alt="" src={image3} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Nami</td>
          <td>Taric</td>
          <td>Pantheon</td>
          <td>Twisted Fate</td>
          <td colSpan={2}>Twitch (Executioner Headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The same two members from the opening act showed up again for this
      5-member band, and one of them is headlining this time. One of them played
      again three acts later, while another played again 5 acts later.
    </p>
    <p>
      The band name references the Disco and Punk traits, and the "same two
      members" referenced here are required to be Twitch and Pantheon. Twitch
      must be an Executioner headliner, as there are no other possibilities for
      perfect synergy comps otherwise.
    </p>
    <p>
      <b>Ill-Beatdown</b>
    </p>
    <p>
      <SheetableImage alt="" src={image4} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Tahm Kench</td>
          <td>Pantheon</td>
          <td>Twitch</td>
          <td>Samira</td>
          <td>Thresh</td>
          <td>Illaoi</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This band composed of a large frog, a god of war, a odd-looking rat, a
      desert rose, a keeper of souls, and a person with a very large drum. The
      punk members were the same as in the previous act, and this was the second
      time they played together.
    </p>
    <p>
      The band name references the Ill-Beats synergy, which is only carried by
      Illaoi, so she is in the comp. The remaining possibilities can be
      eliminated by determining through process of elimination that Twitch and
      Pantheon are the punk members that are being referred to here.{' '}
    </p>
    <p>
      <b>Mischance</b>
      <SheetableImage alt="" src={image5} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Bard</td>
          <td>Ziggs</td>
          <td>Miss Fortune (Big Shot Headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This trio was headlined by a real bigshot. Our sixth act for the night.
    </p>
    <p>
      The name of the band clues Miss Fortune, who can be a big shot headliner.
      From there, the rest of the band can only be Bard and Ziggs.
    </p>
    <p>
      <b>No Friends</b>
    </p>
    <p>
      <SheetableImage alt="" src={image6} title="" />
    </p>
    <p>
      For our opening band, we had the cheapest punk emo act money can buy! Each
      member cost no more than $3. No headliner.
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Pantheon</td>
          <td>Twitch</td>
          <td>Amumu</td>
          <td>Vex</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This is the cheapest (as determined by unit cost) punk emo comp with
      perfect synergies. Ties are broken by the second condition that no members
      are above 3-cost.
    </p>
    <p>
      <b>Sleepy Time</b>
    </p>
    <p>
      <SheetableImage alt="" src={image7} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Lillia</td>
          <td>Gnar</td>
          <td>Kai'sa</td>
          <td>Mordekaiser</td>
          <td>Neeko</td>
          <td>Jhin</td>
          <td>Yorick</td>
        </tr>
      </tbody>
    </Table>
    <p>
      7-member troupe with plenty of groupies. No headliner. Nobody played that
      was also in any of the previous acts.
    </p>
    <p>
      This is the only 7-member no-headliner  group with the superfan trait. It
      is also the only 7-member group with Lillia, who is clued by the band
      name.
    </p>
    <p>
      <b>Stealing Hearts</b>
    </p>
    <p>
      <SheetableImage alt="" src={image8} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Kennen</td>
          <td>K'Sante</td>
          <td>Lillia</td>
          <td>Aphelios</td>
          <td>Kai'sa</td>
          <td>Senna</td>
          <td>Neeko</td>
          <td>Ezreal</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This 8-member band certainly stole my heart! They are the cheapest group
      worthy of the name that didn't have any legendary performers. No
      headliner.
    </p>
    <p>
      This is the cheapest 8-member no-headliner group without any 5-cost units
      that has the Heartsteel trait, which is clued by the band name and the
      description.
    </p>
    <p>
      <b>Swamp Thing</b>
    </p>
    <p>
      <SheetableImage alt="" src={image9} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Thresh</td>
          <td>Vi</td>
          <td>Urgot</td>
          <td>Pantheon</td>
          <td colSpan={2}>Tahm Kench (Bruiser headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Our closing band had 5 members. Only one of the members hadn't performed
      earlier in the night. The headliner was looking particularly gluttonous.
    </p>
    <p>
      The Tahm Kench Bruiser headliner is clued by the band name and the
      "unbenched" reference. The exact composition can be determined by picking
      the only possibility that has a single member who isn't in any other group
      (Vi), and which has no more than two members that showed up in "The Boss".
    </p>
    <p>
      <b>The Boss</b>
    </p>
    <p>
      <SheetableImage alt="" src={image10} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Jinx</td>
          <td>Tahm Kench</td>
          <td>Aphelios</td>
          <td>Twitch</td>
          <td>Samira</td>
          <td>Urgot</td>
          <td colSpan={2}>Sett (Heartsteel headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      7-member band, but not a single member charged over $3 for their cover.
      Headlined by eponymous member. Played just after our largest band. Two of
      the members showed up five acts ago, and only two of the members showed up
      in any later act.
    </p>
    <p>
      The "eponymous" member is "
      <a href="https://www.leagueoflegends.com/en-us/champions/sett/">
        The Boss
      </a>
      ", Sett. There are 31 7-person bands that can be headlined by Sett, but
      only one of them, this one, has no members that cost over three gold.
    </p>
    <p>
      <b>Undertaker</b>
    </p>
    <p>
      <SheetableImage alt="" src={image11} title="" />
    </p>
    <Table>
      <tbody>
        <tr>
          <td>Samira</td>
          <td>Urgot</td>
          <td>Karthus</td>
          <td>Thresh</td>
          <td>Yorick</td>
          <td colSpan={2}>Olaf (Bruiser Headliner)</td>
        </tr>
      </tbody>
    </Table>
    <p>
      6-member band, and the headliner went berserk! He was cruising for a
      bruising.
    </p>
    <p>
      The band name references Yorick, one of the group's members, and the
      description references Olaf,{' '}
      <a href="https://www.leagueoflegends.com/en-pl/champions/olaf/">
        The Berserker
      </a>
      . The description also helpfully clarifies that Olaf is a Bruiser
      headliner in this comp. This uniquely identifies this composition.
    </p>
    <p>
      Once we have identified all of the bands, a rather simple ordering puzzle
      follows which starts by fixing the opening, sixth, and closing acts, which
      are given, and then working from there via process of elimination and
      simple deduction. One possible solution to the logic puzzle follows: No
      Friends, Missfire, and Swamp Thing can be placed as acts 1, 6, and 12 from
      the given information. The only "punk" members who ever play together are
      Pantheon and Twitch. They play together three times. Since Ill-Beatdown is
      the 2nd time they have played together, and they also played together in
      the previous act, Ill-Beatdown must be in act 2. Pantheon and Twitch
      played together for the third time in Groovy Anarchy. One of them played 5
      acts later, and one 3 acts later. Since Pantheon played in act 12, that
      means Groovy Anarchy had to be in act 7, and Twitch's performance with The
      Boss is in act 10. Since we know The Boss played just after the largest
      band, Stealing Hearts must have been in act 9. Ziggs, played as part of
      Missfire in act 6, but also played as a solo act two acts previously in
      Glitterbomb. So, Glitterbomb is in act 4. The only acts smaller than Gooey
      Galactica were Missfire and Glitterbomb. If Gooey Galactica were 5 acts
      after Glitterbomb, it would be in act 9, which is already held by Stealing
      Hearts. Therefore, since we know Missfire is in act 6, Gooey Galactica
      must be in act 11. We know that two of the members of The Boss (which
      played in act 10) showed up 5 acts earlier. Thus, they were Tahm Kench and
      Urgot, playing together in EdMosh, in act 5. The two bands with the
      "superfan" trait were Sleepy Time and Stealing Hearts. We know that EdMosh
      played after one of the bands with this trait, and before the other. The
      only vacant spot before EdMosh, who are in act 5, is act 3. Therefore,
      since Stealing Hearts is in act 9, Sleepy Time must be in act 3.
      Undertaker must fill the last remaining position, act 8.
    </p>
    <p>A full chart of the ordering is given here: </p>
    <Table className="extract-table">
      <thead>
        <tr>
          <th>Letter</th>
          <th colSpan={8}>Composition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>T</td>
          <td>Pantheon</td>
          <td>Twitch</td>
          <td>Amumu</td>
          <td>Vex</td>
        </tr>
        <tr>
          <td>H</td>
          <td>Tahm Kench</td>
          <td>Pantheon</td>
          <td>Twitch</td>
          <td>Samira</td>
          <td>Thresh</td>
          <td>Illaoi</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Lillia</td>
          <td>Gnar</td>
          <td>Kai'sa</td>
          <td>Mordekaiser</td>
          <td>Neeko</td>
          <td>Jhin</td>
          <td>Yorick</td>
        </tr>
        <tr>
          <td>G</td>
          <td colSpan={2}>
            Ziggs
            <br />
            (Dazzler Headliner)
          </td>
        </tr>
        <tr>
          <td>H</td>
          <td>Tahm Kench</td>
          <td>Urgot</td>
          <td>Jax</td>
          <td>Zac</td>
          <td colSpan={2}>
            Thresh
            <br />
            (Guardian Headliner)
          </td>
        </tr>
        <tr>
          <td>S</td>
          <td>Bard</td>
          <td>Ziggs</td>
          <td colSpan={2}>
            Miss Fortune
            <br />
            (Big Shot Headliner)
          </td>
        </tr>
        <tr>
          <td>T</td>
          <td>Nami</td>
          <td>Taric</td>
          <td>Pantheon</td>
          <td>Twisted Fate</td>
          <td colSpan={2}>
            Twitch
            <br />
            (Executioner Headliner)
          </td>
        </tr>
        <tr>
          <td>R</td>
          <td>Samira</td>
          <td>Urgot</td>
          <td>Karthus</td>
          <td>Thresh</td>
          <td>Yorick</td>
          <td colSpan={2}>
            Olaf
            <br />
            (Bruiser Headliner)
          </td>
        </tr>
        <tr>
          <td>E</td>
          <td>Kennen</td>
          <td>K'Sante</td>
          <td>Lillia</td>
          <td>Aphelios</td>
          <td>Kai'sa</td>
          <td>Senna</td>
          <td>Neeko</td>
          <td>Ezreal</td>
        </tr>
        <tr>
          <td>T</td>
          <td>Jinx</td>
          <td>Tahm Kench</td>
          <td>Aphelios</td>
          <td>Twitch</td>
          <td>Samira</td>
          <td>Urgot</td>
          <td colSpan={2}>
            Sett
            <br />
            (Heartsteel headliner)
          </td>
        </tr>
        <tr>
          <td>C</td>
          <td>Zac</td>
          <td>Corki</td>
          <td>Caitlyn</td>
          <td>Lucian</td>
        </tr>
        <tr>
          <td>H</td>
          <td>Thresh</td>
          <td>Vi</td>
          <td>Urgot</td>
          <td>Pantheon</td>
          <td colSpan={2}>
            Tahm Kench
            <br />
            (Bruiser Headliner)
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The extraction is clued by the puzzle flavor, which requires us to
      identify "one character that frequently stood out" in each roster. Each
      composition has a single letter that appears more often than the others,
      and reading them out in the correct order gives the answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <Attributions>
      <p>
        Images are from <a href="https://tactics.tools/">tactics.tools</a>.
      </p>
    </Attributions>

    <style jsx global>{`
      .extract-table td:nth-child(1) {
        text-align: center;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .extract-table td {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
