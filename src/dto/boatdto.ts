import { UserDTO } from './userdto';

/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class BoatDTO {

   id: number;

   name: string;

   type: string;

   n_seat: number;

   price: number;

   available: boolean;

   user: UserDTO;
   /*    private Long id;
    private String name;
    private String type;
    private Integer n_seats;
    private Float price;
    private boolean available;
    private UserDTO user;*/
}

