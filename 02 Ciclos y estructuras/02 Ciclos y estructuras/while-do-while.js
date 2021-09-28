

const colores = ['rojo', 'amarillo', 'azul', 'blanco', 'verde']

let j = 0
console.warn('while')
while(j<colores.length){
    if(j === 1){
        //break
        j++;
        continue;
    }
    console.log(colores[j]);
    j++;
}

console.warn('do while')
do{
    console.log(colores[j]);
    j++;
}while(colores[j])