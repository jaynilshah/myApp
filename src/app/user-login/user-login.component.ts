import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data) {
    this.auth.loginUser(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['user-def']),
        err => this.error = 'Could not authenticate'
      );
  }

}
