let myNav = $('.navigation');
let myList = $('.my-list');
let width = $(window).width();


function myEventHandle () {
    myList.toggle()
};

$(document).on('DOMContentLoaded', () => {
    if (width >= 500 ) {
        myList.show();
    } else {
        myList.hide()
    } 
    $(window).on('resize', () => {
        let windowWidth = $(window).width();
        if (windowWidth <= 500) {
            myNav.on('click', myEventHandle);
        } else  {
            myNav.off('click', myEventHandle);
        };
    });
});