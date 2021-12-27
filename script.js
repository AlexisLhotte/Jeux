let tagInputUser = document.querySelector("#inputUser"); 
let tagInfoGame = document.querySelector("#infoGame"); 
let tagbtnSubmit = document.querySelector("#btnSubmit"); 

let nombreMystere = Math.floor(Math.random() * 100) ; 

tagbtnSubmit.addEventListener("click", function(e){
    // le code sera executer quand il a un appui sur le bouton 
    console.log("click sur le bouton"); 
    let inputUser = tagInputUser.value; 
    console.log(inputUser); 

    if (nombreMystere > inputUser) {
        console.log("c'est plus ");
        tagInfoGame.innerHTML = "C'est plus";  
    } 
    else if (nombreMystere < inputUser) {
        console.log("c'est moins"); 
        tagInfoGame.innerHTML = "c'est moins"; 
    }
    else {
        console.log("Bravo, vous avez trouvé le nombre mystère"); 
        tagInfoGame.innerHTML = "Bravo, vous avez trouvé le nombre mystère"; 
    }
}); 

