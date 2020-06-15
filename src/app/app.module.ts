import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { DoctorDefComponent } from './doctor-def/doctor-def.component';
import { UserDefComponent } from './user-def/user-def.component';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DoctorFormComponent,
    DashboardComponentComponent,
    UserLoginComponent,
    DoctorLoginComponent,
    DoctorDefComponent,
    UserDefComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000','localhost:3000/'],
        blacklistedRoutes: ['localhost:4000/doctors']
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
