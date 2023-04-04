class Animals{
    #familie;
    #mancare;
    #culoare;
    greutate;
    nrPicioare;


    constructor(greutate, nrPicioare){
        this.greutate = greutate;
        this.nrPicioare = nrPicioare;
    }

    mananca(cantitae){
        console.log(`Cantitatea de hrana consumata este ${cantitae} kg`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
    comunica(mesaj){
        console.log(`Acest animal face ${mesaj}`);
    }

    get familie(){
        this.#familie;
    }
    set familie(myFam){
        this.#familie = myFam;
    }
}
export {Animals};