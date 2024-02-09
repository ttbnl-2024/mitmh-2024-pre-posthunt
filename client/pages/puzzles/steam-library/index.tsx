import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, Monospace, NO_COPY_CLASS } from 'components/copy';
import Crossword, { Colors, X, _ } from 'components/crossword';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, {
  PuzzleData,
  PuzzleDataProps,
  getPuzzleProps,
} from 'components/puzzle';
import Table from 'components/table';

import image2 from 'assets/puzzles/steam-library/2.png';
import portal from 'assets/puzzles/steam-library/portal.png';
import terrariaScene from 'assets/puzzles/steam-library/terraria_scene.png';

const SLUG = 'steam-library';
const E = Colors.C3;

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <InfoIcon>
          <p>You may confirm individual answers in the answer checker.</p>
        </InfoIcon>
        <ul className="list-none pl-6 -indent-4">
          <li>AHMAD PEJMAN</li>
          <li>ALLELES</li>
          <li>ARGININE</li>
          <li>ASSAULT</li>
          <li>ASSISTED BRAKING</li>
          <li>ATTACK</li>
          <li>BANNERMAN</li>
          <li>BEETLE</li>
          <li>BEYOND</li>
          <li>CANADA DAY</li>
          <li>CHORISIS</li>
          <li>COMBAT</li>
          <li>CUCUMBER</li>
          <li>DADAIST</li>
          <li>DEEP DISH</li>
          <li>DINING OUT</li>
          <li>EL-CREEPO!</li>
          <li>ENERGIZER</li>
          <li>FASTAPI</li>
          <li>FEDERAL BUREAU OF INVESTIGATION</li>
          <li>FETA</li>
          <li>FREE CLIMB</li>
          <li>GO TO TOWN</li>
          <li>HERBAL</li>
          <li>HONEYDEW</li>
          <li>INCHCAPE</li>
          <li>INSTINCT</li>
          <li>JALAPENO</li>
          <li>KENSEI</li>
          <li>KOENIGSMACKER</li>
          <li>LINEAR LOGIC</li>
          <li>MAINE</li>
          <li>MISSPELLS</li>
          <li>MONTSERRAT</li>
          <li>NEVER</li>
          <li>NEW KIDS ON THE BLOCK</li>
          <li>OUTLANDISH</li>
          <li>PARTITION</li>
          <li>PATTERN</li>
          <li>PIYUSH MISHRA</li>
          <li>PLASTIC</li>
          <li>QUANTUM OF SOLACE</li>
          <li>ROCKET</li>
          <li>ROMANTIC COMEDIES</li>
          <li>SIERRA NEVADA</li>
          <li>SOUP UP</li>
          <li>STOWAWAY</li>
          <li>SUBSTR</li>
          <li>SUPPOSAL</li>
          <li>SUSURRANT</li>
          <li>SWORN TO SECRECY</li>
          <li>TRUTH OR CONSEQUENCES</li>
          <li>TWELFTH MAN</li>
          <li>VOLUMNIA</li>
          <li>WALKED ON TIPTOE</li>
          <li>WENT FOR BROKE</li>
        </ul>
        <hr className="my-4 break-after" />
        <h3>Baba Is You</h3>
        <FlavorText>Rereading, Baba is... disappearing?</FlavorText>
        <ul className="list-none pl-2">
          <li>Contest</li>
          <li>Hard</li>
          <li>Bird</li>
          <li>Flame</li>
          <li>Donation</li>
          <li>Kirby enemy</li>
          <li>Haze</li>
          <li>Cry</li>
          <li>Task</li>
          <li>Mature</li>
          <li>Stray</li>
          <li>Forgive</li>
        </ul>
        <hr className="my-4 break-after" />
        <h3>Dave the Diver</h3>
        <FlavorText>
          You sure caught a lot—what are your nets lined with?
        </FlavorText>
        <hr className="my-4 break-after" />
        <h3>Fallout: New Vegas</h3>
        <FlavorText>
          You've got to improve your skills if you want to check everything off.
        </FlavorText>
        <ul className="list-none pl-2 space-y-3 sm:space-y-0">
          <li>Smuggle better weapons into the interrogation room</li>
          <li>Trade with Alexander</li>
          <li>Fix Trudy's radio</li>
          <li>Tell Pete that a half-ton isn't enough</li>
          <li>Ask Lucius to teach you</li>
          <li>Learn how Keith is cheating at Caravan</li>
          <li>Repair the network connection in the east pump station</li>
          <li>Learn about Hydra symptoms</li>
          <li>Help improve Siri's work</li>
        </ul>
        <hr className="my-4 break-after" />
        <h3>Portal</h3>
        <div className={cx(NO_COPY_CLASS)}>
          <FlavorText>
            Are y
            <span className="inline-flex items-baseline pr-0 pl-1">
              <img alt="o" src={portal} title="" />
            </span>
            u thinking with p
            <span className="inline-flex items-baseline pr-0 pl-1">
              <img alt="o" src={portal} title="" />
            </span>
            rtals?
          </FlavorText>
        </div>
        <div className={cx(HIDDEN_CLASS)}>
          <FlavorText>
            Are y<span className="text-sky-400 font-bold italic">O</span>u
            thinking with p
            <span className="text-sky-400 font-bold italic">O</span>rtals?
          </FlavorText>
        </div>

        <Crossword
          tableClass="no-second-grid"
          // prettier-ignore
          data={[
            [X,X,_,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
            [X,X,_,X,X,X,X,_,_,_,_,_,_,_,_,_,_,_],
            [_,X,_,X,_,X,X,_,X,X,X,_,X,X,X,X,X,X],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,X,X,X,X],
            [_,X,_,X,_,X,X,_,X,X,X,_,X,_,_,X,X,X],
            [_,X,_,X,_,X,X,_,_,_,_,_,_,_,_,_,X,X],
            [_,X,_,_,_,X,X,X,X,X,X,_,X,_,_,_,X,X],
            [_,X,X,_,X,X,X,_,X,X,X,_,X,X,X,X,X,X],
            [_,X,X,_,X,X,X,_,X,X,X,_,X,X,X,X,X,X],
            [_,_,_,_,_,_,X,_,X,_,X,X,X,X,X,X,X,X],
            [_,X,X,_,X,_,X,_,X,_,X,X,X,X,X,_,_,X],
            [_,X,X,_,_,_,_,_,_,_,_,X,X,X,X,_,X,X],
            [_,X,X,X,X,_,X,X,X,_,X,X,X,X,X,_,X,X],
            [_,X,X,X,X,_,X,X,_,_,_,_,_,_,_,_,X,X],
            [_,X,X,X,X,_,X,X,X,_,X,X,X,X,X,X,X,X],
            [_,X,X,X,X,_,X,X,X,_,_,_,_,_,_,_,_,X],
          ]}
          // prettier-ignore
          shading={[
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,E,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,E,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_,_,E,_,_,_,_,_,_],
          ]}
        />
        <hr className="my-4 break-after" />
        <h3>Stardew Valley</h3>
        <FlavorText>
          Those are some great gifts for everyone's birthdays -- they'll love
          them!
        </FlavorText>
        <p>
          <img alt="" src={image2} title="" className="mx-auto" />
        </p>
        <hr className="my-4 break-after" />
        <h3>Terraria</h3>
        <FlavorText>What equipment do you need to protect yourself?</FlavorText>
        <InfoIcon className={cx(NO_COPY_CLASS)}>
          Click the image to open full size.
        </InfoIcon>
        <p>
          <a href={terrariaScene}>
            <img alt="" src={terrariaScene} title="" className="mx-auto" />
          </a>
        </p>
        <hr className="my-4 border-black" />
        <Table className={cx(HIDDEN_CLASS)}>
          <tbody>
            <tr>
              <td className="bg-black"></td>
            </tr>
          </tbody>
        </Table>
        <hr className="my-4 border-black break-after" />
        <h3>The Binding of Isaac: Repentance</h3>
        <FlavorText>Look at my collection!</FlavorText>
        <div className="flex gap-x-12 sm:gap-x-24 gap-y-10 flex-wrap justify-center">
          <Table className="binding">
            <tbody>
              <tr>
                <td className="bg-red-300">2</td>
                <td>7</td>
                <td>4</td>
              </tr>
            </tbody>
          </Table>
          <Table className="binding">
            <tbody>
              <tr>
                <td className="bg-red-300">5</td>
                <td>1</td>
              </tr>
              <tr>
                <td></td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
          <Table className="binding">
            <tbody>
              <tr>
                <td className="bg-red-300">3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>1</td>
                <td />
              </tr>
            </tbody>
          </Table>
          <Table className="binding">
            <thead>
              <tr>
                <td className="bg-red-300">1</td>
                <td>&nbsp;&nbsp;</td>
                <td>9</td>
                <td>2</td>
              </tr>
            </thead>
          </Table>
          <Table className="binding">
            <thead>
              <tr>
                <td className="bg-red-300">6</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>3</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
          <Table className="binding">
            <thead>
              <tr>
                <td className="bg-red-300">7</td>
                <td>&nbsp;&nbsp;</td>
                <td>7</td>
                <td>6</td>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
      <style jsx global>{`
        .binding td {
          height: 24px;
          width: 24px;
          text-align: center;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
