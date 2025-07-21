

const resturants= [];

const restnames = [
  "Dalma",
  "Orchid – The Multi‑cuisine Restaurant",
  "Wink",
  "Chili’s Grill & Bar",
  "Punjab Grill",
  "Yeti – The Himalayan Kitchen",
  "Kake Di Hatti",
  "Dil-E-Mughlai",
  "7th Moon Restaurant And Banquet",
  "Mustard By Hotel Lucky India",
  "Raasta",
  "Punjab Grill (delivery/outlet)",
  "TCD – The Chicken Dynasty",
  "99 North Restaurant",
  "Mainland China",
  "Dubai Mainland China",
  "Taste of China",
  "AB’s – Absolute Barbecues",
  "Three Kings Restaurant",
  "Olive Bar & Cafe",
  "Rolling Crunchy's Cafe & Restaurant",
  "Uptown Vibes",
  "Drip Cafe & Restaurant",
  "Lazzone (Cafe & Restaurant)",
  "Casablanca Resto & Cafe",
  "Doppio Coffee & Bistro",
  "Café 16",
  "Café Frespresso",
  "BOCCA Cafe",
  "TopNotch",
  "The Restaurant – Trident",
  "Kanika – Mayfair Lagoon",
  "Moody Blues",
  "Lemon Grass – Mayfair Lagoon",
  "Mamma Mia – Mayfair Lagoon",
  "Kruti Coffee",
  "Nakli Dhaba",
  "Marwari Rasoi",
  "Truptee Legacy",
  "Street Foods by Punjab Grill",
  "Dosa Plaza",
  "Mughlai Affair",
  "Oceana (Hotel Swosti)",
  "Aqua (Hotel Swosti)",
  "Bocca Cafe (Swosti)",
  "Ad Terra Rosso",
  "Brown n Cream (Swosti)",
  "Galleria (Swosti)",
  "Cafe Sundowner",
  "Xcuse Bar"
];

const restimages = ["First","second","third","fourth","fifth","sixth","seventh",'Eigth',"nine","tenth"]

const restlocations = [
  "157 Madhusudan Nagar, Unit 4, Bhubaneswar, Odisha 751022",
  "2nd Floor, Esplanade One Mall, Rasulgarh Square, Sahid Nagar, Bhubaneswar, Odisha 751007",
  "Esplanade One Mall, Rasulgarh, Sahid Nagar, Bhubaneswar, Odisha 751007",
  "Vivekananda Marg, Unit 9, Bhubaneswar, Odisha",
  "Nandan Kanan Road, Patia, Bhubaneswar, Odisha",
  "Jayadev Vihar, Bhubaneswar, Odisha",
  "Esplanade One Mall, Rasulgarh Square, Sahid Nagar, Bhubaneswar",
  "Jaydev Vihar, Bhubaneswar, Odisha",
  "Nayapalli, Bhubaneswar, Odisha",
  "Pal Heights, Jaydev Vihar, Bhubaneswar, Odisha",
  "Swosti Plaza, Janpath, Bhubaneswar, Odisha",
  "Welcomhotel by ITC, Bhubaneswar, Odisha",
  "Unit 4, Near CRP Square, Bhubaneswar, Odisha",
  "Hotel Swosti Grand, Kharvela Nagar, Bhubaneswar",
  "Near KIIT Square, Patia, Bhubaneswar, Odisha",
  "Hotel Marrion, Janpath, Bhubaneswar, Odisha",
  "Infocity Road, Patia, Bhubaneswar, Odisha",
  "Near Master Canteen, Bhubaneswar, Odisha",
  "Hotel Mayfair Lagoon, Jaydev Vihar, Bhubaneswar, Odisha",
  "BMC Bhawani Mall, Saheed Nagar, Bhubaneswar",
  "Hotel Suncity, Nayapalli, Bhubaneswar, Odisha",
  "KIIT Square, Bhubaneswar, Odisha",
  "Chandrasekharpur, Bhubaneswar, Odisha",
  "Rasulgarh Square, Bhubaneswar, Odisha",
  "Vani Vihar, Bhubaneswar, Odisha",
  "Cuttack Road, Laxmisagar, Bhubaneswar, Odisha",
  "CRPF Square, Nayapalli, Bhubaneswar, Odisha",
  "Hotel The Presidency, Nayapalli, Bhubaneswar",
  "Near Ekamra Haat, Unit 3, Bhubaneswar, Odisha",
  "Near Damana Square, Chandrasekharpur, Bhubaneswar",
  "DN Regalia Mall, Patrapada, Bhubaneswar",
  "Pal Heights Mall, Jaydev Vihar, Bhubaneswar",
  "Bapuji Nagar, Bhubaneswar, Odisha",
  "Pahala, Bhubaneswar, Odisha",
  "Khandagiri Square, Bhubaneswar, Odisha",
  "Patrapada, Near AIIMS, Bhubaneswar, Odisha",
  "Utkal University Campus, Bhubaneswar, Odisha",
  "IRC Village, Nayapalli, Bhubaneswar, Odisha",
  "Hotel Swosti Premium, Jaydev Vihar, Bhubaneswar",
  "Near Sainik School, Bhubaneswar, Odisha",
  "Ashok Nagar, Unit 2, Bhubaneswar, Odisha",
  "KIIT Campus, Bhubaneswar, Odisha",
  "Near Fortune Tower, Chandrasekharpur, Bhubaneswar",
  "Infocity Avenue, Bhubaneswar, Odisha",
  "Sahid Nagar, Bhubaneswar, Odisha",
  "Unit 9, Bhubaneswar, Odisha",
  "BDA Colony, Chandrasekharpur, Bhubaneswar",
  "Railway Station Road, Bhubaneswar, Odisha",
  "Master Canteen Area, Bhubaneswar",
  "Near Rajmahal Square, Bhubaneswar",
  "Unit 8, Bhubaneswar, Odisha"
];

const resttypes = [
  "Odia/North Indian",
  "North Indian/Chinese/Continental",
  "Tex-Mex/American",
  "North Indian/Mughlai",
  "Tibetan/Nepalese/Asian",
  "Punjabi/North Indian",
  "Mughlai/Biryani",
  "Mughlai/Chinese",
  "North Indian/Chinese",
  "Multi-cuisine/North Indian",
  "North Indian/Mughlai/Tandoori",
  "North Indian/Punjabi",
  "Chinese/North Indian",
  "Continental/Italian",
  "Chinese/Asian/Thai",
  "Chinese/Asian",
  "Chinese/Thai/Tandoori",
  "Barbecue/North Indian",
  "Indian/Fusion",
  "Cafe/Multi-cuisine",
  "Fast Food/Cafe/Chinese",
  "Asian/Fusion",
  "Cafe/Continental",
  "Italian/Continental/Beverages",
  "Cafe/Continental",
  "Cafe/Beverages",
  "North Indian/Biryani",
  "Asian/Chinese/Thai",
  "Odia/South Indian",
  "Continental/Cafe/Bakery",
  "Cafe/Fast Food",
  "Continental/North Indian",
  "Odia/North Indian",
  "Pan Asian/Sushi/Chinese",
  "Italian/Pizza/Bakery",
  "Cafe/Coffee/Bakery",
  "North Indian/Rajasthani",
  "South Indian/North Indian",
  "Odia/Biryani/Indian",
  "Punjabi/Street Food",
  "South Indian/Snacks",
  "Mughlai/North Indian",
  "Seafood/Tandoori",
  "Continental/North Indian",
  "Cafe/Bakery",
  "Continental/Cafe",
  "Cafe/Bakery/Desserts",
  "Continental/Asian",
  "Bar/North Indian",
  "Continental/Odia",
  "Indian/Chinese"
];

const restdistances = [
  3.5, // Dalma (Madhusudan Nagar)
  4.5, // Chili’s Grill & Bar (Esplanade One Mall)
  4.5, // Taste of China (same mall)
  4.5, // Dubai Mainland China
  4.5, // AB’s – Absolute Barbecues
  3.0, // 99 North Restaurant (Vivekananda Marg)
  5.5, // Adda Unplugged (Patia)
  3.5, // Café Frespresso (Jayadev Vihar)
  3.5, // Silver Streak
  5.5, // Golden Bird (Nandan Kanan Road)
  3.5, // Jugaad Junction (Jayadev Vihar)
  3.0, // Doppio Coffee & Bistro (Vani Vihar)
  3.0, // Café 16 (Vani Vihar)
  3.5, // Olive Bar & Cafe (Jayadev Vihar)
  3.5, // Drip Cafe (Pal Heights, Jayadev Vihar)
  5.5, // Casablanca (Nayapalli)
  3.0, // Peshawri (ITC Swosti, Janpath)
  4.0, // Peshawri (Welcomhotel)
  4.0, // Wink (Sahid Nagar)
  4.0, // Orchid (Sahid Nagar)
  4.0, // Punjab Grill (Sahid Nagar)
  5.0, // Yeti Himalayan Kitchen (Jayadev Vihar)
  4.5, // Kake Di Hatti (Jayadevishwar)
  5.5, // Dil-e-Mughlai (Patia)
  4.5, // 7th Moon (Sahid Nagar)
  3.5, // Mustard (Unit 4)
  4.5, // Raasta (Sahid Nagar)
  4.5, // TCD – The Chicken Dynasty (Sahid Nagar)
  4.5, // Mainland China (Esplanade)
  4.5, // Three Kings (Sahid Nagar)
  4.5, // Rolling Crunchy’s (Sahid Nagar)
  3.5, // Uptown Vibes (Jayadev Vihar)
  3.0, // Lazzone (Jayadev Vihar)
  4.0, // Ad Terra Rosso (Jayadev Vihar)
  4.0, // BOCCA Cafe (Jayadev Vihar)
  3.0, // TopNotch (Jayadev Vihar)
  3.5, // Moody Blues (Jayadev Vihar)
  3.5, // Lemon Grass (Mayfair Lagoon)
  3.5, // Mamma Mia (Mayfair Lagoon)
  3.5, // Kruti Coffee (Jayadev Vihar)
  4.0, // Nakli Dhaba (Sahid Nagar)
  4.0, // Marwari Rasoi (Sahid Nagar)
  4.0, // Truptee Legacy (Sahid Nagar)
  4.5, // Street Foods by Punjab Grill (Sahid Nagar food court)
  4.5, // Dosa Plaza (Esplanade Food Court)
  3.5, // Mughlai Affair (Jayadev Vihar)
  5.0, // Oceana (Hotel Swosti, Kharvela Nagar)
  5.0, // Aqua (Hotel Swosti)
  5.0, // Bocca Cafe (Swosti)
  5.0, // Brown n Cream (Swosti)
  5.0, // Galleria (Swosti)
  5.0  // Cafe Sundowner (Swosti vicinity)
];

const priceForTwo = [
  600,  // Dalma
  1200, // Chili’s Grill & Bar
  500,  // Taste of China
  500,  // Dubai Mainland China (same mall)
  1800, // AB’s Absolute Barbecues
  700,  // 99 North Restaurant
  1600, // Adda Unplugged (estimate based on similar)
  600,  // Café Frespresso
  600,  // Silver Streak
  800,  // Golden Bird
  600,  // Jugaad Junction
  600,  // Doppio Coffee & Bistro
  600,  // Café 16
  600,  // Olive Bar & Cafe
  600,  // Drip Cafe & Restaurant
  700,  // Casablanca Resto & Cafe
  1500, // Peshawri (ITC Swosti)
  1500, // Peshawri (Welcomhotel)
  800,  // Wink
  800,  // Orchid – The Multi-cuisine Restaurant
  1000, // Punjab Grill
  700,  // Yeti – The Himalayan Kitchen
  700,  // Kake Di Hatti
  800,  // Dil-E-Mughlai
  800,  // 7th Moon Restaurant And Banquet
  600,  // Mustard By Hotel Lucky India
  800,  // Raasta
  800,  // TCD – The Chicken Dynasty
  600,  // Mainland China (mall)
  800,  // Three Kings
  600,  // Rolling Crunchy’s
  600,  // Uptown Vibes
  600,  // Lazzone (Cafe & Restaurant)
  600,  // Ad Terra Rosso
  600,  // BOCCA Cafe
  600,  // Café 16 (duplicate region) *
  600,  // TopNotch
  600,  // Moody Blues
  700,  // Lemon Grass (Mayfair Lagoon)
  700,  // Mamma Mia – Mayfair Lagoon
  600,  // Kruti Coffee
  700,  // Nakli Dhaba
  700,  // Marwari Rasoi
  700,  // Truptee Legacy
  800,  // Street Foods by Punjab Grill
  600,  // Dosa Plaza
  600,  // Mughlai Affair
  1500, // Oceana (Hotel Swosti)
  1500, // Aqua (Hotel Swosti)
  600,  // Bocca Cafe (Swosti)
  600,  // Brown n Cream (Swosti)
  700,  // Galleria (Swosti)
  600   // Cafe Sundowner
];


const restopentime = [
  11,   // Dalma
  12,   // Chili’s Grill & Bar
  12,   // Taste of China
  12,   // Dubai Mainland China
  12,   // AB’s – Absolute Barbecues
  11,   // 99 North Restaurant
  11,   // Adda Unplugged
  9,    // Café Frespresso
  9,    // Silver Streak
  11,   // Golden Bird Restaurant
  10,   // Jugaad Junction
  8,    // Doppio Coffee & Bistro
  8,    // Café 16
  9,    // Olive Bar & Cafe
  9,    // Drip Cafe
  11,   // Casablanca
  12,   // Peshawri (ITC)
  12,   // Peshawri (Welcomhotel)
  11,   // Wink
  11,   // Orchid
  11,   // Punjab Grill
  11,   // Yeti
  11,   // Kake Di Hatti
  11,   // Dil‑E‑Mughlai
  11,   // 7th Moon
  11,   // Mustard
  12,   // Raasta
  12,   // TCD
  12,   // Mainland China
  12,   // Three Kings
  11,   // Rolling Crunchy's
  11,   // Uptown Vibes
  8,    // Lazzone
  11,   // Ad Terra Rosso
  8,    // BOCCA Cafe
  8,    // Café 16
  10,   // TopNotch
  10,   // Moody Blues
  12,   // Lemon Grass
  12,   // Mamma Mia
  8,    // Kruti Coffee
  10,   // Nakli Dhaba
  11,   // Marwari Rasoi
  11,   // Truptee Legacy
  12,   // Street Foods by Punjab Grill
  12,   // Dosa Plaza
  11,   // Mughlai Affair
  12,   // Oceana
  12,   // Aqua
  8,    // Bocca Cafe (Swosti)
  8,    // Brown n Cream
  11,   // Galleria
  10    // Cafe Sundowner
];


const restclosetime = [
  22,    // Dalma
  0,     // Chili’s Grill & Bar
  0,     // Taste of China
  0,     // Dubai Mainland China
  23,    // AB’s – Absolute Barbecues
  23,    // 99 North Restaurant
  23,    // Adda Unplugged
  22,    // Café Frespresso
  22,    // Silver Streak
  23,    // Golden Bird Restaurant
  22,    // Jugaad Junction
  22,    // Doppio Coffee & Bistro
  22,    // Café 16
  22.5,  // Olive Bar & Cafe
  22.5,  // Drip Cafe & Restaurant
  23,    // Casablanca Resto & Cafe
  23,    // Peshawri (ITC Swosti)
  23,    // Peshawri (Welcomhotel)
  23,    // Wink
  23,    // Orchid
  23,    // Punjab Grill
  22,    // Yeti – The Himalayan Kitchen
  22,    // Kake Di Hatti
  22,    // Dil‑E‑Mughlai
  23,    // 7th Moon Restaurant And Banquet
  22,    // Mustard By Hotel Lucky India
  23,    // Raasta
  23,    // TCD – The Chicken Dynasty
  23,    // Mainland China (mall)
  22.5,  // Three Kings Restaurant
  23,    // Rolling Crunchy's Cafe & Restaurant
  23,    // Uptown Vibes
  22,    // Lazzone (Cafe & Restaurant)
  23,    // Ad Terra Rosso
  22,    // BOCCA Cafe
  22,    // Café 16 (duplicate name, diff location)
  22,    // TopNotch
  22,    // Moody Blues
  23,    // Lemon Grass (Mayfair Lagoon)
  23,    // Mamma Mia – Mayfair Lagoon
  22,    // Kruti Coffee
  22,    // Nakli Dhaba
  22,    // Marwari Rasoi
  22,    // Truptee Legacy
  23,    // Street Foods by Punjab Grill
  22,    // Dosa Plaza
  22,    // Mughlai Affair
  23,    // Oceana (Hotel Swosti)
  23,    // Aqua (Hotel Swosti)
  22,    // Bocca Cafe (Swosti)
  22,    // Brown n Cream (Swosti)
  23,    // Galleria (Swosti)
  22     // Cafe Sundowner
];




const offer = [5 , 10 , 15 , 20 , 25 , 30 , 40 , 50];


for(let i = 0 ; i<50 ; i++){
    const obj = {};

    obj["name"] = restnames[i];
    obj["image"] = restimages[Math.floor(Math.random()*restimages.length)];
    obj["location"] = restlocations[i];
    obj["foodtype"] = resttypes[i];
    obj["alcohol"] = Math.random()>0.7;
    obj["petfriendly"] = Math.random()>0.8;
    obj["outdoorseat"] = Math.random()>0.5;
    obj["offer"] = offer[Math.floor((Math.random()*offer.length))];
    obj["rating"] = (Math.random()*(5-2)+2).toFixed(1);
    obj["distance"] = restdistances[i];
    obj["price"]= priceForTwo[i];
    obj["opentime"] = restopentime[i];
    obj["closetime"] = restclosetime[i];

    resturants.push(obj);
}

console.log(resturants);

