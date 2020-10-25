import React from 'react';

import CircularProgress from "@material-ui/core/CircularProgress";

const FullPageLoader: React.FC = () => {

  return (
      <CircularProgress size={200} />
  )
};

FullPageLoader.displayName = "FullPageLoader";
export default FullPageLoader;