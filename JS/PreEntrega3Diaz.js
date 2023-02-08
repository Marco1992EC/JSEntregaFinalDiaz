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

  // Agrego un botón a la tarjeta
  const boton = document.createElement("button");
  boton.innerHTML = "OK";
  boton.style.backgroundColor = "blue";
  boton.style.color = "white";
  boton.style.padding = "5px 10px";
  boton.style.borderRadius = "5px";
  tarjeta.appendChild(boton);

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