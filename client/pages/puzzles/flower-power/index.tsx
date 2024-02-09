import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Link from 'components/link';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/flower-power/0.jpg';

const SLUG = 'flower-power';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Two bloomin' Crushed Petals in one? Make it stop!
        </FlavorText>
        <InfoIcon>
          A copyable pre-spreadsheeted version of the puzzle is located{' '}
          <Link href="https://docs.google.com/spreadsheets/d/1i2ZyumQiggItBDRJO3GcIpI1pk8eEc0bDma8EtQoAho/edit">
            here
          </Link>
          . You can duplicate a single sheet into an existing spreadsheet
          (triangle in the sheet tab → "Copy to").
        </InfoIcon>
        <div className="prefer-2-col">
          <div className="md:w-1/2">
            <p>
              <b>Clockwise:</b>
            </p>
            <ol>
              <li>
                Light, and also sound
                <br />
                Present
              </li>
              <li>
                People with deep musical knowledge
                <br />
                Without the desired results
              </li>
              <li>
                Negroni ingredient
                <br />
                Not at all edgy?
              </li>
              <li>
                Driver, on a film set
                <br />
                Long-time Ford model
              </li>
              <li>
                Get things straightened out
                <br />
                Website involved in Mandy Rose's release from the WWE
              </li>
              <li>
                Capital on the Mekong
                <br />
                Certain introduction, to the winners of the 2021 Mystery Hunt?
              </li>
              <li>
                Actors Joan and Tim
                <br />
                Oppositionally, to Caesar
              </li>
              <li>
                Questionable method?
                <br />
                They lack direction
              </li>
              <li>
                Brewing additive made from corn syrup
                <br />
                Never
              </li>
              <li>
                Adds additional overtones?
                <br />
                Ballet whose title character goes mad and dies by the end of the
                first act
              </li>
              <li>
                Mentally discombobulated
                <br />
                Persisted in doing
              </li>
              <li>
                Possible enjoyer of falafel and hummus, geographically speaking
                <br />
                Software engineering supervisor, e.g.
              </li>
              <li>
                Soup prepared with egg whites
                <br />
                Word referring to specific things
              </li>
              <li>
                Bartleby, notably
                <br />
                Edible typically encased in paraffin
              </li>
              <li>
                Hamm role of note
                <br />
                Site for a derby
              </li>
              <li>
                They're delineated with dots
                <br />
                Unlucky occurrence
              </li>
              <li>
                Abundantly provided
                <br />
                Bobby's bopper
              </li>
              <li>
                Decline a dividend, say
                <br />
                Indulge in moderation, say
              </li>
            </ol>
          </div>
          <div className="md:w-1/2">
            <p>
              <b>Counterclockwise: </b>
            </p>
            <ol>
              <li>
                Bon mot, often
                <br />
                Pointer for time management
              </li>
              <li>
                Places to snuggle one's baby
                <br />
                Ratio measuring reactivity
              </li>
              <li>
                Bridle part
                <br />
                Doing the twist?
              </li>
              <li>
                Most saturated, perhaps
                <br />
                Quizzes, possibly
              </li>
              <li>
                Bounded
                <br />
                Disgusts
              </li>
              <li>
                Justine, to Michael's Alex P.
                <br />
                Provisions{' '}
              </li>
              <li>
                14th-century author on the zoology of the Quran
                <br />
                Evergreen, so to speak
              </li>
              <li>
                Dutch historian who wrote a thesaurus of time
                <br />
                Teammate drafted 4 years after Ogugua
              </li>
              <li>
                Punter, for one
                <br />
                Whence the sundial's shadow is shortest
              </li>
              <li>
                American poet who went by his two animal-related names
                <br />
                Corsica/Malibu counterpart until 2005
              </li>
              <li>
                One might desire her affections
                <br />
                Rumps
              </li>
              <li>
                Certain pedals
                <br />
                Like plates with jagged edges?
              </li>
              <li>
                Place you're likely to break through
                <br />
                The Jersey Shore, for one
              </li>
              <li>
                Craft simulated dragon skin, perhaps
                <br />
                Honkers
              </li>
              <li>
                Could squeeze it in
                <br />
                Thoroughly irritate
              </li>
              <li>
                Bedeck'd, as at Ye Olde Tailor Shoppe
                <br />
                Programming language implementation often used for rapid
                prototyping
              </li>
              <li>
                One with signing authority, typically
                <br />
                Paris-born guitarist specializing in Gypsy Jazz
              </li>
              <li>
                Follow a decorator's recommendation, maybe
                <br />
                Use an etui, say
              </li>
            </ol>
          </div>
        </div>
        <p>
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
        </p>
        <p>
          <SheetableImage alt="" src={image0} title="" className="mx-auto" />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
