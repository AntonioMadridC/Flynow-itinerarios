/* LISTA DE OPCIONES PARA VUELOS */

/* CONSTS DE LOS ELEMENTOS RELEVANTES DEL HTML */
const selectOrigen = document.getElementById("selectOrigen")
const selectDestino = document.getElementById("selectDestino")
const dateIda = document.getElementById("dateIda")
const dateLlegada = document.getElementById("dateLlegada")
const fechaIda = document.getElementById("fechaIda")
const fechaLlegada = document.getElementById("fechaLlegada")
const ciudadOrigen = document.getElementById("ciudadOrigen")
const ciudadDestino = document.getElementById("ciudadDestino")
const escala = document.getElementById("escala")

/* FUNCIONES */

//funcion para detectar escala, devuelve true o false
function hayEscala(origen,destino) {
    if (origen == "Chicago, USA" && destino == "Venecia, IT") {
        return true
    } else if (origen == "Boston, USA" && destino == "Paris, FR") {
        return true
    } else {
        return false
    }
}

//funcion que se activa cuando se cambia una ciudad. para usar en eventlistener de ciudad

function cambioCiudad() {
    const selectedDestinoText = selectDestino.options[selectDestino.selectedIndex].text;
    const selectedOrigenText = selectOrigen.options[selectOrigen.selectedIndex].text;

    //cambiar las ciudades en Itinerario- obtener solo lo que viene antes de la coma
    const [ciudad1] = selectedOrigenText.split(',')
    ciudadOrigen.innerHTML = ciudad1
    const [ciudad2] = selectedDestinoText.split(',')
    ciudadDestino.innerHTML = ciudad2

    if (hayEscala(selectedOrigenText,selectedDestinoText) === true) {
        escala.innerHTML = "¡ojo! tu vuelo tiene escala"
    } else {
        escala.innerHTML = "¡tu vuelo no tiene escala!"
    }
}

/* CAPTURAR  CAMBIOS EN OPCIONES DE DESTINO*/

selectOrigen.addEventListener('change', cambioCiudad);

selectDestino.addEventListener('change', cambioCiudad);

/* CAPTURAR  CAMBIOS EN OPCIONES DE FECHA E INSERTARLO A ITINERARIO*/

dateIda.addEventListener('change', () => {
    const selectedDate = dateIda.value;
    fechaIda.innerHTML = selectedDate
    
    console.log(`Selected date: ${selectedDate}`);
  });

  dateLlegada.addEventListener('change', () => {
    const selectedDate = dateLlegada.value;
    fechaLlegada.innerHTML = selectedDate

    console.log(`Selected date: ${selectedDate}`);
  });