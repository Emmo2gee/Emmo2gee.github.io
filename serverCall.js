//const { Server } = require("battle-wrapper");

let fetchContainer = document.querySelector('.bmData');
let wrapperContainer = document.querySelector('.bmWrapper');
let pageTitle = document.querySelector('.pageTitle');
		
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

function serverContent (playerData) {
	let playerList = playerData.included;
    
    playerList.forEach(player =>{
        let playerRow = document.createElement('tr');
        let playerCell = document.createElement('td');
        let timePlayedCell = document.createElement('td');

        playerCell.innerHTML = player.attributes.name;
        if(!player.meta.metadata[2]){
            timePlayedCell.innerHTML = "Just joined!";
        } else {
            timePlayedCell.innerHTML = fancyTimeFormat(player.meta.metadata[2].value);
        }
        playerRow.append(playerCell);
        playerRow.append(timePlayedCell);
        fetchContainer.append(playerRow);
    })
	
    console.log(serverData);
}

function serverContent (serverData) {
    pageTitle.innerHTML = serverData.attributes.name;
}
/*
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
*/

function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}