import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pgs-login',
  styleUrls: ['./login.component.css'],
  template: `
    <form (submit)="loginHandler($event)">
      <h3>Ingresar</h3>
      <label for="user">User</label>
      <input type="text" id="user" />
      <label for="pasword">Password</label>
      <input type="password" id="password" />
      <button type="button">Cancelar</button>
      <button type="submit">Ingresar</button>
    </form>
  `,
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginHandler(event: Event) {
    console.log('eventa');
    event.preventDefault();
    this.router.navigate(['/']);
  }
}
