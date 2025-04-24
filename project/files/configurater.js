/// <reference path="../data/schipConf.js"/>
/// <reference path="../data/powerPlants.js"/>

let shipListElement = document.getElementById("shipList");
let shipBuild = "";
for (let i = 0; i < ships.length; i++) {
    shipBuild += "<h3 onclick='selectShip("+i+")' class='shipInList'>" + ships[i].name + "</h3>";
}

shipListElement.innerHTML = shipBuild;

function search(){
    shipBuild = ""
    shipListElement.innerHTML = "";
    let inputed;
    inputed = document.getElementById("searchShip").value
    for (let i = 0; i < ships.length; i++) {
        if(ships[i].name.toLowerCase().includes(inputed)){
            shipBuild += "<h3 onclick='selectShip("+i+")' class='shipInList'>" + ships[i].name + "</h3>";
        }
        
    }
    
    shipListElement.innerHTML = shipBuild;
}
function selectShip(shipId){
    let power_plantMenge =ships[shipId].power_plant.quantity
    let power_plantSize =ships[shipId].power_plant.size
    let coolersMenge =ships[shipId].coolers.quantity
    let coolersSize =ships[shipId].coolers.size
    let schildMenge =ships[shipId].shield_generators.quantity
    let schildSize =ships[shipId].shield_generators.size
    let quantum_driveSize = ships[shipId].quantum_drive.size
    let weapons = ships[shipId].weapons
}
console.log(powerPlants)