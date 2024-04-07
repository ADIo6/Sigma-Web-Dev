let num=6;

function factorial(number){

    let arr= Array.from(Array(number+1).keys())// converting a number to a list of arrays
    console.log(arr.slice(1,))
    let c= arr.slice(1,).reduce((a,b)=>{
        
    return a*b;
    })   
    console.log(c) ;

    // below is the shorcut way to write arrow fuction code 
    
    // let c= arr.slice(1,).reduce((a,b)=> a*b)
    // return c;

}
factorial(num)
// console.log(factorial(num))