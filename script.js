// script.js

document.addEventListener("DOMContentLoaded", () => {
    const bttButton = document.getElementById('back-to-top');

    if (bttButton) {
        // Mostra il pulsante solo dopo aver scrollato di 300px
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                bttButton.classList.add('visible');
            } else {
                bttButton.classList.remove('visible');
            }
        });

        // Funzione per tornare in cima
        bttButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});