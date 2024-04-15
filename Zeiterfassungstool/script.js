const neuesProjektForm = document.getElementById('neues-projekt');
const zeiterfassungTabelle = document.getElementById('zeiterfassung');

neuesProjektForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const projektname = document.getElementById('projektname').value;
    const aufgabename = document.getElementById('aufgabename').value;
    const startzeit = new Date(document.getElementById('startzeit').value);
    const endzeit = new Date(document.getElementById('endzeit').value);

    const dauerTage = Math.floor((endzeit - startzeit) / (1000 * 60 * 60 * 24));
    const dauerStunden = Math.floor(((endzeit - startzeit) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dauerMinuten = Math.floor(((endzeit - startzeit) % (1000 * 60 * 60)) / (1000 * 60));

    const zeiteintrag = {
        projektname: projektname,
        aufgabename: aufgabename,
        startzeit: startzeit.toLocaleString(),
        endzeit: endzeit.toLocaleString(),
        dauerTage: dauerTage,
        dauerStunden: dauerStunden,
        dauerMinuten: dauerMinuten
    };

    addZeiteintrag(zeiteintrag);

    neuesProjektForm.reset();
});

function addZeiteintrag(zeiteintrag) {
    // Erstellen Sie eine neue Tabellenzeile
    const row = zeiterfassungTabelle.insertRow();

    // Erstellen Sie Zellen für jede Eigenschaft des zeiteintrag-Objekts
    for (const property in zeiteintrag) {
        const cell = row.insertCell();
        cell.textContent = zeiteintrag[property];
    }
}


// Datum - UHR
let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();

let diaSemana = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

let mesAnyo = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} ${mesAnyo[fecha.getMonth()]} ${fecha.getFullYear()}`;

setInterval(() => {
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);