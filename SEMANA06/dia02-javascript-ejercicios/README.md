# javascript Ejercicios
*https://2021.adventjs.dev/challenges/01

### RETO01 CONTANTO OVEJAS

/*Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.*/

```js

export default function contarOvejas(ovejas) {
 
  return ovejas.filter(oveja => {
    
    const esRojo = oveja.color.toLowerCase() === 'rojo';
   
    const nombre = oveja.name.toLowerCase().replace(/\s/g, '');
    const contieneN = nombre.includes('n');
    const contieneA = nombre.includes('a');
    
    
    return esRojo && contieneN && contieneA;
  });
}


const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];

const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);
