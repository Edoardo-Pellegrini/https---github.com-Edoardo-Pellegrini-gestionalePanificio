import { BoatDTO } from './../dto/boatdto';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoatServiceService extends AbstractService<BoatDTO> {
  getMyBoat(userId:number) {
    return this.http.get<BoatDTO[]>(environment.APIEndpoint+'boat'+'/myboat?id='+userId)
  }

  constructor(http: HttpClient) {
    super(http);
    this.type = 'boat';
  }
}
