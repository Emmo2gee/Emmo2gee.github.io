(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//const { Server } = require("battle-wrapper");

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
    
    playerList.forEach(player =>{
        let playerRow = document.createElement('tr');
        let playerCell = document.createElement('td');
        let timePlayedCell = document.createElement('td');
        playerCell.innerHTML = player.attributes.name;
        if(player.meta.metadata[2].value == undefined){
            timePlayedCell.innerHTML = "0";
        } else {
        timePlayedCell.innerHTML = player.meta.metadata[2].value;
        }
        playerRow.append(playerCell);
        playerRow.append(timePlayedCell);
        fetchContainer.append(playerRow);
    })
	
    console.log(serverData);
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

},{}]},{},[1]);
