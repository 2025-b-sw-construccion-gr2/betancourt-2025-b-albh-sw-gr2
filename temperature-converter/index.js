// index.js
import readlineSync from "readline-sync";
import * as tempLib from "./lib/temp-lib.js";
import * as logger from "./lib/logger.js";

// Mensaje de bienvenida
logger.logInfo("=== Conversor de Temperaturas ===");

let continuar = true;

while (continuar) {
  console.log("\nOpciones de conversión:");
  console.log("1. Celsius → Fahrenheit");
  console.log("2. Fahrenheit → Celsius");
  console.log("3. Celsius → Kelvin");
  console.log("4. Kelvin → Celsius");
  console.log("0. Salir");

  const opcion = readlineSync.question("Elige una opción (0-4): ");

  try {
    switch (opcion) {
      case "1": {
        const c = readlineSync.questionFloat("Introduce la temperatura en °C: ");
        const f = tempLib.celsiusAFahrenheit(c);
        logger.logConversion('C→F', c, f, 'C', 'F');
        break;
      }
      case "2": {
        const f = readlineSync.questionFloat("Introduce la temperatura en °F: ");
        const c = tempLib.fahrenheitACelsius(f);
        logger.logConversion('F→C', f, c, 'F', 'C');
        break;
      }
      case "3": {
        const c = readlineSync.questionFloat("Introduce la temperatura en °C: ");
        const k = tempLib.celsiusAKelvin(c);
        logger.logConversion('C→K', c, k, 'C', 'K');
        break;
      }
      case "4": {
        const k = readlineSync.questionFloat("Introduce la temperatura en K: ");
        const c = tempLib.kelvinACelsius(k);
        logger.logConversion('K→C', k, c, 'K', 'C');
        break;
      }
      case "0":
        logger.logInfo("¡Gracias por usar el conversor!");
        continuar = false;
        break;
      default:
        logger.logError("Opción inválida. Ingresa un número del 0 al 4.");
    }
  } catch (error) {
    logger.logError(error.message);
  }
}
