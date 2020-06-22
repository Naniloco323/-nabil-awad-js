let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    window.setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (speedy) {
    this.speed = speedy;
    if (speedy > car.topSpeed) {
      car.speed = car.topSpeed ;
    }
    else if (speedy < car.topReverseSpeed) {
      car.speed = car.topReverseSpeed;
    }
   
  
  }
  
  
};

// Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h".
// Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
// Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
// Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed}km/h .`);

for (let i = 0; i <= 4; i++) {
  car.decelerate();
}

console.log(`viteza nouo este ${car.speed} km/h`);

car.stop();
console.log(`viteza este ${car.speed}`);


car.setSpeed(400);
console.log(car.speed);

car.setSpeed(-80);
console.log(car.speed);