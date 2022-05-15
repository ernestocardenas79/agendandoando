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
        <span *ngFor="let day of appoimentList">{{
          day.appoimentDate | date: 'H:mm'
        }}</span>
      </aside>
    </article>`,
  styleUrls: ['./day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent {
  appoimentDate!: Date;
  numberDay!: number;
  appoimentList!: Appoiment[];

  @Input()
  set appoiments(appoimentsByDate: KeyValue<string, Appoiment[]>) {
    this.appoimentDate = appoimentsByDate.value[0].appoimentDate;
    this.numberDay = appoimentsByDate.value[0].appoimentDate.getDate();
    this.appoimentList = appoimentsByDate.value;
  }

  constructor() {}

  get dayNumber() {
    return this.appoimentDate.getDate();
  }

  get initialDayLetter() {
    return this.appoimentDate.getDay();
  }
}
