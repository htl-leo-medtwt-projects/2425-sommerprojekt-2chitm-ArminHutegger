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
            document.documentElement.style.setProperty("--main-color", "#7D9BDB");
            document.documentElement.style.setProperty("--second-main", "#A7B5D2");
            document.getElementById("head1").src = "../img/stanton2.jpg";
    
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode1.jpg")';
            });
    
        } else if (mode === "Pyro") {
            document.documentElement.style.setProperty("--main-color", "#DB5A5A");
            document.documentElement.style.setProperty("--second-main", "#DB5A5A");
            document.getElementById("head1").src = "../img/pyro1.jpeg";
    
            Array.from(document.getElementsByClassName("box1")).forEach(element => {
                element.style.backgroundImage = 'url("../img/mode2.webp")';
            });
        }
    }catch{

    }

}