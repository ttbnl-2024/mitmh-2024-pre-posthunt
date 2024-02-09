import React, { FC, useRef } from 'react';

import Crossword, { X, _ } from 'components/crossword';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'proof-it';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <Crossword
          // prettier-ignore
          data={[
            [ X, 1, 2, 3, X, X, X, 4, 5, 6, 7, 8, X, X, 9,10,11,12],
            [13, _, _, _,14, X,15, _, _, _, _, _, X,16, _, _, _, _],
            [17, _, _, _, _, X,18, _, _, _, _, _, X,19, _, _, _, _],
            [20, _, _, X,21,22, _, X,23, _, _, X,24, _, _, _, _, _],
            [ X,25, _,26, X,27, _,28, _, X,29,30, _, _, X,31, _, _],
            [ X, X,32, _,33, _, _, _, X, X, X,34, _, _,35, X, X, X],
            [ X,36, _, _, _, X,37, _,38, X,39, _, _, X,40,41,42, X],
            [43, _, _, _, _,44, _, X,45,46, _, _, X, X,47, _, _,48],
            [49, _, _, _, _, _, X,50, _, _, _, _,51, X, X,52, _, _],
            [53, _, _, X, X,54,55, _, _, _, _, X,56,57,58, _, _, _],
            [59, _, _,60, X, X,61, _, _, _, X,62, _, _, _, _, _, _],
            [ X,63, _, _, X,64, _, _, X,65,66, _, X,67, _, _, _, X],
            [ X, X, X,68,69, _, _, X, X, X,70, _,71, _, _, _, X, X],
            [72,73,74, X,75, _, _,76, X,77, _, _, _, X,78, _,79, X],
            [80, _, _,81, _, _, X,82,83, _, X,84, _,85, X,86, _,87],
            [88, _, _, _, _, X,89, _, _, _,90, _, X,91,92, _, _, _],
            [93, _, _, _, _, X,94, _, _, _, _, _, X,95, _, _, _, _],
            [96, _, _, _, X, X,97, _, _, _, _, X, X, X,98, _, _, X],
          ]}
        />
        <div className="prefer-2-col my-2">
          <div className="md:w-1/2">
            <h4 className="text-center">Across</h4>
            <ol className="my-1">
              <li value="1">Network for old movie buffs, for short</li>
              <li value="4">Trainee</li>
              <li value="9">Subject of the hidden theme</li>
              <li value="13">Pinky's friend (with "the")</li>
              <li value="15">Michael Jackson hit</li>
              <li value="16">First episode of a series</li>
              <li value="17">Medicare section</li>
              <li value="18">Heart and 13-A, e.g.</li>
              <li value="19">Bias</li>
              <li value="20">Nice friend?</li>
              <li value="21">Way to get to NJ from NYC</li>
              <li value="23">Like most of the films on 1-A</li>
              <li value="24">It’s hard to live down</li>
              <li value="25">Notable home to CTW shows</li>
              <li value="27">Goofs</li>
              <li value="29">"___ all be okay."</li>
              <li value="31">"___ Doubtfire"</li>
              <li value="32">Pinky's largest friend?</li>
              <li value="34">Bacardi and Captain Morgan, e.g.</li>
              <li value="36">Transfer cities, briefly</li>
              <li value="37">Texters' "What is wrong with you!?"</li>
              <li value="39">Way-out sentiment?</li>
              <li value="40">Wednesday's hairy cousin</li>
              <li value="43">Furnace emission</li>
              <li value="45">Bring in</li>
              <li value="47">Machu Picchu location</li>
              <li value="49">Price of release</li>
              <li value="50">Yoked pair</li>
              <li value="52">Lil ___ X</li>
              <li value="53">Meditation syllables</li>
              <li value="54">Lack of musical prowess</li>
              <li value="56">Session with a medium, typically</li>
              <li value="59">Pot</li>
              <li value="61">Riker’s rank on ST: TNG</li>
              <li value="62">Big-spending demographic group</li>
              <li value="63">Actress Issa</li>
              <li value="64">Enemy</li>
              <li value="65">Composer Berlin’s nickname, possibly</li>
              <li value="67">VA hospital concern</li>
              <li value="68">Tony-winning lyricist Ahrens</li>
              <li value="70">Container</li>
              <li value="72">Big Ten sch.</li>
              <li value="75">Russian city</li>
              <li value="77">Italian wine region</li>
              <li value="78">Rep who’s not Rep.?</li>
              <li value="80">Latin tongue</li>
              <li value="82">Diarist Anais</li>
              <li value="84">Ink</li>
              <li value="86">Saturday NBC staple</li>
              <li value="88">Fancy way of saying 39-A</li>
              <li value="89">Shinbones</li>
              <li value="91">Confused</li>
              <li value="93">"F ___" ('60s sitcom)</li>
              <li value="94">"Hypothetically speaking..."</li>
              <li value="95">
                Cycles of prosperity
              </li>
              <li value="96">Colors on the beach?</li>
              <li value="97">Actor Romero</li>
              <li value="98">
                Number of theme entries this puzzle is missing (which becomes
                the solution)
              </li>
            </ol>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-center">Down</h4>
            <ol className="my-1">
              <li value="1">Lady's lover</li>
              <li value="2">
                Expanse near both the Greater and Lesser Antilles
              </li>
              <li value="3">Location you may be solving this puzzle from</li>
              <li value="4">Each</li>
              <li value="5">Nigeria's largest city</li>
              <li value="6">And others</li>
              <li value="7">Forehead adornment</li>
              <li value="8">
                Vulcans and Romulans vis a vis Earthlings, in brief
              </li>
              <li value="9">Tepid</li>
              <li value="10">Spook</li>
              <li value="11">Cosmetic</li>
              <li value="12">
                URL starter which indicates an encrypted connection
              </li>
              <li value="13">
                Controversial chemical in plastics, for short
              </li>
              <li value="14">Pester</li>
              <li value="15">Painter who used to be found on 25-A</li>
              <li value="16">Sacred song</li>
              <li value="22">Something a cat hates to be</li>
              <li value="24">Edgy</li>
              <li value="26">Opera star Beverly</li>
              <li value="28">It's the end of the world, and they know it!</li>
              <li value="30">Attempting, informally</li>
              <li value="33">Disco dance</li>
              <li value="35">Drink slowly</li>
              <li value="36">Wanderer</li>
              <li value="38">Put a spell on</li>
              <li value="39">___ Rabbit</li>
              <li value="41">Server training?</li>
              <li value="42">Located</li>
              <li value="43">"I've Gotta ___" ("Peter Pan" song)</li>
              <li value="44">
                No. on a check
              </li>
              <li value="46">Pong creator</li>
              <li value="48">Exploits</li>
              <li value="50"> "I've got this!"</li>
              <li value="51">Big Ten sch.</li>
              <li value="55">Items on many menus</li>
              <li value="57">Actor Omar</li>
              <li value="58">"Coal Miner's Daughter" director Michael</li>
              <li value="60">Oscar winner Benicio ___ Toro</li>
              <li value="62">Actresses Nicole Brown and Mimieux</li>
              <li value="64">Low-cost home loan org.</li>
              <li value="66">Vehicles seen at a KOA, perhaps</li>
              <li value="69">Booty call text</li>
              <li value="71">"Unstoppable" singer</li>
              <li value="72">Actor Oliver</li>
              <li value="73">Libya's Gulf of ___</li>
              <li value="74">SAG or WGA</li>
              <li value="76">Utensil</li>
              <li value="77">"West Side Story" sister</li>
              <li value="79">Moon of Jupiter</li>
              <li value="81">GM cars of the 1990s</li>
              <li value="83">Wading bird</li>
              <li value="85">Key above Caps Lock</li>
              <li value="87">___ Vegas</li>
              <li value="89">Symptom of nervousness, maybe</li>
              <li value="90">Run</li>
              <li value="92">Also</li>
            </ol>
          </div>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
