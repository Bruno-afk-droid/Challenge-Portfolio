
        
let persoon = {
    voornaam : prompt("Wat is je naam?"),
    leeftijd : prompt("Wat is je leeftijd")
};


let menu = {
    about : "menu-item",
    projects : "menu-item",
    interests : "menu-item",
    contact: "menu-item",
    
    select(S) {
    this.about="menu-item";
    this.projects="menu-item";
    this.interests="menu-item";
    this.contact="menu-item";
    
    if(S="about")this.about="menu-item-selected";
    if(S="projects")this.about="menu-item-selected";
    if(S="interests")this.about="menu-item-selected";
    if(S="contact")this.about="menu-item-selected";
    }

    
};

function action(){
if(persoon.leeftijd>=18)this.document.getElementById("Welkom").style.backgroundColor = "green";
if(persoon.leeftijd<=18)this.document.getElementById("Welkom").style.backgroundColor = "red";
}



