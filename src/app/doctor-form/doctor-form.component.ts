import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  public error:string ;
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.error = null ;
  }
  onSubmit(data){
    if( data.password != data.cpassword )
    {
      this.error = "Password and Confirm Password don't match!!!"
      setTimeout( function (abc) {
        abc.error = null ;
      } , 3000 , this)
    }
    else{
      this.http.post('http://localhost:3000/doctors',data)
      .subscribe((result)=>{
        console.log(result);
      })
    }
      
  }
}
