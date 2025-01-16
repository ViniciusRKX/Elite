const header = document.getElementById('header');

window.onscroll = function() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled'); 
  }
};

const menuIcon = document.querySelector('.bi');
const menu = document.querySelector('.menu ul');

menuIcon.addEventListener ('click', ()=> {
  menu.classList.toggle('active');
});