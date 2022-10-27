import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop-menu",
  templateUrl: "./shop-menu.component.html",
  styleUrls: ["./shop-menu.component.css"],
})
export class ShopMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  
  logout() {
    var exit = window.confirm("Sicuro di volere uscire?");  //this is javascript confirmation
    if (exit) {
      localStorage.clear();
      this.router.navigateByUrl('');
    }
  }
}
