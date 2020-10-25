import React, {useContext, useEffect, useState} from 'react';

import HttpClientContext from "../Contexts/HttpClientContext";
import TenantsContext from "../Contexts/TenantsContext";
import ApplicationsContext from "../Contexts/ApplicationsContext";

import ApplicationModel from "../Models/ApplicationModel";

const ApplicationsProvider: React.FC = ({children}) => {
  const [applications, setApplications] = useState<ApplicationModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  const {transman} = useContext(HttpClientContext);
  const {selectedTenant} = useContext(TenantsContext);

  useEffect(() => {
    if(selectedTenant !== null) {
      setIsLoading(true);

      transman.get<ApplicationModel[]>(`api/${selectedTenant.publicId}/applications`)
          .then(result => setApplications(result.data))
          .catch(() => setHasFailed(true))
          .finally(() => setIsLoading(false));
    }
  }, [transman, selectedTenant]);

  return (
      <ApplicationsContext.Provider value={{
        applications, isLoading, hasFailed
      }}>
        {children}
      </ApplicationsContext.Provider>
  )
}

ApplicationsProvider.displayName = "ApplicationsProvider";
export default ApplicationsProvider;