function mostrarNumerosLoteria() {
  var numero1 = parseInt(document.getElementById('numero1').value);
  var numero2 = parseInt(document.getElementById('numero2').value);
  
  var contador = 1;

  while (contador <= 50) {
    if (contador === numero1 || contador === numero2) {
      console.log(contador + " ¡Lotería!");
    } else {
      console.log(contador);
    }
    contador++;
  }
}
