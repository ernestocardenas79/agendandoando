import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    <pgs-day-detail>
      <pgs-schedule-day></pgs-schedule-day>
      <pgs-schedule-day></pgs-schedule-day>
      <pgs-schedule-day></pgs-schedule-day>
      <pgs-schedule-day></pgs-schedule-day>
      <pgs-schedule-day></pgs-schedule-day>
    </pgs-day-detail>
  </section>`,
  styleUrls: ['./calendar-organizer.component.css'],
})
export class CalendarOrganizerComponent implements OnInit {
  weekNumber!: number;
  weekAppoiments$!: Observable<AppoimentsByDay>;

  constructor(
    private appoimentService: AppoimentService,
    private weekService: WeekService
  ) {}

  ngOnInit(): void {
    this.weekNumber = this.weekService.weekNumber(this.weekService.baseDate);
    this.appoimentService.getWeekAppoinments(this.weekService.baseDate);
    this.weekAppoiments$ = this.appoimentService.weekAppoiments$;
  }
}
