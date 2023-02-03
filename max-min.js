// function maxMin(num1,num2,num3) {
//     if(num1>num2 && num1>num3){
//         console.log('jim is 1st')
//     } 
//     else if(num2>num1 && num2>num3){
//         console.log('mim')
//     }
//     else{
//         console.log('rim')
//     }
      
// }
// const number=34;
// const number1=87;
// const number2=55;
// const maxNumber=maxMin(number,number1,number2)
// console.log(maxNumber);

// function maxMin(num1,num2,num3) {
//     if(num1<num2 && num1<num3){
//         console.log('jim is 1st')
//         return num1
//     } 
//     else if(num2<num1 && num2<num3){
//         console.log('mim')
//         return num2
//     }
//     else{
//         console.log('rim')
//         return num3
//     }
      
// }
// const number=34;
// const number1=87;
// const number2=55;
// const minNumber=maxMin(number,number1,number2)
// console.log(minNumber);

function maxmin(num1,num2,num3){
    return Math.min(num1,num2,num3);
    
}
const number=12;
const number1=45;
const number2=99;
const minNumber = maxmin(number, number1, number2);
console.log(minNumber);
