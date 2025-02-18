import {gameObject} from './gameObject.js';
import {configGame} from "../constants.js";
import {resetGame} from "../sketch.js";

const { IMAGE_SIZE, WIDTH_CANVAS, SPEED_PACMAN } = configGame;

export class Pacman extends gameObject {


  constructor(row,column,pacSound){
    super(row,column,pacSound);
    this.directionPacman =1;
    this.speedPacman = configGame.SPEED_PACMAN;
    this.key = false;
    this.pacmanlives=configGame.LIVES_PACMAN;
    this.pacSound = pacSound;
  }

  moveRight(){
    //Move pacman right
    let temp = this.coordXPixels+this.speedPacman;
    if ( temp < 0 || temp > (WIDTH_CANVAS - IMAGE_SIZE) ){
      console.log("Error, no es pot moure a la dreta");
      return;
    }
    else {
      this.directionPacman = 1;
      this.coordXPixels = temp;
    }
    this.pacSound.play();
  } //End moveRight

  moveUp(){
    let temp = this.coordYPixels-this.speedPacman;
    if ( temp < 0){
      console.log("Error, no es pot moure a l¡esquerra");
      return;
    }
    else {
      this.directionPacman = 2;
      this.coordYPixels = temp;
    }
    this.pacSound.play();

  } //End moveUp

  moveDown(){
    let temp = this.coordYPixels+this.speedPacman;
    if ( temp < 0){
      console.log("Error, no es pot moure a l¡esquerra");
      return;
    }
    else {
      this.directionPacman = 4;
      this.coordYPixels = temp;
    }
    this.pacSound.play();
  } //End moveDown

  moveLeft(){
    let temp = this.coordXPixels-this.speedPacman;
    if ( temp < 0){
      console.log("Error, no es pot moure a l¡esquerra");
      return;
    }
    else {
      this.directionPacman = 3;
      this.coordXPixels = temp;
    }
    this.pacSound.play();
  } //End moveLeft

  testCollideRock(roca){
    let distancia = dist(this.coordXPixels,
      this.coordYPixels, roca.coordXPixels, roca.coordYPixels);

    if (distancia < IMAGE_SIZE) {
      alert("Has xocat amb una roca, has perdut una vida");
      this.pacmanlives--;
      this.spawnPacman();
      }
    }

testCollideFood(food) {
  let distancia = dist(this.coordXPixels,
    this.coordYPixels, food.coordXPixels, food.coordYPixels);
  // console.log( "Distancia entre pacman i roca: " + distancia);

  if (distancia < IMAGE_SIZE) {
    console.log("Has agafat una food");
    return true;
  } else {
    return false;
  }
}

testCollideFinal(final){
  let distancia = dist(this.coordXPixels,
    this.coordYPixels, final.coordXPixels, final.coordYPixels);

  if (distancia < IMAGE_SIZE && this.key === false) {
    alert("Necessites la clau!");
    this.spawnPacman();
    }

  if (distancia < IMAGE_SIZE && this.key === true) {
    alert("Has guanyat!");
    resetGame();
    }
  }

  spawnPacman(){
    this.coordXPixels = 5* IMAGE_SIZE;
    this.coordYPixels = 6 * IMAGE_SIZE;
  }
}