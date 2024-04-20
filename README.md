# Kundenspezifische Anwendungsentwicklung durchführen - LT12a - Projekt
Verwendete Technologien:

```javascript
const Projects = {
  	code: ["HTML", "CSS", "Javascript"],
	technologies: {
	devTool: ["VS-Code"]
	}
}
```

## Projektbeschreibung
- Erstellen eines Zeiterfassungstools

## Zeiterfassungs-App

Ermöglicht es Benutzern, Projekte und damit verbundene Aufgaben sowie Projektstart- und -endzeiten in Tagen, Stunden und Minuten aufzuzeichnen. Die gesammelten Daten werden dann in einer Tabelle angezeigt.

## Funktionalität:

## HTML-Elemente:

- `neuesProjektForm:` Formular zur Eingabe neuer Projekte und Aufgaben.
- `zeiterfassungTabelle:` Tabelle zur Anzeige der erfassten Zeiteinträge.
- `showDate:` Element zur Anzeige des aktuellen Datums.
- `showClock:` Element zur Anzeige der aktuellen Uhrzeit.
  
## Veranstaltungsmanagement:

- `submit` Ein Ereignis wird auf dem `newProjektForm` Formular ausgelöst, wenn der Benutzer es absendet.
- Um die eingegebenen Daten zu verarbeiten und in der Tabelle anzuzeigen, wird die Funktion `addZeiteintrag` aufgerufen.

## Datenverarbeitung:

- Die Funktion `addZeiteintrag` erstellt einen neuen Datensatz `(zeiteintrag)` mit den eingegebenen Projekt- und Aufgabendetails, Start- und Endzeiten sowie der berechneten Arbeitsdauer (Tage, Stunden und Minuten).
- Es wird eine neue Zeile `zeiterfassungTabelleen` erstellt.
- Für jede Eigenschaft des `zeiteintragobject` wird eine neue Zelle in der Zeile erstellt und mit dem entsprechenden Wert gefüllt.

## Datums- und Uhrzeitanzeige:

- Das aktuelle Datum und die aktuelle Uhrzeit werden im Element `showDate` und `showClock` mithilfe der Methode `toLocaleString` angezeigt.
- Die Zeit wird jede Sekunde durch die Funktion `setInterval` aktualisiert.

## Weitere Details:

- Der Code verwendet DOM-Manipulation, um mit HTML-Elementen zu interagieren.
- Die `Date-Klasse` wird zum Bearbeiten von Datums- und Uhrzeitwerten verwendet.
- Die `toLocaleString-Methode` wird verwendet, um Datums- und Uhrzeitwerte in ein für Menschen lesbares Format zu formatieren.
  
## Dynamische Datums- und Uhrzeitanzeige:

- Das Datum wird im Format „aktueller Tag, Datum Monat Jahr“ angezeigt.
- Die Uhrzeit wird im lokalen Zeitzonenformat angezeigt.

## CSS

In diesem Abschnitt werden Variablen definiert, die das Farbschema steuern. Zu diesen Variablen gehören:

- `Hauptfarbe:` Hiermit wird die Hauptfarbe festgelegt, in diesem Fall Hellblau `(#0ef)`.
- `Sekundärfarbe:` Dies legt die Sekundärfarbe fest, die hier Weiß ist `(#ffffff)`.
- `Hintergrund:` Dies legt die Hintergrundfarbe fest, die hier dunkelblau ist `(#081b29)`.
- Für verschiedene Elemente wie Schaltflächen, Text usw. werden weitere Farbvariablen definiert.

##
`>> IMG + VIDEO <<`

<a href="https://github.com/dwn10/LF12a/blob/main/Zeiterfassungstool/readme-img/zeiterfassung.gif"><img src="https://github.com/dwn10/LF12a/blob/main/Zeiterfassungstool/readme-img/z-1.JPG?raw=true" style="height: 80%; width:80%;"/></a>


## Credits:

**Author:**

```bash
  Darwin Paz
```

**Unter der Leitung von:**

```bash
  Edin Hadzic
```

```http
  Abgabetermin:
```

| Stadt:      | Datum:            | Bis:          |
| :---------- | :---------------- | :------------ |
| `Darmstadt` | `Fr - 19.04.2024` | **14:30 Uhr** |
