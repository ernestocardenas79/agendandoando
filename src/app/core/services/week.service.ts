import { Inject, Injectable } from '@angular/core';
import { getWeek, startOfWeek, addDays, addHours, format } from 'date-fns';
import { BASE_DATE } from 'src/app/app.module';
import { AvailableWeekDays } from '../models/availableWeekDays';
import { ScheduleConfig } from '../models/scheduleConfig';
import { WeeksInfo } from '../models/weeksInfo';
import { Range, appoimentsGen } from 'src/app/utils';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { Appoiment } from '../models/appoiment';

@Injectable()
export class WeekService {
  private baseHours!: number[];
  private WeeksInfo: WeeksInfo;

  private scheduleConfig!: ScheduleConfig;

  weekSelectedWeek = new Subject<number>();
  weekSelectedDay = new Subject<string>();

  weekAppoimentsBySelectedDay$ = this.weekSelectedDay.asObservable().pipe(
    switchMap(r => this.weekSelectedWeek),
    map(w => this.WeeksInfo[0])
  );

  constructor(@Inject(BASE_DATE) public baseDateConfig: Date) {
    this.getConfiguration();
    this.WeeksInfo = {};
  }

  //Obtiene Configuracio de FB para el cliente
  private getConfiguration(): void {
    this.scheduleConfig = {
      availableDays: [
        { 0: false },
        { 1: true },
        { 2: true },
        { 3: true },
        { 4: true },
        { 5: true },
        { 6: false },
      ],
      timeInterval: 60,
      startedShift: 9,
      endShift: 20,
      unavailableHours: [],
    };

    this.baseHours = this.availableHours(this.scheduleConfig);
  }

  get baseDate() {
    const date = this.baseDateConfig;
    return startOfWeek(new Date(date).setHours(0, 0, 0));
  }

  weekConfig(date: Date) {
    if (!this.WeeksInfo[this.weekNumber(date)]) {
      this.buildWeek(this.baseDate);
    }
    return [...this.WeeksInfo[this.weekNumber(date)]];
  }

  get firtsAvailableDay() {
    try {
      return format(
        this.WeeksInfo[this.weekNumber(this.baseDate)][0]?.date,
        'yyyyMMdd'
      );
    } catch (error) {
      return;
    }
  }

  private buildWeek(date: Date) {
    this.WeeksInfo = {
      [this.weekNumber(date)]: [
        ...this.validDaysGen(date, this.scheduleConfig),
      ],
    };
  }

  weekNumber(date: Date) {
    return getWeek(date);
  }

  get weekRangeDays() {
    return `de ${format(
      this.WeeksInfo[this.weekNumber(this.baseDate)][0].date,
      'dd'
    )} al ${format(
      this.WeeksInfo[this.weekNumber(this.baseDate)][
        this.WeeksInfo[this.weekNumber(this.baseDate)].length - 1
      ].date,
      'dd'
    )}`;
  }

  private validDaysGen(startDate: Date, scheduleConfig: ScheduleConfig) {
    const weekDaysConf: AvailableWeekDays[] = [...scheduleConfig.availableDays];

    return weekDaysConf
      .filter((wdc, i) => wdc[i])
      .map(function* (wd) {
        yield* appoimentsGen(
          addHours(
            addDays(startDate, +Object.keys(wd)[0]),
            scheduleConfig.startedShift
          ),
          scheduleConfig
        );
      })
      .map(res => [...res])
      .flat();
  }

  private availableHours(scheduleConfig: ScheduleConfig) {
    scheduleConfig.startedShift;
    scheduleConfig.endShift;
    scheduleConfig.timeInterval;

    return [
      ...Range(
        (this.scheduleConfig.endShift - this.scheduleConfig.startedShift) /
          (this.scheduleConfig.timeInterval / 60),
        this.scheduleConfig.timeInterval / 60,
        this.scheduleConfig.startedShift
      ),
    ];
  }
}
