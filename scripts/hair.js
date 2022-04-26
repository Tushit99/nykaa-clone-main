
import { navbar } from "../components/navbar.js";
import { appendData } from "../scripts/appendData.js"

let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();

import sidebar from "../components/sidebar.js"
let sidebarDiv = document.getElementById('sidebar');
sidebarDiv.innerHTML = sidebar();

let data = [
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/9/0938a71nyloprof00002_0.jpg',
      title: "L'Oreal Professionnel Absolut Repair Shampoo with Protein and Gold Quinoa, Serie Expert",
      rating: '★★★★★',
      price: 330,
      bestseller: 'BESTSELLER',
      numberOfRatings: 4384
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4489004064666036267_1.jpg',
      title: 'Wella Professionals Elements Renewing Shampoo (Zero Sulfates-Dermatologically Tested)',
      rating: '★★★★',
      price: 317,
      bestseller: 'BESTSELLER',
      numberOfRatings: 15193
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/2/d24aad15010724527443_2_.jpg',
      title: 'Batiste Dry Shampoo Plus Instant Hair Refresh Divine Dark',
      rating: '★★★★★',
      price: 487,
      bestseller: 'BESTSELLER',
      numberOfRatings: 14715
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/2/e29eacd8906087771807ap__1_.jpg',
      title: 'Mamaearth Onion Shampoo For Hair Growth & Hair Fall Control With Onion & Plant Keratin',
      rating: '★★★',
      price: 528,
      numberOfRatings: 4446
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/a/5aa0de08904245713973_1.jpg',
      title: 'Nykaa Naturals Onion & Fenugreek Hair Growth Paraben and Sulphate Free Shampoo',
      rating: '★★★★★',
      price: 341,
      bestseller: 'BESTSELLER',
      numberOfRatings: 4395
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/c/3c8aa038904311902621_1.jpg',
      title: 'WOW Skin Science Anti Hair Fall Range',
      rating: '★★★★',
      price: 785,
      bestseller: 'BESTSELLER',
      numberOfRatings: 12652
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/0/e0cd67e4045787429558new1.jpg',
      title: 'Schwarzkopf Professional Bonacure Keratin Smooth Perfect Micellar Shampoo',
      rating: '★★★★★',
      price: 634,
      bestseller: 'BESTSELLER',
      numberOfRatings: 13372
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/8/58c69f68906092490335_rnv1.jpg',
      title: 'Khadi Natural Amla & Bhringraj Hair Cleanser SLS Paraben Free (For All hair types)',
      rating: '★',
      price: 333,
      numberOfRatings: 21683
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nykgkhcmb0002.jpg',
      title: 'GK Hair Moisturizing Shampoo + Conditioner',
      rating: '★★★★★',
      price: 819,
      bestseller: 'BESTSELLER',
      numberOfRatings: 25556
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/6/8643617NYMTXCOM00010_0.jpg',
      title: 'Matrix Opti Care Professional Ultra Smoothing 2-Step Regime - Shampoo 200ml + Conditioner 98g',
      rating: '★★★',
      price: 578,
      numberOfRatings: 28446
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg',
      title: 'Schwarzkopf Professional Bonacure Peptide Repair Rescue Micellar Shampoo',
      rating: '★★★★★',
      price: 631,
      bestseller: 'BESTSELLER',
      numberOfRatings: 4005
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/7/27dce308904311902720__1_.jpg',
      title: 'WOW Skin Science Red Onion Black Seed Oil Shampoo',
      rating: '★',
      price: 688,
      numberOfRatings: 11320
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/1/e17aed18901526509300_0.jpg',
      title: "L'Oreal Professionnel Inforcer Strengthening Shampoo with Vitamin B6 & Biotin, Serie Expert",
      rating: '★★★★★',
      price: 493,
      bestseller: 'BESTSELLER',
      numberOfRatings: 25462
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nytresecom083_1.jpg',
      title: 'Tresemme Keratin Smooth With Argan Oil Shampoo + Conditioner Combo',
      rating: '★',
      price: 433,
      numberOfRatings: 9337
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/1/d1f00318901526401376_1_.jpg',
      title: "L'Oreal Professionnel Expert Density Advanced Shampoo",
      rating: '★★★★★',
      price: 344,
      bestseller: 'BESTSELLER',
      numberOfRatings: 14365
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nybndlp000017_0_1.jpg',
      title: "L'Oreal Professionnel Absolut Repair Shampoo 300ml, Hair Mask 250gm & Hair Serum 90ml, Serie Expert",
      rating: '★★★',
      price: 366,
      numberOfRatings: 27472
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/3/83dbba13474630161481_0.jpg',
      title: "L'Oreal Professionnel Liss Unlimited Shampoo with Pro-Keratin and Kukui Nut Oil, Serie Expert",
      rating: '★★★★★',
      price: 474,
      bestseller: 'BESTSELLER',
      numberOfRatings: 29083
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nybndlp000008_0.jpg',
      title: "L'Oreal Professionnel Vitamino Color Shampoo 300ml & Hair Mask 250gm, Serie Expert",
      rating: '★',
      price: 590,
      numberOfRatings: 24886
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/7/67a1617NYMATRIX00109_0.jpg',
      title: 'Matrix Opti Care Smooth Straight Professional Shampoo with Shea Butter, Frizz-free Hair,Paraben Free',
      rating: '★★★★★',
      price: 845,
      bestseller: 'BESTSELLER',
      numberOfRatings: 5167
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/a/fa7617d8001090222848.jpg',
      title: 'Herbal Essences Argan Oil Shampoo For Frizz - No Colourants',
      rating: '★',
      price: 668,
      numberOfRatings: 17322
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/0/609207880011.main.jpg',
      title: 'De Fabulous Reviver Hair Repair Shampoo & Conditioner Combo',
      rating: '★★★★★',
      price: 602,
      bestseller: 'BESTSELLER',
      numberOfRatings: 12673
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nytresecom091_1.jpg',
      title: 'Tresemme Keratin Smooth Shampoo + Conditioner Combo',
      rating: '★★★',
      price: 416,
      numberOfRatings: 15673
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nybndlp000010_1_1.jpg',
      title: "L'Oreal Professionnel X-Tenso Care Pro-Keratine Shampoo & Masque",
      rating: '★★★★★',
      price: 861,
      bestseller: 'BESTSELLER',
      numberOfRatings: 15286
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/d/3d014398901526401604_0.jpg',
      title: 'LOreal Professionnel Series Expert Resveratrol Vitamino Color Shampoo',
      rating: '★',
      price: 485,
      numberOfRatings: 17171
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/2/12f677e12995_s1_8901030704659.jpg',
      title: 'Dove Intense Repair Shampoo',
      rating: '★★★★★',
      price: 612,
      bestseller: 'BESTSELLER',
      numberOfRatings: 25097
    }
  ]


appendData(data)


let low = document.getElementById('l2h');

low.addEventListener('click', () => {
    
    data.sort((a,b) => {
        return a.price-b.price;
    })
    appendData(data)
})

let high = document.getElementById('h2l')

high.addEventListener('click', () => {

    data.sort((a,b) => {
        return b.price-a.price;
    })
    appendData(data)

})