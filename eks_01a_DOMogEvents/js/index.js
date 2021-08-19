
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// Tallet der bliver vist fra start.
	let number = 5;
	// Begrænsninger for hvor lavt og højt tallene går.
	let maxValue = 10;
	let minValue = 0;
	// Knapper.
	let plusButton = document.querySelector("#btn-count-increase");
	let minusButton = document.querySelector("#btn-count-decrease");

	// Sender tallet til din site.
	let textCountElement = document.querySelector("#text-count");
	
	
	// Funktion der opdater tallet hvergang der klikkes.
	function updateNumber(){
		textCountElement.textContent = number;
	}

	updateNumber();
	
	function calcNumber(event) {

	// console.log(event);

		if (event.target.attributes.id.nodeValue === "btn-count-increase") {
			if (number < maxValue){
			number++;
			updateNumber();
			}
		} 	
		else if (event.target.attributes.id.nodeValue === "btn-count-decrease") {
			if (number > minValue){
			number--;
			updateNumber();
			}
		}
	}

	// Går ind og giver mulighed for at klikke på plus som så tilføjer 1 enhed pr klik.
	plusButton.addEventListener("click", (event) => {
		calcNumber(event);
		// if(number < maxValue){ 
		// number++; 
		// updateNumber();
		// }

	});
	
	// Går ind og giver mulighed for at klikke på minus som så fjerner 1 enhed pr klik.
	minusButton.addEventListener("click", (event) => {
		calcNumber(event);
		// if(number > minValue){
		// number--;
		// updateNumber();
		// }
	});



}); // Afslutter: DOMContentLoaded