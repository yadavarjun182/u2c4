// write js code here corresponding to favourites.html

var arrofobj = JSON.parse(localStorage.getItem("favourites")) || []

displaydata(arrofobj)
function displaydata(data){

    data.forEach(function(element){
        
        var tr = document.createElement("tr");

        var td1=document.createElement("td")
        td1.innerText=element.match_no;

        
        var td2 =document.createElement("td")
        td2.innerText=element.teama;

        
        var td3=document.createElement("td")
        td3.innerText=element.teamb;

        
        var td4=document.createElement("td")
        td4.innerText=element.date;

        var td5=document.createElement("td")
        td5.innerText=element.venue;

        var td6=document.createElement("td")
        td6.innerText="Delete";
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deletingfunc(element,Index)
        })


    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);
    });
  }

  function deletingfunc(element){
      arrofobj.splace(element,Index)
   
    localStorage.removeItem(element)
}