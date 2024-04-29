// let obj= {
//     a:1,            
//     b:"harry"   
// }   
// console.log(obj)

// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };

// rabbit.__proto__=animal; //sets rabbit.[[prototype]]=animal


class animal{
    constructor(name){
        this.name = name;
        console.log("object is created...")

    }

    eats(){
        console.log("kha raha hoon")

    }
    jumps(){
        console.log("kood raha hoon")

    }
}
class lion extends animal{

    constructor(name){
        super(name)
        
        console.log("object is created & he's a lion...")


    }

    eats(){

        super.eats()
        console.log("kha raha hoon roarsss")

    }

}

let a = new animal("bunny");
console.log(a)


let l =new lion("sher")
console.log(l)





