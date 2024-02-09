import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'at-the-late-night-picture-show';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <FlavorText>I guess we'll have leftovers tonight...</FlavorText>
        <p>
          First, we're in and out with a previously fishy guy who seems to be
          getting awfully close to his neighbors, then, a former scarface
          blindly greets his niece's 16 children after being a cheat!
        </p>
        <p>
          First, a guy who once directed fences is unemployed at a bar and asked
          to find a white woman, then, a boyhood director decides to end his
          characters' meeting without any contact info, but they will figure out
          a way to meet 20 more times!
        </p>
        <p>
          First, a woman who says the l-word finds herself stripping to pay for
          ballet school, then, a producer, who once took 11 days off, thankfully
          avoided a third World conflict, though everything still ended afire!
        </p>
        <p>
          After a vessel is sunk, the fourth man to be bonded as a spy runs into
          the guy who played Tevye, then, a woman who knew how to network dies
          of cancer after 17 years and disinherits her children… talk about
          twisted family trees!
        </p>
        <p>
          First a woman who becomes really into cats and eventually births a
          wasp appears as a singing pink lady, then, a former taxi driver who is
          now an unfunny comic confessing to kidnapping his friend, gets 10
          years in prison where he's super hungry!
        </p>
        <p>
          First, the guy who used to be an alien from Ork shows up as a boy who
          actually grew up, then, a former bodyguard who is really good with
          arrows is about to wed a maid, when the king returns with 21 horse
          feet!
        </p>
        <p>
          First, that singer who wanted to know if there's life on Mars is
          amazed he's dancing with the Muppets, then, Miss Piggy's creator
          directs a 20-day old man-eating plant who is killed but then seemingly
          reincarnated in a way that works!
        </p>
        <p>
          First, an adaptation of a famous work by an author who loved a rose in
          bloom and good wives is family friendly, then, a woman who likes to
          show time in a yellow jacket and is into togetherness is a 16 year old
          who, after committing a murder with her true love, is legally not
          allowed to see her again, even to fill up her tank with units of gas
          from Europe!
        </p>
        <p>
          First, that guy who refused to kill mockingbirds is a commander of a
          lot of people during the war, then, a guy who made a charade of a
          great escape 7 decades ago is also in the war fighting for the Germans
          against the Russians, and in the end, he laughs so much that it marks
          a vowel!
        </p>
        <p>
          First, that lady who had a lot of sex in the city has morphed into a
          department store statue, then, a lady who managed employees' severance
          thinks she killed a serial killer in her dreams, but her lights come
          up on her 33 estates!
        </p>
        <p>
          First, that guy who had great family ties is participating in an
          all-night scavenger hunt, then, the former queen associates with
          gangsters and now is kidnapped 23 minutes after noon!
        </p>
        <p>
          First, the man who portrayed Dr. Greene falls in love at the LaBrea
          Tar Pits, then, the guy who was Lincoln drives in the rain, confesses
          his happiness then is seen getting stuck in the mud 30 times!
        </p>
        <p>
          First, that guy who had me at hello starts a franchise where he
          apparently does all his stunts, then, a director known for wagging the
          dog directs some death and a woman who seems to be really into naming
          shakes and has 16 friends who are cheapskates!
        </p>
        <p>
          First, that guy who was a jerk has issues with his kids, then, a
          previous solo flier is on what ends up not being a final mission, as
          he rides off into the sunset to see a Jason Robert Brown musical 16
          times!
        </p>
        <p>
          First, that guy who used to live with two women and complain about the
          company also has kid problems, but with one specific kid, and then, a
          woman who played the teacher-turned-president on that SyFy show has a
          very sad epilogue that validates that 13 years later, their culture
          was gone!
        </p>
        <p>
          First, the band that told the tale of Tommy inspires another movie,
          though it has none of their songs, then, the woman who was known for
          rolling thunder in a drowning pool after taking a nickel ride is found
          performing in a dive bar with a pseudonym after going on a killing
          spree of 11 analysts!
        </p>
        <p>
          First, that guy who liked to dance dirty's high school class is
          suddenly interrupted by a Soviet invasion, then, that guy who visited
          the third rock from the sun stops burning books and finally allows
          dancing after adjusting his medication 5 times!
        </p>
        <p>
          First, that guy who trained someone for a day is at a funeral with a
          bunch of football coaches, then, a guy who used to be live from New
          York is an animated leader making amends he would like to delete after
          being turned into a llama 26 times!
        </p>
        <p>
          First, that guy who used to watch the bay is kind of a dick as he
          helps some crowd boosters try to stop a mall from taking over their
          high school, and then, the guy who was Frankenstein's young helper is
          a bodyguard who happens to vilify 24 women a bit too closely.
        </p>
        <p>
          First, that pretty woman leaves her fiance at the altar, then, a
          former vampire slayer has her reputation destroyed by a journal
          revealing her 18 manipulations, rampant drug use, and use of
          long-winded sentences.
        </p>
        <p>
          First, that guy who was a dick to Tracy is having an affair with women
          he cuts hair for, and the Italian director who mastered some thrills
          and horror directs a decapitation, which was divided 7 times!
        </p>
        <p>
          First, the first Bond girl is now looking for her vanished
          anthropologist husband, and then an alien man for all seasons is drawn
          in more ways than one to a battle with 22 orcs though he speaks in
          some jargon!
        </p>
        <p>
          First, a man who was everywhere all at once searches for treasure with
          his young outcast friends, then, a director of a group that loves
          cereal, waffles and eggs directs a machine-made perfect girl of more
          than 11 to become a gym teacher, as previously mentioned!
        </p>
        <p>
          First, one of Charlie's angels gets something in her hair, and then,
          that girl who discovered ET 23 years ago, finds her prince, gets a
          portrait of herself, and really lives, at least in concept!{' '}
        </p>
        <p>
          First, a woman who was once a patient English woman struggles to go on
          after a few family deaths, then, the guy who made sure to eat
          Potassium in black uncuffs a man he has been chasing for 20 years who
          has finally been exonerated and can now blossom!{' '}
        </p>
        <p>
          First, a guy who had a scene with a hungry bear boards a large boat
          that hasn't sunk just yet, and then, an Oscar winning composer for a
          beastly film helps another animated myth go the distance 6 times
          without naming names!
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
