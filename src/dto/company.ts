import { CompanyService } from "src/service/company.service";
import { UserDTO } from "./userdto";

export class CompanyDTO {
  id: number;

  address: string;

  email: string;

  networth: number;

  user: UserDTO;

  constructor(address: string, email: string, networth: number, user: UserDTO) {
    this.address = address;
    this.email = email;
    this.networth = networth;
    this.user = user;
  }
  
}
