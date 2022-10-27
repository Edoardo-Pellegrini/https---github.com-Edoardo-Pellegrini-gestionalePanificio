import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/dto/logindto';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.loginDTO = new LoginDTO(f.value.username, f.value.password);

    this.service.login(this.loginDTO).subscribe((user) => {
      
      if (user != null) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        switch (user.usertype.toString()) {
          case 'ADMIN': {
            this.router.navigate(['/shop-dashboard']);
            break;
          }
          case 'USER': {
            this.router.navigate(['/user-dashboard']);
            break;
          }
          case 'ADMINISTRATOR': {
            this.router.navigate(['/admin-dashboard']);
            break;
          }
          default:  //not reachable but necessary
            this.router.navigate(['/login']);
        }
      }else{  //user not found or wronng password
        alert("Utente o password errati");
      }
    });
  }
  
}
