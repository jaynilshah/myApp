import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'user-def',
  templateUrl: './user-def.component.html',
  styleUrls: ['./user-def.component.css']
})
export class UserDefComponent implements OnInit {

  public name :string;
  public email : string;
  public state: string;
  public symptoms: string;
  public active: boolean;
  public recovered: boolean;
  public deceased: boolean;
  public token: string;
  public password: string;
  public info : string ;
  public editable : boolean ;
  public message : string ;
  public cond : number ;

  constructor(private http: HttpClient , public auth: AuthService) {
    this.token = localStorage.getItem("access_token");
   }

  ngOnInit(): void {

    const headers = { 'x-auth': this.token}
    this.http.get<any>('http://localhost:3000/usersme', { headers }).subscribe(data => {
        this.name = data.name;
        this.symptoms = data.symptoms;
        this.state = data.state;
        this.email = data.email;
        this.active = data.active;
        this.deceased = data.deceased;
        this.recovered = data.recovered;
        this.info = "Edit Info";
        this.editable = false ;
        this.setMessage() ;
    })   

  }

  onUpdate(data){
    console.log(data);
  }

  setMessage()
  {
    if( this.active )
    {
      this.message = "You have been infected! Please distance yourself from others!" ;
      this.cond = 1 ;
    }
    else if( this.recovered )
    {
      this.message = "Congratulations! You've recovered from COVID-19!"  ;
      this.cond = 2 ;
    }
    else if( this.deceased )
    {
      this.message = "Oops! You're DEAD!!!" ;
      this.cond = 3 ;
    }
    else
    {
      this.message = "Your case is under review and will be updated soon. Thank you for your patience!"
      this.cond = 4 ;
    }
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

  selectClassesAlert(){
    let classes = {
      "text-center": true ,
      "alert": true ,
      "alert-primary" : this.cond === 1 ,
      "alert-success" : this.cond === 2 ,
      "alert-danger" : this.cond === 3 ,
      "alert-dark" : this.cond === 4 ,
    }
    return classes ;
  }

}
