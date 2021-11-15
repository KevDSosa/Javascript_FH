/**
 * 2C = two  of clubs (trebol)
 * 2D = Two of Diamonds (diamantes)
 * 2H = Two of hearts
 * 2S = Tho of Swords
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador =0,
    puntosComputadora =0;

//Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const cartasJugador = document.querySelector('#jugador-cartas');
const cartasComputadora = document.querySelector('#computador-cartas');
const pJugador = document.querySelectorAll('small');


//Funcion crea una nueva baraja
const crearDeck = () => {
  for (let i = 2; i < 10; i++) {
    for (let tip of tipos) {
      deck.push(i + tip);
    }
  }
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  //console.log(deck);
  deck = _.shuffle(deck);
  //console.log(deck);
  return deck;
}

crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop(); // Remueve el ultimo dato del deck o arreglo
  //console.log(deck);
  //console.log(carta); //carta debe de ser de la baraja*/
  return carta;
};
/*
for(let i=0; i<=100; i++){
  pedirCarta();
}
pedirCarta();*/

// const valorCarta = (carta) => {
//   //const valor = carta[0];
//   const valor = carta.substring(0, carta.length - 1);
//   let puntos = 0;
//   //console.log({ valor }); //2 ) 2,
//   if (isNaN(valor)) {
//     //evalua lo que esta entre parentesis, y dime si es un numero o no
//     console.log("No es un número");
//     puntos = valor === "A" ? 11 : 10;
//   } else {
//     //console.log("Es un número");
//     puntos = valor * 1;
//   }
//   console.log(puntos);
// };
// valorCarta("5C");
// // valorCarta("10C");

const valorCarta = (carta) => {

  const Valor = carta.substring(0, carta.length - 1);
  return ( isNaN( Valor ) ) ? 
          ( Valor === 'A' ) ? 11 : 10
          : Valor * 1;
}


//Turno Computadora

const turnoComputadora = (puntosMinimos) => {
  do{
  
  const carta = pedirCarta()
  puntosComputadora = puntosComputadora + valorCarta(carta);
  pJugador[1].innerText = puntosComputadora

  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('cartas')
  cartasComputadora.append(imgCarta)
  if(puntosMinimos > 21){
    break;
  }
  }while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21) );

  setTimeout(() =>{
    if(puntosComputadora === puntosMinimos){
      alert('Nadie gana :(...')
    }else if(puntosMinimos > 21){
      alert('La computadora gana.')
    }else if(puntosComputadora > 21){
      alert('El jugador Gana.')
    }else{
      alert('Computadora Gana.')
    }
  }, 10);
}


//const valorFinal = valorCarta(pedirCarta());
//console.log({valorFinal});

// ********************************************************
  // if (isNaN(valor)) {
  //   puntos = valor === "A" ? 11 : 10;
  // } else {
  //   puntos = valor * 1;
  // }
  // console.log(puntos);

// EVENTO CLICK


btnPedir.addEventListener('click', () => { //callback
  //console.log('click');

  const carta = pedirCarta()

  puntosJugador = puntosJugador + valorCarta(carta);
  //pJugador.innerText = `${puntosJugador}`;
  pJugador[0].innerText = puntosJugador

  // CARGAR IMAGEN
  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('cartas')
  cartasJugador.append(imgCarta)

  if(puntosJugador > 21){
    console.log('Lo siento mucho, perdistes.');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    
  }else if(puntosJugador === 21){
    console.log('21, Genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    
  }
})

btnDetener.addEventListener('click', ()=>{
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador)
})

btnNuevo.addEventListener('click', ()=> {
  console.clear()

  deck = []
  deck = crearDeck()

  puntosJugador     =0
  puntosComputadora =0

  cartasComputadora.innerHTML = ''
  cartasJugador.innerHTML     = ''

  pJugador[0].innerText = 0
  pJugador[1].innerText = 0

  btnPedir.disabled = false;
  btnDetener.disabled = false;


})