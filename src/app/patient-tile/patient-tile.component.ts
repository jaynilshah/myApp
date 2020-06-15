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

  ngOnInit(): void {
  }

}
