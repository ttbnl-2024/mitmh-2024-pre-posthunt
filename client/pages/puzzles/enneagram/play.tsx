import { getPuzzleProps } from 'components/puzzle';
import Enneagram from 'components/puzzles/enneagram/play';

const SLUG = 'enneagram';

export default Enneagram;

// This page is bare -- don't render hunt site. We do need the
// cryptkeys from the puzzle, though
export const getServerSideProps = async (context) => {
  let props = await getPuzzleProps(SLUG)(context);

  if (props.props?.puzzleData) {
    props.props.bare = true;
  }

  return props;
};
