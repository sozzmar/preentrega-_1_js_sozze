// Constantes
const pesoMinimo = 30; // en kg
const pesoMaximo = 200; // en kg
const alturaMinima = 1.0; // en metros
const alturaMaxima = 2.5; // en metros

// Entrada de datos
let peso = parseFloat(prompt("Introduce tu peso en kg:"));
let altura = parseFloat(prompt("Introduce tu altura en metros:"));

// Procesamiento de datos
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 24.9) {
        return "Normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

// Array para almacenar los resultados
let resultados = [];

// Ciclo de iteración para repetir el cálculo si se desea
let respuesta;
do {
    // Validación de entrada
    if (peso < pesoMinimo || peso > pesoMaximo || altura < alturaMinima || altura > alturaMaxima) {
        alert("Los valores introducidos no son válidos.");
    } else {
        // Mostrar los resultados
        let imc = calcularIMC(peso, altura);
        let clasificacion = clasificarIMC(imc);
        alert(`Tu IMC es ${imc.toFixed(2)}, lo que se clasifica como ${clasificacion}.`);
        
        // Almacenar los resultados en el array
        resultados.push({
            peso: peso,
            altura: altura,
            imc: imc,
            clasificacion: clasificacion
        });
    }

    respuesta = confirm("¿Deseas realizar otro cálculo?");
    if (respuesta) {
        peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos"));
        altura = parseFloat(prompt("Por favor, ingresa tu altura en metros"));
    }
} while (respuesta);

// Mostrar todos los resultados almacenados en la consola
console.log(resultados);