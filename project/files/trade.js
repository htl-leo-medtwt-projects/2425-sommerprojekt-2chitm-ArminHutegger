/// <reference path="../data/güter.js"/>
/// <reference path="../data/locations.js"/>
/// <reference path="../data/shipsCargoSCU.js"/>
let shipBuild = ""
let savedShip = ""
let savedWare = ""
let allowBoden = false;
let allowRisky = false;
for (let i = 0; i < scu.length; i++) {
    shipBuild += "<div class='oShip'>"
    shipBuild += "<h2 onclick=\"saveShip('" + scu[i].name.replace(/'/g, "\\'") + "')\" class='h2Ship'>" + scu[i].name + "</h2>" +
        "<h2>SCU: " + scu[i].cargo_capacity_scu + "</h2>";
    shipBuild += "</div>"
}
document.getElementById("optShip").innerHTML = shipBuild
function tradeShip() {
    let ship = document.getElementById("inS").value
    let shipBuild = ""
    for (let i = 0; i < scu.length; i++) {
        if (scu[i].name.toLowerCase().includes(ship.toLowerCase())) {
            shipBuild += "<div class='oShip'>"
    shipBuild += "<h2 onclick=\"saveShip('" + scu[i].name.replace(/'/g, "\\'") + "')\" class='h2Ship'>" + scu[i].name + "</h2>" +
        "<h2>SCU: " + scu[i].cargo_capacity_scu + "</h2>";
    shipBuild += "</div>"
        }
    }
    document.getElementById("optShip").innerHTML = shipBuild
}
function saveShip(ship) {
    savedShip = ship
    console.log(savedShip)
    document.getElementById("inS").remove()
    document.getElementById("optShip").remove()
    document.getElementById("shipT").remove()
}
let WareBuild = ""
//teilweise Fremdcode
for (let i = 0; i < güter.length; i++) {
    const ware = güter[i];
    if (!ware || !ware.name) continue;

    WareBuild += "<div class='oShip' onclick=\"saveWare('" + ware.name.replace(/'/g, "\\'") + "')\">";
    WareBuild += "<h2 class='h2Ship'>" + ware.name + "</h2>";
    WareBuild += "<h2>AUEC: " + ware.value_uec + "</h2>";
    WareBuild += "</div>";
}


document.getElementById("optWare").innerHTML = WareBuild
function saveWare(ware) {
    savedWare = ware
    console.log(savedWare)
    document.getElementById("inW").remove()
    document.getElementById("optWare").remove()
    document.getElementById("WareT").remove()
}
function tradeWare() {
    let suchbegriff = document.getElementById("inW").value;
    let WareBuild = "";

    for (let i = 0; i < güter.length; i++) {
        const ware = güter[i];

        if (!ware || !ware.name) continue; // Sicherstellen, dass das Objekt valide ist

        if (ware.name.toLowerCase().includes(suchbegriff.toLowerCase())) {
            WareBuild += "<div class='oShip' onclick=\"saveWare('" + ware.name.replace(/'/g, "\\'") + "')\">";
            WareBuild += "<h2 class='h2Ship'>" + ware.name + "</h2>";
            WareBuild += "<h2>AUEC: " + ware.value_uec + "</h2>";
            WareBuild += "</div>";
        }
    }

    document.getElementById("optWare").innerHTML = WareBuild;
}

