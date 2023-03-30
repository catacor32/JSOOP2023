
class Carte{
    mypret;
    constructor(autor,titlu,gen,nrPag,stoc,copertaPiele){
        this.autor = String(autor);
        this.titlu = titlu;
        this.gen = gen;
        this.nrPag = Number(nrPag);

        this.stoc = Number(stoc);
        this.copertaPiele = Boolean(copertaPiele)
    }
    get pret(){
        console.log("Sunt in Getter");
        return this.mypret;
    }
    set pret(pretNou){
        if(pretNou <= 0){
            throw "Pretul nu poate fii actualizat"
        }
        else{
            this.mypret = pretNou
        }
    }
    cumpara(){
            if(this.stoc>0){
                this.stoc--;
                console.log(`Au mai ramas in stoc: ${this.stoc}`);
            }
            else{
                throw "Nu mai avem stoc";
            }
    }
    citeste(){
        if(this.nrPag >= 400){
            console.log(`Timpul recomandat de citire este de 7 zile`);
        }
        else if(this.nrPag > 200){
            console.log(`Timpul recomandat de citire este de 4 zile`);
        }
        else{
            console.log(`Timpul recomandat de citire este de 2 zile`);
        }
    }
    modificarePret(){
        if(this.copertaPiele === true){
            this.pret += 3;
        }
    }
    reducere(procent){
        this.pret -= (procent * this.pret) / 100 
    }
    info(){
        console.log(`Titlul este ${this.titlu}, autor ${this.autor} etc.`);
    }
}

// const carte = new Carte("Mihai Eminescu", "Amintiri din copilarie","Poveste", 150, 12, 23, true);
// console.log(carte);
// carte.cumpara();
// carte.citeste();
// carte.modificarePret();

// const carte2 = new Carte("I.L. Caragiale", "Blank", "Poezi", 345, 15, 12, false);
// console.log(carte2);
// carte2.cumpara();
// carte2.citeste();
// carte2.modificarePret();