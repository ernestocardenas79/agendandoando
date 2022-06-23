import { AvailableWeekDays } from './availableWeekDays';

export interface ScheduleConfig {
  timeInterval: number;
  startedShift: number;
  endShift: number;
  unavailableHours: number[];
  availableDays: AvailableWeekDays[];
}
