// Declaración de variables, constantes y arrays

const productos = ["Remera", "Pantalón", "Championes", "Gorro"];
const precios = [1500, 2300, 4500, 800];
let carrito = [];

// Funciones

// 1) Mostrar productos disponibles
function mostrarProductos() {
  console.log("Productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1} - ${productos[i]} ($${precios[i]})`);
  }
  console.log("----------------------------------");
}

// 2) Agregar productos al carrito
function agregarAlCarrito() {
  let continuar = true;

  while (continuar) {
    mostrarProductos();
    let opcion = prompt(
      "Ingrese el número del producto que desea comprar o 0 para finalizar:"
    );

    if (opcion === null || opcion === "0") {
      continuar = false;
    } else {
      let i = parseInt(opcion) - 1;

      if (i >= 0 && i < productos.length) {
        carrito.push(i);
        alert("Agregaste " + productos[i] + " al carrito.");
      } else {
        alert("Opción inválida. Intenta de nuevo.");
      }
    }
  }
}

// 3) Calcular total y mostrar resumen
function mostrarResumen() {
  if (carrito.length === 0) {
    alert("No realizaste ninguna compra.");
    return;
  } else {
    let total = 0;
    let resumen = "Resumen de tu compra:\n\n";

    for (let i = 0; i < carrito.length; i++) {
      let prodIndex = carrito[i];
      resumen += productos[prodIndex] + " - $" + precios[prodIndex] + "\n";
      total += precios[prodIndex];
    }

    resumen += "\nTOTAL: $" + total;
    alert(resumen);
    console.log(resumen);
  }
}
// ------------------------------
// Ejecución del simulador
// ------------------------------
alert("Bienvenido al simulador de compras.");
agregarAlCarrito();
mostrarResumen();
