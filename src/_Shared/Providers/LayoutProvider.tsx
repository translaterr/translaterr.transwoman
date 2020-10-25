import React, {useState} from 'react';

import LayoutContext from "../Contexts/LayoutContext";

const LayoutProvider: React.FC = ({children}) => {

  const [leftSideBarOpen, setLeftSideBarOpen] = useState<boolean>(false);
  const [contentIsLoading, setContentIsLoading] = useState<boolean>(false);

  return (
      <LayoutContext.Provider value={{
        leftSideBarOpen,
        setLeftSideBarOpen,
        contentIsLoading,
        setContentIsLoading
      }}>
        {children}
      </LayoutContext.Provider>
  )
};

LayoutProvider.displayName = "LayoutProvider";
export default LayoutProvider;