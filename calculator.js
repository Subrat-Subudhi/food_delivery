const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    const input1 = document.getElementById("first");
    const no1 = Number(input1.value);

    const input2 = document.getElementById("second");
    const no2 = Number(input2.value);

    const sum = no1 + no2 ;

    const result = document.getElementById("result");
    result.innerHTML = "result: "+sum;

})