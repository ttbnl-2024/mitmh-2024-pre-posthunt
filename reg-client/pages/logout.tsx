import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { clientFetch } from 'utils/fetch';

import Section from 'components/section';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    clientFetch(router, '/logout', { method: 'GET' }, true).then(() => {
      router.push('/');
    });
  }, [router]);
  return <Section>Logging you out...</Section>;
};

export default Logout;
