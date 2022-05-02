import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarConfigurationComponent } from './calendar-configuration/calendar-configuration.component';
import { CalendarOrganizerComponent } from './calendar-organizer/calendar-organizer.component';

const routes: Routes = [
  { path: '', component: CalendarOrganizerComponent },
  { path: 'config', component: CalendarConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgengaControlRoutingModule {}
