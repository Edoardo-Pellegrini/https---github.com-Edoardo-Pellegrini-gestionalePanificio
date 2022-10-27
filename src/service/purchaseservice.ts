import { Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { PurchaseDTO } from "src/dto/purchasedto";

/**
 * I service sono decorati da @Injectable. 
 * Qui trovate, oltre ai metodi ereditati dall'Abstract,
 *  il metodo per il login (in mirror con il backend).
 * 
 * @author God
 * 
 * @see AbstractService
 */
 @Injectable({
    providedIn: 'root'
  })
export class PurchaseService extends AbstractService<PurchaseDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'purchase';
  }

}