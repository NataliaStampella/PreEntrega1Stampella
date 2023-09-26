
alert("Gracias por visitar TIENDA DE ROPA ONLINE");
let nombreUsuario = prompt("¿Cómo te llamás?");
alert("Bienvenido/a " + nombreUsuario + ". ¡Comencemos!");

function compra() {
  

  let eleccionUsuario = prompt(
    "¿Deseás realizar una compra en nuestra tienda? sí/no"
  );
  if (
    eleccionUsuario === "no" ||
    eleccionUsuario === "No" ||
    eleccionUsuario === "NO"
  ) {
    alert("Te esperamos de nuevo pronto!");
  } else if (
    eleccionUsuario === "sí" ||
    eleccionUsuario === "si" ||
    eleccionUsuario === "SI" ||
    eleccionUsuario === "Si"
  ) {
    promocion();
  } else {
    alert("lo siento, tu respuesta no es válida.");
    compra();
  }
}
function elegir() {
  let modaElegida = prompt(
    "Bien, continuemos. Quisieras comprar \n1 - Moda Femenina  \n2 - Moda Masculina \n3 - Moda sin género "
  );
  switch (modaElegida) {
    case "1":
      let modaFemenina = prompt(
        "Elegiste indumentaria Femenina.\n¿Qué tipo de prendas quisieras comprar? \n1 - TOPS \n2 - PANTALONES \n3 - AMBOS"
      );
      alert('Lo siento, en este momento no contamos con stock')
      break;
    case "2":
      let modaMasculina = prompt(
        "Elegiste indumentaria Masculina.\n¿Qué tipo de prendas quisieras comprar? \n1 - TOPS \n2 - PANTALONES \n3 - AMBOS"
      );
      alert('Lo siento, en este momento no contamos con stock')
      break;
    case "3":
      let modaSinGenero = prompt(
        "Elegiste indumentaria sin género.\n¿Qué tipo de prendas quisieras comprar? \n1 - TOPS \n2 - PANTALONES \n3 - AMBOS"
      );
      alert('Lo siento, en este momento no contamos con stock')
      break;
    default:
      alert("elegiste una opción inválida");
      elegir();
  }
}

function promocion (){
    let codigoDescuento = "ROPA15OFF";
    let codigoValido = true;
    let preguntarDescuento = prompt(
        "¿Tenés un código de descuento para tu compra? \nSI \nNO"
      );
      if (preguntarDescuento === 'SI' ||preguntarDescuento === 'Sí' ||preguntarDescuento === 'sí'|| preguntarDescuento === 'si'){
      let aplicarDescuento = prompt("Genial! Ingresá tu código de descuento");
      while (codigoValido) {
        if (codigoDescuento === aplicarDescuento) {
          alert(
            "Felicitaciones! Vas a tener un 15% de descuento sobre el total de tu compra! Juju!"
          );
          codigoValido = false;
          elegir();
          break;
        } else {
          alert("Lo siento, el ingreso es inválido");
          promocion();
        }
      }
  } else if (
    preguntarDescuento === "no" ||
    preguntarDescuento === "NO" ||
    preguntarDescuento === "No"
  ) {
    elegir();
  }else {
     alert('Tu ingreso es inválido');
     promocion();
  }
}


compra();