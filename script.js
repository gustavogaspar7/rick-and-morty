const cardContainer = document.getElementById('card-container');

async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=19');
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
    }
}

function displayCharacters(characters) {
    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Espécie: ${character.species}</p>
            <p>Tipo: ${character.type || 'N/A'}</p>
            <p>Origem: ${character.origin.name}</p>
            <p>Localização: ${character.location.name}</p>
        `;

        cardContainer.appendChild(card);
    });
}

fetchCharacters();