const miModulo = (() => {
  'use strict';

  let deck          = [];
  const tipos       = ["C", "D", "H", "S"],
        especiales  = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  //Referencias HTML
  const btnPedir    = document.querySelector("#btnPedir"),
        btnDetener  = document.querySelector("#btnDetener"),
        btnNuevo    = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        pJugador = document.querySelectorAll('small');

  // Esta funcion inicializa el deck
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = []
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    pJugador.forEach( elem => elem.innerText = 0 );
    divCartasJugadores.forEach( elem => elem.innerHTML = '' );
    btnPedir.disabled   = false;
    btnDetener.disabled = false;

  }

  //Funcion crea una nueva baraja
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i < 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }
    return _.shuffle(deck);
  }

  // Esta funcion me permite tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  const valorCarta = (carta) => {
    const Valor = carta.substring(0, carta.length - 1);
    return (isNaN(Valor) )? 
           (Valor === 'A')? 11 : 10
            : Valor * 1;
  }

  //Turno: 0 = primer jugador y ultimo será la computadora
  const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    pJugador[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugadores[turno].append(imgCarta);
  }

  const determinarGanador = () => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(...");
      } else if (puntosMinimos > 21) {
        alert("La computadora gana.");
      } else if (puntosComputadora > 21) {
        alert("El jugador Gana.");
      } else {
        alert("Computadora Gana.");
      }
    }, 100);
  }

  //Turno Computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador();
  };

  // EVENTO CLICK
  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.log("Lo siento mucho, perdistes.");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.log("21, Genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  return{
    nuevoJuego: inicializarJuego
  };
  
})();