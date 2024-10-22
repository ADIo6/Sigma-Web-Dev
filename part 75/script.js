console.log("adil is a hacker")
console.log("adil is a heecker")

setTimeout(() => {
    console.log("i am inside set-timeout")

}, 0);

console.log("The End    ")

const callback = (arg) => {
    console.log(arg)

  
}


const loadScript = (src, callback) => {
  let sc= document.createElement("script")

  sc.src=src;
  sc.onload= callback("Adil")
  document.head.append(sc)

  
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


alert(`hello adil`);

console.log();
