import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import audio1 from 'assets/puzzles/good-company/1.mp3';
import audio2 from 'assets/puzzles/good-company/2.mp3';
import audio3 from 'assets/puzzles/good-company/3.mp3';
import audio4 from 'assets/puzzles/good-company/4.mp3';
import audio5 from 'assets/puzzles/good-company/5.mp3';
import audio6 from 'assets/puzzles/good-company/6.mp3';
import audio7 from 'assets/puzzles/good-company/7.mp3';
import audio8 from 'assets/puzzles/good-company/8.mp3';
import audio9 from 'assets/puzzles/good-company/9.mp3';
import audio10 from 'assets/puzzles/good-company/10.mp3';
import audio11 from 'assets/puzzles/good-company/11.mp3';
import audio12 from 'assets/puzzles/good-company/12.mp3';
import audio13 from 'assets/puzzles/good-company/13.mp3';
import audio14 from 'assets/puzzles/good-company/14.mp3';
import audio15 from 'assets/puzzles/good-company/15.mp3';
import audio16 from 'assets/puzzles/good-company/16.mp3';
import audio17 from 'assets/puzzles/good-company/17.mp3';
import audio18 from 'assets/puzzles/good-company/18.mp3';
import audio19 from 'assets/puzzles/good-company/19.mp3';

const SLUG = 'good-company';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          The burger joint next door has been around for years, but it seems
          like there's a different store in this location every week. The
          shopkeeper's always animated in his ads, but he needs to dial back his
          rhetoric.
        </FlavorText>
        <InfoIcon>Audio transcripts are provided below each clip.</InfoIcon>
        <hr className="my-4" />
        <AudioLink src={audio1} />
        <p>
          If you're in need of relaxation and rejuvenation, look no further! Our
          team of expert therapists are ready to ease your stress and leave you
          feeling as relaxed as a rabbit in a meadow. Stop by to try our weekly
          specials:
        </p>
        <ul>
          <li>
            The Soothesayer: a hot stone procedure with our staff tarot reader,
            Doc Fortune.
          </li>
          <li>
            Rub and Dubbed Club, Three Men and Some Subs: Bring two friends for
            an afternoon of shiatsu and a screening of a classic foreign film.
            Lunch is provided!
          </li>
          <li>Deep Tissue Dressage: Tension subsides. Then horseback rides!</li>
          <li>
            Knead, To Get Out More: 60 relaxing minutes to entice you to leave
            your house from time to time
          </li>
        </ul>
        <p>
          Located in the same spot as my last shop, which wasn't scoring any
          style points. Visit us today to indulge in the luxurious escape that
          you deserve! Call 180-555-5331 to schedule an appointment now. NO
          GIRLS ALLOWED!
        </p>
        <hr className="my-4" />
        <AudioLink src={audio2} />
        <p>
          If you're being sued and looking to sew, you've come to the right
          place. I regret having to close my previous store due to the customers
          being a bunch of big babies but I've converted it into an event space
          dedicated to fabric and justice. Stop by this week to sit in on the
          following classes:
        </p>
        <ul>
          <li>
            Objection! Calls for decoration!: Learn how to call out the
            opposition for insincere lines of witness questioning
          </li>
          <li>
            Stitches for Snitches: We'll teach you how to deliver testimony
            without bias
          </li>
          <li>
            I Pleat the Fifth: An excellent template for avoiding
            self-incrimination
          </li>
          <li>Legally Binding: Discover how to write seamless contracts</li>
          <li>Patchwork Defenses: We've got your backing</li>
          <li>
            Spool of Law: A survey class covering the basics without
            embellishment
          </li>
        </ul>
        <p>Space is filling up fast! Reserve your seat now at 501-555-6916.</p>
        <hr className="my-4" />
        <AudioLink src={audio3} />
        <p>
          You are traveling to another dimension. A dimension not only of sight
          and sound, but of illumination. Cross the threshold, if you dare, and
          submit to the otherworldly spell of my store. This is a realm
          transformed (thanks to a suit brought by the He Said She Sued League
          of Women Lawyers) into a land where glowing moons and stars surround
          everything and shadow rabbits are cast upon the walls as if by magic.
          Witness, if you will, our weekly specials:
        </p>
        <ul>
          <li>
            The Go With the Glow Lantern will guide you through the darkest
            corners of your imagination (and to and from the bathroom at 1AM).
          </li>
          <li>
            Serling Silver Sconces: brilliant rods to brighten any hallway
          </li>
          <li>
            Nightmare at 20,000 Foot Candles: No one's sleeping when this is on
          </li>
          <li>
            Whose Shine is it Anyway?: An eerie luminescence with no clear
            origin
          </li>
        </ul>
        <p>
          Call now at 041-555-7429 before you wake up and find out this whole ad
          was just a dream.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio4} />
        <p>
          Is Felix not feeling like himself? Is Tiger's tummy upset? I'm back
          with a new veterinary business. While my last venture was not
          supported by listeners like you, I'm excited to offer my medical
          services to your constipated kitties. And we work fast, so you can
          hang out with your friends at the brewery down the street while you
          wait! Get in touch with us today about our weekly specials:
        </p>
        <ul>
          <li>
            Heartburn of a Lion: We've got antacid tablets to relieve your
            tabby's symptoms
          </li>
          <li>
            Colic! Oh!: We have soothing treatments to get the digestive tract
            back on track
          </li>
          <li>
            The Magic Stool Bus: take advantage of our roving laboratory to test
            your pet for digestive diseases on the go!
          </li>
        </ul>
        <p>
          Don't delay getting your pet the help they need. Call today at
          518-555-5451.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio5} />
        <p>
          If you're a parent who's upset that most children's stores don't carry
          garments that fit your larger little one, my new store is the answer
          to your prayer. I know customers at my last shop felt left out of the
          loop, but my staff has been retrained to better serve you and your
          above average children. Come see us and we can help with products such
          as:{' '}
        </p>
        <ul>
          <li>Twosies: Because sometimes a onesie just doesn't cover it</li>
          <li>
            Brobdingnagian Booties: Like the title says: just your basic
            everyday large booties
          </li>
        </ul>
        <p>
          In a culture that's obsessed with shaming our nonstandard-sized
          toddlers, we celebrate the uniqueness of your extra large bundle of
          joy. Stop by or call today at 040-555-8128, because ALL children
          deserve the best!
        </p>
        <hr className="my-4" />
        <AudioLink src={audio6} />
        <p>
          Oh my God Becky look at this shop! It is so big! I treat slipped discs
          and I cannot lie. Though I just couldn't cut it anymore at my last
          business, I recently opened this place where I can ease your pain with
          novel techniques. Sadly, I just don't have the spine for business and
          I'm going to be closing the shop and moving to Long Island at the end
          of the week. I had hoped that I could help a lot of people here but,
          like the very few customers we've had, I stand corrected. Stop by or
          call 518-555-6744 in the next few days to take advantage of our going
          out of business specials:
        </p>
        <ul>
          <li>
            What's the Story, Tailbone?: Have the plots of classic literature
            explained to you while we work
          </li>
          <li>
            While My Lumbar Gently Weeps: I look at your spine and see it needs
            treating
          </li>
          <li>
            Out to Posture: corrective treatment to help you stand properly
          </li>
        </ul>
        <p>Thank you to those of you who patronized my past stores.</p>
        <hr className="my-4" />
        <AudioLink src={audio7} />
        <p>
          Get ready to sleigh this holiday season with our tremendous selection
          of Christmas decor. Journey down to my new store where you'll find the
          perfect decorations to spruce up your winter display. Our customers
          are stocking up on the following hit products:
        </p>
        <ul>
          <li>
            Good Holly, Miss Molly: Decorative sprigs from Molly's farm down the
            street
          </li>
          <li>Mistletopiary: A manger's worth of bushy barn animals</li>
          <li>
            Fir, a Few Dollars More: Premium Christmas trees at premium prices
          </li>
        </ul>
        <p>
          Our last store closed for a combination of reasons, but we're
          reopening this week just in time for Christmas! Our helpful elves are
          waiting to answer your call at 050-555-1541.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio8} />
        <p>
          Are you craving a Hawaiian getaway? Dreaming of sitting on the beach
          sipping mai tais and snacking on pineapple spears while watching a
          rainbow arc over a surfing contest? My new store can't get you there
          exactly, but we've got a ukulele track playing on repeat over the
          sound system so it's basically as close as you can get without a plane
          ticket. Stop by today and check out our weekly specials:
        </p>
        <ul>
          <li>A Waist of Talent: We hoop you'll enjoy this addictive toy</li>
          <li>
            Oahu Do You Think You Are: Hawaiian genetic testing kits to help
            find your long-Lost relatives
          </li>
          <li>
            That Luau Factor: A little extra something to take your next party
            to the next level
          </li>
        </ul>
        <p>
          There was mutton we could do to keep the previous business open, but
          we're embracing the aloha spirit and moving on. Give us a call at
          419-555-2043.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio9} />
        <p>
          Time after time, you go to your barber and get the same boring cut.
          Not anymore! Step through our glass doors and you're instantly
          transported back in time to the era of big ‘dos, bright colors, and
          unforgettable tunes. Here is a selection of what our salon offers:
        </p>
        <ul>
          <li>
            Girls Just Want to Have Buns: Whether you're looking for a stylish
            updo or a sandwich on an onion bun, we've got it
          </li>
          <li>She Bob: Our signature women's haircut</li>
          <li>
            Untrue Colors: choose from a kaleidoscope of vibrant dyes and colors
            or…
          </li>
          <li>Inky Roots: our more traditional dyes</li>
        </ul>
        <p>
          Business was patchy at my last shop, but you can find us in the same
          location and you can reach us by phone at 081-555-2067.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio10} />
        <p>
          Are you tired of stores that take advantage of you by selling you more
          than you really need? Why should you have to pay for a twin when
          there's only one of you!? Whether you're living in a dorm or a tiny
          Upper West Side apartment, we can guarantee a good night's rest
          without sacrificing space. Stop in today and check out our weekly
          specials:
        </p>
        <ul>
          <li>
            The Princess and the Peewee: You could stack twenty on top of each
            other in the corner of a studio apartment and still feel an egg
            hidden underneath
          </li>
        </ul>
        <ul>
          <li>Hold Me Closer Tiny Duvet: Every tiny bed needs tiny bedding</li>
          <li>
            Murphy's In-law Suite: Talk to us about installing guest bedding
            that folds into your wall for easy storage when guests aren't around
          </li>
        </ul>
        <p>
          You can visit us any time, day or nighty night, at the same location
          as my last business, which shut down because the financial losses were
          hard to swallow. You can also call us at 516-555-4491.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio11} />
        <p>
          Summer in Italy is perfect for adventure under the Mediterranean sun,
          long strolls among the olive groves, watching a band perform on the
          piazza, and most of all: fleeting romance. At sunset, the heat of
          ephemeral love warms you from the inside, but does nothing to protect
          your shoulders from a brisk breeze. Visit my new shop for a wide
          variety of products to shield you from the chill of heartbreak (and
          we'll monogram "Elio," "Oliver," or the moniker of your choice free of
          charge). Our weekly specials include:
        </p>
        <ul>
          <li>
            Warm Shoulder Treatment: The finest wool from Istanbul is used to
            make this cozy cloak
          </li>
          <li>It's a Wrap!: It's a wrap!</li>
          <li>
            You Better Cape Up: Because you need a cape and we can make it
            personalized
          </li>
          <li>
            The Head Poncho: Everyone will know who's in charge when they see
            your moniker sewn into this poncho
          </li>
        </ul>
        <p>
          My last shop closed because we had the rug pulled out from under us
          and who knows how long this one has. Let's enjoy a good thing while it
          lasts. Call now at 140-555-9720.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio12} />
        <p>
          Whether you're looking for a new scent for your home or you just need
          a little more light for those dark corners, we have the perfect
          products for you. It doesn't matter if you want gentle flicker or a
          nuclear blast of light, our weekly specials have something for
          everyone:
        </p>
        <ul>
          <li>
            Red Sky at Night, Sailor's Tealight: A dozen of these around a tub
            with some bath bombs means total relaxation
          </li>
          <li>15 Minutes of Flame: Burns fast and bright</li>
          <li>
            A Votive Confidence: Need a boost of self-confidence? This will
            light a fire under you. Or at least next to you.
          </li>
          <li>Just the Wax, Ma'am: No nonsense non-scents</li>
        </ul>
        <p>
          Having to close my last shop was an unexpected twist ending, but we're
          feeling fired up about this business. To get in touch, call us now at
          113-555-4067.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio13} />
        <p>
          Calling all green thumbs! We're celebrating the grand opening of our
          brand new store with gear that will help you look great while getting
          down and dirty! Say goodbye to the shame of being seen in your
          planting garb; our greenhouse gurus can help show you what
          "horti-couture" is all about! Like our famous catchphrase says: You'll
          dig these digs while you dig. Our weekly backyard fashion specials
          include:
        </p>
        <ul>
          <li>Late Bloomers: Loose-fitting trousers for evening yardwork</li>
          <li>
            Hoe Down, Button-Up: This shirt is a little mulch, but it'll grow on
            you
          </li>
          <li>Crop Tops: Shirts made from alfalfa and soybeans</li>
          <li>
            I'd Like to Buy a Trowel: A line of gowns that are dazzling,
            regardless of whether you're turning letters or turning soil.{' '}
          </li>
        </ul>
        <p>Stop by today or call 051-555-2955 for information.</p>
        <hr className="my-4" />
        <AudioLink src={audio14} />
        <p>
          Hello and welcome to This American Girl Life. On today's episode,
          we'll explore the failures of a shop that couldn't conduct enough
          business to stay open. But first, a sentence or two about an
          enchanting new store full of intricate miniature furniture, charming
          teeny outfits, and whimsical props that will bring your child's
          miniature best friend's home to life. Some of our weekly specials
          include:
        </p>
        <ul>
          <li>A tiny desk, naturally</li>
          <li>
            Wait Wait… Don't Smell Me!: A line of minuscule perfumes and
            deodorants, because even toys deserve fresh air
          </li>
          <li>I Wish You Would Step Back From That Pledge: a mini-megaphone</li>
          <li>
            The Radio Lab: Comes with small scale beakers and bunsen burner
          </li>
          <li>The WBEZ Bake Oven</li>
          <li>
            Ira's Glasses: Tiny eyewear to make all your playthings look so much
            smarter
          </li>
          <li>
            Nina Totes Magoats: Available for a sustaining pledge of just ten
            dollars a month.{' '}
          </li>
        </ul>
        <p>
          Our volunteers are standing by to take your calls at 904-555-5730.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio15} />
        <p>
          If you're a DIY enthusiast with a passion for tech, you won't be able
          to resist my new store! I had to close the last store after our seed
          funding got pulled but I'm back with aisles full of everything you
          need to spark your innovation! Visit today for the chance to pick up
          these weekly specials that are flying off the shelves:
        </p>
        <ul>
          <li>
            It's Bigger Than a Breadboard: Oversized circuit prototype kits
          </li>
          <li>
            It's Arduino Out Here For A Chimp: Microprocessors so simple that
            even monkeys can use them!
          </li>
          <li>
            Tinker Tailor Solder Spy: For those clandestine circuitry jobs
          </li>
          <li>Raspberry Pi Crust: Perfect for your next bake-off</li>
          <li>Short Circuit Long Jacket: Priced for smooth liquidation.</li>
        </ul>
        <p>Visit our website or call at 090-555-6085.</p>
        <hr className="my-4" />
        <AudioLink src={audio16} />
        <p>
          If you wish your life could be more tressful, my new shop is for you.
          When you see how little our products cost, you'll blow your top! But
          that's okay; we'll sell you another! Consider this your invitation to
          give in to your temptations and wig out! That's what we're here for!
        </p>
        <p>
          At our last shop, deliveries were perennially late and now we're in
          debt to the tune of several thousand dollars, so we're hoping the
          following weekly specials will entice you to stop by:
        </p>
        <ul>
          <li>Time to Put the Locks Back: Our daylight savings time special</li>
          <li>
            Remember the Mane: For all the nostalgic history buffs out there
          </li>
        </ul>
        <p>
          If you need a postiche but you want it real cheap, give us a call now
          at 107-555-4468.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio17} />
        <p>
          If you're like me, the horror of discovering your cherished documents
          have been misplaced, damaged, or stolen is unimaginable. You need a
          secure place to keep your most valuable possessions out of harm's way.
          Give us a call to discuss our wide selection of vaults exclusively
          designed for your home, including our weekly specials on the following
          models:
        </p>
        <ul>
          <li>It's All My Vault</li>
          <li>I Must Stash You</li>
          <li>Antisocial Security</li>
          <li>Centralized Lock Chain</li>
          <li>The Long and Winding Code</li>
        </ul>
        <p>
          You never know when disaster will strike. I lost my last business to
          an out-of-control burn rate and something like that could happen to
          anyone. Call 151-555-0638 now to get started with protecting what
          matters most.
        </p>
        <hr className="my-4" />
        <AudioLink src={audio18} />
        <p>
          Caught in a baaa'd romance? Then my new store is for you! If you need
          to apologize to your significant other after a disagreement, nothing
          says "my heart still bleats for you" better than our quality products.
          Don't be sheepish; come by today and ask about our weekly special:
        </p>
        <ul>
          <li>
            The ram lamb thank you tam: A polite Scottish hat to express your
            sheer gratitude
          </li>
        </ul>
        <p>
          You can find us in the same place as our last store. The old staff all
          peached out, but we've got all new salespeople ready to help you
          today. Call 401-555-5724 for questions and fleece come see us soon!
        </p>
        <hr className="my-4" />
        <AudioLink src={audio19} />
        <p>
          If you've got an upcoming formal event, you need to be sure that your
          dress is a guaranteed slam dunk. Whether it's a high school prom,
          Jewish wedding, or the Met gala, we've got what you need to knock it
          out of the park and have everyone and their mother talking about the
          true MVP of the night: your outfit. Check out our weekly specials:
        </p>
        <ul>
          <li>The Tuxspeedo: Look your best in case of a swim meet-cute</li>
          <li>
            Game Set and Matching Tie: A grand slam of an outfit without faults
          </li>
          <li>Full Court Dress</li>
        </ul>
        <p>
          Located in the same building as my last business, where I made some
          bed decisions that didn't pay off. Call 120-555-2750 and we'll help
          you bring your fashion A-game.
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
