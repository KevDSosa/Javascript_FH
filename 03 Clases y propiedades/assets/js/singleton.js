class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "Sin nombre") {
    
    // if(!!Singleton.instancia){
    //     return Singleton.instancia;
    // }
    Singleton.instancia = this;
    this.nombre = nombre;
    
  }
}

const instancia1 = new Singleton("Dr. Strange");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Hulk");

console.log(`Nombre en la instancia: ${instancia1.nombre}`);
console.log(`Nombre en la instancia: ${instancia2.nombre}`);
console.log(`Nombre en la instancia: ${instancia3.nombre}`);