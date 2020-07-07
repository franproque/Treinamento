function pegaValoresCampo(){
    
var esquerdaTop= document.querySelector("#esquerda-top").value;
var direitaTop= document.querySelector("#direita-top").value;

var esquerdaBaixo= document.querySelector("#esquerda-baixo").value;
var direitaBaixo= document.querySelector("#direita-baixo").value;
var valorDoCSS= esquerdaTop+"px "+direitaTop+"px "+ direitaBaixo+"px "+esquerdaBaixo+"px";

document.querySelector("#centro").style.borderRadius =valorDoCSS;



document.querySelector("#imprimir").innerHTML="border-radius: "+esquerdaTop+"px "+direitaTop+"px "+ direitaBaixo+"px "+esquerdaBaixo+"px;";
console.log(direitaBaixo)

requestAnimationFrame(pegaValoresCampo)
}
function limpa(){
    document.querySelector("#imprimir").innerHTML=" ";

}

function copia(){
    var copia = document.querySelector("#imprimir").value;
    document.execCommand("copy");
}

pegaValoresCampo()
