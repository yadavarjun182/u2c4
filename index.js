// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",myfunction)
var matchinfo = JSON.parse(localStorage.getItem("schedule")) || []

function myfunction(){
    event.preventDefault();


var obj={
    match_no : document.querySelector("#matchNum").value,
    teama    : document.querySelector("#teamA").value,
    teamb    : document.querySelector("#teamB").value,
    date    : document.querySelector("#date").value,
    venue    : document.querySelector("#venue").value
}

matchinfo.push(obj);

    localStorage.setItem("schedule",JSON.stringify(matchinfo))
    window.location.href="matches.html";
}