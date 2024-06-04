// Importer le module fs pour lire les fichiers
const fs = require('fs');

// Lire le fichier JSON
fs.readFile('asso_caritatives.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Erreur de lecture du fichier:", err);
        return;
    }

    // Convertir le contenu JSON en objet JavaScript
    const jsonData = JSON.parse(data);

    // Afficher le contenu sous forme de liste
    function afficherContenuJson(data) {
        if (Array.isArray(data)) {
            data.forEach(item => {
                console.log(item);
            });
        } else if (typeof data === 'object') {
            Object.entries(data).forEach(([key, value]) => {
                console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
            });
        } else {
            console.log(data);
        }
    }

    // Appel de la fonction pour afficher le contenu
    afficherContenuJson(jsonData);
});
