import { Component, OnInit } from '@angular/core';
import { patientDetail } from '../patient_class' ;

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor() { }
  //make list of patient like mock state here
  patients_list: patientDetail[] = [
    {name:"Jay" , email:"jay@gmail.com" , state:"Gujarat" , symptoms:"Fever" , active:true , deceased:false , recovered:false},
    {name:"Suy" , email:"suy@gmail.com" , state:"Gujarat" , symptoms:"Fever, Cough" , active:true , deceased:false , recovered:false}
  ]
  ngOnInit(): void {
  }

}
