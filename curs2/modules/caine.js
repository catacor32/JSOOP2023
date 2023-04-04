import { Animals } from "./animal.js";

class Caine extends Animals {
    constructor(greutate, nrPicioare,nume){
        super(greutate, nrPicioare)
        this.nume = nume;
    }
}


export { Caine };