import { NewUser, Abonat } from "../modules/NewUser.js";
// Modificam nume, email, varsa
let user = new NewUser('1','ion','ion@ion.com',22);
user.doarme(7);
// console.log(user);
// user.varsta= 23; //Error
// console.log(user);

let abonat = new Abonat('2','dan', 'dan@dan.com');

// abonat.password ='6789'; //Error
// abonat.info();
// abonat.email ='demo@demo.com';

console.log(abonat);
// abonat._varsta = 44;
// abonat._email = 'demo@demo.com';
abonat.info();
console.log(abonat);