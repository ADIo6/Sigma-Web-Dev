
/* here,
Instead of updating the innerHTML, I used createElement to create a new div for each card, and then appended that div to the container using appendChild().
This avoids re-rendering the entire container, allowing the "Generate" button to work multiple times.
No innerHTML +=:

By avoiding innerHTML +=, you prevent resetting the DOM structure, which ensures that event listeners (like the one on the "Generate" button) remain intact.
Now, every time you click the "Generate" button, it will continue to ask for the video details and append a new card to the container, working as expected without breaking.
*/ 

const generateBtn = document.querySelector(".btn");

// Function to create a card and append it to the container
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;

    // Format the views count
    if (views < 1000) {
        viewStr = views;
    } else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";  // Show millions with 1 decimal place
    } else {
        viewStr = (views / 1000).toFixed(1) + "K";  // Show thousands with 1 decimal place
    }

    // Create card element
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // Set the card's inner HTML
    cardDiv.innerHTML = `
        <div class="thumbnail">
            <img src="${thumbnail}" alt="Video Thumbnail">
            <p class="duration">${duration}</p>
        </div>
        <div class="text">
            <h2>${title}</h2>
            <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
        </div>
    `;

    // Append the card to the container
    document.querySelector(".container").appendChild(cardDiv);
}

// Event listener for button click
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
