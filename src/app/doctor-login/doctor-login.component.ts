import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {AlertService} from '../_alert'

@Component({
  selector: 'doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router , private alertService : AlertService) { }

  ngOnInit(): void {
    this.error=null ;
  }


  onSubmit(data) {
    if( this.email == null || this.password == null )
    {
      this.error = "Invalid Login Credentials!!!"
      setTimeout( function (abc) {
        abc.error = null ;
      } , 3000 , this );
    }
    else{
      

      this.auth.loginDoctor(this.email, this.password)
        .pipe(first())
        .subscribe(
          result => {
            this.router.navigate(['doctor-def']),
            this.alertService.success('Succesfully logged in', {
              autoClose: true,
              keepAfterRouteChange: true
            });
          },    
          error => { 
            this.error = 'Incorrect username or password!!!'
            setTimeout( function (abc) {
              abc.error = null ;
            } , 3000 , this )
          }
        );
    }
  }

  routeSignUp(){
    this.router.navigate(['doctor-form'])
  }

}
