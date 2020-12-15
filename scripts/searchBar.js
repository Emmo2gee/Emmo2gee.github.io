
function submitBtn(){
    let idValue = document.querySelector('#serverSearch').value;

    localStorage.setItem("serverID", idValue);
    console.log(idValue);
}