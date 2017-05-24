var mobileNav = document.querySelector('.mobile-nav');
var menuIcon = document.querySelector('.navbar-menu-icon');
menuIcon.addEventListener('click', function(){
  mobileNav.classList.toggle('openNav');
});
