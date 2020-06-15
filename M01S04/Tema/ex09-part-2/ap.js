console.warn('Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse. (fisier nou)');

let number = prompt('Introduce numarul: ');
let lowerNumber = prompt('Introduce numarul inferior: ');
let upperNumber = prompt('Introduce numarul superior: ');
let i = lowerNumber;

do {
  if (i % number === 0) {
    console.log(i);
  }
  i++;
} while (i <= upperNumber);