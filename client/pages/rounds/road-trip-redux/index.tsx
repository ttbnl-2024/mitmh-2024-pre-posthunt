const SLUG = 'road-trip-redux';

export default () => {};
export const getServerSideProps = async (context) => {
  return {
    redirect: {
      destination: `/puzzles/${SLUG}`,
      permanent: false,
    },
  };
};
