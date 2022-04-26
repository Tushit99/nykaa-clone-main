
import { appendData } from "../scripts/appendData.js"
import { navbar } from "../components/navbar.js";

let navbarDiv = document.getElementById('navbar');

navbarDiv.innerHTML = navbar();

import sidebar from "../components/sidebar.js"
let sidebarDiv = document.getElementById('sidebar');
sidebarDiv.innerHTML = sidebar();

let data = [
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/7/2708fec4005808679829_1.jpg',
        title: 'NIVEA Soft Light Moisturizer for Face, Hand & Body, Non-Sticky Cream with Vitamin E & Jojoba Oil',
        rating: '★★★★',
        price: 554,
        bestseller: 'BESTSELLER',
        numberOfRatings: 19522
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/b/2b13470CLINI00000002_0.jpg',
        title: 'Clinique Moisture Surge 100h Auto-replenishing Hydrator (Moisturizer)',
        rating: '★★★★★',
        price: 865,
        bestseller: 'BESTSELLER',
        numberOfRatings: 19785
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/8/e813470CLINI00000001_0.jpg',
        title: 'Clinique Moisture Surge 100h Auto-replenishing Hydrator (Moisturizer)',
        rating: '★★★★',
        price: 572,
        bestseller: 'BESTSELLER',
        numberOfRatings: 22380
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/f/ff0ef5112557_H-8901030786310.jpg',
        title: 'Ponds Age Miracle Wrinkle Corrector Day Cream SPF 18 PA++',
        rating: '★★★',
        price: 843,
        numberOfRatings: 4507
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/9/a9eff5c4902430917964.jpg',
        title: 'Olay Night Cream: Regenerist Retinol 24 Moisturiser',
        rating: '★★★★',
        price: 601,
        bestseller: 'BESTSELLER',
        numberOfRatings: 20048
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/7/773602575534_mini.jpg',
        title: 'M.A.C Strobe Cream / Mini Hydratant Lumineux Pinklite',
        rating: '★★★★',
        price: 513,
        bestseller: 'BESTSELLER',
        numberOfRatings: 17489
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/9/f993dd7NYCETA0000003_1.jpg',
        title: 'Cetaphil DailyAdvance Ultra Hydrating Lotion',
        rating: '★★★★',
        price: 818,
        bestseller: 'BESTSELLER',
        numberOfRatings: 19147
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430138796_1_.jpg',
        title: 'Olay Regenerist Microsculpting Day Cream - Niacinamide',
        rating: '★★',
        price: 421,
        numberOfRatings: 13113
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/9/1922c2b27234_h-8901030755354.jpg',
        title: 'Ponds Super Light Gel Oil Free Moisturiser With Hyaluronic Acid + Vitamin E',
        rating: '★★★★',
        price: 872,
        bestseller: 'BESTSELLER',
        numberOfRatings: 19231
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/d/3de7381mcaff00000041_1_new.jpg',
        title: 'MCaffeine Oil-Free Coffee Moisturizer with Hyaluronic Acid & Pro Vitamin B5 for Instant Hydration',
        rating: '★★★',
        price: 344,
        numberOfRatings: 17127
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/1/2178c8d8994993016709_1.jpg',
        title: "L'Oreal Paris Revitalift Crystal Gel Cream | Oil-Free Face Moisturizer With Salicylic Acid",
        rating: '★★★★',
        price: 739,
        bestseller: 'BESTSELLER',
        numberOfRatings: 22370
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/c/8cfe2018906087776536__1_.jpg',
        title: 'Mamaearth Ubtan Oil-free Face Moisturizer With Turmeric & Saffron For Skin Brightening',
        rating: '★★',
        price: 369,
        numberOfRatings: 18248
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/5/55fea91NYKAB00000508_1.jpg',
        title: 'Nykaa SKINRX Vitamin C Illuminate + Day Moisturizer with SPF 15 for Normal to Dry Skin',
        rating: '★★★★',
        price: 570,
        bestseller: 'BESTSELLER',
        numberOfRatings: 24519
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/7/4710032517839.jpeg',
        title: 'Neutrogena Hydro Boost Water Gel',
        rating: '★★',
        price: 643,
        numberOfRatings: 1220
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3350900000394_2.jpg',
        title: 'Embryolisse Lait-Creme Concentré',
        rating: '★★★★',
        price: 839,
        bestseller: 'BESTSELLER',
        numberOfRatings: 28449
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/6/763e29a773602422050_rv__1.jpg',
        title: 'M.A.C Strobe Cream',
        rating: '★★★',
        price: 482,
        numberOfRatings: 9547
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/3/d3aa38aNYCETA0000007-new1.jpg',
        title: 'Cetaphil Moisturising Lotion',
        rating: '★★★★',
        price: 405,
        bestseller: 'BESTSELLER',
        numberOfRatings: 12959
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/5/15bd38aNYCETA0000005-new1.jpg',
        title: 'Cetaphil Moisturising Cream',
        rating: '★★',
        price: 554,
        numberOfRatings: 21862
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4f2980LOREA00000115_1.jpg',
        title: "L'Oreal Paris Hydrated, Plump & Radiant Skin Kit",
        rating: '★★★★',
        price: 340,
        bestseller: 'BESTSELLER',
        numberOfRatings: 23572
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c31fa32ponds00000026_1.jpg',
        title: 'Ponds BB+ Cream Instant Spot Coverage + Light Make-up Glow Ivory',
        rating: '★★',
        price: 660,
        numberOfRatings: 22445
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/33f4470CLINI00000003_0.jpg',
        title: 'Clinique Moisture Surge 100h Auto-replenishing Hydrator (Moisturizer)',
        rating: '★★★★',
        price: 768,
        bestseller: 'BESTSELLER',
        numberOfRatings: 4974
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906009450070_1_.png',
        title: 'Biotique Morning Nectar Nourish & Hydrate Moisturizer',
        rating: '★★★',
        price: 841,
        numberOfRatings: 18997
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/a/faf5cc4e000381_1rev.jpg',
        title: 'The Body Shop Vitamin E Moisture Cream',
        rating: '★★★★',
        price: 464,
        bestseller: 'BESTSELLER',
        numberOfRatings: 15815
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/1/a11d8b7clini00000082_1.jpg',
        title: 'Clinique More Than Moisture Set with Moisture Surge',
        rating: '★★',
        price: 325,
        numberOfRatings: 5334
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/5/55a6a828906063411178_image_n1.jpg',
        title: "Re'equil Ceramide & Hyaluronic Acid Moisturiser For Normal To Dry Skin",
        rating: '★★★★',
        price: 527,
        bestseller: 'BESTSELLER',
        numberOfRatings: 20805
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/f/7fcce608906087772439_1.jpg',
        title: 'Mamaearth Aloe Vera Gel With Pure Aloe Vera & Vitamin E For Skin and Hair',
        rating: '★★★★',
        price: 848,
        bestseller: 'BESTSELLER',
        numberOfRatings: 12836
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/8/982bdd7NYKBNDCTP0009_1.jpg',
        title: 'Cetaphil Cleansing + Hydrating Regime',
        rating: '★★★★',
        price: 712,
        bestseller: 'BESTSELLER',
        numberOfRatings: 3141
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/a/4aa475e8904153326821_1.jpg',
        title: 'Forest Essentials Soundarya Radiance Cream With 24K Gold And SPF25',
        rating: '★★★',
        price: 669,
        numberOfRatings: 9403
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/1/716170266565.jpg',
        title: 'Bobbi Brown Vitamin Enriched Face Base',
        rating: '★★★★',
        price: 866,
        bestseller: 'BESTSELLER',
        numberOfRatings: 27397
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/9/f993dd7NYCETA0000003_1.jpg',
        title: 'Cetaphil DAM DailyAdvance Ultra Hydrating Lotion',
        rating: '★★',
        price: 547,
        numberOfRatings: 27402
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/7/27032_h-8901030712432_1_1.jpg',
        title: 'Lakme Peach Milk Soft Creme Moisturizer',
        rating: '★★★★',
        price: 696,
        bestseller: 'BESTSELLER',
        numberOfRatings: 2091
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/0/304e948LOREA00000093_1.jpg',
        title: "L'Oreal Paris Revitalift Hyaluronic Acid Plumping Day Cream",
        rating: '★★',
        price: 469,
        numberOfRatings: 25245
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/d/3d338fe8809416470016_1n.jpg',
        title: 'COSRX Advanced Snail 92 All In One Cream',
        rating: '★★★★',
        price: 467,
        bestseller: 'BESTSELLER',
        numberOfRatings: 11735
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/7/67c8bd58901030753794_Lakme_1.jpg',
        title: 'Lakme Absolute Perfect Radiance Skin Brightening Day Creme',
        rating: '★★★',
        price: 809,
        numberOfRatings: 15334
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/4/54d4f5112205_H-8901030786327.jpg',
        title: 'Ponds Age Miracle Wrinkle Corrector Day Cream SPF 18 PA++',
        rating: '★★★★',
        price: 311,
        bestseller: 'BESTSELLER',
        numberOfRatings: 20681
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/c/2c2ddd7NYCETA0000004_1.jpg',
        title: 'Cetaphil DAM Daily Advance Ultra Hydrating Lotion',
        rating: '★★★★',
        price: 604,
        bestseller: 'BESTSELLER',
        numberOfRatings: 20033
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/6/861929a773602422029_rv__1.jpg',
        title: 'M.A.C Strobe Cream - Pinklite',
        rating: '★★★★',
        price: 322,
        bestseller: 'BESTSELLER',
        numberOfRatings: 20773
    },
    {
        link: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/7/774038a8906005273437-new1.jpg',
        title: 'Cetaphil Moisturising Cream',
        rating: '★★',
        price: 823,
        numberOfRatings: 16224
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