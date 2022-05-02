import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./security/security.module').then(ac => ac.SecurityModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./agenda-control/agenda-control.module').then(
        ac => ac.AgendaControlModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
