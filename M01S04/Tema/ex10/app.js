var person = {
    name: 'Dragos',
    surname: 'Iordache',
    age: 32,
    petOwner: false,
    skills: [
      'html',
      'javascript',
      'css',
      'java',
      'c++',
      'node.js',
      'jquery'
    ],
    friends: [
      {
        name: 'Larry',
        surname: 'Larryson',
        age: 30
      },
      {
        name: 'Steven',
        surname: 'Stevenson',
        age: 31
      },
      {
        name: 'Carol',
        surname: 'Carolson',
        age: 29
      }
    ]
};

console.warn(`Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`);
var message = '';

person.skills.forEach(function (skill, i) {
    message += skill + ' ';
});

console.log(message.trim());

console.warn(` In mod similar, afiseaza skillurile care nu incep cu j.`);
message = '';

person.skills.forEach(function (skill, i) {
    if (skill[0] !== 'j') {
        message += skill  + ' ' ;
    }
})
console.log(message.trim());

console.warn(` Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`);
message = 'Numele mari ale prieteni mei sunt '

person.friends.forEach(function (friend, i , friends) {
  var punctuation = ', ';

  message += `${friend.surname}` ;

  if (i === friends.length - 1) {
    punctuation = '.' ;
  }
  message += punctuation;
})
console.log(message.trim());


console.warn(` Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `);
let totalAge = 0;

person.friends.forEach(function (friend) {
  totalAge += friend.age;
})

console.log(totalAge);

console.warn(` Folosind forEach, afiseaza suma anilor de nastere a persoanelor `);
var totalYears = 0;

person.friends.forEach(function (friend) {
  var friendAge = friend.age;
  var birthYear = (new Date(Date.now()).getFullYear()) - friendAge;

  totalYears += birthYear;

});

console.log(totalYears);

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`);

person.friends.forEach(function (friend) {

  var ageDiff = person.age - friend.age;

  if (ageDiff > 0) {
      console.log(ageDiff);
  }

})

console.warn(`Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`);
message = '';
person.friends.reverse();

person.friends.forEach(function (friend, i, friends) {
  var punctuation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

person.friends.reverse();