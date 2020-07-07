function randomizadorDeNumeros(){
var valor = Math.floor( Math.random()*10)
return valor;
}
function calculandoPassos(cpf,valoresPasso1){

var soma=0;
for(x=0;x<valoresPasso1.length;x++){
    digito=cpf[x]*valoresPasso1[x];
    soma=soma+digito
    
  
}
if(soma%11<2){
    cpf.push(0);
}else{
    cpf.push(11-(soma%11))
}

return cpf;

}



function gerandoCPF(){
var valoresPasso1=[10,9,8,7,6,5,4,3,2]
var cpf=[]
for(i=0; i<9;i++){
    cpf.push(randomizadorDeNumeros())

}

cpf=calculandoPassos(cpf,valoresPasso1);
valoresPasso1.unshift(11);
console.log(valoresPasso1)
cpf=calculandoPassos(cpf,valoresPasso1)
console.log(cpf)
return cpf;

}

function imprimir(){

    
    const retorno = gerandoCPF();
    var imprimir=""
    for(i=0; i<retorno.length;i++){
        imprimir=imprimir+retorno[i];
        if(i===2 ||i===5){
            imprimir=imprimir+".";
        }
        if(i===8){
            imprimir=imprimir+"-"
        }

    }
    console.log(imprimir)
    document.querySelector("#cpf").innerHTML=imprimir;
    //document.querySelector("#CPF").innerHTML="OlaFon";
}


imprimir();

