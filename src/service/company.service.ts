import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDTO } from 'src/dto/company';
import { UserDTO } from 'src/dto/userdto';
import { environment } from 'src/environments/environment';
import { AbstractService } from './abstractservice';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractService<CompanyDTO> {

 
  constructor(http: HttpClient) {
    super(http);
    this.type = 'company';
  }

  getShop(userId:number){
    return  this.http.get<CompanyDTO>(environment.APIEndpoint + 'company'+ '/getcompany?userid='+userId);
  }



}
