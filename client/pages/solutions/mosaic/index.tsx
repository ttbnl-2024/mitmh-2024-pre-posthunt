import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'mosaic';
const ANSWER = `STOP`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Each picture / rebus shown represents a song from an album that is
      predominantly (and often famously) one color. These albums are:
    </p>
    <ol>
      <li>Joni Mitchell&mdash;<i>Blue</i></li>
      <li>The Beatles&mdash;<i>The Beatles</i> (a.k.a. the White Album)</li>
      <li>Spinal Tap&mdash;<i>This Is Spinal Tap</i> (soundtrack)</li>
      <li>The Bee Gees&mdash;<i>Odessa</i></li>
      <li>Pet Shop Boys&mdash;<i>Bilingual</i></li>
      <li>Frank Ocean&mdash;<i>channel ORANGE</i></li>
    </ol>
    <p>
      After replacing each image with its album cover, a new mosaic will be
      formed that gives the answer, <Answerize>{ANSWER}</Answerize>.
    </p>
    <Table className="table-fixed w-full p-2 text-[90%] main-table">
      <tbody>
        <tr>
          <td className="w-[14.28%] text-center bg-[#a4c2f4]">My Old Man</td>
          <td className="w-[14.28%] text-center bg-[#a4c2f4]">California</td>
          <td className="w-[14.28%] text-center bg-[#c0c0c0]">Piggies</td>
          <td className="w-[14.28%] text-center bg-[#c0c0c0]">Cry Baby Cry</td>
          <td className="w-[14.28%] text-center bg-[#c0c0c0]">Revolution 1</td>
          <td className="w-[14.28%] text-center bg-[#c0c0c0]">
            Martha My Dear
          </td>
          <td className="w-[14.28%] text-center bg-[#c0c0c0]">
            Happiness Is a Warm Gun
          </td>
        </tr>
        <tr>
          <td className="text-center bg-[#a4c2f4]">Little Green</td>
          <td className="text-center bg-[#ffffff]">America</td>
          <td className="text-center bg-[#ffffff]">Hell Hole</td>
          <td className="text-center bg-[#ffffff]">Cups and Cakes</td>
          <td className="text-center bg-[#c0c0c0]">Honey Pie</td>
          <td className="text-center bg-[#c0c0c0]">Good Night</td>
          <td className="text-center bg-[#c0c0c0]">Long, Long, Long</td>
        </tr>
        <tr>
          <td className="text-center bg-[#a4c2f4]">This Flight Tonight</td>
          <td className="text-center bg-[#a4c2f4]">Blue</td>
          <td className="text-center bg-[#ffffff]">Stonehenge</td>
          <td className="text-center bg-[#ff0000]">Black Diamond</td>
          <td className="text-center bg-[#ff0000]">I Laugh in Your Face</td>
          <td className="text-center bg-[#ff0000]">Whisper Whisper</td>
          <td className="text-center bg-[#c0c0c0]">Glass Onion</td>
        </tr>
        <tr>
          <td className="text-center bg-[#c0c0c0]">Rocky Raccoon</td>
          <td className="text-center bg-[#a4c2f4]">River</td>
          <td className="text-center bg-[#ffffff]">Big Bottom</td>
          <td className="text-center bg-[#ff0000]">The British Opera</td>
          <td className="text-center bg-[#ffff00]">Electricity</td>
          <td className="text-center bg-[#ff9900]">Forrest Gump</td>
          <td className="text-center bg-[#ffff00]">Up Against It</td>
        </tr>
        <tr>
          <td className="text-center bg-[#a4c2f4]">Carey</td>
          <td className="text-center bg-[#a4c2f4]">All I Want</td>
          <td className="text-center bg-[#ffffff]">Heavy Duty</td>
          <td className="text-center bg-[#ff0000]">Edison</td>
          <td className="text-center bg-[#ffff00]">The Survivors</td>
          <td className="text-center bg-[#ff0000]">
            Odessa (City on the Black Sea)
          </td>
          <td className="text-center bg-[#ffff00]">Single</td>
        </tr>
        <tr>
          <td className="text-center bg-[#c0c0c0]">I Will</td>
          <td className="text-center bg-[#c0c0c0]">Back in the U.S.S.R.</td>
          <td className="text-center bg-[#ffffff]">
            (Listen to The) Flower People
          </td>
          <td className="text-center bg-[#ff0000]">Lamplight</td>
          <td className="text-center bg-[#ffff00]">A Red Letter Day</td>
          <td className="text-center bg-[#ff9900]">Pyramids</td>
          <td className="text-center bg-[#ffff00]">Metamor-phosis</td>
        </tr>
        <tr>
          <td className="text-center bg-[#c0c0c0]">
            While My Guitar Gently Weeps
          </td>
          <td className="text-center bg-[#c0c0c0]">Revolution 9</td>
          <td className="text-center bg-[#c0c0c0]">Birthday</td>
          <td className="text-center bg-[#ff0000]">First of May</td>
          <td className="text-center bg-[#ff9900]">Sierra Leone</td>
          <td className="text-center bg-[#ff0000]">Never Say Never Again</td>
          <td className="text-center bg-[#c0c0c0]">Dear Prudence</td>
        </tr>
        <tr>
          <td className="text-center bg-[#c0c0c0]">Savoy Truffle</td>
          <td className="text-center bg-[#c0c0c0]">Mother Nature's Son</td>
          <td className="text-center bg-[#c0c0c0]">Wild Honey Pie</td>
          <td className="text-center bg-[#c0c0c0]">Julia</td>
          <td className="text-center bg-[#ffff00]">Saturday Night Forever</td>
          <td className="text-center bg-[#c0c0c0]">Blackbird</td>
          <td className="text-center bg-[#c0c0c0]">I'm So Tired</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <Attributions>
      <Table className="text-[85%] atts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Notes</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>family tree</td>
            <td>
              appears on many pages, no clear owner or attribution requirement
              could be found
            </td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>california map</td>
            <td>appears on wikipedia, licensed as public domain</td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:California_economic_regions_map_(labeled_and_colored).svg">
                https://en.wikipedia.org/wiki/File:California_economic_regions_map_(labeled_and_colored).svg
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>piglets</td>
            <td>
              appears on many pages, no clear owner or attribution requirement
              could be found
            </td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>crying baby</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/8566600@N07/3342477704">
                https://www.flickr.com/photos/8566600@N07/3342477704
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>old battle scene</td>
            <td>
              "Battle of Princeton" chromolithograph by Louis Kurz, 1911, public
              domain
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Kurz_and_Allison#/media/File:Battle_of_Princeton_by_Kurz_&amp;_Allison.jpg">
                https://en.wikipedia.org/wiki/Kurz_and_Allison#/media/File:Battle_of_Princeton_by_Kurz_&amp;_Allison.jpg
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>man hugging woman</td>
            <td>
              appears on many pages, no clear owner or attribution requirement
              could be found
            </td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>woman with power tool</td>
            <td>cover image of YouTube video on How To Use A Heat Gun</td>
            <td>
              <a href="https://www.youtube.com/watch?v=6ANmgCMnLo4">
                https://www.youtube.com/watch?v=6ANmgCMnLo4
              </a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>plastic machine</td>
            <td>product image likely owned by BISSELL</td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>united states</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0 Deed
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Map_of_USA_with_state_and_territory_names_2.png">
                https://en.wikipedia.org/wiki/File:Map_of_USA_with_state_and_territory_names_2.png
              </a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>trail sign</td>
            <td>appears on private blog</td>
            <td>
              <a href="https://ingasadventures.com/2009/07/13/the-worst-backpacking-trip-ever/">
                https://ingasadventures.com/2009/07/13/the-worst-backpacking-trip-ever/
              </a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>cups and baked goods</td>
            <td>appears on BBC recipe page</td>
            <td>
              <a href="https://www.bbc.co.uk/food/recipes/mini_coffee_and_walnut_12591">
                https://www.bbc.co.uk/food/recipes/mini_coffee_and_walnut_12591
              </a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>pie slice</td>
            <td>from cooking blog</td>
            <td>
              <a href="http://www.thismuslimgirlbakes.com/2017/11/honey-pie.html">
                http://www.thismuslimgirlbakes.com/2017/11/honey-pie.html
              </a>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>drawing of bedroom</td>
            <td>from good night moon book</td>
            <td></td>
          </tr>
          <tr>
            <td>14</td>
            <td>pencils, woman, man</td>
            <td>shelley long from poster, howie long from fox</td>
            <td></td>
          </tr>
          <tr>
            <td>15</td>
            <td>app screenshots</td>
            <td>from travel blog</td>
            <td>
              <a href="https://www.smartertravel.com/flight-tonight-app-lets-you-book-fly-and-arrive-on-the-same-day/">
                https://www.smartertravel.com/flight-tonight-app-lets-you-book-fly-and-arrive-on-the-same-day/
              </a>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>cartoon dog</td>
            <td>
              likeness of blue from blue's clues, and appears on a party blog
            </td>
            <td>
              <a href="https://eng.ohmyfiesta.com/2017/06/images-of-blue-clues.html">
                https://eng.ohmyfiesta.com/2017/06/images-of-blue-clues.html
              </a>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>stonehenge</td>
            <td>cc-by-2.0, originally flickr, then wikipedia</td>
            <td>
              <a href="https://www.flickr.com/photos/10173199@N03/1071477228">
                https://www.flickr.com/photos/10173199@N03/1071477228
              </a>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>snowy hill</td>
            <td>deer valley ski blog, link defunct</td>
            <td>
              <a href="http://blog.deervalley.com/jfs-five-favorite-ski-runs-at-deer-valley-resort/">
                http://blog.deervalley.com/jfs-five-favorite-ski-runs-at-deer-valley-resort/
              </a>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>man laughing toward unhappy woman</td>
            <td>from Liar Liar movie, appears on several sites</td>
            <td></td>
          </tr>
          <tr>
            <td>20</td>
            <td>girls whispering</td>
            <td>
              feels like stock photo, but only found on a methodist church site
            </td>
            <td>
              <a href="https://www.umcyoungpeople.org/lead/whisper-challenge-2">
                https://www.umcyoungpeople.org/lead/whisper-challenge-2
              </a>
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>people in front of lake</td>
            <td>from Glass Onion movie, apepars on several sites</td>
            <td></td>
          </tr>
          <tr>
            <td>22</td>
            <td>raccoon</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">
                CC BY-NC-ND 2.0 Deed
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/42389547@N00/3958025609">
                https://www.flickr.com/photos/42389547@N00/3958025609
              </a>
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>forest river valley</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0 Deed
              </a>
            </td>
            <td>
              <a href="https://en.m.wikipedia.org/wiki/File:Elwha_River_-_Humes_Ranch_Area2.JPG">
                https://en.m.wikipedia.org/wiki/File:Elwha_River_-_Humes_Ranch_Area2.JPG
              </a>
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>woman with caption</td>
            <td>from ITV show This Morning</td>
            <td>
              <a href="https://www.dailystar.co.uk/tv/itv-morning-worlds-biggest-bum-16892260">
                https://www.dailystar.co.uk/tv/itv-morning-worlds-biggest-bum-16892260
              </a>
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>large buildings</td>
            <td>
              from<a href="http://hotels.com/"> </a>
              <a href="http://hotels.com/">hotels.com</a> and maybe more, not
              clear
            </td>
            <td>
              <a href="https://is.hotels.com/go/england/royal-opera-house-london">
                https://is.hotels.com/go/england/royal-opera-house-london
              </a>
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td>sketch of man and animals</td>
            <td>from Schoolhouse Rock "Electricity Electricity"</td>
            <td>
              <a href="https://cinemacats.com/schoolhouse-rock-electricity-electricity/">
                https://cinemacats.com/schoolhouse-rock-electricity-electricity/
              </a>
            </td>
          </tr>
          <tr>
            <td>27</td>
            <td>man sitting on bench</td>
            <td>from Forrest Gump movie</td>
            <td></td>
          </tr>
          <tr>
            <td>28</td>
            <td>many balloons and clown</td>
            <td>from movies Up and It</td>
            <td></td>
          </tr>
          <tr>
            <td>29</td>
            <td>woman with microphone</td>
            <td>photo of Mariah Carey apepars on many pages. unknown owner</td>
            <td></td>
          </tr>
          <tr>
            <td>30</td>
            <td>woman on piano outdoors</td>
            <td>from music video for "All I Want," starring Olivia Rodrigo</td>
            <td>
              <a href="https://www.facebook.com/HighSchoolMusical/posts/-does-he-think-that-im-the-kinda-girl-who-needs-to-be-saved-heres-your-sneak-pee/2616533455248450/">
                https://www.facebook.com/HighSchoolMusical/posts/-does-he-think-that-im-the-kinda-girl-who-needs-to-be-saved-heres-your-sneak-pee/2616533455248450/
              </a>
            </td>
          </tr>
          <tr>
            <td>31</td>
            <td>truck with big load</td>
            <td>from Motor Trend magazine</td>
            <td>
              <a href="https://www.motortrend.com/news/2001-new-trucks-tow-30000-pounds/">
                https://www.motortrend.com/news/2001-new-trucks-tow-30000-pounds/
              </a>
            </td>
          </tr>
          <tr>
            <td>32</td>
            <td>man with light bulb</td>
            <td>
              Thomas Edison photo appears in many places, owner not clear may be
              public domain by now
            </td>
            <td></td>
          </tr>
          <tr>
            <td>33</td>
            <td>people standing in road</td>
            <td>from BBC's Survivors tv show</td>
            <td></td>
          </tr>
          <tr>
            <td>34</td>
            <td>satellite photo of coastline</td>
            <td>altered from Google Maps satellite view</td>
            <td></td>
          </tr>
          <tr>
            <td>35</td>
            <td>stick figures with arrow</td>
            <td>original artwork using ubiquitous stick figure</td>
            <td></td>
          </tr>
          <tr>
            <td>36</td>
            <td>eye and smiling man</td>
            <td>Will Smith photo appears many places</td>
            <td></td>
          </tr>
          <tr>
            <td>37</td>
            <td>torso and map</td>
            <td>original composition using fragments from multiple places</td>
            <td></td>
          </tr>
          <tr>
            <td>38</td>
            <td>ear, hand, flowers</td>
            <td>advertisement for flower people event</td>
            <td>
              <a href="https://www.juliacharleseventmanagement.co.uk/entertainment/floral-themed-entertainment/walkabout-flower-people/">
                https://www.juliacharleseventmanagement.co.uk/entertainment/floral-themed-entertainment/walkabout-flower-people/
              </a>
            </td>
          </tr>
          <tr>
            <td>39</td>
            <td>streetlights at night</td>
            <td>appears multiple places, ownership unclear</td>
            <td>
              e.g.,
              <a href="https://panoramanow.com/events/ghost-walk-downtown-whiting/">
                {' '}
              </a>
              <a href="https://panoramanow.com/events/ghost-walk-downtown-whiting/">
                https://panoramanow.com/events/ghost-walk-downtown-whiting/
              </a>
            </td>
          </tr>
          <tr>
            <td>40</td>
            <td>letter, sun, clouds, field</td>
            <td>from wallpaper site, owner unclear</td>
            <td>
              <a href="https://best-wallpaper.net/Green-trees-meadow-blue-sky-white-clouds-sun_wallpapers.html">
                https://best-wallpaper.net/Green-trees-meadow-blue-sky-white-clouds-sun_wallpapers.html
              </a>
            </td>
          </tr>
          <tr>
            <td>41</td>
            <td>pyramids</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/2.0/">
                CC BY 2.0
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/53344659@N05/4978440899/">
                https://www.flickr.com/photos/53344659@N05/4978440899/
              </a>
            </td>
          </tr>
          <tr>
            <td>42</td>
            <td>caterpillar and butterfly</td>
            <td>appears on many sites, no clear owner</td>
            <td></td>
          </tr>
          <tr>
            <td>43</td>
            <td>guiter with eyes</td>
            <td>
              crying eye 
              <a href="https://creativecommons.org/licenses/by/3.0/">
                CC BY 3.0 Deed
              </a>
              , guitar public domain  
            </td>
            <td>
              <a href="https://www.deviantart.com/bufoland/art/Tears-969054283">
                https://www.deviantart.com/bufoland/art/Tears-969054283
              </a>
            </td>
          </tr>
          <tr>
            <td>44</td>
            <td>many battle scenes</td>
            <td>see image 5</td>
            <td></td>
          </tr>
          <tr>
            <td>45</td>
            <td>cake and balloons</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/4.0/">
                CC BY 4.0 Deed
              </a>
            </td>
            <td>
              <a href="https://vectorportal.com/vector/birthday-party-illustration/21679">
                https://vectorportal.com/vector/birthday-party-illustration/21679
              </a>
            </td>
          </tr>
          <tr>
            <td>46</td>
            <td>calendar month</td>
            <td>original composition using fragments from multiple places</td>
            <td></td>
          </tr>
          <tr>
            <td>47</td>
            <td>mappred area with 3 colors</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                CC BY-SA 3.0 Deed
              </a>
            </td>
            <td>
              <a href="https://en.m.wikipedia.org/wiki/File:Flag-map_of_Sierra_Leone.svg">
                https://en.m.wikipedia.org/wiki/File:Flag-map_of_Sierra_Leone.svg
              </a>
            </td>
          </tr>
          <tr>
            <td>48</td>
            <td>man with gun</td>
            <td>image from promotion for Never Say Never Again movie</td>
            <td></td>
          </tr>
          <tr>
            <td>49</td>
            <td>smiling woman</td>
            <td>from Slate</td>
            <td>
              <a href="https://slate.com/briefing/2021/06/jenee-desmond-harris-dear-prudence-columnist.html">
                https://slate.com/briefing/2021/06/jenee-desmond-harris-dear-prudence-columnist.html
              </a>
            </td>
          </tr>
          <tr>
            <td>50</td>
            <td>plant in front of building with flags</td>
            <td>
              composition from pieces that appears in many places, owner unclear
            </td>
            <td></td>
          </tr>
          <tr>
            <td>51</td>
            <td>sun and drawing</td>
            <td>drawing from 1618 book</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Atalanta_Fugiens_-_Emblem_2d.jpg">
                https://commons.wikimedia.org/wiki/File:Atalanta_Fugiens_-_Emblem_2d.jpg
              </a>
            </td>
          </tr>
          <tr>
            <td>52</td>
            <td>pie with legs and horns</td>
            <td>see image 12</td>
            <td></td>
          </tr>
          <tr>
            <td>53</td>
            <td>smiling woman</td>
            <td>Julia Roberts image appears many places, owner unclear</td>
            <td>
              e.g.,
              <a href="https://www.geo.tv/latest/521760-julia-roberts-reflects-on-immense-understanding-with-twin-kids">
                {' '}
              </a>
              <a href="https://www.geo.tv/latest/521760-julia-roberts-reflects-on-immense-understanding-with-twin-kids">
                https://www.geo.tv/latest/521760-julia-roberts-reflects-on-immense-understanding-with-twin-kids
              </a>
            </td>
          </tr>
          <tr>
            <td>54</td>
            <td>dancing man with symbol</td>
            <td>from Saturday Night Fever</td>
            <td></td>
          </tr>
          <tr>
            <td>55</td>
            <td>airplane</td>
            <td>SR-71 Blackbird image appears in many places, owner unclear</td>
            <td>
              e.g.,
              <a href="https://doctoraviation.com/what-is-the-fast-plane-in-the-world/">
                {' '}
              </a>
              <a href="https://doctoraviation.com/what-is-the-fast-plane-in-the-world/">
                https://doctoraviation.com/what-is-the-fast-plane-in-the-world/
              </a>
            </td>
          </tr>
          <tr>
            <td>56</td>
            <td>man yawning</td>
            <td>
              free to use{' '}
              <a href="https://www.pexels.com/license/">
                https://www.pexels.com/license/
              </a>
            </td>
            <td>
              <a href="https://www.pexels.com/photo/a-man-yawning-10895246/">
                https://www.pexels.com/photo/a-man-yawning-10895246/
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      .main-table td {
        max-width: 100px;
        height: 100px;
        max-height: 100px;
        padding: 8px !important;
      }
      .atts-table a {
        display: inline-block;
        max-width: 200px;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
