import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import  {AlertService} from '../_alert';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  constructor(private http : HttpClient, private router: Router, private alertService : AlertService) { }

  public name: string ;
  public email: string ;
  public password: string ;
  public cpassword: string ;
  public state: string ;
  public symptoms: string ;
  public error: string ;

  ngOnInit(): void {
    this.error= null ;
  }
  
  states_list = [
    { id:'Andaman and Nicobar' , value: 'Andaman and Nicobar'},
    { id:'Andhra Pradesh',    value : 'Andhra Pradesh'    },
    { id:'Arunachal Pradesh', value : 'Arunachal Pradesh' },
    { id:'Assam', value : 'Assam' },
    { id:'Bihar', value : 'Bihar' },
    { id:'Chandigarh' , value: 'Chandigarh'},
    { id:'Chhattisgarh', value : 'Chhattisgarh' },
    { id:'Daman and Diu' , value: 'Daman and Diu'},
    { id:'Dadar and Nagar Haveli' , value: 'Dadar and Nagar Haveli'},
    { id:'Delhi' , value: 'Delhi'},
    { id:'Goa', value : 'Goa' },
    { id:'Gujarat', value : 'Gujarat' },
    { id:'Haryana', value : 'Haryana' },
    { id:'Himachal Pradesh', value : 'Himachal Pradesh' },
    { id:'Jammu and Kashmir' , value: 'Jammu and Kashmir'},
    { id:'Jharkhand', value : 'Jharkhand' },
    { id:'Karnataka', value : 'Karnataka' },
    { id:'Kerala', value : 'Kerala' },
    { id:'Ladakh' , value: 'Ladakh'},
    { id:'Lakshadweep' , value: 'Lakshadweep'},
    { id:'Madhya Pradesh', value : 'Madhya Pradesh' },
    { id:'Maharashtra', value : 'Maharashtra' },
    { id:'Manipur', value : 'Manipur' },
    { id:'Meghalaya', value : 'Meghalaya' },
    { id:'Mizoram', value : 'Mizoram' },
    { id:'Nagaland', value : 'Nagaland' },
    { id:'Odisha', value : 'Odisha' },
    { id:'Puducherry' , value: 'Puducherry'},
    { id:'Punjab', value : 'Punjab' },
    { id:'Rajasthan', value : 'Rajasthan' },
    { id:'Sikkim', value : 'Sikkim' },
    { id:'TamilNadu', value : 'TamilNadu' },
    { id:'Telangana', value : 'Telangana' },
    { id:'Tripura', value : 'Tripura' },
    { id:'Uttar Pradesh', value : 'Uttar Pradesh' },
    { id:'Uttarakhand', value : 'Uttarakhand' },
    { id:'West Bengal', value : 'West Bengal' }
  ];

  onSubmit(data){
    if( data.password != data.cpassword )
    {
      this.error = "Password and Confirm Password don't match!!!"
      setTimeout( function (abc) {
        abc.error = null ;
      } , 3000 , this)
    }
    else{
        this.http.post('http://localhost:3000/users',data)
      .subscribe(
        result => {
          this.router.navigate(['user-login'])
          this.alertService.success('Registration Successfully!!!', {
            autoClose: true,
            keepAfterRouteChange: true
          });
        },
        error => {
          this.error = 'Could not register! User Email exists!'
          setTimeout( function (abc) {
            abc.error = null ;
          } , 3000 , this)
        }
      )
    }
    
  }
}
