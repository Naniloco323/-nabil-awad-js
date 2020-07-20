// Folosind evenimentul resize al obiectului window, afiseaza o alerta care sa contina mesajul: “Fereastra si-a schimbat dimensiunea.” 
// Folosind evenimentul resize si proprietatea innerWidth al obiectului window, afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare eveniment de resize. 
// Folosind evenimentul resize si proprietatea innerWidth al obiecutului window, afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat latimea.”
// Folosind evenimentul resize al obiectului window si proprietatile innerWidth si innerHeight, la fiecare redimensionare a ferestrei, afiseaza intr-un paragraf mesajul: “Fereastra are acum suprafata de xxx pixeli.”.
// Folosind evenimentul de DOMContentLoaded si o functie reutilizabila afiseaza suprafata ferestrei si la momentul incarcarii site-ului. 

let p = $('.message');
let p2 = $('#my-id');
let p3 = $('#totalSurface');
let p4 = $('#loadedSurface')
let width = $( window ).width();
let height = $(window).height();

let calculateSurface = (L, x) => {
  return `Fereastra are acum suprafata de ${L * x} pixeli `;
}

$(window).on('DOMContentLoaded', () => {
  p4.text(calculateSurface(width, height))
});





$(window).on('resize', () => {
  let newWidth = $( window ).width();
  let newHeight = $(window).height();
  p.text(` ${newWidth}`);
  p3.text(calculateSurface(newHeight, newWidth));

  if (newWidth !== width) {
    p2.text('Fereastra si-a schimbat latimea.');
  } else {
    p2.text('');
  }

})
