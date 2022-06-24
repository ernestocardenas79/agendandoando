import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgs-day-detail',
  template: `<ng-content></ng-content> `,
  styles: [
    `
      :host {
        margin: 8px 5px;
        padding: 3% 5%;
        display: block;
      }
    `,
  ],
})
export class DayDetailComponent {
  constructor() {}
}
