import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    // modal would be on the menu_bar
    var exit = window.confirm("Sicuro di volere uscire?");  //this is javascript confirmation
    if (exit) { //true = "yes"
      localStorage.clear();
      this.router.navigateByUrl('');
    }//else just clode popup
  }

  
}
