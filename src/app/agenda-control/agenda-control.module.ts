import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { CalendarOrganizerComponent } from './calendar-organizer/calendar-organizer.component';
import { CalendarConfigurationComponent } from './calendar-configuration/calendar-configuration.component';
import { DayComponent } from './day/day.component';
import { AgengaControlRoutingModule } from './agenda-control-routing.module';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirestoreModule } from '@angular/fire/firestore';
import { HourComponent } from './hour/hour.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { WeekService } from '../core/services/week.service';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    AsideComponent,
    CalendarOrganizerComponent,
    CalendarConfigurationComponent,
    DayComponent,
    HourComponent,
    DayDetailComponent,
  ],
  imports: [
    CommonModule,
    AgengaControlRoutingModule,
    FirebaseAppModule,
    FirestoreModule,
  ],
  providers: [WeekService],
  exports: [LayoutComponent],
})
export class AgendaControlModule {}
