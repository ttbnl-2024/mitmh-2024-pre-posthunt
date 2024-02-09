import InfoIcon from 'components/info_icon';
import Link from 'components/link';

const EventPuzzle = () => {
  return (
    <div>
      <InfoIcon>
        This event has ended. Solvers would have received an answer upon
        completing the event.
      </InfoIcon>
      <p>
        <Link href="/events">Return to the Events page</Link>
      </p>
    </div>
  );
};

export default EventPuzzle;