let tagPourcentage = document.querySelector("#pourcentage"); 
let tagMillilitre = document.querySelector("#centilitre"); 
let tagPoids = document.querySelector("#poids");
let tagSex = document.querySelector("#sex"); 
let tagSubmit = document.querySelector("#submit"); 

function tauxAlcoolemique(millilitre, pourcentageAlcool, poids, isMan) {
    let coefficentSex = isMan ? 0.7 : 0.6 ; 
    let tauxAlcool = (millilitre * (pourcentageAlcool / 100 ) * 0.80 ) / ( coefficentSex * poids); 
    return tauxAlcool; 
}


tagSubmit.addEventListener("click", function(e){
    let poids = tagPoids.value; 
    let mililitre = tagMillilitre.value; 
    let pourcentage = tagPourcentage.value; 
    let sex = tagSex.value; 
    let isman = sex === "homme" ? true : false; 

    let taux = tauxAlcoolemique(mililitre, pourcentage, poids, isman); 

    if (taux < 0.20 ) {
        alert("Vous pouvez reprendre la route");
    }
    else if (taux < 0.50) {
        alert ("attention, sur la route, vous etes en desous du taux autorisé "); 
    }
    else if (taux < 0.80) {
        alert("ne prend pas la route, vous etes au dessus du taux autorisé"); 
        
    }
    else if (taux < 1.5) {
        alert("vous avez trop bu, vous avec un taux délitueel"); 
    }
    else if (taux < 2) {
        alert("vous etes toujours debouts ? "); 
    }
    else {
        alert("vous etes dans le coma"); 
    }
    console.log(taux)
})


