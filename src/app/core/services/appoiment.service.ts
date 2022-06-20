import { forwardRef, Inject, Injectable } from '@angular/core';
import isEqual from 'date-fns/isEqual';
import { BehaviorSubject } from 'rxjs';
import {
  Appoiment,
  AppoimentsByDay,
  AvailableAppoiment,
} from '../models/appoiment';
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

  // Consulta las citas registradas en la BD
  getAppoimentsByWeek(): Appoiment[] {
    return [
      new Appoiment('Ernesto', new Date(2022, 4, 20, 17, 0), 'ocuped'),
      new Appoiment('Itzel', new Date(2022, 4, 20, 18, 0), 'ocuped'),
      new Appoiment('Maria', new Date(2022, 4, 18, 17, 0), 'ocuped'),
      new Appoiment('Edgar', new Date(2022, 4, 19, 18, 0), 'ocuped'),
    ];
  }

  getWeekAppoinments(date: Date) {
    const weekBaseDate = this.weekService.weekConfig(date);
    const appointmensByWeek = this.getAppoimentsByWeek();

    const result = weekBaseDate.reduce((appointmentsDay, appointmentvalue) => {
      if (!appointmentsDay[appointmentvalue.dateKeyStr]) {
        appointmentsDay[appointmentvalue.dateKeyStr] = [
          this.verifyAppoiment(appointmensByWeek, appointmentvalue),
        ];
      } else {
        const appointmentDayinfo = appointmentsDay[appointmentvalue.dateKeyStr];
        appointmentsDay[appointmentvalue.dateKeyStr] = [
          ...appointmentDayinfo,
          this.verifyAppoiment(appointmensByWeek, appointmentvalue),
        ];
      }

      return appointmentsDay;
    }, <AppoimentsByDay>{});

    this.weekAppoiments.next(result);
  }

  private verifyAppoiment(
    appoiments: Appoiment[],
    appoiment: AvailableAppoiment
  ) {
    const [identifiedAppoiment] = appoiments.filter(a =>
      isEqual(a.date, appoiment.date)
    );

    return identifiedAppoiment ? identifiedAppoiment : appoiment;
  }
}
