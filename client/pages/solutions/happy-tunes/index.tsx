import { FC } from 'react';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'happy-tunes';
const ANSWER = `NONES OF THE WILD FIG`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle's songs are all songs sung in the TV show <i>Glee</i>. We will
      figure out that each stick figure corresponds to the <i>Glee</i> actors
      from the show. Each stick figure is unique to one actor, but some contain
      descriptions that correspond to multiple actors. Songs also have
      extraneous singers to which none of these descriptions apply. Here is a
      list of multiple people who have accomplished similar items.
    </p>
    <Table className="table-1">
      <thead>
        <tr>
          <th>Accomplishment</th>
          <th>Actor 1</th>
          <th>Actor 2</th>
          <th>Actor 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Rejected from <i>American Idol</i>
          </td>
          <td>Mercedes Jones</td>
          <td className="bg-[#00ff00]">Santana Lopez</td>
          <td></td>
        </tr>
        <tr>
          <td>
            Won <i>Dancing with the Stars</i>
          </td>
          <td className="bg-[#00ff00]">Mercedes Jones</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            Second season of <i>RuPaul's Secret Celebrity Drag Race</i>
          </td>
          <td className="bg-[#00ff00]">Tina Cohen-Chang</td>
          <td>Artie Abrams</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <i>Spring Awakening</i>
          </td>
          <td className="bg-[#00ff00]">Rachel Berry</td>
          <td className="bg-[#00ffff]">Jesse St. James</td>
          <td></td>
        </tr>
        <tr>
          <td>
            Wrote an autobiography
            <sup>
              <a href="#fn1" id="ref1">
                [1]
              </a>
            </sup>
          </td>
          <td>Rachel Berry</td>
          <td>Santana Lopez</td>
          <td className="bg-[#00ff00]">Sue Sylvester</td>
        </tr>
        <tr>
          <td>DC superhero</td>
          <td>Blaine Anderson</td>
          <td className="bg-[#00ff00]">Marley Rose</td>
          <td className="bg-[#ff9900]">Sebastian Smythe</td>
        </tr>
        <tr>
          <td>
            Guest star on <i>Veronica Mars</i>
          </td>
          <td className="bg-[#00ff00]">Quinn Fabray</td>
          <td>Sue Sylvester</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <i>The Masked Singer</i> winner
          </td>
          <td className="bg-[#00ff00]">Brittany S. Pierce</td>
          <td>Mercedes Jones</td>
          <td></td>
        </tr>
        <tr>
          <td>Fantasy author</td>
          <td className="bg-[#00ff00]">Kurt Hummel</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <i>Frozen</i> voice actor
          </td>
          <td>Shelby Corcoran</td>
          <td className="bg-[#00ff00]">Jesse St. James</td>
          <td></td>
        </tr>
        <tr>
          <td>Dated #4 on this list</td>
          <td>Finn Hudson</td>
          <td className="bg-[#00ff00]">Will Schuester</td>
          <td></td>
        </tr>
        <tr>
          <td>In Katy Perry's "Last Friday Night" music video</td>
          <td className="bg-[#00ff00]">Artie Abrams</td>
          <td>Blaine Anderson</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <i>Wicked</i> cast
          </td>
          <td className="bg-[#00ff00]">Shelby Corcoran</td>
          <td className="bg-[#ff9900]">April Rhodes</td>
          <td></td>
        </tr>
        <tr>
          <td>Member of StarKid Productions</td>
          <td className="bg-[#00ff00]">Blaine Anderson</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Is Canadian</td>
          <td className="bg-[#00ff00]">Finn Hudson</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Tony winner</td>
          <td className="bg-[#00ff00]">Unique</td>
          <td>Tina Cohen-Chang</td>
          <td className="bg-[#ff9900]">Emma Pillsbury</td>
        </tr>
        <tr>
          <td>Beyoncé backup dancer</td>
          <td>Brittany S. Pierce</td>
          <td className="bg-[#00ff00]">Mike Chang</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can rule out the names in <span className="bg-[#ff9900]">orange</span>{' '}
      because there are no songs from the playlist that have these actors
      singing. We can also rule out the{' '}
      <span className="bg-[#00ffff]">cyan</span> highlight because Jonathon
      Groff never dated someone on <i>Glee</i>. (Note that dating refers to
      actors' lives&mdash;not their storylines.)
    </p>
    <p>
      We can work out a one-to-one mapping between characters and their
      accomplishments:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Actor Accomplishment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SANTANA LOPEZ</td>
          <td>
            Rejected from <i>American Idol</i>
          </td>
        </tr>
        <tr>
          <td>MERCEDES JONES</td>
          <td>
            Won <i>Dancing with the Stars</i>
          </td>
        </tr>
        <tr>
          <td>TINA COHEN-CHANG</td>
          <td>
            <i>RuPaul's Secret Celebrity Drag Race</i>
          </td>
        </tr>
        <tr>
          <td>RACHEL BERRY</td>
          <td>
            <i>Spring Awakening</i>
          </td>
        </tr>
        <tr>
          <td>SUE SYLVESTER</td>
          <td>Wrote an autobiography</td>
        </tr>
        <tr>
          <td>MARLEY ROSE</td>
          <td>DC superhero</td>
        </tr>
        <tr>
          <td>QUINN FABRAY</td>
          <td>
            Guest star on <i>Veronica Mars</i>
          </td>
        </tr>
        <tr>
          <td>BRITTANY S. PIERCE</td>
          <td>
            <i>The Masked Singer</i> winner
          </td>
        </tr>
        <tr>
          <td>KURT HUMMEL</td>
          <td>Fantasy author</td>
        </tr>
        <tr>
          <td>JESSE ST JAMES</td>
          <td>
            <i>Frozen</i> voice actor
          </td>
        </tr>
        <tr>
          <td>WILL SCHUESTER</td>
          <td>Dated someone else on this list</td>
        </tr>
        <tr>
          <td>ARTIE ABRAMS</td>
          <td>In Katy Perry's “Last Friday Night” music video</td>
        </tr>
        <tr>
          <td>SHELBY CORCORAN</td>
          <td>
            <i>Wicked</i> cast
          </td>
        </tr>
        <tr>
          <td>BLAINE ANDERSON</td>
          <td>Member of StarKid Productions</td>
        </tr>
        <tr>
          <td>FINN HUDSON</td>
          <td>Is Canadian</td>
        </tr>
        <tr>
          <td>UNIQUE</td>
          <td>Tony winner</td>
        </tr>
        <tr>
          <td>MIKE CHANG</td>
          <td>Beyoncé backup dancer</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Next, we should look at the playlist and identify which characters sang
      each song. The playlist of songs is sorted alphabetically. Any background
      harmonies should be ignored. This is hinted at in the flavor text. Below
      is a list of songs attributed to each of the singers. Note that some of
      these songs had additional actors who sang on the track, but these aren't
      listed here since they aren't relevant.
    </p>
    <p>
      Note: One of the stick figures says "I'm a former Beyoncé backup dancer. I
      don't sing as much as the others, so pay attention to when I'm dancing
      instead!" This is for Mike Chang. His name is included for any time he has
      a dance number in the songs.
    </p>
    <Table className="table-2">
      <thead>
        <tr>
          <th></th>
          <th>Songs</th>
          <th>Person 1</th>
          <th>Person 2</th>
          <th>Person 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>4 Minutes</td>
          <td>MERCEDES JONES</td>
          <td>KURT HUMMEL</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>A Thousand Years</td>
          <td>MARLEY ROSE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Addicted to Love</td>
          <td>ARTIE ABRAMS</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>All About That Bass</td>
          <td>MERCEDES JONES</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>And I'm Telling You</td>
          <td>MERCEDES JONES</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Another One Bites the Dust</td>
          <td>JESSE ST JAMES</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Baby It's Cold Outside</td>
          <td>KURT HUMMEL</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Barracuda</td>
          <td>RACHEL BERRY</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>Bitch</td>
          <td>SUE SYLVESTER</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>Blow Me</td>
          <td>MARLEY ROSE</td>
          <td>UNIQUE</td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>Boogie Shoes</td>
          <td>UNIQUE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>12</td>
          <td>Bubble Toes</td>
          <td>MIKE CHANG</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>13</td>
          <td>Bust Your Windows</td>
          <td>MERCEDES JONES</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>14</td>
          <td>Celebrity Skin</td>
          <td>BRITTANY S. PIERCE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>15</td>
          <td>Chasing Pavements</td>
          <td>MARLEY ROSE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>16</td>
          <td>Come What May</td>
          <td>KURT HUMMEL</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
        </tr>
        <tr>
          <td>17</td>
          <td>Funny Girl</td>
          <td>SHELBY CORCORAN</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>18</td>
          <td>Holding Out for a Hero</td>
          <td>MARLEY ROSE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>19</td>
          <td>Hold It Against Me</td>
          <td>BRITTANY S. PIERCE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>20</td>
          <td>Hopelessly Devoted to You</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>21</td>
          <td>I Believe in a Thing Called Love</td>
          <td>KURT HUMMEL</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>22</td>
          <td>I Dreamed a Dream</td>
          <td>RACHEL BERRY</td>
          <td>SHELBY CORCORAN</td>
          <td></td>
        </tr>
        <tr>
          <td>23</td>
          <td>I Wish</td>
          <td>MIKE CHANG</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>24</td>
          <td>I'm His Child</td>
          <td>MERCEDES JONES</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>25</td>
          <td>I'm Still Standing</td>
          <td>QUINN FABRAY</td>
          <td>ARTIE ABRAMS</td>
          <td></td>
        </tr>
        <tr>
          <td>26</td>
          <td>Just Give Me a Reason</td>
          <td>QUINN FABRAY</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>27</td>
          <td>L-O-V-E</td>
          <td>MIKE CHANG</td>
          <td>TINA COHEN-CHANG</td>
          <td></td>
        </tr>
        <tr>
          <td>28</td>
          <td>Love Song</td>
          <td>SANTANA LOPEZ</td>
          <td>RACHEL BERRY</td>
          <td>QUINN FABRAY</td>
        </tr>
        <tr>
          <td>29</td>
          <td>Make 'Em Laugh</td>
          <td>WILL SCHUESTER</td>
          <td>MIKE CHANG</td>
          <td></td>
        </tr>
        <tr>
          <td>30</td>
          <td>Never Can Say Goodbye Boy</td>
          <td>QUINN FABRAY</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>31</td>
          <td>New York State of Mind</td>
          <td>RACHEL BERRY</td>
          <td>MARLEY ROSE</td>
          <td></td>
        </tr>
        <tr>
          <td>32</td>
          <td>Next to Me</td>
          <td>RACHEL BERRY</td>
          <td>SHELBY CORCORAN</td>
          <td></td>
        </tr>
        <tr>
          <td>33</td>
          <td>Piece of My Heart</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>34</td>
          <td>Poker Face</td>
          <td>SHELBY CORCORAN</td>
          <td>RACHEL BERRY</td>
          <td></td>
        </tr>
        <tr>
          <td>35</td>
          <td>P.Y.T. (Pretty Young Thing)</td>
          <td>ARTIE ABRAMS</td>
          <td>MIKE CHANG</td>
          <td></td>
        </tr>
        <tr>
          <td>36</td>
          <td>River Deep Mountain High</td>
          <td>SANTANA LOPEZ</td>
          <td>MERCEDES JONES</td>
          <td></td>
        </tr>
        <tr>
          <td>37</td>
          <td>Run Joey Run</td>
          <td>JESSE ST JAMES</td>
          <td>RACHEL BERRY</td>
          <td>FINN HUDSON</td>
        </tr>
        <tr>
          <td>38</td>
          <td>Saving All My Love For You</td>
          <td>QUINN FABRAY</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>39</td>
          <td>Scream</td>
          <td>ARTIE ABRAMS</td>
          <td>MIKE CHANG</td>
          <td></td>
        </tr>
        <tr>
          <td>40</td>
          <td>Shake it Out</td>
          <td>SANTANA LOPEZ</td>
          <td>TINA COHEN-CHANG</td>
          <td>MERCEDES JONES</td>
        </tr>
        <tr>
          <td>41</td>
          <td>Shout</td>
          <td>BLAINE ANDERSON</td>
          <td>BRITTANY S. PIERCE</td>
          <td></td>
        </tr>
        <tr>
          <td>42</td>
          <td>
            Sing! (<i>A Chorus Line</i>)
          </td>
          <td>TINA COHEN-CHANG</td>
          <td>MIKE CHANG</td>
          <td></td>
        </tr>
        <tr>
          <td>43</td>
          <td>Sing (Ed Sheeran)</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>44</td>
          <td>Somebody That I Used to Know</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>45</td>
          <td>Somewhere Only We Know</td>
          <td>BLAINE ANDERSON</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>46</td>
          <td>Superstitious</td>
          <td>MERCEDES JONES</td>
          <td>MARLEY ROSE</td>
          <td>BLAINE ANDERSON</td>
        </tr>
        <tr>
          <td>47</td>
          <td>Take Me or Leave Me</td>
          <td>RACHEL BERRY</td>
          <td>MERCEDES JONES</td>
          <td></td>
        </tr>
        <tr>
          <td>48</td>
          <td>Take My Breath Away</td>
          <td>QUINN FABRAY</td>
          <td>SANTANA LOPEZ</td>
          <td></td>
        </tr>
        <tr>
          <td>50</td>
          <td>Tell Him</td>
          <td>MARLEY ROSE</td>
          <td>BRITTANY S. PIERCE</td>
          <td></td>
        </tr>
        <tr>
          <td>51</td>
          <td>The First Noel</td>
          <td>MARLEY ROSE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>52</td>
          <td>The Happening</td>
          <td>KURT HUMMEL</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>53</td>
          <td>The Lady Is a Tramp</td>
          <td>MERCEDES JONES</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>54</td>
          <td>There Are Worse Things I Could Do</td>
          <td>UNIQUE</td>
          <td>SANTANA LOPEZ</td>
          <td></td>
        </tr>
        <tr>
          <td>54</td>
          <td>Valerie</td>
          <td>SANTANA LOPEZ</td>
          <td>MIKE CHANG</td>
          <td className="bg-[#ff9900]">BRITTANY S. PIERCE</td>
        </tr>
        <tr>
          <td>55</td>
          <td>West Side Story Cool</td>
          <td>MIKE CHANG</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    <p>
      Note: two versions of Valerie are performed in <i>Glee</i>. Brittany S.
      Pierce sings in only one of them, although Santana sings in both and Mike
      dances in both. It doesn't actually matter if she is counted in this song
      or not, because we need to index to get a "T". So it works either way. The
      indexing below doesn't count Brittany's performance, but it would be just
      as valid to consider it.
    </p>
    <p>
      Finally, we count the number of times each character appears in a song and
      use that as an index into the name of the character, sorted by the
      accomplishments at the beginning of the puzzle.
    </p>
    <Table className="table-3">
      <thead>
        <tr>
          <th>Character</th>
          <th>Actor Accomplishment</th>
          <th className="text-center"># of Appearances</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SANTANA LOPEZ</td>
          <td>
            Rejected from <i>American Idol</i>
          </td>
          <td>6</td>
          <td>N</td>
        </tr>
        <tr>
          <td>MERCEDES JONES</td>
          <td>
            Won <i>Dancing with the Stars</i>
          </td>
          <td>10</td>
          <td>O</td>
        </tr>
        <tr>
          <td>TINA COHEN-CHANG</td>
          <td>
            <i>RuPaul's Secret Celebrity Drag Race</i>
          </td>
          <td>3</td>
          <td>N</td>
        </tr>
        <tr>
          <td>RACHEL BERRY</td>
          <td>
            <i>Spring Awakening</i>
          </td>
          <td>8</td>
          <td>E</td>
        </tr>
        <tr>
          <td>SUE SYLVESTER</td>
          <td>Wrote an autobiography</td>
          <td>1</td>
          <td>S</td>
        </tr>
        <tr>
          <td>MARLEY ROSE</td>
          <td>DC Superhero</td>
          <td>8</td>
          <td>O</td>
        </tr>
        <tr>
          <td>QUINN FABRAY</td>
          <td>
            Guest star on <i>Veronica Mars</i>
          </td>
          <td>6</td>
          <td>F</td>
        </tr>
        <tr>
          <td>BRITTANY S. PIERCE</td>
          <td>
            <i>The Masked Singer</i> winner
          </td>
          <td>4</td>
          <td>T</td>
        </tr>
        <tr>
          <td>KURT HUMMEL</td>
          <td>Fantasy author</td>
          <td>5</td>
          <td>H</td>
        </tr>
        <tr>
          <td>JESSE ST JAMES</td>
          <td>
            <i>Frozen</i> voice actor
          </td>
          <td>2</td>
          <td>E</td>
        </tr>
        <tr>
          <td>WILL SCHUESTER</td>
          <td>Dated someone else on this list</td>
          <td>1</td>
          <td>W</td>
        </tr>
        <tr>
          <td>ARTIE ABRAMS</td>
          <td>
            In Katy Perry's <i>Last Friday Night</i> music video
          </td>
          <td>4</td>
          <td>I</td>
        </tr>
        <tr>
          <td>SHELBY CORCORAN</td>
          <td>
            <i>Wicked</i> cast
          </td>
          <td>4</td>
          <td>L</td>
        </tr>
        <tr>
          <td>BLAINE ANDERSON</td>
          <td>Member of StarKid Productions</td>
          <td>9</td>
          <td>D</td>
        </tr>
        <tr>
          <td>FINN HUDSON</td>
          <td>Is Canadian</td>
          <td>1</td>
          <td>F</td>
        </tr>
        <tr>
          <td>UNIQUE</td>
          <td>Tony winner</td>
          <td>3</td>
          <td>I</td>
        </tr>
        <tr>
          <td>MIKE CHANG</td>
          <td>Beyoncé backup dancer</td>
          <td>9</td>
          <td>G</td>
        </tr>
      </tbody>
    </Table>
    <p>
      This gives a final answer of <Answerize>{ANSWER}</Answerize>.
    </p>
    <p>
      <a href="#ref1" id="fn1">
        <sup>[1]</sup>
      </a>
      : Jenna Ushkowitz (Tina Cohen-Chang) wrote a scrapbook memoir that we're
      not considering a full autobiography for the purpose of this puzzle.
    </p>
    <style jsx global>{`
      .table-1 td:nth-child(n + 2) {
        white-space: nowrap;
      }
      .table-2 td:nth-child(1),
      .table-3 td:nth-child(n + 3) {
        text-align: center;
      }
      .table-3 td:nth-child(3n + 1) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
