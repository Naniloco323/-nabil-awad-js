// Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
// Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().
// Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. 

let calculateRectangleArea = (L, l) => {
    return L * l;
}

let totalWallSurface = 0;
let longWallSurface = calculateRectangleArea(12, 2.5);
let shortWallSurface = calculateRectangleArea(9, 2.5);
let doorSurface = calculateRectangleArea(3, 2);
let windowSurface = calculateRectangleArea(3, 2);

totalWallSurface = 2 * (longWallSurface + shortWallSurface);

console.log(` ${totalWallSurface - doorSurface - windowSurface}`);

let aggregateSurfaceArea = (L, l, L2, l2) => {
    let firstRectangleArea = calculateRectangleArea(L, l);
    let secondReactamgleArea = calculateRectangleArea(L2, l2);
    let totalRectangleArea = firstRectangleArea + secondReactamgleArea;
    return totalRectangleArea;
}



console.log(`suprafata totala este:${aggregateSurfaceArea(48, 92, 51, 102)}.`);