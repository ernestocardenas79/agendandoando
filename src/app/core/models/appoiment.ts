export class Appoiment {
  constructor(
    public appoimentDate: Date,
    public shcheduleTime: string,
    public clientName: string
  ) {}
}

/// Utils
export const dateToWeekId = (date: Date) => new Date().getDate();
//export const dateToWeekId = () => {};
