import {gameObject} from './gameObject.js';
import {configGame} from "../constants.js";

const { IMAGE_SIZE, WIDTH_CANVAS, SPEED_PACMAN } = configGame;

export class Pacman extends gameObject {


  constructor(row,column,pacSound){
    super(row,column,pacSound);
    this.directionPacman =1;
    this.speedPacman = configGame.SPEED_PACMAN;
    this.scorePacman = 0;
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
    // console.log( "Distancia entre pacman i roca: " + distancia);

    if (distancia < IMAGE_SIZE) {
      //mHE FOTUT nata amb una roca
      alert("Has xocat amb una roca, has perdut una vida");
      this.pacmanlives--;
      this.spawnPacman();
      } //End switch
    }
      //mHE FOTUT nata amb una roca
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
  spawnPacman(){
    this.coordXPixels = 4* IMAGE_SIZE;
    this.coordYPixels = 6 * IMAGE_SIZE;
  }
}