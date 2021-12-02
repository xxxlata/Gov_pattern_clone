const menu = document.querySelector(".hamburger_menu span");
const menuShow = document.querySelector(".hamburger_menu_show");

function show(){
    menuShow.style.display = "block";
}

menu.addEventListener("click",show);

