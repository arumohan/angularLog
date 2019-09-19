export class Devise {
    code : string; // exemple : USD, EUR, GBP, JPY, ....Etc
    name : string; // Dollar, Euro, Livre, Yen, 
    change : number; // Dollar, 1, 0.9, 0.8, 120

    constructor(code : string ="?", name : string = "?",
    change : number = 1){
        this.code = code;
        this.name = name;
        this.change = change;
    }
}
