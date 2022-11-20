
//Funçãom com retorno de chamada
function par_impar(){
    let n1=10
    let n2=2
    let res=n1*n2
    if(res%2==0){
        return "PAR"
    }else{
        return "IMPAR"
    }
}

let valor= par_impar()

console.log(valor) 