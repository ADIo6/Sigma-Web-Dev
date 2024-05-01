async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {
    console.log(a1)//hoisting line45


    // let a = await sleep()
    // console.log(a);

    
    // let b = await sleep()
    // console.log(b);
    // let [x,y, ...rest] =[1,5,7,8,9,10,101]
    // console.log(x, y, rest)

let obj={
    a:1,
    b:2,
    c:3,
    d:24,
    e:3,
    f:2,
    g:3
}
let {a,b,...rest}=obj
console.log(a,b,rest)



//spread syntax
function sum(a,b,c){
    return a+b+c;
}
let arr= [1,5,6]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))//(...) here triple dots states that : sum ko khol do(values ko spread krdo)


//hoisting
//note hoisting is only possible in var . it's not possible in let and const 

var a1=7;
})()

//Quiz from notes
// const a= "the", b="no"
// const c={a,b}
// console.log(c)
