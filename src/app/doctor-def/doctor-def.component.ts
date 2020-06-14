import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-def',
  templateUrl: './doctor-def.component.html',
  styleUrls: ['./doctor-def.component.css']
})
export class DoctorDefComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logoutDoctor();
    this.router.navigate(['login']);
  }

}
