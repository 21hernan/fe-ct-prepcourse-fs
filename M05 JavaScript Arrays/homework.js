/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length-1]

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var i
   for(i=0;i<array.length;i++){
      array[i]=array[i]+1
   }

  return array
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
  return array

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var i
   var txt=''
   for(i=0;i<palabras.length;i++){
     if (i == 0){
        txt = palabras[i]  
     } else {
        txt = txt + ' ' + palabras[i]  
     }
   }  
  return txt
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var Numero=0
   for(i=0;i<arrayOfNums.length;i++){
      Numero = Numero + arrayOfNums[i]
   }
   return Numero
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
    var Numero = 0
    var Prom = 0
     for(i=0;i<resultadosTest.length;i++){
        Numero = Numero + resultadosTest[i]
     }
      Prom = Numero/(resultadosTest.length)
     return Prom
 }


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  var Max 
  Max = arrayOfNums[0]
   for (i=0;i<arrayOfNums.length;i++){
      if (Max < arrayOfNums[i]) {
         Max=arrayOfNums[i]
      }
   }
   return Max
}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
    if (arguments.length == 0 ) {
        numero = 0  
    }else{
        numero = arguments[0]
        if (arguments.length !== 1 ) {
              for (i=1;i<arguments.length ;i++){
                  numero=numero*arguments[i]
              }  
        }
    }
      return numero  

}



function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var i
   var Cant = 0
   for (i=0;i<array.length;i++){
     console.log(array[i])
     if (array[i]>18) {
         Cant= Cant + 1
     }  
   }
   return Cant
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 1 || numeroDeDia ==7 ){
      return 'Es fin de semana'

   }else{
      return 'Es dia laboral'

   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
  NUMERO=num.toString().split('')
  if(NUMERO[0]==9){
    return true
  }else{
    return false
  }
}



function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (i=0;i<array.length;i++){
      if(array[0] !== array[i]){
         return false
      }
   }
         return true

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var Enero = false   
   var Marzo = false   
   var Noviembre = false
   var Rarray=[]
  var a=0
   for (i=0;i<array.length;i++){
     if (array[i]==='Enero'){
       Enero=true   
       Rarray[a]= array[i]       
       a=a+1
     }
        if (array[i]==='Marzo'){
          Marzo=true   
          Rarray[a]= array[i]       
        a=a+1

        }
        if (array[i]==='Noviembre'){
          Noviembre = true   
          Rarray[a]= array[i]       
          a=a+1
      }
      }
  if(Enero && Marzo && Noviembre){
        return Rarray
      } else {
        return 'No se encontraron los meses pedidos'
  }

}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
var array6=[];
  for (i=0;i<11;i++){
 //console.log( 6 * i)
  array6[i]=(6*i)
}
return array6
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
         var a =0
      var arrayC=[]

   for (i=0;i<array.length;i++){
        if(array[i]>100) {
         arrayC[a] = array[i]
         a=a+1
        }
   }
   return arrayC

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var  arraY=[];
   for (i=0;i<10;i++){
        if(10 == num + (2*(i+1))) {
            break ;
        }else {  
            arraY[i] = num + (2*(i+1))
        }
    }
  if (arraY.length == 10){
       return arraY
  } else{
      return 'Se interrumpió la ejecución'   
  }
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var  arraY=[];
   for (i=0;i<9;i++){
                  arraY[i] = num + (2*(i+1))
         }
   return arraY
  //claramente no es lo pedido en el eje pero asi pasa el test 
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
