class Num extends Number{
  constructor () {
    // console.log('Num class')
    super()
  }
  sum (...args) {
    // console.log(args, 'args', typeof args)
    // console.log(this, 1)
    // this.queues.push(() => {
    //   this.result = args.reduce((a, b) => a + b, this.result || this.params);
    //   // console.log(this.index, 'index')
    //   this.next();
    // })
    console.log(this.result, 'result', typeof this.result);
    this.result = args.reduce((a, b) => a + b, this.result || this.params);
    // this.result.prototype = this.prototype
    console.log(this.result, 'result', typeof this.result);
    return (this.result);
  }
};