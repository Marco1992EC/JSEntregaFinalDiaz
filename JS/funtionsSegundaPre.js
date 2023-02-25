
//es un simulador de aprobación de notas de 4 estudiantes, que si tienen una nota mayor o igual a 70 entonces aprueban, caso contrario reprueban en el que se muestra una barra de búsqueda para ingresar el nombre de uno de los 4 estudaintes habilitados

//utilizo una clase constructora que cuenta con un constructor que inicializa un array con los estudiantes, y tres métodos: "saludarUsuario" "buscarEstudiante" y "promedioMateria. uso array estudiantes
class NotasEstudiantes {
    constructor() {
      this.estudiantes = [
        {nombre: "Carlos", nota: 60, materia: "Matemáticas"},
        {nombre: "Julia", nota: 70, materia: "Física"},
        {nombre: "Pedro", nota: 60, materia: "Física"},
        {nombre: "Olivia", nota: 65, materia: "Programación"},
      ];
    }
    saludarUsuario() {
      let usuario = prompt("Por favor ingresa tu nombre");
      alert(`Hola ${usuario}, bienvenido, te mostramos el resumen de las notas`);
    }
    buscarEstudiante(nombreEstudiante, materiaEstudiante) {
      let estudianteEncontrado = false;
      for (let i = 0; i < this.estudiantes.length; i = i + 1) {
        let estudiante = this.estudiantes[i];
        if (estudiante.nombre === nombreEstudiante && estudiante.materia === materiaEstudiante) {
          console.log(`La nota del estudiante ${estudiante.nombre} en la materia ${estudiante.materia} es ${estudiante.nota}`);
          if (estudiante.nota >= 70) {
            console.log(`${estudiante.nombre} ha aprobado el curso en la materia de ${estudiante.materia}`);
          } else {
            console.log(`${estudiante.nombre} ha reprobado el curso en la materia de ${estudiante.materia}`);
          }
          estudianteEncontrado = true;
          break;
        }
      }
      if (!estudianteEncontrado) {
        console.log(`No se ha encontrado al estudiante ${nombreEstudiante} en la materia ${materiaEstudiante}`);
      }
    }
    //si la materia ingresada para conocer el promedio no existe deberá mostrar un mensaje de error en consola
    promedioMateria(materia) {
      let materiaExiste = false;
      for (let i = 0; i < this.estudiantes.length; i++) {
        if (this.estudiantes[i].materia === materia) {
          materiaExiste = true;
          break;
        }
      }
      if (materiaExiste) {
        let estudiantesEncontrados = this.buscarPorMateria(materia);
        let sumaNotas = 0;
        for (let i = 0; i < estudiantesEncontrados.length; i++) {
          sumaNotas += estudiantesEncontrados[i].nota;
        }
        let promedio = sumaNotas / estudiantesEncontrados.length;
        console.log(`El promedio en la materia ${materia} es ${promedio}`);
      } else {
        console.log(`La materia ${materia} no se encuentra en nuestros registros`);
      }
    }
    //uso un método de búsqueda por materia para saber que estudiantes constan en una materia, ej. hay 2 estudiantes que cursan la materia de Física, uso array estudiantesEncontrados 
    buscarPorMateria(materia) {
      let estudiantesEncontrados = [];
      for (let i = 0; i < this.estudiantes.length; i = i + 1) {
        let estudiante = this.estudiantes[i];
        if (estudiante.materia === materia) {
        estudiantesEncontrados.push(estudiante);
        }
        }
        return estudiantesEncontrados;
        }
        }
        //el ejemplo de promedio lo hice solo para la materia de Física, más adelante quiero que se filtre por estudiante y por materia con lo que se va aprendiendo en el curso
        let notas = new NotasEstudiantes();
        notas.saludarUsuario();
        notas.buscarEstudiante(prompt("Ingresa el nombre del estudiante:"), prompt("Ingresa la materia del estudiante:"));
        let estudiantesEncontrados = notas.buscarPorMateria(prompt("Ingresa la materia que deseas buscar:"));
        console.log(estudiantesEncontrados);
        let materiaPromedio = prompt("Ingresa la materia que deseas buscar el promedio:");
        notas.promedioMateria(materiaPromedio);