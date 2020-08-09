
  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

	const ul = document.getElementById('serverdata');
	const url = 'https://api.battlemetrics.com/servers/2272069';
	
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let serverdata = data.results;
    return serverdata.map(function(server) {
      let li = createNode('li'),
          span = createNode('span');
      span.innerHTML = `${server.name} ${server.ip}`;
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  }); 