/// <reference path="../data/Ships.js"/>
/// <reference path="../data/wapons.js"/>
/// <reference path="../data/armor.js"/>
/// <reference path="../data/components.js"/>
let swiched = false;
loadMode()
function swich(){
    swiched = true;
    let mode = localStorage.getItem("mode");
    if(mode == "Stanton"){
        localStorage.setItem("mode", "Pyro");
        loadMode()
    }else{
        localStorage.setItem("mode", "Stanton");
        loadMode()
    }
}
function loadMode() {
    try{
        let mode = localStorage.getItem("mode");
        if (mode === "Stanton") {
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode1.jpg")';
            });
            document.documentElement.style.setProperty("--main-color", "#7D9BDB");
            document.documentElement.style.setProperty("--second-main", "#A7B5D2");
            document.documentElement.style.setProperty("--second-main2", "#a7b5d23f");
            document.getElementById("head1").src = "../img/stanton2.jpg";
    
            
    
        } else if (mode === "Pyro") {
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode2.webp")';
            });
            document.documentElement.style.setProperty("--main-color", "#DB5A5A");
            document.documentElement.style.setProperty("--second-main", "#DB8181");
            document.documentElement.style.setProperty("--second-main2", "#db81813b");
            document.getElementById("head1").src = "../img/pyro1.jpeg";
    
            
        }
    }catch{

    }

}
let shipList = "";
let waponsList = "";
let armorList = "";
let componentsList = "";

for (let i = 0; i < ships.length; i++) {
    shipList += "<p class='ergS'>" + ships[i].name + "</p>";
}
for (let i = 0; i < wapons.length; i++) {
    waponsList += "<p class='ergW'>" + wapons[i].name + "</p>";
}
for (let i = 0; i < armor.length; i++) {
    armorList += "<p class='ergA'>" + armor[i].name + "</p>";
}
for (let i = 0; i < components.length; i++) {
    componentsList += "<p class='ergC'>" + components[i].name + "</p>";
}

document.getElementById("ships").innerHTML = shipList;
document.getElementById("wapons").innerHTML = waponsList;
document.getElementById("armor").innerHTML = armorList;
document.getElementById("components").innerHTML = componentsList;
function toogleSearch(){
    shipList = "";
    waponsList = "";
    armorList = "";
    componentsList = "";
    let search = document.getElementById("searchBar").value;
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].name.toLowerCase().includes(search.toLowerCase())){
            shipList += "<p class='ergS'>" + ships[i].name + "</p>";
        }

    }
    for (let i = 0; i < wapons.length; i++) {
        if (wapons[i].name.toLowerCase().includes(search.toLowerCase())){
            waponsList += "<p class='ergW'>" + wapons[i].name + "</p>";
        }

    }
    for (let i = 0; i < armor.length; i++) {
        if (armor[i].name.toLowerCase().includes(search.toLowerCase())){
            armorList += "<p class='ergA'>" + armor[i].name + "</p>";
        }

    }
    for (let i = 0; i < components.length; i++) {
        if (components[i].name.toLowerCase().includes(search.toLowerCase())){
            componentsList += "<p class='ergC'>" + components[i].name + "</p>";
        }

    }
    
    document.getElementById("ships").innerHTML = shipList;
    document.getElementById("wapons").innerHTML = waponsList;
    document.getElementById("armor").innerHTML = armorList;
    document.getElementById("components").innerHTML = componentsList;
}