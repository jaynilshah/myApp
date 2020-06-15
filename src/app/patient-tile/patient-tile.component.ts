import { Component, OnInit , Input } from '@angular/core';
import { patientDetail } from '../patient_class';

@Component({
  selector: 'patient-tile',
  templateUrl: './patient-tile.component.html',
  styleUrls: ['./patient-tile.component.css']
})
export class PatientTileComponent implements OnInit {

  constructor() { }
  
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
  }

  onUpdate(data){
    console.log(data);
  }

}
