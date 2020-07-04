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
  public patients_list : patientDetail[];
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("access_token");
   }
  //make list of patient like mock state here
  // patients_list: patientDetail[] = [
  //   {name:"Jay" , email:"jay@gmail.com" , state:"Gujarat" , symptoms:"Fever" , active:true , deceased:false , recovered:false}
  // ]
  // patients_list: patientDetail[] = [
  //   {name:"Jay" , email:"jay@gmail.com" , state:"Gujarat" , symptoms:"Fever" , active:true , deceased:false , recovered:false},
  //   {name:"Suy" , email:"suy@gmail.com" , state:"Gujarat" , symptoms:"Fever, Cough" , active:true , deceased:false , recovered:false}
  // ]
  ngOnInit(): void {
    const headers = { 'x-auth': this.token ,}
    this.http.get<patientDetail[]>('http://localhost:3000/patientList', { headers }).subscribe(data => {
        this.patients_list = data;
        console.log(data);
    })
  }

}
