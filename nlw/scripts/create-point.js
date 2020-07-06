
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((res)=>{

    return res.json()
    }).then(states => {

        for(const state of states){
          
        ufSelect.innerHTML+= `<option value ="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const valorUf = event.target.value


    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value=event.target.options[indexOfSelectedState].text
    console.log(indexOfSelectedState)
    console.log(event.target.options[indexOfSelectedState].text)
    citySelect.innerHTML=""
    citySelect.disabled=true

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valorUf}/municipios`).then(
        res => res.json()
    ).then(citys =>{
       
        for( const city of citys){
            citySelect.innerHTML+= `<option value ="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled=false
    } )

    

}

//Seleciona alguma tag do html pelo name que foi colocao
document.querySelector("select[name=uf]")


            //Fica Esperando alguma mudança, quando muda o que ele ira fazer
       .addEventListener("change",getCities)

//Ele tenta, mas n garante q vai volta com alguma coisa
//fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){


//return res.json()
//}).then(function(data){

    //console.log(data)
//})

//items de coleta
//pegar todos os li's

const itemsToCollect= document.querySelectorAll(".items-grid li")


for( const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)    
}


let selectItems=[]

 const colletedItems =document.querySelector("input[name=item]")
function handleSelectedItem(event){
    const itemLi =event.target
// adicionar ou remover uma classe no java script
//posso usar o add("selected") para adicionar ou o remove("selected") para tirar 
//Ou o toggle("selected") que ja faz os doisd e uma vez
itemLi.classList.toggle("selected")


    const itemId = itemLi.dataset.id
    
    //verificar se exixtem itens selecionados
const alreadySelected = selectItems.findIndex(item=>{
    const itemFound = item ==itemId
    return itemFound
})

    // se ja estiver selecionado, tirar da selecao
if(alreadySelected>=0){
    const filteredItems = selectItems.filter(item =>{
       const itemIsDifferent = item !=itemId
        return itemIsDifferent 
    })
selectItems= filteredItems
}
else{
    //adicona o elemnto dentro da lista
    selectItems.push(itemId)
    console.log(selectItems)
}

    // se não estiver, adiconar à seleção


    //atualizar o campo escondido com os itens selecionados
    colletedItems.value= selectItems
}