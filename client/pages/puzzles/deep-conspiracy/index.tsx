import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Table from 'components/table';

import image0 from 'assets/puzzles/deep-conspiracy/0.png';
import image1 from 'assets/puzzles/deep-conspiracy/1.png';
import image2 from 'assets/puzzles/deep-conspiracy/2.png';
import image3 from 'assets/puzzles/deep-conspiracy/3.png';
import image4 from 'assets/puzzles/deep-conspiracy/4.png';
import image5 from 'assets/puzzles/deep-conspiracy/5.png';
import image6 from 'assets/puzzles/deep-conspiracy/6.png';
import image7 from 'assets/puzzles/deep-conspiracy/7.png';
import image8 from 'assets/puzzles/deep-conspiracy/8.png';
import image9 from 'assets/puzzles/deep-conspiracy/9.png';
import image10 from 'assets/puzzles/deep-conspiracy/10.png';
import image11 from 'assets/puzzles/deep-conspiracy/11.png';
import image12 from 'assets/puzzles/deep-conspiracy/12.png';
import image13 from 'assets/puzzles/deep-conspiracy/13.png';
import image14 from 'assets/puzzles/deep-conspiracy/14.png';
import image15 from 'assets/puzzles/deep-conspiracy/15.png';
import image16 from 'assets/puzzles/deep-conspiracy/16.png';
import image17 from 'assets/puzzles/deep-conspiracy/17.png';
import image18 from 'assets/puzzles/deep-conspiracy/18.png';
import image19 from 'assets/puzzles/deep-conspiracy/19.png';
import image20 from 'assets/puzzles/deep-conspiracy/20.png';
import image21 from 'assets/puzzles/deep-conspiracy/21.png';

const SLUG = 'deep-conspiracy';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle
      puzzleData={puzzleData}
      copyData={{ ref: ref, config: { preserveStyles: true } }}
      smallTitle={true}
    >
      <div ref={ref}>
        <FlavorText>
          While sifting through various corners of the internet, I found
          compelling evidence that a certain singer/songwriter might have found
          a new collaborator...
        </FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Image text available in copy-to-clipboard.
        </InfoIcon>
        <p>
          <SheetableImage
            alt="A full view of a conspiracy corkboard, with red yarn connecting scraps of paper strewn across the board."
            src={image0}
            title=""
          />
        </p>
        <hr />
        <>
          <p className={cx(HIDDEN_CLASS)}>
            <b>
              <u>INSTA COUNTDOWN</u>
            </b>
            <br />
            <i>Hidden messages in her feed???</i>
          </p>
          <p>
            <SheetableImage
              alt="Insta Countdown
Hidden messages in her feed???"
              src={image1}
              title=""
              className="sm:max-w-lg mx-auto"
            />
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            <span className="text-red-500">How many RAILS in the FENCE?</span>
            <br />
            TCYAOHALKTUTOESRHRUC
          </p>
          <p>
            <SheetableImage
              alt="How many rails in the fence? TCYAOHALKTUTOESRHRUC"
              src={image2}
              title=""
              className="sm:max-w-lg mx-auto"
            />
          </p>
          <p>
            <SheetableImage
              alt=""
              src={image3}
              title=""
              className="sm:max-w-lg mx-auto"
            />
          </p>
        </>
        <hr />
        <>
          <p className={cx(HIDDEN_CLASS)}>
            <b>
              <u>SECRET PSEUDONYMS</u>
            </b>
            <br />
            <i>Has she been hiding her identity under different names???</i>
          </p>
          <p>
            <SheetableImage
              alt="Secret Pseudonyms
Has she been hiding her identity under different names???"
              src={image4}
              title=""
              className="mx-auto sm:max-w-lg"
            />
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            A book about a Hollywood celebrity and the succession of men she had
            relationships with over the years?
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            The descriptions are such a perfect fit, too - either she consulted
            on the book, or she secretly wrote it.
          </p>
          <p className={cx(HIDDEN_CLASS)}>Potential Pseudonym:</p>
          <p className={cx(HIDDEN_CLASS)}>
            <Monospace>--10--- ------- -7--</Monospace>
          </p>
          <p>
            <SheetableImage
              alt="A book about a Hollywood celebrity and the succession of men she had relationships with over the years?

The descriptions are such a perfect fit, too - either she consulted on the book, or she secretly wrote it.

Potential Pseudonym:
--10--- ------- -7--"
              src={image5}
              title=""
              className="mx-auto sm:max-w-sm"
            />
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            An unidentified book with a massive planned print run, rumored to be
            a musical memoir? It has to be hers.
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            You'd have to look overseas to find a musical group with as militant
            a fanbase.
          </p>
          <p className={cx(HIDDEN_CLASS)}>Potential Pseudonym:</p>
          <p className={cx(HIDDEN_CLASS)}>
            <Monospace>---2------ 9---</Monospace>
          </p>
          <p>
            <SheetableImage
              alt="An unidentified book with a massive planned print run, rumored to be a musical memoir? It has to be hers.

You'd have to look overseas to find a musical group with as militant a fanbase.

Potential Pseudonym:
---2------ 9---"
              src={image6}
              title=""
              className="mx-auto sm:max-w-sm"
            />
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            A debut novelist lands a film deal with the creators of Kingsman,
            and the story's main character totes around her Scottish fold in a
            bubble cat backpack?
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            That can only happen with major talent attached. Major talent
            like...her.
          </p>
          <p className={cx(HIDDEN_CLASS)}>Potential Pseudonym:</p>
          <p className={cx(HIDDEN_CLASS)}>
            <Monospace>---- 8-1---</Monospace>
          </p>
          <p>
            <SheetableImage
              alt="A debut novelist lands a film deal with the creators of Kingsman, and the story's main character totes around her Scottish fold in a bubble cat backpack?

That can only happen with major talent attached. Major talent like...her.

Potential Pseudonym:
---- 8-1---"
              src={image7}
              title=""
              className="mx-auto sm:max-w-sm"
            />
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            A Sapphic poetry book that shares the name with one of her songs,
            released mere days before the album released?
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            It's exactly the kind of marketing blitz they'd eat right up on Mad
            Men.
          </p>
          <p className={cx(HIDDEN_CLASS)}>Potential Pseudonym:</p>
          <p className={cx(HIDDEN_CLASS)}>
            <Monospace>---- 6-4--</Monospace>
          </p>
          <p>
            <SheetableImage
              alt="A Sapphic poetry book that shares the name with one of her songs, released mere days before the album released?

It's exactly the kind of marketing blitz they'd eat right up on Mad Men.

Potential Pseudonym:
---- 6-4--"
              src={image8}
              title=""
              className="mx-auto sm:max-w-sm"
            />
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            I know this might sound crazy...but imagine, if you will, producing
            a cover song of one of your own songs, and releasing it under a
            pseudonym. Maybe even get your brother to sing it.
          </p>
          <p className={cx(HIDDEN_CLASS)}>
            ...oh, she actually admitted to this one?
          </p>
          <p className={cx(HIDDEN_CLASS)}>Confirmed Pseudonym:</p>
          <p className={cx(HIDDEN_CLASS)}>
            <Monospace>-3-- 5------</Monospace>
          </p>
          <p>
            <SheetableImage
              alt="I know this might sound crazy...but imagine, if you will, producing a cover song of one of your own songs, and releasing it under a pseudonym. Maybe even get your brother to sing it.

...oh, she actually admitted to this one?

Confirmed Pseudonym:
-3-- 5------"
              src={image9}
              title=""
              className="mx-auto sm:max-w-sm"
            />
          </p>
          <p>
            <SheetableImage
              alt=""
              src={image10}
              title=""
              className="mx-auto sm:max-w-lg"
            />
          </p>
        </>
        <hr />
        <p className={HIDDEN_CLASS}>
          <b>
            <u>FROM THE VAULT</u>
          </b>
          <br />
          <i>
            Chasing theories often starts out with black and white answers
            before going in more speculative directions… still, at least you
            don't need to do this one 33 million times
          </i>
        </p>
        <p>
          <SheetableImage
            alt="From the Vault
Chasing theories often starts out with black and white answers before going in more speculative directions...still, at least you don't need to do this one 33 million times"
            src={image15}
            title=""
            className="sm:max-w-lg mx-auto"
          />
        </p>
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td className="text-white bg-gray-400">▽G</td>
              <td className="text-white bg-yellow-400">◯R</td>
              <td className="text-white bg-blue-400">⬦G</td>
              <td className="text-white bg-black">◯T</td>
              <td className="text-white bg-yellow-400">⬦N</td>
              <td className="text-white bg-blue-400">▽G</td>
            </tr>
            <tr>
              <td className="text-white bg-black">⬦D</td>
              <td className="text-white bg-blue-400">▽K</td>
              <td className="text-white bg-gray-400">◯R</td>
              <td className="text-white bg-yellow-400">▽H</td>
              <td className="text-white bg-blue-400">◯N</td>
              <td className="text-white bg-black">▽O</td>
            </tr>
            <tr>
              <td className="text-white bg-gray-400">◯G</td>
              <td className="text-white bg-yellow-400">▽T</td>
              <td className="text-white bg-blue-400">⬦X</td>
              <td className="text-white bg-gray-400">▽B</td>
              <td className="text-white bg-yellow-400">◯S</td>
              <td className="text-white bg-yellow-400">⬦U</td>
            </tr>
            <tr>
              <td className="text-white bg-yellow-400">◯A</td>
              <td className="text-white bg-blue-400">▽R</td>
              <td className="text-white bg-gray-400">◯J</td>
              <td className="text-white bg-black">◯N</td>
              <td className="text-white bg-gray-400">◯R</td>
              <td className="text-white bg-blue-400">⬦N</td>
            </tr>
            <tr>
              <td className="text-white bg-gray-400">▽T</td>
              <td className="text-white bg-black">⬦O</td>
              <td className="text-white bg-yellow-400">◯A</td>
              <td className="text-white bg-blue-400">⬦P</td>
              <td className="text-white bg-gray-400">▽A</td>
              <td className="text-white bg-yellow-400">⬦S</td>
            </tr>
            <tr>
              <td className="text-white bg-yellow-400">⬦D</td>
              <td className="text-white bg-gray-400">◯F</td>
              <td className="text-white bg-blue-400">▽A</td>
              <td className="text-white bg-yellow-400">⬦E</td>
              <td className="text-white bg-blue-400">◯F</td>
              <td className="text-white bg-gray-400">▽V</td>
            </tr>
            <tr>
              <td className="text-white bg-blue-400">◯T</td>
              <td className="text-white bg-yellow-400">▽S</td>
              <td className="text-white bg-black">⬦G</td>
              <td className="text-white bg-gray-400">▽A</td>
              <td className="text-white bg-yellow-400">⬦U</td>
              <td className="text-white bg-black">◯X</td>
            </tr>
            <tr>
              <td className="text-white bg-yellow-400">◯C</td>
              <td className="text-white bg-black">⬦L</td>
              <td className="text-white bg-blue-400">◯L</td>
              <td className="text-white bg-yellow-400">◯E</td>
              <td className="text-white bg-gray-400">▽U</td>
              <td className="text-white bg-blue-400">⬦E</td>
            </tr>
            <tr>
              <td className="text-white bg-blue-400">◯E</td>
              <td className="text-white bg-yellow-400">▽I</td>
              <td className="text-white bg-black">◯E</td>
              <td className="text-white bg-yellow-400">▽F</td>
              <td className="text-white bg-black">▽D</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <p>
          <SheetableImage
            alt="A grid of black, gray, blue, and yellow shapes with letters inside. For the purposes of alt text, these will be indicated by colored heart emojis, using white hearts instead of gray. The shapes are circles, triangles, and diamonds. For the purposes of alt text, those will be shown by empty shapes.

First row:
🤍▽G / 💛◯R / 💙⬦G / 🖤◯T / 💛⬦N / 💙▽G
Second row:
🖤⬦D / 💙▽K / 🤍◯R / 💛▽H / 💙◯N / 🖤▽O
Third Row:
🤍◯G / 💛▽T / 💙⬦X / 🤍▽B / 💛◯S / 💛⬦U
Fourth Row:
💛◯A / 💙▽R / 🤍◯J / 🖤◯N / 🤍◯R / 💙⬦N
Fifth Row:
🤍▽T / 🖤⬦O / 💛◯A / 💙⬦P / 🤍▽A / 💛⬦S
Sixth Row:
💛⬦D / 🤍◯F / 💙▽A / 💛⬦E / 💙◯F / 🤍▽V
Seventh Row:
💙◯T / 💛▽S / 🖤⬦G / 🤍▽A / 💛⬦U / 🖤◯X
Eighth Row:
💛◯C / 🖤⬦L / 💙◯L / 💛◯E / 🤍▽U / 💙⬦E
Ninth Row:
💙◯E / 💛▽I / 🖤◯E / 💛▽F / 🖤▽D"
            src={image16}
            title=""
            className="sm:max-w-lg mx-auto"
          />
        </p>
        <p>
          <SheetableImage
            alt=""
            src={image17}
            title=""
            className="sm:max-w-lg mx-auto"
          />
        </p>
        <hr />
        <p className={HIDDEN_CLASS}>
          <b>
            <u>MANSION OF SECRETS</u>
          </b>
          <br />
          <i>
            An abode filled with memories, however fuzzy - but why does the
            elevator go to 13???
          </i>
        </p>
        <p>
          <SheetableImage
            alt="Mansion of Secrets
An abode filled with memories, however fuzzy - but why does the elevator go to 13?"
            src={image11}
            title=""
            className="mx-auto sm:max-w-lg"
          />
        </p>
        <ul className={cx(HIDDEN_CLASS)}>
          <li>A color coded house.</li>
          <li>Outside / Dark Blue: When my XXXXXXXXXX works the graveyard shift</li>
          <li>Top / Black: In XXXXXX of gray in candlelight</li>
          <li>3rd floor left / Light Blue: The XXXXXX are off</li>
          <li>3rd floor middle / Brown: To take my XXXX wreck my plans</li>
          <li>3rd floor right / Pink: Like a XXXX coming home</li>
          <li>
            2nd floor left / Orange: XXX girls XXXXXXX rocks at your window
          </li>
          <li>2nd floor middle / Gray: Those XXXX turned into nights</li>
          <li>2nd floor right / Red: I XXXX get XXX, a get you alone</li>
          <li>1st floor left / Green: XXX when I got home</li>
          <li>1st floor right / Purple: XXXXX a lot XXXX a tragedy</li>
          <li>1st floor center: door with an elevator floor dial on it</li>{' '}
        </ul>
        <p>
          <SheetableImage
            alt="A color coded house.
Outside / Dark Blue: When my XXXXXXXXXX works the graveyard shift
Top / Black: In XXXXXX of gray in candlelight
3rd floor left / Light Blue: The XXXXXX are off
3rd floor middle / Brown: To take my XXXX wreck my plans
3rd floor right / Pink: Like a XXXX coming home
2nd floor left / Orange: XXX girls XXXXXXX rocks at your window
2nd floor middle / Gray: Those XXXX turned into nights
2nd floor right / Red: I XXXX get XXX, a get you alone
1st floor left / Green: XXX when I got home
1st floor right / Purple: XXXXX a lot XXXX a tragedy
1st floor center: door with an elevator floor dial on it"
            src={image12}
            title=""
            className="mx-auto"
          />
        </p>
        <ul className={cx(HIDDEN_CLASS)}>
          <li>Closeup of elevator floor dial.</li>
          <li>1: Green</li>
          <li>2: Orange</li>
          <li>3: Purple</li>
          <li>4: Red</li>
          <li>5: Light Blue</li>
          <li>6: Black</li>
          <li>7: Pink</li>
          <li>8: Gray</li>
          <li>9: Brown</li>
          <li>10: Orange</li>
          <li>11: Red</li>
          <li>12: Dark Blue</li>
          <li>13: Purple</li>
        </ul>
        <p>
          <SheetableImage
            alt="Closeup of elevator floor dial.
1: Green
2: Orange
3: Purple
4: Red
5: Light Blue
6: Black
7: Pink
8: Gray
9: Brown
10: Orange
11: Red
12: Dark Blue
13: Purple"
            src={image13}
            title=""
            className="mx-auto sm:max-w-lg"
          />
        </p>
        <p>
          <SheetableImage
            alt=""
            src={image14}
            title=""
            className="mx-auto sm:max-w-lg"
          />
        </p>
        <hr />
        <p className={cx(HIDDEN_CLASS)}>
          <b>
            <u>LYRICAL INTERLUDES</u>
          </b>
          <br />
          <i>She's always hiding things places…where is it this time???</i>
        </p>
        <p>
          <SheetableImage
            alt="Lyrical Interludes
She's always hiding things places...where is it this time???"
            src={image18}
            title=""
            className="sm:max-w-lg mx-auto"
          />
        </p>
        <p className={cx(HIDDEN_CLASS)}>
          whiLe you were on a traIn / we always waNt what wE can't reach / life
          is full of little inteRruptioNs / wOn't stop until iT's over / she
          lost him, but she found herself, and somehow, that was Everything /
          tHey paid the price / I'll never tell / aDam / you are loveD / lovE
          aNd theft / hyannis Port / they loved eAch other reckleSSly / sAG /
          lovE is blind So you couldn't see me
        </p>
        <p>
          <SheetableImage
            alt="a series of phrases, over a pink room filled with records

whiLe you were on a traIn / we always waNt what wE can't reach / life is full of little inteRruptioNs / wOn's stop until iT's over / she lost him, but she found herself, and somehow, that was Everything / tHey paid the price / I'll never tell / aDam / you are loveD / lovE aNd theft / hyannis Port / they loved eAch other reckleSSly / sAG / lovE is blind So you couldn't see me"
            src={image19}
            title=""
            className="sm:max-w-lg mx-auto"
          />
        </p>
        <p>
          <SheetableImage
            alt=""
            src={image20}
            title=""
            className="sm:max-w-lg mx-auto"
          />
        </p>
        <hr />
        <p className={cx(HIDDEN_CLASS)}>
          <b>
            <u>WHAT IS SHE TRYING TO TELL US?</u>
          </b>
        </p>
        <p>
          <SheetableImage
            alt="What is she trying to tell us?"
            src={image21}
            title=""
          />
        </p>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
