import { Component } from '@angular/core';
import { getWeek, getWeekYear } from 'date-fns';

@Component({
  template: ` <section>calendar-organizer works! {{ weekId }}</section> `,
  styleUrls: ['./calendar-organizer.component.css'],
})
export class CalendarOrganizerComponent {
  weekId: number;
  constructor() {
    this.weekId = getWeek(new Date());
  }
}
