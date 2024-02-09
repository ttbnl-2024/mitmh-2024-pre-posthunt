import React, { ReactNode } from 'react';

import { SUPPORTS_SHARED_WORKER, useWorker } from 'utils/worker';

import InfoIcon from 'components/info_icon';

const WorkerLoadingIcon: React.FC<{
  needsShared?: boolean;
  children?: ReactNode;
}> = ({ children, needsShared = false }) => {
  if (!process.env.useWorker) return null;
  const { ready, error } = useWorker();
  if (error || (needsShared && !SUPPORTS_SHARED_WORKER)) {
    return (
      <InfoIcon warning center color="orangered">
        Some interactive components are not supported by your browser. Please
        use a recent version of Firefox without private browsing or desktop
        Chrome.
      </InfoIcon>
    );
  }
  if (ready) return null;
  return (
    <InfoIcon center color="darkorange">
      {children ? children : 'Loading interactive components...'}
    </InfoIcon>
  );
};

export default WorkerLoadingIcon;
