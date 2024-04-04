let a=8;
let element=1;
for (let i = 1; i <= a; i++) {
    
     element = element*i;
}
console.log(element)

// or 

let arr=[1,2,3,4,5,6,7,8]

const fact=(a,b)=>{
    return a*b;

}
console.log(arr.reduce(fact))