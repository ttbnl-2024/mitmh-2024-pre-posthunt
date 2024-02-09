import PrivacyPolicy from 'components/privacy';
import Section from 'components/section';

const PrivacyPage = () => {
  return (
    <Section narrow>
      <PrivacyPolicy />
    </Section>
  );
};

export default PrivacyPage;

export const getServerSideProps = () => {
  return {
    props: {
      bare: true,
    },
  };
};
