console.warn('Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse (document html nou).');

var number = prompt('Introduce numarul: ');
var upperNumber = prompt('Introduce numarul superior: ');
var i = 5;

while (i <= upperNumber) {
  if (i % number === 0) {
    console.log(i);
  }

  i++;
}