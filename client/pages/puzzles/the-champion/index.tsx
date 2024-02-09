import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'the-champion';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>This retold homeric epic covers many combats. </FlavorText>
        <p className="mb-0">
          <b>
            Entering... A Flavorful Starting Lineup (Combat Tricks: 1GW,
            Removal: 2WWW)
          </b>
        </p>
        <ul className="list-none px-[1em] indent-[-1em]">
          <li>
            A god gave a warning: carefully return the maiden or you will see no
            more sunrises.
          </li>
          <li>A gods willing: the arrow flew. Many mortals' replied.</li>
          <li>
            After nine long years, they wished to turn to pacifism, as their
            ships were twisted, rotted planks of wood and the tackling loosed.
          </li>
          <li>
            Bearing the yoke of destiny and the tugs of family, the older
            brother grew larger than life and returned to battle with the
            younger.
          </li>
          <li>
            He halted an army from raising sail and departing by speaking to
            them.
          </li>
          <li>
            He who duels this brother will be immortalized by poets, so many of
            the assembled vie for the chance.
          </li>
          <li>
            Hopeless, the unbowed bows, yet the Champion insists: "I will lay
            down arms".
          </li>
          <li>
            No longer homesick, the army was arranged into a forest of immense
            built soldiers.
          </li>
          <li>
            Sing: The muse will tell us of rage, the ways of war, and of a
            failure to make peace.
          </li>
          <li>
            The Champion stood firm in nonviolence, and asked for the aid of the
            sea mother to punish the thieves.
          </li>
          <li>
            The new hero wiped the sweat and blood from his brow, having injured
            the god of war with deific aid.{' '}
          </li>
          <li>
            The old king got a god's false dream: "With spear held high,
            charge".
          </li>
          <li>
            The pride of the city's guardians rallied them: they were eager for
            a fight, in the glow of a thousand fires in the plain.
          </li>
          <li>
            The warrior armed himself to face his foe, whose spouse despaired.
            He raised his weapon, and hoped to strike the final blow.
          </li>
          <li>
            They argue through the night. The Champion wants to abstain before
            the battle.
          </li>
          <li>
            Two reached for a stone until sun disenchant the sky; no victor
            emerges.
          </li>
        </ul>
        <p className="mb-0">
          <b>Match: Power (Combat Tricks: 7GGGW)</b>
        </p>
        <ul className="list-none px-[1em] indent-[-1em]">
          <li>
            They retreated until their backs were zero inches from their ships,
            terrified of the indomitable might of the god of arrows.
          </li>
          <li>
            The cunning was wounded between two ribs, the healer hurt: the
            friend promised to beg the Champion.
          </li>
          <li>
            Despite the snake, without two seconds' pause, it was ordered:
            "Crash the ramparts!", and the fortification was breached.
          </li>
          <li>
            When the allies arrived, both sides sent spies: Three in total. The
            invaders hoped for a boon of safety from the gods.
          </li>
          <li>
            The sea lost a son. Angrily, an ally was gifted the strength of
            three.
          </li>
          <li>
            With love, the great god is lulled to sleep in just three winks.
          </li>
          <li>
            The ally begged "If you will not lend your aid, then lend me three
            pieces of your armor", hoping to save their ship.
          </li>
          <li>
            Three times, the pal stepped on the wall, but each, he fell. Dying,
            he said: "My death will invigorate the Champion."
          </li>
        </ul>
        <p className="mb-0">
          <b>Match: Color (Combat Tricks: 1B, Removal: W)</b>
        </p>
        <ul className="list-none px-[1em] indent-[-1em]">
          <li>
            A god smithed a gift in a white hot forge to dress the Champion to
            meet the end.
          </li>
          <li>
            White, frothy river was jammed with corpses never to turn swords to
            plowshares.
          </li>
          <li>
            When the gods offer immortality, the price is steep. The Champion
            took up arms with black rage, seeking vengeance for his pal.
          </li>
          <li>
            The elder brother took the armor, and all the others were green with
            envy, then warring over the body.
          </li>
        </ul>
        <p className="mb-0">
          <b>Match: Toughness (Removal: 1BB)</b>
        </p>
        <ul className="list-none px-[1em] indent-[-1em]">
          <li>
            The brother runs three laps, but a god forces him to fight. The
            Champion struck and caused the hero's downfall.
          </li>
          <li>
            For his journey to the next, four horses, among other gifts, were
            burned.
          </li>
        </ul>
        <p className="mb-0">
          <b>Match: Name</b>
        </p>
        <ul className="list-none px-[1em] indent-[-1em]">
          <li>
            The father begged, "Let his body be yoked no more. Let my men and
            their oxen build him a pyre."
          </li>
        </ul>
        <p>
          <i>How can we see what's in the cards for the Champion?</i>
        </p>

        <Table className="table-fixed w-full text-right" noBorder={true}>
          <tbody>
            <tr>
              <td className="border-b border-black px-2 w-[20%]">27</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">27</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="border-r border-b border-black px-2">5</td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">2</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="border-b border-black px-2">27</td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">17</td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">25</td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">8</td>
              <td></td>
            </tr>
            <tr>
              <td className="border-b border-black px-2">7</td>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">13</td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">13</td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">7</td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-b border-black px-2">4</td>
              <td className="border-r border-black"></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">12</td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">1</td>
              <td></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">71</td>
            </tr>
            <tr>
              <td className="border-b border-black px-2">20</td>
              <td></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">3</td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">14</td>
              <td className="border-r border-black"></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">32</td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-b border-black px-2">2</td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">7</td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">16</td>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">7</td>
              <td></td>
            </tr>
            <tr>
              <td className="border-b border-black px-2">2</td>
              <td></td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-b border-black px-2">13</td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">11</td>
              <td className="border-r border-black"></td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">13</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-b border-black px-2">50</td>
              <td className="border-r border-black"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-black"></td>
              <td className="border-r border-b border-black px-2">3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="border-r border-b border-black px-2">59</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
