function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views<1000)
    {
         viewStr= views

    }
    else if(views>1000000)
    {
         viewStr= views/1000000+ "M"

    }
    else{
        viewStr=views/1000+ "K"
    }
    let html=`<div class="container">
    <div class="card">
        <div class="thumbnail">

            <img src=${thumbnail}>

            <p class="duration">${duration} </p>
        </div>
        <div class="text">
            <h2>${title}</h2>
            <p>${cName} .  ${viewStr} views. ${monthsOld} months ago </p>
        </div>

    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to backend | Sigma web dev video #2","CodeWithAdil", 567000, 7 , "31:21","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ" )