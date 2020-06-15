import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-doctor-def',
  templateUrl: './doctor-def.component.html',
  styleUrls: ['./doctor-def.component.css']
})
export class DoctorDefComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router, private http: HttpClient) {
    this.token = localStorage.getItem("access_token");
   }

  public name :string;
  public email : string;
  public token : string;
  public password :string;
  ngOnInit(): void {
    const headers = { 'x-auth': this.token ,}
    this.http.get<any>('http://localhost:3000/doctorsme', { headers }).subscribe(data => {
        this.name = data.name;
        this.email = data.email;
    })
  }
  logout() {
    this.auth.logoutDoctor();
    this.router.navigate(['login']);
  }

  onUpdate(data){
    console.log(data);
  }

}
