import React from 'react';

const HuntEmail = ({ user = 'info' }) => {
  // FIXME: Set team's email here, if it differs from your domain name.
  const email = `${user}@mitmh2024.com`;
  // do not need to use Link since it's an email URL.
  return <a href={'mailto:' + email}>{email}</a>;
};

export default HuntEmail;
