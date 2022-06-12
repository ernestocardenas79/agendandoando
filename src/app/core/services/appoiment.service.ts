import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Appoiment, AppoimentsByDay } from '../models/appoiment';
import { WeekService } from './week.service';

@Injectable({
  providedIn: 'root',
})
export class AppoimentService {
  weekAppoiments = new BehaviorSubject<AppoimentsByDay>({});

  constructor(private weekService: WeekService) {}

  get weekAppoiments$() {
    return this.weekAppoiments.asObservable();
  }

  getAppoimentsByWeek(): Appoiment[] {
    return [
      new Appoiment(new Date(2022, 4, 20, 17, 0), 'Ernesto'),
      new Appoiment(new Date(2022, 4, 20, 18, 0), 'Itzel'),
      new Appoiment(new Date(2022, 4, 21, 17, 30), 'Mari'),
      new Appoiment(new Date(2022, 4, 22, 18, 30), 'Edgar'),
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
