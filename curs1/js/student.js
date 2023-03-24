class Student{
    nota1 = {};
    nota2 = {};
    constructor(id,nume,varsta){
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
    }
    salut(){
        console.log(`Salut, numele meu este ${this.nume}`);
        return `Salut, numele meu este ${this.nume}`
    }
    examen(nota1,nota2){
        console.log(`La primul examen luat nota ${nota1}`)
        console.log(`La al doilea examen luat nota ${nota2}`)
        const rezultate = `
            <p> La primul examen luat nota ${nota1} </p>
            <p> La al doilea examen luat nota ${nota2} </p>
        `
        return rezultate

    }
    calMedia(nota1,nota2){
        const medie = (nota1 + nota2) / 2;
        console.log(medie);
        return `Media este de ${medie}`;
    }
}
