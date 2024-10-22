let button=document.getElementById("btn")
// list of all mouse events below

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click", ()=>{
    alert("I was clicked")
})
button.addEventListener("mouseenter", ()=>{
    document.querySelector(".box").innerHTML="<b>mouse was entered here </b> enjoy"
        
})
button.addEventListener("contextmenu", ()=>{
    alert("right click has listened here")
        
})
button.addEventListener("keydown", (e)=>{
    console.log( e.key,e.keyCode )
        
})