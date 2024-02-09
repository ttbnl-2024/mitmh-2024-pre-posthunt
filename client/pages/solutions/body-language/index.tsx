import { FC } from 'react';

import AuthorsNotes from 'components/authors_notes';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

import image0 from 'assets/solutions/body-language/0.png';

const SLUG = 'body-language';
const ANSWER = `WHIRLAWAY`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>First, we solve the Spiral crossword.</p>
    <p>
      <b>Inward:</b>
    </p>
    <Table className="clue-table">
      <thead>
        <tr>
          <th>Spaces</th>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-5</td>
          <td>Italian meat-and-tomato sauces</td>
          <td>RAGUS</td>
        </tr>
        <tr>
          <td>6-11</td>
          <td>
            Pertaining to hydroxyl compounds bonded to double-bonded carbon
            atoms
          </td>
          <td>ENOLIC</td>
        </tr>
        <tr>
          <td>12-16</td>
          <td>Isle which is listed first in a Beach Boys lyric</td>
          <td>ARUBA</td>
        </tr>
        <tr>
          <td>17-21</td>
          <td>Pagan group that traditionally numbers 13</td>
          <td>COVEN</td>
        </tr>
        <tr>
          <td>22-25</td>
          <td>Gawk at boorishly</td>
          <td>OGLE</td>
        </tr>
        <tr>
          <td>26-28</td>
          <td>Government rule, in brief</td>
          <td>REG</td>
        </tr>
        <tr>
          <td>29-33</td>
          <td>Character known for keeping his friends waiting</td>
          <td>GODOT</td>
        </tr>
        <tr>
          <td>34-38</td>
          <td>Greek-derived prefix meaning "heaven"</td>
          <td>URANO</td>
        </tr>
        <tr>
          <td>39-42</td>
          <td>Vaper's device, informally (hyph.)</td>
          <td>E-CIG</td>
        </tr>
        <tr>
          <td>43-47</td>
          <td>The Nike swoosh and the Apple apple, for two</td>
          <td>LOGOS</td>
        </tr>
        <tr>
          <td>48-54</td>
          <td>"I'd gladly help!"  (2 wds.)</td>
          <td>SURE CAN</td>
        </tr>
        <tr>
          <td>55-58</td>
          <td>River which shares its name with a monster</td>
          <td>GILA</td>
        </tr>
        <tr>
          <td>59-64</td>
          <td>Lender that charges outrageous rates</td>
          <td>USURER</td>
        </tr>
        <tr>
          <td>65-67</td>
          <td>Ziering of the Sharknado series</td>
          <td>IAN</td>
        </tr>
        <tr>
          <td>68-71</td>
          <td>Words to Brutus, as per Shakespeare (2 wds.)</td>
          <td>ET TU</td>
        </tr>
        <tr>
          <td>72-79</td>
          <td>Barrier placed in some courses</td>
          <td>OBSTACLE</td>
        </tr>
        <tr>
          <td>80-85</td>
          <td>Bend that certain drivers navigate</td>
          <td>DOGLEG</td>
        </tr>
        <tr>
          <td>86-90</td>
          <td>Data fed to a computer program</td>
          <td>INPUT</td>
        </tr>
        <tr>
          <td>91-95</td>
          <td>Dirt, for some; smut, for others</td>
          <td>FILTH</td>
        </tr>
        <tr>
          <td>96-100</td>
          <td>Act as protector for</td>
          <td>GUARD</td>
        </tr>
      </tbody>
    </Table>
    <p>Outward:</p>
    <Table className="clue-table">
      <thead>
        <tr>
          <th>Spaces</th>
          <th>Clue</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100-94</td>
          <td>London pub's offering</td>
          <td>DRAUGHT</td>
        </tr>
        <tr>
          <td>93-88</td>
          <td>Elevate, or elevate someone's spirits (2 wds.)</td>
          <td>LIFT UP</td>
        </tr>
        <tr>
          <td>87-83</td>
          <td>Brexit politician Farage</td>
          <td>NIGEL</td>
        </tr>
        <tr>
          <td>82-78</td>
          <td>One member of the trio in a 1979 Hofstadter book title</td>
          <td>GODEL</td>
        </tr>
        <tr>
          <td>77-74</td>
          <td>Cinematic musical that bombed in 2019</td>
          <td>CATS</td>
        </tr>
        <tr>
          <td>73-70</td>
          <td>Prizefight, say</td>
          <td>BOUT</td>
        </tr>
        <tr>
          <td>69-67</td>
          <td>Number of rounds in many prizefights</td>
          <td>TEN</td>
        </tr>
        <tr>
          <td>66-62</td>
          <td>Broadcast network, say</td>
          <td>AIRER</td>
        </tr>
        <tr>
          <td>61-57</td>
          <td>Bar order for a regular</td>
          <td>USUAL</td>
        </tr>
        <tr>
          <td>56-51</td>
          <td>___ Karkasy (Warhammer 40,000 character)</td>
          <td>IGNACE</td>
        </tr>
        <tr>
          <td>50-46</td>
          <td>Either brother in an MCU directing tandem</td>
          <td>RUSSO</td>
        </tr>
        <tr>
          <td>45-41</td>
          <td>Italian Nobelist Camillo</td>
          <td>GOLGI</td>
        </tr>
        <tr>
          <td>40-38</td>
          <td>One at the top of an org.'s corporate ladder</td>
          <td>CEO</td>
        </tr>
        <tr>
          <td>37-32</td>
          <td>Popular Japanese manga series, or its titular ninja hero</td>
          <td>NARUTO</td>
        </tr>
        <tr>
          <td>31-24</td>
          <td>Ogden Nash's stock-in-trade</td>
          <td>DOGGEREL</td>
        </tr>
        <tr>
          <td>23-20</td>
          <td>Requiring replenishment</td>
          <td>GONE</td>
        </tr>
        <tr>
          <td>19-15</td>
          <td>All the words one knows, slangily</td>
          <td>VOCAB</td>
        </tr>
        <tr>
          <td>14-9</td>
          <td>Thymine's counterpart, in one form of "body language"</td>
          <td>URACIL</td>
        </tr>
        <tr>
          <td>8-1</td>
          <td>
            Order from a person who wants their coffee only slightly sweetened
            (2 wds.)
          </td>
          <td>ONE SUGAR</td>
        </tr>
      </tbody>
    </Table>
    <p>
      We note that, although there are no specific instructions or other obvious
      next steps, there is one specific clue which references the title in the
      context of RNA. Examining the solution to the spiral, we notice that there
      are a relatively high proportion of the letters used to label the four RNA
      bases in the solution:
    </p>
    <p>
      <SheetableImage
        alt=""
        src={image0}
        title=""
        className="mx-auto w-[300px]"
      />
    </p>
    <p>
      Further to this we note that there are precisely two places in the grid
      where there are three consecutive bases as part of the spiral "strand".
      They are <Clue>AGU</Clue> and <Clue>GUA</Clue> (if reading inward) or{' '}
      <Clue>AUG</Clue> and <Clue>UGA</Clue> (if reading outward). Any
      combination of three bases forms a codon for the sake of protein
      determination, but the <Clue>AUG</Clue> and <Clue>UGA</Clue> codons are
      special: they are the "start" and "stop" codons which appear at the start
      and end of an RNA strand which will be used for DNA transcription (and
      which do not exist as part of the transcribed DNA strand.) This confirms
      that this spiral is actually an RNA strand, and that it should be read in
      the outward direction rather than the inward direction.
    </p>
    <p>
      The strand, reading outwards, and separated into its three-base codons,
      is:{' '}
    </p>
    <p>
      <Clue>AUG UGG CAU AUU AGA CUG GCA UGG GCA UAC UGA</Clue>
    </p>
    <p>
      We can ignore the start and stop codons, which mark this as RNA, but
      otherwise do not communicate any information.
    </p>
    <p>
      <Clue>UGG CAU AUU AGA CUG GCA UGG GCA UAC</Clue>
    </p>
    <p>
      If we attempt to decode this into the standard single-letter per-codon
      protein abbreviations, the end result is gibberish. However, we can do
      RNA-to-DNA transcription here (as if, for instance, this is transfer RNA).
      The transcription involves converting adenine to thymine, uracil to
      adenine, cytosine to guanine, and guanine to cytosine, reflecting the
      base-pair structure of DNA helices. When we do this, we get the following
      codons:
    </p>
    <p>
      <Clue>ACC GTA TAA TCT GAC CGT ACC CGT ATG</Clue>
    </p>
    <p>
      Using the standard single-letter per-codon protein abbreviations, this
      decodes to <Answerize>{ANSWER}</Answerize>, which is this puzzle's answer.
    </p>
    <AuthorsNotes>
      <p>
        My thanks to Paul Melamud for his assistance with this puzzle, and also
        for properly characterizing this as "all very wibbly-wobbly gene-y
        weenie stuff".
      </p>
    </AuthorsNotes>
    <style jsx global>{`
      .clue-table td:nth-child(1) {
        text-align: center;
        white-space: nowrap;
      }
      .clue-table td:nth-child(3) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
