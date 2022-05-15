import { KeyValue } from '@angular/common';
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
      <h2>{{ numberDay }}</h2>
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
  styleUrls: ['./day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent {
  appoimentDate!: Date;
  numberDay!: number;

  @Input()
  set appoiments(appoimentsByDate: KeyValue<string, Appoiment[]>) {
    const date = new Date(appoimentsByDate.value[0].appoimentDate);
    this.appoimentDate = appoimentsByDate.value[0].appoimentDate;
    this.numberDay = date.getDate();
  }

  constructor() {}

  get dayNumber() {
    return this.appoimentDate.getDate();
  }

  get initialDayLetter() {
    return this.appoimentDate.getDay();
  }
}
