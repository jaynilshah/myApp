import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DoctorDefComponent } from './doctor-def/doctor-def.component';
import { UserDefComponent } from './user-def/user-def.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './auth.guard';
import { PatientListComponent } from './patient-list/patient-list.component' ;

const routes: Routes = [
    {
        path: '',
        component: DashboardComponentComponent,
    },
    {
      path:'doctor-def',
      component : DoctorDefComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'patient-list',
      component : PatientListComponent,
      // canActivate: [AuthGuard]
    },
    {
      path:'user-def',
      component : UserDefComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'doctor-login',
      component : DoctorLoginComponent,
    },
    {
      path:'user-login',
      component : UserLoginComponent,
    },
    {
      path: 'doctor-form',
      component: DoctorFormComponent,
    },
    {
      path: 'user-form',
      component: UserFormComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
