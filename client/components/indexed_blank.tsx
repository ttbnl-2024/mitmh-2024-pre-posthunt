import cx from 'classnames';
import React, { FC } from 'react';

import { HIDDEN_CLASS, NO_COPY_CLASS } from 'components/copy';

interface Props {
  label: number[] | string;
  idxs?: number[];
  extractClass?: string;
  tableClass?: string;
  showEnum?: boolean;
}

const FIRST_NUM = /^\d+/;

const IndexedBlank: FC<Props> = ({
  label,
  idxs = [],
  extractClass = 'bg-green-400',
  tableClass = 'flex flex-wrap mt-4 mx-auto items-center justify-center gap-x-3',
  showEnum = true,
  ...props
}) => {
  let tds: React.JSX.Element[] = [];

  if (Array.isArray(label)) {
    label = label.join(' ');
  }
  label = label.replaceAll(' ', '\u00A0');

  let outLabel = `(${label})`;
  if (idxs.length > 0) {
    outLabel = `(${idxs.join(', ')} / ` + outLabel.substring(1);
  }

  let tdNum = 0;
  if (showEnum) {
    tds.push(
      <td className={cx(HIDDEN_CLASS)} key={tdNum + '-enum-hidden'}>
        {"'" + outLabel}
      </td>
    );
    tdNum++;
  }

  let currNum = 0;
  while (label) {
    let next = FIRST_NUM.exec(label);
    if (next) {
      // Number, so add corresponding # of blanks
      let b = parseInt(next[0], 10);
      for (let i = 0; i < b; i++) {
        currNum++;
        let isExtract = idxs.includes(currNum);
        tds.push(
          <td
            className={cx(
              { [`${extractClass}`]: isExtract },
              '!px',
              'sm:!px-0.5',
              '!py-1.5',
              'font-mono',
              'font-bold',
              'text-center'
            )}
            key={tdNum}
          >
            _
          </td>
        );
        tdNum++;
      }
      label = label.substring(next[0].length);
    } else {
      // Not a number, so add in its own table cell
      tds.push(
        <td className="font-mono !px-0.5 text-center" key={tdNum + '-blank'}>
          <span className={cx(HIDDEN_CLASS)}>'</span>
          {label[0]}
        </td>
      );
      tdNum++;
      label = label.substring(1);
    }
  }

  let ret = [<tr key="tr-blanks">{tds}</tr>];
  return (
    <>
      <div className={tableClass} {...props}>
        <table>
          <tbody>{ret}</tbody>
        </table>
        {showEnum && (
          <span className={cx(NO_COPY_CLASS)} key={tdNum + '-enum-shown'}>
            {outLabel}
          </span>
        )}
      </div>
      <br className={cx(HIDDEN_CLASS)} />
      <style jsx>{`
        @media print {
          td {
            /* Ensure that highlighted blanks are highlighted when printed */
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
};

export default IndexedBlank;
