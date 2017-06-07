var menuIcon = document.querySelector('.navbar-menu-icon');

menuIcon.addEventListener('click', function(){
  var mobileNav = document.querySelector('.nav-mobile-menu');
  mobileNav.classList.toggle('openNav');
  menuIcon.classList.toggle('x');
});
