//es un simulador de aprobación de notas de 4 estudiantes, que si tienen una nota mayor o igual a 70 entonces aprueban, caso contrario reprueban
//utilizo un función
function saludarUsuario () {
    let usuario = prompt ("Por favor ingresa tu nombre")
    alert(`Hola ${usuario}, bienvenido, te mostramos el resumen de las notas`);
}
saludarUsuario ();
//declaro mis variables con la palabra reservada let
let notaCarlos = 60;
let notaJulia = 70;
let notaPedro = 60;
let notaOlivia = 65;
//utilizo condicional e incluyo alertas
if (notaCarlos >= 70) {
  console.log("Carlos Aprobado");
  alert ("El estudiante Carlos ha aprobado el curso")
} else {
  console.log("Carlos Reprobado");
  alert ("Carlos ha reprobado el curso")
}
if (notaJulia>= 70) {
  console.log("Julia Aprobada");
  alert ("Julia ha aprobado el curso")
} else {
  console.log("Julia Roprobada");
  alert ("Julia ha reprobado el curso")
}
if (notaPedro >= 70) {
  console.log("Pedro Aprobado");
  alert ("Pedro ha aprobado el curso")
} else {
  console.log("Pedro Reprobado");
  alert ("Pedro ha reprobado el curso")
}
if (notaOlivia >= 70) {
  console.log("Olivia Aprobada");
  alert ("Olivia ha aprobado el curso")
} else {
  console.log("Olivia Reprobada");
  alert ("Olivia ha reprobado el curso")
}
//utilizo un ciclo
let notasPrimerGrado = [80, 70, 60, 65];
for (let i = 0; i < notasPrimerGrado.length; i++) {
  let grado = notasPrimerGrado[i];
  if (grado >= 70) {
    console.log("Estudiante " + (i + 1) + " Aprueba");
  } else {
    console.log("Estudiante " + (i + 1) + " Reprueba");
  }
}
//utilizo un prompt con una doble concatenación para saber si el valor ingresado es o no vacío
let nombreEstudiante = prompt ("Ingresa el nombre del estudiante");
let gradoEstudiante = prompt ("Ingresa el grado del estudiante");
if ((nombreEstudiante !="") && (gradoEstudiante !="")) {
    alert ("Nombre:" +nombreEstudiante +"\n Grado:" +gradoEstudiante);
}else {
    alert ("Error: Ingresar nombre y grado del estudiante");
}

