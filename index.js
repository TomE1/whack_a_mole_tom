let currMoleTile;
let currPlantTile;

window.onload = function () {
  setGame();
};

function setGame() {
  // set up the grid for the game board in html
  for (let i = 0; i < 9; i++) {
    // <div></div>
    let tile = document.createElement('div');
    tile.id = i.toString();
    document.getElementById('board').appendChild(tile);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  // math.random --> 0-1 * 9 = (0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (currMoleTile) {
    currMoleTile.innerHTML = '';
  }

  let mole = document.createElement('img');
  mole.src = '../images/monty-mole.png';

  let num = getRandomTile();
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (currPlantTile) {
    currPlantTile.innerHTML = '';
  }
  let plant = document.createElement('img');
  plant.src = '../images/piranha-plant.png';

  let num = getRandomTile();
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}
