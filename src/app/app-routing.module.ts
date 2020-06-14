import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponentComponent,
    },
    {
      path: 'doctor-form',
      component: DoctorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
