import React, { FC, ReactNode } from 'react';

const Attributions: FC<{ children?: ReactNode }> = ({ children }) => (
  <>
    <h2 id="attributions">Attributions</h2>
    {children}
  </>
);

export default Attributions;
