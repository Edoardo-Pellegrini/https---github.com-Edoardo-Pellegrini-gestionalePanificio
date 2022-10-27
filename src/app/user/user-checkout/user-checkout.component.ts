import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatDTO } from 'src/dto/boatdto';
import { UserDTO } from 'src/dto/userdto';
import { PurchaseDTO } from 'src/dto/purchasedto'
import { BoatService } from 'src/service/boat.service';
import { PurchaseService } from 'src/service/purchaseservice';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})

export class UserCheckoutComponent implements OnInit {
  id: number;
  user: UserDTO;
  boat: BoatDTO;
  purchase: PurchaseDTO;

  debug: string;
  date = new Date();

  constructor(private pService: PurchaseService, private bService: BoatService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')); //boat id
    this.user = JSON.parse(localStorage.getItem('currentUser')); // current user
    this.bService.read(this.id).subscribe((boat) => { //seatch by id
      this.boat = boat; 
    },(err) => {
      this.debug = err.error; //print error
    }) ;
  }

  update(): void {
    var tmpUser = this.boat.user;
    //this.boat.user = null;  // errore se la barca ha un user_id non nullo
    // create a new purchase --> genera nuovo acquisto e lo salva nel db
    this.purchase = new PurchaseDTO(this.boat, this.date, this.user);

    this.insertPurchase(this.purchase);   //save all to DB
    this.boat.user = tmpUser; //this make no sense but if i remove it it crashes

    /*Update Boat*/
    this.boat.available = false;
    this.boat.user = this.user;
    this.updateBoat(); //insert into storage
   
  }

  getPurchases() {
    this.pService.getAll().subscribe(purchase => {})
  }

  insertPurchase(purchase: PurchaseDTO) {
  
    this.pService.insert(purchase).subscribe((resp: any) => {
      //this.updateBoat()
    },(err) => {  //error --> reload
      alert(err.error.message);
      this.router.navigate(['/user-dashboard/checkout/'+this.id]);
    });        //insert into storage
  }
  
  /*Update Boat --> deve essere messa non disponibile con il nuovo utente*/
  updateBoat(){
    this.boat.available = false;
    this.boat.user = this.user;

    this.bService.update(this.boat).subscribe((boat) => {
      alert("acquisto avvenuto con successo");  //save to DB
      this.router.navigate(['/user-dashboard/boats']);
    },(err) => {
      alert(err);
    });
  }
}
