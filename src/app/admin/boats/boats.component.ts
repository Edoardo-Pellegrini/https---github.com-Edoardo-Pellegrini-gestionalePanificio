import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoatDTO } from 'src/dto/boatdto';
import { UserDTO } from 'src/dto/userdto';
import { BoatService } from 'src/service/boat.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  boats!: BoatDTO[];
  boattoinsert: BoatDTO = new BoatDTO();
  users: UserDTO[] = [null];

  constructor(private service: BoatService, private userService: UserService) { }

  ngOnInit(): void {
    this.getBoats();
    this.getUsers();
  }

  getBoats() {
    this.service.getAll().subscribe(boats => {
      this.boats = boats;
    })
  }

  getUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    })
  }

  delete(boat: BoatDTO) {
    this.service.delete(boat.id).subscribe(() => this.getBoats());
  }

  update(boat: BoatDTO) {
    this.service.update(boat).subscribe((resp) => {
      this.getBoats(); //refresh
    },(err)=> {
      alert("ERROR: " + err.message.toString());
    });
  }

  insert(boat: BoatDTO) {
    this.service.insert(boat).subscribe((resp) => {
      this.getBoats(); //refresh
    },(err)=> {
      alert("ERROR: " + err.message.toString());
    });
  }

  clear(){
    this.boattoinsert = new BoatDTO();
  }

}
