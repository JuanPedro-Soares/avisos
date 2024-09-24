import { ICustomer } from './customer.interface';

export interface ICustomerModalData {
  title: string;
  icon: string;
  customer: ICustomer;
  customerID: number;
}
