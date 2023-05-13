const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0); 
})



let menu = document.querySelector("#menu-icon");

let navMenu = document.querySelector(".navmenu");
let liked = document.querySelector("#bx-heart");
// let addCart = document.querySelector(".addcart")

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navMenu.classList.toggle("open");
}

liked.onclick = () =>{
    liked.classList.toggle("bxs-heart");
}
