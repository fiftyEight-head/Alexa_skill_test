//javaScript//
//////////////

//Array con tipos de pasta
let pastas = [
  {
    id: 1,
    nombre: "Espagueti",
    tipo: "larga",
  },
  {
    id: 2,
    nombre: "Farfalle",
    tipo: "corta",
  },
  {
    id: 3,
    nombre: "Penne",
    tipo: "corta",
  },
  {
    id: 4,
    nombre: "Fusilli",
    tipo: "corta",
  },
  {
    id: 5,
    nombre: "Macarrones",
    tipo: "corta",
  },
  {
    id: 6,
    nombre: "Tagliatelle",
    tipo: "larga",
  },
  {
    id: 7,
    nombre: "Fetuccine",
    tipo: "larga",
  },
  {
    id: 8,
    nombre: "Ravioli",
    tipo: "rellena",
  },
  {
    id: 9,
    nombre: "Cappelletti",
    tipo: "rellena",
  },
  {
    id: 10,
    nombre: "Tortellini",
    tipo: "rellena",
  },
  {
    id: 11,
    nombre: "Lasagna",
    tipo: "rellena",
  },
  {
    id: 12,
    nombre: "Cannelloni",
    tipo: "rellena",
  },
];
//Array con rellenos de pasta rellena
let rellenos = [
  {
    id: 1,
    nombre: "Espinaca",
    tipo: "ligero",
  },
  {
    id: 2,
    nombre: "Carne",
    tipo: "pesado",
  },
  {
    id: 3,
    nombre: "Ricota y Puerro",
    tipo: "ligero",
  },
  {
    id: 4,
    nombre: "Jamon y Queso",
    tipo: "pesado",
  },
];
//Array con salsas para pasta
let salsas = [
  {
    id: 1,
    nombre: "Pesto Genoves",
    tipo: "ligerocinta",
  },
  {
    id: 2,
    nombre: "Carbonara",
    tipo: "espesa",
  },
  {
    id: 3,
    nombre: "Funghi",
    tipo: "verde o blanca",
  },
  {
    id: 4,
    nombre: "Amatriciana",
    tipo: "otras",
  },
  {
    id: 5,
    nombre: "Puttanesca",
    tipo: "espesa",
  },
  {
    id: 6,
    nombre: "Pomarola",
    tipo: "ligero",
  },
  {
    id: 7,
    nombre: "Fileto",
    tipo: "ligero",
  },
];
//Array comidas livianas.
let ligthFoods = [
  {
    id: 1,
    nombre: "Ensalada Waldorf",
    tipo: "liviana",
  },
  {
    id: 2,
    nombre: "Brócoli al vapor",
    tipo: "liviana",
  },
  {
    id: 3,
    nombre: "Calabaza asada con brócoli",
    tipo: "liviana",
  },
  {
    id: 4,
    nombre: "Espirales de calabacín con vinagreta",
    tipo: "liviana",
  },
  {
    id: 5,
    nombre: "Rodajas de merluza",
    tipo: "liviana",
  },
  {
    id: 6,
    nombre: "Ensalada de aguacate con salmón",
    tipo: "liviana",
  },
  {
    id: 7,
    nombre: "Ensalada rusa",
    tipo: "liviana",
  },
  {
    id: 8,
    nombre: "Gazpacho",
    tipo: "liviana",
  },
];
//Array comidas pesadas.
let heavyFoods = [
  {
    id: 1,
    nombre: "Pizza Napolitana",
    tipo: "pesada",
  },
  {
    id: 2,
    nombre: "Cerdo a la naranja",
    tipo: "pesada",
  },
  {
    id: 3,
    nombre: "Solomillo de ternera",
    tipo: "pesada",
  },
  {
    id: 4,
    nombre: "Huevos Esco",
    tipo: "pesada",
  },
  {
    id: 5,
    nombre: "Strogonoff de pollo",
    tipo: "pesada",
  },
  {
    id: 6,
    nombre: "Filet mignon en salsa de champiñones",
    tipo: "pesada",
  },
];
//Array con postres pesados y livianos.
let postres = [
  {
    id: 1,
    nombre: "Ensalada de Frutas",
    tipo: "liviano",
  },
  {
    id: 2,
    nombre: "Crème brûlée ",
    tipo: "pesado",
  },
  {
    id: 3,
    nombre: "Lemon curd ",
    tipo: "pesado",
  },
  {
    id: 4,
    nombre: "Angel food",
    tipo: "pesado",
  },
  {
    id: 5,
    nombre: "Manzanas Asadas",
    tipo: "liviano",
  },
  {
    id: 6,
    nombre: "Compota de Ciruelas",
    tipo: "liviano",
  },
  {
    id: 7,
    nombre: "Espuma de Frutas",
    tipo: "liviano",
  },
  {
    id: 8,
    nombre: "Mousse de Chocolate",
    tipo: "pesado",
  },
  {
    id: 9,
    nombre: "Lemon Pie",
    tipo: "pesado",
  },
  {
    id: 10,
    nombre: "Flan Tradicional",
    tipo: "pesado",
  },
];

//funcion que devuelve un elemento random de un array.
function getRandomElement(array) {
  let index = Math.floor(Math.random() * array.length);
  let result = array[index];
  return result;
}

//combina un tipo de pasta con un tipo de salsa.
//si la pasta es rellena, le asigna un relleno.
//devuelve objeto.
function pastaComposer() {
  let pasta = getRandomElement(pastas);
  let relleno = getRandomElement(rellenos);
  let salsa = getRandomElement(salsas);
  let result;

  if (pasta["tipo"] == "rellena") {
    result = {
      id: "",
      nombre: `${pasta["nombre"]} de ${relleno["nombre"]} con salsa ${salsa["nombre"]}`,
      tipo: "pesada",
    };
    idToElement(result, heavyFoods);
    return result;
  } else {
    result = {
      id: "",
      nombre: `${pasta["nombre"]} con salsa ${salsa["nombre"]}`,
      tipo: "pesada",
    };
    idToElement(result, heavyFoods);
    return result;
  }
}

var lastestResult = "";
var nombresTotal = [];

//esta funcion le coloca un ID al objeto en cuestion basandose en un array.
function idToElement(element, array) {
  const lastId = array.length + 1;
  element.id = lastId;
}
//empuja elementos a arrays, si no hay repeticiones de nombre.
function pushElementToArray(element, array) {
  nombresTotal = getNamesArray(array);
  let condition = checkForNames(`${element.nombre}`, nombresTotal);
  if (!condition) {
    array.push(element);
  } else {
  }
}
//Devuelve un array con la propiedad 'nombre',
//de un array de objetos, para futuras comparaciones.
function getNamesArray(array) {
  let nombres = array.map(({ nombre }) => nombre);
  return nombres;
}
//revisa si existe un string 'name' en un array.
function checkForNames(name, array) {
  const result = array.includes(name);
  return result;
}
//agregar objetos a un array sin repeticiones, con fuerza bruta.
function loopeadora() {
  let counter = 0;
  let comida;
  nombresTotal = getNamesArray(heavyFoods);

  while (counter < 1600) {
    nombresTotal = getNamesArray(heavyFoods);
    comida = pastaComposer();
    let nombreActual = comida.nombre;
    let condition = checkForNames(nombreActual, nombresTotal);
    if (!condition) {
      pushElementToArray(comida, heavyFoods);
      console.log(`%ccoloque ${nombreActual} en heavyfoods`, "color: green;");
    } else {
      console.log(`%c${nombreActual} ya existe en heavyfoods`, "color: red;");
    }

    counter++;
    console.log("iteracion n0: ", counter);
  }
}
//funcion selectora de postres pesados.
function randomPostrePesado() {
  let result;
  let postre = getRandomElement(postres);

  while (postre.tipo === "liviano") {
    postre = getRandomElement(postres);
  }
  result = postre.nombre;
  return result;
}
//funcion selectora de postres livianos.
function randomPostreLiviano() {
  let result;
  let postre = selectLightProduct(postres);
  result = postre.nombre;
  return result;
}
//funcion selectora de Productos livianos
//selecciona al azar productos de array,
//hasta obtener uno con la propiedad 'liviano'.
function selectLightProduct(array) {
  let producto = getRandomElement(array);
  let result = "";
  if (producto.tipo == "liviano") {
    return (result = producto);
  } else {
    while (producto.tipo !== "liviano") {
      producto = getRandomElement(array);
    }
    return (result = producto);
  }
}
//selecciona elementos de array con propiedad 'pesado'
function selectHeavyProduct(array) {
  let producto = getRandomElement(array);
  let result = "";
  if (producto.tipo == "pesado") {
    return (result = producto);
  } else {
    while (producto.tipo !== "pesado") {
      producto = getRandomElement(array);
    }
    return (result = producto);
  }
}
//devuelve un Menu Light en un string.
function ligthMenuComposer() {
  let comida = getRandomElement(ligthFoods);
  let postre = selectLightProduct(postres);

  const result = `Menu Ligth  ${comida["nombre"]} y de postre ${postre["nombre"]}.`;

  return result;
}

//devuelve un Menu Comun en un string de caracteres.
var lastestResult = "";
function heavyMenuComposer() {
  let comida = getRandomElement(heavyFoods);
  let postre = getRandomElement(postres);
  let result;
  result = `Menu: ${comida["nombre"]} y ${postre["nombre"]} de postre.`;

  return result;
}

//HTML ELEMENTS//
/////////////////

//crear divs HTML.
const wrapper = document.createElement("div");
wrapper.className = "wrapper";
const menuDiv = document.createElement("div");
const buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("id", "buttonsDiv");
menuDiv.setAttribute("id", "menuDiv");
document.body.appendChild(buttonsDiv);
document.body.appendChild(wrapper);
wrapper.append(menuDiv);

//estilos CSS para DIV's.
document.body.style.backgroundColor = 'rgb(255,250,240)';
wrapper.style.width = `${innerWidth / 1.11}px`;
wrapper.style.height = `${innerHeight / 1.33}px`;

//crear botones HTML.
const btnLooper = document.createElement("button");
const btnMenuL = document.createElement("button");
const btnMenuH = document.createElement("button");
const btnTest = document.createElement('button');

btnLooper.setAttribute("id", "btn1");
btnMenuL.setAttribute("id", "btn2");
btnMenuH.setAttribute("id", "btn3");
btnLooper.className = 'btn btn-outline-primary'
btnMenuL.className = 'btn btn-outline-primary'
btnMenuH.className = 'btn btn-outline-primary'

btnLooper.innerText = "Fill with PASTA";
btnMenuH.innerText = "Funcion crear MENU COMUN";
btnMenuL.innerText = "Funcion crear MENU LIGTH";
buttonsDiv.appendChild(btnLooper);
buttonsDiv.appendChild(btnMenuL);
buttonsDiv.appendChild(btnMenuH);

//EventHandlers de botones.
btnLooper.addEventListener("click", () => {
  loopeadora();
});

btnMenuL.addEventListener("click", () => {
  var parrafo = document.createElement("p");
  parrafo.innerText = ligthMenuComposer();
  menuDiv.appendChild(parrafo);
  parrafo.style.color = 'rgb(0,255,100)'
});

btnMenuH.addEventListener("click", () => {
  var parrafo = document.createElement("p");
  parrafo.innerHTML = heavyMenuComposer();
  menuDiv.appendChild(parrafo);
  parrafo.style.color = "rgb(225,0,122)";
});
