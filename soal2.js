function countWords(str) {
	const arr = str.split(" ");

	return arr.filter((word) => word !== "*").length;
}

console.log(countWords("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));
