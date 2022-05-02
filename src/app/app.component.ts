import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgs-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: [`app.component.css`],
})
export class AppComponent {
  title = 'Agendando ando';

  constructor() {}
}
