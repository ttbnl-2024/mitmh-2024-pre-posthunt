import { FC } from 'react';

import Attributions from 'components/attributions';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/iv-guys/0.png';
import image1 from 'assets/solutions/iv-guys/1.png';

const SLUG = 'iv-guys';
const ANSWER = `DRESSCOAT`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      The puzzle presents us with five sets of images (4 pictures in each set),
      each of which is preceded by a short phrase.
    </p>
    <p>
      The puzzle title IV GUYS is a hint to the puzzle mechanic, and how to
      decipher the images. If we are unfamiliar with this phrase, searching for
      it online may lead us to an image of the{' '}
      <a href="https://www.reddit.com/r/funny/comments/meqmzr/looks_like_one_of_the_guys_quit/">
        IV GUYS meme
      </a>
      , where a storefront sign for the FIVE GUYS restaurant has had some
      letters burn out, resulting in an alternate meaning.
    </p>
    <p>
      Each of the twenty images corresponds to the transformed name of a store
      that could be obtained if some of the letters in the store's sign are
      burnt out.
    </p>
    <p>
      While the title can act as a hint, it may not be enough to identify the
      full mechanism, alone. As we investigate the images, we see that some are
      quite silly, in a way that might suggest a rebus. When treating the images
      as rebuses, some potential break-in points might be noticing that “Goo
      Will” sounds like “Goodwill”, seeing the picture of Mark Hamill with
      various hole-containing foods, and noting that “Hole Foods Mark” sounds
      similar to “Whole Foods Market”, or that the “Ant Eagle” sounds similar to
      “Giant Eagle”.
    </p>
    <p>Once we have identified some of the stores, we may notice that: </p>
    <ol>
      <li>
        Each group of images corresponds to a set of stores that are
        conceptually related in what product they sell.
      </li>
      <li>Within each group, the stores are listed in alphabetical order.</li>
    </ol>
    <p>
      Here are the categories, store names, missing letters, and explanations:
    </p>
    <Table className="mb-2">
      <thead>
        <tr>
          <th>Category</th>
          <th>Store</th>
          <th>Missing</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Furniture</td>
          <td>
            <Monospace>(C)RAT(E) (&amp;) BARRE(L)</Monospace>
          </td>
          <td>
            <Monospace>CE&amp;L</Monospace>
          </td>
          <td>A rat doing barre exercises</td>
        </tr>
        <tr>
          <td>Furniture</td>
          <td>
            <Monospace>(ET)HAN ALLEN</Monospace>
          </td>
          <td>
            <Monospace>ET</Monospace>
          </td>
          <td>Woody Allen dressed as Han Solo</td>
        </tr>
        <tr>
          <td>Furniture</td>
          <td>
            <Monospace>IKE(A)</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>Dwight D. Eisenhower (Ike)</td>
        </tr>
        <tr>
          <td>Furniture</td>
          <td>
            <Monospace>(P)OTTER(Y) BAR(N)</Monospace>
          </td>
          <td>
            <Monospace>PYN</Monospace>
          </td>
          <td>Sea otters sitting at a bar</td>
        </tr>
        <tr>
          <td>Clothing</td>
          <td>
            <Monospace>(FAMO)US FOOT(W)EAR</Monospace>
          </td>
          <td>
            <Monospace>FAMOW</Monospace>
          </td>
          <td>A USA-decorated ear on a foot</td>
        </tr>
        <tr>
          <td>Clothing</td>
          <td>
            <Monospace>GOO(D)WILL</Monospace>
          </td>
          <td>
            <Monospace>D</Monospace>
          </td>
          <td>
            A will for <i>World of Goo</i>'s Goo
          </td>
        </tr>
        <tr>
          <td>Clothing</td>
          <td>
            <Monospace>MARS(H)AL(LS)</Monospace>
          </td>
          <td>
            <Monospace>HLS</Monospace>
          </td>
          <td>“Weird Al” Yankovic on Mars</td>
        </tr>
        <tr>
          <td>Clothing</td>
          <td>
            <Monospace>STEIN(M)ART</Monospace>
          </td>
          <td>
            <Monospace>M</Monospace>
          </td>
          <td>Two famous art pieces on steins</td>
        </tr>
        <tr>
          <td>Groceries</td>
          <td>
            <Monospace>DOLL(AR) GENE(RAL)</Monospace>
          </td>
          <td>
            <Monospace>ARRAL</Monospace>
          </td>
          <td>A doll version of Gene Simmons</td>
        </tr>
        <tr>
          <td>Groceries</td>
          <td>
            <Monospace>(F)OOD (L)ION</Monospace>
          </td>
          <td>
            <Monospace>FL</Monospace>
          </td>
          <td>
            H+ ion held by an Ood from <i>Doctor Who</i>
          </td>
        </tr>
        <tr>
          <td>Groceries</td>
          <td>
            <Monospace>(GI)ANT EAGLE</Monospace>
          </td>
          <td>
            <Monospace>GI</Monospace>
          </td>
          <td>An ant's rear with an eagle's head</td>
        </tr>
        <tr>
          <td>Groceries</td>
          <td>
            <Monospace>(W)HOLE FOODS MARK(ET)</Monospace>
          </td>
          <td>
            <Monospace>WET</Monospace>
          </td>
          <td>Mark Hamill with holey food</td>
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>
            <Monospace>MOB(IL)</Monospace>
          </td>
          <td>
            <Monospace>IL</Monospace>
          </td>
          <td>An angry mob</td>
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>
            <Monospace>(P)HILL(IPS) 66</Monospace>
          </td>
          <td>
            <Monospace>PIPS</Monospace>
          </td>
          <td>The 66th hill in an array of hills</td>
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>
            <Monospace>SHEET(Z)</Monospace>
          </td>
          <td>
            <Monospace>Z</Monospace>
          </td>
          <td>A bedsheet</td>
        </tr>
        <tr>
          <td>Gasoline</td>
          <td>
            <Monospace>(S)HELL</Monospace>
          </td>
          <td>
            <Monospace>S</Monospace>
          </td>
          <td>Devils and hellfire</td>
        </tr>
        <tr>
          <td>Restaurant</td>
          <td>
            <Monospace>PANDA (EX)PRESS</Monospace>
          </td>
          <td>
            <Monospace>EX</Monospace>
          </td>
          <td>A Panda newspaper (press)</td>
        </tr>
        <tr>
          <td>Restaurant</td>
          <td>
            <Monospace>(S)TEAK &amp; (S)HAKE</Monospace>
          </td>
          <td>
            <Monospace>SS</Monospace>
          </td>
          <td>Teak (tree) with hake (fish)</td>
        </tr>
        <tr>
          <td>Restaurant</td>
          <td>
            <Monospace>(W)HAT(A)BURGER</Monospace>
          </td>
          <td>
            <Monospace>WA</Monospace>
          </td>
          <td>A hamburger with a hat for a patty</td>
        </tr>
        <tr>
          <td>Restaurant</td>
          <td>
            <Monospace>(WH)IT(E) CAST(LE)</Monospace>
          </td>
          <td>
            <Monospace>WHELE</Monospace>
          </td>
          <td>
            The cast of the movie <i>It</i>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      At this point we have not yet used the words preceding each group. These
      words are written in a font somewhat reminiscent of storefront signs, and
      the sets of words all vaguely allude to fancy clothing (dance, fads, swag,
      zip, &amp; heels), which might suggest that these could be interpreted as
      the signs of fancy clothing stores.
    </p>
    <p>
      Once we have identified the store names and “burnt out letters” for each
      image, we may notice that those letters all appear in the phrase (or
      “store name”) preceding that group. When we “burn out” those same letters
      in each group's “store name”, we are left with one or two letters:
    </p>

    <Table className="extraction">
      <thead>
        <tr>
          <th>Store Name</th>
          <th>Leftover</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>
              <Monospace>D</Monospace>
            </b>
            <Monospace>ANCE &amp; LET P</Monospace>
            <b>
              <Monospace>R</Monospace>
            </b>
            <Monospace>Y</Monospace>
          </td>
          <td>
            <Monospace>DR</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>W</Monospace>
            </b>
            <Monospace>ELSH MOM FAD</Monospace>
            <b>
              <Monospace>S</Monospace>
            </b>
          </td>
          <td>
            <Monospace>ES</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>S</Monospace>
            </b>
            <Monospace>WAG </Monospace>
            <b>
              <Monospace>C</Monospace>
            </b>
            <Monospace>ART REFILL</Monospace>
          </td>
          <td>
            <Monospace>SC</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <b>
              <Monospace>O</Monospace>
            </b>
            <Monospace>P</Monospace>
            <b>
              <Monospace>A</Monospace>
            </b>
            <Monospace>L ZIP SIS</Monospace>
          </td>
          <td>
            <Monospace>OA</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>WAX HEELS WES</Monospace>
            <b>
              <Monospace>T</Monospace>
            </b>
          </td>
          <td>
            <Monospace>T</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Taking these letters in order spells out the answer, which is something
      one might find at a fancy clothing store:{' '}
      <Answerize>DRESSCOAT</Answerize>.
    </p>
    <AuthorsNotes>
      <p>
        The inspiration for this puzzle came from trying to generate ideas while
        driving on a road trip, and noticing signs with burned out letters, which
        reminded me of the IV GUYS meme. While I briefly toyed with basing a
        puzzle around real images of stores with letters burned out, most of the
        other real examples I found were of obscure stores with crude
        alternatives. In the end, finding other real examples was unnecessary, as
        the mechanism used didn't rely on images of signs. If you'd like to try a
        few more, here are two images of consumer goods stores that were cut from
        an earlier version of the puzzle:
      </p>
      <p>
        <SheetableImage
          alt="Red arrow points to a container for a potted plant next to a desk.  The desk holds a computer and a coffee mug.  Skyscrapers are visible out the window"
          src={image0}
          title=""
          />
      </p>
      <p>
        Answer: <span className="font-mono spoiler">OFFICE (DE)POT</span>
      </p>
      <p>
        <SheetableImage
          alt="A large spherical cartoonish ghost, who is made 50% out of ice"
          src={image1}
          title=""
          />
      </p>
      <p>
        Answer: <span className="font-mono spoiler">HALF (PR)ICE BOO(KS)</span>
      </p>
    </AuthorsNotes>
    <Attributions>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>License</th>
            <th>Source</th>
            <th>Attribution and Modifications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cartoon rat</td>
            <td>Public Domain</td>
            <td>
              <a href="https://creazilla.com/nodes/19059-cartoon-rat-clipart">
                Creazilla
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/users/mohamed_hassan-5229782/">
                mohamed_hassan
              </a>{' '}
              on Pixabay. Modifications: Image was modified and added to a collage
            </td>
          </tr>
          <tr>
            <td>ballet barre</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original art</td>
            <td>Jim Hays</td>
          </tr>
          <tr>
            <td>Woody Allen</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/3.0/">
                Creative Commons Attribution-Share Alike 3.0 Unported license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Woody_Allen_Cannes_2016_2.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              Georges Biard. Modifications: Removed background, added to a collage
            </td>
          </tr>
          <tr>
            <td>Han Solo cosplay at San Diego Comic-Con 2015</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                Creative Commons Attribution-ShareAlike 2.0 Generic license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:SDCC_15_-_Han_Solo_%2819652877106%29.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/people/28277470@N05">
                William Tung
              </a>{' '}
              from USA. Modifications: Added to a collage
            </td>
          </tr>
          <tr>
            <td>Eisenhower</td>
            <td>Public Domain</td>
            <td>
              <a href="https://en.wikipedia.org/wiki/File:Dwight_D._Eisenhower,_official_photo_portrait,_May_29,_1959.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              White House, Eisenhower Presidential Library. Modifications: Cropped
            </td>
          </tr>
          <tr>
            <td>sea otter</td>
            <td>Public Domain</td>
            <td>
              <a href="https://creazilla.com/nodes/7814648-sea-otter-clipart">
                Creazilla
              </a>
            </td>
            <td>
              <a href="http://gahag.net/">gahag.net</a>.
              <div>Modifications: Modified and added to a collage</div>
            </td>
          </tr>
          <tr>
            <td>bar with stools</td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/247748/bar-with-stools">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/barnheartowl">
                barnheartowl
              </a>{' '}
              on OpenClipArt. Modifications: Image was modified and added to a
              collage
            </td>
          </tr>
          <tr>
            <td>human foot</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/4.0/">
                Creative Commons Attribution 4.0 International license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Twemoji12_1f9b6-1f3fe.svg">
                Wikimedia
              </a>
            </td>
            <td>Twitter. Modifications: Added to a collage</td>
          </tr>
          <tr>
            <td>human ear</td>
            <td>
              <a href="https://www.apache.org/licenses/LICENSE-2.0">
                APACHE LICENSE, VERSION 2.0
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Emoji_u1f442_1f3fe.svg">
                Wikimedia
              </a>
            </td>
            <td>Google. Modifications: Added to a collage</td>
          </tr>
          <tr>
            <td>
              <i>World of Goo</i>
            </td>
            <td>
              <a href="https://creativecommons.org/licenses/by/3.0/">
                Creative Commons Attribution-Share Alike 3.0 Unported
              </a>
              ,{' '}
              <a href="https://creativecommons.org/licenses/by/2.5/">
                Creative Commons Attribution 2.5 Generic
              </a>
              ,{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">
                Creative Commons Attribution 2.0 Generic
              </a>
              ,{' '}
              <a href="https://creativecommons.org/licenses/by/1.0/">
                Creative Commons Attribution 1.0 Generic
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:World_of_Goo_Gameplay,_step_1.png">
                Wikimedia
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/User:Nclm">Nicosmos</a>{' '}
              on Wikimedia. Modifications: Added to a collage
            </td>
          </tr>
          <tr>
            <td>scroll</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/vectors/scroll-parchment-paper-note-bill-35683/">
                Pixabay
              </a>
            </td>
            <td>Clker-Free-Vector-Images. Modifications: Added to a collage</td>
          </tr>
          <tr>
            <td>Weird Al</td>
            <td>
              <a href="https://creativecommons.org/licenses/by/2.0/">
                Creative Commons Attribution 2.0 Generic license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Weird_Al_Yanovic_at_the_Apollo_%2839171440710%29.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/photos/slgc/">slgckgc</a> on Flickr.
              Modifications: Removed background and added to a collage
            </td>
          </tr>
          <tr>
            <td>Mars rover</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://www.stockvault.net/photo/208838/mars-rover">
                Stockvault
              </a>
            </td>
            <td>Pixabay. Modifications: Added to a collage</td>
          </tr>
          <tr>
            <td>beer stein</td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/14854/beer-mug">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/nicubunu">nicubunu</a> on
              OpenClipArt. Modifications: Image was modified and added to a
              collage
            </td>
          </tr>
          <tr>
            <td><i>Girl with Pearl Earring</i></td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/309174/girl-with-pearl-earring-by-gimpworkshop-line-art">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/GDJ">GDJ</a> on OpenClipart.
              Modifications: Image was modified and added to a collage
            </td>
          </tr>
          <tr>
            <td><i>Mona Lisa</i></td>
            <td>
              <a href="https://creativecommons.org/licenses/by/3.0/">
                Creative Commons Attribution 3.0 Unported license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Noun_project_-_Mona_Lisa_-_in_frame.svg">
                Wikimedia
              </a>
            </td>
            <td>
              Studio Fibonacci. Modifications: Image was modified and added to a
              collage
            </td>
          </tr>
          <tr>
            <td>
              Kiss doll
            </td>
            <td>Fair Use</td>
            <td>
              <a href="https://funko.com/pop-the-demon/28505.html">Funko</a>
            </td>
            <td>Product photo by Funko</td>
          </tr>
          <tr>
            <td>Ood</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>Original art</td>
            <td>Jim Hays</td>
          </tr>
          <tr>
            <td>ant</td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/300916/ant-2">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/Firkin">Firkin</a>.
              Modifications: Flipped, cropped, and added to a collage
            </td>
          </tr>
          <tr>
            <td>eagle</td>
            <td>Public Domain</td>
            <td>
              <a href="https://creazilla.com/nodes/19902-flying-cartoon-eagle-clipart">
                Creazilla
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/users/clker-free-vector-images-3736/">
                Clker-Free-Vector-Images
              </a>{' '}
              on Pixabay. Modifications: Image was cropped and added to a collage
            </td>
          </tr>
          <tr>
            <td>Mark Hamill</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                Creative Commons Attribution-ShareAlike 2.0 Generic license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Mark_Hamill_%2848419236062%29_Cropped.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/people/22007612@N05">
                Gage Skidmore
              </a>
              . Modifications: Added to a collage
            </td>
          </tr>
          <tr>
            <td>Swiss cheese</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/vectors/swiss-cheese-swiss-cheese-food-575542">
                Pixabay
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/users/openclipart-vectors-30363/">
                OpenClipart-Vectors
              </a>
              . Modifications: Image was rotated and added to a collage
            </td>
          </tr>
          <tr>
            <td>donut</td>
            <td>Public Domain</td>
            <td>
              <a href="https://freesvg.org/bagel-with-cream">FreeSVG</a>
            </td>
            <td>
              <a href="https://freesvg.org/by/OpenClipart">OpenClipart</a> on
              FreeSVG. Modifications: Image was rotated and added to a collage
            </td>
          </tr>
          <tr>
            <td>Froot Loops</td>
            <td>
              <a href="https://www.pxfuel.com/terms-of-use">
                Pxfuel Terms of Use
              </a>
            </td>
            <td>
              <a href="https://www.pxfuel.com/en/free-photo-ekkyf">Pxfuel</a>
            </td>
            <td>
              Pxfuel. Modifications: Image was rotated and added to a collage
            </td>
          </tr>
          <tr>
            <td>
              <i>The Mob Assembled to Pull Down the Bawdy House Kept by Peter Wood in the Strand</i>
            </td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://www.lookandlearn.com/history-images/YYA0014983/The-Mob-Assembled-to-Pull-Down-the-Bawdy-House-kept-by-Peter-Wood-in-the-Strand">
                LookAndLearn
              </a>
            </td>
            <td>Yale Center for British Art. Modifications: Image was cropped</td>
          </tr>
          <tr>
            <td>landscape with hills</td>
            <td>Public Domain</td>
            <td>
              <a href="https://freesvg.org/robot-and-backdrop">FreeSVG</a>
            </td>
            <td>
              <a href="https://freesvg.org/by/OpenClipart">OpenClipart</a> on
              FreeSVG. Modifications: Image was modified
            </td>
          </tr>
          <tr>
            <td>bed</td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/244911/brown-bed-with-brown-blanket">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/barnheartowl">
                barnheartowl
              </a>{' '}
              on OpenClipArt. Modifications: Image was modified
            </td>
          </tr>
          <tr>
            <td>fire</td>
            <td>
              <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                CC0
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/vectors/fire-flames-hell-burn-bright-307336/">
                Pixabay
              </a>
            </td>
            <td>
              <a href="https://pixabay.com/users/clker-free-vector-images-3736/">
                Clker-Free-Vector-Images
              </a>{' '}
              on Pixabay. Modifications: Image was added to a collage
            </td>
          </tr>
          <tr>
            <td>devil</td>
            <td>
              <a href="https://imgbin.com/txt_terms">Imgbin Personal Use</a>
            </td>
            <td>
              <a href="https://imgbin.com/png/JZPhLfGf/funny-halloween-cartoon-red-devil-png">
                Imgbin
              </a>
            </td>
            <td>
              <a href="https://imgbin.com/user/harveyxxx">harveyxxx</a> on imgbin.
              Modifications: Image was added to a collage
            </td>
          </tr>
          <tr>
            <td>panda</td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/88573/panda02">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/shu">shu</a> on OpenClipart.
              Modifications: Image was modified
            </td>
          </tr>
          <tr>
            <td>newspaper</td>
            <td>Public Domain</td>
            <td>
              <a href="https://freesvg.org/vector-illustration-of-newspaper-icon">
                FreeSVG
              </a>
            </td>
            <td>
              <a href="https://freesvg.org/by/OpenClipart">OpenClipart</a> on
              FreeSVG. Modifications: Image was modified
            </td>
          </tr>
          <tr>
            <td>teak</td>
            <td>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                Creative Commons Attribution-ShareAlike 4.0 International license
              </a>
            </td>
            <td>
              <a href="https://en.wikipedia.org/wiki/Teak#/media/File:Nilambur_Teak_Plantation_0666.jpg">
                Wikipedia
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/User:Vengolis">
                Vengolis
              </a>{' '}
              on Wikimedia. Modifications: Image was added to a collage
            </td>
          </tr>
          <tr>
            <td>
              Silver hake, <i>Merluccius bilinearis</i>, from plate 95 of{' '}
              <i>Oceanic Ichthyology</i>
            </td>
            <td>Public Domain</td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Merluccius_bilinearis.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              G. Brown Goode and Tarleton H. Bean, published 1896. Modifications:
              Image was rotated and added to a collage
            </td>
          </tr>
          <tr>
            <td>burger</td>
            <td>Public Domain</td>
            <td>
              <a href="https://freesvg.org/hamburger-drawing">FreeSVG</a>
            </td>
            <td>
              <a href="https://freesvg.org/by/OpenClipart">OpenClipart</a> on
              FreeSVG. Modifications: Image was added to a collage, components
              were rearranged
            </td>
          </tr>
          <tr>
            <td>trilby hat</td>
            <td>Public Domain</td>
            <td>
              <a href="https://openclipart.org/detail/167027/trilby-hat">
                OpenClipart
              </a>
            </td>
            <td>
              <a href="https://openclipart.org/artist/PomPrint">PomPrint</a> on
              OpenClipart. Modifications: Image was added to a collage
            </td>
          </tr>
          <tr>
            <td>
              cast of <i>It</i>
            </td>
            <td>
              <a href="https://creativecommons.org/licenses/by/2.0/">
                Creative Commons Attribution 2.0 Generic license
              </a>
            </td>
            <td>
              <a href="https://commons.wikimedia.org/wiki/File:Partial_cast_of_It_%282017%29_at_PCCC2018.jpg">
                Wikimedia
              </a>
            </td>
            <td>
              <a href="https://www.flickr.com/people/27238804@N03">
                Super Festivals
              </a>{' '}
              on Flickr. Modifications: Image was cropped
            </td>
          </tr>
          <tr>
            <td>potted plant</td>
            <td>Public Domain</td>
            <td>
              <a href="https://creazilla.com/nodes/63919-potted-plant-clipart">
                Creazilla
              </a>
            </td>
            <td>
              PublicDomainVectors.org. Modifications: Image was added to a collage
            </td>
          </tr>
          <tr>
            <td>Office</td>
            <td>Public Domain</td>
            <td>
              <a href="https://publicdomainvectors.org/en/free-clipart/Office-workplace-interior/86898.html">
                PublicDomainVectors
              </a>
            </td>
            <td>
              PublicDomainVectors.org. Modifications: Image was added to a collage
            </td>
          </tr>
          <tr>
            <td>boo</td>
            <td>Public Domain</td>
            <td>
              <a href="https://freesvg.org/dodom01-king-boo">FreeSVG</a>
            </td>
            <td>
              <a href="https://freesvg.org/by/OpenClipart">OpenClipart</a> on
              FreeSVG. Modifications: Image was modified
            </td>
          </tr>
        </tbody>
      </Table>
    </Attributions>
    <style jsx global>{`
      .extraction td:nth-child(2) {
        text-align: center;
      }
      `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
