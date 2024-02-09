import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';
import { InlineTwemoji } from 'components/twemoji';

const SLUG = 'i-know-who-i-want-to-take-me-home';
const ANSWER = `PROGRESS BAR`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a video featuring a number of patrons ordering
      drinks at a bar (all played by the same weirdo). The patrons are clearly
      from an assortment of time periods, based on their clothing, props, slang,
      and set decorations. Additionally, a clock is shown in the background or
      foreground of each video, showing an assortment of different times (but
      always on the hour).
    </p>
    <p>
      Using the context clues from the video, we can intuit that the clock style
      remains the same throughout entire decades (antique pendulum clock
      1940s&ndash;1950s, institutional clock 1960s&ndash;1970s, digital clock radio with
      Rubik's Cube 1980s, plastic "antique" clock 1990s, digital clock with Big
      Mouth Billy Bass 2000s, and digital clock with hourglass 2010s), and we
      can peg the time periods of the characters fairly accurately:
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Clock type</th>
          <th>Year</th>
          <th>Order</th>
          <th>Context Clues</th>
          <th>Identification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Billy Bass+digital</td>
          <td>2002</td>
          <td>
            An entire case of Sam Adams, but pour them all into a trough so I
            can take it out to them
          </td>
          <td>
            Patchwork shorts, I <InlineTwemoji emoji="❤️" /> NY shirt,
            Tamagotchi
          </td>
          <td>
            Patchwork shorts and tamagotchi very early 2000s; I{' '}
            <InlineTwemoji emoji="❤️" /> NY popular in wake of 9/11
          </td>
        </tr>
        <tr>
          <td>Billy Bass+digital</td>
          <td>2005</td>
          <td>Any local Cuauhtémoc cerveza</td>
          <td>Under Armour shirt and Crocs</td>
          <td>
            "Athleisure" trend debuts 2000s; Under Armour and Crocs both go
            public 2005
          </td>
        </tr>
        <tr>
          <td>Clock radio</td>
          <td>1986</td>
          <td>
            Dark rum, vodka, and orange juice served in equal proportion,
            stirred on the rocks
          </td>
          <td>Parrothead</td>
          <td>Buffett "Parrotheads" debut 1985</td>
        </tr>
        <tr>
          <td>Roman numerals</td>
          <td>1997</td>
          <td>André served in a Dixie...</td>
          <td>Wide collar stripey shirt</td>
          <td>
            '90s striped shirt with wide collar (I was a big fan of these) +
            "Word to your mother" (1990)
          </td>
        </tr>
        <tr>
          <td>School</td>
          <td>1974</td>
          <td>Tanqueray, served chilled</td>
          <td>Leisure Suit</td>
          <td>
            Leisure suit, bling, exposed chest hair, all 1970s, disco dancing
            debuts 1973
          </td>
        </tr>
        <tr>
          <td>School</td>
          <td>1972</td>
          <td>A bottle of 2019 Wyldewood Spiced Elderberry Sweet</td>
          <td>Captain "Yacht Chic" with ascot and "Nixon Now" button</td>
          <td>
            Ascots 1970s (à la Fred from Scooby-Doo), Captain &amp; Tennille
            mid-'70s, "Nixon Now" re-election campaign 1972 (vs. McGovern)
          </td>
        </tr>
        <tr>
          <td>Hourglass+digital</td>
          <td>2014</td>
          <td>Cinnamon-flavored Canadian whiskey</td>
          <td>Kid with iPad</td>
          <td>"dope" mid-2010s; iPad debuts 2010</td>
        </tr>
        <tr>
          <td>Clock radio</td>
          <td>1989</td>
          <td>
            Vodka, southern comfort, blue curacao topped with cranberry juice
            and a slice of kiwi
          </td>
          <td>Michael Jackson fan with single glove, fedora, moonwalk</td>
          <td>
            Billie Jean/single glove debuted 1983; Michael Jackson popular
            throughout '80s
          </td>
        </tr>
        <tr>
          <td>Roman numerals</td>
          <td>1994</td>
          <td>Bombay Sapphire and Mott's</td>
          <td>Grunge, flannel, knit hat</td>
          <td>
            Grunge style: open flannel with black tee, knit cap, "rad" early '90s
          </td>
        </tr>
        <tr>
          <td>School</td>
          <td>1979</td>
          <td>
            Eggnog (Or if that's not in season, you can substitute a Dulce de
            Leche or a Bushwacker! Or just give me a bottle of booze and an
            empty bucket and point me to the barn)
          </td>
          <td>Punk rocker w/mohawk</td>
          <td>
            Punk rock debuts early '70s, gains in popularity through late
            '70s/early '80s
          </td>
        </tr>
        <tr>
          <td>School</td>
          <td>1977</td>
          <td>
            Maker's Mark, Glenlivet, and Bud Light, each in a separate glass
          </td>
          <td>Elvis impersonator</td>
          <td>
            Elvis first said "Hunka Hunka" in 1974's "Burnin' Love", died 1977
          </td>
        </tr>
        <tr>
          <td>Antique</td>
          <td>1952</td>
          <td>
            Kentucky bourbon, syrup, herb leaves, and seltzer on the rocks,
            garish hat optional
          </td>
          <td>3-piece suit with fedora</td>
          <td>
            "You're in the groove, Jackson" debuted 1947; three-piece
            suits/fedoras 1950s
          </td>
        </tr>
        <tr>
          <td>Clock radio</td>
          <td>1983</td>
          <td>Some very dark pinot noir</td>
          <td>Valley girl "over 18"</td>
          <td>
            Moon Zappa's "Valley Girl" 1983; This is just before national legal
            drinking age set at 21.
          </td>
        </tr>
        <tr>
          <td>Antique</td>
          <td>1944</td>
          <td>Cuba libre</td>
          <td>Zoot suit</td>
          <td>Zoot suit riots 1943; "Daddy-O" first use in print 1940&ndash;1945</td>
        </tr>
        <tr>
          <td>Hourglass+digital</td>
          <td>2018</td>
          <td>Orange juice, brandy, and Rioja</td>
          <td>Kid with Apple Watch</td>
          <td>Apple Watch debuted 2015, "sick" mid-2010s</td>
        </tr>
        <tr>
          <td>Antique</td>
          <td>1958</td>
          <td>Whisky highball made with Laphroaig and Coca Cola</td>
          <td>'50s "bowling" shirt, black horn-rimmed glasses</td>
          <td>Classic '50s look</td>
        </tr>
        <tr>
          <td>Roman numerals</td>
          <td>1996</td>
          <td>Boone's Farm&mdash;the one with "Hill" in the name</td>
          <td>'90s backwards hat, Hammer pants</td>
          <td>Backwards hats '90s, Hammer pants mid-'90s; "yo yo yo" '90s</td>
        </tr>
        <tr>
          <td>Hourglass+digital</td>
          <td>2011</td>
          <td>
            Nine shots of mass-market tequila...and one more for good measure!
          </td>
          <td>Steampunk</td>
          <td>
            Steampunk culture gains popularity from mid-2000s, peaking in early
            2010s
          </td>
        </tr>
        <tr>
          <td>Clock radio</td>
          <td>1981</td>
          <td>Finger of Collier and McKeel</td>
          <td>Shutter shades w/Star Wars shirt</td>
          <td>
            Star Wars: The Empire Strikes Back (1980); shutter shades early '80s
          </td>
        </tr>
        <tr>
          <td>Roman numerals</td>
          <td>1998</td>
          <td>
            A pair of cocktails with white rum, coconut milk, and fresh
            pineapple
          </td>
          <td>Zoot suit + cell phone</td>
          <td>Swing resurgence 1997&ndash;1999; flip phones debut 1996</td>
        </tr>
        <tr>
          <td>School</td>
          <td>1968</td>
          <td>
            A can of Schlitz, my brother; and make sure the motto is legible.
          </td>
          <td>Hippie</td>
          <td>Summer of Love 1967; hippies generally late '60s</td>
        </tr>
        <tr>
          <td>School</td>
          <td>1962</td>
          <td>Jameson, served in a glass vessel</td>
          <td>Brit with bowler hat, suit w/turtleneck</td>
          <td>
            "Mod" look popularized by <i>The Avengers</i> British TV show 1961&ndash;1969
          </td>
        </tr>
        <tr>
          <td>Antique</td>
          <td>1959</td>
          <td>Traditional southern moonshine</td>
          <td>Letterman sweater</td>
          <td>
            "Baby, You're the Ginchiest" is from the Edd Byrnes song "Kookie,
            Kookie, Lend Me Your Comb" (1959), based on his character from 77
            Sunset Strip (1958&ndash;1964)
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      So, what are we to make of these bar orders and eras? In the absence of
      flavor text, we look to the puzzle title. The phrase, "I know who I want
      to take me home" is most famous as the refrain from the 1998 Semisonic
      song "Closing Time." This makes sense, as we are in a bar and time is
      clearly involved. However, it also clues us that song titles may be
      important. In fact, if we look more closely at the drink orders, we can
      match them to songs from the years indicated. Note: song years are
      determined by first album release as opposed to first single release, so,
      for example, <Monospace>BRASS MONKEY</Monospace> is listed as 1986 (on the
      Beastie Boys' album <i>License to Ill</i>) as opposed to the 1987 single.
      Only the most famous iteration of a song year is used. So, for example,
      George Thorogood and the Destroyers' 1977{' '}
      <Monospace>ONE BOURBON, ONE SCOTCH, ONE BEER</Monospace> is used instead
      of the original 1953{' '}
      <Monospace>ONE SCOTCH, ONE BOURBON, ONE BEER</Monospace> (also clued by
      the order of beverages), and <Monospace>RED, RED WINE</Monospace>'s year
      is 1983 for the chart-topping UB40 version as opposed to the obscure 1967
      Neil Diamond original.
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th>Song Title</th>
          <th>Clock type</th>
          <th>Year</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BEER FOR MY HORSES</td>
          <td>Billy Bass+digital</td>
          <td>2002</td>
          <td>
            An entire case of Sam Adams, but pour them all into a trough so I
            can take it out to them
          </td>
        </tr>
        <tr>
          <td>BEER IN MEXICO</td>
          <td>Billy Bass+digital</td>
          <td>2005</td>
          <td>Any local Cuauhtémoc cerveza</td>
        </tr>
        <tr>
          <td>BRASS MONKEY</td>
          <td>Clock radio</td>
          <td>1986</td>
          <td>
            Dark rum, vodka, and orange juice served in equal proportion,
            stirred on the rocks
          </td>
        </tr>
        <tr>
          <td>CHAMPAGNE FROM A PAPER CUP</td>
          <td>Roman numerals</td>
          <td>1997</td>
          <td>André served in a Dixie...</td>
        </tr>
        <tr>
          <td>COLD GIN</td>
          <td>School</td>
          <td>1974</td>
          <td>Tanqueray, served chilled</td>
        </tr>
        <tr>
          <td>ELDERBERRY WINE</td>
          <td>School</td>
          <td>1972</td>
          <td>A bottle of 2019 Wyldewood Spiced Elderberry Sweet</td>
        </tr>
        <tr>
          <td>FIREBALL</td>
          <td>Hourglass+digital</td>
          <td>2014</td>
          <td>Cinnamon-flavored Canadian whiskey</td>
        </tr>
        <tr>
          <td>FUNKY COLD MEDINA</td>
          <td>Clock radio</td>
          <td>1989</td>
          <td>
            Vodka, southern comfort, blue curacao topped with cranberry juice
            and a slice of kiwi
          </td>
        </tr>
        <tr>
          <td>GIN &amp; JUICE</td>
          <td>Roman numerals</td>
          <td>1994</td>
          <td>Bombay Sapphire and Mott's</td>
        </tr>
        <tr>
          <td>MILK AND ALCOHOL</td>
          <td>School</td>
          <td>1979</td>
          <td>
            Eggnog (Or if that's not in season, you can substitute a Dulce de
            Leche or a Bushwacker! Or just give me a bottle of booze and an
            empty bucket and point me to the barn)
          </td>
        </tr>
        <tr>
          <td>ONE BOURBON, ONE SCOTCH, ONE BEER</td>
          <td>School</td>
          <td>1977</td>
          <td>
            Maker's Mark, Glenlivet, and Bud Light, each in a separate glass
          </td>
        </tr>
        <tr>
          <td>ONE MINT JULEP</td>
          <td>Antique</td>
          <td>1952</td>
          <td>
            Kentucky bourbon, syrup, herb leaves, and seltzer on the rocks,
            garish hat optional
          </td>
        </tr>
        <tr>
          <td>RED RED WINE</td>
          <td>Clock radio</td>
          <td>1983</td>
          <td>Some very dark pinot noir</td>
        </tr>
        <tr>
          <td>RUM AND COCA COLA</td>
          <td>Antique</td>
          <td>1944</td>
          <td>Cuba Libre</td>
        </tr>
        <tr>
          <td>SANGRIA WINE</td>
          <td>Hourglass+digital</td>
          <td>2018</td>
          <td>Orange juice, brandy, and Rioja</td>
        </tr>
        <tr>
          <td>SCOTCH AND SODA</td>
          <td>Antique</td>
          <td>1958</td>
          <td>Whisky highball made with Laphroaig and Coca Cola</td>
        </tr>
        <tr>
          <td>STRAWBERRY WINE</td>
          <td>Roman numerals</td>
          <td>1996</td>
          <td>Boone's Farm&mdash;the one with "Hill" in the name</td>
        </tr>
        <tr>
          <td>TEN ROUNDS WITH JOSE CUERVO</td>
          <td>Hourglass+digital</td>
          <td>2011</td>
          <td>
            Nine shots of mass-market tequila... and one more for good measure!
          </td>
        </tr>
        <tr>
          <td>TENNESSEE WHISKEY</td>
          <td>Clock radio</td>
          <td>1981</td>
          <td>Finger of Collier and McKeel</td>
        </tr>
        <tr>
          <td>TWO PINA COLADAS</td>
          <td>Roman numerals</td>
          <td>1998</td>
          <td>
            A pair of cocktails with white rum, coconut milk, and fresh
            pineapple
          </td>
        </tr>
        <tr>
          <td>WHAT'S MADE MILWAUKEE FAMOUS</td>
          <td>School</td>
          <td>1968</td>
          <td>
            A can of Schlitz, my brother; and make sure the motto is legible.
          </td>
        </tr>
        <tr>
          <td>WHISKEY IN THE JAR</td>
          <td>School</td>
          <td>1962</td>
          <td>Jameson, served in a glass vessel</td>
        </tr>
        <tr>
          <td>WHITE LIGHTNING</td>
          <td>Antique</td>
          <td>1959</td>
          <td>Traditional southern moonshine</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We note that the songs are in alphabetical order by title. From here, it's
      a simple task to apply the clock time to the song title:
    </p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Time Shown on Clock</th>
          <th>Song Title</th>
          <th>Extracted Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11</td>
          <td>BEER FOR MY HORSES</td>
          <td>O</td>
        </tr>
        <tr>
          <td>5</td>
          <td>BEER IN MEXICO</td>
          <td>I</td>
        </tr>
        <tr>
          <td>11</td>
          <td>BRASS MONKEY</td>
          <td>Y</td>
        </tr>
        <tr>
          <td>10</td>
          <td>CHAMPAGNE FROM A PAPER CUP</td>
          <td>F</td>
        </tr>
        <tr>
          <td>3</td>
          <td>COLD GIN</td>
          <td>L</td>
        </tr>
        <tr>
          <td>8</td>
          <td>ELDERBERRY WINE</td>
          <td>R</td>
        </tr>
        <tr>
          <td>6</td>
          <td>FIREBALL</td>
          <td>A</td>
        </tr>
        <tr>
          <td>3</td>
          <td>FUNKY COLD MEDINA</td>
          <td>N</td>
        </tr>
        <tr>
          <td>2</td>
          <td>GIN &amp; JUICE</td>
          <td>I</td>
        </tr>
        <tr>
          <td>10</td>
          <td>MILK AND ALCOHOL</td>
          <td>C</td>
        </tr>
        <tr>
          <td>9</td>
          <td>ONE BOURBON, ONE SCOTCH, ONE BEER</td>
          <td>O</td>
        </tr>
        <tr>
          <td>12</td>
          <td>ONE MINT JULEP</td>
          <td>P</td>
        </tr>
        <tr>
          <td>6</td>
          <td>RED RED WINE</td>
          <td>D</td>
        </tr>
        <tr>
          <td>9</td>
          <td>RUM AND COCA COLA</td>
          <td>C</td>
        </tr>
        <tr>
          <td>7</td>
          <td>SANGRIA WINE</td>
          <td>A</td>
        </tr>
        <tr>
          <td>11</td>
          <td>SCOTCH AND SODA</td>
          <td>O</td>
        </tr>
        <tr>
          <td>12</td>
          <td>STRAWBERRY WINE</td>
          <td>I</td>
        </tr>
        <tr>
          <td>8</td>
          <td>TEN ROUNDS WITH JOSE CUERVO</td>
          <td>D</td>
        </tr>
        <tr>
          <td>8</td>
          <td>TENNESSEE WHISKEY</td>
          <td>E</td>
        </tr>
        <tr>
          <td>5</td>
          <td>TWO PINA COLADAS</td>
          <td>I</td>
        </tr>
        <tr>
          <td>12</td>
          <td>WHAT'S MADE MILWAUKEE FAMOUS</td>
          <td>L</td>
        </tr>
        <tr>
          <td>10</td>
          <td>WHISKEY IN THE JAR</td>
          <td>T</td>
        </tr>
        <tr>
          <td>8</td>
          <td>WHITE LIGHTNING</td>
          <td>G</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We could try anagramming these through Nutrimatic or Qat, but we could
      also look at the background of the bar: the number of bottles changes in
      each scene. We soon realize that the number of bottles ranges from 1 to 23.
      Putting our letters in that order reveals the following clue:
    </p>
    <Table className="table-4">
      <thead>
        <tr>
          <th>Number of Bottles</th>
          <th>Extracted Letter</th>
          <th>Time</th>
          <th>Song Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <b>F</b>
          </td>
          <td>10</td>
          <td>CHAMPAGNE FROM A PAPER CUP</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <b>I</b>
          </td>
          <td>2</td>
          <td>GIN &amp; JUICE</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <b>L</b>
          </td>
          <td>3</td>
          <td>COLD GIN</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <b>E</b>
          </td>
          <td>8</td>
          <td>TENNESSEE WHISKEY</td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <b>C</b>
          </td>
          <td>9</td>
          <td>RUM AND COCA COLA</td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            <b>O</b>
          </td>
          <td>9</td>
          <td>ONE BOURBON, ONE SCOTCH, ONE BEER</td>
        </tr>
        <tr>
          <td>7</td>
          <td>
            <b>P</b>
          </td>
          <td>12</td>
          <td>ONE MINT JULEP</td>
        </tr>
        <tr>
          <td>8</td>
          <td>
            <b>Y</b>
          </td>
          <td>11</td>
          <td>BRASS MONKEY</td>
        </tr>
        <tr>
          <td>9</td>
          <td>
            <b>D</b>
          </td>
          <td>6</td>
          <td>RED RED WINE</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <b>I</b>
          </td>
          <td>5</td>
          <td>TWO PINA COLADAS</td>
        </tr>
        <tr>
          <td>11</td>
          <td>
            <b>A</b>
          </td>
          <td>7</td>
          <td>SANGRIA WINE</td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            <b>L</b>
          </td>
          <td>12</td>
          <td>WHAT'S MADE MILWAUKEE FAMOUS</td>
        </tr>
        <tr>
          <td>13</td>
          <td>
            <b>O</b>
          </td>
          <td>11</td>
          <td>BEER FOR MY HORSES</td>
        </tr>
        <tr>
          <td>14</td>
          <td>
            <b>G</b>
          </td>
          <td>8</td>
          <td>WHITE LIGHTNING</td>
        </tr>
        <tr>
          <td>15</td>
          <td>
            <b>I</b>
          </td>
          <td>12</td>
          <td>STRAWBERRY WINE</td>
        </tr>
        <tr>
          <td>16</td>
          <td>
            <b>N</b>
          </td>
          <td>3</td>
          <td>FUNKY COLD MEDINA</td>
        </tr>
        <tr>
          <td>17</td>
          <td>
            <b>D</b>
          </td>
          <td>8</td>
          <td>TEN ROUNDS WITH JOSE CUERVO</td>
        </tr>
        <tr>
          <td>18</td>
          <td>
            <b>I</b>
          </td>
          <td>5</td>
          <td>BEER IN MEXICO</td>
        </tr>
        <tr>
          <td>19</td>
          <td>
            <b>C</b>
          </td>
          <td>10</td>
          <td>MILK AND ALCOHOL</td>
        </tr>
        <tr>
          <td>20</td>
          <td>
            <b>A</b>
          </td>
          <td>6</td>
          <td>FIREBALL</td>
        </tr>
        <tr>
          <td>21</td>
          <td>
            <b>T</b>
          </td>
          <td>10</td>
          <td>WHISKEY IN THE JAR</td>
        </tr>
        <tr>
          <td>22</td>
          <td>
            <b>O</b>
          </td>
          <td>11</td>
          <td>SCOTCH AND SODA</td>
        </tr>
        <tr>
          <td>23</td>
          <td>
            <b>R</b>
          </td>
          <td>8</td>
          <td>ELDERBERRY WINE</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This gives us the clue <Clue>FILE COPY DIALOG INDICATOR</Clue>, which is
      also known as a <Answerize>{ANSWER}</Answerize> (something that often
      takes a while to hit "Closing Time").
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(n + 3),
      .table-2 td:nth-child(4) {
        font-size: 80%;
      }
      .table-3 td:nth-child(2n + 1),
      .table-4 td:nth-child(-n + 3) {
        text-align: center;
      }
      .table-2 td:first-child,
      .table-3 td:nth-child(n + 2),
      .table-4 td:nth-child(2n) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
