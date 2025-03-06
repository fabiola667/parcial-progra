document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("custom-card").forEach(card => {
        card.addEventListener("cardClick", (event) => {
            alert("Has seleccionado: " + event.detail);
        });
    });
});