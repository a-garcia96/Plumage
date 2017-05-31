var menuIcon = document.querySelector('.navbar-menu-icon');

menuIcon.addEventListener('click', function(){
  var mobileNav = document.querySelector('.mobile-nav');
  mobileNav.classList.toggle('openNav');
});
