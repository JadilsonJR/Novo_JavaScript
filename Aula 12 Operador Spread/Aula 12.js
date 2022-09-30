//O operador Spread serve para quebrar elementos dos Arrays ou em outras coleções de elementos 


//let n1 = [20,30,40]
//let n2 = [11,22,33,44]
//let n3 =[...n1] // O Spread pode copiar elementos de Arrays  
//let n3 =[...n1,...n2]

//console.log("N1: "+ n1)
//console.log("N2: "+ n2)
//console.log("N3: "+ n3)



//Realizando Concatenação dos Atributos
// const jogador1 = {nome:"Junior",energia:100,vidas:3, magia:120 }
// const jogador2 = {nome:"Joao",energia:100,vidas:5, velocidade:100 }
// const jogador3 = {...jogador1,...jogador2 } //Realizando Concatenação dos Atributos

//console.log(jogador3)



//Espalhando Valores do Array para paramentros de uma Função
// const soma =(v1,v2,v3)=>{
//     return v1+v2+v3
// }
// let valores=[1,5,4]

// console.log(soma(...valores)) 


const objs=document.getElementsByTagName("div") //Retornando um Objeto do DOM do HTML Obs: HTML Colections Só recebe elementos HTML 
const objs2=[...document.getElementsByTagName("div")] //Espalhando os elementos d Retornando um Array e espalhando um.  Obs: Pode receber qualquer valores, como valores e Strings

//Listando os Elementos dentro do Array do objs2
objs2.forEach(Element =>{
    
    console.log(Element)
})

console.log(objs2)