import cx from 'classnames';
import hljs from 'highlight.js';
import { HTMLProps, forwardRef } from 'react';

interface HighlightProps {
  lang: string;
  children: string;
  enc?: boolean;
  className?: string;
}

const Highlight = forwardRef<HTMLPreElement, HighlightProps>(
  ({ lang, children, enc, className }, ref) => {
    if (enc) {
      // lmfao
      lang = lang.substring(5).replace(/[a-z]/gi, (c) => {
        let n = c.charCodeAt(0);
        let l = n & (0x1f - 1);
        return String.fromCharCode(n - l + ((l + 7) % 26));
      });
    }

    return (
      <pre ref={ref} className={cx('hljs p-2', className)}>
        <code
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(children, { language: lang }).value,
          }}
        ></code>
      </pre>
    );
  }
);

export default Highlight;
