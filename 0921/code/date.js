
const now = new Date();

console.log(now);

let park = {
    name : "박",
    age : 30,
    add : (a,b) => a+b
}
console.log(park)

class Tv {
    constructor(companyName, price){
        this.companyName = companyName;
        this.price = price;
    }
    getName() {
        return this.companyName
    }
}

function User(name, age){
    this.name = name;
    this.age = age;
}

const samsung = new Tv("삼성티비", 5000);
console.log(samsung.getName())

