import { FC } from 'react';

import Appendix from 'components/appendix';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/the-linq/0.png';
import image1 from 'assets/solutions/the-linq/1.png';
import image2 from 'assets/solutions/the-linq/2.png';

const SLUG = 'the-linq';
const ANSWER = `EGRET`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      As hinted by the numerous references to birds and certain game mechanics,
      we discover that we are working with the{' '}
      <a href="https://boardgamegeek.com/boardgame/266192/wingspan">Wingspan</a>{' '}
      board game on the standard player mast. Given the clues, as well as a
      database of Wingspan cards (we used{' '}
      <a href="https://navarog.github.io/wingsearch/">
        https://navarog.github.io/wingsearch/
      </a>
      ), we must identify which 15 birds are present, and where.
    </p>
    <p>
      <SheetableImage alt="" src={image0} title="" />
    </p>
    <p>A full solve path is in the appendix.</p>
    <p>Our final assignment is:</p>
    <Table className="text-sm sm:text-base">
      <tbody>
        <tr>
          <td>
            <Monospace>CASSIN'S FINCH</Monospace>
          </td>
          <td>
            <Monospace>CAROLINA WREN</Monospace>
          </td>
          <td>
            <Monospace>HOUSE FINCH</Monospace>
          </td>
          <td>
            <Monospace>HERMIT THRUSH</Monospace>
          </td>
          <td>
            <Monospace>CERULEAN WARBLER</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>CHESTNUT-COLLARED LONGSPUR</Monospace>
          </td>
          <td>
            <Monospace>HORNED LARK</Monospace>
          </td>
          <td>
            <Monospace>CALIFORNIA QUAIL</Monospace>
          </td>
          <td>
            <Monospace>SWAINSON'S HAWK</Monospace>
          </td>
          <td>
            <Monospace>SAY'S PHOEBE</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>BRANT</Monospace>
          </td>
          <td>
            <Monospace>VIOLET-GREEN SWALLOW</Monospace>
          </td>
          <td>
            <Monospace>KILLDEER</Monospace>
          </td>
          <td>
            <Monospace>AMERICAN BITTERN</Monospace>
          </td>
          <td>
            <Monospace>NORTHERN SHOVELER</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      As stated in the flavortext, we use a different extraction method for each
      row (habitat), clued by the text on the player mat. In each row, we index
      into the bird's name.
    </p>
    <ol>
      <li>From "Gain Food", we use the bird's food cost.</li>
      <li>From "Lay Eggs", we use the bird's egg nest capacity.</li>
      <li>
        From "Draw Bird Cards", we use the bird's draw card amount from its
        power.
      </li>
    </ol>
    <p>Indices:</p>
    <Table id="indices">
      <tbody>
        <tr>
          <td>2</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>2</td>
        </tr>
        <tr>
          <td>4</td>
          <td>4</td>
          <td>6</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
    <p>Extracting:</p>
    <Table id="extracting">
      <tbody>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>C</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>R</Monospace>
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
            <Monospace>N</Monospace>
          </td>
          <td>
            <Monospace>O</Monospace>
          </td>
          <td>
            <Monospace>W</Monospace>
          </td>
          <td>
            <Monospace>Y</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
          <td>
            <Monospace>I</Monospace>
          </td>
          <td>
            <Monospace>A</Monospace>
          </td>
          <td>
            <Monospace>N</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      Reading each row, we get the cluephrase{' '}
      <Monospace>A CORE SNOWY AVIAN</Monospace>. The only "snowy" bird from the
      core set is the Snowy Egret, giving{' '}
      <b>
        <Monospace>EGRET</Monospace>
      </b>
      {' '}as the final answer.
    </p>
    <Appendix>
      <p>
        We are trying to find 15 birds to place on the player mat. As in the
        game, we follow habitat rules: the top row is forest; the middle row is
        grassland; and the bottom row is wetland. Only birds that can be placed
        in wetlands can be placed in the bottom row. All instructions are
        exact&mdash;that is, if "one bird" has an attribute, then it is true for exactly
        one bird.{' '}
      </p>
      <p>
        First, we note that (<b>Clue 1</b>) we only need to look at{' '}
        <b>base set</b> birds, including Swift-Start (which is not really an
        expansion, since it's included in newer editions). <b>Clue 3</b> ensures
        that this is unambiguous, as Swift-Start cards have colored corners.
      </p>
      <ul>
        <li>
          <b>Clue 1</b>: No birds belong to an expansion set
        </li>
        <li>
          <b>Clue 3</b>: Only the bird with wild food cost has a colored corner
        </li>
      </ul>
      <p>
        <SheetableImage alt="" src={image1} title="" />
      </p>
      <p>
        <b>Clue 3</b> also tells us that there's only one swiftstart bird, and
        it has wild food cost. That narrows it down to 3 possible birds: Brant,
        Black-Chinned Hummingbird, Canvasback. We'll come back to this later.
      </p>
      <p>
        From now on, we assume we only look in the core set, i.e., "there are 6
        hawks" means "there are 6 hawks in the core set, not including
        swiftstart." There's a filter on the dataset page linked above for
        filtering out expansions.
      </p>
      <p>
        <b>Clue 2</b>: The hawk's wingspan is a multiple of 5. There are 6
        hawks, and the only one with a wingspan of multiple 5 is the{' '}
        <b>Swainson's Hawk</b>. It nests in a platform and can only live in
        fields, so by <b>clue 7</b>, it must be in row 2, column 4. (Note that
        while the Broad-Winged Hawk in swiftstart also fulfills this, it's
        disqualified by <b>clue 3</b>.)
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
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
        <b>Clue 6</b>: The <b>American Bittern</b> is named. It nests in a
        platform (<b>clue 7</b>) and can only live in wetlands, so it must be in
        row 3, column 4.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>American Bittern</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 12</b>: The finches are left of the <b>Cerulean Warbler</b>. We
        also now know there's at least two finches, since clues are explicit
        ("the finches" implies exactly plural finches). There are three possible
        finches: House Finch, Cassin's Finch, American Goldfinch. We'll come
        back to the finches later.
      </p>
      <p>
        The warbler can only live in the forest (first row). It also has a white
        power, so it can't be in columns 3 or 4 (<b>clue 11</b>). It nests in a
        bowl, so it can't be in the second column (<b>clue 16</b>). Since
        something is to the left of it, it can't be in column 1. It must be in
        row 1, column 5.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>American Bittern</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 13</b>: A Carolinian bird is named, which is the Carolina Wren
        or Carolina Chickadee, both of which must live in the forest. However,
        the bird below it has the only pink power, and since <b>clue 21</b>{' '}
        states that the second column must have one of every color power (in the
        core set, brown + pink + white), this Carolinian bird must also be in
        the second column. We'll come back to the Carolinian bird as well.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>Carolina Wren/​Chickadee</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>American Bittern</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 15</b>: A two-colored bird is immediately between the only two
        birds with single word names. There are only four two-colored birds:
        Blue-Grey Gnatcatcher, Red-Winged Blackbird, Yellow-Headed Blackbird,
        and Violet-Green Swallow. The gnatcatcher can only live in the forest
        (first row). There is no space to put two single-word-name birds and
        have the gnatcatcher between them anymore ("immediately between" means
        both the other two birds are adjacent to it). Both the blackbirds nest
        in bowls and so can't be placed in column 2 (<b>clue 16</b>), and they
        can't have two adjacent single-word-name birds in any other column.
        Thus, we must have the <b>Violet-Green Swallow</b> in row 3, column 2.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>Carolina Wren/​Chickadee</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Single word</td>
            <td>Violet-Green Swallow</td>
            <td>Single word</td>
            <td>American Bittern</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
      <p>
        The Violet-Green Swallow has a brown power. By <b>clue 21</b>, that
        means the Carolinian bird must have a white power, so it is the{' '}
        <b>Carolina Wren</b> in row 1, column 2.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>Carolina Wren</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Single word</td>
            <td>Violet-Green Swallow</td>
            <td>Single word</td>
            <td>American Bittern</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 4</b>: The American Bittern is worth 7 victory points. Others
        are the Great Egret (eats fish), Greater Roadrunner (wild food cost),{' '}
        <b>Hermit Thrush</b>, Hooded Warbler (only lives in forest but has a
        white power, can't fit in columns 3 or 4), <b>Northern Shoveler</b>,
        Purple Gallinule (wild food cost). The shoveler can only live in
        wetlands and does not have a single word name, so it goes in row 3,
        column 5. We'll come back to place the Hermit Thrush later. Note that
        the Hermit Thrush is the only bird with a <b>star nest preference</b>.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Hermit Thrush?</td>
            <td>Carolina Wren</td>
            <td>Hermit Thrush?</td>
            <td>Hermit Thrush?</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Single word</td>
            <td>Violet-Green Swallow</td>
            <td>Single word</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 5</b>: We gain victory points from the photographer trait when
        we have 4 or more birds satisfy the photographer trait. Cerulean Warbler
        and Violet-Green Swallow are two, and do not fulfill <b>clue 19</b>.
        ("Named after a color and a body part" means the bird satisfies the
        anatomist/photographer traits. There's a filter on the github for this).
      </p>
      <p>
        Thus, there is exactly 1 more bird that can fulfill photographer, and it
        must fulfill <b>clue 19</b>.
      </p>
      <p>
        <b>Clue 3</b> (again): Then, we remember that one of our possible
        swiftstart birds from <b>clue 3</b>, the Black-Chinned Hummingbird,
        fulfills anatomist/photographer. However, the only other bird that
        matches its power is the Baltimore Oriole, which has star nest
        preference and is disqualified by the Hermit Thrush. Thus, we disqualify
        the Black-Chinned Hummingbird.
      </p>
      <p>
        Similarly, from <b>clue 3</b>, the Canvasback also has a star nest
        preference and is disqualified. Thus, we must have the <b>Brant</b>.
      </p>
      <p>
        It can only live in wetlands, has a white power, so it must be row 3,
        column 1 (not column 3). This is the only bird with a{' '}
        <b>wild food cost</b>.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Hermit Thrush?</td>
            <td>Carolina Wren</td>
            <td>Hermit Thrush?</td>
            <td>Hermit Thrush?</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Brant</td>
            <td>Violet-Green Swallow</td>
            <td>Single word</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 15</b> (again): The birds with single word names are Anhinga
        (eats fish), Bobolink (can't live in wetlands), Bushtit (star nest
        preference by <b>clue 14</b> and Hermit Thrush), Dickcissel (can't live
        in wetlands), <b>Killdeer</b>, Mallard (worth 0 victory points by{' '}
        <b>clue 22</b>), Osprey (eats fish). Thus, the Killdeer is row 3, column
        3.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Hermit Thrush?</td>
            <td>Carolina Wren</td>
            <td>Hermit Thrush?</td>
            <td>Hermit Thrush?</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Brant</td>
            <td>Violet-Green Swallow</td>
            <td>Killdeer</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 5</b> (again): Also, since the other photographer bird must be
        anatomist/photographer, the American Goldfinch (only photographer) from{' '}
        <b>clue 12</b> is disqualified.
      </p>
      <p>
        Thus, we must have Cassin's Finch and House Finch. Cassin's Finch must
        be in row 1 (can only live in forest) and column 1 since it has a white
        power (<b>clue 11</b>). We're not sure where the House Finch is yet.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Cassin's Finch</td>
            <td>Carolina Wren</td>
            <td>Hermit Thrush?</td>
            <td>Hermit Thrush?</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>&nbsp;</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Brant</td>
            <td>Violet-Green Swallow</td>
            <td>Killdeer</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 19</b> (again): We still don't have an anatomist/photographer
        bird yet, and the third row is full, so it must go in the second row and
        have the same power as one of the first row birds.
      </p>
      <p>
        There are 12 birds that can live in the fields and fulfills
        anatomist/photographer.{' '}
      </p>
      <p>
        <SheetableImage alt="" src={image2} title="" />
      </p>
      <p>
        The pink power ones are disqualified since they clearly can't match the
        power of the bird above them, as is the Blue-Winged Warbler (no power).
      </p>
      <p>
        None of the brown power birds match the power of the white power
        Cassin's Finch or Cerulean Warbler, so if a brown power bird is present,
        it must go in row 2, column 3. If so, it must match the power of the
        House Finch, because the House Finch would be fixed in row 1, column 3.
        None of them do so.
      </p>
      <p>
        Thus, it must be one of the white power birds here that are present. The
        Ash-Throated Flycatcher clearly doesn't match Cassin's Finch or Cerulean
        Warbler, so we must have the <b>Chestnut-Collared Longspur</b>, with the
        power "Draw 2 new bonus cards and keep 1", the same as the Cerulean
        Warbler and Cassin's Finch.
      </p>
      <p>
        <b>Clue 10</b>: Disqualified birds with alliterative scientific names
        are Anhinga (eats fish), Black-Crowned Night-Heron (eats fish),
        Yellow-Headed Blackbird (can't live in fields/middle row), Blue Jay
        (can't live in fields), Pied-Billed Grebe (eats fish), Northern Cardinal
        (can't live in fields), Downy Woodpecker (can't live in fields),
        Chihuahuan Raven (platform nest), Common Grackle (can't be common),
        Common Merganser (can't be common), Common Raven (can't be common),
        Eastern Kingbird (pink power but bowl nest so can't be in column 2).
      </p>
      <p>
        The possible ones are California Quail, Say's Phoebe, Eastern Bluebird,
        exactly two of which are present.
      </p>
      <p>
        We now know that the Chestnut-Collared Longspur, and two of (California
        Quail, Eastern Bluebird, Say's Phoebe) must be in the second row. Only
        the California Quail has a brown power, so it must be in row 2, column
        3, forcing House Finch to row 1. Since <b>clue 9</b> states that
        "finches are placed as closely as possible," the House Finch must be in
        column 3, and the Hermit Thrush in column 4. We'll be back to decide on
        Eastern Bluebird vs Say's Phoebe later.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Cassin's Finch</td>
            <td>Carolina Wren</td>
            <td>House Finch</td>
            <td>Hermit Thrush</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Pink power</td>
            <td>California Quail</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Brant</td>
            <td>Violet-Green Swallow</td>
            <td>Killdeer</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Now let's look at the pink power bird again. There are only 7 pink power
        birds that can live in the field, and only 4 that can't also live in the
        wetlands (<b>clue 20</b>). Of those, Black-Billed Magpie and
        Brown-Headed Cowbird are disqualified since they fulfill photographer (
        <b>clue 5</b>), and Eastern Kingbird is disqualified since it nests in
        bowls but would need to go in column 2 (<b>clue 16</b>). Thus, we must
        have the <b>Horned Lark</b> in row 2, column 2.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Cassin's Finch</td>
            <td>Carolina Wren</td>
            <td>House Finch</td>
            <td>Hermit Thrush</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>Horned Lark</td>
            <td>California Quail</td>
            <td>Swainson's Hawk</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Brant</td>
            <td>Violet-Green Swallow</td>
            <td>Killdeer</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <b>Clue 18</b>: No birds except the California Quail on the board have
        the power to lay eggs. Thus, between Eastern Bluebird and Say's Phoebe,
        we must have the <b>Say's Phoebe</b> to lay eggs.{' '}
      </p>
      <p>
        <b>Clue 8</b>: The only two birds that fulfill this condition are the
        White-Crowned Sparrow and California Quail. Clearly, only the quail is
        on the board. Since it's left of an egg laying bird, the Say's Phoebe
        must be to the right of it, in row 2 column 5, which forces the
        Chestnut-Collared Longspur to be in row 2 column 1.
      </p>
      <Table className="text-sm sm:text-base">
        <tbody>
          <tr>
            <td>Cassin's Finch</td>
            <td>Carolina Wren</td>
            <td>House Finch</td>
            <td>Hermit Thrush</td>
            <td>Cerulean Warbler</td>
          </tr>
          <tr>
            <td>Chestnut-Collared Longspur</td>
            <td>Horned Lark</td>
            <td>California Quail</td>
            <td>Swainson's Hawk</td>
            <td>Say's Phoebe</td>
          </tr>
          <tr>
            <td>Brant</td>
            <td>Violet-Green Swallow</td>
            <td>Killdeer</td>
            <td>American Bittern</td>
            <td>Northern Shoveler</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
        #indices td,
        #extracting td {
          text-align: center
        }
      `}</style>
    </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
