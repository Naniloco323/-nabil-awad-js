let person = {
    getName: function () {
      return 'Dragos Iordache';
    },
    getAge: () => {
      return 32;
    }
  };

// Afiseaza numele intreg al persoanei folosind metoda getName()

console.log(person.getName());

// Afiseaza varsta persoanei folosind metoda getAge()

console.log(person.getAge());

// Afiseaza anul de nastere al persoanei, folosind anul curent si metoda getName()

let currentYear = new Date().getFullYear();
let birthYear = currentYear - person.getAge();
console.log(birthYear);

// Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”

console.log(`Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} de ani in anul ${birthYear}! `);

