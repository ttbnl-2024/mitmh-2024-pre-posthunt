import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'deep-deep-trouble';
const ANSWER = `FRICTION`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We are presented with a series of images of chalkboards with phrases
      indicating repentance for various seemingly nonsensical wrongdoings. The
      flavor text hints that maybe the subject of the puzzle would stay out of
      trouble more easily if they got a hobby. This helps us make a connection
      to the "
      <a href="https://www.explainxkcd.com/wiki/index.php/Category:My_Hobby">
        My Hobby
      </a>
      " running gag in the <i>xkcd</i> webcomic in which author Randall Munroe
      describes some annoying and obnoxious things he does for his hobbies. We
      notice two things: that each chalkboard phrase maps to one of the <i>xkcd</i>
      strips and that each has one word that is inappropriately capitalized. If
      we take the inappropriately capitalized letters from each board, it spells{' '}
      <Monospace>EPISODES</Monospace>:
    </p>
    <Table id="xkcd">
      <thead>
        <tr>
          <th><i>xkcd</i> #</th>
          <th>"My Hobby"</th>
          <th>Chalkboard Phrase</th>
          <th>Inappropriately Capitalized Word</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>37</td>
          <td>
            "Whenever anyone calls something an [adjective]-ass [noun], I
            mentally move the hyphen one word to the right
          </td>
          <td>My lame ass-excuses Excuse nothing</td>
          <td>
            <b>E</b>xcuse
          </td>
        </tr>
        <tr>
          <td>79</td>
          <td>"Answering casual questions in iambic pentameter"</td>
          <td>Replying in Poetic verse is wrong</td>
          <td>
            <b>P</b>oetic
          </td>
        </tr>
        <tr>
          <td>60</td>
          <td>
            "While everyone is watching the Super Bowl, feeling smugly superior
            because they're 'Only watching for the ads,' I steal cars."
          </td>
          <td>Hot-wiring car Ignitions during sports is unpatriotic</td>
          <td>
            <b>I</b>gnitions
          </td>
        </tr>
        <tr>
          <td>296</td>
          <td>
            "Doing skateboard tricks in Tony Hawk while also doing them in real
            life."
          </td>
          <td>I won't Switch and Skate simultaneously</td>
          <td>
            <b>S</b>kate
          </td>
        </tr>
        <tr>
          <td>451</td>
          <td>
            Sitting down with grad students and timing how long it takes them to
            figure out that I'm not actually an expert in their field
          </td>
          <td>It is wrong to mess with minds Of future doctors</td>
          <td>
            <b>O</b>f
          </td>
        </tr>
        <tr>
          <td>53</td>
          <td>
            "When the police bust drugs hideouts, I sneak in and hide. Then I
            jump out and startle them into shooting me so they lose points"
          </td>
          <td>I won't surprise preoccupied police Detectives anymore</td>
          <td>
            <b>D</b>etectives
          </td>
        </tr>
        <tr>
          <td>437</td>
          <td>"Renting an SUV and confusing the hell out of hybrid owners."</td>
          <td>I won't shame electric car Enthusiasts with Hummers</td>
          <td>
            <b>E</b>nthusiasts
          </td>
        </tr>
        <tr>
          <td>236</td>
          <td>
            "Standing in the supermarket's produce section holding a tube of K-Y
            jelly, looking contemplative"
          </td>
          <td>There's nothing Sexy about cucumbers or eggplants</td>
          <td>
            <b>S</b>exy
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      When we look at the flavor text, we also notice a note about watching
      cartoons and we remember <i>The Simpsons</i>' long-running{' '}
      <a href="https://simpsons.fandom.com/wiki/List_of_chalkboard_gags">
        chalkboard gag
      </a>
      . We take the <i>Simpsons</i> episode whose episode number matches the <i>xkcd</i> comic
      ID and record the text of the corresponding chalkboard gag. We then find
      the word in the same location as the inappropriately capitalized letter
      from the previous step and take its first letter to extract our final
      answer: <Answerize>FRICTION</Answerize>.
    </p>
    <Table id="simpsons">
      <thead>
        <tr>
          <th>Episode Number</th>
          <th>Chalkboard Phrase from Step 1</th>
          <th>Capitalized Word Index</th>
          <th>Episode Chalkboard Gag</th>
          <th>Extracted Word</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>37</td>
          <td>My lame ass-excuses Excuse nothing</td>
          <td>4</td>
          <td>Spitwads are not free speech.</td>
          <td>
            <b>F</b>ree
          </td>
        </tr>
        <tr>
          <td>79</td>
          <td>Replying in Poetic verse is wrong</td>
          <td>3</td>
          <td>I will return the seeing-eye dog.</td>
          <td>
            <b>R</b>eturn
          </td>
        </tr>
        <tr>
          <td>60</td>
          <td>Hot-wiring car Ignitions during sports is unpatriotic</td>
          <td>3</td>
          <td>This punishment is not boring and pointless.</td>
          <td>
            <b>I</b>s
          </td>
        </tr>
        <tr>
          <td>296</td>
          <td>I won't Switch and Skate simultaneously</td>
          <td>5</td>
          <td>Milhouse did not test cootie positive.</td>
          <td>
            <b>C</b>ootie
          </td>
        </tr>
        <tr>
          <td>451</td>
          <td>It is wrong to mess with minds Of future doctors</td>
          <td>8</td>
          <td>The world may end in 2012, but this show won't.</td>
          <td>
            <b>T</b>his
          </td>
        </tr>
        <tr>
          <td>53</td>
          <td>I won't surprise preoccupied police Detectives anymore</td>
          <td>6</td>
          <td>I will not barf unless I'm sick.</td>
          <td>
            <b>I</b>'m
          </td>
        </tr>
        <tr>
          <td>437</td>
          <td>I won't shame electric car Enthusiasts with Hummers</td>
          <td>6</td>
          <td>I will not mock teacher's outdated cell phone.</td>
          <td>
            <b>O</b>utdated
          </td>
        </tr>
        <tr>
          <td>236</td>
          <td>There's nothing Sexy about cucumbers or eggplants</td>
          <td>3</td>
          <td>I will not create art from dung.</td>
          <td>
            <b>N</b>ot
          </td>
        </tr>
      </tbody>
    </Table>
    <AuthorsNotes>
      <p>
        The title of this puzzle is a reference to{' '}
        <a href="https://www.youtube.com/watch?v=Fd2_gFhRPAI">this song</a> on
        the <i>The Simpsons Sing the Blues</i> album.
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      #xkcd td:nth-child(1),
      #xkcd th:nth-child(1),
      #simpsons th:nth-child(1),
      #simpsons td:nth-child(1),
      #simpsons th:nth-child(3),
      #simpsons td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
