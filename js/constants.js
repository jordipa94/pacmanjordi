export const configGame = {
  ROWS: 10,
  IMAGE_SIZE: 32,
  COLUMNS: 11,
  EXTRA_SIZE_HEIGHT: 300,
  SPEED_PACMAN: 32,
  LIVES_PACMAN: 3,
  currentDifficulty: 'easy', // Dificultat per defecte
  easy: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 2, 0, 0, 4, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 2, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  medium: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 3, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 2, 1],
    [1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  hard: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 2, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  // Funció per obtenir el mapa actual segons la dificultat
  getMap: function() {
    return this[this.currentDifficulty];
  },
  // Funció per canviar la dificultat
  setDifficulty: function(difficulty) {
    this.currentDifficulty = difficulty;
  }
};

configGame.WIDTH_CANVAS = configGame.IMAGE_SIZE * configGame.COLUMNS;
configGame.HEIGHT_CANVAS = configGame.IMAGE_SIZE * configGame.ROWS;