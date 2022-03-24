import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";
import { ProductCreateNestedManyWithoutAddressesInput } from "./ProductCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  products?: ProductCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
