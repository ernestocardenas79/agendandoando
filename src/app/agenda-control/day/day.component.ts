import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Appoiment } from 'src/app/core/models/appoiment';

@Component({
  selector: 'pgs-day',
  template: ` <p>day works!</p> `,
  styles: [],
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
