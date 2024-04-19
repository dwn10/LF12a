
## Zeiterfassungs-App

Der vorgestellte Code implementiert eine Zeiterfassungsanwendung in JavaScript, die es Benutzern ermöglicht, Projekte und damit verbundene Aufgaben sowie die Start- und Endzeiten der Arbeit an diesen Projekten aufzuzeichnen. Die gesammelten Daten werden dann in einer Tabelle angezeigt.

## Funktionalität:

## HTML-Elemente:

neuesProjektForm: Formular zur Eingabe neuer Projekte und Aufgaben.
zeiterfassungTabelle: Tabelle zur Anzeige der erfassten Zeiteinträge.
showDate: Element zur Anzeige des aktuellen Datums.
showClock: Element zur Anzeige der aktuellen Uhrzeit.
Veranstaltungsmanagement:

„submit“ Ein Ereignis wird auf dem newProjektFormform-Formular ausgelöst, wenn der Benutzer es absendet.
Um die eingegebenen Daten zu verarbeiten und in der Tabelle anzuzeigen, wird die Funktion addZeiteintrag aufgerufen.
Datenverarbeitung:

Die Funktion addZeiteintrag erstellt einen neuen Datensatz (zeiteintrag) mit den eingegebenen Projekt- und Aufgabendetails, Start- und Endzeiten sowie der berechneten Arbeitsdauer (Tage, Stunden und Minuten).
Es wird eine neue Zeile zeiterfassungTabelleen erstellt.
Für jede Eigenschaft des zeiteintragobject wird eine neue Zelle in der Zeile erstellt und mit dem entsprechenden Wert gefüllt.
Datums- und Uhrzeitanzeige:

Das aktuelle Datum und die aktuelle Uhrzeit werden im Element showDate und showClock mithilfe der Methode toLocaleString angezeigt.
Die Zeit wird jede Sekunde durch die Funktion setInterval aktualisiert.
Weitere Details:

Der Code verwendet DOM-Manipulation, um mit HTML-Elementen zu interagieren.
Die Date-Klasse wird zum Bearbeiten von Datums- und Uhrzeitwerten verwendet.
Die toLocaleString-Methode wird verwendet, um Datums- und Uhrzeitwerte in ein für Menschen lesbares Format zu formatieren.
Ein neuer:

Der Code enthält lediglich die Grundfunktionalität einer Zeiterfassungsanwendung.
Bei Bedarf können Erweiterungen wie Benutzerauthentifizierung, Datenpersistenz und Berichterstellung hinzugefügt werden.