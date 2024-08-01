function getJuegos() {
    const respuesta = fetch(`https://api.rawg.io/api/games?key=c7380cc5465a463e846362ecf75bdebc`);

    respuesta
        .then(response => response.json())
        .then(response => renderJuegos(response.results))
        .catch(error => console.error('Error:', error));
}

function renderJuegos(juegos) {
    let rows = '';
    for (let juego of juegos) {
        rows += `
        <tr>
            <td>${juego.name}</td>
            <td>${juego.platforms.map(platform => platform.platform.name).join(', ')}</td>
            <td>
                <img src="${juego.background_image}" alt="" class="img-fluid">
            </td>
        </tr>
        `;
    }
    document.querySelector('#juegos').innerHTML = rows;
}


