import { Good } from './good.model';

export class GoodsList {
  id: string;
  number: string;
  tableItems?: Good[];
  editor?: string;
  note?: string;
  fee?: string;
  firstName: string;
  lastName: string;
  street: string;
  postcode: string;
  phonenumber: string;
  email: string;
  password?: string;
  isHelper: boolean;
}
