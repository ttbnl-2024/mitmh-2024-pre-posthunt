import { FormEvent, useContext, useState } from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import HuntInfoContext from 'components/context';
import Section from 'components/section';

const Page = () => {
  const { userInfo, huntInfo } = useContext(HuntInfoContext);
  const [isBeingTimeUnlocked, setIsBeingTimeUnlocked] = useState<boolean>(
    userInfo?.teamInfo?.isBeingTimeUnlocked || false
  );
  const router = useRouter();

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !confirm(
        'Are you sure you want to opt into time unlocks? You will receive all time-unlocked puzzles at once.'
      )
    ) {
      return;
    }

    const response = await clientFetch<DjangoFormResponse<{}, {}>>(
      router,
      `/opt-into-time-unlock`,
      {
        method: 'POST',
        body: new FormData(),
      }
    );

    if (!response.form_errors) {
      setIsBeingTimeUnlocked(true);
    }
  };

  if (isBeingTimeUnlocked) {
    return (
      <>
        <Section narrow>
          <div className="flex flex-col space-y-6 bg-white px-4 pb-2 mt-[20vh] rounded-lg">
            <p>You are currently being time unlocked.</p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Section narrow>
        <div className="flex flex-col space-y-6 bg-white px-4 pb-2 mt-[20vh] rounded-lg">
          <form onSubmit={onFormSubmit}>
            <button
              type="submit"
              className="block mx-auto my-2 !bg-red-500 !text-white border-none rounded-xl p-2"
            >
              Opt into time unlocks (DANGER: NOT REVERSIBLE)
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Page;
