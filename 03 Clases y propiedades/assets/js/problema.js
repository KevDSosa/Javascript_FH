const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
fher.imprimir()
const katy = {
    nombre: 'Katy',
    edad: 26,
}

//Esto se debe de crear con la palabra new
function Persona(nombre, edad = 10){
    this.nombre = nombre; 
    this.edad = edad; 
    this.imprimir= function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
const maria = new Persona('Maria', 19)
const melisa = new Persona('Melissa', 20)
maria.imprimir()
melisa.imprimir()
