(function () {
    const burgerItem = document.querySelector(".burgerMenuIcon");
    const menu = document.querySelector(".headerNav");
    const menuCloseItem = document.querySelector(".closeCross");
    const menuCloseItemLink = document.querySelector(".headerMenuItems");
    const menuCloseField = document.querySelector(".main");
    const menuCloseUlLi = document.querySelector(".headerMenuItems");
    const element = document.getElementById("myBtn");

    burgerItem.addEventListener ("click" , () => {
        menu.classList.remove("headerNavActive");
    });
    element.addEventListener ("click" , () => {
        alert ("здесь может быть ваша реклама")
    });

    menuCloseItem.addEventListener ("click" , () => {
        menu.classList.add("headerNavActive");
    });
    menuCloseItemLink.addEventListener ("click" , () => {
        menu.classList.add("headerNavActive");
    });
    
}());
