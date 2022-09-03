import { Component, forwardRef, Inject, OnInit } from '@angular/core';
@Component({
  selector: 'pgs-schedule-day',
  template: `<span>5:00</span> <input type="text" [value]="value" />`,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        background-color: red;
        margin: 0.5em 0;
        padding: 1em 0.8em;
        border-radius: 5px;
      }

      span {
        flex-grow: 0.1;
        margin-right: 0.8em;
      }

      input {
        flex-grow: 8;
        padding: 0.5em 1em;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid yellow;
      }

      input:focus {
        border: none;
        border-bottom: 1px solid yellow;
        outline: none;
      }
    `,
  ],
})
export class ScheduleDayComponent {
  onChange!: Function;
  value!: string;
}
