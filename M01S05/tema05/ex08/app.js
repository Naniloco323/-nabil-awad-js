// Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.
// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.
// Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila, apoi folosin  apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

let button = document.getElementById('query');
let paragraph = document.getElementById('message');
let userAge = () => {
    let enterAge = prompt('Enter your name please');
    if (isNaN(enterAge) ) 
    console.log('please enter your age in number');
    else 
    console.log(`Ai ${enterAge} ani.`);
    paragraph.innerText = `Ai ${enterAge} ani.`;
};

button.addEventListener('click', userAge);





