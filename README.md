# Game_of_Life
Implementation of Conway's Game of Life in JavaScript.
The canvas is a grid of square "cells" that can be displayed with 2 colors based on their staus of dead or alive.
The status of a cell follows the rule of Conway's game of life:
 - The cell has 8 "neighbors" which are 8 cells around it.
 - The cell will die if there are less than 2 live neighbors
 - The cell will live to next generation if there are 2 or 3 live neighbors
 - The cell will die if there are more than 3 live neighbor
 - If a dead cell has exactly 3 live neighbors, it will come back to life
 
 This project uses p5.js platform to create an infinite loop that keeps the generations going and object oriented programing technique to make cells and keep track of their behaviors.
 The status of ininal cells are randomly decided with 50% chance of living and dead.
 
 Live demonstration: https://thinhhoangpham.github.io/Game_of_Life/
 
