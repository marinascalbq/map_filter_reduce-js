const lista =[

{
    Produto: 'Top',
	preco: 55
},

{
    Produto: 'Short',
	preco: 45
},
{
    Produto: 'Legging',
	preco: 90
},
{
    Produto: 'Camisa',
	preco: 35
}
];

const saldoDisponível = 300;
console.log('Saldo disponível: ', saldoDisponível);

function calculaSaldo(saldoDisponível, lista){
    return lista.reduce(function(prev, current, index) {
        console.log('Compra debitada: ', current);
        return prev - current.preco;
    }, saldoDisponível);
}

console.log('Saldo final: ', calculaSaldo(saldoDisponível, lista));
