function Calculator(a,b){
    this.a = a;
    this.b = b;

    this.sum = () => {
        return this.a + this.b;
    }
}

let math = new Calculator(6,3);
console.log(math.sum(10,2))