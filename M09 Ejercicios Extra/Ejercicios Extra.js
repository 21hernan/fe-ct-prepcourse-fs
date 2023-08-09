/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   deObjetoAarray
   let Newobjeto = Object.entries(objeto);
   return Newobjeto
   console.log("Claves y valores: ", Newobjeto);
   console.log("Claves y valores: ", Newobjeto[0]);

}



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var abcdario = ['a','b','c','d','e','f','g','h','i','j','k','l','ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var objetoReturn={};
   var NroApar=0
   for (i=0;i<abcdario.length;i++){
         NroApar = string.split(abcdario[i]).length - 1
         if (NroApar > 0){
            objetoReturn[abcdario[i]]=NroApar
         }
   }
   return objetoReturn

 }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
    var Returtexto_M ='';
    var Returtexto_m ='';
        for (i=0;i< string.split('').length ;i++){
              if (string[i] == string[i].toUpperCase() ) {
                    Returtexto_M = Returtexto_M + string[i]
              }else{
                    Returtexto_m = Returtexto_m + string[i]
              }
        }
     var TextoReturn = Returtexto_M + Returtexto_m
     console.log(TextoReturn)
return TextoReturn
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var ParteFrase=''
var Fraseseparada=''
var FraseFinal =''
Fraseseparada = frase.split(' ')
console.log(Fraseseparada.length)
   for (i=0;i<Fraseseparada.length;i++){
          if (i!=0){FraseFinal = FraseFinal + ' '}
          ParteFrase=Fraseseparada[i]
          if (ParteFrase.length >=1) {
              for (var t=ParteFrase.length-1; t>=0 ;t--){
                    FraseFinal = FraseFinal + ParteFrase[t]
              }
          } else {
                FraseFinal = FraseFinal + ' '
          }
  }
   console.log(FraseFinal)
   return FraseFinal  

}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
      var NumeroValue = (numero +'');
      var NroTotal = NumeroValue.length  
      var NroTotal2 = NumeroValue.length/2 - (NumeroValue.length/2)% 1
      for (var i=0;i<NroTotal2;i++) {
          if (NumeroValue[i] !== NumeroValue[NroTotal-i-1]) {
                return 'No es capicua'  
          }
      }
 return 'Es capicua'  
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
     string=string.replaceAll("a", "");
string=string.replaceAll("b", "");
string=string.replaceAll("c", "");
console.log(string)
return string

}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var Aux='' ;
for (i=0 ; i< arrayOfStrings.length-1;i++){
    for (t=i+1 ; t< arrayOfStrings.length;t++){
          if(arrayOfStrings[i].length > arrayOfStrings[t].length){
              Aux = arrayOfStrings[i];
              arrayOfStrings[i] = arrayOfStrings[t];
              arrayOfStrings[t] = Aux;
          }  
    }
}  
  return arrayOfStrings 

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var ArrayR=[]
   for (i=0 ; i< array1.length;i++){
       for (t=0 ; t< array2.length;t++){
          if(array1[i] == array2[t] ){
              ArrayR.push(array1[i])  
          }
       }
   }
   return ArrayR    
}
  

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
