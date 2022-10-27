import { ProfileDTO } from 'src/dto/profiledto';
import { Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
export class ProfileService extends AbstractService<ProfileDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'profile';
  }

  find(user_id: number): Observable<ProfileDTO> {
    console.log(environment.APIEndpoint + this.type + '/read?user_id=' + user_id);
    //http://localhost:8080/profile/read?id=1
    //http://localhost:8080/user/read?id=2
    return this.http.get<ProfileDTO>(environment.APIEndpoint + this.type + '/read?user_id=' + user_id);
  }
}