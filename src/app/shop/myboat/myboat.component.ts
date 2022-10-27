import { BoatDTO } from './../../../dto/boatdto';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserDTO } from '../../../dto/userdto';

import { BoatServiceService } from '../../../service/boat-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-myboat',
  templateUrl: './myboat.component.html',
  styleUrls: ['./myboat.component.css']
})
export class MyboatComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  formG: FormGroup;
  show: boolean = false;
  insert:boolean = false;
  tabella:boolean=false;
 
  private boatDTO: BoatDTO;
  private user: UserDTO = JSON.parse(localStorage.getItem("currentUser"));
  private available: Boolean = true;
  private errorserver = undefined;
  private boats: BoatDTO[];

  constructor(private boatServiceService: BoatServiceService,public formBuild: FormBuilder) { 
    this.formG = formBuild.group({
      id: ['', Validators.required], 
      name: ['', Validators.required], //!indica che i campi sono obligatori
      type: ['', Validators.required], 
      n_seats: ['', Validators.required], 
      price: ['', Validators.required], 
      available: ['', Validators.required],
    });

  }

  ngOnInit() {
    this.getAllBoat()
    this.showTab();
  }

  getAllBoat() {
    this.boatServiceService.getMyBoat(this.user.id).subscribe((Response) => {
      console.log(Response);
      this.boats = Response;
    });
  }

  onSubmit() {

    this.boatDTO = this.form.value;
    console.log(this.boatDTO);
    this.boatDTO.user = this.user;
    console.log(this.boatDTO);
    this.boatDTO.available=true;
    this.boatServiceService.insert(this.boatDTO).subscribe(
      (resp) => {
        console.log(resp);
        this.errorserver = undefined;
        this.getAllBoat();
      },
      (err) => {
        console.log(err.error);
        this.errorserver = err.error;
      }
    );
    this.showInsert();
  }


  deleteBoat(id: number) {
    this.boatServiceService.delete(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllBoat();
      },
      (err) => {
        console.log(err);
        this.errorserver = err.error;
      }
    );


  }
  showModal(boat: BoatDTO,n_seat:number) {
    this.showModal1();
    this.boatDTO=boat;
    
    this.formG.controls["id"].setValue(boat.id);
  this.formG.controls["name"].setValue(boat.name);
  this.formG.controls["type"].setValue(boat.type);
  this.formG.controls["n_seats"].setValue(n_seat);
  
  this.formG.controls["price"].setValue(boat.price);
  this.formG.controls["available"].setValue(boat.available);
  
  

  }
  showModal1(){
    this.show=!this.show;
    if(this.insert==true){
      this.insert=!this.insert
    }
  }

  costruzioneOggetto(): void {
   
    this.boatDTO=this.formG.getRawValue();
    this.boatDTO.user=this.user;
   
  
    this.boatServiceService.update(this.boatDTO).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllBoat();
      },
      (err) => {
        console.log(err);
        this.errorserver = err.error;
      }
    );
    this.showModal1();


  }
  showTab(){
    this.tabella= !this.tabella;

  }
  showInsert(){
    this.insert= !this.insert
    if(this.show==true){
      this.show=!this.show
    }
  }

}
