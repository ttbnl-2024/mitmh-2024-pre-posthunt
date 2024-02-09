import { FC, FormEvent, useEffect, useState } from 'react';
import { DjangoFormResponse } from 'types';

import { clientFetch } from 'utils/fetch';
import { useRouter } from 'utils/router';

import { Monospace } from 'components/copy';
import FlavorText from 'components/flavor_text';

const InfinityBook: FC<{ target: number }> = ({ target }) => {
  const [pageNum, setPageNum] = useState<bigint>(BigInt(1));
  const [pageContents, setPageContents] = useState<string>('');
  const [pageError, setPageError] = useState<string>('');
  const [encError, setEncError] = useState<string>('');
  const [enc, setEnc] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const encodeHandler = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    const response = await clientFetch<
      DjangoFormResponse<{}, { response: string }>
    >(router, `/infinity-book/encode`, {
      method: 'POST',
      body: formData,
    });
    if (response.form_errors) {
      setEnc('');
      setEncError(response.form_errors.__all__ || '');
    } else {
      setEnc(response.data?.response || '');
      setEncError('');
    }
    setLoading(false);
  };

  const pageHandler = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('page', `${pageNum}`);
    const response = await clientFetch<
      DjangoFormResponse<{}, { page: string }>
    >(router, `/infinity-book/page`, {
      method: 'POST',
      body: formData,
    });
    if (response.form_errors) {
      setPageContents('');
      setPageError(response.form_errors.__all__ || '');
    } else {
      setPageContents(response.data?.page || '');
      setPageError('');
    }
    setLoading(false);
  };

  // Basically I don't want to bother with invocations...
  useEffect(() => {
    pageHandler();
  }, [pageNum]);

  return (
    <>
      <FlavorText>You hear two clicks whenever you submit.</FlavorText>
      <p className="break-words">
        Allowed characters:{' '}
        <Monospace>
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .!
        </Monospace>
      </p>
      <div className="text-center">
        <form onSubmit={encodeHandler}>
          <input
            type="text"
            name="message"
            className="px-1 font-mono"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="mx-4 !bg-neutral-300 !text-black border-none rounded-xl p-2"
            disabled={loading}
          />
          {enc && <p className="font-mono">{enc}</p>}
          {encError && <p className="text-red-500">{encError}</p>}
        </form>
      </div>
      <hr className="my-4" />

      <div className="text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            setPageNum(BigInt(formData.get('page')?.toString() || '1'));
          }}
        >
          <input type="number" name="page" min={1} className="px-1" required />
          <input
            type="submit"
            value="Go"
            className="mx-4 !bg-neutral-300 !text-black border-none rounded-xl p-2"
            disabled={loading}
          />
        </form>
      </div>
      {pageError && <p className="text-red-500">{pageError}</p>}
      <div className="text-center mt-2">
        <button
          className="mx-4 !bg-neutral-300 !text-black border-none rounded p-1"
          onClick={(_) =>
            setPageNum(
              pageNum - BigInt(1) < BigInt(1) ? BigInt(1) : pageNum - BigInt(1)
            )
          }
          disabled={loading}
        >
          &lt;
        </button>
        <span>Page {pageNum.toString()}</span>
        <button
          className="mx-4 !bg-neutral-300 !text-black border-none rounded p-1"
          onClick={(_) => setPageNum(pageNum + BigInt(1))}
          disabled={loading}
        >
          &gt;
        </button>
      </div>
      <div className="flex items-center">
        <p className="font-mono sm:max-w-md max-w-full block mx-auto pr-1 pl-2 py-1 border border-black break-words">
          {pageContents}
        </p>
      </div>
      <p className="text-center">[{target}]</p>
    </>
  );
};

export default InfinityBook;
