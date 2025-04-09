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
            document.getElementById("head1").src = "../img/stanton2.jpg";
    
            
    
        } else if (mode === "Pyro") {
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode2.webp")';
            });
            document.documentElement.style.setProperty("--main-color", "#DB5A5A");
            document.documentElement.style.setProperty("--second-main", "#DB5A5A");
            document.getElementById("head1").src = "../img/pyro1.jpeg";
    
            
        }
    }catch{

    }

}
for(let i = 0;i<ships.length;i++){
 console.log(ships[i].name)
}
for(let i = 0;i<wapons.length;i++){
    console.log(wapons[i].name)
}
for(let i = 0;i<armor.length;i++){
    console.log(armor[i].name)
}
for(let i = 0;i<components.length;i++){
    console.log(components[i].name)
}