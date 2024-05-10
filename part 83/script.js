// The magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin (length greater than or equalto 12)) based on the length of their names.


let students = ["adil", "atib","yaman", "zeeshan", "azzizullah", "armaan", "tanzim","nuhas","suraj","farhan","murghaHattah","OMAR BIN KHATTABH"]
let houses= []

for (const student of students) {
    if(student.length<6)
        {
            houses.push("Gryfinndor")
        }
        else if(student.length<6){
            houses.push("Hufflepuff")

    }
        else if(student.length<12){
            houses.push("Ravenclaw")

    }
        else if(student.length>=12){

            houses.push("Slytherin")

    }
}

console.log(houses)