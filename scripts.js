const arrayLetras = [
  "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
  "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
];

function botonEnviar() {
  if (document.querySelector(".formulario-dni").checkValidity()) {
    const letraDni = document.getElementById("letra").value.toUpperCase();
    const mensajeLetra = document.querySelector(".mostrar-letra");
    mensajeLetra.textContent = letraDni;
    mensajeLetra.classList.remove("off");
    const mensajeValidarLetra = document.querySelector(".validar-letra");
    mensajeValidarLetra.classList.add("off");
    alert("Los datos se han eviado correctamente.");
  } else {
    if (!document.getElementById("numero").checkValidity()) {
      alert("El formato no es correcto. El número de DNI debe incluir ocho dígitos.");
    } if (!document.getElementById("letra").checkValidity()) {
      alert("El formato no es correcto. La letra del DNI debe incluir una letra.");
    } document.querySelector(".formulario-dni").reset();
  }
}

function botonValidar() {
  if (document.querySelector(".formulario-dni").checkValidity()) {
    const mensajeLetra = document.querySelector(".mostrar-letra");
    mensajeLetra.classList.add("off");
    const letraDni = document.getElementById("letra").value.toUpperCase();
    const numeroDni = document.getElementById("numero").value;
    const mensajeValidarLetra = document.querySelector(".validar-letra");
    mensajeValidarLetra.textContent = letraDni;
    mensajeValidarLetra.classList.remove("off");

    for (const letra of arrayLetras) {
      if (letra === letraDni) {
        const resto = numeroDni % arrayLetras.length;
        if (arrayLetras[resto] === letraDni) {
          mensajeValidarLetra.classList.add("verde");
          alert("La letra es correcta.");
        } else {
          mensajeValidarLetra.classList.add("rojo");
          alert("La letra es incorrecta.");
          document.querySelector(".formulario-dni").reset();
        }
      }
    }
  } else {
    alert("El formato no es correcto.");
    document.querySelector(".formulario-dni").reset();
  }
}
