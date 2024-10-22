console.log('This is prommises');

let prom1= new Promise((resolve, reject)=>{

    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 1")
    }
    else{

        setTimeout(() => {
            console.log("Yes i am done")
            resolve("adil")
        }, 3000);
        }
    })

let prom2= new Promise((resolve, reject)=>{

    let a= Math.random();
    if(a<0.5){
        reject("No random number was not supporting yo  u 2")
    }
    else{

        setTimeout(() => {
            console.log("Yes i am done 2")
            resolve("adil2")
        }, 1000);
        }
    })
let prom3= new Promise((resolve, reject)=>{

    let a= Math.random();
    if(a<0.5){
        reject("No random number was not supporting yo  u 3")
    }
    else{

        setTimeout(() => {
            console.log("Yes i am done 3")
            resolve("adil3")
        }, 1000);
        }
    })
let prom4= new Promise((resolve, reject)=>{

    let a= Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 4")
    }
    else{

        setTimeout(() => {
            console.log("Yes i am done 4")
            resolve("adil4")
        }, 1000);
        }
    })



// prom1.then((a)=>{
//     console.log(a)

// }).catch((err)=>{
//     console.log(err);
    
// })

// let p3= Promise.allSettled([prom1,prom2])

// p3.then((a)=>{
//         console.log(a)
    
//     }).catch((err)=>{
//         console.log(err);
        
//     })

// let p3= Promise.race([prom1,prom2])

// p3.then((a)=>{
//         console.log(a)
    
//     }).catch((err)=>{
//         console.log(err);
        
//     })

let p3= Promise.any([prom1,prom2,prom3,prom4]);

p3.then((a)=>{
        console.log(a)
    
    }).catch((err)=>{
        console.log(err);
        
    })