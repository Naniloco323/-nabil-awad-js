let  words = {
  programming: ['php', 'javascript', 'go', 'scala', 'fortran',  'mysql', 'python'],
  Animals: ["dog","cat",'camel','snake',"caribou","cassowary","caterpillar","chicken","crocodile"],
  Countries: ['romania', 'brazil', 'egypt', 'sudan', 'spain', 'qatar'],
  Sports: ['football', 'basketball' , 'climbing' ,'drifting']
}
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
let category = document.querySelector(" .category ")
category.innerHTML = `${randomPropName}`;

let tries = 5;
let word = words[0];
let guesedLetters = [];
let gameEnded = false;
let wordGuesed = false;
let keyboard = document.querySelector('.keyboard');
let next = document.querySelector('.btn-primary');
let reset = document.querySelector('.btn-danger');

reset.addEventListener('click', () => {
  location.reload();
})

next.addEventListener('click' ,() => {
  location.reload();
})



let renderTries = () => {
  let triesElement = document.getElementById('js-tries');

  triesElement.innerText = tries;
};

let renderWord = () => {
  let wordContainerElement = document.getElementById('js-word');
  let wordLength = randomValueValue.length;
  let okIterationCount = 0;
  wordContainerElement.innerHTML = '';

  randomValueValue.split('').forEach((letter) => {
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-lg', 'btn-secondary', 'm-1');

    if (guesedLetters.includes(letter)) {
      okIterationCount++;
      button.innerText = letter;
    }

    wordContainerElement.appendChild(button);
  });

  if (okIterationCount === wordLength) {
    wordGuesed = true;
  }
};

let checkGameState = () => {
  if (tries === 0) {
    gameEnded = true;
  }

  if (gameEnded && wordGuesed) {
    alert('Ai castigat');
    return;
  }

  if (wordGuesed) {
    alert('You are awesome  please press the button Next to move to the next word');
    return;
  }

  if (gameEnded) {
    alert(`Sorry you are wrong the word was  ${randomValueValue}`);
    return location.reload();
  }
};

let renderFace = () => {
  let face = document.getElementById('js-face');
  let eyes = face.querySelectorAll('.eye');
  let classNames = '';

  eyes.forEach((eye) => {
    eye.classList.remove('eye--worried', 'eye--annoyed');
  });

  if (tries >= 2 && tries <=3) {
    classNames += 'eye--annoyed';
  }

  if (tries === 1) {
    classNames += 'eye--worried';
  }

  if (classNames.length < 1) {
    return;
  }

  eyes.forEach((eye) => {
    eye.classList.add(classNames);
  });
};


renderTries();
renderWord();
renderFace();

keyboard.addEventListener('click', (event) => {
  if (event.target && event.target.nodeName === 'BUTTON') {
    let letter = event.target.innerText.toLowerCase();

    // common action
    guesedLetters.push(letter);
    event.target.disabled = true;
    console.log(letter)

    if (randomValueValue.includes(letter)) {
      event.target.classList.add('btn-success');
    } else {
      tries--;
      event.target.classList.add('btn-danger');
    }

    renderTries();
    renderWord();
    checkGameState();
    renderFace();
  }
});


