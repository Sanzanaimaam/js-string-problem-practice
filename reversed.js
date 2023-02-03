function reversedJs(str){
    let reversed=' ';
    for(let i=str.length-1; i>=0; i--){
        const elements=str[i];
        reversed=reversed+elements;
        console.log(elements, reversed)
    }
    return reversed


}
const line='i am a good girl' ;
const reversedAns=reversedJs(line);
console.log(reversedAns)