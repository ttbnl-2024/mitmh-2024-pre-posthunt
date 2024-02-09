import React, { FC, useRef } from 'react';

import AudioLink from 'components/audio_link';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';

import audio1 from 'assets/puzzles/the-venetian/1.mp3';
import audio2 from 'assets/puzzles/the-venetian/2.mp3';
import audio3 from 'assets/puzzles/the-venetian/3.mp3';

const SLUG = 'the-venetian';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          Note: KEN is deliberately portrayed as the epitome of toxic
          masculinity. Do not try this at home. Or at work. Or... anywhere.
          <br />
          In transcripts, stage directions and sound effects are represented as{' '}
          <i>(parenthetical, italicized text)</i>.
        </InfoIcon>

        <p>
          <b>Recording #1</b>
        </p>
        <AudioLink src={audio1} />
        <details className="my-2">
          <summary>Recording #1 Transcript</summary>

          <p className="text-center">KEN</p>
          <p>
            Okay, time for our last auditionee of the day. State your name,
            please.
          </p>
          <p className="text-center">MEDEA</p>
          <p>Medea.</p>
          <p className="text-center">KEN</p>
          <p>
            What, no last name? <i>(MEDEA starts to respond)</i> No, I get it:
            you're like Cher... or Beyoncé. Or me, right? After all, everybody
            just knows me as "Ken," right? <i>(laughs at his own joke)</i> Okay,
            here's the deal: we're looking for a replacement for my sidekick -
            excuse me - "co-star" Peller.
          </p>
          <p className="text-center">MEDEA</p>
          <p>Peller's leaving? Why?</p>
          <p className="text-center">KEN</p>
          <p>
            Let's just say we're having professional differences, and leave it
            at that. And <u>unfortunately</u>, the contract we signed with the
            Venetian requires a two-person act. So, go ahead, Kid: show me what
            ya got.
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Okay... I'll make some things appear. <i>(Incants)</i> Azerath
            Metrion Zyn–
          </p>
          <p className="text-center">KEN</p>
          <p>
            <i>(interrupting)</i> Whoa, whoa, whoa! What's all that mumbo-jumbo?
          </p>
          <p className="text-center">MEDEA</p>
          <p>I'm casting my spell?</p>
          <p className="text-center">KEN</p>
          <p>
            <i>(In a high-pitched voice, mimicking her) </i>"I'm casting my
            spell" Don't you even know the act? Peller's a <u>silent</u> role!
            He doesn't{' '}
            <i>
              <u>say</u>
            </i>{' '}
            anything!
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Well, sure, but – I mean – <u>I</u> can talk, so–
          </p>
          <p className="text-center">KEN</p>
          <p>
            Yeah, but nobody's gonna come to see <u>you</u> talk, Sister. We're
            not changin' the act, we're just recasting it.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            But how am I supposed to cast my spells if I can't say them out
            loud?{' '}
          </p>
          <p className="text-center">KEN</p>
          <p>
            Uh... through <u>gesture</u>? You can... spell... with gestures,
            right?
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Well, sure, I <u>can</u>
            <i>,</i> but<i>...</i>
          </p>
          <p className="text-center">KEN</p>
          <p>
            You know, it's getting late, and I have an all-you-can-eat buffet to
            get to? So, if you could maybe get a move on sometime this year...?
          </p>
          <p className="text-center">MEDEA</p>
          <p>Okay, sure: uh... here goes. For my first spell–</p>
          <p className="text-center">KEN</p>
          <p>
            <i>(interrupting)</i> Look, when I said "silent," I meant "
            <u>completely silent</u>
            ," okay, Toots? Spare me the banter and just cast the spells,
            already!
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Okay.{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and the
              twanging of a stringed instrument)
            </i>
          </p>
          <p className="text-center">KEN</p>
          <p>
            Whoa! Not bad! But what the hell kind of a violin is– oh, it's not a
            violin at all: it's one of those... Beatles... thingamabobs. Okay,
            Kid, ya got my attention. Next spell, please?
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a
              galloping of hooves)
            </i>
          </p>
          <p>
            What the heck? How'd that thing get in here? Is there some kind of
            exotic animal convention, or–? Oh, great, it broke a chair! Will
            somebody call security? Just try to ignore it, Sweetheart. Keep
            going with the audition.
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a sound of
              a plate hitting a table)
            </i>
          </p>
          <p>
            Oh, nice! I love food tricks! Is this actually edible?{' '}
            <i>(chews)</i> Hmm... not bad. I love European cuisine, but I always
            wish the portions were bigger. <i>(with mouth full)</i> Gimme, like,
            two more.
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a car horn
              sounds)
            </i>
          </p>
          <p>
            Whoa! A car?! How did you manage to–? Hey, and it's one of those
            all-electric deals, too! I can keep this, right? <i>(laughs)</i>{' '}
            Naw, just kidding! But seriously, if you let me keep it, I can
            almost guarantee you get a callback. Almost. Okay, Babe, gimme a big
            finale!
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a sound of
              something rolling across a table)
            </i>
          </p>
          <p>
            Wait... that's it? What is this, some sort of nut? Oh, no, it's one
            of those Asian fruit things with the pits. Uh, I think that{' '}
            <u>spell</u> was the pits, Sister. Way to end with a wamp-wamp! What
            were you thinking?
          </p>
          <p>
            What, a shrug? Is that all you– oh, for Pete's sake: you can talk
            now!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Well, that last spell... isn't a spell...ing I'm used to.</p>
          <p className="text-center">KEN</p>
          <p>
            Tried for something really big that you were iffy on? Wow, you're an
            animal! Still, I appreciate the chutzpah! Okay, Doll: here's the
            next part of the audition. I'm gonna give you some feedback on those
            gestures you were using.
          </p>
          <p className="text-center">MEDEA</p>
          <p>Feedback?</p>
          <p className="text-center">KEN</p>
          <p>
            Of course! You don't think I got to be the top act in Vegas by
            letting Peller just... wave his hands wherever he pleased, do ya?
            No, every gesture, every finger position, every move is
            painstakingly rehearsed! So some of those gestures were fine right
            where they were. Some others were okay, but you shoulda put'em
            somewhere else in the lineup. But most of them were just unusable,
            and I wouldn't've even tried to put'em in the final product,
            kapiche?
          </p>
          <p className="text-center">MEDEA</p>
          <p>O...kay. But if I change the gestures, the spells will change.</p>
          <p className="text-center">KEN</p>
          <p>
            <i>(laughing)</i> Oh, wow, you're really committed to the act,
            aren't you? Oh, yeah: "magic is real!" <i>(laughs)</i>
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            But my magic <u>is</u> re–
          </p>
          <p className="text-center">KEN</p>
          <p>
            Okay, so here's what <u>I</u> thought about what you just presented:{' '}
          </p>
          <p>
            Spell #1: First, third, and fourth gestures were fine, but they
            woulda been better elsewhere. Everything else was crap.
          </p>
          <p>
            Spell #2: Second gesture you could've kept as is, but you should've
            moved the third and fifth gestures someplace else; everything else
            you shouldn't've used at all.
          </p>
          <p>
            Spell #3: First, second, and fifth gestures you shoulda moved, and
            you shoulda ditched the other two.{' '}
          </p>
          <p>
            Spell #4: That was the car, your most successful one. I would've
            kept gesture 2 right where it was; I woulda kept gestures 1, 3, and
            5, just put'em in a different place; gesture 4's the only one I
            would've gotten rid of.{' '}
          </p>
          <p>
            But that last spell... boy, that last spell was crap: I wouldn't've
            done any of those gestures at all!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Uh... should I try doing them again?</p>
          <p className="text-center">KEN</p>
          <p>
            Again? There's no "again" in Vegas, Toots! You don't get a do-over!
            We're moving on! Look, I'm gonna take those gestures you used, and
            rework'em with you, and then you're gonna follow my instructions to
            do a completely new routine, okay?{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Rework them? But I thought you already–</p>
          <p className="text-center">KEN</p>
          <p>
            That was for <u>those</u> spells! You can't use the exact same
            gestures for two different sets of spells: the audience'll get
            bored! We're gonna change those gestures into something more
            workable for a <u>new</u> set of spells.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>This is very confusing.</p>
          <p className="text-center">KEN</p>
          <p>
            Well, you don't like it, there's the door. No? Sticking around?
            Okay.{' '}
          </p>
          <p>
            First spell: keep that first gesture the way it was, just suck less
            at it. Take the second gesture and do it third. Take the third
            gesture and do it fifth. Okay, that fourth gesture you did, I didn't
            like it at all: it looked like you tried to make a fist but forgot
            how. Maybe instead of that, give me like you're twirling the end of
            an evil mustache. Yeah, just with the finger and thumb, that's the
            ticket! Okay, good: so that's the fourth gesture, and as for the
            final gesture...what'd you do, again? Oh, yeah: uncross the fingers,
            it looks like you're lying. Okay, and turn the whole thing sideways.
            No, other side in front. Perfect. Make that gesture 2.
          </p>
          <p className="text-center">MEDEA</p>
          <p>Okay, but that spell–</p>
          <p className="text-center">KEN</p>
          <p>
            Don't interrupt me. Second spell... yeah, let's just do something
            completely different. Oh, no, wait. You did that fingers-crossed
            thing fourth here, and it kind of maybe worked. Put that gesture
            third. For the rest of the spell, let's just hold up some numbers,
            yeah? How about the number "30" for the first two gestures, and then
            maybe like a "6" in the fourth slot... and lastly... hey pretend
            you're mad about being 36 and make a fist! Yeah, I like that!
          </p>
          <p className="text-center">MEDEA</p>
          <p>But I'm not 36.</p>
          <p className="text-center">KEN</p>
          <p>
            I said don't interrupt. Third spell, let's see. Uh, keep that first
            gesture; it was fine. Maybe do that fingers crossed thing in the
            third slot again, that'll be good. Second gesture... I don't know,
            just do what you're doing in the second slot of the first spell. And
            then, I don't know, maybe look at your nails like you think there's
            dirt underneath them? No, show them to the audience instead. Oh,
            that's great! Yeah, do that for the fourth AND fifth gestures!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Twice in a row?</p>
          <p className="text-center">KEN</p>
          <p>
            Sure! It's like, we're... breaking up a pattern. Speaking of
            patterns, I liked that first gesture in the fourth spell, but we
            just used it first in the new third spell, so put it fourth here.
            But I liked the fourth gesture, too... reminded me of that Smash
            Mouth song... move it to second. And that third gesture... hmm,
            should we move it to the beginning or the end? What the heck! Let's
            do both! Make that the first AND last gesture! What didn't I
            mention?{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>The second gesture I did?</p>
          <p className="text-center">KEN</p>
          <p>
            Right: well, that's the one we just used twice in a row, so ditch
            that, and... I dunno, act like you're... holding a piece of
            one-and-a-half-inch PVC pipe up to check it for cracks or something.
            That can be your third gesture.{' '}
          </p>
          <p>
            Okay, that last spell. It was terrible overall, but we can probably
            salvage <u>something</u>. Hang onto the second gesture you did. And
            the fourth gesture. Now, let's see. We can probably do that
            fingers-crossed thing as the first gesture as a callback... and
            maybe your fifth gesture can be a callback, too: just use the fifth
            gesture from the new first spell. But the third gesture should be
            something new. But small, not big. Hey! How would you indicate
            something was small? Yeah, perfect! Do that in the third position!
          </p>
          <p>And that's it. You got all that, right?</p>
          <p className="text-center">MEDEA</p>
          <p>
            I mean, I <u>did</u>, but if I actually do those spells...
          </p>
          <p className="text-center">KEN</p>
          <p>
            Look, we're already over time, so don't give me any lip, Sister.
            Just do the five spells, one right after the other, like they're
            all... strung together! And let's see what happens!
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Okay...{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, five times.
              There's a somewhat larger "poof" sound, and noises of numerous
              objects hitting the table)
            </i>
          </p>
          <p className="text-center">KEN</p>
          <p>
            Whoa! Leaned hard into the food thing this time, huh? What've we got
            here? Couple of bones... wait, those aren't human bones, are they?
            Oh, what am I saying?! <i>(laughs)</i> And then there's... oh! You
            fixed the broken chair with... is that, like, brass solder or
            something? Okay, what've we got here? Oh – now THIS is some filling
            European food! That's what I'm talking about! Umm... then a
            little... chalkboard, I guess that's to write the menu on, and...
            what's this? Soup? Oh, no: I see what it is! I love Tex-Mex!{' '}
            <i>(chews)</i> So, not bad, I guess. Here's the scoring on the
            results:{' '}
          </p>
          <p>For the bones: Keep 4, move 3&amp;5 elsewhere, ditch 1&amp;2. </p>
          <p>
            Thanks for fixing the chair and all, but that spell was lame: Keep
            its second gesture in place and lose the rest.{' '}
          </p>
          <p>
            For each of the next two, move the first gesture elsewhere in their
            respective spells, and ditch all the rest.
          </p>
          <p>
            And the last spell– mmm! This is great, by the way: really
            authentic, and even a little bit crunchy to the bite – keep the
            first and third gestures exactly as is, but everything else should
            go.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            How can that be the scoring? You <u>told</u> me to do those gestures
            in those positions!
          </p>
          <p className="text-center">KEN</p>
          <p>
            Hey! I don't make the rules, Lady. I just give the feedback! Anyway,
            maybe we'll be in touch, maybe we won't. But don't let the door hit
            you on the way out.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Well, it was a privilege to–</p>
          <p className="text-center">KEN</p>
          <p>
            Yeah, yeah, yeah. Hey, hit the stop button on the audio recorder on
            your way out, will ya? I don't need audio of me chowing down on
            this– <i>(Recording abruptly ends)</i>
          </p>
        </details>
        <hr className="my-4" />
        <p>
          <b>Recording #2</b>
        </p>
        <AudioLink src={audio2} />
        <details className="my-2">
          <summary>Recording #2 Transcript</summary>

          <p className="text-center">KEN</p>
          <p>
            Okay, here we are again at the callbacks. Now, I've been informed by
            the casino management – humorless jerks – that I have to make clear
            to you that when I said in your initial audition that giving me a
            car would get you a callback, that I was just joking, and that no
            quid pro quo exists here. So <u>even if</u> you were to conjure me
            up a car – like, maybe a bright orange Lamborghini Revuelto – and
            give it to me, it would not have any impact on my hiring decisions.
            Kapiche?
          </p>
          <p className="text-center">MEDEA</p>
          <p>That's fine with me.</p>
          <p className="text-center">KEN</p>
          <p>
            Of course it's fine with you: it means you don't have to sneak any
            more cars in here! Okay, welcome to the callback round. Your first
            audition was pretty bad, but you're here because just about
            everybody else's were even more terrible than yours.
          </p>
          <p className="text-center">MEDEA</p>
          <p>That's... thank you?</p>
          <p className="text-center">KEN</p>
          <p>
            Hey, I don't give out unearned compliments, Darlin'. You want
            flattery, head to the casino floor. Look, you know the drill. Five
            spells, one at a time, and keep your yap shut while you cast'em.
            Well, go on... what're you waiting for, an engraved invitation?
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and something
              metal clangs)
            </i>
          </p>
          <p className="text-center">KEN</p>
          <p>Okay, something to put your sheet music on. Next?</p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a thunk of
              something large hitting the ground)
            </i>
          </p>
          <p className="text-center">KEN</p>
          <p>
            What the heck? We're in the middle of a desert: where would I even
            use that? Fine: next!
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound)
            </i>
          </p>
          <p> </p>
          <p className="text-center">KEN</p>
          <p>
            Okay, a holographic projection. What is that, a star of some sort?
            Okay, fourth spell? Okay, I see: nothing in your hands, sleeves
            rolled up, sure, sure, get on with it.
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound)
            </i>
          </p>
          <p>
            What? There's still nothing there. Oh, no, wait: some kind of
            insect? Eh, pretty small. Wait, where'd it go? It's not in my hair,
            is it? Fifth spell, please! Okay, blank sheet of paper, got it, got
            it.
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound)
            </i>
          </p>
          <p>And now the paper has letters written all over it! Not bad. </p>
          <p className="text-center">MEDEA</p>
          <p>Thanks.</p>
          <p className="text-center">KEN</p>
          <p>
            But also not good. The effects were... fine – I mean, I coulda
            done'em better – but the gestures are what really concerned me:
            pretty thin soup. Haven't you learned anything from what I taught
            you?
          </p>
          <p className="text-center">MEDEA</p>
          <p>"Taught" me?</p>
          <p className="text-center">KEN</p>
          <p>
            <i>(sighs)</i> Okay, I'll break it down for you, Toots, and maybe
            it'll sink in this time. That first spell, I wouldn't've done any of
            those gestures. None. Nada. Zip. That second spell? The last gesture
            might have worked if it'd been somewhere else, but it didn't work
            there. Those other four gestures wouldn't've worked even if they had
            been somewhere else! Third spell ended solid: I'd've kept that last
            gesture where it was, but the only thing remotely usable in the rest
            of it was the third gesture, and it was clearly in the wrong place!
            But then – but <u>then</u>! – in the fourth spell, your third
            gesture was solid, and it was the first and fifth ones that you put
            in the wrong spots! Nothing else usable. And that last spell: why'd
            you only use two different gestures the entire time? The only time
            it worked was the fourth gesture: everything else should've been
            cut! Hopefully, that gives you a refresher, so your next batch will
            be better!
          </p>
          <p className="text-center">MEDEA</p>
          <p>Next batch? Oh! Okay, well–</p>
          <p className="text-center">KEN</p>
          <p>
            Whoa! Hold your horses there, hard charger! Let me give you some
            directions first.
          </p>
          <p className="text-center">MEDEA</p>
          <p>But shouldn't I–?</p>
          <p className="text-center">KEN</p>
          <p>
            <i>(talking over her)</i> Okay, for your first spell, take that
            first gesture you did, and put your thumb under your index finger
            instead of over it. Nope! Not under the middle finger, just the
            index. Good! Make that Gesture #5. The third gesture you did: try it
            again, just stick up your pinky. Yep: do that second. And your last
            gesture, try also raising the finger next to the one that's already
            up. No, spread'em apart. And squeeze the other digits closer to the
            palm. Yes! Make that your third gesture. Now, for the first gesture,
            can you do the thing where your hand is like a little man walking
            around on the table? Yeah! Do that, but frozen! Freeze it right
            after he's just put his left foot down. Make that your first
            gesture. Oh, and for your fourth gesture... there was a gesture you
            used fourth in two of the first batch of spells you did today. Put
            that fourth here. (3:34)
          </p>
          <p>
            Now, second spell: Take the gesture you did second and instead do it
            third. Keep the fifth gesture where it was. For your first gesture,
            just close the gap above the tip of your thumb. Hmm... good but
            that's not quite done. Raise one of your fingers. Not that finger!
            That's obscene! Funny, though: raise the one next to it, too. And
            the one next to that. Yeah, do that gesture first. Instead of that
            third gesture you did before, take the two fingers that were on top
            of your thumb and raise them up. Now put the longer one behind the
            shorter one. Great: make that gesture second! Now, pretend the
            gesture you're doing third in this spell and then the gesture you
            did second in your version of the first spell, and then the gesture
            you did third in this spell the first time through are all a big
            sequence. What would come next in that sequence? Good! Do that
            fourth.{' '}
          </p>
          <p>
            Okay, third spell! You know what? For this one, let's get a little
            bit mystical: ooooooh! Forget everything you did last time! First
            gesture, fold all your fingers down and then slide your thumb
            between your Finger of Jupiter and your Finger of Saturn! Ooooh!
            Second gesture: extend those two fingers and rotate your hand a
            quarter-turn towards Outer Mars! Oooh! Third gesture: slide your
            Finger of Jupiter forward and downward - towards the floor - as far
            as you can, and rotate your hand a quarter-turn away from Luna!
            Ooooh! Fourth gesture: face your Plain of Mars to the audience,
            touch your fingertips to the Girdle of Venus, and touch your logic
            knuckle to Inner Mars... Oooooh! Okay, I'm bored with that.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>But you didn't do a fifth gesture.</p>
          <p className="text-center">KEN</p>
          <p>Just repeat the fourth one, it's fine!</p>
          <p>
            In fact, I like what we've got going on here, so let's keep some of
            this new third spell in this new fourth spell. Move the first
            gesture to fifth, the second gesture to fourth, and the third
            gesture to first. Second gesture...oooooh! Raise nothing but your
            Mercury finger! Oooh! Okay, now I really am bored. We need some
            comedy! Hey, remember that comedy group The Kids in the Hall?
            "I am only... crushing your head!" Do that!
          </p>
          <p>Okay, last spell! Finally, AMIRITE?</p>
          <p className="text-center">MEDEA</p>
          <p>You're the one who's in charge here.</p>
          <p className="text-center">KEN</p>
          <p>
            Darn tootin' I am! So. Fifth spell: Jeez, you liked those two
            gestures so much, I guess we can keep one of them: take the one you
            used more times and do it fifth. You know, I still like those
            gestures we kept from the third spell, so put the ones that were
            first and fifth in the fourth spell back where they came from
            originally for this spell. Your other two gestures, in order, should
            be: the Pope giving a blessing, and – remember that sequence I
            mentioned earlier? Do the third gesture in that sequence. You got
            all that?
          </p>
          <p className="text-center">MEDEA</p>
          <p>I do, but...</p>
          <p className="text-center">KEN</p>
          <p>Then spare me the editorializing and just do'em all together! </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, five times.
              There's a somewhat larger "poof" sound, and noises of numerous
              objects clattering around. There's also a mooing sound)
            </i>
          </p>
          <p>
            What the heck, is that a cow?! Where'd that come from?! I dunno why
            we keep getting surprise animal visits when you're around: it never
            happens otherwise! How now, Brown&mdash;er, maybe it's more black than
            brown, I guess&mdash;cow? But let's see what else we've got here: in no
            particular order, it looks like there's&mdash;hey, is that supposed to be
            a comment on my weight? Better not be! Oh, hey, someone crossed out
            all the letters on that page from before with a red pen! A rope, or
            no, it's a... whoa! That's morbid. Okay, and this is... what is
            this, even? A bronze... statue of some sort? Or, wait: maybe it's a
            fountain: there's this spout on the... what, leg?
          </p>
          <p className="text-center">MEDEA</p>
          <p>Ankle. He... er... it used to move. Like a robot.</p>
          <p className="text-center">KEN</p>
          <p>
            Huh. Wonder if we can get that working again? That'd be a tasty
            treat for the audience, huh?
          </p>
          <p className="text-center">MEDEA</p>
          <p>He... kind of malfunctioned and caused a lot of problems.</p>
          <p className="text-center">KEN</p>
          <p>Well, anyway, here's the scoring, in no particular order:</p>
          <p>
            On the item that <u>isn't</u> a commentary on my weight: keep the
            first two and the last one exactly the way they are, and ditch the
            other two.{' '}
          </p>
          <p>
            For the rope: Keep 3 and 5 in the same place and put 1 and 4 in
            different places, but lose the rest!
          </p>
          <p>
            Fountain-robot-guy: Move 4 and 5 to other locations, ditch the rest.
          </p>
          <p>And the crossouts: Move 2 and 5 elsewhere, get rid of the rest!</p>
          <p className="text-center">MEDEA</p>
          <p>What about the cow?</p>
          <p className="text-center">KEN</p>
          <p>
            Oh, right, because you totally conjured up a live cow!{' '}
            <i>(laughs)</i> Just call it the same score. Now, do you mind taking
            this cow down to the kitchen when you leave? I usually love a good
            pie, but cow pies are the exception! <i>(Cow moos)</i> Yeah, "moo"
            yourself. I expect I'll see you later... on the buffet!{' '}
            <i>(Cow moos annoyedly)</i>
          </p>
          <p className="text-center">MEDEA</p>
          <p>Okay, and when do you think you'll be making a...?</p>
          <p className="text-center">KEN</p>
          <p>
            Just get the livestock outta here, Toots, and we'll be in touch!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            <i>(Curtly)</i> Okay, fine. <i>(Door opens and closes)</i>
          </p>
          <p className="text-center">KEN</p>
          <p>
            How about that? A cow leading a cow! <i>(Laughs)</i> Now that's
            funny! Oh, shoot: I shoulda turned off the recording before I said
            that. Don't want <u>another</u> lawsuit!{' '}
            <i>(Scratching sound as KEN's voice gets nearer)</i> Man, my scalp
            is starting to itch. I think that bug <u>did</u> get in my hair!{' '}
            <i>(Recording stops)</i>
          </p>
        </details>
        <hr className="my-4" />
        <p>
          <b>Recording #3</b>
        </p>
        <AudioLink src={audio3} />
        <details className="my-2">
          <summary>Recording #3 Transcript</summary>

          <p className="text-center">KEN</p>
          <p>So, we're back here with Maria–</p>
          <p className="text-center">MEDEA</p>
          <p>Medea.</p>
          <p className="text-center">KEN</p>
          <p>
            Whatever. Anyway, congrats, you've made it to the final round of
            auditions.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>I'm–</p>
          <p className="text-center">KEN</p>
          <p>
            Yeah, yeah, yeah, I've been hearing it all day: you're thrilled,
            you're ecstatic, you're over the moon. Of course you are.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Actually, I was going to say I'm ready to start whenever.</p>
          <p className="text-center">KEN</p>
          <p>
            <i>(not paying attention)</i> Anyway, because it's the final round,
            as you can see, Peller here is sitting in on this audition.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>It's a privilege to me–</p>
          <p className="text-center">KEN</p>
          <p>
            He doesn't talk, so save your breath. In fact, enough chitchat. Show
            Peller what you've got. Five spells, all silent. I'll score you and
            correct your gestures as usual, and then, if you don't stink and if
            Peller doesn't object, I'll actually get up there with you, and
            we'll try a quick routine together.{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Oh, wow, that'd be–</p>
          <p className="text-center">KEN</p>
          <p>
            I said "<u>if</u>" you don't stink, which is a big "if," in my
            opinion. <i>(Laughs)</i> All right, don't keep us waiting: get to
            it!
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and we hear
              what sounds like a marble hitting the table.)
            </i>
          </p>
          <p>Whoa! A gemstone: nice!</p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and we hear a
              hissing noise)
            </i>
          </p>
          <p>Yikes! Is that thing venomous?</p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and loud
              crash/splat)
            </i>
          </p>
          <p>
            Whoa! That thing just smashed it flat! Like it's some kind of
            cartoon!
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a popping
              noise)
            </i>
          </p>
          <p>
            Huh. Kind of late for breakfast. I'll eat it anyway, though.{' '}
            <i>(mouth full)</i> Okay, Sugar, what's the last one?
          </p>
          <p>
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and we hear
              something hit the table)
            </i>
          </p>
          <p>
            A gold-plated trophy? What's this say? "Best Vegas Magician 2024
            Goes to: Ken"? Okay, okay, I get it, you're buttering me up. Still,
            I can enjoy the good feeling in the moment, even if I know it's just
            flattery. Those gestures, though. Sheesh, let's go through'em.
          </p>
          <p>
            First spell, you should've moved the second and fourth gestures
            elsewhere and gotten rid of the rest.{' '}
          </p>
          <p>
            Second spell, that last gesture was perfect, the first one would've
            been perfect but it was too early, and the rest were junk.
          </p>
          <p>
            Third spell, almost the same except it was the third gesture that
            was perfect instead of the last one.
          </p>
          <p>
            Fourth spell, first and last gestures were crap, but the middle
            three could've stayed if you maybe moved'em around a bit.
          </p>
          <p>
            And last spell, you shoulda moved the first and the fourth gestures
            somewhere else and ditched the rest.{' '}
          </p>
          <p>
            So, pretty terrible, but lucky for you, everybody else so far has
            been even more terrible!{' '}
          </p>
          <p>Okay, let's try it again with some changes:</p>
          <p>
            First spell, let's try it again, but ditch the "fingers do the
            walking" gesture; instead, in that slot, turn your hand upside
            down...good...and instead of pointing those two fingers in those
            directions, take the one that's pointing forward and make it point
            up, and the one that's pointing up and make it point past the other
            one. Great! You can keep the "I got your nose" and "I'm about to
            chuck a thickish-but-not-ridiculously-thick spear at you" in the
            same spots. Maybe do the nose thing again in the fourth slot. Now,
            instead of doing that finger-wag of judgment, or whatever that was,
            try to touch all four of your fingertips to their first finger
            joints. Good! Now simultaneously try to touch your thumbtip to your
            heart line. Yeah! Do that!{' '}
          </p>
          <p>
            Second spell, what were some of the gestures you did? That "fingers
            do the walking thing" again? No. Dr. Evil? No. "Fingers crossed?"
            No, no, no, and we GOTTA ditch the "peace out" thing: what are you,
            some kind of hippie? Maybe that one, at least, would look better if
            you stuck the next finger up as well? No, try putting your thumb on
            the top of the down finger. Not quite. Try putting the three up
            fingers down. Yes! I <u>love</u> that gesture! Let's use it first
            AND third, AND fourth! Ugh, that just leaves the fourth gesture...
            get your thumb out of there. Slide your fingertips down so that
            instead of those finger bones being flat on top, it's the next set
            closer to the hand that's flat on top. Perfect! Use that for the
            second and the fifth gestures!
          </p>
          <p>
            Hmm... this third spell... what all did you do: oh, you threw in the
            peace sign again! For the last time, ditch it! The first gesture you
            did, though, that's a different story: move it into the second slot
            and it can stay. That second gesture... try pulling your thumb out
            from the middle and put it in front in the same spot. Yep! Use that
            for your third and fourth gestures. Fourth gesture was okay, but
            stick your thumb out. Great! Put that gesture fifth! And to lead
            off... hmm... Hey! What's that video with all the views? "Baby
            shark!" Yeah, do the Baby Shark gesture! Perfect! Start with that.
          </p>
          <p>
            Fourth spell... sheesh, those first two gestures are basically what
            we've got going on in that first spell now. And that third gesture's
            now in the second spell and the fourth gesture's now in the third
            spell... that's it! We gotta rework this one completely!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Completely?</p>
          <p className="text-center">KEN</p>
          <p>
            Well... almost completely. Fine, use the fourth gesture third. Take
            the other gesture from the new second spell and use it first. Now,
            how would you indicate you wanted a pair of scissors? Whoa! Not an
            OPEN pair of scissors! Do you want somebody to hurt themselves?!
            That's a valid gesture that we haven't used yet, but I don't want to
            see it again! CLOSE the pair of scissors, please!! Yes, great! Do
            that gesture second. Now, for the fourth gesture, pretend you're
            holding a beer stein. Yeah, except you're a hoity-toity socialite
            doing it. Good, now take a swig: hold it! Hold it right there and
            don't move, and that's gesture 4! Okay, now for Gesture 5, be a
            lobster! Yep! That works!{' '}
          </p>
          <p>
            Okay, fifth spell: take the gesture you used twice and put it in the
            slot equidistant between the slots you used it in before. New first
            gesture, act like a crossing guard telling me to stop. Yeah, but now
            try to use your thumb to check if your wedding ring fell off. That's
            good! And last gesture, what if your hand was a spray of whipped
            cream on top of a banana split sundae? What would that look like?
            No, it needs a cherry on top. Perfect!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>What about the other two gestures?</p>
          <p className="text-center">KEN</p>
          <p>
            Which two: three-fingers-up, two-fingers-up, or one-finger-up? oh!
            You mean the other two gestures in the new spell? Aaah, just use the
            ones you're now using in those slots in the previous spell!
          </p>
          <p className="text-center">MEDEA</p>
          <p>Okay, here goes–</p>
          <p className="text-center">KEN</p>
          <p>
            Whoa! Not yet! I need to see how well you can work these into an
            actual two-person act! So, I'm going to come up here and – what's
            that, Peller? You've already seen enough to know <u>what</u>? Well,{' '}
            <u>I'm</u> not convinced yet! Okay, Toots, you do okay on your own,
            but let's see how well you work with a true professional! I'm gonna
            do my intro and then we'll start with the spells! Are you ready?
            Doesn't matter, I'm starting anyway:
          </p>
          <p>
            Howdy, Folks! Welcome to the very first show of this new era. In
            five minutes, we're gonna start providing the answers to the
            universe's mysteries, plant the seed of a great idea for the Final
            Illusion, and maybe even try to frame your ex for murder, Miss.{' '}
            <i>(chuckles wordlessly)</i> Not to brag, but I'm fantastic. Before
            we get started, anybody need a pair of shades? They could come in
            very handy for protection from my incredible brilliance! Fan letters
            can be written on money: just turn them in at the bank on Sixth
            Avenue and say they're for Ken. In case you're wondering who{' '}
            <u>this</u> is, to you I present my assistant, Malia!{' '}
            <i>(sotto voce)</i> Turn to face the audience, please. Whoa! Air out
            those pits, would you?! They reek! I'm kidding! I'm kidding! You're
            an ode to beauty and grace. Not sure where she came from, to be
            honest. One day, she wanders in asking, "Where <u>is</u> the
            bathroom?" and just stuck around. Gold coins couldn't convince her
            to leave, and believe me, I've offered! Finally, after two months, I
            said, "Look, Lady, what is it you want?" She says, "I'm green but
            I'm talented. I want to apply to be your assistant." I said, "To be
            my assistant?" She deals out rows of cards and says, "Just pick
            one." I do. She guesses it! So, per our wager, she speaks nary a
            line, but gets to be onstage.{' '}
          </p>
          <p>
            That's it for the intro! Now let's get into some magic, huh? First
            things first, as you can see, like all good magicians, I'm wearing a
            fancy top hat. Now, most magicians would pull their hat off and pull
            out a rabbit, but I'm not most magicians! Instead, I'm gonna have
            Melinda here make something appear inside my hat while I'm still
            wearing it. <i>(sotto voce)</i> Okay, this is where you do the first
            set of gestures.
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            <i>("I don't think you really want me to do that")</i> Uhh...
          </p>
          <p className="text-center">KEN</p>
          <p>
            C'mon! C'mon! "Something inside my hat while I'm still wearing it!"{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a splat)
            </i>{' '}
            Oh, what the hell is this? Some kind of cake?! Ugh, it's in my hair!
            Not good, Belinda! You better conjure up something to clean up this
            mess right now!{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound)
            </i>
          </p>
          <p className="text-center">KEN'S MOTHER</p>
          <p>Ken, my little caramel apple!</p>
          <p className="text-center">KEN</p>
          <p>Ma?! What are you doin' here?!</p>
          <p className="text-center">KEN'S MOTHER</p>
          <p>
            Oh, look at you! You're a mess! Sure, you have time to shove
            desserts all over your face, but you don't have time to pick up the
            phone and call your mother?
          </p>
          <p className="text-center">KEN</p>
          <p>Will somebody get her out of here? Peller, can you...?</p>
          <p className="text-center">KEN'S MOTHER</p>
          <p>
            I was in labor with you for thirty-six hours, and this is the thanks
            I get?! Well, just wait! Wait until I'm dead and gone because I
            broke a hip while dusting your childhood bedroom and nobody ever
            called to check up on me, and then you'll be sorry...
          </p>
          <p className="text-center">KEN</p>
          <p>
            Jeez, I'm already sorry. <i>(turning on MEDEA)</i> Nice going,
            Lucinda. Thanks to you, I looked like a pig in front of my mother!
            I've got a good mind to–-!{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a giant
              farting noise)
            </i>{' '}
            WHOA! I don't know where that came from! I just–{' '}
            <i>(KEN belches)</i> feel really... bloated all of a sudden{' '}
            <i>(more farts)</i>. You better, um{' '}
            <i>(one small fart, sotto voce)</i> For Pete's sake, <u>do</u>{' '}
            something!{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and we hear
              the sound of alpenhorns playing)
            </i>{' '}
            Where's that noise coming from? Oh, you're making fun of me, is that
            it, Lucia? Okay, that's it! You've ruined the act, my clothes are a
            mess: you've got five seconds to come up with something that'll
            clean me up quick!{' '}
            <i>
              (music plays five ascending tones: do-re-mi-fa-sol, with the last
              a bit louder and prolonged. There's a "poof!" sound and a huge
              splash. Ken makes the "blblblblblbl" noise of someone who's just
              been submerged in water)
            </i>{' '}
            A wooden bathtub?! I'm soaked! Explain... this! <i>(pause)</i> No,
            out loud, for Pete's sake!
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Well... you <u>did</u> ask for something to clean yourself up...
          </p>
          <p className="text-center">KEN</p>
          <p>
            That's it! I don't care how talented you are at sleight-of-hand, I
            don't care that your gestures got progressively better through that
            round – from zero perfect in the first spell to four out of five
            perfect in the fifth spell, and nothing needing to be moved, by the
            way – you've splattered me, doused me, mocked me, and made me look
            like an idiot in front of my mother! You clearly lack even a modicum
            of... whatever! You're out of here!
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Well, if you'd just let me cast my OWN spells instead of the ones
            you dictate to me–!
          </p>
          <p className="text-center">KEN</p>
          <p>
            What are you talking about, cast your own spells?! Oh, sure! "Magic
            is real and the gestures I make determine the outcome!"
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Don't you get it?! My magic <u>is</u> real!!!{' '}
          </p>
          <p>
            <i>(Dead silence for a moment. Then, KEN starts laughing)</i>
          </p>
          <p className="text-center">KEN</p>
          <p>
            Oh! Okay! Okay, Crazycakes! I thought that was all part of your
            schtick, but it's not an act, is it? You're totally bonkers!
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            <i>(quiet, menacing)</i> <u>What</u> did you call me?
          </p>
          <p className="text-center">KEN</p>
          <p>
            I called you bonkers, Sister! You're cuckoo, nutso, bananas,
            looooney tunes, <u>crazy</u>!!!
          </p>
          <p>
            <i>(pause)</i>
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            You know, I put up with the ego, I put up with the mansplaining, I
            even put up with the "Toots" and the "Sweetheart" and the "Cow" –
            yeah, I heard that – but nobody <i>(do)</i> – <u>nobody</u>{' '}
            <i>(re)</i> – calls <i>(mi)</i> me <i>(fa)</i> <u>CRAZY</u>!!!{' '}
            <i>
              (Sol, a bit louder and prolonged. There's a "poof!" sound and dead
              silence except for MEDEA breathing heavily. Someone starts to
              applaud.)
            </i>
          </p>
          <p className="text-center">MAN WITH BRITISH ACCENT</p>
          <p>
            <i>(applauding)</i> Oh, well done. Well done!{' '}
          </p>
          <p className="text-center">MEDEA</p>
          <p>Peller?! I thought you couldn't talk!</p>
          <p className="text-center">PELLER</p>
          <p>
            Of course I can talk. I just usually choose not to. Besides, I think
            that puffed-up popinjay did more than enough talking for the both of
            us, don't you? Just to be clear, you <u>did</u> turn him into...{' '}
            <u>that</u>, yes?
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Yeah. I thought about turning him into a swine, but in this case,
            I'm not sure we would have noticed a difference. <i>(Sighs)</i> I'll
            change him back...
          </p>
          <p className="text-center">PELLER</p>
          <p>
            Oh, no, no, no: I wouldn't dream of it! It's the first time in
            decades I've been able to hear myself think! Speaking of which, can
            he... understand... me when he's like that?
          </p>
          <p className="text-center">MEDEA</p>
          <p>Um... on a certain level, I think?</p>
          <p className="text-center">PELLER</p>
          <p>
            Good. <i>(to KEN)</i> Now, you listen to me, you pompous, swaggering
            peacock! For years I let you bully me into submission and steal the
            limelight while I cowered silently in your shadow doing all the real
            work. But the tables are turned now, aren't they? Oh, I'm keeping
            you in the act, but you'll stay like this, and it'll be your turn to
            be the "silent partner," and if you don't do exactly as you're told,
            you'll end up downstairs... on the casino buffet! Do I make myself
            clear? Was that a nod? That was a nod, yes?
          </p>
          <p className="text-center">MEDEA</p>
          <p>I... think so?</p>
          <p className="text-center">PELLER</p>
          <p>
            Excellent! Unfortunately, I doubt the Venetian will consider him a
            suitable party to a two-performer contract, so now it's I who find
            myself in need of a new partner. I think the name "Medea and Peller"
            has a nice ring to it, don't you?
          </p>
          <p className="text-center">MEDEA</p>
          <p>"Medea and Peller?" You don't want top billing?</p>
          <p className="text-center">PELLER</p>
          <p>
            Oh, no: I know talent when I see it and I'm man enough to admit when
            it surpasses my own. And besides, I've had extensive experience in
            gesture work. Like that last spell: you did it in just five
            gestures, but I think I can suitably replicate its effects in 25.
            Observe: index and thumb loop, pinky, ring, heel pad, index, index,
            thumb pad and middle base, index, along heel pad, web to wrist,
            crossed pinkies, index, thumb pad and middle base, index, palm and
            palm, middle, palm and palm, heel pad, along heel pad, ring,
            interlaced, ring, along heel pad, index tip and base, crossed
            pinkies.
          </p>
          <p className="text-center">MEDEA</p>
          <p>
            Whoa. You <u>are</u> a quick study!
          </p>
          <p className="text-center">PELLER</p>
          <p>So, what do you say? "Medea and Peller?"</p>
          <p className="text-center">MEDEA</p>
          <p>
            <i>(agreeing)</i> "Medea and Peller"
          </p>
          <p className="text-center">PELLER</p>
          <p>
            It sounds much better than "Medea, Peller, and..." what would we
            even call him?
          </p>
          <p className="text-center">MEDEA</p>
          <p>I'd call him a total–</p>
          <p className="text-center">AUTOMATED VOICE</p>
          <p>
            Memory limit reached. Please delete unneeded files to free up
            storage space. <i>(Recording ends)</i>
          </p>
        </details>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
