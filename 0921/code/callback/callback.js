// console.log("주문이 들어왔어요")

// function orderCallBack(){
//     console.log("결제 진행");
//     setTimeout(()=>{
//         console.log("결제완료")
//         setTimeout(()=>{
//             console.log("배달 시작")
//         },1000)
//     },3000)
// }
// orderCallBack();


console.log("주문이 들어왔어요");
function orderCallBack(){
    console.log("결제 진행");
    setTimeout(()=>{
        console.log("결제완료")
        setTimeout(()=>{
            console.log("배달 시작")
        },1000)
    },3000)
}
orderCallBack();

