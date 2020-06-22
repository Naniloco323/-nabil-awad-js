let person = {
    getName: () => {
      return 'Nabil Awad';
    },
    getAge: () => {
      return 50;
    }
  };
  
  let accessor = (methodSuffix) => {
    let methodName = `get${methodSuffix}`;
  
    return person[methodName]();
  };
  

// Folosind accesorul afiseaza numele persoanei.
console.log(accessor('Name'));

// Afiseaza varsta persoanei.
console.log(accessor('Age'));

// Afiseaza anul de nastere al persoanei folosind anul curent.
let currentYear = new Date().getFullYear();
console.log(currentYear - accessor('Age'));

// Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”

console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
