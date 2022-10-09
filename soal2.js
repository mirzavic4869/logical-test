// function countWords(str) {
// 	const arr = str.split(" ");
// 	var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
// 	return arr.filter((word) => word !== specialChars).length;
// }

// console.log(countWords("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));

// var sectionToCheck = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
// var allFoundCharacters = sectionToCheck.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
// console.log(allFoundCharacters.length); //count

function countWords(str) {
	const arr = str.split(" ");

	return arr.filter((word) => word !== "").length;
}
console.log(countWords("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));
