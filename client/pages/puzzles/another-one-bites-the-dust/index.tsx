import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace } from 'components/copy';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

const SLUG = 'another-one-bites-the-dust';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <p>Dear Monsignior Lau-Kozlowskii:</p>
        <p>That's it! I quit! I've had it! </p>
        <p>
          I understand that a lot of people look forward to our annual service
          where they can bring their pets, but not me, the Head Usher! It's
          always a zoo, even when it's just your run-of-the-mill dogs and cats,
          but this year, it was worse than ever, and I can't take it anymore, so
          I'm resigning immediately!
        </p>
        <p>
          I don't even know where to start… so much went wrong I can't keep it
          all straight! But here's just some of the highlights:
        </p>
        <ul>
          <li>
            When he was handed the chalice of communion wine, this guy in a
            tuxedo says really loudly, "No wine for me! I'll have a vodka
            martini, shaken not stirred, and I'll need a couple more for my two
            springboks here!" I tried to shush him, but he just looked at me
            menacingly and said he'd been known to "gnash gentle souls!" Yikes!
          </li>
          <li>
            While everyone else was praying to receive their daily bread and to
            have their trespasses forgiven, these six guys on zebras suddenly
            decided to trespass into the sanctuary, riding them up and down
            behind the altar with their (the zebras') massive cloaks billowing
            out behind them like Superman or something. I had to corral them
            back into their pew, and their owners got all snippy with me, saying
            I'd ruined their "vehicular demo!"
          </li>
          <li>
            When the cantor was on the last line of the Responsorial Psalm, a
            swarm of six bats, which had been hanging upside-down from their
            owner's hat brim all service looking melancholy, decided to swoop up
            to the front and peck at her with their cylindrical proboscises! I
            had to run up front and swat them away, and they all flew off into
            the belfry! When I asked the owner to get them back down again, all
            he did was snort that he didn't have to do what anyone said because
            he was a "teen artisan!"
          </li>
          <li>
            Shortly after poor Father Kellwasser first stepped up to the
            microphone, these four sucker fish with cleft palates apparently
            decided they wanted to put their mouths to use as well, and they
            popped out of their bowl and affixed themselves to his alb, and
            refused to let their owner &ndash; or me &ndash; tug them off! I
            told her that next time she should leave some of them at home and
            she just muttered something about "a local minimum."
          </li>
          <li>
            Right as the lector started reading from Job 17:1, this bream that
            some lady had with her jumped out of its tank into the aisle,
            balanced on its tail, and started gyrating its midsection! And she
            starts clapping and throwing flower petals at it! When I asked her
            how many petals she'd brought with her, she says, "A treasure
            chestful!" She wasn't kidding: I had to sweep them all up
            afterwards!
          </li>
          <li>
            As the Offertory plate came around, six hutias &ndash; yeah, the
            owner claimed they were rats, but I know a rat when I see one, and
            these were clearly hutias just pretending to be rats, probably for
            some nefarious purpose! &ndash; climbed onto it and started nibbling
            on the cash! When I grabbed the plate away, some of the coins fell
            on the floor, and the owner accused me of having "waster's furor!"
          </li>
          <li>
            Just after Father Kellwasser broke the giant wafer in half, this
            fellow from Europe, overcome with emotion, stands up and starts
            singing "Danny Boy," and his three elks start singing along (if you
            can call it singing)! When I asked him to stop, he just started a
            rendition of some other song called "Patient Rick," clearly meant to
            imply that I was impatient!
          </li>
          <li>
            Right when Father Kellwasser said, "The mystery of faith," this guy
            who was some hotshot investor of some kind &ndash; on the board of
            Unilever and Chairman of some fast-food chain or other &ndash;
            opines loudly that the real mystery is why we haven't been fed yet,
            and he pulls out a handful of pilaf, slaps it right on the altar,
            and starts feeding it to his rat! When I told him that was an altar,
            not a dinner table, he said he was declaring it a "reinvented
            altar!"
          </li>
          <li>
            I haven't even mentioned how Father Kellwasser was in the middle of
            his announcement about the church bazaar when there was a huge
            crash! This bandicoot had squirmed away from its owner &ndash; who
            was visiting from the Arctic Circle &ndash; and landed hard on the
            kneeling bench on a pair of… trotters? (They looked very odd for a
            bandicoot) I told its owner I was going to pickle those trotters if
            they made that much noise again, and he told me his bandicoot had
            "slain titmice" and if I didn't watch out, I'd be next!
          </li>
          <li>
            Oh, and right after we sang "Holy" three times in a row, some lady
            starts screaming that she's lost her five mice, and that we can tell
            they're hers because even though she lives right on the shore in
            Daytona and hangs out by the ocean with it every day, they've still
            never gotten a suntan. I looked everywhere and eventually found
            them… still in their cage! You'd think she'd've thanked me, but no:
            she called me a "mental moocher" instead!
          </li>
          <li>
            While everyone else was reciting, "I look forward to the
            resurrection of the dead" in unison, this lady with six birds
            perched on her fingers starts acting like she's motoring them around
            the church, hollering, "Vroom-vroom! Vroomy vroom-vroom! Pigeon at
            the wheel!" When I tell her in no uncertain terms, "Don't let the
            pigeon drive the bus!" she tries to claim that in this scenario, the
            pigeons were just fare-paying <u>riders</u> of the bus, and that she
            was giving them a ride home from this "mediocre pub!"
          </li>
          <li>
            When Father Kellwasser was finally able to give his take on what
            today's scripture means for us, these eleven guys from Port Louis,
            each with a big tortoise, decided it was time to leave, and they
            started putting tack right on the tortoises' shells, like they were
            some kind of horses or something! I told them it's against the rules
            (not to mention rude) to leave before the dismissal, and they called
            me an "impious elk winder!"
          </li>
          <li>
            Later &ndash; or maybe it was earlier &ndash; the lector was reading
            Revelation 6:8 when these two cormorants (who were, like their
            owner, wearing glasses) started loudly making their guttural calls!
            I told the owner that wasn't allowed, and he gave me some rigmarole
            about being exempt from the rules due to the "taxi eater loophole!"
          </li>
          <li>
            Despite all the talk of "peace" when everyone was shaking hands with
            everyone else, it was far from peaceful, because some kid from
            Washington State pulled a gopher right out of his jeans! I don't
            know how it even fit in there next to his wallet and phone and keys…
            but what I do know is that once it was out, it started burrowing a
            hole in the floor! When I told the kid to put that thing back where
            it came from, he just laughed and started taking pictures of it,
            while calling me an "incautious limp ham!"
          </li>
          <li>
            Even the songs provided no relief! As we sang "eleison" three times
            (almost in a row), this guy from Dripping Springs lets go of the
            leashes on his three wolves, and the beasts bound into the loft and
            try to devour the choirboys! And the guy didn't even notice! He was
            just reading something called a "Cabaret Romance" on his phone!
          </li>
          <li>
            Finally &ndash; or maybe it was earlier &ndash; Father Kellwasser
            was reading the story of Lazarus, and these eight rhinoceri wearing
            thick knit sweaters apparently thought they would wake the dead,
            too, by thundering up and down the aisle! When I told their owner
            that they were out of control, he just asked me for "calmer burrow
            info."{' '}
          </li>
        </ul>
        <p>
          It was so bad, I almost lost my temper and said… well, I can't repeat
          it to a clergyman, so let's just say it would have looked like:{' '}
          <Monospace>(2) [ (6) ] (5) (3)</Monospace> !
        </p>
        <p>
          So, rather than risk blaspheming in church again, I quit! You can find
          someone else to do my job!
        </p>
        <p>Regards,</p>
        <p>Former Head Usher Hangenberg</p>
        <p>
          P.S. Here are the amounts of the checks received in today's offering,
          so you can make note of the charges in the congregants' accounts:
        </p>
        <ul className="list-none pl-0">
          <li>$18.04</li>
          <li>$22.99</li>
          <li>$26.98</li>
          <li>$35.45</li>
          <li>$55.85</li>
          <li>$60.01</li>
          <li>$62.01</li>
          <li>$76.08</li>
          <li>$79.90</li>
          <li>$88.02</li>
          <li>$96.06</li>
          <li>$115.99</li>
          <li>$118.71</li>
          <li>$122.92</li>
          <li>$137.33</li>
          <li>$189.10</li>
        </ul>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
