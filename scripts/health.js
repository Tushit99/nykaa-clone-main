
import { navbar } from "../components/navbar.js";
import { appendData } from "../scripts/appendData.js"

let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();
import sidebar from "../components/sidebar.js"
let sidebarDiv = document.getElementById('sidebar');
sidebarDiv.innerHTML = sidebar();


let data = [
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/0/000241cBOLDF00000014creative.jpg',
      title: "Boldfit Super Women's Whey Protein Powder - Chocolate",
      rating: '★★★★',
      price: 1180,
      bestseller: 'BESTSELLER',
      numberOfRatings: 15534
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/1/f1b8f8b8906067023216.jpg',
      title: 'MuscleBlaze Whey Gold Whey Protein Isolate - Rich Milk Chocolate',
      rating: '★★★★★',
      price: 923,
      bestseller: 'BESTSELLER',
      numberOfRatings: 9969
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/a/eabb80f5056185745293.jpg',
      title: 'Myprotein Impact Whey Protein - Chocolate Brownie',
      rating: '★★★★',
      price: 4234,
      bestseller: 'BESTSELLER',
      numberOfRatings: 10179
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/a/7af5dbanykisp0000015newa_1.jpg',
      title: 'Isopure Zero Carb 100% Whey Protein Isolate Powder - 7.5 lbs (Strawberries & Cream)',
      rating: '★★★',
      price: 2608,
      numberOfRatings: 16088
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/b/7b24dbanykisp0000014newa_1.jpg',
      title: 'Isopure Zero Carb 100% Whey Protein Isolate Powder - 3 lbs (Strawberries & Cream)',
      rating: '★★★★',
      price: 1392,
      bestseller: 'BESTSELLER',
      numberOfRatings: 18066
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/1/c14cbbbnykopn0000004_1.jpg',
      title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs (Extreme Milk Chocolate)',
      rating: '★★★★',
      price: 4468,
      bestseller: 'BESTSELLER',
      numberOfRatings: 16199
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/4/a429e638908009918086_main.jpg',
      title: 'OZiva Protein & Herbs for Men,for Lean Muscle, Better Stamina and Recovery, Cafe Mocha',
      rating: '★★★★',
      price: 3224,
      bestseller: 'BESTSELLER',
      numberOfRatings: 17753
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/5/f50db0a748927059915__1_.jpg',
      title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder Vanilla Ice Cream - 1Lbs',
      rating: '★★',
      price: 2555,
      numberOfRatings: 10200
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/8/f82db0a748927056358__1_.jpg',
      title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder Vanilla Ice Cream - 5Lbs',
      rating: '★★★★',
      price: 4019,
      bestseller: 'BESTSELLER',
      numberOfRatings: 12038
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/812280f5056281100415.jpg',
      title: 'Myprotein Impact Whey Isolate - Chocolate Brownie',
      rating: '★★★',
      price: 1571,
      numberOfRatings: 1356
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/5/959adba89094024949newa_1.jpg',
      title: 'Isopure Zero Carb 100% Whey Protein Isolate Powder Cookies & Cream - 3Lbs',
      rating: '★★★★',
      price: 1753,
      bestseller: 'BESTSELLER',
      numberOfRatings: 8146
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/b/cb15b99ISOPU00000001-1.jpg',
      title: 'Isopure Low Carb 100% Whey Protein Isolate Powder - Dutch Chocolate',
      rating: '★★',
      price: 4785,
      numberOfRatings: 25874
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/4/748927065824_1_1.jpg',
      title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder Double Rich Chocolate - 1Lbs',
      rating: '★★★★',
      price: 3585,
      bestseller: 'BESTSELLER',
      numberOfRatings: 5806
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/c/0cb9dba89094024925newa_1.jpg',
      title: 'Isopure Low Carb 100% Whey Protein Isolate Powder Chocolate - 3Lbs',
      rating: '★★',
      price: 3238,
      numberOfRatings: 15544
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/e/8ecfb0a748927056365__1_.jpg',
      title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder Double Rich Chocolate - 5Lbs',
      rating: '★★★★',
      price: 1309,
      bestseller: 'BESTSELLER',
      numberOfRatings: 23637
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/4/748927065725_1.jpg',
      title: 'Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder Double Rich Chocolate - 2Lbs',
      rating: '★★★',
      price: 1933,
      numberOfRatings: 4352
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/e/1e958b68906067021526_1.jpg',
      title: 'MuscleBlaze Raw Whey Protein - Unflavoured',
      rating: '★★★★',
      price: 2020,
      bestseller: 'BESTSELLER',
      numberOfRatings: 27923
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/90200002_1new.jpg',
      title: 'GNC AMP Gold 100% Whey Protein Advanced Double Rich Chocolate Powder 4.4Lbs',
      rating: '★★',
      price: 735,
      numberOfRatings: 22819
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/6/c603a938903557544961_1.jpg',
      title: 'myDaily Lean Protein for Women - Weight Loss, Active Lifestyle & Immunity - Chocolate',
      rating: '★★★★',
      price: 3356,
      bestseller: 'BESTSELLER',
      numberOfRatings: 8503
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/7/6748e668904221699383_0.jpg',
      title: 'As-It-Is Nutrition Whey Protein Isolate',
      rating: '★★',
      price: 1153,
      numberOfRatings: 29624
    }
  ]

appendData(data);

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