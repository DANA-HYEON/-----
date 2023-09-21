let l0 = 'l0';

// function fn2(){
//     let l2 = 'l2';
//     console.log(l0, l1, l2);
// }

function fn1(){
    let l1 = 'l1';
    console.log(l0, l1);
    function fn2(){
        let l2 = 'l2';
        console.log(l0, l1, l2);
    }
    fn2();
}

fn1();

function add(indexNum){
    function addNumbers(num){
        return indexNum + num
    }
    return addNumbers;
}

let add_1 = add(1);
console.log(add_1(1));
console.log(add_1(2));