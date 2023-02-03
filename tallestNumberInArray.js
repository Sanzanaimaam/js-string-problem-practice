function tallestNumber(array){
    let tallest=array[0]
    for(let i=0; i<array.length; i++){
        const index=i;
        const elements=array[index];
        if(elements>tallest){
            tallest=elements;
        }
    }
    return tallest;

}
const number=[134,765,355,245,666];
const toFunction=tallestNumber(number);
console.log(toFunction);