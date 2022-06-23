import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvailableAppoiment } from 'src/app/core/models/availableAppoiment';

@Component({
  selector: 'pgs-day',
  template: ` <section>{{ appoimentDate | date: 'EEEE' }}</section>
    <article>
      <h2>{{ numberDay }}</h2>
      <aside>
        <span
          *ngFor="let day of appoimentList"
          [ngClass]="{ ocuped: day.state === 'ocuped' }"
          >{{ day.date | date: 'H:mm' }}</span
        >
      </aside>
    </article>`,
  styleUrls: ['./day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent {
  appoimentDate!: Date;
  numberDay!: number;
  appoimentList!: AvailableAppoiment[];

  @Input()
  set appoiments(appoimentsByDate: KeyValue<string, AvailableAppoiment[]>) {
    this.appoimentDate = appoimentsByDate.value[0].date;
    this.numberDay = appoimentsByDate.value[0].date.getDate();
    this.appoimentList = appoimentsByDate.value;
  }

  get dayNumber() {
    return this.appoimentDate.getDate();
  }

  get initialDayLetter() {
    return this.appoimentDate.getDay();
  }
}
