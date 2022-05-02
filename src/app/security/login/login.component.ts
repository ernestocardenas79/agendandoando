import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgs-login',
  template: `
    <section>
      login works!
      <h3 routerLink="/">Entrar</h3>
    </section>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
