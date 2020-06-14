import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data) {
    this.auth.loginDoctor(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['doctor-def']),
        err => this.error = 'Could not authenticate'
      );
  }
}
