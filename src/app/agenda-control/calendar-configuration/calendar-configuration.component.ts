import { Component } from '@angular/core';

@Component({
  selector: 'pgs-calendar-configuration',
  template: ` <section>calendar-configuration works!</section> `,
  styles: [
    `
      :host {
        background-color: orange;
      }
    `,
  ],
})
export class CalendarConfigurationComponent {
  constructor() {}
}
