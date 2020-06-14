import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data){
    this.http.post('http://localhost:3000/doctors',data)
    .subscribe((result)=>{
      console.log(result);
    })
  }
}
