// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul paragrafului',
  class: 'clase de css',
});
let $body = $('body');

$p.appendTo($body);

// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/
// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
// https://api.jquery.com/append/
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/

let $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

$body.append($p2);

setTimeout(() => {
  $p2.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul:
// “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea”
// si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap()
// https://api.jquery.com/wrap/
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la
// inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

let $passwordSpan = jQuery('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p2);

let wrappingDiv = jQuery('<div>', {
  class: 'container',
});

// $('.nimic').add($p).add($p2).wrap(wrappingDiv);
$body.append(wrappingDiv);
$p.appendTo(wrappingDiv);
$p2.appendTo(wrappingDiv);

let msg = 'Mesaje';

$(`<h2>${msg}</h2>`).prependTo(wrappingDiv);

// Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda 
// Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.
// Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation. Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
// Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link


let $navigationDiv = $('<div>', {
  class: 'navigation',
});
$(wrappingDiv).after($navigationDiv);

let $firstLink = $('<a>', {
  text:'Primul link',
  class:'nav-link',
}).appendTo($navigationDiv);


$('.navigation .nav-link').before('<h2>Navigatie</h2>');

$($firstLink).prepend('<sup>1<sup>');

// Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container 
// Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici.” Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery. Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class.

$('.container').before('<h1>Invat jquery<h1>');

let $p3 = $('<p>', {
  text:'Documentatia jQuery poate fi gasita  ',
})

$p3.appendTo($body)

let $documantationLink = $('<a>', {
  text:'aici',
  target:'_blank',
  href:'https://api.jquery.com/',

});

$($p3).append($documantationLink);