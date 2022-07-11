let closeNavBar = document.querySelector('.mobile_nav_go_back');
let mobileMenu = document.querySelector('.mobile_menu');
openNavBar = document.querySelector('.burger');
openNavBar.addEventListener('click', openMenu)
function openMenu(){
    console.log('open')
    mobileMenu.classList.remove('hide');
}
closeNavBar.addEventListener('click', closeMenu);
function closeMenu(){
    mobileMenu.classList.add('hide');
    console.log('close');
}