/* Animação para os ícones sociais */

window.addEventListener("load", () => {
    const icons = document.querySelectorAll(".social-links a");

    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add("show");
        }, index * 200);
    });
});
