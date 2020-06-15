import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
    })

  }
  onUpdate(data){
    console.log(data);
  }


}
