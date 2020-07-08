import { Component, OnInit } from '@angular/core';
import { stateDashboard } from '../state_dashboard_class';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { STATES_DATA } from '../mock_state_data' ;
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  public options : any ;
  public state_data: any ;
  constructor(public auth: AuthService, private router: Router, private http: HttpClient) { 
    

  }
  total_stats: stateDashboard = {
    id: 0 ,
    stateName: "total" ,
    active: 0 ,
    deceased : 0 ,
    recovered : 0 
  };
  public sortArray : number[] ;

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/stateList',).subscribe(data => {
      this.state_data = data;  
      data.forEach((el)=>{
        this.total_stats.active+= el[1].active;
        this.total_stats.recovered+= el[1].recovered;
        this.total_stats.deceased+= el[1].deceased;
      })
    })
    this.sortArray = [ 0 , 0 , 0 , 0 , 0 ] ;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

  toggleSortState(val){
    if( this.sortArray[val] == 0 )
      this.sortArray[val] = 1 ;
    else
      this.sortArray[val] *= -1 ;
    for( let i = 0 ; i < 5 ; i++ )
    {
      if( i == val )
        continue ;
      else
        this.sortArray[i] = 0 ;
    }
    this.state_data.sort((a,b)=>{
      return (this.sortArray[2] * (a[1].active - b[1].active))
        + (this.sortArray[0] * a[0].localeCompare(b))
        + (this.sortArray[1] * (a[1].active + a[1].recovered + a[1].deceased - (b[1].active + b[1].recovered + b[1].deceased)))
        + this.sortArray[3] * (a[1].recovered - b[1].recovered)
        + this.sortArray[4] * (a[1].deceased - b[1].deceased)
      ;
    })
  }

}
