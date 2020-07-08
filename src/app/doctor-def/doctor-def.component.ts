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
  public info : string ;
  public editable : boolean ;

  ngOnInit(): void {
    const headers = { 'x-auth': this.token ,}
    this.http.get<any>('http://localhost:3000/doctorsme', { headers }).subscribe(data => {
        this.name = data.name;
        this.email = data.email;
    })
    this.info = "Edit Info";
    this.editable = false ;
  }
  logout() {
    this.auth.logoutDoctor();
    this.router.navigate(['login']);
  }

  onUpdate(data){
    console.log(data);
  }

  toggleEdit(){
    this.editable = ( this.editable || true ) && ( !this.editable || !true ) ;
    if( this.editable )
      this.info = "Close"
    else
      this.info = "Edit Info"
    console.log(this.editable);  
  }

  selectClass(){
    let classes = {
      "form-control-plaintext" : !this.editable ,
      "form-control" : this.editable,
    }
    return classes;
  }

}
