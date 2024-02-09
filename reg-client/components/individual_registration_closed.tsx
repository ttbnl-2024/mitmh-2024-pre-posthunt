import Link from 'next/link';
import React from 'react';

export const RegistrationClosed = () => {
  return (
    <div className="bg-off-white p-6">
      <span className="space-y-4">
        <p>
          Individual registration is closed for 2024. At this point, we are no
          longer assigning unattached hunters to teams, though you are still
          welcome to register as a team or join an existing team independently
          of the unattached hunters process.
        </p>
        <p>
          If you have an existing registration for this year, you can still view
          it by <Link href="/login">logging in.</Link>
        </p>
      </span>
    </div>
  );
};
