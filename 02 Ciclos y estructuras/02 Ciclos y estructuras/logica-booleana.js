
const regresaTrue = () => {
    console.log('Regresa true');
    return true
}

const regresaFalse = () => {
    console.log('regresa false');
    return false
}
//************************************************* */

console.warn('not o la negacion')
// console.log(true); salida es true
console.log(!false);
console.log(!true);

console.warn('And');
console.log(true && true); //true
console.log(true && !false); //true

console.log(regresaTrue() && regresaFalse());
console.log(regresaFalse() && regresaTrue());


console.warn('OR')
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());

// ****************************************************

console.warn('Asignaciones');

const soyUndefined = undefined
const soyNull = null
const soyFalso = false

const a1 = false && 'hola mundo' && 150 // REGRESA 150
const a2 = 'hola' && 'mundo' && soyFalso && true //
const a3 = soyFalso || 'ya no soy falso 1'
const a4 = soyFalso || soyUndefined ||soyNull || 'aqui no soy falso' || true
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso' || true

console.log({a1, a2, a3, a4, a5});

if(regresaFalse() && regresaTrue() && (true || false || true)){
    console.log('hago algo');
}else{
    console.log('hacer otra cosa');
}