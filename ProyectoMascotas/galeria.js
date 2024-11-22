
const galeria = document.querySelector(".galeria-imagenes");


const modal = document.querySelector(".modal-imagen");
const modalImg = document.querySelector(".imagen-ampliada");
const cerrarModal = document.querySelector(".cerrar-modal");
const eliminarImagenBtn = document.querySelector(".eliminar-imagen");
const descargarImagenBtn = document.querySelector(".descargar-imagen");
const cerrarPrevisualizacionBtn = document.querySelector(".cerrar-previsualizacion");


galeria.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        modalImg.src = e.target.src;
        modal.style.display = "flex";
    }
});


cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});


eliminarImagenBtn.addEventListener("click", () => {
    const imgSrc = modalImg.src;
    const imgToDelete = document.querySelector(`img[src="${imgSrc}"]`);
    if (imgToDelete) {
        imgToDelete.remove();
        modal.style.display = "none";
    }
});


descargarImagenBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = modalImg.src;
    link.download = `imagen-${Date.now()}.jpg`;
    link.click();
});


cerrarPrevisualizacionBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
});


const agregarImagenes = () => {
    const imagenes = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
    ];

    imagenes.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        galeria.appendChild(img);
    });
};

window.onload = agregarImagenes;
