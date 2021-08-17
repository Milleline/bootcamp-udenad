
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let number = 5;

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
	
	// Går ind og giver mulighed for at klikke på plus som så tilføjer 1 enhed pr klik.
	plusButton.addEventListener("click", () => {
		if(number < 10){ // sætter begrænser på, så der ikke kan klikkes højere end tallet 10.
		number++; //tilføjer en.
		updateNumber();
		}

	});
	// Går ind og giver mulighed for at klikke på minus som så fjerner 1 enhed pr klik.
	minusButton.addEventListener("click", () => {
		if(number > 0){ //sætter begrænser på, så der ikke kan klikkes lavere end tallet 0.
		number--; //fjerner en. 
		updateNumber();
		}
	});



}); // Afslutter: DOMContentLoaded