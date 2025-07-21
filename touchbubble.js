document.addEventListener("click" , (event)=>{ 
    const ele = document.createElement("div");
    ele.id = "circle";
    document.body.appendChild(ele);
    const x = event.clientX;
    const y = event.clientY;
    ele.style.left = `${x-25}px`;
    ele.style.top= `${y-25}px`;
    const ipl = ["CSK" , "RCB" , "KKR" , "MI" , "SRH"];
    ele.innerHTML = ipl[Math.floor(Math.random()*ipl.length)];
    if(ele.innerHTML==="CSK"){
        ele.style.backgroundColor = "yellow";
        ele.style.color= "black";
    }
    else if(ele.innerHTML==="RCB"){
        ele.style.backgroundColor = "red";
    }
    else if(ele.innerHTML==="KKR"){
        ele.style.backgroundColor = "violet";
    }
    else if(ele.innerHTML==="SRH"){
        ele.style.backgroundColor = "orange";
    }
    setTimeout(() => {
        ele.remove();
    }, 5000);
})