function Frame () {
  this.roll = function(x,y) {
    return x + y;
    debugger
  };

  this.outcome = function () {
    // if (this.roll < 10) {
      return `description: open, total: ${this.roll()}`
    // }
  }
};