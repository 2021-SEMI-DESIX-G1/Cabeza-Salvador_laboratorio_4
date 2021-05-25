(() => {
var result;
const App={    
texto:()=>
{

    // eliminamos los espacios en blanco
    //palabra=palabra.replace(/ /g, "");
var palabra;
palabra=123321;
    for (var i=0;i<palabra.length;i++){
        if(palabra[i]!=palabra[palabra.length-i-1]){
            return false;
        }
    }
    return true;
   
}

}



})();
