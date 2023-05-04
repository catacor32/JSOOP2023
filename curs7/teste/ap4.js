const day_in_milisecunde = 1000 * 60 * 60 * 24;

function diferentazile(data1,data2){
    const data1v = new Date(data1);
    const data2v = new Date(data2);
    const diffTime = Math.abs(data1v - data2v);
    const diffDAy = Math.ceil(diffTime / day_in_milisecunde);
    return diffDAy
}

let resulatat = diferentazile('12/15/2023','12/13/2023')
console.log(resulatat)

function getAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || m === 0 & today.getDate() < birthDate.getDate()){
        age--;
    }
    return age;

}
let result = getAge('12/13/2020')
console.log(result);