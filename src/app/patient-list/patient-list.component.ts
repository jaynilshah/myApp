import { Component, OnInit } from '@angular/core';
import { patientDetail } from '../patient_class' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private token : string;
  public sname : string;
  public semail : string;
  public sstate : string;
  public scategory : string; //Set the values as all , active, deveased, recovered
  public patients_list : patientDetail[];
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("access_token");
   }
  ngOnInit(): void {
    const headers = { 'x-auth': this.token ,}
    this.http.post<patientDetail[]>('http://localhost:3000/patientList',{}  , { headers }).subscribe(data => {
        this.patients_list = data;
        console.log(data);
    })
  }
  onSearch(): void{
    var search = {};
    if(this.sname && this.sname!=""){
      search['name'] = this.sname;
    }
    if(this.scategory && this.scategory!="any"){
      if(this.scategory=="active"){
        search['active'] = true;
      }
      else if(this.scategory == "recovered"){
        search['recovered'] = true;
      }
      else if(this.scategory == "deceased"){
        search['deceased'] = true;
      }
    }
    if(this.sstate && this.sstate!="any"){
      search['state'] = this.sstate;
    }
    if(this.semail && this.semail!=""){
      search['email'] = this.semail;
    }
    const headers = { 'x-auth': this.token ,}
    this.http.post<patientDetail[]>('http://localhost:3000/patientList',{search}, { headers }).subscribe(data => {
        this.patients_list = data;
    })
  }

}
