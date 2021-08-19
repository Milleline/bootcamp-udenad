// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	//1.Opret en funktion som hedder Hils, lad funktionen skrive "Hej med dig" i konsollen.
	//2.Har det betydning om du kalader funktionen før eller efter den er oprettet? 
	//SVAR: Nej det har ingen betydning.
	
	// skriv din kode her...

	hils();

	function hils(){
		
		console.log("Hej med dig")
	}

	hils();

	
}); // Afslutter: DOMContentLoaded