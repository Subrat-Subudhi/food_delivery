const Quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Push yourself, because no one else is going to do it for you.",
  "You don’t have to be great to start, but you have to start to be great.",
  "The hard days are what make you stronger.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The only way to do great work is to love what you do.",
  "It always seems impossible until it's done.",
  "Start where you are. Use what you have. Do what you can.",
  "I am not a product of my circumstances. I am a product of my decisions.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Don’t limit your challenges. Challenge your limits.",
  "Doubt kills more dreams than failure ever will.",
  "Work hard in silence, let your success be your noise.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Discipline is choosing between what you want now and what you want most.",
  "Opportunities don't happen. You create them.",
  "Fall seven times, stand up eight."
];
const button = document.querySelector('button');
button.addEventListener("click" , ()=>{
    const ele = document.getElementById("Quote");
    const index = Math.floor(Math.random() * Quotes.length);
    ele.innerHTML = Quotes[index];
})