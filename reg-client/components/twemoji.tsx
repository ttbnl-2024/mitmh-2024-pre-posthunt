import twemoji from '@twemoji/api';
import cx from 'classnames';
import React, {
  HTMLAttributes,
  ReactNode,
  createElement,
  forwardRef,
  useEffect,
  useRef,
} from 'react';

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
  const ref = useRef<HTMLDivElement>(null);

  const _parseTwemoji = function () {
    if (ref.current) {
      // https://github.com/jdecked/twemoji/pull/1
      (twemoji as any).parse(ref.current, options);
    }
  };
  useEffect(() => {
    _parseTwemoji();
  }, []);

  return createElement(tag, { ref: ref }, children);
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
  options?: TwemojiOptions;
  tag?: string;
  children?: React.ReactNode;
  className?: string;
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
  ({ emoji = undefined, options = undefined, children, ...props }, ref) => (
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
  )
);

export const CopyableTwemoji: React.FC<TwemojiProps> = ({
  emoji,
  className,
  options = {} as TwemojiOptions,
  ...props
}) => {
  return (
    <>
      <Twemoji
        emoji={emoji}
        options={options}
        className={cx(className, {
          // Don't render the text when copy-pasting if unicode enabled
          [NO_COPY_CLASS]: options.copyUnicodeEmoji,
        })}
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
}> = ({ emoji, copyImage = false, children }) => (
  <CopyableTwemoji
    tag="span"
    emoji={emoji ?? children ?? undefined}
    options={{ className: 'emoji inline-block', copyUnicodeEmoji: !copyImage }}
  />
);

export default Twemoji;
