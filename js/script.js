// Sélection des éléments nécessaires
const timelineItems = document.querySelectorAll('.timeline-item');
const cursor = document.querySelector('.cursor');

// Fonction pour déplacer le curseur
function moveCursor(event) {
    // Supprime l'état actif de tous les points
    timelineItems.forEach(item => item.classList.remove('active'));

    // Active le point cliqué
    const target = event.target;
    target.classList.add('active');

    // Déplace le curseur sur le point actif
    const position = target.offsetLeft + target.offsetWidth / 2;
    cursor.style.left = `${position}px`;
}

// Ajout des événements au clic sur chaque point
timelineItems.forEach(item => {
    item.addEventListener('click', moveCursor);
});
