const original_answer = {
    q1: "Sachin Tendulkar" , 
    q2: "West indies" ,
    q3: "Virat Kohli",
    q4: "264" ,
    q5: "CSK"
}

const form = document.querySelector("form");
form.addEventListener("submit" , (event)=>{
    event.preventDefault();
    const data = new FormData(form);
    let result = 0;
    for(let [key , value] of data.entries()){
        if(value===original_answer[key]){
            
            result++;
            console.log(result);
        }
    }
    const out = document.getElementById("out");
    out.innerHTML = `you score ${result} out of 5`;
})