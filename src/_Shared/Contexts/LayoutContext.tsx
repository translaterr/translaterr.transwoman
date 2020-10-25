import {createContext} from 'react';

export interface LayoutContextValues {
  leftSideBarOpen: boolean,
  setLeftSideBarOpen: (arg0: boolean) => void,
  contentIsLoading: boolean,
  setContentIsLoading: (arg0: boolean) => void,
}

const LayoutContext = createContext<LayoutContextValues>({
  leftSideBarOpen: false,
  setLeftSideBarOpen: (arg0: boolean) => {},
  contentIsLoading: false,
  setContentIsLoading: (arg0: boolean) => {},
});

export default LayoutContext;