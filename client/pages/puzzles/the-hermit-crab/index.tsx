import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'the-hermit-crab';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>The answer checker accepts minipuzzle answers.</InfoIcon>
        <p className="indent-12">
          Oh, hi there! I'm a hermit crab. I've lived in loads of different
          homes. But my back is bare right now, as you can see.
        </p>
        <p className="indent-12">
          Rather than building houses, we crabs find and repurpose existing
          ones. In the past, I've never cared how a previous owner used their
          house. When I moved in, I always lived in it in my own way. But maybe
          now it's time for a change.
        </p>
        <p className="indent-12">
          Hey, you're not busy, are you? Wanna hear about my adventures?
        </p>
        <p className="indent-12">
          Almost a dozen years ago, I got creeped out by this talking, toothy,
          grinning mouth just floating in the air. I skedaddled and found a tree
          full of birds arguing with each other. I found a nice home at that
          tree. To settle the debates, I brought something to BE KILLED,
          something DEAD, something MANUAL, a bunch of NOTHING, something OPEN,
          some TAILS, and something to go WITH. Oh, and I stamped my luggage
          with the numbers 0381478 and -9064194.
        </p>
        <p className="indent-12">
          Oh, and last year I was crawling around this place chock full of
          interesting things. I found the perfect home, in a huge room with lots
          of tables and chairs. But I didn't care about the layout. I was there
          for the food. I moved in immediately, bringing a BRINK, something
          CONELESS, a DALI, a GRAIL, a HORUS, a ROCHET, a RUMEN, a SOX BET, and
          a WIFFLE.
        </p>
        <p className="indent-12">
          A super long time ago &mdash; I was only like 21? &mdash; a bunch of
          humans were clamoring about finding a witch named Agatha's stone. Some
          people were staring at a tome with no title, talking about summoning a
          monster to help them. Since I'm just a crab, I didn't get involved.
          When they finished with the book, though, I nestled inside it as a
          nice warm home. First I bought in my BURIED PIRATE TREASURE, and then
          my SEGA, my SCRATCHPAD, my NWO stuff, some NE, a NACHO, a SET, a copy
          of SWR, some NERF stuff, and finally a NAIL.
        </p>
        <p className="indent-12">
          Just a couple years later, I fell asleep aboard a pirate ship. I woke
          up to a bunch of scrappy thieves who could &mdash; get this &mdash;
          travel through time. I thought I was gonna get lost in the past. But
          eventually I found a sturdy home, at a stone table by the sea. The
          table had a bunch of coordinates I didn't care about, but more
          importantly, a map to undersea gemstones. Little white gems, big black
          gems, and even some hidden black gems the map didn't show. I nestled
          in, first unpacking my LIGHT AUDIO, then CHOCO TACOS, WALRUS TUSK,
          KING DEDEDE, NIGHTLIGHT, WILD TOMATO, FLYING FROG, OUTER RANGE,
          WHITEBOARD, and finally RYE WHISKEY.
        </p>
        <p className="indent-12">
          Jumping forward: once, I found a nice home in a room full of humming
          computers. I couldn't move in immediately, because the previous
          occupants unexpectedly needed an extra day to get through all their
          stuff. Weird that they used lockpicks and snuck around everywhere. At
          some point during their extended stay, the computers really heated up…
          something about "hunter2 isn't strong enough." I wonder who was
          responsible? Well, I'm just a crab. I brought a bunch of stuff: some
          NON-FIBONACCI stuff, a FEMININE ARTICLE, CONSONANTS, stuff in A MAJOR,
          UNIQUE stuff, POKEMON GAMES, CHESS PIECES, IN DEPTH stuff, stuff IN
          FAVOUR, PERFECT SQUARES, HEXADECIMALS, PRIME stuff, …and 43 more
          things, though you don't need to hear them all.
        </p>
        <p className="indent-12">
          Many years earlier, I got lost in the underworld. […] You're kidding!
          You too? Just yesterday? […] Wow, your underworld sounds interesting,
          but sure different from this one. I found a nice, very warm, home.
          While moving in, I overheard an interview about all sorts of evil
          plans to take over the world. I listened while unpacking my ENGINEERS
          RING, FUECOCO, GNEISS, ISOSCELES, KOLLER, OREGON U, PERRUQUIER, RENYI,
          and REPLAYTV. I wonder what everyone's letters and numbers meant.
        </p>
        <p className="indent-12">
          More recently, I got sucked into a weird abstract space. After
          hitching a ride on a metro, I found a… well… I can't even describe it,
          it was a pile of totally random trash. We're talking a piece of
          honeycomb, a big eyeball, some bread coming out of a thesaurus. A
          bunch of stuff like that. I heard a piece of machinery humming inside
          it. Well, I was curious and I like honey, so I figured, why not? I
          packed my SOUL NET, THAI, FIFE, and LOITERS, and dropped in to my new
          home.
        </p>
        <p className="indent-12">
          Also recently, I found myself at a strange school. The tallest
          building was overgrown with plants and one of the hallways just kept
          going. I didn't understand it, but I did find a nice home. It was in a
          big grassy field with lots of light both day and night, and lots of
          people running back and forth. While I was here, I brought some ALTOS,
          some OOPAK, something SILKY, some SNOKE merch, and some TCBYS.
        </p>
        <p className="indent-12">
          Oh, and a while ago, I eavesdropped on a wedding, where the bride got
          kidnapped by a big turtle-dinosaur-monster. After she was rescued, I
          found a home in a neighborhood with lots of expensive houses and
          hotels, formerly occupied by a doctor and six men. (Well, they called
          themselves "men," but I beg to differ.) I ended up staying in one
          particular "man"'s former home. For entertainment, I landed on SEVERAL
          ALBUMS, a DELICIOUS FEAST that made me GO TO JAIL, a TROMBONE CONCERT,
          some DJ BANDS' MUSIC, and BRITISH COMEDY, to enjoy in that order. I
          tried playing a board game the "man" left behind, but I didn't have an
          opponent, so I gave up after five rounds.
        </p>
        <p className="indent-12">
          One time, I had a ton of fun at an amusement park! So much fun that I
          just had to live there. I followed a sign that said "Animals this way
          →". I saw a bunch of humans there looking at different animals, one of
          whom was a kid studying a diagram. But what's more important:
          understanding some boring picture, whose colors didn't even look
          right, or unpacking my SAMSUNG NOTE SEVENS, SHAKEN SODA, ROGUE MOGWAI,
          DROPS OF ICE-NINE, MEDUSA HEAD, DEATH NOTE, PIHA KAETTA, KANTONIAN
          FORM VULPIX, and NOVA BOMBS?
        </p>
        <p className="indent-12">
          Also recently, I found myself at a strange school. The tallest b-
          wait, sorry, I already told you. Well, I found another home at the
          same time, on a street east and then north from the grassy field. I
          went round to the nearest hall, where the previous occupants had just
          gotten rid of a lot of dirt. I brought my SHOES, OBOE, PAIL, TOFU,
          POT, DRILL, BOOTS, BEANS, SEEDS, HORSESHOES, PC, OVEN, PEAR, DESSERTS,
          IRON, SOUPSPOONS, and finally GRILL. If you ever visit, unless you're
          lucky, it'll look different than how I saw it &mdash; sorry!
        </p>
        <p className="indent-12">
          Hmm… that's all I can remember for now. I skipped around
          chronologically there, but I think I told you those stories in a good
          order.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
