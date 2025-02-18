export const configGame = {
  ROWS: 10,
  IMAGE_SIZE: 32,
  COLUMNS: 11,
  EXTRA_SIZE_HEIGHT: 300,
  SPEED_PACMAN: 32,
  LIVES_PACMAN: 3,
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 4, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
};

// Calcular WIDTH_CANVAS
configGame.WIDTH_CANVAS = configGame.IMAGE_SIZE * configGame.COLUMNS;
configGame.HEIGHT_CANVAS = configGame.IMAGE_SIZE * configGame.ROWS;

console.log(configGame.WIDTH_CANVAS);