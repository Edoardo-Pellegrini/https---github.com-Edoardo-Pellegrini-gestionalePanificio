import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RentalDTO } from "src/dto/rentdto";
import { AbstractService } from "./abstractservice";

/**
 * I service sono decorati da @Injectable. 
 * Qui trovate, oltre ai metodi ereditati dall'Abstract,
 *  il metodo per il login (in mirror con il backend).
 * 
 * @author Silva Edoardo
 * 
 * @see AbstractService
 */
 @Injectable({
    providedIn: 'root'
  })
  export class RentService extends AbstractService<RentalDTO>{
  
    constructor(http: HttpClient) {
      super(http);
      this.type = 'rental';
    }
}
