import cx from 'classnames';
import { FC } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';

interface MathProps {
  math: string;
  className?: string;
  display?: boolean;
}

const CtCMath: FC<MathProps> = ({ math, className = '', display = false }) => (
  <>
    <style jsx global>{`
      mjx-container[jax='SVG']:not([display='true']) > svg {
        display: inline;
      }

      mjx-container[display='true'] {
        overflow-x: auto;
        overflow-y: clip;
        overflow-clip-margin: 0.25em;
        margin: 0.25em 0 !important;
      }

      mjx-container[jax='SVG'][display='true'] {
        max-width: 100%;
      }

      mjx-container[jax='SVG'][display='true'] > svg {
        margin-left: auto !important;
        margin-right: auto !important;
      }
    `}</style>
    <span className={cx(HIDDEN_CLASS, 'mathjax_ignore')}>
      {math
        .replaceAll('\\left', '')
        .replaceAll('\\right', '')
        .replaceAll('\\qquad', '    ')
        .replaceAll('\\,', ' ')}
    </span>
    {display ? (
      <span className={cx(NO_COPY_CLASS, className)}>
        {'\\[' + math + '\\]'}
      </span>
    ) : (
      <span className={cx(NO_COPY_CLASS, className)}>
        {'\\(' + math + '\\)'}
      </span>
    )}
  </>
);

export default CtCMath;
