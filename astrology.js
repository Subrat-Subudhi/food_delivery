const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const hinduZodiacGods = [
  "kumar Kartikeya (Murugan)",        // 0 - Aries (Mesha)
  " Maa Lakshmi",                    // 1 - Taurus (Vrishabha)
  " Maa Saraswati",                  // 2 - Gemini (Mithuna)
  "Maa Parvati",                    // 3 - Cancer (Karka)
  "Bhagwan Surya (Sun God)",            // 4 - Leo (Simha)
  " Ma Durga",                      // 5 - Virgo (Kanya)
  "Shukra dev(Venus)",             // 6 - Libra (Tula)
  "Hanuman ji",                    // 7 - Scorpio (Vrishchika)
  "Brihaspati maharaj(Jupiter)",       // 8 - Sagittarius (Dhanu)
  "Shani dev (Saturn)",             // 9 - Capricorn (Makara)
  "Varuna dev",                     // 10 - Aquarius (Kumbha)
  "Matsya Avatar (Bhagwan Vishnu)"      // 11 - Pisces (Meena)
];

//30
const lifeRecommendations = [
  "Help others whenever you can",
  "Stay kind, even when it's hard",
  "Take time to listen deeply",
  "Express gratitude daily",
  "Be honest with yourself and others",
  "Forgive and let go of grudges",
  "Stay calm in stressful situations",
  "Speak less, observe more",
  "Trust the process of life",
  "Celebrate small wins",
  "Keep learning something new",
  "Respect everyone's journey",
  "Stay grounded and humble",
  "Take care of your health",
  "Disconnect to reconnect",
  "Follow your intuition",
  "Be patient with growth",
  "Spend time in nature",
  "Value your time and energy",
  "Smile more often",
  "Avoid comparison with others",
  "Speak your truth with love",
  "Let go of what you can't control",
  "Meditate or reflect daily",
  "Be consistent, not perfect",
  "Embrace change gracefully",
  "Surround yourself with positivity",
  "Practice compassion daily",
  "Believe in your purpose",
  "Give without expecting anything back"
];

//20
const personalityAffirmations = [
  "You are very intelligent and quick to learn",
  "You have a magnetic personality",
  "You will become a millionaire through your hard work",
  "You inspire others without even trying",
  "Your creativity will lead to great success",
  "You are destined for leadership and influence",
  "Your positivity attracts abundance",
  "You are deeply wise beyond your years",
  "You have the power to manifest your dreams",
  "You are fearless in the face of challenges",
  "You will be known for your kindness and compassion",
  "Your ideas will change lives one day",
  "You naturally attract opportunities",
  "Your calm mind brings clarity to others",
  "You have a gift for understanding people",
  "You will find success in unexpected places",
  "Your hard work is building your legacy",
  "You are meant to leave a mark on the world",
  "You are a visionary with great potential",
  "You are destined to live a life of meaning and abundance"
];

//31
const astroPlacements = [
  "Your Saturn is in the 6th house",
  "Mars is favoring your career zone",
  "Venus enters your 7th house of love",
  "The Moon energizes your 3rd house",
  "Mercury retrograde affects your communication",
  "Jupiter is expanding your financial sector",
  "Sun in your 10th house boosts reputation",
  "Your Moon sign influences your emotions today",
  "Ketu in the 12th may increase spiritual energy",
  "Rahu in the 1st house boosts your ambitions",
  "Mars in your 4th house may stir family matters",
  "Saturn teaches you patience in relationships",
  "Venus in 2nd house enhances self-worth",
  "Mercury transits your 5th house of creativity",
  "Your rising sign attracts attention today",
  "Jupiter in 11th house brings powerful networks",
  "The Sun lights up your health zone",
  "Moon conjunct Jupiter enhances your luck",
  "Mars square Saturn causes inner tension",
  "Your Venus sign shines in romantic matters",
  "Mercury direct clears up misunderstandings",
  "Uranus shakes up your home sector",
  "Neptune in 8th brings deep intuition",
  "Sun trine Moon brings harmony within",
  "Mars in 9th favors bold decisions",
  "Pluto in 10th transforms your ambitions",
  "Chiron opens old wounds but brings healing",
  "Saturn return is teaching you life lessons",
  "North Node in 3rd helps you speak your truth",
  "Your Lagna is strong—lead boldly today",
  "Moon in 6th increases emotional awareness"
];

const form  = document.querySelector('form');
form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const name = document.getElementById('fullname').value;
    const dob = new Date(document.getElementById('dob').value);
    const date = Number(dob.getDate());
    const month = Number(dob.getMonth());
    const year= Number(dob.getFullYear());
    const time = document.getElementById('time').value;
    const [hours , minutes] = time.split(":");
    const hour = Number(hours);
    const minute = Number(minutes);
    const place = document.getElementById('place').value;

    const zodsign = zodiacSigns[month];
    const zodgod = hinduZodiacGods[month];
    const lrindex = (name.length + date + month + year)%30;
    const pindex = Math.floor(Math.random()*personalityAffirmations.length);
    const apindex = (hour*minute)%31;

    const para = document.getElementById('horoscopeText');
    para.innerHTML = `Your zodiac sign is ${zodsign}.${personalityAffirmations[pindex]}.Currently ${astroPlacements[apindex]}.Our Suggestion: You Should worship ${zodgod} and ${lifeRecommendations[lrindex]}.`;
})

