class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = 
    setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    this.getMinutes.padStart(2,"0");
  }
  stopClick() {
    clearInterval(this.currentTimeId);
    this.currentTimeId = 0;
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
