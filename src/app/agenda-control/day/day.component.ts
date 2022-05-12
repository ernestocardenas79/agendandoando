import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Appoiment } from 'src/app/core/models/appoiment';

@Component({
  selector: 'pgs-day',
  template: ` <section>Lunes</section>
    <article>
      <h2>7</h2>
      <aside>
        <span>5:00</span>
        <span>5:30</span>
        <span>6:00</span>
        <span>6:30</span>
        <span>6:30</span>
        <span>7:00</span>
        <span>7:30</span>
        <span>8:00</span>
        <span>6:30</span>
        <span>7:00</span>
        <span>7:30</span>
        <span>8:00</span>
      </aside>
    </article>`,
  styles: [
    `
      :host {
        display: block;
        width: 19%;
        height: 90%;
        background-color: red;
        font-size: x-large;
      }

      article {
        display: flex;
        background-color: gray;
        height: calc(90% - 7px);
      }

      article h2 {
        display: inline-block;
        background-color: yellow;
        width: 60%;
        border-radius: 0 0 0 5px;
        font-size: 350%;
        text-align: center;
        margin: auto;
      }

      article aside {
        overflow-x: hidden;
        overflow-y: auto;
        max-height: calc(100% - 5px);
        width: 40%;
      }

      article aside span {
        display: inline-block;
        font-size: 70%;
        height: 30px;
        max-height: 50px;
        padding-top: 5px;
        text-align: center;
        vertical-align: middle;
        width: 80px;
      }

      section {
        background-color: blue;
        color: white;
        text-align: center;
        padding: 5px 0;
        border-radius: 5px 5px 0 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent {
  appoimentDate!: Date;

  @Input()
  set appoiments(appoimentsByDate: Appoiment[]) {
    this.appoimentDate = appoimentsByDate[0].appoimentDate;
  }

  constructor() {}

  get dayNumber() {
    return this.appoimentDate.getDate();
  }

  get initialDayLetter() {
    return this.appoimentDate.getDay();
  }
}
