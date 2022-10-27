import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/dto/userdto';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements OnInit {
  user: UserDTO;
  constructor() { }

  ngOnInit() {
    this.user =JSON.parse(localStorage.getItem('currentUser'));
  }

}
