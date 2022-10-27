import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { shallowEqual } from "@angular/router/src/utils/collection";
import { parse } from "querystring";
import { BoatDTO } from "src/dto/boatdto";
import { CompanyDTO } from "src/dto/company";
import { UserDTO } from "src/dto/userdto";
import { BoatService } from "src/service/boat.service";
import { CompanyService } from "src/service/company.service";

@Component({
  selector: "app-my-shop",
  templateUrl: "./my-shop.component.html",
  styleUrls: ["./my-shop.component.css"],
})
export class MyShopComponent implements OnInit {
  show: boolean;
  presentation:boolean;
  user: UserDTO;
  shop: CompanyDTO;
  errorserver: undefined;
  shopToUpdate: FormGroup;
  mapp:boolean;

  constructor(private service: CompanyService, public formBuild: FormBuilder) {
    this.shopToUpdate = formBuild.group({
      email: ["", Validators.required],
      address: ["", Validators.required],
      networth: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.presentation=true;
    this.mapp = false;
    this.show = false;
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getShop(this.user);
   
    
  }

  getShop(user: UserDTO) {
    return this.service.getShop(user.id).subscribe(
      (resp) => {             
        this.shop = resp;
      },
      (err) => {
        //console.log(err, err.error.status);
        this.errorserver = err.error;
        if(err.error.status == 500)//shop null: new
          this.shop = new CompanyDTO("", "", null, this.user);
      }
    );
  }
  update() {
    let x: CompanyDTO = this.shopToUpdate.getRawValue();
    x.id = this.shop.id;
    x.user = this.user;

    this.service.update(x).subscribe(
      (resp) => {
        //console.log(resp);
        this.shop = resp;

        
      },
      (  error ) => {
        console.log(error);
        this.errorserver = error.error;
      }
    );
  }

  showModal() {
    this.shopToUpdate.controls['email'].setValue(this.shop.email)
    this.shopToUpdate.controls['address'].setValue(this.shop.address)
    this.shopToUpdate.controls['networth'].setValue(this.shop.networth)
    this.show = !this.show;
    if(this.mapp == true){
      this.mapp = false;
    }
    if(this.show==false && this.mapp == false){
      this.presentation=true;
    }else{
      this.presentation=false;
    }
    
  }
  showMapp(){
    this.mapp = !this.mapp;
    if(this.show == true){
      this.show = false;
    }
    if(this.show==false && this.mapp == false){
      this.presentation=true;
    }else{
      this.presentation=false;
    }
    
    
    
  }
  
  
}
