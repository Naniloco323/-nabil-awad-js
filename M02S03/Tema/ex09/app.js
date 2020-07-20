let myNav = document.querySelector('.navigation');
let myList = document.querySelector('.my-list');
let width = window.innerWidth;
function myEventHandle () {
    if (myList.style.display === 'none') {
        myList.style.display = 'block';
    } else {
        myList.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    
    if (width >= 500 ) {
        myList.style.display = 'block';
    }
    else {
        myList.style.display = 'none';
    }

    window.addEventListener('resize', () => {
        let windowWidth = window.innerWidth;
    
        if (windowWidth >= 500) {
            myNav.removeEventListener('click', myEventHandle);
        } else {
            myNav.addEventListener('click', myEventHandle);
        }
      });

    
})