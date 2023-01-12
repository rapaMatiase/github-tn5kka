let acumulador = 0
for(let i = 1 ; i < 1001 ; i--){
    if(i % 3 === 0){
        acumulador = acumulador + i
    }
}
console.log(acumulador)