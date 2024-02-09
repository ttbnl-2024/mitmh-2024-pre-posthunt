import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/0.png';
import image1 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/1.png';
import image2 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/2.png';
import image3 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/3.png';
import image4 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/4.png';
import image5 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/5.png';
import image6 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/6.png';
import image7 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/7.png';
import image8 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/8.png';
import image9 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/9.png';
import image10 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/10.png';
import image11 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/11.png';
import image12 from 'assets/puzzles/where-on-earth-is-carmina-suntigre/12.png';

const SLUG = 'where-on-earth-is-carmina-suntigre';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <InfoIcon>Image text is available in copy-to-clipboard.</InfoIcon>
        <div className="all-mono">
          <p>
            From: The Chief
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Subject:{' '}
            <b>
              <u>Where on Earth Is Carmina Suntigre?</u>
            </b>
          </p>
          <p>
            Gumshoes, it looks like Carmina Suntigre's entire gang has busted
            out of prison again, and are wreaking larcenous havoc around the
            globe!
          </p>
          <p>
            If we could just connect these crooked criminals to the crimes
            committed, and have the respective national authorities do a lineup
            with them, I bet we'd find aspects that don't match up with their
            carefully-crafted cover stories! Then, we could use bits of that
            evidence to track down Carmina herself, and turn her in to the
            PROPER authorities!
          </p>
          <p>
            Oh, and the rest of our agents are all busy, so you'll have to hit
            it a cappella!
          </p>
          <hr />
          <p>
            From: ARGENTINE Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Crime Description: All the works of Jorge Luis Borges (1899&ndash;1986),
            our most famous writer, have been stolen! And we mean all: from his
            longest story, The Congress, all the way down to some unpublished
            scribblings that appear to be drafts of A POEM WITH SIX STANZAS OF
            SIX LINES EACH, PLUS A FINAL ENVOI (7), they're all gone! Please
            help us get them back!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 11:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect was on their phone saying there was
            just no way they were going to be able to get all those notes out so
            quickly. They were eating clam chowder."
          </p>
          <hr />
          <p>
            From: BANGLADESHI Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Crime Description: Our national language of Bengali has been stolen!
            No, we're not sure how that works either. At first, when the radios
            just broadcast static, we suspected something like THE FLOW OF IONS
            EMERGING FROM THE SUN (5,4) as the culprit. But then we realized we
            couldn't actually talk to each other to ask one another what was
            going on. It's chaos, I tell you! Help!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/13/2024 12:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect was carrying a page that seemed
            like it was from a workplace manual. It said, 'The first thing you
            should do before starting a project is check to see if the pipe is
            clear. If it's not, you could wind up with a sticky mess all over
            the floor, and you don't want to touch that, believe me!'"
          </p>
          <hr />
          <p>
            From: CROATIAN Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Crime Description: The Walls of Dubrovnik have been stolen! These
            defensive fortifications helped the city become known as the"Pearl
            of the Adriatic" by shielding its architecture from maritime
            attacks. As one of Croatia's most popular destinations for
            vacationers, their loss will negatively impact THE COMMERCIAL TRAVEL
            INDUSTRY (7). We need them back pronto!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 08:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect was really upset because they said
            they'd lost their bow and all of their spare strings."
          </p>
          <hr />
          <p>
            From: CYPRIOT Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Crime Description: Aphrodite's Rock has been stolen! You know,
            Aphrodite's Rock? The supposed mythological birthplace of the
            goddess Venus? Okay, sure, maybe it's not as big of a tourist
            attraction as A CERTAIN NYC "ISLAND" (5) we could name, but it's
            important to us, and we want it back!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 01:00:00 PM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "Ugh! The suspect bored me to death talking
            about how they use different pigments in their work! Speaking of
            pigment, they had lovely brown eyes."
          </p>
          <hr />
          <p>
            From: DOMINICAN Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Crime Description: Morne Trois Pitons National Park -- along with
            all of its natural features like the Boiling Lake, Trafalgar Falls,
            and the Titou Gorge -- has been stolen! This crime was so large, so
            brazen, that we first tried to contact A CERTAIN WEB-SLINGING
            SUPERHERO (6-3), but he was busy, so we're hoping you can help
            instead!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 08:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect was complaining about how much time
            they spent at work looking for the right solution."
          </p>
          <hr />
          <p>
            From: EQUATOGUINEAN Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Crime Description: Bioko Island -- our largest island, where our
            capital Malabo is located -- has been stolen! We really have no idea
            how this could have been accomplished! With some sort of time
            machine? A seismic upheaval? Maybe a DEVICE PRODUCING A STREAM OF
            NEGATIVELY CHARGED PARTICLES (8,3)? Whatever caused the
            disappearance, we need you to get our capital back!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 06:00:00 PM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect asked to borrow my pen to write
            down a bunch of figures about salinity. They said it was for work."
          </p>
          <hr />
          <p>
            From: FRENCH Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} /> Crime Description: Mon Dieu!
            The Mona Lisa has been stolen, because of course it has. Again with
            the Mona Lisa getting stolen! We do have other paintings in this
            country, you know! Wonderful masterpieces by Monet, Renoir, Van
            Gogh... but when an international gang of criminals decides to nab
            some priceless artwork, it's always the Mona Lisa they steal! Well,
            find it, please, or every ENTHUSIASTIC DEVOTEE (3) of art will be
            devastated!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 10:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect said nothing gave them more joy
            than nocking an arrow and hitting the bullseye at the center of the
            target. They were eating barbecue."
          </p>
          <hr />
          <p>
            From: HAITIAN Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} /> Crime Description: The Three
            Bays Protected Area -- along with all of its coral reefs, seagrass
            beds, mangrove swamps, and forests -- has been stolen! Please help:
            the news has turned the country's environmentalists into RAVING
            LUNATICS (7)!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 05:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "All I remember was the look in their vivid
            green eyes as they asked me where they could buy some acetone."
          </p>
          <hr />
          <p>
            From: JAMAICAN Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} /> Crime Description: All of the
            Jamaican music in Jamaica has been stolen! Instead of listening to
            Bob Marley, to reggae, to ska, our citizens are stuck listening to
            ma LIVELY IRISH DANCE (3) over and over until it's returned! Please
            help us: if I hear "The Irish Washerwoman" one more time, I'll
            scream!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 08:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect said they were pretty good at
            delivery, but that their favorite part of the job was when they got
            to surprise someone by pulling out a card and presenting to them.
            They had auburn hair."
          </p>
          <hr />
          <p>
            From: LIECHTENSTEINER Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} /> Crime Description: The borders
            of Liechtenstein have been stolen: both the border with Austria and
            the one with Switzerland! Even though their MEASUREMENTS FROM END TO
            END (7) were only 34.3 km and 41.3 km, respectively, we really need
            them back or everyone will think we don't exist! Please hurry: we
            get overlooked enough as it is!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 09:00:00 AM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect was eating crawfish étouffée."
          </p>
          <hr />
          <p>
            From: MALTESE Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} /> Crime Description: No, not a
            falcon! Where would you get that idea? All of the sheep's milk in
            Malta has been stolen! Not the sheep themselves -- they're still
            here in THE MEADOW WHERE THEY GRAZE (7) -- but the milk is gone!
            Without it, how will we make the Ġbejniet cheese that's our most
            famous local delicacy? Please return the milk to us any whey you
            can!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 04:00:00 PM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The thief somehow fit through this tiny
            opening, but I have no idea how: nobody has shoulders that narrow!
            Maybe a fox or something could've gotten through there, but not an
            adult human, that's for sure!"
          </p>
          <hr />
          <p>
            From: SAINT LUCIAN Authorities
            <br />
            <br className={cx(NO_COPY_CLASS)} /> Crime Description: All of the
            ports in Saint Lucia have been stolen! Without them, the cruise
            ships on which we depend for our economic well-being will have
            nowhere to dock! And if a single ship VEERS WILDLY IN AN
            UNCONTROLLED MANNER (7) into one of our coastal hotels, it would be
            a disaster! Please help!
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Local Time/Date of Crime: 1/12/2024 12:00:00 PM
            <br />
            <br className={cx(NO_COPY_CLASS)} />
            Witness' Statement: "The suspect told a story about a time at work
            when they got thrown backwards by an unexpectedly strong current.
            They were eating chili."
          </p>
        </div>
        <hr />
        <SheetableImage
          alt="The AQUACULTURIST"
          src={image0}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The AQUACULTURIST"</li>
          <li>
            Wanted for: Grand Larceny, Conspiracy, Fishing Without a License
          </li>
          <li>Hair Color: Brown</li>
          <li>Eye Color: Blue</li>
          <li>Favorite Cuisine: Tex/Mex</li>
        </ul>
        <SheetableImage
          alt="The ARCHER"
          src={image1}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The ARCHER"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Jaywalking</li>
          <li>Hair Color: Black</li>
          <li>Eye Color: Hazel</li>
          <li>Favorite Cuisine: Kansas City-style</li>
        </ul>
        <SheetableImage
          alt="The CHEMIST"
          src={image2}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The CHEMIST"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Unpaid Lab Fees</li>
          <li>Hair Color: Blond</li>
          <li>Eye Color: Green</li>
          <li>Favorite Cuisine: Creole</li>
        </ul>
        <SheetableImage
          alt="The ELECTRICIAN"
          src={image3}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The ELECTRICIAN"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Static Cling</li>
          <li>Hair Color: Brown</li>
          <li>Eye Color: Blue</li>
          <li>Favorite Cuisine: Cincinnati-style</li>
        </ul>
        <SheetableImage
          alt="The GENETIC ENGINEERS"
          src={image4}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The GENETIC ENGINEER"</li>
          <li>
            Wanted for: Grand Larceny, Conspiracy, Coughing Up Hairballs on
            White Carpet
          </li>
          <li>Hair Color: Brown and White</li>
          <li>Eye Color: Green</li>
          <li>Favorite Cuisine: Cajun</li>
        </ul>
        <SheetableImage
          alt="The GLASSBLOWER"
          src={image5}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The GLASSBLOWER"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Littering</li>
          <li>Hair Color: Black</li>
          <li>Eye Color: Brown</li>
          <li>Favorite Cuisine: Carolina-style</li>
        </ul>
        <SheetableImage
          alt="The INSPECTOR"
          src={image6}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The INSPECTOR"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Evidence Tampering</li>
          <li>Hair Color: Black</li>
          <li>Eye Color: Gray</li>
          <li>Favorite Cuisine: Texas-style</li>
        </ul>
        <SheetableImage
          alt="The MAGICIAN"
          src={image7}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The MAGICIAN"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Sorcery</li>
          <li>Hair Color: Red</li>
          <li>Eye Color: Brown</li>
          <li>Favorite Cuisine: Mongolian</li>
        </ul>
        <SheetableImage
          alt="The MESSENGER"
          src={image8}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The MESSENGER"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Double Parking</li>
          <li>Hair Color: Red</li>
          <li>Eye Color: Hazel</li>
          <li>Favorite Cuisine: Manhattan-style</li>
        </ul>
        <SheetableImage
          alt="The MUSICIAN"
          src={image9}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The MUSICIAN"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Illegal Busking</li>
          <li>Hair Color: Brown</li>
          <li>Eye Color: Hazel</li>
          <li>Favorite Cuisine: New England-style</li>
        </ul>
        <SheetableImage
          alt="The PAINTER"
          src={image10}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The PAINTER"</li>
          <li>Wanted for: Grand Larceny, Conspiracy, Vandalism</li>
          <li>Hair Color: Brown</li>
          <li>Eye Color: Brown</li>
          <li>Favorite Cuisine: Korean</li>
        </ul>
        <SheetableImage
          alt="The PLUMBER"
          src={image11}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "The PLUMBER"</li>
          <li>
            Wanted for: Grand Larceny, Conspiracy, Drinking Out of the Toilet
          </li>
          <li>Hair Color: White</li>
          <li>Eye Color: Brown</li>
          <li>Favorite Cuisine: Churrasco</li>
        </ul>
        <SheetableImage
          alt="Carmina SUNTIGRE"
          src={image12}
          title=""
          className="mx-auto w-full md:w-[600px]"
        />
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Criminal Alias: "Carmina SUNTIGRE"</li>
          <li>Wanted for: A little bit of everything, and then some</li>
          <li>Hair Color: Unknown</li>
          <li>Eye Color: Unknown</li>
          <li>Favorite Cuisine: ???</li>
        </ul>
      </div>

      <style jsx>{`
        .all-mono {
          font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
