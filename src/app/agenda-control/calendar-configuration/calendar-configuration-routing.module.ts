import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarConfigurationComponent } from './calendar-configuration.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarConfigurationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarConfigurationRoutingModule {}
