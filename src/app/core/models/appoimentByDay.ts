import { Appoiment } from './appoiment';
import { AvailableAppoiment } from './availableAppoiment';

export interface AppoimentsByDay {
  [key: string]: AvailableAppoiment[] | Appoiment[];
}
