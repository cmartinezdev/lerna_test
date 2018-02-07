let printer = {};

((printer)=>{
    printer.print = text => console.log(text);
})(printer)

module.exports = printer;