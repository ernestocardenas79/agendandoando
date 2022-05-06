import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgendaControlModule } from './agenda-control/agenda-control.module';

import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
  enableMultiTabIndexedDbPersistence,
} from '@angular/fire/firestore';
import { provideAuth, connectAuthEmulator, getAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCpjjyuEjpVhLn8fVRWzj3c_rbcxvhS_KE',
  authDomain: 'agendandoando-e79ca.firebaseapp.com',
  projectId: 'agendandoando-e79ca',
  storageBucket: 'agendandoando-e79ca.appspot.com',
  messagingSenderId: '544340509079',
  appId: '1:544340509079:web:1be94b7543149370f404d2',
};

let resolvePersistenceEnabled: (enabled: boolean) => void;

export const persistenceEnabled = new Promise<boolean>(resolve => {
  resolvePersistenceEnabled = resolve;
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgendaControlModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true,
        });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      enableMultiTabIndexedDbPersistence(firestore).then(
        () => resolvePersistenceEnabled(true),
        () => resolvePersistenceEnabled(false)
      );
      return firestore;
    }),
  ],
  providers: [
    // {
    //   provide: USE_AUTH_EMULATOR,
    //   useValue: environment.useEmulators ? ['localhost', 9099] : undefined,
    // },
    // {
    //   provide: USE_FIRESTORE_EMULATOR,
    //   useValue: environment.useEmulators ? ['localhost', 8080] : undefined,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
