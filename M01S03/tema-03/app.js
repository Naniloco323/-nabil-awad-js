var person = {
    firstName : 'Nabil' ,
    lastName : 'Awad',
    email: 'Nazar32341@yahoo.com',
    birthYear: '1993',
    zipCode: '02549',
    pets : [ {
        name : 'Misu' ,
        species : 'cat',
        age : 4 

    },
    {
        name : 'Lord',
        species : 'dog',
        age: 1
    },
    {
        name:'Negrut',
        species:'dog',
        age:2
    }
    ]
};
console.warn(`Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.`);
console.log(`Numele meu este ${person.firstName}  ${person.lastName}  si am ${person.pets.length} animale`);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.`);
console.log(`Am acelasi email din copilarie: ${person.email}`)

console.warn(`Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`);
console.log(`Unul din cele ${person.pets.length} animale ale mele este ${person.pets[2].species} si are ${person.pets[2].age} ani`);

console.warn(`Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `);
console.log(new Date(Date.now()).getFullYear() - ` ${person.pets[2].age}`)

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent. `);
var difference = (new Date().getFullYear() - person.pets[0].age) - person.birthYear;

console.warn('Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.');
var petName = person.pets[0].name;

console.warn(`Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.`);
console.log(`Intre ${person.firstName} si ${person.pets[0].name} este o diferenta de ${difference} ani`);

console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`); 
var messageElement1 = document.getElementById('prop01');
var message = '';
message = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
messageElement1.innerText = message;


console.warn(`Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `); 
var message2Element2 = document.getElementById('prop02');
var message2 = '' ;
var yearsDifference = person.pets[0].age - person.pets[2].age ;

message2 = `diferenta de varsta dintre ${person.pets[0].name}  si ${person.pets[2].name} este ${yearsDifference}` ;
message2Element2.innerText = message2;

console.warn(`Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`);
var message3Element3 = document.getElementById('prop03');
var message3 = '';

message3 = `Ma numesc ${person.firstName} ${person.lastName} m.am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}`;
message3Element3.innerText = message3;

console.warn('Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.' );
var message4Element4 = document.getElementById('prop04');
var message4 = '';
var misuBirth = new Date().getFullYear() - person.pets[0].age;
var lordBirth = new Date().getFullYear() - person.pets[1].age;
var negrutBirth = new Date().getFullYear() - person.pets[2].age;

message4 = ` Animalele mele s-au nascut in ${misuBirth} , ${lordBirth} respevtiv ${negrutBirth}`;
message4Element4.innerText = message4;

