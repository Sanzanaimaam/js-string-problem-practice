function smallestNumber(number){
    let smallest=number[0];
    for(let i=0; i<number.length; i++){
        const elements=number[i];
        // console.log(elements)
        if(elements<smallest){
            smallest=elements;
        }
    }
    return smallest;

}
const array=[134,765,355,45,666];
const toFunction=smallestNumber(array);
console.log(toFunction);