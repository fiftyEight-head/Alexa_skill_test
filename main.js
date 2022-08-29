let pastas = [{
    id: 1,
    nombre: 'Espagueti',
    tipo: 'larga'},
{
    id: 2,
    nombre: 'Farfalle',
    tipo: 'corta'},
{
    id: 3,
    nombre: 'Penne',
    tipo: 'corta'},
{
    id: 4,
    nombre: 'Fusilli',
    tipo: 'corta'},
{
    id: 5,
    nombre: 'Macarrones',
    tipo: 'corta'},
{
    id: 6,
    nombre: 'Tagliatelle',
    tipo: 'larga'},
{
    id: 7,
    nombre: 'Fetuccine',
    tipo: 'larga'},
{
    id: 8,
    nombre: 'Ravioli',
    tipo: 'rellena'}, 
{
    id: 9,
    nombre: 'Cappelletti',
    tipo: 'rellena'},
{
    id: 10,
    nombre: 'Tortellini',
    tipo: 'rellena'},
{
    id: 11,
    nombre: 'Lasagna',
    tipo: 'rellena'},
{
    id: 12,
    nombre: 'Cannelloni',
    tipo: 'rellena'
    }];

let rellenos = [{
    id: 1,
    nombre: 'Espinaca',
    tipo: 'ligero'
},
{
    id: 2,
    nombre: 'Carne',
    tipo: 'pesado'
},
{
    id: 3,
    nombre: 'Ricota y Puerro',
    tipo: 'ligero',
},
{
    id: 4,
    nombre: 'Jamon y Queso',
    tipo: 'pesado'
    }];
let salsas = [{
    id: 1,
    nombre: 'Pesto Genoves',
    tipo: 'ligerocinta'
},
{
    id: 2,
    nombre: 'Carbonara',
    tipo: 'espesa'
},
{
    id: 3,
    nombre: 'Funghi',
    tipo: 'verde o blanca'
},
{
    id: 4,
    nombre: 'Amatriciana',
    tipo: 'otras'
},
{
    id: 5,
    nombre: 'Puttanesca',
    tipo: 'espesa'
},
{
    id: 6,
    nombre: 'Pomarola',
    tipo: 'ligero'
},
{
    id: 7,
    nombre: 'Fileto',
    tipo: 'ligero'
    }];


let ligthFoods = [{
    id: 1,
    nombre: 'Ensalada Waldorf',
    tipo: 'liviana'},
    {
    id: 2,
    nombre: 'Brócoli al vapor',
    tipo: 'liviana'},
    {
    id: 3,
    nombre: 'Calabaza asada con brócoli',
    tipo: 'liviana'},
    {
    id: 4,
    nombre: 'Espirales de calabacín con vinagreta',
    tipo: 'liviana'},
    {
    id: 5,
    nombre: 'Rodajas de merluza',
    tipo: 'liviana'},
    {
    id: 6,
    nombre: 'Ensalada de aguacate con salmón',
    tipo: 'liviana'},
    {
    id: 7,
    nombre: 'Ensalada rusa',
    tipo: 'liviana'},
    {
    id: 8,
    nombre: 'Gazpacho',
    tipo: 'liviana'
    }];

let heavyFoods = [{
    id: 1,
    nombre: 'Pizza Napolitana',
    tipo: 'pesada'},
    {
    id: 2,
    nombre: 'Cerdo a la naranja',
    tipo: 'pesada'},
    {
    id: 3,
    nombre: 'Solomillo de ternera',
    tipo: 'pesada'},
    {
    id: 4,
    nombre: 'Huevos Esco',
    tipo: 'pesada'},
    {
    id: 5,
    nombre: 'Strogonoff de pollo',
    tipo: 'pesada'},
    {
    id: 6,
    nombre: 'Filet mignon en salsa de champiñones',
    tipo: 'pesada'
    },
    {
    id: 7,
    nombre: pastaComposer,
    tipo: 'pesada'
    }]; 




let postres = [{
    id: 1,
    nombre: 'Ensalada de Frutas',
    tipo: 'liviano',
},
{
    id: 2,
    nombre: 'Crème brûlée ',
    tipo: 'pesado',
},
{
    id: 3,
    nombre: 'Lemon curd ',
    tipo: 'pesado'
},
{
    id: 4,
    nombre: 'Angel food',
    tipo: 'pesado',
},
{
    id: 5,
    nombre: 'Manzanas Asadas',
    tipo: 'liviano',
 
},
{
    id: 6,
    nombre: 'Compota de Ciruelas',
    tipo: 'liviano',
 
},
{
    id: 7,
    nombre: 'Espuma de Frutas',
    tipo: 'liviano',
 
},
{
    id: 8,
    nombre: 'Mousse de Chocolate',
    tipo: 'pesado',
 
},
{
    id: 9,
    nombre: 'Lemon Pie',
    tipo: 'pesado',
 
},
{
    id: 10,
    nombre: 'Flan Tradicional',
    tipo: 'pesado',
 
}];

function getRandomElement(array){
    let index = Math.floor(Math.random()*array.length);
    let result = array[index];
    return result;
}



function pastaComposer(){
   let pasta = getRandomElement(pastas);
   let relleno = getRandomElement(rellenos);
   let salsa = getRandomElement(salsas);
   let result;

    if (pasta.tipo == 'rellena'){
        result = `${pasta['nombre']} de ${relleno['nombre']} con salsa ${salsa['nombre']}`;
    } 
    else {
    result = `${pasta['nombre']} con salsa ${salsa['nombre']}`;
    }
   return result;
}

function ligthMenuComposer(){
    let  comida = getRandomElement(ligthFoods);
    let  postre = getRandomElement(postres);

        while (postre.tipo === 'pesado'){
            console.log('while loop: ',postre);
            postre = getRandomElement(postres);
            console.log('while loop: ',postre);}
        
    const result = `Menu Ligth  ${comida['nombre']} y de postre ${postre['nombre']}.`;
    return result;
}

function heavyMenuComposer(){
    let comida = getRandomElement(heavyFoods);
    let postre = getRandomElement(postres);
    console.log('fuera del :  ', comida);

    if (comida['nombre'] == pastaComposer){
        console.log('dentro del if: ', comida);
        comida.nombre = pastaComposer();
    }

        while (postre.tipo === 'liviano'){
            console.log('while loop: ',postre);
            postre = getRandomElement(postres);
            console.log('while loop: ',postre);
        }
    
    const result = `Menu: ${comida['nombre']} y ${postre['nombre']} de postre.`;
    return result;
}



















const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);
document.body.style.backgroundColor = 'black';
wrapper.style.width = `${innerWidth/1.5}px`;
wrapper.style.height = `${innerHeight}px`;
const btnPasta = document.createElement('button');
const btnMenuL = document.createElement('button');
const btnMenuH = document.createElement('button');

btnPasta.innerText = 'Funcion PASTA COMPOSER'
btnPasta.setAttribute('id', 'btn1');
btnMenuL.setAttribute('id', 'btn2');
btnMenuH.setAttribute('id', 'btn3');
btnMenuH.innerText = 'Funcion crear MENU COMUN'
btnMenuL.innerText = 'Funcion crear MENU LIGTH'
wrapper.appendChild(btnPasta);
wrapper.appendChild(btnMenuL);
wrapper.appendChild(btnMenuH);
btnPasta.addEventListener('click', ()=> {
    var parrafo = document.createElement('p')
        parrafo.innerText = pastaComposer()
        wrapper.appendChild(parrafo)});
btnMenuL.addEventListener('click', ()=> {
    var parrafo = document.createElement('p')
        parrafo.innerText = ligthMenuComposer()
        wrapper.appendChild(parrafo)});
btnMenuH.addEventListener('click', ()=> {
    var parrafo = document.createElement('p')
        parrafo.innerText = heavyMenuComposer()
        wrapper.appendChild(parrafo)});