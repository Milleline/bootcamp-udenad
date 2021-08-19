// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	//02a
	//1.Opret en funktion som hedder Hils, lad funktionen skrive "Hej med dig" i konsollen.
	//2.Har det betydning om du kalader funktionen før eller efter den er oprettet? 
	//SVAR: Nej det har ingen betydning.

	//02b
	//1. Tilføj et parameter, navn, til funktionen fra opgave 02a. Tilret din console.log så den udskriver "Hej med dig" og navnet fra parametret.
	//2. Kald funktionen et par gange med forsellige navne som argumenter.
	//3. Tilret din console.log så den udskriver et mellemrum efter kommaet.

	// skriv din kode her...

	function hils(navn1){
	
		console.log("hej med dig " + navn1 + "!!")

		// console.log( text + " " + navn1 + "!!" )
		// console.log(`Hej med dig ${navn1}`)
	}

		hils ("Aske");
		hils ("Mille");

	const text = "Hej med dig";
	// 	navn1 = Mille;
	// 	navn2 = Aske;


}); // Afslutter: DOMContentLoaded