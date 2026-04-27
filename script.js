const words = document.querySelectorAll(".word");
const dropZones = document.querySelectorAll(".drop-zone");
const verificarBtn = document.getElementById("verificar");
const reiniciarBtn = document.getElementById("reiniciar");
const mensaje = document.getElementById("mensaje");

let draggedWord = null;

words.forEach(word => {
    word.addEventListener("dragstart", () => {
        draggedWord = word;
    });
});

dropZones.forEach(zone => {

    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    zone.addEventListener("drop", () => {
        if (!draggedWord) return;

        zone.textContent = draggedWord.textContent;
        zone.dataset.user = draggedWord.textContent;
    });

});

verificarBtn.addEventListener("click", () => {

    let todoCorrecto = true;

    dropZones.forEach(zone => {

        zone.classList.remove("correct", "incorrect");

        if (zone.dataset.user === zone.dataset.correct) {
            zone.classList.add("correct");
        } else {
            zone.classList.add("incorrect");
            todoCorrecto = false;
        }

    });

    if (todoCorrecto) {
        mensaje.textContent = "¡Felicidades, es correcto!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Vuelve a intentarlo";
        mensaje.style.color = "red";
    }

});

reiniciarBtn.addEventListener("click", () => {

    dropZones.forEach(zone => {
        zone.textContent = "";
        zone.dataset.user = "";
        zone.classList.remove("correct", "incorrect");
    });

    mensaje.textContent = "";

});