/* create a business name generator by combining list of adjectives  and shop name and another word

Adjectives:
Crazy
Amazing 
Fire

Shop name:
Engine
foods 
Garments

Another Word:
Bros 
Limited
Hub
*/


let shop_name={
    1: " Engine ",
    2: " Food ",
    3: " Garments "
}
let Another_words={
    1: " Bros ",
    2: " Limited ",
    3: " Hub "

}
let adjectives={
    "1": " crazy ",
    "2": " amazing ",
    "3": " fire "
}
let random=Math.random();

if (random>0.2)
{   
    for (let i = 1; i <=3; i++) {

        const x1= adjectives[i];
        
        for (let j = 1; j <=3; j++) {
    
            const x2= shop_name[j];
            
            for (let k = 1; k <=3; k++) {
                const x3= Another_words[k];
                
                console.log(x1.concat(x2, x3))
            }
        }
    }
    
}
else
{
    console.log("no result")
}

// for (const key in adjectives) {

//         const element = adjectives["a1"+ "a3"];
//         console.log(element)
//     }