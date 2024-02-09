import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/puzzles/evildoers-wanted/0.png';
import image1 from 'assets/puzzles/evildoers-wanted/1.png';
import image2 from 'assets/puzzles/evildoers-wanted/2.png';
import image3 from 'assets/puzzles/evildoers-wanted/3.png';
import image4 from 'assets/puzzles/evildoers-wanted/4.png';
import image5 from 'assets/puzzles/evildoers-wanted/5.png';
import image6 from 'assets/puzzles/evildoers-wanted/6.png';
import image7 from 'assets/puzzles/evildoers-wanted/7.png';
import image8 from 'assets/puzzles/evildoers-wanted/8.png';
import image9 from 'assets/puzzles/evildoers-wanted/9.png';
import image10 from 'assets/puzzles/evildoers-wanted/10.png';
import image11 from 'assets/puzzles/evildoers-wanted/11.png';
import image12 from 'assets/puzzles/evildoers-wanted/12.png';

const SLUG = 'evildoers-wanted';
const ANSWER = `SEX DRIVE`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle is formatted as a series of case files. We can identify the
      creatures / people identified in the files as aliases of criminals from
      the TV series <i>Criminal Minds</i> (which is hinted at in the flavourtext; we
      can also google a bunch of these aliases together to find the show). In
      order of picture, they are:
    </p>
    <ul>
      <li>Animal</li>
      <li>Ben Franklin</li>
      <li>Cat</li>
      <li>Chameleon</li>
      <li>The Doctor</li>
      <li>The Face Cards</li>
      <li>The Fisher King</li>
      <li>The Fox</li>
      <li>Morpheus</li>
      <li>The Preacher</li>
      <li>The Replicator</li>
      <li>Santa Muerte</li>
      <li>Sicarius</li>
    </ul>
    <p>
      Almost every episode of <i>Criminal Minds</i> begins and ends with a quote. The
      thought bubbles are sayings paraphrased from these bookend quotes
      contained in episodes featuring these criminals. We need to match up the
      aliases with their sayings; each saying has one word in common with the
      original saying. Indexing the star rating into the shared word, sorted in
      episode order, spells out <Monospace>ANS IS </Monospace>
      <Answerize>SEX DRIVE</Answerize>.
    </p>
    <h2>Appendix</h2>
    <Table className="mt-1">
      <thead>
        <tr>
          <th>Episode</th>
          <th>Criminal</th>
          <th>Saying</th>
          <th>Rewrite</th>
          <th>Shared Word</th>
          <th>Index</th>
          <th>Extract</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.07</td>
          <td>
            <SheetableImage alt="" src={image7} title="" />
            The Fox
          </td>
          <td>With foxes, we must play the fox.</td>
          <td>You've gotta act like me to play alongside me.</td>
          <td>
            <Monospace>PLAY</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>1.22</td>
          <td>
            <SheetableImage alt="" src={image6} title="" />
            The Fisher King
          </td>
          <td>
            No man needs a vacation so much as the man who has just had one.
          </td>
          <td>
            I was exhausted from my last trip! Man, I gotta take another break.
          </td>
          <td>
            <Monospace>MAN</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>4.10</td>
          <td>
            <SheetableImage alt="" src={image0} title="" />
            Animal
          </td>
          <td>For he today who sheds his blood with me shall be my brother.</td>
          <td>
            We've gone through some tough times together. I'm his family now.
          </td>
          <td>
            <Monospace>HIS</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>5.19</td>
          <td>
            <SheetableImage alt="" src={image11} title="" />
            Santa Muerte
          </td>
          <td>
            Many persons have the wrong idea of what constitutes true happiness.
            It is not attained through self-gratification but through fidelity
            to a worthy purpose.
          </td>
          <td>
            Lotsa people make this mistake: real joy is only found via devotion
            in some greater cause.
          </td>
          <td>
            <Monospace>IS</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>7.23</td>
          <td>
            <SheetableImage alt="" src={image5} title="" />
            The Face Cards
          </td>
          <td>Fear is met and destroyed with courage.</td>
          <td>A brave person isn't scared of being destroyed.</td>
          <td>
            <Monospace>DESTROYED</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>8.24</td>
          <td>
            <SheetableImage alt="" src={image10} title="" />
            The Replicator
          </td>
          <td>
            Affliction comes to us, not to make us sad but sober; not to make us
            sorry but wise.
          </td>
          <td>Adversity can help us become more lucid and enlightened.</td>{' '}
          <td>
            <Monospace>US</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>9.17</td>
          <td>
            <SheetableImage alt="" src={image4} title="" />
            The Doctor
          </td>
          <td>Illusion is needed to disguise the emptiness within.</td>
          <td>
            We dress ourselves up so that our inner emptiness remains hidden.
          </td>
          <td>
            <Monospace>EMPTINESS</Monospace>
          </td>
          <td>1</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>9.24</td>
          <td>
            <SheetableImage alt="" src={image9} title="" />
            The Preacher
          </td>
          <td>
            When truth is buried, it grows. It chokes. It gathers such an
            explosive force that on the day it bursts out, it blows up
            everything with it.
          </td>
          <td>It's explosive once a squelched fact eventually resurfaces.</td>{' '}
          <td>
            <Monospace>EXPLOSIVE</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>X</Monospace>
          </td>
        </tr>
        <tr>
          <td>11.05</td>
          <td>
            <SheetableImage alt="" src={image8} title="" />
            Morpheus
          </td>
          <td>Ghosts were created when the first man woke in the night.</td>
          <td>
            Our minds created the spirits when we were startled awake.
          </td>{' '}
          <td>
            <Monospace>CREATED</Monospace>
          </td>
          <td>7</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>11.09</td>
          <td>
            <SheetableImage alt="" src={image1} title="" />
            Ben Franklin
          </td>
          <td>
            The enemy is within the gates. It is with our own luxury, our own
            folly, our own criminality, that we have to contend.
          </td>
          <td>
            All of us must confront our personal excess, foolishness and sin.
          </td>{' '}
          <td>
            <Monospace>OUR</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>12.22</td>
          <td>
            <SheetableImage alt="" src={image2} title="" />
            Cat
          </td>
          <td>
            The villainy you teach me I will execute, and it shall go hard, but
            I will better the instruction.
          </td>
          <td>One who learned to be evil will be worse than his teacher.</td>{' '}
          <td>
            <Monospace>WILL</Monospace>
          </td>
          <td>2</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>15.09</td>
          <td>
            <SheetableImage alt="" src={image3} title="" />
            Chameleon
          </td>
          <td>Damaged people are dangerous. They know they can survive.</td>
          <td>
            A wounded man is scariest because he understands how to survive.
          </td>{' '}
          <td>
            <Monospace>SURVIVE</Monospace>
          </td>
          <td>4</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>16.10</td>
          <td>
            <SheetableImage alt="" src={image12} title="" />
            Sicarius
          </td>
          <td>The heart wants what it wants, or else it doesn't care.</td>
          <td>The mind's desires cannot be controlled.</td>{' '}
          <td>
            <Monospace>PLAY</Monospace>
          </td>
          <td>3</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <h2>Attributions</h2>
    <ul className="mt-1">
      <li>Animal: fair use</li>
      <li>
        Ben Franklin:{' '}
        <a href="https://en.wikipedia.org/wiki/Benjamin_Franklin#/media/File:Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg">
          public domain
        </a>
      </li>
      <li>
        Cat:{' '}
        <a href="https://en.m.wikipedia.org/wiki/File:Cat_March_2010-1.jpg">
          Alvesgaspar
        </a>,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">
          CC BY-SA 3.0
        </a>
      </li>
      <li>
        Chameleon:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Indian_chameleon_From_Kanakpura,_Karnataka.jpg">
          Girish Gowda
        </a>,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          CC BY-SA 4.0
        </a>
      </li>
      <li>Doctor Who: fair use</li>
      <li>
        Face cards:{' '}
        <a href="https://www.stockio.com/free-photo/king-queen-jack-cards">
          Stockio.com
        </a>
      </li>
      <li>
        Fisher king:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Perceval-arrives-at-grail-castle-bnf-fr-12577-f18v-1330-detail.jpg#mw-jump-to-license">
          public domain
        </a>
      </li>
      <li>
        Fox:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Red_fox_face_mammal_vulpes_vulpes.jpg">
          public domain
        </a>
      </li>
      <li>Morpheus: fair use</li>
      <li>
        Preacher:{' '}
        <a href="https://pixabay.com/illustrations/preacher-illustration-jesus-christ-1905176/">
          Pixabay
        </a>
      </li>
      <li>Replicator: fair use</li>
      <li>
        Santa Muerte:{' '}
        <a href="https://en.wikipedia.org/wiki/Santa_Muerte#/media/File:Santa-muerte-nlaredo2.jpg">
          public domain
        </a>
      </li>
      <li>
        Sicarius:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Unidentified_Sicarius,_female_-_02.jpg">
          Beliar spider
        </a>,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          CC BY-SA 4.0
        </a>
      </li>
    </ul>
    <style jsx global>{`
      td:nth-child(1),
      td:nth-child(2),
      td:nth-child(6),
      td:nth-child(7) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
