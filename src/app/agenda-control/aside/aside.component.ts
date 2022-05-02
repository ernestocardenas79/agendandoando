import { Component } from '@angular/core';

@Component({
  selector: 'pgs-aside',
  template: `
    <h3>aside works!</h3>
    <h3 routerLink="config">Config</h3>
  `,
  styleUrls: ['./aside.style.css'],
})
export class AsideComponent {
  constructor() {}
}
