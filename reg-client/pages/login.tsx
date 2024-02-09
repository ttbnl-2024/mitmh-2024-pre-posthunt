import RegistrationPageBase from 'components/content_page_base';
import { SubsectionHeading } from 'components/headings';
import Login from 'components/login';

const LoginPage = () => {
  return (
    <RegistrationPageBase title="Mystery Hunt 2024 - Login">
      <section className="mx-auto w-full lg:w-[50vw] px-4 py-12 lg:py-24 space-y-12">
        <SubsectionHeading>Login</SubsectionHeading>
        <Login />
      </section>
    </RegistrationPageBase>
  );
};

export default LoginPage;
