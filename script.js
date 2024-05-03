const menuButton = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

let ok = false;

const showSidebar = () => {
    if(ok === false) {
        menu.style.transform = 'translate(0px, 0px)';
        ok = true;
    }
    else {
        menu.style.transform = 'translate(100%, 0px)';
        ok = false;
    }
};

console.log(typeof(menuButton));

menuButton.addEventListener("click", showSidebar);