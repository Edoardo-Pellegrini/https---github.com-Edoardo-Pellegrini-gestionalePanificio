import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDTO } from 'src/dto/userdto';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  user: UserDTO;
  isReadonly = true;
  errorserver: any;
  password: string;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.password = this.user.password.toString();
  }

  submit(){ 
    this.user.password = this.password; //update

    this.service.update(this.user).subscribe((resp) => {
    },(err) => {
      this.errorserver = err.error;
    }) ; //save to DB
    this.modifiable();
  }

  modifiable() {
    this.isReadonly = !this.isReadonly;
    this.password = this.user.password.toString();  //reload
  }
  
}
