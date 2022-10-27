import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    // modal would be on the menu_bar
    var exit = window.confirm("Sicuro di volere uscire?");  //this is javascript confirmation
    if (exit) {
      localStorage.clear();
      this.router.navigateByUrl('');
    }
  }

  
}
