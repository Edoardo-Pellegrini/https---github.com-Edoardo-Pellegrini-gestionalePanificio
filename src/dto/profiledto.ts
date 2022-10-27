import { UserDTO } from 'src/dto/userdto';

export class ProfileDTO {

    id: number;

	name: string;

	surname: string;

	email: string;

	user: UserDTO;

    constructor(id: number, name: string, surname: string, email: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    
    setUser(user: UserDTO){
        this.user = user;
    }

}