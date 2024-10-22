const generateBtn = document.querySelector(".btn");

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
generateBtn.addEventListener("click", () => {
    // Ask user for input step by step
    const title = prompt("Enter the video title:");
    const cName = prompt("Enter the channel name:");
    const views = parseInt(prompt("Enter the number of views:"), 10);
    const monthsOld = parseInt(prompt("Enter how many months ago it was uploaded:"), 10);
    const duration = prompt("Enter the video duration (e.g., 12:34):");
    const thumbnail = prompt("Enter the thumbnail URL:");

    // Create a new card with user-provided values
    createCard(title, cName, views, monthsOld, duration, thumbnail);
});



