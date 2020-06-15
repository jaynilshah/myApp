import { Component, OnInit } from '@angular/core';
import { stateDashboard } from '../state_dashboard_class';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { STATES_DATA } from '../mock_state_data' ;

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  
  state_data= STATES_DATA ;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
