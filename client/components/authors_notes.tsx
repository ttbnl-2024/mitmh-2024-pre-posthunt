import React, { FC, ReactNode } from 'react';

const AuthorsNotes: FC<{ children?: ReactNode }> = ({ children }) => (
  <>
    <h2 id="authors-notes">Authors' Notes</h2>
    {children}
  </>
);

export default AuthorsNotes;
