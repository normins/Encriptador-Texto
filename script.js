/* Obtener acceso a los campos */
let campoTexto =  document.querySelector("#campo-texto");
let campoTextoConvertido =  document.querySelector("#texto-convertido");
let sinMensaje =  document.querySelector(".sinmensaje");
let conMensaje =  document.querySelector(".conmensaje");

/* Matriz para la conversión*/
let matriz_conversion=[
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
let matriz_conversion_may=[
    ["E"],
    ["I"],
    ["A"],
    ["O"],
    ["U"],
];
/* Al comenzar se solicita el ingreso del texto */
sinMensaje.style.display = "block";
conMensaje.style.display = "none";
/* Limpiar los campos de texto cuando  corresponda*/
campoTexto.addEventListener("click", limpiar);

/* Preparar el botón Copiar */
let  btnCopiar = document.querySelector('#boton-copiar');
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector("#texto-convertido").value;
    navigator.clipboard.writeText(contenido).then(()=>{
        alert('El texto ha sido copiado!')
    },()=>{
        alert('No se pudo copiar el texto')
    });
});



function encriptar(){
    /* Obtener el texto a convertir */
    let texto = campoTexto.value;
    /* Guardar el texto convertido a devolver */
    let textoConvertido = texto;

    /* Validar que haya texto para encriptar */
    if (texto.length == 0){
        alert("Por favor, ingrese el texto a encriptar");
        document.getElementsByClassName("sinmensaje")[0].style.display = "block"
        let aviso = document.getElementsByClassName("dosfrases")[0];
        aviso.innerHTML = red;
    } else {
            if (validar(texto) == false){
                alert("Por favor, sólo ingrese letras minúsculas y sin acento");
                limpiar();
                texto = "";
            }else{
            /*  Recorrer cada uno de los caracteres de la matriz de conversión.
                Si existe en el texto, se reemplazarán todas sus apariciones
                con el valor que corresponde según la matriz. */
                for (let i=0; i<matriz_conversion.length ; i++){
                    if (texto.includes(matriz_conversion[i][0])){
                        texto=texto.replaceAll(matriz_conversion[i][0],matriz_conversion[i][1]);
                    }
                }  
                sinMensaje.style.display = "none";
                conMensaje.style.display = "block";
                campoTextoConvertido.innerHTML = texto;
                campoTextoConvertido.value = texto; 
            }   
           }       
    
    return texto;
}


function desencriptar(){
      /* Obtener el texto a convertir */
      let texto = campoTexto.value;
      /* Validar que haya texto para encriptar */
      if (texto.length == 0){
          alert("Por favor, ingrese el texto a desencriptar");
          document.getElementsByClassName("sinmensaje")[0].style.display = "block"
          let aviso = document.getElementsByClassName("dosfrases")[0];
          aviso.innerHTML = red;

      } else {
              /*  Recorrer cada uno de los caracteres de la matriz de conversión.
                  Si existe en el texto, se reemplazarán todas sus apariciones
                  con el valor que corresponde según la matriz. 
                  Se cambia por mayúsculas para evitar que se superpongan transformaciones. 
                  Ejemplo: james*/
              for (let i=0; i<matriz_conversion.length ; i++){
                  if (texto.includes(matriz_conversion[i][1])){
                      texto=texto.replaceAll(matriz_conversion[i][1],matriz_conversion_may[i][0]);
                }
              }  
              texto = texto.toLowerCase();
              console.log(texto);
              sinMensaje.style.display = "none";
              conMensaje.style.display = "block";
              campoTextoConvertido.innerHTML = texto;
              campoTextoConvertido.value = texto; 
      }          
      return texto;
    }

    function limpiar(){
        /*Si se da click en el campo texto luego de una conversión,
        se procede a limpiar el campo a convertir y el campo convertido*/
        campoTexto.value = "";
        campoTextoConvertido.value = "";
        campoTexto.innerHTML = "";
        campoTextoConvertido.innerHTML = "";
        sinMensaje.style.display = "block";
        conMensaje.style.display = "none";
    }
    
   function validar(texto){
        /*Función que valida si todos los campos tienen un contenido.
        Devuelve true o false dependiendo del resultado.*/
        /*Comprobar que no esté vacío el texto a convertir*/
        if ((texto == "") ){
            alert ("Falta ingresar el texto");
            return false;
        }else{
            return validarLetras(texto);
        }
   }
   
   function  validarLetras(texto){
        /* Función que verifica que la cadena solo contenga letras.
        Si es así devuelve verdadero, caso contrario falso.*/
        let codigoAscii = 0;  
        for (let i = 0 ; i < texto.length ; i++){
            codigoAscii = texto.charCodeAt(i);
             /* Si el código ASCII de la letra está entre a=97 y z=122 */
            if ((codigoAscii > 96 && codigoAscii < 121) || (codigoAscii == 32)){
                /* Si encuentra una letra minúscula, sigue comparando*/
                continue;
            } else {
                /* Si encuentra algo diferente a una letra minúscula, retorna falso*/
                return false;
            }   
        }
        return true;
    }
                   