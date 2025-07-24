const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

console.log(`O item é `+ listaDeCompras[1].toUpperCase())

listaDeCompras.splice(3)
console.log(listaDeCompras)

listaDeCompras[3] = 'Ovo';

console.log(listaDeCompras)