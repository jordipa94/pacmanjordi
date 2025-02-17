import { IMAGE_SIZE } from "../sketch.js";

export class gameObject {

  constructor(row, column){
    this.rowNumber = row;
    this.columnObjectNumber = column;
    this.coordXPixels =  column * IMAGE_SIZE;
    this.coordYPixels =  row * IMAGE_SIZE;
  }

  showObject(img) {
    if( this.coordXPixels == null || this.coordYPixels == null){
      this.coordXPixels = this.rowNumber * IMAGE_SIZE;
      this.coordYPixels = this.columnObjectNumber * IMAGE_SIZE;
    }

    image(img, this.coordXPixels, this.coordYPixels);
  }

}