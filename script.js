document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchGames(query);
});

async function searchGames(query) {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=c7380cc5465a463e846362ecf75bdebc&search=${query}`);
        const data = await response.json();
        displayGames(data.results);
    } catch (error) {
        console.error('Error al buscar juegos:', error);
    }
}

function displayGames(games) {
    const juegosTable = document.getElementById('juegosTable');
    const juegosBody = document.getElementById('juegosBody');
    
    juegosBody.innerHTML = '';

    games.forEach(game => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = game.name;

        const platforms = game.platforms.map(platform => platform.platform.name).join(', ');
        const platformCell = document.createElement('td');
        platformCell.textContent = platforms;

        const coverCell = document.createElement('td');
        if (game.background_image) {
            const coverImage = document.createElement('img');
            coverImage.src = game.background_image;
            coverImage.alt = game.name;
            coverImage.style.width = '100px';
            coverCell.appendChild(coverImage);
        }

        row.appendChild(titleCell);
        row.appendChild(platformCell);
        row.appendChild(coverCell);

        juegosBody.appendChild(row);
    });

    // Mostrar la tabla después de mostrar los resultados
    juegosTable.classList.remove('hidden');
}
