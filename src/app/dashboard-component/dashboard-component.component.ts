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

  
  public state_data: any ;
  constructor(public auth: AuthService, private router: Router, private http: HttpClient) { }
  total_stats: stateDashboard = {
    id: 0 ,
    stateName: "total" ,
    active: 0 ,
    deceased : 0 ,
    recovered : 0 
  };
  

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/stateList',).subscribe(data => {
      this.state_data = data;  
      data.forEach((el)=>{
        this.total_stats.active+= el[1].active;
        this.total_stats.recovered+= el[1].recovered;
        this.total_stats.deceased+= el[1].deceased;
      })
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
