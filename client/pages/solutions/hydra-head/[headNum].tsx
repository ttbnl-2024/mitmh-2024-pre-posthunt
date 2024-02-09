import 'highlight.js/styles/default.min.css';
import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import Highlight from 'components/code';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import infImage0 from 'assets/solutions/infinity-book/image0.png';
import infImage1 from 'assets/solutions/infinity-book/image1.png';
import image0 from 'assets/solutions/reflections/image0.png';
import image1 from 'assets/solutions/reflections/image1.png';
import image2 from 'assets/solutions/reflections/image2.png';
import image3 from 'assets/solutions/reflections/image3.png';
import image4 from 'assets/solutions/reflections/image4.png';
import image5 from 'assets/solutions/reflections/image5.png';
import image6 from 'assets/solutions/reflections/image6.png';
import image7 from 'assets/solutions/reflections/image7.png';
import image8 from 'assets/solutions/reflections/image8.png';
import image9 from 'assets/solutions/reflections/image9.png';
import image10 from 'assets/solutions/reflections/image10.png';
import image11 from 'assets/solutions/reflections/image11.png';
import image12 from 'assets/solutions/reflections/image12.png';
import image13 from 'assets/solutions/reflections/image13.png';
import image14 from 'assets/solutions/reflections/image14.png';
import image15 from 'assets/solutions/reflections/image15.png';
import image16 from 'assets/solutions/reflections/image16.png';
import image17 from 'assets/solutions/reflections/image17.png';
import image18 from 'assets/solutions/reflections/image18.png';

interface HydraData {
  type: 'infinity-book' | '5050-matchups' | 'reflections';
  data: number | string | string[];
  number: number;
}

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const data = puzzleData.private as HydraData;

  const FFSoln = (
    <>
      <p>
        Each instance of the puzzle is presented as a series of crossword clues
        fighting each other with an amount of points. After solving clues, we
        notice there's multiple clues for each answer and if we found enough
        answers to count them, there are around 100 answers. Other than that, we
        can search for the answers we are sure of, think about the significance
        of the number 5050, notice the word "Shoot!" in the flavor text, and if
        we have the right instances, notice there are clues for "Rock", "Paper",
        and "Scissors." All of these point RPS (Rock Paper Scissors) 101. Each
        crossword clue is of the names of the hand gestures. This can help in
        identifying the more difficult clues. We must then realize that the"
        v.s." part of each line (as well as 5050 as there are 5,050 outcomes)
        clues the outcome between these gestures. There are differences between
        the umop and pythonanywhere sources, but the puzzle is constructed so
        these extract to the same letter. We finally need to index the point
        value into the outcome to get a letter which will spell the answer. A
        table of all clues and answers can be found in the appendix.
      </p>
      <AuthorsNotes>
        <p>
          Nick: I once had an idea a couple years ago of creating a puzzle set
          based on Pokemon types, this would of course have been the Rock
          puzzle, but with cluing the first 101 Pokemon instead of using
          crossword clues for the gestures. When we were told we needed
          procedurally generated puzzles, I decided to adapt the idea. The
          reason 5050 in the title doesn't have a comma is because it's somewhat
          of a pun on 50/50, as each fight has two competitors and either could
          win. Once the aha is revealed, 5050 applies in a different way in the
          number of total outcomes. Thanks to Timwi for the generation and the
          editors doing clue revision for helping with this puzzle.
        </p>
      </AuthorsNotes>
      <Appendix>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Sign</th>
              <th>Clue 1</th>
              <th>Clue 2</th>
              <th>Clue 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Monospace>1</Monospace>
              </td>
              <td>
                <Monospace>DYNAMITE</Monospace>
              </td>
              <td>TNT</td>
              <td>2020 BTS single</td>
              <td>Explosive stick</td>
            </tr>
            <tr>
              <td>
                <Monospace>2</Monospace>
              </td>
              <td>
                <Monospace>TORNADO</Monospace>
              </td>
              <td>Violent storm</td>
              <td>Transport to Oz</td>
              <td>Twister</td>
            </tr>
            <tr>
              <td>
                <Monospace>3</Monospace>
              </td>
              <td>
                <Monospace>QUICKSAND</Monospace>
              </td>
              <td>Mire</td>
              <td>Sinking ground</td>
              <td>Dangerous feature of bogs</td>
            </tr>
            <tr>
              <td>
                <Monospace>4</Monospace>
              </td>
              <td>
                <Monospace>PIT</Monospace>
              </td>
              <td>Peach core</td>
              <td>Orchestra's area</td>
              <td>Large hole</td>
            </tr>
            <tr>
              <td>
                <Monospace>5</Monospace>
              </td>
              <td>
                <Monospace>CHAIN</Monospace>
              </td>
              <td>Group of retail stores</td>
              <td>Connection of links</td>
              <td>Rarely used unit of length</td>
            </tr>
            <tr>
              <td>
                <Monospace>6</Monospace>
              </td>
              <td>
                <Monospace>GUN</Monospace>
              </td>
              <td>Revolver, e.g.</td>
              <td>Floor (it)</td>
              <td>Desperado's weapon</td>
            </tr>
            <tr>
              <td>
                <Monospace>7</Monospace>
              </td>
              <td>
                <Monospace>LAW</Monospace>
              </td>
              <td>Act of government</td>
              <td>Attorney's field</td>
              <td>Regulation</td>
            </tr>
            <tr>
              <td>
                <Monospace>8</Monospace>
              </td>
              <td>
                <Monospace>WHIP</Monospace>
              </td>
              <td>Make fluffier, perhaps</td>
              <td>Party disciplinarian</td>
              <td>Lion tamer's rope</td>
            </tr>
            <tr>
              <td>
                <Monospace>9</Monospace>
              </td>
              <td>
                <Monospace>SWORD</Monospace>
              </td>
              <td>Pointed blade</td>
              <td>Samurai's weapon</td>
              <td>Excalibur, for one</td>
            </tr>
            <tr>
              <td>
                <Monospace>10</Monospace>
              </td>
              <td>
                <Monospace>ROCK</Monospace>
              </td>
              <td>Sway back and forth</td>
              <td>Boulder</td>
              <td>Style of Led Zeppelin</td>
            </tr>
            <tr>
              <td>
                <Monospace>11</Monospace>
              </td>
              <td>
                <Monospace>DEATH</Monospace>
              </td>
              <td>Pratchett character that had Mort as an apprentice</td>
              <td>Rider of a pale horse</td>
              <td>The thirteenth Tarot card of the Major Arcana</td>
            </tr>
            <tr>
              <td>
                <Monospace>12</Monospace>
              </td>
              <td>
                <Monospace>WALL</Monospace>
              </td>
              <td>New York street associated with financial markets</td>
              <td>One of two in every episode of Only Connect</td>
              <td>Divider between rooms</td>
            </tr>
            <tr>
              <td>
                <Monospace>13</Monospace>
              </td>
              <td>
                <Monospace>SUN</Monospace>
              </td>
              <td>It may dawn on you</td>
              <td>Earth's star</td>
              <td>Lie on the beach</td>
            </tr>
            <tr>
              <td>
                <Monospace>14</Monospace>
              </td>
              <td>
                <Monospace>CAMERA</Monospace>
              </td>
              <td>Smartphone feature Google Lens uses</td>
              <td>Photographic device</td>
              <td>Latin for a judge's chambers</td>
            </tr>
            <tr>
              <td>
                <Monospace>15</Monospace>
              </td>
              <td>
                <Monospace>FIRE</Monospace>
              </td>
              <td>Take a shot (at)</td>
              <td>Bake in a kiln</td>
              <td>It's at the tip for a torch</td>
            </tr>
            <tr>
              <td>
                <Monospace>16</Monospace>
              </td>
              <td>
                <Monospace>CHAINSAW</Monospace>
              </td>
              <td>Jason's primary weapon in "Friday the 13th"</td>
              <td>It makes an "rrr" sound while it's running</td>
              <td>Something Stihl makes</td>
            </tr>
            <tr>
              <td>
                <Monospace>17</Monospace>
              </td>
              <td>
                <Monospace>SCHOOL</Monospace>
              </td>
              <td>Academy</td>
              <td>Group of fish</td>
              <td>Where the 3 R's are taught</td>
            </tr>
            <tr>
              <td>
                <Monospace>18</Monospace>
              </td>
              <td>
                <Monospace>SCISSORS</Monospace>
              </td>
              <td>Cutting tool often used for arts and crafts</td>
              <td>Shears</td>
              <td>Barber's tool</td>
            </tr>
            <tr>
              <td>
                <Monospace>19</Monospace>
              </td>
              <td>
                <Monospace>POISON</Monospace>
              </td>
              <td>Toxic substance</td>
              <td>Maliciously tamper with, as food</td>
              <td>Exert a corrupting influence on</td>
            </tr>
            <tr>
              <td>
                <Monospace>20</Monospace>
              </td>
              <td>
                <Monospace>CAGE</Monospace>
              </td>
              <td>Zoo enclosure</td>
              <td>Part of a rabbit hutch</td>
              <td>Physically box in</td>
            </tr>
            <tr>
              <td>
                <Monospace>21</Monospace>
              </td>
              <td>
                <Monospace>AXE</Monospace>
              </td>
              <td>Chopper that doesn't fly</td>
              <td>Tomahawk or hatchet</td>
              <td>Heavily marketed body spray</td>
            </tr>
            <tr>
              <td>
                <Monospace>22</Monospace>
              </td>
              <td>
                <Monospace>PEACE</Monospace>
              </td>
              <td>Nobel Prize category</td>
              <td>Tranquility</td>
              <td>"See you later!"</td>
            </tr>
            <tr>
              <td>
                <Monospace>23</Monospace>
              </td>
              <td>
                <Monospace>COMPUTER</Monospace>
              </td>
              <td>PC or Mac</td>
              <td>Laptop, for one</td>
              <td>ENIAC is a notable one</td>
            </tr>
            <tr>
              <td>
                <Monospace>24</Monospace>
              </td>
              <td>
                <Monospace>CASTLE</Monospace>
              </td>
              <td>Rook, in chess</td>
              <td>Fortress</td>
              <td>Monarch's domain</td>
            </tr>
            <tr>
              <td>
                <Monospace>25</Monospace>
              </td>
              <td>
                <Monospace>SNAKE</Monospace>
              </td>
              <td>Plumber's clog-buster</td>
              <td>Slither</td>
              <td>Limbless reptile</td>
            </tr>
            <tr>
              <td>
                <Monospace>26</Monospace>
              </td>
              <td>
                <Monospace>BLOOD</Monospace>
              </td>
              <td>Lineage</td>
              <td>Red Red Cross supply</td>
              <td>It might ooze from a paper cut</td>
            </tr>
            <tr>
              <td>
                <Monospace>27</Monospace>
              </td>
              <td>
                <Monospace>PORCUPINE</Monospace>
              </td>
              <td>Member of the family Hystricidae</td>
              <td>Rodent covered in quills</td>
              <td>Hedgehog lookalike</td>
            </tr>
            <tr>
              <td>
                <Monospace>28</Monospace>
              </td>
              <td>
                <Monospace>VULTURE</Monospace>
              </td>
              <td>Carrion eater</td>
              <td>Bird that symbolizes ghoulish opportunism</td>
              <td>Flying scavenger</td>
            </tr>
            <tr>
              <td>
                <Monospace>29</Monospace>
              </td>
              <td>
                <Monospace>MONKEY</Monospace>
              </td>
              <td>
                "If I Had $1,000,000" purchase for which the singer asks
                "Haven't you always wanted [one]?"
              </td>
              <td>Island in a LucasArts game series</td>
              <td>Goof (around)</td>
            </tr>
            <tr>
              <td>
                <Monospace>30</Monospace>
              </td>
              <td>
                <Monospace>KING</Monospace>
              </td>
              <td>Highest-ranking face card</td>
              <td>Double-decker checker</td>
              <td>Charles, as of May 2023</td>
            </tr>
            <tr>
              <td>
                <Monospace>31</Monospace>
              </td>
              <td>
                <Monospace>QUEEN</Monospace>
              </td>
              <td>Supervisor of drones</td>
              <td>Victoria or Elizabeth</td>
              <td>It's worth nine pawns in chess</td>
            </tr>
            <tr>
              <td>
                <Monospace>32</Monospace>
              </td>
              <td>
                <Monospace>PRINCE</Monospace>
              </td>
              <td>Royal son</td>
              <td>Charming title?</td>
              <td>William or Harry</td>
            </tr>
            <tr>
              <td>
                <Monospace>33</Monospace>
              </td>
              <td>
                <Monospace>PRINCESS</Monospace>
              </td>
              <td>Belle or Jasmine</td>
              <td>Cruise line headquartered in Santa Clarita, CA</td>
              <td>Frog kisser</td>
            </tr>
            <tr>
              <td>
                <Monospace>34</Monospace>
              </td>
              <td>
                <Monospace>POLICE</Monospace>
              </td>
              <td>Patrol</td>
              <td>Officers</td>
              <td>The boys in blue</td>
            </tr>
            <tr>
              <td>
                <Monospace>35</Monospace>
              </td>
              <td>
                <Monospace>WOMAN</Monospace>
              </td>
              <td>Eve was the first one, as per the Bible</td>
              <td>Lady or madam</td>
              <td>Adult girl</td>
            </tr>
            <tr>
              <td>
                <Monospace>36</Monospace>
              </td>
              <td>
                <Monospace>BABY</Monospace>
              </td>
              <td>Infant</td>
              <td>Stork's delivery</td>
              <td>Gerber's eater</td>
            </tr>
            <tr>
              <td>
                <Monospace>37</Monospace>
              </td>
              <td>
                <Monospace>MAN</Monospace>
              </td>
              <td>Answer to the Sphinx's riddle</td>
              <td>Provide staff to</td>
              <td>Gent or fellow</td>
            </tr>
            <tr>
              <td>
                <Monospace>38</Monospace>
              </td>
              <td>
                <Monospace>HOME</Monospace>
              </td>
              <td>Starting place on one's browser</td>
              <td>"Where the heart is"</td>
              <td>Baseball plate</td>
            </tr>
            <tr>
              <td>
                <Monospace>39</Monospace>
              </td>
              <td>
                <Monospace>TRAIN</Monospace>
              </td>
              <td>Back part of a wedding gown</td>
              <td>Instruct and discipline</td>
              <td>Locomotive</td>
            </tr>
            <tr>
              <td>
                <Monospace>40</Monospace>
              </td>
              <td>
                <Monospace>CAR</Monospace>
              </td>
              <td>Ford or Toyota</td>
              <td>Automobile</td>
              <td>Taxi or limousine, essentially</td>
            </tr>
            <tr>
              <td>
                <Monospace>41</Monospace>
              </td>
              <td>
                <Monospace>NOISE</Monospace>
              </td>
              <td>Irrelevant info</td>
              <td>Loud sound</td>
              <td>Crash or honk</td>
            </tr>
            <tr>
              <td>
                <Monospace>42</Monospace>
              </td>
              <td>
                <Monospace>BICYCLE</Monospace>
              </td>
              <td>Tour de France transport</td>
              <td>Two-wheeled vehicle</td>
              <td>Pedaler's ride</td>
            </tr>
            <tr>
              <td>
                <Monospace>43</Monospace>
              </td>
              <td>
                <Monospace>TREE</Monospace>
              </td>
              <td>Genealogist's work</td>
              <td>Oak, e.g.</td>
              <td>It may bear fruit (or nuts)</td>
            </tr>
            <tr>
              <td>
                <Monospace>44</Monospace>
              </td>
              <td>
                <Monospace>TURNIP</Monospace>
              </td>
              <td>Brassica</td>
              <td>Rutabaga</td>
              <td>Root vegetable</td>
            </tr>
            <tr>
              <td>
                <Monospace>45</Monospace>
              </td>
              <td>
                <Monospace>DUCK</Monospace>
              </td>
              <td>Get down!</td>
              <td>Mallard, e.g.</td>
              <td>Quacker</td>
            </tr>
            <tr>
              <td>
                <Monospace>46</Monospace>
              </td>
              <td>
                <Monospace>WOLF</Monospace>
              </td>
              <td>Gulp (down)</td>
              <td>"Big bad" pig harasser</td>
              <td>Wild canine pack animal</td>
            </tr>
            <tr>
              <td>
                <Monospace>47</Monospace>
              </td>
              <td>
                <Monospace>CAT</Monospace>
              </td>
              <td>Witch's familiar</td>
              <td>Object of ailurophobia</td>
              <td>Feline companion</td>
            </tr>
            <tr>
              <td>
                <Monospace>48</Monospace>
              </td>
              <td>
                <Monospace>BIRD</Monospace>
              </td>
              <td>"The Incredibles" director Brad</td>
              <td>Avian creature</td>
              <td>Eagle or hawk</td>
            </tr>
            <tr>
              <td>
                <Monospace>49</Monospace>
              </td>
              <td>
                <Monospace>FISH</Monospace>
              </td>
              <td>Angler's prize</td>
              <td>Cast a line</td>
              <td>Carp, e.g.</td>
            </tr>
            <tr>
              <td>
                <Monospace>50</Monospace>
              </td>
              <td>
                <Monospace>SPIDER</Monospace>
              </td>
              <td>Arachnid</td>
              <td>Eight-legged creature</td>
              <td>Black widow, e.g.</td>
            </tr>
            <tr>
              <td>
                <Monospace>51</Monospace>
              </td>
              <td>
                <Monospace>COCKROACH</Monospace>
              </td>
              <td>Archy of Don Marquis' "Archy and Mehitabel", for one</td>
              <td>Beetle-like insect</td>
              <td>Annoying bug with a reputation for surviving anything</td>
            </tr>
            <tr>
              <td>
                <Monospace>52</Monospace>
              </td>
              <td>
                <Monospace>BRAIN</Monospace>
              </td>
              <td>Intellectual capacity</td>
              <td>Noggin</td>
              <td>Cerebral matter</td>
            </tr>
            <tr>
              <td>
                <Monospace>53</Monospace>
              </td>
              <td>
                <Monospace>COMMUNITY</Monospace>
              </td>
              <td>Neighborhood</td>
              <td>Sitcom created by Dan Harmon</td>
              <td>People living in one locality</td>
            </tr>
            <tr>
              <td>
                <Monospace>54</Monospace>
              </td>
              <td>
                <Monospace>CROSS</Monospace>
              </td>
              <td>Easily irritated</td>
              <td>Norwegian flag feature</td>
              <td>Go to the other side of a road</td>
            </tr>
            <tr>
              <td>
                <Monospace>55</Monospace>
              </td>
              <td>
                <Monospace>MONEY</Monospace>
              </td>
              <td>Coins and dollars</td>
              <td>What chips represent in casinos</td>
              <td>Greenbacks</td>
            </tr>
            <tr>
              <td>
                <Monospace>56</Monospace>
              </td>
              <td>
                <Monospace>VAMPIRE</Monospace>
              </td>
              <td>Monstrous blood sucker</td>
              <td>Werewolf foe in the Twilight series</td>
              <td>Dracula, for one</td>
            </tr>
            <tr>
              <td>
                <Monospace>57</Monospace>
              </td>
              <td>
                <Monospace>SPONGE</Monospace>
              </td>
              <td>Bathroom scrubber</td>
              <td>Holey reef dweller</td>
              <td>Wipe up</td>
            </tr>
            <tr>
              <td>
                <Monospace>58</Monospace>
              </td>
              <td>
                <Monospace>CHURCH</Monospace>
              </td>
              <td>Chapel</td>
              <td>Building for worship</td>
              <td>Place to hear choir music, say</td>
            </tr>
            <tr>
              <td>
                <Monospace>59</Monospace>
              </td>
              <td>
                <Monospace>BUTTER</Monospace>
              </td>
              <td>Spread for a scone</td>
              <td>Dairy product</td>
              <td>It's made in a churn</td>
            </tr>
            <tr>
              <td>
                <Monospace>60</Monospace>
              </td>
              <td>
                <Monospace>BOOK</Monospace>
              </td>
              <td>Reserve lodgings</td>
              <td>Genesis or Exodus</td>
              <td>Bound pages</td>
            </tr>
            <tr>
              <td>
                <Monospace>61</Monospace>
              </td>
              <td>
                <Monospace>PAPER</Monospace>
              </td>
              <td>Origami material</td>
              <td>Submission to "Nature"</td>
              <td>"The Daily Planet" is one</td>
            </tr>
            <tr>
              <td>
                <Monospace>62</Monospace>
              </td>
              <td>
                <Monospace>CLOUD</Monospace>
              </td>
              <td>Cumulus, for one</td>
              <td>Obfuscate</td>
              <td>Modern storage network, with "the"</td>
            </tr>
            <tr>
              <td>
                <Monospace>63</Monospace>
              </td>
              <td>
                <Monospace>AIRPLANE</Monospace>
              </td>
              <td>1980 Zucker movie</td>
              <td>Jet</td>
              <td>Folded flier, perhaps</td>
            </tr>
            <tr>
              <td>
                <Monospace>64</Monospace>
              </td>
              <td>
                <Monospace>MOON</Monospace>
              </td>
              <td>Natural satellite</td>
              <td>It has eight phases</td>
              <td>Where Armstrong walked</td>
            </tr>
            <tr>
              <td>
                <Monospace>65</Monospace>
              </td>
              <td>
                <Monospace>GRASS</Monospace>
              </td>
              <td>You may be told to keep off of this</td>
              <td>Blades cut by blades</td>
              <td>Wimbledon court surface</td>
            </tr>
            <tr>
              <td>
                <Monospace>66</Monospace>
              </td>
              <td>
                <Monospace>FILM</Monospace>
              </td>
              <td>Thin coating</td>
              <td>Record video</td>
              <td>Motion picture</td>
            </tr>
            <tr>
              <td>
                <Monospace>67</Monospace>
              </td>
              <td>
                <Monospace>TOILET</Monospace>
              </td>
              <td>Bathroom fixture</td>
              <td>Seat in the "reading room"</td>
              <td>Latrine</td>
            </tr>
            <tr>
              <td>
                <Monospace>68</Monospace>
              </td>
              <td>
                <Monospace>AIR</Monospace>
              </td>
              <td>Tire necessity</td>
              <td>Ventilate</td>
              <td>Broadcast on radio</td>
            </tr>
            <tr>
              <td>
                <Monospace>69</Monospace>
              </td>
              <td>
                <Monospace>PLANET</Monospace>
              </td>
              <td>Pluto used to be one</td>
              <td>Globe</td>
              <td>Jupiter or Uranus</td>
            </tr>
            <tr>
              <td>
                <Monospace>70</Monospace>
              </td>
              <td>
                <Monospace>GUITAR</Monospace>
              </td>
              <td>Stringed instrument</td>
              <td>Variants of this include acoustic and bass</td>
              <td>Banjo's cousin</td>
            </tr>
            <tr>
              <td>
                <Monospace>71</Monospace>
              </td>
              <td>
                <Monospace>BOWL</Monospace>
              </td>
              <td>Roll for a strike</td>
              <td>Where to have your Cheerios</td>
              <td>Postseason game</td>
            </tr>
            <tr>
              <td>
                <Monospace>72</Monospace>
              </td>
              <td>
                <Monospace>CUP</Monospace>
              </td>
              <td>Disposable coffee container</td>
              <td>Sought-after Stanley of the NHL</td>
              <td>Chalice</td>
            </tr>
            <tr>
              <td>
                <Monospace>73</Monospace>
              </td>
              <td>
                <Monospace>BEER</Monospace>
              </td>
              <td>Alcoholic beverage</td>
              <td>German astronomer with a Martian crater</td>
              <td>Drink brewed with hops</td>
            </tr>
            <tr>
              <td>
                <Monospace>74</Monospace>
              </td>
              <td>
                <Monospace>RAIN</Monospace>
              </td>
              <td>Precipitation</td>
              <td>Outdoor activities ruiner</td>
              <td>Drought ender</td>
            </tr>
            <tr>
              <td>
                <Monospace>75</Monospace>
              </td>
              <td>
                <Monospace>WATER</Monospace>
              </td>
              <td>Melted ice</td>
              <td>Tend to plants</td>
              <td>Half or more of one's body, according to science</td>
            </tr>
            <tr>
              <td>
                <Monospace>76</Monospace>
              </td>
              <td>
                <Monospace>TV</Monospace>
              </td>
              <td>The small screen</td>
              <td>Brits call it the telly</td>
              <td>Where NBC and CBS appear</td>
            </tr>
            <tr>
              <td>
                <Monospace>77</Monospace>
              </td>
              <td>
                <Monospace>RAINBOW</Monospace>
              </td>
              <td>Colored arc</td>
              <td>Multi-hued sight after a storm</td>
              <td>Light split from a prism</td>
            </tr>
            <tr>
              <td>
                <Monospace>78</Monospace>
              </td>
              <td>
                <Monospace>UFO</Monospace>
              </td>
              <td>Spaceship</td>
              <td>Flying saucer</td>
              <td>Aircraft often depicted as stealing livestock</td>
            </tr>
            <tr>
              <td>
                <Monospace>79</Monospace>
              </td>
              <td>
                <Monospace>ALIEN</Monospace>
              </td>
              <td>Little green man</td>
              <td>E.T. or Stitch</td>
              <td>Foreigner</td>
            </tr>
            <tr>
              <td>
                <Monospace>80</Monospace>
              </td>
              <td>
                <Monospace>PRAYER</Monospace>
              </td>
              <td>Appeal to a deity</td>
              <td>Fervent request</td>
              <td>Small chance, informally</td>
            </tr>
            <tr>
              <td>
                <Monospace>81</Monospace>
              </td>
              <td>
                <Monospace>MOUNTAIN</Monospace>
              </td>
              <td>Giant hill</td>
              <td>Everest or Kilimanjaro</td>
              <td>Alpine location</td>
            </tr>
            <tr>
              <td>
                <Monospace>82</Monospace>
              </td>
              <td>
                <Monospace>SATAN</Monospace>
              </td>
              <td>Not-so friendly anagram of a jolly Christmas man</td>
              <td>Being also known as Lucifer</td>
              <td>
                Personification of evil sometimes associated with the West by
                Mideast leaders
              </td>
            </tr>
            <tr>
              <td>
                <Monospace>83</Monospace>
              </td>
              <td>
                <Monospace>DRAGON</Monospace>
              </td>
              <td>Serpentine mythical beast</td>
              <td>Toothless or Smaug</td>
              <td>Wyvern</td>
            </tr>
            <tr>
              <td>
                <Monospace>84</Monospace>
              </td>
              <td>
                <Monospace>DIAMOND</Monospace>
              </td>
              <td>April birthstone</td>
              <td>It's ten on the Mohs scale</td>
              <td>Where your Red Sox and your White Sox might match?</td>
            </tr>
            <tr>
              <td>
                <Monospace>85</Monospace>
              </td>
              <td>
                <Monospace>PLATINUM</Monospace>
              </td>
              <td>Silver-white metal</td>
              <td>Element number seventy-eight</td>
              <td>Type of record awarded for selling one million albums</td>
            </tr>
            <tr>
              <td>
                <Monospace>86</Monospace>
              </td>
              <td>
                <Monospace>GOLD</Monospace>
              </td>
              <td>Winner's medal</td>
              <td>Alchemist's quest</td>
              <td>Chemical element Au</td>
            </tr>
            <tr>
              <td>
                <Monospace>87</Monospace>
              </td>
              <td>
                <Monospace>DEVIL</Monospace>
              </td>
              <td>Tasmanian creature from Looney Tunes</td>
              <td>Make spicy, as boiled eggs</td>
              <td>Duke's blue mascot</td>
            </tr>
            <tr>
              <td>
                <Monospace>88</Monospace>
              </td>
              <td>
                <Monospace>FENCE</Monospace>
              </td>
              <td>Fight with a foil or a saber</td>
              <td>Backyard perimeter</td>
              <td>Dealer in stolen goods</td>
            </tr>
            <tr>
              <td>
                <Monospace>89</Monospace>
              </td>
              <td>
                <Monospace>VIDEO GAME</Monospace>
              </td>
              <td>Super Mario Bros., for one</td>
              <td>NES cartridge</td>
              <td>Purchase for your Xbox</td>
            </tr>
            <tr>
              <td>
                <Monospace>90</Monospace>
              </td>
              <td>
                <Monospace>MATH</Monospace>
              </td>
              <td>Trig. or calc.</td>
              <td>Subject of numbers and calculations</td>
              <td>Archimedes's forte</td>
            </tr>
            <tr>
              <td>
                <Monospace>91</Monospace>
              </td>
              <td>
                <Monospace>ROBOT</Monospace>
              </td>
              <td>Humanoid automated machine</td>
              <td>R2-D2 is one</td>
              <td>Your Roomba, for instance</td>
            </tr>
            <tr>
              <td>
                <Monospace>92</Monospace>
              </td>
              <td>
                <Monospace>HEART</Monospace>
              </td>
              <td>Valentine's symbol</td>
              <td>Hit point icon in many games</td>
              <td>Beating organ</td>
            </tr>
            <tr>
              <td>
                <Monospace>93</Monospace>
              </td>
              <td>
                <Monospace>ELECTRICITY</Monospace>
              </td>
              <td>Voltage</td>
              <td>It powers lightbulbs</td>
              <td>Battery juice</td>
            </tr>
            <tr>
              <td>
                <Monospace>94</Monospace>
              </td>
              <td>
                <Monospace>LIGHTNING</Monospace>
              </td>
              <td>Thunder's partner</td>
              <td>Gigawatt-level flash</td>
              <td>Word before bolt and rod</td>
            </tr>
            <tr>
              <td>
                <Monospace>95</Monospace>
              </td>
              <td>
                <Monospace>MEDUSA</Monospace>
              </td>
              <td>Stone-gazing figure</td>
              <td>Monster slain by Perseus</td>
              <td>Woman whose hair might hiss</td>
            </tr>
            <tr>
              <td>
                <Monospace>96</Monospace>
              </td>
              <td>
                <Monospace>POWER</Monospace>
              </td>
              <td>Strength</td>
              <td>Energy applied to doing work</td>
              <td>Coercive ability</td>
            </tr>
            <tr>
              <td>
                <Monospace>97</Monospace>
              </td>
              <td>
                <Monospace>LASER</Monospace>
              </td>
              <td>Modern surgical aid</td>
              <td>Lecturer's pointing gadget, at heart</td>
              <td>Intense beam</td>
            </tr>
            <tr>
              <td>
                <Monospace>98</Monospace>
              </td>
              <td>
                <Monospace>NUKE</Monospace>
              </td>
              <td>To microwave, slangily</td>
              <td>Atomize</td>
              <td>Big bomb</td>
            </tr>
            <tr>
              <td>
                <Monospace>99</Monospace>
              </td>
              <td>
                <Monospace>SKY</Monospace>
              </td>
              <td>Singer-songwriter Ferreira</td>
              <td>The heavens</td>
              <td>Area between Earth and outer space</td>
            </tr>
            <tr>
              <td>
                <Monospace>100</Monospace>
              </td>
              <td>
                <Monospace>TANK</Monospace>
              </td>
              <td>Propane container</td>
              <td>Suffer rapid decline, as stock prices</td>
              <td>Vehicle with a turret</td>
            </tr>
            <tr>
              <td>
                <Monospace>101</Monospace>
              </td>
              <td>
                <Monospace>HELICOPTER</Monospace>
              </td>
              <td>Bladed aircraft</td>
              <td>Apache, for one</td>
              <td>Whirlybird</td>
            </tr>
          </tbody>
        </Table>
      </Appendix>
    </>
  );

  const Reflection = (
    <>
      <p>
        The puzzle comes in three variations of varying difficulty. Each
        variation appears on deeper levels.
      </p>
      <h3>Variation 1: perpendicular protrusions</h3>
      <p>
        <SheetableImage alt="" src={image0} title="" />
      </p>
      <p>The following observations are required to solve this:</p>
      <ul>
        <li>
          The little stubs protruding from the long lines represent consecutive
          binary numbers, providing an ordering.
        </li>
        <li>
          Each protrusion, if extended, goes through the center of one of the
          shapes on the left:
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image1} title="" />
      </p>
      <p>
        If we now follow the instruction in the title of the puzzle and reflect
        the shapes across their corresponding axes, the shapes end up enclosing
        very specific parts of the pattern on the right.
      </p>
      <p>
        Here is a step-by-step description of how one might do this in Inkscape
        (which is the intuitive choice of software given that the images are
        SVGs):
      </p>
      <ol>
        <li>
          Use the measure tool (M) to find the angle at which the axis is
          tilted. As shown below, axis #1 in our example has a tilt of 97.93°
          (green).
        </li>
      </ol>
      <p>
        <SheetableImage alt="" src={image2} title="" className="mx-auto" />
      </p>
      <ol>
        <li>Select the axis and the shape and group them together (Ctrl+G).</li>
        <li>
          Click our group again to show the rotation controls. Move the rotation
          center to any point on the axis (use the snapping feature to easily
          make this super precise).
        </li>
        <li>
          Use the rotation dialog (Ctrl+Shift+M) to rotate the group about the
          angle just determined. This will make the axis horizontal.
        </li>
        <li>
          Flip the group vertically (V). This will flip the group across the
          center of rotation we already set.
        </li>
        <li>
          Rotate the group back in the opposite direction using the rotation
          dialog.
        </li>
      </ol>
      <p>
        After doing this for each shape/axis pair, the example looks as follows.
      </p>
      <p>
        <SheetableImage alt="" src={image3} title="" />
      </p>
      <p>
        Looking at the enclosed areas in the order as specified by the binary
        code allows us to read the answer to the puzzle, which in this example
        is <Monospace>LUXURY HOTEL</Monospace>.
      </p>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <SheetableImage alt="" src={image4} title="" />
        <SheetableImage alt="" src={image5} title="" />
        <SheetableImage alt="" src={image6} title="" />
        <SheetableImage alt="" src={image7} title="" />
        <SheetableImage alt="" src={image8} title="" />
        <SheetableImage alt="" src={image9} title="" />
        <SheetableImage alt="" src={image10} title="" />
        <SheetableImage alt="" src={image11} title="" />
        <SheetableImage alt="" src={image12} title="" />
        <SheetableImage alt="" src={image13} title="" />
        <SheetableImage alt="" src={image14} title="" />
      </div>
      <h3>Variation 2: Morse code</h3>
      <p>
        In this variation, we no longer have the perpendicular protrusions to
        help us find the ordering or which shape goes with which axis. Instead,
        the shapes and axes now have dashed/dotted patterns:
      </p>
      <p>
        <SheetableImage alt="" src={image15} title="" />
      </p>
      <p>Zooming in, we can read these patters as Morse code:</p>
      <p>
        <SheetableImage alt="" src={image16} title="" className="mx-auto" />
      </p>
      <p>
        Initially, one might consider that the boxes on the left could be G or
        W, and A or N, respectively, depending on which direction the Morse code
        is read. Similarly, the axis labeled U could be D if read from bottom
        up.
      </p>
      <p>
        However, we discover that the shapes are labeled with letters in
        alphabetical order from A onwards if we consistently read them all in
        clockwise order. Similarly, the axes are labeled in reverse alphabetical
        order from Z if we read them from top to bottom. This confirms that this
        is the correct reading.
      </p>
      <p>
        In keeping with the reflections theme, we conclude that shape A
        corresponds to axis Z, shape B to axis Y, and so on. The rest proceeds
        as in Variation 1.
      </p>
      <h3>Variation 3: classes</h3>
      <p>
        In this variation, the shapes are back to their solid outlines, while
        the axes all show the word <b>CLASS</b> in Morse code. This is a cue for
        us to look at the SVG source to see if they have a CSS class assigned,
        and it turns out that they do. Using the Inspector in the browser
        console (F12), we can see them immediately:
      </p>
      <p>
        <SheetableImage alt="" src={image17} title="" className="mx-auto" />
      </p>
      <p>
        We can associate shapes with axes by noting that they come in pairs that
        are thematically closely related:
      </p>
      <Table>
        <thead>
          <tr>
            <th>Axis</th>
            <th>Shape</th>
            <th>Theme</th>
            <th>Axis</th>
            <th>Shape</th>
            <th>Theme</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>drought</td>
            <td>hail</td>
            <td>weather</td>
            <td>trivial-pursuit</td>
            <td>hanabi</td>
            <td>games</td>
          </tr>
          <tr>
            <td>tuba</td>
            <td>flute</td>
            <td>instruments</td>
            <td>arm</td>
            <td>waist</td>
            <td>body parts</td>
          </tr>
          <tr>
            <td>carnation</td>
            <td>marigold</td>
            <td>flowers</td>
            <td>bluebird</td>
            <td>warbler</td>
            <td>birds</td>
          </tr>
          <tr>
            <td>yak</td>
            <td>whale</td>
            <td>mammals</td>
            <td>measuring-cup</td>
            <td>oven-mitts</td>
            <td>kitchen items</td>
          </tr>
          <tr>
            <td>one</td>
            <td>sixteen</td>
            <td>numbers</td>
            <td>jive</td>
            <td>polka</td>
            <td>dances</td>
          </tr>
          <tr>
            <td>kandinsky</td>
            <td>da-vinci</td>
            <td>painters</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <p>
        Besides the ones shown, the other themes used in other instances of this
        puzzle are: fruits (apple, avocado, etc.), modes of transport (airplane,
        bicycle, etc.), composers (Bach, Beethoven, etc.), gemstones (agate,
        alexandrite, etc.), chemical elements (antimony, argon, etc.), capital
        cities (ankara, athens, etc.), constellations (andromeda, antlia, etc.),
        and insects (ant, aphid, etc.).
      </p>
      <p>
        Of course, the class names can be seen in Inkscape too (Ctrl+Shift+X).
        And while we're on the subject of Inkscape, as soon as we open this SVG
        in it, we notice that the axes actually protrude out from the top of the
        viewport, each by a unique amount:
      </p>
      <p>
        <SheetableImage alt="" src={image18} title="" className="mx-auto" />
      </p>
      <p>
        This can theoretically also be noticed in the browser inspector by
        paying close attention to the first Y-coordinate of each path data
        attribute. For the shapes, this coordinate will be positive (and a long
        decimal number), but for the axes, they are negative integers (-1, -2,
        etc.), giving an ordering.
      </p>
      <p>The rest proceeds as in Variation 1.</p>
    </>
  );

  const InfinityBook = (
    <>
      <p>
        There are 2 interactive components here. The first one takes a string as
        input, and outputs another string. The second one takes a page number,
        and outputs the contents of the book at that page number. Each page has
        exactly 1000 letters. (The number of pages is technically not infinite –
        after page 10<sup>100</sup> it will give an error.)
      </p>
      <p>
        Every instance shares the same interactive component, and only differs
        in the number given above the puzzle.
      </p>
      <p>
        Playing around with the first interactive component, we see that it
        encrypts the input by simply substituting each character with 4 letters,
        recorded below.
      </p>
      <Table>
        <thead>
          <tr>
            <th className="text-center">Input</th>
            <th className="text-center">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <Monospace>a</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pdpw</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>b</Monospace>
            </td>
            <td className="text-center">
              <Monospace>mcrj</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>c</Monospace>
            </td>
            <td className="text-center">
              <Monospace>uixl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>d</Monospace>
            </td>
            <td className="text-center">
              <Monospace>wvza</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>e</Monospace>
            </td>
            <td className="text-center">
              <Monospace>cujk</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>f</Monospace>
            </td>
            <td className="text-center">
              <Monospace>qoux</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>g</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zabd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>h</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pwwv</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>i</Monospace>
            </td>
            <td className="text-center">
              <Monospace>xlzh</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>j</Monospace>
            </td>
            <td className="text-center">
              <Monospace>anxo</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>k</Monospace>
            </td>
            <td className="text-center">
              <Monospace>mcer</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>l</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zhjk</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>m</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ybyb</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>n</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pwkl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>o</Monospace>
            </td>
            <td className="text-center">
              <Monospace>dmfq</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>p</Monospace>
            </td>
            <td className="text-center">
              <Monospace>sydm</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>q</Monospace>
            </td>
            <td className="text-center">
              <Monospace>bdcu</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>r</Monospace>
            </td>
            <td className="text-center">
              <Monospace>cuan</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>s</Monospace>
            </td>
            <td className="text-center">
              <Monospace>dmyb</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>t</Monospace>
            </td>
            <td className="text-center">
              <Monospace>lpux</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>u</Monospace>
            </td>
            <td className="text-center">
              <Monospace>jkii</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>v</Monospace>
            </td>
            <td className="text-center">
              <Monospace>fqux</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>w</Monospace>
            </td>
            <td className="text-center">
              <Monospace>errg</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>x</Monospace>
            </td>
            <td className="text-center">
              <Monospace>tolp</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>y</Monospace>
            </td>
            <td className="text-center">
              <Monospace>fqbd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>z</Monospace>
            </td>
            <td className="text-center">
              <Monospace>iisy</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>A</Monospace>
            </td>
            <td className="text-center">
              <Monospace>uxdm</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>B</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zhii</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>C</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ybii</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>D</Monospace>
            </td>
            <td className="text-center">
              <Monospace>anrj</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>E</Monospace>
            </td>
            <td className="text-center">
              <Monospace>uiux</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>F</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ybpd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>G</Monospace>
            </td>
            <td className="text-center">
              <Monospace>mcui</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>H</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zhrj</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>I</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zawv</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>J</Monospace>
            </td>
            <td className="text-center">
              <Monospace>lpii</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>K</Monospace>
            </td>
            <td className="text-center">
              <Monospace>lper</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>L</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ybjk</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>M</Monospace>
            </td>
            <td className="text-center">
              <Monospace>uxyb</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>N</Monospace>
            </td>
            <td className="text-center">
              <Monospace>toer</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>O</Monospace>
            </td>
            <td className="text-center">
              <Monospace>mcxo</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>P</Monospace>
            </td>
            <td className="text-center">
              <Monospace>toqo</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>Q</Monospace>
            </td>
            <td className="text-center">
              <Monospace>dmui</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>R</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pdii</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>S</Monospace>
            </td>
            <td className="text-center">
              <Monospace>tomc</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>T</Monospace>
            </td>
            <td className="text-center">
              <Monospace>uxkl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>U</Monospace>
            </td>
            <td className="text-center">
              <Monospace>eryb</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>V</Monospace>
            </td>
            <td className="text-center">
              <Monospace>rgpw</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>W</Monospace>
            </td>
            <td className="text-center">
              <Monospace>dmpd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>X</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pwpw</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>Y</Monospace>
            </td>
            <td className="text-center">
              <Monospace>uito</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>Z</Monospace>
            </td>
            <td className="text-center">
              <Monospace>anbd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>[space]</Monospace>
            </td>
            <td className="text-center">
              <Monospace>xlbd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>,</Monospace>
            </td>
            <td className="text-center">
              <Monospace>bdui</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>.</Monospace>
            </td>
            <td className="text-center">
              <Monospace>anto</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>!</Monospace>
            </td>
            <td className="text-center">
              <Monospace>rgxo</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        The book is also similarly encrypted, but it is not simply the same
        encryption. If we look further, we can actually decrypt the book
        starting from the 101st character (but we won't do that for now). We
        also notice that the pairs of letters in the table above are repeated
        more often than we would expect.{' '}
      </p>
      <p>
        Together with the "two clicks" in the flavor text, we conclude that the
        actual encryption is a substitution replacing each character with 2
        letters, and the encrypter in the puzzle is actually performing this
        encryption twice. Our first task is to figure out the encryption.
      </p>
      <h3>Breaking the encryption</h3>
      <p>
        The encryption is of the form X -&gt; f(X)g(X), where f, g are maps from
        characters to characters. From the table and the book, the range of f, g
        is most likely the lowercase letters a-z. We will focus the encryption
        only on the letters a-z. Imagine a directed graph, whose vertices are
        a-z and edges are X -&gt; f(X). Call this the f-graph. Each vertex of
        the f-graph has out-degree 1, thus each of its connected component looks
        like a cycle, with branches attached and directed towards it (see{' '}
        <a href="https://en.wikipedia.org/wiki/Pseudoforest#Graphs_of_functions">
          https://en.wikipedia.org/wiki/Pseudoforest#Graphs_of_functions
        </a>
        ). We cannot observe this graph directly, however, by looking at the
        first letter of the table above, we can construct the square of the
        f-graph, whose edges are X -&gt; f(f(X)). Call this the f2-graph. In the
        f-graph, each connected component has a unique cycle. If this cycle has
        odd length, then this cycle becomes a different cycle of the same length
        in the f2-graph. If the cycle has even length 2n, then this splits into
        2 components in the f2-graph, with cycles of length n in each. This is
        what our f2-graph looks like:
      </p>
      <p>
        <SheetableImage alt="" src={infImage0} title="" className="mx-auto" />
      </p>
      <p>
        It has 3 components, with cycles of length 9, 5, 5. Thus, the f-graph
        has one of the following structure:
      </p>
      <ul>
        <li>It has 2 connected components, with cycles of lengths 9 and 10.</li>
        <li>
          It has 3 connected components, with cycles of lengths 9, 5 and 5.
        </li>
      </ul>
      <p>
        Furthermore, we know exactly what the cycle of length 9 looks like. It
        is the cycle a -&gt; e -&gt; p -&gt; c -&gt; s -&gt; u -&gt; d -&gt; j
        -&gt; w -&gt; a.
      </p>
      <p>
        We can do the same for the g-graph and g2-graph, by looking at the last
        letters of the table. Here is what the g2-graph looks like:
      </p>
      <p>
        <SheetableImage alt="" src={infImage1} title="" className="mx-auto" />
      </p>
      <p>
        Thus the g-graph has 2 components, with cycles of lengths 11 and 8 (It
        cannot have 3 components with cycles of length 11, 4 and 4, since then
        each 4-cycle would split into two 2-cycles). Furthermore, the 11-cycle
        is b -&gt; h -&gt; j -&gt; v -&gt; o -&gt; x -&gt; q -&gt; p -&gt; u
        -&gt; m -&gt; i -&gt; b. From this cycle and the 9-cycle from the
        f-graph, we can deduce the encryption of the following letters.
      </p>
      <ul>
        <li>p -&gt; cu</li>
        <li>u -&gt; dm</li>
        <li>j -&gt; wv</li>
      </ul>
      <p>
        Write p -&gt;&gt; sydm to mean that double encrypting p gives sydm.
        Since p -&gt; cu, we have{' '}
      </p>
      <ul>
        <li>c -&gt; sy</li>
      </ul>
      <p>
        Similarly from u -&gt;&gt; jkii, j -&gt;&gt; anxo and c -&gt;&gt; uixl,
        we can deduce
      </p>
      <ul>
        <li>d -&gt; jk</li>
        <li>m -&gt; ii</li>
        <li>w -&gt; an</li>
        <li>v -&gt; xo</li>
        <li>s -&gt; ui</li>
        <li>y -&gt; xl</li>
      </ul>
      <p>
        From d -&gt;&gt; wvza, m -&gt;&gt; ybyb, w -&gt;&gt; errg, v -&gt;&gt;
        fqux, y -&gt;&gt; fqbd, we have
      </p>
      <ul>
        <li>k -&gt; za</li>
        <li>i -&gt; yb</li>
        <li>a -&gt; er</li>
        <li>n -&gt; rg</li>
        <li>x -&gt; fq</li>
        <li>o -&gt; ux</li>
        <li>l -&gt; bd</li>
      </ul>
      <p>
        From k -&gt;&gt; mcer, i -&gt;&gt; xlzh, a -&gt;&gt; pdpw, n -&gt;&gt;
        pwkl, x -&gt;&gt; tolp, we have
      </p>
      <ul>
        <li>z -&gt; mc</li>
        <li>b -&gt; zh</li>
        <li>e -&gt; pd</li>
        <li>r -&gt; pw</li>
        <li>g -&gt; kl</li>
        <li>f -&gt; to</li>
        <li>q -&gt; lp</li>
      </ul>
      <p>Finally, from b -&gt;&gt; mcrj and f -&gt;&gt; qoux, we have</p>
      <ul>
        <li>h -&gt; rj</li>
        <li>t -&gt; qo</li>
      </ul>
      <p>
        This gives all of a-z. We can determine the rest of the characters by
        decoding once from the double encryption. This completely solves the
        encryption:
      </p>
      <Table>
        <thead>
          <tr>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <Monospace>a</Monospace>
            </td>
            <td className="text-center">
              <Monospace>er</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>b</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zh</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>c</Monospace>
            </td>
            <td className="text-center">
              <Monospace>sy</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>d</Monospace>
            </td>
            <td className="text-center">
              <Monospace>jk</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>e</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>f</Monospace>
            </td>
            <td className="text-center">
              <Monospace>to</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>g</Monospace>
            </td>
            <td className="text-center">
              <Monospace>kl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>h</Monospace>
            </td>
            <td className="text-center">
              <Monospace>rj</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>i</Monospace>
            </td>
            <td className="text-center">
              <Monospace>yb</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>j</Monospace>
            </td>
            <td className="text-center">
              <Monospace>wv</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>k</Monospace>
            </td>
            <td className="text-center">
              <Monospace>za</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>l</Monospace>
            </td>
            <td className="text-center">
              <Monospace>bd</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>m</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ii</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>n</Monospace>
            </td>
            <td className="text-center">
              <Monospace>rg</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>o</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ux</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>p</Monospace>
            </td>
            <td className="text-center">
              <Monospace>cu</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>q</Monospace>
            </td>
            <td className="text-center">
              <Monospace>lp</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>r</Monospace>
            </td>
            <td className="text-center">
              <Monospace>pw</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>s</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ui</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>t</Monospace>
            </td>
            <td className="text-center">
              <Monospace>qo</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>u</Monospace>
            </td>
            <td className="text-center">
              <Monospace>dm</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>v</Monospace>
            </td>
            <td className="text-center">
              <Monospace>xo</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>w</Monospace>
            </td>
            <td className="text-center">
              <Monospace>an</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>x</Monospace>
            </td>
            <td className="text-center">
              <Monospace>fq</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>y</Monospace>
            </td>
            <td className="text-center">
              <Monospace>xl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>z</Monospace>
            </td>
            <td className="text-center">
              <Monospace>mc</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>A</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ou</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>B</Monospace>
            </td>
            <td className="text-center">
              <Monospace>bm</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>C</Monospace>
            </td>
            <td className="text-center">
              <Monospace>im</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>D</Monospace>
            </td>
            <td className="text-center">
              <Monospace>wh</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>E</Monospace>
            </td>
            <td className="text-center">
              <Monospace>so</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>F</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ie</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>G</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zs</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>H</Monospace>
            </td>
            <td className="text-center">
              <Monospace>bh</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>I</Monospace>
            </td>
            <td className="text-center">
              <Monospace>kj</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>J</Monospace>
            </td>
            <td className="text-center">
              <Monospace>qm</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>K</Monospace>
            </td>
            <td className="text-center">
              <Monospace>qa</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>L</Monospace>
            </td>
            <td className="text-center">
              <Monospace>id</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>M</Monospace>
            </td>
            <td className="text-center">
              <Monospace>oi</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>N</Monospace>
            </td>
            <td className="text-center">
              <Monospace>fa</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>O</Monospace>
            </td>
            <td className="text-center">
              <Monospace>zv</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>P</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ft</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>Q</Monospace>
            </td>
            <td className="text-center">
              <Monospace>us</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>R</Monospace>
            </td>
            <td className="text-center">
              <Monospace>em</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>S</Monospace>
            </td>
            <td className="text-center">
              <Monospace>fz</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>T</Monospace>
            </td>
            <td className="text-center">
              <Monospace>og</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>U</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ai</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>V</Monospace>
            </td>
            <td className="text-center">
              <Monospace>nr</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>W</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ue</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>X</Monospace>
            </td>
            <td className="text-center">
              <Monospace>rr</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>Y</Monospace>
            </td>
            <td className="text-center">
              <Monospace>sf</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>Z</Monospace>
            </td>
            <td className="text-center">
              <Monospace>wl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>[space]</Monospace>
            </td>
            <td className="text-center">
              <Monospace>yl</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>,</Monospace>
            </td>
            <td className="text-center">
              <Monospace>ls</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>.</Monospace>
            </td>
            <td className="text-center">
              <Monospace>wf</Monospace>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <Monospace>!</Monospace>
            </td>
            <td className="text-center">
              <Monospace>nv</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h3>Level 1</h3>
      <p>
        The only difference between instances is the number at the bottom. For
        instances on the first level, this number is 3, 5, 7, 9, or 11. If we
        decode the first page of the book, we get{' '}
      </p>
      <p>
        <Monospace>
          Congrats! The answer is NOTANANSWER. imuxrgklpwerqou…
        </Monospace>
      </p>
      <p>
        <Monospace>NOTANANSWER </Monospace>is not the answer, however. This text
        is followed by more encrypted text. Decoding that, we get
      </p>
      <p>
        <Monospace>Congrats! The answer is DUD. imuxrgklpwerqou…</Monospace>
      </p>
      <p>
        <Monospace>DUD</Monospace> is also not the answer. Decoding once more,
        we get
      </p>
      <p>
        <Monospace>Congrats! The answer is RECTANGULAR</Monospace>, followed by
        more encrypted text.
      </p>
      <p>
        The number 3 is telling us to take the 3rd answer, which is{' '}
        <Answerize>RECTANGULAR</Answerize>. This iterative encryption also
        explains why we were initially able to decrypt the book starting from
        the 101st character.
      </p>
      <p>
        At 9 and 11, things start to get tougher. Notice that after each
        decryption, we get a message of length 50, followed by another encrypted
        message. To get the n-th answer, we need to decrypt n times. Each
        decryption halves the length of the message, thus getting the n-th
        answer requires reading exponentially many characters. For n = 11, to
        read the whole 50-letter message in the 11th layer, we need to read
        100*2^11 - 50 = 204750 characters, or 205 pages. This is doable with
        enough patience, however, there are more efficient methods. One way is
        to decrypt the answer one letter at a time. The first letter of the
        answer is the 25th letter of the message. After 11 encryptions, this
        single letter becomes 2^11 = 2048 letters, occupying a little more than
        2 pages. We can compute where these letters are in the book. This turns
        out to be the range [151452, 153499], where the first character is at
        position 0. Decoding this range 11 times, we get the first letter P. We
        can do better, by taking 20480 characters starting from position 151452
        to obtain the first 10 letters of the answer. This only requires looking
        at 21 pages.
      </p>
      <h3>Levels 2, 3</h3>
      <p>
        This time, the number is (at least) 101. The previous methods no longer work, since
        encrypting a single letter 101 times will give a string of length 2^101,
        which is a 31-digit number. The solution is to note that each letter of
        the answer affects some range [x, y] of the book, and conversely, the
        range [x, y] is only affected by that letter of the answer. Thus, by
        reading a single letter from that range, we obtain some information
        about the answer letter. By being clever about choosing which letter to
        read, we can maximize the amount of information we get.
      </p>
      <p>
        Here is a more detailed explanation of that idea. Suppose we want to
        determine the first character X of the answer. The initial possibilities
        are "<Monospace>ABCDEFGHIJKLMNOPQRSTUVWXYZ.</Monospace>". After
        encrypting once, we obtain 2 letters. If we know what one of the 2
        letters is, it will narrow down the possible characters for X. A good
        way to decide which letter we want to know is to pick the one that gives
        the highest{' '}
        <a href="https://en.wikipedia.org/wiki/Entropy_(information_theory)">
          information entropy
        </a>
        . Now our new aim is to determine this letter. Recursing 100 more times,
        we now want to determine the letter at a certain position of the book,
        which will narrow down the possible characters X as much as possible.
        Repeat until we have narrowed down to a single possible character, which
        is the first character of the answer. Continue for the next character,
        and so on, until we reach the full-stop.{' '}
      </p>
      <p>
        We give a Python program to solve this in the appendix. Run this program
        with <Monospace>python solver.py</Monospace>. It will ask for the depth
        (which is 101 in this case), then it will request for some pages of the
        book. Input them as requested into the program until it is done. This
        program doesn't need all 50, and gives the answer{' '}
        <b>
          <Monospace>LITERARY</Monospace>
        </b>
        .
      </p>
      <p>
        An alternative strategy is to only look at the left encrypted letter at
        each step. This way, encrypting 101 times does not give 2^101 characters,
        but only 1, which we can directly read. Reversing the encryption, we can
        narrow down the possible values of the original character. To further
        narrow down the possibilities, we can now instead look at the right
        encrypted letter at each step. After reducing the possibilities of each
        letter as much as possible, we can use an online tool such as{' '}
        <a href="https://nutrimatic.org/">nutrimatic</a> to find the answer.
      </p>
      <Appendix>
        <Highlight lang="python">
          {`from functools import cache
from collections import Counter
import numpy as np

@cache
def requestPage(x):
	return input(f"Paste page {x+1}: ")

def requestChar(x):
	page = x // 1000
	pagetxt = requestPage(page)
	return pagetxt[x - 1000*page]

# Actual entropy is negative of this
def entropy(ls):
	n = len(ls)
	counter = Counter(ls)
	ans = 0
	for v in counter.values():
		ans += v * np.log(v)
	return ans

def main():
	n = int(input("Enter depth: "))

	# encryption dictionary
	encdict = {
		'a': 'er', 
		'b': 'zh', 
		'c': 'sy', 
		'd': 'jk', 
		'e': 'pd', 
		'f': 'to', 
		'g': 'kl', 
		'h': 'rj', 
		'i': 'yb', 
		'j': 'wv', 
		'k': 'za', 
		'l': 'bd', 
		'm': 'ii', 
		'n': 'rg', 
		'o': 'ux', 
		'p': 'cu', 
		'q': 'lp', 
		'r': 'pw', 
		's': 'ui', 
		't': 'qo', 
		'u': 'dm', 
		'v': 'xo', 
		'w': 'an', 
		'x': 'fq', 
		'y': 'xl', 
		'z': 'mc', 
		'A': 'ou', 
		'B': 'bm', 
		'C': 'im', 
		'D': 'wh', 
		'E': 'so', 
		'F': 'ie', 
		'G': 'zs', 
		'H': 'bh', 
		'I': 'kj', 
		'J': 'qm', 
		'K': 'qa', 
		'L': 'id', 
		'M': 'oi', 
		'N': 'fa', 
		'O': 'zv', 
		'P': 'ft', 
		'Q': 'us', 
		'R': 'em', 
		'S': 'fz', 
		'T': 'og', 
		'U': 'ai', 
		'V': 'nr', 
		'W': 'ue', 
		'X': 'rr', 
		'Y': 'sf', 
		'Z': 'wl', 
		' ': 'yl', 
		',': 'ls', 
		'.': 'wf', 
		'!': 'nv'}
	
	MSG_LENGTH = 50
	OFFSET = 24 #24 chars come before the answer

	index = 0
	ans = []
	while True:
		possible = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ.")
		while len(possible) > 1:
			cur = OFFSET + index
			print("Possible: ", "".join(possible))
			m = len(possible)
			outcomes = list(possible)
			for d in range(n):
				left = [encdict[outcomes[i]][0] for i in range(m)]
				right = [encdict[outcomes[i]][1] for i in range(m)]
				leftent = entropy(left)
				rightent = entropy(right)
				if rightent < leftent:
					cur = cur*2 + 50 + 1
					outcomes = right
				else:
					cur = cur*2 + 50
					outcomes = left
			cur -= 50
			c = requestChar(cur)
			possible = [possible[i] for i in range(m) if outcomes[i] == c]

		if len(possible) == 0:
			print("Error: no possible letter!")
			break
		print(f"Letter {index+1}: {possible[0]}")
		ans.append(possible[0])
		if possible[0] == '.':
			break
		index += 1

	print(f"Answer: {''.join(ans)}")


main()
`}
        </Highlight>
      </Appendix>
    </>
  );

  return (
    <Solution
      puzzleData={puzzleData}
      answer={''}
      smallTitle={data.type == 'reflections'}
    >
      {data.type == '5050-matchups' && FFSoln}
      {data.type == 'reflections' && Reflection}
      {data.type == 'infinity-book' && InfinityBook}
    </Solution>
  );
};

export default PuzzleSolution;
export const getServerSideProps = async (context) => {
  const { res, params } = context;
  const { headNum } = params || {};

  const slug = `hydra-head-${headNum}`;
  return await getPuzzleProps(slug)(context);
};
