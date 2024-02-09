import Link from 'next/link';
import { useContext } from 'react';

import { serverFetch } from 'utils/fetch';

import RegistrationPageBase from 'components/content_page_base';
import { ImageBanner } from 'components/content_page_image_banner';
import HuntInfoContext from 'components/context';
import { isLoggedInAs } from 'components/context';
import {
  SubsectionHeading,
  sectionHeadingClassName,
} from 'components/headings';

import imgRegisterHero from 'assets/public/reg-no-pluto.jpg';

const RegisterPage = ({ teamsList }) => {
  const huntInfoContext = useContext(HuntInfoContext);
  const loggedInAs = isLoggedInAs(huntInfoContext);
  const loggedIn = !!huntInfoContext?.userInfo;

  const notLoggedInContent = (
    <>
      <p>
        Already registered?{' '}
        <Link href="/login" className="white">
          Click here to log in.
        </Link>
      </p>
      <div className="flex flex-wrap lg:space-x-4 flex-col lg:flex-row">
        <div className="pt-3">
          <Link
            href="/register-team"
            className="button-link button-link-accent"
          >
            Reserve as a team
          </Link>
        </div>
        <div className="pt-3">
          <Link
            href="/register-individual"
            className="button-link button-link-white"
          >
            Reserve without a team
          </Link>
        </div>
      </div>
    </>
  );

  const loggedInTeamContent = (
    <div className="pt-3">
      <Link href="/register-team" className="button-link button-link-white">
        Your registration
      </Link>
    </div>
  );

  const loggedInIndividualContent = (
    <div className="pt-3">
      <Link
        href="/register-individual"
        className="button-link button-link-white"
      >
        Your registration
      </Link>
    </div>
  );

  return (
    <RegistrationPageBase title="Mystery Hunt 2024 - Register">
      <ImageBanner imgSrc={imgRegisterHero}>
        <div className="flex flex-col space-y-6">
          <span className={sectionHeadingClassName}>
            {!process.env.isArchive && loggedIn
              ? 'Your registration'
              : 'Register'}
          </span>
          {!process.env.isArchive && (
            <>
              <span>
                {loggedIn
                  ? 'We look forward to seeing you and our other attendees at our opening plenary on January 12.'
                  : "Don't delay—register before December 31 to guarantee your spot!"}
              </span>
              {loggedInAs === 'team'
                ? loggedInTeamContent
                : loggedInAs === 'individual'
                ? loggedInIndividualContent
                : notLoggedInContent}
            </>
          )}
        </div>
      </ImageBanner>

      <section className="bg-off-white w-full p-12 lg:py-24 space-y-12">
        <SubsectionHeading>Attendees</SubsectionHeading>
        {teamsList.length > 0 ? (
          <>
            {!loggedInAs && (
              <p className="text-center">
                By registering, you will join our other attendees:
              </p>
            )}
            <div className="lg:w-1/2 mx-auto space-y-4 md:space-y-8 break-words">
              {teamsList.map((team) => (
                <div key={team.name}>
                  <h3>{team.name}</h3>
                  <p>{team.bio}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="lg:w-1/2 mx-auto space-y-4 md:space-y-8">
            <h3>No registered groups yet -- be the first!</h3>
          </div>
        )}
      </section>
    </RegistrationPageBase>
  );
};

export default RegisterPage;

export const getServerSideProps = async (context) => {
  const props = await serverFetch(context, '/registration_teams');
  return { props };
};
