import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { Monospace, HIDDEN_CLASS } from 'components/copy';
import FlavorText from 'components/flavor_text';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import Table from 'components/table';

const SLUG = 'model-scientists';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <div ref={ref}>
        <FlavorText>
          Some people seem to sort out almost from birth what they're meant to
          do in life. Others are inspired by their role models. It's great when
          they realize that despite certain expectations, they're capable of a
          lot more than just...
        </FlavorText>
        <p>
          There's an unexpected message in what these kids had to say after
          their science fair exhibits:
        </p>
        <Table>
          <style jsx>{`
            td:last-child {
              white-space: nowrap;
            }
          `}</style>
          <tbody>
            <tr>
              <td>
                LOL ... when I first read about my role model I got all mixed
                up. Who wants to discover how to "meet a loser"?
              </td>
              <td>1993</td>
              <td className="whitespace-nowrap">
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ / +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Altering genes is very tricky, my lab partner and I learned, but
                we were excited to win a prize!
              </td>
              <td>2000</td>
              <td>
                <Monospace>* + - *</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                A warship! That's who my model was named after, yet they worked
                to heal the world!
              </td>
              <td>1991</td>
              <td>
                <Monospace>* - +</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                I first chose my role model because I love Imagine Dragons, but
                after learning more, I want to end up having a new element in
                the periodic table named after myself too!
              </td>
              <td>1998</td>
              <td>
                <Monospace>% * % +</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                I wanted to build a model, but had a hard time deciding whether
                to do a virus or DNA, or something different like coal or
                graphite.
              </td>
              <td>1992</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ - +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Before this project, I just thought shells were found at the
                beach, not in atoms!
              </td>
              <td>1995</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ * - +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Anyone who lives to 104 is bound to have deep insights. My role
                model's were particularly earth-shaking.
              </td>
              <td>2002</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ + + +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                I'm not sure whether I want to be a senator or a scientist.
                Maybe I could do both ... but I might have to live to 103.
              </td>
              <td>1980</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ - +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                My oh my! How many times can one be nominated for a prize
                without a win? I guess an entry in the periodic table is an ok
                consolation prize though.
              </td>
              <td>1999</td>
              <td>
                <Monospace>- + + +</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Neurons can do so many cool things! Some of them are what helps
                us figure out where we are in the room or the world even!
              </td>
              <td>1996</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ * + +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Boy, after all this hard work we should do something fun. I
                propose fishin' ... but I wouldn't call it that.
              </td>
              <td>1987</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ + /
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Either I want to work on curing cancer, or do radio astronomy.
                My experiment studies the effects of magnetic fields on chicken
                embryos!
              </td>
              <td>2011</td>
              <td>
                <Monospace>* * +</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                I bet no one will make fun of me anymore when I unveil my new
                chirpy laser sword!
              </td>
              <td>1988</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ + %
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Really, I am sick and tired of this expressionist fish my
                parents keep feeding me, so I told them about my model who
                transformed it into a delicious hamburger!
              </td>
              <td>1996</td>
              <td>
                <Monospace>
                  <span className={cx(HIDDEN_CLASS)}>'</span>+ + - +
                </Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Government regulations prohibited me from obtaining the uranium
                necessary for my project ... but I'm sure I could've done it
                without blowing anything up.
              </td>
              <td>2001</td>
              <td>
                <Monospace>* + - +</Monospace>
              </td>
            </tr>
            <tr>
              <td>
                Regrettably, I wasn't allowed to duplicate the experiment to see
                if their strain of antibiotic could cure me from cholera. But
                their story is an Open Book.
              </td>
              <td>1989</td>
              <td>
                <Monospace>* + +</Monospace>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
