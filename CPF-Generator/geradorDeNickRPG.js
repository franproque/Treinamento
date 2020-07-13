
function quantidadeDeLetras(){
  var quantidade=0;  
while(quantidade<=2){
    quantidade=Math.floor(Math.random()*10);
}

return quantidade;
    


}
function escolheLetra(min,max){

return Math.floor(Math.random()*(max-min) +min)


}
function letrasAleatorias() {
    const alfabeto=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const nick=[]
    for(i=0; i<quantidadeDeLetras();i++){

        
        nick.push(alfabeto[escolheLetra(0,25)]);
        
    }

    var vogais=[alfabeto[0],alfabeto[4],alfabeto[8],alfabeto[14],alfabeto[20]]

    var nickPronto="";
    for(x=0;x<nick.length; x++){
       
        
    }
   console.log(nickPronto)
}

letrasAleatorias();
