
export class Appoiment extends AppoimentBase {
  constructor(
    public cliente: string,
    date: Date,
    state: AppoimentState = 'available'
  ) {
    super(date, state);
  }
}

/// Utils
export const dateToWeekId = (date: Date) => new Date().getDate();
//export const dateToWeekId = () => {};

export interface WeeksInfo {
  [key: number]: AppoimentBase[];
}
