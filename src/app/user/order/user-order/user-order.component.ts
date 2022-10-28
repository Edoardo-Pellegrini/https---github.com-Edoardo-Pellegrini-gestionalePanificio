import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/dto/orderdto';
import { UserDTO } from 'src/dto/userdto';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  order:OrderDTO = new OrderDTO();
  user:UserDTO = JSON.parse(localStorage.getItem("currentUser"))
  errorserver: any;
  constructor(private service: OrderService) { }

  ngOnInit() {
  }

  insert(){
    this.order.user= this.user;
    this.service.insert(this.order).subscribe((resp) => {
      console.log(resp);
      this.errorserver = undefined;
      
    },
    (err) => {
      console.log(err.error);
      this.errorserver = err.error;
    });

  }

}
