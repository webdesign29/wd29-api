import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { ProductUpdateManyWithoutAddressesInput } from "./ProductUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  products?: ProductUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
