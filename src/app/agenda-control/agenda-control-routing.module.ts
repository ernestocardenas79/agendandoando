import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarConfigurationComponent } from './calendar-configuration/calendar-configuration.component';
import { CalendarConfigurationModule } from './calendar-configuration/calendar-configuration.module';
import { CalendarOrganizerComponent } from './calendar-organizer/calendar-organizer.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CalendarOrganizerComponent },
      {
        path: 'config',
        loadChildren: () =>
          import('./calendar-configuration/calendar-configuration.module').then(
            cc => cc.CalendarConfigurationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgengaControlRoutingModule {}
