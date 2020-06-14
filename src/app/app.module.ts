import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DoctorFormComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
