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
  public sstate : any;
  public scategory : any; //Set the values as all , active, deceased, recovered
  public patients_list : patientDetail[];
  public states_list : any;
  public categories : any;
  
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("access_token");
    this.categories = [
      {id : 1, value : "Any"},
      {id : 2, value : "Active"},
      {id : 3, value : "Recovered"},
      {id : 4, value : "Deceased"},
      {id : 5, value : "Unattended"},
    ]
    this.states_list = [
      { id:'all' , value: 'All'},
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
  }
  
  ngOnInit(): void {
    const headers = { 'x-auth': this.token ,}
    this.http.post<patientDetail[]>('http://localhost:3000/patientList',{}  , { headers }).subscribe(data => {
        this.patients_list = data;
        console.log(data);
    })
  }
  onReset() : void {
    this.sname = "";
    this.semail = "";
    this.sstate = "Any";
    this.scategory = "All";
    this.onSearch();
  }
  
  public onSearch(): void{
    var search = {};
    if(this.sname && this.sname!=""){
      search['name'] = { $regex: this.sname, $options: "i" };
    }
    if(this.scategory && this.scategory.value!="Any"){
      if(this.scategory.value=="Active"){
        search['active'] = true;
      }
      else if(this.scategory.value == "Recovered"){
        search['recovered'] = true;
      }
      else if(this.scategory.value == "Deceased"){
        search['deceased'] = true;
      }
      else if( this.scategory.value == "Unattended")
      {
        // Look if this works as and condition
        search['active'] = false ;
        search['recovered'] = false ;
        search['deceased'] = false ;
      }
    }
    if(this.sstate && this.sstate.value!="All"){
      search['state'] = this.sstate.value;
    }
    if(this.semail && this.semail!=""){
      search['email'] = { $regex: this.semail, $options: "i" };
    }
    const headers = { 'x-auth': this.token ,}
    this.http.post<patientDetail[]>('http://localhost:3000/patientList',{search}, { headers }).subscribe(data => {
        this.patients_list = data;
    })
  }

}
