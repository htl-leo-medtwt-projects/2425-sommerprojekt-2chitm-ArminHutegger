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

        if (!ware || !ware.name) continue;

        if (ware.name.toLowerCase().includes(suchbegriff.toLowerCase())) {
            WareBuild += "<div class='oShip' onclick=\"saveWare('" + ware.name.replace(/'/g, "\\'") + "')\">";
            WareBuild += "<h2 class='h2Ship'>" + ware.name + "</h2>";
            WareBuild += "<h2>AUEC: " + ware.value_uec + "</h2>";
            WareBuild += "</div>";
        }
    }

    document.getElementById("optWare").innerHTML = WareBuild;
}
function triggerTrade(){
    getBestRoute()
    document.getElementById("rest").remove()
    document.getElementById("tradeScreen").style.zIndex = 1000;
    document.getElementById("tradeScreen").style.opacity = 1;
}
function getBestRoute(){
    let auec = document.getElementById("money").value
    let leastExpensive = locations[0].goods_prices[savedWare]
    let mostExpensive = locations[0].goods_prices[savedWare]


    let start = ""
    let end = ""
    for(let i = 1;i<locations.length;i++){
        if(leastExpensive > locations[i].goods_prices[savedWare]){
            leastExpensive = locations[i].goods_prices[savedWare]
        }
    }
    for(let i = 0;i<locations.length;i++){
        if(locations[i].goods_prices[savedWare] == leastExpensive){
            start = locations[i].name
            console.log(start)
            break
        }
    }
    for(let i = 1;i<locations.length;i++){
        if(mostExpensive < locations[i].goods_prices[savedWare]){
            mostExpensive = locations[i].goods_prices[savedWare]
        }
    }
    for(let i = 0;i<locations.length;i++){
        if(locations[i].goods_prices[savedWare] == mostExpensive){
            end = locations[i].name
            console.log(end)
            break
        }
    }
    let scus = Math.ceil(auec / leastExpensive) ;


    console.log(scus)
    let size
    for(let i = 0;i<scu.length;i++){
        if(savedShip == scu[i].name){
            size = scu[i].cargo_capacity_scu
            break
        }
    }
    if(scus > size){
        scus = size;

    }
    let profit = (mostExpensive -leastExpensive)*scus
    console.log(profit) 
    let tra = document.getElementById("tradeScreen")
    tra.innerHTML += "<div id='route'> <h1>"+start+"</h1><h1>---></h1><h1>"+end+"</h1> </div>"
    tra.innerHTML += "<div id='sName'>Ship: "+savedShip+"</div>"
    tra.innerHTML += "<div id='run'>"+scus+" SCU "+savedWare+" Für: "+profit+" AUEC Profit</div>"
}
function closeConf(){
    location.reload(true);
}
