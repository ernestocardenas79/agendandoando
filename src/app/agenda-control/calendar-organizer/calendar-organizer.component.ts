import { Component } from '@angular/core';
import { getMonth, getWeek } from 'date-fns';

@Component({
  template: ` <section>
    <h2>Citas de {{ month }}</h2>
    <section class="days-container">
      <pgs-day></pgs-day>
      <pgs-day></pgs-day>
      <pgs-day></pgs-day>
      <pgs-day></pgs-day>
      <pgs-day></pgs-day>
    </section>
  </section>`,
  styleUrls: ['./calendar-organizer.component.css'],
})
export class CalendarOrganizerComponent {
  weekId: number;
  month: string;
  constructor() {
    this.weekId = getWeek(new Date());
    this.month = getMonth(new Date()).toString();
  }
}
