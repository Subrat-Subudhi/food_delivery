const resturants = [
  {
    name: 'Dalma',
    image: 'tenth',
    location: '157 Madhusudan Nagar, Unit 4, Bhubaneswar, Odisha 751022',
    foodtype: 'Odia/North Indian',
    alcohol: false,
    petfriendly: true,
    outdoorseat: true,
    offer: 20,
    rating: '3.9',
    distance: 3.5,
    price: 600,
    opentime: 19,
    closetime: 4
  },
  {
    name: 'Orchid – The Multi‑cuisine Restaurant',
    image: 'seventh',
    location: '2nd Floor, Esplanade One Mall, Rasulgarh Square, Sahid Nagar, Bhubaneswar, Odisha 751007',
    foodtype: 'North Indian/Chinese/Continental',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 10,
    rating: '2.1',
    distance: 4.5,
    price: 1200,
    opentime: 23,
    closetime: 1
  },
  {
    name: 'Wink',
    image: 'nine',
    location: 'Esplanade One Mall, Rasulgarh, Sahid Nagar, Bhubaneswar, Odisha 751007',
    foodtype: 'Tex-Mex/American',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '2.3',
    distance: 4.5,
    price: 500,
    opentime: 12,
    closetime: 0
  },
  {
    name: 'Chili’s Grill & Bar',
    image: 'fifth',
    location: 'Vivekananda Marg, Unit 9, Bhubaneswar, Odisha',
    foodtype: 'North Indian/Mughlai',
    alcohol: true,
    petfriendly: true,
    outdoorseat: false,
    offer: 30,
    rating: '4.2',
    distance: 4.5,
    price: 500,
    opentime: 12,
    closetime: 0
  },
  {
    name: 'Punjab Grill',
    image: 'First',
    location: 'Nandan Kanan Road, Patia, Bhubaneswar, Odisha',
    foodtype: 'Tibetan/Nepalese/Asian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '3.4',
    distance: 4.5,
    price: 1800,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Yeti – The Himalayan Kitchen',
    image: 'nine',
    location: 'Jayadev Vihar, Bhubaneswar, Odisha',
    foodtype: 'Punjabi/North Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 40,
    rating: '4.7',
    distance: 3,
    price: 700,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Kake Di Hatti',
    image: 'sixth',
    location: 'Esplanade One Mall, Rasulgarh Square, Sahid Nagar, Bhubaneswar',
    foodtype: 'Mughlai/Biryani',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 10,
    rating: '4.9',
    distance: 5.5,
    price: 1600,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Dil-E-Mughlai',
    image: 'sixth',
    location: 'Jaydev Vihar, Bhubaneswar, Odisha',
    foodtype: 'Mughlai/Chinese',
    alcohol: true,
    petfriendly: false,
    outdoorseat: true,
    offer: 5,
    rating: '3.4',
    distance: 3.5,
    price: 600,
    opentime: 9,
    closetime: 22
  },
  {
    name: '7th Moon Restaurant And Banquet',
    image: 'second',
    location: 'Nayapalli, Bhubaneswar, Odisha',
    foodtype: 'North Indian/Chinese',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 10,
    rating: '3.3',
    distance: 3.5,
    price: 600,
    opentime: 9,
    closetime: 22
  },
  {
    name: 'Mustard By Hotel Lucky India',
    image: 'nine',
    location: 'Pal Heights, Jaydev Vihar, Bhubaneswar, Odisha',
    foodtype: 'Multi-cuisine/North Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 5,
    rating: '4.5',
    distance: 5.5,
    price: 800,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Raasta',
    image: 'fourth',
    location: 'Swosti Plaza, Janpath, Bhubaneswar, Odisha',
    foodtype: 'North Indian/Mughlai/Tandoori',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '4.7',
    distance: 3.5,
    price: 600,
    opentime: 10,
    closetime: 22
  },
  {
    name: 'Punjab Grill (delivery/outlet)',
    image: 'fifth',
    location: 'Welcomhotel by ITC, Bhubaneswar, Odisha',
    foodtype: 'North Indian/Punjabi',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 25,
    rating: '4.3',
    distance: 3,
    price: 600,
    opentime: 8,
    closetime: 22
  },
  {
    name: 'TCD – The Chicken Dynasty',
    image: 'seventh',
    location: 'Unit 4, Near CRP Square, Bhubaneswar, Odisha',
    foodtype: 'Chinese/North Indian',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 20,
    rating: '2.8',
    distance: 3,
    price: 600,
    opentime: 8,
    closetime: 22
  },
  {
    name: '99 North Restaurant',
    image: 'tenth',
    location: 'Hotel Swosti Grand, Kharvela Nagar, Bhubaneswar',
    foodtype: 'Continental/Italian',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 15,
    rating: '4.4',
    distance: 3.5,
    price: 600,
    opentime: 9,
    closetime: 22.5
  },
  {
    name: 'Mainland China',
    image: 'seventh',
    location: 'Near KIIT Square, Patia, Bhubaneswar, Odisha',
    foodtype: 'Chinese/Asian/Thai',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 50,
    rating: '2.3',
    distance: 3.5,
    price: 600,
    opentime: 9,
    closetime: 22.5
  },
  {
    name: 'Dubai Mainland China',
    image: 'second',
    location: 'Hotel Marrion, Janpath, Bhubaneswar, Odisha',
    foodtype: 'Chinese/Asian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 5,
    rating: '2.0',
    distance: 5.5,
    price: 700,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Taste of China',
    image: 'First',
    location: 'Infocity Road, Patia, Bhubaneswar, Odisha',
    foodtype: 'Chinese/Thai/Tandoori',
    alcohol: true,
    petfriendly: true,
    outdoorseat: false,
    offer: 50,
    rating: '4.7',
    distance: 3,
    price: 1500,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'AB’s – Absolute Barbecues',
    image: 'fifth',
    location: 'Near Master Canteen, Bhubaneswar, Odisha',
    foodtype: 'Barbecue/North Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 20,
    rating: '2.5',
    distance: 4,
    price: 1500,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Three Kings Restaurant',
    image: 'nine',
    location: 'Hotel Mayfair Lagoon, Jaydev Vihar, Bhubaneswar, Odisha',
    foodtype: 'Indian/Fusion',
    alcohol: false,
    petfriendly: true,
    outdoorseat: false,
    offer: 40,
    rating: '3.1',
    distance: 4,
    price: 800,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Olive Bar & Cafe',
    image: 'First',
    location: 'BMC Bhawani Mall, Saheed Nagar, Bhubaneswar',
    foodtype: 'Cafe/Multi-cuisine',
    alcohol: false,
    petfriendly: true,
    outdoorseat: false,
    offer: 40,
    rating: '3.4',
    distance: 4,
    price: 800,
    opentime: 11,
    closetime: 23
  },
  {
    name: "Rolling Crunchy's Cafe & Restaurant",
    image: 'fifth',
    location: 'Hotel Suncity, Nayapalli, Bhubaneswar, Odisha',
    foodtype: 'Fast Food/Cafe/Chinese',
    alcohol: false,
    petfriendly: true,
    outdoorseat: false,
    offer: 50,
    rating: '4.3',
    distance: 4,
    price: 1000,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Uptown Vibes',
    image: 'nine',
    location: 'KIIT Square, Bhubaneswar, Odisha',
    foodtype: 'Asian/Fusion',
    alcohol: true,
    petfriendly: true,
    outdoorseat: false,
    offer: 40,
    rating: '2.6',
    distance: 5,
    price: 700,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Drip Cafe & Restaurant',
    image: 'fifth',
    location: 'Chandrasekharpur, Bhubaneswar, Odisha',
    foodtype: 'Cafe/Continental',
    alcohol: true,
    petfriendly: true,
    outdoorseat: true,
    offer: 15,
    rating: '4.1',
    distance: 4.5,
    price: 700,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Lazzone (Cafe & Restaurant)',
    image: 'seventh',
    location: 'Rasulgarh Square, Bhubaneswar, Odisha',
    foodtype: 'Italian/Continental/Beverages',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 10,
    rating: '4.6',
    distance: 5.5,
    price: 800,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Casablanca Resto & Cafe',
    image: 'third',
    location: 'Vani Vihar, Bhubaneswar, Odisha',
    foodtype: 'Cafe/Continental',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '2.8',
    distance: 4.5,
    price: 800,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Doppio Coffee & Bistro',
    image: 'fourth',
    location: 'Cuttack Road, Laxmisagar, Bhubaneswar, Odisha',
    foodtype: 'Cafe/Beverages',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 5,
    rating: '3.1',
    distance: 3.5,
    price: 600,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Café 16',
    image: 'third',
    location: 'CRPF Square, Nayapalli, Bhubaneswar, Odisha',
    foodtype: 'North Indian/Biryani',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 40,
    rating: '3.0',
    distance: 4.5,
    price: 800,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Café Frespresso',
    image: 'nine',
    location: 'Hotel The Presidency, Nayapalli, Bhubaneswar',
    foodtype: 'Asian/Chinese/Thai',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 15,
    rating: '3.6',
    distance: 4.5,
    price: 800,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'BOCCA Cafe',
    image: 'Eigth',
    location: 'Near Ekamra Haat, Unit 3, Bhubaneswar, Odisha',
    foodtype: 'Odia/South Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 20,
    rating: '4.6',
    distance: 4.5,
    price: 600,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'TopNotch',
    image: 'Eigth',
    location: 'Near Damana Square, Chandrasekharpur, Bhubaneswar',
    foodtype: 'Continental/Cafe/Bakery',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 10,
    rating: '3.9',
    distance: 4.5,
    price: 800,
    opentime: 12,
    closetime: 22.5
  },
  {
    name: 'The Restaurant – Trident',
    image: 'sixth',
    location: 'DN Regalia Mall, Patrapada, Bhubaneswar',
    foodtype: 'Cafe/Fast Food',
    alcohol: true,
    petfriendly: true,
    outdoorseat: true,
    offer: 15,
    rating: '3.5',
    distance: 4.5,
    price: 600,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Kanika – Mayfair Lagoon',
    image: 'nine',
    location: 'Pal Heights Mall, Jaydev Vihar, Bhubaneswar',
    foodtype: 'Continental/North Indian',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 10,
    rating: '3.6',
    distance: 3.5,
    price: 600,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Moody Blues',
    image: 'nine',
    location: 'Bapuji Nagar, Bhubaneswar, Odisha',
    foodtype: 'Odia/North Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '3.7',
    distance: 3,
    price: 600,
    opentime: 8,
    closetime: 22
  },
  {
    name: 'Lemon Grass – Mayfair Lagoon',
    image: 'Eigth',
    location: 'Pahala, Bhubaneswar, Odisha',
    foodtype: 'Pan Asian/Sushi/Chinese',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 40,
    rating: '3.6',
    distance: 4,
    price: 600,
    opentime: 11,
    closetime: 23
  },
  {
    name: 'Mamma Mia – Mayfair Lagoon',
    image: 'nine',
    location: 'Khandagiri Square, Bhubaneswar, Odisha',
    foodtype: 'Italian/Pizza/Bakery',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 25,
    rating: '3.3',
    distance: 4,
    price: 600,
    opentime: 8,
    closetime: 22
  },
  {
    name: 'Kruti Coffee',
    image: 'fifth',
    location: 'Patrapada, Near AIIMS, Bhubaneswar, Odisha',
    foodtype: 'Cafe/Coffee/Bakery',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '3.8',
    distance: 3,
    price: 600,
    opentime: 8,
    closetime: 22
  },
  {
    name: 'Nakli Dhaba',
    image: 'tenth',
    location: 'Utkal University Campus, Bhubaneswar, Odisha',
    foodtype: 'North Indian/Rajasthani',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 5,
    rating: '3.2',
    distance: 3.5,
    price: 600,
    opentime: 10,
    closetime: 22
  },
  {
    name: 'Marwari Rasoi',
    image: 'second',
    location: 'IRC Village, Nayapalli, Bhubaneswar, Odisha',
    foodtype: 'South Indian/North Indian',
    alcohol: true,
    petfriendly: false,
    outdoorseat: true,
    offer: 15,
    rating: '2.1',
    distance: 3.5,
    price: 600,
    opentime: 10,
    closetime: 22
  },
  {
    name: 'Truptee Legacy',
    image: 'tenth',
    location: 'Hotel Swosti Premium, Jaydev Vihar, Bhubaneswar',
    foodtype: 'Odia/Biryani/Indian',
    alcohol: true,
    petfriendly: true,
    outdoorseat: false,
    offer: 30,
    rating: '3.5',
    distance: 3.5,
    price: 700,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Street Foods by Punjab Grill',
    image: 'First',
    location: 'Near Sainik School, Bhubaneswar, Odisha',
    foodtype: 'Punjabi/Street Food',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 5,
    rating: '3.6',
    distance: 3.5,
    price: 700,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Dosa Plaza',
    image: 'fourth',
    location: 'Ashok Nagar, Unit 2, Bhubaneswar, Odisha',
    foodtype: 'South Indian/Snacks',
    alcohol: false,
    petfriendly: true,
    outdoorseat: true,
    offer: 50,
    rating: '2.9',
    distance: 4,
    price: 600,
    opentime: 8,
    closetime: 22
  },
  {
    name: 'Mughlai Affair',
    image: 'tenth',
    location: 'KIIT Campus, Bhubaneswar, Odisha',
    foodtype: 'Mughlai/North Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '3.1',
    distance: 4,
    price: 700,
    opentime: 10,
    closetime: 22
  },
  {
    name: 'Oceana (Hotel Swosti)',
    image: 'fifth',
    location: 'Near Fortune Tower, Chandrasekharpur, Bhubaneswar',
    foodtype: 'Seafood/Tandoori',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 20,
    rating: '4.5',
    distance: 4,
    price: 700,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Aqua (Hotel Swosti)',
    image: 'Eigth',
    location: 'Infocity Avenue, Bhubaneswar, Odisha',
    foodtype: 'Continental/North Indian',
    alcohol: true,
    petfriendly: true,
    outdoorseat: false,
    offer: 25,
    rating: '2.1',
    distance: 4.5,
    price: 700,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Bocca Cafe (Swosti)',
    image: 'fifth',
    location: 'Sahid Nagar, Bhubaneswar, Odisha',
    foodtype: 'Cafe/Bakery',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 5,
    rating: '2.3',
    distance: 4.5,
    price: 800,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Ad Terra Rosso',
    image: 'seventh',
    location: 'Unit 9, Bhubaneswar, Odisha',
    foodtype: 'Continental/Cafe',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 25,
    rating: '3.6',
    distance: 3.5,
    price: 600,
    opentime: 12,
    closetime: 22
  },
  {
    name: 'Brown n Cream (Swosti)',
    image: 'sixth',
    location: 'BDA Colony, Chandrasekharpur, Bhubaneswar',
    foodtype: 'Cafe/Bakery/Desserts',
    alcohol: true,
    petfriendly: false,
    outdoorseat: false,
    offer: 40,
    rating: '2.8',
    distance: 5,
    price: 600,
    opentime: 11,
    closetime: 22
  },
  {
    name: 'Galleria (Swosti)',
    image: 'First',
    location: 'Railway Station Road, Bhubaneswar, Odisha',
    foodtype: 'Continental/Asian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: false,
    offer: 50,
    rating: '3.3',
    distance: 5,
    price: 1500,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Cafe Sundowner',
    image: 'First',
    location: 'Master Canteen Area, Bhubaneswar',
    foodtype: 'Bar/North Indian',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 5,
    rating: '4.7',
    distance: 5,
    price: 1500,
    opentime: 12,
    closetime: 23
  },
  {
    name: 'Xcuse Bar',
    image: 'third',
    location: 'Near Rajmahal Square, Bhubaneswar',
    foodtype: 'Continental/Odia',
    alcohol: false,
    petfriendly: false,
    outdoorseat: true,
    offer: 25,
    rating: '3.2',
    distance: 5,
    price: 600,
    opentime: 8,
    closetime: 22
  }
]

function getresturant(resturants){
  const root = document.getElementById("root");

  resturants.forEach(resturant => {

    const card = document.createElement('div');
    card.className = 'card';


    const imgcontainer = document.createElement('div');
    imgcontainer.className = "imgcon";
    imgcontainer.style.position = 'relative';

    const image = document.createElement('img');
    image.src = `Images/${resturant.image}.jpeg`;
    imgcontainer.appendChild(image);

    const offer = document.createElement('div');
    offer.className = "offer";
    offer.innerHTML = `FLAT  ${resturant.offer}%off`;
    imgcontainer.appendChild(offer);

    
    
    
    const Card_content = document.createElement('div');
    Card_content.className = 'card-content'

    const Card_header = document.createElement('div');
    Card_header.className = 'card-header';
    const h3 = document.createElement('h3');
    h3.innerHTML= resturant.name;
    const rating = document.createElement('span');
    rating.className = 'rating';
    rating.innerHTML = "★" + resturant.rating;
    if(resturant.rating>=4){
      rating.style.backgroundColor = "green";
    }
    Card_header.appendChild(h3);
    Card_header.appendChild(rating);


    const Card_footer = document.createElement('div');
    Card_footer.className = 'card-footer';
    const food = document.createElement('span');
    food.textContent = resturant.foodtype;
    const price = document.createElement('span');
    price.textContent ="₹" + resturant.price;
    Card_footer.appendChild(food);
    Card_footer.appendChild(price);


    const card_location = document.createElement('div');
    card_location.className = 'card-location';
    const location = document.createElement('span');
    location.textContent = resturant.location;
    const distance = document.createElement('span');
    distance.textContent = resturant.distance+"km";
    card_location.appendChild(location);
    card_location.appendChild(distance);

    Card_content.appendChild(Card_header);
    Card_content.appendChild(Card_footer);
    Card_content.appendChild(card_location);

    card.appendChild(imgcontainer);
    card.appendChild(Card_content); 

    root.appendChild(card);


  });
  
  
}
getresturant(resturants);

document.getElementById("servesalcohol").addEventListener('click' , ()=>{
  const result = resturants.filter((restaurant)=>{
    return restaurant.alcohol==1;
  });
  document.getElementById("root").replaceChildren();
  getresturant(result);
})

document.getElementById("rating4.5+").addEventListener('click' , ()=>{
  const result = resturants.filter(resturant=>resturant.rating>4);
  document.getElementById("root").replaceChildren();
  getresturant(result);
})

document.getElementById("petfriendly").addEventListener('click' , ()=>{
  const result = resturants.filter(resturant=>resturant.petfriendly);
  document.getElementById("root").replaceChildren();
  getresturant(result);
})

document.getElementById("outdoorseating").addEventListener('click' , ()=>{
  const result = resturants.filter(resturant=>resturant.outdoorseat);
  document.getElementById("root").replaceChildren();
  getresturant(result);
})

document.getElementById("opennow").addEventListener('click' , ()=>{
  let date = new Date();
  let hr = date.getHours();
  const result = resturants.filter((resturant)=>{
    let ot = resturant.opentime;
    let ct = resturant.closetime;
    if(ct<ot){
      if(hr>=ot || hr<ct){
        return true;
      }else{
        return false;
      }
    }else{
      if(hr>=ot && hr<ct){
        return true;
      }else{
        return false;
      }
    }
  });
  document.getElementById("root").replaceChildren();
  getresturant(result);
})


const filter = document.getElementById("filters");
filter.addEventListener('click' , ()=>{
  document.getElementById("filterPopup").classList.remove("hidden");

})

const close = document.getElementById("close");
close.addEventListener('click', ()=>{
  document.getElementById("filterPopup").classList.add("hidden");
})

const apply = document.getElementById("apply");
apply.addEventListener('click' , ()=>{
  const element = document.querySelector('input[name="filteroption"]:checked');
  const answer = element.value;
  
  if(answer==="rating"){
    resturants.sort((a,b)=>b.rating-a.rating);
  }else if(answer==="hightolow"){
    resturants.sort((a,b)=>b.price-a.price);
  }else if(answer==="lowtohigh"){
    resturants.sort((a,b)=>a.price-b.price);
  }else if(answer==="neardistance"){
    resturants.sort((a,b)=>a.distance-b.distance);
  }


  document.getElementById("root").replaceChildren();
  document.getElementById("filterPopup").classList.add("hidden");
  getresturant(resturants);
})