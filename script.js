const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function encriptar(stringEncriptador) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptador = stringEncriptador.toLowerCase();

  for(let i=0; i < matrizCodigo.length;i++){
    if(stringEncriptador.includes(matrizCodigo[i][0])){
      stringEncriptador=stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptador;
}

function btnEncriptar() {
  const textoEncriptado = encriptar(textarea.value)
  mensaje.value = textoEncriptado;
  textarea.value="";
  mensaje.style.backgroundImage = "none";
}


function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length;i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return stringDesencriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textarea.value)
  mensaje.value = textoEncriptado;
  textarea.value="";
  mensaje.style.backgroundImage = "none";
}

function copyToClipboard() {
  let texto = document.getElementById('texto');

  texto.select();
  texto.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

copyToClipboard();
