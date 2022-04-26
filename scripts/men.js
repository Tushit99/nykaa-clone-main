


import { navbar } from "../components/navbar.js";
import { appendData } from "../scripts/appendData.js"

let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();

import sidebar from "../components/sidebar.js"
let sidebarDiv = document.getElementById('sidebar');
sidebarDiv.innerHTML = sidebar();

let data = [
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430922524_1_.jpg',
        title: 'Gillette Fusion Power shaving Razor Blades (Cartridge) 4s pack',
        rating: '★★★★★',
        price: 411,
        bestseller: 'BESTSELLER',
        numberOfRatings: 20407
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430722933_1_.jpg',
        title: 'Gillette Vector Plus Cartridge 6 Pack Save Rs.30',
        rating: '★★★',
        price: 695,
        numberOfRatings: 10592
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430917360_1.jpg',
        title: 'Gillette Mach 3 Shaving Blades (Pack Of 6 Cartridges)',
        rating: '★★★★★',
        price: 348,
        bestseller: 'BESTSELLER',
        numberOfRatings: 4868
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/g/i/gillette_4.jpg',
        title: 'Gillette Presto Manual Shaving Razor Gift pack 5 pc Pack',
        rating: '★★★★',
        price: 512,
        bestseller: 'BESTSELLER',
        numberOfRatings: 21520
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/_/n_82174185.jpg',
        title: 'Gillette Fusion Power shaving Razor Blades (Cartridge) 2s pack',
        rating: '★★',
        price: 314,
        numberOfRatings: 22333
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430722469.jpg',
        title: 'Gillette Mach 3 Manual Shaving Razor Blades (Cartridge) 12s Pack (Save Rs.310)',
        rating: '★★★',
        price: 353,
        numberOfRatings: 11816
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/_/1_178.jpg',
        title: 'Gillette Vector 3 Manual Shaving Razor Blades (Cartridge) 4s pack (Save Rs.30)',
        price: 561,
        bestseller: 'BESTSELLER',
        numberOfRatings: 14350
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/2/32bce7b4987176106407_1.jpg',
        title: 'Gillette Flexball ProGlide Combo Pack - Flexball Razor with 4 Flexball Blades',
        rating: '★★★★★',
        price: 332,
        bestseller: 'BESTSELLER',
        numberOfRatings: 22657
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430722407_1__1.jpg',
        title: 'Gillette Mach 3 Manual Shaving Razor Blades Cartridge - 2s Pack',
        rating: '★★★★★',
        price: 431,
        bestseller: 'BESTSELLER',
        numberOfRatings: 8623
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/1/d13dfa9nyktrufit0021r_1.jpg',
        title: 'Truefitt & Hill Wellington Razor Mach III - Blacky',
        rating: '★',
        price: 603,
        numberOfRatings: 23575
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430917445.jpg',
        title: 'Gillette Mach Turbo 3 Shaving Blades Save Rs.260 (Pack Of 10 Cartridges)',
        rating: '★★',
        price: 834,
        numberOfRatings: 23632
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/8/a8cafa9nyktrufit0022r_1.jpg',
        title: 'Truefitt & Hill Wellington Razor Mach III - Brown',
        rating: '★★★★★',
        price: 312,
        bestseller: 'BESTSELLER',
        numberOfRatings: 14003
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430665476_1_.jpg',
        title: 'Gillette Fusion Proglide FlexBall Manual Shaving Razor Blades (Cartridge) 4s Pack (Save Rs. 99/-)',
        rating: '★★',
        price: 504,
        numberOfRatings: 17313
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/e/de75fa9nyktrufit0027r_1.jpg',
        title: 'Truefitt & Hill Wellington Razor Fusion - White',
        rating: '★★★★★',
        price: 834,
        bestseller: 'BESTSELLER',
        numberOfRatings: 9059
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/9/c9a52f68904330600218_apr1.jpg',
        title: 'Bombay Shaving Company Defender For Her Sensitive Cartridges (Pack Of 2)',
        rating: '★★★★',
        price: 410,
        bestseller: 'BESTSELLER',
        numberOfRatings: 9846
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430917407_1.jpg',
        title: 'Gillette Mach 3 Shaving Blades (Pack Of 16 Cartridges)',
        rating: '★★★',
        price: 606,
        numberOfRatings: 6925
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/2/9225e874902430917483.jpg',
        title: 'Gillette Fusion 5 Shaving Blades (Pack Of 10 Cartridges) SAVE Rs.600',
        rating: '★★★★',
        price: 729,
        bestseller: 'BESTSELLER',
        numberOfRatings: 23693
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/e/3e01a7dnyklts0000072__1_.jpg',
        title: 'LetsShave Pro 4 Shaving Razor for Men',
        rating: '★★',
        price: 514,
        numberOfRatings: 7243
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4def959nybsc00000003_ap1.jpg',
        title: 'Bombay Shaving Company Silver Metal Precision Safety Razor System with Feather Blades',
        rating: '★★★★★',
        price: 671,
        bestseller: 'BESTSELLER',
        numberOfRatings: 12103
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430917520_1.jpg',
        title: 'Gillette Mach 3 Shaving Razor + 2 Shaving Blade (Cartridge)',
        rating: '★★★★',
        price: 504,
        bestseller: 'BESTSELLER',
        numberOfRatings: 13043
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