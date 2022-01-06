var searchDiv = document.createElement("div");
searchDiv.setAttribute("class", "search-container");
var h1 = document.createElement("h1");
h1.innerHTML = "Anime Series";
h1.style.color = "#E50914";
var form = document.createElement("form");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Search..");
input.setAttribute("name", "search");
input.setAttribute("id", "series");
var button = document.createElement("button");
button.setAttribute("class", "btn btn-dark");
button.onclick = function(){go(); return false};
button.innerHTML = "Go";
var clear = document.createElement("button");
clear.innerHTML = "Clear";
clear.setAttribute("class", "btn btn-light");
clear.onclick = function(){clearData();};
form.appendChild(input);
form.appendChild(button);
form.appendChild(clear);

searchDiv.appendChild(form);
document.body.appendChild(searchDiv);
searchDiv.appendChild(h1);


async function go(){
    try{
    console.log(document.getElementById("series").value);
    var seriesName = document.getElementById("series").value;
    var data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${seriesName}`);
    var obj = await data.json();
}catch (error){
    console.log(error);
}

    for(var i=0; i<50; i++){
        var box = document.createElement("div");
        box.setAttribute("class", "flex-box");
        var img = document.createElement("img");
        img.onclick = function (){details();};
        img.src = obj.results[i].image_url;
        img.onmouseover = function (){bigImg(this);};
        img.onmouseout = function (){smallImg(this)};
        img.style.width = "150px";
        img.style.height = "200px";
        img.style.borderRadius = "10px";
        var score = document.createElement("h6"); 
        score.innerHTML = `IMDb Rating:${obj.results[i].score}`;
        var type = document.createElement("h6");
        type.innerHTML = `Type: ${obj.results[i].type}`;
        var startDate = document.createElement("h6");
        startDate.innerHTML = `Start date: ${obj.results[i].start_date.slice(0, 10)}`;
        var endDate = document.createElement("h6");
        endDate.innerHTML = `End date: ${obj.results[i].end_date.slice(0, 10)}`;
        document.getElementById("main").appendChild(box);
        box.appendChild(img);
        box.appendChild(score);
        box.appendChild(type);
        box.appendChild(startDate);
        box.appendChild(endDate);

    }
    console.log(obj.results);
}

function bigImg(x){
    x.style.height = "250px";
    x.style.width = "200px";
}

function smallImg(y){
    y.style.height = "200px";
    y.style.width = "150px";
}