import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDTO } from 'src/dto/orderdto';
import { AbstractService } from './abstractservice';

@Injectable({
  providedIn: 'root'
})
export class OrderService  extends AbstractService<OrderDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'order';
  }
}
