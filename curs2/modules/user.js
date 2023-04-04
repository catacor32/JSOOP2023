export class User{
         _varsta; // protected
        #email; // privat
    constructor(id,nume,email, varsta){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.#email = email;
        this._varsta = varsta;
    }
    get email(){
        return this.#email;
    }
    set email (newMail){
        // console.log("Sunt in setterr")
        if(newMail == 'dan2@dan.ro'){
            this.#email = newMail;
        }
        else{
            throw "Invalid email";
        }
    }
    get varsta (){
        return this._varsta
    }
    // set varsta (varstaNoua){
    //     console.log("Sunt in setterr")
    //     if(varstaNoua > 0){
    //         this._varsta = varstaNoua;
    //     }
    //     else{
    //         throw "Ceva";
    //         // console.error("Ceva")
    //     }
    // }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
// export {User}