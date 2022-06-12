import { Injectable } from '@angular/core';
import { getWeek, startOfWeek, addDays } from 'date-fns';
import { ScheduleConfig, WeekDaysConfig } from '../models/appoiment';

@Injectable({
  providedIn: 'root',
})
export class WeekService {
  private baseHours!: number[];
  private baseDays!: Date[];

  private scheduleConfig: ScheduleConfig = {
    availableDays: { 0: false },
    timeInterval: 30,
    startedShift: 9,
    endShift: 20,
    unavailableHours: [],
  };

  getConfiguration(): ScheduleConfig {
    return {
      availableDays: { 0: false },
      timeInterval: 30,
      startedShift: 9,
      endShift: 20,
      unavailableHours: [],
    };
  }

  private get baseDate() {
    return new Date();
  }

  baseData() {
    this.baseDays = this.validDays(startOfWeek(this.baseDate));
    this.baseHours = this.availableHours();
  }

  private get identifyWeekNumber() {
    return 'Sem' + getWeek(this.baseDate);
  }

  private validDays(startDate: Date) {
    const weekDaysConf: WeekDaysConfig[] = [
      { 0: false },
      { 1: true },
      { 2: true },
      { 3: true },
      { 4: true },
      { 5: true },
      { 6: false },
    ];

    return weekDaysConf
      .filter((wdc, i) => wdc[i])
      .map(wd => addDays(startDate, +Object.keys(wd)[0]));
  }

  private availableHours() {
    this.scheduleConfig.startedShift;
    this.scheduleConfig.endShift;
    this.scheduleConfig.timeInterval = 20;

    return [
      ...this.Range(
        (this.scheduleConfig.endShift - this.scheduleConfig.startedShift) /
          (this.scheduleConfig.timeInterval / 60),
        this.scheduleConfig.timeInterval / 60,
        this.scheduleConfig.startedShift
      ),
    ];
  }

  private Range = function* (total = 0, step = 1, from = 0) {
    for (let i = 0; i < total; yield from + i++ * step) {}
  };
}
