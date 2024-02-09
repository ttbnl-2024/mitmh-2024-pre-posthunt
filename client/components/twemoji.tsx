import twemoji from '@twemoji/api';
import cx from 'classnames';
import React, {
  HTMLAttributes,
  ReactNode,
  createElement,
  forwardRef,
} from 'react';
import { renderToString } from 'react-dom/server';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';

interface ReactTwemojiProps {
  tag?: string;
  children?: ReactNode;
  options?: TwemojiOptions;
}

export const ReactTwemoji: React.FC<ReactTwemojiProps> = ({
  tag = 'div',
  children,
  options = {},
}) => {
  // console.log(options);
  let html = renderToString(<>{children}</>);

  // I couldn't figure out a way to do this in a better way
  // and I've spent too long here anyway.
  return createElement(tag, {
    dangerouslySetInnerHTML: {
      __html: (twemoji as any).parse(html, options),
    },
  });
};

interface TwemojiOptions {
  size?: number | string;
  className?: string;
  base?: string;
  // Set this to true for copy to clipboard to copy the actual emoji character
  // instead of linking to the twemoji image.
  copyUnicodeEmoji?: boolean;
}

interface TwemojiProps extends HTMLAttributes<HTMLElement> {
  emoji?: React.ReactFragment;
  updatable?: boolean;
  options?: TwemojiOptions;
  tag?: string;
  children?: React.ReactNode;
}

/**
 * Twemoji are used to render consistent emojis cross-browser, as you might
 * see on Discord. This ensures that puzzle content is consistent regardless of
 * the browser. See https://twemoji.twitter.com/ for more details.
 *
 * By default, copy-to-clipboard copies the image, not the unicode.
 * For the latter, use <CopyableTwemoji> with the copyUnicodeEmoji option enabled.
 */
const Twemoji = forwardRef<HTMLImageElement, TwemojiProps>(
  (
    { emoji = undefined, options = undefined, children = undefined, ...props },
    ref
  ) => {
    return (
      <>
        <ReactTwemoji
          // TODO: turn this back on if we actually need the forwardref
          // I didn't see anywhere it was being used.
          // ref={ref}
          options={{
            ...options,
          }}
          {...props}
        >
          {emoji}
          {children && <span>{children}</span>}
        </ReactTwemoji>

        <style jsx>{`
          :global(.emoji) {
            height: 1em;
            width: 1em;
            vertical-align: middle;
          }
          span {
            vertical-align: middle;
          }
        `}</style>
      </>
    );
  }
);

export const CopyableTwemoji: React.FC<TwemojiProps> = ({
  emoji,
  updatable,
  options = {} as TwemojiOptions,
  ...props
}) => {
  return (
    <>
      <Twemoji
        emoji={emoji}
        options={{
          ...options,
          className: cx(options.className, {
            // Don't render the text when copy-pasting if unicode enabled
            [NO_COPY_CLASS]: options.copyUnicodeEmoji,
          }),
        }}
        {...props}
      />
      {/* Render unicode emoji if enabled */}
      {options.copyUnicodeEmoji && (
        <span className={HIDDEN_CLASS}>{emoji}</span>
      )}
    </>
  );
};

export const InlineTwemoji: React.FC<{
  emoji?: string;
  copyImage?: boolean;
  children?: React.ReactFragment;
  updatable?: boolean;
}> = ({ emoji, copyImage = false, children, updatable = false }) => (
  <CopyableTwemoji
    tag="span"
    emoji={emoji ?? children ?? undefined}
    options={{ className: 'emoji inline-block', copyUnicodeEmoji: !copyImage }}
  />
);

export default Twemoji;
