import { Component, OnInit } from '@angular/core';
import { getMonth, getWeek } from 'date-fns';
import { Observable } from 'rxjs';
import { AppoimentsByDay } from 'src/app/core/models/appoiment';
import { AppoimentService } from 'src/app/core/services/appoiment.service';

@Component({
  template: ` <section class="container">
    <h2>Citas de {{ month }}</h2>
    <section class="days-container">
      <pgs-day
        *ngFor="let day of weekAppoiments$ | async | keyvalue"
        [appoiments]="day"></pgs-day>
    </section>
  </section>`,
  styleUrls: ['./calendar-organizer.component.css'],
})
export class CalendarOrganizerComponent implements OnInit {
  weekId: number;
  month: string;
  weekAppoiments$!: Observable<AppoimentsByDay>;

  constructor(private appoimentService: AppoimentService) {
    this.weekId = getWeek(new Date());
    this.month = getMonth(new Date()).toString();
  }

  ngOnInit(): void {
    this.appoimentService.getWeekAppoinments();
    this.weekAppoiments$ = this.appoimentService.weekAppoiments$;
  }
}
