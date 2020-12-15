let fetchContainer = document.querySelector('.bmData');
let wrapperContainer = document.querySelector('.bmWrapper');
let pageTitle = document.querySelector('.pageTitle');
var serverID = "2272069";
		
//fetch('https://api.battlemetrics.com/servers/2272069?include=player')
fetch('https://api.battlemetrics.com/servers/' + serverID + '?include=player')
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
    console.log(serverID);
    
    playerList.forEach(player =>{
        let playerRow = document.createElement('tr');
        let playerCell = document.createElement('td');
        let timePlayedCell = document.createElement('td');
        let updatedAt = player.attributes.updatedAt.replace(/-/g,'/').replace(/Z/g,'').replace(/T/g,' ').slice(0, -4);
        let diff = Math.abs(new Date() - new Date(updatedAt));

        //Amend innerHTML of cells with values
        playerCell.innerHTML = player.attributes.name;
        timePlayedCell.innerHTML = timeConversion(diff);

        //Append table rows and cells together
        playerRow.append(playerCell);
        playerRow.append(timePlayedCell);
        fetchContainer.append(playerRow);
    })
	pageTitle.innerHTML = serverData.data.attributes.name;
}

$(document).ready( function () {
    $('#playerTable').DataTable({
      paging: false,
      scrollY: 400,
  });
 });