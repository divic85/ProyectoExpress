


function saludar(nombre) {
    return  `Hola, ${nombre}` ;  
}

function SaludarHolaMundo(){
    console.log("Hola Mundo");
}

//Se exporta como objeto todas las funciones de el moduo
module.exports = {
saludar : saludar ,
SaludarHolaMundo: SaludarHolaMundo

}
