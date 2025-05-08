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
        let mode = localStorage.getItem("mode");
        if (mode === "Stanton") {
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode1.jpg")';
            });
            document.documentElement.style.setProperty("--main-color", "#7D9BDB");
            document.documentElement.style.setProperty("--second-main", "#A7B5D2");
            document.documentElement.style.setProperty("--second-main2", "#a7b5d23f");
            try{
                document.getElementById("head1").src = "../img/stanton2.jpg";
            }catch{

            }
            try{
                let elements = document.querySelectorAll('.inSearch');
                elements.forEach((element) => {
                    element.style.backgroundImage = 'url("../img/inSeachBack.jpg")';
                  });
                document.getElementById("head11").src = "../img/trade1.jpg"
            }catch{

            }
            
            
    
        } else if (mode === "Pyro") {
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode2.webp")';
            });
            document.documentElement.style.setProperty("--main-color", "#DB5A5A");
            document.documentElement.style.setProperty("--second-main", "#DB8181");
            document.documentElement.style.setProperty("--second-main2", "#db81813b");
            try{
                document.getElementById("head1").src = "../img/pyro1.jpeg";
            }catch{

            }
            try{
                document.getElementById("head11").src = "../img/tradeHead.jpg"
                let elements = document.querySelectorAll('.inSearch');
                elements.forEach((element) => {
                    element.style.backgroundImage = 'url("../img/inSearchBack2.jpg")';
                  });
            }catch{
                
            }

    }
}
let shipList = "";
let waponsList = "";
let armorList = "";
let componentsList = "";
try{
    for (let i = 0; i < ships.length; i++) {
        shipList += `<p onclick='startVid( "${ships[i].name}","${ships[i].type}","${ships[i].manufacturer}","${ships[i].role}","${ships[i].max_speed}","${ships[i].cargo_capacity}")' class='ergS'>${ships[i].name}</p>`;
    }
    for (let i = 0; i < wapons.length; i++) {
        waponsList += `<p onclick='startVid( "${wapons[i].name}","${wapons[i].type}","${wapons[i].size}","${wapons[i].manufacturer}","${wapons[i].fire_mode}","${wapons[i].use}")' class='ergW'>${wapons[i].name}</p>`;
    }
    for (let i = 0; i < armor.length; i++) {
        armorList += `<p onclick='startVid( "${armor[i].name}","${armor[i].type}","${armor[i].protection_level}","${armor[i].manufacturer}","${armor[i].classification}","${armor[i].use}")' class='ergA'>${armor[i].name}</p>`;
    }
    for (let i = 0; i < components.length; i++) {
        componentsList += `<p onclick='startVid( "${components[i].name}","${components[i].type}","${components[i].size}","${components[i].manufacturer}","${components[i].grade}","${components[i].special_feature}")' class='ergC'>${components[i].name}</p>`;
    }
}catch{

}

try{
    document.getElementById("ships").innerHTML = shipList;
document.getElementById("wapons").innerHTML = waponsList;
document.getElementById("armor").innerHTML = armorList;
document.getElementById("components").innerHTML = componentsList;
}catch{

}

function toogleSearch(){
    shipList = "";
    waponsList = "";
    armorList = "";
    componentsList = "";
    let search = document.getElementById("searchBar").value;
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].name.toLowerCase().includes(search.toLowerCase())){
            shipList += `<p onclick='startVid( "${ships[i].name}","${ships[i].type}","${ships[i].manufacturer}","${ships[i].role}","${ships[i].max_speed}","${ships[i].cargo_capacity}")' class='ergS'>${ships[i].name}</p>`;

        }

    }
    for (let i = 0; i < wapons.length; i++) {
        if (wapons[i].name.toLowerCase().includes(search.toLowerCase())){
            waponsList += `<p onclick='startVid( "${wapons[i].name}","${wapons[i].type}","${wapons[i].size}","${wapons[i].manufacturer}","${wapons[i].fire_mode}","${wapons[i].use}")' class='ergW'>${wapons[i].name}</p>`;
        }

    }
    for (let i = 0; i < armor.length; i++) {
        if (armor[i].name.toLowerCase().includes(search.toLowerCase())){
            armorList += `<p onclick='startVid( "${armor[i].name}","${armor[i].type}","${armor[i].protection_level}","${armor[i].manufacturer}","${armor[i].classification}","${armor[i].use}")' class='ergA'>${armor[i].name}</p>`;
        }

    }
    for (let i = 0; i < components.length; i++) {
        if (components[i].name.toLowerCase().includes(search.toLowerCase())){
            componentsList += `<p onclick='startVid( "${components[i].name}","${components[i].type}","${components[i].size}","${components[i].manufacturer}","${components[i].grade}","${components[i].special_feature}")' class='ergC'>${components[i].name}</p>`;
        }

    }
    
    document.getElementById("ships").innerHTML = shipList;
    document.getElementById("wapons").innerHTML = waponsList;
    document.getElementById("armor").innerHTML = armorList;
    document.getElementById("components").innerHTML = componentsList;
}
let video = document.getElementById("vid");
function startVid(info1,info2,info3,info4,info5,info5){
    document.getElementById("inf").innerHTML = "<p>"+info1+"</p><p>"+info2+"</p><p>"+info3+"</p><p>"+info4+"</p><p>"+info5+"</p>"
    document.getElementById("itemInfo").style.opacity = 1;
    document.getElementById("itemInfo").style.zIndex = 100;
    document.getElementById("ergebnisse").style.opacity = 0.2;
    video.play()
}
function closeInfo(){
    document.getElementById("itemInfo").style.opacity = 0;
    document.getElementById("itemInfo").style.zIndex = -100;
    document.getElementById("ergebnisse").style.opacity = 1;
}