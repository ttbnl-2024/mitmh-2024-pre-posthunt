import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'io';
const ANSWER = `INTERNET PROVIDER`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      We're given a schematic and 4 pieces of code. The schematic has 5 logic
      gates, 3 network ports, and 3 circles. The lines (or traces) all have
      unique colors. Two of the colored traces on the schematic are pre-labeled:
      Brown is "I" and Red is "O". (This is I and O, not 1 and 0). This suggests
      what we're doing in this puzzle is labeling the rest of the colors with
      the appropriate letters.
    </p>
    <h3>Colors</h3>
    <p>
      Each source file is by "roy g biv." This is a reference to the colors of
      the rainbow, which clues us into seeing colors in these files. Indeed we
      find 3-byte sequences throughout the file, and specifically these are in
      lowercase just like the author's name (defying convention). Reassigning
      these hex values to colors allows us to match up lines of code to the
      schematic and results.
    </p>
    <h3>File Extensions</h3>
    <p>
      We also notice, conspicuously, that the file name extension of the source
      file is missing. Each file is written in a different programming language,
      created on the date in the header comment. Each language also uses a
      2-letter file extension:
    </p>
    <ol>
      <li>Python (PY)</li>
      <li>Ruby (RB)</li>
      <li>Go (GO)</li>
    </ol>
    <p>
      The source code files are numbered 1&ndash;3 and are text on a black background.
      This corresponds to the numbered circles in the schematic. Since these are
      black circles (dots) and have an arrow indicating direction, we make the
      leap to assign the incoming color to the first letter, and the outgoing
      color to the second letter. This is confirmed by the red trace being
      assigned O again.
    </p>
    <h3>Ports</h3>
    <p>
      The first part of each file, using simplified code, opens sockets to
      different ports. We recognize that the ports used in these tests: 21, 25,
      and 80 are all well-known ports assigned to the protocols FTP, SMTP, and
      HTTP respectively. The operation is to send a color to the indicated port
      (this selects which RJ port on the schematic is being referenced).
    </p>
    <p>
      Looking at the comments, we see the acrostic RFC, which, in network lingo,
      refers to "Requests for Comments", which are the published specifications
      of these protocols. In case we miss the acrostic, the third line is
      explicitly "requesting a comment".
    </p>
    <p>
      Looking up the RFC numbers for each protocol, we get a few possibilities,
      but the date on the first comment disambiguates which RFC is correct (and
      confirms that this is the right thing to be looking at). Additionally,
      that RFC number is close to the "expected" value being asserted. We take
      the difference, and use "code page 38" (ASCII) to assign a letter.
    </p>
    <Table>
      <thead>
        <tr>
          <th>
            <i>WKP</i>
          </th>
          <th>
            <i>Protocol</i>
          </th>
          <th>Asserted</th>
          <th>
            <i>RFC</i>
          </th>
          <th>Date</th>
          <th>Difference</th>
          <th>Color</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>21</td>
          <td>FTP</td>
          <td>
            <b>179</b>
          </td>
          <td>114</td>
          <td>April 1971</td>
          <td>65</td>
          <td className="bg-[#3cb44b]">
            <Clue>3cb44b</Clue>
          </td>
          <td className="text-center">
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>25</td>
          <td>SMTP</td>
          <td>
            <b>861</b>
          </td>
          <td>788</td>
          <td>November 1981</td>
          <td>73</td>
          <td className="bg-[#9a6324]">
            <Clue>9a6324</Clue>
          </td>
          <td className="text-center">
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>80</td>
          <td>HTTP</td>
          <td>
            <b>2029</b>
          </td>
          <td>1945</td>
          <td>May 1996</td>
          <td>84</td>
          <td className="bg-[#fabed4]">
            <Clue>fabed4</Clue>
          </td>
          <td className="text-center">
            <Clue>T</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Logic Gates</h3>
    <p>
      The remaining pieces of the code have a similar structure, but instead
      we're writing values "to" the colored traces. These colors are the inputs
      to the logic gates in the schematic. Rather than page 38, we're using page
      37:{' '}
      <a href="https://www.ibm.com/docs/fr/iis/11.7?topic=tables-ascii-ebcdic">
        IBM EBCDIC
      </a>{' '}
      (non-ASCII). The "wrong value" also includes the bytes 0xEBCD1C. In total,
      4 bytes are sent into each gate, which translate to a 4-letter word. The
      4-letter word is a clue to another word that contains the gate between 3
      letters. As a confirmer, OR gates are compared to wrong values that are 5
      bytes (letters) long, while AND gates are compared to wrong values that
      are 6 bytes (letters) long.
    </p>
    <p>
      For example, the snippet in test1 sends 0xD3D6 (LO) and 0xE5C5 (VE) to the
      gate with input colors 0x3cb44b (green) and 0x4363d8 (blue), and output
      color 0x469990 (teal), which is the upper left OR gate. The answer to this
      gate is <Clue>AD(OR)E</Clue>, confirming our earlier letter assignment of
      A to green, and additionally assigning D to blue and E to teal.
    </p>
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Bytes</th>
          <th>Word</th>
          <th>Gate Word</th>
          <th>Color 1</th>
          <th>Color 2</th>
          <th>Color 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test1</td>
          <td>0xD3D6, 0xE5C5</td>
          <td>
            <Clue>LOVE</Clue>
          </td>
          <td>
            <Clue>AD(OR)E</Clue>
          </td>
          <td>3cb44b (A)</td>
          <td>4363d8 (D)</td>
          <td>469990 (E)</td>
        </tr>
        <tr>
          <td rowSpan={2}>test2</td>
          <td>0xC7C9, 0xD3C4</td>
          <td>
            <Clue>GILD</Clue>
          </td>
          <td>
            <Clue>AD(OR)N</Clue>
          </td>
          <td>3cb44b (A)</td>
          <td>4363d8 (D)</td>
          <td>dbceff (N)</td>
        </tr>
        <tr>
          <td>0xE6C9, 0xD5C5</td>
          <td>
            <Clue>WINE</Clue>
          </td>
          <td>
            <Clue>BR(AND)Y</Clue>
          </td>
          <td>42d4f4 (B)</td>
          <td>f58231 (R)</td>
          <td>fffac8 (Y)</td>
        </tr>
        <tr>
          <td rowSpan={2}>test3</td>
          <td>0xE2, 0xC9, 0xE9, 0xC5</td>
          <td>
            <Clue>SIZE</Clue>
          </td>
          <td>
            <Clue>GR(AND)E</Clue>
          </td>
          <td>800000 (G)</td>
          <td>f58231 (R)</td>
          <td>469990 (E)</td>
        </tr>
        <tr>
          <td>0xC2, 0xD6, 0xD5, 0xC5</td>
          <td>
            <Clue>BONE</Clue>
          </td>
          <td>
            <Clue>IV(OR)Y</Clue>
          </td>
          <td>9a6324 (I)</td>
          <td>ffe119 (V)</td>
          <td>fffac8 (Y)</td>
        </tr>
      </tbody>
    </Table>
    <br />
    <h3>Extraction</h3>
    <p>
      Putting together all the pieces, we get this final table of colors. As a
      final confirmer, the letters are in alphabetical order by hex value:
    </p>
    <Table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Hex</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>green</td>
          <td className="bg-[#3cb44b]">
            <Clue>3cb44b</Clue>
          </td>
          <td className="text-center">
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>cyan</td>
          <td className="bg-[#42d4f4]">
            <Clue>42d4f4</Clue>
          </td>
          <td className="text-center">
            <Clue>B</Clue>
          </td>
        </tr>
        <tr>
          <td>blue</td>
          <td className="bg-[#4363d8]">
            <Clue>4363d8</Clue>
          </td>
          <td className="text-center">
            <Clue>D</Clue>
          </td>
        </tr>
        <tr>
          <td>teal</td>
          <td className="bg-[#469990]">
            <Clue>469990</Clue>
          </td>
          <td className="text-center">
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>maroon</td>
          <td className="bg-[#800000]">
            <Clue>800000</Clue>
          </td>
          <td className="text-center">
            <Clue>G</Clue>
          </td>
        </tr>
        <tr>
          <td>brown</td>
          <td className="bg-[#9a6324]">
            <Clue>9a6324</Clue>
          </td>
          <td className="text-center">
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>lavender</td>
          <td className="bg-[#dbceff]">
            <Clue>dbceff</Clue>
          </td>
          <td className="text-center">
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>red</td>
          <td className="bg-[#e6194b]">
            <Clue>e6194b</Clue>
          </td>
          <td className="text-center">
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>magenta</td>
          <td className="bg-[#f032e6]">
            <Clue>f032e6</Clue>
          </td>
          <td className="text-center">
            <Clue>P</Clue>
          </td>
        </tr>
        <tr>
          <td>orange</td>
          <td className="bg-[#f58231]">
            <Clue>f58231</Clue>
          </td>
          <td className="text-center">
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>pink</td>
          <td className="bg-[#fabed4]">
            <Clue>fabed4</Clue>
          </td>
          <td className="text-center">
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>yellow</td>
          <td className="bg-[#ffe119]">
            <Clue>ffe119</Clue>
          </td>
          <td className="text-center">
            <Clue>V</Clue>
          </td>
        </tr>
        <tr>
          <td>light yellow</td>
          <td className="bg-[#fffac8]">
            <Clue>fffac8</Clue>
          </td>
          <td className="text-center">
            <Clue>Y</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      The last file is a Kotlin file, with the appropriate date and by the same
      author. Here, we're using the discriminator array to get the desired
      value. We're given 2 lines that perform an "exorbitant hash", which clues
      performing the XOR operation. The first line in "inputs" gives 136 / 0x88
      / 10001000, which is suspicious; more suspicious is the "outputs" value of
      32 / 0x20 / 00100000.
    </p>
    <p>
      Inspecting these lines, we see that the parameters to the hash function
      are the RGB values, the ASCII value and this new discriminator value. How
      do we choose which index to use in the discriminator array? The array is
      26 values long, and we used the 9th value (0-based index 8) for the color
      9a6324 with letter I, the 9th letter of the alphabet.
    </p>
    <p>Computing the values, we get the following table:</p>
    <Table>
      <thead>
        <tr>
          <th>Color</th>
          <th className="text-center" colSpan={3}>
            Hex
          </th>
          <th>ASCII</th>
          <th>Discriminator</th>
          <th>Dec. XOR</th>
          <th>Bin. XOR</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>green</td>
          <td className="text-center">0x3c</td>
          <td className="text-center">0xb4</td>
          <td className="text-center">0x4b</td>
          <td className="text-center">0x41</td>
          <td className="text-center">0x82</td>
          <td className="text-center">0</td>
          <td>
            <Clue>00000000</Clue>
          </td>
          <td className="text-center">
            <Clue>A</Clue>
          </td>
        </tr>
        <tr>
          <td>cyan</td>
          <td className="text-center">0x42</td>
          <td className="text-center">0xd4</td>
          <td className="text-center">0xf4</td>
          <td className="text-center">0x42</td>
          <td className="text-center">0x20</td>
          <td className="text-center">0</td>
          <td>
            <Clue>00000000</Clue>
          </td>
          <td className="text-center">
            <Clue>B</Clue>
          </td>
        </tr>
        <tr>
          <td>blue</td>
          <td className="text-center">0x43</td>
          <td className="text-center">0x63</td>
          <td className="text-center">0xd8</td>
          <td className="text-center">0x44</td>
          <td className="text-center">0xb8</td>
          <td className="text-center">4</td>
          <td>
            <Clue>00000100</Clue>
          </td>
          <td className="text-center">
            <Clue>D</Clue>
          </td>
        </tr>
        <tr>
          <td>teal</td>
          <td className="text-center">0x46</td>
          <td className="text-center">0x99</td>
          <td className="text-center">0x90</td>
          <td className="text-center">0x45</td>
          <td className="text-center">0x18</td>
          <td className="text-center">18</td>
          <td>
            <Clue>00010010</Clue>
          </td>
          <td className="text-center">
            <Clue>E</Clue>
          </td>
        </tr>
        <tr>
          <td>maroon</td>
          <td className="text-center">0x80</td>
          <td className="text-center">0x00</td>
          <td className="text-center">0x00</td>
          <td className="text-center">0x47</td>
          <td className="text-center">0xc7</td>
          <td className="text-center">0</td>
          <td>
            <Clue>00000000</Clue>
          </td>
          <td className="text-center">
            <Clue>G</Clue>
          </td>
        </tr>
        <tr>
          <td>brown</td>
          <td className="text-center">0x9a</td>
          <td className="text-center">0x63</td>
          <td className="text-center">0x24</td>
          <td className="text-center">0x49</td>
          <td className="text-center">0x1c</td>
          <td className="text-center">136</td>
          <td>
            <Clue>10001000</Clue>
          </td>
          <td className="text-center">
            <Clue>I</Clue>
          </td>
        </tr>
        <tr>
          <td>lavender</td>
          <td className="text-center">0xdb</td>
          <td className="text-center">0xce</td>
          <td className="text-center">0xff</td>
          <td className="text-center">0x4E</td>
          <td className="text-center">0xe0</td>
          <td className="text-center">68</td>
          <td>
            <Clue>01000100</Clue>
          </td>
          <td className="text-center">
            <Clue>N</Clue>
          </td>
        </tr>
        <tr>
          <td>red</td>
          <td className="text-center">0xe6</td>
          <td className="text-center">0x19</td>
          <td className="text-center">0x4b</td>
          <td className="text-center">0x4F</td>
          <td className="text-center">0xdb</td>
          <td className="text-center">32</td>
          <td>
            <Clue>00100000</Clue>
          </td>
          <td className="text-center">
            <Clue>O</Clue>
          </td>
        </tr>
        <tr>
          <td>magenta</td>
          <td className="text-center">0xf0</td>
          <td className="text-center">0x32</td>
          <td className="text-center">0xe6</td>
          <td className="text-center">0x50</td>
          <td className="text-center">0xf4</td>
          <td className="text-center">128</td>
          <td>
            <Clue>10000000</Clue>
          </td>
          <td className="text-center">
            <Clue>P</Clue>
          </td>
        </tr>
        <tr>
          <td>orange</td>
          <td className="text-center">0xf5</td>
          <td className="text-center">0x82</td>
          <td className="text-center">0x31</td>
          <td className="text-center">0x52</td>
          <td className="text-center">0x5d</td>
          <td className="text-center">73</td>
          <td>
            <Clue>01001001</Clue>
          </td>
          <td className="text-center">
            <Clue>R</Clue>
          </td>
        </tr>
        <tr>
          <td>pink</td>
          <td className="text-center">0xfa</td>
          <td className="text-center">0xbe</td>
          <td className="text-center">0xd4</td>
          <td className="text-center">0x54</td>
          <td className="text-center">0xe5</td>
          <td className="text-center">33</td>
          <td>
            <Clue>00100001</Clue>
          </td>
          <td className="text-center">
            <Clue>T</Clue>
          </td>
        </tr>
        <tr>
          <td>yellow</td>
          <td className="text-center">0xff</td>
          <td className="text-center">0xe1</td>
          <td className="text-center">0x19</td>
          <td className="text-center">0x56</td>
          <td className="text-center">0x41</td>
          <td className="text-center">16</td>
          <td>
            <Clue>00010000</Clue>
          </td>
          <td className="text-center">
            <Clue>V</Clue>
          </td>
        </tr>
        <tr>
          <td>light yellow</td>
          <td className="text-center">0xff</td>
          <td className="text-center">0xfa</td>
          <td className="text-center">0xc8</td>
          <td className="text-center">0x59</td>
          <td className="text-center">0x94</td>
          <td className="text-center">0</td>
          <td>
            <Clue>00000000</Clue>
          </td>
          <td className="text-center">
            <Clue>Y</Clue>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      In binary, we see that some letters are 0's, and that the number of 1 bits
      is very low. The binary representations indicate which positions the
      letter appears in an 8-letter sequence. There are only 2 reasonable words
      that can be made from the regular expression{' '}
      <Clue>[ip][nr][ot][ev][ir][dn]e[rt]</Clue>: the answer{' '}
      <Answerize>{ANSWER}</Answerize>.
    </p>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
