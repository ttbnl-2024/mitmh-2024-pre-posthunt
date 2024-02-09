import {
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import cx from 'classnames';
import dynamic from 'next/dynamic';
import React, { FC, HTMLProps, ReactFragment } from 'react';

const Tooltip = dynamic(
  () => import('react-tooltip').then((mod) => mod.Tooltip),
  {
    ssr: false,
  }
);

interface Props {
  border?: boolean;
  color?: string;
  center?: boolean;
  warning?: boolean;
  tooltipMessage?: ReactFragment;
  // If provided, use an existing ReactTooltip on the page.
  tooltipId?: string;
  tooltipClassname?: string;
}

/**
 * Shows a little info (i) icon with a tooltip for help text.
 * Generally used for accessibility / explanations that are puzzle content.
 */
const InfoIcon: FC<Props & HTMLProps<HTMLSpanElement>> = ({
  color,
  tooltipMessage,
  tooltipId,
  tooltipClassname,
  border = false,
  center = false,
  warning = false,
  className,
  children,
}) => {
  const Component = warning ? ExclamationIcon : InformationCircleIcon;
  return (
    <>
      <div
        className={cx('flex rounded-md items-center space-x-2 my-4', {
          'justify-center': center,
          'border border-dashed border-black dark:border-white p-2': border,
        })}
      >
        <Component
          className="h-6 w-6 min-w-[1.5rem]"
          data-tooltip-id={tooltipId ? tooltipMessage : ''}
          data-tooltip-content={tooltipId ?? 'info-tooltip'}
        />
        <span className={className}>{children}</span>
      </div>
      {tooltipMessage && !tooltipId && (
        <Tooltip
          id="info-tooltip"
          render={() => (
            <span className={tooltipClassname || 'message'}>
              {tooltipMessage}
            </span>
          )}
        />
      )}

      <style jsx>{`
        div {
          color: ${color ?? '#555'};
        }

        /* Override color in dark mode, unless on a light background. */
        :global(.darkmode) div {
          color: ${color ?? 'var(--white)'};
        }

        .justify-center :global(img) {
          vertical-align: middle;
        }

        .message {
          font-family: 'Roboto', sans-serif;
        }

        @media print {
          :global(.darkmode) div {
            color: black;
          }
        }
      `}</style>
    </>
  );
};

export default InfoIcon;
