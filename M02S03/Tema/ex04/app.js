
// Foloseste elementul image pentru a afisa intr-un paragraf mesajul “Imaginea s-a incarcat.”, folosind eventul load  pe imagine.
// Adauga in HTML, in paragraf, textul: “Imaginea se incarca…” si schimba textul din paragraf in “Imaginea s-a incarcat.” atunci cand aceasta s-a incarcat. 
// Atunci cand imaginea s-a incarcat, adauga pe elementul image un eveniment de click care sa afiseze intr-o alerta mesajul: “Imaginea cu URLul: … s-a incarcat.” 

let image = $('.image');
let messagePara = $('.message-para');

image.on('load', () => {
  messagePara.text('Imaginea sa incarcat');

  image.on('click', () => {


    let url = 'http://lorempixel.com/output/food-q-c-350-350-7.jpg'
    alert(`Imaginea cu URLul:${url} sa incarcat `);
  
  });
});


