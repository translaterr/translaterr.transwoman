import {Guid} from "guid-typescript";

interface TenantModel {
  publicId: Guid,
  name: string,
}

export default TenantModel;