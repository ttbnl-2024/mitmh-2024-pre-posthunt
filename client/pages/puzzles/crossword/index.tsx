import React, { FC, useRef } from 'react';

import Crossword, { X, _ } from 'components/crossword';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'crossword';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Crossword
          // prettier-ignore
          data={[
            [1,   2,  3,  4,  5,  6,  7,  X,  X,  8,  9, 10, 11, 12, 13],
            [14,  _,  _,  _,  _,  _,  _,  X,  X, 15,  _,  _,  _,  _,  _],
            [16,  _,  _,  _,  _,  _,  _,  X, 17,  _,  _,  _,  _,  _,  _],
            [ X,  X,  X,  X, 18,  _,  _, 19,  _,  _,  X, 20,  _,  _,  _],
            [21, 22, 23,  X,  X,  X, 24,  _,  _,  _, 25,  X, 26,  _,  _],
            [27,  _,  _, 28,  _, 29,  _,  _,  _,  _,  _, 30,  X,  X,  X],
            [31,  _,  _,  _,  X, 32,  _,  _,  X,  X, 33,  _, 34, 35, 36],
            [37,  _,  _,  _, 38,  _,  _,  X, 39, 40,  _,  _,  _,  _,  _],
            [41,  _,  _,  _,  _,  X,  X, 42,  _,  _,  X, 43,  _,  _,  _],
            [ X,  X,  X, 44,  _, 45, 46,  _,  _,  _,  _,  _,  _,  _,  _],
            [47, 48, 49,  X, 50,  _,  _,  _,  _,  X,  X,  X, 51,  _,  _],
            [52,  _,  _, 53,  X, 54,  _,  _,  _, 55, 56,  X,  X,  X,  X],
            [57,  _,  _,  _, 58,  _,  _,  X, 59,  _,  _, 60, 61, 62, 63],
            [64,  _,  _,  _,  _,  _,  X,  X, 65,  _,  _,  _,  _,  _,  _],
            [66,  _,  _,  _,  _,  _,  X,  X, 67,  _,  _,  _,  _,  _,  _],
          ]}
        />
        <div className="prefer-2-col my-4">
          <div className="md:w-1/2">
            <h4 className="text-center">Across</h4>
            <ol className="my-1">
              <li value="1">March Madness staple</li>
              <li value="8">Burman rice noodles</li>
              <li value="14">Rabbinical school</li>
              <li value="15">Me-first thinking</li>
              <li value="16">Common gasoline additive</li>
              <li value="17">Reception consideration</li>
              <li value="18">Shatner sci-fi novel series</li>
              <li value="20">Romance novelist Leigh</li>
              <li value="21">Mil. transport type</li>
              <li value="24">One who sniggles</li>
              <li value="26">Word before Remo or Salvador</li>
              <li value="27">Clue, part 1</li>
              <li value="31">
                Chicken tikka masala accompanier, perhaps
              </li>
              <li value="32">Certain QB protectors</li>
              <li value="33">Ella Yelich-O'Connor's stage name</li>
              <li value="37">Automaker Maserati</li>
              <li value="39">
                Like Bush 43’s presidency but not Bush 41’s
              </li>
              <li value="41">Really, really bothered</li>
              <li value="42">Slow to warm up, perhaps</li>
              <li value="43">Abbr. in many citations</li>
              <li value="44">Clue, part 2</li>
              <li value="47">___ rule</li>
              <li value="50">
                Former English spelling of South Korea’s second-largest
                city
              </li>
              <li value="51">
                Spot for gambling (or hibernating), perhaps
              </li>
              <li value="52">Verdant</li>
              <li value="54">Haggle over price, for instance</li>
              <li value="57">
                Folks who really do stop you if they've heard this one, for
                example
              </li>
              <li value="59">
              Excessively over-wordy, perhaps, with multiple phrases which
              can be excised, like this clue
              </li>
              <li value="64">
                Longtime sportswriter and ESPN personality J. A.
              </li>
              <li value="65">Flatter, as per the cliché</li>
              <li value="66">
                Something that when communicated might get you
                excommunicated
              </li>
              <li value="67">Holder of clubs (but not spades)</li>
            </ol>
          </div>

          <div className="md:w-1/2">
            <h4 className="text-center">Down</h4>
            <ol className="my-1">
              <li value="1">Advantageous position in a 1-Across</li>
              <li value="2">Like some former mil. leaders</li>
              <li value="3">Bruce in a series of Sam Raimi's movies</li>
              <li value="4">___-ching!</li>
              <li value="5">Suspect in "The Usual Suspects"</li>
              <li value="6">Bacchanalian cry of yore</li>
              <li value="7">Had a conversation with</li>
              <li value="8">More approachable?</li>
              <li value="9">Rep. strongly in favor of cuts</li>
              <li value="10">Coward of the theater</li>
              <li value="11">Early choppers</li>
              <li value="12">Dreamer from the game Hearthstone</li>
              <li value="13">Cricketer-turned-PM Khan</li>
              <li value="17">Little dogie</li>
              <li value="19">"Pee-___ Big Adventure"</li>
              <li value="21">Waker-upper for some</li>
              <li value="22">Rush drummer Neil</li>
              <li value="23">Toy picker-upper, perhaps</li>
              <li value="25">
                Hershey candy sometimes sold in cylindrical packaging
              </li>
              <li value="28">Like some headphones</li>
              <li value="29">New York subway inits.</li>
              <li value="30">Repeated melody, for example</li>
              <li value="34">
                Response to certain suits in a convention, maybe
              </li>
              <li value="35">Ambition</li>
              <li value="36">City near Bremen, Germany</li>
              <li value="38">Instructor’s offering?</li>
              <li value="39">A useful command</li>
              <li value="40">Casper locale, for short</li>
              <li value="42">Abbr. on a music score</li>
              <li value="45">Namesake of a notable fictional plant</li>
              <li value="46">
                Characters played by Jorja Fox and Marg Helgenberger, for two
              </li>
              <li value="47">Blacklisted screenwriter Bessie</li>
              <li value="48">Fabric that's an option for nappy dressers?</li>
              <li value="49">"___ Is Born"</li>
              <li value="53">Sharpen</li>
              <li value="55">
                Saint named in the title of a 1985 Demi Moore movie
              </li>
              <li value="56">Muddy the waters</li>
              <li value="58">Mag bigwigs</li>
              <li value="60">
                Org. that licenses gun dealers
              </li>
              <li value="61">Certain can opener</li>
              <li value="62">LAX info</li>
              <li value="63">60 min.</li>
            </ol>
          </div>
        </div>
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
