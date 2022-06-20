import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Appoiment, AppoimentsByDay } from '../models/appoiment';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { WeekService } from './week.service';

@Injectable({
  providedIn: 'root',
})
export class AppoimentService {
  weekAppoiments = new BehaviorSubject<AppoimentsByDay>({});

  constructor(
    @Inject(forwardRef(() => WeekService)) private weekService: WeekService
  ) {}

  get weekAppoiments$() {
    return this.weekAppoiments.asObservable();
  }

  getAppoimentsByWeek(): Appoiment[] {
    return [
      new Appoiment('Ernesto', new Date(2022, 4, 20, 17, 0), 'ocuped'),
      new Appoiment('Itzel', new Date(2022, 4, 20, 18, 0), 'ocuped'),
      new Appoiment('Maria', new Date(2022, 4, 18, 17, 0), 'ocuped'),
      new Appoiment('Edgar', new Date(2022, 4, 19, 18, 0), 'ocuped'),
    ];
  }

  getWeekAppoinments() {
    const weekBaseDate = this.weekService.baseData();
    const appointmensByWeek = this.getAppoimentsByWeek();

    const result = appointmensByWeek.reduce(
      (appointmentsDay, appointmentvalue) => {
        if (!appointmentsDay[appointmentvalue.dateStr]) {
          appointmentsDay[appointmentvalue.dateStr] = [appointmentvalue];
        } else {
          const appointmentDayinfo = appointmentsDay[appointmentvalue.dateStr];
          appointmentsDay[appointmentvalue.dateStr] = [
            ...appointmentDayinfo,
            appointmentvalue,
          ];
        }

        return appointmentsDay;
      },
      <AppoimentsByDay>{}
    );

    this.weekAppoiments.next(result);
  }
}
