const top = {
	preco: 55,
};

const short = {
	preco: 45,
};
const legging = {
	preco: 90,
};

const camisa = {
	preco: 35
};

function mapArray( array, thisArg) {
	return array.map(function (item) {
		return item * this.preco;
	}, thisArg);
}

const array = [2];

console.log('----------------------------');
console.log(' Multiplicando o preço por 2 ');
console.log('----------------------------');
console.log('Top', mapArray(array, top));
console.log('Short', mapArray(array, short));
console.log('Legging', mapArray(array, legging));
console.log('Camisa', mapArray(array, camisa));



//MultiplicandoSemOThis

const arr = [55, 45, 90, 35];

console.log('\n\n----------------------------');
console.log(' Multiplicando o preço por 2 ');
console.log('----------------------------');
console.log('Preços Iniciais: ', arr);
console.log('Preços multiplicados: ', arr.map((item) => item * 2));
