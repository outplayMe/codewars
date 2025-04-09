// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

class Block {
  constructor([width, length, height]) {
    this.width = width;
    this.length = length;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.height * this.length * this.width;
  }

  getSurfaceArea() {
    return (
      2 *
      (this.height * this.length +
        this.length * this.width +
        this.height * this.width)
    );
  }
}
