import { MathJax, MathJaxContext } from 'better-react-mathjax';
import cx from 'classnames';
import React, { FC, useRef } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';
import CtCMath from 'components/copy_math';
import FlavorText from 'components/flavor_text';
import InfoIcon from 'components/info_icon';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/some-assembly-required/0.png';
import image1 from 'assets/puzzles/some-assembly-required/1.png';
import image2 from 'assets/puzzles/some-assembly-required/2.png';
import image3 from 'assets/puzzles/some-assembly-required/3.png';
import image4 from 'assets/puzzles/some-assembly-required/4.png';
import image5 from 'assets/puzzles/some-assembly-required/5.png';
import image6 from 'assets/puzzles/some-assembly-required/6.png';
import image7 from 'assets/puzzles/some-assembly-required/7.png';

const SLUG = 'some-assembly-required';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData} copyData={{ ref }}>
      <MathJaxContext>
        <MathJax>
          <div ref={ref}>
            <FlavorText>
              I spent some time last year building my knowledge of set theory.
            </FlavorText>
            <InfoIcon>
              Math at the bottom of the puzzle is available in
              copy-to-clipboard.
            </InfoIcon>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\alpha" />:
              </span>
              <span className={cx(HIDDEN_CLASS)}>α:</span>
              <br />
              <SheetableImage className="w-full" alt="" src={image0} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\beta" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>β:</span>
              <SheetableImage className="w-full" alt="" src={image1} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\gamma" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>γ:</span>
              <SheetableImage className="w-full" alt="" src={image2} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\delta" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>δ:</span>
              <SheetableImage className="w-full" alt="" src={image3} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\epsilon" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>ε:</span>
              <SheetableImage className="w-full" alt="" src={image4} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\zeta" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>ζ:</span>
              <SheetableImage className="w-full" alt="" src={image5} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\eta" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>η:</span>
              <SheetableImage className="w-full" alt="" src={image6} title="" />
            </p>
            <p>
              <span className={cx(NO_COPY_CLASS)}>
                <CtCMath math="\theta" />:
              </span>
              <span className={cx('font-italic', HIDDEN_CLASS)}>θ:</span>
              <SheetableImage className="w-full" alt="" src={image7} title="" />
            </p>

            <p>
              <b>Given:</b>
            </p>
            <p className={cx(NO_COPY_CLASS)}>
              <CtCMath math="|\theta| = 811" />
              <br />
              <CtCMath math="\beta \cap \delta = 4061" />
              <br />
              <CtCMath math="\eta \cap \alpha = 71" />
              <br />
              <CtCMath math="\zeta \cup \gamma = 4173321339" />
              <br />
              <CtCMath math="\epsilon \cup \gamma = 3120821339" />
              <br />
              <CtCMath math="\gamma + \theta = 64569" />
            </p>
            <p className={cx(HIDDEN_CLASS)}>
              |θ| = 811
              <br />
              β ∩ δ = 4061
              <br />
              η ∩ α = 71
              <br />
              ζ ∪ γ = 4173321339
              <br />
              ε ∪ γ = 3120821339
              <br />γ + θ = 64569
            </p>
            <p>
              <b>Solve:</b>
            </p>
            <ul
              className={cx(
                NO_COPY_CLASS, 
                'list-none p-0 overflow-x-auto overflow-y-clip space-y-3'
              )}
            >
              <li>
                <CtCMath math="A = 6 - ((\gamma \cap \theta) \times (\theta \cap \epsilon))" />
              </li>
              <li>
                <CtCMath math="B = 15 + (\eta \cap \alpha) - (\zeta \cap \delta) - (\theta \cap \zeta)" />
              </li>
              <li>
                <CtCMath math="C = 18 - (|\alpha| \bmod (\delta \cap \zeta))" />
              </li>
              <li>
                <CtCMath math="D = 25 + 2 \times Y - 3 \times E" />
              </li>
              <li>
                <CtCMath math="E = 15 + |\gamma| / ((\epsilon \cap \theta) - |\zeta|)" />
              </li>
              <li>
                <CtCMath math="F = 21 - (\gamma \cap \zeta) - (\beta \cap \zeta) - (\beta \cap \theta)" />
              </li>
              <li>
                <CtCMath math="G = 18 - ((\zeta \cup \eta) \bmod (\zeta \cap \delta))" />
              </li>
              <li>
                <CtCMath math="H = 19 - (\zeta \cap \gamma) - (\epsilon \cap \theta)" />
              </li>
              <li>
                <CtCMath math="I = 5 - (\gamma \cap \theta)" />
              </li>
              <li>
                <CtCMath math="J = 20 + (\alpha + \delta) - (\alpha + \beta)" />
              </li>
              <li>
                <CtCMath math="K = 12 + (\gamma \cap \epsilon) - (\zeta \cap \gamma)" />
              </li>
              <li>
                <CtCMath math="L = 9 + (\eta \cap \zeta)" />
              </li>
              <li>
                <CtCMath math="M = 19 - (|\beta| \bmod (\delta \cap \zeta))" />
              </li>
              <li>
                <CtCMath math="N = 20 - ((\eta \cup \beta) \bmod (\eta \cup \delta))" />
              </li>
              <li>
                <CtCMath math="O = 19 + (\alpha \cap \beta) - (\gamma \cap \zeta)" />
              </li>
              <li>
                <CtCMath math="P = 21 - (\zeta \cap \gamma) - (\zeta \cap \beta) - (\theta \cap \beta)" />
              </li>
              <li>
                <CtCMath math="Q = 19 - ((\delta \cup \alpha) \bmod (\theta \cap \zeta))" />
              </li>
              <li>
                <CtCMath math="R = 5 - (\gamma \cap \theta) - (\theta \cap \epsilon)" />
              </li>
              <li>
                <CtCMath math="S = 2 + (\zeta \cap \epsilon)" />
              </li>
              <li>
                <CtCMath math="T = 18 + (\theta \cap \eta) - (\zeta \cap \gamma)" />
              </li>
              <li>
                <CtCMath math="U = 9 + (\theta \cap \beta) - (\gamma \cap \zeta)" />
              </li>
              <li>
                <CtCMath math="V = 3 - (\theta \cap \gamma)" />
              </li>
              <li>
                <CtCMath math="W = 11 - (\zeta \cap \beta)" />
              </li>
              <li>
                <CtCMath math="X = 19 - ((\eta \cup \zeta) \bmod |\zeta|)" />
              </li>
              <li>
                <CtCMath math="Y = 5 - ((\epsilon + \gamma) \bmod |\zeta|) + (|\epsilon| \bmod (\delta \cap \zeta))" />
              </li>
              <li>
                <CtCMath math="Z = 20 + (\epsilon \cap \theta) \times ((\zeta \cap \gamma) - (\zeta \cap \theta)) / (\gamma \cap \theta)" />
              </li>
            </ul>
            <p className={cx(HIDDEN_CLASS)}>
              A = 6 − ((γ ∩ θ) × (θ ∩ ε))
              <br />
              B = 15 + (η ∩ α) − (ζ ∩ δ) − (θ ∩ ζ)
              <br />
              C = 18 − (|α| mod (δ ∩ ζ))
              <br />
              D = 25 + 2×Y − 3×E
              <br />
              E = 15 + |γ| / ((ε ∩ θ) − |ζ|)
              <br />
              F = 21 − (γ ∩ ζ) − (β ∩ ζ) − (β ∩ θ)
              <br />
              G = 18 − ((ζ ∪ η) mod (ζ ∩ δ))
              <br />
              H = 19 − (ζ ∩ γ) − (ε ∩ θ)
              <br />
              I = 5 − (γ ∩ θ)
              <br />
              J = 20 + (α + δ) − (α + β)
              <br />
              K = 12 + (γ ∩ ε) − (ζ ∩ γ)
              <br />
              L = 9 + (η ∩ ζ)
              <br />
              M = 19 − (|β| mod (δ ∩ ζ))
              <br />
              N = 20 − ((η ∪ β) mod (η ∪ δ))
              <br />
              O = 19 + (α ∩ β) − (γ ∩ ζ)
              <br />
              P = 21 − (ζ ∩ γ) − (ζ ∩ β) − (θ ∩ β)
              <br />
              Q = 19 − ((δ ∪ α) mod (θ ∩ ζ))
              <br />
              R = 5 − (γ ∩ θ) − (θ ∩ ε)
              <br />
              S = 2 + (ζ ∩ ε)
              <br />
              T = 18 + (θ ∩ η) − (ζ ∩ γ)
              <br />
              U = 9 + (θ ∩ β) − (γ ∩ ζ)
              <br />
              V = 3 − (θ ∩ γ)
              <br />
              W = 11 − (ζ ∩ β)
              <br />
              X = 19 − ((η ∪ ζ) mod |ζ|)
              <br />
              Y = 5 − ((ε + γ) mod |ζ|) + (|ε| mod (δ ∩ ζ))
              <br />Z = 20 + (ε ∩ θ) × ((ζ ∩ γ) − (ζ ∩ θ)) / (γ ∩ θ)
            </p>
          </div>
        </MathJax>
      </MathJaxContext>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
