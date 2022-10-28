import { Component, OnInit } from '@angular/core';
import { OrderDTO } from 'src/dto/orderdto';
import { OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:OrderDTO[];

  constructor(private service:OrderService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(orders=>this.orders=orders);
  }

  delete(ele:OrderDTO){
    
    this.service.delete(ele.id).subscribe((resp)=>{console.log(ele);this.getAll();});
    
  }

}
