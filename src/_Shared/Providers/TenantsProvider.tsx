import React, {useContext, useEffect, useState} from 'react';

import HttpClientContext from "../Contexts/HttpClientContext";
import TenantsContext from "../Contexts/TenantsContext";

import TenantModel from "../Models/TenantModel";

const TenantsProvider: React.FC = ({children}) => {
  const [tenants, setTenants] = useState<TenantModel[]>([]);
  const [selectedTenant, setSelectedTenant] = useState<TenantModel|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  const {transman} = useContext(HttpClientContext);

  useEffect(() => {
    setIsLoading(true);

    transman.get<TenantModel[]>("/api/tenants")
        .then(result => setTenants(result.data))
        .catch(() => setHasFailed(true))
        .finally(() => setIsLoading(false));
  }, [transman]);

  useEffect(() => {
    if(tenants.length === 1) {
      setSelectedTenant(tenants[0]);
    }
  }, [tenants]);

  return (
      <TenantsContext.Provider value={{
        tenants, selectedTenant, setSelectedTenant, isLoading, hasFailed
      }}>
        {children}
      </TenantsContext.Provider>
  )
}

TenantsProvider.displayName = "TenantsProvider";
export default TenantsProvider;