
async function getServer() {
    let url = 'https://api.battlemetrics.com/servers/2272069';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderServer() {
    let server = await getServer();

    let html = '';
    server.map(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.id} ${user.name}</h2>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.content');
    container.innerHTML = html;
}

renderUsers();