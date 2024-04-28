let a= prompt("Enter first number")

let b= prompt("Enter second number")

if(isNaN(a)||isNaN(b))
{
    throw SyntaxError("Sorry this is not allowed")
}

let sum= parseInt(a)+ parseInt(b);
let x=1;

function main(){

    try {
        console.log("the sum is ", sum*x)
        return true
    } catch (error) {
        console.log("Error AGAYA BHAI")
        return false
    }
    // finally is used for function mainly 
    finally{
    console.log("files are being closed and db connection is being closed")
}
}

let c= main()