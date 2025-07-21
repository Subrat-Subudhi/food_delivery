function getname(){
    const obj = document.getElementById("root");
    const showtime = new Date();
    const indiantime = showtime.toLocaleTimeString();
    obj.innerHTML = indiantime;
}
setInterval(getname , 1000);

const obj = document.getElementById("root");
obj.style.fontSize = "120px";
obj.style.height = "100vh"
obj.style.display = "flex";
obj.style.justifyContent = "center";
obj.style.alignItems = "center";
obj.style.backgroundColor = "pink"