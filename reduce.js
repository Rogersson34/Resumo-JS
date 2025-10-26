/*const list = [1,2,3,4,5,6,7]

const sum= list.reduce (( acumulador, valorAtual) => {
   console.log(acumulador + 'acc')
    console.log(valorAtual+'valorAtual')
    return acumulador + valorAtual
}, 1)

console.log(sum)*/

const cart= [ 

    {productName: 'Iphone', price: 5000, quantity: 1},
    {productName: 'sansung', price: 2.200, quantity: 2},
    {productName: 'motorola', price: 1.800, quantity: 3},
    {productName: 'Xiaomi', price: 1.200, quantity: 5},
 
]

const finalValue= cart.reduce ((acc, value) => {
    const result = value.price * value.quantity
    return acc + result
},0)
 
console.log (`A sua compra ficou no total de ${finalValue}`)