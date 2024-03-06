let vetor = [1,2,3,4,5,6,7,8,9,10]

function menor(){
    var menor = vetor[0]
    for (i=0; i < vetor.length;i++){
        if(vetor[i] <= menor){
            menor = vetor[i]
        }
    }
    return menor
    
}

function maior(){
 var maior = vetor[9]

    for(i=0; i<= vetor.length;i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}

function media(){
    var soma = 0
    for(i=0 ; i < vetor.length ; i++){
       soma = soma + vetor[i] 
    }
    var divisao = soma / vetor.length

   return divisao
}



let maiorv = maior(vetor)
let menorV = menor(vetor)
let total = media(vetor)


console.log("o menor valor foi: " + menorV)
console.log("o maior valorfoi: " + maiorv)
console.log("a media de todos os valore sao de: " + total)