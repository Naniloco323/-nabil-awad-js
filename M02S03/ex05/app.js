 let p = document.querySelector('.message');
 let p2 = document.getElementById('my-id');
 let oldWidth = window.innerWidth;



// window.addEventListener('resize', (event) => {
//   let newWidth = window.innerWidth;
//   p.innerText = newWidth;

//   if (newWidth !== oldWidth) {
//     p2.innerText = 'Fereastra si-a schimbat latimea.';
//   } else {
//     p2.innerText = '';
//   }

//   oldWidth = newWidth;
  


// });


// Folosind evenimentul resize al obiectului window si proprietatile innerWidth si innerHeight, la fiecare redimensionare a ferestrei, afiseaza intr-un paragraf mesajul: “Fereastra are acum suprafata de xxx pixeli.”.
// Folosind evenimentul de DOMContentLoaded si o functie reutilizabila afiseaza suprafata ferestrei si la momentul incarcarii site-ului. 
let p3 = document.getElementById('totalSurface');
let p4 = document.getElementById('loadedSurface')
let height = window.innerHeight;
let width = window.innerWidth;



let calculateSurface = (L, x) => {
  return `Fereastra are acum suprafata de ${L * x} pixeli `;
}

window.addEventListener('DOMContentLoaded', () => {
  p4.innerText = calculateSurface(HeIght, Width);
});

  window.addEventListener('resize', (event) => {
    let newWidth = window.innerWidth;
    let newHeIght = window.innerHeight
    p.innerText = newWidth;
  
    if (newWidth !== oldWidth) {
      p2.innerText = 'Fereastra si-a schimbat latimea.';
    } else {
      p2.innerText = '';
    }

    p3.innerText = calculateSurface(newHeIght, newWidth);
  
    oldWidth = newWidth;
    
  
  
  });

