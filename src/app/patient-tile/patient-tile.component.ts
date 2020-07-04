import { Component, OnInit , Input } from '@angular/core';
import { patientDetail } from '../patient_class';
import { HttpClient } from '@angular/common/http';

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

  public name :string;
  public email : string;
  public state: string;
  public symptoms: string;
  public active: boolean;
  public recovered: boolean;
  public deceased: boolean;
  public token: string;
  public password: string;

  ngOnInit(): void {
    this.name = this.patient_detail.name ;
    this.email = this.patient_detail.email ;
    this.state = this.patient_detail.state ;
    this.symptoms = this.patient_detail.symptoms ;
    this.active = this.patient_detail.active;
    this.recovered = this.patient_detail.recovered;
    this.deceased = this.patient_detail.deceased;
  }

  onUpdate(data){
    const headers = { 'x-auth': this.token ,}
    var state = { 'active' : this.active , 'recovered': this.recovered , 'deceased' : this.deceased};
    this.http.post<any>('http://localhost:3000/updatePatient',{'email' : this.email , state}, { headers }).subscribe(data => {
        console.log(data);
    })
  }

}
