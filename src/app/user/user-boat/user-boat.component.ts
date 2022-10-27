import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoatDTO } from 'src/dto/boatdto';
import { UserDTO } from 'src/dto/userdto';
import { BoatService } from 'src/service/boat.service';

@Component({
  selector: 'app-user-boat',
  templateUrl: './user-boat.component.html',
  styleUrls: ['./user-boat.component.css']
})
export class UserBoatComponent implements OnInit {


  boats!: BoatDTO[];
  boattoinsert: BoatDTO = new BoatDTO();
  disable: boolean = false; // disable buttons if boat already bought

  constructor(private service: BoatService, private route: Router) { }

  ngOnInit(): void {
    this.getBoats();
  }

  getBoats() {
    this.service.getAll().subscribe(boats => {
      this.boats = boats
    })
  }

  update(boat: BoatDTO) {
    this.service.update(boat).subscribe(() => this.getBoats());
  }

  gocheckout(boat: BoatDTO){
    this.disable=!boat.available;
    this.route.navigate(['/user-dashboard/checkout', boat.id]);
  }

  goRental(boat: BoatDTO){
    this.disable=!boat.available;
    this.route.navigate(['/user-dashboard/rental', boat.id]);
  }

  clear(){
    this.boattoinsert = new BoatDTO();
  }

}
