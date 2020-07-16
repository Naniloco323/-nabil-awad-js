class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  displaySpeed() {
    console.log(this.speed);
  }

  accelerate(x) {
    if (isNaN(x) ) {
      this.speed++;
    }
    else {
      this.speed =  this.speed + x;
    };
    this.displaySpeed();

    return this;
    
  }

  decelerate(x) {
    if (isNaN(x) ) {
      this.speed--;
    }
    else {
      this.speed = this.speed - x;
    };

    this.displaySpeed();

    return this;
  }

  setSpeed(x) {
    this.speed = x;

    this.displaySpeed();

    return this;
  }
}

let audi = new Car('Audit', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

let p = document.createElement('p');
p.innerText = `Masina se deplasa cu ${audi.speed} km/h.`;

document.body.appendChild(p);


// Modifica metodele accelerate si decelerate astfel incat sa primeasca un coeficient cu care sa mareasca sau sa reduca viteza si pastreaza conceptele de chaining.  Daca metodele nu sunt invocate cu un parametru explicit, sa incrementeze sau sa decrementeze cu o unitate.
// Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. 
// Afiseaza viteza noua in DOM.
// Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare (fara limite superioare sau inferioare pentru simplitate).
// Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.
// Afiseaza noua valoare in DOM.

audi.accelerate(12).decelerate(3).decelerate(4); 

let p2 = document.createElement('p');
p2.innerText = `Masina se deplasa cu ${audi.speed} km/h.`;

document.body.appendChild(p2) ;

audi.setSpeed(4).accelerate();

let p3 = document.createElement('p');
p3.innerText = `Masina se deplasa cu ${audi.speed} km/h.`;

document.body.appendChild(p3) ;




