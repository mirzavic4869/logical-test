let ar = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
// let newSocks = socks.sort((a, b) => a - b);

// let result = 0;

// for (let i = 0; i <= newSocks.length; i++) {
// 	if (newSocks[i] === newSocks[i + 1]) {
// 		result += 1;
// 	}
// 	console.log(result);
// }

function sockPair(n, ar) {
	let socks = {};
	let pairs = 0;
	for (let i of ar) {
		socks[i] = socks[i] + 1 || 1;
		if (socks[i] % 2 === 0) {
			pairs += 1;
		}
	}
	return pairs;
}

// soal a
console.log(sockPair(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

// soal b
console.log(sockPair(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));

// soal c
console.log(sockPair(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
