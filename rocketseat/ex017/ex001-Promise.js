/* Promise
A promessa de que algo irá acontecer, 
Poderá dar certo ou errado, 
mas irá acontecer */

let aceitar = true

console.log(`Pedir uber`);
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve(`Carro chegou`)
    }
    return reject('Pedido negado!')
})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Finalizada'))

console.log(`Aguardando`);