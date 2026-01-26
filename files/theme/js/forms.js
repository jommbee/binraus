// Element für Ausgabe des aktuellen Wertes erstellen
var anzeigeObjekt = document.createElement("div");
anzeigeObjekt.className = "showbox";
// ELemente definieren
var slider = document.getElementsByClassName("range")[0];
var output = anzeigeObjekt;
// Ausgabe box ins DOM schreiben
slider.parentElement.append(anzeigeObjekt);
// Werte in BOx schreoiben wenn Value sich ändert
slider.oninput = function () {
    output.innerHTML = this.value;
} 