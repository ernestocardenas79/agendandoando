import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { filter, Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Appoiment } from 'src/app/core/models/appoiment';
import { AppoimentBase } from 'src/app/core/models/appoimentBase';
import { AppoimentsByDay } from 'src/app/core/models/appoimentByDay';

import { AppoimentService } from 'src/app/core/services/appoiment.service';
import { WeekService } from 'src/app/core/services/week.service';

@Component({
  template: ` <section class="container">
    <section class="days-container">
      <pgs-day
        *ngFor="let day of weekAppoiments$ | async | keyvalue"
        [appoiments]="day"></pgs-day>
    </section>
    <!-- <pgs-day-detail [detail$]="weekAppoimentsByDay$"> </pgs-day-detail> -->
  </section>`,
  styleUrls: ['./calendar-organizer.component.css'],
})
export class CalendarOrganizerComponent implements OnInit {
  weekNumber!: number;
  weekAppoiments$!: Observable<AppoimentsByDay>;
  weekAppoimentsBySelectedDay$!: Observable<AppoimentBase[]>;

  constructor(
    private appoimentService: AppoimentService,
    private weekService: WeekService
  ) {}

  ngOnInit(): void {
    this.weekNumber = this.weekService.weekNumber(this.weekService.baseDate);
    this.appoimentService.getWeekAppoinments(this.weekService.baseDate);
    this.weekAppoiments$ = this.appoimentService.weekAppoiments$;
    this.weekAppoimentsBySelectedDay$ =
      this.weekService.weekAppoimentsBySelectedDay$;

    this.weekAppoiments$.subscribe(console.log);
    this.weekAppoimentsBySelectedDay$.subscribe(r => console.log({ r }));
    // filter(wa => {
    //   return !!wa[dateStr];
    // })
  }
}
