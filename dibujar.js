const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let estaDibujando = false;
let brushSize = 5;
let modoBorrador = false;
let colorSeleccionado = "#000000";
let formaSeleccionada = "";
let inicioX, inicioY;


window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});


const alternarBorrador = () => {
    modoBorrador = true;
    ctx.strokeStyle = "#FFFFFF";
};

const alternarPincel = () => {
    modoBorrador = false;
    ctx.strokeStyle = colorSeleccionado;
};


const empiezaDibujar = (e) => {
    if (formaSeleccionada) {
        inicioX = e.offsetX;
        inicioY = e.offsetY;
        return;
    }

    estaDibujando = true;
    ctx.beginPath();
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = modoBorrador ? "#FFFFFF" : colorSeleccionado;
    ctx.moveTo(e.offsetX, e.offsetY);
};


const dibujar = (e) => {
    if (!estaDibujando || formaSeleccionada) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
};


const terminarDibujar = (e) => {
    if (formaSeleccionada) {
        const finX = e.offsetX;
        const finY = e.offsetY;

        ctx.beginPath();
        ctx.strokeStyle = colorSeleccionado;
        ctx.lineWidth = brushSize;

        const ancho = finX - inicioX;
        const alto = finY - inicioY;

        if (formaSeleccionada === "rectángulo") {
            ctx.rect(inicioX, inicioY, ancho, alto);
        } else if (formaSeleccionada === "círculo") {
            const radio = Math.sqrt(ancho ** 2 + alto ** 2) / 2;
            ctx.arc(inicioX + ancho / 2, inicioY + alto / 2, radio, 0, Math.PI * 2);
        } else if (formaSeleccionada === "triángulo") {
            ctx.moveTo(inicioX, inicioY + alto);
            ctx.lineTo(inicioX + ancho / 2, inicioY);
            ctx.lineTo(inicioX + ancho, inicioY + alto);
            ctx.closePath();
        }

        ctx.stroke();
        if (document.querySelector(".rellenar-color").checked) {
            ctx.fillStyle = colorSeleccionado;
            ctx.fill();
        }
        return;
    }

    estaDibujando = false;
};


const limpiarCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};


const guardarImagen = () => {
    const link = document.createElement("a");
    link.download = "mi-dibujo.png";
    link.href = canvas.toDataURL();
    link.click();
};


canvas.addEventListener("mousedown", empiezaDibujar);
canvas.addEventListener("mousemove", dibujar);
canvas.addEventListener("mouseup", terminarDibujar);

document.getElementById("borrador").addEventListener("click", alternarBorrador);
document.getElementById("pincel").addEventListener("click", alternarPincel);
document.querySelector(".limpiar-canvas").addEventListener("click", limpiarCanvas);
document.querySelector(".guardar-imagen").addEventListener("click", guardarImagen);

document.querySelector(".slider-tamano").addEventListener("input", (e) => {
    brushSize = e.target.value;
});

document.querySelector(".color-picker").addEventListener("input", (e) => {
    colorSeleccionado = e.target.value;
    if (!modoBorrador) ctx.strokeStyle = colorSeleccionado;
});


document.querySelectorAll(".fila .opciones .opcion").forEach((opcion) => {
    opcion.addEventListener("click", () => {
        const figura = opcion.querySelector("span")?.textContent.toLowerCase();
        formaSeleccionada = ["rectángulo", "círculo", "triángulo"].includes(figura) ? figura : "";
    });
});

document.querySelector(".inicio").addEventListener("click", () => {
    window.location.href = "index.html";
});

const galeria = document.querySelector(".imagenes-guardadas");


canvas.addEventListener("dragover", (e) => {
    e.preventDefault();
    canvas.style.border = "2px dashed #4A98F7";
});

canvas.addEventListener("dragleave", () => {
    canvas.style.border = "none";
});

canvas.addEventListener("drop", (e) => {
    e.preventDefault();
    canvas.style.border = "none";

    const archivo = e.dataTransfer.files[0];
    if (archivo && archivo.type.startsWith("image/")) {
        const lector = new FileReader();
        lector.onload = (evento) => {
            const img = new Image();
            img.src = evento.target.result;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        };
        lector.readAsDataURL(archivo);
    }
});


const guardarEnGaleria = () => {
    const dataURL = canvas.toDataURL();
    const img = document.createElement("img");
    img.src = dataURL;
    galeria.appendChild(img);


    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `dibujo-${Date.now()}.png`;
    link.click();
};


document.querySelector(".guardar-imagen").addEventListener("click", guardarEnGaleria);


const modal = document.querySelector(".modal-imagen");
const modalImg = document.querySelector(".imagen-ampliada");
const cerrarModal = document.querySelector(".cerrar-modal");


galeria.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        modalImg.src = e.target.src;
        modal.style.display = "flex";
    }
});


cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});