import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pgs-login',
  styleUrls: ['./login.component.css'],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="loginHandler()">
      <h3>Ingresar</h3>
      <label for="user">User</label>
      <input type="text" id="user" name="user" formControlName="user" />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        formControlName="password" />
      <button type="button" (click)="cancelHandler()">Cancelar</button>
      <button type="submit">Ingresar</button>
    </form>
  `,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({ user: [''], password: [''] });
  }

  loginHandler() {
    this.router.navigate(['/']);
  }

  cancelHandler() {
    this.loginForm.reset();
  }
}
