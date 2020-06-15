import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DoctorDefComponent } from './doctor-def/doctor-def.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './auth.guard';

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
