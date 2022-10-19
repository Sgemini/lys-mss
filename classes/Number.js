class Num extends Number {
  constructor () {
    super()
  }
  sum (...args) {
    this.result = args.reduce((a, b) => a + b, this.result || this.params || 0);
    return this.result;
  }
};

export default Num;