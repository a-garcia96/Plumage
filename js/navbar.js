var menuIcon = document.querySelector('.navbar-menu-icon');
var mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', function(){
  mobileNav.classList.toggle('openNav');
});
