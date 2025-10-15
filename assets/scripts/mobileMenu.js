function clickedMenu() {
    const button = document.getElementById("menuButton");
    button.addEventListener("click", isMenu_open());
}
function openMenu(){
    const elements = document.querySelectorAll('.menuItem');
    Array.from(elements).forEach(element => {
        element.style.display='flex';
        sessionStorage.setItem('menu','open');
    });
}
function isMenu_open(){
    const isOpen = sessionStorage.getItem('menu');
    if(isOpen==='open'){
        const elements = document.querySelectorAll('.menuItem');
        Array.from(elements).forEach(element => {
            element.style.display='none';
            sessionStorage.setItem('menu','closed');
        });
    }else{
        openMenu();
    }
}