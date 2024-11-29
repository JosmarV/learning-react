export const TURNS = {
    x: 'x',
    o: 'o'
}
let horizontal = 7;
let vertical = 6;
let pointOfBreak = 4;
let combo = [];

// Combinaciones horizontales
for (let row = 0; row < vertical; row++) {
  for (let col = 0; col <= horizontal - pointOfBreak; col++) {
    const start = row * horizontal + col;
    combo.push([start, start + 1, start + 2, start + 3]);
  }
}

// Combinaciones verticales
for (let col = 0; col < horizontal; col++) {
  for (let row = 0; row <= vertical - pointOfBreak; row++) {
    const start = row * horizontal + col;
    combo.push([start, start + horizontal, start + 2 * horizontal, start + 3 * horizontal]);
  }
}

// Combinaciones diagonales ascendentes
for (let row = 0; row <= vertical - pointOfBreak; row++) {
  for (let col = 0; col <= horizontal - pointOfBreak; col++) {
    const start = row * horizontal + col;
    combo.push([start, start + horizontal + 1, start + 2 * (horizontal + 1), start + 3 * (horizontal + 1)]);
  }
}

// Combinaciones diagonales descendentes
for (let row = pointOfBreak - 1; row < vertical; row++) {
  for (let col = 0; col <= horizontal - pointOfBreak; col++) {
    const start = row * horizontal + col;
    combo.push([start, start + horizontal - 1, start + 2 * (horizontal - 1), start + 3 * (horizontal - 1)]);
  }
}

export const WINNER_COMBOS = combo;

