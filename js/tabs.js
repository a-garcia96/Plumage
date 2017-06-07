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

// homework make this same page but using accordion and change it's theme using the theme roller. try to set different settings. If you want to keep using a Google Fonts, copy and paste the font-family name in the proper section inside the ThemeRoller (http://jqueryui.com/themeroller/)