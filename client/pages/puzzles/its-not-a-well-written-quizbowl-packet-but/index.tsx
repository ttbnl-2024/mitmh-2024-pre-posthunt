import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS } from 'components/copy';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import { InlineTwemoji } from 'components/twemoji';

const SLUG = 'its-not-a-well-written-quizbowl-packet-but';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <InfoIcon>
          Note: this puzzle will follow the Encyclopedia Britannica's spelling,
          then Wikipedia if the Encyclopedia Britannica does not have an entry.
        </InfoIcon>
        <p className={cx(HIDDEN_CLASS)}>
          <b>
            This puzzle has formatting that is not preserved in
            copy-to-clipboard. Please see the puzzle page.
          </b>
        </p>
        <p>
          <b>Toss-up 1</b>
          <br />
          To prevent this hero from joining the Trojan War, he was hidden at
          Skyros where he had an affair with Deidamia and fathered Neoptolemus.
          This hero who, as a child, received a prophecy that his life would be
          glorious but short, was the greatest warrior in a war where he
          tragically loses his beloved companion. This mostly invulnerable
          figure died by an arrow shot into his foot. For 8/10/7 points, who is
          this central subject of the Iliad?
        </p>
        <p>
          <b>Bonus 8</b>
          <br />
          For 6 points, what deity did this figure fight during the war?<b>?</b>
          <br />
          <b>Bonus 13</b>
          <br />
          For 1 point, this figure participated on which side of a war?<b>?</b>?
          <br />
          <b>Bonus 21</b>
          <br />
          For 1 point, who is this hero's fully divine parent<b>?</b>?
        </p>
        <hr className="my-6" />
        <p>
          <b>Toss-up 2</b>
          <br />
          When a musical challenge between a satyr and this god ended in a tie,
          he refused to accept the outcome and set another challenge to play
          their instruments upside down, which his opponent was unable to do on
          a wind instrument. One of this deity's lovers was granted a long life
          without eternal youth, dooming them to grow shrunken and withered in
          their old age. This serpent slaying god and the brother of a moon
          deity was briefly banished to Earth after an act of murder. For 6/3/7
          points, who is this multifaceted god whose domain includes poetry,
          prophecy, healing, and music?
        </p>
        <p>
          <b>Bonus 6</b>
          <br />
          For 1 point, who is this figure's closest sister??<b>?</b>
          <br />
          <b>Bonus 12</b>
          <br />
          For 8 points, what is the name of the serpent slain by this god?
          <b>?</b>
          <br />
          <b>Bonus 15</b>
          <br />
          For 1 point, what male figure received this god during his exile on
          earth<b>?</b>?{' '}
        </p>
        <hr className="my-6" />
        <p>
          <b>Toss-up 3</b>
          <br />
          This goddess wanted to grant immortality to a favoured member of the
          Seven Against Thebes but decided against the blessing after watching
          him eat his enemy's brains. This war deity who was born as a fully
          armored adult was the patron of a major city of their culture. This
          deity of war and wisdom who frequently carries a severed head is a
          frequent helper of mortal heroes, such as matching a monsterslayer to
          a mystical horse and giving dragonslaying tips, but also once showed
          up in disguise to a battlefield to ensure that a hero loses his weapon
          and dies. For 6/15/4 points, who is this goddess of wisdom?
        </p>
        <p>
          <b>Bonus 10</b>
          <br />
          For 3 points, what serpentine figure is part of this deity's armament?
          <b>?</b>
          <br />
          <b>Bonus 19</b>
          <br />
          For 3 points, what flesh-eating bird is the symbol of this deity??
          <b>?</b>
          <br />
          <b>Bonus 20</b>
          <br />
          For 6 points, what is the most famous temple dedicated to this deity
          that is now located within a UNESCO World Heritage site in their
          central city<b>?</b>?
        </p>
        <hr className="my-6" />
        <p>
          <b>Toss-up 4</b>
          <br />
          This goddess turned the Sirens into half-bird monsters because they
          were her daughter's companions but did not help search for her after
          her abduction. To thank a queen who offered her hospitality, this
          goddess attempted to grant her son immortality, but could not complete
          the ritual because the queen disrupted it. This goddess commanded a
          dangerous spirit to entangle with and cause the downfall of a mortal
          king who profaned her sanctuary. For 7/4/5 points, who is this goddess
          of agriculture?
        </p>
        <p>
          <b>Bonus 1</b>
          <br />
          For 3 points, what spacecraft visited a dwarf planet named for this
          goddess' Roman counterpart<b>?</b>
          <br />
          <b>Bonus 4</b>
          <br />
          For 2 points, who is this goddess' husband<b>?</b>?
          <br />
          <b>Bonus 18</b>
          <br />
          For 2 points, which child is this goddess most protective of<b>?</b>?
        </p>
        <hr className="my-6" />
        <p>
          <b>Toss-up 5</b>
          <br />
          This Argonaut who was capable of rowing the boat by himself left the
          journey at Mysia to search for a companion who had been abducted by
          nymphs. In one story, this son of Zeus rescued a princess who Poseidon
          demanded as a sacrifice due to her parent's offence. This paragon of
          heroic strength who is commonly depicted with an iconic blunt weapon
          and once crossdressed while that weapon was in the possession of a
          ruler famously killed a serpent whose venom eventually killed him in
          turn. For 8/7/4 points, who is this hero known for performing Twelve
          Labors?
        </p>
        <p>
          <b>Bonus 5</b>
          <br />
          For 3 points, what is the name of the princess who was nearly eaten by
          Cetus<b>?</b>?
          <br />
          <b>Bonus 9</b>
          <br />
          For 4 points, what is the last name of the actor who played the Marvel
          Cinematic Universe's take on this figure?<b>?</b>
          <br />
          <b>Bonus 17</b>
          <br />
          For 4 points, this figure wrestled what personification of an aspect
          of life?<b>?</b>
        </p>
        <hr className="my-6" />
        <p>
          <b>Toss-up 6</b>
          <br />
          When this figure's husband intended to marry another princess, she
          gifted poisoned clothing and killed a member of the love triangle.
          When Theseus arrived in Athens, this figure persuaded Aegeus that the
          young hero was a threat and to poison him in an attempt to preserve
          her position in court. To ensure the death of a ruler who had wronged
          a loved one, this figure demonstrated that they can kill, cut up, and
          revive a living creature but refused to perform the ritual again when
          requested, leaving them not revived - fulfilling their revenge. For
          9/5/9 points, who is this sorcerous princess of Colchis?
        </p>
        <p>
          <b>Bonus 7</b>
          <br />
          For 2 points, the unperformed resurrection killed a lord of what
          location<b>?</b>?
          <br />
          <b>Bonus 14</b>
          <br />
          For 1 point, who was the other woman in this figure's marriage?
          <b>?</b>
          <br />
          <b>Bonus 16</b>
          <br />
          For 3 points, which brother did this figure cut apart?<b>?</b>
        </p>
        <hr className="my-6" />
        <p>
          <b>Toss-up 7</b>
          <br />
          This storm god defeated his parent, who tried to eat him at his birth
          but was tricked into eating a rock and not this eventual chief god of
          his pantheon. This figure fathered Aphrodite. For the crime of
          stealing fire and giving it to humanity, this god sentenced Prometheus
          to being chained to a rock and having his liver eaten eternally by an
          eagle. For 6/6/4 points, who is this king of the Olympian gods?
        </p>
        <p>
          <b>Bonus 2</b>
          <br />
          For 1 point, what is the last name of the astronomer who named the
          largest moon of the planet associated with this god<b>?</b>?
          <br />
          <b>Bonus 3</b>
          <br />
          For 2 points, who is this figure's mother??<b>?</b>
          <br />
          <b>Bonus 11</b>
          <br />
          For 5 points, who is this figure's (primary) consort?<b>?</b>?
        </p>
        <hr className="my-6" />
        <p>
          <b>Team Composition</b>
          <br />
          <span className="text-3xl">
            <InlineTwemoji emoji="🇨🇳" /> <InlineTwemoji emoji="🇪🇬" /> (
            <span className="whitespace-nowrap">
              <InlineTwemoji emoji="🇬🇷" /> x11)
            </span>{' '}
            <InlineTwemoji emoji="🇮🇳" /> <InlineTwemoji emoji="🇮🇪" />{' '}
            <InlineTwemoji emoji="🇯🇵" />{' '}
            <span className="whitespace-nowrap">
              (
              <InlineTwemoji emoji="🇲🇽" /> x2)
            </span>{' '}
            <span className="whitespace-nowrap">
              [(
              <InlineTwemoji emoji="🇩🇰" /> <InlineTwemoji emoji="🇳🇴" />{' '}
              <InlineTwemoji emoji="🇸🇪" />) x2]
            </span>{' '}
            <InlineTwemoji emoji="🇹🇷" />{' '}
          </span>
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
