import { OrderType } from "./ordertype";
import { Pane } from "./pane";
import { UserDTO } from "./userdto";

export class OrderDTO {

    id: number ;
    pane: Pane ;
    kg: number ;
    tipoOrdine:OrderType ;
    user:UserDTO;
 
 }