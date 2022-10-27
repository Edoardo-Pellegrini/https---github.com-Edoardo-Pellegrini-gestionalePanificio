import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  isUserCollapsed = false;
  isClientCollapsed = false;
  isAccountCollapsed = false;
  isBoatCollapsed = false;

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

  userscollapse() {
    if (this.isUserCollapsed === false) {
      this.isUserCollapsed = true;
    } else { this.isUserCollapsed = false; }
  }


  boatscollapse() {
    if (this.isBoatCollapsed === false) {
      this.isBoatCollapsed = true;
    } else { this.isBoatCollapsed = false; }
  }

  accountcollapse() {
    if (this.isAccountCollapsed === false) {
      this.isAccountCollapsed = true;
    } else { this.isAccountCollapsed = false; }
  }
}
