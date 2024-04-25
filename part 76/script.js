// async function getData(){
//     // simulate getting data from a server
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getData(){
    // simulate getting data from a server
   let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')

   let data= await x.json()
    // .then(response => response.json())
    // .then(json => console.log(json))
    console.log(data);

    
}

async function main()
{

    console.log("loading modules");
    
    console.log("do something");
    
    console.log("load data");
    
    let data = await getData()
    
    console.log(data)
    console.log("process data");
    console.log("task 2")
}

main()

// data.then((v)=>{

//     console.log(data)
//     console.log("process data");
//     console.log("task 2")
// })
