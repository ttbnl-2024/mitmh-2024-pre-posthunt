import { FC } from 'react';
import {
  Footnotes,
  FootnotesProvider,
  FootnoteRef as Ref,
} from 'react-a11y-footnotes';
import 'react-a11y-footnotes/dist/styles.css';

import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'aphrodites-plutonic-affection-connection';
const ANSWER = `MENAGE A TROY`;

const FEEDERS = [
  {
    title: 'Crossword of the Ouroboros',
    answer: 'POPESSE',
    persona: 'Johanna',
    user: 'MAKOTO NIJIMA',
    height: '164 cm',
    explanation: `The High Priestess tarot card is otherwise known as "La Popesse", or the female pope, referencing the apocryphal figure of Pope Joan/Johanna.`,
  },
  {
    title: 'ERROR: PUZZLE DISABLED',
    answer: 'ERROL FLYNN',
    persona: 'Robin Hood',
    user: 'GORO AKECHI',
    height: '178 cm',
    explanation: `Errol Flynn famously played Robin Hood.`,
  },
  {
    title: 'Erudite Game',
    answer: 'RYSA WALKER',
    persona: 'Chronos',
    user: 'JUN KUROSU',
    height: '169 cm',
    explanation: `Rysa Walker wrote The CHRONOS Files.`,
  },
  {
    title: 'Evildoers Wanted',
    answer: 'SEX DRIVE',
    persona: 'Eros',
    user: 'LISA SILVERMAN',
    height: '165 cm',
    explanation: `Freud dubbed the sex drive the Eros drive.`,
  },
  {
    title: 'Fren Amis',
    answer: 'OGATA SHUMA',
    persona: 'Jiraiya',
    user: 'YOSUKE HANAMURA',
    height: '175 cm',
    explanation: `Ogata Shuma is the original name of the legendary hero Jiraiya.`,
  },
  {
    title: 'Happy Tunes',
    answer: 'NONES OF THE WILD FIG',
    persona: 'Juno',
    user: 'FUUKA YAMIGISHI',
    height: '152 cm',
    explanation: `Nones of the Wild Fig, or Nonae Caprotinae, was a Roman festival celebrating Juno.`,
  },
  {
    title: 'League of Their Own',
    answer: 'ABYSSAL IDIOT',
    persona: 'Azathoth',
    user: 'TAKUTO MARUKI',
    height: '180 cm',
    explanation: `Abyssal Idiot is one of the epithets of Azathoth.`,
  },
  {
    title: 'Make a Winning Hand',
    answer: 'GRAY WASTES',
    persona: 'Hades',
    user: 'EIKICHI MISHINA',
    height: '185 cm',
    explanation: `The Gray Wastes are the Neutral-Evil realm in the Planescape cosmology, and are alternatively referred to as Hades.`,
  },
  {
    title: 'Obelisks of Sorrel Mountain',
    answer: 'ALPINE MUGWORT',
    persona: 'Artemisia',
    user: 'MITSURU KIRIJO',
    height: '166 cm',
    explanation: `Alpine Mugwort is in the genus Artemisia.`,
  },
  {
    title: 'Presenting: Capitol Records Tour',
    answer: 'MOUNT HOLYOKE',
    persona: 'Maia',
    user: 'MAYA AMANO',
    height: '168 cm',
    explanation: `Mount Holyoke is the oldest of the Seven Sisters women's colleges, while Maia is the oldest of the Pleiades, most commonly known as the mother of Hermes.`,
  },
  {
    title: 'Spacing Out',
    answer: 'ENSIGN VORIK',
    persona: 'Vulcanus',
    user: 'TATSUYA SUOU',
    height: '181 cm',
    explanation: `Ensign Vorik is a Vulcan.`,
  },
];

const ANIME = [
  {
    anime: 'Ace of Diamond',
    number: '1',
    explanation: `ACE = 1 or 11, and "Maya Amano" is only 9 characters long`,
    characters: 'Sawamura Eijun (175 cm) and Aotsuki Wakana (156 cm)',
    hotness: '60.7°',
    height: '168 cm',
    user: 'MAYA AMANO',
    extract: 'M',
  },
  {
    anime: 'No 6',
    number: '6',
    explanation: ``,
    characters: 'Nezumi (178 cm) and Shion (170 cm)',
    hotness: '60.3°',
    height: '175 cm',
    user: 'YOSUKE HANAMURA',
    extract: 'E',
  },
  {
    anime: 'Seven Deadly Sins',
    number: '7',
    explanation: ``,
    characters: 'Meliodas (152 cm) and Elizabeth Liones (162 cm)',
    hotness: '62.9°',
    height: '164 cm',
    user: 'MAKOTO NIJIMA',
    extract: 'N',
  },
  {
    anime: 'Yozakura Quartet',
    number: '4',
    explanation: `Quartet is a group of 4.`,
    characters: 'Hime Yarizakura (161 cm) and Akina Hiizumi (173 cm)',
    hotness: '59.1°',
    height: '165 cm',
    user: 'LISA SILVERMAN',
    extract: 'A',
  },
  {
    anime: 'One Punch Man',
    number: '1',
    explanation: ``,
    characters: 'Saitama (175 cm) and Genos (178 cm)',
    hotness: '60.5°',
    height: '178 cm',
    user: 'GORO AKECHI',
    extract: 'G',
  },
  {
    anime: 'One Piece',
    number: '1',
    explanation: ``,
    characters: 'Portgas D Ace (185 cm) and Trafalgar D Water Law (191 cm)',
    hotness: '58.9°',
    height: '185 cm',
    user: 'EIKICHI MISHINA',
    extract: 'E',
  },
  {
    anime: 'Twin Star Exorcists',
    number: '2',
    explanation: `Twin is pair, or two.`,
    characters: 'Seigen Amawaka (179 cm) and Yukari Otomi (163 cm)',
    hotness: '63.7°',
    height: '181 cm',
    user: 'TATSUYA SUOU',
    extract: 'A',
  },
  {
    anime: 'Yugioh 5Ds',
    number: '5',
    explanation: ``,
    characters: 'Yusei Fudo (175) and Akiza Izinski (163)',
    hotness: '64.2°',
    height: '180 cm',
    user: 'TAKUTO MARUKI',
    extract: 'T',
  },
  {
    anime: 'Spy X Family',
    number: '10',
    explanation: `X clues ten, as an isolated Roman numeral.`,
    characters: 'Loid Forger (187 cm) and Yor Briar (170 cm)',
    hotness: '55.2°',
    height: '166 cm',
    user: 'MITSURU KIRIJO',
    extract: 'R',
  },
  {
    anime: 'Nana',
    number: '7',
    explanation: `NANA is the Japanese word for "seven", and that fact is central to the plot / called out in the Nana Komatsu wiki page.`,
    characters: 'Nana Komatsu (158 cm) and Takumi Ichinose (183 cm)',
    hotness: '58.9°',
    height: '169 cm',
    user: 'JUN KUROSU',
    extract: 'O',
  },
  {
    anime: "JoJo's Bizarre Adventure Part 6: Stone Ocean",
    number: '6',
    explanation: ``,
    characters: 'Costello (175 cm) and Weather Report (192 cm)',
    hotness: '48.7° ',
    height: '152 cm',
    user: 'FUUKA YAMIGISHI',
    extract: 'Y',
  },
];

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <FootnotesProvider>
      <p>
        This is the metapuzzle for the Oahu round, and uses the following 11
        feeders.
      </p>

      <Table>
        <tbody>
          {FEEDERS.map(({ title, answer }, key) => {
            return (
              <tr key={key}>
                <td>{title}</td>
                <td>
                  <Clue>{answer}</Clue>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <p>
        Each feeder clue refers to a famous mythological, literary, or
        historical/apocryphal figure (clued by "renowned figures"). An acrostic
        from round solutions forms <Clue>PERSONA GAME</Clue>, cluing that as a
        set, they are the Personas (summons) of central characters from the
        Persona franchise of video games. Each corresponding character has a
        canonical height, allowing them to be slotted in with a couple in the
        puzzle, where the two heights plus an angle make only one possible third
        side to create a valid, unique triangle.
      </p>

      <Table>
        <thead>
          <tr>
            <th>Answer</th>
            <th>Persona</th>
            <th>Persona User</th>
            <th>User Height</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {FEEDERS.map(
            ({ answer, persona, user, height, explanation }, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Clue>{answer}</Clue>
                  </td>
                  <td>{persona}</td>
                  <td>
                    <Clue>{user}</Clue>
                  </td>
                  <td>{height}</td>
                  <td>{explanation}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>

      <p>
        Each episode presents two characters from a romantic anime. Using that
        pair and looking up their heights (clued by "height of the ratings" and
        "tall order"), and their "Hotness Rating" as an angle, and then rounding
        to the nearest cm (clued by "round out"), each triangle has an output
        height that matches one of the Persona characters clued by the feeder
        clues.
      </p>
      <p>
        The name of every anime featured also includes an explicit mention of a
        number (either directly, e.g., <b>ONE</b> Piece, or indirectly, e.g., Spy{' '}
        <b>X</b> Family for 10). Indexing by that number into the Persona
        character will provide the letter extracts for the answer,{' '}
        <Answerize>MENAGE A TROY</Answerize>.
      </p>
      <Table>
        <thead>
          <tr>
            <th>Anime</th>
            <th>Characters</th>
            <th>Hotness (angle)</th>
            <th>Height</th>
            <th>User</th>
            <th>Number</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          {ANIME.map(
            (
              {
                anime,
                number,
                explanation,
                characters,
                hotness,
                height,
                user,
                extract,
              },
              key
            ) => {
              return (
                <tr key={key}>
                  {explanation == '' && <td>{anime}</td>}
                  {explanation != '' && (
                    <td>
                      {anime}
                      <Ref description={explanation} id={anime} />
                    </td>
                  )}
                  <td>{characters}</td>
                  <td>{hotness}</td>
                  <td>{height}</td>
                  <td>
                    <Clue>{user}</Clue>
                  </td>
                  <td>{number}</td>
                  <td>
                    <Clue>{extract}</Clue>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
      <Footnotes />
    </FootnotesProvider>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
