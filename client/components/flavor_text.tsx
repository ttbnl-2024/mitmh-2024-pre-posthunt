import cx from 'classnames';
import React, { FC, ReactNode } from 'react';

const FlavorText: FC<{ className?: string; children?: ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <>
      <p className={cx('block flavortext', className)}>{children}</p>
      <style jsx>{`
        .flavortext {
          font-style: italic;
        }
      `}</style>
    </>
  );
};

export default FlavorText;
