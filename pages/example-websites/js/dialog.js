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