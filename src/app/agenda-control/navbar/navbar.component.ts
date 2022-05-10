import { Component } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
  User,
} from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'pgs-navbar',
  template: `
    <header>
      <h1>Agendando ando</h1>
      <div *ngIf="user | async as user; else showLogin">
        <h1>Hello {{ user.displayName }}!</h1>
        <button (click)="logout()">Logout</button>
      </div>
      <ng-template #showLogin>
        <p>Please login.</p>
        <button (click)="login()">Login with Google</button>
      </ng-template>
    </header>
  `,
  styleUrls: [`./navbar.style.css`],
})
export class NavbarComponent {
  private readonly userDisposable: Subscription | undefined;
  public readonly user: Observable<User | null> = EMPTY;

  constructor(public auth: Auth) {
    this.user = user(auth);
  }

  logout() {
    this.auth.signOut();
  }

  async login() {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
