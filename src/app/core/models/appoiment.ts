export class Appoiment {
  constructor(public appoimentDate: Date, public clientName: string) {}

  get dateStr() {
    return this.appoimentDate
      .toLocaleString('default', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      })
      .replaceAll('/', '');
  }
}

export interface AppoimentsByDay {
  [key: string]: Appoiment[];
}

export interface ScheduleConfig {
  timeInterval: number;
  startedShift: number;
  endShift: number;
  unavailableHours: number[];
  availableDays: WeekDaysConfig;
}

export interface WeekDaysConfig {
  [key: number]: boolean;
}

/// Utils
export const dateToWeekId = (date: Date) => new Date().getDate();
//export const dateToWeekId = () => {};
