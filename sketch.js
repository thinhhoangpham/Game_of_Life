
let celsize = 4;
//let scl = 1;
let grid = [[]];
let cols = 250;
let rows = 200;
let width = cols * celsize;
let height = rows * celsize;

function setup() {
  // put setup code here
  frameRate(30);
  createCanvas(width, height);
  background(220);
  
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < cols; j++) {
      let alive;
      if (Math.random() <= 0.5) {
        alive = true;
      }
      else {
        alive = false;
      }
      row[j] = new Cell(j, i, celsize, alive)
    }
    grid[i] = row;
  }

  //console.log(grid[100].length);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i == 0) {
        if (j == 0) {
          grid[i][j].setNeighbors(grid[i + 1][j]);
          grid[i][j].setNeighbors(grid[i][j + 1]);
          grid[i][j].setNeighbors(grid[i + 1][j + 1]);
        }
        else if (j == cols - 1) {
          grid[i][j].setNeighbors(grid[i][j - 1]);
          grid[i][j].setNeighbors(grid[i + 1][j]);
          grid[i][j].setNeighbors(grid[i + 1][j - 1]);
        }
        else {
          grid[i][j].setNeighbors(grid[i][j - 1]);
          grid[i][j].setNeighbors(grid[i + 1][j]);
          grid[i][j].setNeighbors(grid[i][j + 1]);
          grid[i][j].setNeighbors(grid[i + 1][j + 1]);
          grid[i][j].setNeighbors(grid[i + 1][j - 1]);
        }
      }
      else if (i == rows - 1) {
        if (j == 0) {
          grid[i][j].setNeighbors(grid[i - 1][j]);
          grid[i][j].setNeighbors(grid[i][j + 1]);
          grid[i][j].setNeighbors(grid[i - 1][j + 1]);
        }
        else if (j == cols - 1) {
          grid[i][j].setNeighbors(grid[i][j - 1]);
          grid[i][j].setNeighbors(grid[i - 1][j]);
          grid[i][j].setNeighbors(grid[i - 1][j - 1]);
        }
        else {
          grid[i][j].setNeighbors(grid[i][j - 1]);
          grid[i][j].setNeighbors(grid[i - 1][j]);
          grid[i][j].setNeighbors(grid[i][j + 1]);
          grid[i][j].setNeighbors(grid[i - 1][j + 1]);
          grid[i][j].setNeighbors(grid[i - 1][j - 1]);
        }
      }

      else if (j == 0) {
        grid[i][j].setNeighbors(grid[i - 1][j]);
        grid[i][j].setNeighbors(grid[i][j + 1]);
        grid[i][j].setNeighbors(grid[i - 1][j + 1]);
        grid[i][j].setNeighbors(grid[i + 1][j]);
        grid[i][j].setNeighbors(grid[i + 1][j + 1]);
      }

      else if (j == cols - 1) {
        grid[i][j].setNeighbors(grid[i - 1][j]);
        grid[i][j].setNeighbors(grid[i][j - 1]);
        grid[i][j].setNeighbors(grid[i - 1][j - 1]);
        grid[i][j].setNeighbors(grid[i + 1][j]);
        grid[i][j].setNeighbors(grid[i + 1][j - 1]);
      }

      else {
        grid[i][j].setNeighbors(grid[i - 1][j - 1]);
        grid[i][j].setNeighbors(grid[i - 1][j]);
        grid[i][j].setNeighbors(grid[i - 1][j + 1]);
        grid[i][j].setNeighbors(grid[i][j - 1]);
        grid[i][j].setNeighbors(grid[i][j + 1]);
        grid[i][j].setNeighbors(grid[i + 1][j - 1]);
        grid[i][j].setNeighbors(grid[i + 1][j]);
        grid[i][j].setNeighbors(grid[i + 1][j + 1]);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log(grid[i][j].getNeighbors());
    }
  }

}

function draw() {
  // put drawing code here
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].display();
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].update();
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].nextgen();
    }
  }
  //noLoop();
}
