import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarConfigurationComponent } from './calendar-configuration/calendar-configuration.component';
import { CalendarOrganizerComponent } from './calendar-organizer/calendar-organizer.component';

const routes: Routes = [
  { path: '', component: CalendarOrganizerComponent },
  { path: 'config', component: CalendarConfigurationComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
