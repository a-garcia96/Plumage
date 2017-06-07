var menuIcon = document.querySelector('.navbar-menu-icon');

menuIcon.addEventListener('click', function(){
  var mobileNav = document.querySelector('.nav-mobile-menu');
  mobileNav.classList.toggle('openNav');
  menuIcon.classList.toggle('x');
});


$(document).ready(function(){
    $('#tabs').tabs({
        beforeActivate: function(e){            location.hash=$(e.currentTarget).attr('href')
        },
//        show:'slideDown',
//        hide:'slideUp',
        heightStyle: 'auto',
    }); // end tabs
    var hash = location.hash;
    if(hash){
        $('#tabContainer').tabs('load', hash)
    }
});


$(document).ready(function(){
    var plumageDialog = function (numero) {
        $('.clickDialog' + numero).click(function(){
            $('#boxDialog' + numero).dialog({
            draggable:false,
            resizable:false,
            modal:true,
            show: 500,
            hide: {
            effect: 'fade', duration:500,
                },
            }); // dialog
        }); // end click
    };  // end function declaration 'numero'

    plumageDialog(1);
    plumageDialog(2);
    plumageDialog(3);
    plumageDialog(4);
    plumageDialog(5);
    plumageDialog(6);
    plumageDialog(7);
    plumageDialog(8);
    plumageDialog(9);
}); // end doc ready
