import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppoimentsByDay } from 'src/app/core/models/appoimentByDay';
import { AppoimentService } from 'src/app/core/services/appoiment.service';

@Component({
  selector: 'pgs-day-detail',
  template: ` <!-- *ngFor="let date of detail$ | async" -->
    <pgs-schedule-day></pgs-schedule-day>`,
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
  @Input()
  detail$!: Observable<AppoimentsByDay>;

  constructor(private appoimentService: AppoimentService) {
    this.detail$.subscribe(r => console.log(r));
  }
}
