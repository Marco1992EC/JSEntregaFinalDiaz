//accedo al documento a través de tags y me devuelve un HTMLCollections
let etiquetap = document.getElementsByTagName ("p")
console.log (etiquetap)
//manipulo como un array para que me muestre el texto de cada parrafo que este dentro de la etiqueta "p"
for (let nodo of etiquetap){
  console.log (nodo.innerText)
} 
//manipulo mediante un id
let tituloDOM = document.getElementById ("titulo")
console.log(tituloDOM)

//queryselector por id
let navitem = document.querySelectorAll(".nav-item")
console.log (navitem)

let Estudiantes = document.querySelectorAll(".Estudiantes")
console.log (Estudiantes)
//modifico el texto de mi título de inicio
tituloDOM.innerText = "Bienvenido/a"

let liEtiqueta = document.querySelectorAll("li")
console.log(liEtiqueta)

//filtro de búsqueda de estduiante entre las 4 opciones

const buscarBtn = document.querySelector("#buscar-btn");
buscarBtn.addEventListener("click", buscarEstudiante);
function buscarEstudiante() {
  const buscarInput = document.querySelector("#buscar");
  const buscarTexto = buscarInput.value;
  const listaEstudiantes = document.querySelector("#Estudiantes");
  listaEstudiantes.innerHTML = "";
  estudiantes.forEach(estudiante => {
    if (estudiante.nombre.toLowerCase().includes(buscarTexto.toLowerCase())) {
      const tarjeta = crearTarjeta(estudiante.nombre, estudiante.materia, estudiante.nota);
      listaEstudiantes.appendChild(tarjeta);
    }
  });
}
//creo cards con DOM
// Obtengo la lista de estudiantes
const listaEstudiantes = document.querySelector("#Estudiantes");

// Creo una función para crear una tarjeta para cada estudiante
function crearTarjeta(nombre, materia, nota) {
  // Creo un elemento div para la tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.style.backgroundColor = "lightgray";
  tarjeta.style.padding = "10px";
  tarjeta.style.margin = "10px";
  tarjeta.style.width = "200px";

  // Creo un elemento p para el nombre del estudiante
  const nombreEstudiante = document.createElement("p");
  nombreEstudiante.innerHTML = `Nombre del estudiante: ${nombre}`;
  tarjeta.appendChild(nombreEstudiante);

  // Creo un elemento p para la materia
  const materiaEstudiante = document.createElement("p");
  materiaEstudiante.innerHTML = `Materia: ${materia}`;
  tarjeta.appendChild(materiaEstudiante);

  // Creo un elemento p para la nota
  const notaEstudiante = document.createElement("p");
  notaEstudiante.innerHTML = `Nota: ${nota}`;
  tarjeta.appendChild(notaEstudiante);

 // Agrego un botón a la tarjeta y uso sweet alert en el botón
const boton = document.createElement("button");
boton.innerHTML = "OK";
boton.style.backgroundColor = "blue";
boton.style.color = "white";
boton.style.padding = "5px 10px";
boton.style.borderRadius = "5px";
tarjeta.appendChild(boton);

boton.addEventListener("click", function() {
  Swal.fire({
    title: 'Clase 2023',
    text: 'Este fue el resumen de las notas',
    icon: 'success',
    confirmButtonText: 'Entendido'
  })
});
  // Devolver la tarjeta creada
  return tarjeta;
}
// Creo las tarjetas para cada estudiante
const estudiantes = [
  { nombre: "Carlos", materia: "Matemáticas", nota: 60 },
  { nombre: "Julia", materia: "Física", nota: 70 },
  { nombre: "Pedro", materia: "Física", nota: 60 },
  { nombre: "Olivia", materia: "Programación", nota: 65 }
];
estudiantes.forEach(estudiante => {
  const tarjeta = crearTarjeta(
    estudiante.nombre,
    estudiante.materia,
    estudiante.nota
    );
    // Añado la tarjeta al contenedor
    listaEstudiantes.appendChild(tarjeta);
    });
  //Uso Storage 
//local
localStorage.setItem ("RinconOruga","Clase2023")
let RinconOruga = localStorage.getItem("RinconOruga")
console.log(RinconOruga)

//session storage
sessionStorage.setItem("NumeroAlumnos", "4")
let NumeroAlumnos = sessionStorage.getItem("NumeroAlumnos")
console.log(NumeroAlumnos)
//JSON
// Almaceno el objeto JSON en el almacenamiento local
let misestudiantes = [
  { nombre: "Carlos", materia: "Matemáticas", nota: 60 },
  { nombre: "Julia", materia: "Física", nota: 70 },
  { nombre: "Pedro", materia: "Física", nota: 60 },
  { nombre: "Olivia", materia: "Programación", nota: 65 }
];

localStorage.setItem("misestudiantes", JSON.stringify(estudiantes));

// Recupero el objeto JSON y lo parseo
let getEstudiante = JSON.parse(localStorage.getItem("misestudiantes"));

// Accedo a los valores individuales dentro del objeto JSON
getEstudiante.forEach(estudiante => {
  console.log(`Nombre del estudiante: ${estudiante.nombre}`);
  console.log(`Materia: ${estudiante.materia}`);
  console.log(`Nota: ${estudiante.nota}`);
});

// botón de buscar
const botonBuscar = document.querySelector("#buscar");

// evento de click al botón de buscar
botonBuscar.addEventListener("click", function() {
  // se obtiene el valor del campo de búsqueda
  const nombreBuscado = document.querySelector("#nombreBuscado").value;
  let estudianteEncontrado = false;
  estudiantes.forEach(estudiante => {
    if (estudiante.nombre === nombreBuscado) {
      // Mostrar la tarjeta del estudiante
      listaEstudiantes.innerHTML = "";
      const tarjeta = crearTarjeta(
        estudiante.nombre,
        estudiante.materia,
        estudiante.nota
      );
      listaEstudiantes.appendChild(tarjeta);
      estudianteEncontrado = true;
    }
  });
    });
      // Mostrar mensaje si el estudiante no fue encontrado usando sweet alert de tipo error
function buscarEstudiante() {
  const buscarInput = document.querySelector("#buscar");
  const buscarTexto = buscarInput.value;
  const listaEstudiantes = document.querySelector("#Estudiantes");
  listaEstudiantes.innerHTML = "";
  const estudianteBuscado = estudiantes.find(estudiante => estudiante.nombre.toLowerCase() === buscarTexto.toLowerCase());
  if (estudianteBuscado) {
    const tarjeta = crearTarjeta(estudianteBuscado.nombre, estudianteBuscado.materia, estudianteBuscado.nota);
    listaEstudiantes.appendChild(tarjeta);
  } else {
    Swal.fire({
      title: 'Estudiante no encontrado',
      text: 'El estudiante no fue encontrado',
      icon: 'error',
      confirmButtonText: 'Entendido'
    });
  }
}
function buscarEstudiante() {
  const buscarInput = document.querySelector("#buscar");
  const buscarTexto = buscarInput.value;

  // Verificar si el valor es null
  if (!buscarTexto) {
    Swal.fire({
      title: "Error",
      text: "Ingresa un nombre para continuar",
      icon: "error",
      confirmButtonText: "Entendido",
    });
    return;
  }
  const listaEstudiantes = document.querySelector("#Estudiantes");
  listaEstudiantes.innerHTML = "";
  
  estudiantes.forEach(estudiante => {
    if (estudiante.nombre.toLowerCase().includes(buscarTexto.toLowerCase())) {
      const tarjeta = crearTarjeta(estudiante.nombre, estudiante.materia, estudiante.nota);
      listaEstudiantes.appendChild(tarjeta);
    }
  });
}
//uso promesas
const eventoPromesa = (respuesta) => {
  return new Promise((resolve, reject) => {
    if (respuesta === true) {
      resolve("se cumplió la promesa")
    } else {
      reject("No se cumplió la promesa")
    } 
  })
}
eventoPromesa(true)
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))


// API usada de páises
const url = "https://restcountries.com/v2/name/ecuador";

// GET para obtener información sobre el país Ecuador
fetch(url)
// respuesta en formato JSON
  .then(response => response.json()) 
  .then(data => {
    // se accede a la información específica sobre Ecuador en el objeto de respuesta
    const nombre = data[0].name;
    const capital = data[0].capital;
    const poblacion = data[0].population;
    const moneda = data[0].currencies[0].name;
    const bandera = data[0].flag;

    // Uso la información mostrar en consola
    console.log(`Nombre: ${nombre}`);
    console.log(`Capital: ${capital}`);
    console.log(`Población: ${poblacion}`);
    console.log(`Moneda: ${moneda}`);
    console.log(`Bandera: ${bandera}`);
  })