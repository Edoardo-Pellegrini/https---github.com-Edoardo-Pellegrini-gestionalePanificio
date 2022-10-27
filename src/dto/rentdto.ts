import { BoatDTO } from "./boatdto";
import { UserDTO } from "./userdto";

/**
 * Classe DTO di Rent. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @author Silva Edoardo
 */
 export class RentalDTO {
    id: number;
    boat: BoatDTO;
    user: UserDTO;
    startRental: Date;  //LocalDate
    finishRental: Date; //LocalDate
    dailyPrice: number ;//float;
    totalPrice: number ;//float;

    constructor(boat: BoatDTO, user: UserDTO, startRental: Date, finishRental: Date, dailyPrice: number) {
        this.boat = boat;
        this.user = user;
        this.startRental = startRental;
        this.finishRental = finishRental;
        this.dailyPrice = dailyPrice;
        //+1 --> first day is counted
        this.totalPrice = (this.calculateDiff(startRental, finishRental) + 1)  * this.dailyPrice;
    }

    calculateDiff(startDate: Date, endDate: Date){
        //in case some of you ask why "Number(new Date(endDate)", the answer is "typescript". seriusly why the fuck it converts a Date to string?
        return Math.round(( Number(new Date(endDate)) - Number(new Date(startDate))) / (24 * 60 * 60 * 1000)) //constant milliseconds to days
    }
}