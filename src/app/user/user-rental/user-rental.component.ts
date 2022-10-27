import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatDTO } from 'src/dto/boatdto';
import { RentalDTO } from 'src/dto/rentdto';
import { UserDTO } from 'src/dto/userdto';
import { BoatService } from 'src/service/boat.service';
import { RentService } from 'src/service/rent.service';

@Component({
  selector: 'app-user-rental',
  templateUrl: './user-rental.component.html',
  styleUrls: ['./user-rental.component.css']
})
export class UserRentalComponent implements OnInit {

  id: number;
  user: UserDTO;
  boat: BoatDTO;

  rental: RentalDTO;
  fromDate: Date;
  toDate: Date;

  constructor(private route: ActivatedRoute, private router: Router, private bService: BoatService, private rService: RentService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')); //boat id
    this.user = JSON.parse(localStorage.getItem('currentUser')); // current user
    this.bService.read(this.id).subscribe((boat) => { //seatch by id
      this.boat = boat; 
    });
  }
  
  rent(): void{
    // check input
    if(isNaN(new Date(this.fromDate).valueOf()) || isNaN(new Date(this.toDate).valueOf()) ){
      alert("Data nulla");
    }else{
      if(new Date(this.fromDate) > new Date(this.toDate)){
        alert("Non è possibile noleggiare barche nel passato");
      }else{  //actual code
        var tmpUser = this.boat.user;
        this.boat.user = null;  // errore se la barca ha un user_id non nullo
        this.rental = new RentalDTO(this.boat, this.user, this.fromDate, this.toDate, this.boat.price);

        this.newRent(this.rental); //insert into storage
        this.boat.user = tmpUser; //if this is removed, the save doesn't work

        /*Update Boat*/
        this.boat.available = false;
        this.boat.user = this.user;
        this.updateBoat() //insert into storage
      }
    }
  }

  newRent(rental: RentalDTO){
    this.rService.insert(rental).subscribe((resp: any) => { // errore se la barca ha un user_id non nullo
      //console.log(resp) 
    },(err) => {  //error --> reload
      alert(err.error.message);
      this.router.navigate(['/user-dashboard/rental/'+this.id]);
    });   
  }

  updateBoat(){
    this.bService.update(this.boat).subscribe((boat) => {
      alert("acquisto avvenuto con successo");  //save to DB
      this.router.navigate(['/user-dashboard/boats']);
    },(err) => {
      alert(err);
    });
  }

}
