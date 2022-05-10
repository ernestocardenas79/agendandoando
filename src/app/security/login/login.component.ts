import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subscription } from 'rxjs';

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

  private readonly userDisposable: Subscription | undefined;
  public readonly user: Observable<User | null> = EMPTY;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public auth: Auth
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({ user: [''], password: [''] });
  }

  async loginHandler() {
    await signInWithEmailAndPassword(
      this.auth,
      'ernesto.cardenas79@gmail.com',
      '123456'
    );
    this.router.navigate(['/']);
  }

  cancelHandler() {
    this.loginForm.reset();
  }
}
