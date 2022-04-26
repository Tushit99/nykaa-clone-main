import { appendData, appendCart } from "../scripts/appendData.js"




let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

appendCart(cartItems);

var total = cartItems.reduce(function (acc, cv) {
    return Math.round((acc + Number(cv.price)));
}, 0);



let tp = document.querySelector(".totalprice");
tp.style.marginTop = "7%"
tp.innerText = `₹${total}`;

let containerDiv = document.getElementById('container');

// containerDiv.style.display = "flex";
// containerDiv.style.flexDirection  = "column";


