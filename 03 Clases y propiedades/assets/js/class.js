

// TODO: Definicion de una clase
class Persona{
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin Frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida){ //Solo recibe un argumento normalmente
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    // METODOS
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter', 'Spiderman', 'Yo soy tu amigable vecino spiderman');
const ironman = new Persona('Tony', 'Ironman', 'Yo soy ironman');

spiderman.quienSoy();
ironman.miFrase();

spiderman.setComidaFavorita = 'Pastel de cereza de la tía May'
spiderman.nemesis = 'Duende verde';                         

console.log(spiderman.getComidaFavorita);
console.log(spiderman);