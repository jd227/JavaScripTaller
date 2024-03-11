function contarMultiplos() {
    var cantidad = parseInt(document.getElementById('numInput').value);
    var multiplosDeTres = 0;
    var imparesHTML = '';

    for (var i = 0; i < cantidad; i++) {
        var numero = parseInt(prompt('Ingrese el número ' + (i + 1) + ':'));
        if (numero % 3 == 0) {
            multiplosDeTres++;
        }
        if (numero % 2 !== 0) {
            imparesHTML += numero + ' ';
        }
          
    }
document.getElementById('impares').textContent = 'Números impares: ' + imparesHTML ;
alert('La cantidad de números múltiplos de 3 es: ' + multiplosDeTres);

}

// --------------------------------------------------------------------------------------------

function contarPositivosNegativos() {
    var cantidad = parseInt(document.getElementById('numeros').value);
    var positivos = 0;
    var negativos = 0;

    for (let i = 0; i < cantidad; i++) {
      let numero = parseInt(prompt('Ingrese el número ' + (i + 1) + ':'));
      if (numero > 0) {
        positivos++;
      } else if (numero < 0) {
        negativos++;
      }
    }

    const resultadoElement = document.getElementById('resultado');

    const mensajeResultado = `
      <p>La cantidad de números positivos es: ${positivos}</p>
      <p>La cantidad de números negativos es: ${negativos}</p>
    `;
    resultadoElement.innerHTML = mensajeResultado;
}

// --------------------------------------------------------------------------------------------

// Calcula la suma y el promedio de los números enteros del 1 al 100
function calcularSumaYPromedio() {
  var numInicial = parseInt(document.getElementById("numInicio").value);
  var numFin = parseInt(document.getElementById("numFin").value);
  let suma = 0;
  let cantidadNumeros = numFin - numInicial + 1;
  for (let i = numInicial; i <= numFin; i++) {
    suma += i;
  }
  let promedio = suma / cantidadNumeros;

  document.getElementById("suma").textContent = "La suma de " + numInicial + " hasta " + numFin + " es: " + suma;

  document.getElementById("promedio").textContent = "El promedio de " + suma + " es: " + promedio;
}
// -------------------------------------------------------------------------------------------


const calificaciones = [];
    const formulario = document.getElementById("formulario");
    const maximaCalificacionSpan = document.getElementById("maximaCalificacion");
    const promedioCalificacionesSpan = document.getElementById("promedioCalificaciones");
    const aprobadosSpan = document.getElementById("aprobados");
    const reprobadosSpan = document.getElementById("reprobados");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const calificacion = parseFloat(document.getElementById("calificacion").value);

      // Añadir la calificación al array
      calificaciones.push({ nombre, calificacion });

      // Calcular y mostrar resultados
      calcularResultados();
    });

function calcularResultados() {
  // Calcular la calificación más alta
  const maximaCalificacion = calificaciones.reduce((max, estudiante) => Math.max(max, estudiante.calificacion), -Infinity);
  maximaCalificacionSpan.textContent = maximaCalificacion.toFixed(1);

  // Calcular el promedio
  const sumaCalificaciones = calificaciones.reduce((suma, estudiante) => suma + estudiante.calificacion, 0);
  const promedioCalificaciones = sumaCalificaciones / calificaciones.length || 0; // Evitar dividir por cero
  promedioCalificacionesSpan.textContent = promedioCalificaciones.toFixed(1);

  // Contar aprobados y reprobados
  const aprobados = calificaciones.filter(estudiante => estudiante.calificacion >= 3).length;
  const reprobados = calificaciones.filter(estudiante => estudiante.calificacion < 3).length;
  aprobadosSpan.textContent = aprobados;
  reprobadosSpan.textContent = reprobados;

  // Mostrar mensaje a cada estudiante
  calificaciones.forEach(estudiante => {
    if (estudiante.calificacion >= 3) {
      alert(`${estudiante.nombre}, ¡felicidades! Has aprobado la materia de Matemáticas.`);
    } else {
      alert(`${estudiante.nombre}, lamentamos informarte que has reprobado la materia de Matemáticas.`);
    }
  });
}

// --------------------------------------------------------------------------------------------

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function sumarFibonacci() {
  let numFibonacci = parseInt(document.getElementById("numFibonacci").value);
  let serieFibonacci = fibonacci(numFibonacci);
  let suma = 0;
  for (let i = 0; i <= numFibonacci; i++) {
    suma += serieFibonacci[i];
  }
  document.getElementById("resultado").textContent = "La suma de los números de la serie de Fibonacci hasta el " + numFibonacci + " es: " + suma;
}

// ----------------------------------------------------------------------------------------------

function esPrimo(numero) {
  if (numero <= 1 || !Number.isInteger(numero)) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function verificarPrimos() {
  let cantidadp6 = parseInt(document.getElementById("cantidadp6").value);
  let resultadosp6 = document.getElementById("resultadosp6");
  resultadosp6.innerHTML = ""; // Limpiar resultados anteriores

  for (let i = 0; i < cantidadp6; i++) {
    let numerop6 = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    let esPrimoMsgp6 = esPrimo(numerop6) ? "es primo" : "no es primo";
    let resultadop6 = document.createElement("p");
    resultadop6.textContent = "El número " + numerop6 + " " + esPrimoMsgp6;
    resultadosp6.appendChild(resultadop6);
  }
}

// ----------------------------------------------------------------------------------------
function informarEdades() {
  let cantidadp7 = parseInt(document.getElementById("cantidadp7").value);
  let mayoresDe25p7 = 0;
  let menoresDeEdadp7 = 0;
  let sumaEdadesp7 = 0;

  for (let i = 0; i < cantidadp7; i++) {
    let edadp7 = parseInt(prompt("Ingrese la edad de la persona " + (i + 1) + ":"));
    if (edadp7 > 25) {
      mayoresDe25p7++;
    } else if (edadp7 < 18) {
      menoresDeEdadp7++;
    }
    sumaEdadesp7 += edadp7;
  }

  let porcentajeMenoresp7 = (menoresDeEdadp7 / cantidadp7) * 100;
  let edadPromediop7 = sumaEdadesp7 / cantidadp7;

  let resultadop7 = document.getElementById("resultadop7");
  resultadop7.innerHTML = "";
  resultadop7.innerHTML += "<p>Personas mayores de 25 años: " + mayoresDe25p7 + "</p>";
  resultadop7.innerHTML += "<p>Personas menores de edad: " + menoresDeEdadp7 + "</p>";
  resultadop7.innerHTML += "<p>Porcentaje de personas menores de edad: " + porcentajeMenoresp7 + "%</p>";
  resultadop7.innerHTML += "<p>Edad promedio: " + edadPromediop7.toFixed(2) + "</p>";
}
// ----------------------------------------------------------------------------------------

function sumarNumerosPares() {
  var numIniciop8 = parseInt(document.getElementById("numIniciop8").value);
  var numFinp8 = parseInt(document.getElementById("numFinp8").value);
  let sumap8 = 0;
  for (let i = numIniciop8; i <= numFinp8; i++) {
    if (i % 2 == 0) { // Verificar si el número es par
      sumap8 += i;
    }
  }
  document.getElementById("resultadop8").textContent = "La suma de los números pares entre " + numIniciop8 + " y " + numFinp8 + " es: " + sumap8;
}

// -----------------------------------------------------------------------------------------

function analizarNumerosp9() {
  let cantidadp9 = parseInt(document.getElementById("cantidadp9").value);
  let numerosp9 = [];

  // Leer los números ingresados por el usuario
  for (let i = 0; i < cantidadp9; i++) {
    let numerop9 = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    numerosp9.push(numerop9);
  }

  // Encontrar el mayor número y contar cuántas veces aparece
  let mayorp9 = numerosp9[0];
  let vecesMayorp9 = 0;
  for (let i = 0; i < cantidadp9; i++) {
    if (numerosp9[i] > mayorp9) {
      mayorp9 = numerosp9[i];
      vecesMayorp9 = 1;
    } else if (numerosp9[i] === mayorp9) {
      vecesMayorp9++;
    }
  }

  // Calcular el porcentaje de números impares
  let imparesp9 = 0;
  for (let i = 0; i < cantidadp9; i++) {
    if (numerosp9[i] % 2 !== 0) {
      imparesp9++;
    }
  }
  let porcentajeImparesp9 = (imparesp9 / cantidadp9) * 100;

  // Verificar si hay algún número que sea múltiplo de 7
  let multiploDe7p9 = numerosp9.some(numerop9 => numerop9 % 7 === 0);

  // Mostrar los resultados
  let resultadop9 = document.getElementById("resultadop9");
  resultadop9.innerHTML = "";
  resultadop9.innerHTML += "<p>El mayor número es: " + mayorp9 + ", y fue encontrado " + vecesMayorp9 + " veces.</p>";
  resultadop9.innerHTML += "<p>El porcentaje de números impares es: " + porcentajeImparesp9.toFixed(2) + "%.</p>";
  resultadop9.innerHTML += multiploDe7p9 ? "<p>Se encontró al menos un múltiplo de 7.</p>" : "<p>No se encontró ningún múltiplo de 7.</p>";
}

// -----------------------------------------------------------------------------------------

function calcularVentasp10() {
  const totalBoletosp10 = 200;
  const rutaSeleccionadap10 = document.getElementById("rutap10").value.toLowerCase();

  let boletosVendidosp10;

  switch (rutaSeleccionadap10) {
    case "medellín - miami":
      boletosVendidosp10 = totalBoletosp10 * 0.4;
      break;
    case "medellín - bogotá - roma":
      boletosVendidosp10 = totalBoletosp10 * 0.2;
      break;
    case "medellín - panamá - los ángeles":
      boletosVendidosp10 = totalBoletosp10 * 0.15;
      break;
    case "medellín - bogotá - madrid":
      boletosVendidosp10 = totalBoletosp10 * 0.1;
      break;
    case "medellín - miami - toronto":
      boletosVendidosp10 = totalBoletosp10 * 0.1;
      break;
    case "medellín - buenos aires":
      boletosVendidosp10 = totalBoletosp10 * 0.05;
      break;
    default:
      boletosVendidosp10 = "Ruta no encontrada";
  }

  let resultadosDivp10 = document.getElementById("resultadosp10");
  resultadosDivp10.innerHTML = "";
  resultadosDivp10.innerHTML += "<p>Boletos vendidos para la ruta " + rutaSeleccionadap10 + ": " + boletosVendidosp10 + "</p>";
}

// ------------------------------------------------------------------------------------------

let personasp11 = [];

    function agregarPersonap11() {
      const generop11 = document.getElementById("generop11").value;
      const edadp11 = parseInt(document.getElementById("edadp11").value);

      personasp11.push({ generop11, edadp11 });

      // Limpiar los campos del formulario
      document.getElementById("generop11").selectedIndex = 0;
      document.getElementById("edadp11").value = "";
    }

    function calcularEstadisticasp11() {
      const totalEntrevistasp11 = personasp11.length;
      let totalEdadMujeresp11 = 0;
      let totalEdadHombresp11 = 0;
      let mujeresEntrevistadasp11 = 0;
      let hombresEntrevistadosp11 = 0;

      personasp11.forEach(personap11 => {
        if (personap11['generop11'] == 'mujer') {
          totalEdadMujeresp11 += personap11['edadp11'];
          mujeresEntrevistadasp11++;
        } else if (personap11['generop11'] == 'hombre') {
          totalEdadHombresp11 += personap11['edadp11'];
          hombresEntrevistadosp11++;
        }
      });

      const promedioEdadGrupop11 = (totalEdadMujeresp11 + totalEdadHombresp11) / totalEntrevistasp11;

      let resultadosDivp11 = document.getElementById("resultadosp11");
      resultadosDivp11.innerHTML = "";
      resultadosDivp11.innerHTML += "<p>Mujeres entrevistadas: " + mujeresEntrevistadasp11 + "</p>";
      resultadosDivp11.innerHTML += "<p>Hombres entrevistados: " + hombresEntrevistadosp11 + "</p>";
      resultadosDivp11.innerHTML += "<p>Suma total de la edad de las mujeres: " + totalEdadMujeresp11 + "</p>";
      resultadosDivp11.innerHTML += "<p>Suma total de la edad de los hombres: " + totalEdadHombresp11 + "</p>";
      resultadosDivp11.innerHTML += "<p>Promedio de edad del grupo: " + promedioEdadGrupop11.toFixed(2) + "</p>";
    }

// --------------------------------------------------------------------------------------

let experimentosp12 = [];

function agregarExperimentop12() {
  const numeroExperimentosp12 = parseInt(document.getElementById("numeroExperimentosp12").value);

  let experimentosDivp12 = document.getElementById("experimentosp12");
  experimentosDivp12.innerHTML = "";

  for (let i = 1; i <= numeroExperimentosp12; i++) {
    experimentosDivp12.innerHTML += "<h3>Experimento " + i + "</h3>";
    experimentosDivp12.innerHTML += "<label for='velocidadInicialp12" + i + "'>Velocidad inicial:</label>";
    experimentosDivp12.innerHTML += "<input type='number' id='velocidadInicialp12" + i + "' min='0' required>";
    experimentosDivp12.innerHTML += "<br>";

    experimentosDivp12.innerHTML += "<label for='velocidadFinalp12" + i + "'>Velocidad final:</label>";
    experimentosDivp12.innerHTML += "<input type='number' id='velocidadFinalp12" + i + "' min='0' required>";
    experimentosDivp12.innerHTML += "<br>";

    experimentosDivp12.innerHTML += "<label for='distanciap12" + i + "'>Distancia recorrida:</label>";
    experimentosDivp12.innerHTML += "<input type='number' id='distanciap12" + i + "' min='0' required>";
    experimentosDivp12.innerHTML += "<br><br>";
  }
}

function calcularEstadisticasp12() {
  experimentosp12 = [];

  const numeroExperimentosp12 = parseInt(document.getElementById("numeroExperimentosp12").value);

  for (let i = 1; i <= numeroExperimentosp12; i++) {
    const velocidadInicialp12 = parseFloat(document.getElementById("velocidadInicialp12" + i).value);
    const velocidadFinalp12 = parseFloat(document.getElementById("velocidadFinalp12" + i).value);
    const distanciap12 = parseFloat(document.getElementById("distanciap12" + i).value);

    const aceleracionp12 = (velocidadFinalp12 - velocidadInicialp12) / distanciap12;

    experimentosp12.push(aceleracionp12);
  }

  let resultadosDivp12 = document.getElementById("resultadosp12");
  resultadosDivp12.innerHTML = "";

  const numAceleradosp12 = experimentosp12.filter(aceleracionp12 => aceleracionp12 > 0).length;
  const numDesaceleradosp12 = experimentosp12.filter(aceleracionp12 => aceleracionp12 < 0).length;
  const numSinAceleracionp12 = experimentosp12.filter(aceleracionp12 => aceleracionp12 === 0).length;

  const promedioAceleracionp12 = calcularPromediop12(experimentosp12.filter(aceleracionp12 => aceleracionp12 > 0));
  const promedioDesaceleracionp12 = calcularPromediop12(experimentosp12.filter(aceleracionp12 => aceleracionp12 < 0));

  resultadosDivp12.innerHTML += "<p>Números de móviles acelerados: " + numAceleradosp12 + "</p>";
  resultadosDivp12.innerHTML += "<p>Numero de móviles desacelerados: " + numDesaceleradosp12 + "</p>";
  resultadosDivp12.innerHTML += "<p>Numero de móviles sin aceleración: " + numSinAceleracionp12 + "</p>";
  resultadosDivp12.innerHTML += "<p>Valor promedio de la aceleración: " + promedioAceleracionp12.toFixed(2) + "</p>";
  resultadosDivp12.innerHTML += "<p>Valor promedio de la desaceleración: " + promedioDesaceleracionp12.toFixed(2) + "</p>";
}

function calcularPromediop12(arr) {
  if (arr.length === 0) return 0;

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

// ------------------------------------------------------------------------------------

let totalMatriculasp13 = 0;

  function liquidarMatriculap13() {
    const carnetp13 = document.getElementById("carnetp13").value;
    const valorCreditop13 = parseFloat(document.getElementById("valorCreditop13").value);
    const numCreditosp13 = parseInt(document.getElementById("numCreditosp13").value);

    const cargoFijop13 = 12500;
    let cargoVariablep13 = valorCreditop13 * numCreditosp13;
    if (cargoVariablep13 < 180000) {
      cargoVariablep13 = 180000;
    }

    const totalMatriculap13 = cargoFijop13 + cargoVariablep13;

    totalMatriculasp13 += totalMatriculap13;

    const resultadosDivp13 = document.getElementById("resultadosMatriculap13");
    resultadosDivp13.innerHTML += "<h2>Detalle de la Matrícula</h2>";
    resultadosDivp13.innerHTML += "<p>Número de Carnet: " + carnetp13 + "</p>";
    resultadosDivp13.innerHTML += "<p>Cargo Fijo: $" + cargoFijop13.toFixed(2) + "</p>";
    resultadosDivp13.innerHTML += "<p>Cargo Variable: $" + cargoVariablep13.toFixed(2) + "</p>";
    resultadosDivp13.innerHTML += "<p>Total a Pagar: $" + totalMatriculap13.toFixed(2) + "</p>";
    resultadosDivp13.innerHTML += "<hr>";

    document.getElementById("formularioMatricula").reset();
  }

  window.onload = function() {
    document.getElementById("formularioMatricula").reset();
  }

  window.onbeforeunload = function() {
    return "¿Estás seguro que quieres salir?";
  }

  window.onunload = function() {
    alert("El total de matrículas calculadas es: $" + totalMatriculasp13.toFixed(2));
  }
  
// ----------------------------------------------------------------------------------------

let totalRetencionSegSocialp14 = 0;
    let totalSalarioBasicop14 = 0;
    let numMujeresp14 = 0;
    let numTrabajadoresp14 = 0;

    function calcularSalarioNetop14() {
      const nombrep14 = document.getElementById("nombrep14").value;
      const codigop14 = document.getElementById("codigop14").value;
      const estadoCivilp14 = document.getElementById("estadoCivilp14").value;
      const sexop14 = document.getElementById("sexop14").value;
      const valorHorap14 = parseFloat(document.getElementById("valorHorap14").value);
      const horasTrabajadasp14 = parseFloat(document.getElementById("horasTrabajadasp14").value);

      const salarioBasicop14 = valorHorap14 * horasTrabajadasp14;
      let retencionSegSocialp14 = 0;

      if (salarioBasicop14 >= 750000) {
        retencionSegSocialp14 = salarioBasicop14 * 0.03; // Retención del 3% para seguridad social
        totalRetencionSegSocialp14 += retencionSegSocialp14;
        totalSalarioBasicop14 += salarioBasicop14;
      } else {
        retencionSegSocialp14 = salarioBasicop14 * 0.02; // Retención del 2% para seguridad social
        totalRetencionSegSocialp14 += retencionSegSocialp14;
        totalSalarioBasicop14 += salarioBasicop14;
      }

      const salarioNetop14 = salarioBasicop14 - retencionSegSocialp14;

      document.getElementById("resultadosSalario").innerHTML += "<h2>Detalle del Trabajador</h2>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Nombre: " + nombrep14 + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Código: " + codigop14 + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Estado Civil: " + estadoCivilp14 + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Sexo: " + sexop14 + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Salario Básico: $" + salarioBasicop14.toFixed(2) + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Retención Seguridad Social: $" + retencionSegSocialp14.toFixed(2) + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<p>Salario Neto: $" + salarioNetop14.toFixed(2) + "</p>";
      document.getElementById("resultadosSalario").innerHTML += "<hr>";

      if (sexop14.toLowerCase() === "mujer") {
        numMujeresp14++;
      }

      numTrabajadoresp14++;

      document.getElementById("formularioTrabajadores").reset();
    }

    window.onload = function() {
      document.getElementById("formularioTrabajadores").reset();
    }

    window.onbeforeunload = function() {
      return "¿Estás seguro que quieres salir?";
    }

    window.onunload = function() {
      const porcentajeMujeresp14 = (numMujeresp14 / numTrabajadoresp14) * 100;
      const promedioSalarioBasicop14 = totalSalarioBasicop14 / numTrabajadoresp14;

      alert("Porcentaje de Mujeres: " + porcentajeMujeresp14.toFixed(2) + "%\n" +
            "Promedio de Salario Básico: $" + promedioSalarioBasicop14.toFixed(2) + "\n" +
            "Total de Retención para Seguridad Social: $" + totalRetencionSegSocialp14.toFixed(2));
    } 

// ---------------------------------------------------------------------------------------

let numerosp15 = [];

  function agregarNumerosp15() {
    const cantidadNumerosp15 = parseInt(document.getElementById("cantidadNumerosp15").value);

    let numerosInputsDivp15 = document.getElementById("numerosInputsp15");
    numerosInputsDivp15.innerHTML = "";

    for (let i = 1; i <= cantidadNumerosp15; i++) {
      numerosInputsDivp15.innerHTML += "<label for='numero" + i + "'>Número " + i + ":</label>";
      numerosInputsDivp15.innerHTML += "<input type='number' id='numero" + i + "' min='0' required>";
      numerosInputsDivp15.innerHTML += "<br>";
    }
  }

  function calcularEstadisticasp15() {
    numerosp15 = [];

    const cantidadNumerosp15 = parseInt(document.getElementById("cantidadNumerosp15").value);
    let sumaNoMultiplos = 0;
    let multiplosDe5 = [];

    for (let i = 1; i <= cantidadNumerosp15; i++) {
      const numeroActualp15 = parseFloat(document.getElementById("numero" + i).value);
      numerosp15.push(numeroActualp15);

      if (numeroActualp15 % 5 === 0) {
        multiplosDe5.push(numeroActualp15);
      } else {
        sumaNoMultiplos += numeroActualp15;
      }
    }

    const promedioNumerosp15 = calcularPromediop15(numerosp15);
    const porcentajePositivosp15 = calcularPorcentajePositivosp15(numerosp15);

    let resultadosp15 = document.getElementById("resultadosp15");
    resultadosp15.innerHTML = "";
    resultadosp15.innerHTML += "<h2>Estadísticas</h2>";
    resultadosp15.innerHTML += "<p>Números múltiplos de 5: " + multiplosDe5.join(", ") + "</p>";
    resultadosp15.innerHTML += "<p>Suma de los números no múltiplos de 5: " + sumaNoMultiplos + "</p>";
    resultadosp15.innerHTML += "<p>Promedio de todos los números: " + promedioNumerosp15.toFixed(2) + "</p>";
    resultadosp15.innerHTML += "<p>Porcentaje de números positivos: " + porcentajePositivosp15.toFixed(2) + "%</p>";
  }

  function calcularPromediop15(arr) {
    if (arr.length === 0) return 0;

    const suma = arr.reduce((acc, curr) => acc + curr, 0);
    return suma / arr.length;
  }

  function calcularPorcentajePositivosp15(arr) {
    if (arr.length === 0) return 0;

    const positivos = arr.filter(numero => numero > 0).length;
    return (positivos / arr.length) * 100;
  }

// ------------------------------------------------------------------------------------------

let totalSalariop16 = 0;
    let totalHorasExtrasp16 = 0;
    let numObrerosp16 = 0;

    function calcularSalario() {
        const nombrep16 = document.getElementById("nombrep16").value;
        const codigop16 = document.getElementById("codigop16").value;
        const horasTrabajadasp16 = parseInt(document.getElementById("horasTrabajadasp16").value);


        let salarioSemanal = 0;

        if (horasTrabajadasp16 <= 40) {
            salarioSemanal = horasTrabajadasp16 * 500;
        } else {
            salarioSemanal = (40 * 500) + ((horasTrabajadasp16 - 40) * 700);
            totalHorasExtrasp16 += (horasTrabajadasp16 - 40);
        }

        totalSalariop16 += salarioSemanal;
        numObrerosp16++;

        const resultadosDiv = document.getElementById("resultadosSalariop16");
        resultadosDiv.innerHTML += "<h2>Detalle del Obrero</h2>";
        resultadosDiv.innerHTML += "<p>Nombre: " + nombrep16 + "</p>";
        resultadosDiv.innerHTML += "<p>Código: " + codigop16 + "</p>";
        resultadosDiv.innerHTML += "<p>Horas Trabajadas: " + horasTrabajadasp16 + "</p>";
        resultadosDiv.innerHTML += "<p>Salario Semanal: $" + salarioSemanal.toFixed(2) + "</p>";
        resultadosDiv.innerHTML += "<hr>";

        document.getElementById("formularioSalario").reset();
    }

    window.onload = function() {
        document.getElementById("formularioSalario").reset();
    }

    window.onbeforeunload = function() {
        return "¿Estás seguro que quieres salir?";
    }

    window.onunload = function() {
        const promedioHorasExtrasp16 = totalHorasExtrasp16 / numObrerosp16;

        alert("Total de salarios pagados: $" + totalSalariop16.toFixed(2) + "\n" +
              "Valor promedio de horas extras pagadas: " + promedioHorasExtrasp16.toFixed(2));
    }