import cx from 'classnames';
import { FormEvent, useState } from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import { Monospace, NO_COPY_CLASS } from 'components/copy';

const SLUG = 'marathon-block-pushing-game';

const Sokoban = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const sokobanHandler = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setMessage('Loading...');
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    const response = await clientFetch<
      DjangoFormResponse<{}, { message: string }>
    >(router, `/puzzle/${SLUG}/sokoban`, {
      method: 'POST',
      body: formData,
    });
    if (response.form_errors) {
      setMessage(response.form_errors.__all__ || '');
    } else if (response.data) {
      setMessage(response.data?.message);
    }
    setLoading(false);
  };

  return (
    <>
      <p>
        Now it's your turn to build a sokoban for us! Don't worry, it doesn't
        have to be as huge as the one we gave you. It only has to be 20x20 with
        only one box! But to make sure your sokoban is not trivial, it must be
        solvable in <b>no less than 1000 moves</b>.
      </p>
      <p>
        Your submission should consist of 20 lines. Each line is a string of 20
        characters, depicting the row of your sokoban. Each string must consist
        only of <Monospace>.</Monospace>, <Monospace>#</Monospace>,{' '}
        <Monospace>P</Monospace>, <Monospace>O</Monospace>,{' '}
        <Monospace>*</Monospace>, meaning an empty square, wall, player, target
        and box respectively. There must be exactly one <Monospace>P</Monospace>
        , one <Monospace>O</Monospace> and one <Monospace>*</Monospace> in your
        submission.
      </p>
      <div className={cx(NO_COPY_CLASS)}>
        <form className="text-center" onSubmit={sokobanHandler}>
          <input
            type="submit"
            value="Submit"
            className="mb-2 !bg-neutral-300 !text-black border-none rounded-xl p-2"
            disabled={loading}
          />
          {message && (
            <span className="mb-1 block md:max-w-[50%] mx-auto">{message}</span>
          )}
          <textarea
            name="grid"
            rows={21}
            cols={21}
            required={true}
            className="p-2 font-mono block mx-auto"
          />
        </form>
      </div>
    </>
  );
};

export default Sokoban;
