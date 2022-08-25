"use strict"

// O VAR permite a utilização da variavel em quaquer escopo do sistema
// O LET corrige esse erro, não permitindo o acesso a variavel apos o seu bloco.  
//CONST é uma constante, sendo um valor que não vai se modificar 

if(true){
    var nome1="Junior";
    console.log("VAR DENTRO: "+nome1);
}

console.log("VAR FORA:"+nome1);




if(true){
    let nome2="Junior";
    console.log("LET DENTRO: "+nome1);
}

console.log("LET FORA: "+nome2);