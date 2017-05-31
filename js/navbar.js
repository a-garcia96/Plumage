var menuIcon = document.querySelector('.navbar-menu-icon');
menuIcon.addEventListener('click', function(){
  var mobileNav = document.querySelector('.mobile-nav');;
  if(mobileNav.classList === ''){
    mobileNav.classList.add('openNav');
  } else if (mobileNav.classList == 'openNav') {
    mobileNav.classList.remove('openNav');
    mobileNav.classList.add('closeNav');
  }
});

// when burger icon is clicked nav opens
// when burger icon is clicked again nav closes
