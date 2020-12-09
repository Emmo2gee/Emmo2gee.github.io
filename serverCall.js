const { Server } = require("battle-wrapper");

let fetchContainer = document.querySelector('.bmData');
let wrapperContainer = document.querySelector('.bmWrapper');
		
fetch('https://api.battlemetrics.com/servers/2272069?include=player')
.then(response => {
    if (response.ok){
        return response.json();
    } else {
        return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
    }
})
.then(data => serverContent(data));

function serverContent (serverData) {
	let playerList = serverData.included;
    let ul = document.createElement('ul');
    
    playerList.forEach(player =>{
        let li = document.createElement('li');
        li.innerHTML = player.attributes.name;
        ul.append(li);
        fetchContainer.append(ul);
    })
	
    console.log(serverData);
}

function bmWrapper() {
    //Server.GetServerPlayerCount(2272069).then((result) => {
    //    console.log(result);
    //});

    Server.GetServerInfoById(2272069).then((result2) => {
        console.log(result2);
        wrapperContainer.innerHTML = JSON.stringify(result2);
    });
}
bmWrapper();
