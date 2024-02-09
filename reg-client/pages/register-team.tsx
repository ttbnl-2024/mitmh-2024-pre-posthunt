import Router from 'next/router';
import { useContext, useEffect } from 'react';

import RegistrationPageBase from 'components/content_page_base';
import HuntInfoContext, { isLoggedInAs } from 'components/context';
import { SubsectionHeading } from 'components/headings';
import RegisterTeam from 'components/register_team';

const RegisterTeamPage = () => {
  const huntInfoContext = useContext(HuntInfoContext);
  const loggedInSlug: string | undefined =
    huntInfoContext.userInfo?.teamInfo?.slug;
  const loggedInAs = isLoggedInAs(huntInfoContext);

  // If someone tries to go to /register-team while logged in as an individual, direct them appropriately
  useEffect(() => {
    if (loggedInAs === 'individual') {
      Router.push('/register-individual');
    }
  }, []);

  return (
    <RegistrationPageBase title="Mystery Hunt 2024 - Register">
      <section className="mx-auto w-[90vw] lg:w-[60vw] px-3 py-12 lg:py-24 space-y-8">
        <SubsectionHeading>Register a team</SubsectionHeading>
        <RegisterTeam
          loggedInSlug={loggedInSlug}
          huntStarted={huntInfoContext.huntInfo.secondsToStartTime <= 0}
        />
      </section>
    </RegistrationPageBase>
  );
};

export default RegisterTeamPage;
