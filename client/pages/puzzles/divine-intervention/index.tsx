import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

const SLUG = 'divine-intervention';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          With hundreds of options, it sometimes ain't simple to figure out to
          whom you should address your prayers.
        </FlavorText>

        <ol className="pl-5 sm:pl-10 space-y-2">
          <li>
            When his wife's complexion began looking a bit sallow during labor,
            Hippocrates consulted his folio. "Amnia jaundice!" he diagnosed,
            before praying to _____ for a safe childbirth.
          </li>
          <li>
            When she needed help in a battle with the Gargareans, Hippolyta's
            first thought was to con a jar of Greek fire from Theseus, but she
            decided instead to pray to _____ to allow her fierce fighting women
            to rout the enemy.
          </li>
          <li>
            The members of Sophocles' acting troupe weren't geniuses, so they
            couldn't understand the tragic significance of his latest script.
            That's why he prayed to _____ to improve the skills of the
            performers.
          </li>
          <li>
            When his ornery mule left the grainfields for the back lawn, sat
            down, and refused to move, poor Geras Macdonaldos the farmer prayed
            to _____ for help in harvesting his crops.
          </li>
          <li>
            When Diogenes' lantern went out, he froze, petrified of the pitch
            blackness. "My legs! I can't move my legs!" he cried, before praying
            to _____ for assistance.
          </li>
          <li>
            When Ulysses' men spied pirates on the horizon, he froze, thinking
            they were all goners. A basinful of water splashed into his face by
            Telemachus snapped him out of it, though, and he began praying to
            _____ for protection from the brigands.
          </li>
          <li>
            By the time Glauce realized that the unfair bodice sent to her was
            poisoned, she was already feeling its effects, so she immediately
            prayed to _____ to provide an antidote.
          </li>
          <li>
            After Xanthippe threatened him with divorce, Socrates assembled
            Athens' most prominent legal team: Shroom, Nightshade &amp; Hemlock,
            Attorneys-at-Law. But first he prayed to _____ that his attorneys
            would have the law on their side.
          </li>
          <li>
            Frail moonbeams lit the forest where Orpheus was sneaking up on a
            tree where he'd seen bees. As he prepared to extract the hive, he
            prayed to _____ that he would successfully build a working apiary.
          </li>
          <li>
            When his elderly father Anchises was nowhere to be found as Troy
            burned, Aeneas prayed to _____ to protect him until Aeneas could
            sweep the unhandy oaf atop his shoulders.
          </li>
          <li>
            While being nursed by the she-wolf, Romulus (somewhat
            anachronistically) prayed to _____ for a main metro area he could
            name after himself.
          </li>
          <li>
            When, at Croesus' bacchanal, a horde of field mice chased screaming
            revellers into fudge sculptures, into the fruit tray, and out the
            door, Croesus prayed to _____ to end the plague of rodents.
          </li>
          <li>
            Livia Drusilla set off on the road to Ostia, eager to see the
            splendor of the rich port. She made sure, though, to first pray to
            _____ for safe travel.
          </li>
          <li>
            When Julius Caesar couldn't sleep on the evening of March 14th, he
            first tried writing his thoughts on a pad, hymn singing, and even
            counting satyrs. Finally, though, he just prayed to _____ to take
            him off to dreamland.
          </li>
        </ol>
        <br />
        <h3>Deities:</h3>
        <ul>
          <li>Achlys</li>
          <li>Apollo</li>
          <li>Aristaeus</li>
          <li>Demeter</li>
          <li>Dionysus</li>
          <li>Erebos</li>
          <li>Geras</li>
          <li>Hera</li>
          <li>Ioke</li>
          <li>Mercury</li>
          <li>Neptune</li>
          <li>Nomos</li>
          <li>Roma</li>
          <li>Somnus</li>
        </ul>
        <br />
        <h3>Prayers Received at (Nursia Standard Time, respectively):</h3>
        <p>
          Vespers, Laud, Lauds, Vigi, Laud, None, Prime, Prime, Non, Terce,
          Terce, Sext, Se, Vigi
        </p>
      </div>

      {/* TODO: uncomment if you wish to include your own styles.
      <style jsx>{`
        .example {
          color: var(--dark);
        }
      `}</style>
        */}
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
