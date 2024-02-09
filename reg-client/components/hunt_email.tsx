import React from 'react';

const HuntEmail = ({ user = 'info' }) => {
  const email = `${user}@mitmh2024.com`;
  // do not need to use Link since it's an email URL.
  return <a href={'mailto:' + email}>{email}</a>;
};

export default HuntEmail;
