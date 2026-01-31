// Biblioteca para conversiones de temperatura

export function celsiusAFahrenheit(c) {
  return (c * 9/5) + 32;
}

export function fahrenheitACelsius(f) {
  return (f - 32) * 5/9;
}

export function celsiusAKelvin(c) {
  return c + 273.15;
}

export function kelvinACelsius(k) {
  return k - 273.15;
}
