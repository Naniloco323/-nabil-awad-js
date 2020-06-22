let dateBuilder = [
  () => {
    return '2020';
  },
  () => {
    return 'Iunie';
  },
  () => {
    return '22';
  }
];

// Folosind arrayul dateBuilder. Afiseaza anul curent.

console.log(dateBuilder[0]());

// Afiseaza propozitia: “Suntem in luna an”.

console.log(`Suntem in luna ${dateBuilder[1]()}`)
// Afiseaza propozitia: “Astazi este zi, data”.


dateBuilder[3] = () => {
  return 'Luni';
};

console.log(`Astazi este ${dateBuilder[3]()} date de ${dateBuilder[2]()}/${dateBuilder[1]()}/${dateBuilder[0]()}`)


// Afiseaza propozitia: “Data curenta este zi luna an”.

console.log(`Data curenta este ${dateBuilder[2]()}/${dateBuilder[1]()}/${dateBuilder[0]()}`)
