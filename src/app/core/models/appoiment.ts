
export class Appoiment extends AppoimentBase {
  constructor(
    public cliente: string,
    date: Date,
    state: AppoimentState = 'available'
  ) {
    super(date, state);
  }
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
