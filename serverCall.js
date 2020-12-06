const { Server } = require("battle-wrapper");

let fetchRepoDiv = document.querySelector('.multiFetch')
		
fetch('https://api.battlemetrics.com/servers/2272069')
fetch('https://api.battlemetrics.com/servers/2272069?include=player')
.then(response => {
    if (response.ok){
        return response.json()
    } else {
        return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
    }
})
.then(data => serverContent(data));

function serverContent (serverData) {
    //console.log(serverData)
    document.querySelector('.bmData').innerHTML = serverData.data.attributes.name + " " + serverData.data.attributes.details.map
}

function bmWrapper() {
    //Server.GetServerPlayerCount(2272069).then((result) => {
    //    console.log(result);
    //});

    Server.GetServerInfoByID(2272069).then((result2) => {
        console.log(result2);
        document.querySelector('.bmWrapper').innerHTML = JSON.stringify(result2);
    });
}
bmWrapper();
