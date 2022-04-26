
import { navbar } from "../components/navbar.js";
import { appendData } from "../scripts/appendData.js"

let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();
import sidebar from "../components/sidebar.js"
let sidebarDiv = document.getElementById('sidebar');
sidebarDiv.innerHTML = sidebar();

let data = [
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/8/b8e5144737534800188_1.jpg',
        title: 'Plum Natur Studio All-Day-Wear Kohl Kajal - Black Brilliance + Free sharpener',
        rating: '★★★',
        price: 751,
        numberOfRatings: 6828
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/6/e608a.jpg',
        title: 'Wet n Wild Color Icon Kohl Liner Pencil',
        rating: '★★★★',
        price: 524,
        bestseller: 'BESTSELLER',
        numberOfRatings: 28250
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/a/9a6872bNYNYKBC001512_1.jpg',
        title: 'Nykaa Drama Eye Look Combo- Mascara + Eyeliner + Kajal',
        rating: '★★★',
        price: 430,
        numberOfRatings: 25925
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/5/95fa7c18904245706364_rev1.jpg',
        title: 'Nykaa Glamoreyes Colour Eye Pencil Kajal',
        rating: '★★★',
        price: 654,
        numberOfRatings: 1823
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/9/09d037emacxx00000225_0.jpg',
        title: 'M.A.C In Extreme Dimension 24hr Kajal Eye Liner',
        rating: '★★★★★',
        price: 702,
        bestseller: 'BESTSELLER',
        numberOfRatings: 1960
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/b/dbebcf58904330900424_1.jpg',
        title: 'Kay Beauty Waterproof 24 Hour Kajal - Spade - Black',
        rating: '★★★★★',
        price: 559,
        bestseller: 'BESTSELLER',
        numberOfRatings: 4713
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8903380157956_2.jpg',
        title: 'Faces Canada Magneteyes Kajal - Deep Black',
        rating: '★★★',
        price: 489,
        numberOfRatings: 4554
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8901030707988.png',
        title: 'Lakme Eyeconic Kajal Twin Pack - Deep Black',
        rating: '★★★★★',
        price: 527,
        bestseller: 'BESTSELLER',
        numberOfRatings: 15006
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/2/b2deca28904245700829_rev1.jpg',
        title: 'Nykaa Rock the Line Kajal Eyeliner - 001 Jet Black',
        rating: '★★★★',
        price: 857,
        bestseller: 'BESTSELLER',
        numberOfRatings: 21988
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8901526301614.1.jpg',
        title: 'Maybelline New York Colossal Kajal Super Black',
        rating: '★★★★★',
        price: 552,
        bestseller: 'BESTSELLER',
        numberOfRatings: 22249
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/1/81f14fenykac00000435_1.jpg',
        title: 'Nykaa Rock The Line Kajal Eyeliner - Jet Black Set Of 2',
        rating: '★★★★',
        price: 787,
        bestseller: 'BESTSELLER',
        numberOfRatings: 26847
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/ef3c84esugar00000051_1.jpg',
        title: 'SUGAR Kohl Of Honour Intense Kajal',
        rating: '★★★★★',
        price: 376,
        bestseller: 'BESTSELLER',
        numberOfRatings: 15800
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/3/23850_h.jpg',
        title: 'Elle 18 Eye Drama Kajal - Bold Black',
        rating: '★★',
        price: 773,
        numberOfRatings: 5335
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nykaycom00017_1.jpg',
        title: 'Kay Beauty Kajal Combo (Pack of 2)',
        rating: '★★★',
        price: 531,
        numberOfRatings: 12473
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904052435129_1.png',
        title: 'Colorbar Intensely Rich Kajal',
        rating: '★★★★★',
        price: 452,
        bestseller: 'BESTSELLER',
        numberOfRatings: 5382
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nypac00001140m_2.jpg',
        title: 'PAC Longlasting Kohl Pencil',
        rating: '★★★★',
        price: 665,
        bestseller: 'BESTSELLER',
        numberOfRatings: 24106
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/e/ae3529a773602112418_rv__1.jpg',
        title: 'M.A.C Technakohl Liner',
        rating: '★★★',
        price: 581,
        numberOfRatings: 1834
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/0565b93nylakmecom406_old_1.jpg',
        title: 'Lakme Eyeconic Eyes Combo',
        rating: '★★★★★',
        price: 353,
        bestseller: 'BESTSELLER',
        numberOfRatings: 11864
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/33ef998nykac00000132_1.jpg',
        title: 'Nykaa Black Magic Kajal - Black',
        rating: '★★★★',
        price: 650,
        bestseller: 'BESTSELLER',
        numberOfRatings: 21096
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/3/23702_h-8901030568787_1.jpg',
        title: 'Lakme Eyeconic Kajal',
        rating: '★★★★★',
        price: 609,
        bestseller: 'BESTSELLER',
        numberOfRatings: 24928
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