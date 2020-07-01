let buttonOne = document.getElementById('eat-one-element');
let buttonAll = document.getElementById('eat-all');
buttonOne.addEventListener('click', () => {
document.getElementById('monster-01').style.color = 'red';
});

buttonAll.addEventListener('click' , (event) => {
document.getElementById('monster-01', 'monster-02').style.display = 'none';
console.log(event);
})

console.log(event);