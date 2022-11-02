let saludo = process.env.NOMBRE || 'Sin nombre'
let ciudad = process.env.CIUDAD || 'Sin ciudad'

console.log(`Me chimba conocerte ${saludo}`);
console.log(`Soy de ${ciudad}`);