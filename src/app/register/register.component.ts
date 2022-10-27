
import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { UserDTO } from "src/dto/userdto";

import { FormGroup, FormBuilder, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: UserDTO;
  usertoinsert: UserDTO = new UserDTO();
  x:boolean;
  constructor(private service: UserService) {}

  ngOnInit() {
    this.x=false;
  }

  register() {
    this.service.insert(this.usertoinsert).subscribe();
    console.log(this.usertoinsert);
    this.x=true;
  }
}
