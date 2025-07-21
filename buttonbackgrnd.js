// *******method1*******

// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const yellow = document.getElementById("yellow");
// const orange = document.getElementById("orange");
 
// red.addEventListener("click" , ()=>{
//     document.body.style.backgroundColor = "red";
// })
// blue.addEventListener("click" , ()=>{
//     document.body.style.backgroundColor = "blue";
// })
// green.addEventListener("click" , ()=>{
//     document.body.style.backgroundColor = "green";
// })
// yellow.addEventListener("click" , ()=>{
//     document.body.style.backgroundColor = "yellow";
// })
// orange.addEventListener("click" , ()=>{
//     document.body.style.backgroundColor = "orange";
// })


// ***********method2***********

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button)=>{
//     button.addEventListener("click" , ()=>{
//         document.body.style.backgroundColor = button.id;
//     })
// })


// ************method 3******************


const ele = document.getElementById("button");
ele.addEventListener("click" , (event)=>{
    if(event.target.tagName==="BUTTON")
    document.body.style.backgroundColor = event.target.id;
})


