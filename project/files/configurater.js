/// <reference path="../data/schipConf.js"/>
/// <reference path="../data/powerPlants.js"/>
/// <reference path="../data/waffen.js"/>
/// <reference path="../data/quantumDrives.js"/>
/// <reference path="../data/shilds.js"/>
/// <reference path="../data/coolers.js"/>

let pow = []
let coo = []
let shi = []
let qan = []
let wapo = []
let shipName = "";
let selectCount = 0;

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
    shipName = ships[shipId].name
    let sizeOrder = [];
    let buildConf = "";
    let power_plantMenge =ships[shipId].power_plant.quantity
    let power_plantSize =ships[shipId].power_plant.size
    let coolersMenge =ships[shipId].coolers.quantity
    let coolersSize =ships[shipId].coolers.size
    let schildMenge =ships[shipId].shield_generators.quantity
    let schildSize =ships[shipId].shield_generators.size
    let quantum_driveSize = ships[shipId].quantum_drive.size
    let weapons = ships[shipId].weapons
    for(let i = 0;i<power_plantMenge;i++){
        buildConf += "<div class='p'><h2>Power Plant</h2><p class = 'size'>Size: "+power_plantSize+"</p><div class='power' ></div></div>"
    }
    for(let i = 0;i<coolersMenge;i++){
        buildConf += "<div class='c'><h2>Cooler</h2><p class = 'size'>Size: "+coolersSize+"</p><div class='cooler'></div></div>"
    }
    for(let i = 0;i<schildMenge;i++){
        buildConf += "<div class='s'><h2>Shilds</h2><p class = 'size'>Size: "+schildSize+"</p><div class='shild'></div></div>"
    }
    buildConf += " <div class='q'><h2>Quantum Drive</h2><p class = 'size'>Size: "+quantum_driveSize+"</p><div id='quantum'></div></div>"
    for(let i = 0;i<weapons.length;i++){
        for(let j = 0;j<weapons[i].quantity;j++){
                buildConf += "<div class=w><h2>Wapon</h2><p class = 'size'>Size: "+weapons[i].size+"</p><div class='waffen"+weapons[i].size+"'></div></div>"
                sizeOrder.push(weapons[i].size)
        }

    }
    document.getElementById("partes").innerHTML = buildConf;
    let powers = "";
    for(let i = 0;i<powerPlant.length;i++){
        if(powerPlant[i].size == power_plantSize){
            powers += "<div class='pa' onclick='addP("+i+")'>"+powerPlant[i].name+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Grade:"+powerPlant[i].grade+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PowerGeneration:"+powerPlant[i].maxPowerGeneration+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+powerPlant[i].size+"</div>"
        }

    }
    let element = document.getElementsByClassName("power");
    Array.from(element).forEach((el) => {
        el.innerHTML += powers;
    });
    let cooler = "";
    for(let i = 0;i<coolers.length;i++){
        if(coolers[i].size == coolersSize){
        cooler += "<div class='pa' onclick='addC("+i+")'>"+coolers[i].name+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Grade:"+coolers[i].grade+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp CoolingGeneration:"+coolers[i].coolingGeneration+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+coolers[i].size+"</div>"
    }
    }
    let elementc = document.getElementsByClassName("cooler");
    Array.from(elementc).forEach((el) => {
        el.innerHTML += cooler;
    });
    let shild = "";
    for(let i = 0;i<shilds.length;i++){
        if(shilds[i].size == schildSize){
        shild += "<div class='pa' onclick='addS("+i+")'>"+shilds[i].name+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Grade: "+shilds[i].grade+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PoolHP: "+shilds[i].poolHp+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+coolers[i].size+"</div>"
    }
    }
    let elements = document.getElementsByClassName("shild");
    Array.from(elements).forEach((el) => {
        el.innerHTML += shild;
    });
    let quant = ""; 
    for(let i = 0;i<quantum_drives.length;i++){
        if(quantum_drives[i].size == quantum_driveSize){
        quant += "<div class='pa' onclick='addQ("+i+")'>"+quantum_drives[i].name+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Grade:"+quantum_drives[i].grade+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp MaxSpeed: "+quantum_drives[i].maxSpeed+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+quantum_drives[i].size+"</div>"
    }
    }
    document.getElementById("quantum").innerHTML = quant
    let elemens1 = document.getElementsByClassName("waffen1");
    Array.from(elemens1).forEach((el) => {
        let wap = ""
        for(let i = 0;i<waffen.length;i++){
            if(waffen[i].size == 1){
               wap+="<div class='pa' onclick='addW(" + i + ")'>" + waffen[i].name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Type:"+waffen[i].type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp BurstDps:"+waffen[i].burstDPS+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+waffen[i].size+"</div>"
            }

        }
        el.innerHTML += wap;
    });
    let elemens2 = document.getElementsByClassName("waffen2");
    Array.from(elemens2).forEach((el) => {
        let wap = ""
        for(let i = 0;i<waffen.length;i++){
            if(waffen[i].size == 2){
                 wap+="<div class='pa' onclick='addW(" + i + ")'>" + waffen[i].name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Type:"+waffen[i].type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp BurstDps:"+waffen[i].burstDPS+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+waffen[i].size+"</div>"
            }
        }
        el.innerHTML += wap;
    });
    let elemens3 = document.getElementsByClassName("waffen3");
    Array.from(elemens3).forEach((el) => {
        let wap = ""
        for(let i = 0;i<waffen.length;i++){
            if(waffen[i].size == 3){
                 wap+="<div class='pa' onclick='addW(" + i + ")'>" + waffen[i].name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Type:"+waffen[i].type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp BurstDps:"+waffen[i].burstDPS+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+waffen[i].size+"</div>"
            }
        }
        el.innerHTML += wap;
    });
    let elemens4 = document.getElementsByClassName("waffen4");
    Array.from(elemens4).forEach((el) => {
        let wap = ""
        for(let i = 0;i<waffen.length;i++){
            if(waffen[i].size == 4){
                wap+="<div class='pa' onclick='addW(" + i + ")'>" + waffen[i].name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Type:"+waffen[i].type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp BurstDps:"+waffen[i].burstDPS+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+waffen[i].size+"</div>"
            }
        }
        el.innerHTML += wap;
    });
    let elemens5 = document.getElementsByClassName("waffen5");
    Array.from(elemens5).forEach((el) => {
        let wap = ""
        for(let i = 0;i<waffen.length;i++){
            if(waffen[i].size == 5){
                 wap+="<div class='pa' onclick='addW(" + i + ")'>" + waffen[i].name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Type:"+waffen[i].type+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp BurstDps:"+waffen[i].burstDPS+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Size:"+waffen[i].size+"</div>"
            }
        }
        el.innerHTML += wap;
    });
}
function addP(id){ 
    document.querySelector(".p").remove()   
    pow.push(powerPlant[id])
    console.log(pow)
}
function addC(id){
    document.querySelector(".c").remove()   
    coo.push(coolers[id])
    console.log(coo)
}
function addS(id){
    document.querySelector(".s").remove()   
    shi.push(shilds[id])
    console.log(shi)
}
function addW(id){
    document.querySelector(".w").remove()   
    wapo.push(waffen[id])
    console.log(wapo)
}
function addQ(id){
    document.querySelector(".q").remove()   
    qan.push(quantum_drives[id])
    console.log(qan)
}
function showConf(){
    document.getElementById("configuration").style.opacity = 1
    document.getElementById("configuration").style.zIndex = 100000
    document.getElementById("conf1").innerHTML = ""
    document.getElementById("confName").innerHTML = shipName
    let dps = 0;
    for(let i = 0;i<wapo.length;i++){
        dps += wapo[i].burstDPS;
    }
    let hp = 0;
    let regen = 0;
    for(let i = 0;i<shi.length;i++){
        hp += shi[i].poolHp
        regen += shi[i].regenMax
    }
    let coolingRate = 0;
    for(let i = 0;i<coo.length;i++){
        coolingRate += coo[i].coolingGeneration
    }
    let maxSpeed = 0;
    for(let i = 0;i<qan.length;i++){
        maxSpeed += qan[i].maxSpeed
    }
    let powerPlantGeneration =0
    let powerPlantCooling =0;
    let powerPlantHP =0;
    for(let i = 0;i<pow.length;i++){
        powerPlantGeneration += pow[i].maxPowerGeneration
        powerPlantCooling += pow[i].cooling
        powerPlantHP += pow[i].hp
    }


    document.getElementById("werte").innerHTML = `
    <h2>Burst DPS:${dps}</h2>
    <h2>HP:${hp}</h2>
    <h2>Schild Regen:${regen}</h2>
    <h2>Cool Generation:${coolingRate}</h2>
    <h2>Max QuantumSpeed:${maxSpeed}</h2>
    <h2>Power Generation:${powerPlantGeneration}</h2>
    <h2>Power Plant Cooling Rate:${powerPlantCooling}</h2>
    <h2>Power Plant HP:${powerPlantHP}</h2>
    `
}