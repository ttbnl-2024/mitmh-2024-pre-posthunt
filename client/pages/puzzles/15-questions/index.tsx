import cx from 'classnames';
import React, { FC, useRef } from 'react';

import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = '15-questions';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          You haven't won the money yet - not even the $32K - but you're already
          dreaming of spending it.
        </FlavorText>
        <div className="mb-4">
          Scented candles were #14, but which of these was a top-10 favorite
          smell in a 2015 UK Harris poll?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Cinnamon</td>
                <td>B. Sausages</td>
              </tr>
              <tr>
                <td>C. A Sunday roast</td>
                <td>D. A bonfire</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          An army led by Hannibal crossed the Alps in 16 days, not just one
          week. The army included 37 of what animal?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. A sheep</td>
                <td>B. An elephant</td>
              </tr>
              <tr>
                <td>C. A llama</td>
                <td>D. A goat</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Drama! Which of these shows has won the Emmy for Outstanding Drama
          Series?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. <i>House</i></td>
                <td>B. <i>Grey's Anatomy</i></td>
              </tr>
              <tr>
                <td>C. <i>The Walking Dead</i></td>
                <td>D. <i>Breaking Bad</i></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Getting almost a perfect score, which of these empires spanned six
          continents?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Spanish</td>
                <td>B. Dutch</td>
              </tr>
              <tr>
                <td>C. Ottoman</td>
                <td>D. Russian</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Some Buddy once had a famous allergic reaction to aluminum dust. Who
          was it?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Holly</td>
                <td>B. Ebsen</td>
              </tr>
              <tr>
                <td>C. Rich</td>
                <td>D. Hackett</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Corporate leader Lester Maldonado was played by whom in "The Sounds of
          Silence", starring alongside Dana Plato and Todd Bridges?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Garfunkel</td>
                <td>B. Coleman</td>
              </tr>
              <tr>
                <td>C. Simon</td>
                <td>D. Estrada</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          In the 19th Century, what French painter purchased and lived in the
          Grande Maison?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Meissonier</td>
                <td>B. Cézanne</td>
              </tr>
              <tr>
                <td>C. Printemps</td>
                <td>D. Picasso</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Nearly 90% of wedding proposals in 2022, according to The Knot,
          occurred where?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. A hot tub</td>
                <td>B. A limousine</td>
              </tr>
              <tr>
                <td>C. On bended knee</td>
                <td>D. Home</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Edgar Allan Poe's "Murders in the Rue Morgue" were committed by what
          species?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Human</td>
                <td>B. Monkey</td>
              </tr>
              <tr>
                <td>C. Orangutan</td>
                <td>D. Lion</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Species considered threatened by the U.S. include what animal?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Polar bear</td>
                <td>B. Bald eagle</td>
              </tr>
              <tr>
                <td>C. Gray wolf</td>
                <td>D. Emu</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          "I don't know and I don't care" is in what song by That Handsome
          Devil, not by Brian Wilson?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Elephant Bones</td>
                <td>B. Rob the Prez-o-Dent</td>
              </tr>
              <tr>
                <td>C. My Pen Is a Shiv</td>
                <td>D. Stockholm Syndrome</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          In 2007, which stadium had over 80,000 attend its first-ever NFL game,
          having previously hosted a famous call and answer?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Wembley</td>
                <td>B. Gillette</td>
              </tr>
              <tr>
                <td>C. Levi's</td>
                <td>D. Reliant</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          In 2003, what cigarette brand ended its long association with NASCAR
          racing?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Parliament</td>
                <td>B. Chesterfield</td>
              </tr>
              <tr>
                <td>C. Winston</td>
                <td>D. Lucky Strike</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          Drawing from his long career, George Hackenschmidt wrote{' '}
          <i>The Complete Science of</i>… what?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Laziness</td>
                <td>B. Wrestling</td>
              </tr>
              <tr>
                <td>C. Art</td>
                <td>D. Dogs</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          These are all examples of morphological clipping. Wait, no, pinch me.
          Which one isn't?
          <br />
          <Table noBorder={true} className="w-full">
            <tbody>
              <tr>
                <td>A. Fridge</td>
                <td>B. Pub</td>
              </tr>
              <tr>
                <td>C. Varsity</td>
                <td>D. Yurt</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <style jsx global>{`
        .puzzle-text div {
          margin-bottom: 1em;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
