
import { BoatDTO } from './boatdto';
import { UserDTO } from './userdto';

/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class PurchaseDTO {

   id: number;
   boat: BoatDTO;
   user: UserDTO;
   day_purchase: Date;
   /**private Long id;
    private BoatDTO boat;
    private UserDTO user;
    private LocalDate day_purchase; */

   constructor(boat: BoatDTO, day_purchase: Date, user: UserDTO) {
      this.boat = boat;
      this.day_purchase = day_purchase;
      this.user = user;
  }

}

