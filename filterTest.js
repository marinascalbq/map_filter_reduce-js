function filtraPares(arrayFilter){
    return arrayFilter.filter(pares)
}
function pares(item){
    return item % 2 === 0;
}


function filtraImpares(arrayFilter){
    return arrayFilter.filter(impares)
}
function impares(item){
    return item % 2 !== 0;
}


const arrayFilter = [2, 4, 8, 3, 9, 7, 15, 20, 30, 5];

console.log('Os números pares são: ', filtraPares(arrayFilter));
console.log('Os números ímpares são: ', filtraImpares(arrayFilter));