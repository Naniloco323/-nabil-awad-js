// Adauga un event handler numit de click pe butonul .btn care sa afiseze o alerta cu mesajul: “Butonul a fost apasat”. 
// Folosind evenimentul de resize al ferestrei, elimina event handlerul de pe buton de fiecare data cand fereastra se afla sub latimea de 650 pixeli.
// Pe acelasi eveniment de resize, adauga event handlerul cand fereastra este mai mare de 650 pixeli inclusiv. 
// Folosind evenimentul de DOMContentLoaded, aplica verificarile si cand fereastra se incarca, astfel incat daca aceasta s-a incarcat sub latimea data, handlerul sa nu ruleze iar daca este peste latimea data, acesta sa ruleze.


let breakpoint = 650;

function displayAlert() {
  alert('Butonul a fost apasat')
}

$(document).on('DOMContentLoaded', () => {
  let windowWidth = $(window).width();
  let buttonElement = $('.btn');

  if (windowWidth >= breakpoint) {
    buttonElement.on('click', displayAlert);
  }

  $(window).on('resize', () => {
    let windowWidth = $(window).width();

    if (windowWidth >= 650) {
      buttonElement.on('click', displayAlert);
    } else {
      buttonElement.of('click', displayAlert);
    }
  })
})
