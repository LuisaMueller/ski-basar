import { Customer } from './customer.model';
import { Good } from './good.model';

export class GoodsList {
  id: string;
  number: number;
  tableItems: Good[];
  archivedTableItems: Good[];
  deletedTableItems?: Good[];
  editor?: string;
  note?: string;
  fee?: number;
  customer: Customer;
  isMailStartSend: boolean;
  isMailEndSend: boolean;
}
