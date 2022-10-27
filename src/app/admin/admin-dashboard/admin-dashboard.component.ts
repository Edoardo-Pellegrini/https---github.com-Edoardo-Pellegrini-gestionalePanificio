import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { BoatDTO } from 'src/dto/boatdto';
import { PurchaseDTO } from 'src/dto/purchasedto';
import { RentalDTO } from 'src/dto/rentdto';
import { UserDTO } from 'src/dto/userdto';
import { BoatService } from 'src/service/boat.service';
import { PurchaseService } from 'src/service/purchaseservice';
import { RentService } from 'src/service/rent.service';
import { UserService } from 'src/service/user.service';

/**
 * Componente della dashboard admin. Nell'ngOnInit recupera
 * l'utente loggato per il messaggio di benvenuto.
 */
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: UserDTO;
  users: UserDTO[];
  purchases: PurchaseDTO[];
  rents: RentalDTO[];
  boats:BoatDTO[];

  constructor(private service: UserService,private pservice: PurchaseService,private rservice: RentService,private bservice: BoatService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.getUsers();
    this.getBoats();
    this.getPurchase();
    this.getRent()
  
    
  }

  getUsers() {
    this.service.getAll().subscribe(users => this.users = users);
  }
  getBoats() {
    this.bservice.getAll().subscribe(boats => this.boats = boats);
  }
  getPurchase() {
    this.pservice.getAll().subscribe(purchases => this.purchases = purchases);
  }
  getRent() {
    this.rservice.getAll().subscribe(rents => this.rents = rents);
  }

}
