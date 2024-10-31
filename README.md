# Devoir Git/Github

Contexte : Développement de Fonctionnalités pour un Site de Prise de Note

Vous êtes chargé d'implémenter de nouvelles fonctionnalités sur un site de prise de note, dont la base de code a été fournie par un développeur. Ce site permet aux utilisateurs de gérer leurs notes de manière intuitive.
Votre objectif est d'enrichir l'expérience utilisateur en réalisant les étapes ci-dessous.

## Version 0.0.1

- Fork ce repository

## Version 0.0.2 
- Modifier la ligne 8 du fichier `index.html` : 
```
<link rel="stylesheet" href="style.css">
```
- Couper le code de la ligne 9 à 37 et le coller dans un nouveau fichier nommé `style.css`
- Supprimer la balise fermante `</style>` du fichier `index.html`
- Sauvegarder l’historique de ces modifications avec git avec le message suivant : "refactor css"

## Version 0.0.3 
- Créer une nouvelle branche `features/add-dynamic-notes`
- Supprimer la ligne 15 à 23 du fichier `index.html`
- Ajouter le code suivant après la balise fermante `</section>`
```
<script src="script.js"></script>
```

- Créer un nouveau fichier `script.js` avec le code suivant : 
```
let notes = [
    "Ranger ma chambre",
    "Faire la vaisselle",
    "Aller à la salle de sport"
]

function displayNotes(array) {
    const infoList = document.getElementById('infoList');
    infoList.innerHTML = '';

    array.forEach(note => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.textContent = note;

    infoList.appendChild(noteDiv);
    });
}

displayNotes(notes);

```

- Sauvegarder l’historique de ces modifications avec git avec le message suivant : "feat : add notes from js"

## Version 0.0.4

- Ajouter ce bout de code en ligne 15 du fichier `index.html` : 
```
<input type="text" id="infoInput" placeholder="Entrez une note" />
<button id="addNote">Ajouter</button>
<button id="deleteAllButton">Supprimer tout</button>
```

- Modifier le fichier `script.js` avec le code suivant :
```
function displayStoredInfos() {
    const infoList = document.getElementById('infoList');
    infoList.innerHTML = '';
    let storedInfos = JSON.parse(localStorage.getItem('infos')) || [];
    storedInfos.forEach(function (info, index) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.textContent = info;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', function () {
            deleteInfo(index);
        });

        noteDiv.appendChild(deleteButton);
        infoList.appendChild(noteDiv);
    });
}

function deleteInfo(index) {
    let storedInfos = JSON.parse(localStorage.getItem('infos')) || [];
    storedInfos.splice(index, 1);
    localStorage.setItem('infos', JSON.stringify(storedInfos));
    displayStoredInfos();
}

displayStoredInfos();

document.getElementById('addNote').addEventListener('click', function () {
    const info = document.getElementById('infoInput').value;
    if (info) {
        let storedInfos = JSON.parse(localStorage.getItem('infos')) || [];
        storedInfos.push(info);
        localStorage.setItem('infos', JSON.stringify(storedInfos));
        document.getElementById('infoInput').value = '';
        displayStoredInfos();
    } else {
        alert('Veuillez entrer une note.');
    }
});

function deleteAllInfos() {
    localStorage.removeItem('infos');
    displayStoredInfos();
}

document.getElementById('deleteAllButton').addEventListener('click', function () {
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes les notes ?')) {
        deleteAllInfos();
        document.getElementById('infoInput').value = '';
    }
});
```

- Sauvegarder l’historique de ces modifications avec git avec le message suivant : "feat : add dynamic notes from js and form input in index"
- Fusionner les modifications de cette branch avec la branch `main`

## Version 0.0.5

- Traduire quelques en anglais dans le fichier `index.html` et modifier la ligne 2 par :
```
<html lang="en">
```
- Sauvegarder l’historique de ces modifications avec git avec le message suivant : "feat : traduct texts to english"

## Version 0.0.4

- Annuler les modifications réalisée et retourner à la version antérieur en gardant dans l'historique la version précédente

## Final

- Réaliser une pull request

## Bonus
- Deployer le site avec Github pages
- Fusionner la branche feature/add-note-to-localstorage-fred et régler les conflits si il y en a
- Proposer une nouvelle fonctionnalité pour améliorer le site
