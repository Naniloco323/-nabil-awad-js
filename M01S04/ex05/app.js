var i;
var testNumber = window.prompt('introdu numarul:') || 2;
var upperLimit = window.prompt('introdu limita') || 10;

for (i = 1; i <= upperLimit; i++) {
    
    console.log(i);
    if (i % testNumber !== 0) {
        continue;
    }
    console.log(`Acest numar este multiplu de ${testNumber}.`);
}