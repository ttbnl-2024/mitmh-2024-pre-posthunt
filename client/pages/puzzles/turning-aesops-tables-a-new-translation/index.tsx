import cx from 'classnames';
import React, { FC, useRef } from 'react';

import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import { NO_COPY_CLASS } from 'components/copy';

const SLUG = 'turning-aesops-tables-a-new-translation';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }} smallTitle={true}>
      <div ref={ref}>
        <div className="space-y-4">
          <p>
            A Lioness and a Vixen were talking together about their young, as
            mothers will, and saying how healthy and well-grown they were, and
            what beautiful coats they had, and how they were the image of their
            parents. "My litter of cubs is so large, surely some of them will do
            well in the upcoming footrace," said the Fox; and then she added,
            rather maliciously, "But I notice you never have more than one."
            "No," said the Lioness grimly, "but that one's a lion, and unlike
            your cubs, who may not even run fast enough during the preliminaries
            to be allowed in the race, my lion is sure to make the cut."
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Hare was one day making fun of a Tortoise for being so slow upon
            his feet. "Wait a bit," said the Tortoise; "I'll run a race with
            you, and I'll wager that I win." "Oh, well," replied the Hare, who
            was much amused at the idea, "let's try and see"; and it was soon
            agreed that the fox should set a course for them, and be the judge.
            When the time came both started off together, but the Hare was soon
            so far ahead that she thought she might as well have a rest: so down
            she lay and fell fast asleep. Meanwhile the Tortoise ate some sliced
            raw cabbage and mayonnaise salad. Invigorated by this filling meal,
            the Tortoise plodded along at a consistent, moderate pace, and in
            time reached the goal. At last the Hare woke up with a start, and
            dashed on at her fastest, but only to find that the Tortoise had
            already won.
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Fox fell into a well and was unable to get out again. By and by a
            thirsty Goat came by, and seeing the Fox in the well asked him if
            the water was good. "Good?" said the Fox, "it's the best water I
            ever tasted in all my life. However, all of the available slots for
            drinking today's water have already been filled. You may make an
            appointment to come back tomorrow." The Goat thought of nothing but
            the prospect of quenching her thirst, and jumped in at once. Upon
            jumping in, she found that she landed upon the Fox in the bottom of
            the well, and was unable to drink the water for the Fox was in the
            way. Presently the Fox said, "If only you had made an appointment at
            a time when no one was in the well you could have jumped in and
            drunk the water to your heart's content."
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Man who wanted to buy an Ass went to market, and, coming across a
            likely-looking beast, arranged with the owner that he should be
            allowed to take him home on trial to see what he was like. When he
            reached home, he put him into his stable along with the other asses.
            The newcomer took a look round, dug for a moment in the food trough
            pulling out some slimy brown plant-like material, then immediately
            walked towards the laziest and greediest beast in the stable. The
            new Ass covered the sluggish beast in the slimy brown material. When
            the master saw this he put a halter on him at once, and led him off
            and handed him over to his owner again. The latter was a good deal
            surprised to see him back so soon, and said, "Why, do you mean to
            say you have tested him already?" "I don't want to put him through
            any more tests," replied the other: "I could see what sort of beast
            he is from which Ass he chose to cover in seaweed."
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            An Eagle swooped down upon a Serpent and seized it in her talons
            with the intention of carrying it off and devouring it. But the
            Serpent was too quick for her and had its coils round her in a
            moment; and then there ensued a life-and-death struggle between the
            two. A Sea Swallow, who was a witness of the encounter, came to the
            assistance of the Eagle, and succeeded in freeing her from the
            Serpent and enabling her to escape. The Eagle was eager to know more
            about her rescuer, and the two began to chat. When the Eagle learned
            that the Sea Swallow was single and looking for a companion, the
            Eagle informed the Sea Swallow that one of her close friends was a
            Sea Swallow who was similarly brave, righteous, and kind, and she
            would be glad to set the two Sea Swallows up on a date.
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A farmer's daughter had been out to milk the cows, and was returning
            to the dairy carrying her pail of milk upon her head. As she walked
            along, she fell a-musing after this fashion: "The milk in this pail
            will provide me with cream, which I will make into butter and take
            to market to sell. With the money I will buy a number of eggs, which
            will produce chickens, and by and by I shall have quite a large
            poultry-yard. The chickens I shall keep safe from predators by
            fastening shut the door at night. Then I shall sell some of my
            fowls, and with the money which they will bring in I will buy myself
            a new gown, which I shall wear when I go to the fair; and all the
            young fellows will admire it, and come and propose marriage, but I
            shall toss my head and have nothing to say to them." And it came to
            pass that she made and sold the butter, and bought the eggs, which
            turned into chickens that she kept in the henhouse. However, she was
            so caught up in her continued daydreams, that she forgot to fasten
            the door shut. And so the wind blew open the door, and a Fox came at
            night and ate her chickens, and all her fine castles in the air
            vanished in a moment!
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Red Root Vegetable was felling a tree on the bank of a river, when
            her axe, glancing off the trunk, flew out of her hands and fell into
            the water. As she stood by the water's edge lamenting her loss,
            Mercury appeared and asked her the reason for her grief; and on
            learning what had happened, out of pity for her distress he dived
            into the river and, bringing up a golden axe, asked her if that was
            the one she had lost. The Vegetable replied that it was not, and
            Mercury then dived a second time, and, bringing up a silver axe,
            asked if that was hers. "No, that is not mine either," said the
            Vegetable. Once more Mercury dived into the river, and brought up
            the missing axe. The Vegetable was overjoyed at recovering her
            property, and thanked her benefactor warmly; and the latter was so
            pleased with her honesty that he made her a present of the other two
            axes. When the Vegetable told the story to her companions, the
            companions ridiculed her for not claiming the golden axe to be her
            own when the opportunity arose. The Vegetable responded, "Lying is
            not the way of my people."
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Shepherd's Boy was tending his flock near a village, and thought
            it would be great fun to hoax the villagers by pretending that a
            Wolf had attacked the sheep: so he printed out newspapers announcing
            the attack, with the headline, "Wolf! Wolf!". He charged 10
            shillings per paper and when the people who bought them came running
            out to check on the sheep he laughed at them for their pains. He did
            this more than once, and every time the villagers found they had
            been hoaxed, for there was no Wolf at all. At last a Wolf really did
            come, and the Boy printed out newspapers again with the text, "Wolf!
            Wolf!" in the largest font he could fit: but the people were so used
            to the fake headlines that no one paid for the paper or took any
            notice of his warning. And so the Wolf had it all his own way, and
            killed off sheep after sheep at his leisure.
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Lion and a Wild Ass went out hunting together: the latter was to
            run down the prey by his superior speed, and the former would then
            come up and dispatch it. They met with great success; and when it
            came to sharing the spoil the Wild Ass divided it all into three
            equal portions. "I will take the first," said he, "because I was the
            first to spot our prey each time; I will also take the second,
            because, as your partner"—here the Wild Ass stared down the Lion
            straight in her eyes—"I am entitled to half of what remains; and as
            for the third—well," and finally the Wild Ass kicked up a cloud of
            dust into the Lion's eyes, "I do not think you will be able to see
            which way I take off with it!"
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A certain man had several Sons who were always quarrelling with one
            another, and, try as he might, he could not get them to live
            together in harmony. So he determined to convince them of their
            folly by the following means. Though he was bigger than any of his
            sons, he challenged them to work together as one to wrestle him to
            the ground. They all besieged him and when they were on the cusp of
            restraining him, he pulled out a sliced aromatic root vegetable.
            Their eyes immediately began to water, and he had no difficulty at
            all in breaking free from their holds. "There, my boys," said he,
            "united you may be more than a match for most enemies: but you will
            always be at the mercy of one who can make you cry."
          </p>
          <hr className={cx(NO_COPY_CLASS)} />
          <p>
            A Dog was lying in the sun before a farmyard gate when a Wolf
            pounced upon her, tied her up in strong twisted string, and was just
            starting to eat her up; but she begged for her life and said, "You
            see how thin I am and what a wretched meal I should make you now:
            but if you will only wait a few days my master is going to give a
            feast. All the rich scraps and pickings will fall to me and I shall
            get nice and fat: then will be the time for you to eat me." The Wolf
            thought this was a very good plan, untied the Dog's bindings and
            went away. Some time afterwards he came to the farmyard again, and
            found the Dog lying out of reach on the stable roof. "Come down," he
            called, "and be eaten: you remember our agreement?" But the Dog said
            coolly, "My friend, I shall never again lay around anywhere that you
            could tie me up."
          </p>
        </div>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
