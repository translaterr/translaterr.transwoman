import React, {useContext} from 'react';

import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import TenantsContext from "../../Contexts/TenantsContext";
import TenantModel from "../../Models/TenantModel";

const TenantSelector: React.FC = () => {
  const {tenants} = useContext(TenantsContext);

  const handleChange = (e: any) => {
    console.log({e});
  }

  return (
      <>
        <InputLabel id="tenant-selector-label" htmlFor="tenant-selector">Select tenant</InputLabel>
        <Select
            labelId="tenant-selector-label"
            id="tenant-selector"
            onChange={handleChange}
        >
          {tenants.map((tenant: TenantModel) => (
              <MenuItem value={tenant.publicId.toString()}>{tenant.name}</MenuItem>
          ))}
        </Select>
      </>
  )
};

TenantSelector.displayName = "TenantSelector";
export default TenantSelector;