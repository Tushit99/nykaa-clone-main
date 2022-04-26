import { navbar } from "../components/navbar.js";

let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();




// 3rd div

var data = [
    {
      image:
        "https://images-static.nykaa.com/uploads/5cd48441-c257-4110-b182-30a1a0b10e65.gif?tr=w-600,cm-pad_resize",
      name: "On Rs.6000: Mini Matte Lipstick",
      description : "On Rs.10000: Filmstar Bronze & Glow",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/6549293a-9bc1-484f-b442-9387bfab0641.gif?tr=w-600,cm-pad_resize",
      name: "Buy 2 Pick 1",
      description: " On All Lipsticks",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/2f1c9d02-1f71-4b78-a857-7d48db20d93d.jpg?tr=w-600,cm-pad_resize",
      name: "Upto 40% Off",
      description: "On The Best Of Lip Products",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/dfefbba6-b9aa-4376-a997-6b24827c3682.jpg?tr=w-600,cm-pad_resize",
      name: "Upto 20% Off",
      description: "On Katrina's Faves",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/a7930b7d-944d-476a-9aa7-7a16afb7a092.jpg?tr=w-600,cm-pad_resize",
      name: "Upto 35% Off",
      description: "New Salon-Like Smoothening Treatment At Home"
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/4c941112-42ce-4f9e-a653-9adea7244979.gif?tr=w-600,cm-pad_resize",
      name: "On Rs. 5500: Pick Your Lip Care Product",
      description: " On Rs. 3500: Bestseller Mini",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/6b4bc81b-18bf-4aa5-ad2a-5169c8a80f86.gif?tr=w-600,cm-pad_resize",
      name: "Buy 3 Get 3 On All Minis",
      description: "On Rs.4000: Full Size Gift!",
    },
];

displayproduct(data)
function displayproduct(data) {
  console.log(data)
  document.querySelector("#container").textContent = ""
  data.map(function (data) {
    var box = document.createElement("div");
    box.setAttribute("class", "main-box");

    var card = document.createElement("div");
    card.setAttribute("class", "textcard");

    var img = document.createElement("img");
    img.setAttribute("src", data.image);
    img.setAttribute("class", "imgbox");

    var name = document.createElement("p");
    name.textContent = data.name;
    name.setAttribute("class", "namebox");

    var description = document.createElement("p");
    description.textContent = data.description;
    description.setAttribute("class", "description");

    card.append(name,description);
    box.append(img,card)
    document.querySelector("#container").append(box);
  });
}

// 5th div

var nykaadata = [
    {
      image:
        "https://images-static.nykaa.com/uploads/64f425a4-b4e4-415b-8b8f-892b88251420.jpg?tr=w-600,cm-pad_resize",
      name: "Upto 20% Off",
      description : "Value Packs Starting At Rs. 399",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/296151b1-cbc4-40f1-8a45-ef141220b80c.gif?tr=w-600,cm-pad_resize",
      name: "3-Piece Hydration Kit Worth ₹2200",
      description: "On Orders Above ₹3500",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/05b7f0e1-eaa8-4aee-9928-6d90b0676c1f.jpg?tr=w-600,cm-pad_resize",
      name: "Upto 40% Off",
      description: "Shop For Rs.1299 And Get A Nykaa Nail Enamel Free",
    },
    {
      image:
        "https://images-static.nykaa.com/uploads/495420d9-e5ea-4f17-a8b9-9ba99a8c6c91.gif?tr=w-600,cm-pad_resize",
      name: "Upto 30% Off",
      description: "On Our Customers Fav Combos",
    },
];

displayproduct2(nykaadata)
function displayproduct2(nykaadata) {
  console.log(data)
  document.querySelector("#fifthdiv").textContent = ""
  nykaadata.map(function (data) {
    var box = document.createElement("div");
    box.setAttribute("class", "main-box");

    var card = document.createElement("div");
    card.setAttribute("class", "textcard");

    var img = document.createElement("img");
    img.setAttribute("src", data.image);
    img.setAttribute("class", "imgbox");

    var name = document.createElement("p");
    name.textContent = data.name;
    name.setAttribute("class", "namebox");

    var description = document.createElement("p");
    description.textContent = data.description;
    description.setAttribute("class", "description");

    card.append(name,description);
    box.append(img,card)
    document.querySelector("#fifthdiv").append(box);
  });
}

// 6th div


// 7th div

var nykaadata2 = [
  {
    image:
      "https://images-static.nykaa.com/uploads/77e1ec38-2d52-4c73-b41c-ee32c8dc4d77.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 25% Off",
    description : "On Expert Skincare!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/4d661f91-2b26-4129-8929-bdb7f7658d01.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 20% Off",
    description: "Acne Free Skin",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/b279c7e9-b5ac-4cd1-9c29-a80f6d2ddbc9.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 25% +",
    description: "Free Face Serum Rs 699 On Rs 699",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/6ff551c9-d597-4573-9cc4-9cd67c21502d.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 30% Off",
    description: "Additional 5% Off On Orders Of Rs. 399+",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/35c13455-4e35-499d-8e82-1a359ae2a4f8.gif?tr=w-300,cm-pad_resize",
    name: "Upto 20% Off",
    description : "On Rs.999: Free Mascara Worth Rs.490",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/74e11aed-2f4f-46c5-8c5b-20ac4ebbb144.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 30% Off",
    
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/01ee09c4-21c5-4f86-b373-f43791bb79e8.jpg?tr=w-300,cm-pad_resize",
    name: "Buy 5 Get Free",
    description: "Firm And Nourished Skin",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/1480309c-5bbe-4a8c-97ff-3c298e97137d.gif?tr=w-300,cm-pad_resize",
    name: "Upto 30% Off+ Buy Renee Worth Rs 999+",
    description: "And Get Extra 10% Off",
  },
];

displayproduct3(nykaadata2)
function displayproduct3(nykaadata2) {
  console.log(data)
  document.querySelector("#seventhdiv").textContent = ""
  nykaadata2.map(function (data) {
    var box = document.createElement("div");
    box.setAttribute("class", "main-box");

    var card = document.createElement("div");
    card.setAttribute("class", "textcards");

    var img = document.createElement("img");
    img.setAttribute("src", data.image);
    img.setAttribute("class", "imgbox");

    var name = document.createElement("p");
    name.textContent = data.name;
    name.setAttribute("class", "namebox");

    var description = document.createElement("p");
    description.textContent = data.description;
    description.setAttribute("class", "description");

    card.append(name,description);
    box.append(img,card)
    document.querySelector("#seventhdiv").append(box);
  });
}

// 12th div

var nykaadata3 = [
  {
    image:
      "https://images-static.nykaa.com/uploads/2fdd57ca-0cc0-48bd-abdd-073a4bf9d8da.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 25% Off + Shop For Rs 499 &",
    description : "Get A Gift Hamper Worth Rs 725 Free",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/b46a9e79-52a3-4e7b-b55d-78ab6a682d0a.gif?tr=w-300,cm-pad_resize",
    name: "Complimentary Yo Glow Sample",
    description: "On All Orders!",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/0ca13600-1ba8-4e5a-9101-1b2a4f2e1e4b.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 25% Off",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/61902651-280e-480b-afc7-725b59cd60cf.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 15% Off",
    description: "On Dabur Skin Care Range",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/74ac3066-74e4-40db-93a7-739ac46713c9.gif?tr=w-300,cm-pad_resize",
    name: "Upto 20% Off",
    description : "On Rs.999: Free Mascara Worth Rs.490",
  },
  {
    image:
      "https://images-static.nykaa.com/uploads/2fdd57ca-0cc0-48bd-abdd-073a4bf9d8da.jpg?tr=w-300,cm-pad_resize",
    name: "Upto 30% Off",
    description: "Free Face Serum Rs 699 On Rs 699",
  },
  
];

displayproduct4(nykaadata3)
function displayproduct4(nykaadata3) {
  console.log(data)
  document.querySelector("#twelvediv").textContent = ""
  nykaadata3.map(function (data) {
    var box = document.createElement("div");
    box.setAttribute("class", "main-box");

    var card = document.createElement("div");
    card.setAttribute("class", "textcards");

    var img = document.createElement("img");
    img.setAttribute("src", data.image);
    img.setAttribute("class", "imgboxs");

    var name = document.createElement("p");
    name.textContent = data.name;
    name.setAttribute("class", "namebox");

    var description = document.createElement("p");
    description.textContent = data.description;
    description.setAttribute("class", "description");

    card.append(name,description);
    box.append(img,card)
    document.querySelector("#twelvediv").append(box);
  });
}






