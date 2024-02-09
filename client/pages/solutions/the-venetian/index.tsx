import { FC } from 'react';

import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

const SLUG = 'the-venetian';
const ANSWER = `POULT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We're presented with three audio clips of sorceress Medea auditioning for
      the role of Peller in the "Ken &amp; Peller" magic show at the Venetian:
      the first clip is her initial audition, the second her callback, and the
      third her final audition. However, because Peller is a silent role, Medea
      is forced to cast spells by using gestures only, which cannot be seen in
      the clips. Each clip features a similar structure: Medea casts five
      five-gesture spells, the results of which are described. Ken then
      "critiques" what she "should have done," and then directs her to alter
      some of the gestures she used into new gestures.
    </p>
    <p>
      Each "spell" is a series of five gestures, and it quickly becomes clear
      that these are five-letter words that Medea is spell-ing (get it?) using
      ASL letters. From Ken's commentary&mdash;in which he discusses gestures that
      should have been in different places in the spell, and those that can stay
      where they are, we intuit that each batch of spells is a game (or "frame")
      of Wordle. Our goal is to figure out what feeder words are used using the
      descriptions of the gestures and the spells' effects, and then use the
      commentary to figure out the solution word for the game.{' '}
    </p>
    <h3>Recording 1</h3>
    <p>
      We start with the initial audition. Medea casts five spells, with the
      following commentary:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Spell Number</th>
          <th>Effect</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            "it's not a violin at all: it's one of those… Beatles… thingamabobs"
          </td>
          <td>
            <Monospace>SITAR</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Galloping hooves + "How'd that thing get in here? Is there some sort
            of exotic animal convention, or–?"
          </td>
          <td>
            <Monospace>ZEBRA</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            "I love European cuisine, but I always wish the portions were
            bigger."
          </td>
          <td>
            <Monospace>TAPAS</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            "Whoa! A car?! … Hey, and it's one of those all-electric deals,
            too!"
          </td>
          <td>
            <Monospace>TESLA</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            "What is this, some sort of nut? Oh, no, it's one of those Asian
            fruit things with the pits.", + Medea's "Well, that last spell… it
            isn't a spell…ing I'm used to."
          </td>
          <td>
            <Monospace>LICHI</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>Based on Ken's commentary, we can assemble the following Wordle grid:</p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>Z</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>B</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>P</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>H</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>B</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>E</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>A</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>S</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>T</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      (Logic: We know E is the second letter; S isn't in position 1, 2, 3, or 5,
      so it must be the fourth letter; T can't be 1 or 3, while 2 and 4 are
      taken, so it must be 5; B can't be in 3 and 2, 4, and 5 are taken, so it
      must be 1, leaving A in slot 3.)
    </p>
    <p>
      If we're observant enough, we'll note that Ken says "Wow! You're an
      animal!" to Medea after she casts this frame of spells, which is an
      additional clue for <Monospace>BEAST</Monospace>.{' '}
    </p>
    <p>
      Ken then gives instructions to Medea on how to create a new Wordle frame
      from her old one using different gestures. Seeding it with just the
      gestures Ken takes from the first frame yields:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The descriptions Ken gives for the other gestures are the descriptions of
      ASL letters:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1/4</td>
          <td>
            "give me like you're twirling the end of an evil mustache. Yeah,
            just with the finger and thumb"
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/5</td>
          <td>
            From ASL R: "uncross the fingers, it looks like you're lying. Okay,
            and turn the whole thing sideways. No, other side in front."
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/1 &amp; 2/2</td>
          <td>"How about the number '30' for the first two gestures"</td>
          <td>
            <Monospace>W, O</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/4</td>
          <td>"then maybe like a '6'"</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/5</td>
          <td>"Make a fist"</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/3</td>
          <td>"Maybe do that fingers crossed thing"</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/4 &amp; 3/5</td>
          <td>
            "look at your nails like you think there's dirt underneath them? No,
            show them to the audience instead."
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/2</td>
          <td>
            "reminded me of that Smash Mouth song"
            <br />
            ["She was looking kind of
            dumb // With her finger and her thumb In the shape of an 'L' on her
            forehead"&mdash;"All Star"]
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/3</td>
          <td>
            "act like you're… holding a piece of PVC pipe up to check it for
            cracks or something"
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/1</td>
          <td>"That fingers-crossed thing"</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/3</td>
          <td>"How would you indicate something was small?"</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>This yields the instruction:</p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
    <p>Applying this instruction to the initial grid yields:</p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>Z</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
    <p>Which are referenced by the descriptions:</p>
    <Table>
      <thead>
        <tr>
          <th>Spell Number</th>
          <th>Effect</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>"Couple of bones… wait, those aren't human bones, are they?"</td>
          <td>
            <Monospace>TARSI</Monospace> (leg bones)
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            "You fixed the broken chair with… is that, like, brass solder or
            something?"
          </td>
          <td>
            <Monospace>BRAZE</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>"now THIS is some filling European food!"</td>
          <td>
            <Monospace>PASTA</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>"a little… chalkboard"</td>
          <td>
            <Monospace>SLATE</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            "what's this? Soup? Oh, no: I see what it is! I love Tex-Mex!"
          </td>
          <td>
            <Monospace>CHILI</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Ken then "scores" this new grid (referencing the answers in this grid
      specifically, so we know he's not referring to the "instructions" grid):
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>B</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>Z</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>P</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-green-400">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>H</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>C</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>R</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>I</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>S</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>P</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      (Logic: Everything is placed but the last letter; by default it must be
      the P)
    </p>
    <p>
      We also may have observed that Ken uses the phrase, "a little bit crunchy
      to the bite," cluing <Monospace>CRISP</Monospace>.
    </p>
    <h3>Recording 2</h3>
    <p>
      We can now move on to Recording #2, which follows an identical structure
      to Recording #1 in that Medea performs five spells, receives scoring and
      alterations, then performs the new set of five spells. However, in this
      round, the initial descriptions are more vague, so we'll have to rely more
      on the descriptions of the gestural changes to extract our two Wordle
      answers.
    </p>
    <p>The first set of spells is as follows:</p>
    <Table>
      <thead>
        <tr>
          <th>Spell Number</th>
          <th>Effect</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>"something to put your sheet music on"</td>
          <td>
            <Monospace>STAND</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            "We're in the middle of a desert: where would I even use that?"
          </td>
          <td>
            <Monospace>CANOE</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>"What is that, a star of some sort?"</td>
          <td>
            <Monospace>ALGOL</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>"some kind of insect? … It's not in my hair, is it?"</td>
          <td>
            <Monospace>LOUSE</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>"And now the paper has letters written all over it!"</td>
          <td>
            <Monospace>ESSES</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>From Ken's scoring, we get the following color grid:</p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We can determine many of the letters in the first two words from Ken's
      description of how they should be changed:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1/1</td>
          <td>
            "put your thumb under your index finger instead of over it," thus
            the gesture features the thumb on top of the index finger. There's
            only one ASL sign in which the thumb is over the index finger.
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/3</td>
          <td>
            "try it again, just stick up your pinky." The only pairing this can
            apply to is A→I
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/1</td>
          <td>
            "just close that gap above the tip of your thumb." The only letters
            featuring such a gap are C, G, L, and Q; closing the gap in the
            latter three would not form a letter.
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/3</td>
          <td>
            "take the two fingers that were on top of your thumb and raise them
            up" The only letter this could describe is N.
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>This gives us the following grid:</p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace> </Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      From these letters, and the descriptions, we can intuit that the first
      answer is <Monospace>STAND</Monospace> and the second is{' '}
      <Monospace>CANOE</Monospace>. The combination of "insect" and "hair"
      should be enough to imply "<Monospace>LOUSE</Monospace>" for the fourth
      answer. We note that Ken mentions only two letters are used in the fifth
      word, and given that plus the description, we can intuit that the fifth
      word must be <Monospace>ESSES</Monospace>. This gives us the following
      grid:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>U</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>U</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>E</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>?</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Note that this isn't enough on its own to definitively establish the final
      word, but it can help us determine the makeup of the second grid (we could
      also have begun with a back-and-forth between the first and second grid
      earlier). So let's look at the second grid and see what we can fill in
      based on this incomplete first grid:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1/5</td>
          <td>
            (Starting from S) "put your thumb under your index finger instead of
            over it. Nope! Not under the middle finger, just the index."
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/2</td>
          <td>(Starting from A) "just stick up your pinky."</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/3</td>
          <td>
            (Starting from D) "try also raising the finger next to the one
            that's already up. No, spread'em apart. And squeeze the other digits
            closer to the palm."
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/1</td>
          <td>
            "your hand is like a little man walking around on the table? Yeah!
            Do that, but frozen! Freeze it right after he's just put his left
            foot down."
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/3</td>
          <td>"Take the second gesture you did and do it third"</td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/5</td>
          <td>"Keep the fifth gesture where it was."</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/1</td>
          <td>
            (starting from C) "close that gap above the tip of your thumb. Hmm…
            good but that's not quite done. Raise one of your fingers. Not that
            finger! That's obscene! Funny, though: raise the one next to it,
            too. And the one next to that."
          </td>
          <td>
            <Monospace>F</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/2</td>
          <td>
            (starting from A) "take the two fingers that were on top of your
            thumb and raise them up. Now put the longer one behind the shorter
            one."
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/4</td>
          <td>
            "the gesture you're doing third in this spell (A) and then the
            gesture you did second in your version of the first spell (T), and
            then the gesture you did third in this spell the first time through
            (N) are all a big sequence. What would come next in that sequence?"
            The sequence is progressively moving your thumb between successive
            fingers.
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Thus the first two words are <Monospace>PIV?T</Monospace> and{' '}
      <Monospace>FRAME</Monospace>. For the third (and part of the fourth) word,
      Ken says he's getting "Mystical" (a reference to palmistry). By looking up
      palmistry, we can identify the ASL letters, while the rest of the
      descriptions illustrate the rest of the fourth word:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3/1</td>
          <td>
            "fold all your fingers down and then slide your thumb between your
            Finger of Jupiter (index) and Finger of Saturn (middle)!"
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/2</td>
          <td>
            "extend those two fingers and rotate your hand a quarter-turn
            towards Outer Mars (pinky side of palm)!"
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/3</td>
          <td>
            "Third gesture: slide your Finger of Jupiter (index) forward and
            downward (towards the floor) as far as you can, and rotate your hand
            a quarter-turn away from Luna (pinky side of heel)!"
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/4</td>
          <td>
            "face your Plain of Mars (palm) to the audience, touch your
            fingertips to the Girdle of Venus (bases of the fingers), and touch
            your logic knuckle (thumb knuckle) to Inner Mars (thumb side of
            palm)…"
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/5</td>
          <td>"repeat the fourth one"</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/5</td>
          <td>"Move the first gesture [of the new third spell] to fifth"</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/4</td>
          <td>"the second gesture [of the new third spell] to fourth,"</td>
          <td>
            <Monospace>H</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/1</td>
          <td>"and the third gesture [of the new third spell] to first."</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/2</td>
          <td>"Raise nothing but your Mercury finger (pinky)!"</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/3</td>
          <td>
            "Hey, remember that comedy group The Kids in the Hall? "I am
            only… crushing your head!" Do that!"
            <a href="https://www.youtube.com/watch?v=8t4pmlHRokg">
              https://www.youtube.com/watch?v=8t4pmlHRokg
            </a>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Lastly, we can also get the letters for the final (fifth) spell from Ken's
      comments:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5/5</td>
          <td>
            (Starting from ESSES): " take the [gesture] you used more times and
            do it fifth"
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/1 &amp; 5/3</td>
          <td>
            I still like those gestures we kept from the third spell, so put the
            ones that were first and fifth in the fourth spell back where they
            came from originally for this spell.
          </td>
          <td>
            <Monospace>T, R</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/2</td>
          <td>"the Pope giving a blessing"</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/4</td>
          <td>
            "remember that sequence I mentioned earlier? Do the third gesture in
            that sequence."
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This gives us everything but the blue square in the grid below; from
      context, process of elimination, and - if we've solved in a different
      order - Ken's line "there was a gesture you used fourth in two of the
      first batch of spells you did today. Put that fourth here." we can tell
      that square is an O.
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td>
            <Monospace>P</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
          <td className="bg-cyan-400">
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>F</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>H</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      This gives us the instruction, "
      <Monospace>PIVOT FRAME THREE RIGHT TURNS</Monospace>," or 270 degrees
      clockwise (90 degrees counterclockwise). That wouldn't yield anything from
      the letters in this frame, so it must refer to the previous frame. Sure
      enough, we can see that turning the first 5x5 grid 90 degrees
      counterclockwise gives us the setup for a new batch of words that
      correspond to the second set of spell descriptions:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace> </Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>T</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>&nbsp;</td>
          <td>
            <Monospace>L</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      From here, it's pretty easy to fill in the missing letter in each based on
      the descriptions of the spells' effects, even out of order:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row Number</th>
          <th>Effect</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3</td>
          <td>
            "What the heck, is that a cow?! … How now, Brown&mdash;er, maybe it's
            more black than brown, I guess&mdash;cow?"
          </td>
          <td>
            <Monospace>ANGUS</Monospace> (Angus cows are black)
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>"hey, is that supposed to be a comment on my weight?"</td>
          <td>
            <Monospace>SCALE</Monospace>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            "someone crossed out all the letters on that page from before with a
            red pen"
          </td>
          <td>
            <Monospace>DELES</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>"A rope, or no, it's a… whoa! That's morbid."</td>
          <td>
            <Monospace>NOOSE</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            "A bronze… statue of some sort? Or, wait: maybe it's a fountain:
            there's this spout on the… what, leg?"
          </td>
          <td>
            <Monospace>TALOS</Monospace> (bronze giant from the Argonauts myth)
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      So, skipping back to the prior frame, with the now-completed grid, we can
      see that the answer to this frame is <Monospace>GRUEL</Monospace>:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>G</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>U</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>G</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>R</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>U</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>E</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>L</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      (Logic: Green squares give us <Monospace>??UEL</Monospace> and the only
      English word with this pattern that contains a G is{' '}
      <Monospace>GRUEL</Monospace>. Ken's comment "pretty thin soup" provides
      confirmation)
    </p>
    <p>
      Now we can also solve the fourth grid of spells based on Ken's feedback:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>D</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>G</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>U</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-green-400">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>S</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>C</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>O</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>N</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>E</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      (Logic: <Monospace>SCO?E</Monospace> are filled in, with the N as the only
      remaining unassigned letter. Ken's comment "a tasty treat" provides
      confirmation)
    </p>
    <p>
      We now have our two answers, <Monospace>GRUEL</Monospace> and{' '}
      <Monospace>SCONE</Monospace>, and can move on to Recording #3.
    </p>
    <h3>Recording 3</h3>
    <p>
      Things are a bit different this round with the addition of the character
      of Peller, but we can still start off, as usual, by attempting to
      ascertain the spell words. This round, however, they're a bit more vague:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Spell Number</th>
          <th>Effect</th>
          <th>Potential Answers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>"Whoa! A gemstone: nice!"</td>
          <td>AMBER, AGATE, BERYL, PEARL, TOPAZ…</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hissing + "Yikes! Is that thing venomous?"</td>
          <td>ADDER, COBRA, MAMBA, SNAKE, VIPER…</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            "Whoa! That thing just smashed it flat! Like it's some kind of
            cartoon!"
          </td>
          <td>ANVIL, PIANO</td>
        </tr>
        <tr>
          <td>4</td>
          <td>"Kind of late for breakfast. I'll eat it anyway, though"</td>
          <td>BACON, BAGEL, DONUT, TOAST…</td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            "A gold-plated trophy? … 'Best Vegas Magician 2024 Goes to: Ken'?"
          </td>
          <td>AWARD, MEDAL, PRIZE…</td>
        </tr>
      </tbody>
    </Table>
    <p>However, we can still get the accurate grid coloration:</p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-green-400">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Likewise, Ken's descriptions of what goes where are more vague in this
      round:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1/?</td>
          <td>"the 'fingers do the walking' gesture"</td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/?</td>
          <td>"I got your nose"</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/?</td>
          <td>
            "I'm about to chuck a thickish-but-not-ridiculously-thick spear at
            you" (If it were "ridiculously thick," it would be a C)
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/?</td>
          <td>"that finger-wag of judgment, or whatever that was"</td>
          <td>
            <Monospace>Z</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/?</td>
          <td>"That 'fingers do the walking thing' again?"</td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/?</td>
          <td>"Dr. Evil?"</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/?</td>
          <td>"Fingers crossed"</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/?</td>
          <td>"The 'peace out' thing"</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/?</td>
          <td>"you threw in the peace sign again!"</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      All the rest of Ken's notes reference relative positions to the next set
      of spells, but this is enough to start with. For Spell 1, we need a
      gemstone that contains the letters P, T, O, and Z, with the missing letter
      in fourth position: <Monospace>TOPAZ</Monospace>. For the second, a
      venomous snake containing P, I, R, and V: <Monospace>VIPER</Monospace>.
      And the third answer is something that smashes things flat in cartoons
      that contains a V: <Monospace>ANVIL</Monospace>. So here's our grid thus
      far:
    </p>
    <p> </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>P</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>Z</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>V</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>P</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>V</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
          <td className="bg-yellow-200">&nbsp;</td>
          <td className="bg-neutral-300">&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <b>
              <Monospace>A</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>V</Monospace>
            </b>
          </td>
          <td>&nbsp;</td>
          <td>
            <b>
              <Monospace>R</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      We're not quite there yet. But in this round, instead of doing the second
      batch of spells all in a row, she casts them one at a time. Ken has also
      let us know in his notes that some letters in some answers are the same.
    </p>
    <Table>
      <thead>
        <tr>
          <th>Spell Number</th>
          <th>Effect</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>"Some kind of cake?!" + 1st and 4th letters are the same.</td>
          <td>
            <Monospace>TORTE</Monospace>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Ken's mother is conjured + 1st, 3rd, &amp; 4th letters are the same
            + 2nd &amp; 5th letters are the same.
          </td>
          <td>
            <Monospace>MAMMA</Monospace>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Belching, farting, and "feel really… bloated all of a sudden" + 3rd
            &amp; 4th letters are the same
          </td>
          <td>
            <Monospace>GASSY</Monospace>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>"That noise" + sounds of alpenhorns</td>
          <td>
            <Monospace>HORNS</Monospace> or <Monospace>MUSIC</Monospace>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>"A wooden bathtub?"</td>
          <td>
            <Monospace>BASIN</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>We can also get some of these letters from Ken's descriptions:</p>
    <Table>
      <thead>
        <tr>
          <th>Row/ Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1/3</td>
          <td>
            From P: "turn your hand upside down…good…and instead of pointing
            those two fingers in those directions, take the one that's pointing
            forward and make it point up, and the one that's pointing up and
            make it point past the other one."
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/1</td>
          <td>"I got your nose"</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/2</td>
          <td>
            "I'm about to chuck a thickish-but-not-ridiculously-thick spear at
            you" (If it were "ridiculously thick," it would be a C)
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>1/5</td>
          <td>
            "try to touch all four of your fingertips to their first finger
            joints. Now simultaneously try to touch your thumbtip to your heart
            line"
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/1, 2/3, &amp; 2/4</td>
          <td>
            From V: "if you stuck the next finger up as well? No, try putting
            your thumb on the top of the down finger. Not quite. Try putting the
            three up fingers down."
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>2/2 &amp; 2/5</td>
          <td>
            From E: "get your thumb out of there. Slide your fingertips down so
            that instead of those finger bones being flat on top, it's the next
            set closer to the palm that's flat on top."
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/2</td>
          <td>
            "The first gesture you did, ... move it into the second slot"
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/3 &amp; 3/4</td>
          <td>
            From N: "try pulling your thumb out from the middle and put it in
            front in the same spot"
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/5</td>
          <td>From I: "but stick your thumb out"</td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>3/1</td>
          <td>"The Baby Shark gesture!"</td>
          <td>
            <Monospace>G</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/3</td>
          <td>"use the fourth gesture third"</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/1</td>
          <td>
            "Take the other gesture (i.e., besides the 3/2 gesture: A) from the
            new second spell and use it first"
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/2</td>
          <td>
            "how would you indicate you wanted a pair of scissors? … Not an OPEN
            pair of scissors! That's a valid gesture that we haven't used yet
            [indicating the "scissors" must be upright as in the ASL letter K]
            CLOSE the pair of scissors, please"
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/4</td>
          <td>
            "pretend you're holding a beer stein. Yeah, except you're a
            hoity-toity socialite doing it. [i.e., lift your pinky] Good, now
            take a swig: [tilt hand towards mouth] hold it!"
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/5</td>
          <td>"be a lobster!"</td>
          <td>
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/1</td>
          <td>
            "act like a crossing guard telling me to stop. Yeah, but now try to
            use your thumb to check if your wedding ring fell off."
          </td>
          <td>
            <Monospace>B</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/5</td>
          <td>
            "what if your hand was a spray of whipped cream on top of a banana
            split sundae? [curled fingers] What would that look like? No, it
            needs a cherry on top [Thumb sticking out of center]"
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Two of 5/2, 5/3, &amp; 5/4</td>
          <td>
            "just use the ones you're now using in those slots in the previous
            spell"
          </td>
          <td>2 of U, S, or I</td>
        </tr>
      </tbody>
    </Table>
    <p>
      Ken mentions that her spells got progressively better, with no green
      letters in the first spell and 4 in the fifth spell, and no yellow letters
      at all. With this information, we can fill out the sixth grid:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>M</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>M</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>M</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>G</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>M</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>U</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>C</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-green-400">
            <Monospace>B</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>B</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>A</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>S</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>I</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>C</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      (Logic: no letters in <Monospace>TORTE</Monospace> are correct, but three
      letters in <Monospace>HORNS/MUSIC</Monospace> are correct, which would
      have to be <Monospace>H??NS</Monospace> in <Monospace>HORNS</Monospace>,
      but none of those letters are in those positions in BASIN, so the fourth
      word must be <Monospace>MUSIC</Monospace>. For two different 5-letter
      words to contain 3 and 4 correct letters, respectively, at least two of
      their letters must be the same, and both correct. S and I are the only
      letters in the same place in <Monospace>BASIN</Monospace> and{' '}
      <Monospace>MUSIC</Monospace>, so they are correct. This means the first S
      in <Monospace>GASSY</Monospace> is also green, but the second S is gray.
      In order for a second letter in <Monospace>GASSY</Monospace> to be
      correct, it must also appear in the same place in either{' '}
      <Monospace>BASIN</Monospace> or <Monospace>MUSIC</Monospace>. The only
      such letter is the A in <Monospace>BASIN</Monospace>, which means A is the
      second letter, and thus also the only correct letter in{' '}
      <Monospace>MAMMA</Monospace>. If A is the only correct letter in{' '}
      <Monospace>MAMMA</Monospace>, then the M in <Monospace>MUSIC</Monospace>{' '}
      must be incorrect, meaning the third correct letter in{' '}
      <Monospace>MUSIC</Monospace> is the C. This means the fourth correct
      letter in BASIN must be the B, and thus the answer is{' '}
      <Monospace>BASIC</Monospace>. Ken's comment "even a modicum of… whatever!"
      clues this word).
    </p>
    <p>
      With this grid solved, we can now backtrack to complete our fifth grid:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Row/​Column</th>
          <th>Description</th>
          <th>ASL Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4/1 &amp; 4/2</td>
          <td>
            "sheesh, those first two gestures are basically what we've got going
            on in that first spell now."
          </td>
          <td>
            <Monospace>T, O</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/3</td>
          <td>
            "that third gesture's now in the second spell" + "Take the other
            gesture from the new second spell and use it first" [i.e., M is the
            "other gesture" used in Frame 6, Word 2: this must be the remaining
            Frame 6, Word 2 gesture]
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>4/4</td>
          <td>"use the fourth gesture third."</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/1 &amp; 5/3</td>
          <td>
            "take the gesture you used twice and put it in the slot equidistant
            between the slots you used it in before" [It ends up in Slot 2, so
            these must be 1 and 3]
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/2, 5/3, or 5/4</td>
          <td>"Three-fingers-up"</td>
          <td>
            <Monospace>F</Monospace> or <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>5/2, 5/3, or 5/4</td>
          <td>
            "Two-fingers-up" [we know from Ken's earlier comment that K is
            unused]
          </td>
          <td>R, U, or V</td>
        </tr>
        <tr>
          <td>5/2, 5/3, or 5/4</td>
          <td>"One-finger-up"</td>
          <td>D, I, L, or Y</td>
        </tr>
      </tbody>
    </Table>
    <p>
      So, our fourth spell is a breakfast food spelled{' '}
      <Monospace>TOAS?</Monospace> (<Monospace>TOAST</Monospace>), and our fifth
      is <Monospace>A?A??</Monospace>, where the other three letters are F/W,
      R/U/V, and D/I/L/Y, meaning a trophy (<Monospace>AWARD</Monospace>). This
      gives us:
    </p>
    <p> </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>P</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>Z</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>V</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>P</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>V</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-yellow-200">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>W</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>S</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>A</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>V</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>O</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>R</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      (Logic: We had <Monospace>?AV?R</Monospace>; the S cannot be fourth,
      therefore it's first; leaving the O in fourth. Ken's comment, "I can enjoy
      the good feeling in the moment" is confirmation)
    </p>
    <h3>Extraction</h3>
    <p>So now we have our six words:</p>
    <ul>
      <li>
        <Monospace>BEAST</Monospace>
      </li>
      <li>
        <Monospace>CRISP</Monospace>
      </li>
      <li>
        <Monospace>GRUEL</Monospace>
      </li>
      <li>
        <Monospace>SCONE</Monospace>
      </li>
      <li>
        <Monospace>SAVOR</Monospace>
      </li>
      <li>
        <Monospace>BASIC</Monospace>
      </li>
    </ul>
    <p>
      But what do we do with them? Fit them into another grid? Well, there's one
      bit of information we haven't used yet, and that's Peller's statement:
      "Like that last spell: you did it in just five gestures, but I think I can
      suitably replicate its effects in 25. Observe: web, pinky, ring, heel pad,
      index, index, thumb pad and middle base, index, along heel pad, web to
      wrist, crossed pinkies, index, thumb pad and middle base, index, palm and
      palm, middle, palm and palm, heel pad, along heel pad, ring, interlaced,
      ring, along heel pad, index tip and base, crossed pinkies."
    </p>
    <p>
      These "gestures" he references don't seem to describe ASL gestures, but
      rather parts of the hand. The clue is in Peller's voice: he's described as
      having (and will have in the audio version) "a British accent." So,
      naturally, he uses BSL instead of ASL. BSL primarily features the index
      finger of one hand touching various parts of the other hand, so his
      sequence lists the parts being touched: (
      <a href="https://accessbsl.com/bsl-fingerspelling-tips/">
        here's a chart
      </a>
      ) but the best way to see these is in a video like this one:{' '}
      <a href="https://www.youtube.com/watch?v=mkTeqA4kwUQ">
        https://www.youtube.com/watch?v=mkTeqA4kwUQ
      </a>
      .
    </p>
    <Table>
      <thead>
        <tr>
          <th>Gesture</th>
          <th>BSL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Index and thumb loop</td>
          <td>
            <Monospace>Q</Monospace>
          </td>
        </tr>
        <tr>
          <td>Pinky</td>
          <td>
            <Monospace>U</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ring</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>heel pad</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>Index</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>Index</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>thumb pad and middle base</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>Index</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>along heel pad</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>web to wrist</td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>crossed pinkies</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
        <tr>
          <td>Index</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>thumb pad and middle base</td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>Index</td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>palm and palm</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>Middle</td>
          <td>
            <Monospace>I</Monospace>
          </td>
        </tr>
        <tr>
          <td>palm and palm</td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
        <tr>
          <td>heel pad</td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>along heel pad</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ring</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>Interlaced</td>
          <td>
            <Monospace>W</Monospace>
          </td>
        </tr>
        <tr>
          <td>Ring</td>
          <td>
            <Monospace>O</Monospace>
          </td>
        </tr>
        <tr>
          <td>along heel pad</td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>index tip and base</td>
          <td>
            <Monospace>D</Monospace>
          </td>
        </tr>
        <tr>
          <td>crossed pinkies</td>
          <td>
            <Monospace>S</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Or, "<Monospace>QUOTE EVERY SEVEN INTRO WORDS</Monospace>." How would this
      approximate Medea's final spell? We look at Ken's intro to find out.
      Taking every 7th word, skipping the stage directions:
    </p>
    <p>
      Howdy, Folks! Welcome to the very <b>first</b> show of this new era. In{' '}
      <b>five</b> minutes, we're gonna start providing the <b>answers</b> to the
      universe's mysteries, plant the <b>seed</b> of a great idea for the{' '}
      <b>Final</b> Illusion, and maybe even try to <b>frame</b> your ex for
      murder, Miss.<i> (chuckles wordlessly)</i> Not <b>to</b> brag, but I'm
      fantastic. Before we <b>get</b> started, anybody need a pair of{' '}
      <b>shades</b>? They could come in very handy <b>for</b> protection from my
      incredible brilliance! Fan <b>letters</b> can be written on money: just{' '}
      <b>turn</b> them in at the bank on <b>Sixth</b> Avenue and say they're for
      Ken.<b> In</b> case you're wondering who <u>this</u> is, <b>to</b> you I
      present my assistant, Malia! (<i>sotto voce)</i> <b>Turn</b> to face the
      audience, please. Whoa! <b>Air</b> out those pits, would you?! They{' '}
      <b>reek</b>! I'm kidding! I'm kidding! You're an <b>ode</b> to beauty and
      grace. Not sure <b>where</b> she came from, to be honest. <b>One</b> day,
      she wanders in asking, "Where{' '}
      <b>
        <u>is</u>
      </b>{' '}
      the bathroom?" and just stuck around. <b>Gold</b> coins couldn't convince
      her to leave, <b>and</b> believe me, I've offered! Finally, after{' '}
      <b>two</b> months, I said, "Look, Lady, what <b>is</b> it you want?" She
      says, "I'm <b>green</b> but I'm talented. I want to<b> apply</b> to be
      your assistant." I said, "<b>To</b> be my assistant?" She deals out{' '}
      <b>rows</b> of cards and says, "Just pick <b>one</b>." I do. She guesses
      it! So, <b>per</b> our wager, she speaks nary a <b>line</b>, but gets to
      be onstage.{' '}
    </p>
    <p>
      Or, "First five answers seed final frame. To get shades for letters, turn
      sixth into ternary code ("turn air reek ode"), where one is gold and two
      is green. Apply to rows, one per line." Our final frame, seeded by the
      first five words, is:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td>
            <Monospace>B</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>G</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
          <td>
            <Monospace>U</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </Table>
    <p>Converting the word "BASIC" to ternary code yields:</p>
    <ul>
      <li>
        <Monospace>00002</Monospace>
      </li>
      <li>
        <Monospace>00001</Monospace>
      </li>
      <li>
        <Monospace>00201</Monospace>
      </li>
      <li>
        <Monospace>00100</Monospace>
      </li>
      <li>
        <Monospace>00010</Monospace>
      </li>
    </ul>
    <p>
      As instructed, we color the twos green and the ones yellow to get the
      following grid:
    </p>
    <Table className="wordle">
      <tbody>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>B</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>T</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>I</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>P</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>G</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>R</Monospace>
          </td>
          <td className="bg-green-400">
            <Monospace>U</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>C</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>N</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>E</Monospace>
          </td>
        </tr>
        <tr>
          <td className="bg-neutral-300">
            <Monospace>S</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>A</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>V</Monospace>
          </td>
          <td className="bg-yellow-200">
            <Monospace>O</Monospace>
          </td>
          <td className="bg-neutral-300">
            <Monospace>R</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>P</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>O</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>U</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>L</Monospace>
            </b>
          </td>
          <td>
            <b>
              <Monospace>T</Monospace>
            </b>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      So, we're looking for a five-letter word with pattern{' '}
      <Monospace>??U?T</Monospace>, where the other three letters are L, O, and
      P, and it's something that could end up, per Peller, "on the casino
      buffet." The only English word that fits this pattern is{' '}
      <Monospace>POULT</Monospace> (Note: <Monospace>PLUOT</Monospace> is ruled
      out by the yellow O in <Monospace>SAVOR</Monospace>), defined as "a young
      domestic chicken, turkey, pheasant, or other fowl being raised for food,"
      which satisfies the definition, and thus our answer is{' '}
      <Answerize>POULT</Answerize>
      <b>.</b>
    </p>
    <style jsx global>{`
      .wordle {
        border-collapse: separate;
        border-spacing: 3px;
      }
      .wordle td {
        width: 32px;
        height: 32px;
        font-size: 20px;
        padding: 0px !important;
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
