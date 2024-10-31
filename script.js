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