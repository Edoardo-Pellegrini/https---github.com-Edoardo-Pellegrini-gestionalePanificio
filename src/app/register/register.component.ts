import { CompanyDTO } from "./../../dto/company";
import { UserService } from "./../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { UserDTO } from "src/dto/userdto";
import { CompanyService } from "src/service/company.service";
import { ProfileService } from "src/service/profileservice";
import { ProfileDTO } from "src/dto/profiledto";
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
