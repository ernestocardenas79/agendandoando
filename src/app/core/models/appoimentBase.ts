import format from 'date-fns/format';
import { AppoimentState } from './AppoimentState';

export abstract class AppoimentBase {
  constructor(public date: Date, public state: AppoimentState = 'available') {}

  get dateKeyStr() {
    return format(this.date, 'yyyyMMdd');
  }
}
