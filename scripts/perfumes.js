
import { navbar } from "../components/navbar.js";
import { appendData } from "../scripts/appendData.js"


let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();

import sidebar from "../components/sidebar.js"
let sidebarDiv = document.getElementById('sidebar');
sidebarDiv.innerHTML = sidebar();

let data = [
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b711e368904245710682_1.jpg',
      title: 'Moi By Nykaa Mini Pocket Perfume - Amour',
      rating: '★★★★★',
      price: 367,
      bestseller: 'BESTSELLER',
      numberOfRatings: 19901
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/34178f88904245710736_1.jpg',
      title: 'Moi By Nykaa Mini Pocket Perfume - Joie De Vivre',
      rating: '★★★★',
      price: 789,
      bestseller: 'BESTSELLER',
      numberOfRatings: 9122
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/696e0818904245710729_1.jpg',
      title: "Moi By Nykaa Mini Pocket Perfume - Raison D'Etre",
      rating: '★★★★★',
      price: 741,
      bestseller: 'BESTSELLER',
      numberOfRatings: 18558
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3360372078500.jpg',
      title: 'Giorgio Armani Acqua Di Gio Eau De Toilette',
      rating: '★★★',
      price: 517,
      numberOfRatings: 9284
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904173505381.jpg',
      title: 'Ramsons You are lovely Eau De Perfume',
      rating: '★★★★★',
      price: 436,
      bestseller: 'BESTSELLER',
      numberOfRatings: 28880
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/5/f5820708904245712198_1.jpg',
      title: 'Nykaa Cosmetics Masaba By Nykaa Mini Pocket Perfume',
      rating: '★★★★',
      price: 899,
      bestseller: 'BESTSELLER',
      numberOfRatings: 4754
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/7/17057038411061818961_1.jpg',
      title: 'Carolina Herrera Good Girl Eau De Parfum',
      rating: '★★★★★',
      price: 449,
      bestseller: 'BESTSELLER',
      numberOfRatings: 23063
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/0/10ml-7640177362063_1_.jpg',
      title: 'Chopard Happy Chopard Lemon Dulci Eau De Parfum',
      rating: '★',
      price: 757,
      numberOfRatings: 11606
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/5/75ca31askinn00000007_1.jpg',
      title: 'Skinn By Titan Tales Ibiza Eau De Parfum For Women',
      rating: '★★★★★',
      price: 482,
      bestseller: 'BESTSELLER',
      numberOfRatings: 4894
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/3/23804-_1_.jpg',
      title: 'Salvatore Ferragamo Amo Flowerful Eau de Toilette',
      rating: '★★★',
      price: 328,
      numberOfRatings: 23164
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/0/8011003993826.jpg',
      title: 'Versace Bright Crystal Eau De Toilette',
      rating: '★★★★★',
      price: 769,
      bestseller: 'BESTSELLER',
      numberOfRatings: 27566
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/3/63135823562700373169_asp1.jpg',
      title: 'Jaguar Classic Black Eau De Toilette',
      rating: '★',
      price: 353,
      numberOfRatings: 18693
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/8/e854e6b3348901250153_a.jpg',
      title: 'DIOR Sauvage Eau De Toilette',
      rating: '★★★★★',
      price: 387,
      bestseller: 'BESTSELLER',
      numberOfRatings: 11310
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/4/1490e6b3348901368247_a.jpg',
      title: 'DIOR Sauvage Eau De Parfum',
      rating: '★',
      price: 444,
      numberOfRatings: 16715
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/b/cb313938904245712020_1.jpg',
      title: 'Masaba By Nykaa Perfume',
      rating: '★★★★★',
      price: 359,
      bestseller: 'BESTSELLER',
      numberOfRatings: 14609
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/3/f388e368904245710644_1.jpg',
      title: 'Moi By Nykaa Eau de Perfume',
      rating: '★★★',
      price: 329,
      numberOfRatings: 29364
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/c/4c9fe6b3348901368254_a.jpg',
      title: 'DIOR Sauvage Eau De Parfum',
      rating: '★★★★★',
      price: 637,
      bestseller: 'BESTSELLER',
      numberOfRatings: 2835
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245715243_1.jpg',
      title: 'Nykaa Love Struck Perfume',
      rating: '★',
      price: 555,
      numberOfRatings: 26483
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/e/ce4fe368904245710699_1.jpg',
      title: 'Moi By Nykaa Mini Pocket Perfume',
      rating: '★★★★★',
      price: 464,
      bestseller: 'BESTSELLER',
      numberOfRatings: 28132
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/5/35abe368904245713843_1.jpg',
      title: 'Moi By Nykaa Mini Pocket Perfume - Fleur',
      rating: '★',
      price: 519,
      numberOfRatings: 28629
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/a/9a82c90nfm01pgl_1new.jpg',
      title: 'Skinn by Titan Raw Perfume For Men EDP',
      rating: '★★★★★',
      price: 737,
      bestseller: 'BESTSELLER',
      numberOfRatings: 8305
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/4/d4ebc90nfw02pfc_1new.jpg',
      title: 'Skinn by Titan Celeste Perfume For Women EDP',
      rating: '★★★',
      price: 426,
      numberOfRatings: 20891
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/m/_/m_8901725959104_1_.jpg',
      title: 'Engage W2 Perfume Spray For Women',
      rating: '★★★★★',
      price: 824,
      bestseller: 'BESTSELLER',
      numberOfRatings: 18650
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/5/7588e368904245710705_1.jpg',
      title: 'Moi By Nykaa Mini Pocket Perfume - Matin',
      rating: '★',
      price: 425,
      numberOfRatings: 3771
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/c/7cecc90nytitnsk0004_1new.jpg',
      title: 'Titan Skinn Women Miniatur Fregnance Celeste &Sheer (2N *25 ml =50 ml)',
      rating: '★★★★★',
      price: 665,
      bestseller: 'BESTSELLER',
      numberOfRatings: 4094
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/g/dg_lb_ei_edp_50ml_3423473032809.jpg',
      title: 'Dolce & Gabbana Light Blue Eau Intense Eau De Parfum',
      rating: '★★★★',
      price: 744,
      bestseller: 'BESTSELLER',
      numberOfRatings: 29888
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/5/a5d8abd690251081004_2.jpg',
      title: 'Jo Malone London Peony & Blush Suede Cologne',
      rating: '★★★★★',
      price: 333,
      bestseller: 'BESTSELLER',
      numberOfRatings: 18172
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/3/93abc90nytitnsk0001_1new.jpg',
      title: 'Skinn By Titan Raw and Verge Nos Perfumes For Men EDP (Each 25ml)',
      rating: '★★★',
      price: 695,
      numberOfRatings: 11686
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/s/estee-lauder-beautiful-belle-eau-de-parfum-_30ml__1.jpg',
      title: 'Estee Lauder Beautiful Belle Eau De Parfum',
      rating: '★★★★★',
      price: 855,
      bestseller: 'BESTSELLER',
      numberOfRatings: 19325
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/1/5159c90nfw02pfl_1new.jpg',
      title: 'Skinn By Titan Celeste Perfume For Women EDP',
      rating: '★',
      price: 755,
      numberOfRatings: 18419
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/7/d7694018904245715182_1.jpg',
      title: 'Nykaa Love Struck Perfume - Love Notes',
      rating: '★★★★★',
      price: 882,
      bestseller: 'BESTSELLER',
      numberOfRatings: 24178
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3349666007891.jpg',
      title: 'Paco Rabanne 1 Million Eau De Toilette',
      rating: '★',
      price: 846,
      numberOfRatings: 20170
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/a/davparf763_rvb_1_.jpg',
      title: 'Davidoff Cool Water Eau De Toilette For Men',
      rating: '★★★★★',
      price: 579,
      bestseller: 'BESTSELLER',
      numberOfRatings: 27838
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/6/3605521816658-1.jpg',
      title: 'Giorgio Armani Si Eau De Parfum',
      rating: '★★★',
      price: 633,
      numberOfRatings: 21829
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904173504452.jpg',
      title: 'Ramsons Exotica Eau De Perfume',
      rating: '★★★★★',
      price: 836,
      bestseller: 'BESTSELLER',
      numberOfRatings: 18393
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3386460086349_1.jpg',
      title: 'Coach Man Eau De Toilette',
      rating: '★★★★',
      price: 463,
      bestseller: 'BESTSELLER',
      numberOfRatings: 18021
    },
    {
      link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/c/4c9fe6b3348901368254_a.jpg',
      title: 'DIOR Sauvage Eau De Parfum',
      rating: '★★★★★',
      price: 418,
      bestseller: 'BESTSELLER',
      numberOfRatings: 8526
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