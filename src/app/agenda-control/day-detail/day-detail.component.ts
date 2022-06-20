import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgs-day-detail',
  template: ` <p>day-detail works!</p> `,
  styles: [
    `
      :host {
        margin: 8px 5px;
        padding: 3% 5%;
        display: block;
        background-color: gray;
        width: 100%;
        height: 90%;
      }
    `,
  ],
})
export class DayDetailComponent {
  constructor() {}
}
