//Se importa de forma desestructurada es decir solo la funcion que requerimos
//const  {saludando }  = require("./saludo");
//console.log( saludando("Marlon Diaz ") )

//Se importa todo el objeto 
const  saludo  = require('./saludos');

console.log( saludo.saludar('Marlon Diaz ') )
console.log( saludo.SaludarHolaMundo() );