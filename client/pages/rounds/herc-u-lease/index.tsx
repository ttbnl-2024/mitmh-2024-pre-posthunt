const SLUG = 'herc-u-lease';

export default () => {};
export const getServerSideProps = async (context) => {
  return {
    redirect: {
      destination: `/puzzles/${SLUG}`,
      permanent: false,
    },
  };
};
