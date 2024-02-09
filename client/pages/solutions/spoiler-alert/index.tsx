import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'spoiler-alert';
const ANSWER = `MAKE A DECISION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => {
  return (
    <Solution puzzleData={puzzleData} answer={ANSWER}>
      <p>
        When we first see the video, there are many of commonalities in the
        lines the speaker says we can latch onto, such as:
      </p>
      <ul>
        <li>Clips 1 through 13 have frequent mentions of food</li>
        <li>Clips 1 through 13 have an amount of stars</li>
        <li>
          Clips 14 through 26 have an integer number followed by a thumbs up or
          down
        </li>
        <li>Clips 14 through 26 sometimes mention someone dying</li>
        <li>
          Clips 14 through 26 sometimes mention a person in the background
          somewhere
        </li>
        <li>
          Clips 14 through 39 having a variety of people doing strange actions
        </li>
      </ul>
      <p>
        The speaker also mentions in the intro that they chopped up their
        reactions. Either by noticing this, identifying some of the food, or by
        searching where both Sinbad and Gillian Vigman have appeared, we realize
        that clips 1 through 13 are cluing an episode of{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_Chopped_episodes">
          <i>Chopped</i>
        </a>
        .
      </p>
      <h3>Chopped</h3>
      <p>
        The clips are in order by season, which suggests reordering. In
        searching for episodes, we learn there are 13 episodes in each season of
        <i>Chopped</i> and each of the first 13 clips clue an episode with a unique
        episode number. Therefore we reorder by episode number. We then turn
        each season number into its corresponding alphanumeric letter, spelling
        the phrase <Clue>BROTH SPOILERS</Clue>. The stars are unused and the
        outro indicates that they should be used with another part of the
        puzzle. We should keep them in the same order as the episodes for later.
      </p>
      <Table className="chopped-table">
        <thead>
          <tr>
            <th>Clip</th>
            <th>Episode Title</th>
            <th>Episode</th>
            <th>Season</th>
            <th>
              Season to
              <br />
              Letter
            </th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>"A Prickly Situation"</td>
            <td>1</td>
            <td>2</td>
            <td>B</td>
            <td>2</td>
          </tr>
          <tr>
            <td>9</td>
            <td>"Teen Talent"</td>
            <td>2</td>
            <td>18</td>
            <td>R</td>
            <td>3</td>
          </tr>
          <tr>
            <td>6</td>
            <td>"Aussie Awesome"</td>
            <td>3</td>
            <td>15</td>
            <td>O</td>
            <td>4</td>
          </tr>
          <tr>
            <td>13</td>
            <td>"Salt Pearls of Wisdom"</td>
            <td>4</td>
            <td>20</td>
            <td>T</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>"My Way"</td>
            <td>5</td>
            <td>8</td>
            <td>H</td>
            <td>6</td>
          </tr>
          <tr>
            <td>11</td>
            <td>"Chopped Tournament of Stars: Comedians!"</td>
            <td>6</td>
            <td>19</td>
            <td>S</td>
            <td>5</td>
          </tr>
          <tr>
            <td>8</td>
            <td>"Mochi Obliged"</td>
            <td>7</td>
            <td>16</td>
            <td>P</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>"Military Salute"</td>
            <td>8</td>
            <td>15</td>
            <td>O</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>"One in a Hundred"</td>
            <td>9</td>
            <td>9</td>
            <td>I</td>
            <td>3</td>
          </tr>
          <tr>
            <td>5</td>
            <td>"Drawing a Flank"</td>
            <td>10</td>
            <td>12</td>
            <td>L</td>
            <td>4</td>
          </tr>
          <tr>
            <td>2</td>
            <td>"Fright Bites"</td>
            <td>11</td>
            <td>5</td>
            <td>E</td>
            <td>5</td>
          </tr>
          <tr>
            <td>10</td>
            <td>"Burn for the Worse"</td>
            <td>12</td>
            <td>18</td>
            <td>R</td>
            <td>1</td>
          </tr>
          <tr>
            <td>12</td>
            <td>"Four Fathers"</td>
            <td>13</td>
            <td>19</td>
            <td>S</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Broth Spoilers</h3>
      <p>
        Either with enough searching the phrase "broth spoilers'', recognizing
        some of the deaths mentioned in clips 14 through 26, or just knowing the
        phrase "too many cooks spoil the broth", we find{' '}
        <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8"><i>Too Many Cooks</i></a>
        , a parody of older sitcom intros that gets stranger as it progresses.
      </p>
      <p>
        One of the most notable strange things is a serial killer who originally
        hides in shots, but eventually starts killing the cast one by one. Each
        clip from 14 through 26 mentions one of these moments, so we reorder to
        the order of each shot the killer appears in. Then, by taking the first
        name of the actor of the other person mentioned in each clip, we can
        index the stars shown earlier in the video. This gives the phrase{' '}
        <Clue>ONCE ON CNN NEWS</Clue>. Again, the thumbs are unused, but will
        need to be in this order for the third step.
      </p>
      <Table className="cooks-table">
        <thead>
          <tr>
            <th>Clip</th>
            <th>Killer Appearance</th>
            <th>Actor 1st Name</th>
            <th>Stars</th>
            <th>Extract</th>
            <th>
              Thumbs
              <br />
              Up/Down
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24</td>
            <td>0:20</td>
            <td>MORGAN</td>
            <td>2</td>
            <td>O</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>20</td>
            <td>1:14</td>
            <td>GINNY</td>
            <td>3</td>
            <td>N</td>
            <td>1</td>
          </tr>
          <tr>
            <td>23</td>
            <td>1:54</td>
            <td>MARC</td>
            <td>4</td>
            <td>C</td>
            <td>5</td>
          </tr>
          <tr>
            <td>21</td>
            <td>2:03</td>
            <td>KAREN</td>
            <td>4</td>
            <td>E</td>
            <td>9</td>
          </tr>
          <tr>
            <td>15</td>
            <td>2:24</td>
            <td>CAMERON</td>
            <td>6</td>
            <td>O</td>
            <td>5</td>
          </tr>
          <tr>
            <td>19</td>
            <td>3:16</td>
            <td>EUGENE</td>
            <td>5</td>
            <td>N</td>
            <td>7</td>
          </tr>
          <tr>
            <td>16</td>
            <td>4:13</td>
            <td>CANDACE</td>
            <td>6</td>
            <td>C</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>4:20</td>
            <td>BEN</td>
            <td>3</td>
            <td>N</td>
            <td>2</td>
          </tr>
          <tr>
            <td>17</td>
            <td>4:24</td>
            <td>DAN</td>
            <td>3</td>
            <td>N</td>
            <td>4</td>
          </tr>
          <tr>
            <td>18</td>
            <td>4:31</td>
            <td>ELENA</td>
            <td>4</td>
            <td>N</td>
            <td>4</td>
          </tr>
          <tr>
            <td>22</td>
            <td>6:07</td>
            <td>KAYTE</td>
            <td>5</td>
            <td>E</td>
            <td>-3</td>
          </tr>
          <tr>
            <td>26</td>
            <td>6:13</td>
            <td>WILL</td>
            <td>1</td>
            <td>W</td>
            <td>8</td>
          </tr>
          <tr>
            <td>25</td>
            <td>7:48</td>
            <td>STEVE</td>
            <td>1</td>
            <td>S</td>
            <td>4</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h3>Once on CNN News</h3>
      <p>
        As it turns out, CNN made a parody of <i>Too Many Cooks</i> for the{' '}
        <a href="https://www.youtube.com/watch?v=D6AlQiWatD4">2016 election</a>.
        This can simply be found searching <i>Too Many Cooks</i> and CNN together. We
        identify the person (or Demon Sheep) for clips 27 through 39 and reorder
        once again, this time in order of appearance in the CNN video. We use
        the thumbs given as modifications to the stars from earlier to get a new
        number. We index it into each person (or Demon Sheep) in the video to
        get the answer, <Answerize>{ANSWER}</Answerize>.
      </p>
      <Table className="cnn-table">
        <thead>
          <tr>
            <th>Clip</th>
            <th>Personage in Video</th>
            <th>Stars</th>
            <th>
              Thumbs
              <br />
              Up/Down
            </th>
            <th>
              Stars +<br />
              Thumbs
            </th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>34</td>
            <td>Marco Rubio</td>
            <td>2</td>
            <td>-1</td>
            <td>1</td>
            <td>M</td>
          </tr>
          <tr>
            <td>29</td>
            <td>
              Cuba Gooding Jr. <br />
              <span className="font-family: unset">(as Dr. Ben Carson)</span>
            </td>
            <td>3</td>
            <td>1</td>
            <td>4</td>
            <td>A</td>
          </tr>
          <tr>
            <td>36</td>
            <td>Scott Walker</td>
            <td>4</td>
            <td>5</td>
            <td>9</td>
            <td>K</td>
          </tr>
          <tr>
            <td>38</td>
            <td>Vermin Supreme</td>
            <td>4</td>
            <td>9</td>
            <td>13</td>
            <td>E</td>
          </tr>
          <tr>
            <td>27</td>
            <td>Barack Obama</td>
            <td>6</td>
            <td>5</td>
            <td>11</td>
            <td>A</td>
          </tr>
          <tr>
            <td>30</td>
            <td>David Axelrod</td>
            <td>5</td>
            <td>7</td>
            <td>12</td>
            <td>D</td>
          </tr>
          <tr>
            <td>31</td>
            <td>Debbie Wasserman Schultz</td>
            <td>6</td>
            <td>0</td>
            <td>6</td>
            <td>E</td>
          </tr>
          <tr>
            <td>28</td>
            <td>Bill Clinton</td>
            <td>3</td>
            <td>2</td>
            <td>5</td>
            <td>C</td>
          </tr>
          <tr>
            <td>39</td>
            <td>Vladimir Putin</td>
            <td>3</td>
            <td>4</td>
            <td>7</td>
            <td>I</td>
          </tr>
          <tr>
            <td>33</td>
            <td>Joni Ernst</td>
            <td>4</td>
            <td>4</td>
            <td>8</td>
            <td>S</td>
          </tr>
          <tr>
            <td>35</td>
            <td>Michael Bloomberg</td>
            <td>5</td>
            <td>-3</td>
            <td>2</td>
            <td>I</td>
          </tr>
          <tr>
            <td>37</td>
            <td>Sonia Sotomayor</td>
            <td>1</td>
            <td>8</td>
            <td>9</td>
            <td>O</td>
          </tr>
          <tr>
            <td>32</td>
            <td>Demon Sheep</td>
            <td>1</td>
            <td>4</td>
            <td>5</td>
            <td>N</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <AuthorsNotes>
        <p>
          While writing, we were informed that some people suspected the hunt
          might use <i>Too Many Cooks</i> as part of the hunt theme. Hopefully we
          didn't disappoint your expectations. Unfortunately, we weren't able to
          use the character names to make a satisfactory clue phrase for the TMC
          extraction but we hope you enjoyed the puzzle regardless.
        </p>
      </AuthorsNotes>
      <style jsx global>{`
        .chopped-table th,
        .cooks-table th,
        .cnn-table th,
        .chopped-table td,
        .cooks-table td,
        .cnn-table td {
          text-align: center !important;
        }
        .chopped-table td:nth-child(5),
        .cooks-table td:nth-child(3),
        .cooks-table td:nth-child(5),
        .cnn-table td:nth-child(2),
        .cnn-table td:nth-child(6) {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          text-transform: uppercase;
        }
      `}</style>
    </Solution>
  );
};

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
