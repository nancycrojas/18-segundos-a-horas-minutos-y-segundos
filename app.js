//Segundos a horas, minutos y segundos

//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

const seg = prompt("Por favor ingresa la cantidad de segundos");

const horas = parseInt(seg / 60 / 60); 
const minutos = parseInt(seg / 60 % 60); 
const segundos = parseInt(seg % 60); 
alert(`Los ${seg} segundos equivalen a ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);



