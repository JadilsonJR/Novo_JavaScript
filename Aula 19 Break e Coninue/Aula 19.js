//Break gera uma interrupção na execução de um Loop, pulando o loop 

//Continue ele para somente uma interação, continuando com o restantes dos outros loops 


let n=0
let max=100

while(n<max){
    console.log("CFB Cursos Break- "+n)
    if(n>10){
        console.log("Break ")
        break
    }
    n++
}
 n=0
let pares=0

for(let i=n;i<max;i++){
    console.log("CFB Cursos - "+i)
    //Verifica se o numero impar
    if(i%2!==0){
        continue //se o numero for impar ele pula a interação e vai para a proxima 
    }
    pares++
}

console.log("Fim do Programa")
console.log("Qtd. Pares: "+pares)
