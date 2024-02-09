import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'league-of-their-own';
const ANSWER = `ABYSSAL IDIOT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      As clued by the flavortext and the theme of a basketball league, this
      puzzle refers to the recurring Cranjis McBasketball game on the TV show{' '}
      <i>Impractical Jokers</i>. In this game, each Joker in turn, posing as a
      receptionist, must read aloud funny names from a list prepared by the
      others, trying to laugh as little as possible. Each illustration is a
      depiction of one of these names. As a solving aid, they are arranged in
      alphabetical order by surname. The names are:
    </p>
    <ul>
      <li>Goose Boils</li>
      <li>Macadamia Butt</li>
      <li>Buffalo Childrens</li>
      <li>Mite B. DeCarburetor</li>
      <li>Dooblus Dooizfour</li>
      <li>Kiwi Frankencop</li>
      <li>Dadood Frumcheers</li>
      <li>Dill Funk</li>
      <li>Gal Godonut</li>
      <li>Coach Grapefruit</li>
      <li>Minty Hummer</li>
      <li>Moist Kite</li>
      <li>Pope Lips</li>
      <li>Tina Melt</li>
      <li>Detective Bluto Mindpretzel</li>
      <li>Cowabunga Peppermill</li>
      <li>Jury Prosciutto</li>
      <li>Dr. Shrimp Puerto Rico</li>
      <li>Count Ravioli</li>
      <li>Mort Spandex</li>
      <li>Uma Thermos</li>
      <li>Real Hefty Trout</li>
      <li>Toodles Valentine</li>
      <li>Yanni Van Halen</li>
    </ul>

    <p>
      Per the paragraph after the pictures, there are six players on each of
      four teams, corresponding to the four Jokers. The team names are
      references to their surnames or nicknames, as follows:
    </p>
    <ul>
      <li>Questions = Brian "Q" Quinn</li>
      <li>Murmurs = James "Murr" Murray</li>
      <li>Volcanoes = Sal Vulcano</li>
      <li>Cats = Joe Gatto</li>
    </ul>
    <p>
      Each player should be assigned a team according to which Joker had to say
      that name on the show. Then, players from the appropriate teams should be
      assigned to the games so that the respective indices yield the same letter
      ("always perfectly matched"). As confirmation, this letter always appears
      only once in the name. This assignment is done as follows:
    </p>
    <Table className="solution-table">
      <thead>
        <tr>
          <th>Team and Number</th>
          <th>Player</th>
          <th>Extraction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Murmurs 7</td>
          <td>Kiwi Frankencop</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Volcanoes 3</td>
          <td>Real Hefty Trout</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Cats 4</td>
          <td>Dooblus Dooizfour</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Questions 1</td>
          <td>Buffalo Childrens</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Cats 5</td>
          <td>Minty Hummer</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>Murmurs 1</td>
          <td>Yanni Van Halen</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>Cats 8</td>
          <td>Jury Prosciutto</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Volcanoes 3</td>
          <td>Dr. Shrimp Puerto Rico</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Murmurs 5</td>
          <td>Mort Spandex</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Questions 4</td>
          <td>Moist Kite</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Volcanoes 4</td>
          <td>Tina Melt</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Cats 2</td>
          <td>Dadood Frumcheers</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Questions 11</td>
          <td>Count Ravioli</td>
          <td>L</td>
        </tr>
        <tr>
          <td>Murmurs 9</td>
          <td>Goose Boils</td>
          <td>L</td>
        </tr>
        <tr>
          <td>Murmurs 8</td>
          <td>Macadamia Butt</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Volcanoes 6</td>
          <td>Pope Lips</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Cats 6</td>
          <td>Gal Godonut</td>
          <td>D</td>
        </tr>
        <tr>
          <td>Questions 4</td>
          <td>Toodles Valentine</td>
          <td>D</td>
        </tr>
        <tr>
          <td>Questions 17</td>
          <td>Cowabunga Peppermill</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Volcanoes 2</td>
          <td>Dill Funk</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Cats 16</td>
          <td>Mite B. DeCarburetor</td>
          <td>O</td>
        </tr>
        <tr>
          <td>Murmurs 14</td>
          <td>Detective Bluto Mindpretzel</td>
          <td>O</td>
        </tr>
        <tr>
          <td>Volcanoes 15</td>
          <td>Coach Grapefruit</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Questions 4</td>
          <td>Uma Thermos</td>
          <td>T</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading the matchups' letters in order gives the answer,{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        The pandemic lockdown sucked for everyone, of course, but for me it was
        a particularly lonely time, as I live alone and wasn't smart enough to
        think to be part of some sort of pod. One of my very few new joys that
        year was <i>Impractical Jokers</i>, which I stumbled upon at some point
        not long into my sequestration. Its frequent airings became a common TV
        choice and a source of some much-needed laughs. I particularly enjoyed
        the silliness of Cranjis McBasketball, and illustrating the names struck
        me as a fun idea for a puzzle. My art skills extend no further than
        Microsoft Paint, but hopefully you enjoyed the renderings.
      </p>
    </AuthorsNotes>
    <Attributions>
      <ul>
        <li>
          All Vecteezy images are licensed by the terms of the{' '}
          <a href="https://www.vecteezy.com/licensing-agreement">
            Vecteezy License Agreement
          </a>
          .
        </li>
        <li>
          Goose: natchapol joolsuwan{' '}
          <a href="https://www.vecteezy.com/png/16547973">
            https://www.vecteezy.com/png/16547973
          </a>
        </li>
        <li>
          Boiling pot: Matt Cole{' '}
          <a href="https://www.vecteezy.com/vector-art/3679005">
            https://www.vecteezy.com/vector-art/3679005
          </a>
        </li>
        <li>
          Butt: Petr Tkachenko{' '}
          <a href="https://www.vecteezy.com/photo/4790128">
            https://www.vecteezy.com/photo/4790128
          </a>
        </li>
        <li>
          Nuts: PRASIT Supho{' '}
          <a href="https://www.vecteezy.com/png/22130369">
            https://www.vecteezy.com/png/22130369
          </a>
        </li>
        <li>
          Buffalo: Love Mandala{' '}
          <a href="https://www.vecteezy.com/png/12893810">
            https://www.vecteezy.com/png/12893810
          </a>
        </li>
        <li>
          Baby buffalo: Okta Chandra Ridzikianto{' '}
          <a href="https://www.vecteezy.com/png/12573867">
            https://www.vecteezy.com/png/12573867
          </a>
        </li>
        <li>
          Carburetor: Rich Niewiroski Jr. Used under{' '}
          <a href="https://creativecommons.org/licenses/by/2.5/">
            CC BY 2.5
          </a>
          .{' '}
          <a href="https://commons.wikimedia.org/wiki/File:HighPerformanceCarburetor.jpg">
            https://commons.wikimedia.org/wiki/File:HighPerformanceCarburetor.jpg
          </a>
        </li>
        <li>
          Frankenstein's monster: 3w project{' '}
          <a href="https://www.vecteezy.com/vector-art/8072150">
            https://www.vecteezy.com/vector-art/8072150
          </a>
        </li>
        <li>
          Kiwi: Thatphichai Yodsri{' '}
          <a href="https://www.vecteezy.com/png/9351992">
            https://www.vecteezy.com/png/9351992
          </a>
        </li>
        <li>
          Cop hat: Timplaru Emil{' '}
          <a href="https://www.vecteezy.com/png/9356431">
            https://www.vecteezy.com/png/9356431
          </a>
        </li>
        <li>
          Wendt: Alan Light. Used under{' '}
          <a href="https://creativecommons.org/licenses/by/2.0/">
            CC BY 2.0
          </a>
          .{' '}
          <a href="https://commons.wikimedia.org/wiki/File:George_Wendt_at_the_41st_Emmy_Awards_cropped.jpg">
            https://commons.wikimedia.org/wiki/File:George_Wendt_at_the_41st_Emmy_Awards_cropped.jpg
          </a>
        </li>
        <li>
          Dill: Irina Kryvasheina{' '}
          <a href="https://www.vecteezy.com/photo/5432084">
            https://www.vecteezy.com/photo/5432084
          </a>
        </li>
        <li>
          Godot: Gage Skidmore. Used under{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            CC BY-SA 3.0
          </a>.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Gal_Gadot_cropped_lighting_corrected.jpg">
            https://commons.wikimedia.org/wiki/File:Gal_Gadot_cropped_lighting_corrected.jpg
          </a>
        </li>
        <li>
          Donut: Timplaru Emil{' '}
          <a href="https://www.vecteezy.com/png/9380161">
            https://www.vecteezy.com/png/9380161
          </a>
        </li>
        <li>
          Grapefruit: Timplaru Emil{' '}
          <a href="https://www.vecteezy.com/png/9399370">
            https://www.vecteezy.com/png/9399370
          </a>
        </li>
        <li>
          Whistle: Phuriphat Chanchonabot{' '}
          <a href="https://www.vecteezy.com/png/14966462">
            https://www.vecteezy.com/png/14966462
          </a>
        </li>
        <li>
          Hummer: Public domain.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:2007_Hummer_H3_--_NHTSA.jpg">
            https://commons.wikimedia.org/wiki/File:2007_Hummer_H3_--_NHTSA.jpg
          </a>
        </li>
        <li>
          Mint: kitsanaphong burarat{' '}
          <a href="https://www.vecteezy.com/png/20951906">
            https://www.vecteezy.com/png/20951906
          </a>
        </li>
        <li>
          Kite: Soey Studio{' '}
          <a href="https://www.vecteezy.com/png/24693878">
            https://www.vecteezy.com/png/24693878
          </a>
        </li>
        <li>
          Rain: pokpak{' '}
          <a href="https://www.vecteezy.com/vector-art/2716955">
            https://www.vecteezy.com/vector-art/2716955
          </a>
        </li>
        <li>
          Pope Benedict: Wikimedia Commons / quirinale.it.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Portrait_of_Pope_Francis_(2021)_FXD.jpg">
            https://commons.wikimedia.org/wiki/File:Portrait_of_Pope_Francis_(2021)_FXD.jpg
          </a>
        </li>
        <li>
          Lips: Timplaru Emil{' '}
          <a href="https://www.vecteezy.com/png/9381233">
            https://www.vecteezy.com/png/9381233
          </a>
        </li>
        <li>
          Tina: 20th Century Fox. Fair use.{' '}
          <a href="https://static.wikia.nocookie.net/bobsburgerpedia/images/0/0a/Tina_Belcher_new.webp">
            https://static.wikia.nocookie.net/bobsburgerpedia/images/0/0a/Tina_Belcher_new.webp
          </a>
        </li>
        <li>
          Bluto: Public domain.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Blutowindow.png">
            https://commons.wikimedia.org/wiki/File:Blutowindow.png
          </a>
        </li>
        <li>
          Magnifying glass: Ovidiu Timplaru{' '}
          <a href="https://www.vecteezy.com/png/9876396">
            https://www.vecteezy.com/png/9876396
          </a>
        </li>
        <li>
          Pretzel: soraya hongsa{' '}
          <a href="https://www.vecteezy.com/png/10179012">
            https://www.vecteezy.com/png/10179012
          </a>
        </li>
        <li>
          Peppermill: Claudio Divizia{' '}
          <a href="https://www.vecteezy.com/png/8541847">
            https://www.vecteezy.com/png/8541847
          </a>
        </li>
        <li>
          TMNT logo: Viacom International Inc. Fair use.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Teenage_Mutant_Ninja_Turtles_2022_franchise_logo.png">
            https://commons.wikimedia.org/wiki/File:Teenage_Mutant_Ninja_Turtles_2022_franchise_logo.png
          </a>
        </li>
        <li>
          Jury box: Brandonrush. Used under CC0 1.0.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Jury_box_in_the_courtroom_of_the_Van_Buren_County_Courthouse_in_Clinton,_Arkansas.jpg">
            https://commons.wikimedia.org/wiki/File:Jury_box_in_the_courtroom_of_the_Van_Buren_County_Courthouse_in_Clinton,_Arkansas.jpg
          </a>
        </li>
        <li>
          Prosciutto: Little Studio 1{' '}
          <a href="https://www.vecteezy.com/png/15211531">
            https://www.vecteezy.com/png/15211531
          </a>
        </li>
        <li>
          Doctor: endang firmansyah{' '}
          <a href="https://www.vecteezy.com/png/12414738">
            https://www.vecteezy.com/png/12414738
          </a>
        </li>
        <li>
          Shrimp: Jittra Somlam{' '}
          <a href="https://www.vecteezy.com/png/27738778">
            https://www.vecteezy.com/png/27738778
          </a>
        </li>
        <li>
          PR flag: Muhammad Fadlan{' '}
          <a href="https://www.vecteezy.com/png/16328911">
            https://www.vecteezy.com/png/16328911
          </a>
        </li>
        <li>
          Count: Sesame Workshop. Fair use.{' '}
          <a href="https://muppet.fandom.com/wiki/Count_von_Count?file=CountVonCount.png">
            https://muppet.fandom.com/wiki/Count_von_Count?file=CountVonCount.png
          </a>
        </li>
        <li>
          Ravioli: natchapol joolsuwan{' '}
          <a href="https://www.vecteezy.com/png/10987912">
            https://www.vecteezy.com/png/10987912
          </a>
        </li>
        <li>
          Mort: 20th Television Animation. Fair use.{' '}
          <a href="https://hero.fandom.com/wiki/Mort_Goldman?file=Mort_Goldman.png">
            https://hero.fandom.com/wiki/Mort_Goldman?file=Mort_Goldman.png
          </a>
        </li>
        <li>
          Spandex: kittisak taramas{' '}
          <a href="https://www.vecteezy.com/png/19008028">
            https://www.vecteezy.com/png/19008028
          </a>
        </li>
        <li>
          Thermos: Flow Icon{' '}
          <a href="https://www.vecteezy.com/png/11652621">
            https://www.vecteezy.com/png/11652621
          </a>
        </li>
        <li>
          Thurman: Siebbi. Used under{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              CC BY 3.0
            </a>
            .{' '}
          <a href="https://en.m.wikipedia.org/wiki/File:Uma_Thurman_2014.jpg">
            https://en.m.wikipedia.org/wiki/File:Uma_Thurman_2014.jpg
          </a>
        </li>
        <li>
          Trout: Feelplus Creator{' '}
          <a href="https://www.vecteezy.com/png/19044934">
            https://www.vecteezy.com/png/19044934
          </a>
        </li>
        <li>
          Scale: Sandi Dwi Prasetyo{' '}
          <a href="https://www.vecteezy.com/png/19881512">
            https://www.vecteezy.com/png/19881512
          </a>
        </li>
        <li>Emoji: Typed into Google document</li>
        <li>
          Yanni: Public domain /{' '}
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">
            CC BY-SA 2.0
          </a>.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:YanniPressPhoto.jpg">
            https://commons.wikimedia.org/wiki/File:YanniPressPhoto.jpg
          </a>
        </li>
        <li>
          VH logo: Public domain.{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Van_Halen_logo.svg">
            https://commons.wikimedia.org/wiki/File:Van_Halen_logo.svg
          </a>
        </li>
      </ul>
    </Attributions>
    <style jsx global>{`
      .solution-table td:nth-child(2),
      .solution-table td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        text-transform: uppercase;
      }
      .solution-table td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
