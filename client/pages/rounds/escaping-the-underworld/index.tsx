const SLUG = 'escaping-the-underworld';

export default () => {};
export const getServerSideProps = async (context) => {
  return {
    redirect: {
      destination: `/puzzles/${SLUG}`,
      permanent: false,
    },
  };
};
