const cricketQuiz = [
    {
        question: "Who has scored the most international centuries?",
        options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Kumar Sangakkara"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup in 1975?",
        options: ["India", "England", "Australia", "West Indies"],
        answer: "West Indies"
    },
    {
        question: "What is the highest individual score in ODI cricket?",
        options: ["264", "200", "237", "219"],
        answer: "264"
    },
    {
        question: "Who is known as the 'Rawalpindi Express'?",
        options: ["Shoaib Akhtar", "Wasim Akram", "Waqar Younis", "Imran Khan"],
        answer: "Shoaib Akhtar"
    },
    {
        question: "Who was the captain of India when they won the 1983 World Cup?",
        options: ["Sunil Gavaskar", "Mohinder Amarnath", "Kapil Dev", "Dilip Vengsarkar"],
        answer: "Kapil Dev"
    },
    {
        question: "Which team has won the most IPL titles as of 2024?",
        options: ["CSK", "MI", "RCB", "KKR"],
        answer: "MI"
    },
    {
        question: "Who is the fastest bowler to 100 ODI wickets?",
        options: ["Mitchell Starc", "Shaheen Afridi", "Rashid Khan", "Mustafizur Rahman"],
        answer: "Mitchell Starc"
    },
    {
        question: "Which Indian cricketer is nicknamed 'The Wall'?",
        options: ["Sachin Tendulkar", "Rahul Dravid", "VVS Laxman", "Anil Kumble"],
        answer: "Rahul Dravid"
    },
    {
        question: "Who was the first batsman to score a double century in ODIs?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country hosted the 2019 ICC World Cup?",
        options: ["India", "Australia", "England", "South Africa"],
        answer: "England"
    },
    {
        question: "Who won the 2011 ICC Cricket World Cup?",
        options: ["India", "Sri Lanka", "Australia", "Pakistan"],
        answer: "India"
    },
    {
        question: "What is MS Dhoni's highest score in ODI cricket?",
        options: ["183*", "148", "224", "113*"],
        answer: "183*"
    },
    {
        question: "Who holds the record for the fastest century in ODIs?",
        options: ["Virat Kohli", "AB de Villiers", "Glenn Maxwell", "Jos Buttler"],
        answer: "AB de Villiers"
    },
    {
        question: "Who is known as the 'Universe Boss'?",
        options: ["Chris Gayle", "Andre Russell", "Kieron Pollard", "Dwayne Bravo"],
        answer: "Chris Gayle"
    },
    {
        question: "What is the length of a cricket pitch?",
        options: ["20 yards", "22 yards", "24 yards", "25 yards"],
        answer: "22 yards"
    },
    {
        question: "Who was the first Indian to take a hat-trick in Tests?",
        options: ["Anil Kumble", "Jasprit Bumrah", "Harbhajan Singh", "Zaheer Khan"],
        answer: "Harbhajan Singh"
    },
    {
        question: "Who won the Orange Cap in IPL 2023?",
        options: ["Faf du Plessis", "Virat Kohli", "Shubman Gill", "David Warner"],
        answer: "Shubman Gill"
    },
    {
        question: "Who is the current (2024) captain of the Indian Test team?",
        options: ["Rohit Sharma", "KL Rahul", "Virat Kohli", "Hardik Pandya"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which bowler took all 10 wickets in a Test innings in 2021?",
        options: ["James Anderson", "Ajaz Patel", "Ravichandran Ashwin", "Nathan Lyon"],
        answer: "Ajaz Patel"
    },
    {
        question: "Who is the youngest cricketer to debut for India?",
        options: ["Sachin Tendulkar", "Parthiv Patel", "Rashid Khan", "Shafali Verma"],
        answer: "Sachin Tendulkar"
    }
];

// function RandomQuestion(){
//     const data = new Set();
//     while(data.size!=5){
//         const index = Math.floor(Math.random()*cricketQuiz.length);
//         data.add(cricketQuiz[index]);
//     }
//     return [...data];
// }
const problem= [];
let l = cricketQuiz.length;
for(let i = 0 ; i<5 ; i++){
    const index = Math.floor(Math.random()*l);
    problem.push(cricketQuiz[index]);
    [cricketQuiz[index], cricketQuiz[l-1]] = [cricketQuiz[l-1],cricketQuiz[index]];
    l--;
}
// return problem;

const form = document.querySelector('form');
// const problem = RandomQuestion();
const original_answer = {};

problem.forEach((obj , index) => {
    const div_element= document.createElement("div");
    div_element.className = "questions";
    original_answer[`q${index+1}`] = obj['answer'];

    const para = document.createElement('p');
    para.innerHTML=`${index+1}. ${obj['question']}`;
    div_element.appendChild(para);

    obj['options'].forEach(val=>{
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index+1}`;
        input.value= val;

        label.appendChild(input);
        label.appendChild(document.createTextNode(val));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'))
    })
    form.appendChild(div_element);
})

const ele = document.createElement('div');
const button = document.createElement('button');
button.type = 'submit';
button.className = 'sub-but';
button.innerHTML = 'submit';
ele.appendChild(button);
form.appendChild(ele);

form.addEventListener('submit' , (event)=> {

    event.preventDefault();
    const data = new FormData(form);
    
    let result = 0;
    for(let [key , value] of data.entries()){
        if(value===original_answer[key]){
            result++;
        }
    }

    problem.forEach((obj, index) => {
        const div_element = form.querySelectorAll('.questions')[index];
        const jrdiv = document.createElement('div');
        jrdiv.style.color = "green";
        jrdiv.innerHTML = `✅ Correct answer: <strong>${obj['answer']}</strong>`;
        div_element.appendChild(jrdiv);
    });
    
    const out = document.getElementById('out');
    out.innerHTML=`you score ${result} out of 5`;

    form.reset();
})