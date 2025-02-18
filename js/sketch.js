import { gameObject } from "./classes/gameObject.js";
import { Pacman } from "./classes/pacman.js";
import { Food } from "./classes/food.js";
import {configGame} from "./constants.js";
import {ErrorPac} from "./classes/errorPac.js";

let imgRock;
let numberImagesLoaded = 0;
const arrRocks = [];

let imgFood;
const arrFood = [];

let imgFinal;
const arrFinal = [];

export let IMAGE_SIZE =32;

let imgPacmanLeft;
let imgPacmanRight, imgPacmanUp, imgPacmanDown, imgPacman;
let myPacman;
let pacSound;
let timer = 0;
let startTimeGame = 0;
let endTimeGame = 0;

function preload() {
  imgRock = loadImage("../media/roca.png", handleImage, handleError);
  imgFood = loadImage("../media/key.png", handleImage, handleError);
  imgFinal = loadImage("../media/final.png", handleImage, handleError);
  imgPacman = loadImage("../media/marioLeft.png", handleImage, handleError);
  imgPacmanRight = loadImage("../media/marioRight.png", handleImage, handleError);
  imgPacmanUp = loadImage("../media/marioUp.png", handleImage, handleError);
  imgPacmanLeft = loadImage("../media/marioLeft.png", handleImage, handleError);
  imgPacmanDown = loadImage("../media/marioDown.png", handleImage, handleError);
  pacSound = loadSound("../media/audio/pacSound.mp3");
}

  function handleError() {
  console.error("Error carregar alguna imatge");
  try {
    throw new ErrorPac(20, "Falta imatge per carregar");
  } catch (error) {
    console.error("Error carregar alguna imatge");
    showError();
  }
}

function handleImage() {
  console.error("Images carregada correctament");
  numberImagesLoaded++;
}

function setup() {
  createCanvas(configGame.WIDTH_CANVAS, configGame.HEIGHT_CANVAS + configGame.EXTRA_SIZE_HEIGHT).parent("sketch-pacman");
  for (let filaActual = 0; filaActual < configGame.ROWS; filaActual++) {
    for (let columnaActual = 0; columnaActual < configGame.COLUMNS; columnaActual++) {
      if (configGame.map[filaActual][columnaActual] === 1) {
        const roca = new gameObject(filaActual, columnaActual);
        arrRocks.push(roca);
      }
      else if (configGame.map[filaActual][columnaActual] === 2) {
        const food = new Food(filaActual, columnaActual);
        arrFood.push(food);
      }
      else if (configGame.map[filaActual][columnaActual] === 3) {
        myPacman = new Pacman(filaActual, columnaActual,pacSound);
      }
      else if (configGame.map[filaActual][columnaActual] === 4) {
        const final = new gameObject(filaActual, columnaActual);
        arrFinal.push(final);
      }
    }
  }
startTimeGame = millis() / 1000;
}

function draw() {
  background(171, 248, 168);
  for (let i = 0; i < arrRocks.length; i++) {
    arrRocks[i].showObject(imgRock);
  }

  for (let i = 0; i < arrFood.length; i++) {
    arrFood[i].showObject(imgFood);
  }

  for (let i = 0; i < arrFinal.length; i++) {
    arrFinal[i].showObject(imgFinal);
  }

  for (let i = 0; i < arrRocks.length; i++) {
    myPacman.testCollideRock ( arrRocks[i]);
  }

  for (let i = 0; i < arrFood.length; i++) {
    let resultTest = myPacman.testCollideFood(arrFood[i]);
    if (resultTest) {
      myPacman.key = true;
      arrFood.splice(i, 1);
    }
  }

  for (let i = 0; i < arrFinal.length; i++) {
    myPacman.testCollideFinal ( arrFinal[i]);
  }

  textSize(20);
  textAlign(CENTER, CENTER);
  timer = parseInt( (millis() /1000) - startTimeGame);

  text("Time: " + timer, 175, configGame.HEIGHT_CANVAS + 50);

  text("Tens el power-up ? " + myPacman.key,175,configGame.HEIGHT_CANVAS + 100 );

  switch(myPacman.directionPacman){
    case 1: //Move right
            myPacman.showObject(imgPacmanRight);
            break;
    case 2: //Move up
            myPacman.showObject(imgPacmanUp);
            break;
    case 3: //Move left
            myPacman.showObject(imgPacmanLeft);
            break
    case 4: //Move down
            myPacman.showObject(imgPacmanDown);
            break;
    default : myPacman.showObject(imgPacman);

  }
  testFinishGame();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    myPacman.moveRight();
  } else if (keyCode === LEFT_ARROW) {
    myPacman.moveLeft();
  } else if (keyCode === UP_ARROW) {
    myPacman.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    myPacman.moveDown();
  } else {
    console.log("Error, tecla no reconeguda");
    let error = new ErrorPac(101, "Press a valid key");
    error.toString();
  }
}

function showError(){
  let errorImage = new ErrorPac(105, "Error 2loading image");
  errorImage.toString();
  const parent = document.getElementById("error-holder");
  const node = document.createElement("media");
  node.setAttribute("src", "./media/tristesa.webp");
  node.setAttribute("alt", "Imatge Error");
  node.setAttribute("width", 300);
  node.setAttribute("height", 300);

  parent.appendChild(node);
  noLoop();
  remove();
}

export function resetGame() {

  arrFood.length = 0;
  arrRocks.length = 0;

  for (let filaActual = 0; filaActual < configGame.ROWS; filaActual++) {
    for (let columnaActual = 0; columnaActual < configGame.COLUMNS; columnaActual++) {
      if (configGame.map[filaActual][columnaActual] === 1) {
        const roca = new gameObject(filaActual, columnaActual);
        arrRocks.push(roca);
      }
      else if (configGame.map[filaActual][columnaActual] === 2) {
        const food = new Food(filaActual, columnaActual);
        arrFood.push(food);
      }
      else if (configGame.map[filaActual][columnaActual] === 3) {
        myPacman = new Pacman(filaActual, columnaActual);
      }
      else if (configGame.map[filaActual][columnaActual] === 4) {
        const final = new gameObject(filaActual, columnaActual);
        arrFinal.push(final);
      }
    }
  }

  myPacman.key = false;
  startTimeGame = millis() / 1000;

  alert("Reiniciant joc...");
}


globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
globalThis.keyPressed = keyPressed;