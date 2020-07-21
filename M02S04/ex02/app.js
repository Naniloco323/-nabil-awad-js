let mainButtons = document.querySelectorAll('.btn');
let box = document.querySelector('.box');
let colorInput = document.getElementById('color-input');
let resetButton = document.getElementById('reset-bg');
let firstBox = document.querySelector('.first-box');
let secondBox = document.querySelector('.second-box');
let checkBox = document.querySelector('#my-check');
let secondCheck = document.querySelector('#second-check');


mainButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let colorName = button.innerText.toLowerCase();
    
    box.style.backgroundColor = colorName;

    
    
    if (checkBox.checked === true)  {
      firstBox.style.backgroundColor = colorName;
    }
    if (secondCheck.checked === true)  {
      secondBox.style.backgroundColor = colorName;
    }
    
  });
});

colorInput.addEventListener('change', (event) => {
  let colorInput = event.currentTarget;
  let dynamicColorButton = colorInput.nextElementSibling;
  let selectedColor = colorInput.value;

  dynamicColorButton.style.backgroundColor = selectedColor;
});

colorInput.nextElementSibling.addEventListener('click', () => {
  box.style.backgroundColor = colorInput.value;


  if (checkBox.checked === true)  {
    firstBox.style.backgroundColor = colorInput.value;
  }
  if (secondCheck.checked === true)  {
    secondBox.style.backgroundColor = colorInput.value;
  }
});

resetButton.addEventListener('click', () => {
  
  box.removeAttribute('style');

  if (checkBox.checked === true)  {
    firstBox.removeAttribute('style');
  }
  if (secondCheck.checked === true)  {
    secondBox.removeAttribute('style');
  }
});