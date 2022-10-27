import { Component, OnInit } from '@angular/core';
import { ProfileDTO } from 'src/dto/profiledto';
import { UserDTO } from 'src/dto/userdto';
import { ProfileService } from 'src/service/profileservice';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  x:boolean;
  user: UserDTO;
  profile: ProfileDTO;
  errorserver: any;
  
  constructor(private service: ProfileService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));   
    this.profile = new ProfileDTO(this.user.id, this.user.username, "", "");  //tmp init
    this.x=false;
    /*this.service.find(this.user.id).subscribe((profile) => {
      console.log(profile);
      if (profile != null) {
        this.profile = profile;
      }else{
@@ -31,6 +33,7 @@ export class UserProfileComponent implements OnInit {
    },
    (err) => {
      console.log(err); //catch error
      console.log("error:", this.profile);
      var objects = this.service.getAll();  //get max id
      var id = 0;
@@ -48,16 +51,36 @@ export class UserProfileComponent implements OnInit {
      id =+ 1;  //+1
      this.profile = new ProfileDTO(id, this.user.username, "", "");
      }
    });*/
    this.service.getAll().subscribe((resp: any) => {
      resp.forEach(element => {

        if (element.user.id == this.profile.id){
          this.profile = new ProfileDTO(element.id, element.name, element.surname, element.email);
        }
      });
    });
    this.profile.setUser(this.user);
    localStorage.setItem('currentProfile', JSON.stringify(this.profile));
    }

    getProfile() {
      this.service.read(this.profile.id).subscribe(profile => this.profile = profile);
    }
  
    update(profile: ProfileDTO) {
      this.service.update(profile).subscribe(() => this.getProfile());
      this.switchBoolean();
    }
  
    submit(profileForm: NgForm){
  
      this.profile = new ProfileDTO(profileForm.value.id, profileForm.value.name, profileForm.value.surname, profileForm.value.email);
      this.profile.setUser(this.user);  //connect profile to user-data
  
      localStorage.setItem('currentProfile', JSON.stringify(this.profile)); //save local
      this.service.update(this.profile).subscribe((resp) => {
      },(err) => {
        this.errorserver = err.error;
      }) ; //save to DB
      this.router.navigate(['/user-dashboard']);
    }
    switchBoolean(){
      this.x=!this.x;
    }
  }