import { Component, OnInit , Input , Output } from '@angular/core';
import { patientDetail } from '../patient_class';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'patient-tile',
  templateUrl: './patient-tile.component.html',
  styleUrls: ['./patient-tile.component.css']
})
export class PatientTileComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("access_token");
   }
  
  @Input('patient_detail') patient_detail: patientDetail ;

  @Output("onSearch") onSearch: EventEmitter<any> = new EventEmitter() ;

  public name :string;
  public email : string;
  public state: string;
  public symptoms: string;
  public active: boolean;
  public recovered: boolean;
  public deceased: boolean;
  public token: string;
  public password: string;
  public error: string;
  public success: string ;

  ngOnInit(): void {
    this.name = this.patient_detail.name ;
    this.email = this.patient_detail.email ;
    this.state = this.patient_detail.state ;
    this.symptoms = this.patient_detail.symptoms ;
    this.active = this.patient_detail.active;
    this.recovered = this.patient_detail.recovered;
    this.deceased = this.patient_detail.deceased;
    this.error = null;
    this.success = null ;
  }

  selectClasses(){
    let classes = {
      "card" : true ,
      "mb-3" : true ,
      "border-dark" : !this.active && !this.recovered && !this.deceased ,
      "text-dark" : !this.active && !this.recovered && !this.deceased ,
      "border-primary": this.active ,
      "text-primary": this.active ,
      "border-success": this.recovered ,
      "text-success": this.recovered ,
      "border-danger" : this.deceased , 
      "text-danger" : this.deceased 
    }
    return classes;
  }

  onUpdate(data){
    const headers = { 'x-auth': this.token ,}
    var state = { 'active' : this.active , 'recovered': this.recovered , 'deceased' : this.deceased};
    if((this.active && this.recovered) || (this.deceased && this.recovered) || (this.active && this.deceased)){
      this.error = "Cannot set two or more states to be true at the same time!!!";
      setTimeout( function (abc) {
        abc.error = null ;
      }, 3000 , this) ;
    }
    else{
      this.error = null;
      this.http.post<any>('http://localhost:3000/updatePatient',{'email' : this.email , state}, { headers }).subscribe(
          data => {
            this.success = "Successfully Updated!!!" 
            setTimeout( function (abc) {
              abc.success = null ;
            }, 3000 , this) ;
            setTimeout( function (abc) {
              abc.onSearch.emit() ;
            } , 3500 , this) ;
          },
          error => {
            this.error = "Cannot Update. Server Error!!!"
            setTimeout( function (abc) {
              abc.error = null ;
            }, 3000 , this) ;
          }
        )
    }
  }

}
