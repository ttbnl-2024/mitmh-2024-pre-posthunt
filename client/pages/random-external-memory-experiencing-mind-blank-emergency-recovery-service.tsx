import React from 'react';

import { serverFetch } from 'utils/fetch';

import Custom404 from 'pages/404';

interface QueryProps {
  error?: string;
  message?: string;
}

const SLUG = 'a-trip-down-memory-lane';

const FindPinLocation = ({ puzzleData }) => {
  if (puzzleData?.error) {
    return <Custom404 />;
  }

  return (
    <div className="pt-[60px] px-8">
      You've found an answer submission box for this puzzle!
    </div>
  );
};

export default FindPinLocation;

// This handles redirects internally
export const getServerSideProps = async (context) => {
  const props = await serverFetch<QueryProps>(
    context,
    `/puzzle/${SLUG}/found-pin-location`
  );
  return { props };
};
