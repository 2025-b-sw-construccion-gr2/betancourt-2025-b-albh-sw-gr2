// logger.js
import chalk from "chalk";

function logConversion(tipo, valorOriginal, valorConvertido, unidadOrigen, unidadDestino) {
  const tipoColor = {
    'C→F': chalk.hex('#FF6F61'),  // rojo suave
    'F→C': chalk.hex('#6B5B95'),  // violeta
    'C→K': chalk.hex('#88B04B'),  // verde oliva
    'K→C': chalk.hex('#FFA500')   // naranja cálido
  };
  const color = tipoColor[tipo] || chalk.white;
  console.log(color(`[${tipo}] ${valorOriginal}°${unidadOrigen} → ${valorConvertido.toFixed(2)}°${unidadDestino}`));
}

function logInfo(mensaje) {
  console.log(chalk.hex('#3498DB')(`[INFO] ${mensaje}`)); // azul calmado
}

function logError(mensaje) {
  console.error(chalk.hex('#E74C3C').bold(`[ERROR] ${mensaje}`)); // rojo vibrante
}

export { logConversion, logInfo, logError };
