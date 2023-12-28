/** Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
  **/
export default function listGifts(letter) {
    const giftCounts = {};  // Objeto para mantener el conteo de los regalos

    // Separamos los regalos por espacios
    const giftsArray = letter.split(' ');

    // Iteramos sobre los regalos
    giftsArray.forEach(gift => {
        // Eliminamos los espacios en blanco al principio y final de cada regalo
        const trimmedGift = gift.trim();

        // Verificamos si el regalo no está vacío y no está tachado
        if (trimmedGift && !trimmedGift.startsWith('_')) {
            // Incrementamos el conteo para el regalo en el objeto de conteo
            if(giftCounts[trimmedGift]) {
                giftCounts[trimmedGift]++;
            } else {
                giftCounts[trimmedGift] = 1;
            }
        }
    });

    // Devolvemos el objeto con los conteos
    return giftCounts;
}

// Ejemplo de uso:
// Para evitar errores, asegúrate de que esta parte no esté en el mismo archivo si estás usando módulos ES6, ya que el código de ejemplo y la exportación no pueden estar juntos.

//const carta = 'bici coche balón _playstation bici coche peluche';
//const regalos = listGifts(carta);
//console.log(regalos);








