import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { UserDTO } from 'src/dto/userdto';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css']
})
export class ForgottenComponent implements OnInit {

  user: UserDTO;
  err: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  reset(nf: NgForm){
    if (nf.value.password ==  nf.value.control) {  
        this.service.getAll().subscribe((resp: any) => {
          resp.forEach(element => {
            if (element.username == nf.value.username){ //found by username
              this.user = element;  //get user
              this.user.password = nf.value.password; //change password
              this.service.update(this.user).subscribe((resp) => {
              },(err) => {
                this.err=err.error; //TODO modify with alert message somehow
                this.router.navigate(['/login']);
              }) ; //save to DB
              this.router.navigate(['/login']); //done: no reason to continue
            }
          });
        this.err = "username not found";
        });
    }else{  //if different, return to login
      this.err = "not matching input"; 
    } 
  }

}
