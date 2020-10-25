import {createContext} from 'react';

import ApplicationModel from "../Models/ApplicationModel";

export interface ApplicationsContextValues {
  applications: ApplicationModel[],
  isLoading: boolean,
  hasFailed: boolean
}

const ApplicationsContext = createContext<ApplicationsContextValues>({
  applications: [],
  isLoading: true,
  hasFailed: false,
});

export default ApplicationsContext;