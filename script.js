const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

var typed = new Typed(".auto-type" ,{
    strings : ["Frontend Developer", "Native Developer", "Programmer"],
    typeSpeed : 100,
    backspeed : 100,
    looped : true
    
})