export class Appoiment {
  constructor(
    public appoimentDate: Date,
    public shcheduleTime: string,
    public clientName: string
  ) {}

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

/// Utils
export const dateToWeekId = (date: Date) => new Date().getDate();
//export const dateToWeekId = () => {};
