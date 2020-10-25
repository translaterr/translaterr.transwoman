import {createContext} from 'react';

import TenantModel from "../Models/TenantModel";

export interface TenantsContextValues {
  tenants: TenantModel[],
  selectedTenant: TenantModel|null,
  setSelectedTenant: (arg0: TenantModel) => void,
  isLoading: boolean,
  hasFailed: boolean
}

const TenantsContext = createContext<TenantsContextValues>({
  tenants: [],
  selectedTenant: null,
  setSelectedTenant: tenant => {},
  isLoading: true,
  hasFailed: false,
});

export default TenantsContext;