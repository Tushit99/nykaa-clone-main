

function navbar() {
    return ` <div id="nav1">
    <i class="fa fa-mobile-phone" style="font-size:24px"><span class="a1">Get App</span>| </i>
    <i class="fa fa-map-marker" style="font-size:24px"><span class="a1">Store & Events</span>|</i>
    <i class="fa fa-gift" style="font-size:24px"><span class="a1">Gift Card</span>|</i>
    <i class="fa fa-question-circle" style="font-size:24px"><span class="a1" onclick = "window.location.href = './helppage/help.html'">Help</span></i>
</div>
<div id="nav2">
    <div id="na1">
        <img src="https://gumlet.assettype.com/afaqs%2F2020-06%2Fe58cd071-0f27-4002-ba7a-14a60cca9a3c%2Fnykaa.png?format=webp&dpr=1.0&q=70&w=700"
            alt="" onclick = "window.location.href = 'index.html'" style = "cursor: pointer">
        <h2> CATEGORIES </h2>
        <h2> BRANDS </h2>
        <h2> NYKAA FASHION </h2>
        <h2> BEAUTY ADVICE </h2>
        <h2> NYKAA NETWORK </h2>
    </div>
    <div id="na2">
        <button id="search-button"> <i class="fa fa-search"></i> </button>
        <input type="search" id="search-text" placeholder="Search on Nykaa">
    </div>
    <div id="na3">
        <i class="fa fa-user" style="font-size:20px" onclick = "window.location.href = 'signup.html'" id = "account-nav"> <span>Account </span></i>
        <i class="fa fa-shopping-bag" style="font-size:20px" onclick = "window.location.href = 'cart.html'" id="shopping-bag-nav"> </i>
    </div>

</div>
<div id="nav3">
    <a href="./face.html">Face</a>
    <a href="./hair.html">Hair</a>
    <a href="./health.html">Health</a>
    <a href="./kajal.html">Kajal</a>
    <a href="./men.html">Men</a>
    <a href="./perfumes.html">Perfumes</a>
    <a href="./appliances-1.html">Appliances</a>
    <a href="./personalcare.html">Personal Care</a>
</div>

`
}

export { navbar } 