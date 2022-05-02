import { Component } from '@angular/core';

@Component({
  selector: 'pgs-layout',
  template: `
    <pgs-navbar></pgs-navbar>
    <aside><pgs-aside></pgs-aside></aside>
    <router-outlet></router-outlet>
    <footer>Footer</footer>
  `,
  styleUrls: [`./layout.component.css`],
})
export class LayoutComponent {
  constructor() {}
}
