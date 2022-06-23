export class AvailableAppoiment extends AppoimentBase {}

export class Appoiment extends AppoimentBase {
  constructor(
    public cliente: string,
    date: Date,
    state: AppoimentState = 'available'
  ) {
    super(date, state);
  }
}

export type AppoimentState = 'available' | 'ocuped';

export interface AppoimentsByDay {
  [key: string]: AvailableAppoiment[] | Appoiment[];
}

export interface ScheduleConfig {
  timeInterval: number;
  startedShift: number;
  endShift: number;
  unavailableHours: number[];
  availableDays: AvailableWeekDays[];
}

//Identificar los dias que se proporcionara el servicio
export interface AvailableWeekDays {
  [key: number]: boolean;
}

/// Utils
export const dateToWeekId = (date: Date) => new Date().getDate();
//export const dateToWeekId = () => {};

export interface WeeksInfo {
  [key: number]: AppoimentBase[];
}
