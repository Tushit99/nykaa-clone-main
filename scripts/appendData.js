let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
let appendData = (data) => {
    let cont = document.getElementById('container')
    cont.innerHTML = ''

    data.map(el => {

        let mainCard = document.createElement('div')
        mainCard.id = 'mainCard'

        let bs = document.createElement('p')
        if (el.bestseller !== undefined) {
            bs.innerText = el.bestseller;
            bs.style.color = "green"
            bs.style.fontWeight = "500"

        }

        let img = document.createElement('img')
        img.src = el.link;

        let title = document.createElement('p')
        title.innerText = el.title;
        title.style.fontSize = "14px"
        title.style.padding = "0 10px"



        let rating = document.createElement('span');
        rating.innerText = el.rating
        rating.style.fontSize = "20px"

        let numberOfRatings = document.createElement('span')
        numberOfRatings.innerText = `(${el.numberOfRatings})`

        let ratingSpan = document.createElement('span')
        ratingSpan.append(rating, numberOfRatings)



        let miniSpan = document.createElement('span')

        let mrp = document.createElement('span')
        mrp.innerText = "MRP: "
        mrp.style.color = "rgb(157, 157, 157)"

        let price = document.createElement('span')
        price.innerText = `₹${el.price}`;
        price.style.fontWeight = "bold"

        miniSpan.append(mrp, price);

        //buttons

        let btnDiv = document.createElement('div')
        btnDiv.id = "btnDiv";

        let btn = document.createElement('button')
        btn.innerText = "Add To Bag";
        btn.id = "addToCartBtn"
        btn.addEventListener('click', () => {
            addToCart(el);
        })

        let wishlistBtn = document.createElement('img')
        wishlistBtn.src = "./images/wishlist.png"
        wishlistBtn.id = "wishlistBtn"

        btnDiv.append(wishlistBtn, btn)

        mainCard.append(bs, img, title, miniSpan, ratingSpan, btnDiv)


        cont.append(mainCard)
    })


}
let addToCart = (item) => {

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.title} added to bag!`)

}

let appendCart = (data) => {
    let cont = document.getElementById('container')

    data.map(el => {

        let mainCard = document.createElement('div')
        mainCard.id = 'mainCard'

        let bs = document.createElement('p')
        if (el.bestseller !== undefined) {
            bs.innerText = el.bestseller;
            bs.style.color = "green"
            bs.style.fontWeight = "500"

        }

        let img = document.createElement('img')
        img.src = el.link;

        let title = document.createElement('p')
        title.innerText = el.title;
        title.style.fontSize = "14px"
        title.style.padding = "0 10px"



        let rating = document.createElement('span');
        rating.innerText = el.rating
        rating.style.fontSize = "20px"

        let numberOfRatings = document.createElement('span')
        numberOfRatings.innerText = `(${el.numberOfRatings})`

        let ratingSpan = document.createElement('span')
        ratingSpan.append(rating, numberOfRatings)



        let miniSpan = document.createElement('span')

        let mrp = document.createElement('span')
        mrp.innerText = "MRP: "
        mrp.style.color = "rgb(157, 157, 157)"

        let price = document.createElement('span')
        price.innerText = `₹${el.price}`;
        price.style.fontWeight = "bold"

        miniSpan.append(mrp, price);

        //buttons

        let btn = document.createElement('button')
        btn.innerText = "Remove From Bag";
        btn.style.width = "100%"
        btn.id = "addToCartBtn"
        btn.addEventListener('click', function (el, i) {
            remove(i);
        })


        mainCard.append(bs, img, title, miniSpan, ratingSpan, btn)


        cont.append(mainCard)
    })


}

function remove(i) {
    cart.splice(i, 1);
    console.log(i)
    appendCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// let sort = document.getElementById('sortBy');
// sort.onchange 
// let sortBy = ()


export { appendData, appendCart };