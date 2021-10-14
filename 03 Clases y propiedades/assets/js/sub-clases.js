// Propiedades, gets y metodos estaticos

// TODO: Definicion de una clase
class Persona {
  // Para saber cuantas instancias tengo de mi clase
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("Hola soy un metodo estático");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin Frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    //Solo recibe un argumento normalmente
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // METODOS
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

class Heroe extends Persona{
    clan= 'Sin clan';
    constructor(nombre, codigo, frase){
        // Llamar primero las propiedades padre, para luego añadir las propiedades hijo
        super(nombre, codigo, frase);
        this.clan = 'Los avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} , ${this.clan}`);
        super.quienSoy();
    }
}
const spiderman = new Heroe('Peter', 'Spiderman', 'Yo soy tu amigable vecino spiderman');
console.log(spiderman);